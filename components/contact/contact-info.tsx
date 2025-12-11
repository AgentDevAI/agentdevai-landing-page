import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function ContactInfo() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-slate-900 border-slate-800 p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-slate-400 mb-4">Get instant responses via WhatsApp</p>
            <Button asChild className="bg-green-500 hover:bg-green-600">
              <Link href="https://wa.me/1234567890" target="_blank">
                Message Us
              </Link>
            </Button>
          </Card>

          <Card className="bg-slate-900 border-slate-800 p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-slate-400 mb-4">Send us a detailed inquiry</p>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <Link href="mailto:hello@agentdevai.com">Email Us</Link>
            </Button>
          </Card>

          <Card className="bg-slate-900 border-slate-800 p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Location</h3>
            <p className="text-slate-400">Working remotely, serving clients globally</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
