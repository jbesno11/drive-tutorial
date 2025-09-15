import { Home, Clock, Star, Trash2, Cloud, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function DriveSidebar() {
  const sidebarItems = [
    { icon: Home, label: "My Drive", active: true },
    { icon: Users, label: "Shared with me" },
    { icon: Clock, label: "Recent" },
    { icon: Star, label: "Starred" },
    { icon: Trash2, label: "Trash" },
  ]

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border p-4">
      <nav className="space-y-2">
        {sidebarItems.map((item, index) => (
          <Button
            key={item.label}
            variant={item.active ? "default" : "ghost"}
            className={`w-full justify-start ${
              item.active
                ? "bg-sidebar-primary text-sidebar-primary-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <item.icon className="w-4 h-4 mr-3" />
            {item.label}
          </Button>
        ))}
      </nav>

      <Separator className="my-4" />

      <div className="space-y-2">
        <div className="flex items-center gap-3 px-3 py-2 text-sm text-sidebar-foreground">
          <Cloud className="w-4 h-4" />
          <span>Storage</span>
        </div>
        <div className="px-3">
          <div className="w-full bg-sidebar-accent rounded-full h-2">
            <div className="bg-sidebar-primary h-2 rounded-full" style={{ width: "65%" }}></div>
          </div>
          <p className="text-xs text-sidebar-foreground mt-1">6.5 GB of 15 GB used</p>
        </div>
      </div>
    </aside>
  )
}
