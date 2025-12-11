// Server Component - Pricing section
import { Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const pricingPlans = [
  {
    name: "Starter",
    subtitle: "For small businesses",
    price: "$149",
    period: "/month",
    features: ["Smart chatbot", "1–2 integrations", "Basic automation"],
    cta: "Get Started",
  },
  {
    name: "Growth",
    subtitle: "Most popular",
    price: "$399",
    period: "/month",
    features: ["Deep agents", "CRM integration", "Multi-channel automation", "Custom workflows"],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    subtitle: "Full automation system",
    price: "Custom",
    period: "pricing",
    features: ["Multiple agents", "Custom backend logic", "Full integrations", "Dedicated engineer"],
    cta: "Contact Sales",
  },
]

export default function Pricing() {
  return (
    <section className="relative py-24 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-slate-300">Choose the plan that scales with your business.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => (
            <Card
              key={idx}
              className={`p-8 flex flex-col transition ${
                plan.highlighted
                  ? "bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-blue-500/50 md:scale-105"
                  : "bg-slate-900/50 border-slate-800 hover:border-blue-500/50"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-sm text-slate-400 mb-4">{plan.subtitle}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-slate-400">/{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-center gap-3 text-slate-300">
                    <Check className="text-blue-400 flex-shrink-0" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full rounded-full font-semibold py-3 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                    : "border border-slate-600 hover:border-blue-400 text-white bg-transparent"
                }`}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
