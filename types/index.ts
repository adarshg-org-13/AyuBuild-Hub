export type PartCategory = 'CPU' | 'GPU' | 'Motherboard' | 'RAM' | 'Storage' | 'PSU' | 'Case' | 'Cooling';

export interface Part{
    id:string;
    name:string;
    category:PartCategory;
    brand:string;
    price:number;
    image:string;
    amazonLink?:string;
    wattage?:number;
    specs:{
        socket?:string;
        chipset?:string;
        memoryType?:string;
        formFactor?:string;
        capacity?:string;
        speed?:string;
        vram?:string;
        length?:number;
        maxGpuLength?:number;
        efficiency?:string;
        modular?:boolean;
        [key:string]:any;
    };
}

export interface Build{
    id:string;
    name:string;
    parts:Partial<Record<PartCategory,Part>>;
    totalPrice:number;
    totalWattage:number;
    compatibilityStatus:CompatibilityStatus;
    createdAt:string;
}

export type CompatibilityStatus = 'Compatible' | 'Warning' | 'Incompatible';

export interface CompatibilityResult{
    status:CompatibilityStatus;
    messages:string[];
}