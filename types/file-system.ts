export interface FileItem {
  id: string
  name: string
  type: "folder" | "file"
  size?: number
  modifiedAt: Date
  owner: string
  url?: string
}
