"use client";

import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideHeaderFooter =
    pathname === "/Auth/SignIn" || pathname === "/Auth/Register";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-slate-50 antialiased`}
      >
        {!hideHeaderFooter && <Navbar />}
        <main className="flex-grow">{children}</main>
        {!hideHeaderFooter && <Footer />}

        {hideHeaderFooter && (
          <footer className="bg-gray-100 text-gray-700 py-4 ">
            <div className="container mx-auto flex flex-col items-center gap-2">
              <ul className="flex space-x-6">
                <li>
                  <Link href="#" className="hover:text-blue-600 transition">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600 transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600 transition">
                    Help
                  </Link>
                </li>
              </ul>
              <p className="text-sm">
                © {new Date().getFullYear()} Book Compass. All rights reserved.
              </p>
            </div>
          </footer>
        )}
      </body>
    </html>
  );
}
