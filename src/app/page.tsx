'use client';

import { ArrowRight,CheckCircle2,Zap,DollarSign } from "../../components/Icons";
import { FeaturedBuildCard } from "../../components/FeaturedBuildCard";
import { Button } from "../../components/Button";
import { HeroSlideshow } from "../../components/HeroSlideshow";

export default function Home() {
  const featuredBuilds = [
    {
      name: "The Best Intel Budget Build",
      price: 550,
      cpu: "Intel Core i5-12400F",
      gpu: "Radeon RX 6600 8GB",
      cpuBrand: "Intel" as const,
      gpuBrand: "AMD" as const, // Using Intel GPU for pure budget
      fps: { valorant: 300, cs2: 130, re7: 90 },
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Best AMD Budget Build",
      price: 600,
      cpu: "AMD Ryzen 5 5600",
      gpu: "Intel Arc B550 12GB",
      cpuBrand: "AMD" as const,
      gpuBrand: "Intel" as const,
      fps: { valorant: 280, cs2: 150, re7: 110 },
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Best 1080p Build",
      price: 750,
      cpu: "Intel Core i5-14400F",
      gpu: "GeForce RTX 4060 Ti 8GB",
      cpuBrand: "Intel" as const,
      gpuBrand: "NVIDIA" as const,
      fps: { valorant: 350, cs2: 180, re7: 130 },
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Best Value for Money Build for 1440p",
      price: 750,
      cpu: "AMD Ryzen 5 7600X",
      gpu: "Radeon RX 7600 XT 12GB",
      cpuBrand: "AMD" as const,
      gpuBrand: "AMD" as const,
      fps: { valorant: 350, cs2: 200, re7: 140 },
      image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "1440p AMD Crusher",
      price: 1000,
      cpu: "AMD Ryzen 5 9600X",
      gpu: "Radeon RX 7700 XT 16GB",
      cpuBrand: "AMD" as const,
      gpuBrand: "AMD" as const,
      fps: { valorant: 400, cs2: 250, re7: 175 },
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "The Streamer's Choice",
      price: 1200,
      cpu: "Intel Core i5-14600K",
      gpu: "GeForce RTX 4070 12GB",
      cpuBrand: "Intel" as const,
      gpuBrand: "NVIDIA" as const,
      fps: { valorant: 400, cs2: 230, re7: 175 },
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    },
    {
      name:"Best Gaming Build",
      price: 2500,
      cpu: "AMD Ryzen 7 9800X3D",
      gpu: "GeForce RTX 5080 16GB",
      cpuBrand: "AMD" as const,
      gpuBrand: "NVIDIA" as const,
      fps: { valorant: 600, cs2: 400, re7: 240 },
      image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800&auto=format&fit=crop",
    }
  ];

  return (
    <div className="space-y-32 pb-24">
      {/* Hero Section */}
      <section className="relative pt-12 pb-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left z-10">
              <div
                className="animate-fade-in-up"
              >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 leading-[1.1]">
                  Configure Your Pc with RigZen<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 dark:from-emerald-400 dark:via-cyan-400 dark:to-emerald-400 animate-pulse text-glow">
                    (Pc Build Expert)
                  </span>
                </h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-normal">
                  Stop guessing pc parts. We check <span className="text-emerald-600 dark:text-emerald-400 font-medium">compatibility, power, and prices</span> so that you can focus on your build.
                </p>
                <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-6">
                  <Button href="/build" size="lg" className="min-w-[200px] rounded-2xl shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all">
                    Start Building <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button href="/saved" variant="outline" size="lg" className="min-w-[200px] rounded-2xl border-2 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                    View Saved Builds
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div
                className="animate-fade-in"
              >
                <HeroSlideshow />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16 border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">How It Works</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">Three simple steps to your perfect setup.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent z-0" />

          {[
            { step: "01", title: "Pick Your Parts", desc: "Select the parts from the list." },
            { step: "02", title: "Check Compatibility", desc: "Auto checks for the compatible parts." },
            { step: "03", title: "Price Calculations", desc: "Only the best deals are provided." }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="relative z-10 flex flex-col items-center text-center animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="w-24 h-24 rounded-full bg-white dark:bg-zinc-800 border-4 border-zinc-100 dark:border-zinc-700 flex items-center justify-center text-3xl font-bold text-emerald-600 dark:text-emerald-400 shadow-lg mb-6">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: CheckCircle2,
              title: "Compatibility",
              desc: "Auto checking for the compatible parts and sockets."
            },
            {
              icon: Zap,
              title: "Power",
              desc: "Auto Wattage calculations of the parts and rough estimate of it."
            },
            {
              icon: DollarSign,
              title: "Price",
              desc: "All the deals are found out from trusted part providers."
            }
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/5 group animate-fade-in-up hover:-translate-y-1"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 font-sans">{feature.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Builds */}
      <section className="container mx-auto px-4 pb-3">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
              Recommended Builds
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl">
              Best configurations approved by various people and used by the people
            </p>
          </div>
          <Button href="/saved" variant="ghost" className="group text-lg">
            View all builds <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredBuilds.map((build, idx) => (
            <FeaturedBuildCard key={idx} build={build} index={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}
