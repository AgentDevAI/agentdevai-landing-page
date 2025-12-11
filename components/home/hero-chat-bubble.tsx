import { cn } from "@/lib/utils"

interface ChatBubbleProps {
  message: string
  isUser?: boolean
  isTyping?: boolean
}

export function ChatBubble({ message, isUser = false, isTyping = false }: ChatBubbleProps) {
  if (isTyping) {
    return (
      <div className="animate-pulse bg-primary/10 rounded-2xl p-3 self-start">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
        </div>
      </div>
    )
  }

  return (
    <div className={cn("rounded-2xl p-3 max-w-[70%]", isUser ? "bg-accent/20 self-end" : "bg-primary/20 self-start")}>
      <p className="text-sm text-white">{message}</p>
    </div>
  )
}
