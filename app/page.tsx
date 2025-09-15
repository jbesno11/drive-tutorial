"use client"

import { useState } from "react"
import { DriveHeader } from "@/components/drive-header"
import { DriveContent } from "@/components/drive-content"
import { mockFileSystem } from "@/lib/mock-data"

export default function DrivePage() {
  const [currentPath, setCurrentPath] = useState("/")
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  return (
    <div className="h-screen flex flex-col bg-background">
      <DriveHeader currentPath={currentPath} selectedCount={selectedItems.length} />
      <DriveContent
        currentPath={currentPath}
        onPathChange={setCurrentPath}
        viewMode="list"
        selectedItems={selectedItems}
        onSelectionChange={setSelectedItems}
        fileSystem={mockFileSystem}
      />
    </div>
  )
}
