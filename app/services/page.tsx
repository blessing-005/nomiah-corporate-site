import Link from "next/link";

export default function Services() {
  return (
    <div className="bg-white">

      {/* Header */}
      <section className="py-28 bg-[var(--color-primary)] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Enterprise Digital Infrastructure & Strategic Capabilities
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            NOMIAH delivers governance-aligned technology systems designed
            for regulatory environments, growth-focused enterprises, and
            mission-critical digital operations.
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-primary)]">
              Enterprise Software Engineering
            </h2>
            <p className="mt-4 text-gray-600">
              Secure, scalable custom web and mobile platforms engineered with
              structured architecture, DevSecOps lifecycle integration, and
              compliance-aligned data models.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-primary)]">
              IT Infrastructure & Cybersecurity
            </h2>
            <p className="mt-4 text-gray-600">
              Secure-by-design infrastructure deployment, access governance,
              risk modeling, and resilience-driven cybersecurity frameworks.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-primary)]">
              Regulatory Compliance & Data Protection Advisory
            </h2>
            <p className="mt-4 text-gray-600">
              POPIA-aligned data protection strategies, ISO 27001-aligned ISMS
              implementation guidance, and risk-governed compliance structuring.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-primary)]">
              Digital Growth & Marketing Infrastructure
            </h2>
            <p className="mt-4 text-gray-600">
              Data-driven digital ecosystems integrating analytics,
              conversion systems, automation frameworks, and scalable lead pipelines.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-primary)]">
              Public Relations & Brand Strategy
            </h2>
            <p className="mt-4 text-gray-600">
              Corporate communication strategy, reputation governance,
              and structured brand positioning frameworks for enterprise visibility.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-primary)]">
              Enterprise Digital Transformation Consulting
            </h2>
            <p className="mt-4 text-gray-600">
              Board-level strategic advisory for digital restructuring,
              systems modernization, and operational transformation execution.
            </p>
          </div>

        </div>
      </section>

      {/* Governance Integration Section */}
      <section className="bg-lightBg py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-[var(--color-primary)]">
            Governance Integrated Delivery Model
          </h2>
          <p className="mt-6 text-gray-600">
            Every engagement operates under structured contractual frameworks
            including MSA alignment, risk management oversight, information
            security controls, and business continuity planning.
          </p>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-[var(--color-primary)]">
            Engagement Models
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-gray-600 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Enterprise Partnership</h3>
              Long-term infrastructure and strategic advisory alignment.
            </div>
            <div>
              <h3 className="font-semibold mb-2">Project-Based Delivery</h3>
              Structured implementation with defined governance oversight.
            </div>
            <div>
              <h3 className="font-semibold mb-2">Advisory & Compliance Consulting</h3>
              Risk assessment, policy alignment, and transformation strategy.
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/contact"
              className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-md font-semibold hover:bg-[var(--color-primary-dark)] transition"
            >
              Initiate Enterprise Discussion
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}