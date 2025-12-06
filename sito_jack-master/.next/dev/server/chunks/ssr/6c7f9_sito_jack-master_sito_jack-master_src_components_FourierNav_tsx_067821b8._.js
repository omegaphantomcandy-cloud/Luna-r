module.exports = [
"[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FourierNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/sito_jack-master/sito_jack-master/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/sito_jack-master/sito_jack-master/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/sito_jack-master/sito_jack-master/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/sito_jack-master/sito_jack-master/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/sito_jack-master/sito_jack-master/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const PHI = 1.618033988749895;
const NAV_ITEMS = [
    {
        id: 'shop',
        label: 'Shop',
        path: '/products',
        symbol: '☿',
        inactiveColor: '#E91E63',
        hoverColor: '#673AB7',
        angle: 0
    },
    {
        id: 'custom',
        label: 'Custom Order',
        path: '/admin/products/new',
        symbol: '♃',
        inactiveColor: '#FF9800',
        hoverColor: '#F44336',
        angle: 72
    },
    {
        id: 'contact',
        label: 'Contacts',
        path: '/contact',
        symbol: '♆',
        inactiveColor: '#3F51B5',
        hoverColor: '#03A9F4',
        angle: 144
    },
    {
        id: 'projects',
        label: 'Projects',
        path: '/projects',
        symbol: '♄',
        inactiveColor: '#E91E63',
        hoverColor: '#CDDC39',
        angle: 216
    },
    {
        id: 'about',
        label: 'About',
        path: '/about',
        symbol: '♅',
        inactiveColor: '#4CAF50',
        hoverColor: '#CDDC39',
        angle: 288
    }
];
function FourierNav() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [showEye, setShowEye] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [eyeProgress, setEyeProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [hoveredItem, setHoveredItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rotation, setRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!showEye) return;
        const duration = 1125 // 75% of original 1500ms
        ;
        const startTime = Date.now();
        const animate = ()=>{
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setEyeProgress(eased);
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setTimeout(()=>setShowEye(false), 300); // 50% slower fade
            }
        };
        animate();
    }, [
        showEye
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (hoveredItem) {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
            return;
        }
        const animate = ()=>{
            setRotation((prev)=>(prev + 0.05) % 360);
            animationRef.current = requestAnimationFrame(animate);
        };
        animationRef.current = requestAnimationFrame(animate);
        return ()=>{
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [
        hoveredItem
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        let animationFrameId;
        let time = 0;
        const pathHistory = [];
        const resize = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();
        const epicycles = Array.from({
            length: 5
        }, (_, i)=>({
                radius: 25 / Math.pow(PHI, i * 0.4),
                frequency: Math.pow(PHI, i * 0.3) * 0.15,
                phase: Math.PI * 2 * i / 5
            }));
        const render = ()=>{
            time += 0.002; // Slower wave movement
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const radius = 250;
            // Axes
            ctx.globalAlpha = 0.1;
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, centerY);
            ctx.lineTo(canvas.width, centerY);
            ctx.moveTo(centerX, 0);
            ctx.lineTo(centerX, canvas.height);
            ctx.stroke();
            // Fourier epicycles around each planet
            NAV_ITEMS.forEach((item, planetIndex)=>{
                const planetAngle = (item.angle + rotation) * Math.PI / 180;
                const planetX = centerX + Math.cos(planetAngle) * radius;
                const planetY = centerY + Math.sin(planetAngle) * radius;
                let currentX = planetX;
                let currentY = planetY;
                epicycles.forEach((epicycle, i)=>{
                    const angle = time * epicycle.frequency + epicycle.phase + planetIndex * Math.PI / 3;
                    ctx.globalAlpha = 0.15;
                    ctx.strokeStyle = i % 2 === 0 ? item.inactiveColor : item.hoverColor;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.arc(currentX, currentY, epicycle.radius, 0, Math.PI * 2);
                    ctx.stroke();
                    const nextX = currentX + Math.cos(angle) * epicycle.radius;
                    const nextY = currentY + Math.sin(angle) * epicycle.radius;
                    ctx.beginPath();
                    ctx.moveTo(currentX, currentY);
                    ctx.lineTo(nextX, nextY);
                    ctx.stroke();
                    currentX = nextX;
                    currentY = nextY;
                });
                // Traced point
                ctx.globalAlpha = 0.7;
                ctx.beginPath();
                ctx.arc(currentX, currentY, 2, 0, Math.PI * 2);
                ctx.fillStyle = item.inactiveColor;
                ctx.fill();
            });
            // Central epicycles
            let currentX = centerX;
            let currentY = centerY;
            epicycles.forEach((epicycle, i)=>{
                const angle = time * epicycle.frequency * 0.5 + epicycle.phase;
                ctx.globalAlpha = 0.12;
                ctx.strokeStyle = i % 2 === 0 ? '#7E57C2' : '#4DD0E1';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(currentX, currentY, epicycle.radius * 1.5, 0, Math.PI * 2);
                ctx.stroke();
                const nextX = currentX + Math.cos(angle) * epicycle.radius * 1.5;
                const nextY = currentY + Math.sin(angle) * epicycle.radius * 1.5;
                ctx.beginPath();
                ctx.moveTo(currentX, currentY);
                ctx.lineTo(nextX, nextY);
                ctx.stroke();
                currentX = nextX;
                currentY = nextY;
            });
            pathHistory.push({
                x: currentX,
                y: currentY
            });
            if (pathHistory.length > 150) pathHistory.shift();
            if (pathHistory.length > 1) {
                ctx.globalAlpha = 0.25;
                ctx.strokeStyle = '#808080';
                ctx.lineWidth = 1;
                ctx.beginPath();
                for(let i = 0; i < pathHistory.length; i++){
                    const point = pathHistory[i];
                    if (i === 0) ctx.moveTo(point.x, point.y);
                    else ctx.lineTo(point.x, point.y);
                }
                ctx.stroke();
            }
            ctx.globalAlpha = 1;
            ctx.beginPath();
            ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
            const pointGradient = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, 15);
            pointGradient.addColorStop(0, '#ffffff');
            pointGradient.addColorStop(0.5, '#E91E63');
            pointGradient.addColorStop(1, 'transparent');
            ctx.fillStyle = pointGradient;
            ctx.fill();
            // Reactive wave at bottom
            const waveY = canvas.height - 80;
            const waveAmplitudeMultiplier = hoveredItem ? 1.8 : 1;
            ctx.globalAlpha = 0.35;
            ctx.strokeStyle = hoveredItem ? NAV_ITEMS.find((i)=>i.id === hoveredItem)?.hoverColor || '#4DD0E1' : '#4DD0E1';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            for(let x = 0; x < canvas.width; x++){
                let y = waveY;
                for(let i = 1; i <= 5; i++){
                    const amplitude = 15 / Math.pow(PHI, i - 1) * waveAmplitudeMultiplier;
                    const frequency = i * 0.01;
                    y += amplitude * Math.sin(frequency * x); // No time animation
                }
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
            // Wave probability fill
            ctx.globalAlpha = hoveredItem ? 0.3 : 0.15;
            ctx.fillStyle = hoveredItem ? NAV_ITEMS.find((i)=>i.id === hoveredItem)?.hoverColor || '#4DD0E1' : '#4DD0E1';
            ctx.beginPath();
            ctx.moveTo(0, waveY);
            for(let x = 0; x < canvas.width; x++){
                let y = waveY;
                for(let i = 1; i <= 5; i++){
                    const amplitude = 15 / Math.pow(PHI, i - 1) * waveAmplitudeMultiplier;
                    const frequency = i * 0.01;
                    y += amplitude * Math.sin(frequency * x); // No time animation
                }
                ctx.lineTo(x, y);
            }
            ctx.lineTo(canvas.width, waveY);
            ctx.closePath();
            ctx.fill();
            // Planetary connections
            ctx.globalAlpha = 0.2;
            NAV_ITEMS.forEach((item, i)=>{
                const nextItem = NAV_ITEMS[(i + 1) % NAV_ITEMS.length];
                const angle1 = (item.angle + rotation) * Math.PI / 180;
                const angle2 = (nextItem.angle + rotation) * Math.PI / 180;
                const x1 = centerX + Math.cos(angle1) * radius;
                const y1 = centerY + Math.sin(angle1) * radius;
                const x2 = centerX + Math.cos(angle2) * radius;
                const y2 = centerY + Math.sin(angle2) * radius;
                ctx.strokeStyle = item.inactiveColor;
                ctx.lineWidth = 1;
                ctx.beginPath();
                const steps = 50;
                for(let j = 0; j <= steps; j++){
                    const t = j / steps;
                    const baseX = x1 + (x2 - x1) * t;
                    const baseY = y1 + (y2 - y1) * t;
                    let offset = 0;
                    for(let n = 1; n <= 3; n++){
                        const amplitude = 12 / Math.pow(PHI, n);
                        const frequency = n * 2;
                        offset += amplitude * Math.sin(frequency * t * Math.PI + time * n);
                    }
                    const dx = x2 - x1;
                    const dy = y2 - y1;
                    const length = Math.sqrt(dx * dx + dy * dy);
                    const perpX = -dy / length;
                    const perpY = dx / length;
                    const finalX = baseX + perpX * offset;
                    const finalY = baseY + perpY * offset;
                    if (j === 0) ctx.moveTo(finalX, finalY);
                    else ctx.lineTo(finalX, finalY);
                }
                ctx.stroke();
            });
            ctx.globalAlpha = 1;
            animationFrameId = requestAnimationFrame(render);
        };
        render();
        return ()=>{
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [
        rotation,
        hoveredItem
    ]);
    const handleClick = (path)=>router.push(path);
    const getCirclePosition = (angle, radius)=>{
        const rad = (angle + rotation) * Math.PI / 180;
        return {
            x: Math.cos(rad) * radius,
            y: Math.sin(rad) * radius
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showEye && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 10
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "fixed inset-0 z-[200] flex items-center justify-center bg-black",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].svg, {
                        width: "400",
                        height: "400",
                        viewBox: "0 0 400 400",
                        animate: {
                            scale: 1 + eyeProgress * 0.2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                cx: "200",
                                cy: "200",
                                rx: "150",
                                ry: 150 * eyeProgress,
                                fill: "none",
                                stroke: "#00BCD4",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx",
                                lineNumber: 345,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "200",
                                cy: "200",
                                r: 60 * eyeProgress,
                                fill: "url(#irisGradient)"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx",
                                lineNumber: 346,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "200",
                                cy: "200",
                                r: 30 * eyeProgress,
                                fill: "#000"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx",
                                lineNumber: 347,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                    id: "irisGradient",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0%",
                                            stopColor: "#2196F3"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx",
                                            lineNumber: 350,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "50%",
                                            stopColor: "#00BCD4"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx",
                                            lineNumber: 351,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "100%",
                                            stopColor: "#00ACC1"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx",
                                            lineNumber: 352,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx",
                                    lineNumber: 349,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx",
                                lineNumber: 348,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx",
                        lineNumber: 344,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx",
                    lineNumber: 338,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx",
                lineNumber: 336,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-screen overflow-hidden bg-black flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvasRef,
                        className: "absolute inset-0"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx",
                        lineNumber: 361,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-40 h-40 rounded-full flex items-center justify-center transition-all duration-300 border-4",
                                style: {
                                    borderColor: hoveredItem ? '#00BCD4' : '#2196F3',
                                    backgroundColor: 'transparent',
                                    boxShadow: hoveredItem ? '0 0 40px #00BCD4' : '0 0 20px #2196F3'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-6xl transition-colors duration-300",
                                    style: {
                                        color: hoveredItem ? '#00BCD4' : '#2196F3'
                                    },
                                    children: "☽"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx",
                                    lineNumber: 372,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx",
                                lineNumber: 364,
                                columnNumber: 21
                            }, this),
                            hoveredItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                className: "absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white text-xl font-bold",
                                    children: NAV_ITEMS.find((item)=>item.id === hoveredItem)?.label
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx",
                                    lineNumber: 379,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx",
                                lineNumber: 378,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx",
                        lineNumber: 363,
                        columnNumber: 17
                    }, this),
                    NAV_ITEMS.map((item)=>{
                        const isHovered = hoveredItem === item.id;
                        const position = getCirclePosition(item.angle, 250);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute cursor-pointer z-10",
                            style: {
                                left: '50%',
                                top: '50%',
                                transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`
                            },
                            onMouseEnter: ()=>setHoveredItem(item.id),
                            onMouseLeave: ()=>setHoveredItem(null),
                            onClick: ()=>handleClick(item.path),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 border-4",
                                    style: {
                                        borderColor: isHovered ? item.hoverColor : item.inactiveColor,
                                        backgroundColor: 'transparent',
                                        boxShadow: isHovered ? `0 0 30px ${item.hoverColor}` : `0 0 15px ${item.inactiveColor}88`
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl transition-colors duration-300",
                                        style: {
                                            color: isHovered ? item.hoverColor : item.inactiveColor
                                        },
                                        children: item.symbol
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx",
                                        lineNumber: 411,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx",
                                    lineNumber: 403,
                                    columnNumber: 29
                                }, this),
                                isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    className: "absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$sito_jack$2d$master$2f$sito_jack$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white text-lg font-bold",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx",
                                        lineNumber: 418,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx",
                                    lineNumber: 417,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx",
                            lineNumber: 391,
                            columnNumber: 25
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/sito_jack-master/sito_jack-master/src/components/FourierNav.tsx",
                lineNumber: 360,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=6c7f9_sito_jack-master_sito_jack-master_src_components_FourierNav_tsx_067821b8._.js.map