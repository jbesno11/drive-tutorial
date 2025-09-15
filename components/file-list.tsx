"use client"

import type { FileItem } from "@/types/file-system"
import { FileIcon } from "@/components/file-icon"
import { Checkbox } from "@/components/ui/checkbox"
import { formatFileSize, formatDate } from "@/lib/utils"

interface FileListProps {
  items: FileItem[]
  selectedItems: string[]
  onSelectionChange: (items: string[]) => void
  onItemClick: (item: FileItem) => void
}

export function FileList({ items, selectedItems, onSelectionChange, onItemClick }: FileListProps) {
  const handleItemSelect = (itemId: string, checked: boolean) => {
    if (checked) {
      onSelectionChange([...selectedItems, itemId])
    } else {
      onSelectionChange(selectedItems.filter((id) => id !== itemId))
    }
  }

  return (
    <div className="space-y-1">
      <div className="grid grid-cols-12 gap-4 px-4 py-2 text-sm font-medium text-muted-foreground border-b border-border">
        <div className="col-span-1"></div>
        <div className="col-span-5">Name</div>
        <div className="col-span-2">Owner</div>
        <div className="col-span-2">Last modified</div>
        <div className="col-span-2">File size</div>
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-12 gap-4 px-4 py-3 hover:bg-accent/50 cursor-pointer transition-colors rounded-lg group"
          onClick={() => onItemClick(item)}
        >
          <div className="col-span-1 flex items-center">
            <Checkbox
              checked={selectedItems.includes(item.id)}
              onCheckedChange={(checked) => handleItemSelect(item.id, checked as boolean)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="col-span-5 flex items-center gap-3">
            <FileIcon type={item.type} name={item.name} size="sm" />
            <span className="text-sm text-foreground">{item.name}</span>
          </div>

          <div className="col-span-2 flex items-center text-sm text-foreground/70">{item.owner}</div>

          <div className="col-span-2 flex items-center text-sm text-foreground/70">{formatDate(item.modifiedAt)}</div>

          <div className="col-span-2 flex items-center text-sm text-foreground/70">
            {item.type === "file" ? formatFileSize(item.size!) : "—"}
          </div>
        </div>
      ))}
    </div>
  )
}
