import { CheckCircle2 } from "lucide-react"

const STEPS = [
  {
    number: "01",
    title: "Requirements",
    description:
      "We understand your business goals, workflows, and automation needs through detailed discovery sessions.",
  },
  {
    number: "02",
    title: "AI Design",
    description:
      "Our team designs the conversation flows, agent architecture, and integrations tailored to your use case.",
  },
  {
    number: "03",
    title: "Build",
    description: "We develop your AI system using FastAPI, LangChain, LangGraph with rigorous testing and QA.",
  },
  {
    number: "04",
    title: "Deploy + Optimize",
    description:
      "Launch on GCP infrastructure with monitoring, analytics, and continuous optimization based on real usage.",
  },
]

export function ProcessSection() {
  return (
    <section className="relative py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">From concept to production in 4 clear steps</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line (hidden on last item) */}
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-y-1/2 z-0" />
              )}

              <div className="relative bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 h-full">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>

                <p className="text-slate-400 leading-relaxed">{step.description}</p>

                <CheckCircle2 className="w-6 h-6 text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
