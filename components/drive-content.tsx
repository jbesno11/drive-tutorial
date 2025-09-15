"use client"
import { ChevronRight, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FileGrid } from "@/components/file-grid"
import { FileList } from "@/components/file-list"
import type { FileItem } from "@/types/file-system"

interface DriveContentProps {
  currentPath: string
  onPathChange: (path: string) => void
  viewMode: "grid" | "list"
  selectedItems: string[]
  onSelectionChange: (items: string[]) => void
  fileSystem: Record<string, FileItem[]>
}

export function DriveContent({
  currentPath,
  onPathChange,
  viewMode,
  selectedItems,
  onSelectionChange,
  fileSystem,
}: DriveContentProps) {
  const currentItems = fileSystem[currentPath] || []

  const pathSegments = currentPath === "/" ? [] : currentPath.split("/").filter(Boolean)

  const handleItemClick = (item: FileItem) => {
    if (item.type === "folder") {
      const newPath = currentPath === "/" ? `/${item.name}` : `${currentPath}/${item.name}`
      onPathChange(newPath)
    } else {
      // For files, open in new tab (mock functionality)
      window.open(item.url, "_blank")
    }
  }

  const handleBreadcrumbClick = (index: number) => {
    if (index === -1) {
      onPathChange("/")
    } else {
      const newPath = "/" + pathSegments.slice(0, index + 1).join("/")
      onPathChange(newPath)
    }
  }

  return (
    <main className="flex-1 overflow-auto">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-border bg-background px-6 py-3">
        <div className="flex items-center gap-2 text-sm">
          <Button variant="ghost" size="sm" onClick={() => handleBreadcrumbClick(-1)} className="p-1 h-auto">
            <Home className="w-4 h-4" />
          </Button>
          {pathSegments.map((segment, index) => (
            <div key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleBreadcrumbClick(index)}
                className="p-1 h-auto text-foreground hover:text-primary"
              >
                {segment}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* File Content */}
      <div className="p-6">
        {currentItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">This folder is empty</p>
          </div>
        ) : viewMode === "grid" ? (
          <FileGrid
            items={currentItems}
            selectedItems={selectedItems}
            onSelectionChange={onSelectionChange}
            onItemClick={handleItemClick}
          />
        ) : (
          <FileList
            items={currentItems}
            selectedItems={selectedItems}
            onSelectionChange={onSelectionChange}
            onItemClick={handleItemClick}
          />
        )}
      </div>
    </main>
  )
}
