import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio 2.0",
  description: "Portfolio 2.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ margin: 0, overflowX: "hidden", position: "relative" }}
      >
        <div style={{ position: "absolute", width: "100%", zIndex: 50, pointerEvents: "none" }}>
          <Header />
        </div>
        {children}
        {/* Footer */}
      </body>
    </html>
  );
}
