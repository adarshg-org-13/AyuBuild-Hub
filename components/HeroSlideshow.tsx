import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from './Icons';
import { Button } from './Button';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop",
    title: "Ultimate Gaming Performance",
    subtitle: "Experience 4K gaming with the latest RTX 50-series cards."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1200&auto=format&fit=crop",
    title: "Clean Minimalist Setups",
    subtitle: "Build a workspace that inspires creativity and focus."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=1200&auto=format&fit=crop",
    title: "Best Budget Options",
    subtitle: "Best hardware with best and affordable price."
  }
];

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-700/50 group">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent z-10" />
          <Image 
            src={slide.image} 
            alt={slide.title} 
            fill
            className={`object-cover transition-transform duration-[5000ms] ${index === current ? 'scale-110' : 'scale-100'}`}
            priority={index === 0}
          />
          <div className="absolute bottom-0 left-0 right-0 p-12 z-20">
            <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-200 ${
              index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {slide.title}
            </h2>
            <p className={`text-xl text-zinc-300 max-w-2xl transition-all duration-700 delay-300 ${
              index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Controls */}
      <div className="absolute bottom-8 right-8 z-30 flex gap-4">
        <button 
          onClick={prev}
          className="rounded-full w-12 h-12 flex items-center justify-center bg-zinc-900/50 backdrop-blur-md border border-zinc-700 text-white hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={next}
          className="rounded-full w-12 h-12 flex items-center justify-center bg-zinc-900/50 backdrop-blur-md border border-zinc-700 text-white hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-200"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === current ? "w-8 bg-emerald-500" : "bg-zinc-500 hover:bg-zinc-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Made by Adarsh Gusain