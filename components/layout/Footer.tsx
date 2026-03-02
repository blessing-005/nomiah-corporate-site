export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-dark)] text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10 text-sm">

        <div>
          <h3 className="font-semibold mb-4">NOMIAH (Pty) Ltd</h3>
          <p className="text-gray-300">
            Enterprise digital infrastructure, governance-led technology systems,
            and regulatory-aligned transformation solutions.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Capabilities</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Enterprise Software Engineering</li>
            <li>Cybersecurity & Infrastructure</li>
            <li>Compliance Advisory</li>
            <li>Digital Transformation</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Corporate</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Governance Framework</li>
            <li>Risk Management</li>
            <li>Business Continuity</li>
            <li>Investor Relations</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Johannesburg, South Africa</li>
            <li>info@nomiah.com</li>
            <li>security@nomiah.com</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-600 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} NOMIAH (Pty) Ltd. All rights reserved.
      </div>
    </footer>
  );
}