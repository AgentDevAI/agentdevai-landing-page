export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AgentDevAI",
    description:
      "Professional AI agent development with LangChain, LangGraph, and FastAPI. Build scalable WhatsApp automation and multi-channel integration.",
    url: "https://chatdevai.com",
    logo: "https://chatdevai.com/chatdevai-logo.png",
    foundingDate: "2023",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "contact@chatdevai.com",
    },
    sameAs: ["https://twitter.com/chatdevai", "https://linkedin.com/company/chatdevai", "https://github.com/chatdevai"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
