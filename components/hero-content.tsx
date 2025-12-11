import { Button } from "@/components/ui/button"

export function HeroContent() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
        Agentic AI Systems
        <br />
        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          That Automate Your Business 24/7
        </span>
      </h1>

      <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
        We build custom AI agents, workflows, and WhatsApp automations that increase revenue, reduce workload, and scale
        your operations instantly.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold transition flex items-center justify-center gap-2 h-auto text-lg">
          Build My AI System
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Button>
        <Button
          variant="outline"
          className="px-8 py-3 rounded-full border border-slate-600 hover:border-blue-400 text-white font-semibold transition bg-transparent text-lg"
        >
          See Demo Automations
        </Button>
      </div>
    </div>
  )
}
