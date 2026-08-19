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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenAAVE.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenAAVE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#9391F7',
                d: 'M9.61 16.5c1.012 0 1.831-.786 1.831-1.755 0-.97-.82-1.755-1.83-1.755-1.012 0-1.831.786-1.831 1.755 0 .97.82 1.755 1.83 1.755m4.786 0c1.01 0 1.83-.786 1.83-1.755 0-.97-.82-1.755-1.83-1.755s-1.831.786-1.831 1.755c0 .97.82 1.755 1.83 1.755'
            }
        ],
        [
            'path',
            {
                fill: '#9391F7',
                d: 'M12 7.5c-4.971 0-9.001 3.937-9 8.792h2.3c0-3.638 2.976-6.588 6.7-6.588s6.7 2.95 6.7 6.588H21c0-4.855-4.03-8.792-9-8.792'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M9.61 16.5c1.012 0 1.831-.786 1.831-1.755 0-.97-.82-1.755-1.83-1.755-1.012 0-1.831.786-1.831 1.755 0 .97.82 1.755 1.83 1.755m4.786 0c1.01 0 1.83-.786 1.83-1.755 0-.97-.82-1.755-1.83-1.755s-1.831.786-1.831 1.755c0 .97.82 1.755 1.83 1.755'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 7.5c-4.971 0-9.001 3.937-9 8.792h2.3c0-3.638 2.976-6.588 6.7-6.588s6.7 2.95 6.7 6.588H21c0-4.855-4.03-8.792-9-8.792'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#AAVE__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#9391F7',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M9.876 16c.899 0 1.627-.698 1.627-1.56s-.728-1.56-1.627-1.56-1.627.698-1.627 1.56S8.977 16 9.876 16m4.254 0c.898 0 1.627-.698 1.627-1.56s-.729-1.56-1.628-1.56-1.627.698-1.627 1.56.729 1.56 1.627 1.56'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 8c-4.419 0-8.001 3.5-8 7.815h2.044c0-3.234 2.645-5.856 5.956-5.856 3.31 0 5.956 2.622 5.956 5.856H20C20 11.5 16.418 8 12 8'
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
                        id: 'AAVE__a'
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
 * @component @name TokenAAVE
 * @description Web3Icon for TokenAAVE
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM5MzkxRjciIGQ9Ik05LjYxIDE2LjVjMS4wMTIgMCAxLjgzMS0uNzg2IDEuODMxLTEuNzU1IDAtLjk3LS44Mi0xLjc1NS0xLjgzLTEuNzU1LTEuMDEyIDAtMS44MzEuNzg2LTEuODMxIDEuNzU1IDAgLjk3LjgyIDEuNzU1IDEuODMgMS43NTVtNC43ODYgMGMxLjAxIDAgMS44My0uNzg2IDEuODMtMS43NTUgMC0uOTctLjgyLTEuNzU1LTEuODMtMS43NTVzLTEuODMxLjc4Ni0xLjgzMSAxLjc1NWMwIC45Ny44MiAxLjc1NSAxLjgzIDEuNzU1Ii8+CiAgICA8cGF0aCBmaWxsPSIjOTM5MUY3IiBkPSJNMTIgNy41Yy00Ljk3MSAwLTkuMDAxIDMuOTM3LTkgOC43OTJoMi4zYzAtMy42MzggMi45NzYtNi41ODggNi43LTYuNTg4czYuNyAyLjk1IDYuNyA2LjU4OEgyMWMwLTQuODU1LTQuMDMtOC43OTItOS04Ljc5MiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05LjYxIDE2LjVjMS4wMTIgMCAxLjgzMS0uNzg2IDEuODMxLTEuNzU1IDAtLjk3LS44Mi0xLjc1NS0xLjgzLTEuNzU1LTEuMDEyIDAtMS44MzEuNzg2LTEuODMxIDEuNzU1IDAgLjk3LjgyIDEuNzU1IDEuODMgMS43NTVtNC43ODYgMGMxLjAxIDAgMS44My0uNzg2IDEuODMtMS43NTUgMC0uOTctLjgyLTEuNzU1LTEuODMtMS43NTVzLTEuODMxLjc4Ni0xLjgzMSAxLjc1NWMwIC45Ny44MiAxLjc1NSAxLjgzIDEuNzU1Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgNy41Yy00Ljk3MSAwLTkuMDAxIDMuOTM3LTkgOC43OTJoMi4zYzAtMy42MzggMi45NzYtNi41ODggNi43LTYuNTg4czYuNyAyLjk1IDYuNyA2LjU4OEgyMWMwLTQuODU1LTQuMDMtOC43OTItOS04Ljc5MiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNBQVZFX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzkzOTFGNyIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNOS44NzYgMTZjLjg5OSAwIDEuNjI3LS42OTggMS42MjctMS41NnMtLjcyOC0xLjU2LTEuNjI3LTEuNTYtMS42MjcuNjk4LTEuNjI3IDEuNTZTOC45NzcgMTYgOS44NzYgMTZtNC4yNTQgMGMuODk4IDAgMS42MjctLjY5OCAxLjYyNy0xLjU2cy0uNzI5LTEuNTYtMS42MjgtMS41Ni0xLjYyNy42OTgtMS42MjcgMS41Ni43MjkgMS41NiAxLjYyNyAxLjU2Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDhjLTQuNDE5IDAtOC4wMDEgMy41LTggNy44MTVoMi4wNDRjMC0zLjIzNCAyLjY0NS01Ljg1NiA1Ljk1Ni01Ljg1NiAzLjMxIDAgNS45NTYgMi42MjIgNS45NTYgNS44NTZIMjBDMjAgMTEuNSAxNi40MTggOCAxMiA4Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkFBVkVfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/AAVE
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenAAVE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenAAVE', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1epumjb._.js.map