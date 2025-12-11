import { Card } from "@/components/ui/card"
import { ArrowRight, TrendingUp } from "lucide-react"
import Image from "next/image"

interface CaseStudyCardProps {
  id: number
  title: string
  company: string
  industry: string
  challenge: string
  results: string[]
  image: string
}

export function CaseStudyCard({ id, title, company, industry, challenge, results, image }: CaseStudyCardProps) {
  return (
    <Card className="group overflow-hidden bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition cursor-pointer hover:shadow-lg hover:shadow-blue-500/20">
      <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
          loading="lazy"
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">{industry}</span>
          <span className="text-xs font-semibold text-cyan-400">{company}</span>
        </div>

        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition">{title}</h3>

        <p className="text-slate-400 text-sm leading-relaxed">{challenge}</p>

        <div className="pt-4 border-t border-slate-800">
          <p className="text-xs font-semibold text-blue-400 mb-2">Key Results</p>
          <ul className="space-y-1">
            {results.slice(0, 2).map((result, idx) => (
              <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                <TrendingUp size={12} className="text-green-400" />
                {result}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={`/case-studies/${id}`}
          className="inline-flex items-center gap-2 text-blue-400 hover:text-cyan-300 transition font-semibold text-sm pt-2"
        >
          Read Full Case Study
          <ArrowRight size={16} />
        </a>
      </div>
    </Card>
  )
}
