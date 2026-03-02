"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold tracking-wide text-[var(--color-primary)]">
          NOMIAH
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <Link href="/services">Services</Link>
          <Link href="/governance">Governance</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-block bg-[var(--color-primary)] text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-[var(--color-primary-dark)] transition"
        >
          Enterprise Inquiry
        </Link>

        <button
          className="md:hidden text-[var(--color-primary)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white border-t">
          <Link href="/services" className="block">Services</Link>
          <Link href="/governance" className="block">Governance</Link>
          <Link href="/contact" className="block">Contact</Link>
        </div>
      )}
    </header>
  );
}