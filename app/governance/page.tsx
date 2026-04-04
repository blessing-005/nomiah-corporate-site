import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Governance, Risk & Compliance | NOMIAH",
  description: "NOMIAH's ISO 27001-aligned governance framework, risk management, and compliance policies for secure digital infrastructure.",
  keywords: [
    "governance framework",
    "ISO 27001",
    "risk management",
    "compliance",
    "information security"
  ]
};

export default function Governance() {
  return (
    <div className="bg-white">

      {/* Executive Header */}
      <section className="relative h-[80vh] flex items-center justify-center text-white">
        <Image
          src="/images/governance.jpg"
          alt="Governance"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl font-bold">
            Governance, Risk & Compliance Framework
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            NOMIAH operates under structured governance policies, risk-managed
            delivery frameworks, and ISO 27001-aligned information security.
          </p>
        </div>
      </section>

      {/* Governance Overview */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-primary)]">
              Contractual Framework
            </h2>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li>• Master Services Agreement (MSA)</li>
              <li>• Client Contract Templates</li>
              <li>• POPIA Data Processing Agreement (DPA)</li>
              <li>• Structured SLA & Engagement Governance</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-primary)]">
              Information Security & ISMS
            </h2>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li>• ISO 27001-aligned ISMS Framework</li>
              <li>• Information Security Policy</li>
              <li>• Data Breach Response Procedure</li>
              <li>• Risk-Based Access Governance</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-primary)]">
              Risk Management Framework
            </h2>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li>• Enterprise Risk Identification & Assessment</li>
              <li>• Mitigation & Control Mapping</li>
              <li>• Continuous Risk Monitoring</li>
              <li>• Operational Governance Oversight</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-primary)]">
              Business Continuity & Resilience
            </h2>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li>• Business Continuity Plan (BCP)</li>
              <li>• Disaster Recovery Plan (DRP)</li>
              <li>• Infrastructure Redundancy Strategy</li>
              <li>• Incident Escalation Protocol</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Security Commitment */}
      <section className="bg-lightBg py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-[var(--color-primary)]">
            Security-First Operating Model
          </h2>
          <p className="mt-6 text-gray-600">
            Every system engineered by NOMIAH follows a secure-by-design
            methodology integrating structured documentation, policy-aligned
            workflows, and enterprise compliance principles.
          </p>
          <p className="mt-4 text-gray-600">
            Detailed governance documentation is available to enterprise
            clients under formal engagement and NDA.
          </p>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-24 text-center bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-[var(--color-primary)]">
            Request Governance Overview
          </h2>
          <p className="mt-6 text-gray-600">
            For vendor due diligence, compliance verification, or
            enterprise partnership discussions.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-md font-semibold hover:bg-[var(--color-primary-dark)] transition"
            >
              Contact Enterprise Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}