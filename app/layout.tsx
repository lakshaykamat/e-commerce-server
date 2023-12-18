"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });  

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={`${inter.className} bg-background text-foreground`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className="flex justify-around border boder-b-2 py-4 border-gray-800">
              <h3>Our Store</h3>
              <div className="hidden  sm:flex items-center gap-3">
                <Button variant={"ghost"}>Home</Button>
                <Link href={`/products`}>
                <Button variant={"ghost"}>Product</Button>
                </Link>
                <Button variant={"ghost"}>Contact</Button>
                <Button variant={"ghost"}>Help</Button>
                <ModeToggle></ModeToggle>
                <Button>Sign out</Button>
              </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 pb-10">{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </QueryClientProvider>
  );
}
