// Server Component - Why choose AgentDevAI section with comparison
import { Check } from "lucide-react"
import { Card } from "@/components/ui/card"

const advantages = [
  "Fully customizable logic",
  "True scalability (not restricted by templates)",
  "Deep reasoning & planning agents",
  "Integrations with your real systems",
  "High performance & reliability",
]

export default function WhyAgentDevAI() {
  return (
    <section className="relative py-24 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-slate-300">No-Code Tools Limit You.</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                We Build What They Can't
              </span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Most businesses are stuck with basic no-code chatbots — limited, rigid, and impossible to scale. We build
              real AI systems, engineered with modern agent frameworks and full backend code.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Your competitors use no-code bots. You'll use custom-built AI infrastructure.
            </p>
          </div>

          <div className="space-y-4">
            {advantages.map((advantage, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="text-white" size={16} />
                </div>
                <span className="text-slate-100 text-lg font-medium">{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-slate-800">
          <p className="text-center text-slate-400 text-sm uppercase tracking-wider mb-8">
            AgentDevAI vs No-Code Alternatives
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-slate-900/50 border-slate-800">
              <h3 className="text-xl font-bold text-slate-400 mb-4">No-Code Platforms</h3>
              <ul className="space-y-3 text-slate-300">
                <li>✗ Limited to template logic</li>
                <li>✗ Scaling hits hard limits</li>
                <li>✗ Rigid integration options</li>
                <li>✗ Vendor lock-in</li>
                <li>✗ No advanced reasoning</li>
              </ul>
            </Card>
            <Card className="p-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/50">
              <h3 className="text-xl font-bold text-white mb-4">AgentDevAI Pro-Code</h3>
              <ul className="space-y-3 text-white">
                <li>✓ Unlimited customization</li>
                <li>✓ Enterprise scalability</li>
                <li>✓ Any API or system</li>
                <li>✓ Full code ownership</li>
                <li>✓ Deep & ambient agents</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
