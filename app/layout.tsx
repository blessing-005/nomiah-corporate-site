import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "NOMIAH (Pty) Ltd | Enterprise Digital Infrastructure",
  description:
    "Enterprise software engineering, cybersecurity, compliance advisory and digital transformation services across South Africa and globally.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}