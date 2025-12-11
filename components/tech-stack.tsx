// Server Component - Technology stack
import { Card } from "@/components/ui/card"

const technologies = [
  { category: "AI & Agents", items: ["LangChain", "LangGraph", "LangSmith (observability)"] },
  { category: "LLM Models", items: ["OpenAI", "Anthropic", "Llama", "Gemini", "Custom models"] },
  { category: "Vector & Storage", items: ["Pinecone", "Chroma", "Qdrant"] },
  { category: "Backend & Infrastructure", items: ["FastAPI", "Next.js", "GCP"] },
  { category: "Mobile & CRM", items: ["Flutter", "Firebase"] },
  { category: "Languages", items: ["Python", "TypeScript", "SQL"] },
]

export default function TechStack() {
  return (
    <section className="relative py-24 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Built with Enterprise-Grade Technology</h2>
          <p className="text-xl text-slate-300">Scaling from startups to enterprise workloads.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {technologies.map((tech, idx) => (
            <Card key={idx} className="p-6 bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition">
              <h3 className="text-lg font-bold text-white mb-4">{tech.category}</h3>
              <div className="space-y-2">
                {tech.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
