'use client';
import { Geist, Geist_Mono } from "next/font/google";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
    const storedTheme = localStorage.getItem('theme');
    const queryClient = new QueryClient();

    return (
            <html lang="en" data-theme={storedTheme}>
                <body
                    className={`${geistSans.variable} ${geistMono.variable} max-w-screen-xl mx-auto my-3 px-3 md:px-8 antialiased dark:bg-[#181A1F] dark:text-white`}
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
