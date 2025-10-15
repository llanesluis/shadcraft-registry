"use client";

import {
  Check,
  ChevronRight,
  Clipboard,
  Code,
  Copy,
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
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { ImperativePanelHandle } from "react-resizable-panels";
import { type RegistryItem } from "shadcn/schema";

import { CodeBlock } from "@/components/code-block";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
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
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { useIsMobile } from "@/hooks/use-mobile";
import { createFileTreeForRegistryItemFiles, FileTree, RegistryItemFile } from "@/lib/registry";
import { cn } from "@/lib/utils";
import { formatComponentName } from "@/utils/registry";

const REGISTRY_URL = process.env.NEXT_PUBLIC_REGISTRY_URL;

type DemoViewerContext = {
  item: RegistryItem;
  view: "code" | "preview";
  setView: React.Dispatch<React.SetStateAction<"code" | "preview">>;
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

const DemoViewerContext = React.createContext<DemoViewerContext | null>(null);

function useDemoViewer() {
  const context = React.useContext(DemoViewerContext);
  if (!context) {
    throw new Error("useDemoViewer must be used within a DemoViewerProvider.");
  }
  return context;
}

function DemoViewerProvider({
  item,
  tree,
  files,
  children,
}: Pick<DemoViewerContext, "item" | "tree" | "files"> & {
  children: React.ReactNode;
}) {
  const [view, setView] = React.useState<DemoViewerContext["view"]>("preview");
  const [activeFile, setActiveFile] = React.useState<DemoViewerContext["activeFile"]>(
    files?.[0].target ?? null
  );
  const resizablePanelRef = React.useRef<ImperativePanelHandle>(null);
  const [iframeKey, setIframeKey] = React.useState(0);
  const [panelSize, setPanelSize] = React.useState<number>(100);

  return (
    <DemoViewerContext.Provider
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
        className="group/demo-view-wrapper flex min-w-0 scroll-mt-24 flex-col items-stretch gap-2 overflow-hidden"
        style={
          {
            "--height": item.meta?.iframeHeight ?? "800px", // Not using this for now
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </DemoViewerContext.Provider>
  );
}

function DemoViewerHeader() {
  const { item } = useDemoViewer();
  return (
    <header data-slot="demo-viewer-header">
      <a
        href={`#${item.name}`}
        className="group/anchor inline-flex flex-1 flex-col font-medium md:flex-auto"
      >
        <h3 className="flex items-center gap-1 text-base underline-offset-2 group-hover/anchor:underline md:text-lg">
          {item.title || formatComponentName(item.name)}
        </h3>

        {item.description && (
          <span className="text-muted-foreground line-clamp-1 text-xs md:text-sm">
            {item.description.replace(/\.$/, "")}
          </span>
        )}
      </a>
    </header>
  );
}

function DemoViewerToolbar() {
  const { setView, view, item, resizablePanelRef, setIframeKey, setPanelSize } = useDemoViewer();
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  const handleResizeBreakpoint = (size: number) => {
    setView("preview");
    setPanelSize(size);
    resizablePanelRef?.current?.resize(size);
  };

  let url = `/view/${item.name}`;

  // TODO: Solve this with middleware?
  if (item.type === "registry:ui" || item.type === "registry:component") {
    url = `/view/${item.name}-example`;
  }

  return (
    <div className="flex w-full items-center gap-2">
      <Tabs
        value={view}
        onValueChange={(value) => setView(value as "preview" | "code")}
        className="shrink-0"
      >
        <TabsList className="grid h-8 grid-cols-2 items-center rounded-md p-1 *:data-[slot=tabs-trigger]:h-6 *:data-[slot=tabs-trigger]:rounded-sm *:data-[slot=tabs-trigger]:px-2 *:data-[slot=tabs-trigger]:text-xs">
          <TabsTrigger value="preview" className="cursor-pointer">
            <Eye className="size-3.5" />
            <span className="max-md:sr-only">Preview</span>
          </TabsTrigger>
          <TabsTrigger value="code" className="cursor-pointer">
            <Code className="size-3.5" />
            <span className="max-md:sr-only">Code</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="ml-auto flex items-center gap-2">
        <ButtonGroup>
          <ButtonGroup>
            <Button
              variant="outline"
              size="icon-sm"
              title="Refresh Preview"
              onClick={() => setIframeKey?.((k) => k + 1)}
              className="cursor-pointer"
            >
              <RotateCw />
              <span className="sr-only">Refresh Preview</span>
            </Button>
          </ButtonGroup>

          <ButtonGroup className="hidden lg:flex">
            <Button
              variant="outline"
              size="icon-sm"
              onClick={() => handleResizeBreakpoint(100)}
              className="cursor-pointer"
            >
              <Monitor />
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              onClick={() => handleResizeBreakpoint(60)}
              className="cursor-pointer"
            >
              <Tablet />
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              onClick={() => handleResizeBreakpoint(30)}
              className="cursor-pointer"
            >
              <Smartphone />
            </Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button
              variant="outline"
              size="icon-sm"
              asChild
              title="Open in New Tab"
              className="cursor-pointer"
            >
              <Link href={url} target="_blank">
                <span className="sr-only">Open in New Tab</span>
                <Fullscreen />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="cursor-pointer font-mono text-xs"
              onClick={() => {
                copyToClipboard(`npx shadcn@latest add ${REGISTRY_URL}/${item.name}.json`);
              }}
              title="Copy CLI Command"
            >
              {isCopied ? <Check /> : <Copy />}
              <span>{item.name}</span>
            </Button>
          </ButtonGroup>
        </ButtonGroup>
      </div>
    </div>
  );
}

function DemoViewerIframe({ className }: { className?: string }) {
  const { item, iframeKey } = useDemoViewer();

  let url = `/view/${item.name}`;

  // TODO: Solve this with middleware?
  if (item.type === "registry:ui" || item.type === "registry:component") {
    url = `/view/${item.name}-example`;
  }

  return (
    <iframe
      key={iframeKey}
      src={url}
      height={item.meta?.iframeHeight ?? 800}
      loading="lazy"
      className={cn("bg-background no-scrollbar relative z-20 size-full", className)}
    />
  );
}

function DemoViewerPreview({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const { resizablePanelRef, setPanelSize } = useDemoViewer();

  React.useEffect(() => {
    if (isMobile) {
      resizablePanelRef?.current?.resize(100);
    }
  }, [isMobile, resizablePanelRef]);

  return (
    <div className="flex size-full group-data-[view=code]/demo-view-wrapper:hidden">
      <div className="relative grid w-full gap-4">
        {/* Background of the preview area */}
        <div className="absolute inset-2 right-3 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

        <ResizablePanelGroup
          direction="horizontal"
          className="bg-muted/50 rounded-lg border md:rounded-xl md:p-1 md:pr-0"
        >
          <ResizablePanel
            ref={resizablePanelRef}
            className="relative min-w-[375px] overflow-hidden rounded-lg md:rounded-xl md:border"
            defaultSize={100}
            onResize={(size: number) => {
              setPanelSize(size);
            }}
          >
            {children}
          </ResizablePanel>
          <ResizableHandle className="after:bg-border active:after:bg-muted-foreground hover:after:bg-muted-foreground relative hidden w-2 bg-transparent p-0 after:absolute after:top-1/2 after:left-1/2 after:h-8 after:w-1 after:-translate-y-1/2 after:rounded-full after:transition-all active:after:h-12 active:after:w-0.5 md:block" />

          <ResizablePanel defaultSize={0} minSize={0} />
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

function DemoViewerCode() {
  const { activeFile, files, setView } = useDemoViewer();
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
    <div className="isolate size-full group-data-[view=preview]/demo-view-wrapper:hidden">
      <div className="bg-code text-code-foreground relative size-full content-center overflow-hidden rounded-lg border text-center md:rounded-xl">
        {showCodePanelOverlay ? (
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <TabletSmartphone />
              </EmptyMedia>
              <EmptyTitle>Code Preview Not Available</EmptyTitle>
              <EmptyDescription>
                Code preview is not available on mobile devices yet. Please use the desktop version
                to view the code.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button size="sm" className="cursor-pointer" onClick={() => setView("preview")}>
                <Eye />
                View Component Preview
              </Button>
            </EmptyContent>
          </Empty>
        ) : (
          <div className="flex size-full">
            <DemoViewerFileTreeSidebar />
            <figure className="!m-0 flex size-full min-w-0 flex-col rounded-xl border-none">
              <figcaption
                className="text-code-foreground [&_svg]:text-code-foreground flex h-12 shrink-0 items-center gap-2 border-b px-4 py-2 [&_svg]:size-4 [&_svg]:opacity-70"
                data-language={language}
              >
                <FileIcon className="size-4 shrink-0" />
                <span className="line-clamp-1 text-sm">{file.target}</span>
                <div className="ml-auto flex items-center gap-2">
                  <DemoCopyCodeButton />
                </div>
              </figcaption>

              <CodeBlock
                language={language}
                code={file?.content}
                showLineNumbers
                className="scrollbar-thin overflow-auto"
              />
            </figure>
          </div>
        )}
      </div>
    </div>
  );
}

function DemoViewerFileTreeSidebar() {
  const { tree } = useDemoViewer();

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
  const { activeFile, setActiveFile } = useDemoViewer();

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

function DemoCopyCodeButton() {
  const { activeFile, item } = useDemoViewer();
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

function DemoViewer({
  item,
  tree,
  files,
  showHeader = true,
  ...props
}: Pick<DemoViewerContext, "item" | "tree" | "files"> & { showHeader?: boolean }) {
  return (
    <DemoViewerProvider item={item} tree={tree} files={files} {...props}>
      <div className="flex flex-col gap-2">
        {showHeader && <DemoViewerHeader />}
        <DemoViewerToolbar />
      </div>

      <div className="isolate aspect-[10/16] overflow-hidden md:aspect-[4/5] lg:aspect-video">
        <DemoViewerPreview>
          <DemoViewerIframe />
        </DemoViewerPreview>

        <DemoViewerCode />
      </div>
    </DemoViewerProvider>
  );
}

export { DemoViewer };
