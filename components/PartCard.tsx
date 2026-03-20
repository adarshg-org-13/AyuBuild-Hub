import Image from 'next/image';
import { Part } from '../types';
import { formatCurrency } from '../utils';
import { Plus, Check } from './Icons';
import { cn } from '../utils';

interface PartCardProps {
  part: Part;
  isSelected: boolean;
  onSelect: (part: Part) => void;
}

export function PartCard({ part, isSelected, onSelect }: PartCardProps) {
  return (
    <div 
      className={cn(
        "group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl border transition-all duration-200 hover:scale-[1.01]",
        isSelected 
          ? "bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_15px_-3px_rgba(0,173,181,0.15)]" 
          : "bg-white dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-700/50"
      )}
    >
      <div className="relative w-16 h-16 shrink-0 bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden flex items-center justify-center">
        <Image 
          src={part.image} 
          alt={part.name} 
          fill
          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
        />
      </div>
      
      <div className="flex-grow min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">{part.brand}</span>
          {part.wattage && part.wattage > 0 && (
            <span className="text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">
              {part.wattage}W
            </span>
          )}
        </div>
        <h3 className="font-medium text-zinc-900 dark:text-zinc-100 truncate pr-4 font-sans">{part.name}</h3>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-zinc-500 dark:text-zinc-400">
          {Object.entries(part.specs).slice(0, 3).map(([key, value]) => (
            <div key={key} className="flex items-center gap-1">
              <span className="text-zinc-500 dark:text-zinc-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
              <span className="text-zinc-700 dark:text-zinc-300">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 w-full sm:w-auto mt-2 sm:mt-0 justify-between sm:justify-center">
        <div className="font-mono font-medium text-lg text-emerald-600 dark:text-emerald-400">
          {formatCurrency(part.price)}
        </div>
        <button
          onClick={() => onSelect(part)}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:scale-105 active:scale-95",
            isSelected
              ? "bg-emerald-500 text-white dark:text-zinc-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20"
              : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-white"
          )}
        >
          {isSelected ? (
            <>
              <Check className="w-4 h-4" />
              <span>Selected</span>
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              <span>Add</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}


//Made by Adarsh Gusain