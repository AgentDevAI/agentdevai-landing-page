import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function ServicesCTA() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl p-12 border border-primary/30 text-center">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Build Your AI Solution?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Request a quote or schedule a consultation to discuss your project requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                <Link href="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Request Quote
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                <Link href="https://wa.me/1234567890" target="_blank">
                  WhatsApp Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
