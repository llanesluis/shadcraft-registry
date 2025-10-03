"use client";

import {
  Check,
  ChevronRight,
  Clipboard,
  Code,
  Eye,
  File,
  FileIcon,
  Folder,
  Fullscreen,
  Monitor,
  RotateCw,
  Smartphone,
  Tablet,
  TabletSmartphone,
  Terminal,
  X,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { ImperativePanelHandle } from "react-resizable-panels";
import { type RegistryItem } from "shadcn/schema";

import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { useIsMobile } from "@/hooks/use-mobile";
import { createFileTreeForRegistryItemFiles, FileTree, RegistryItemFile } from "@/lib/registry";
import { cn } from "@/lib/utils";
import { formatComponentName } from "@/utils/registry";
import { CodeBlock } from "./code-block";

const REGISTRY_URL = process.env.NEXT_PUBLIC_REGISTRY_URL;

type BlockViewerContext = {
  item: RegistryItem;
  view: "code" | "preview";
  setView: (view: "code" | "preview") => void;
  resizablePanelRef: React.RefObject<ImperativePanelHandle | null> | null;
  iframeKey?: number;
  setIframeKey?: React.Dispatch<React.SetStateAction<number>>;
  panelSize: number;
  setPanelSize: React.Dispatch<React.SetStateAction<number>>;
  activeFile: string | null;
  setActiveFile: (file: string) => void;
  tree: ReturnType<typeof createFileTreeForRegistryItemFiles> | null;
  files:
    | (RegistryItemFile & {
        content: string;
      })[]
    | null;
};

const BlockViewerContext = React.createContext<BlockViewerContext | null>(null);

function useBlockViewer() {
  const context = React.useContext(BlockViewerContext);
  if (!context) {
    throw new Error("useBlockViewer must be used within a BlockViewerProvider.");
  }
  return context;
}

function BlockViewerProvider({
  item,
  tree,
  files,
  children,
}: Pick<BlockViewerContext, "item" | "tree" | "files"> & {
  children: React.ReactNode;
}) {
  const [view, setView] = React.useState<BlockViewerContext["view"]>("preview");
  const [activeFile, setActiveFile] = React.useState<BlockViewerContext["activeFile"]>(
    files?.[0].target ?? null
  );
  const resizablePanelRef = React.useRef<ImperativePanelHandle>(null);
  const [iframeKey, setIframeKey] = React.useState(0);
  const [panelSize, setPanelSize] = React.useState<number>(100);

  return (
    <BlockViewerContext.Provider
      value={{
        item,
        view,
        setView,
        resizablePanelRef,
        iframeKey,
        setIframeKey,
        panelSize,
        setPanelSize,
        activeFile,
        setActiveFile,
        tree,
        files,
      }}
    >
      <div
        id={item.name}
        data-view={view}
        className="group/block-view-wrapper flex min-w-0 scroll-mt-24 flex-col items-stretch gap-4 overflow-hidden"
        style={
          {
            "--height": item.meta?.iframeHeight ?? "800px",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </BlockViewerContext.Provider>
  );
}

function BlockViewerToolbar() {
  const { setView, view, item, resizablePanelRef, setIframeKey, panelSize, setPanelSize } =
    useBlockViewer();
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  const currentBreakpointPreset: "100" | "60" | "30" | "" = React.useMemo(() => {
    const rounded = Math.round(panelSize);
    if (rounded === 100) return "100";
    if (rounded === 60) return "60";
    if (rounded === 30) return "30";
    return "";
  }, [panelSize]);

  return (
    <div className="flex h-10 w-full items-center gap-2">
      <Tabs
        value={view}
        onValueChange={(value) => setView(value as "preview" | "code")}
        className="shrink-0"
      >
        <TabsList className="grid h-8 grid-cols-2 items-center rounded-md p-1 *:data-[slot=tabs-trigger]:h-6 *:data-[slot=tabs-trigger]:rounded-sm *:data-[slot=tabs-trigger]:px-2 *:data-[slot=tabs-trigger]:text-xs">
          <TabsTrigger value="preview">
            <Eye className="size-3.5" />
            <span className="max-md:sr-only">Preview</span>
          </TabsTrigger>
          <TabsTrigger value="code">
            <Code className="size-3.5" />
            <span className="max-md:sr-only">Code</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Separator orientation="vertical" className="!h-4" />
      <a
        href={`#${item.name}`}
        className="group/anchor inline-flex flex-1 flex-col text-sm font-medium md:flex-auto"
      >
        <span className="flex items-center gap-1 underline-offset-2 group-hover/anchor:underline">
          {formatComponentName(item.name)}
        </span>

        <span className="text-muted-foreground line-clamp-1 text-xs">
          {item.description?.replace(/\.$/, "")}
        </span>
      </a>
      <div className="ml-auto flex items-center gap-2">
        <div className="hidden items-center gap-2 shadow-none lg:flex">
          <ToggleGroup
            type="single"
            value={currentBreakpointPreset}
            onValueChange={(value) => {
              if (!value) return; // allow deselection when dragging off-preset
              setView("preview");
              const target = parseInt(value);
              setPanelSize(target);
              resizablePanelRef?.current?.resize(target);
            }}
            className="gap-0.5 border p-0.5 *:data-[slot=toggle-group-item]:!size-7 *:data-[slot=toggle-group-item]:!rounded-sm"
          >
            <ToggleGroupItem value="100" title="Desktop" className="cursor-pointer">
              <Monitor />
            </ToggleGroupItem>
            <ToggleGroupItem value="60" title="Tablet" className="cursor-pointer">
              <Tablet />
            </ToggleGroupItem>
            <ToggleGroupItem value="30" title="Mobile" className="cursor-pointer">
              <Smartphone />
            </ToggleGroupItem>
          </ToggleGroup>

          <Separator orientation="vertical" className="!h-4" />

          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant="outline"
              className="size-8 rounded-sm p-0"
              asChild
              title="Open in New Tab"
            >
              <Link href={`/view/${item.name}`} target="_blank">
                <span className="sr-only">Open in New Tab</span>
                <Fullscreen />
              </Link>
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="size-8 rounded-sm p-0"
              title="Refresh Preview"
              onClick={() => {
                if (setIframeKey) {
                  setIframeKey((k) => k + 1);
                }
              }}
            >
              <RotateCw />
              <span className="sr-only">Refresh Preview</span>
            </Button>
          </div>
        </div>
        <Separator orientation="vertical" className="hidden !h-4 lg:block" />
        <Button
          variant="outline"
          className="h-8 gap-1 px-2 font-mono text-xs shadow-none"
          onClick={() => {
            copyToClipboard(`npx shadcn@latest add ${REGISTRY_URL}/${item.name}.json`);
          }}
          title="Copy CLI Command"
        >
          {isCopied ? <Check /> : <Terminal />}
          <span>{item.name}</span>
        </Button>
      </div>
    </div>
  );
}

function BlockViewerIframe({ className }: { className?: string }) {
  const { item, iframeKey } = useBlockViewer();

  return (
    <iframe
      key={iframeKey}
      src={`/view/${item.name}`}
      height={item.meta?.iframeHeight ?? 800}
      loading="lazy"
      className={cn("bg-background no-scrollbar relative z-20 size-full", className)}
    />
  );
}

function BlockViewerView() {
  const isMobile = useIsMobile();
  const { resizablePanelRef, setPanelSize } = useBlockViewer();

  React.useEffect(() => {
    if (isMobile) {
      resizablePanelRef?.current?.resize(100);
    }
  }, [isMobile, resizablePanelRef]);

  return (
    <div className="flex size-full group-data-[view=code]/block-view-wrapper:hidden">
      <div className="relative grid w-full gap-4">
        {/* Background of the preview area */}
        <div className="absolute inset-0 right-3 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

        <ResizablePanelGroup
          direction="horizontal"
          className="bg-muted/50 rounded-lg border md:rounded-xl"
        >
          <ResizablePanel
            ref={resizablePanelRef}
            className="relative overflow-hidden rounded-lg border-r sm:min-w-[320px] md:rounded-xl"
            defaultSize={100}
            minSize={30}
            onResize={(size: number) => {
              setPanelSize(size);
            }}
          >
            <BlockViewerIframe />
          </ResizablePanel>
          <ResizableHandle className="after:bg-border active:after:bg-muted-foreground hover:after:bg-muted-foreground relative hidden w-3 bg-transparent p-0 after:absolute after:top-1/2 after:left-1/2 after:h-12 after:w-2 after:-translate-y-1/2 after:rounded-full after:transition-all active:after:h-20 active:after:w-1 md:block" />

          <ResizablePanel defaultSize={0} minSize={0} />
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

function BlockViewerCode() {
  const { activeFile, files } = useBlockViewer();
  const file = React.useMemo(() => {
    return files?.find((file) => file.target === activeFile);
  }, [files, activeFile]);

  const isMobile = useIsMobile();
  const [showCodePanelOverlay, setShowCodePanelOverlay] = React.useState(false);

  React.useEffect(() => {
    if (isMobile) {
      setShowCodePanelOverlay(true);
    } else {
      setShowCodePanelOverlay(false);
    }
  }, [isMobile]);

  if (!file) {
    return null;
  }

  const language = file.path.split(".").pop() ?? "tsx";

  return (
    <div className="isolate flex size-full group-data-[view=preview]/block-view-wrapper:hidden">
      <div className="bg-code text-code-foreground relative flex size-full content-center overflow-hidden rounded-lg border text-center md:rounded-xl">
        {showCodePanelOverlay && (
          <div className="bg-code/25 absolute inset-0 z-10 backdrop-blur-sm">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 size-7"
              onClick={() => setShowCodePanelOverlay(false)}
            >
              <X className="size-4" />
            </Button>

            <div className="flex size-full flex-col items-center justify-center gap-4 p-4">
              <TabletSmartphone className="size-8" />
              <span className="max-w-[30ch] font-mono text-sm text-balance">
                Code preview is not fully supported on mobile yet.
              </span>
            </div>
          </div>
        )}

        <BlockViewerFileTreeSidebar />

        <figure
          data-rehype-pretty-code-figure=""
          className="!m-0 flex size-full min-w-0 flex-col overflow-hidden rounded-xl border-none"
        >
          <figcaption
            className="text-code-foreground [&_svg]:text-code-foreground flex h-12 shrink-0 items-center gap-2 border-b px-4 py-2 [&_svg]:size-4 [&_svg]:opacity-70"
            data-language={language}
          >
            <FileIcon className="size-4 shrink-0" />
            <span className="line-clamp-1 text-sm font-medium">{file.target}</span>
            <div className="ml-auto flex items-center gap-2">
              <BlockCopyCodeButton />
            </div>
          </figcaption>

          <CodeBlock
            showLineNumbers
            code={file?.content}
            language={language}
            className="scrollbar-thin overflow-auto"
          />
        </figure>
      </div>
    </div>
  );
}

export function BlockViewerFileTreeSidebar() {
  const { tree } = useBlockViewer();

  if (!tree || tree.length === 0) {
    return null;
  }

  return (
    <SidebarProvider className="flex !min-h-full w-72">
      <Sidebar collapsible="none" className="isolate border-r">
        <SidebarContent>
          <div className="h-12 content-center border-b px-4 py-2 text-left">
            <span className="text-muted-foreground line-clamp-1 text-sm font-medium">Files</span>
          </div>
          <SidebarGroup className="p-0">
            <SidebarGroupContent>
              <SidebarMenu className="translate-x-0 gap-1.5">
                {tree.map((file, index) => (
                  <Tree key={index} item={file} index={1} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}

function Tree({ item, index }: { item: FileTree; index: number }) {
  const { activeFile, setActiveFile } = useBlockViewer();

  if (!item.children) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          isActive={item.path === activeFile}
          onClick={() => item.path && setActiveFile(item.path)}
          className="hover:bg-muted-foreground/15 focus:bg-muted-foreground/15 focus-visible:bg-muted-foreground/15 active:bg-muted-foreground/15 data-[active=true]:bg-muted-foreground/15 rounded-none pl-(--index) whitespace-nowrap"
          data-index={index}
          style={
            {
              "--index": `${index * (index === 2 ? 1.2 : 1.3)}rem`,
            } as React.CSSProperties
          }
        >
          <ChevronRight className="invisible" />
          <File className="size-4" />
          <span className="line-clamp-1">{item.name}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            className="hover:bg-muted-foreground/15 focus:bg-muted-foreground/15 focus-visible:bg-muted-foreground/15 active:bg-muted-foreground/15 data-[active=true]:bg-muted-foreground/15 rounded-none pl-(--index) whitespace-nowrap"
            style={
              {
                "--index": `${index * (index === 1 ? 1 : 1.2)}rem`,
              } as React.CSSProperties
            }
          >
            <ChevronRight className="transition-transform" />
            <Folder />
            {item.name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className="m-0 w-full translate-x-0 border-none p-0">
            {item.children.map((subItem, key) => (
              <Tree key={key} item={subItem} index={index + 1} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}

function BlockCopyCodeButton() {
  const { activeFile, item } = useBlockViewer();
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  const file = React.useMemo(() => {
    return item.files?.find((file) => file.target === activeFile);
  }, [activeFile, item.files]);

  const content = file?.content;

  if (!content) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-7"
      onClick={() => {
        copyToClipboard(content);
      }}
    >
      {isCopied ? <Check /> : <Clipboard />}
    </Button>
  );
}

function BlockViewer({
  item,
  tree,
  files,
  ...props
}: Pick<BlockViewerContext, "item" | "tree" | "files">) {
  return (
    <BlockViewerProvider item={item} tree={tree} files={files} {...props}>
      <BlockViewerToolbar />

      <div className="isolate aspect-square overflow-hidden md:aspect-auto md:h-(--height)">
        <BlockViewerView />
        <BlockViewerCode />
      </div>
    </BlockViewerProvider>
  );
}

export { BlockViewer };
