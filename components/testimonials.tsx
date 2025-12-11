export function Testimonials() {
  const testimonials = [
    {
      quote:
        "AgentDevAI transformed our customer service. We reduced response time by 80% and tripled our sales conversion with their WhatsApp bot.",
      author: "Maria Santos",
      role: "E-commerce Director",
      company: "TechStore Brasil",
    },
    {
      quote:
        "The RAG system they built processes our documentation instantly. Our support team now focuses on complex issues instead of repetitive questions.",
      author: "Carlos Rodrigues",
      role: "CTO",
      company: "FinServ Solutions",
    },
    {
      quote:
        "Our lead qualification improved dramatically. AgentDevAI's AI agents now handle 90% of initial outreach, saving us 200 hours monthly.",
      author: "Ana Silva",
      role: "Sales Manager",
      company: "Growth Marketing Co",
    },
    {
      quote:
        "Professional engineering meets AI expertise. They understood our complex business logic and built something that actually scales.",
      author: "João Costa",
      role: "Operations Manager",
      company: "Logistics Plus",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Testimonials</h2>
          <p className="text-xl text-slate-300">See how businesses are transforming with AgentDevAI.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-lg text-slate-300 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="text-white font-bold">{testimonial.author}</p>
                <p className="text-slate-400 text-sm">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
