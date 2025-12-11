export function UseCases() {
  const useCases = [
    {
      title: "AI Sales Agents",
      description: "Automate lead qualification and follow-ups. Close deals 3x faster with intelligent sales bots.",
    },
    {
      title: "Lead Qualification Agent",
      description: "Automatically qualify leads 24/7. Focus your team on closing instead of filtering.",
    },
    {
      title: "WhatsApp E-commerce Bot",
      description: "Sell directly on WhatsApp. Inventory sync, payment integration, and order tracking automated.",
    },
    {
      title: "Appointment Scheduling Agent",
      description: "Never miss a booking. AI handles scheduling, reminders, and cancellations automatically.",
    },
    {
      title: "Inventory Management Bot",
      description: "Real-time stock tracking and reorder automation. Prevent stockouts and overstock.",
    },
    {
      title: "Full Operations Automation",
      description: "Streamline your entire business. From customer service to internal workflows.",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Use Cases</h2>
          <p className="text-xl text-slate-300">Real business automation examples that drive results.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
              <p className="text-slate-300">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
