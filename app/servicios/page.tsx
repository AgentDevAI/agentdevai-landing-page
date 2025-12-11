import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesCTA } from "@/components/services/services-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | AgentDevAI - WhatsApp AI Agent Development",
  description:
    "Professional WhatsApp automation, AI engineering, and GCP deployment services. Build production-grade AI systems with AgentDevAI's expert team.",
  keywords: ["AI development services", "WhatsApp automation", "AI consulting", "GCP deployment", "enterprise AI"],
  openGraph: {
    title: "Services | AgentDevAI - WhatsApp AI Agent Development",
    description: "Professional AI agent development, WhatsApp automation, and enterprise deployment services.",
    type: "website",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "AgentDevAI Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - AgentDevAI",
    description: "Professional WhatsApp automation and AI agent development services.",
    images: ["/og-services.jpg"],
  },
}

export default function ServicesPage() {
  return (
    <main className="w-full overflow-hidden bg-slate-950">
      <Navbar />
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
      <Footer />
    </main>
  )
}
