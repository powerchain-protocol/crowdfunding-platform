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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPOKT.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPOKT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#1E8AED',
                d: 'M7.51 11.371c0-3.727 3.34-4.602 5.613-4.411V3.087a8.981 8.981 0 0 0-3.93 17.445v-3.351a1.8 1.8 0 0 1 1.825-1.813h1.027c2.464 0 2.762-2.318 2.762-2.74 0-.285-.118-.55-.253-.841a4 4 0 0 1-.19-.45c-.141-.392.055-.751.179-.88l.904-.702a4.98 4.98 0 0 1 1.044 2.874c0 3.727-3.34 4.603-5.614 4.412v3.873a8.98 8.98 0 0 0 8.95-13.346 8.98 8.98 0 0 0-5.02-4.1V6.82a1.804 1.804 0 0 1-1.825 1.813h-1.027c-2.464 0-2.762 2.319-2.762 2.74 0 .286.118.55.253.841.067.14.135.287.19.45a.9.9 0 0 1-.179.88l-.903.702a4.98 4.98 0 0 1-1.044-2.874'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M7.51 11.371c0-3.727 3.34-4.602 5.613-4.411V3.087a8.981 8.981 0 0 0-3.93 17.445v-3.351a1.8 1.8 0 0 1 1.825-1.813h1.027c2.464 0 2.762-2.318 2.762-2.74 0-.285-.118-.55-.253-.841a4 4 0 0 1-.19-.45c-.141-.392.055-.751.179-.88l.903-.702a4.98 4.98 0 0 1 1.045 2.874c0 3.727-3.34 4.603-5.614 4.412v3.873a8.98 8.98 0 0 0 8.95-13.346 8.98 8.98 0 0 0-5.02-4.1V6.82a1.804 1.804 0 0 1-1.825 1.813h-1.027c-2.464 0-2.762 2.319-2.762 2.74 0 .286.118.55.253.841.067.14.135.287.19.45a.9.9 0 0 1-.179.88l-.903.702a4.98 4.98 0 0 1-1.044-2.874'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#POKT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#1E8AED',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M8.008 11.441c0-3.313 2.97-4.091 4.99-3.921V4.077a7.983 7.983 0 0 0-3.493 15.507v-2.979a1.6 1.6 0 0 1 1.622-1.611h.913c2.19 0 2.455-2.06 2.455-2.435 0-.254-.105-.489-.225-.748a4 4 0 0 1-.17-.4.8.8 0 0 1 .16-.783l.803-.624a4.42 4.42 0 0 1 .928 2.555c0 3.313-2.968 4.091-4.989 3.922v3.442A7.982 7.982 0 0 0 18.957 8.06a7.98 7.98 0 0 0-4.462-3.644v2.979a1.6 1.6 0 0 1-1.622 1.612h-.913c-2.19 0-2.455 2.06-2.455 2.434 0 .255.105.49.225.749.06.125.12.254.17.399a.8.8 0 0 1-.16.783l-.803.624a4.43 4.43 0 0 1-.929-2.555'
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
                        id: 'POKT__a'
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
 * @component @name TokenPOKT
 * @description Web3Icon for TokenPOKT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxRThBRUQiIGQ9Ik03LjUxIDExLjM3MWMwLTMuNzI3IDMuMzQtNC42MDIgNS42MTMtNC40MTFWMy4wODdhOC45ODEgOC45ODEgMCAwIDAtMy45MyAxNy40NDV2LTMuMzUxYTEuOCAxLjggMCAwIDEgMS44MjUtMS44MTNoMS4wMjdjMi40NjQgMCAyLjc2Mi0yLjMxOCAyLjc2Mi0yLjc0IDAtLjI4NS0uMTE4LS41NS0uMjUzLS44NDFhNCA0IDAgMCAxLS4xOS0uNDVjLS4xNDEtLjM5Mi4wNTUtLjc1MS4xNzktLjg4bC45MDQtLjcwMmE0Ljk4IDQuOTggMCAwIDEgMS4wNDQgMi44NzRjMCAzLjcyNy0zLjM0IDQuNjAzLTUuNjE0IDQuNDEydjMuODczYTguOTggOC45OCAwIDAgMCA4Ljk1LTEzLjM0NiA4Ljk4IDguOTggMCAwIDAtNS4wMi00LjFWNi44MmExLjgwNCAxLjgwNCAwIDAgMS0xLjgyNSAxLjgxM2gtMS4wMjdjLTIuNDY0IDAtMi43NjIgMi4zMTktMi43NjIgMi43NCAwIC4yODYuMTE4LjU1LjI1My44NDEuMDY3LjE0LjEzNS4yODcuMTkuNDVhLjkuOSAwIDAgMS0uMTc5Ljg4bC0uOTAzLjcwMmE0Ljk4IDQuOTggMCAwIDEtMS4wNDQtMi44NzQiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03LjUxIDExLjM3MWMwLTMuNzI3IDMuMzQtNC42MDIgNS42MTMtNC40MTFWMy4wODdhOC45ODEgOC45ODEgMCAwIDAtMy45MyAxNy40NDV2LTMuMzUxYTEuOCAxLjggMCAwIDEgMS44MjUtMS44MTNoMS4wMjdjMi40NjQgMCAyLjc2Mi0yLjMxOCAyLjc2Mi0yLjc0IDAtLjI4NS0uMTE4LS41NS0uMjUzLS44NDFhNCA0IDAgMCAxLS4xOS0uNDVjLS4xNDEtLjM5Mi4wNTUtLjc1MS4xNzktLjg4bC45MDMtLjcwMmE0Ljk4IDQuOTggMCAwIDEgMS4wNDUgMi44NzRjMCAzLjcyNy0zLjM0IDQuNjAzLTUuNjE0IDQuNDEydjMuODczYTguOTggOC45OCAwIDAgMCA4Ljk1LTEzLjM0NiA4Ljk4IDguOTggMCAwIDAtNS4wMi00LjFWNi44MmExLjgwNCAxLjgwNCAwIDAgMS0xLjgyNSAxLjgxM2gtMS4wMjdjLTIuNDY0IDAtMi43NjIgMi4zMTktMi43NjIgMi43NCAwIC4yODYuMTE4LjU1LjI1My44NDEuMDY3LjE0LjEzNS4yODcuMTkuNDVhLjkuOSAwIDAgMS0uMTc5Ljg4bC0uOTAzLjcwMmE0Ljk4IDQuOTggMCAwIDEtMS4wNDQtMi44NzQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQT0tUX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzFFOEFFRCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNOC4wMDggMTEuNDQxYzAtMy4zMTMgMi45Ny00LjA5MSA0Ljk5LTMuOTIxVjQuMDc3YTcuOTgzIDcuOTgzIDAgMCAwLTMuNDkzIDE1LjUwN3YtMi45NzlhMS42IDEuNiAwIDAgMSAxLjYyMi0xLjYxMWguOTEzYzIuMTkgMCAyLjQ1NS0yLjA2IDIuNDU1LTIuNDM1IDAtLjI1NC0uMTA1LS40ODktLjIyNS0uNzQ4YTQgNCAwIDAgMS0uMTctLjQuOC44IDAgMCAxIC4xNi0uNzgzbC44MDMtLjYyNGE0LjQyIDQuNDIgMCAwIDEgLjkyOCAyLjU1NWMwIDMuMzEzLTIuOTY4IDQuMDkxLTQuOTg5IDMuOTIydjMuNDQyQTcuOTgyIDcuOTgyIDAgMCAwIDE4Ljk1NyA4LjA2YTcuOTggNy45OCAwIDAgMC00LjQ2Mi0zLjY0NHYyLjk3OWExLjYgMS42IDAgMCAxLTEuNjIyIDEuNjEyaC0uOTEzYy0yLjE5IDAtMi40NTUgMi4wNi0yLjQ1NSAyLjQzNCAwIC4yNTUuMTA1LjQ5LjIyNS43NDkuMDYuMTI1LjEyLjI1NC4xNy4zOTlhLjguOCAwIDAgMS0uMTYuNzgzbC0uODAzLjYyNGE0LjQzIDQuNDMgMCAwIDEtLjkyOS0yLjU1NSIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJQT0tUX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/POKT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPOKT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPOKT', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0n46zt1._.js.map