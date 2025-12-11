"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function FloatingWhatsAppButton() {
  return (
    <Link
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
        {/* Main button */}
        <div className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="w-8 h-8 text-white" strokeWidth={2} />
        </div>

        {/* Pulse animation ring */}
        <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
          Chat on WhatsApp
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-slate-900" />
        </div>
      </div>
    </Link>
  )
}
