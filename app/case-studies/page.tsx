import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CaseStudiesHero } from "@/components/case-studies/case-studies-hero"
import { CaseStudiesGrid } from "@/components/case-studies/case-studies-grid"
import { CaseStudiesCTA } from "@/components/case-studies/case-studies-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies - ChatDevAI Success Stories | Real Results",
  description:
    "See how ChatDevAI helped businesses achieve 40% cost reduction, 50% faster onboarding, and increased revenue through AI automation. Read real customer success stories.",
  keywords: ["case studies", "AI success stories", "ROI", "automation results", "customer testimonials"],
  openGraph: {
    title: "Case Studies - ChatDevAI Success Stories",
    description: "Real results from businesses using ChatDevAI's AI agents and automation solutions.",
    type: "website",
  },
}

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <CaseStudiesHero />
        <CaseStudiesGrid />
        <CaseStudiesCTA />
      </main>
      <Footer />
    </>
  )
}
