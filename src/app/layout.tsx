import type { Metadata } from "next"
import { Archivo, Chivo_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"

// One voice. Archivo carries display and body alike — the width axis (62–125)
// gives headlines real proportion contrast without a second sans competing.
const sans = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-sans",
  display: "swap",
})

// Chivo Mono is Archivo's sibling from the same foundry. Reserved for technical
// facts only: tech-stack tags and dated metadata.
const mono = Chivo_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Teh Jun Heng — Full-Stack Engineer",
  description:
    "Teh Jun Heng — a versatile full-stack engineer who ships real products, end to end. Web, backend, web3 and AI.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${mono.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
