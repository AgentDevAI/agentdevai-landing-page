import Image from "next/image"

const TECHNOLOGIES = [
  { name: "FastAPI", logo: "/fastapi-logo.svg" },
  { name: "LangChain", logo: "/langchain-logo.png" },
  { name: "LangGraph", logo: "/langgraph-logo.png" },
  { name: "Google Cloud", logo: "/images/partners/google-cloud-logo.png" },
  { name: "WhatsApp API", logo: "/whatsapp-business-api-logo.jpg" },
  { name: "TypeScript", logo: "/typescript-logo.png" },
  { name: "Python", logo: "/python-logo.png" },
  { name: "PostgreSQL", logo: "/postgresql-logo.png" },
]

export function TechStack() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built With{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Enterprise Tech
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Production-grade technologies for reliable, scalable AI systems
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {TECHNOLOGIES.map((tech, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
            >
              <div className="w-20 h-20 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Image
                  src={tech.logo || "/placeholder.svg"}
                  alt={tech.name}
                  width={64}
                  height={64}
                  quality={90}
                  loading="lazy"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-white font-semibold text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
