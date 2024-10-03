import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

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

export const metadata = {
  title: "Personal Website",
  description: "Ananda Puja Wandra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <ul className="flex w-auto justify-center bg-slate-300 py-8 text-slate-950">
            <li className="mx-6 hover:text-slate-600"><Link href="/">Home</Link></li>
            <li className="mx-6 hover:text-slate-600"><Link href="/about">About</Link></li>
            <li className="mx-6 hover:text-slate-600"><Link href="/blog">Blog</Link></li>
            <li className="mx-6 hover:text-slate-600"><Link href="/contact">Contact</Link></li>
          </ul>
        </header>
          {children}
        <footer className="absolute inset-x-0 bottom-0 flex w-auto justify-center border-t-2 py-3">Copyright | Ananda Puja Wandra | Personal Website</footer>
      </body>
    </html>
  );
}
