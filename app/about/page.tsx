import Image from "next/image"

export default function About() {
  return (
    <div className="bg-white">

      <section className="relative h-[55vh] flex items-center justify-center text-white">

        <Image
          src="/images/team-meeting.jpg"
          alt="Corporate Strategy"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl font-bold">About NOMIAH</h1>

          <p className="mt-6 text-lg text-gray-200">
            Engineering secure digital infrastructure and enterprise
            technology systems for organizations across industries.
          </p>
        </div>

      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          <div>
            <h2 className="text-3xl font-semibold text-[var(--color-primary)]">
              Our Mission
            </h2>
            <p className="mt-4 text-gray-600">
              To engineer secure digital infrastructure that empowers 
              organizations, governments, and innovators across Africa 
              and globally to operate with efficiency, resilience, and 
              technological excellence.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[var(--color-primary)]">
              Our Vision
            </h2>
            <p className="mt-4 text-gray-600">
              To become a leading global technology infrastructure group 
              delivering governance-driven digital transformation across 
              industries and emerging economies.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-[var(--color-primary)]">
            Governance First
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            NOMIAH operates with structured governance frameworks including 
            information security policies, risk management protocols, 
            business continuity planning, and compliance alignment with 
            international standards such as ISO 27001 and POPIA.
          </p>

        </div>
      </section>

    </div>
  );
}