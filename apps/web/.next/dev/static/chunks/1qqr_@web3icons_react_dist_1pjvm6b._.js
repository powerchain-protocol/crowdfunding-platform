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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSOLO.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSOLO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M15.994 17.063c-.13.326-1.7 1.687-3.336 1.687-2.43 0-4.033-.883-4.033-2.644 0-1.62 2.025-2.396 4.511-3.296 2.998-1.013 4.489-2.801 4.489-5.254 0-2.925-2.374-4.556-5.94-4.556-1.884 0-4.298.979-4.933 1.631l1.496 1.744c.602-.31 1.744-1.125 3.414-1.125 2.504 0 3.713 1.12 3.713 2.306 0 1.626-.917 2.374-3.454 3.302C8.816 12 6.375 13.372 6.375 15.926c0 2.689 1.946 5.074 6.283 5.074 1.772 0 3.825-.979 4.967-2.183z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M15.994 17.063c-.13.326-1.7 1.687-3.336 1.687-2.43 0-4.033-.883-4.033-2.644 0-1.62 2.025-2.396 4.511-3.296 2.998-1.013 4.489-2.801 4.489-5.254 0-2.925-2.374-4.556-5.94-4.556-1.884 0-4.298.979-4.933 1.631l1.496 1.744c.602-.31 1.744-1.125 3.414-1.125 2.504 0 3.713 1.12 3.713 2.306 0 1.626-.917 2.374-3.454 3.302C8.816 12 6.375 13.372 6.375 15.926c0 2.689 1.946 5.074 6.283 5.074 1.772 0 3.825-.979 4.967-2.183z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#SOLO__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M15.55 16.5c-.115.29-1.51 1.5-2.965 1.5C10.425 18 9 17.215 9 15.65c0-1.44 1.8-2.13 4.01-2.93 2.665-.9 3.99-2.49 3.99-4.67C17 5.45 14.89 4 11.72 4c-1.675 0-3.82.87-4.385 1.45L8.665 7c.535-.275 1.55-1 3.035-1 2.225 0 3.3.995 3.3 2.05 0 1.445-.815 2.11-3.07 2.935C9.17 12 7 13.22 7 15.49 7 17.88 8.73 20 12.585 20c1.575 0 3.4-.87 4.415-1.94z'
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
                        id: 'SOLO__a'
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
 * @component @name TokenSOLO
 * @description Web3Icon for TokenSOLO
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNS45OTQgMTcuMDYzYy0uMTMuMzI2LTEuNyAxLjY4Ny0zLjMzNiAxLjY4Ny0yLjQzIDAtNC4wMzMtLjg4My00LjAzMy0yLjY0NCAwLTEuNjIgMi4wMjUtMi4zOTYgNC41MTEtMy4yOTYgMi45OTgtMS4wMTMgNC40ODktMi44MDEgNC40ODktNS4yNTQgMC0yLjkyNS0yLjM3NC00LjU1Ni01Ljk0LTQuNTU2LTEuODg0IDAtNC4yOTguOTc5LTQuOTMzIDEuNjMxbDEuNDk2IDEuNzQ0Yy42MDItLjMxIDEuNzQ0LTEuMTI1IDMuNDE0LTEuMTI1IDIuNTA0IDAgMy43MTMgMS4xMiAzLjcxMyAyLjMwNiAwIDEuNjI2LS45MTcgMi4zNzQtMy40NTQgMy4zMDJDOC44MTYgMTIgNi4zNzUgMTMuMzcyIDYuMzc1IDE1LjkyNmMwIDIuNjg5IDEuOTQ2IDUuMDc0IDYuMjgzIDUuMDc0IDEuNzcyIDAgMy44MjUtLjk3OSA0Ljk2Ny0yLjE4M3oiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNS45OTQgMTcuMDYzYy0uMTMuMzI2LTEuNyAxLjY4Ny0zLjMzNiAxLjY4Ny0yLjQzIDAtNC4wMzMtLjg4My00LjAzMy0yLjY0NCAwLTEuNjIgMi4wMjUtMi4zOTYgNC41MTEtMy4yOTYgMi45OTgtMS4wMTMgNC40ODktMi44MDEgNC40ODktNS4yNTQgMC0yLjkyNS0yLjM3NC00LjU1Ni01Ljk0LTQuNTU2LTEuODg0IDAtNC4yOTguOTc5LTQuOTMzIDEuNjMxbDEuNDk2IDEuNzQ0Yy42MDItLjMxIDEuNzQ0LTEuMTI1IDMuNDE0LTEuMTI1IDIuNTA0IDAgMy43MTMgMS4xMiAzLjcxMyAyLjMwNiAwIDEuNjI2LS45MTcgMi4zNzQtMy40NTQgMy4zMDJDOC44MTYgMTIgNi4zNzUgMTMuMzcyIDYuMzc1IDE1LjkyNmMwIDIuNjg5IDEuOTQ2IDUuMDc0IDYuMjgzIDUuMDc0IDEuNzcyIDAgMy44MjUtLjk3OSA0Ljk2Ny0yLjE4M3oiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTT0xPX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTUuNTUgMTYuNWMtLjExNS4yOS0xLjUxIDEuNS0yLjk2NSAxLjVDMTAuNDI1IDE4IDkgMTcuMjE1IDkgMTUuNjVjMC0xLjQ0IDEuOC0yLjEzIDQuMDEtMi45MyAyLjY2NS0uOSAzLjk5LTIuNDkgMy45OS00LjY3QzE3IDUuNDUgMTQuODkgNCAxMS43MiA0Yy0xLjY3NSAwLTMuODIuODctNC4zODUgMS40NUw4LjY2NSA3Yy41MzUtLjI3NSAxLjU1LTEgMy4wMzUtMSAyLjIyNSAwIDMuMy45OTUgMy4zIDIuMDUgMCAxLjQ0NS0uODE1IDIuMTEtMy4wNyAyLjkzNUM5LjE3IDEyIDcgMTMuMjIgNyAxNS40OSA3IDE3Ljg4IDguNzMgMjAgMTIuNTg1IDIwYzEuNTc1IDAgMy40LS44NyA0LjQxNS0xLjk0eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJTT0xPX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/SOLO
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSOLO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSOLO', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1pjvm6b._.js.map