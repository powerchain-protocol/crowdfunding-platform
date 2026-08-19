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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkHemi.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkHemi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FF6C15',
                d: 'M13.725 3.002a.17.17 0 0 0-.195.135l-1.11 6.438h-.84l-1.11-6.438a.17.17 0 0 0-.195-.135c-3.975.779-7.02 4.222-7.26 8.414 0 0-.015.18-.015.27V12c0 4.447 3.135 8.16 7.275 8.983a.17.17 0 0 0 .195-.135l1.11-6.438h.84l1.11 6.453a.17.17 0 0 0 .195.135c3.96-.794 7.005-4.222 7.26-8.414 0 0 .015-.18.015-.27V12c0-4.476-3.12-8.174-7.275-8.998'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M13.725 3.002a.17.17 0 0 0-.195.135l-1.11 6.438h-.84l-1.11-6.438a.17.17 0 0 0-.195-.135c-3.975.779-7.02 4.222-7.26 8.414 0 0-.015.18-.015.27V12c0 4.447 3.135 8.16 7.275 8.983a.17.17 0 0 0 .195-.135l1.11-6.438h.84l1.11 6.453a.17.17 0 0 0 .195.135c3.96-.794 7.005-4.222 7.26-8.414 0 0 .015-.18.015-.27V12c0-4.476-3.12-8.174-7.275-8.998'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#hemi__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FF6C15',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.533 4.002a.15.15 0 0 0-.173.12l-.987 5.722h-.746l-.987-5.722a.15.15 0 0 0-.173-.12c-3.534.692-6.24 3.753-6.454 7.479 0 0-.013.16-.013.24V12c0 3.952 2.787 7.253 6.467 7.985a.15.15 0 0 0 .173-.12l.987-5.722h.746l.987 5.735a.15.15 0 0 0 .173.12c3.52-.705 6.227-3.753 6.454-7.479 0 0 .013-.16.013-.24V12c0-3.979-2.773-7.266-6.467-7.998'
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
                        id: 'hemi__a'
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
 * @component @name NetworkHemi
 * @description Web3Icon for NetworkHemi
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRjZDMTUiIGQ9Ik0xMy43MjUgMy4wMDJhLjE3LjE3IDAgMCAwLS4xOTUuMTM1bC0xLjExIDYuNDM4aC0uODRsLTEuMTEtNi40MzhhLjE3LjE3IDAgMCAwLS4xOTUtLjEzNWMtMy45NzUuNzc5LTcuMDIgNC4yMjItNy4yNiA4LjQxNCAwIDAtLjAxNS4xOC0uMDE1LjI3VjEyYzAgNC40NDcgMy4xMzUgOC4xNiA3LjI3NSA4Ljk4M2EuMTcuMTcgMCAwIDAgLjE5NS0uMTM1bDEuMTEtNi40MzhoLjg0bDEuMTEgNi40NTNhLjE3LjE3IDAgMCAwIC4xOTUuMTM1YzMuOTYtLjc5NCA3LjAwNS00LjIyMiA3LjI2LTguNDE0IDAgMCAuMDE1LS4xOC4wMTUtLjI3VjEyYzAtNC40NzYtMy4xMi04LjE3NC03LjI3NS04Ljk5OCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMy43MjUgMy4wMDJhLjE3LjE3IDAgMCAwLS4xOTUuMTM1bC0xLjExIDYuNDM4aC0uODRsLTEuMTEtNi40MzhhLjE3LjE3IDAgMCAwLS4xOTUtLjEzNWMtMy45NzUuNzc5LTcuMDIgNC4yMjItNy4yNiA4LjQxNCAwIDAtLjAxNS4xOC0uMDE1LjI3VjEyYzAgNC40NDcgMy4xMzUgOC4xNiA3LjI3NSA4Ljk4M2EuMTcuMTcgMCAwIDAgLjE5NS0uMTM1bDEuMTEtNi40MzhoLjg0bDEuMTEgNi40NTNhLjE3LjE3IDAgMCAwIC4xOTUuMTM1YzMuOTYtLjc5NCA3LjAwNS00LjIyMiA3LjI2LTguNDE0IDAgMCAuMDE1LS4xOC4wMTUtLjI3VjEyYzAtNC40NzYtMy4xMi04LjE3NC03LjI3NS04Ljk5OCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNoZW1pX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGNkMxNSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTMuNTMzIDQuMDAyYS4xNS4xNSAwIDAgMC0uMTczLjEybC0uOTg3IDUuNzIyaC0uNzQ2bC0uOTg3LTUuNzIyYS4xNS4xNSAwIDAgMC0uMTczLS4xMmMtMy41MzQuNjkyLTYuMjQgMy43NTMtNi40NTQgNy40NzkgMCAwLS4wMTMuMTYtLjAxMy4yNFYxMmMwIDMuOTUyIDIuNzg3IDcuMjUzIDYuNDY3IDcuOTg1YS4xNS4xNSAwIDAgMCAuMTczLS4xMmwuOTg3LTUuNzIyaC43NDZsLjk4NyA1LjczNWEuMTUuMTUgMCAwIDAgLjE3My4xMmMzLjUyLS43MDUgNi4yMjctMy43NTMgNi40NTQtNy40NzkgMCAwIC4wMTMtLjE2LjAxMy0uMjRWMTJjMC0zLjk3OS0yLjc3My03LjI2Ni02LjQ2Ny03Ljk5OCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJoZW1pX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/networks/hemi
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkHemi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkHemi', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1fn_xvp._.js.map