import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"], display: "swap", preload: true })
const _geistMono = Geist_Mono({ subsets: ["latin"], display: "swap", preload: false })

export const metadata: Metadata = {
  metadataBase: new URL("https://chatdevai.com"),
  title: {
    default: "ChatDevAI - Pro-Code AI Agents for WhatsApp & Multi-Channel Automation",
    template: "%s | ChatDevAI",
  },
  description:
    "Build custom AI agents with LangChain, LangGraph, and FastAPI. WhatsApp automation, multi-channel integration, and scalable pro-code solutions that outperform no-code platforms.",
  keywords: [
    "AI agents",
    "WhatsApp automation",
    "LangChain",
    "LangGraph",
    "FastAPI",
    "multi-agent systems",
    "business automation",
    "chatbot development",
    "GCP",
    "Firebase",
    "pro code",
  ],
  authors: [{ name: "ChatDevAI" }],
  creator: "ChatDevAI",
  publisher: "ChatDevAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chatdevai.com",
    siteName: "ChatDevAI",
    title: "ChatDevAI - Pro-Code AI Agents for WhatsApp & Multi-Channel Automation",
    description:
      "Build custom AI agents with LangChain, LangGraph, and FastAPI. Professional WhatsApp automation and multi-channel integration.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ChatDevAI - AI Agent Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatDevAI - Pro-Code AI Agents",
    description: "Custom AI agents for WhatsApp automation with LangChain, LangGraph, and FastAPI",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    google: "google-site-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <FloatingWhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
