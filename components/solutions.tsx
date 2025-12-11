// Server Component - Business solutions
import { Headphones, Users, FileText, Cog } from "lucide-react"
import { Card } from "@/components/ui/card"

const solutions = [
  {
    icon: Headphones,
    title: "Customer Support AI",
    features: ["24/7 support", "Multi-channel handling", "Fast, accurate responses", "Escalation to human agents"],
  },
  {
    icon: Users,
    title: "Sales & Lead Qualification",
    features: ["Respond instantly", "Qualify leads", "Book appointments", "Sync with CRM"],
  },
  {
    icon: FileText,
    title: "Deep Research & Reporting",
    features: ["Search, analyze, summarize", "Write reports", "Monitor data sources", "Act autonomously"],
  },
  {
    icon: Cog,
    title: "Automation Workflows",
    features: ["Email tasks", "Inventory monitoring", "Order tracking", "Internal automations"],
  },
]

export default function Solutions() {
  return (
    <section className="relative py-24 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Solutions for Every Business</h2>
          <p className="text-xl text-slate-300">From support to sales to research — automate what matters.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon
            return (
              <Card key={idx} className="p-8 bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="text-slate-300 text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
