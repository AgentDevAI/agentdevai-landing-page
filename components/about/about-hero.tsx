export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AgentDevAI</span>
        </h1>
        <p className="text-xl text-slate-300 leading-relaxed">
          We're an agentic AI engineering studio specializing in production-grade WhatsApp automation, multi-agent
          systems, and intelligent business workflows powered by FastAPI, LangChain, and GCP.
        </p>
      </div>
    </section>
  )
}
