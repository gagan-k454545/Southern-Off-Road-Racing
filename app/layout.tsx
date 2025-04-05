import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import PerformanceOptimizer from "@/components/performance-optimizer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Optimize font loading
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Southern Experience India - Motorsports & Off-Road Adventures",
  description:
    "India's premier event management company specializing in motorsports, off-roading, expeditions, and adventure experiences",
  generator: "Southern Experience India",
  applicationName: "Southern Experience India",
  keywords: [
    "off-road",
    "motorsports",
    "adventure",
    "expeditions",
    "India",
    "Southern Experience",
    "off-road challenge",
  ],
  authors: [{ name: "Southern Experience India" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow",
  themeColor: "#c1121f",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://southernexperienceindia.com/",
    title: "Southern Experience India - Motorsports & Off-Road Adventures",
    description:
      "India's premier event management company specializing in motorsports, off-roading, expeditions, and adventure experiences",
    siteName: "Southern Experience India",
  },
  twitter: {
    card: "summary_large_image",
    title: "Southern Experience India - Motorsports & Off-Road Adventures",
    description:
      "India's premier event management company specializing in motorsports, off-roading, expeditions, and adventure experiences",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://i.ibb.co" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ss%20logo-8NJwAYlugnsXP3STGvbxW0xjoPF59j.png"
          as="image"
          fetchPriority="high"
        />
        <meta name="theme-color" content="#c1121f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
      </head>
      <body className={`${inter.className} bg-white overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <PerformanceOptimizer />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}

import "./globals.css"



import './globals.css'