// Server Component - Reusable feature card
import { Card } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="group p-8 bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20">
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition">
        <Icon className="text-white" size={28} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-300 leading-relaxed">{description}</p>
    </Card>
  )
}
