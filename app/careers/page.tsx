import Image from "next/image";
export default function Careers() {
  return (
    <div className="bg-white">

      <section className="py-28 bg-[var(--color-primary-dark)] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Careers at NOMIAH
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Join a team dedicated to engineering secure digital infrastructure 
            and building the future of enterprise technology.
          </p>

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