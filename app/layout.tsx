import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";
import { ReactNode } from "react";

export const metadata = {
  title: "NOMIAH – Enterprise Software & Digital Infrastructure Company",
  description: "NOMIAH provides enterprise software development, cybersecurity, digital infrastructure, and compliance solutions across South Africa and globally.",
  keywords: [
    "software development company South Africa",
    "enterprise software solutions",
    "cybersecurity company South Africa",
    "digital infrastructure consulting",
    "POPIA compliance services"
  ],
  openGraph: {
    title: "NOMIAH",
    description: "Enterprise Digital Infrastructure & Software Solutions",
    url: "https://nomiah.com",
    images: ["/logo.png"]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}