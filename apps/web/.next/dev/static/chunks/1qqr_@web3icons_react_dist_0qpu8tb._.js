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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenBLT.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenBLT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#616AE9',
                d: 'M11.635 3.104c-.92.745-2.333 2.336-2.333 4.208a2.615 2.615 0 0 0 2.626 2.604 2.615 2.615 0 0 0 2.625-2.604c0-1.872-1.412-3.463-2.333-4.208a.46.46 0 0 0-.585 0m.293 10.98a2.615 2.615 0 0 0-2.626 2.604c0 1.872 1.412 3.463 2.333 4.208a.46.46 0 0 0 .585 0c.921-.745 2.333-2.336 2.333-4.208a2.615 2.615 0 0 0-2.625-2.604m4.725.52A2.616 2.616 0 0 1 14.028 12a2.616 2.616 0 0 1 2.625-2.605c1.887 0 3.491 1.4 4.243 2.315a.454.454 0 0 1 0 .58c-.752.914-2.356 2.315-4.243 2.315M3.104 11.71c.752-.915 2.356-2.315 4.243-2.315A2.616 2.616 0 0 1 9.972 12a2.616 2.616 0 0 1-2.625 2.605c-1.887 0-3.491-1.4-4.243-2.315a.454.454 0 0 1 0-.58'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.635 3.104c-.92.745-2.333 2.336-2.333 4.208a2.615 2.615 0 0 0 2.626 2.604 2.615 2.615 0 0 0 2.625-2.604c0-1.872-1.412-3.463-2.333-4.208a.46.46 0 0 0-.585 0m.293 10.98a2.615 2.615 0 0 0-2.626 2.604c0 1.872 1.412 3.463 2.333 4.208a.46.46 0 0 0 .585 0c.921-.745 2.333-2.336 2.333-4.208a2.615 2.615 0 0 0-2.625-2.604m4.725.52A2.616 2.616 0 0 1 14.028 12a2.616 2.616 0 0 1 2.625-2.605c1.887 0 3.491 1.4 4.243 2.315a.45.45 0 0 1 0 .58c-.752.914-2.356 2.315-4.243 2.315M3.104 11.71c.752-.915 2.356-2.315 4.243-2.315A2.616 2.616 0 0 1 9.972 12a2.616 2.616 0 0 1-2.625 2.605c-1.887 0-3.491-1.4-4.243-2.316a.45.45 0 0 1 0-.579'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#BLT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#616AE9',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.676 4.092C10.857 4.755 9.6 6.17 9.6 7.832a2.325 2.325 0 0 0 2.335 2.316 2.325 2.325 0 0 0 2.334-2.316c0-1.663-1.255-3.077-2.075-3.74a.41.41 0 0 0-.52 0m.26 9.76A2.325 2.325 0 0 0 9.6 16.167c0 1.664 1.256 3.078 2.075 3.74a.41.41 0 0 0 .52 0c.819-.662 2.074-2.076 2.074-3.74a2.325 2.325 0 0 0-2.334-2.315m4.2.463A2.325 2.325 0 0 1 13.802 12a2.325 2.325 0 0 1 2.334-2.315c1.678 0 3.103 1.244 3.771 2.057a.4.4 0 0 1 0 .515c-.668.813-2.094 2.058-3.77 2.058M4.093 11.743c.668-.814 2.094-2.058 3.77-2.058A2.325 2.325 0 0 1 10.199 12a2.325 2.325 0 0 1-2.334 2.315c-1.678 0-3.103-1.245-3.771-2.058a.4.4 0 0 1 0-.514'
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
                        id: 'BLT__a'
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
 * @component @name TokenBLT
 * @description Web3Icon for TokenBLT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM2MTZBRTkiIGQ9Ik0xMS42MzUgMy4xMDRjLS45Mi43NDUtMi4zMzMgMi4zMzYtMi4zMzMgNC4yMDhhMi42MTUgMi42MTUgMCAwIDAgMi42MjYgMi42MDQgMi42MTUgMi42MTUgMCAwIDAgMi42MjUtMi42MDRjMC0xLjg3Mi0xLjQxMi0zLjQ2My0yLjMzMy00LjIwOGEuNDYuNDYgMCAwIDAtLjU4NSAwbS4yOTMgMTAuOThhMi42MTUgMi42MTUgMCAwIDAtMi42MjYgMi42MDRjMCAxLjg3MiAxLjQxMiAzLjQ2MyAyLjMzMyA0LjIwOGEuNDYuNDYgMCAwIDAgLjU4NSAwYy45MjEtLjc0NSAyLjMzMy0yLjMzNiAyLjMzMy00LjIwOGEyLjYxNSAyLjYxNSAwIDAgMC0yLjYyNS0yLjYwNG00LjcyNS41MkEyLjYxNiAyLjYxNiAwIDAgMSAxNC4wMjggMTJhMi42MTYgMi42MTYgMCAwIDEgMi42MjUtMi42MDVjMS44ODcgMCAzLjQ5MSAxLjQgNC4yNDMgMi4zMTVhLjQ1NC40NTQgMCAwIDEgMCAuNThjLS43NTIuOTE0LTIuMzU2IDIuMzE1LTQuMjQzIDIuMzE1TTMuMTA0IDExLjcxYy43NTItLjkxNSAyLjM1Ni0yLjMxNSA0LjI0My0yLjMxNUEyLjYxNiAyLjYxNiAwIDAgMSA5Ljk3MiAxMmEyLjYxNiAyLjYxNiAwIDAgMS0yLjYyNSAyLjYwNWMtMS44ODcgMC0zLjQ5MS0xLjQtNC4yNDMtMi4zMTVhLjQ1NC40NTQgMCAwIDEgMC0uNTgiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS42MzUgMy4xMDRjLS45Mi43NDUtMi4zMzMgMi4zMzYtMi4zMzMgNC4yMDhhMi42MTUgMi42MTUgMCAwIDAgMi42MjYgMi42MDQgMi42MTUgMi42MTUgMCAwIDAgMi42MjUtMi42MDRjMC0xLjg3Mi0xLjQxMi0zLjQ2My0yLjMzMy00LjIwOGEuNDYuNDYgMCAwIDAtLjU4NSAwbS4yOTMgMTAuOThhMi42MTUgMi42MTUgMCAwIDAtMi42MjYgMi42MDRjMCAxLjg3MiAxLjQxMiAzLjQ2MyAyLjMzMyA0LjIwOGEuNDYuNDYgMCAwIDAgLjU4NSAwYy45MjEtLjc0NSAyLjMzMy0yLjMzNiAyLjMzMy00LjIwOGEyLjYxNSAyLjYxNSAwIDAgMC0yLjYyNS0yLjYwNG00LjcyNS41MkEyLjYxNiAyLjYxNiAwIDAgMSAxNC4wMjggMTJhMi42MTYgMi42MTYgMCAwIDEgMi42MjUtMi42MDVjMS44ODcgMCAzLjQ5MSAxLjQgNC4yNDMgMi4zMTVhLjQ1LjQ1IDAgMCAxIDAgLjU4Yy0uNzUyLjkxNC0yLjM1NiAyLjMxNS00LjI0MyAyLjMxNU0zLjEwNCAxMS43MWMuNzUyLS45MTUgMi4zNTYtMi4zMTUgNC4yNDMtMi4zMTVBMi42MTYgMi42MTYgMCAwIDEgOS45NzIgMTJhMi42MTYgMi42MTYgMCAwIDEtMi42MjUgMi42MDVjLTEuODg3IDAtMy40OTEtMS40LTQuMjQzLTIuMzE2YS40NS40NSAwIDAgMSAwLS41NzkiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNCTFRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNjE2QUU5IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS42NzYgNC4wOTJDMTAuODU3IDQuNzU1IDkuNiA2LjE3IDkuNiA3LjgzMmEyLjMyNSAyLjMyNSAwIDAgMCAyLjMzNSAyLjMxNiAyLjMyNSAyLjMyNSAwIDAgMCAyLjMzNC0yLjMxNmMwLTEuNjYzLTEuMjU1LTMuMDc3LTIuMDc1LTMuNzRhLjQxLjQxIDAgMCAwLS41MiAwbS4yNiA5Ljc2QTIuMzI1IDIuMzI1IDAgMCAwIDkuNiAxNi4xNjdjMCAxLjY2NCAxLjI1NiAzLjA3OCAyLjA3NSAzLjc0YS40MS40MSAwIDAgMCAuNTIgMGMuODE5LS42NjIgMi4wNzQtMi4wNzYgMi4wNzQtMy43NGEyLjMyNSAyLjMyNSAwIDAgMC0yLjMzNC0yLjMxNW00LjIuNDYzQTIuMzI1IDIuMzI1IDAgMCAxIDEzLjgwMiAxMmEyLjMyNSAyLjMyNSAwIDAgMSAyLjMzNC0yLjMxNWMxLjY3OCAwIDMuMTAzIDEuMjQ0IDMuNzcxIDIuMDU3YS40LjQgMCAwIDEgMCAuNTE1Yy0uNjY4LjgxMy0yLjA5NCAyLjA1OC0zLjc3IDIuMDU4TTQuMDkzIDExLjc0M2MuNjY4LS44MTQgMi4wOTQtMi4wNTggMy43Ny0yLjA1OEEyLjMyNSAyLjMyNSAwIDAgMSAxMC4xOTkgMTJhMi4zMjUgMi4zMjUgMCAwIDEtMi4zMzQgMi4zMTVjLTEuNjc4IDAtMy4xMDMtMS4yNDUtMy43NzEtMi4wNThhLjQuNCAwIDAgMSAwLS41MTQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQkxUX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/BLT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenBLT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenBLT', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0qpu8tb._.js.map