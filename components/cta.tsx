"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CTANewsletter } from "./cta-newsletter"

export default function CTA() {
  return (
    <section className="relative py-24 px-4 bg-slate-950 border-t border-slate-800">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Ready to Transform Your Conversations?
        </h2>

        <p className="text-xl text-slate-400 leading-relaxed">
          Don't wait. Schedule a 30-minute session and discover how AI can scale your business with intelligent agents.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/schedule-demo">
            <Button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
              Schedule Demo
            </Button>
          </Link>
          <Link href="/case-studies">
            <Button
              variant="outline"
              className="px-8 py-4 rounded-full border-slate-600 hover:border-slate-400 text-white font-semibold text-lg bg-transparent"
            >
              View Case Studies
            </Button>
          </Link>
        </div>

        <CTANewsletter />
      </div>
    </section>
  )
}
