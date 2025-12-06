(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/sito_jack-master/sito_jack-master/src/components/AstrologicalNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AstrologicalNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/sito_jack-master/sito_jack-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/sito_jack-master/sito_jack-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/sito_jack-master/sito_jack-master/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/sito_jack-master/sito_jack-master/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/sito_jack-master/sito_jack-master/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const NAV_ITEMS = [
    {
        id: 'about',
        label: 'About Us',
        symbol: '☉',
        path: '/about',
        description: 'Discover the LUN/R vision and our commitment to precision engineering.',
        color: '#FFD600' // Gradient 8 - Yellow
    },
    {
        id: 'shop',
        label: 'Shop',
        symbol: '☿',
        path: '/products',
        description: 'Explore our collection of cyberpunk artifacts and 3D printed gear.',
        color: '#4DD0E1' // Gradient 3 - Cyan
    },
    {
        id: 'custom',
        label: 'Custom Order',
        symbol: '♀',
        path: '/admin/products/new',
        description: 'Commission a unique piece tailored to your specifications.',
        color: '#E91E63' // Gradient 16 - Magenta
    },
    {
        id: 'contact',
        label: 'Contacts',
        symbol: '♂',
        path: '/contact',
        description: 'Get in touch with our team for inquiries and support.',
        color: '#FF1744' // Gradient 8 - Red/Magenta
    },
    {
        id: 'projects',
        label: 'Projects',
        symbol: '♃',
        path: '/projects',
        description: 'View our portfolio of completed works and ongoing innovations.',
        color: '#7E57C2' // Gradient 3/7 - Purple
    }
];
function AstrologicalNav() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [hoveredItem, setHoveredItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AstrologicalNav.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            let animationFrameId;
            let time = 0;
            const resize = {
                "AstrologicalNav.useEffect.resize": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["AstrologicalNav.useEffect.resize"];
            window.addEventListener('resize', resize);
            resize();
            const drawScribbleLine = {
                "AstrologicalNav.useEffect.drawScribbleLine": (x1, y1, x2, y2, jitter)=>{
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    for(let i = 0; i <= 10; i++){
                        const t = i / 10;
                        const x = x1 + (x2 - x1) * t + (Math.random() - 0.5) * jitter;
                        const y = y1 + (y2 - y1) * t + (Math.random() - 0.5) * jitter;
                        ctx.lineTo(x, y);
                    }
                    ctx.stroke();
                }
            }["AstrologicalNav.useEffect.drawScribbleLine"];
            const drawGear = {
                "AstrologicalNav.useEffect.drawGear": (x, y, radius, teeth, rotation, isHovered)=>{
                    ctx.save();
                    ctx.translate(x, y);
                    ctx.rotate(rotation);
                    // Outer gear
                    ctx.beginPath();
                    for(let i = 0; i < teeth * 2; i++){
                        const angle = Math.PI * 2 * i / (teeth * 2);
                        const r = i % 2 === 0 ? radius : radius * 0.85;
                        ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
                    }
                    ctx.closePath();
                    ctx.lineWidth = isHovered ? 2 : 1;
                    ctx.stroke();
                    // Inner circle
                    ctx.beginPath();
                    ctx.arc(0, 0, radius * 0.5, 0, Math.PI * 2);
                    ctx.stroke();
                    // Spokes
                    for(let i = 0; i < 4; i++){
                        const angle = Math.PI * i / 2;
                        ctx.beginPath();
                        ctx.moveTo(0, 0);
                        ctx.lineTo(Math.cos(angle) * radius * 0.5, Math.sin(angle) * radius * 0.5);
                        ctx.stroke();
                    }
                    ctx.restore();
                }
            }["AstrologicalNav.useEffect.drawGear"];
            const render = {
                "AstrologicalNav.useEffect.render": ()=>{
                    time += 0.005;
                    // Create gradient background
                    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                    gradient.addColorStop(0, '#1A0033'); // Gradient 7 start
                    gradient.addColorStop(0.5, '#5E35B1'); // Gradient 7 mid
                    gradient.addColorStop(1, '#00BCD4'); // Gradient 7 end
                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.strokeStyle = '#ffffff';
                    ctx.lineWidth = 1;
                    ctx.lineCap = 'round';
                    const centerX = canvas.width / 2;
                    const centerY = canvas.height / 2;
                    // Mouse influence
                    const dx = mousePos.x - centerX;
                    const dy = mousePos.y - centerY;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const influence = Math.max(0, 1 - dist / 500);
                    // Draw construction lines
                    ctx.globalAlpha = 0.1;
                    ctx.beginPath();
                    ctx.arc(centerX, centerY, 300, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(centerX - 400, centerY);
                    ctx.lineTo(centerX + 400, centerY);
                    ctx.moveTo(centerX, centerY - 400);
                    ctx.lineTo(centerX, centerY + 400);
                    ctx.stroke();
                    // Draw Central Gear (About Us)
                    ctx.globalAlpha = 0.9;
                    const jitter = isHovering ? 2 + influence * 5 : 1;
                    const isCenterHovered = hoveredItem === 'about';
                    drawGear(centerX, centerY, isCenterHovered ? 160 : 150, 24, time, isCenterHovered);
                    // Draw symbol in center
                    ctx.globalAlpha = 1;
                    ctx.fillStyle = isCenterHovered ? '#FFD700' : '#ffffff';
                    ctx.font = 'bold 48px Arial';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText('☉', centerX, centerY);
                    // Draw Satellite Gears
                    NAV_ITEMS.slice(1).forEach({
                        "AstrologicalNav.useEffect.render": (item, i)=>{
                            const angle = Math.PI * 2 * i / (NAV_ITEMS.length - 1) + time * 0.3;
                            const radius = 280;
                            const x = centerX + Math.cos(angle) * radius;
                            const y = centerY + Math.sin(angle) * radius;
                            const isHovered = hoveredItem === item.id;
                            ctx.globalAlpha = 0.8;
                            drawGear(x, y, isHovered ? 70 : 60, 12, -time * 2, isHovered);
                            // Connecting lines
                            ctx.globalAlpha = 0.2;
                            drawScribbleLine(centerX, centerY, x, y, jitter);
                            // Draw symbol
                            ctx.globalAlpha = 1;
                            ctx.fillStyle = isHovered ? item.color : '#ffffff';
                            ctx.font = 'bold 32px Arial';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            ctx.fillText(item.symbol, x, y);
                        }
                    }["AstrologicalNav.useEffect.render"]);
                    animationFrameId = requestAnimationFrame(render);
                }
            }["AstrologicalNav.useEffect.render"];
            render();
            return ({
                "AstrologicalNav.useEffect": ()=>{
                    window.removeEventListener('resize', resize);
                    cancelAnimationFrame(animationFrameId);
                }
            })["AstrologicalNav.useEffect"];
        }
    }["AstrologicalNav.useEffect"], [
        mousePos,
        isHovering,
        hoveredItem
    ]);
    const handleClick = (path)=>{
        router.push(path);
    };
    const getItemPosition = (index)=>{
        if (index === 0) {
            return {
                x: '50%',
                y: '50%'
            };
        }
        const angle = Math.PI * 2 * (index - 1) / (NAV_ITEMS.length - 1);
        const radius = 280;
        const x = 50 + Math.cos(angle) * radius * 100 / window.innerWidth;
        const y = 50 + Math.sin(angle) * radius * 100 / window.innerHeight;
        return {
            x: `${x}%`,
            y: `${y}%`
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-screen bg-black overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute inset-0",
                onMouseMove: (e)=>{
                    setMousePos({
                        x: e.clientX,
                        y: e.clientY
                    });
                    setIsHovering(true);
                },
                onMouseLeave: ()=>setIsHovering(false)
            }, void 0, false, {
                fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/AstrologicalNav.tsx",
                lineNumber: 221,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: NAV_ITEMS.map((item, index)=>{
                    const pos = getItemPosition(index);
                    const size = index === 0 ? 160 : 70;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute cursor-pointer",
                        style: {
                            left: pos.x,
                            top: pos.y,
                            transform: 'translate(-50%, -50%)',
                            width: `${size * 2}px`,
                            height: `${size * 2}px`
                        },
                        onMouseEnter: ()=>setHoveredItem(item.id),
                        onMouseLeave: ()=>setHoveredItem(null),
                        onClick: ()=>handleClick(item.path)
                    }, item.id, false, {
                        fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/AstrologicalNav.tsx",
                        lineNumber: 238,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/AstrologicalNav.tsx",
                lineNumber: 232,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: hoveredItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: 20
                    },
                    className: "absolute bottom-12 left-1/2 -translate-x-1/2 bg-gray-900/95 backdrop-blur-sm border border-white/20 rounded-xl p-6 max-w-md",
                    children: NAV_ITEMS.map((item)=>item.id === hoveredItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-4xl",
                                            style: {
                                                color: item.color
                                            },
                                            children: item.symbol
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/AstrologicalNav.tsx",
                                            lineNumber: 269,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-white",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/AstrologicalNav.tsx",
                                            lineNumber: 270,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/AstrologicalNav.tsx",
                                    lineNumber: 268,
                                    columnNumber: 37
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 text-sm",
                                    children: item.description
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/AstrologicalNav.tsx",
                                    lineNumber: 272,
                                    columnNumber: 37
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 text-xs mt-2",
                                    children: "Click to navigate"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/AstrologicalNav.tsx",
                                    lineNumber: 273,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/AstrologicalNav.tsx",
                            lineNumber: 267,
                            columnNumber: 33
                        }, this) : null)
                }, void 0, false, {
                    fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/AstrologicalNav.tsx",
                    lineNumber: 259,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/AstrologicalNav.tsx",
                lineNumber: 257,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/AstrologicalNav.tsx",
        lineNumber: 220,
        columnNumber: 9
    }, this);
}
_s(AstrologicalNav, "N8+E1jOU+5yXyZT83svXP+VaohU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AstrologicalNav;
var _c;
__turbopack_context__.k.register(_c, "AstrologicalNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/sito_jack-master/sito_jack-master/src/components/HomeWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/sito_jack-master/sito_jack-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$src$2f$components$2f$AstrologicalNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/sito_jack-master/sito_jack-master/src/components/AstrologicalNav.tsx [app-client] (ecmascript)");
'use client';
;
;
function HomeWrapper({ products }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$src$2f$components$2f$AstrologicalNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/HomeWrapper.tsx",
            lineNumber: 21,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
_c = HomeWrapper;
var _c;
__turbopack_context__.k.register(_c, "HomeWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_sito_jack-master_sito_jack-master_src_components_5989cef4._.js.map