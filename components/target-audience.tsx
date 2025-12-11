// Server Component - Target audience
import { Card } from "@/components/ui/card"

const industries = [
  "Startups",
  "Service businesses",
  "E-commerce",
  "Real estate",
  "Health clinics",
  "Financial services",
  "Agencies",
  "Corporations needing custom automation",
]

export default function TargetAudience() {
  return (
    <section className="relative py-24 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">We Work with Ambitious Teams</h2>
          <p className="text-xl text-slate-300">
            If your business handles communication, data, or repetitive workflows — we can automate it.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {industries.map((industry, idx) => (
            <Card
              key={idx}
              className="p-6 bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition text-center"
            >
              <p className="text-white font-semibold">{industry}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
