import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DemoForm } from "@/components/schedule-demo/demo-form"
import { DemoBenefits } from "@/components/schedule-demo/demo-benefits"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Schedule Demo - See ChatDevAI in Action | Free Consultation",
  description:
    "Book a personalized 30-minute demo to see how ChatDevAI can transform your business with intelligent AI agents. No pressure, expert guidance included.",
  openGraph: {
    title: "Schedule Demo - ChatDevAI",
    description: "Book a personalized demo to see how ChatDevAI transforms business operations with AI agents.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ScheduleDemoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center px-4 py-24 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Schedule Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Personalized Demo
              </span>
            </h1>
            <p className="text-xl text-slate-300">
              See how ChatDevAI's pro code solutions can transform your business with intelligent, scalable AI agents.
            </p>
          </div>
        </section>

        {/* Demo Form Section */}
        <section className="py-24 px-4 bg-slate-950">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <DemoForm />
            <DemoBenefits />
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-12">Trusted by Innovative Teams</h2>
            <p className="text-slate-300 mb-8">
              Leading companies are already using ChatDevAI to build intelligent, scalable AI agents for their
              operations.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
