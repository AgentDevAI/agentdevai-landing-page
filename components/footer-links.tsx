export function FooterLinks() {
  return (
    <>
      {/* Product */}
      <div>
        <h4 className="text-white font-semibold mb-4">Product</h4>
        <ul className="space-y-2 text-slate-400 text-sm">
          <li>
            <a href="/servicios" className="hover:text-blue-400 transition">
              Services
            </a>
          </li>
          <li>
            <a href="/tecnologias" className="hover:text-blue-400 transition">
              Technologies
            </a>
          </li>
          <li>
            <a href="/case-studies" className="hover:text-blue-400 transition">
              Demos
            </a>
          </li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="text-white font-semibold mb-4">Company</h4>
        <ul className="space-y-2 text-slate-400 text-sm">
          <li>
            <a href="/blog" className="hover:text-blue-400 transition">
              Blog
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Legal */}
      <div>
        <h4 className="text-white font-semibold mb-4">Legal</h4>
        <ul className="space-y-2 text-slate-400 text-sm">
          <li>
            <a href="#" className="hover:text-blue-400 transition">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition">
              Cookies
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
