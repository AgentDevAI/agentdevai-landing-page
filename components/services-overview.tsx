export function ServicesOverview() {
  const services = [
    {
      title: "WhatsApp AI Bots",
      description: "Cloud API-powered chatbots that handle customer service, sales, and support 24/7.",
      icon: "💬",
    },
    {
      title: "Multi-Agent Systems",
      description: "Coordinated AI agents working together to solve complex business problems.",
      icon: "🤖",
    },
    {
      title: "RAG Apps & Document Assistants",
      description: "Intelligent document processing and retrieval systems powered by vector databases.",
      icon: "📄",
    },
    {
      title: "E-commerce Automations",
      description: "AI-driven product recommendations, inventory management, and sales optimization.",
      icon: "🛍️",
    },
    {
      title: "CRM & Database Integrations",
      description: "Seamless connections between AI agents and your existing business systems.",
      icon: "📊",
    },
    {
      title: "Full GCP Deployment",
      description: "Enterprise-grade infrastructure with automatic scaling and 99.9% uptime.",
      icon: "☁️",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-slate-300">Comprehensive AI solutions for modern businesses.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/20 hover:border-blue-500/50 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition">
                {service.title}
              </h3>
              <p className="text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
