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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSTRD.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSTRD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#E91179',
                d: 'M14.932 8.496c-.124-1.356-1.44-2.12-2.71-2.12-1.052 0-2.447.579-2.47 1.777-.039.91.71 1.35 1.463 1.62.326.112.697.213 1.102.297l1.535.343q1.324.29 2.334.754c.675.315 1.249.692 1.704 1.125.455.417.815.927 1.057 1.495q.356.846.366 1.901a4.84 4.84 0 0 1-.855 2.851 5.3 5.3 0 0 1-2.43 1.822 10.2 10.2 0 0 1-3.812.636c-3.11 0-6.979-1.53-7.53-5.309l4.218-.753c.112 1.816 1.675 2.688 3.261 2.688 1.243 0 2.62-.59 2.643-1.94-.01-.799-.393-1.17-1.124-1.463q-.631-.27-1.609-.489l-1.867-.433c-1.54-.348-2.755-.905-3.65-1.687a3.98 3.98 0 0 1-1.32-3.166 4.65 4.65 0 0 1 .888-2.851 5.9 5.9 0 0 1 2.48-1.912 9 9 0 0 1 3.616-.68 7.44 7.44 0 0 1 6.72 4.307z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M14.932 8.496c-.124-1.356-1.44-2.12-2.71-2.12-1.052 0-2.447.579-2.47 1.777-.039.91.71 1.35 1.463 1.62.326.112.697.213 1.102.297l1.535.343q1.324.29 2.334.754c.675.315 1.249.692 1.704 1.125.455.417.815.927 1.057 1.495q.356.846.366 1.901a4.84 4.84 0 0 1-.855 2.851 5.3 5.3 0 0 1-2.43 1.822 10.2 10.2 0 0 1-3.812.636c-3.11 0-6.979-1.53-7.53-5.309l4.218-.753c.112 1.816 1.675 2.688 3.261 2.688 1.243 0 2.62-.59 2.643-1.94-.01-.799-.393-1.17-1.124-1.463q-.631-.27-1.609-.489l-1.867-.433c-1.54-.348-2.755-.905-3.65-1.687a3.98 3.98 0 0 1-1.32-3.166 4.65 4.65 0 0 1 .888-2.851 5.9 5.9 0 0 1 2.48-1.912 9 9 0 0 1 3.616-.68 7.44 7.44 0 0 1 6.72 4.307z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#STRD__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#E91179',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M14.606 8.885c-.11-1.205-1.28-1.884-2.41-1.884-.934 0-2.174.515-2.194 1.58-.035.809.63 1.199 1.3 1.439.29.1.62.19.98.265l1.364.305q1.176.256 2.075.67c.6.28 1.11.614 1.514 1 .405.37.725.824.94 1.329q.316.751.325 1.69a4.3 4.3 0 0 1-.76 2.534 4.7 4.7 0 0 1-2.16 1.62 9.1 9.1 0 0 1-3.388.564c-2.765 0-6.204-1.36-6.693-4.719l3.749-.67c.1 1.615 1.489 2.39 2.899 2.39 1.104 0 2.33-.525 2.35-1.725-.01-.71-.35-1.04-1-1.3a8.4 8.4 0 0 0-1.43-.434l-1.66-.385c-1.37-.31-2.45-.805-3.244-1.5A3.54 3.54 0 0 1 5.988 8.84c-.022-.908.255-1.8.79-2.534a5.23 5.23 0 0 1 2.205-1.7 8 8 0 0 1 3.214-.605 6.61 6.61 0 0 1 5.973 3.83z'
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
                        id: 'STRD__a'
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
 * @component @name TokenSTRD
 * @description Web3Icon for TokenSTRD
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNFOTExNzkiIGQ9Ik0xNC45MzIgOC40OTZjLS4xMjQtMS4zNTYtMS40NC0yLjEyLTIuNzEtMi4xMi0xLjA1MiAwLTIuNDQ3LjU3OS0yLjQ3IDEuNzc3LS4wMzkuOTEuNzEgMS4zNSAxLjQ2MyAxLjYyLjMyNi4xMTIuNjk3LjIxMyAxLjEwMi4yOTdsMS41MzUuMzQzcTEuMzI0LjI5IDIuMzM0Ljc1NGMuNjc1LjMxNSAxLjI0OS42OTIgMS43MDQgMS4xMjUuNDU1LjQxNy44MTUuOTI3IDEuMDU3IDEuNDk1cS4zNTYuODQ2LjM2NiAxLjkwMWE0Ljg0IDQuODQgMCAwIDEtLjg1NSAyLjg1MSA1LjMgNS4zIDAgMCAxLTIuNDMgMS44MjIgMTAuMiAxMC4yIDAgMCAxLTMuODEyLjYzNmMtMy4xMSAwLTYuOTc5LTEuNTMtNy41My01LjMwOWw0LjIxOC0uNzUzYy4xMTIgMS44MTYgMS42NzUgMi42ODggMy4yNjEgMi42ODggMS4yNDMgMCAyLjYyLS41OSAyLjY0My0xLjk0LS4wMS0uNzk5LS4zOTMtMS4xNy0xLjEyNC0xLjQ2M3EtLjYzMS0uMjctMS42MDktLjQ4OWwtMS44NjctLjQzM2MtMS41NC0uMzQ4LTIuNzU1LS45MDUtMy42NS0xLjY4N2EzLjk4IDMuOTggMCAwIDEtMS4zMi0zLjE2NiA0LjY1IDQuNjUgMCAwIDEgLjg4OC0yLjg1MSA1LjkgNS45IDAgMCAxIDIuNDgtMS45MTIgOSA5IDAgMCAxIDMuNjE2LS42OCA3LjQ0IDcuNDQgMCAwIDEgNi43MiA0LjMwN3oiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC45MzIgOC40OTZjLS4xMjQtMS4zNTYtMS40NC0yLjEyLTIuNzEtMi4xMi0xLjA1MiAwLTIuNDQ3LjU3OS0yLjQ3IDEuNzc3LS4wMzkuOTEuNzEgMS4zNSAxLjQ2MyAxLjYyLjMyNi4xMTIuNjk3LjIxMyAxLjEwMi4yOTdsMS41MzUuMzQzcTEuMzI0LjI5IDIuMzM0Ljc1NGMuNjc1LjMxNSAxLjI0OS42OTIgMS43MDQgMS4xMjUuNDU1LjQxNy44MTUuOTI3IDEuMDU3IDEuNDk1cS4zNTYuODQ2LjM2NiAxLjkwMWE0Ljg0IDQuODQgMCAwIDEtLjg1NSAyLjg1MSA1LjMgNS4zIDAgMCAxLTIuNDMgMS44MjIgMTAuMiAxMC4yIDAgMCAxLTMuODEyLjYzNmMtMy4xMSAwLTYuOTc5LTEuNTMtNy41My01LjMwOWw0LjIxOC0uNzUzYy4xMTIgMS44MTYgMS42NzUgMi42ODggMy4yNjEgMi42ODggMS4yNDMgMCAyLjYyLS41OSAyLjY0My0xLjk0LS4wMS0uNzk5LS4zOTMtMS4xNy0xLjEyNC0xLjQ2M3EtLjYzMS0uMjctMS42MDktLjQ4OWwtMS44NjctLjQzM2MtMS41NC0uMzQ4LTIuNzU1LS45MDUtMy42NS0xLjY4N2EzLjk4IDMuOTggMCAwIDEtMS4zMi0zLjE2NiA0LjY1IDQuNjUgMCAwIDEgLjg4OC0yLjg1MSA1LjkgNS45IDAgMCAxIDIuNDgtMS45MTIgOSA5IDAgMCAxIDMuNjE2LS42OCA3LjQ0IDcuNDQgMCAwIDEgNi43MiA0LjMwN3oiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTVFJEX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0U5MTE3OSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTQuNjA2IDguODg1Yy0uMTEtMS4yMDUtMS4yOC0xLjg4NC0yLjQxLTEuODg0LS45MzQgMC0yLjE3NC41MTUtMi4xOTQgMS41OC0uMDM1LjgwOS42MyAxLjE5OSAxLjMgMS40MzkuMjkuMS42Mi4xOS45OC4yNjVsMS4zNjQuMzA1cTEuMTc2LjI1NiAyLjA3NS42N2MuNi4yOCAxLjExLjYxNCAxLjUxNCAxIC40MDUuMzcuNzI1LjgyNC45NCAxLjMyOXEuMzE2Ljc1MS4zMjUgMS42OWE0LjMgNC4zIDAgMCAxLS43NiAyLjUzNCA0LjcgNC43IDAgMCAxLTIuMTYgMS42MiA5LjEgOS4xIDAgMCAxLTMuMzg4LjU2NGMtMi43NjUgMC02LjIwNC0xLjM2LTYuNjkzLTQuNzE5bDMuNzQ5LS42N2MuMSAxLjYxNSAxLjQ4OSAyLjM5IDIuODk5IDIuMzkgMS4xMDQgMCAyLjMzLS41MjUgMi4zNS0xLjcyNS0uMDEtLjcxLS4zNS0xLjA0LTEtMS4zYTguNCA4LjQgMCAwIDAtMS40My0uNDM0bC0xLjY2LS4zODVjLTEuMzctLjMxLTIuNDUtLjgwNS0zLjI0NC0xLjVBMy41NCAzLjU0IDAgMCAxIDUuOTg4IDguODRjLS4wMjItLjkwOC4yNTUtMS44Ljc5LTIuNTM0YTUuMjMgNS4yMyAwIDAgMSAyLjIwNS0xLjcgOCA4IDAgMCAxIDMuMjE0LS42MDUgNi42MSA2LjYxIDAgMCAxIDUuOTczIDMuODN6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlNUUkRfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/STRD
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSTRD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSTRD', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0r4rnn4._.js.map