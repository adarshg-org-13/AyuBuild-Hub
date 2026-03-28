'use client';

import { useState,useEffect,Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Cpu,Gamepad2,HardDrive,Box,Zap,Save,RotateCcw,CheckCircle2,AlertCircle,ShoppingCart,ExternalLink } from "../../../components/Icons";
import { Button } from "../../../components/Button";
import { formatCurrency,checkCompatibility } from "../../../utils";
import { cpuList,gpuList,motherboardList,ramList,storageList,caseList,psuList } from "../../../data/parts";
import { Part,PartCategory,Build } from "../../../types";
import { Toast,ToastType } from "../../../components/Toast";
import { BuilderCategoryRow } from "../../../components/BuilderCategoryRow";

interface BuildState {
  CPU: Part | undefined;
  GPU: Part | undefined;
  Motherboard: Part | undefined;
  RAM: Part | undefined;
  Storage: Part | undefined;
  Case: Part | undefined;
  PSU: Part | undefined;
  Cooling?: Part | undefined;
}

const categories: { id: PartCategory; icon: any; label: string }[] = [
  { id: 'CPU', icon: Cpu, label: 'CPU' },
  { id: 'GPU', icon: Gamepad2, label: 'Graphics Card' },
  { id: 'Motherboard', icon: Box, label: 'Motherboard' },
  { id: 'RAM', icon: HardDrive, label: 'Memory' },
  { id: 'Storage', icon: HardDrive, label: 'Storage' },
  { id: 'Case', icon: Box, label: 'PC Case' },
  { id: 'PSU', icon: Zap, label: 'PSU' },
];

function BuilderContent() {
  const [build, setBuild] = useState<BuildState>({
    CPU: undefined,
    GPU: undefined,
    Motherboard: undefined,
    RAM: undefined,
    Storage: undefined,
    Case: undefined,
    PSU: undefined,
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

  const showToast = (message: string, type: ToastType = 'success') => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const totalPrice = Object.values(build).reduce((acc, part) => acc + (part?.price || 0), 0);
  const totalWattage = Object.values(build).reduce((acc, part) => acc + (part?.wattage || 0), 0);

  const handleSelectPart = (category: PartCategory, part: Part) => {
    setBuild(prev => ({ ...prev, [category]: part }));
    
    // Auto-advance logic
    const currentIndex = categories.findIndex(c => c.id === category);
    if (currentIndex < categories.length - 1) {
      const nextCategory = categories[currentIndex + 1].id;
      // Only auto-open next if it's empty
      if (!build[nextCategory]) {
        setActiveCategory(nextCategory);
      } else {
        setActiveCategory(null); // Close if next is already filled
      }
    } else {
      setActiveCategory(null); // Close if it was the last category
    }
  };

  const handleRemovePart = (category: PartCategory) => {
    setBuild(prev => ({ ...prev, [category]: null }));
  };

  const handleToggleCategory = (category: PartCategory) => {
    setActiveCategory(prev => (prev === category ? null : category));
  };

  const handleSaveBuild = () => {
    const hasParts = Object.values(build).some(part => part !== null);
    
    if (!hasParts) {
      showToast('Please select at least one part to save a build.', 'error');
      return;
    }

    const { status } = checkCompatibility(build);
    
    const newBuild: Build = {
      id: crypto.randomUUID(),
      name: `My Custom Build ${new Date().toLocaleDateString()}`,
      parts: build,
      totalPrice,
      totalWattage,
      compatibilityStatus: status,
      createdAt: new Date().toISOString(),
    };

    try {
      const savedBuilds = JSON.parse(localStorage.getItem('savedBuilds') || '[]');
      localStorage.setItem('savedBuilds', JSON.stringify([...savedBuilds, newBuild]));
      showToast('Build saved successfully!', 'success');
    } catch (error) {
      console.error('Failed to save build:', error);
      showToast('Failed to save build. Please try again.', 'error');
    }
  };

  const handleCheckout = () => {
    const parts = Object.values(build).filter(p => p !== null) as Part[];
    if (parts.length === 0) return;

    // Create a search query for the core components
    const query = parts
      .filter(p => ['CPU', 'GPU', 'Motherboard'].includes(p.category))
      .map(p => p.name)
      .join(' ');
    
    const url = `https://www.amazon.com/s?k=${encodeURIComponent(query || 'gaming pc parts')}`;
    window.open(url, '_blank');
  };

  const getPartsList = (category: PartCategory): Part[] => {
    switch (category) {
      case 'CPU': return cpuList;
      case 'GPU': return gpuList;
      case 'Motherboard': return motherboardList;
      case 'RAM': return ramList;
      case 'Storage': return storageList;
      case 'Case': return caseList;
      case 'PSU': return psuList;
      default: return [];
    }
  };

  const { messages: compatibilityIssues } = checkCompatibility(build);

  return (
    <div className="min-h-screen pb-5">
      <div className="mb-4">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">PC Builder</h1>
        <p className="text-zinc-600 dark:text-zinc-400">Select your components to build your PC.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
        {/* Left Column: Build List */}
        <div className="xl:col-span-9 space-y-3">
          {categories.map((category) => (
            <BuilderCategoryRow
              key={category.id}
              category={category}
              part={build[category.id] || null}
              isActive={activeCategory === category.id}
              onToggle={() => handleToggleCategory(category.id)}
              onSelect={(part) => handleSelectPart(category.id, part)}
              onRemove={() => handleRemovePart(category.id)}
              partsList={getPartsList(category.id)}
            />
          ))}
        </div>

        {/* Right Column: Summary */}
        <div className="xl:col-span-3">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white dark:bg-zinc-800 rounded-3xl p-6 border border-zinc-200 dark:border-zinc-700 shadow-xl">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" /> Build Summary
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center text-zinc-600 dark:text-zinc-400">
                  <span>Core Components</span>
                  <span>{formatCurrency(totalPrice)}</span>
                </div>
                <div className="flex justify-between items-center text-zinc-600 dark:text-zinc-400">
                  <span>Estimated Wattage</span>
                  <span className="flex items-center gap-1"><Zap className="w-4 h-4 text-yellow-500" /> ~{totalWattage > 0 ? totalWattage : 0}W</span>
                </div>
                <div className="h-px bg-zinc-200 dark:bg-zinc-700 my-4" />
                <div className="flex justify-between items-center text-2xl font-bold text-zinc-900 dark:text-white">
                  <span>Total</span>
                  <span>{formatCurrency(totalPrice)}</span>
                </div>
              </div>

              {compatibilityIssues.length > 0 ? (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold mb-2">
                    <AlertCircle className="w-5 h-5" /> Compatibility Issues
                  </div>
                  <ul className="list-disc list-inside text-sm text-red-600 dark:text-red-400 space-y-1">
                    {compatibilityIssues.map((issue, idx) => (
                      <li key={idx}>{issue}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5" /> All parts are compatible
                </div>
              )}

              <div className="space-y-5">
                <Button 
                  className="w-full justify-center" 
                  disabled={compatibilityIssues.length > 0 || totalPrice === 0}
                  onClick={handleCheckout}
                >
                  Checkout on Amazon<ExternalLink className="w-3 h-3 ml-0" />
                </Button>
                <Button 
                  variant="secondary" 
                  className="w-full justify-center"
                  onClick={handleSaveBuild}
                >
                  <Save className="w-4 h-4 mr-2" /> Save Build
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-center text-zinc-500 hover:text-red-500"
                  onClick={() => setBuild({
                    CPU: undefined, GPU: undefined, Motherboard: undefined, RAM: undefined, Storage: undefined, Case: undefined, PSU: undefined
                  })}
                >
                  <RotateCcw className="w-4 h-4 mr-2" /> Reset Build
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-1xl font-bold text-zinc-900 dark:text-white mb-2"><span className="block">--------------------------------------------------------------------------------------</span><span className='block'> Disclaimer!: </span> Make sure to check the Wattage of the parts on your own
        to avoid clashes in the pc build<br/></p><span className="block"><p className="text-1xl font-bold text-zinc-900 dark:text-white mb-2">--------------------------------------------------------------------------------------</p></span>
      
      <Toast 
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </div>
  );
}

export default function BuilderPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-zinc-500">Loading builder...</div>}>
      <BuilderContent />
    </Suspense>
  );
}



//Made by Adarsh Gusain