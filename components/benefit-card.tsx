// Server Component - Reusable benefit card
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

interface BenefitCardProps {
  title: string
  description: string
}

export function BenefitCard({ title, description }: BenefitCardProps) {
  return (
    <Card className="group p-8 bg-gradient-to-r from-slate-900/50 to-slate-800/30 border-blue-500/30 hover:border-blue-500/60 transition backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10">
      <div className="flex items-start gap-6">
        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
          <Check className="text-white" size={16} />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-slate-400 text-lg">{description}</p>
        </div>
      </div>
    </Card>
  )
}
