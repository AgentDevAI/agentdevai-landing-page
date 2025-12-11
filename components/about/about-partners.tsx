import Image from "next/image"

const PARTNERS = [
  { name: "Google Cloud", logo: "/images/partners/google-cloud-logo.png" },
  { name: "WhatsApp", logo: "/whatsapp-business-api-logo.jpg" },
  { name: "LangChain", logo: "/langchain-logo.png" },
  { name: "FastAPI", logo: "/fastapi-logo.svg" },
]

export function AboutPartners() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powered By Industry Leaders</h2>
          <p className="text-slate-400">We build on proven, enterprise-grade technology</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {PARTNERS.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-primary/30 transition-all"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="w-auto h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
