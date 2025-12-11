// Server Component - Integrations showcase
import { MessageCircle, Briefcase, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

const integrationCategories = [
  {
    icon: MessageCircle,
    title: "Messaging & Communication",
    items: ["WhatsApp", "Messenger", "Instagram", "Web chat widgets", "Email (Gmail, Outlook)", "Telegram"],
  },
  {
    icon: Briefcase,
    title: "Sales & Operations",
    items: ["LinkedIn outreach automation", "HubSpot", "Salesforce", "Zoho", "Custom CRMs"],
  },
  {
    icon: Zap,
    title: "Internal Tools & APIs",
    items: ["Custom APIs", "Databases (SQL, NoSQL)", "Webhooks", "Calendars", "Custom enterprise systems"],
  },
]

export default function IntegrationsSection() {
  return (
    <section className="relative py-24 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Integrations That Connect</h2>
          <p className="text-xl text-slate-300">
            If it has an API, we can connect it. Integrate with whatever your business uses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {integrationCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <Card key={idx} className="p-8 bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
                <div className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
