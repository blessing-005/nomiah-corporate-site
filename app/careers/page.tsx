import Image from "next/image";
import { Plus } from "lucide-react";

export default function Careers() {
  return (
    <div className="bg-white">

      <section className="relative h-[80vh] flex items-center justify-center text-white">

        <Image
          src="/images/team-working.jpg"
          alt="Team working"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center max-w-3xl px-6">

          <h1 className="text-5xl font-bold">
            Careers at NOMIAH
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            We are looking for engineers, strategists, and innovators
            passionate about building secure digital infrastructure.
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

      <section className="bg-gray-50 py-24">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center text-[var(--color-primary)] mb-12">
            Apply Now
          </h2>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-4 rounded-lg"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-4 rounded-lg"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border p-4 rounded-lg"
            />

            <input
              type="text"
              placeholder="Role You Are Applying For"
              className="w-full border p-4 rounded-lg"
            />

            <div className="flex items-center gap-2 w-full border p-4 rounded-lg cursor-pointer">
              <Plus size={20} className="text-[var(--color-primary)]" />
              <input
                type="file"
                className="w-full"
              />
            </div>

            <textarea
              placeholder="Tell us about yourself"
              rows={4}
              className="w-full border p-4 rounded-lg"
            />

            <button
              className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-lg w-full font-semibold"
            >
              Apply Now
            </button>

            <p className="text-sm text-gray-500 mt-4 text-center">
              Prefer to apply directly?<br />
              Send your CV to{" "}
              <a href="mailto:careers@nomiah.com" className="text-blue-600 hover:underline">
                careers@nomiah.com
              </a>
            </p>

          </form>

        </div>
      </section>

    </div>
  );
}