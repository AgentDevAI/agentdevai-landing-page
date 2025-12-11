"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function BlogNewsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-3xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl p-12 border border-primary/30 text-center">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Stay Updated with AI Insights</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Get the latest tutorials, best practices, and updates on AI agent development delivered to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-slate-900 border-slate-700 text-white placeholder-slate-500"
              />
              <Button type="submit" size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
