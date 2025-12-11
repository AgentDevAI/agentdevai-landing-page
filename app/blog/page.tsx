import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogNewsletter } from "@/components/blog/blog-newsletter"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | ChatDevAI - AI Agents, Automation & Best Practices",
  description:
    "Learn about AI agents, multi-agent systems, WhatsApp automation, and business automation best practices. Expert insights from ChatDevAI engineers.",
  keywords: ["AI blog", "automation tutorials", "LangChain guides", "WhatsApp automation", "AI best practices"],
  openGraph: {
    title: "Blog | ChatDevAI - AI Agents & Automation Insights",
    description: "Expert tutorials, guides, and insights on AI agents, automation, and enterprise AI development.",
    type: "website",
    images: [
      {
        url: "/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "ChatDevAI Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatDevAI Blog - AI Agents & Automation",
    description: "Expert tutorials and insights on AI agents, LangChain, and business automation.",
    images: ["/og-blog.jpg"],
  },
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const params = await searchParams
  const currentPage = Number(params.page) || 1

  return (
    <main className="w-full overflow-hidden bg-slate-950">
      <Navbar />
      <BlogHero />
      <BlogGrid currentPage={currentPage} />
      <BlogNewsletter />
      <Footer />
    </main>
  )
}
