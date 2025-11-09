"use client"

import * as React from "react"
import {
  Camera,
  BarChart3,
  LayoutDashboard,
  Database,
  FileImage,
  FileText,
  File,
  Folder,
  HelpCircle,
  Zap,
  ListChecks,
  FileBarChart,
  Search,
  Settings,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
    },
    {
      title: "Lifecycle",
      url: "#",
      icon: ListChecks,
    },
    {
      title: "Analytics",
      url: "#",
      icon: BarChart3,
    },
    {
      title: "Projects",
      url: "#",
      icon: Folder,
    },
    {
      title: "Team",
      url: "#",
      icon: Users,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: Camera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: FileText,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: FileImage,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: HelpCircle,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: Database,
    },
    {
      name: "Reports",
      url: "#",
      icon: FileBarChart,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: File,
    },
  ],
}

export function SidebarTabs() {
  return (
    <Tabs defaultValue="dashboard" className="w-full">
      <TabsList className="grid w-full grid-cols-5">
        {data.navMain.map((item, index) => (
          <TabsTrigger
            key={item.title}
            value={item.title.toLowerCase()}
            className="flex items-center gap-2"
          >
            <item.icon className="h-4 w-4" />
            <span className="hidden sm:inline">{item.title}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {data.navMain.map((item, index) => (
        <TabsContent key={item.title} value={item.title.toLowerCase()} className="mt-6">
          <div className="grid gap-4 md:gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </CardTitle>
                <CardDescription>
                  Overview and management for {item.title.toLowerCase()} section.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Render different content based on tab */}
            {item.title === "Dashboard" && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardAction>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                  </CardAction>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Projects</CardTitle>
                    <Folder className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardAction>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                  </CardAction>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Team Members</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardAction>
                    <div className="text-2xl font-bold">+12</div>
                    <p className="text-xs text-muted-foreground">+19% from last month</p>
                  </CardAction>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
                    <ListChecks className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardAction>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">+201 since yesterday</p>
                  </CardAction>
                </Card>
              </div>
            )}

            {item.title === "Lifecycle" && (
              <div className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Project Phases</CardTitle>
                      <CardDescription>Current project lifecycle overview</CardDescription>
                    </CardHeader>
                    <div className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          <span className="text-sm">Planning</span>
                          <Badge variant="secondary" className="ml-auto">Complete</Badge>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          <Badge variant="secondary" className="ml-auto">In Progress</Badge>
                          <span className="text-sm ml-2">Development</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                          <span className="text-sm ml-2">Testing</span>
                          <Badge variant="outline" className="ml-auto">Pending</Badge>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                          <span className="text-sm ml-2">Deployment</span>
                          <Badge variant="outline" className="ml-auto">Pending</Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Milestones</CardTitle>
                      <CardDescription>Key project milestones and deadlines</CardDescription>
                    </CardHeader>
                    <div className="p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">MVP Launch</span>
                          <Badge>Mar 15</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Beta Release</span>
                          <Badge variant="outline">Apr 01</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Production Launch</span>
                          <Badge variant="outline">May 01</Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {item.title === "Analytics" && (
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Traffic Analytics</CardTitle>
                    <CardDescription>Website traffic and engagement metrics</CardDescription>
                  </CardHeader>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold">12,234</div>
                        <p className="text-xs text-muted-foreground">Total Visits</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">8.5%</div>
                        <p className="text-xs text-muted-foreground">Bounce Rate</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">3:42</div>
                        <p className="text-xs text-muted-foreground">Avg. Session</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">2.1%</div>
                        <p className="text-xs text-muted-foreground">Conversion</p>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>User Demographics</CardTitle>
                    <CardDescription>User engagement by demographics</CardDescription>
                  </CardHeader>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm">18-24 years</span>
                        <span className="text-sm">23%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">25-34 years</span>
                        <span className="text-sm">31%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">35-44 years</span>
                        <span className="text-sm">28%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">45+ years</span>
                        <span className="text-sm">18%</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {item.title === "Projects" && (
              <div className="grid gap-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Active Projects</h2>
                  <Button>
                    <Zap className="h-4 w-4 mr-2" />
                    New Project
                  </Button>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {["Website Redesign", "Mobile App", "API Integration", "Marketing Campaign", "Data Migration", "Security Audit"].map((project, idx) => (
                    <Card key={idx}>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">{project}</CardTitle>
                        <CardDescription>
                          {idx % 3 === 0 ? "In Progress" : idx % 3 === 1 ? "Planning" : "Completed"}
                        </CardDescription>
                      </CardHeader>
                      <div className="px-6 pb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress</span>
                          <span>{Math.floor(Math.random() * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {item.title === "Team" && (
              <div className="grid gap-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Team Members</h2>
                  <Button>
                    <Users className="h-4 w-4 mr-2" />
                    Invite Member
                  </Button>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {["Alice Johnson", "Bob Smith", "Carol Williams", "David Brown", "Emma Davis", "Frank Wilson"].map((member, idx) => (
                    <Card key={idx}>
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium">{member.split(" ").map(n => n[0]).join("")}</span>
                          </div>
                          <div>
                            <CardTitle className="text-base">{member}</CardTitle>
                            <CardDescription>
                              {["Designer", "Developer", "Product Manager", "QA Engineer", "DevOps", "Project Manager"][idx]}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <div className="px-6 pb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Last active: 2h ago</span>
                          <Badge variant={idx % 2 === 0 ? "default" : "secondary"}>
                            {idx % 2 === 0 ? "Online" : "Away"}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
