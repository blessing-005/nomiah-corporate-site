export const metadata = {
  title: "Responsible Disclosure Policy | NOMIAH",
  description: "NOMIAH's responsible disclosure policy for reporting security vulnerabilities and our commitment to security."
};

export default function ResponsibleDisclosure() {
return (

<div className="bg-white">

<section className="py-20 bg-[var(--brand-primary)] text-white text-center">

<h1 className="text-4xl font-bold">
Responsible Disclosure
</h1>

</section>

<section className="max-w-4xl mx-auto px-6 py-20 space-y-10">

<p className="text-gray-600">
NOMIAH encourages responsible reporting of security vulnerabilities.
</p>

<h2 className="text-2xl font-semibold">
Reporting a Vulnerability
</h2>

<p className="text-gray-600">
Send reports to: security@nomiah.com
</p>

<h2 className="text-2xl font-semibold">
Our Commitment
</h2>

<p className="text-gray-600">
We will investigate and address vulnerabilities responsibly
and transparently.
</p>

</section>

</div>

)
}