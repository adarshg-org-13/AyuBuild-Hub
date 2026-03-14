import { useState } from 'react';
import Image from 'next/image';
import { Part, PartCategory } from '../types';
import { formatCurrency } from '../utils';
import { Button } from './Button';
import { ShoppingCart, X, Plus } from './Icons';

interface BuilderCategoryRowProps {
  category: { id: PartCategory; icon: any; label: string };
  part: Part | null;
  isActive: boolean;
  onToggle: () => void;
  onSelect: (part: Part) => void;
  onRemove: () => void;
  partsList: Part[];
}

export function BuilderCategoryRow({
  category,
  part,
  isActive,
  onToggle,
  onSelect,
  onRemove,
  partsList,
}: BuilderCategoryRowProps) {
  const Icon = category.icon;

  return (
    <div
      className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${
        isActive 
          ? 'bg-white dark:bg-zinc-800 border-emerald-500 shadow-lg shadow-emerald-500/10' 
          : 'bg-white/50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600'
      }`}
    >
      {/* Header / Toggle Area */}
      <div 
        className="p-6 flex items-center gap-6 cursor-pointer"
        onClick={onToggle}
      >
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
          part 
            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' 
            : 'bg-zinc-100 dark:bg-zinc-700 text-zinc-400'
        }`}>
          <Icon className="w-8 h-8" />
        </div>
        
        <div className="flex-grow">
          <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-1">{category.label}</div>
          {part ? (
            <div className="font-bold text-zinc-900 dark:text-white text-xl">{part.name}</div>
          ) : (
            <div className="text-zinc-400 italic text-lg">Select {category.label}...</div>
          )}
        </div>

        {part ? (
          <div className="flex items-center gap-4">
            <div className="font-bold text-zinc-900 dark:text-white text-xl mr-2">{formatCurrency(part.price)}</div>
            
            {part.amazonLink && (
              <a 
                href={part.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-emerald-500/10 text-zinc-400 hover:text-emerald-500 rounded-xl transition-colors"
                onClick={(e) => e.stopPropagation()}
                title="View on Amazon"
              >
                <ShoppingCart className="w-5 h-5" />
              </a>
            )}

            <button 
              onClick={(e) => {
                e.stopPropagation();
                onRemove();
              }}
              className="p-3 hover:bg-red-500/10 text-zinc-400 hover:text-red-500 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <Button 
            size="lg" 
            variant="secondary"
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            className="rounded-xl"
          >
            <Plus className="w-5 h-5 mr-2" /> Add Part
          </Button>
        )}
      </div>

      {/* Drawer / Accordion Content */}
      <div 
        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className={`overflow-hidden min-h-0 transition-opacity duration-500 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="border-t border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="p-6 grid grid-cols-1 gap-4">
              {partsList.length > 0 ? (
                partsList.map((item: Part) => (
                  <div 
                    key={item.id}
                    onClick={() => onSelect(item)}
                    className="flex items-center gap-6 p-4 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-emerald-500 cursor-pointer transition-all hover:shadow-md group"
                  >
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-900 flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="font-bold text-lg text-zinc-900 dark:text-white group-hover:text-emerald-500 transition-colors mb-1">{item.name}</div>
                      <div className="text-sm text-zinc-500 flex flex-wrap gap-2">
                        {Object.entries(item.specs).map(([key, value]) => (
                          <span key={key} className="inline-flex items-center bg-zinc-100 dark:bg-zinc-700 px-2.5 py-1 rounded-md text-xs font-medium">
                            <span className="opacity-70 mr-1 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                            <span className="text-zinc-700 dark:text-zinc-300">{String(value)}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="font-bold text-xl text-emerald-600 dark:text-emerald-400 whitespace-nowrap pl-4 border-l border-zinc-100 dark:border-zinc-700">
                      {formatCurrency(item.price)}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-zinc-500 dark:text-zinc-400">
                  No parts available in this category.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
