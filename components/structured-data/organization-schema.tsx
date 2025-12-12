export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AgentDevAI",
    description:
      "Professional AI agent development with LangChain, LangGraph, and FastAPI. Build scalable WhatsApp automation and multi-channel integration.",
    url: "https://agentdevai.com",
    logo: "https://agentdevai.com/agentdevai-logo.png",
    foundingDate: "2023",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "contact@agentdevai.com",
    },
    sameAs: ["https://twitter.com/agentdevai", "https://linkedin.com/company/agentdevai", "https://github.com/agentdevai"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
