'use client';
/* Navbar File */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Monitor, Save, BarChart2, Cpu } from '../components/Icons';
import { cn } from '../utils';
import { ThemeToggle } from './ThemeToggle';
import Image from 'next/image';

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Builder', path: '/build', icon: Cpu },
    { name: 'Saved Builds', path: '/saved', icon: Save },
    { name: 'Compare', path: '/compare', icon: BarChart2 },
  ];

  return (
    <nav className="border-b border-zinc-200 dark:border-zinc-700/50 bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-xl sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 h-22 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
            <Image
              src = "/Logo.png"
              alt = "RigZen Logo"
              width="70"
              height="60"
              className={cn(
                "rounded-full aspect-square overflow-hidden",
                "border border-zinc-200 dark:border-zinc-700"
              )}
            />
          <span className="font-bold text-2xl text-zinc-900 dark:text-white tracking-tight font-sans">RigZen</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                >
                  <div
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95",
                      isActive 
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20" 
                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{item.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="h-6 w-px bg-zinc-300 dark:bg-zinc-700/50 mx-2 hidden sm:block" />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
