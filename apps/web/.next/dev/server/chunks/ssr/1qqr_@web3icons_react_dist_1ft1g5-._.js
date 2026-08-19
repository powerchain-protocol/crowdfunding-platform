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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenONI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenONI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#43ADB2',
                d: 'M12.001 14.823a2.811 2.811 0 1 0 0-5.623 2.811 2.811 0 0 0 0 5.623m0 2.25a5.061 5.061 0 1 0 0-10.123 5.061 5.061 0 0 0 0 10.122',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#43ADB2',
                d: 'M12.45 19.688c-.123-.54-.618-.9-1.17-.962a6.87 6.87 0 0 1-5.989-5.601C5.19 12.505 4.69 12 4.065 12c-.618 0-1.136.506-1.057 1.124a9.166 9.166 0 0 0 8.408 7.874c.702.045 1.192-.624 1.034-1.31m7.238-7.058c.675.157 1.344-.32 1.31-1.013a9.25 9.25 0 0 0-8.536-8.615c-.59-.034-1.052.46-1.052 1.051 0 .653.562 1.153 1.215 1.226 3.166.338 5.81 2.97 6.102 6.158.05.563.416 1.069.961 1.193'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.001 14.823a2.812 2.812 0 1 0 0-5.624 2.812 2.812 0 0 0 0 5.624m0 2.25a5.06 5.06 0 0 0 4.676-7 5.06 5.06 0 1 0-4.676 7',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.45 19.688c-.123-.54-.618-.9-1.17-.962a6.87 6.87 0 0 1-5.989-5.601C5.19 12.505 4.69 12 4.065 12c-.618 0-1.136.506-1.057 1.124a9.166 9.166 0 0 0 8.408 7.874c.702.045 1.192-.624 1.034-1.31m7.238-7.058c.675.157 1.344-.32 1.31-1.013a9.25 9.25 0 0 0-8.536-8.615c-.59-.034-1.052.46-1.052 1.051 0 .653.562 1.153 1.215 1.226 3.166.338 5.81 2.97 6.102 6.158.05.563.416 1.069.961 1.193'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ONI__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#43ADB2',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.002 14.51a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0 1.999a4.498 4.498 0 1 0 0-8.996 4.498 4.498 0 0 0 0 8.996',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.4 18.833c-.11-.48-.55-.8-1.04-.854a6.11 6.11 0 0 1-5.323-4.98c-.09-.55-.535-1-1.09-1-.55 0-1.01.45-.94 1a8.15 8.15 0 0 0 7.474 7c.624.04 1.06-.556.92-1.166m6.434-6.273c.6.14 1.195-.285 1.165-.9A8.224 8.224 0 0 0 12.41 4c-.525-.03-.935.41-.935.935 0 .58.5 1.025 1.08 1.09 2.815.3 5.164 2.64 5.424 5.474.045.5.37.95.855 1.06'
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
                        id: 'ONI__a'
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
 * @component @name TokenONI
 * @description Web3Icon for TokenONI
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM0M0FEQjIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjAwMSAxNC44MjNhMi44MTEgMi44MTEgMCAxIDAgMC01LjYyMyAyLjgxMSAyLjgxMSAwIDAgMCAwIDUuNjIzbTAgMi4yNWE1LjA2MSA1LjA2MSAwIDEgMCAwLTEwLjEyMyA1LjA2MSA1LjA2MSAwIDAgMCAwIDEwLjEyMiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjNDNBREIyIiBkPSJNMTIuNDUgMTkuNjg4Yy0uMTIzLS41NC0uNjE4LS45LTEuMTctLjk2MmE2Ljg3IDYuODcgMCAwIDEtNS45ODktNS42MDFDNS4xOSAxMi41MDUgNC42OSAxMiA0LjA2NSAxMmMtLjYxOCAwLTEuMTM2LjUwNi0xLjA1NyAxLjEyNGE5LjE2NiA5LjE2NiAwIDAgMCA4LjQwOCA3Ljg3NGMuNzAyLjA0NSAxLjE5Mi0uNjI0IDEuMDM0LTEuMzFtNy4yMzgtNy4wNThjLjY3NS4xNTcgMS4zNDQtLjMyIDEuMzEtMS4wMTNhOS4yNSA5LjI1IDAgMCAwLTguNTM2LTguNjE1Yy0uNTktLjAzNC0xLjA1Mi40Ni0xLjA1MiAxLjA1MSAwIC42NTMuNTYyIDEuMTUzIDEuMjE1IDEuMjI2IDMuMTY2LjMzOCA1LjgxIDIuOTcgNi4xMDIgNi4xNTguMDUuNTYzLjQxNiAxLjA2OS45NjEgMS4xOTMiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjAwMSAxNC44MjNhMi44MTIgMi44MTIgMCAxIDAgMC01LjYyNCAyLjgxMiAyLjgxMiAwIDAgMCAwIDUuNjI0bTAgMi4yNWE1LjA2IDUuMDYgMCAwIDAgNC42NzYtNyA1LjA2IDUuMDYgMCAxIDAtNC42NzYgNyIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIuNDUgMTkuNjg4Yy0uMTIzLS41NC0uNjE4LS45LTEuMTctLjk2MmE2Ljg3IDYuODcgMCAwIDEtNS45ODktNS42MDFDNS4xOSAxMi41MDUgNC42OSAxMiA0LjA2NSAxMmMtLjYxOCAwLTEuMTM2LjUwNi0xLjA1NyAxLjEyNGE5LjE2NiA5LjE2NiAwIDAgMCA4LjQwOCA3Ljg3NGMuNzAyLjA0NSAxLjE5Mi0uNjI0IDEuMDM0LTEuMzFtNy4yMzgtNy4wNThjLjY3NS4xNTcgMS4zNDQtLjMyIDEuMzEtMS4wMTNhOS4yNSA5LjI1IDAgMCAwLTguNTM2LTguNjE1Yy0uNTktLjAzNC0xLjA1Mi40Ni0xLjA1MiAxLjA1MSAwIC42NTMuNTYyIDEuMTUzIDEuMjE1IDEuMjI2IDMuMTY2LjMzOCA1LjgxIDIuOTcgNi4xMDIgNi4xNTguMDUuNTYzLjQxNiAxLjA2OS45NjEgMS4xOTMiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNPTklfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNDNBREIyIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjAwMiAxNC41MWEyLjUgMi41IDAgMSAwIDAtNSAyLjUgMi41IDAgMCAwIDAgNW0wIDEuOTk5YTQuNDk4IDQuNDk4IDAgMSAwIDAtOC45OTYgNC40OTggNC40OTggMCAwIDAgMCA4Ljk5NiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyLjQgMTguODMzYy0uMTEtLjQ4LS41NS0uOC0xLjA0LS44NTRhNi4xMSA2LjExIDAgMCAxLTUuMzIzLTQuOThjLS4wOS0uNTUtLjUzNS0xLTEuMDktMS0uNTUgMC0xLjAxLjQ1LS45NCAxYTguMTUgOC4xNSAwIDAgMCA3LjQ3NCA3Yy42MjQuMDQgMS4wNi0uNTU2LjkyLTEuMTY2bTYuNDM0LTYuMjczYy42LjE0IDEuMTk1LS4yODUgMS4xNjUtLjlBOC4yMjQgOC4yMjQgMCAwIDAgMTIuNDEgNGMtLjUyNS0uMDMtLjkzNS40MS0uOTM1LjkzNSAwIC41OC41IDEuMDI1IDEuMDggMS4wOSAyLjgxNS4zIDUuMTY0IDIuNjQgNS40MjQgNS40NzQuMDQ1LjUuMzcuOTUuODU1IDEuMDYiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iT05JX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/ONI
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenONI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenONI', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1ft1g5-._.js.map