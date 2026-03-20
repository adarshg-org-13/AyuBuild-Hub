'use client';

import { useState, useEffect } from 'react';
import { Build,Part } from '../../../types';
import { formatCurrency } from '../../../utils';
import { CompatibilityBadge } from '../../../components/CompatibilityBadge';
import { Trash2,Copy,BarChart2 } from '../../../components/Icons';
import Link from 'next/link';

export default function SavedBuilds() {
  const [savedBuilds, setSavedBuilds] = useState<Build[]>([]);

  useEffect(() => {
    const builds = JSON.parse(localStorage.getItem('savedBuilds') || '[]');
    setSavedBuilds(builds);
  }, []);

  const handleDelete = (id: string) => {
    const newBuilds = savedBuilds.filter(b => b.id !== id);
    setSavedBuilds(newBuilds);
    localStorage.setItem('savedBuilds', JSON.stringify(newBuilds));
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Saved Builds</h1>
          <p className="text-zinc-600 dark:text-zinc-400">Manage and compare your custom configurations.</p>
        </div>
        <Link 
          href="/build"
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-emerald-500/20"
        >
          Create New Build
        </Link>
      </div>

      {savedBuilds.length === 0 ? (
        <div className="text-center py-24 bg-white/50 dark:bg-zinc-900/30 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800">
          <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800/50 rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-400 dark:text-zinc-600">
            <Copy className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">No saved builds yet</h3>
          <p className="text-zinc-500 mb-6">Start selecting components to create your first build.</p>
          <Link 
            href="/build"
            className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 font-medium"
          >
            Go to Builder &rarr;
          </Link>
        </div>
      ) : (
        <div className="grid gap-6">
          {savedBuilds.map((build, idx) => (
            <div
              key={build.id}
              className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group shadow-sm hover:shadow-md animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{build.name}</h3>
                    <CompatibilityBadge status={build.compatibilityStatus} className="text-xs py-0.5 px-2" />
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                    <span>{new Date(build.createdAt).toLocaleDateString()}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-700 self-center" />
                    <span>{Object.keys(build.parts).length} Parts</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-700 self-center" />
                    <span>{build.totalWattage}W Estimated</span>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {Object.values(build.parts).filter((p): p is Part => !!p).map((part) => (
                      <span key={part.id} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded text-xs text-zinc-600 dark:text-zinc-500 truncate max-w-[150px]">
                        {part.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-2 min-w-[140px]">
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white">
                    {formatCurrency(build.totalPrice)}
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleDelete(build.id)}
                      className="p-2 text-zinc-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                      title="Delete Build"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <Link
                      href={`/compare?id=${build.id}`}
                      className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                      title="Compare"
                    >
                      <BarChart2 className="w-4 h-4" />
                    </Link>
                    <Link 
                      href={`/build?loadId=${build.id}`}
                      className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


//Made by Adarsh Gusain