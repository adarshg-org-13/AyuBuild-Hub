'use client'

import {AroowRight,CheckCircle2,Zap,DollarSign} from '../components/Icons';
import {FeaturedBuildCard} from '../components/FeaturedBuildCard';
import {Button} from '../components/Button';
import {HeroSlideShow} from '../components/HeroSlideShow';

export default function Home(){
    const featuredBuilds = [
    {
        name : "The Budget Intel Starter",
        price : 485,
        cpu:"Intel Core i3-12100F",
        gpu:"Intl Arc A580",
        cpuBrand: "Intel" as const,
        gpuBrand: "Intel" as const,
        fps: {valorant:240 , cs2:180 , re7:95},
        image:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=800&auto=format&fit=crop"
    },
    {
        name:"Best Amd Build",
        price:495,
        cpu:"AMD Ryzen 5 5600",
        gpu:"Radeon RX 6600",
        cpuBrand: "AMD" as const,
        gpuBrand: "AMD" as const,
        fps:{valorant:260,cs2:200,re7:110},
        image:"https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop",
    },
    {
        name:"1080p Pure Performance",
        price:750,
        cpu:"AMD Ryzen 5 7600",
        gpu:"Radeon Rx 7600XT",
        cpuBrand: "AMD" as const,
        gpuBrand: "AMD" as const,
        fps:{valorant:350,cs2:280,re7:145},
        image:"https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800&auto=format&fit=crop",
    },
    {
        name:"The Sweetspot Build",
        price:750,
        cpu:"AMD Ryzen 5 7600",
        gpu:"Geforce RTX 4060 8GB",
        cpuBrand: "AMD" as const,
        gpuBrand: "NVIDIA" as const,
        fps:{valorant:340,cs2:270,re7:140},
        image:"https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "1440p AMD Crusher",
        price: 980,
        cpu: "AMD Ryzen 7 7700",
        gpu: "Radeon RX 7700 XT",
        cpuBrand: "AMD" as const,
        gpuBrand: "AMD" as const,
        fps: { valorant: 450, cs2: 350, re7: 180 },
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "The Streamer's Choice",
        price: 995,
        cpu: "AMD Ryzen 5 7600X",
        gpu: "GeForce RTX 4070",
        cpuBrand: "AMD" as const,
        gpuBrand: "NVIDIA" as const,
        fps: { valorant: 440, cs2: 340, re7: 175 },
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "High-End Domination",
        price: 1480,
        cpu: "AMD Ryzen 7 7800X3D",
        gpu: "GeForce RTX 4070 Ti Super",
        cpuBrand: "AMD" as const,
        gpuBrand: "NVIDIA" as const,
        fps: { valorant: 600, cs2: 500, re7: 240 },
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800&auto=format&fit=crop",
    }
    ];
}