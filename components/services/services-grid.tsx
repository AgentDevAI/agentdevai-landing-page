import { Card } from "@/components/ui/card"
import { MessageCircle, Bot, Cloud, CheckCircle2 } from "lucide-react"

const SERVICES = [
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    description:
      "Complete WhatsApp AI solutions from concept to deployment. We build intelligent bots that handle customer interactions 24/7.",
    features: [
      "E-commerce bots with product catalogs and checkout",
      "Booking bots for appointments and reservations",
      "Lead qualification and routing systems",
      "Support bots with RAG and knowledge bases",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Bot,
    title: "AI Engineering",
    description:
      "Custom agentic systems built with LangChain and LangGraph. Multi-agent architectures that reason, plan, and execute.",
    features: [
      "Custom agent systems with specialized capabilities",
      "Data pipelines and ETL for AI workflows",
      "Multi-agent architectures with LangGraph",
      "Knowledge bases with vector search (RAG)",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cloud,
    title: "GCP Deployment & Infrastructure",
    description:
      "Production-ready deployment on Google Cloud Platform. Scalable, reliable, and optimized for AI workloads.",
    features: [
      "Cloud Run deployment with auto-scaling",
      "Firestore/Datastore for conversation history",
      "Pub/Sub workflows for event-driven systems",
      "CI/CD pipelines and monitoring",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
]

export function ServicesGrid() {
  return (
    <section className="relative py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto space-y-12">
        {SERVICES.map((service, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden bg-slate-900 border-slate-800 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
          >
            <div className="grid lg:grid-cols-[300px_1fr] gap-8 p-8 md:p-12">
              {/* Left: Icon and Title */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">{service.title}</h3>
              </div>

              {/* Right: Description and Features */}
              <div className="space-y-6">
                <p className="text-lg text-slate-300 leading-relaxed">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-slate-400">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`}
            />
          </Card>
        ))}
      </div>
    </section>
  )
}
