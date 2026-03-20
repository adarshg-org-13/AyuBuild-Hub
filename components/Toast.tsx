import { useEffect } from 'react';
import { CheckCircle2, XCircle, Info } from '../components/Icons';
import { cn } from '../utils';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type?: ToastType;
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ message, type = 'success', isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-8 right-8 z-50 animate-fade-in-up"
        >
          <div className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl border backdrop-blur-md",
            type === 'success' && "bg-emerald-950/80 border-emerald-500/50 text-emerald-100",
            type === 'error' && "bg-red-950/80 border-red-500/50 text-red-100",
            type === 'info' && "bg-blue-950/80 border-blue-500/50 text-blue-100"
          )}>
            {type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
            {type === 'error' && <XCircle className="w-5 h-5 text-red-400" />}
            {type === 'info' && <Info className="w-5 h-5 text-blue-400" />}
            <span className="font-medium text-sm">{message}</span>
          </div>
        </div>
      )}
    </>
  );
}


//Made by Adarsh Gusain