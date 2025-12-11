export function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Agent Development",
    provider: {
      "@type": "Organization",
      name: "AgentDevAI",
      url: "https://agentdevai.com",
    },
    description:
      "Professional AI agent development services including WhatsApp automation, multi-channel integration, and custom AI solutions using LangChain, LangGraph, and FastAPI.",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "WhatsApp AI Agent Development",
            description: "Custom AI agents for WhatsApp Business automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Multi-Agent Systems",
            description: "Complex multi-agent architectures with LangGraph",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "GCP Deployment",
            description: "Production deployment on Google Cloud Platform",
          },
        },
      ],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
