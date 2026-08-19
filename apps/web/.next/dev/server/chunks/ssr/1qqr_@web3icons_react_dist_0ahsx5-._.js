module.exports = [
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWeb3Icon",
    ()=>createWeb3Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@types+node@24.13.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/BaseIcon.js [app-ssr] (ecmascript)");
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
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = defaultVariant, fallback, ...props }, ref)=>{
        const iconData = variants[variant];
        if (!iconData) {
            console.warn(`Icon "${name}" does not have variant "${variant}". ` + `Available variants: ${availableVariants.join(', ')}`);
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseIcon"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(element, elementProps, childElements);
    });
}
;
}),
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkKucoin.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkKucoin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#23AF91',
                d: 'm9.004 12 5.235 5.333 3.312-3.362a1.496 1.496 0 0 1 2.116 0c.577.593.577 1.56 0 2.152l-4.365 4.443a1.507 1.507 0 0 1-2.117 0L6.794 14.16v3.803c.012.814-.623 1.505-1.447 1.52-.828-.01-1.458-.702-1.447-1.52V6.036c0-.84.616-1.52 1.447-1.52.82 0 1.447.68 1.447 1.52V9.84l6.392-6.405a1.506 1.506 0 0 1 2.117 0l4.354 4.443a1.55 1.55 0 0 1 0 2.151 1.495 1.495 0 0 1-2.106 0l-3.312-3.362zm5.245-1.521c.82 0 1.489.68 1.489 1.521s-.669 1.521-1.489 1.521-1.499-.68-1.499-1.521.67-1.521 1.5-1.521'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm9.004 12 5.235 5.333 3.311-3.362a1.496 1.496 0 0 1 2.117 0c.577.593.577 1.56 0 2.152l-4.365 4.443a1.507 1.507 0 0 1-2.117 0L6.794 14.16v3.803c.012.814-.623 1.505-1.447 1.52-.828-.01-1.458-.702-1.447-1.52V6.036c0-.84.616-1.52 1.447-1.52.82 0 1.447.68 1.447 1.52V9.84l6.392-6.405a1.506 1.506 0 0 1 2.117 0l4.354 4.443a1.55 1.55 0 0 1 0 2.151 1.495 1.495 0 0 1-2.107 0l-3.31-3.362zm5.245-1.521c.82 0 1.489.68 1.489 1.521s-.669 1.521-1.489 1.521-1.499-.68-1.499-1.521.67-1.521 1.5-1.521'
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
                        d: 'm9.337 12 4.653 4.74 2.944-2.988a1.33 1.33 0 0 1 1.881 0 1.38 1.38 0 0 1 0 1.913l-3.88 3.949a1.34 1.34 0 0 1-1.882 0l-5.68-5.693v3.38a1.323 1.323 0 0 1-1.287 1.352c-.736-.01-1.296-.625-1.286-1.352V6.7c0-.747.548-1.352 1.286-1.352.73 0 1.286.605 1.286 1.352v3.38l5.682-5.693a1.34 1.34 0 0 1 1.881 0l3.87 3.95a1.38 1.38 0 0 1 0 1.912 1.33 1.33 0 0 1-1.871 0l-2.944-2.99zm4.662-1.352c.73 0 1.323.605 1.323 1.352s-.594 1.352-1.323 1.352-1.332-.605-1.332-1.352.594-1.352 1.332-1.352'
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
 * @component @name NetworkKucoin
 * @description Web3Icon for NetworkKucoin
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMyM0FGOTEiIGQ9Im05LjAwNCAxMiA1LjIzNSA1LjMzMyAzLjMxMi0zLjM2MmExLjQ5NiAxLjQ5NiAwIDAgMSAyLjExNiAwYy41NzcuNTkzLjU3NyAxLjU2IDAgMi4xNTJsLTQuMzY1IDQuNDQzYTEuNTA3IDEuNTA3IDAgMCAxLTIuMTE3IDBMNi43OTQgMTQuMTZ2My44MDNjLjAxMi44MTQtLjYyMyAxLjUwNS0xLjQ0NyAxLjUyLS44MjgtLjAxLTEuNDU4LS43MDItMS40NDctMS41MlY2LjAzNmMwLS44NC42MTYtMS41MiAxLjQ0Ny0xLjUyLjgyIDAgMS40NDcuNjggMS40NDcgMS41MlY5Ljg0bDYuMzkyLTYuNDA1YTEuNTA2IDEuNTA2IDAgMCAxIDIuMTE3IDBsNC4zNTQgNC40NDNhMS41NSAxLjU1IDAgMCAxIDAgMi4xNTEgMS40OTUgMS40OTUgMCAwIDEtMi4xMDYgMGwtMy4zMTItMy4zNjJ6bTUuMjQ1LTEuNTIxYy44MiAwIDEuNDg5LjY4IDEuNDg5IDEuNTIxcy0uNjY5IDEuNTIxLTEuNDg5IDEuNTIxLTEuNDk5LS42OC0xLjQ5OS0xLjUyMS42Ny0xLjUyMSAxLjUtMS41MjEiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im05LjAwNCAxMiA1LjIzNSA1LjMzMyAzLjMxMS0zLjM2MmExLjQ5NiAxLjQ5NiAwIDAgMSAyLjExNyAwYy41NzcuNTkzLjU3NyAxLjU2IDAgMi4xNTJsLTQuMzY1IDQuNDQzYTEuNTA3IDEuNTA3IDAgMCAxLTIuMTE3IDBMNi43OTQgMTQuMTZ2My44MDNjLjAxMi44MTQtLjYyMyAxLjUwNS0xLjQ0NyAxLjUyLS44MjgtLjAxLTEuNDU4LS43MDItMS40NDctMS41MlY2LjAzNmMwLS44NC42MTYtMS41MiAxLjQ0Ny0xLjUyLjgyIDAgMS40NDcuNjggMS40NDcgMS41MlY5Ljg0bDYuMzkyLTYuNDA1YTEuNTA2IDEuNTA2IDAgMCAxIDIuMTE3IDBsNC4zNTQgNC40NDNhMS41NSAxLjU1IDAgMCAxIDAgMi4xNTEgMS40OTUgMS40OTUgMCAwIDEtMi4xMDcgMGwtMy4zMS0zLjM2MnptNS4yNDUtMS41MjFjLjgyIDAgMS40ODkuNjggMS40ODkgMS41MjFzLS42NjkgMS41MjEtMS40ODkgMS41MjEtMS40OTktLjY4LTEuNDk5LTEuNTIxLjY3LTEuNTIxIDEuNS0xLjUyMSIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNrdWNvaW5fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMjNBRjkxIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im05LjMzNyAxMiA0LjY1MyA0Ljc0IDIuOTQ0LTIuOTg4YTEuMzMgMS4zMyAwIDAgMSAxLjg4MSAwIDEuMzggMS4zOCAwIDAgMSAwIDEuOTEzbC0zLjg4IDMuOTQ5YTEuMzQgMS4zNCAwIDAgMS0xLjg4MiAwbC01LjY4LTUuNjkzdjMuMzhhMS4zMjMgMS4zMjMgMCAwIDEtMS4yODcgMS4zNTJjLS43MzYtLjAxLTEuMjk2LS42MjUtMS4yODYtMS4zNTJWNi43YzAtLjc0Ny41NDgtMS4zNTIgMS4yODYtMS4zNTIuNzMgMCAxLjI4Ni42MDUgMS4yODYgMS4zNTJ2My4zOGw1LjY4Mi01LjY5M2ExLjM0IDEuMzQgMCAwIDEgMS44ODEgMGwzLjg3IDMuOTVhMS4zOCAxLjM4IDAgMCAxIDAgMS45MTIgMS4zMyAxLjMzIDAgMCAxLTEuODcxIDBsLTIuOTQ0LTIuOTl6bTQuNjYyLTEuMzUyYy43MyAwIDEuMzIzLjYwNSAxLjMyMyAxLjM1MnMtLjU5NCAxLjM1Mi0xLjMyMyAxLjM1Mi0xLjMzMi0uNjA1LTEuMzMyLTEuMzUyLjU5NC0xLjM1MiAxLjMzMi0xLjM1MiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJrdWNvaW5fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/networks/kucoin
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkKucoin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkKucoin', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0ahsx5-._.js.map