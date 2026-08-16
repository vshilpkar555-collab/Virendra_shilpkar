import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import CoderBackground from "@/components/CoderBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Virendra Shilpkar | Senior Flutter Developer",
  description: "Senior Flutter Developer with 5.5+ years of experience building production-ready mobile applications.",
  keywords: [
    "Flutter Developer",
    "Senior Flutter Developer",
    "Mobile App Developer",
    "Dart",
    "Android Developer",
    "Firebase"
  ],
  authors: [{ name: "Virendra Shilpkar" }],
  openGraph: {
    title: "Virendra Shilpkar | Senior Flutter Developer",
    description: "Building high-quality mobile experiences with Flutter.",
    url: "https://virendrashilpkar.com",
    siteName: "Virendra Shilpkar Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased selection:bg-primary selection:text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SplashScreen />
          <CoderBackground />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
