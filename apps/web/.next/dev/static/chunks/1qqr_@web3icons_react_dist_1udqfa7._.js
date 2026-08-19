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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenAZERO.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenAZERO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#1D242C',
                d: 'M10.392 3.424 7.364 10.5H3.203a.204.204 0 0 0-.203.205v1.99c0 .113.09.205.203.205h3.135l-3.214 7.51c-.059.137.04.29.185.29h2.447c.082 0 .155-.05.187-.126l6.03-14.601 5.948 14.6a.2.2 0 0 0 .187.127h2.583a.206.206 0 0 0 .186-.289l-3.19-7.51h3.11a.204.204 0 0 0 .203-.206v-1.99a.204.204 0 0 0-.202-.205h-4.13l-3.006-7.075a.2.2 0 0 0-.186-.125h-2.898a.2.2 0 0 0-.186.124',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M10.392 3.424 7.364 10.5H3.203a.204.204 0 0 0-.203.205v1.99c0 .113.09.205.203.205h3.135l-3.214 7.51c-.059.137.04.29.185.29h2.447c.082 0 .155-.05.187-.126l6.03-14.601 5.948 14.6a.2.2 0 0 0 .187.127h2.583a.206.206 0 0 0 .186-.289l-3.19-7.51h3.11a.204.204 0 0 0 .203-.206v-1.99a.204.204 0 0 0-.202-.205h-4.13l-3.006-7.075a.2.2 0 0 0-.186-.125h-2.898a.2.2 0 0 0-.186.124',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#AZERO__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#1D242C',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm10.571 4.377-2.691 6.29h-3.7a.18.18 0 0 0-.18.182v1.769c0 .1.08.182.18.182h2.787L4.11 19.476a.183.183 0 0 0 .165.257H6.45a.18.18 0 0 0 .166-.112l5.36-12.979 5.287 12.978a.18.18 0 0 0 .166.113h2.297c.13 0 .216-.135.165-.257L17.055 12.8h2.765c.1 0 .18-.082.18-.182v-1.77a.18.18 0 0 0-.18-.181h-3.67l-2.672-6.29a.18.18 0 0 0-.165-.11h-2.576a.18.18 0 0 0-.165.11',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
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
                        id: 'AZERO__a'
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
 * @component @name TokenAZERO
 * @description Web3Icon for TokenAZERO
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxRDI0MkMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjM5MiAzLjQyNCA3LjM2NCAxMC41SDMuMjAzYS4yMDQuMjA0IDAgMCAwLS4yMDMuMjA1djEuOTljMCAuMTEzLjA5LjIwNS4yMDMuMjA1aDMuMTM1bC0zLjIxNCA3LjUxYy0uMDU5LjEzNy4wNC4yOS4xODUuMjloMi40NDdjLjA4MiAwIC4xNTUtLjA1LjE4Ny0uMTI2bDYuMDMtMTQuNjAxIDUuOTQ4IDE0LjZhLjIuMiAwIDAgMCAuMTg3LjEyN2gyLjU4M2EuMjA2LjIwNiAwIDAgMCAuMTg2LS4yODlsLTMuMTktNy41MWgzLjExYS4yMDQuMjA0IDAgMCAwIC4yMDMtLjIwNnYtMS45OWEuMjA0LjIwNCAwIDAgMC0uMjAyLS4yMDVoLTQuMTNsLTMuMDA2LTcuMDc1YS4yLjIgMCAwIDAtLjE4Ni0uMTI1aC0yLjg5OGEuMi4yIDAgMCAwLS4xODYuMTI0IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjM5MiAzLjQyNCA3LjM2NCAxMC41SDMuMjAzYS4yMDQuMjA0IDAgMCAwLS4yMDMuMjA1djEuOTljMCAuMTEzLjA5LjIwNS4yMDMuMjA1aDMuMTM1bC0zLjIxNCA3LjUxYy0uMDU5LjEzNy4wNC4yOS4xODUuMjloMi40NDdjLjA4MiAwIC4xNTUtLjA1LjE4Ny0uMTI2bDYuMDMtMTQuNjAxIDUuOTQ4IDE0LjZhLjIuMiAwIDAgMCAuMTg3LjEyN2gyLjU4M2EuMjA2LjIwNiAwIDAgMCAuMTg2LS4yODlsLTMuMTktNy41MWgzLjExYS4yMDQuMjA0IDAgMCAwIC4yMDMtLjIwNnYtMS45OWEuMjA0LjIwNCAwIDAgMC0uMjAyLS4yMDVoLTQuMTNsLTMuMDA2LTcuMDc1YS4yLjIgMCAwIDAtLjE4Ni0uMTI1aC0yLjg5OGEuMi4yIDAgMCAwLS4xODYuMTI0IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNBWkVST19fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMxRDI0MkMiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTAuNTcxIDQuMzc3LTIuNjkxIDYuMjloLTMuN2EuMTguMTggMCAwIDAtLjE4LjE4MnYxLjc2OWMwIC4xLjA4LjE4Mi4xOC4xODJoMi43ODdMNC4xMSAxOS40NzZhLjE4My4xODMgMCAwIDAgLjE2NS4yNTdINi40NWEuMTguMTggMCAwIDAgLjE2Ni0uMTEybDUuMzYtMTIuOTc5IDUuMjg3IDEyLjk3OGEuMTguMTggMCAwIDAgLjE2Ni4xMTNoMi4yOTdjLjEzIDAgLjIxNi0uMTM1LjE2NS0uMjU3TDE3LjA1NSAxMi44aDIuNzY1Yy4xIDAgLjE4LS4wODIuMTgtLjE4MnYtMS43N2EuMTguMTggMCAwIDAtLjE4LS4xODFoLTMuNjdsLTIuNjcyLTYuMjlhLjE4LjE4IDAgMCAwLS4xNjUtLjExaC0yLjU3NmEuMTguMTggMCAwIDAtLjE2NS4xMSIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkFaRVJPX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/AZERO
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenAZERO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenAZERO', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1udqfa7._.js.map