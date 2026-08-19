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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/exchanges/ExchangeKucoin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ExchangeKucoin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#23AF91',
                d: 'm8.978 12.002 5.331 5.332 3.365-3.365a1.522 1.522 0 0 1 2.15 2.15l-4.44 4.441a1.533 1.533 0 0 1-2.15 0l-6.407-6.408v3.809a1.522 1.522 0 0 1-3.045 0V6.038a1.522 1.522 0 0 1 3.045 0v3.81l6.406-6.408a1.53 1.53 0 0 1 2.15 0l4.444 4.441a1.522 1.522 0 0 1-2.15 2.15l-3.365-3.365zm5.334-1.524a1.524 1.524 0 1 0-.002 3.05 1.524 1.524 0 0 0 .002-3.05',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm8.978 12.002 5.331 5.332 3.365-3.365a1.522 1.522 0 0 1 2.15 2.15l-4.44 4.441a1.533 1.533 0 0 1-2.15 0l-6.407-6.408v3.809a1.522 1.522 0 0 1-3.045 0V6.038a1.522 1.522 0 0 1 3.045 0v3.81l6.406-6.408a1.53 1.53 0 0 1 2.15 0l4.444 4.441a1.522 1.522 0 0 1-2.15 2.15l-3.365-3.365zm5.334-1.524a1.524 1.524 0 1 0-.002 3.05 1.524 1.524 0 0 0 .002-3.05',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#kucoin__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#23AF91',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm9.314 12.002 4.739 4.74 2.99-2.992a1.353 1.353 0 0 1 1.912 1.91l-3.948 3.949c-.53.521-1.38.521-1.91 0l-5.695-5.697v3.386a1.353 1.353 0 0 1-2.706 0V6.701a1.353 1.353 0 0 1 2.706 0v3.385l5.694-5.695a1.36 1.36 0 0 1 1.91 0l3.95 3.948a1.353 1.353 0 0 1-1.91 1.91l-2.991-2.99zm4.74-1.355a1.355 1.355 0 1 0 0 2.71 1.355 1.355 0 0 0 0-2.71',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
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
                        id: 'kucoin__a'
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
 * @component @name ExchangeKucoin
 * @description Web3Icon for ExchangeKucoin
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMyM0FGOTEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTguOTc4IDEyLjAwMiA1LjMzMSA1LjMzMiAzLjM2NS0zLjM2NWExLjUyMiAxLjUyMiAwIDAgMSAyLjE1IDIuMTVsLTQuNDQgNC40NDFhMS41MzMgMS41MzMgMCAwIDEtMi4xNSAwbC02LjQwNy02LjQwOHYzLjgwOWExLjUyMiAxLjUyMiAwIDAgMS0zLjA0NSAwVjYuMDM4YTEuNTIyIDEuNTIyIDAgMCAxIDMuMDQ1IDB2My44MWw2LjQwNi02LjQwOGExLjUzIDEuNTMgMCAwIDEgMi4xNSAwbDQuNDQ0IDQuNDQxYTEuNTIyIDEuNTIyIDAgMCAxLTIuMTUgMi4xNWwtMy4zNjUtMy4zNjV6bTUuMzM0LTEuNTI0YTEuNTI0IDEuNTI0IDAgMSAwLS4wMDIgMy4wNSAxLjUyNCAxLjUyNCAwIDAgMCAuMDAyLTMuMDUiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTguOTc4IDEyLjAwMiA1LjMzMSA1LjMzMiAzLjM2NS0zLjM2NWExLjUyMiAxLjUyMiAwIDAgMSAyLjE1IDIuMTVsLTQuNDQgNC40NDFhMS41MzMgMS41MzMgMCAwIDEtMi4xNSAwbC02LjQwNy02LjQwOHYzLjgwOWExLjUyMiAxLjUyMiAwIDAgMS0zLjA0NSAwVjYuMDM4YTEuNTIyIDEuNTIyIDAgMCAxIDMuMDQ1IDB2My44MWw2LjQwNi02LjQwOGExLjUzIDEuNTMgMCAwIDEgMi4xNSAwbDQuNDQ0IDQuNDQxYTEuNTIyIDEuNTIyIDAgMCAxLTIuMTUgMi4xNWwtMy4zNjUtMy4zNjV6bTUuMzM0LTEuNTI0YTEuNTI0IDEuNTI0IDAgMSAwLS4wMDIgMy4wNSAxLjUyNCAxLjUyNCAwIDAgMCAuMDAyLTMuMDUiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNrdWNvaW5fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMjNBRjkxIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTkuMzE0IDEyLjAwMiA0LjczOSA0Ljc0IDIuOTktMi45OTJhMS4zNTMgMS4zNTMgMCAwIDEgMS45MTIgMS45MWwtMy45NDggMy45NDljLS41My41MjEtMS4zOC41MjEtMS45MSAwbC01LjY5NS01LjY5N3YzLjM4NmExLjM1MyAxLjM1MyAwIDAgMS0yLjcwNiAwVjYuNzAxYTEuMzUzIDEuMzUzIDAgMCAxIDIuNzA2IDB2My4zODVsNS42OTQtNS42OTVhMS4zNiAxLjM2IDAgMCAxIDEuOTEgMGwzLjk1IDMuOTQ4YTEuMzUzIDEuMzUzIDAgMCAxLTEuOTEgMS45MWwtMi45OTEtMi45OXptNC43NC0xLjM1NWExLjM1NSAxLjM1NSAwIDEgMCAwIDIuNzEgMS4zNTUgMS4zNTUgMCAwIDAgMC0yLjcxIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0ia3Vjb2luX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/exchanges/kucoin
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const ExchangeKucoin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('ExchangeKucoin', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0rw5wfk._.js.map