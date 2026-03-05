import Image from "next/image";
export default function Careers() {
  return (
    <div className="bg-white">

      <section className="relative h-[60vh] flex items-center justify-center text-white">

        <Image
          src="/images/team-working.jpg"
          alt="Team working"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-5xl font-bold">
            Careers at NOMIAH
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Join a team dedicated to engineering secure digital infrastructure
            and building enterprise technology solutions.
          </p>
        </div>

      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <Image
            src="/images/datacenter.jpg"
            alt="Data center"
            width={600}
            height={400}
            className="rounded-xl"
          />

          <div>

            <h2 className="text-3xl font-semibold text-[var(--color-primary)]">
              Who We Are Looking For
            </h2>

            <p className="mt-4 text-gray-600">
              NOMIAH seeks professionals who are passionate about technology,
              digital infrastructure, cybersecurity, and enterprise systems.
              We value individuals who think strategically, build responsibly,
              and understand the importance of secure and scalable technology.
            </p>

            <p className="mt-4 text-gray-600">
              Our team works on projects involving enterprise software,
              regulatory compliance systems, digital transformation,
              and secure infrastructure for organizations across industries.
            </p>

          </div>

        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <Image
            src="/images/team-meeting.jpg"
            alt="Corporate strategy meeting"
            width={600}
            height={400}
            className="rounded-xl"
          />

          <div>
            <h2 className="text-3xl font-semibold text-[var(--color-primary)]">
              Our Mission
            </h2>

            <p className="mt-4 text-gray-600">
              To engineer secure digital infrastructure that empowers organizations,
              governments, and innovators across Africa and globally to operate with
              efficiency, resilience, and technological excellence.
            </p>

            <h2 className="text-3xl font-semibold text-[var(--color-primary)] mt-10">
              Our Vision
            </h2>

            <p className="mt-4 text-gray-600">
              To become a leading global technology infrastructure group delivering
              governance-driven digital transformation across industries and
              emerging economies.
            </p>
          </div>

        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-[var(--color-primary)]">
            Open Positions
          </h2>

          <div className="mt-10 border rounded-lg p-8">

            <h3 className="text-xl font-semibold">
              Software Engineer (Full Stack)
            </h3>

            <p className="mt-4 text-gray-600">
              We are looking for engineers passionate about building secure 
              web applications and scalable enterprise systems.
            </p>

            <a
              href="mailto:careers@nomiah.com"
              className="inline-block mt-6 bg-[var(--color-primary)] text-white px-6 py-3 rounded-md"
            >
              Apply Now
            </a>

          </div>

        </div>
      </section>

    </div>
  );
}