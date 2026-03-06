import { FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";

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

          <p className="text-gray-400">
            📍 Johannesburg, South Africa
          </p>

          <p className="text-gray-400 mt-2">
            📞 +27 10 500 8599
          </p>

          <p className="text-gray-400 mt-2">
            ✉ info@nomiah.com
          </p>

        </div>

      </div>

      <div className="border-t border-gray-600 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 text-xs text-gray-300 mb-6">
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/careers" className="hover:text-white transition">Careers</a>
          <a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-white transition">Terms of Service</a>
          <a href="/cookie-policy" className="hover:text-white transition">Cookie Policy</a>
          <a href="/responsible-disclosure" className="hover:text-white transition">Responsible Disclosure</a>
        </div>

        <div className="flex gap-6 mt-8 justify-center">

          <a
            href="https://linkedin.com/in/blessing-mathebula-29079b3b5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-xl transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://facebook.com/profile.php?id=61585632887184"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-xl transition"
          >
            <FaFacebook />
          </a>

          <a
            href="https://x.com/@Nomiah340118"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-xl transition"
          >
            <FaXTwitter />
          </a>

        </div>

        <div className="text-center text-xs text-gray-400 mt-8">
          © {new Date().getFullYear()} NOMIAH (Pty) Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}