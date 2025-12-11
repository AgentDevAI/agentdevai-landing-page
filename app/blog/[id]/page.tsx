import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"
import { BlogPostHeader } from "@/components/blog/blog-post-header"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import { BlogPostAuthor } from "@/components/blog/blog-post-author"
import { BlogRelatedPosts } from "@/components/blog/blog-related-posts"
import { ScrollToTop } from "@/components/blog/scroll-to-top"

const blogPosts = [
  {
    id: "langchain-agent-tutorial",
    title: "Complete Guide: Building AI Agents with LangChain",
    date: "28 Nov 2024",
    category: "Tutorial",
    readTime: "12 min read",
    author: "Sarah Chen",
    image: "/langchain-tutorial.jpg",
    content: `
      <h2>Introduction to LangChain</h2>
      <p>LangChain is a powerful framework for developing applications powered by language models. It enables AI agents to reason, act, and make decisions based on complex logic chains.</p>
      
      <p>In this comprehensive guide, we'll walk through building production-ready AI agents from scratch using LangChain, Python, and modern best practices.</p>
      
      <h2>Getting Started</h2>
      <p>Before you begin, you'll need to set up LangChain in your project. Install the required dependencies:</p>
      
      <pre>
pip install langchain openai chromadb
pip install langchain-community
      </pre>
      
      <p>Configure your environment variables for API access:</p>
      
      <pre>
export OPENAI_API_KEY="your-api-key-here"
export LANGCHAIN_API_KEY="your-langchain-key"
      </pre>
      
      <h2>Building Your First Agent</h2>
      <p>Learn how to create a basic AI agent that can process user input, access external tools, and return intelligent responses. We'll build a simple customer service chatbot as our first example.</p>
      
      <pre>
from langchain.agents import AgentExecutor, create_openai_functions_agent
from langchain.prompts import ChatPromptTemplate

# Define agent prompt
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful customer service agent."),
    ("user", "{input}"),
])

# Create agent
agent = create_openai_functions_agent(llm, tools, prompt)
agent_executor = AgentExecutor(agent=agent, tools=tools)
      </pre>
      
      <h2>Advanced Patterns</h2>
      <p>Explore more complex patterns including multi-step reasoning, memory management, and tool integration. These patterns enable you to build production-ready agents.</p>
      
      <h3>Memory Management</h3>
      <p>Implement conversation memory to maintain context across interactions:</p>
      
      <pre>
from langchain.memory import ConversationBufferMemory

memory = ConversationBufferMemory(
    memory_key="chat_history",
    return_messages=True
)
      </pre>
      
      <h2>Best Practices</h2>
      <p>Follow our recommendations for error handling, performance optimization, and security when deploying LangChain agents in production environments.</p>
      
      <ul>
        <li>Always implement rate limiting and error handling</li>
        <li>Use async operations for better performance</li>
        <li>Monitor token usage and costs</li>
        <li>Implement proper logging and observability</li>
      </ul>
    `,
  },
  {
    id: "whatsapp-business-automation",
    title: "WhatsApp + AI: Transforming Customer Service",
    date: "25 Nov 2024",
    category: "Use Cases",
    readTime: "10 min read",
    author: "Marcus Johnson",
    image: "/whatsapp-ai-chatbot.jpg",
    content: `
      <h2>The WhatsApp Opportunity</h2>
      <p>With over 2 billion users, WhatsApp presents an unprecedented opportunity for businesses to engage customers directly. When combined with AI agents, it becomes a powerful customer service tool.</p>
      
      <h2>Integration Architecture</h2>
      <p>Understand the technical architecture for integrating AI agents with WhatsApp. We'll cover API setup, message handling, and response routing.</p>
      
      <h2>Building Contextual Conversations</h2>
      <p>Learn how to maintain conversation context across multiple interactions, enabling your agents to provide personalized, relevant responses.</p>
      
      <h2>Real-World Implementation</h2>
      <p>See how a mid-sized e-commerce company reduced support tickets by 45% while improving customer satisfaction through WhatsApp AI agents.</p>
      
      <h2>Scaling and Monitoring</h2>
      <p>Discover best practices for scaling your WhatsApp integration and monitoring agent performance in production.</p>
    `,
  },
  {
    id: "multi-agent-systems",
    title: "Cross-Platform CRM with Flutter: Best Practices",
    date: "22 Nov 2024",
    category: "Development",
    readTime: "14 min read",
    author: "Emma Rodriguez",
    image: "/flutter-crm-dashboard.jpg",
    content: `
      <h2>Why Flutter for CRM?</h2>
      <p>Flutter provides a powerful, efficient framework for building cross-platform CRM applications. Learn why it's becoming the go-to choice for enterprise mobile solutions.</p>
      
      <h2>Architecture and Design Patterns</h2>
      <p>Explore best practices for structuring a Flutter CRM application, including state management, data persistence, and API integration.</p>
      
      <h2>Firebase Integration</h2>
      <p>Harness the power of Firebase for real-time data synchronization, authentication, and scalable backend infrastructure for your CRM.</p>
      
      <h2>Building Conversation Management</h2>
      <p>Implement robust conversation management features including message history, user tagging, and conversation routing.</p>
      
      <h2>Performance Optimization</h2>
      <p>Ensure your CRM remains responsive and efficient even with thousands of conversations. We cover caching, lazy loading, and database optimization.</p>
    `,
  },
  {
    id: "gcp-deployment-guide",
    title: "LangGraph vs LangChain: When to Use Each",
    date: "20 Nov 2024",
    category: "Architecture",
    readTime: "11 min read",
    author: "James Wei",
    image: "/ai-architecture-diagram.jpg",
    content: `
      <h2>Understanding the Difference</h2>
      <p>LangChain and LangGraph serve different purposes in AI application development. LangChain is a general framework for LLM applications, while LangGraph specializes in state machines and complex workflows.</p>
      
      <h2>LangChain Use Cases</h2>
      <p>LangChain excels at building basic conversational agents, question-answering systems, and simple LLM-powered applications. It's perfect for getting started quickly.</p>
      
      <h2>LangGraph for Complex Workflows</h2>
      <p>When you need sophisticated state management, conditional logic, and multi-step workflows, LangGraph provides the structure and control you need.</p>
      
      <h2>Comparative Performance</h2>
      <p>Compare the performance characteristics, learning curve, and development speed of both frameworks with real examples.</p>
      
      <h2>Making Your Choice</h2>
      <p>A decision matrix to help you choose the right tool based on your specific requirements and project goals.</p>
    `,
  },
  {
    id: "rag-knowledge-bases",
    title: "GCP and Python: Deploying AI Agents in Production",
    date: "18 Nov 2024",
    category: "DevOps",
    readTime: "15 min read",
    author: "Lisa Park",
    image: "/google-cloud-deployment.jpg",
    content: `
      <h2>Why Google Cloud Platform?</h2>
      <p>GCP provides enterprise-grade infrastructure for deploying AI applications. Learn about the services and tools that make it ideal for production AI agent deployment.</p>
      
      <h2>Setting Up Your Environment</h2>
      <p>Configure GCP projects, manage credentials, and set up the necessary services for running Python-based AI agents at scale.</p>
      
      <h2>Containerization with Docker</h2>
      <p>Package your AI agents in Docker containers for consistent deployment across different environments.</p>
      
      <h2>Kubernetes Orchestration</h2>
      <p>Deploy your containerized agents on GKE (Google Kubernetes Engine) for automatic scaling, load balancing, and high availability.</p>
      
      <h2>Monitoring and Observability</h2>
      <p>Implement comprehensive monitoring, logging, and alerting for your production AI agents using GCP's monitoring tools.</p>
    `,
  },
  {
    id: "fastapi-webhooks",
    title: "Multi-Channel Integration: LinkedIn, Messenger and More",
    date: "15 Nov 2024",
    category: "Integration",
    readTime: "13 min read",
    author: "David Kim",
    image: "/multi-channel-messaging.jpg",
    content: `
      <h2>The Multi-Channel Advantage</h2>
      <p>Reaching customers where they are is critical. Learn how to integrate AI agents across multiple platforms from a single, unified system.</p>
      
      <h2>Channel-Specific Considerations</h2>
      <p>Each platform has unique constraints and capabilities. We cover LinkedIn messaging, Facebook Messenger, WhatsApp, and more.</p>
      
      <h2>Unified Message Processing</h2>
      <p>Abstract platform differences and implement a unified message processing pipeline that works across all channels.</p>
      
      <h2>Conversation Continuity</h2>
      <p>Ensure seamless experience when customers interact across multiple channels or continue conversations on different platforms.</p>
      
      <h2>Analytics and Attribution</h2>
      <p>Track and attribute customer interactions across channels to understand the full customer journey and agent performance.</p>
    `,
  },
  {
    id: "supabase-auth-agents",
    title: "Authentication & Authorization for AI Agents with Supabase",
    date: "13 Nov 2024",
    category: "Security",
    readTime: "10 min read",
    author: "Olivia Martinez",
    image: "/flutter-crm-dashboard.jpg",
    content: `
      <h2>Secure Your AI Agents</h2>
      <p>This post walks through using Supabase to add authentication and role-based access control to your AI agent applications.</p>

      <h2>Getting Started with Supabase</h2>
      <p>Set up a Supabase project, configure authentication providers, and secure API endpoints used by your agents.</p>

      <h2>Role-Based Access Control</h2>
      <p>Define roles and policies to control what agents and users can access. Example policies for row-level security are provided.</p>

      <h2>Best Practices</h2>
      <ul>
        <li>Rotate keys regularly and use environment variables</li>
        <li>Audit authentication events and failed attempts</li>
        <li>Enforce least-privilege for service accounts used by agents</li>
      </ul>
    `,
  },
  {
    id: "nextjs-ai-dashboard",
    title: "Building Real-Time AI Dashboards with Next.js",
    date: "10 Nov 2024",
    category: "Frontend",
    readTime: "13 min read",
    author: "Carlos Mendes",
    image: "/langchain-tutorial.jpg",
    content: `
      <h2>Real-Time Observability</h2>
      <p>Learn how to build dashboards to monitor AI agents in real time using Next.js, Server-Sent Events, and lightweight backends.</p>

      <h2>Architecture Overview</h2>
      <p>We cover data pipelines, event-driven updates, and strategies for maintaining performance when rendering many widgets.</p>

      <h2>Interactive Visualizations</h2>
      <p>Implement charts, logs, and alerting panels that help operators understand agent behavior and system health.</p>

      <h2>Deployment Tips</h2>
      <p>Optimise for low latency, cache intelligently, and use edge rendering where appropriate for the best UX.</p>
    `,
  },
  {
    id: "conversation-memory",
    title: "Implementing Conversation Memory in AI Agents",
    date: "08 Nov 2024",
    category: "AI",
    readTime: "11 min read",
    author: "Priya Nair",
    image: "/ai-architecture-diagram.jpg",
    content: `
      <h2>Why Memory Matters</h2>
      <p>Conversation memory enables agents to maintain context across sessions, improving relevance and user experience.</p>

      <h2>Memory Models</h2>
      <p>Explore short-term vs long-term memory strategies and when to persist data to a vector store or database.</p>

      <h2>Implementation Patterns</h2>
      <p>Examples include session-based buffers, summarization of long conversations, and retrieval-augmented memory lookups.</p>

      <h2>Privacy Considerations</h2>
      <p>Discuss data retention policies, consent, and anonymization techniques when storing conversation history.</p>
    `,
  },
]

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    return {
      title: "Post Not Found - AgentDevAI Blog",
    }
  }

  return {
    title: `${post.title} - AgentDevAI Blog`,
    description: `${post.title}. ${post.readTime} by ${post.author}. Learn about ${post.category.toLowerCase()} for AI agents and automation.`,
    keywords: [post.category, "AI agents", "automation", "LangChain", "WhatsApp"],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: `${post.readTime} by ${post.author}`,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: `${post.readTime} by ${post.author}`,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
            <Link href="/blog" className="text-blue-400 hover:text-cyan-300">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3)
    .map(({ id, title, category, date, image }) => ({
      id,
      title,
      category,
      date,
      image,
    }))

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: `https://chatdevai.com${post.image}`,
    datePublished: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "AgentDevAI",
      logo: {
        "@type": "ImageObject",
        url: "https://chatdevai.com/chatdevai-logo.png",
      },
    },
    description: `${post.title}. ${post.readTime} by ${post.author}.`,
    articleSection: post.category,
  }

  return (
    <>
      <ScrollToTop />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Navbar />
      <main className="pt-20">
        <BlogPostHeader
          title={post.title}
          image={post.image}
          category={post.category}
          author={post.author}
          date={post.date}
          readTime={post.readTime}
        />

        <article className="py-16 bg-slate-950">
          <BlogPostContent content={post.content} />
          <BlogPostAuthor author={post.author} />
        </article>

        <BlogRelatedPosts posts={relatedPosts} />
      </main>
      <Footer />
    </>
  )
}
