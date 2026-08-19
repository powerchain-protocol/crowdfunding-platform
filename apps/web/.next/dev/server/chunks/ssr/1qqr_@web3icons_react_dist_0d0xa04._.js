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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenLBT.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenLBT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#006',
                d: 'M4.02 5.53h12.918a3.995 3.995 0 0 1 4.023 3.96 3.05 3.05 0 0 1-1.311 2.498 3.04 3.04 0 0 1 1.35 2.51 4.05 4.05 0 0 1-4.079 3.972H14.25v-2.25h2.194c.9 0 1.744-.693 1.744-1.576 0-.675-1.046-1.238-1.744-1.238H10.03l.405-1.007.653-1.806h5.84c.697 0 1.26-.388 1.26-1.069 0-.889-.731-1.744-1.632-1.744H3.041l.985-2.25z'
            }
        ],
        [
            'path',
            {
                fill: '#006',
                d: 'M14.192 4.404h1.181l-.506 1.126h-1.182zM7.44 18.47h1.182l-.506 1.125H6.934zm8.44-14.066h1.181l-.506 1.126h-1.182zM9.128 18.47h1.182l-.506 1.125H8.622z'
            }
        ],
        [
            'path',
            {
                fill: '#006',
                d: 'M9.747 9.47H6.934l-3.893 8.372a.444.444 0 0 0 .405.63h9.677v-2.25H7.626a.445.445 0 0 1-.41-.63z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.02 5.53h12.918a3.995 3.995 0 0 1 4.023 3.96 3.05 3.05 0 0 1-1.311 2.498 3.04 3.04 0 0 1 1.35 2.51 4.05 4.05 0 0 1-4.079 3.972H14.25v-2.25h2.194c.9 0 1.744-.693 1.744-1.576 0-.675-1.046-1.238-1.744-1.238H10.03l.405-1.007.653-1.806h5.84c.697 0 1.26-.388 1.26-1.069 0-.889-.731-1.744-1.632-1.744H3.041l.985-2.25z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M14.192 4.404h1.181l-.506 1.126h-1.182zM7.44 18.47h1.182l-.506 1.125H6.934zm8.44-14.066h1.181l-.506 1.126h-1.182zM9.128 18.47h1.182l-.506 1.125H8.622z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M9.747 9.47H6.934l-3.893 8.372a.444.444 0 0 0 .405.63h9.677v-2.25H7.626a.444.444 0 0 1-.41-.63z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#LBT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#006',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4.907 6.25h11.482a3.55 3.55 0 0 1 3.576 3.52 2.71 2.71 0 0 1-1.165 2.22 2.7 2.7 0 0 1 1.2 2.23 3.6 3.6 0 0 1-3.626 3.532H14v-2h1.95c.8 0 1.55-.616 1.55-1.401 0-.6-.93-1.1-1.55-1.1h-5.701l.36-.896.58-1.605h5.191c.62 0 1.12-.345 1.12-.95 0-.79-.65-1.55-1.45-1.55H4.037l.875-2z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.948 5.249h1.05l-.45 1h-1.05zm-6 12.503h1.05l-.45 1h-1.05zm7.5-12.503H16.5l-.45 1H15zm-6 12.503h1.05l-.45 1h-1.05z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M9.997 9.751h-2.5l-3.46 7.442a.395.395 0 0 0 .36.56h8.601v-2H8.112a.394.394 0 0 1-.365-.56z'
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
                        id: 'LBT__a'
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
 * @component @name TokenLBT
 * @description Web3Icon for TokenLBT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDYiIGQ9Ik00LjAyIDUuNTNoMTIuOTE4YTMuOTk1IDMuOTk1IDAgMCAxIDQuMDIzIDMuOTYgMy4wNSAzLjA1IDAgMCAxLTEuMzExIDIuNDk4IDMuMDQgMy4wNCAwIDAgMSAxLjM1IDIuNTEgNC4wNSA0LjA1IDAgMCAxLTQuMDc5IDMuOTcySDE0LjI1di0yLjI1aDIuMTk0Yy45IDAgMS43NDQtLjY5MyAxLjc0NC0xLjU3NiAwLS42NzUtMS4wNDYtMS4yMzgtMS43NDQtMS4yMzhIMTAuMDNsLjQwNS0xLjAwNy42NTMtMS44MDZoNS44NGMuNjk3IDAgMS4yNi0uMzg4IDEuMjYtMS4wNjkgMC0uODg5LS43MzEtMS43NDQtMS42MzItMS43NDRIMy4wNDFsLjk4NS0yLjI1eiIvPgogICAgPHBhdGggZmlsbD0iIzAwNiIgZD0iTTE0LjE5MiA0LjQwNGgxLjE4MWwtLjUwNiAxLjEyNmgtMS4xODJ6TTcuNDQgMTguNDdoMS4xODJsLS41MDYgMS4xMjVINi45MzR6bTguNDQtMTQuMDY2aDEuMTgxbC0uNTA2IDEuMTI2aC0xLjE4MnpNOS4xMjggMTguNDdoMS4xODJsLS41MDYgMS4xMjVIOC42MjJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDA2IiBkPSJNOS43NDcgOS40N0g2LjkzNGwtMy44OTMgOC4zNzJhLjQ0NC40NDQgMCAwIDAgLjQwNS42M2g5LjY3N3YtMi4yNUg3LjYyNmEuNDQ1LjQ0NSAwIDAgMS0uNDEtLjYzeiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjAyIDUuNTNoMTIuOTE4YTMuOTk1IDMuOTk1IDAgMCAxIDQuMDIzIDMuOTYgMy4wNSAzLjA1IDAgMCAxLTEuMzExIDIuNDk4IDMuMDQgMy4wNCAwIDAgMSAxLjM1IDIuNTEgNC4wNSA0LjA1IDAgMCAxLTQuMDc5IDMuOTcySDE0LjI1di0yLjI1aDIuMTk0Yy45IDAgMS43NDQtLjY5MyAxLjc0NC0xLjU3NiAwLS42NzUtMS4wNDYtMS4yMzgtMS43NDQtMS4yMzhIMTAuMDNsLjQwNS0xLjAwNy42NTMtMS44MDZoNS44NGMuNjk3IDAgMS4yNi0uMzg4IDEuMjYtMS4wNjkgMC0uODg5LS43MzEtMS43NDQtMS42MzItMS43NDRIMy4wNDFsLjk4NS0yLjI1eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE0LjE5MiA0LjQwNGgxLjE4MWwtLjUwNiAxLjEyNmgtMS4xODJ6TTcuNDQgMTguNDdoMS4xODJsLS41MDYgMS4xMjVINi45MzR6bTguNDQtMTQuMDY2aDEuMTgxbC0uNTA2IDEuMTI2aC0xLjE4MnpNOS4xMjggMTguNDdoMS4xODJsLS41MDYgMS4xMjVIOC42MjJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNOS43NDcgOS40N0g2LjkzNGwtMy44OTMgOC4zNzJhLjQ0NC40NDQgMCAwIDAgLjQwNS42M2g5LjY3N3YtMi4yNUg3LjYyNmEuNDQ0LjQ0NCAwIDAgMS0uNDEtLjYzeiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNMQlRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDA2IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjkwNyA2LjI1aDExLjQ4MmEzLjU1IDMuNTUgMCAwIDEgMy41NzYgMy41MiAyLjcxIDIuNzEgMCAwIDEtMS4xNjUgMi4yMiAyLjcgMi43IDAgMCAxIDEuMiAyLjIzIDMuNiAzLjYgMCAwIDEtMy42MjYgMy41MzJIMTR2LTJoMS45NWMuOCAwIDEuNTUtLjYxNiAxLjU1LTEuNDAxIDAtLjYtLjkzLTEuMS0xLjU1LTEuMWgtNS43MDFsLjM2LS44OTYuNTgtMS42MDVoNS4xOTFjLjYyIDAgMS4xMi0uMzQ1IDEuMTItLjk1IDAtLjc5LS42NS0xLjU1LTEuNDUtMS41NUg0LjAzN2wuODc1LTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEzLjk0OCA1LjI0OWgxLjA1bC0uNDUgMWgtMS4wNXptLTYgMTIuNTAzaDEuMDVsLS40NSAxaC0xLjA1em03LjUtMTIuNTAzSDE2LjVsLS40NSAxSDE1em0tNiAxMi41MDNoMS4wNWwtLjQ1IDFoLTEuMDV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkuOTk3IDkuNzUxaC0yLjVsLTMuNDYgNy40NDJhLjM5NS4zOTUgMCAwIDAgLjM2LjU2aDguNjAxdi0ySDguMTEyYS4zOTQuMzk0IDAgMCAxLS4zNjUtLjU2eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJMQlRfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/LBT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenLBT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenLBT', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0d0xa04._.js.map