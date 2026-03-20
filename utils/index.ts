import { Part, PartCategory, CompatibilityResult } from '../types';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(' ');
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function checkCompatibility(parts: Partial<Record<PartCategory, Part>>): CompatibilityResult {
  const messages: string[] = [];
  let status: 'Compatible' | 'Warning' | 'Incompatible' = 'Compatible';

  const cpu = parts['CPU'];
  const mobo = parts['Motherboard'];
  const ram = parts['RAM'];
  const gpu = parts['GPU'];
  const psu = parts['PSU'];
  const casePart = parts['Case'];

  // CPU & Motherboard Socket Compatibility
  if (cpu && mobo) {
    if (cpu.specs.socket !== mobo.specs.socket) {
      status = 'Incompatible';
      messages.push(`Incompatible Socket: CPU (${cpu.specs.socket}) does not match Motherboard (${mobo.specs.socket})`);
    }
  }

  // RAM & Motherboard Compatibility
  if (ram && mobo) {
    if (ram.specs.memoryType !== mobo.specs.memoryType) {
      status = 'Incompatible';
      messages.push(`Incompatible Memory: RAM (${ram.specs.memoryType}) does not match Motherboard (${mobo.specs.memoryType})`);
    }
  }

  // Wattage Check
  const totalWattage = Object.values(parts).reduce((sum, part) => sum + (part?.wattage || 0), 0);
  if (psu) {
    const psuWattage = psu.specs.wattage || 0;
    if (totalWattage > psuWattage) {
      status = 'Incompatible';
      messages.push(`Insufficient Power: Estimated wattage (${totalWattage}W) exceeds PSU capacity (${psuWattage}W)`);
    } else if (totalWattage > psuWattage * 0.8) {
      if (status !== 'Incompatible') status = 'Warning';
      messages.push(`Power Warning: Estimated wattage is close to PSU capacity. Consider upgrading for headroom.`);
    }
  }

  // GPU Length & Case Compatibility
  if (gpu && casePart) {
    const gpuLength = gpu.specs.length || 0;
    const maxGpuLength = casePart.specs.maxGpuLength || 0;
    if (gpuLength > maxGpuLength) {
      status = 'Incompatible';
      messages.push(`Clearance Issue: GPU length (${gpuLength}mm) exceeds Case maximum (${maxGpuLength}mm)`);
    }
  }

  return { status, messages };
}


//Made by Adarsh Gusain