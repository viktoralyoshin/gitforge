import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import clsx from "clsx";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GitForge",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={clsx("min-h-screen font-sans antialiased", inter.variable)}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
