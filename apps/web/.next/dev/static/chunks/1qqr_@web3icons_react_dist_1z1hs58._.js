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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMET.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#7E61F8',
                d: 'M3 10.33v6.811c0 .388.337 1.047 1.176 1.047.838 0 1.063-.698 1.074-1.047v-6.61a2.78 2.78 0 0 1 2.88-2.469 2.666 2.666 0 0 1 2.745 2.47v6.61c0 .387.326 1.046 1.136 1.046.805 0 1.114-.642 1.114-.917-.011-2.15 0-6.503 0-6.74 0-.46.45-2.469 2.948-2.469a2.61 2.61 0 0 1 2.677 2.47v6.61c0 .45.382 1.046 1.181 1.046.776 0 1.058-.743 1.069-1.047V10.33c0-2.587-2.385-4.517-4.927-4.517a5.5 5.5 0 0 0-4.062 1.93 5.3 5.3 0 0 0-3.881-1.93C4.344 5.842 3 8.85 3 10.33'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3 10.33v6.811c0 .388.337 1.046 1.176 1.046.838 0 1.063-.697 1.074-1.046v-6.61a2.78 2.78 0 0 1 2.88-2.469 2.666 2.666 0 0 1 2.745 2.47v6.61c0 .387.326 1.045 1.136 1.045.805 0 1.114-.64 1.114-.917-.011-2.148 0-6.502 0-6.738 0-.461.45-2.47 2.948-2.47a2.61 2.61 0 0 1 2.677 2.47v6.61c0 .45.382 1.045 1.181 1.045.776 0 1.058-.742 1.069-1.046V10.33c0-2.587-2.385-4.517-4.927-4.517a5.5 5.5 0 0 0-4.062 1.93 5.3 5.3 0 0 0-3.881-1.93C4.344 5.842 3 8.85 3 10.33'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MET__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#7E61F8',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4 10.515v6.055c0 .345.3.93 1.045.93s.945-.62.955-.93v-5.875A2.47 2.47 0 0 1 8.56 8.5 2.37 2.37 0 0 1 11 10.695v5.875c0 .345.29.93 1.01.93.715 0 .99-.57.99-.815-.01-1.91 0-5.78 0-5.99 0-.41.4-2.195 2.62-2.195A2.32 2.32 0 0 1 18 10.695v5.875c0 .4.34.93 1.05.93.69 0 .94-.66.95-.93v-6.055c0-2.3-2.12-4.015-4.38-4.015a4.9 4.9 0 0 0-3.61 1.715A4.7 4.7 0 0 0 8.56 6.5C5.195 6.525 4 9.2 4 10.515'
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
                        id: 'MET__a'
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
 * @component @name TokenMET
 * @description Web3Icon for TokenMET
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM3RTYxRjgiIGQ9Ik0zIDEwLjMzdjYuODExYzAgLjM4OC4zMzcgMS4wNDcgMS4xNzYgMS4wNDcuODM4IDAgMS4wNjMtLjY5OCAxLjA3NC0xLjA0N3YtNi42MWEyLjc4IDIuNzggMCAwIDEgMi44OC0yLjQ2OSAyLjY2NiAyLjY2NiAwIDAgMSAyLjc0NSAyLjQ3djYuNjFjMCAuMzg3LjMyNiAxLjA0NiAxLjEzNiAxLjA0Ni44MDUgMCAxLjExNC0uNjQyIDEuMTE0LS45MTctLjAxMS0yLjE1IDAtNi41MDMgMC02Ljc0IDAtLjQ2LjQ1LTIuNDY5IDIuOTQ4LTIuNDY5YTIuNjEgMi42MSAwIDAgMSAyLjY3NyAyLjQ3djYuNjFjMCAuNDUuMzgyIDEuMDQ2IDEuMTgxIDEuMDQ2Ljc3NiAwIDEuMDU4LS43NDMgMS4wNjktMS4wNDdWMTAuMzNjMC0yLjU4Ny0yLjM4NS00LjUxNy00LjkyNy00LjUxN2E1LjUgNS41IDAgMCAwLTQuMDYyIDEuOTMgNS4zIDUuMyAwIDAgMC0zLjg4MS0xLjkzQzQuMzQ0IDUuODQyIDMgOC44NSAzIDEwLjMzIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zIDEwLjMzdjYuODExYzAgLjM4OC4zMzcgMS4wNDYgMS4xNzYgMS4wNDYuODM4IDAgMS4wNjMtLjY5NyAxLjA3NC0xLjA0NnYtNi42MWEyLjc4IDIuNzggMCAwIDEgMi44OC0yLjQ2OSAyLjY2NiAyLjY2NiAwIDAgMSAyLjc0NSAyLjQ3djYuNjFjMCAuMzg3LjMyNiAxLjA0NSAxLjEzNiAxLjA0NS44MDUgMCAxLjExNC0uNjQgMS4xMTQtLjkxNy0uMDExLTIuMTQ4IDAtNi41MDIgMC02LjczOCAwLS40NjEuNDUtMi40NyAyLjk0OC0yLjQ3YTIuNjEgMi42MSAwIDAgMSAyLjY3NyAyLjQ3djYuNjFjMCAuNDUuMzgyIDEuMDQ1IDEuMTgxIDEuMDQ1Ljc3NiAwIDEuMDU4LS43NDIgMS4wNjktMS4wNDZWMTAuMzNjMC0yLjU4Ny0yLjM4NS00LjUxNy00LjkyNy00LjUxN2E1LjUgNS41IDAgMCAwLTQuMDYyIDEuOTMgNS4zIDUuMyAwIDAgMC0zLjg4MS0xLjkzQzQuMzQ0IDUuODQyIDMgOC44NSAzIDEwLjMzIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNRVRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjN0U2MUY4IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00IDEwLjUxNXY2LjA1NWMwIC4zNDUuMy45MyAxLjA0NS45M3MuOTQ1LS42Mi45NTUtLjkzdi01Ljg3NUEyLjQ3IDIuNDcgMCAwIDEgOC41NiA4LjUgMi4zNyAyLjM3IDAgMCAxIDExIDEwLjY5NXY1Ljg3NWMwIC4zNDUuMjkuOTMgMS4wMS45My43MTUgMCAuOTktLjU3Ljk5LS44MTUtLjAxLTEuOTEgMC01Ljc4IDAtNS45OSAwLS40MS40LTIuMTk1IDIuNjItMi4xOTVBMi4zMiAyLjMyIDAgMCAxIDE4IDEwLjY5NXY1Ljg3NWMwIC40LjM0LjkzIDEuMDUuOTMuNjkgMCAuOTQtLjY2Ljk1LS45M3YtNi4wNTVjMC0yLjMtMi4xMi00LjAxNS00LjM4LTQuMDE1YTQuOSA0LjkgMCAwIDAtMy42MSAxLjcxNUE0LjcgNC43IDAgMCAwIDguNTYgNi41QzUuMTk1IDYuNTI1IDQgOS4yIDQgMTAuNTE1Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9Ik1FVF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/MET
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMET = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMET', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1z1hs58._.js.map