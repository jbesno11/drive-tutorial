import {
  Folder,
  FileText,
  ImageIcon,
  Video,
  Music,
  Archive,
  FileSpreadsheet,
  FileSliders as FileSlides,
  Code,
  File,
} from "lucide-react"

interface FileIconProps {
  type: "folder" | "file"
  name: string
  size?: "sm" | "lg"
}

export function FileIcon({ type, name, size = "sm" }: FileIconProps) {
  const iconSize = size === "lg" ? "w-12 h-12" : "w-5 h-5"

  if (type === "folder") {
    return <Folder className={`${iconSize} text-accent fill-accent/20`} />
  }

  const extension = name.split(".").pop()?.toLowerCase()

  const getFileIcon = () => {
    switch (extension) {
      case "txt":
      case "doc":
      case "docx":
        return <FileText className={`${iconSize} text-blue-600`} />
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
      case "svg":
        return <ImageIcon className={`${iconSize} text-green-600`} />
      case "mp4":
      case "avi":
      case "mov":
        return <Video className={`${iconSize} text-red-600`} />
      case "mp3":
      case "wav":
      case "flac":
        return <Music className={`${iconSize} text-purple-600`} />
      case "zip":
      case "rar":
      case "7z":
        return <Archive className={`${iconSize} text-orange-600`} />
      case "xls":
      case "xlsx":
      case "csv":
        return <FileSpreadsheet className={`${iconSize} text-green-700`} />
      case "ppt":
      case "pptx":
        return <FileSlides className={`${iconSize} text-orange-700`} />
      case "js":
      case "ts":
      case "html":
      case "css":
      case "py":
      case "java":
        return <Code className={`${iconSize} text-indigo-600`} />
      default:
        return <File className={`${iconSize} text-muted-foreground`} />
    }
  }

  return getFileIcon()
}
