"use client"

import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface RelatedPostLinkProps {
  id: string
  title: string
  category: string
  date: string
  image: string
}

export function RelatedPostLink({ id, title, category, date, image }: RelatedPostLinkProps) {
  const router = useRouter()

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" })
    router.push(`/blog/${id}`)
  }

  return (
    <Card
      onClick={handleClick}
      className="h-full bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition cursor-pointer overflow-hidden group"
    >
      <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-6 space-y-3">
        <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">{category}</span>
        <h3 className="font-semibold text-lg text-white group-hover:text-blue-400 transition line-clamp-2">{title}</h3>
        <p className="text-sm text-slate-400">{date}</p>
      </div>
    </Card>
  )
}
