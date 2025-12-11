// Server Component - Footer bottom section
export function FooterBottom() {
  return (
    <div className="border-t border-slate-800 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
        <p>© 2025 ChatDevAI. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-400 transition">
            Twitter
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
