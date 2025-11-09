import { SidebarTabs } from "@/components/sidebar-tabs"

export default function SidebarDemoPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Sidebar Tabs Demo</h1>
      <p className="text-muted-foreground mb-8">
        This demo shows how the dashboard-01 sidebar navigation items have been transformed into tabbed content.
        Click on the different tabs above to see various dashboards and content sections.
      </p>

      <SidebarTabs />
    </div>
  )
}
