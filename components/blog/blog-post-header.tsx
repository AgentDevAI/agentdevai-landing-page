import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, User } from "lucide-react"

interface BlogPostHeaderProps {
  title: string
  image: string
  category: string
  author: string
  date: string
  readTime: string
}

export function BlogPostHeader({ title, image, category, author, date, readTime }: BlogPostHeaderProps) {
  return (
    <>
      {/* Hero Image */}
      <section className="relative h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={title} fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
      </section>

      <div className="max-w-3xl mx-auto px-4">
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-blue-400 hover:text-cyan-300 mb-8">
          <ArrowLeft size={18} />
          Back to Blog
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">{title}</h1>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-slate-800">
          <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">{category}</span>

          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <User size={16} />
            {author}
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Clock size={16} />
            {date}
          </div>

          <div className="text-slate-400 text-sm">{readTime}</div>
        </div>
      </div>
    </>
  )
}
