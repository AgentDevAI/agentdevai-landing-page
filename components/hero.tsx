"use client"
import { HeroContent } from "./hero-content"
import { HeroVisual } from "./hero-visual"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background Gradient Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 opacity-15 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  )
}
