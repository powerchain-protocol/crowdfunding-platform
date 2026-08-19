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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenEGO.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenEGO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FF5D01',
                d: 'M12 21A9 9 0 1 0 3.283 9.75h1.76a7.312 7.312 0 0 1 13.709-.562h-1.879a5.626 5.626 0 0 0-10.03.562h5.721v1.688h-6.16a5.7 5.7 0 0 0 .084 1.687H19.23A7.314 7.314 0 0 1 8.317 18.32a7.3 7.3 0 0 1-3.066-3.508h-1.8A9 9 0 0 0 12 21m-8.932-7.875h1.705a7.4 7.4 0 0 1-.062-1.687H3.023a9 9 0 0 0 .045 1.687m8.933 4.5a5.63 5.63 0 0 0 4.871-2.812H7.13A5.63 5.63 0 0 0 12 17.625'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 21A9 9 0 1 0 3.283 9.75h1.76a7.312 7.312 0 0 1 13.709-.562h-1.879a5.625 5.625 0 0 0-10.03.562h5.721v1.688h-6.16a5.7 5.7 0 0 0 .084 1.687H19.23A7.314 7.314 0 0 1 8.317 18.32a7.3 7.3 0 0 1-3.066-3.508h-1.8A9 9 0 0 0 12 21m-8.932-7.875h1.705a7.4 7.4 0 0 1-.062-1.687H3.023a9 9 0 0 0 .045 1.687m8.933 4.5a5.63 5.63 0 0 0 4.871-2.812H7.13A5.63 5.63 0 0 0 12 17.625'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#EGO__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FF5D01',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 20a8 8 0 1 0-7.75-10h1.566A6.5 6.5 0 0 1 18 9.5h-1.67a5 5 0 0 0-8.915.5H12.5v1.5H7.026A5 5 0 0 0 7.1 13h11.325A6.5 6.5 0 0 1 6 14.5H4.4A8 8 0 0 0 12 20m-7.94-7h1.516a6.6 6.6 0 0 1-.055-1.5h-1.5a8 8 0 0 0 .04 1.5M12 17a5 5 0 0 0 4.33-2.5H7.67A5 5 0 0 0 12 17'
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
                        id: 'EGO__a'
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
 * @component @name TokenEGO
 * @description Web3Icon for TokenEGO
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRjVEMDEiIGQ9Ik0xMiAyMUE5IDkgMCAxIDAgMy4yODMgOS43NWgxLjc2YTcuMzEyIDcuMzEyIDAgMCAxIDEzLjcwOS0uNTYyaC0xLjg3OWE1LjYyNiA1LjYyNiAwIDAgMC0xMC4wMy41NjJoNS43MjF2MS42ODhoLTYuMTZhNS43IDUuNyAwIDAgMCAuMDg0IDEuNjg3SDE5LjIzQTcuMzE0IDcuMzE0IDAgMCAxIDguMzE3IDE4LjMyYTcuMyA3LjMgMCAwIDEtMy4wNjYtMy41MDhoLTEuOEE5IDkgMCAwIDAgMTIgMjFtLTguOTMyLTcuODc1aDEuNzA1YTcuNCA3LjQgMCAwIDEtLjA2Mi0xLjY4N0gzLjAyM2E5IDkgMCAwIDAgLjA0NSAxLjY4N204LjkzMyA0LjVhNS42MyA1LjYzIDAgMCAwIDQuODcxLTIuODEySDcuMTNBNS42MyA1LjYzIDAgMCAwIDEyIDE3LjYyNSIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAyMUE5IDkgMCAxIDAgMy4yODMgOS43NWgxLjc2YTcuMzEyIDcuMzEyIDAgMCAxIDEzLjcwOS0uNTYyaC0xLjg3OWE1LjYyNSA1LjYyNSAwIDAgMC0xMC4wMy41NjJoNS43MjF2MS42ODhoLTYuMTZhNS43IDUuNyAwIDAgMCAuMDg0IDEuNjg3SDE5LjIzQTcuMzE0IDcuMzE0IDAgMCAxIDguMzE3IDE4LjMyYTcuMyA3LjMgMCAwIDEtMy4wNjYtMy41MDhoLTEuOEE5IDkgMCAwIDAgMTIgMjFtLTguOTMyLTcuODc1aDEuNzA1YTcuNCA3LjQgMCAwIDEtLjA2Mi0xLjY4N0gzLjAyM2E5IDkgMCAwIDAgLjA0NSAxLjY4N204LjkzMyA0LjVhNS42MyA1LjYzIDAgMCAwIDQuODcxLTIuODEySDcuMTNBNS42MyA1LjYzIDAgMCAwIDEyIDE3LjYyNSIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNFR09fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRkY1RDAxIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAyMGE4IDggMCAxIDAtNy43NS0xMGgxLjU2NkE2LjUgNi41IDAgMCAxIDE4IDkuNWgtMS42N2E1IDUgMCAwIDAtOC45MTUuNUgxMi41djEuNUg3LjAyNkE1IDUgMCAwIDAgNy4xIDEzaDExLjMyNUE2LjUgNi41IDAgMCAxIDYgMTQuNUg0LjRBOCA4IDAgMCAwIDEyIDIwbS03Ljk0LTdoMS41MTZhNi42IDYuNiAwIDAgMS0uMDU1LTEuNWgtMS41YTggOCAwIDAgMCAuMDQgMS41TTEyIDE3YTUgNSAwIDAgMCA0LjMzLTIuNUg3LjY3QTUgNSAwIDAgMCAxMiAxNyIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJFR09fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/EGO
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenEGO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenEGO', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1_1dsyo._.js.map