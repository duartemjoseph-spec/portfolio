
import "./globals.css";
import { ThemeProvider } from "@/components/providers";
import type { ReactNode } from "react";

export const metadata = {
  title: "Joseph Portfolio",
  description: "My portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}