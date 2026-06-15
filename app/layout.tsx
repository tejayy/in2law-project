import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "IN2LAW Academy – CLAT, MH LAW CET & Judiciary Coaching in Pune",
  description:
    "India's premier legal entrance coaching institute. Expert lawyer-led mentorship for CLAT, MH LAW CET (3Y/5Y), Judiciary (Civil Judge / JMFC) and Law Officer Exams. Small batches, 70+ mock tests, 720+ teaching hours.",
  keywords:
    "CLAT coaching Pune, MH LAW CET coaching, Judiciary exam preparation, JMFC coaching, law entrance coaching Pune, IN2LAW Academy",
  openGraph: {
    title: "IN2LAW Academy – Legal Entrance Coaching",
    description:
      "Of the Lawyers, By the Lawyers, For the Lawyers. Join Pune's top law entrance coaching institute.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", poppins.variable, playfair.variable)}
    >
      <body className="min-h-full flex flex-col font-sans bg-white">
        {children}
      </body>
    </html>
  );
}
