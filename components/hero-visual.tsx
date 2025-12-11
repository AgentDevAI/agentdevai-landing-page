// Server Component - Static visual element
export function HeroVisual() {
  return (
    <div className="relative h-96 lg:h-full flex items-center justify-center">
      <div className="relative w-80 h-80">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 opacity-30 blur-2xl animate-pulse"></div>
        <div className="absolute inset-8 rounded-full border-2 border-blue-400/30 backdrop-blur-sm"></div>
        <div className="absolute inset-16 rounded-full border border-cyan-400/20"></div>
        <div className="absolute inset-1/3 rounded-full bg-gradient-to-br from-blue-400 to-cyan-600 opacity-10 blur-xl flex items-center justify-center">
          <svg
            className="text-blue-400"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}
