import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Berkeley Mono is a commercial font and not available on Google Fonts.
// Using JetBrains Mono as the Google Font fallback, while preserving 
// Berkeley Mono as the primary preference in CSS.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-fallback",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trevo",
  description: "folder structure generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans" style={{ fontFeatureSettings: '"cv01", "ss03"' }}>
        {children}
      </body>
    </html>
  );
}
