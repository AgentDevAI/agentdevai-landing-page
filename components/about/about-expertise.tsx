import { Card } from "@/components/ui/card"
import { Code2, Bot, Cloud, MessageCircle, Database, GitBranch } from "lucide-react"

const EXPERTISE_AREAS = [
  {
    icon: Bot,
    title: "FastAPI Development",
    description: "High-performance async Python APIs for AI services",
  },
  {
    icon: Code2,
    title: "LangChain & LangGraph",
    description: "Building agentic AI systems with state-of-the-art frameworks",
  },
  {
    icon: GitBranch,
    title: "AI Agent Architecture",
    description: "Designing multi-agent systems that reason and collaborate",
  },
  {
    icon: Cloud,
    title: "Google Cloud Platform",
    description: "Production deployment and scaling on GCP infrastructure",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp API Integration",
    description: "Official WhatsApp Business API implementation and optimization",
  },
  {
    icon: Database,
    title: "Vector Databases & RAG",
    description: "Knowledge base systems with semantic search capabilities",
  },
]

export function AboutExpertise() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Expertise</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Deep technical knowledge across the entire AI automation stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE_AREAS.map((area, index) => (
            <Card
              key={index}
              className="group bg-slate-900 border-slate-800 hover:border-primary/50 transition-all duration-300 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{area.title}</h3>
                  <p className="text-slate-400 text-sm">{area.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
