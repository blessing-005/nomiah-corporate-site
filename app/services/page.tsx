import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Code, Smartphone, Globe, Megaphone } from "lucide-react";

export const metadata = {
  title: "Services | NOMIAH – Software Development, Cybersecurity & Consulting",
  description: "Explore NOMIAH's enterprise software development, cybersecurity, digital infrastructure, and POPIA compliance services.",
  keywords: [
    "software development services",
    "enterprise software solutions",
    "cybersecurity services",
    "digital infrastructure consulting",
    "POPIA compliance support"
  ]
};

export default function Services() {
  return (
    <div className="bg-white">

      {/* Header */}
      <section className="relative h-[80vh] flex items-center justify-center text-white">

        <Image
          src="/images/cybersecurity.jpg"
          alt="Cybersecurity"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="relative text-5xl font-bold">
          Our Services
        </h1>

      </section>

      {/* Core Capabilities */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center text-[var(--color-primary)] mb-6">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

            <div className="p-8 border rounded-xl hover:shadow-lg transition">

              <ShieldCheck size={40} className="text-[var(--color-primary)]"/>

              <h3 className="mt-6 font-semibold text-xl">
                IT Infrastructure & Cybersecurity
              </h3>

              <p className="mt-4 text-gray-600">
                Secure enterprise systems, infrastructure architecture,
                and cybersecurity protection.
              </p>

            </div>

            <div className="p-8 border rounded-xl hover:shadow-lg transition">

              <Code size={40} className="text-[var(--color-primary)]"/>

              <h3 className="mt-6 font-semibold text-xl">
                Custom Software Development
              </h3>

              <p className="mt-4 text-gray-600">
                Enterprise platforms and scalable software systems.
              </p>

            </div>

            <div className="p-8 border rounded-xl hover:shadow-lg transition">

              <Smartphone size={40} className="text-[var(--color-primary)]"/>

              <h3 className="mt-6 font-semibold text-xl">
                Mobile App Development
              </h3>

              <p className="mt-4 text-gray-600">
                Secure mobile applications for modern digital businesses.
              </p>

            </div>

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