import type { Metadata } from "next";
import { inter, spaceMono } from "./ui/fonts";
import "./globals.css";
import { ThemeProvider } from "./ui/theme-provider";

export const metadata: Metadata = {
  title:
    "Kai Waldrant software engineer, fullstack developer, bioinformatician",
  description: "The Resume and portfolio for Kai Waldrant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
