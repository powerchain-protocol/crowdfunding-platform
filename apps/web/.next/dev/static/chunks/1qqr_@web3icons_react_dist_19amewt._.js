(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWeb3Icon",
    ()=>createWeb3Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@types+node@24.13.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/BaseIcon.js [app-client] (ecmascript)");
;
;
/**
 * factory function to create icon components from data structures.
 *
 * @param name - component display name
 * @param variants - icon data for each variant (branded/mono/background)
 * @returns react component with forwardRef support
 */ const createWeb3Icon = (name, variants)=>{
    const availableVariants = Object.keys(variants);
    const defaultVariant = availableVariants[0];
    if (!defaultVariant) {
        throw new Error(`Icon "${name}" must have at least one variant`);
    }
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = defaultVariant, fallback, ...props }, ref)=>{
        const iconData = variants[variant];
        if (!iconData) {
            console.warn(`Icon "${name}" does not have variant "${variant}". ` + `Available variants: ${availableVariants.join(', ')}`);
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseIcon"], {
            fallback,
            ...props,
            ref
        }, renderIconNode(iconData));
    });
    Component.displayName = name;
    return Component;
};
/**
 * recursively render IconNode data structure to react elements.
 *
 * @param nodes array of IconNode elements to render
 * @returns array of react elements
 */ function renderIconNode(nodes) {
    return nodes.map((node, index)=>{
        const [element, attrs, children] = node;
        const { style, ...restAttrs } = attrs || {};
        const elementProps = {
            key: index,
            ...restAttrs,
            ...style && {
                style
            }
        };
        // check if this is a 3-element tuple with children (element, attributes, children)
        const childElements = children ? renderIconNode(children) : undefined;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(element, elementProps, childElements);
    });
}
;
}),
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenAVAX.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenAVAX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#E84142',
                d: 'M7.517 19.875H4.491c-.635 0-.95 0-1.142-.119a.75.75 0 0 1-.348-.596c-.012-.225.146-.495.46-1.04l7.47-12.982c.321-.551.484-.827.687-.928a.76.76 0 0 1 .697 0c.202.101.36.377.675.928l1.54 2.642.006.012c.253.374.454.78.596 1.209.084.337.084.703 0 1.046a5 5 0 0 1-.596 1.22l-3.926 6.84-.012.023a5 5 0 0 1-.765 1.125 2.36 2.36 0 0 1-.928.534c-.32.085-.675.085-1.389.085m7.644 0h4.331c.647 0 .967 0 1.159-.124a.75.75 0 0 0 .348-.597c.012-.219-.14-.478-.444-.99l-.034-.056-2.17-3.656-.023-.045c-.304-.506-.461-.765-.658-.866a.75.75 0 0 0-.692 0c-.203.101-.36.371-.675.911l-2.171 3.662v.011c-.32.54-.478.81-.467 1.03a.76.76 0 0 0 .349.601c.185.119.506.119 1.147.119'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M7.517 19.875H4.491c-.635 0-.95 0-1.142-.119a.75.75 0 0 1-.348-.596c-.012-.225.146-.495.46-1.04l7.47-12.982c.321-.551.484-.827.687-.928a.76.76 0 0 1 .697 0c.202.101.36.377.675.928l1.541 2.644.006.01c.253.375.454.782.596 1.21.084.338.084.703 0 1.046a5 5 0 0 1-.596 1.22l-3.926 6.84-.012.023a5 5 0 0 1-.765 1.125 2.4 2.4 0 0 1-.928.534c-.32.085-.675.085-1.389.085m7.644 0h4.331c.647 0 .967 0 1.159-.124a.75.75 0 0 0 .348-.597c.012-.219-.14-.477-.444-.99l-.034-.056-2.17-3.656-.023-.045c-.304-.506-.461-.765-.658-.866a.75.75 0 0 0-.692 0c-.203.101-.36.371-.675.911l-2.171 3.662v.011c-.32.54-.478.81-.467 1.03a.76.76 0 0 0 .349.601c.185.119.506.119 1.147.119'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#AVAX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#E84142',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M8.015 19h-2.69c-.565 0-.845 0-1.015-.105a.67.67 0 0 1-.31-.53c-.01-.2.13-.44.41-.925L11.05 5.9c.285-.49.43-.735.61-.825.19-.1.425-.1.62 0 .18.09.32.335.6.825l1.37 2.35.005.01q.338.502.53 1.075c.075.3.075.625 0 .93-.126.384-.304.75-.53 1.085l-3.49 6.08-.01.02a4.4 4.4 0 0 1-.68 1 2.1 2.1 0 0 1-.825.475C8.965 19 8.65 19 8.015 19m6.795 0h3.85c.575 0 .86 0 1.03-.11.185-.12.3-.315.31-.53.01-.195-.126-.425-.395-.88l-.03-.05-1.93-3.25-.02-.04c-.27-.45-.41-.68-.585-.77a.67.67 0 0 0-.615 0c-.18.09-.32.33-.6.81l-1.93 3.255v.01c-.285.48-.425.72-.415.915.01.215.125.415.31.535.165.105.45.105 1.02.105'
                    }
                ]
            ]
        ],
        [
            'defs',
            {},
            [
                [
                    'clipPath',
                    {
                        id: 'AVAX__a'
                    },
                    [
                        [
                            'path',
                            {
                                fill: '#fff',
                                d: 'M0 0h24v24H0z'
                            }
                        ]
                    ]
                ]
            ]
        ]
    ]
};
/**
 * @component @name TokenAVAX
 * @description Web3Icon for TokenAVAX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNFODQxNDIiIGQ9Ik03LjUxNyAxOS44NzVINC40OTFjLS42MzUgMC0uOTUgMC0xLjE0Mi0uMTE5YS43NS43NSAwIDAgMS0uMzQ4LS41OTZjLS4wMTItLjIyNS4xNDYtLjQ5NS40Ni0xLjA0bDcuNDctMTIuOTgyYy4zMjEtLjU1MS40ODQtLjgyNy42ODctLjkyOGEuNzYuNzYgMCAwIDEgLjY5NyAwYy4yMDIuMTAxLjM2LjM3Ny42NzUuOTI4bDEuNTQgMi42NDIuMDA2LjAxMmMuMjUzLjM3NC40NTQuNzguNTk2IDEuMjA5LjA4NC4zMzcuMDg0LjcwMyAwIDEuMDQ2YTUgNSAwIDAgMS0uNTk2IDEuMjJsLTMuOTI2IDYuODQtLjAxMi4wMjNhNSA1IDAgMCAxLS43NjUgMS4xMjUgMi4zNiAyLjM2IDAgMCAxLS45MjguNTM0Yy0uMzIuMDg1LS42NzUuMDg1LTEuMzg5LjA4NW03LjY0NCAwaDQuMzMxYy42NDcgMCAuOTY3IDAgMS4xNTktLjEyNGEuNzUuNzUgMCAwIDAgLjM0OC0uNTk3Yy4wMTItLjIxOS0uMTQtLjQ3OC0uNDQ0LS45OWwtLjAzNC0uMDU2LTIuMTctMy42NTYtLjAyMy0uMDQ1Yy0uMzA0LS41MDYtLjQ2MS0uNzY1LS42NTgtLjg2NmEuNzUuNzUgMCAwIDAtLjY5MiAwYy0uMjAzLjEwMS0uMzYuMzcxLS42NzUuOTExbC0yLjE3MSAzLjY2MnYuMDExYy0uMzIuNTQtLjQ3OC44MS0uNDY3IDEuMDNhLjc2Ljc2IDAgMCAwIC4zNDkuNjAxYy4xODUuMTE5LjUwNi4xMTkgMS4xNDcuMTE5Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03LjUxNyAxOS44NzVINC40OTFjLS42MzUgMC0uOTUgMC0xLjE0Mi0uMTE5YS43NS43NSAwIDAgMS0uMzQ4LS41OTZjLS4wMTItLjIyNS4xNDYtLjQ5NS40Ni0xLjA0bDcuNDctMTIuOTgyYy4zMjEtLjU1MS40ODQtLjgyNy42ODctLjkyOGEuNzYuNzYgMCAwIDEgLjY5NyAwYy4yMDIuMTAxLjM2LjM3Ny42NzUuOTI4bDEuNTQxIDIuNjQ0LjAwNi4wMWMuMjUzLjM3NS40NTQuNzgyLjU5NiAxLjIxLjA4NC4zMzguMDg0LjcwMyAwIDEuMDQ2YTUgNSAwIDAgMS0uNTk2IDEuMjJsLTMuOTI2IDYuODQtLjAxMi4wMjNhNSA1IDAgMCAxLS43NjUgMS4xMjUgMi40IDIuNCAwIDAgMS0uOTI4LjUzNGMtLjMyLjA4NS0uNjc1LjA4NS0xLjM4OS4wODVtNy42NDQgMGg0LjMzMWMuNjQ3IDAgLjk2NyAwIDEuMTU5LS4xMjRhLjc1Ljc1IDAgMCAwIC4zNDgtLjU5N2MuMDEyLS4yMTktLjE0LS40NzctLjQ0NC0uOTlsLS4wMzQtLjA1Ni0yLjE3LTMuNjU2LS4wMjMtLjA0NWMtLjMwNC0uNTA2LS40NjEtLjc2NS0uNjU4LS44NjZhLjc1Ljc1IDAgMCAwLS42OTIgMGMtLjIwMy4xMDEtLjM2LjM3MS0uNjc1LjkxMWwtMi4xNzEgMy42NjJ2LjAxMWMtLjMyLjU0LS40NzguODEtLjQ2NyAxLjAzYS43Ni43NiAwIDAgMCAuMzQ5LjYwMWMuMTg1LjExOS41MDYuMTE5IDEuMTQ3LjExOSIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNBVkFYX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0U4NDE0MiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNOC4wMTUgMTloLTIuNjljLS41NjUgMC0uODQ1IDAtMS4wMTUtLjEwNWEuNjcuNjcgMCAwIDEtLjMxLS41M2MtLjAxLS4yLjEzLS40NC40MS0uOTI1TDExLjA1IDUuOWMuMjg1LS40OS40My0uNzM1LjYxLS44MjUuMTktLjEuNDI1LS4xLjYyIDAgLjE4LjA5LjMyLjMzNS42LjgyNWwxLjM3IDIuMzUuMDA1LjAxcS4zMzguNTAyLjUzIDEuMDc1Yy4wNzUuMy4wNzUuNjI1IDAgLjkzLS4xMjYuMzg0LS4zMDQuNzUtLjUzIDEuMDg1bC0zLjQ5IDYuMDgtLjAxLjAyYTQuNCA0LjQgMCAwIDEtLjY4IDEgMi4xIDIuMSAwIDAgMS0uODI1LjQ3NUM4Ljk2NSAxOSA4LjY1IDE5IDguMDE1IDE5bTYuNzk1IDBoMy44NWMuNTc1IDAgLjg2IDAgMS4wMy0uMTEuMTg1LS4xMi4zLS4zMTUuMzEtLjUzLjAxLS4xOTUtLjEyNi0uNDI1LS4zOTUtLjg4bC0uMDMtLjA1LTEuOTMtMy4yNS0uMDItLjA0Yy0uMjctLjQ1LS40MS0uNjgtLjU4NS0uNzdhLjY3LjY3IDAgMCAwLS42MTUgMGMtLjE4LjA5LS4zMi4zMy0uNi44MWwtMS45MyAzLjI1NXYuMDFjLS4yODUuNDgtLjQyNS43Mi0uNDE1LjkxNS4wMS4yMTUuMTI1LjQxNS4zMS41MzUuMTY1LjEwNS40NS4xMDUgMS4wMi4xMDUiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQVZBWF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/AVAX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenAVAX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenAVAX', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_19amewt._.js.map