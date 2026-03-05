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