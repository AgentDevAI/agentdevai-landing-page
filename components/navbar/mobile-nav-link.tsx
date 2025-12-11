"use client"

import Link from "next/link"

interface MobileNavLinkProps {
  href: string
  label: string
  onClick: () => void
}

export function MobileNavLink({ href, label, onClick }: MobileNavLinkProps) {
  return (
    <Link href={href} className="block px-4 py-2 text-slate-300 hover:text-blue-400 transition" onClick={onClick}>
      {label}
    </Link>
  )
}
