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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPRISM.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPRISM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M15.974 19.877s.169.226-3.174-5.627l2.724-4.654.867 1.626-1.745 3.045 3.241 5.61zM13.74 6.602l.934 1.643-3.658 6.005H5.917c.321-.563.659-1.149.957-1.689h3.067zm-1.947 8.773 2.622 4.502h-1.89l-1.7-2.813H4.263l.979-1.689z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M3.498 19.878a.505.505 0 0 1-.44-.743l.552-.945h6.46l.924 1.677c-.732.01-1.295.01-1.891.01zm17.462-.861s.248.86-.495.86h-.985l-3.27-5.554.98-1.71zM11.556 4.368a.5.5 0 0 1 .856-.011l.613 1.024-3.917 6.056H7.234z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M15.974 19.877s.169.226-3.174-5.627l2.724-4.654.867 1.626-1.745 3.045 3.241 5.61zM13.74 6.602l.934 1.643-3.658 6.005H5.917c.321-.563.659-1.149.957-1.689h3.067zm-1.947 8.773 2.622 4.502h-1.89l-1.7-2.813H4.263l.979-1.689z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3.498 19.878a.505.505 0 0 1-.44-.743l.552-.945h6.46l.924 1.677c-.732.01-1.295.01-1.891.01zm17.462-.861s.248.86-.495.86h-.985l-3.27-5.554.98-1.71zM11.556 4.368a.5.5 0 0 1 .856-.011l.613 1.024-3.917 6.056H7.234z'
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
                d: 'M15.533 19.002s.15.2-2.822-5.003l2.422-4.137.77 1.446-1.55 2.707 2.88 4.987zm-1.986-11.8.83 1.46-3.252 5.337H6.593c.285-.5.586-1.02.85-1.5h2.727zM11.816 15l2.331 4.002h-1.68L10.954 16.5H5.123l.87-1.5z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M4.442 19.002a.45.45 0 0 1-.39-.66l.49-.84h5.743l.82 1.49c-.65.01-1.15.01-1.68.01zm15.523-.765s.22.765-.44.765h-.876l-2.906-4.937.87-1.52zm-8.36-13.021a.446.446 0 0 1 .761-.01l.545.91L9.43 11.5H7.764z'
            }
        ]
    ]
};
/**
 * @component @name TokenPRISM
 * @description Web3Icon for TokenPRISM
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNS45NzQgMTkuODc3cy4xNjkuMjI2LTMuMTc0LTUuNjI3bDIuNzI0LTQuNjU0Ljg2NyAxLjYyNi0xLjc0NSAzLjA0NSAzLjI0MSA1LjYxek0xMy43NCA2LjYwMmwuOTM0IDEuNjQzLTMuNjU4IDYuMDA1SDUuOTE3Yy4zMjEtLjU2My42NTktMS4xNDkuOTU3LTEuNjg5aDMuMDY3em0tMS45NDcgOC43NzMgMi42MjIgNC41MDJoLTEuODlsLTEuNy0yLjgxM0g0LjI2M2wuOTc5LTEuNjg5eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMuNDk4IDE5Ljg3OGEuNTA1LjUwNSAwIDAgMS0uNDQtLjc0M2wuNTUyLS45NDVoNi40NmwuOTI0IDEuNjc3Yy0uNzMyLjAxLTEuMjk1LjAxLTEuODkxLjAxem0xNy40NjItLjg2MXMuMjQ4Ljg2LS40OTUuODZoLS45ODVsLTMuMjctNS41NTQuOTgtMS43MXpNMTEuNTU2IDQuMzY4YS41LjUgMCAwIDEgLjg1Ni0uMDExbC42MTMgMS4wMjQtMy45MTcgNi4wNTZINy4yMzR6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNS45NzQgMTkuODc3cy4xNjkuMjI2LTMuMTc0LTUuNjI3bDIuNzI0LTQuNjU0Ljg2NyAxLjYyNi0xLjc0NSAzLjA0NSAzLjI0MSA1LjYxek0xMy43NCA2LjYwMmwuOTM0IDEuNjQzLTMuNjU4IDYuMDA1SDUuOTE3Yy4zMjEtLjU2My42NTktMS4xNDkuOTU3LTEuNjg5aDMuMDY3em0tMS45NDcgOC43NzMgMi42MjIgNC41MDJoLTEuODlsLTEuNy0yLjgxM0g0LjI2M2wuOTc5LTEuNjg5eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMuNDk4IDE5Ljg3OGEuNTA1LjUwNSAwIDAgMS0uNDQtLjc0M2wuNTUyLS45NDVoNi40NmwuOTI0IDEuNjc3Yy0uNzMyLjAxLTEuMjk1LjAxLTEuODkxLjAxem0xNy40NjItLjg2MXMuMjQ4Ljg2LS40OTUuODZoLS45ODVsLTMuMjctNS41NTQuOTgtMS43MXpNMTEuNTU2IDQuMzY4YS41LjUgMCAwIDEgLjg1Ni0uMDExbC42MTMgMS4wMjQtMy45MTcgNi4wNTZINy4yMzR6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTUuNTMzIDE5LjAwMnMuMTUuMi0yLjgyMi01LjAwM2wyLjQyMi00LjEzNy43NyAxLjQ0Ni0xLjU1IDIuNzA3IDIuODggNC45ODd6bS0xLjk4Ni0xMS44LjgzIDEuNDYtMy4yNTIgNS4zMzdINi41OTNjLjI4NS0uNS41ODYtMS4wMi44NS0xLjVoMi43Mjd6TTExLjgxNiAxNWwyLjMzMSA0LjAwMmgtMS42OEwxMC45NTQgMTYuNUg1LjEyM2wuODctMS41eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQuNDQyIDE5LjAwMmEuNDUuNDUgMCAwIDEtLjM5LS42NmwuNDktLjg0aDUuNzQzbC44MiAxLjQ5Yy0uNjUuMDEtMS4xNS4wMS0xLjY4LjAxem0xNS41MjMtLjc2NXMuMjIuNzY1LS40NC43NjVoLS44NzZsLTIuOTA2LTQuOTM3Ljg3LTEuNTJ6bS04LjM2LTEzLjAyMWEuNDQ2LjQ0NiAwIDAgMSAuNzYxLS4wMWwuNTQ1LjkxTDkuNDMgMTEuNUg3Ljc2NHoiLz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/PRISM
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPRISM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPRISM', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_19oqjbs._.js.map