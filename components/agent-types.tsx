// Server Component - AI Technology Types
import { Brain, Eye, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

const agentTypes = [
  {
    icon: Brain,
    title: "Deep Agents",
    subtitle: "Multi-step reasoning & execution",
    description:
      "Agents that plan, reason, break down tasks, execute multi-step workflows, analyze data, generate reports, and coordinate sub-agents.",
    uses: ["Research", "Data processing", "Internal operations", "Complex business automation"],
  },
  {
    icon: Eye,
    title: "Ambient Agents",
    subtitle: "Proactive monitoring & action",
    description: "AI that doesn't wait for input — it observes, monitors, and acts proactively across your systems.",
    uses: [
      "Auto-check email/CRM",
      "Send proactive follow-ups",
      "Monitor conversations",
      "Trigger workflows automatically",
    ],
  },
  {
    icon: Zap,
    title: "Environmental Agents",
    subtitle: "Real-world system integration",
    description:
      "AI that interacts with real-world systems through APIs, tools, and event streams. They perceive, think, act, and observe results.",
    uses: ["WhatsApp & Messenger", "Gmail & LinkedIn", "Databases & APIs", "Payment systems & Dashboards"],
  },
]

export default function AgentTypes() {
  return (
    <section className="relative py-24 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What We Build</h2>
          <p className="text-xl text-slate-300">
            This is not just a chatbot. This is a full agentic operating system for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {agentTypes.map((agent, idx) => {
            const Icon = agent.icon
            return (
              <Card
                key={idx}
                className="p-8 bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{agent.title}</h3>
                <p className="text-sm text-blue-400 font-semibold mb-3">{agent.subtitle}</p>
                <p className="text-slate-300 mb-6 flex-grow">{agent.description}</p>
                <div className="space-y-2">
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Ideal for:</p>
                  <ul className="space-y-2">
                    {agent.uses.map((use, useIdx) => (
                      <li key={useIdx} className="text-slate-300 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
