import type React from "react"
import type { Metadata } from "next"
import { Ubuntu } from "next/font/google";
import "./globals.css"
import { Providers } from "@/components/Providers"
import { ThemeProvider } from "next-themes"

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["500", "700"] });

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Challenge your friends and family with our fun quiz app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={ubuntu.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}

