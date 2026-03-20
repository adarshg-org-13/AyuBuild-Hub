import { PartCategory } from '../types';
import { cn } from '../utils';
import { Cpu, CircuitBoard, MemoryStick, HardDrive, Zap, Box, Fan, MonitorPlay } from '../components/Icons';

interface CategorySidebarProps {
  selectedCategory: PartCategory;
  onSelectCategory: (category: PartCategory) => void;
  completedCategories: PartCategory[];
}

const categories: { id: PartCategory; label: string; icon: any }[] = [
  { id: 'CPU', label: 'Processor', icon: Cpu },
  { id: 'Motherboard', label: 'Motherboard', icon: CircuitBoard },
  { id: 'RAM', label: 'Memory', icon: MemoryStick },
  { id: 'GPU', label: 'Graphics Card', icon: MonitorPlay },
  { id: 'Storage', label: 'Storage', icon: HardDrive },
  { id: 'PSU', label: 'Power Supply', icon: Zap },
  { id: 'Case', label: 'Case', icon: Box },
  { id: 'Cooling', label: 'Cooling', icon: Fan },
];

export function CategorySidebar({ selectedCategory, onSelectCategory, completedCategories }: CategorySidebarProps) {
  return (
    <div className="w-full lg:w-64 shrink-0 space-y-1">
      <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3 px-2">Components</h2>
      {categories.map((cat) => {
        const Icon = cat.icon;
        const isActive = selectedCategory === cat.id;
        const isCompleted = completedCategories.includes(cat.id);

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={cn(
              "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group",
              isActive 
                ? "bg-emerald-500/10 text-emerald-400" 
                : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
            )}
          >
            <div className="flex items-center gap-3">
              <Icon className={cn("w-4 h-4", isActive ? "text-emerald-500" : "text-zinc-600 group-hover:text-zinc-400")} />
              <span>{cat.label}</span>
            </div>
            {isCompleted && (
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            )}
          </button>
        );
      })}
    </div>
  );
}


//Made by Adarsh Gusain