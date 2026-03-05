import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/">
          <Image
            src="/logo.png"
            alt="NOMIAH"
            width={160}
            height={40}
          />
        </Link>

        <nav className="hidden md:flex gap-8 font-medium">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/governance">Governance</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <a
          href="https://calendly.com/nomiah-info/30min"
          target="_blank"
          className="bg-[var(--color-primary)] text-white px-5 py-2 rounded-md font-semibold"
        >
          Book Consultation
        </a>

      </div>
    </header>
  )
}