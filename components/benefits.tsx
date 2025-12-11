"use client"

import { BenefitCard } from "./benefit-card"
import { TrustSection } from "./trust-section"

const benefits = [
  {
    title: "Real AI ROI",
    description: "Decisions that save hours and win customers through intelligent automation.",
  },
  {
    title: "Powerful Pro Code Advantage",
    description:
      "More personalized, scalable, and powerful than no-code platforms like ChatFuel, n8n, and SendPulse. Enterprise-grade customization.",
  },
]

export default function Benefits() {
  return (
    <section className="relative py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Why Choose ChatDevAI?</h2>

        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          We don't build one-size-fits-all solutions. We engineer systems that integrate your stack, scale without
          friction, and deliver metrics that matter.
        </p>

        <div className="space-y-6">
          {benefits.map((benefit, idx) => (
            <BenefitCard key={idx} {...benefit} />
          ))}
        </div>

        <TrustSection />
      </div>
    </section>
  )
}
