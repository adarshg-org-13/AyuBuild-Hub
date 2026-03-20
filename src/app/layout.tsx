import type { Metadata } from "next";
import "..//app/index.css";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export const metadata: Metadata = {
  title: "AyuBuild Hub",
  description: "Professional PC Part Picker & Compatibility Checker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50 font-sans selection:bg-emerald-500/30 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

//Made by Adarsh Gusain