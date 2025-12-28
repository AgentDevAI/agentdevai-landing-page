import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BlogPagination } from "./blog-pagination"
import { type SanityDocument } from "next-sanity";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { client } from "@/sanity/client";

// const BLOG_POSTS = [
//   {
//     id: "langchain-agent-tutorial",
//     title: "Building Production-Ready AI Agents with LangChain",
//     excerpt:
//       "A comprehensive guide to creating intelligent agents that can reason, plan, and execute complex tasks using LangChain and LangGraph.",
//     category: "AI",
//     date: "December 5, 2024",
//     readTime: "12 min read",
//     image: "/langchain-tutorial.jpg",
//   },
//   {
//     id: "whatsapp-business-automation",
//     title: "WhatsApp Business Automation: Complete Implementation Guide",
//     excerpt:
//       "Learn how to integrate the WhatsApp Cloud API with your AI agents for automated customer service, sales, and support.",
//     category: "Agents",
//     date: "December 3, 2024",
//     readTime: "10 min read",
//     image: "/whatsapp-ai-chatbot.jpg",
//   },
//   {
//     id: "multi-agent-systems",
//     title: "Designing Multi-Agent Systems with LangGraph",
//     excerpt:
//       "Explore advanced patterns for building multi-agent architectures where specialized agents collaborate to solve complex problems.",
//     category: "AI",
//     date: "November 30, 2024",
//     readTime: "15 min read",
//     image: "/ai-architecture-diagram.jpg",
//   },
//   {
//     id: "gcp-deployment-guide",
//     title: "Deploying FastAPI AI Services on Google Cloud",
//     excerpt:
//       "Step-by-step guide to deploying production-ready AI agents on GCP using Cloud Run, Firestore, and Pub/Sub for scalability.",
//     category: "Business Automation",
//     date: "November 28, 2024",
//     readTime: "8 min read",
//     image: "/google-cloud-deployment.jpg",
//   },
//   {
//     id: "rag-knowledge-bases",
//     title: "Building Knowledge Bases with RAG and Vector Databases",
//     excerpt:
//       "Implement Retrieval Augmented Generation to give your AI agents access to custom knowledge bases with semantic search.",
//     category: "GCP",
//     date: "November 25, 2024",
//     readTime: "11 min read",
//     image: "/flutter-crm-dashboard.jpg",
//   },
//   {
//     id: "fastapi-webhooks",
//     title: "Building Webhooks with FastAPI for Real-Time Integrations",
//     excerpt:
//       "Learn how to create secure webhook endpoints using FastAPI to integrate with third-party services and messaging platforms.",
//     category: "Business Automation",
//     date: "November 22, 2024",
//     readTime: "9 min read",
//     image: "/google-cloud-deployment.jpg",
//   },
//   {
//     id: "supabase-auth-agents",
//     title: "Authentication & Authorization for AI Agents with Supabase",
//     excerpt:
//       "Implement secure user authentication and role-based access control for your AI agent applications using Supabase.",
//     category: "GCP",
//     date: "November 20, 2024",
//     readTime: "10 min read",
//     image: "/flutter-crm-dashboard.jpg",
//   },
//   {
//     id: "nextjs-ai-dashboard",
//     title: "Building Real-Time AI Dashboards with Next.js",
//     excerpt:
//       "Create interactive dashboards to monitor and manage your AI agents with real-time updates using Next.js and Server-Sent Events.",
//     category: "Agents",
//     date: "November 18, 2024",
//     readTime: "13 min read",
//     image: "/langchain-tutorial.jpg",
//   },
//   {
//     id: "conversation-memory",
//     title: "Implementing Conversation Memory in AI Agents",
//     excerpt:
//       "Design and implement persistent conversation memory systems that give your AI agents context across multiple interactions.",
//     category: "AI",
//     date: "November 15, 2024",
//     readTime: "11 min read",
//     image: "/ai-architecture-diagram.jpg",
//   },
// ]

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, slug, title, excerpt, category, date, readTime, image}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;


const options = { next: { revalidate: 30 } };


const POSTS_PER_PAGE = 6

export async function BlogGrid({ currentPage = 1 }: { currentPage?: number }) {
  const BLOG_POSTS = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  const totalPosts = BLOG_POSTS.length
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const paginatedPosts = BLOG_POSTS.slice(startIndex, endIndex)

  return (
    <section className="relative py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedPosts.map((post) => (
            <Link key={post._id} href={`/blog/${post.slug.current}`}>
              <Card className="group h-full overflow-hidden bg-slate-900 border-slate-800 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 cursor-pointer">
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <Image
                    src={post.image
    ? urlFor(post.image)?.width(550).height(310).url() || "/placeholder.svg"
    : "/placeholder.svg"}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
                    >
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-slate-500">{post.readTime}</span>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {totalPages > 1 && <BlogPagination currentPage={currentPage} totalPages={totalPages} />}
      </div>
    </section>
  )
}
