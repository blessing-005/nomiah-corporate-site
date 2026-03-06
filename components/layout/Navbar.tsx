"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        <Link href="/">
          <Image src="/logo.png" alt="NOMIAH" width={130} height={40}/>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-3">

          <Link
            href="/about"
            className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
          >
            About
          </Link>

          <Link
            href="/services"
            className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
          >
            Services
          </Link>

          <Link
            href="/governance"
            className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
          >
            Governance
          </Link>

          <Link
            href="/careers"
            className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
          >
            Careers
          </Link>

          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
          >
            Contact
          </Link>

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