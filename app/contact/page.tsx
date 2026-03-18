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

          <p className="flex items-center gap-3 border border-gray-200 bg-gray-50 px-4 py-3 rounded-2xl hover:bg-gray-100 transition-all duration-150">
            📍 <a
              href="https://www.google.com/maps/search/?api=1&query=37%20Simmonds%20Street%2C%20Johannesburg%2C%20South%20Africa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] font-medium"
            >Johannesburg, South Africa</a>
          </p>

          <p className="flex items-center gap-3 border border-gray-200 bg-gray-50 px-4 py-3 rounded-2xl hover:bg-gray-100 transition-all duration-150">
            📞 <a
              href="tel:+27105008299"
              className="text-[var(--color-primary)] font-medium"
            >+27 10 500 8299</a>
          </p>

          <p className="flex items-center gap-3 border border-gray-200 bg-gray-50 px-4 py-3 rounded-2xl hover:bg-gray-100 transition-all duration-150">
            ✉ <a
              href="mailto:info@nomiah.com"
              className="text-[var(--color-primary)] font-medium"
            >info@nomiah.com</a>
          </p>

          </div>
        </div>
      </div>
    </div>
  );
}