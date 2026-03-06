import { Part } from '../types';

// ==============================================================================
// PRODUCT DATA CONFIGURATION
// ==============================================================================
// To add more products or update Amazon links:
// 1. Add a new object to the appropriate list (cpuList, gpuList, etc.)
// 2. Ensure it follows the Part interface structure
// 3. Add the 'amazonLink' property with the full URL to the product page
// ==============================================================================

export const cpuList: Part[] = [
  { 
    id: 'cpu-1', 
    name: 'Intel Core i3-12100F', 
    category: 'CPU', 
    price: 99, 
    brand: 'Intel', 
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', 
    amazonLink: 'https://www.amazon.com/Intel-i3-12100F-Desktop-Processor-BX8071512100F/dp/B09NPJX7G3',
    wattage: 58, 
    specs: { socket: 'LGA1700', cores: 4, threads: 8 } 
  },
  { 
    id: 'cpu-2', 
    name: 'AMD Ryzen 5 5600', 
    category: 'CPU', 
    price: 135, 
    brand: 'AMD', 
    image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=200&auto=format&fit=crop', 
    amazonLink: 'https://www.amazon.com/AMD-5600-12-Thread-Unlocked-Processor/dp/B09VCHR1NO',
    wattage: 65, 
    specs: { socket: 'AM4', cores: 6, threads: 12 } 
  },
  { id: 'cpu-3', name: 'Intel Core i5-13600K', category: 'CPU', price: 299, brand: 'Intel', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', wattage: 125, specs: { socket: 'LGA1700', cores: 14, threads: 20 } },
  { id: 'cpu-4', name: 'AMD Ryzen 7 7800X3D', category: 'CPU', price: 399, brand: 'AMD', image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=200&auto=format&fit=crop', wattage: 120, specs: { socket: 'AM5', cores: 8, threads: 16 } },
  { id: 'cpu-5', name: 'Intel Core i9-14900K', category: 'CPU', price: 549, brand: 'Intel', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', wattage: 253, specs: { socket: 'LGA1700', cores: 24, threads: 32 } },
];

export const gpuList: Part[] = [
  { 
    id: 'gpu-1', 
    name: 'Radeon RX 6600', 
    category: 'GPU', 
    price: 199, 
    brand: 'AMD', 
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', 
    amazonLink: 'https://www.amazon.com/PowerColor-Fighter-Radeon-6600-Graphics/dp/B09H3PY14M',
    wattage: 132, 
    specs: { vram: '8GB', length: 190 } 
  },
  { id: 'gpu-2', name: 'GeForce RTX 3060', category: 'GPU', price: 289, brand: 'NVIDIA', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', wattage: 170, specs: { vram: '12GB', length: 242 } },
  { id: 'gpu-3', name: 'Radeon RX 7800 XT', category: 'GPU', price: 499, brand: 'AMD', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', wattage: 263, specs: { vram: '16GB', length: 267 } },
  { id: 'gpu-4', name: 'GeForce RTX 4070', category: 'GPU', price: 549, brand: 'NVIDIA', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', wattage: 200, specs: { vram: '12GB', length: 244 } },
  { id: 'gpu-5', name: 'GeForce RTX 4090', category: 'GPU', price: 1599, brand: 'NVIDIA', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', wattage: 450, specs: { vram: '24GB', length: 304 } },
];

export const motherboardList: Part[] = [
  { id: 'mb-1', name: 'MSI PRO B660M-A', category: 'Motherboard', price: 129, brand: 'MSI', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', wattage: 40, specs: { socket: 'LGA1700', format: 'mATX', memoryType: 'DDR4' } },
  { id: 'mb-2', name: 'ASUS ROG Strix B550-F', category: 'Motherboard', price: 179, brand: 'ASUS', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', wattage: 50, specs: { socket: 'AM4', format: 'ATX', memoryType: 'DDR4' } },
  { id: 'mb-3', name: 'Gigabyte Z790 AORUS ELITE', category: 'Motherboard', price: 249, brand: 'Gigabyte', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', wattage: 60, specs: { socket: 'LGA1700', format: 'ATX', memoryType: 'DDR5' } },
  { id: 'mb-4', name: 'MSI MAG B650 TOMAHAWK', category: 'Motherboard', price: 219, brand: 'MSI', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', wattage: 55, specs: { socket: 'AM5', format: 'ATX', memoryType: 'DDR5' } },
];

export const ramList: Part[] = [
  { id: 'ram-1', name: 'Corsair Vengeance LPX 16GB', category: 'RAM', price: 49, brand: 'Corsair', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', wattage: 10, specs: { memoryType: 'DDR4', speed: '3200MHz', capacity: '16GB' } },
  { id: 'ram-2', name: 'G.Skill Ripjaws V 32GB', category: 'RAM', price: 79, brand: 'G.Skill', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', wattage: 12, specs: { memoryType: 'DDR4', speed: '3600MHz', capacity: '32GB' } },
  { id: 'ram-3', name: 'Corsair Vengeance 32GB', category: 'RAM', price: 119, brand: 'Corsair', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', wattage: 15, specs: { memoryType: 'DDR5', speed: '6000MHz', capacity: '32GB' } },
  { id: 'ram-4', name: 'G.Skill Trident Z5 RGB 64GB', category: 'RAM', price: 229, brand: 'G.Skill', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', wattage: 18, specs: { memoryType: 'DDR5', speed: '6400MHz', capacity: '64GB' } },
];

export const storageList: Part[] = [
  { id: 'ssd-1', name: 'Kingston NV2 1TB M.2', category: 'Storage', price: 57, brand: 'Kingston', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', wattage: 5, specs: { type: 'NVMe', capacity: '1TB' } },
  { id: 'ssd-2', name: 'Samsung 980 Pro 1TB M.2', category: 'Storage', price: 89, brand: 'Samsung', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', wattage: 7, specs: { type: 'NVMe', capacity: '1TB' } },
  { id: 'ssd-3', name: 'WD Black SN850X 2TB M.2', category: 'Storage', price: 149, brand: 'WD', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', wattage: 8, specs: { type: 'NVMe', capacity: '2TB' } },
];

export const caseList: Part[] = [
  { id: 'case-1', name: 'NZXT H5 Flow', category: 'Case', price: 94, brand: 'NZXT', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', wattage: 20, specs: { format: 'ATX', maxGpuLength: 365 } },
  { id: 'case-2', name: 'Corsair 4000D Airflow', category: 'Case', price: 104, brand: 'Corsair', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', wattage: 25, specs: { format: 'ATX', maxGpuLength: 360 } },
  { id: 'case-3', name: 'Lian Li O11 Dynamic Evo', category: 'Case', price: 159, brand: 'Lian Li', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', wattage: 30, specs: { format: 'ATX', maxGpuLength: 422 } },
];

export const psuList: Part[] = [
  { id: 'psu-1', name: 'Corsair RM750e 750W', category: 'PSU', price: 99, brand: 'Corsair', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', wattage: 0, specs: { wattage: 750, rating: '80+ Gold' } },
  { id: 'psu-2', name: 'MSI MPG A850G 850W', category: 'PSU', price: 129, brand: 'MSI', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', wattage: 0, specs: { wattage: 850, rating: '80+ Gold' } },
  { id: 'psu-3', name: 'Seasonic Vertex GX-1000', category: 'PSU', price: 199, brand: 'Seasonic', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop', wattage: 0, specs: { wattage: 1000, rating: '80+ Gold' } },
];
