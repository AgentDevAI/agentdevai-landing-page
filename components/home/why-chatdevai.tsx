import { Network, Rocket, MessageCircle, BarChart3 } from "lucide-react"
import { FeatureCard } from "./feature-card"

const FEATURES = [
  {
    icon: Network,
    title: "Agentic AI Systems (LangGraph)",
    description:
      "Multi-agent architectures that reason, plan, and execute complex workflows autonomously. Built with LangGraph for maximum flexibility.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Rocket,
    title: "FastAPI + GCP Production Deployments",
    description:
      "Enterprise-grade infrastructure on Google Cloud Run. Auto-scaling, 99.9% uptime, and optimized for high-throughput AI workloads.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Cloud API Experts",
    description:
      "Official WhatsApp Business API integration. Rich media, interactive buttons, templates, and full compliance with Meta's policies.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics + CRM Integrations",
    description:
      "Track every conversation, measure ROI, and sync with your existing CRM. Integrations with Salesforce, HubSpot, and custom systems.",
    gradient: "from-orange-500 to-red-500",
  },
]

export function WhyChatDevAI() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ChatDevAI</span>
            ?
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We don't just build chatbots. We engineer intelligent systems that scale with your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
