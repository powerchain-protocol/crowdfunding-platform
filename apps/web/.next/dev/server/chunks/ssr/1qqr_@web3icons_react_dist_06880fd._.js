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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenXRP.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenXRP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M18.36 4.125h2.605l-5.42 5.781A4.92 4.92 0 0 1 12 11.443a4.9 4.9 0 0 1-3.546-1.537L3.026 4.125H5.64l4.112 4.429c1.204 1.277 3.291 1.277 4.496 0zM5.604 19.865H3l5.453-5.763a4.93 4.93 0 0 1 3.55-1.537 4.92 4.92 0 0 1 3.552 1.538L21 19.875h-2.605l-4.138-4.411c-1.205-1.277-3.291-1.277-4.496 0z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M18.36 4.125h2.605l-5.42 5.781A4.92 4.92 0 0 1 12 11.443a4.9 4.9 0 0 1-3.546-1.537L3.026 4.125H5.64l4.112 4.429c1.204 1.277 3.291 1.277 4.496 0zM5.604 19.865H3l5.453-5.763a4.93 4.93 0 0 1 3.55-1.537 4.92 4.92 0 0 1 3.552 1.538L21 19.875h-2.605l-4.138-4.411c-1.205-1.277-3.291-1.277-4.496 0z'
            }
        ]
    ],
    background: [
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
                d: 'M17.654 5h2.315l-4.817 5.139A4.37 4.37 0 0 1 12 11.505a4.37 4.37 0 0 1-3.152-1.366L4.023 5h2.323l3.656 3.936c1.07 1.136 2.925 1.136 3.996 0zM6.315 18.992H4l4.847-5.124a4.38 4.38 0 0 1 3.156-1.366 4.38 4.38 0 0 1 3.156 1.367L20 18.999h-2.316l-3.678-3.92c-1.071-1.135-2.925-1.135-3.996 0z'
            }
        ]
    ]
};
/**
 * @component @name TokenXRP
 * @description Web3Icon for TokenXRP
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC4zNiA0LjEyNWgyLjYwNWwtNS40MiA1Ljc4MUE0LjkyIDQuOTIgMCAwIDEgMTIgMTEuNDQzYTQuOSA0LjkgMCAwIDEtMy41NDYtMS41MzdMMy4wMjYgNC4xMjVINS42NGw0LjExMiA0LjQyOWMxLjIwNCAxLjI3NyAzLjI5MSAxLjI3NyA0LjQ5NiAwek01LjYwNCAxOS44NjVIM2w1LjQ1My01Ljc2M2E0LjkzIDQuOTMgMCAwIDEgMy41NS0xLjUzNyA0LjkyIDQuOTIgMCAwIDEgMy41NTIgMS41MzhMMjEgMTkuODc1aC0yLjYwNWwtNC4xMzgtNC40MTFjLTEuMjA1LTEuMjc3LTMuMjkxLTEuMjc3LTQuNDk2IDB6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC4zNiA0LjEyNWgyLjYwNWwtNS40MiA1Ljc4MUE0LjkyIDQuOTIgMCAwIDEgMTIgMTEuNDQzYTQuOSA0LjkgMCAwIDEtMy41NDYtMS41MzdMMy4wMjYgNC4xMjVINS42NGw0LjExMiA0LjQyOWMxLjIwNCAxLjI3NyAzLjI5MSAxLjI3NyA0LjQ5NiAwek01LjYwNCAxOS44NjVIM2w1LjQ1My01Ljc2M2E0LjkzIDQuOTMgMCAwIDEgMy41NS0xLjUzNyA0LjkyIDQuOTIgMCAwIDEgMy41NTIgMS41MzhMMjEgMTkuODc1aC0yLjYwNWwtNC4xMzgtNC40MTFjLTEuMjA1LTEuMjc3LTMuMjkxLTEuMjc3LTQuNDk2IDB6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTcuNjU0IDVoMi4zMTVsLTQuODE3IDUuMTM5QTQuMzcgNC4zNyAwIDAgMSAxMiAxMS41MDVhNC4zNyA0LjM3IDAgMCAxLTMuMTUyLTEuMzY2TDQuMDIzIDVoMi4zMjNsMy42NTYgMy45MzZjMS4wNyAxLjEzNiAyLjkyNSAxLjEzNiAzLjk5NiAwek02LjMxNSAxOC45OTJINGw0Ljg0Ny01LjEyNGE0LjM4IDQuMzggMCAwIDEgMy4xNTYtMS4zNjYgNC4zOCA0LjM4IDAgMCAxIDMuMTU2IDEuMzY3TDIwIDE4Ljk5OWgtMi4zMTZsLTMuNjc4LTMuOTJjLTEuMDcxLTEuMTM1LTIuOTI1LTEuMTM1LTMuOTk2IDB6Ii8+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/XRP
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenXRP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenXRP', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_06880fd._.js.map