import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

const TECHNOLOGIES = [
  {
    name: "FastAPI",
    description: "Modern Python web framework for building APIs",
    details:
      "High-performance async framework with automatic OpenAPI documentation. Perfect for AI services that need speed and reliability.",
    purpose: "Backend API development with auto-generated docs and validation",
    logo: "/fastapi-logo.svg",
  },
  {
    name: "LangChain",
    description: "Framework for building LLM applications",
    details:
      "Compose language models with external data sources, tools, and memory. Build agents that can reason and take action.",
    purpose: "Simplify agent development with reusable components",
    logo: "/langchain-logo.png",
  },
  {
    name: "LangGraph",
    description: "Build stateful multi-agent workflows",
    details:
      "Define complex agent workflows with states and transitions. Full control over agent behavior without black boxes.",
    purpose: "Orchestrate multi-agent systems with deterministic workflows",
    logo: "/langgraph-logo.png",
  },
  {
    name: "Google Cloud Platform",
    description: "Scalable cloud infrastructure",
    details:
      "Cloud Run for auto-scaling containers, Firestore for data, Pub/Sub for events, and BigQuery for analytics.",
    purpose: "Production deployment with enterprise reliability",
    logo: "/images/partners/google-cloud-logo.png",
  },
  {
    name: "WhatsApp Cloud API",
    description: "Official WhatsApp Business API",
    details:
      "Send and receive messages, rich media, interactive buttons, and templates. Full compliance with Meta policies.",
    purpose: "Connect AI agents to WhatsApp Business accounts",
    logo: "/whatsapp-business-api-logo.jpg",
  },
  {
    name: "Vector Databases",
    description: "Semantic search for AI applications",
    details:
      "Store and query embeddings for RAG (Retrieval Augmented Generation). ChromaDB, Pinecone, or Supabase pgvector.",
    purpose: "Enable AI agents to access relevant knowledge",
    logo: "/vector-database.png",
  },
  {
    name: "Firestore & Pub/Sub",
    description: "Event-driven data architecture",
    details: "Real-time NoSQL database for conversation history and Pub/Sub for async message processing at scale.",
    purpose: "Store conversations and handle events asynchronously",
    logo: "/firestore.svg",
  },
  {
    name: "Python & TypeScript",
    description: "Pro code development languages",
    details: "Python for AI/ML workloads and backend services. TypeScript for type-safe frontend and API clients.",
    purpose: "Build robust, maintainable production systems",
    logo: "/python-logo.png",
  },
]

export function TechnologiesGrid() {
  return (
    <section className="relative py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {TECHNOLOGIES.map((tech, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-slate-900 border-slate-800 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="p-8 space-y-4">
                {/* Logo and Title */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Image
                      src={tech.logo || "/placeholder.svg"}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{tech.name}</h3>
                    <p className="text-sm text-slate-400">{tech.description}</p>
                  </div>
                </div>

                {/* Details */}
                <p className="text-slate-300 leading-relaxed">{tech.details}</p>

                {/* Purpose */}
                <div className="flex items-start gap-3 pt-4 border-t border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-400">
                    <span className="font-semibold text-slate-300">Purpose:</span> {tech.purpose}
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
