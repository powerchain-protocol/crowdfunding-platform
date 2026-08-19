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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenHIFI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenHIFI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#6E2EF4',
                d: 'M3.601 12.296a2.04 2.04 0 0 1 0-2.89L9.41 3.599a2.044 2.044 0 0 1 2.89 2.89l-5.802 5.807a2.044 2.044 0 0 1-2.89 0zm6.157 1.949a2.04 2.04 0 0 1 0-2.89l1.599-1.6a2.044 2.044 0 1 1 2.89 2.89l-1.598 1.6a2.04 2.04 0 0 1-2.228.443 2 2 0 0 1-.663-.444m1.948 6.156a2.045 2.045 0 0 1 0-2.89l5.802-5.808a2.05 2.05 0 0 1 2.228-.443 2.045 2.045 0 0 1 .663 3.334L14.597 20.4a2.046 2.046 0 0 1-2.89 0'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3.601 12.296a2.04 2.04 0 0 1 0-2.89L9.41 3.599a2.044 2.044 0 0 1 2.89 2.89l-5.802 5.807a2.044 2.044 0 0 1-2.89 0zm6.157 1.949a2.04 2.04 0 0 1 0-2.89l1.599-1.6a2.044 2.044 0 1 1 2.89 2.89l-1.598 1.6a2.04 2.04 0 0 1-2.228.443 2 2 0 0 1-.663-.444m1.948 6.156a2.045 2.045 0 0 1 0-2.89l5.802-5.808a2.05 2.05 0 0 1 2.228-.443 2.045 2.045 0 0 1 .663 3.334L14.597 20.4a2.046 2.046 0 0 1-2.89 0'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#HIFI__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#6E2EF4',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4.535 12.263a1.816 1.816 0 0 1 0-2.569l5.162-5.162a1.817 1.817 0 0 1 2.57 2.57l-5.158 5.161a1.817 1.817 0 0 1-2.57 0zm5.472 1.732a1.815 1.815 0 0 1 0-2.57l1.422-1.42a1.817 1.817 0 1 1 2.569 2.569l-1.421 1.421a1.81 1.81 0 0 1-1.98.394 1.8 1.8 0 0 1-.59-.394m1.732 5.473a1.817 1.817 0 0 1 0-2.57l5.157-5.162a1.82 1.82 0 0 1 2.57 0 1.817 1.817 0 0 1 0 2.57l-5.158 5.162a1.82 1.82 0 0 1-2.569 0'
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
                        id: 'HIFI__a'
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
 * @component @name TokenHIFI
 * @description Web3Icon for TokenHIFI
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM2RTJFRjQiIGQ9Ik0zLjYwMSAxMi4yOTZhMi4wNCAyLjA0IDAgMCAxIDAtMi44OUw5LjQxIDMuNTk5YTIuMDQ0IDIuMDQ0IDAgMCAxIDIuODkgMi44OWwtNS44MDIgNS44MDdhMi4wNDQgMi4wNDQgMCAwIDEtMi44OSAwem02LjE1NyAxLjk0OWEyLjA0IDIuMDQgMCAwIDEgMC0yLjg5bDEuNTk5LTEuNmEyLjA0NCAyLjA0NCAwIDEgMSAyLjg5IDIuODlsLTEuNTk4IDEuNmEyLjA0IDIuMDQgMCAwIDEtMi4yMjguNDQzIDIgMiAwIDAgMS0uNjYzLS40NDRtMS45NDggNi4xNTZhMi4wNDUgMi4wNDUgMCAwIDEgMC0yLjg5bDUuODAyLTUuODA4YTIuMDUgMi4wNSAwIDAgMSAyLjIyOC0uNDQzIDIuMDQ1IDIuMDQ1IDAgMCAxIC42NjMgMy4zMzRMMTQuNTk3IDIwLjRhMi4wNDYgMi4wNDYgMCAwIDEtMi44OSAwIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zLjYwMSAxMi4yOTZhMi4wNCAyLjA0IDAgMCAxIDAtMi44OUw5LjQxIDMuNTk5YTIuMDQ0IDIuMDQ0IDAgMCAxIDIuODkgMi44OWwtNS44MDIgNS44MDdhMi4wNDQgMi4wNDQgMCAwIDEtMi44OSAwem02LjE1NyAxLjk0OWEyLjA0IDIuMDQgMCAwIDEgMC0yLjg5bDEuNTk5LTEuNmEyLjA0NCAyLjA0NCAwIDEgMSAyLjg5IDIuODlsLTEuNTk4IDEuNmEyLjA0IDIuMDQgMCAwIDEtMi4yMjguNDQzIDIgMiAwIDAgMS0uNjYzLS40NDRtMS45NDggNi4xNTZhMi4wNDUgMi4wNDUgMCAwIDEgMC0yLjg5bDUuODAyLTUuODA4YTIuMDUgMi4wNSAwIDAgMSAyLjIyOC0uNDQzIDIuMDQ1IDIuMDQ1IDAgMCAxIC42NjMgMy4zMzRMMTQuNTk3IDIwLjRhMi4wNDYgMi4wNDYgMCAwIDEtMi44OSAwIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNISUZJX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzZFMkVGNCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNC41MzUgMTIuMjYzYTEuODE2IDEuODE2IDAgMCAxIDAtMi41NjlsNS4xNjItNS4xNjJhMS44MTcgMS44MTcgMCAwIDEgMi41NyAyLjU3bC01LjE1OCA1LjE2MWExLjgxNyAxLjgxNyAwIDAgMS0yLjU3IDB6bTUuNDcyIDEuNzMyYTEuODE1IDEuODE1IDAgMCAxIDAtMi41N2wxLjQyMi0xLjQyYTEuODE3IDEuODE3IDAgMSAxIDIuNTY5IDIuNTY5bC0xLjQyMSAxLjQyMWExLjgxIDEuODEgMCAwIDEtMS45OC4zOTQgMS44IDEuOCAwIDAgMS0uNTktLjM5NG0xLjczMiA1LjQ3M2ExLjgxNyAxLjgxNyAwIDAgMSAwLTIuNTdsNS4xNTctNS4xNjJhMS44MiAxLjgyIDAgMCAxIDIuNTcgMCAxLjgxNyAxLjgxNyAwIDAgMSAwIDIuNTdsLTUuMTU4IDUuMTYyYTEuODIgMS44MiAwIDAgMS0yLjU2OSAwIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkhJRklfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/HIFI
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenHIFI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenHIFI', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1j6jyyz._.js.map