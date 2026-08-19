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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenNOS.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenNOS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#0DE90B',
                d: 'M3 19.875h1.687V6.802c0-.663 1.047-1.333 1.755-.517l6.12 11.903h-2.25L7.22 12H5.25l3.937 7.875h6.2L8.09 5.576s-.72-1.44-2.43-1.44S3 5.88 3 6.403zm18-15.75h-1.688v13.09c0 .657-1.035 1.327-1.743.511L11.437 5.812h2.25L16.781 12h1.969l-3.926-7.875H8.625l7.296 14.31s.72 1.44 2.435 1.44S21 18.131 21 17.608z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3 19.875h1.687V6.802c0-.663 1.047-1.333 1.755-.517l6.12 11.903h-2.25L7.22 12H5.25l3.937 7.875h6.2L8.09 5.576s-.72-1.44-2.43-1.44S3 5.88 3 6.403zm18-15.75h-1.688v13.09c0 .657-1.035 1.327-1.743.511L11.437 5.812h2.25L16.781 12h1.969l-3.926-7.875H8.625l7.296 14.31s.72 1.44 2.435 1.44S21 18.13 21 17.608z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#NOS__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#0DE90B',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4 19h1.5V7.38c0-.59.93-1.185 1.56-.46L12.5 17.5h-2L7.75 12H6l3.5 7h5.51L8.525 6.29s-.64-1.28-2.16-1.28S4 6.56 4 7.025zM20 5h-1.5v11.635c0 .585-.92 1.18-1.55.455L11.5 6.5h2l2.75 5.5H18l-3.49-7H9l6.485 12.72S16.125 19 17.65 19 20 17.45 20 16.985z'
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
                        id: 'NOS__a'
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
 * @component @name TokenNOS
 * @description Web3Icon for TokenNOS
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwREU5MEIiIGQ9Ik0zIDE5Ljg3NWgxLjY4N1Y2LjgwMmMwLS42NjMgMS4wNDctMS4zMzMgMS43NTUtLjUxN2w2LjEyIDExLjkwM2gtMi4yNUw3LjIyIDEySDUuMjVsMy45MzcgNy44NzVoNi4yTDguMDkgNS41NzZzLS43Mi0xLjQ0LTIuNDMtMS40NFMzIDUuODggMyA2LjQwM3ptMTgtMTUuNzVoLTEuNjg4djEzLjA5YzAgLjY1Ny0xLjAzNSAxLjMyNy0xLjc0My41MTFMMTEuNDM3IDUuODEyaDIuMjVMMTYuNzgxIDEyaDEuOTY5bC0zLjkyNi03Ljg3NUg4LjYyNWw3LjI5NiAxNC4zMXMuNzIgMS40NCAyLjQzNSAxLjQ0UzIxIDE4LjEzMSAyMSAxNy42MDh6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zIDE5Ljg3NWgxLjY4N1Y2LjgwMmMwLS42NjMgMS4wNDctMS4zMzMgMS43NTUtLjUxN2w2LjEyIDExLjkwM2gtMi4yNUw3LjIyIDEySDUuMjVsMy45MzcgNy44NzVoNi4yTDguMDkgNS41NzZzLS43Mi0xLjQ0LTIuNDMtMS40NFMzIDUuODggMyA2LjQwM3ptMTgtMTUuNzVoLTEuNjg4djEzLjA5YzAgLjY1Ny0xLjAzNSAxLjMyNy0xLjc0My41MTFMMTEuNDM3IDUuODEyaDIuMjVMMTYuNzgxIDEyaDEuOTY5bC0zLjkyNi03Ljg3NUg4LjYyNWw3LjI5NiAxNC4zMXMuNzIgMS40NCAyLjQzNSAxLjQ0UzIxIDE4LjEzIDIxIDE3LjYwOHoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNOT1NfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMERFOTBCIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00IDE5aDEuNVY3LjM4YzAtLjU5LjkzLTEuMTg1IDEuNTYtLjQ2TDEyLjUgMTcuNWgtMkw3Ljc1IDEySDZsMy41IDdoNS41MUw4LjUyNSA2LjI5cy0uNjQtMS4yOC0yLjE2LTEuMjhTNCA2LjU2IDQgNy4wMjV6TTIwIDVoLTEuNXYxMS42MzVjMCAuNTg1LS45MiAxLjE4LTEuNTUuNDU1TDExLjUgNi41aDJsMi43NSA1LjVIMThsLTMuNDktN0g5bDYuNDg1IDEyLjcyUzE2LjEyNSAxOSAxNy42NSAxOSAyMCAxNy40NSAyMCAxNi45ODV6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9Ik5PU19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/NOS
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenNOS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenNOS', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1dde0v_._.js.map