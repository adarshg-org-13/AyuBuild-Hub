import { Part, CompatibilityResult, PartCategory } from '../types';

export function calculateTotalWattage(parts: Partial<Record<PartCategory, Part>>): number {
  return Object.values(parts).reduce((total, part) => total + (part?.wattage || 0), 0);
}

export function calculateTotalPrice(parts: Partial<Record<PartCategory, Part>>): number {
  return Object.values(parts).reduce((total, part) => total + (part?.price || 0), 0);
}

export function checkCompatibility(parts: Partial<Record<PartCategory, Part>>): CompatibilityResult {
  const messages: string[] = [];
  let status: CompatibilityResult['status'] = 'Compatible';

  const cpu = parts.CPU;
  const motherboard = parts.Motherboard;
  const ram = parts.RAM;
  const gpu = parts.GPU;
  const psu = parts.PSU;
  const pcCase = parts.Case;
  const totalWattage = calculateTotalWattage(parts);

  // CPU vs Motherboard Socket
  if (cpu && motherboard) {
    if (cpu.specs.socket !== motherboard.specs.socket) {
      status = 'Incompatible';
      messages.push(`Incompatible Socket: CPU (${cpu.specs.socket}) does not match Motherboard (${motherboard.specs.socket}).`);
    }
  }

  // RAM vs Motherboard Type
  if (ram && motherboard) {
    if (ram.specs.memoryType !== motherboard.specs.memoryType) {
      status = 'Incompatible';
      messages.push(`Incompatible Memory: RAM (${ram.specs.memoryType}) does not match Motherboard (${motherboard.specs.memoryType}).`);
    }
  }

  // GPU vs Case Length
  if (gpu && pcCase) {
    const gpuLength = gpu.specs.length || 0;
    const maxGpuLength = pcCase.specs.maxGpuLength || 0;
    if (gpuLength > maxGpuLength) {
      status = 'Incompatible';
      messages.push(`Clearance Issue: GPU length (${gpuLength}mm) exceeds Case maximum (${maxGpuLength}mm).`);
    } else if (maxGpuLength - gpuLength < 10) {
      if (status !== 'Incompatible') status = 'Warning';
      messages.push(`Tight Fit: GPU length is very close to Case maximum clearance.`);
    }
  }

  // PSU Wattage
  if (psu) {
    const psuWattage = psu.specs.wattage || 0;
    // Recommended buffer: Total wattage * 1.5 or +100-200W
    const recommendedWattage = totalWattage * 1.25; 
    
    if (psuWattage < totalWattage) {
      status = 'Incompatible';
      messages.push(`Insufficient Power: Total wattage (${totalWattage}W) exceeds PSU capacity (${psuWattage}W).`);
    } else if (psuWattage < recommendedWattage) {
      if (status !== 'Incompatible') status = 'Warning';
      messages.push(`Low Power Headroom: PSU wattage is sufficient but recommended to have more headroom (Recommended: ${Math.ceil(recommendedWattage)}W).`);
    }
  } else if (totalWattage > 0) {
     if (status !== 'Incompatible') status = 'Warning';
     messages.push(`No PSU Selected: System requires approximately ${totalWattage}W.`);
  }

  return { status, messages };
}



//Made by Adarsh Gusain
