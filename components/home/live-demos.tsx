import { DemoCard } from "./demo-card"
import { ShoppingCart, Calendar, Target, FileQuestion } from "lucide-react"

const DEMOS = [
  {
    icon: ShoppingCart,
    title: "WhatsApp E-commerce Bot",
    description:
      "Browse products, add to cart, and checkout directly through WhatsApp. Includes order tracking and customer support.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Calendar,
    title: "WhatsApp Booking Bot",
    description:
      "Schedule appointments, check availability, and receive reminders automatically. Perfect for salons, clinics, and services.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "WhatsApp Lead Qualification Bot",
    description:
      "Qualify leads automatically with intelligent questions, score prospects, and route to the right sales rep instantly.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: FileQuestion,
    title: "WhatsApp FAQ + RAG Bot",
    description:
      "Answer customer questions using your knowledge base with RAG. Reduces support load by 70% on average.",
    color: "from-green-500 to-emerald-500",
  },
]

export function LiveDemos() {
  return (
    <section id="live-demos" className="relative py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Try Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Live Demos</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Experience the power of WhatsApp AI automation. Scan the QR code or click to start chatting with our demo
            bots.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {DEMOS.map((demo, index) => (
            <DemoCard key={index} {...demo} />
          ))}
        </div>
      </div>
    </section>
  )
}
