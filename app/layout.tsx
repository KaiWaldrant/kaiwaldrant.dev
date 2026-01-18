import type { Metadata } from "next";
import { inter, spaceMono } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
    title: "Kai Waldrant software engineer, fullstack developer, bioinformatician",
    description: "The Resume and portfolio for Kai Waldrant.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${spaceMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
