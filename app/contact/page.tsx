"use client";

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();

    if (result.success) {
      setStatus("Inquiry submitted successfully.");
      e.target.reset();
    } else {
      setStatus("Submission failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white py-28">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-semibold text-[var(--color-primary)] text-center">
          Enterprise Contact
        </h1>
        <p className="text-gray-600 text-center mt-4">
          For enterprise partnerships, compliance consultation, or infrastructure engagement.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-16 space-y-6"
        >
          <input
            name="name"
            placeholder="Full Name"
            required
            className="w-full border px-4 py-3 rounded-md"
          />

          <input
            name="email"
            type="email"
            placeholder="Work Email"
            required
            className="w-full border px-4 py-3 rounded-md"
          />

          <input
            name="company"
            placeholder="Company Name"
            className="w-full border px-4 py-3 rounded-md"
          />

          <textarea
            name="message"
            placeholder="Describe your inquiry"
            rows={6}
            required
            className="w-full border px-4 py-3 rounded-md"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[var(--color-primary)] text-white py-3 rounded-md font-semibold hover:bg-[var(--color-primary-dark)] transition"
          >
            {loading ? "Submitting..." : "Submit Enterprise Inquiry"}
          </button>

          {status && (
            <p className="text-center text-sm text-gray-600 mt-4">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}