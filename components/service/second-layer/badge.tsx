import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export function ContactBadge() {
  return (
    <Badge
      variant="outline"
      className="px-4 py-2 text-sm font-medium rounded-full bg-background dark:bg-background/5 text-foreground dark:text-foreground hover:bg-background/90 dark:hover:bg-background/10 border-gray-200 dark:border-gray-700 flex items-center gap-2"
    >
      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
      Let&apos;s Build Something Great Together
    </Badge>
  )
}

