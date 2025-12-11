import { Card } from "@/components/ui/card"
import { Target, Eye } from "lucide-react"

export function AboutMission() {
  return (
    <section className="relative py-24 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-slate-900 border-slate-800 hover:border-primary/50 transition-all duration-300 p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <Target className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Our Mission</h2>
              </div>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              Make AI accessible for all businesses using reliable agentic systems. We believe every company deserves
              enterprise-grade automation without enterprise-level complexity or cost.
            </p>
          </Card>

          <Card className="bg-slate-900 border-slate-800 hover:border-primary/50 transition-all duration-300 p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Our Vision</h2>
              </div>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              Transform every business conversation into an opportunity through intelligent automation. We're building a
              future where AI agents handle the routine so humans can focus on what matters.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
