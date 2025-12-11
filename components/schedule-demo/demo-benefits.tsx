import { Card } from "@/components/ui/card"
import { CheckCircle2, Calendar, Clock, Users } from "lucide-react"
import { DemoBenefitItem } from "./demo-benefit-item"

const DEMO_BENEFITS = [
  {
    icon: Clock,
    title: "30-Minute Session",
    description: "A focused conversation about your specific needs and use cases.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Our team will guide you through AgentDevAI's capabilities and architecture.",
  },
  {
    icon: CheckCircle2,
    title: "Custom Solution Overview",
    description: "We'll outline how AgentDevAI can be tailored to your requirements.",
  },
  {
    icon: Calendar,
    title: "No Pressure",
    description: "We're here to answer questions and help you make the best decision for your business.",
  },
]

export function DemoBenefits() {
  return (
    <div className="flex flex-col justify-center space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">What to Expect</h3>
        <p className="text-slate-300 mb-6">
          Our personalized demo is tailored to your business needs. You'll see exactly how AgentDevAI can solve your
          challenges.
        </p>
      </div>

      <div className="space-y-4">
        {DEMO_BENEFITS.map((benefit, index) => (
          <DemoBenefitItem key={index} {...benefit} />
        ))}
      </div>

      <Card className="bg-blue-500/10 border-blue-500/30 p-6 mt-6">
        <p className="text-slate-300 text-sm">
          <span className="text-blue-400 font-semibold">Pro Tip:</span> Have your team's specific pain points and goals
          ready for the most valuable demo experience.
        </p>
      </Card>
    </div>
  )
}
