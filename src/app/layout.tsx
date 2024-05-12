import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DevHost 2024",
    template: `%s - DevHost 2024`,
  },
  description: "SOSC's flagship student developer meet.",
  keywords: [
    "sosc",
    "Sahyadri Open Source Community",
    "sosc devhost",
    "devhost 2024",
    "DevHost",
    "Devhost",
    "Devhost 2024",
    "DevHost 2024",
  ],
  creator: "so-sc",
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon-16x16.png",
    apple: "/favicons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
