import Link from "next/link"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/servicios", label: "Services" },
  { href: "/tecnologias", label: "Technologies" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function NavLinks() {
  return (
    <>
      {NAV_LINKS.map((link) => (
        <Link key={link.href} href={link.href} className="text-slate-300 hover:text-blue-400 transition">
          {link.label}
        </Link>
      ))}
    </>
  )
}
