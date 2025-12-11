// Server Component - Why businesses choose us
import { Zap } from "lucide-react"

const reasons = [
  {
    title: "Unlimited Customization",
    description: "No templates. No limitations. Everything is coded to your exact needs.",
  },
  {
    title: "Serious Performance",
    description: "Unlike no-code tools, we build scalable architectures that handle real workloads.",
  },
  {
    title: "True Intelligence",
    description: "Deep and ambient agents that reason, plan, and automate.",
  },
  {
    title: "Powerful Integrations",
    description: "We connect every system, every channel, every workflow.",
  },
  {
    title: "You Own the Solution",
    description: "No vendor lock-in. No platform restrictions.",
  },
]

export default function WhyChoose() {
  return (
    <section className="relative py-24 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Why Businesses Choose AgentDevAI</h2>
        <p className="text-center text-slate-300 mb-16 max-w-2xl mx-auto">
          We're not just another AI vendor. We're your engineering partner.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0 mt-1">
                <Zap className="text-white" size={18} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-slate-300">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
