"use client";

export default function Contact() {
  return (
    <div className="bg-white py-28">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-semibold text-[var(--color-primary)] text-center">
          Enterprise Contact
        </h1>
        <p className="text-gray-600 text-center mt-4">
          For enterprise partnerships, compliance consultation, or infrastructure engagement.
        </p>

        <form className="mt-16 space-y-6 max-w-3xl mx-auto">

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
  );
}