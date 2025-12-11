import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ShoppingCart,
  Calendar,
  Home,
  UtensilsCrossed,
  Stethoscope,
  Car,
  MessageCircleQuestion,
  Network,
  DollarSign,
  Truck,
  FileText,
  Briefcase,
} from "lucide-react"
import Link from "next/link"

const USE_CASES = [
  {
    icon: ShoppingCart,
    title: "WhatsApp E-commerce",
    description:
      "Complete shopping experience on WhatsApp: product catalog, cart, checkout, order tracking, and support.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    description:
      "Automated scheduling for salons, clinics, consultants. Check availability, book, reschedule, and get reminders.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Home,
    title: "Real Estate Lead Capture",
    description:
      "Qualify property buyers instantly. Share listings, schedule viewings, and route hot leads to agents automatically.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant Ordering",
    description:
      "Browse menu, customize orders, checkout, and track delivery. Integrated with kitchen systems and delivery platforms.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Stethoscope,
    title: "Clinic Reminders",
    description:
      "Send appointment reminders, medication schedules, lab results, and health tips. HIPAA-compliant messaging.",
    gradient: "from-teal-500 to-blue-500",
  },
  {
    icon: Car,
    title: "Car Dealership Automation",
    description:
      "Lead qualification, test drive scheduling, financing options, trade-in valuation, and inventory updates.",
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: MessageCircleQuestion,
    title: "FAQ Bots",
    description:
      "Answer common questions 24/7 using RAG on your knowledge base. Escalate complex queries to human agents.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Network,
    title: "Multi-agent Assistants",
    description:
      "Complex workflows with specialized agents: research, analysis, booking, payment processing, all coordinated seamlessly.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: DollarSign,
    title: "Loan Pre-qualification",
    description:
      "Collect applicant info, run credit checks, provide instant pre-approval, and schedule follow-ups with loan officers.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Truck,
    title: "Logistics Support",
    description:
      "Real-time shipment tracking, delivery updates, route optimization, and customer notifications for courier services.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: FileText,
    title: "SOP Automation",
    description:
      "Automate standard operating procedures: employee onboarding, compliance checks, data collection, and approvals.",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: Briefcase,
    title: "Internal Tools via WhatsApp",
    description:
      "Give teams WhatsApp access to CRM, inventory systems, HR portals, and analytics dashboards without custom apps.",
    gradient: "from-purple-500 to-indigo-500",
  },
]

export function UseCasesGrid() {
  return (
    <section className="relative py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {USE_CASES.map((useCase, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-slate-900 border-slate-800 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
            >
              <div className="p-8 space-y-4">
                {/* Icon with gradient */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                  {useCase.title}
                </h3>

                <p className="text-slate-400 leading-relaxed min-h-[96px]">{useCase.description}</p>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>

              {/* Hover gradient effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`}
              />
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-4">Don't See Your Use Case?</h3>
            <p className="text-slate-400 mb-6 max-w-2xl">
              We build custom WhatsApp AI solutions for any business need. Let's discuss your specific requirements.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              <Link href="/contact">Get Custom Solution</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
