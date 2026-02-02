import type { Metadata } from "next";
import { inter, spaceMono } from "@/components/fonts";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

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
    <html className="scroll-smooth scroll-pt-18" lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${spaceMono.variable} antialiased bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
