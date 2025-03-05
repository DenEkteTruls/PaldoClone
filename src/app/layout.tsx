
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paldo",
  description: "Developed by Casper Nag",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <header>
        <div className="mt-5 mb-5 flex flex-row justify-between align-items">
          <div className="left flex align-items">
            <Image src="logo0.svg" alt="" width="25" height="25"/>
            <h1 className="text-xl font-semibold m-auto ml-2"><Link href="/">Paldo</Link></h1>
          </div>
          <div className="right flex align-items space-x-5">
            <Button asChild>
              <Link className="text-xs" href="/getAccess">Get Early Access</Link>
            </Button>
            <ModeToggle/>
          </div>
        </div>
      </header>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased pl-5 pr-5`}>
        {children}
      </body>
      </ThemeProvider>
    </html>
  );
}
