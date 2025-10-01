import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";

// Components
import Header from "./components/Header";
import { ThemeProvider } from "./components/theme-provider"
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Santiago Vallejos - Desarrollador Full Stack | Portfolio",
  description: "Portfolio de Santiago Vallejos - Desarrollador Full Stack especializado en tecnologías modernas como React, Next.js, Node.js y más. Explora mis proyectos y experiencia.",
  keywords: ["Santiago Vallejos", "Desarrollador Full Stack", "React", "Next.js", "Node.js", "JavaScript", "TypeScript", "Portfolio", "Desarrollador Web"],
  authors: [{ name: "Santiago Vallejos" }],
  creator: "Santiago Vallejos",
  publisher: "Santiago Vallejos",
  metadataBase: new URL('https://santvallejos.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Santiago Vallejos - Desarrollador Full Stack",
    description: "Portfolio de Santiago Vallejos - Desarrollador Full Stack especializado en tecnologías modernas. Explora mis proyectos y experiencia.",
    url: 'https://santvallejos.dev',
    siteName: 'Santiago Vallejos Portfolio',
    images: [
      {
        url: '/about me/6.jpg',
        width: 1200,
        height: 630,
        alt: 'Santiago Vallejos - Desarrollador Full Stack',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Reemplaza con tu código real
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} antialiased overflow-x-hidden`}
        style={{ margin: 0, position: "relative" }}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
