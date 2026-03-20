import { cn } from '../utils';
import { ComponentProps } from 'react';
import Link from 'next/link';

type ButtonProps = ComponentProps<'button'> & Partial<ComponentProps<typeof Link>> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
};

export function Button({ className, variant = 'primary', size = 'md', children, href, ...props }: ButtonProps) {
  const variants = {
    primary: "bg-emerald-500 text-white dark:text-zinc-950 hover:bg-emerald-600 dark:hover:bg-emerald-400 shadow-[0_0_20px_-5px_rgba(0,173,181,0.4)] hover:shadow-[0_0_25px_-5px_rgba(0,173,181,0.6)]",
    secondary: "bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-600 border border-zinc-300 dark:border-zinc-600",
    outline: "bg-transparent border-2 border-emerald-500 text-emerald-600 dark:text-emerald-500 hover:bg-emerald-500/10",
    ghost: "bg-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-4 text-lg"
  };

  const classes = cn(
    "font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 active:scale-95",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props as any}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...props as ComponentProps<'button'>}
    >
      {children}
    </button>
  );
}


//Made by Adarsh Gusain