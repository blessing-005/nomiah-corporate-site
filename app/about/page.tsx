export default function About() {
  return (
    <div className="bg-white">

      <section className="py-28 bg-[var(--color-primary-dark)] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">About NOMIAH</h1>
          <p className="mt-6 text-lg text-gray-300">
            NOMIAH (Pty) Ltd is an enterprise digital infrastructure and 
            consulting firm focused on building secure, scalable technology 
            systems aligned with governance and regulatory standards.
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