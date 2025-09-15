"use client"

import type { FileItem } from "@/types/file-system"
import { FileIcon } from "@/components/file-icon"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

interface FileGridProps {
  items: FileItem[]
  selectedItems: string[]
  onSelectionChange: (items: string[]) => void
  onItemClick: (item: FileItem) => void
}

export function FileGrid({ items, selectedItems, onSelectionChange, onItemClick }: FileGridProps) {
  const handleItemSelect = (itemId: string, checked: boolean) => {
    if (checked) {
      onSelectionChange([...selectedItems, itemId])
    } else {
      onSelectionChange(selectedItems.filter((id) => id !== itemId))
    }
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
      {items.map((item) => (
        <Card
          key={item.id}
          className="p-4 hover:bg-accent/50 cursor-pointer transition-colors relative group"
          onClick={() => onItemClick(item)}
        >
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Checkbox
              checked={selectedItems.includes(item.id)}
              onCheckedChange={(checked) => handleItemSelect(item.id, checked as boolean)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="flex flex-col items-center gap-2">
            <FileIcon type={item.type} name={item.name} size="lg" />
            <p className="text-sm text-center text-balance line-clamp-2 w-full">{item.name}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}
