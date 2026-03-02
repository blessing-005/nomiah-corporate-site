import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-white py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-[var(--color-primary)]">
            Building Secure Digital Infrastructure for Modern Enterprises
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Governance-led software engineering, cybersecurity, and regulatory-aligned
            digital transformation solutions across South Africa and globally.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <Link
              href="/contact"
              className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-md font-semibold hover:bg-[var(--color-primary-dark)] transition"
            >
              Speak to Enterprise Team
            </Link>

            <Link
              href="/services"
              className="border border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded-md font-semibold hover:bg-gray-50 transition"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* Governance Strip */}
      <section className="bg-[var(--color-primary)] text-white py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-6 text-center text-sm font-medium">
          <div>ISO 27001-Aligned ISMS</div>
          <div>POPIA Compliant</div>
          <div>Enterprise MSA Ready</div>
          <div>Business Continuity Framework</div>
          <div>Risk Management Structured</div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-24 bg-light">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center text-[var(--color-primary)] mb-16">
            Strategic Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="font-semibold mb-3">Enterprise Software Engineering</h3>
              <p className="text-gray-600 text-sm">
                Secure, scalable custom platforms built for regulated and growth-focused environments.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Cybersecurity & IT Infrastructure</h3>
              <p className="text-gray-600 text-sm">
                Secure-by-design systems architecture and infrastructure governance.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Regulatory & Compliance Advisory</h3>
              <p className="text-gray-600 text-sm">
                POPIA-aligned frameworks and ISO 27001-structured information security systems.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}