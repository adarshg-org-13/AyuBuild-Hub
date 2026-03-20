import Image from 'next/image';
import { Cpu, Gamepad2, ShoppingCart, ExternalLink } from './Icons';
import { formatCurrency } from '../utils';
import { BrandLogo } from './BrandLogo';
import { Button } from './Button';

interface GameFPS {
  name: string;
  fps: number;
}

interface FeaturedBuildProps {
  name: string;
  price: number;
  cpu: string;
  gpu: string;
  cpuBrand: 'Intel' | 'AMD';
  gpuBrand: 'NVIDIA' | 'AMD' | 'Intel';
  fps: {
    valorant: number;
    cs2: number;
    re7: number;
  };
  image: string;
  partsLink?: string; // Link to PCPartPicker or Amazon list
}

export function FeaturedBuildCard({ build, index }: { build: FeaturedBuildProps; index: number }) {
  // Mock shopping links if not provided
  const shoppingLink = build.partsLink || `https://www.amazon.com/s?k=${encodeURIComponent(build.cpu + " " + build.gpu + " gaming pc")}`;

  return (
    <div
      className="group relative bg-white dark:bg-zinc-700/30 border border-zinc-200 dark:border-zinc-600/50 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(0,173,181,0.2)] flex flex-col h-full animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-900 via-transparent to-transparent z-10" />
        <Image 
          src={build.image} 
          alt={build.name} 
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <div className="flex gap-2 mb-2">
            <BrandLogo brand={build.cpuBrand} className="bg-white/90 px-2 py-0.5 rounded text-xs shadow-lg" />
            <BrandLogo brand={build.gpuBrand} className="bg-white/90 px-2 py-0.5 rounded text-xs shadow-lg" />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors drop-shadow-md">{build.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col">
        {/* Specs */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between text-sm border-b border-zinc-200 dark:border-zinc-600/50 pb-2">
            <span className="text-zinc-500 dark:text-zinc-400 flex items-center gap-2"><Cpu className="w-4 h-4" /> CPU</span>
            <span className="text-zinc-800 dark:text-zinc-200 font-medium truncate max-w-[180px]">{build.cpu}</span>
          </div>
          <div className="flex items-center justify-between text-sm border-b border-zinc-200 dark:border-zinc-600/50 pb-2">
            <span className="text-zinc-500 dark:text-zinc-400 flex items-center gap-2"><Gamepad2 className="w-4 h-4" /> GPU</span>
            <span className="text-zinc-800 dark:text-zinc-200 font-medium truncate max-w-[180px]">{build.gpu}</span>
          </div>
        </div>

        {/* FPS Counters */}
        <div className="mb-6 bg-zinc-100 dark:bg-zinc-800/50 rounded-2xl p-3 grid grid-cols-3 gap-2 text-center border border-zinc-200 dark:border-zinc-700/50">
          <div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Valorant</div>
            <div className="text-emerald-600 dark:text-emerald-400 font-bold font-mono">{build.fps.valorant}</div>
          </div>
          <div className="border-l border-zinc-200 dark:border-zinc-700">
            <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">CS2</div>
            <div className="text-emerald-600 dark:text-emerald-400 font-bold font-mono">{build.fps.cs2}</div>
          </div>
          <div className="border-l border-zinc-200 dark:border-zinc-700">
            <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">RE7</div>
            <div className="text-emerald-600 dark:text-emerald-400 font-bold font-mono">{build.fps.re7}</div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-1 gap-1">
          <div className="flex flex-col">
            <span className="text-xs text-zinc-500">Total Price</span>
            <span className="text-2xl font-bold text-zinc-900 dark:text-white">{formatCurrency(build.price)}</span>
          </div>
          <a 
            href={shoppingLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <Button size="sm" className="rounded-xl shadow-lg shadow-emerald-900/20">
              Buy on Amazon<ExternalLink className="w-3 h-3 ml-0" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}


//Made by Adarsh Gusain