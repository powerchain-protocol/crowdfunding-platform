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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPRE.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPRE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#2D8EFF',
                d: 'M9.75 14.25h1.687c2.048.006 3.381-2.059 3.376-3.937.01-1.868-1.39-3.95-3.376-3.938h-4.5v11.25H9.75zm1.423-5.062c.619.045.827.607.827 1.124 0 .434-.191 1.126-.765 1.126h-1.49v-2.25z'
            }
        ],
        [
            'path',
            {
                fill: '#2D8EFF',
                d: 'M3 4.035v15.93C3 20.528 3.473 21 4.035 21h15.93c.563 0 1.035-.473 1.035-1.035V4.035C21 3.473 20.527 3 19.965 3H4.035C3.473 3 3 3.473 3 4.035M17.85 18.75H6.127c-.562 0-.883-.338-.883-.9V6.127c0-.562.327-.883.883-.883H17.84c.562 0 .905.321.905.883V17.84c0 .562-.337.905-.9.905z'
            }
        ],
        [
            'path',
            {
                fill: '#2D8EFF',
                d: 'M17.063 15.375h-6.188v2.25h6.188z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M9.75 14.25h1.687c2.048.006 3.381-2.059 3.376-3.937.01-1.868-1.39-3.95-3.376-3.938h-4.5v11.25H9.75zm1.423-5.062c.619.045.827.607.827 1.124 0 .434-.191 1.126-.765 1.126h-1.49v-2.25z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3 4.035v15.93C3 20.528 3.473 21 4.035 21h15.93c.563 0 1.035-.473 1.035-1.035V4.035C21 3.473 20.527 3 19.965 3H4.035C3.473 3 3 3.473 3 4.035M17.85 18.75H6.127c-.562 0-.883-.338-.883-.9V6.127c0-.562.327-.883.883-.883H17.84c.562 0 .905.321.905.883V17.84c0 .562-.337.905-.9.905z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M17.063 15.375h-6.188v2.25h6.188z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#PRE__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#2D8EFF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M10 14h1.5c1.82.005 3.005-1.83 3-3.5.01-1.66-1.235-3.51-3-3.5h-4v10H10zm1.265-4.5c.55.04.735.54.735 1 0 .385-.17 1-.68 1H9.995v-2z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4 4.92v14.16c0 .5.42.92.92.92h14.16c.5 0 .92-.42.92-.92V4.92c0-.5-.42-.92-.92-.92H4.92c-.5 0-.92.42-.92.92M17.2 18H6.78c-.5 0-.785-.3-.785-.8V6.78c0-.5.29-.785.785-.785h10.41c.5 0 .805.285.805.785v10.41c0 .5-.3.805-.8.805z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M16.5 15H11v2h5.5z'
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
                        id: 'PRE__a'
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
 * @component @name TokenPRE
 * @description Web3Icon for TokenPRE
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMyRDhFRkYiIGQ9Ik05Ljc1IDE0LjI1aDEuNjg3YzIuMDQ4LjAwNiAzLjM4MS0yLjA1OSAzLjM3Ni0zLjkzNy4wMS0xLjg2OC0xLjM5LTMuOTUtMy4zNzYtMy45MzhoLTQuNXYxMS4yNUg5Ljc1em0xLjQyMy01LjA2MmMuNjE5LjA0NS44MjcuNjA3LjgyNyAxLjEyNCAwIC40MzQtLjE5MSAxLjEyNi0uNzY1IDEuMTI2aC0xLjQ5di0yLjI1eiIvPgogICAgPHBhdGggZmlsbD0iIzJEOEVGRiIgZD0iTTMgNC4wMzV2MTUuOTNDMyAyMC41MjggMy40NzMgMjEgNC4wMzUgMjFoMTUuOTNjLjU2MyAwIDEuMDM1LS40NzMgMS4wMzUtMS4wMzVWNC4wMzVDMjEgMy40NzMgMjAuNTI3IDMgMTkuOTY1IDNINC4wMzVDMy40NzMgMyAzIDMuNDczIDMgNC4wMzVNMTcuODUgMTguNzVINi4xMjdjLS41NjIgMC0uODgzLS4zMzgtLjg4My0uOVY2LjEyN2MwLS41NjIuMzI3LS44ODMuODgzLS44ODNIMTcuODRjLjU2MiAwIC45MDUuMzIxLjkwNS44ODNWMTcuODRjMCAuNTYyLS4zMzcuOTA1LS45LjkwNXoiLz4KICAgIDxwYXRoIGZpbGw9IiMyRDhFRkYiIGQ9Ik0xNy4wNjMgMTUuMzc1aC02LjE4OHYyLjI1aDYuMTg4eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05Ljc1IDE0LjI1aDEuNjg3YzIuMDQ4LjAwNiAzLjM4MS0yLjA1OSAzLjM3Ni0zLjkzNy4wMS0xLjg2OC0xLjM5LTMuOTUtMy4zNzYtMy45MzhoLTQuNXYxMS4yNUg5Ljc1em0xLjQyMy01LjA2MmMuNjE5LjA0NS44MjcuNjA3LjgyNyAxLjEyNCAwIC40MzQtLjE5MSAxLjEyNi0uNzY1IDEuMTI2aC0xLjQ5di0yLjI1eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMgNC4wMzV2MTUuOTNDMyAyMC41MjggMy40NzMgMjEgNC4wMzUgMjFoMTUuOTNjLjU2MyAwIDEuMDM1LS40NzMgMS4wMzUtMS4wMzVWNC4wMzVDMjEgMy40NzMgMjAuNTI3IDMgMTkuOTY1IDNINC4wMzVDMy40NzMgMyAzIDMuNDczIDMgNC4wMzVNMTcuODUgMTguNzVINi4xMjdjLS41NjIgMC0uODgzLS4zMzgtLjg4My0uOVY2LjEyN2MwLS41NjIuMzI3LS44ODMuODgzLS44ODNIMTcuODRjLjU2MiAwIC45MDUuMzIxLjkwNS44ODNWMTcuODRjMCAuNTYyLS4zMzcuOTA1LS45LjkwNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy4wNjMgMTUuMzc1aC02LjE4OHYyLjI1aDYuMTg4eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQUkVfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMkQ4RUZGIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMCAxNGgxLjVjMS44Mi4wMDUgMy4wMDUtMS44MyAzLTMuNS4wMS0xLjY2LTEuMjM1LTMuNTEtMy0zLjVoLTR2MTBIMTB6bTEuMjY1LTQuNWMuNTUuMDQuNzM1LjU0LjczNSAxIDAgLjM4NS0uMTcgMS0uNjggMUg5Ljk5NXYtMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNCA0LjkydjE0LjE2YzAgLjUuNDIuOTIuOTIuOTJoMTQuMTZjLjUgMCAuOTItLjQyLjkyLS45MlY0LjkyYzAtLjUtLjQyLS45Mi0uOTItLjkySDQuOTJjLS41IDAtLjkyLjQyLS45Mi45Mk0xNy4yIDE4SDYuNzhjLS41IDAtLjc4NS0uMy0uNzg1LS44VjYuNzhjMC0uNS4yOS0uNzg1Ljc4NS0uNzg1aDEwLjQxYy41IDAgLjgwNS4yODUuODA1Ljc4NXYxMC40MWMwIC41LS4zLjgwNS0uOC44MDV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjUgMTVIMTF2Mmg1LjV6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlBSRV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/PRE
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPRE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPRE', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1n9emd6._.js.map