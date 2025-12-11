import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FAQS = [
  {
    question: "How long does it take to build a WhatsApp AI bot?",
    answer:
      "Most projects take 2-4 weeks from kick-off to deployment, depending on complexity. Simple bots can be ready in 1 week, while complex multi-agent systems may take 6-8 weeks.",
  },
  {
    question: "What's the cost of a custom AI agent?",
    answer:
      "Pricing varies based on features and complexity. Simple bots start at $5,000, while enterprise multi-agent systems can range from $15,000-$50,000+. Contact us for a custom quote.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes! All projects include 30 days of free support post-launch. We also offer monthly maintenance plans starting at $500/month for monitoring, updates, and optimizations.",
  },
  {
    question: "Can you integrate with my existing systems?",
    answer:
      "Absolutely. We specialize in integrating AI agents with CRMs (Salesforce, HubSpot), ERPs, payment gateways, databases, and custom APIs. Let us know what you need.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "We offer flexible post-launch support packages. Minor tweaks are often included in the support period, while major feature additions can be scoped separately.",
  },
]

export function ContactFAQ() {
  return (
    <section className="relative py-24 px-4 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-400">Quick answers to common questions</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-slate-900 border-slate-800 rounded-lg px-6"
            >
              <AccordionTrigger className="text-white hover:text-primary text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-slate-400">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
