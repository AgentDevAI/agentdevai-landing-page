// Server Component - Trust badges
export function TrustSection() {
  return (
    <div className="mt-16 pt-16 border-t border-slate-800">
      <p className="text-center text-slate-500 text-sm mb-8">TRUSTED BY</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50 hover:opacity-75 transition">
        <div className="text-white font-bold">Tech Leaders</div>
        <div className="text-white font-bold">Enterprise Apps</div>
        <div className="text-white font-bold">Global Companies</div>
        <div className="text-white font-bold">Startups</div>
      </div>
    </div>
  )
}
