import { cn } from '../utils';

interface BrandLogoProps {
  brand: 'Intel' | 'AMD' | 'NVIDIA';
  className?: string;
}

export function BrandLogo({ brand, className }: BrandLogoProps) {
  if (brand === 'Intel') {
    return (
      <div className={cn("flex items-center gap-1 font-bold text-[#0068B5]", className)}>
        <span className="tracking-tighter">intel</span>
      </div>
    );
  }
  
  if (brand === 'AMD') {
    return (
      <div className={cn("flex items-center gap-1 font-bold text-[#ED1C24]", className)}>
        <span className="tracking-wider">AMD</span>
      </div>
    );
  }

  if (brand === 'NVIDIA') {
    return (
      <div className={cn("flex items-center gap-1 font-bold text-[#76B900]", className)}>
        <span className="tracking-tight">NVIDIA</span>
      </div>
    );
  }

  return null;
}


//Made by Adarsh Gusain