import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ayush Roy · Senior Cybersecurity Engineer",
    template: "%s · Ayush Roy",
  },
  description:
    "Senior Cybersecurity Engineer specializing in Smart Contract Auditing, Vulnerability Assessment & Penetration Testing. Securing Web3 and Enterprise Infrastructure.",
  metadataBase: new URL("https://ayushroy.dev"),
  openGraph: {
    title: "Ayush Roy · Senior Cybersecurity Engineer",
    description:
      "Senior Cybersecurity Engineer specializing in Smart Contract Auditing, Vulnerability Assessment & Penetration Testing.",
    url: "https://ayushroy.dev",
    siteName: "Ayush Roy - Security Portfolio",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable} antialiased`}> 
        <header className="sticky top-0 z-50 glassmorphism border-b border-emerald-500/10">
          <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg tracking-tight text-white" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              &lt;AR /&gt;
            </Link>
            <div className="flex items-center gap-8 text-sm">
              <Link href="/projects" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium">
                ./Work
              </Link>
              <Link href="/certifications" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium">
                ./Certifications
              </Link>
              <Link href="/about" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium">
                ./About
              </Link>
              <Link href="/contact" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium">
                ./Contact
              </Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-7xl px-6 py-16 min-h-[70vh]">{children}</main>
        <footer className="border-t border-emerald-500/10 bg-slate-950/50">
          <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Ayush Roy · Encrypted Connection Established</p>
            <p className="opacity-70">Built with Next.js · Tailwind · Framer Motion</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
