'use client';

{/*COMPARE PAGE*/}

import Image from 'next/image';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Build } from '../../types';
import { formatCurrency } from '../../utils';
import { CompatibilityBadge } from '../../components/CompatibilityBadge';
import { ChevronDown } from '../../components/Icons';

function CompareContent() {
  const searchParams = useSearchParams();
  const [savedBuilds, setSavedBuilds] = useState<Build[]>([]);
  const [selectedBuildIds, setSelectedBuildIds] = useState<[string | null, string | null]>([
    searchParams.get('id') || null,
    null
  ]);

  useEffect(() => {
    const builds = JSON.parse(localStorage.getItem('savedBuilds') || '[]');
    setSavedBuilds(builds);
  }, []);

  const getBuild = (id: string | null) => savedBuilds.find(b => b.id === id);

  const build1 = getBuild(selectedBuildIds[0]);
  const build2 = getBuild(selectedBuildIds[1]);

  const categories = ['CPU', 'Motherboard', 'RAM', 'GPU', 'Storage', 'PSU', 'Case', 'Cooling'] as const;

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">Compare Builds</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Selector 1 */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-zinc-500 dark:text-zinc-400">Build A</label>
          <div className="relative">
            <select 
              className="w-full appearance-none bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 pr-10 text-zinc-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all cursor-pointer shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700"
              value={selectedBuildIds[0] || ''}
              onChange={(e) => setSelectedBuildIds([e.target.value || null, selectedBuildIds[1]])}
            >
              <option value="">Select a build...</option>
              {savedBuilds.map(b => (
                <option key={b.id} value={b.id}>{b.name} ({formatCurrency(b.totalPrice)})</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" />
          </div>
        </div>

        {/* Selector 2 */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-zinc-500 dark:text-zinc-400">Build B</label>
          <div className="relative">
            <select 
              className="w-full appearance-none bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 pr-10 text-zinc-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all cursor-pointer shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700"
              value={selectedBuildIds[1] || ''}
              onChange={(e) => setSelectedBuildIds([selectedBuildIds[0], e.target.value || null])}
            >
              <option value="">Select a build...</option>
              {savedBuilds.map(b => (
                <option key={b.id} value={b.id}>{b.name} ({formatCurrency(b.totalPrice)})</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      {(build1 || build2) && (
        <div className="bg-white/50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-3 bg-zinc-50 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800 p-4 text-sm font-medium text-zinc-500 uppercase tracking-wider">
            <div>Category</div>
            <div className="text-zinc-900 dark:text-zinc-300">{build1?.name || 'Empty'}</div>
            <div className="text-zinc-900 dark:text-zinc-300">{build2?.name || 'Empty'}</div>
          </div>

          {/* Overview Stats */}
          <div className="grid grid-cols-3 p-4 border-b border-zinc-200 dark:border-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-colors">
            <div className="font-medium text-zinc-700 dark:text-zinc-300">Total Price</div>
            <div className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">{build1 ? formatCurrency(build1.totalPrice) : '-'}</div>
            <div className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">{build2 ? formatCurrency(build2.totalPrice) : '-'}</div>
          </div>
          <div className="grid grid-cols-3 p-4 border-b border-zinc-200 dark:border-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-colors">
            <div className="font-medium text-zinc-700 dark:text-zinc-300">Wattage</div>
            <div className="text-zinc-600 dark:text-zinc-400">{build1 ? `${build1.totalWattage}W` : '-'}</div>
            <div className="text-zinc-600 dark:text-zinc-400">{build2 ? `${build2.totalWattage}W` : '-'}</div>
          </div>
          <div className="grid grid-cols-3 p-4 border-b border-zinc-200 dark:border-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-colors">
            <div className="font-medium text-zinc-700 dark:text-zinc-300">Compatibility</div>
            <div>{build1 ? <CompatibilityBadge status={build1.compatibilityStatus} /> : '-'}</div>
            <div>{build2 ? <CompatibilityBadge status={build2.compatibilityStatus} /> : '-'}</div>
          </div>

          {/* Parts Comparison */}
          {categories.map((cat) => (
            <div key={cat} className="grid grid-cols-3 p-4 border-b border-zinc-200 dark:border-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-colors last:border-0">
              <div className="font-medium text-zinc-600 dark:text-zinc-400 flex items-center">{cat}</div>
              
              {/* Build 1 Part */}
              <div className="pr-4">
                {build1?.parts[cat] ? (
                  <div className="flex items-start gap-3">
                    <Image 
                      src={build1.parts[cat]!.image} 
                      alt={build1.parts[cat]!.name} 
                      width={40} 
                      height={40} 
                      className="rounded bg-zinc-100 dark:bg-zinc-800 object-cover" 
                    />
                    <div>
                      <div className="text-sm text-zinc-900 dark:text-white font-medium">{build1.parts[cat]!.name}</div>
                      <div className="text-xs text-zinc-500">{formatCurrency(build1.parts[cat]!.price)}</div>
                    </div>
                  </div>
                ) : (
                  <span className="text-zinc-400 dark:text-zinc-600 text-sm italic">Not selected</span>
                )}
              </div>

              {/* Build 2 Part */}
              <div className="pr-4">
                {build2?.parts[cat] ? (
                  <div className="flex items-start gap-3">
                    <Image 
                      src={build2.parts[cat]!.image} 
                      alt={build2.parts[cat]!.name} 
                      width={40} 
                      height={40} 
                      className="rounded bg-zinc-100 dark:bg-zinc-800 object-cover" 
                    />
                    <div>
                      <div className="text-sm text-zinc-900 dark:text-white font-medium">{build2.parts[cat]!.name}</div>
                      <div className="text-xs text-zinc-500">{formatCurrency(build2.parts[cat]!.price)}</div>
                    </div>
                  </div>
                ) : (
                  <span className="text-zinc-400 dark:text-zinc-600 text-sm italic">Not selected</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Compare() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-zinc-500">Loading Comparison...</div>}>
      <CompareContent />
    </Suspense>
  );
}
