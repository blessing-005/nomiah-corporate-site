"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/">
          <Image src="/logo.png" alt="NOMIAH" width={150} height={40}/>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-8 font-medium">

          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/governance">Governance</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>

        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4">

          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/governance">Governance</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>

        </div>
      )}

    </header>
  )
}