import type React from "react";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ReduxProvider from "@/redux/ReduxProvider";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["500", "700"] });

export const metadata: Metadata = {
  title: "AlgoQuiz",
  description: "Challenge your friends and family with our fun quiz app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={ubuntu.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ReduxProvider>{children}</ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
