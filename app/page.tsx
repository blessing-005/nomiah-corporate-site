import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-white">

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