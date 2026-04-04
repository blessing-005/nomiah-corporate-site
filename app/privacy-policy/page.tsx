export const metadata = {
  title: "Privacy Policy | NOMIAH",
  description: "NOMIAH's privacy policy and commitment to protecting your personal data in accordance with POPIA and data protection laws."
};

export default function PrivacyPolicy() {
return (

<div className="bg-white">

<section className="py-20 bg-[var(--brand-primary)] text-white text-center">

<h1 className="text-4xl font-bold">
Privacy Policy
</h1>

<p className="mt-4 text-gray-200">
Last updated: {new Date().getFullYear()}
</p>

</section>

<section className="max-w-4xl mx-auto px-6 py-20 space-y-10">

<h2 className="text-2xl font-semibold">
1. Introduction
</h2>

<p className="text-gray-600">
NOMIAH (Pty) Ltd respects your privacy and is committed to protecting
your personal data in accordance with the Protection of Personal
Information Act (POPIA) and other applicable data protection laws.
</p>

<h2 className="text-2xl font-semibold">
2. Information We Collect
</h2>

<p className="text-gray-600">
We may collect personal information such as your name, company,
email address, phone number, and any details submitted through
our inquiry or consultation forms.
</p>

<h2 className="text-2xl font-semibold">
3. Use of Information
</h2>

<p className="text-gray-600">
Information collected is used to communicate with clients,
schedule consultations, respond to inquiries, and deliver
professional services.
</p>

<h2 className="text-2xl font-semibold">
4. Data Protection
</h2>

<p className="text-gray-600">
NOMIAH maintains governance structures including risk management,
information security policies, and business continuity procedures
aligned with international best practices.
</p>

<h2 className="text-2xl font-semibold">
5. Contact
</h2>

<p className="text-gray-600">
For privacy inquiries contact: privacy@nomiah.com
</p>

</section>

</div>

)
}