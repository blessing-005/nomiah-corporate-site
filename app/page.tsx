import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center text-white">

        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center max-w-4xl px-6">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Engineering Secure Digital Infrastructure
            for Africa and Beyond
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Enterprise software engineering, cybersecurity systems,
            and governance-aligned digital transformation.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <a
              href="/contact"
              className="bg-[var(--color-primary)] px-6 py-3 rounded-md font-semibold"
            >
              Book Consultation
            </a>

            <a
              href="/services"
              className="border border-white px-6 py-3 rounded-md"
            >
              Explore Capabilities
            </a>
          </div>

        </div>

      </section>

      {/* Credibility Strip */}
      <section className="bg-white py-20 border-t">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">

          <div>
            <h3 className="text-4xl font-bold text-[var(--color-primary)]">Enterprise</h3>
            <p className="mt-2 text-gray-600">Governance Framework</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[var(--color-primary)]">ISO</h3>
            <p className="mt-2 text-gray-600">27001-Aligned Security</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[var(--color-primary)]">POPIA</h3>
            <p className="mt-2 text-gray-600">Data Protection Compliance</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[var(--color-primary)]">Global</h3>
            <p className="mt-2 text-gray-600">Scalable Infrastructure</p>
          </div>

        </div>
      </section>

      {/* Capability Cards Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[var(--color-primary)]">
            Strategic Capabilities
          </h2>

          <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
            NOMIAH engineers secure digital infrastructure, enterprise platforms,
            and governance-aligned systems for modern organizations.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Enterprise Software Engineering</h3>
              <p className="mt-4 text-gray-600">
                Custom web platforms, enterprise applications, and scalable
                digital systems designed for growth and security.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Cybersecurity & Infrastructure</h3>
              <p className="mt-4 text-gray-600">
                Secure-by-design architecture, infrastructure governance,
                and advanced cybersecurity protection.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Regulatory Compliance Advisory</h3>
              <p className="mt-4 text-gray-600">
                POPIA, information security policy frameworks,
                and enterprise governance implementation.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-[var(--color-primary-dark)] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Industries We Support
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-16 text-center">

            <div>
              <h3 className="font-semibold text-lg">Financial Services</h3>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Government & Public Sector</h3>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Education & Research</h3>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Technology Startups</h3>
            </div>

          </div>

        </div>
      </section>

      {/* Strategic Call-To-Action */}
      <section className="bg-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[var(--color-primary)]">
            Partner With NOMIAH
          </h2>

          <p className="mt-6 text-gray-600">
            Discuss enterprise systems, digital infrastructure,
            and governance-aligned transformation.
          </p>

          <div className="mt-10">
            <a
              href="https://calendly.com/nomiah-info/30min"
              target="_blank"
              className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-md font-semibold"
            >
              Schedule Consultation
            </a>
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

    </div>
  );
}