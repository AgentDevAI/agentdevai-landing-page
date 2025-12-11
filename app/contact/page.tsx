import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero-new"
import { ContactFormSection } from "@/components/contact/contact-form-section"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactFAQ } from "@/components/contact/contact-faq"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact ChatDevAI | Get Your Custom AI Bot",
  description:
    "Contact our team to build your custom WhatsApp AI agent. Fast response, free consultation available. Schedule a call today.",
  openGraph: {
    title: "Contact ChatDevAI | Get Your Custom AI Bot",
    description: "Get in touch with our AI engineering team. Free consultation for WhatsApp automation projects.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact ChatDevAI",
    description: "Contact our team to build your custom WhatsApp AI agent.",
  },
}

export default function ContactPage() {
  return (
    <main className="w-full overflow-hidden bg-slate-950">
      <Navbar />
      <ContactHero />
      <ContactFormSection />
      <ContactInfo />
      <ContactFAQ />
      <Footer />
    </main>
  )
}
