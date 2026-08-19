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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenZTG.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenZTG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M21 12.563H3a9 9 0 0 0 .433 2.25h7.442l.562-.563h9.293c.14-.546.236-1.108.27-1.687M3.889 15.937c.292.6.65 1.167 1.068 1.688h3.657l.573-.562h10.277c.242-.36.462-.732.653-1.126zm14.074 2.813H6.036A8.98 8.98 0 0 0 12 21c2.284 0 4.376-.85 5.962-2.25m-3.994-7.875-.563.562H3c.05-.781.197-1.535.433-2.25h17.134c.18.54.31 1.109.382 1.688zM19.813 7.5a9 9 0 0 0-1.265-1.688H5.451a9 9 0 0 0-1.563 2.25h12.054l.563-.562zM6.741 4.687h10.518A9 9 0 0 0 12 3a8.98 8.98 0 0 0-5.258 1.687'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M21 12.563H3a9 9 0 0 0 .433 2.25h7.442l.562-.563h9.293c.14-.546.236-1.108.27-1.687M3.889 15.937c.292.6.65 1.167 1.068 1.688h3.657l.573-.562h10.277c.242-.36.462-.732.653-1.126zm14.074 2.813H6.036A8.98 8.98 0 0 0 12 21c2.284 0 4.376-.85 5.962-2.25m-3.994-7.875-.563.562H3c.05-.781.197-1.535.433-2.25h17.134c.18.54.31 1.109.382 1.688zM19.813 7.5a9 9 0 0 0-1.265-1.688H5.451a9 9 0 0 0-1.563 2.25h12.054l.563-.562zM6.741 4.687h10.518A9 9 0 0 0 12 3a8.98 8.98 0 0 0-5.258 1.687'
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
                d: 'M20 12.5H4c.045.695.175 1.365.385 2H11l.5-.5h8.26c.125-.485.21-.985.24-1.5m-15.21 3a8 8 0 0 0 .95 1.5h3.25l.51-.5h9.135c.215-.32.41-.65.58-1zM17.3 18H6.7a7.98 7.98 0 0 0 5.3 2c2.03 0 3.89-.755 5.3-2m-3.55-7-.5.5H4a8 8 0 0 1 .385-2h15.23c.16.48.275.985.34 1.5zm5.195-3a8 8 0 0 0-1.125-1.5H6.18a8 8 0 0 0-1.39 2h10.715l.5-.5zM7.325 5.5h9.35A8 8 0 0 0 12 4c-1.745 0-3.36.555-4.675 1.5'
            }
        ]
    ]
};
/**
 * @component @name TokenZTG
 * @description Web3Icon for TokenZTG
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMSAxMi41NjNIM2E5IDkgMCAwIDAgLjQzMyAyLjI1aDcuNDQybC41NjItLjU2M2g5LjI5M2MuMTQtLjU0Ni4yMzYtMS4xMDguMjctMS42ODdNMy44ODkgMTUuOTM3Yy4yOTIuNi42NSAxLjE2NyAxLjA2OCAxLjY4OGgzLjY1N2wuNTczLS41NjJoMTAuMjc3Yy4yNDItLjM2LjQ2Mi0uNzMyLjY1My0xLjEyNnptMTQuMDc0IDIuODEzSDYuMDM2QTguOTggOC45OCAwIDAgMCAxMiAyMWMyLjI4NCAwIDQuMzc2LS44NSA1Ljk2Mi0yLjI1bS0zLjk5NC03Ljg3NS0uNTYzLjU2MkgzYy4wNS0uNzgxLjE5Ny0xLjUzNS40MzMtMi4yNWgxNy4xMzRjLjE4LjU0LjMxIDEuMTA5LjM4MiAxLjY4OHpNMTkuODEzIDcuNWE5IDkgMCAwIDAtMS4yNjUtMS42ODhINS40NTFhOSA5IDAgMCAwLTEuNTYzIDIuMjVoMTIuMDU0bC41NjMtLjU2MnpNNi43NDEgNC42ODdoMTAuNTE4QTkgOSAwIDAgMCAxMiAzYTguOTggOC45OCAwIDAgMC01LjI1OCAxLjY4NyIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMSAxMi41NjNIM2E5IDkgMCAwIDAgLjQzMyAyLjI1aDcuNDQybC41NjItLjU2M2g5LjI5M2MuMTQtLjU0Ni4yMzYtMS4xMDguMjctMS42ODdNMy44ODkgMTUuOTM3Yy4yOTIuNi42NSAxLjE2NyAxLjA2OCAxLjY4OGgzLjY1N2wuNTczLS41NjJoMTAuMjc3Yy4yNDItLjM2LjQ2Mi0uNzMyLjY1My0xLjEyNnptMTQuMDc0IDIuODEzSDYuMDM2QTguOTggOC45OCAwIDAgMCAxMiAyMWMyLjI4NCAwIDQuMzc2LS44NSA1Ljk2Mi0yLjI1bS0zLjk5NC03Ljg3NS0uNTYzLjU2MkgzYy4wNS0uNzgxLjE5Ny0xLjUzNS40MzMtMi4yNWgxNy4xMzRjLjE4LjU0LjMxIDEuMTA5LjM4MiAxLjY4OHpNMTkuODEzIDcuNWE5IDkgMCAwIDAtMS4yNjUtMS42ODhINS40NTFhOSA5IDAgMCAwLTEuNTYzIDIuMjVoMTIuMDU0bC41NjMtLjU2MnpNNi43NDEgNC42ODdoMTAuNTE4QTkgOSAwIDAgMCAxMiAzYTguOTggOC45OCAwIDAgMC01LjI1OCAxLjY4NyIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjAgMTIuNUg0Yy4wNDUuNjk1LjE3NSAxLjM2NS4zODUgMkgxMWwuNS0uNWg4LjI2Yy4xMjUtLjQ4NS4yMS0uOTg1LjI0LTEuNW0tMTUuMjEgM2E4IDggMCAwIDAgLjk1IDEuNWgzLjI1bC41MS0uNWg5LjEzNWMuMjE1LS4zMi40MS0uNjUuNTgtMXpNMTcuMyAxOEg2LjdhNy45OCA3Ljk4IDAgMCAwIDUuMyAyYzIuMDMgMCAzLjg5LS43NTUgNS4zLTJtLTMuNTUtNy0uNS41SDRhOCA4IDAgMCAxIC4zODUtMmgxNS4yM2MuMTYuNDguMjc1Ljk4NS4zNCAxLjV6bTUuMTk1LTNhOCA4IDAgMCAwLTEuMTI1LTEuNUg2LjE4YTggOCAwIDAgMC0xLjM5IDJoMTAuNzE1bC41LS41ek03LjMyNSA1LjVoOS4zNUE4IDggMCAwIDAgMTIgNGMtMS43NDUgMC0zLjM2LjU1NS00LjY3NSAxLjUiLz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/ZTG
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenZTG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenZTG', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_051400v._.js.map