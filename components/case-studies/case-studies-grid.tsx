import { CaseStudyCard } from "./case-study-card"

const CASE_STUDIES = [
  {
    id: 1,
    title: "E-commerce Platform: 40% Support Cost Reduction",
    company: "RetailCo",
    industry: "E-commerce",
    challenge:
      "Manual customer support was consuming 30% of operational costs with slow response times affecting customer satisfaction.",
    solution:
      "Deployed ChatDevAI agents integrated with WhatsApp and Messenger to handle common inquiries, orders, and returns automatically.",
    results: [
      "40% reduction in support costs",
      "Response time reduced from 2 hours to 2 minutes",
      "Customer satisfaction increased 35%",
      "24/7 availability for customers",
    ],
    image: "/ecommerce-customer-service-dashboard.png",
  },
  {
    id: 2,
    title: "SaaS Onboarding: 50% Faster Time-to-Value",
    company: "CloudTech Inc",
    industry: "SaaS",
    challenge:
      "New customers faced complex onboarding with limited support availability, leading to high churn rates and poor adoption.",
    solution:
      "Built an intelligent onboarding agent that guides users through setup, answers FAQs, and provides proactive assistance via Messenger.",
    results: [
      "50% faster onboarding completion",
      "Churn rate reduced from 18% to 8%",
      "30% higher feature adoption rates",
      "Support ticket volume reduced by 45%",
    ],
    image: "/saas-onboarding-interface.jpg",
  },
  {
    id: 3,
    title: "Healthcare Provider: Appointment Automation",
    company: "MediServe",
    industry: "Healthcare",
    challenge:
      "Manual appointment scheduling was time-consuming and prone to errors, resulting in no-shows and double-bookings.",
    solution:
      "Integrated ChatDevAI agents with WhatsApp and LinkedIn to manage appointments, send reminders, and handle reschedules automatically.",
    results: [
      "No-show rate reduced from 12% to 3%",
      "80% automation of appointment handling",
      "Staff productivity increased 60%",
      "Patient satisfaction improved 42%",
    ],
    image: "/healthcare-appointment-system.png",
  },
  {
    id: 4,
    title: "Finance Services: Lead Qualification at Scale",
    company: "FinanceHub",
    industry: "Finance",
    challenge:
      "Sales team struggled to qualify leads quickly, resulting in long response times and missed opportunities on high-volume lead generation.",
    solution:
      "Deployed AI agents to qualify leads in real-time across WhatsApp, LinkedIn, and Messenger, routing only qualified leads to sales teams.",
    results: [
      "Lead qualification time reduced by 70%",
      "Sales conversion rate increased 25%",
      "Sales team focus on high-value deals",
      "Overall revenue increased by $2.4M annually",
    ],
    image: "/finance-sales-dashboard.jpg",
  },
  {
    id: 5,
    title: "Startup Growth: Multi-Channel Expansion",
    company: "StartupIO",
    industry: "Technology",
    challenge:
      "Limited resources made it difficult to manage customer interactions across multiple channels effectively.",
    solution:
      "Built unified AI agents powered by LangGraph and FastAPI integrated with WhatsApp, Messenger, and LinkedIn through single dashboard.",
    results: [
      "Unified customer experience across 3 channels",
      "Customer retention increased 55%",
      "Operational scalability without hiring",
      "Infrastructure costs optimized by 35%",
    ],
    image: "/startup-growth-metrics.jpg",
  },
  {
    id: 6,
    title: "Retail Chain: Inventory & Order Management",
    company: "RetailPro",
    industry: "Retail",
    challenge:
      "Customers had no way to check inventory, place orders, or get order updates without visiting stores or calling.",
    solution:
      "Deployed ChatDevAI agents to manage inventory queries, process orders, and provide real-time tracking via WhatsApp and Messenger.",
    results: [
      "Online orders increased by 120%",
      "In-store visits reduced 40% (better efficiency)",
      "Average order value increased 28%",
      "Customer retention up 50%",
    ],
    image: "/retail-inventory-management.png",
  },
]

export function CaseStudiesGrid() {
  return (
    <section className="py-24 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.id} {...study} />
          ))}
        </div>
      </div>
    </section>
  )
}
