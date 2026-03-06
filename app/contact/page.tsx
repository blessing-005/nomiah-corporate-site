"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <div className="bg-white">

      <section className="relative h-[55vh] flex items-center justify-center text-white">

        <Image
          src="/images/contact.jpg"
          alt="Contact"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl font-bold">Get In Touch</h1>

          <p className="mt-6 text-lg text-gray-200">
            Enterprise partnerships, compliance consultation, or infrastructure engagement.
          </p>
        </div>

      </section>

      <div className="py-28">
        <div className="max-w-4xl mx-auto px-6">

          <form className="space-y-6 max-w-3xl mx-auto">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="text"
            placeholder="Job Title"
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="email"
            placeholder="Business Email"
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="text"
            placeholder="Company Name"
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="text"
            placeholder="Company Location"
            className="w-full border p-4 rounded-lg"
          />

          <select className="w-full border p-4 rounded-lg">

            <option>Inquiry Type</option>
            <option>Enterprise Discussion</option>
            <option>Book Consultation</option>
            <option>Explore Capabilities</option>
            <option>Partnership Inquiry</option>

          </select>

          <textarea
            placeholder="Tell us about your project"
            rows={5}
            className="w-full border p-4 rounded-lg"
          />

          <button className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-lg w-full font-semibold">
            Submit Inquiry
          </button>

          </form>

          <div className="space-y-4 mt-10">

          <p className="flex items-center gap-3">
            📍 Johannesburg, South Africa
          </p>

          <p className="flex items-center gap-3">
            📞 +27 00 000 0000
          </p>

          <p className="flex items-center gap-3">
            ✉ info@nomiah.com
          </p>

          </div>
        </div>
      </div>
    </div>
  );
}