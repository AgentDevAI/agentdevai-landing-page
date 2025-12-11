import { MessageSquare, BarChart3, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FeatureCard } from "./feature-card"

const features = [
  {
    icon: MessageSquare,
    title: "Conversational AI Agents",
    description: "Create intelligent chatbots with LangChain that understand context and learn from every interaction.",
  },
  {
    icon: BarChart3,
    title: "Intelligent CRM",
    description:
      "Manage all your conversations in one place with our cross-platform CRM built with Flutter and Firebase.",
  },
  {
    icon: Zap,
    title: "Multi-Channel Integration",
    description: "Connect your agents to WhatsApp, Messenger, LinkedIn and more with a single configuration.",
  },
]

export default function Features() {
  return (
    <section className="relative py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">Power Your Business with AI</h2>
        <p className="text-center text-slate-300 mb-16 max-w-2xl mx-auto">
          Enterprise AI solutions that connect, converse, and convert.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            className="rounded-full border-slate-700 hover:border-blue-400 text-white bg-transparent"
          >
            Explore Features
          </Button>
        </div>
      </div>
    </section>
  )
}
