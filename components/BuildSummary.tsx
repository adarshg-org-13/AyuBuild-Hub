import { Part, PartCategory, CompatibilityResult } from '../types';
import { formatCurrency } from '../utils';
import { CompatibilityBadge } from './CompatibilityBadge';
import { Zap, ShoppingCart, Trash2, Save } from './Icons';

interface BuildSummaryProps {
  parts: Partial<Record<PartCategory, Part>>;
  totalPrice: number;
  totalWattage: number;
  compatibility: CompatibilityResult;
  onRemovePart: (category: PartCategory) => void;
  onSaveBuild: () => void;
}

export function BuildSummary({ 
  parts, 
  totalPrice, 
  totalWattage, 
  compatibility, 
  onRemovePart,
  onSaveBuild
}: BuildSummaryProps) {
  const partCount = Object.keys(parts).length;
  const progress = (partCount / 8) * 100;

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white">Build Summary</h2>
        <CompatibilityBadge status={compatibility.status} />
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-zinc-500 mb-2">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-emerald-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Selected Parts List */}
      <div className="space-y-3 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
        {Object.entries(parts).length === 0 ? (
          <div className="text-center py-8 text-zinc-600 text-sm italic">
            No parts selected yet.
          </div>
        ) : (
          Object.entries(parts).map(([category, part]) => (
            <div key={category} className="flex items-start justify-between group">
              <div className="min-w-0">
                <div className="text-xs text-zinc-500 mb-0.5">{category}</div>
                <div className="text-sm text-zinc-300 truncate font-medium">{part?.name}</div>
                <div className="text-xs text-zinc-500 mt-0.5">{formatCurrency(part?.price || 0)}</div>
              </div>
              <button 
                onClick={() => onRemovePart(category as PartCategory)}
                className="text-zinc-600 hover:text-red-400 p-1 rounded transition-colors opacity-0 group-hover:opacity-100"
                title="Remove part"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Compatibility Messages */}
      {compatibility.messages.length > 0 && (
        <div className="mb-6 p-3 bg-zinc-950/50 rounded-lg border border-zinc-800/50 text-xs space-y-1">
          {compatibility.messages.map((msg, idx) => (
            <div key={idx} className="flex items-start gap-2 text-zinc-400">
              <span className="mt-0.5">•</span>
              <span>{msg}</span>
            </div>
          ))}
        </div>
      )}

      {/* Totals */}
      <div className="border-t border-zinc-800 pt-4 space-y-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-zinc-400">
            <Zap className="w-4 h-4" />
            <span>Estimated Wattage</span>
          </div>
          <span className="font-mono text-zinc-200">{totalWattage}W</span>
        </div>
        <div className="flex items-center justify-between text-lg font-semibold">
          <span className="text-zinc-100">Total</span>
          <span className="text-emerald-400 font-mono">{formatCurrency(totalPrice)}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-3 mt-6">
        <button 
          onClick={onSaveBuild}
          disabled={partCount === 0}
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Save className="w-4 h-4" />
          Save
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-emerald-900/20">
          <ShoppingCart className="w-4 h-4" />
          Buy All
        </button>
      </div>
    </div>
  );
}


//Made by Adarsh Gusain