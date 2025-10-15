import fs from "fs/promises";
import { tmpdir } from "os";
import path from "path";
import { registryItemSchema, type Registry, type RegistryItem } from "shadcn/schema";
import { Project, ScriptKind } from "ts-morph";

import { registry } from "@/registry";
import { Index } from "@/registry/__index__";

export type RegistryItemFile = NonNullable<RegistryItem["files"]>[number];

export function getRegistryItems(): Registry["items"] {
  // Exclude style item as it's not relevant to show in the UI
  return registry.items.filter((item) => item.type !== "registry:style");
}

export function getUiItems() {
  return getRegistryItems().filter((item) => item.type === "registry:ui");
}

export function getComponentItems() {
  return getRegistryItems().filter((item) => item.type === "registry:component");
}

export function getBlockItems() {
  return getRegistryItems().filter((item) => item.type === "registry:block");
}

export function getBlocksByCategories(categories: string[]) {
  return getRegistryItems().filter((item) => {
    const matchesCategories = item.categories?.some((category) => categories.includes(category));
    return item.type === "registry:block" && matchesCategories;
  });
}

export function getTemplateItems() {
  return getRegistryItems().filter(
    (item) => item.type === "registry:block" && !!item.meta?.template
  );
}

export function getRegistryRenderComponent(name: string) {
  return Index[name]?.component;
}

export async function getRegistryItem(name: string): Promise<RegistryItem | null> {
  const item = Index[name];
  console.log(item);
  if (!item) return null;

  // Convert all file paths to object (pre-parse), without mutating typed data.
  const candidate = {
    ...item,
    files: Array.isArray(item.files)
      ? item.files.map((file: unknown) => (typeof file === "string" ? { path: file } : file))
      : item.files,
  };

  // Validate shape and get typed files
  const result = registryItemSchema.safeParse(candidate);
  if (!result.success) {
    return null;
  }

  const inputFiles: RegistryItemFile[] = (result.data.files ?? []) as RegistryItemFile[];
  const files: RegistryItemFile[] = [];
  for (const file of inputFiles) {
    const content = await getFileContent(file);
    const relativePath = path.relative(process.cwd(), file.path);

    files.push({
      ...file,
      path: relativePath,
      content,
    } as RegistryItemFile);
  }

  // Fix file paths.
  const fixedFiles = fixFilePaths(files);

  const parsed = registryItemSchema.safeParse({
    ...result.data,
    files: fixedFiles,
  });

  if (!parsed.success) {
    console.error(parsed.error.message);
    return null;
  }

  return parsed.data;
}

async function getFileContent(file: RegistryItemFile) {
  const raw = await fs.readFile(file.path, "utf-8");

  const project = new Project({
    compilerOptions: {},
  });

  const tempFile = await createTempSourceFile(file.path);
  const sourceFile = project.createSourceFile(tempFile, raw, {
    scriptKind: ScriptKind.TSX,
  });

  let code = sourceFile.getFullText();

  // Some registry items uses default export.
  // We want to use named export instead.
  if (file.type !== "registry:page") {
    code = code.replaceAll("export default", "export");
  }

  // Fix imports.
  code = fixImport(code);

  return code;
}

function getFileTarget(file: RegistryItemFile) {
  let target = file.target;

  if (!target || target === "") {
    // Normalize path separators to forward slashes for cross-platform compatibility
    const normalizedPath = file.path.replace(/\\/g, "/");
    const fileName = normalizedPath.split("/").pop();
    if (
      file.type === "registry:block" ||
      file.type === "registry:component" ||
      file.type === "registry:example"
    ) {
      target = `components/${fileName}`;
    }

    if (file.type === "registry:ui") {
      target = `components/ui/${fileName}`;
    }

    if (file.type === "registry:hook") {
      target = `hooks/${fileName}`;
    }

    if (file.type === "registry:lib") {
      target = `lib/${fileName}`;
    }
  }

  return target ?? "";
}

async function createTempSourceFile(filename: string) {
  const dir = await fs.mkdtemp(path.join(tmpdir(), "shadcn-"));
  return path.join(dir, filename);
}

function fixFilePaths(files: RegistryItemFile[]) {
  if (files.length === 0) {
    return [] as RegistryItemFile[];
  }

  // Resolve all paths relative to the first file's directory.
  const firstFilePath = files[0].path;
  const firstFilePathDir = path.dirname(firstFilePath);

  return files.map((file: RegistryItemFile) => {
    return {
      ...file,
      path: path.relative(firstFilePathDir, file.path),
      target: getFileTarget(file),
    } as RegistryItemFile;
  });
}

export function fixImport(content: string) {
  const regex = /@\/(.+?)\/((?:.*?\/)?(?:components|ui|hooks|lib))\/([\w-]+)/g;

  const replacement = (match: string, _path: string, type: string, component: string) => {
    if (type.endsWith("components")) {
      return `@/components/${component}`;
    } else if (type.endsWith("ui")) {
      return `@/components/ui/${component}`;
    } else if (type.endsWith("hooks")) {
      return `@/hooks/${component}`;
    } else if (type.endsWith("lib")) {
      return `@/lib/${component}`;
    }

    return match;
  };

  return content.replace(regex, replacement);
}

export type FileTree = {
  name: string;
  path?: string;
  children?: FileTree[];
};

export function createFileTreeForRegistryItemFiles(
  files: Array<{ path: string; target?: string }>
) {
  const root: FileTree[] = [];

  for (const file of files) {
    const path = file.target ?? file.path;
    const parts = path.split("/");
    let currentLevel = root;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const isFile = i === parts.length - 1;
      const existingNode = currentLevel.find((node) => node.name === part);

      if (existingNode) {
        if (isFile) {
          // Update existing file node with full path
          existingNode.path = path;
        } else {
          // Move to next level in the tree
          currentLevel = existingNode.children!;
        }
      } else {
        const newNode: FileTree = isFile ? { name: part, path } : { name: part, children: [] };

        currentLevel.push(newNode);

        if (!isFile) {
          currentLevel = newNode.children!;
        }
      }
    }
  }

  return root;
}
