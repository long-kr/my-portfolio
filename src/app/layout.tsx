import MainContainer from "@/components/container/MainContainer";
import SideContainer from "@/components/container/SideContainer";
import SideBar from "@/components/sidebar/SideBar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-[#999999] antialiased`}
      >
        <SideContainer>
          <SideBar className="col-span-1" />

          <MainContainer className="col-span-3">{children}</MainContainer>
        </SideContainer>
      </body>
    </html>
  );
}
