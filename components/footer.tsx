"use client"
import { FooterBrand } from "./footer-brand"
import { FooterBottom } from "./footer-bottom"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <FooterBrand />

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-blue-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/tecnologias" className="hover:text-blue-400 transition">
                  Technologies
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="hover:text-blue-400 transition">
                  Use Cases
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-blue-400 transition">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/schedule-demo" className="hover:text-blue-400 transition">
                  Schedule Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="mailto:hello@chatdevai.com" className="hover:text-blue-400 transition">
                  hello@chatdevai.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  WhatsApp Support
                </a>
              </li>
              <li>
                <span className="text-slate-500">Working Remotely</span>
              </li>
            </ul>
          </div>
        </div>
        <FooterBottom />
      </div>
    </footer>
  )
}

export default Footer
