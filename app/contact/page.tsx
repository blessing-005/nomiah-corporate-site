"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    title: "",
    email: "",
    company: "",
    location: "",
    inquiry: "",
    message: "",
  });
  const [status, setStatus] = useState<{ type: "idle" | "sending" | "success" | "error"; message: string }>({ type: "idle", message: "" });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "sending", message: "Sending message..." });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
        }),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Unable to send message");
      }

      setStatus({ type: "success", message: "Your message has been sent successfully!" });
      setForm({ name: "", title: "", email: "", company: "", location: "", inquiry: "", message: "" });
    } catch (error: any) {
      setStatus({ type: "error", message: error?.message || "Failed to send. Please try again." });
    }
  };

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

          <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
            {status.type !== "idle" && (
              <div className={`rounded-lg px-4 py-3 ${status.type === "success" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
                {status.message}
              </div>
            )}

            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full border p-4 rounded-lg"
              required
            />

            <input
              type="text"
              placeholder="Job Title"
              value={form.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="w-full border p-4 rounded-lg"
            />

            <input
              type="email"
              placeholder="Business Email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full border p-4 rounded-lg"
              required
            />

            <input
              type="text"
              placeholder="Company Name"
              value={form.company}
              onChange={(e) => handleChange("company", e.target.value)}
              className="w-full border p-4 rounded-lg"
            />

            <input
              type="text"
              placeholder="Company Location"
              value={form.location}
              onChange={(e) => handleChange("location", e.target.value)}
              className="w-full border p-4 rounded-lg"
            />

            <select
              value={form.inquiry}
              onChange={(e) => handleChange("inquiry", e.target.value)}
              className="w-full border p-4 rounded-lg"
            >
              <option value="">Inquiry Type</option>
              <option value="Enterprise Discussion">Enterprise Discussion</option>
              <option value="Book Consultation">Book Consultation</option>
              <option value="Explore Capabilities">Explore Capabilities</option>
              <option value="Partnership Inquiry">Partnership Inquiry</option>
            </select>

            <textarea
              placeholder="Tell us about your project"
              rows={5}
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="w-full border p-4 rounded-lg"
              required
            />

            <button
              type="submit"
              disabled={status.type === "sending"}
              className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-lg w-full font-semibold disabled:opacity-50"
            >
              {status.type === "sending" ? "Sending..." : "Submit Inquiry"}
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