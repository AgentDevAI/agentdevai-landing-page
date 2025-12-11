import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutMission } from "@/components/about/about-mission"
import { AboutExpertise } from "@/components/about/about-expertise"
import { AboutProfile } from "@/components/about/about-profile"
import { AboutPartners } from "@/components/about/about-partners"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About ChatDevAI - Agentic AI Engineering",
  description:
    "Meet the team behind ChatDevAI. We're agentic AI engineers and FastAPI/LangChain specialists building the future of business automation with pro-code solutions.",
  keywords: ["AI engineering", "LangChain experts", "FastAPI specialists", "AI team", "about ChatDevAI"],
  openGraph: {
    title: "About ChatDevAI - Agentic AI Engineering Team",
    description: "Pro-code AI engineers specializing in LangChain, FastAPI, and enterprise AI agent development.",
    type: "website",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "ChatDevAI Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About ChatDevAI - Agentic AI Engineering",
    description: "Meet the team building the future of business automation with pro-code AI solutions.",
    images: ["/og-about.jpg"],
  },
}

export default function AboutPage() {
  return (
    <main className="w-full overflow-hidden bg-slate-950">
      <Navbar />
      <AboutHero />
      <AboutMission />
      <AboutExpertise />
      <AboutProfile />
      <AboutPartners />
      <Footer />
    </main>
  )
}
