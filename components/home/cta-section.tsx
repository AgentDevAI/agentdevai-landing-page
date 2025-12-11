import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-r from-primary via-accent to-primary rounded-3xl p-12 md:p-16 text-center">
          {/* Animated background pattern */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />

          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Want a Powerful WhatsApp AI Bot?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Let's build it together. Get a custom solution tailored to your business needs.
            </p>

            <Button asChild size="lg" className="bg-white text-primary hover:bg-slate-100 text-lg h-14 px-8">
              <Link href="https://wa.me/1234567890" target="_blank">
                <MessageCircle className="mr-2 h-5 w-5" />
                Message on WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
