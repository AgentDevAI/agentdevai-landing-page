import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UseCasesGrid } from "@/components/use-cases/use-cases-grid"
import { UseCasesHero } from "@/components/use-cases/use-cases-hero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Use Cases | AgentDevAI - WhatsApp AI Automation Solutions",
  description:
    "Discover how AgentDevAI's WhatsApp AI agents automate e-commerce, appointments, lead generation, customer service, and more. See real-world applications.",
  keywords: [
    "WhatsApp automation",
    "customer service automation",
    "e-commerce chatbots",
    "appointment booking AI",
    "lead qualification automation",
  ],
  openGraph: {
    title: "Use Cases | AgentDevAI - WhatsApp AI Automation Solutions",
    description: "Real-world applications of AI agents for business automation across industries.",
    type: "website",
  },
}

export default function UseCasesPage() {
  return (
    <main className="w-full overflow-hidden bg-slate-950">
      <Navbar />
      <UseCasesHero />
      <UseCasesGrid />
      <Footer />
    </main>
  )
}
