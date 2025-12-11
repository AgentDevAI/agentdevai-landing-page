import { Button } from "@/components/ui/button"
import { MessageCircle, PlayCircle } from "lucide-react"
import Link from "next/link"

export function HeroContent() {
  return (
    <div className="text-center lg:text-left space-y-8">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight inline-flex flex-col items-center lg:items-start">
        <span className="text-white">WhatsApp AI</span>
        <span className="flex items-center gap-4">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Agents
          </span>
          {/* Inline WhatsApp icon */}
          <span className="hidden lg:inline-block animate-bounce">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/50">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
          </span>
        </span>
        <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          That Automate Your Business
        </span>
      </h1>

      <p className="text-xl md:text-2xl text-slate-300 text-pretty max-w-2xl mx-auto lg:mx-0">
        ChatDevAI builds production-grade AI systems using FastAPI, LangChain, LangGraph, and GCP.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <Button
          asChild
          size="lg"
          className="text-lg h-14 px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90"
        >
          <Link href="#live-demos">
            <PlayCircle className="mr-2 h-5 w-5" />
            Try Live Demos
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="text-lg h-14 px-8 border-primary text-primary hover:bg-primary/10 bg-transparent"
        >
          <Link href="/contact">
            <MessageCircle className="mr-2 h-5 w-5" />
            Get a Custom AI Bot
          </Link>
        </Button>
      </div>
    </div>
  )
}
