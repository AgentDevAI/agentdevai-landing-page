// Server Component - Footer brand section
export function FooterBrand() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">AI</span>
        </div>
        <span className="text-white font-bold">ChatDevAI</span>
      </div>
      <p className="text-slate-400 text-sm">Intelligent AI agents for your business.</p>
    </div>
  )
}
