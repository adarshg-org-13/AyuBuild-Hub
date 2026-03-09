import { CompatibilityStatus } from '../types';
import { CheckCircle2, AlertTriangle, XCircle } from '../components/Icons';
import { cn } from '../utils';

interface CompatibilityBadgeProps {
  status: CompatibilityStatus;
  className?: string;
}

export function CompatibilityBadge({ status, className }: CompatibilityBadgeProps) {
  return (
    <div className={cn(
      "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border",
      status === 'Compatible' && "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400",
      status === 'Warning' && "bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400",
      status === 'Incompatible' && "bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400",
      className
    )}>
      {status === 'Compatible' && <CheckCircle2 className="w-4 h-4" />}
      {status === 'Warning' && <AlertTriangle className="w-4 h-4" />}
      {status === 'Incompatible' && <XCircle className="w-4 h-4" />}
      <span>{status}</span>
    </div>
  );
}
