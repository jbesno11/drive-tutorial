"use client"

import { Search, Upload, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface DriveHeaderProps {
  currentPath: string
  selectedCount: number
}

export function DriveHeader({ currentPath, selectedCount }: DriveHeaderProps) {
  const handleUpload = () => {
    // Mock upload functionality
    alert("Upload functionality would be implemented here!")
  }

  return (
    <header className="border-b border-border bg-background px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-primary">Drive</h1>
          <Separator orientation="vertical" className="h-6" />
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90">
                  <Plus className="w-4 h-4 mr-2" />
                  New
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={handleUpload}>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload files
                </DropdownMenuItem>
                <DropdownMenuItem>New folder</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-1 max-w-2xl mx-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Search in Drive" className="pl-10 bg-muted/50" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {selectedCount > 0 && <span className="text-sm text-muted-foreground mr-4">{selectedCount} selected</span>}
        </div>
      </div>
    </header>
  )
}
