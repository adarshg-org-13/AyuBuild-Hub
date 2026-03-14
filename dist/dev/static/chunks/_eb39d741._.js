(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
function Button({ className, variant = 'primary', size = 'md', children, href, ...props }) {
    const variants = {
        primary: "bg-emerald-500 text-white dark:text-zinc-950 hover:bg-emerald-600 dark:hover:bg-emerald-400 shadow-[0_0_20px_-5px_rgba(0,173,181,0.4)] hover:shadow-[0_0_25px_-5px_rgba(0,173,181,0.6)]",
        secondary: "bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-600 border border-zinc-300 dark:border-zinc-600",
        outline: "bg-transparent border-2 border-emerald-500 text-emerald-600 dark:text-emerald-500 hover:bg-emerald-500/10",
        ghost: "bg-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
    };
    const sizes = {
        sm: "px-3 py-1.5 text-xs",
        md: "px-5 py-2.5 text-sm",
        lg: "px-8 py-4 text-lg"
    };
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 active:scale-95", variants[variant], sizes[size], className);
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: classes,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/Button.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: classes,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Button.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/parts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "caseList",
    ()=>caseList,
    "cpuList",
    ()=>cpuList,
    "gpuList",
    ()=>gpuList,
    "motherboardList",
    ()=>motherboardList,
    "psuList",
    ()=>psuList,
    "ramList",
    ()=>ramList,
    "storageList",
    ()=>storageList
]);
const cpuList = [
    {
        id: 'cpu-1',
        name: 'Intel Core i3-12100F',
        category: 'CPU',
        price: 99,
        brand: 'Intel',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        amazonLink: 'https://www.amazon.com/Intel-i3-12100F-Desktop-Processor-BX8071512100F/dp/B09NPJX7G3',
        wattage: 58,
        specs: {
            socket: 'LGA1700',
            cores: 4,
            threads: 8
        }
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
        specs: {
            socket: 'AM4',
            cores: 6,
            threads: 12
        }
    },
    {
        id: 'cpu-3',
        name: 'Intel Core i5-13600K',
        category: 'CPU',
        price: 299,
        brand: 'Intel',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        wattage: 125,
        specs: {
            socket: 'LGA1700',
            cores: 14,
            threads: 20
        }
    },
    {
        id: 'cpu-4',
        name: 'AMD Ryzen 7 7800X3D',
        category: 'CPU',
        price: 399,
        brand: 'AMD',
        image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=200&auto=format&fit=crop',
        wattage: 120,
        specs: {
            socket: 'AM5',
            cores: 8,
            threads: 16
        }
    },
    {
        id: 'cpu-5',
        name: 'Intel Core i9-14900K',
        category: 'CPU',
        price: 549,
        brand: 'Intel',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        wattage: 253,
        specs: {
            socket: 'LGA1700',
            cores: 24,
            threads: 32
        }
    }
];
const gpuList = [
    {
        id: 'gpu-1',
        name: 'Radeon RX 6600',
        category: 'GPU',
        price: 199,
        brand: 'AMD',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        amazonLink: 'https://www.amazon.com/PowerColor-Fighter-Radeon-6600-Graphics/dp/B09H3PY14M',
        wattage: 132,
        specs: {
            vram: '8GB',
            length: 190
        }
    },
    {
        id: 'gpu-2',
        name: 'GeForce RTX 3060',
        category: 'GPU',
        price: 289,
        brand: 'NVIDIA',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        wattage: 170,
        specs: {
            vram: '12GB',
            length: 242
        }
    },
    {
        id: 'gpu-3',
        name: 'Radeon RX 7800 XT',
        category: 'GPU',
        price: 499,
        brand: 'AMD',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        wattage: 263,
        specs: {
            vram: '16GB',
            length: 267
        }
    },
    {
        id: 'gpu-4',
        name: 'GeForce RTX 4070',
        category: 'GPU',
        price: 549,
        brand: 'NVIDIA',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        wattage: 200,
        specs: {
            vram: '12GB',
            length: 244
        }
    },
    {
        id: 'gpu-5',
        name: 'GeForce RTX 4090',
        category: 'GPU',
        price: 1599,
        brand: 'NVIDIA',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        wattage: 450,
        specs: {
            vram: '24GB',
            length: 304
        }
    }
];
const motherboardList = [
    {
        id: 'mb-1',
        name: 'MSI PRO B660M-A',
        category: 'Motherboard',
        price: 129,
        brand: 'MSI',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        wattage: 40,
        specs: {
            socket: 'LGA1700',
            format: 'mATX',
            memoryType: 'DDR4'
        }
    },
    {
        id: 'mb-2',
        name: 'ASUS ROG Strix B550-F',
        category: 'Motherboard',
        price: 179,
        brand: 'ASUS',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        wattage: 50,
        specs: {
            socket: 'AM4',
            format: 'ATX',
            memoryType: 'DDR4'
        }
    },
    {
        id: 'mb-3',
        name: 'Gigabyte Z790 AORUS ELITE',
        category: 'Motherboard',
        price: 249,
        brand: 'Gigabyte',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        wattage: 60,
        specs: {
            socket: 'LGA1700',
            format: 'ATX',
            memoryType: 'DDR5'
        }
    },
    {
        id: 'mb-4',
        name: 'MSI MAG B650 TOMAHAWK',
        category: 'Motherboard',
        price: 219,
        brand: 'MSI',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        wattage: 55,
        specs: {
            socket: 'AM5',
            format: 'ATX',
            memoryType: 'DDR5'
        }
    }
];
const ramList = [
    {
        id: 'ram-1',
        name: 'Corsair Vengeance LPX 16GB',
        category: 'RAM',
        price: 49,
        brand: 'Corsair',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        wattage: 10,
        specs: {
            memoryType: 'DDR4',
            speed: '3200MHz',
            capacity: '16GB'
        }
    },
    {
        id: 'ram-2',
        name: 'G.Skill Ripjaws V 32GB',
        category: 'RAM',
        price: 79,
        brand: 'G.Skill',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        wattage: 12,
        specs: {
            memoryType: 'DDR4',
            speed: '3600MHz',
            capacity: '32GB'
        }
    },
    {
        id: 'ram-3',
        name: 'Corsair Vengeance 32GB',
        category: 'RAM',
        price: 119,
        brand: 'Corsair',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        wattage: 15,
        specs: {
            memoryType: 'DDR5',
            speed: '6000MHz',
            capacity: '32GB'
        }
    },
    {
        id: 'ram-4',
        name: 'G.Skill Trident Z5 RGB 64GB',
        category: 'RAM',
        price: 229,
        brand: 'G.Skill',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        wattage: 18,
        specs: {
            memoryType: 'DDR5',
            speed: '6400MHz',
            capacity: '64GB'
        }
    }
];
const storageList = [
    {
        id: 'ssd-1',
        name: 'Kingston NV2 1TB M.2',
        category: 'Storage',
        price: 57,
        brand: 'Kingston',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        wattage: 5,
        specs: {
            type: 'NVMe',
            capacity: '1TB'
        }
    },
    {
        id: 'ssd-2',
        name: 'Samsung 980 Pro 1TB M.2',
        category: 'Storage',
        price: 89,
        brand: 'Samsung',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        wattage: 7,
        specs: {
            type: 'NVMe',
            capacity: '1TB'
        }
    },
    {
        id: 'ssd-3',
        name: 'WD Black SN850X 2TB M.2',
        category: 'Storage',
        price: 149,
        brand: 'WD',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        wattage: 8,
        specs: {
            type: 'NVMe',
            capacity: '2TB'
        }
    }
];
const caseList = [
    {
        id: 'case-1',
        name: 'NZXT H5 Flow',
        category: 'Case',
        price: 94,
        brand: 'NZXT',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        wattage: 20,
        specs: {
            format: 'ATX',
            maxGpuLength: 365
        }
    },
    {
        id: 'case-2',
        name: 'Corsair 4000D Airflow',
        category: 'Case',
        price: 104,
        brand: 'Corsair',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        wattage: 25,
        specs: {
            format: 'ATX',
            maxGpuLength: 360
        }
    },
    {
        id: 'case-3',
        name: 'Lian Li O11 Dynamic Evo',
        category: 'Case',
        price: 159,
        brand: 'Lian Li',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        wattage: 30,
        specs: {
            format: 'ATX',
            maxGpuLength: 422
        }
    }
];
const psuList = [
    {
        id: 'psu-1',
        name: 'Corsair RM750e 750W',
        category: 'PSU',
        price: 99,
        brand: 'Corsair',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        wattage: 0,
        specs: {
            wattage: 750,
            rating: '80+ Gold'
        }
    },
    {
        id: 'psu-2',
        name: 'MSI MPG A850G 850W',
        category: 'PSU',
        price: 129,
        brand: 'MSI',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        wattage: 0,
        specs: {
            wattage: 850,
            rating: '80+ Gold'
        }
    },
    {
        id: 'psu-3',
        name: 'Seasonic Vertex GX-1000',
        category: 'PSU',
        price: 199,
        brand: 'Seasonic',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop',
        wattage: 0,
        specs: {
            wattage: 1000,
            rating: '80+ Gold'
        }
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Toast({ message, type = 'success', isVisible, onClose }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Toast.useEffect": ()=>{
            if (isVisible) {
                const timer = setTimeout({
                    "Toast.useEffect.timer": ()=>{
                        onClose();
                    }
                }["Toast.useEffect.timer"], 3000);
                return ({
                    "Toast.useEffect": ()=>clearTimeout(timer)
                })["Toast.useEffect"];
            }
        }
    }["Toast.useEffect"], [
        isVisible,
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-8 right-8 z-50 animate-fade-in-up",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl border backdrop-blur-md", type === 'success' && "bg-emerald-950/80 border-emerald-500/50 text-emerald-100", type === 'error' && "bg-red-950/80 border-red-500/50 text-red-100", type === 'info' && "bg-blue-950/80 border-blue-500/50 text-blue-100"),
                children: [
                    type === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckCircle2"], {
                        className: "w-5 h-5 text-emerald-400"
                    }, void 0, false, {
                        fileName: "[project]/components/Toast.tsx",
                        lineNumber: 36,
                        columnNumber: 36
                    }, this),
                    type === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XCircle"], {
                        className: "w-5 h-5 text-red-400"
                    }, void 0, false, {
                        fileName: "[project]/components/Toast.tsx",
                        lineNumber: 37,
                        columnNumber: 34
                    }, this),
                    type === 'info' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Info"], {
                        className: "w-5 h-5 text-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/components/Toast.tsx",
                        lineNumber: 38,
                        columnNumber: 33
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium text-sm",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/components/Toast.tsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Toast.tsx",
                lineNumber: 30,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Toast.tsx",
            lineNumber: 27,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
_s(Toast, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Toast;
var _c;
__turbopack_context__.k.register(_c, "Toast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/BuilderCategoryRow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BuilderCategoryRow",
    ()=>BuilderCategoryRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.tsx [app-client] (ecmascript)");
;
;
;
;
;
function BuilderCategoryRow({ category, part, isActive, onToggle, onSelect, onRemove, partsList }) {
    const Icon = category.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative rounded-2xl border transition-all duration-300 overflow-hidden ${isActive ? 'bg-white dark:bg-zinc-800 border-emerald-500 shadow-lg shadow-emerald-500/10' : 'bg-white/50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 flex items-center gap-6 cursor-pointer",
                onClick: onToggle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${part ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-zinc-100 dark:bg-zinc-700 text-zinc-400'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "w-8 h-8"
                        }, void 0, false, {
                            fileName: "[project]/components/BuilderCategoryRow.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/BuilderCategoryRow.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-grow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium text-zinc-500 uppercase tracking-wider mb-1",
                                children: category.label
                            }, void 0, false, {
                                fileName: "[project]/components/BuilderCategoryRow.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            part ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-bold text-zinc-900 dark:text-white text-xl",
                                children: part.name
                            }, void 0, false, {
                                fileName: "[project]/components/BuilderCategoryRow.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-zinc-400 italic text-lg",
                                children: [
                                    "Select ",
                                    category.label,
                                    "..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BuilderCategoryRow.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BuilderCategoryRow.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    part ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-bold text-zinc-900 dark:text-white text-xl mr-2",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(part.price)
                            }, void 0, false, {
                                fileName: "[project]/components/BuilderCategoryRow.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            part.amazonLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: part.amazonLink,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "p-3 hover:bg-emerald-500/10 text-zinc-400 hover:text-emerald-500 rounded-xl transition-colors",
                                onClick: (e)=>e.stopPropagation(),
                                title: "View on Amazon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShoppingCart"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/BuilderCategoryRow.tsx",
                                    lineNumber: 72,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/BuilderCategoryRow.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onRemove();
                                },
                                className: "p-3 hover:bg-red-500/10 text-zinc-400 hover:text-red-500 rounded-xl transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/BuilderCategoryRow.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/BuilderCategoryRow.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BuilderCategoryRow.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        size: "lg",
                        variant: "secondary",
                        onClick: (e)=>{
                            e.stopPropagation();
                            onToggle();
                        },
                        className: "rounded-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plus"], {
                                className: "w-5 h-5 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/components/BuilderCategoryRow.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            " Add Part"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BuilderCategoryRow.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BuilderCategoryRow.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `overflow-hidden min-h-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 grid grid-cols-1 gap-4",
                            children: partsList.length > 0 ? partsList.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>onSelect(item),
                                    className: "flex items-center gap-6 p-4 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-emerald-500 cursor-pointer transition-all hover:shadow-md group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-24 h-24 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-900 flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: item.image,
                                                alt: item.name,
                                                fill: true,
                                                className: "object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/components/BuilderCategoryRow.tsx",
                                                lineNumber: 120,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/BuilderCategoryRow.tsx",
                                            lineNumber: 119,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-grow min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-lg text-zinc-900 dark:text-white group-hover:text-emerald-500 transition-colors mb-1",
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BuilderCategoryRow.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-zinc-500 flex flex-wrap gap-2",
                                                    children: Object.entries(item.specs).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex items-center bg-zinc-100 dark:bg-zinc-700 px-2.5 py-1 rounded-md text-xs font-medium",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "opacity-70 mr-1 capitalize",
                                                                    children: [
                                                                        key.replace(/([A-Z])/g, ' $1').trim(),
                                                                        ":"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/BuilderCategoryRow.tsx",
                                                                    lineNumber: 127,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-zinc-700 dark:text-zinc-300",
                                                                    children: String(value)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/BuilderCategoryRow.tsx",
                                                                    lineNumber: 128,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, key, true, {
                                                            fileName: "[project]/components/BuilderCategoryRow.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BuilderCategoryRow.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BuilderCategoryRow.tsx",
                                            lineNumber: 122,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-bold text-xl text-emerald-600 dark:text-emerald-400 whitespace-nowrap pl-4 border-l border-zinc-100 dark:border-zinc-700",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(item.price)
                                        }, void 0, false, {
                                            fileName: "[project]/components/BuilderCategoryRow.tsx",
                                            lineNumber: 133,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/components/BuilderCategoryRow.tsx",
                                    lineNumber: 114,
                                    columnNumber: 19
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-8 text-zinc-500 dark:text-zinc-400",
                                children: "No parts available in this category."
                            }, void 0, false, {
                                fileName: "[project]/components/BuilderCategoryRow.tsx",
                                lineNumber: 139,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/BuilderCategoryRow.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/BuilderCategoryRow.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/BuilderCategoryRow.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/BuilderCategoryRow.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BuilderCategoryRow.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = BuilderCategoryRow;
var _c;
__turbopack_context__.k.register(_c, "BuilderCategoryRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/build/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BuilderPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$parts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/parts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuilderCategoryRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BuilderCategoryRow.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const categories = [
    {
        id: 'CPU',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cpu"],
        label: 'Processor'
    },
    {
        id: 'GPU',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gamepad2"],
        label: 'Graphics Card'
    },
    {
        id: 'Motherboard',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"],
        label: 'Motherboard'
    },
    {
        id: 'RAM',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HardDrive"],
        label: 'Memory'
    },
    {
        id: 'Storage',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HardDrive"],
        label: 'Storage'
    },
    {
        id: 'Case',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"],
        label: 'Case'
    },
    {
        id: 'PSU',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Zap"],
        label: 'Power Supply'
    }
];
function BuilderContent() {
    _s();
    const [build, setBuild] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        CPU: null,
        GPU: null,
        Motherboard: null,
        RAM: null,
        Storage: null,
        Case: null,
        PSU: null
    });
    // activeCategory is now either the Category ID (open) or null (closed)
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('CPU');
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        message: '',
        type: 'success',
        isVisible: false
    });
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const loadId = searchParams.get('loadId');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuilderContent.useEffect": ()=>{
            if (loadId) {
                try {
                    const savedBuilds = JSON.parse(localStorage.getItem('savedBuilds') || '[]');
                    const buildToLoad = savedBuilds.find({
                        "BuilderContent.useEffect.buildToLoad": (b)=>b.id === loadId
                    }["BuilderContent.useEffect.buildToLoad"]);
                    if (buildToLoad) {
                        setBuild(buildToLoad.parts);
                        setToast({
                            message: 'Build loaded successfully!',
                            type: 'success',
                            isVisible: true
                        });
                    }
                } catch (error) {
                    console.error('Failed to load build:', error);
                }
            }
        }
    }["BuilderContent.useEffect"], [
        loadId
    ]);
    const showToast = (message, type = 'success')=>{
        setToast({
            message,
            type,
            isVisible: true
        });
    };
    const hideToast = ()=>{
        setToast((prev)=>({
                ...prev,
                isVisible: false
            }));
    };
    const totalPrice = Object.values(build).reduce((acc, part)=>acc + (part?.price || 0), 0);
    const totalWattage = Object.values(build).reduce((acc, part)=>acc + (part?.wattage || 0), 0);
    const handleSelectPart = (category, part)=>{
        setBuild((prev)=>({
                ...prev,
                [category]: part
            }));
        // Auto-advance logic
        const currentIndex = categories.findIndex((c)=>c.id === category);
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
    const handleRemovePart = (category)=>{
        setBuild((prev)=>({
                ...prev,
                [category]: null
            }));
    };
    const handleToggleCategory = (category)=>{
        setActiveCategory((prev)=>prev === category ? null : category);
    };
    const handleSaveBuild = ()=>{
        const hasParts = Object.values(build).some((part)=>part !== null);
        if (!hasParts) {
            showToast('Please select at least one part to save a build.', 'error');
            return;
        }
        const { status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkCompatibility"])(build);
        const newBuild = {
            id: crypto.randomUUID(),
            name: `My Custom Build ${new Date().toLocaleDateString()}`,
            parts: build,
            totalPrice,
            totalWattage,
            compatibilityStatus: status,
            createdAt: new Date().toISOString()
        };
        try {
            const savedBuilds = JSON.parse(localStorage.getItem('savedBuilds') || '[]');
            localStorage.setItem('savedBuilds', JSON.stringify([
                ...savedBuilds,
                newBuild
            ]));
            showToast('Build saved successfully!', 'success');
        } catch (error) {
            console.error('Failed to save build:', error);
            showToast('Failed to save build. Please try again.', 'error');
        }
    };
    const handleCheckout = ()=>{
        const parts = Object.values(build).filter((p)=>p !== null);
        if (parts.length === 0) return;
        // Create a search query for the core components
        const query = parts.filter((p)=>[
                'CPU',
                'GPU',
                'Motherboard'
            ].includes(p.category)).map((p)=>p.name).join(' ');
        const url = `https://www.amazon.com/s?k=${encodeURIComponent(query || 'gaming pc parts')}`;
        window.open(url, '_blank');
    };
    const getPartsList = (category)=>{
        switch(category){
            case 'CPU':
                return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$parts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cpuList"];
            case 'GPU':
                return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$parts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gpuList"];
            case 'Motherboard':
                return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$parts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motherboardList"];
            case 'RAM':
                return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$parts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ramList"];
            case 'Storage':
                return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$parts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageList"];
            case 'Case':
                return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$parts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["caseList"];
            case 'PSU':
                return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$parts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["psuList"];
            default:
                return [];
        }
    };
    const { messages: compatibilityIssues } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkCompatibility"])(build);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-zinc-900 dark:text-white mb-2",
                        children: "PC Builder"
                    }, void 0, false, {
                        fileName: "[project]/src/app/build/page.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-zinc-600 dark:text-zinc-400",
                        children: "Select your components to build your dream machine."
                    }, void 0, false, {
                        fileName: "[project]/src/app/build/page.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/build/page.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 xl:grid-cols-12 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "xl:col-span-9 space-y-6",
                        children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuilderCategoryRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuilderCategoryRow"], {
                                category: category,
                                part: build[category.id],
                                isActive: activeCategory === category.id,
                                onToggle: ()=>handleToggleCategory(category.id),
                                onSelect: (part)=>handleSelectPart(category.id, part),
                                onRemove: ()=>handleRemovePart(category.id),
                                partsList: getPartsList(category.id)
                            }, category.id, false, {
                                fileName: "[project]/src/app/build/page.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/build/page.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "xl:col-span-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-24 space-y-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-zinc-800 rounded-3xl p-6 border border-zinc-200 dark:border-zinc-700 shadow-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShoppingCart"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/build/page.tsx",
                                                lineNumber: 196,
                                                columnNumber: 17
                                            }, this),
                                            " Build Summary"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/build/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center text-zinc-600 dark:text-zinc-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Core Components"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/build/page.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(totalPrice)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/build/page.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/build/page.tsx",
                                                lineNumber: 200,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center text-zinc-600 dark:text-zinc-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Estimated Wattage"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/build/page.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Zap"], {
                                                                className: "w-4 h-4 text-yellow-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/build/page.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 61
                                                            }, this),
                                                            " ~",
                                                            totalWattage > 0 ? totalWattage : 0,
                                                            "W"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/build/page.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/build/page.tsx",
                                                lineNumber: 204,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-px bg-zinc-200 dark:bg-zinc-700 my-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/build/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center text-2xl font-bold text-zinc-900 dark:text-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Total"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/build/page.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(totalPrice)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/build/page.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/build/page.tsx",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/build/page.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this),
                                    compatibilityIssues.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-red-600 dark:text-red-400 font-bold mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertCircle"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/build/page.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Compatibility Issues"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/build/page.tsx",
                                                lineNumber: 217,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc list-inside text-sm text-red-600 dark:text-red-400 space-y-1",
                                                children: compatibilityIssues.map((issue, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: issue
                                                    }, idx, false, {
                                                        fileName: "[project]/src/app/build/page.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/build/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/build/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckCircle2"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/build/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 19
                                            }, this),
                                            " All parts are compatible"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/build/page.tsx",
                                        lineNumber: 227,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                className: "w-full justify-center",
                                                disabled: compatibilityIssues.length > 0 || totalPrice === 0,
                                                onClick: handleCheckout,
                                                children: "Checkout on Amazon"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/build/page.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "secondary",
                                                className: "w-full justify-center",
                                                onClick: handleSaveBuild,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Save"], {
                                                        className: "w-4 h-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/build/page.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Save Build"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/build/page.tsx",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                className: "w-full justify-center text-zinc-500 hover:text-red-500",
                                                onClick: ()=>setBuild({
                                                        CPU: null,
                                                        GPU: null,
                                                        Motherboard: null,
                                                        RAM: null,
                                                        Storage: null,
                                                        Case: null,
                                                        PSU: null
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RotateCcw"], {
                                                        className: "w-4 h-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/build/page.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Reset Builder"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/build/page.tsx",
                                                lineNumber: 247,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/build/page.tsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/build/page.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/build/page.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/build/page.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/build/page.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                message: toast.message,
                type: toast.type,
                isVisible: toast.isVisible,
                onClose: hideToast
            }, void 0, false, {
                fileName: "[project]/src/app/build/page.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/build/page.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, this);
}
_s(BuilderContent, "LOCdShepEkeby2IwFNX17+wGr6Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = BuilderContent;
function BuilderPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center text-zinc-500",
            children: "Loading builder..."
        }, void 0, false, {
            fileName: "[project]/src/app/build/page.tsx",
            lineNumber: 274,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BuilderContent, {}, void 0, false, {
            fileName: "[project]/src/app/build/page.tsx",
            lineNumber: 275,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/build/page.tsx",
        lineNumber: 274,
        columnNumber: 5
    }, this);
}
_c1 = BuilderPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "BuilderContent");
__turbopack_context__.k.register(_c1, "BuilderPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_eb39d741._.js.map