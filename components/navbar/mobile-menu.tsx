"use client"

import { MobileNavLink } from "./mobile-nav-link"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/servicios", label: "Services" },
  { href: "/tecnologias", label: "Technologies" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div id="mobile-navigation" className="md:hidden pb-4 space-y-2 border-t border-slate-800 mt-2">
      {NAV_LINKS.map((link) => (
        <MobileNavLink key={link.href} {...link} onClick={onClose} />
      ))}
    </div>
  )
}
