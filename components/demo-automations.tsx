export function DemoAutomations() {
  const demos = [
    { title: "WhatsApp Sales Bot", description: "Real-time customer engagement and sales" },
    { title: "Lead Qualification Flow", description: "Automated lead scoring and routing" },
    { title: "Appointment Scheduler", description: "Calendar integration and confirmations" },
    { title: "Inventory Sync", description: "Real-time stock level updates" },
    { title: "Customer Support Agent", description: "24/7 intelligent customer service" },
    { title: "Order Management", description: "Tracking and fulfillment automation" },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Demo Automations</h2>
          <p className="text-xl text-slate-300">See our AI systems in action.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {demos.map((demo, index) => (
            <div
              key={index}
              className="group bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition">
                <span className="text-6xl">▶</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{demo.title}</h3>
                <p className="text-slate-400">{demo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
