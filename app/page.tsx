import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/home/hero"
import { LiveDemos } from "@/components/home/live-demos"
import { WhyAgentDevAI } from "@/components/home/why-chatdevai"
import { ProcessSection } from "@/components/home/process-section"
import { TechStack } from "@/components/home/tech-stack"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"
import { Footer } from "@/components/footer"
import { OrganizationSchema } from "@/components/structured-data/organization-schema"
import { ServiceSchema } from "@/components/structured-data/service-schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WhatsApp AI Agents & Multi-Channel Automation",
  description:
    "Professional AI agent development with LangChain, LangGraph, and FastAPI. Build scalable WhatsApp automation, multi-agent systems, and custom integrations with Firebase CRM. Outperform no-code platforms with pro-code solutions.",
  keywords: [
    "WhatsApp AI",
    "AI agents",
    "LangChain",
    "FastAPI",
    "business automation",
    "multi-agent systems",
    "chatbot development",
  ],
  openGraph: {
    title: "WhatsApp AI Agents & Multi-Channel Automation | AgentDevAI",
    description:
      "Build custom AI agents for WhatsApp with LangChain, LangGraph, and FastAPI. Professional automation solutions.",
    type: "website",
  },
}

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <ServiceSchema />

      <main className="w-full overflow-hidden bg-slate-950">
        <Navbar />
        <Hero />
        <LiveDemos />
        <WhyAgentDevAI />
        <ProcessSection />
        <TechStack />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  )
}
