import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const TESTIMONIALS = [
  {
    quote:
      "ChatDevAI built us a WhatsApp booking system that increased our appointment bookings by 300%. The AI handles everything automatically.",
    author: "Sarah Martinez",
    role: "Owner, Bella Beauty Salon",
    rating: 5,
  },
  {
    quote:
      "Their multi-agent system qualified leads and routed them perfectly. Our sales team now focuses only on hot prospects. ROI was immediate.",
    author: "James Chen",
    role: "VP Sales, TechGrow Inc",
    rating: 5,
  },
  {
    quote:
      "The e-commerce bot they built processes 500+ orders per day on WhatsApp. Customer satisfaction went from 3.2 to 4.8 stars.",
    author: "Priya Patel",
    role: "CEO, ShopFast",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Real results from real businesses using our AI agents
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-slate-900 border-slate-800 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
            >
              <div className="p-8 space-y-4">
                {/* Rating stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-300 leading-relaxed italic">"{testimonial.quote}"</p>

                <div className="border-t border-slate-800 pt-4">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
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
