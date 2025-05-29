"use client";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/common/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Header from "@/components/common/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  return (
    <html lang="en" data-theme={theme}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.documentElement.setAttribute('data-theme', 
              localStorage.getItem('theme') || 'dark'
            );
          `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${
          theme === null ? "opacity-0" : "opacity-100"
        }  max-w-screen-xl mx-auto my-3 px-3 md:px-8 antialiased dark:bg-[#181A1F] dark:text-white`}
      >
        <QueryClientProvider client={queryClient}>
          <Header />
          <main>{children}</main>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
