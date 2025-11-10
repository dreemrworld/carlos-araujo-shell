"use client"

import { useState, useEffect } from "react"
import { AppSidebar } from "@/components/shadcn-studio/blocks/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  const [selectedWebsite, setSelectedWebsite] = useState<{ url: string; embed: boolean } | null>(null)

  const handleWebsiteSelect = (url: string, embed: boolean) => {
    if (embed) {
      setSelectedWebsite({ url, embed })
    } else {
      window.open(url, '_blank')
    }
  }

  // Auto-select the first embeddable website on mount
  useEffect(() => {
    // Find the first embeddable website from the categories
    const firstEmbeddableWebsite = {
      title: "Carlos GOAT Portfolio",
      url: "https://carlos.goat.africa",
      embed: true
    }
    handleWebsiteSelect(firstEmbeddableWebsite.url, firstEmbeddableWebsite.embed)
  }, [])

  return (
    <SidebarProvider>
      <AppSidebar onWebsiteSelect={handleWebsiteSelect} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Carlos GOAT Hub
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage className="truncate max-w-[200px] sm:max-w-none">
                  {selectedWebsite?.url ? new URL(selectedWebsite.url).hostname : "Dashboard"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {selectedWebsite && selectedWebsite.embed ? (
            <iframe
              src={selectedWebsite.url}
              className="w-full h-full min-h-[60vh] sm:min-h-[80vh] border rounded-xl"
              title={`Website: ${selectedWebsite.url}`}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              loading="lazy"
            />
          ) : (
            <>
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
              </div>
              <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
            </>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
