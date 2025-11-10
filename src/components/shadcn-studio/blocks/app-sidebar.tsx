import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// Website categories
const websiteCategories = [
  {
    title: "Portfolio & Personal",
    items: [
      { title: "Carlos GOAT Portfolio", url: "https://carlos.goat.africa", embed: true },
    ]
  },
  {
    title: "AI Applications",
    items: [
      { title: "Chat Bull AI", url: "https://chat.bull.africa", embed: true },
      { title: "Chat GOAT AI Assistant", url: "https://chat.goat.africa", embed: false },
    ]
  },
  {
    title: "Productivity Tools",
    items: [
      { title: "Nota Bene Notes", url: "https://nb.bull.africa", embed: true },
      { title: "HTML Editor", url: "https://html.bull.africa", embed: true },
      { title: "Currency Converter", url: "https://currency-converter-pro.pages.dev", embed: true },
      { title: "Smart Dictionary", url: "https://dict-5qo.pages.dev", embed: true },
    ]
  },
  {
    title: "Business & Commerce",
    items: [
      { title: "Tech Store Template", url: "https://shopgoat.pages.dev", embed: true },
      { title: "Digital Catalog", url: "https://shop.goat.africa", embed: true },
    ]
  },
  {
    title: "Professional & Academic",
    items: [
      { title: "HTML Editor GitHub", url: "https://github.com/dreemrworld/html-wysiwyg", embed: true },
      { title: "CINVESTEC Articles", url: "https://www.cinvestec.com/author/carlos-araujo/", embed: true },
      { title: "ARU Alumni Award", url: "https://www.aru.ac.uk/graduation-and-alumni/alumni-stories/alumni-of-the-month/2024/carlos-alberto-da-conceicao-araujo", embed: true },
      { title: "Blockchain Conference", url: "https://jbba.scholasticahq.com/article/74923-conference-proceedings-5th-blockchain-international-scientific-conference-ics2023", embed: true },
      { title: "Public Auditing Research", url: "https://www.agora-parl.org/sites/default/files/palop-publications/PALOP-TL%202022%20Volume%20II.pdf", embed: true },
    ]
  }
]

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  onWebsiteSelect?: (url: string, embed: boolean) => void
}

export function AppSidebar({ onWebsiteSelect, ...props }: AppSidebarProps) {
  const handleWebsiteClick = (website: { title: string; url: string; embed: boolean }) => {
    onWebsiteSelect?.(website.url, website.embed)
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex flex-col gap-0.5 leading-none px-2 py-2">
          <span className="font-semibold">Carlos Araújo</span>
          <span className="text-xs text-muted-foreground">GOAT</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {websiteCategories.map((category) => (
          <SidebarGroup key={category.title}>
            <SidebarGroupLabel>{category.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {category.items.map((website) => (
                  <SidebarMenuItem key={website.url}>
                    <SidebarMenuButton onClick={() => handleWebsiteClick(website)}>
                      {website.title}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-2 p-2">
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
