"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function CTANewsletter() {
  const [email, setEmail] = useState("")

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log("Subscribing:", email)
  }

  return (
    <div className="pt-8">
      <p className="text-slate-400 mb-4">Or subscribe to our newsletter:</p>
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-full bg-slate-900 border-slate-800 text-white placeholder-slate-500"
        />
        <Button
          onClick={handleSubscribe}
          className="px-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
        >
          Subscribe
        </Button>
      </div>
    </div>
  )
}
