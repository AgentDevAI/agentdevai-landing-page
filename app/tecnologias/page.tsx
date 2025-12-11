import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TechnologiesHero } from "@/components/technologies/technologies-hero"
import { TechnologiesGrid } from "@/components/technologies/technologies-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Technologies | ChatDevAI - AI Tech Stack & Tools",
  description:
    "Our production tech stack: FastAPI, LangChain, LangGraph, Google Cloud Platform, WhatsApp API, Firebase, Supabase, and more for building enterprise AI systems.",
  keywords: ["FastAPI", "LangChain", "LangGraph", "Google Cloud Platform", "WhatsApp API", "Firebase", "AI tech stack"],
  openGraph: {
    title: "Technologies | ChatDevAI - AI Tech Stack",
    description: "Explore the technologies powering ChatDevAI's enterprise AI agent platform.",
    type: "website",
  },
}

export default function TechnologiesPage() {
  return (
    <main className="w-full overflow-hidden bg-slate-950">
      <Navbar />
      <TechnologiesHero />
      <TechnologiesGrid />
      <Footer />
    </main>
  )
}
