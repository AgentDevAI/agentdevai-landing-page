import type { LucideIcon } from "lucide-react"

interface DemoBenefitItemProps {
  icon: LucideIcon
  title: string
  description: string
}

export function DemoBenefitItem({ icon: Icon, title, description }: DemoBenefitItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <div>
        <h4 className="text-white font-semibold mb-1">{title}</h4>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>
    </div>
  )
}
