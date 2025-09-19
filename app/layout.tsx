import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "LaxVentures | Travel Without Limits",
  description: "Plan smarter, travel better. LaxVentures creates personalized itineraries with expert tips, local insights, and seamless bookings—your adventure, your way.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Header />
        <main>
          <Suspense fallback={null}>{children}</Suspense>
        </main>
        <Footer />
      </body>
    </html>
  )
}
