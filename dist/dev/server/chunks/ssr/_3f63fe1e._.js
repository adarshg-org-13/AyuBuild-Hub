module.exports = [
"[project]/components/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
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
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 active:scale-95", variants[variant], sizes[size], className);
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: classes,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Button.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/data/parts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        image: '/i3 12f.jpg',
        amazonLink: 'https://www.amazon.com/i3-12100F-processor-featuring-support-required/dp/B09NPJX7PV/ref=sr_1_1?crid=3M75D529IX9S7&dib=eyJ2IjoiMSJ9.__QmOvsDhjlcXcJz_c3_bM3gWOLhT4uPYX-8Smj7N7hnP0hl6MjKpgYN2fMBW-4OORSFuvAi8dJdOwU1DSV05-fBtsbvShfJwXEfpt9tY--9zxL0ydPX35oHRmcpXrGZxcoDxaB0dHglbocsNCwusEe-lvFSn_CXrI1pO89nphaMrNnavmnEoZA0OGCjqWm96DCjLeK8gykQ9muYZE5uITCafHr3SZT9n8w9loi-X38.ImaUgKeXFnK5IQ-LZV3BrbubjDiYa2g3fxNSvRFqRCo&dib_tag=se&keywords=i3+12100f&qid=1773811234&sprefix=i3+12100%2Caps%2C349&sr=8-1',
        wattage: 58,
        specs: {
            socket: 'LGA1700',
            cores: 4,
            threads: 8
        }
    },
    {
        id: 'cpu-2',
        name: 'AMD Ryzen 5 9600X',
        category: 'CPU',
        price: 189,
        brand: 'AMD',
        image: '/r5 9600x.webp',
        amazonLink: 'https://www.amazon.com/AMD-RyzenTM-9600X-12-Thread-Processor/dp/B0D6NN6TM7/ref=sr_1_1?crid=1TWUHF9C8QHFH&dib=eyJ2IjoiMSJ9.jN4qYtzhnmknvFEu-YuKA28jyVPF-o1mSwRojMT7in8.eLbkdCovyzM2eBAxSqjN8tg6e6R3fvk3goeVhR9jt_Y&dib_tag=se&keywords=r%2B5%2B9600x&qid=1773811640&sprefix=r%2B5%2B9600%2Caps%2C317&sr=8-1&th=1',
        wattage: 65,
        specs: {
            socket: 'AM5',
            cores: 6,
            threads: 12
        }
    },
    {
        id: 'cpu-3',
        name: 'Intel Core i5-12600KF',
        category: 'CPU',
        price: 169,
        brand: 'Intel',
        image: '/i5 12kf.jpg',
        amazonLink: 'https://www.amazon.com/Intel-i5-12600KF-Desktop-Processor-Unlocked/dp/B09FXFJW2F/ref=sr_1_1?crid=1OMHPSHGABR2M&dib=eyJ2IjoiMSJ9.uA11ToAm1JjhRXv_iLVnV9ZKLHZWPeYKj81UX5TIn2bLgHgUipWXd5xGkF3T0YHKwX7FAKF2H5nHbrXNroVJo00oQVksK-IpHrhTtakXELfMufYns9ga7_ANVSU1Oy2JDexxIMreot3N556Eubi2rnwoOK2CgvOeAoPZww3eRGPWKadoHt8fOBIFBD2om2VbxIcWUdffJliDdH7XkSN7lgZynbsTZIREAJ79vJA2gOQ.RUgr6WSN_d6i1UlCTck8xNBFrL8AsJsIP-HLs0Kgt-I&dib_tag=se&keywords=i5%2B12600kf&qid=1773811755&sprefix=i5%2B12600k%2Caps%2C313&sr=8-1&th=1',
        wattage: 125,
        specs: {
            socket: 'LGA1700',
            cores: 10,
            threads: 16
        }
    },
    {
        id: 'cpu-4',
        name: 'AMD Ryzen 7 7800X3D',
        category: 'CPU',
        price: 384,
        brand: 'AMD',
        image: '/R7 7800X3D.avif',
        amazonLink: 'https://www.amazon.com/AMD-Ryzen-7800X3D-16-Thread-Processor/dp/B0BTZB7F88/ref=sr_1_1?crid=34CPIYGP283LA&dib=eyJ2IjoiMSJ9.2Y6U30Ota4udzXAMcBoddbvOJdnr-cqlWL8hkA0dH2f4LGP3XDSkslN3MCEsz3cdH_0f_PrGo1vU699VKy113r6mhvLpo-PrReIYO3ekbANGNEorJnwPF9tO6BfKFfoNfIzPodK0dh1s9bUM7t1ckiBX3OaphgUFQdGOA3lgHP6ZQLtNPbfRlh9zQVUUtJTSyA5jdD36kn7h2QtDVyKLNbXlipaQK3ix1fp1xzL6yhA.yiM38Sbwlk40P8Ijpr_4S9Ar1z4-ARXTytiiJRb5XZ8&dib_tag=se&keywords=ryzen+7+7800x3d&qid=1773811827&sprefix=ryzen+7+7800x3%2Caps%2C319&sr=8-1',
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
        price: 468,
        brand: 'Intel',
        image: '/i9 14K.jpg',
        amazonLink: 'https://www.amazon.com/i9-14900K-Desktop-Processor-Integrated-Graphics/dp/B0CGJDKLB8/ref=sr_1_1?crid=3FWYVN425NXGP&dib=eyJ2IjoiMSJ9.OQfGGdOmWi7_ZwojYpOcOFWq9c1hmV-89cajr2Us8enDf2-1F22VYu3T2O2beLBX4Dwy-JOJ8eTUIMGyAD9P52gORjd328jdby5E61Otop2ta3whQ91V8yjO6rj5H8QAvxUes9Q-Vg2bpn5gJPG2KAOoZ9kxfF4MltEyHWUt2Kn_pOxexz79wU1JPK468DBNWWX3QtmeRCHyVl-G6Ojjf5TT28wUfuHibrT9hAL1sIY.l_UOWdUQBPx-jspbUM2h14dUkpxsgCLtgm4qD7oYkEo&dib_tag=se&keywords=i9+14900k&qid=1773811872&sprefix=i9+14900%2Caps%2C314&sr=8-1',
        wattage: 253,
        specs: {
            socket: 'LGA1700',
            cores: 24,
            threads: 32
        }
    },
    {
        id: 'cpu-6',
        name: 'Intel Core i5-12400f',
        category: 'CPU',
        price: 120,
        brand: 'Intel',
        image: '/i5 12f.jpg',
        amazonLink: 'https://www.amazon.com/INTEL-i5-12400F-2-5GHz-6xxChipset-BX8071512400F/dp/B09NPJRDGD/ref=sr_1_1?crid=R7MJUP3ZTRO8&dib=eyJ2IjoiMSJ9.wmuX9ELJgjhBUQ9iJL_Ql5rhAl14dgmKIwIhOHzyliYb2UZA3HrAPqod1w4xPDX8iBlGrZhcQszsmNK7LJBk8GtUNkY433ZziU6u63ACZTq4RZ_6TPa2v2OOmsWSe60VAnu4tgAuhpoaY8ZCsdMRznZmVADYlTc-R8eq7LttSH2ZDS5HbqFzWSyxB7Z_UZnOw5qWs3ts5m5ahJlTfqkQfHay85HBZMFkd7GrOypk6kg.MeuZ0jixBI1_MhC97diOL8SbK30jhdX0VVeCeFpfvLg&dib_tag=se&keywords=i5%2B12400f&qid=1773811993&sprefix=i5%2B14400f%2Caps%2C352&sr=8-1&th=1',
        wattage: 65,
        specs: {
            socket: 'LGA1700',
            cores: 6,
            threads: 12
        }
    },
    {
        id: 'cpu-7',
        name: 'Intel Core Ultra 5 225F',
        category: 'CPU',
        price: 144,
        brand: 'Intel',
        image: '/u5 225f.jpg',
        amazonLink: 'https://www.amazon.com/Intel%C2%AE-CoreTM-Desktop-Processor-P-cores/dp/B0DTRMDXJ5/ref=sr_1_1?crid=ONA4EF0PV08H&dib=eyJ2IjoiMSJ9.GvQCVlnZo3pvn8Ibbk5ExcNoFTqahXJ3sA4MMfb71jp3pI0_oNXmPHi7-_PPv-UJL5oLjQt4nCZRpW7DpKSkFaVHAjDl6McQvIz5nohc-tRsGcXzxw3z9HuJnXsM4dzc9rr-ydNNzhqbJ1-zZES-Ybr4JQ7IJCASW6lNAeLbzOW-kev3iJoneFSmsA4_5NVz.68766GeyxQPL6wUKuh9viFUack69XIzEGviBHXZrAcA&dib_tag=se&keywords=core+ultra+5+225f&qid=1773812064&sprefix=core+ultra+5+225%2Caps%2C313&sr=8-1',
        wattage: 65,
        specs: {
            socket: 'LGA1851',
            cores: 10,
            threads: 10
        }
    },
    {
        id: 'cpu-8',
        name: 'AMD Ryzen 5 7500F',
        category: 'CPU',
        price: 150,
        brand: 'AMD',
        image: '/r5 7500f.jpg',
        amazonLink: '',
        wattage: 65,
        specs: {
            socket: 'AM5',
            cores: 6,
            threads: 12
        }
    },
    {
        id: 'cpu-9',
        name: 'AMD Ryzen 5 5500',
        category: 'CPU',
        price: 90,
        brand: 'AMD',
        image: '/r5 5500.jpg',
        amazonLink: 'https://www.amazon.com/AMD-5500-12-Thread-Unlocked-Processor/dp/B09VCJ171S/ref=sr_1_3?crid=2F2P8HUNI21X9&dib=eyJ2IjoiMSJ9.wmuX9ELJgjhBUQ9iJL_Ql5rhAl14dgmKIwIhOHzyliYb2UZA3HrAPqod1w4xPDX8iBlGrZhcQszsmNK7LJBk8GtUNkY433ZziU6u63ACZTq4RZ_6TPa2v2OOmsWSe60VAnu4tgAuhpoaY8ZCsdMRznZmVADYlTc-R8eq7LttSH2ZDS5HbqFzWSyxB7Z_UZnOw5qWs3ts5m5ahJlTfqkQfHay85HBZMFkd7GrOypk6kg.MeuZ0jixBI1_MhC97diOL8SbK30jhdX0VVeCeFpfvLg&dib_tag=se&keywords=i5+12400f&qid=1773811344&sprefix=i5+12400%2Caps%2C330&sr=8-3',
        wattage: 65,
        specs: {
            socket: 'AM4',
            cores: 6,
            threads: 12
        }
    },
    {
        id: 'cpu-10',
        name: 'Intel Core Ultra 5 225',
        category: 'CPU',
        price: 150,
        brand: 'Intel',
        image: '/core ultra 5 225.webp',
        amazonLink: '',
        wattage: 65,
        specs: {
            socket: 'LGA1851',
            cores: 10,
            threads: 10
        }
    },
    {
        id: 'cpu-11',
        name: 'AMD Ryzen 7 9850X3D',
        category: 'CPU',
        price: 500,
        brand: 'AMD',
        image: '/r7 9850X3D.webp',
        amazonLink: '',
        wattage: 120,
        specs: {
            socket: 'AM5',
            cores: 8,
            threads: 16
        }
    }
];
const gpuList = [
    {
        id: 'gpu-1',
        name: 'MSI Gaming GeForce RTX 3050 8GB',
        category: 'GPU',
        price: 249,
        brand: 'NVIDIA',
        image: '/rtx 3050 8gb.jpg',
        amazonLink: 'https://www.amazon.com/MSI-RTX-3050-OC-Ventus/dp/B0CBL4YJT5/ref=sr_1_1?crid=J0CBJDL00SJ6&dib=eyJ2IjoiMSJ9.X38OAkPUjolZ6j7TXtdyMf0HPkf7jue99xLsJHR8zftiMo0tWXojAz1aHGdwEohK23yTqj5HFnb3CjfqyQV9QVVrYJFu0Njaae-ONpZBsCTDgWGMdlc0PTQHTknMEGe8rXBzJajF3cvy9r0E0PgtVZ0g_cdfB-8pOXlgenyniUmV0kv7APUwQ42KPrM2pTtG-bVwfsgjzc-c-UgLCjhSeROrY0XzVSorHeq1nIuswl0.gp8_SH8n2gCc4KHUTZUA_h39Wx8XbzIaUtCfoAJxulM&dib_tag=se&keywords=rtx3050+8gb&qid=1773816479&sprefix=rtx3050+8g%2Caps%2C325&sr=8-1',
        wattage: 130,
        specs: {
            vram: '8GB',
            length: 190
        }
    },
    {
        id: 'gpu-2',
        name: 'GIGABYTE GeForce RTX 5060',
        category: 'GPU',
        price: 349,
        brand: 'NVIDIA',
        image: '/rtx5060.jpg',
        amazonLink: 'https://www.amazon.com/GIGABYTE-GeForce-WINDFORCE-Graphics-GV-N5060WF2OC-8GD/dp/B0F8LDHQ7Y/ref=sr_1_1?crid=2QXBBFEQ69ZX7&dib=eyJ2IjoiMSJ9.SzVtIqLqKRbKt2a-BCxezQsCsU-ZaFLFWXYyb_M7PyvOX1FeOpgQbD6SOwlpJTTLmgOhEXhLMTw-MvZoxZOY_Y6HSO0bfeaT7hXRmz2zPFWafkf6zeMNt-6ZaqFtS0INZmDHjFAdVQzhNiS9YjKLklGdvNG0UQGOjEMf1C9aHJ89npHJ2oCNEtblGPVQZLqHqjSyRoO74Hymwxg6v9w64yCuejaK5aPzXeAoN8AcDMw.3UACvzh7Khg83Q0NrBk4cHvrjm1gU3ThktqM06DHGH8&dib_tag=se&keywords=rtx%2B5060&qid=1773815829&sprefix=rtx%2B506%2Caps%2C382&sr=8-1&th=1',
        wattage: 150,
        specs: {
            vram: '8GB',
            length: 242
        }
    },
    {
        id: 'gpu-3',
        name: 'Sapphire RX 9060XT',
        category: 'GPU',
        price: 449,
        brand: 'AMD',
        image: '/9060Xt.jpg',
        amazonLink: 'https://www.amazon.com/Sapphire-11350-03-20G-RadeonTM-Gaming-Graphics/dp/B0F9LN5VZ6/ref=sr_1_4?crid=MWIMVKB2CGER&dib=eyJ2IjoiMSJ9.c81y9QHPLiXBnt1qYef-B9b7sJcHcVQYMmj8DL4i4mO01VynH_I7T_CxLuxDVOEqhX8-j1EjlvHsmdXNa_ULUEqbYSYZUpcFOyL_BEXmHLBqyJ3P3lyeAORV5KkcmqcMzAnGRUtNFRmefkZTdfchr1eNJ_8IN4cFvohT8du-Z1MgwmyKSiIU3FeA1kPbVNygFufTLTCw7emd6IGat35C5ff5zp2-4pAO-Ux-CPNzPHQ.Zu0tQ6r63pS3dbDob3H8GYfTQB1RiUe6EvTdYhZLb0I&dib_tag=se&keywords=rx+7700xt&qid=1773816049&sprefix=rx+7700x%2Caps%2C316&sr=8-4',
        wattage: 200,
        specs: {
            vram: '16GB',
            length: 267
        }
    },
    {
        id: 'gpu-4',
        name: 'GIGABYTE GeForce RTX 5080',
        category: 'GPU',
        price: 1500,
        brand: 'NVIDIA',
        image: '/rtx5080.jpg',
        amazonLink: 'https://www.amazon.com/GIGABYTE-Graphics-WINDFORCE-GV-N5080GAMING-OC-16GD/dp/B0DS2R6948/ref=sr_1_3?crid=PCTQYU3DJGLU&dib=eyJ2IjoiMSJ9.bgbVzXN4GKnBqkmywdez6jd0nC5bwmHzM_e575onieMQYNYJGkpbcV6diy1PZ65gsmViiWmE_pe8BSaPRZBRd3Eupr2F3zjgN-iYWU2CQ7b-2H5F2o-vHCvdN6_tiWbo0q8R3acIfx4s8qWU4LeSNpuFfB-X_L4XSfkeoxWDZpdElexZDnbe423wQfmdyatEjbIWln7wY1W7ryJdSjakp-1X101Nx9ta-hbK9MQoI-0.9BGOCFwN_H7Bvpfg_lmhsP5-thD9qZQWcZ4VoFHQnlQ&dib_tag=se&keywords=rtx%2B4090&qid=1773816198&sprefix=rtx%2B409%2Caps%2C315&sr=8-3&th=1',
        wattage: 400,
        specs: {
            vram: '16GB',
            length: 280
        }
    },
    {
        id: 'gpu-5',
        name: 'XFX Speedster SWFT210 Radeon RX 7600',
        category: 'GPU',
        price: 321,
        brand: 'AMD',
        image: '/rx7600.jpg',
        amazonLink: 'https://www.amazon.com/XFX-Speedster-SWFT210-Graphics-RX-76PSWFTFA/dp/B0DR25XD68/ref=sr_1_1?crid=3T12QSWPHPRYE&dib=eyJ2IjoiMSJ9.8876buw3BknEU9Ul8HlbmxZaor1cWqdcXUP0-cmmAt594O-EvkJOmXWiBGSVKAAWOkWU0-JUHjvdnJHga1mLxNyjyb8oUbnjBM27cz8VD0NNaxWo5ILmIB3vi0MpdK7wgbPD0ZS-vOoKLo4yEB0qG88IWeSVdCRVogFvBW_tXYAQ4N2izjEC4TDeBPqL3QbYp6os4m5kIfehrZ8730AvRzbEZXhAu_SDWoHaYYzHKZI.RyTYDHB-P7kD0N9BJ4F3C7Ao9KaUq8w_75H-muN0ujg&dib_tag=se&keywords=rx%2B7600&qid=1773816337&sprefix=rx%2B760%2Caps%2C331&sr=8-1&th=1',
        wattage: 165,
        specs: {
            vram: '8GB',
            length: 242
        }
    }
];
const motherboardList = [
    {
        id: 'mb-1',
        name: 'Gigabyte B550MK (Without Wifi)',
        category: 'Motherboard',
        price: 69,
        brand: 'Gigabyte',
        image: '/b550m.jpg',
        amazonLink: 'https://www.amazon.com/GIGABYTE-B550M-Micro-ATX-Realtek-Motherboard/dp/B0BTTZFQTP/ref=sr_1_3?crid=OOWELM5RQCJ6&dib=eyJ2IjoiMSJ9.FQ-iG91W3Cbt9k1P1MP1XViGV61yBMyj-ON4nq688fj1LP8T_lmYHXrJOL5M-lRuMfAQl24d15tTqgtN5yvt0nZUHqS-ofZvW4xWV3KaCp2Dv0xpEuzclI-Tlrg0ZOPu4Odge8zOv3orf1zo2AhshLOJv3gr4FuVfzct8WEGbQrYQGP6KZvafQ8oZaJRblxRs8TmxbT-XbpOXyDUDglEo2yRlF3NghBDT5zZ0A7VcBU.KRu22r_icOxMPghhNKIT2e-zj11np1d-YEFuT_lA3vw&dib_tag=se&keywords=b450m%2Bmotherboard&qid=1773812770&sprefix=b450m%2Bmotherboard%2B%2Caps%2C313&sr=8-3&th=1',
        wattage: 40,
        specs: {
            socket: 'AM4',
            format: 'mATX',
            memoryType: 'DDR4'
        }
    },
    {
        id: 'mb-2',
        name: 'ASUS PRIME B760MK DDR4',
        category: 'Motherboard',
        price: 89,
        brand: 'ASUS',
        image: '/b760m ddr4.jpg',
        amazonLink: 'https://www.amazon.com/ASUS-B760M-K-D4-Motherboard-Ethernet/dp/B0BR8SGYXP/ref=sr_1_1?crid=W3PFKMNCAE1B&dib=eyJ2IjoiMSJ9.J7k9jGoYX4EooOiPdhE5jTZHA3I6bWauDQHOQPcUu5J2CyrRPUTV09FuvhU9p0KPgi0ln8q5ZH5Gftqum2AAGCeCnTGg7-YCl-lcodcpCfkz4KOMa0A_4nvmuyHopsgleuUbqAJwmRvuX9cUc-BI0sC8wkYD15N07uG49P22qQG6za8gxYFvxy709LUg_6fhpAE-x230a0_U_nhI1UwQEjo_NTvoKz02zVuvLx5B6bI.0M7gNp9_UiBUR3NbZ9-bKO0uRi4BZoN-rxJujU35otM&dib_tag=se&keywords=b760%2Bmotherboard%2Bddr4&qid=1773814347&sprefix=b760%2Bmotherboard%2Bddr%2Caps%2C304&sr=8-1&th=1',
        wattage: 50,
        specs: {
            socket: 'LGA1700',
            format: 'mATX',
            memoryType: 'DDR4'
        }
    },
    {
        id: 'mb-3',
        name: 'MSI B760 GAMING PLUS WIFI',
        category: 'Motherboard',
        price: 139,
        brand: 'Gigabyte',
        image: '/b760 ddr5 wifi.jpg',
        amazonLink: 'https://www.amazon.com/MSI-B760-Motherboard-Supports-Processors/dp/B0C15THTK7/ref=sr_1_2?crid=3GPW7EY5MCPBW&dib=eyJ2IjoiMSJ9.hJv68jN1p3z_wjqQzxF-IJEgh1BeJfAorvKuHBcF7VKFRsPVZfBZQbGmHiJc-YzJ5RlwwNZuWj75OElaxf2vh5SfIFxy6gNloaNsVsmQxr_M4JISgasbQUqqSgr9TlpdwvRVInPMbHI9qjMj2d4pdLMRqlrDSAAmBpdc_-m3UlgpqTtgfkr9uumuDsUIdmtyORWwFvsRQDs3huKRBdVtnDWSTzMSL9LgBxGsQ73o92Y.EMF6ISei_sGKcBoba8vIoAaCpmv3otN8BeydHclxyq4&dib_tag=se&keywords=b760%2Bmotherboard%2Bddr5&qid=1773814447&sprefix=b760%2Bmotherboard%2Bddr%2Caps%2C325&sr=8-2&th=1',
        wattage: 60,
        specs: {
            socket: 'LGA1700',
            format: 'ATX',
            memoryType: 'DDR5'
        }
    },
    {
        id: 'mb-4',
        name: 'MSI B550 PRO-VDH WIFI',
        category: 'Motherboard',
        price: 99,
        brand: 'MSI',
        image: '/b550 pro wifi.jpg',
        amazonLink: 'https://www.amazon.com/MSI-B550M-PRO-VDH-ProSeries-Motherboard/dp/B089D1YG11/ref=sr_1_10?crid=OOWELM5RQCJ6&dib=eyJ2IjoiMSJ9.FQ-iG91W3Cbt9k1P1MP1XViGV61yBMyj-ON4nq688fj1LP8T_lmYHXrJOL5M-lRuMfAQl24d15tTqgtN5yvt0nZUHqS-ofZvW4xWV3KaCp2Dv0xpEuzclI-Tlrg0ZOPu4Odge8zOv3orf1zo2AhshLOJv3gr4FuVfzct8WEGbQrYQGP6KZvafQ8oZaJRblxRs8TmxbT-XbpOXyDUDglEo2yRlF3NghBDT5zZ0A7VcBU.KRu22r_icOxMPghhNKIT2e-zj11np1d-YEFuT_lA3vw&dib_tag=se&keywords=b450m%2Bmotherboard&qid=1773813102&sprefix=b450m%2Bmotherboard%2B%2Caps%2C313&sr=8-10&th=1',
        wattage: 50,
        specs: {
            socket: 'AM4',
            format: 'mATX',
            memoryType: 'DDR4'
        }
    },
    {
        id: 'mb-5',
        name: 'ASUS TUF Gaming Z790-Plus WiFi',
        category: 'Motherboard',
        price: 199,
        brand: 'ASUS',
        image: '/z790.jpg',
        amazonLink: 'https://www.amazon.com/ASUS-TUF-Intel%C2%AE12th-Motherboard-Thunderbolt/dp/B0BQD58D96/ref=sr_1_1?crid=2WGL86FH1Y4GT&dib=eyJ2IjoiMSJ9.kFexHcGF2xCWcl4lBLZMjCAuKk5bSe5ugW_DBlfVZbuESsgm7LnuSURuW0v4CERAiPeLTWo0YKoXGth5Dgj_d-NQqZxPB46zola2jjqgVZ_sIFqQCQ7-sekd2YDf65G005G3Arv-Rqk2P_uKaRO3zALdZAQLGNR_WrwXx9196QrnqEXQ1YkM9_kZJK1i9mutRLmAZnQhI9Q7WK2fLQqDZG7gS5lOvw67w1oX-1j0bPw.P7M1qVD6H84EspQgPlCgRajQin4UW4nn0U4K_wBVkw0&dib_tag=se&keywords=z790%2Bmotherboard%2Bddr5&qid=1773814640&sprefix=z790%2Caps%2C351&sr=8-1&th=1',
        wattage: 70,
        specs: {
            socket: 'LGA1700',
            format: 'ATX',
            memoryType: 'DDR5'
        }
    },
    {
        id: 'mb-6',
        name: 'ASUS TUF Gaming B650-PLUS WiFi',
        category: 'Motherboard',
        price: 144,
        brand: 'ASUS',
        image: '/b650.jpg',
        amazonLink: 'https://www.amazon.com/ASUS-TUF-B650-PLUS-Motherboard-Ethernet/dp/B0BHN7GGBQ/ref=sr_1_1?crid=2IHND5EX5PUS1&dib=eyJ2IjoiMSJ9.fBFmztgzsKsNszw2EEmiRrhmqm5t0pl1iz0bhRB-fyb_V25N9hQmYBhjYVvFZQwcvYN686id7mlDxhEqsirmj7xbudELcBRIhNm8_jfIeIwiWKr9iqvW8nmfDR76uFm9v1ZMgL6ET5H7VUakAtllv0SyMq7QrVd247ngBADwNKx2YnRIGDy3GC_FwWRuBpbIsGctfn8yH9ghZQOQ5ACTo8FjYa_eIH4ZmhzXFo_393g.NIre2csAJf7GHpO3VKMjn9rxZS4fp0c7nzdshzC9xlQ&dib_tag=se&keywords=b650%2Bmotherboard&qid=1773815233&sprefix=b650%2Caps%2C394&sr=8-1&th=1',
        wattage: 70,
        specs: {
            socket: 'AM5',
            format: 'ATX',
            memoryType: 'DDR5'
        }
    },
    {
        id: 'mb-7',
        name: 'ASUS TUF GAMING B850-E WIFI',
        category: 'Motherboard',
        price: 150,
        brand: 'ASUS',
        image: '/b850.jpg',
        amazonLink: 'https://www.amazon.com/ASUS-TUF-GAMING-WIFI-motherboard/dp/B0F6HB62B4/ref=sr_1_3?crid=2JZ6V3MU6XYRG&dib=eyJ2IjoiMSJ9.bEVaOyPiRQOT-b-taD6nyBjZclJE3kso2KDDv9URI-KypvMF9wTltsx6s_0SxTE5O1KtJNwCQcLH0rGdiPDZjh5zOoCD897xlSDOzR76tOVzqk91v8-eEC9qqQHRjxerB7vvIdOERtARCiGxAqQ0KRCMjrBT7DqgLSpBkxWawAm1lUowmQ5VVFwwcDVWajueJMr--x0V-X2gdlx3YIzksX0wh3JTLhzlwLi7KyRW0KY.jjQGEacXkQM8R_7J123NeY3lUc1F6_4gkxj1dew9KxQ&dib_tag=se&keywords=b850%2Bmotherboard&qid=1773815379&sprefix=b850%2Caps%2C322&sr=8-3&th=1',
        wattage: 70,
        specs: {
            socket: 'AM5',
            format: 'ATX',
            memoryType: 'DDR5'
        }
    },
    {
        id: 'mb-8',
        name: 'GIGABYTE B860M Eagle Plus WIFI6E',
        category: 'Motherboard',
        price: 150,
        brand: 'Gigabyte',
        image: '/b860.jpg',
        amazonLink: 'https://www.amazon.com/GIGABYTE-B860M-WIFI6E-Motherboard-EZ-Latch/dp/B0DQLK9S2V/ref=sr_1_6?crid=JOVIZMPV6GC3&dib=eyJ2IjoiMSJ9.jEsVZ6PxUFSiv_XGAtV5KlqTEd6B8fQ_gdnI8vbfc0IGFUjO24IV8gZSSU0OUjRcHg4I3pjJA4skuW3H2zoq6lujR8uv-q7swI02KIl5bzSihCap7xvqwoyoQW1i-HQ6p8tO4zpp74zxZlCrNI6QtvTXzAnyPQRaocRiBxlWvE61Id-3YEU5QqxBF0GW1D7ttgJiFgNCFzczE2OwV_MYFdF2_18AUqdHFKdTt--XQBw.2zt82as8EvkddLIfNrHYVV-GEOMGcea1VX34NIv9ChU&dib_tag=se&keywords=lga+1851+motherboard&qid=1773815530&sprefix=lga+1851%2Caps%2C318&sr=8-6',
        wattage: 70,
        specs: {
            socket: 'LGA1851',
            format: 'ATX',
            memoryType: 'DDR5'
        }
    }
];
const ramList = [
    {
        id: 'ram-1',
        name: 'Crucial Pro DDR5 RAM 32GB Kit (2x16GB)',
        category: 'RAM',
        price: 369,
        brand: 'Crucial',
        image: '/micron 32gb ddr5.jpg',
        amazonLink: 'https://www.amazon.com/Crucial-6400MHz-Overclocking-Desktop-Compatible/dp/B0FQMLKVLS/ref=sr_1_1?crid=10FPDCZR9MO96&dib=eyJ2IjoiMSJ9.90w441BiB-J0H7bxP-yn63ovOXyK71htuQcC8jCGyzqI_3Rw_rg_Usd2xMaHUeDZ4KRuYZYyqylSDvkK9D99S2TzcazS4zo-48c8yFCWOT5b-PKXd-obXFiqV-rL5zy3T8dWvrUkNsPujB-g5kymRl__44kEQfU3OvDCZBPY_vRuzzxpSKL39YD3E6e2k14IEbSKX6aURBCOsMZK42uQhJkjEh79WSl7rVlZXl51g2k.K7vAAoHwJrQ-IgRDct-l9sRZnC_qBI6Fl1nkTU7Js6E&dib_tag=se&keywords=32gb%2Bddr5%2Bram%2Bkit&qid=1773816686&sprefix=32gb%2Bddr5%2Bram%2Bki%2Caps%2C356&sr=8-1&th=1',
        wattage: 12,
        specs: {
            memoryType: 'DDR5',
            speed: '6400MHz',
            capacity: '32GB'
        }
    },
    {
        id: 'ram-2',
        name: 'Crucial Pro DDR5 RAM 64GB Kit (2x32GB) 6000MHz',
        category: 'RAM',
        price: 735,
        brand: 'Crucial',
        image: '/micron 64gb ddr5.jpg',
        amazonLink: 'https://www.amazon.com/Crucial-6000MHz-Overclocking-Desktop-Compatible/dp/B0DSQTD4TN/ref=sr_1_4?crid=FZM1U84EDQDL&dib=eyJ2IjoiMSJ9.R_IO-BMWpYexuWRqUtUFmPyLt9cm6KkxtE56gJ8GFCXYAhPJbJCJx2aigntY9jYAkj2-JS6WzsR8coaSOlmWF7Q5fi8bkBlT1MOwfvXq-db9_iWzCXnbntVzpppe0Bw6XpblAI9i92qB4ERFnnWEY5cyNsVfdbb0KEcUV_nsrBA28uKjFbwYEQZsqAwwiJ1OAeKFdVCB3-TCWU6NYa5KT6Djkpf7F92g56X9E21AfRc.fz5F2233aTsrOagod0KqqsuPrmAy00o3qoArlZ6r1f0&dib_tag=se&keywords=64gb%2Bddr5%2Bram%2Bkit&qid=1773816831&sprefix=6gb%2Bddr5%2Bram%2Bkit%2Caps%2C298&sr=8-4&th=1',
        wattage: 12,
        specs: {
            memoryType: 'DDR5',
            speed: '6000MHz',
            capacity: '64GB'
        }
    },
    {
        id: 'ram-3',
        name: 'CORSAIR Vengeance RGB DDR5 RAM 16GB (2x8GB)',
        category: 'RAM',
        price: 249,
        brand: 'Corsair',
        image: '/corsair 16gbddr5.webp',
        amazonLink: 'https://www.amazon.com/CORSAIR-Vengeance-5200MHz-Compatible-Computer/dp/B0D9PRVBRZ/ref=sr_1_2?crid=2UKF4FXMJMNCC&dib=eyJ2IjoiMSJ9.WmNwdSSNWOIjYU--PLIhd4s4_Y3R_IrRKEIunHHTf_63OjRX7Ncd_QPMTRM1i74qMEcODP_IrFpzaVQvpiMOiI2h4XMOAEq6hYscl5BKSFfE3lXljuKxkAGv792AMgW2PjVuyWa-NJ5sLT0xlSzY29QqIwpO_Kj-MUHRY_4YMgJVTZUizh838XIUtDUPDpUjkzHZMQZ7ybVscFN4exoO-8LEQONBpJg9sxlXq-ldzXo.KSgYMjbzaWUnATgS6bwaLtmxAbXA-95hcXBsM6tzpqQ&dib_tag=se&keywords=16gb%2Bddr5%2Bram%2Bkit&qid=1773816938&sprefix=1gb%2Bddr5%2Bram%2Bkit%2Caps%2C307&sr=8-2&th=1',
        wattage: 15,
        specs: {
            memoryType: 'DDR5',
            speed: '5200MHz',
            capacity: '16GB'
        }
    },
    {
        id: 'ram-4',
        name: 'CORSAIR Vengeance LPX DDR4 RAM 32GB (2x16GB)',
        category: 'RAM',
        price: 219,
        brand: 'Corsair',
        image: '/32gb ddr4.jpg',
        amazonLink: 'https://www.amazon.com/Corsair-VENGEANCE-3200MHz-Compatible-Computer/dp/B07RW6Z692/ref=sr_1_3?crid=1U186BCN75TMZ&dib=eyJ2IjoiMSJ9.DZVVfPcrLpqjyGkgZ1NlB4Sgf8FhneYwMjIo6_BGxWNliNeCaW3-tVp2_FoWj4CNt_fHCgVUzFA2GX4HGYycE81SMAIileyEVZSTF25Kj7CvrekghRbX-_6hzwtMG50nc1KImTRq0d8jj2ZtZ724Wab1oiw7Nq16vcMNeALQQTgzsmMzdGHxIuVrznrbYcamWQ_HycBc-URn5QbtYOydcoFjeNxbxuDsPptdnDlW1FI.srhMes8jjjoRjYUBdOVwi6s-QI1ML7p6SW5JQ9w8xwE&dib_tag=se&keywords=16gb+ddr4+ram+kit&qid=1773817059&sprefix=16gb+ddr5+ram+kit%2Caps%2C407&sr=8-3&xpid=sH9qUaWkcep-L',
        wattage: 12,
        specs: {
            memoryType: 'DDR4',
            speed: '3200MHz',
            capacity: '32GB'
        }
    }
];
const storageList = [
    {
        id: 'ssd-1',
        name: 'Western Digital 500GB WD Blue SN5000 NVMe',
        category: 'Storage',
        price: 89,
        brand: 'WD',
        image: '/wd 500gb.jpg',
        amazonLink: 'https://www.amazon.com/Western-Digital-500GB-SN5000-Internal/dp/B0D7MKQKXZ/ref=sr_1_10?crid=1234YGLK76SX2&dib=eyJ2IjoiMSJ9.f3UGDpk5WUkjBhSrPezcMhNBmUKvZaf686BKToL49VLCRmPe8w4GWdv6bmzG8paGpe6SsLsjT0dI1FhmUFNlHcyuv0wxiEnpIjBvfozPjG866CytFoiHKDEkxOYfLnXwyKA3_CQn5pPC-qlqVONy7fcurnQLZ_XcMI1A4IjOEgj1ygNyXBKl1Zu48oA9x4Nqm3q5VxuLZasw44YtD_jjxCr64eEPMoR1f7pqy0ODvOM.uaju0SwIT1HNkLIcbHy1wbEkCkMV09swAa4WabfWAaE&dib_tag=se&keywords=500gb%2Bnvme%2Bgen4&qid=1773817214&sprefix=500gb%2Bnvme%2Bgen%2Caps%2C318&sr=8-10&th=1',
        wattage: 5,
        specs: {
            type: 'NVMe',
            capacity: '500GB'
        }
    },
    {
        id: 'ssd-2',
        name: 'Samsung 990 EVO Plus SSD 1TB',
        category: 'Storage',
        price: 164,
        brand: 'Samsung',
        image: '/smasung 990.jpg',
        amazonLink: 'https://www.amazon.com/SAMSUNG-Technology-Intelligent-Turbowrite-MZ-V9S1T0B/dp/B0DHLFWBQ1/ref=sr_1_3?crid=3BBTUXA1O72HJ&dib=eyJ2IjoiMSJ9.H39GvN73WU3e9olWq8mPvfMDDHaaIOVuEF4HBp4suoa8gZAs6Le7tK--NB_F-5mqZrLX2x2Bs7a3H3AukeKwccQYKMhALu_Po-Zn4Rc0gbK6maUWdCiLa612oWluPZI95wfp07-7GAznDq_Znl7p_eVs7zDHk9XVUTRi4mSkwjvkZDBbUnkAAmAsY6aKp1Ebw8yOkkXyuGsc0swm61IxAfDBu6KPmXp9MW6CeZ4UOCQ.GdNi78QupQzFVIrf99viSmZ3gIc9URuirG4shxN7e9U&dib_tag=se&keywords=1tb%2Bnvme%2Bgen4&qid=1773817681&sprefix=1t%2Bnvme%2Bgen4%2Caps%2C338&sr=8-3&th=1',
        wattage: 7,
        specs: {
            type: 'NVMe',
            capacity: '1TB'
        }
    },
    {
        id: 'ssd-3',
        name: 'Crucial P510 PCIe Gen5 NVMe 2TB SSD',
        category: 'Storage',
        price: 256.67,
        brand: 'Crucial',
        image: '/micron 2tb.jpg',
        amazonLink: 'https://www.amazon.com/Crucial-Internal-Compatible-Desktop-Software/dp/B0DZ5XQNLM/ref=sr_1_3?crid=1SX2DREY2X532&dib=eyJ2IjoiMSJ9.bff6xxmwNlfZmcPB_U9XyueBaJ-3RrBeYxoLBU4rFkUNEsTfS7qpnjh9eT4eKnGKkKVs_acWkIICT6B1icvDD7sCIErEZtCTw60C3giL4TJBJVI8tmWzRipgT_N253hnrgrp3rwnohJhNjQG6LkEVHGG-ce9aQoUnMxE3d5SzbkpxaK1svMn8nGB1wZm2C-MYxQlzQbNcX26DDbjMTF-RctcoTjy_-VwQrQPd30nkFo._k-zWssm3Kxp4-elUxHo_nbhFP4Vem6C9s3X8TMxZzs&dib_tag=se&keywords=2tb%2Bnvme%2Bgen4&qid=1773817832&sprefix=tb%2Bnvme%2Bgen4%2Caps%2C319&sr=8-3&th=1',
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
        name: 'Cooler Master MasterBox Q300L Micro-ATX PC Case',
        category: 'Case',
        price: 39,
        brand: 'Cooler Master',
        image: '/cooler master.jpg',
        amazonLink: 'https://www.amazon.com/Cooler-Master-Transparent-Adjustable-Ventilated/dp/B0785GRMPG/ref=sr_1_5?crid=1WCTJ79FZ8VL6&dib=eyJ2IjoiMSJ9.RnzCj3c2a_HnJjJD7WMAoZ6Ho7Iu6_-RwvDCphKDqpvUY5fQmTpRJfuAhbZ7V75qd8DGZN3wkQHUYP65MmuTLwhhqoamThtLyaHynLtXpGJPVTEtYCi2sBmBwNm16Cu4yOO2yNR0q0kX1bPKUQKxht7x3V_qmn9wyJZTSoZj57AKOKXODsRRAx89dMpnQuGMep9Ga4wpmuKGrMY9ozQMeE5VkScUoDC_qgKObJGQhVs.83kkeOMAABU2GVaWbCFhM2hvsxKaRoQPI5mfih1JT80&dib_tag=se&keywords=pc%2Bcase&qid=1773818413&sprefix=pc%2Bca%2Caps%2C396&sr=8-5&th=1',
        wattage: 20,
        specs: {
            format: 'mATX',
            maxGpuLength: 300
        }
    },
    {
        id: 'case-2',
        name: 'NZXT H9 Flow (2025) – Large Dual-Chamber ATX',
        category: 'Case',
        price: 119,
        brand: 'NZXT',
        image: '/nzxt flow.jpg',
        amazonLink: 'https://www.amazon.com/NZXT-Flow-Dual-Chamber-Mid-Tower-Back-Connect/dp/B0DQPPKNSS/ref=sr_1_13?crid=301HQABYPP084&dib=eyJ2IjoiMSJ9.RnzCj3c2a_HnJjJD7WMAoZ6Ho7Iu6_-RwvDCphKDqpvUY5fQmTpRJfuAhbZ7V75qd8DGZN3wkQHUYP65MmuTLwhhqoamThtLyaHynLtXpGJPVTEtYCi2sBmBwNm16Cu4yOO2yNR0q0kX1bPKUQKxht7x3V_qmn9wyJZTSoZj57AKOKXODsRRAx89dMpnQuGMep9Ga4wpmuKGrMY9ozQMeE5VkScUoDC_qgKObJGQhVs.83kkeOMAABU2GVaWbCFhM2hvsxKaRoQPI5mfih1JT80&dib_tag=se&keywords=pc%2Bcase&qid=1773818618&sprefix=pc%2Bcase%2Caps%2C353&sr=8-13&th=1',
        wattage: 20,
        specs: {
            format: 'ATX',
            maxGpuLength: 360
        }
    },
    {
        id: 'case-3',
        name: 'Lian Li LANCOOL 217 Genuine Walnut Wood',
        category: 'Case',
        price: 119,
        brand: 'Lian Li',
        image: '/lian li.jpg',
        amazonLink: 'https://www.amazon.com/Lian-Li-Mid-Tower-Pre-Installed-Installation/dp/B0DWF95QP7/ref=sr_1_14?crid=301HQABYPP084&dib=eyJ2IjoiMSJ9.RnzCj3c2a_HnJjJD7WMAoZ6Ho7Iu6_-RwvDCphKDqpvUY5fQmTpRJfuAhbZ7V75qd8DGZN3wkQHUYP65MmuTLwhhqoamThtLyaHynLtXpGJPVTEtYCi2sBmBwNm16Cu4yOO2yNR0q0kX1bPKUQKxhr8ra1awX5Uz9pYwoAJ8mZNVZ1wpeE_bVSoBdUF7X9Biep9Ga4wpmuKGrMY9ozQMeE5VkScUoDC_qgKObJGQhVs.SWkz26E7F2cOiR2V_YR-2WF6aS2w1QNVuR7iMnWVeXE&dib_tag=se&keywords=pc%2Bcase&qid=1773818881&sprefix=pc%2Bcase%2Caps%2C353&sr=8-14&th=1',
        wattage: 20,
        specs: {
            format: 'mATX',
            maxGpuLength: 300
        }
    }
];
const psuList = [
    {
        id: 'psu-1',
        name: 'Thermaltake SMART 600W 80plus bronze',
        category: 'PSU',
        price: 42,
        brand: 'Thermaltake',
        image: '/psu 600.webp',
        amazonLink: 'https://www.amazon.com/Thermaltake-Certified-Continuous-Active-PS-SPD-0600NPCWUS-W/dp/B014W3EMAO/ref=sr_1_1?crid=CQ8B6XFNTVG3&dib=eyJ2IjoiMSJ9.dbijH8AgaFyYWhyJqmfZVntluVlBOb_W-sf0EMS1obudv_BWpzrizsFpKbGus0Akf2UyDv1yvPiwMrKyYl3yg1wr87A1QHWoHBE0537P_g5Y-34Fs52qkGU_rPf5NrGlKhfycivDz7SRIBE8ajfEtm9fTXYGmQhhuNjx8LBASXA6jIOdRqpiFNV2w99oIAvonfmbUY_79uOWan7fgslmBxXtajx9sXiZueUwMftpB04.yA-OqFKRuLWVx4sl6H8wnfqyws1BZWkYHPFfi-M9OLM&dib_tag=se&keywords=thermaltake%2Bpsu&qid=1773819398&sprefix=thermaltake%2Bpsu%2Caps%2C349&sr=8-1&th=1',
        wattage: 0,
        specs: {
            wattage: 600,
            rating: '80+ Bronze'
        }
    },
    {
        id: 'psu-2',
        name: 'MSI MAG A750GL PCIE5 80+ Gold',
        category: 'PSU',
        price: 95,
        brand: 'MSI',
        image: '/msi.jpg',
        amazonLink: 'https://www.amazon.com/MSI-MAG-A750GL-Gaming-Supply/dp/B0CC3QBGDL/ref=sr_1_3?crid=28KCVCJIXN02X&dib=eyJ2IjoiMSJ9.B6yBcbIVpPzPR_iRqIny6HeGseWUW0Q-jSYbwVbaymwYTYfitiXqIqvbkWGrWLWo66xLpLpYy0eGwsGCfSWwXBcou39E4mB7bWC688MRqmaiDcpN4Ln71TDyRJz6uiAPYoGPvfjEFfyN4_1bfljGs95aXHVRuVd_W3wKf7KuU6gYswexIQU6dOnmth-lqj1IUHuoNM3xWvV5U0azjwJ3TA2DZAwZVdz50ppfWYd_38M.MGdMskEqSsd0Jb15Zz57Aga63HNHdv9es-7pLLIrfsw&dib_tag=se&keywords=psu%2B750W&qid=1773819119&sprefix=psu%2B750w%2Caps%2C339&sr=8-3&th=1',
        wattage: 0,
        specs: {
            wattage: 750,
            rating: '80+ Gold'
        }
    },
    {
        id: 'psu-3',
        name: 'MSi MAG A1000GL PCIE5 80+ Gold',
        category: 'PSU',
        price: 134,
        brand: 'MSI',
        image: '/msi mag.jpg',
        amazonLink: 'https://www.amazon.com/A1000GL-Modular-Compact-Dual-Color-Warranty/dp/B0CT3XNCZ9/ref=sr_1_4?crid=3MS9YGWOCNCX1&dib=eyJ2IjoiMSJ9.HzxWgyRjrkqJrsWCmVY6HU4v63g5FFbwMjzRNYtrZmH10Tk_nekL4D5cs92912slpnW2VY7X6eP8UXDRQzsLzCB5pkltBB7oX4PjTfT2l9c8fTN0dvD9JAB7xJpEHIlOHL456hZ2cncwOqZWdssdabrCpnG9GkYGMWq1t7pYI9ycZl6uD2FXK40KS7C6XYkk759xPE2UE-QhfgOTDpDrxmeIhte6UMx_J8eUbndEFfo.yrTxlKTJ134O5ULgyC0Q4RrAvew-_GZEFp9LqP9sLlg&dib_tag=se&keywords=psu%2B1000w%2Bgold&qid=1773819219&sprefix=psu%2B1000w%2Caps%2C335&sr=8-4&th=1',
        wattage: 0,
        specs: {
            wattage: 1000,
            rating: '80+ Gold'
        }
    }
];
}),
"[project]/components/Toast.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/index.ts [app-ssr] (ecmascript)");
;
;
;
;
function Toast({ message, type = 'success', isVisible, onClose }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isVisible) {
            const timer = setTimeout(()=>{
                onClose();
            }, 3000);
            return ()=>clearTimeout(timer);
        }
    }, [
        isVisible,
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-8 right-8 z-50 animate-fade-in-up",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl border backdrop-blur-md", type === 'success' && "bg-emerald-950/80 border-emerald-500/50 text-emerald-100", type === 'error' && "bg-red-950/80 border-red-500/50 text-red-100", type === 'info' && "bg-blue-950/80 border-blue-500/50 text-blue-100"),
                children: [
                    type === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckCircle2"], {
                        className: "w-5 h-5 text-emerald-400"
                    }, void 0, false, {
                        fileName: "[project]/components/Toast.tsx",
                        lineNumber: 36,
                        columnNumber: 36
                    }, this),
                    type === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XCircle"], {
                        className: "w-5 h-5 text-red-400"
                    }, void 0, false, {
                        fileName: "[project]/components/Toast.tsx",
                        lineNumber: 37,
                        columnNumber: 34
                    }, this),
                    type === 'info' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Info"], {
                        className: "w-5 h-5 text-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/components/Toast.tsx",
                        lineNumber: 38,
                        columnNumber: 33
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/components/BuilderCategoryRow.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BuilderCategoryRow",
    ()=>BuilderCategoryRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
function BuilderCategoryRow({ category, part, isActive, onToggle, onSelect, onRemove, partsList }) {
    const Icon = category.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative rounded-2xl border transition-all duration-300 overflow-hidden ${isActive ? 'bg-white dark:bg-zinc-800 border-emerald-500 shadow-lg shadow-emerald-500/10' : 'bg-white/50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 flex items-center gap-6 cursor-pointer",
                onClick: onToggle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${part ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-zinc-100 dark:bg-zinc-700 text-zinc-400'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-grow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium text-zinc-500 uppercase tracking-wider mb-1",
                                children: category.label
                            }, void 0, false, {
                                fileName: "[project]/components/BuilderCategoryRow.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            part ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-bold text-zinc-900 dark:text-white text-xl",
                                children: part.name
                            }, void 0, false, {
                                fileName: "[project]/components/BuilderCategoryRow.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    part ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-bold text-zinc-900 dark:text-white text-xl mr-2",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(part.price)
                            }, void 0, false, {
                                fileName: "[project]/components/BuilderCategoryRow.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            part.amazonLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: part.amazonLink,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "p-3 hover:bg-emerald-500/10 text-zinc-400 hover:text-emerald-500 rounded-xl transition-colors",
                                onClick: (e)=>e.stopPropagation(),
                                title: "View on Amazon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShoppingCart"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onRemove();
                                },
                                className: "p-3 hover:bg-red-500/10 text-zinc-400 hover:text-red-500 rounded-xl transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["X"], {
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
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        size: "lg",
                        variant: "secondary",
                        onClick: (e)=>{
                            e.stopPropagation();
                            onToggle();
                        },
                        className: "rounded-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Plus"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `overflow-hidden min-h-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 grid grid-cols-1 gap-4",
                            children: partsList.length > 0 ? partsList.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>onSelect(item),
                                    className: "flex items-center gap-6 p-4 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-emerald-500 cursor-pointer transition-all hover:shadow-md group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-24 h-24 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-900 flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-grow min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-lg text-zinc-900 dark:text-white group-hover:text-emerald-500 transition-colors mb-1",
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BuilderCategoryRow.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-zinc-500 flex flex-wrap gap-2",
                                                    children: Object.entries(item.specs).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex items-center bg-zinc-100 dark:bg-zinc-700 px-2.5 py-1 rounded-md text-xs font-medium",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-bold text-xl text-emerald-600 dark:text-emerald-400 whitespace-nowrap pl-4 border-l border-zinc-100 dark:border-zinc-700",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(item.price)
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
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/src/app/build/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BuilderPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$parts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/parts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuilderCategoryRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BuilderCategoryRow.tsx [app-ssr] (ecmascript)");
'use client';
;
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
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cpu"],
        label: 'CPU'
    },
    {
        id: 'GPU',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Gamepad2"],
        label: 'Graphics Card'
    },
    {
        id: 'Motherboard',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"],
        label: 'Motherboard'
    },
    {
        id: 'RAM',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HardDrive"],
        label: 'Memory'
    },
    {
        id: 'Storage',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HardDrive"],
        label: 'Storage'
    },
    {
        id: 'Case',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"],
        label: 'PC Case'
    },
    {
        id: 'PSU',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Zap"],
        label: 'PSU'
    }
];
function BuilderContent() {
    const [build, setBuild] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        CPU: null,
        GPU: null,
        Motherboard: null,
        RAM: null,
        Storage: null,
        Case: null,
        PSU: null
    });
    // activeCategory is now either the Category ID (open) or null (closed)
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('CPU');
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        message: '',
        type: 'success',
        isVisible: false
    });
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const loadId = searchParams.get('loadId');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (loadId) {
            try {
                const savedBuilds = JSON.parse(localStorage.getItem('savedBuilds') || '[]');
                const buildToLoad = savedBuilds.find((b)=>b.id === loadId);
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
    }, [
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
        const { status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkCompatibility"])(build);
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
                return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$parts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cpuList"];
            case 'GPU':
                return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$parts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gpuList"];
            case 'Motherboard':
                return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$parts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motherboardList"];
            case 'RAM':
                return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$parts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ramList"];
            case 'Storage':
                return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$parts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageList"];
            case 'Case':
                return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$parts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["caseList"];
            case 'PSU':
                return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$parts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["psuList"];
            default:
                return [];
        }
    };
    const { messages: compatibilityIssues } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkCompatibility"])(build);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen pb-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-zinc-900 dark:text-white mb-2",
                        children: "PC Builder"
                    }, void 0, false, {
                        fileName: "[project]/src/app/build/page.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-zinc-600 dark:text-zinc-400",
                        children: "Select your components to build your PC."
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 xl:grid-cols-12 gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "xl:col-span-9 space-y-3",
                        children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuilderCategoryRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BuilderCategoryRow"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "xl:col-span-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-24 space-y-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-zinc-800 rounded-3xl p-6 border border-zinc-200 dark:border-zinc-700 shadow-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShoppingCart"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center text-zinc-600 dark:text-zinc-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Core Components"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/build/page.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalPrice)
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center text-zinc-600 dark:text-zinc-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Estimated Wattage"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/build/page.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Zap"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-px bg-zinc-200 dark:bg-zinc-700 my-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/build/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center text-2xl font-bold text-zinc-900 dark:text-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Total"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/build/page.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalPrice)
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
                                    compatibilityIssues.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-red-600 dark:text-red-400 font-bold mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertCircle"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc list-inside text-sm text-red-600 dark:text-red-400 space-y-1",
                                                children: compatibilityIssues.map((issue, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckCircle2"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                className: "w-full justify-center",
                                                disabled: compatibilityIssues.length > 0 || totalPrice === 0,
                                                onClick: handleCheckout,
                                                children: [
                                                    "Checkout on Amazon",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExternalLink"], {
                                                        className: "w-3 h-3 ml-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/build/page.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/build/page.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "secondary",
                                                className: "w-full justify-center",
                                                onClick: handleSaveBuild,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Save"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RotateCcw"], {
                                                        className: "w-4 h-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/build/page.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Reset Build"
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-1xl font-bold text-zinc-900 dark:text-white mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block",
                        children: "--------------------------------------------------------------------------------------"
                    }, void 0, false, {
                        fileName: "[project]/src/app/build/page.tsx",
                        lineNumber: 261,
                        columnNumber: 76
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block",
                        children: " Disclaimer!: "
                    }, void 0, false, {
                        fileName: "[project]/src/app/build/page.tsx",
                        lineNumber: 261,
                        columnNumber: 193
                    }, this),
                    " Make sure to check the Wattage of the parts on your own to avoid clashes in the pc build",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/build/page.tsx",
                        lineNumber: 262,
                        columnNumber: 41
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/build/page.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-1xl font-bold text-zinc-900 dark:text-white mb-2",
                    children: "--------------------------------------------------------------------------------------"
                }, void 0, false, {
                    fileName: "[project]/src/app/build/page.tsx",
                    lineNumber: 262,
                    columnNumber: 74
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/build/page.tsx",
                lineNumber: 262,
                columnNumber: 50
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                message: toast.message,
                type: toast.type,
                isVisible: toast.isVisible,
                onClose: hideToast
            }, void 0, false, {
                fileName: "[project]/src/app/build/page.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/build/page.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, this);
}
function BuilderPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center text-zinc-500",
            children: "Loading builder..."
        }, void 0, false, {
            fileName: "[project]/src/app/build/page.tsx",
            lineNumber: 276,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BuilderContent, {}, void 0, false, {
            fileName: "[project]/src/app/build/page.tsx",
            lineNumber: 277,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/build/page.tsx",
        lineNumber: 276,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_3f63fe1e._.js.map