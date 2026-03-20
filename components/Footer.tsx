import Link from 'next/link';
import { Github, Twitter, Instagram, Heart } from './Icons';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 py-12 mt-auto transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 font-sans">RigZen</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-xs leading-relaxed">
              The best place to build and configure your dream pc with all proper parts and live prices.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-white mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/build" className="hover:text-emerald-500 transition-colors">PC Builder</Link></li>
              <li><Link href="/saved" className="hover:text-emerald-500 transition-colors">Saved Builds</Link></li>
              <li><Link href="/compare" className="hover:text-emerald-500 transition-colors">Compare Parts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-white mb-4 text-sm uppercase tracking-wider">Check out the Code</h4>
            <div className="flex gap-4">
              <a href="https://github.com/adarshg-org-13/AyuBuild-Hub" className="text-zinc-400 hover:text-emerald-500 transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500">
          <p>&copy; {new Date().getFullYear()} RigZen</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by Gamers for Gamers
            ("Made By Adarsh Gusain")
          </p>
        </div>
      </div>
    </footer>
  );
}


//Made by Adarsh Gusain