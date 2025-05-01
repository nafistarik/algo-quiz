import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ReduxProvider from "@/redux/ReduxProvider";
import { ToastProvider } from "@/components/ToastProvider";
import CustomCursor from "@/components/CustomCursor";

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
      <body >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ReduxProvider>
            {children}
            <CustomCursor />
            <ToastProvider />
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
