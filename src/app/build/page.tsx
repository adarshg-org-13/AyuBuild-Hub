use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Cpu, Gamepad2, HardDrive, Box, Zap, Save, RotateCcw, CheckCircle2, AlertCircle, ShoppingCart } from '../../components/Icons';
import { Button } from '../../components/Button';
import { formatCurrency, checkCompatibility } from '../../utils';
import { cpuList, gpuList, motherboardList, ramList, storageList, caseList, psuList } from '../../data/parts';
import { Part, PartCategory, Build } from '../../types';
import { Toast, ToastType } from '../../components/Toast';
import { BuilderCategoryRow } from '../../components/BuilderCategoryRow';

interface BuildState {
  CPU: Part | null;
  GPU: Part | null;
  Motherboard: Part | null;
  RAM: Part | null;
  Storage: Part | null;
  Case: Part | null;
  PSU: Part | null;
}

const categories: { id: PartCategory; icon: any; label: string }[] = [
  { id: 'CPU', icon: Cpu, label: 'Processor' },
  { id: 'GPU', icon: Gamepad2, label: 'Graphics Card' },
  { id: 'Motherboard', icon: Box, label: 'Motherboard' },
  { id: 'RAM', icon: HardDrive, label: 'Memory' },
  { id: 'Storage', icon: HardDrive, label: 'Storage' },
  { id: 'Case', icon: Box, label: 'Case' },
  { id: 'PSU', icon: Zap, label: 'Power Supply' },
];

function BuilderContent() {
  const [build, setBuild] = useState<BuildState>({
    CPU: null,
    GPU: null,
    Motherboard: null,
    RAM: null,
    Storage: null,
    Case: null,
    PSU: null,
  });

  // activeCategory is now either the Category ID (open) or null (closed)
  const [activeCategory, setActiveCategory] = useState<PartCategory | null>('CPU');
  
  const [toast, setToast] = useState<{ message: string; type: ToastType; isVisible: boolean }>({
    message: '',
    type: 'success',
    isVisible: false,
  });

  const searchParams = useSearchParams();
  const loadId = searchParams.get('loadId');

  useEffect(() => {
    if (loadId) {
      try {
        const savedBuilds = JSON.parse(localStorage.getItem('savedBuilds') || '[]');
        const buildToLoad = savedBuilds.find((b: Build) => b.id === loadId);
        if (buildToLoad) {
          setBuild(buildToLoad.parts);
          setToast({ message: 'Build loaded successfully!', type: 'success', isVisible: true });
        }
      } catch (error) {
        console.error('Failed to load build:', error);
      }
    }
  }, [loadId]);