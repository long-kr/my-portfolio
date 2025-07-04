import { MainContainer } from "@/components/container/MainContainer";
import { SideBar } from "@/components/sidebar";
import { ThemeToggle } from "@/components/theme";
import { SocialMediaButton } from "@/components/ui";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Long Huynh's Portfolio",
  description: "Welcome to my portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>
            <ProgressBar />
          </Suspense>

          <Toaster closeButton />

          <div className="grid min-h-screen w-full grid-cols-1 antialiased lg:grid-cols-5">
            <SideBar className="col-span-1" />

            <MainContainer className="col-span-1 lg:col-span-3">
              {children}
            </MainContainer>
          </div>

          <Suspense>
            <SocialMediaButton />
          </Suspense>

          <ThemeToggle />
        </ThemeProvider>

        <VercelAnalytics />
      </body>
    </html>
  );
}
