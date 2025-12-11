import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, QrCode, type LucideIcon } from "lucide-react"
import Link from "next/link"

interface DemoCardProps {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export function DemoCard({ icon: Icon, title, description, color }: DemoCardProps) {
  return (
    <Card className="group relative overflow-hidden bg-slate-900 border-slate-800 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
      <div className="p-8 space-y-4">
        {/* Icon with gradient */}
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center group-hover:scale-110 transition-transform`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{title}</h3>

        <p className="text-slate-400 leading-relaxed">{description}</p>

        <div className="flex items-center gap-4 pt-4">
          <Button asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
            <Link href="#contact">
              <MessageCircle className="mr-2 h-4 w-4" />
              Try Demo
            </Link>
          </Button>

          <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
            <QrCode className="w-16 h-16 text-slate-900" />
          </div>
        </div>
      </div>

      {/* Hover gradient effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity -z-10`}
      />
    </Card>
  )
}
