export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Strategy",
      description: "We analyze your business needs and design custom AI agent workflows tailored to your goals.",
    },
    {
      number: "2",
      title: "Build Your AI Agents",
      description:
        "Our engineers code intelligent agents using FastAPI, LangChain, and LangGraph for complex automations.",
    },
    {
      number: "3",
      title: "Automate Your Workflows",
      description: "Connect your agents to WhatsApp, CRM, databases, and APIs for seamless end-to-end automation.",
    },
    {
      number: "4",
      title: "Deploy in GCP",
      description: "Scale reliably with enterprise-grade Google Cloud deployment and 24/7 monitoring.",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How ChatDevAI Works</h2>
          <p className="text-xl text-slate-300">From strategy to deployment in 4 simple steps.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-6 h-full">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-300">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/3 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
