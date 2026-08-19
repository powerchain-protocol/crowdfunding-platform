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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMBX.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMBX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#MBX__a)',
                d: 'M3 18.75V5.25h3.594l5.322 5.186 5.326-5.186H21v13.5h-.338l-2.345-2.306-4.039-3.74.13-.113 3.78 3.498V7.8l-6.272 5.709-6.103-5.71v8.291l3.78-3.498.129.112-6.525 6.047H3.05l-.023-.023zm8.364-4.573.13.112-4.815 4.461H6.43zm-.45-.405.13.112-5.248 4.866h-.254zm-.427-.383.13.113-5.665 5.248h-.253l5.793-5.36zm-.416-.37.129.112-6.064 5.619h-.253zm2.565 1.158-.13.112 4.815 4.461h.248zm.45-.405-.13.112 5.248 4.866h.253zm.427-.383-.13.113 5.665 5.248h.253l-5.793-5.36zm.416-.37-.129.112 6.064 5.619h.253z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'MBX__a',
                        x1: '3',
                        x2: '13.215',
                        y1: '6.263',
                        y2: '16.247',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#4BABFF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.89',
                                stopColor: '#9600FF'
                            }
                        ]
                    ]
                ]
            ]
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3 18.75V5.25h3.594l5.322 5.186 5.326-5.186H21v13.5h-.338l-2.345-2.306-4.039-3.74.13-.113 3.78 3.498V7.8l-6.272 5.709-6.104-5.71v8.291l3.78-3.498.13.112-6.525 6.047H3.05l-.023-.023zm8.364-4.573.13.112-4.815 4.461H6.43zm-.45-.405.13.112-5.248 4.866h-.254zm-.427-.383.13.113-5.665 5.248h-.253l5.793-5.36zm-.416-.37.129.112-6.064 5.619h-.253zm2.565 1.158-.13.112 4.815 4.461h.248zm.45-.405-.13.112 5.248 4.866h.253zm.427-.383-.13.113 5.665 5.248h.253l-5.793-5.36zm.416-.37-.13.112 6.065 5.619h.253z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MBX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#MBX__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4 18V6h3.195l4.73 4.61L16.66 6H20v12h-.3l-2.085-2.05-3.59-3.325.115-.1 3.36 3.11v-7.37l-5.575 5.075L6.5 8.265v7.37l3.36-3.11.115.1L4.175 18h-.13l-.02-.02zm7.435-4.065.115.1L7.27 18h-.22zm-.4-.36.115.1L6.485 18H6.26zm-.38-.34.115.1L5.735 18H5.51l5.15-4.765zm-.37-.33.115.1L5.01 18h-.225zm2.28 1.03-.115.1L16.73 18h.22zm.4-.36-.115.1L17.515 18h.225zm.38-.34-.115.1L18.265 18h.225l-5.15-4.765zm.37-.33-.115.1L18.99 18h.225z'
                    }
                ]
            ]
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'MBX__b',
                        x1: '4',
                        x2: '13.08',
                        y1: '6.9',
                        y2: '15.775',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#4BABFF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.89',
                                stopColor: '#9600FF'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'MBX__a'
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
 * @component @name TokenMBX
 * @description Web3Icon for TokenMBX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjTUJYX19hKSIgZD0iTTMgMTguNzVWNS4yNWgzLjU5NGw1LjMyMiA1LjE4NiA1LjMyNi01LjE4NkgyMXYxMy41aC0uMzM4bC0yLjM0NS0yLjMwNi00LjAzOS0zLjc0LjEzLS4xMTMgMy43OCAzLjQ5OFY3LjhsLTYuMjcyIDUuNzA5LTYuMTAzLTUuNzF2OC4yOTFsMy43OC0zLjQ5OC4xMjkuMTEyLTYuNTI1IDYuMDQ3SDMuMDVsLS4wMjMtLjAyM3ptOC4zNjQtNC41NzMuMTMuMTEyLTQuODE1IDQuNDYxSDYuNDN6bS0uNDUtLjQwNS4xMy4xMTItNS4yNDggNC44NjZoLS4yNTR6bS0uNDI3LS4zODMuMTMuMTEzLTUuNjY1IDUuMjQ4aC0uMjUzbDUuNzkzLTUuMzZ6bS0uNDE2LS4zNy4xMjkuMTEyLTYuMDY0IDUuNjE5aC0uMjUzem0yLjU2NSAxLjE1OC0uMTMuMTEyIDQuODE1IDQuNDYxaC4yNDh6bS40NS0uNDA1LS4xMy4xMTIgNS4yNDggNC44NjZoLjI1M3ptLjQyNy0uMzgzLS4xMy4xMTMgNS42NjUgNS4yNDhoLjI1M2wtNS43OTMtNS4zNnptLjQxNi0uMzctLjEyOS4xMTIgNi4wNjQgNS42MTloLjI1M3oiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iTUJYX19hIiB4MT0iMyIgeDI9IjEzLjIxNSIgeTE9IjYuMjYzIiB5Mj0iMTYuMjQ3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM0QkFCRkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuODkiIHN0b3AtY29sb3I9IiM5NjAwRkYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zIDE4Ljc1VjUuMjVoMy41OTRsNS4zMjIgNS4xODYgNS4zMjYtNS4xODZIMjF2MTMuNWgtLjMzOGwtMi4zNDUtMi4zMDYtNC4wMzktMy43NC4xMy0uMTEzIDMuNzggMy40OThWNy44bC02LjI3MiA1LjcwOS02LjEwNC01LjcxdjguMjkxbDMuNzgtMy40OTguMTMuMTEyLTYuNTI1IDYuMDQ3SDMuMDVsLS4wMjMtLjAyM3ptOC4zNjQtNC41NzMuMTMuMTEyLTQuODE1IDQuNDYxSDYuNDN6bS0uNDUtLjQwNS4xMy4xMTItNS4yNDggNC44NjZoLS4yNTR6bS0uNDI3LS4zODMuMTMuMTEzLTUuNjY1IDUuMjQ4aC0uMjUzbDUuNzkzLTUuMzZ6bS0uNDE2LS4zNy4xMjkuMTEyLTYuMDY0IDUuNjE5aC0uMjUzem0yLjU2NSAxLjE1OC0uMTMuMTEyIDQuODE1IDQuNDYxaC4yNDh6bS40NS0uNDA1LS4xMy4xMTIgNS4yNDggNC44NjZoLjI1M3ptLjQyNy0uMzgzLS4xMy4xMTMgNS42NjUgNS4yNDhoLjI1M2wtNS43OTMtNS4zNnptLjQxNi0uMzctLjEzLjExMiA2LjA2NSA1LjYxOWguMjUzeiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNQlhfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI01CWF9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQgMThWNmgzLjE5NWw0LjczIDQuNjFMMTYuNjYgNkgyMHYxMmgtLjNsLTIuMDg1LTIuMDUtMy41OS0zLjMyNS4xMTUtLjEgMy4zNiAzLjExdi03LjM3bC01LjU3NSA1LjA3NUw2LjUgOC4yNjV2Ny4zN2wzLjM2LTMuMTEuMTE1LjFMNC4xNzUgMThoLS4xM2wtLjAyLS4wMnptNy40MzUtNC4wNjUuMTE1LjFMNy4yNyAxOGgtLjIyem0tLjQtLjM2LjExNS4xTDYuNDg1IDE4SDYuMjZ6bS0uMzgtLjM0LjExNS4xTDUuNzM1IDE4SDUuNTFsNS4xNS00Ljc2NXptLS4zNy0uMzMuMTE1LjFMNS4wMSAxOGgtLjIyNXptMi4yOCAxLjAzLS4xMTUuMUwxNi43MyAxOGguMjJ6bS40LS4zNi0uMTE1LjFMMTcuNTE1IDE4aC4yMjV6bS4zOC0uMzQtLjExNS4xTDE4LjI2NSAxOGguMjI1bC01LjE1LTQuNzY1em0uMzctLjMzLS4xMTUuMUwxOC45OSAxOGguMjI1eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJNQlhfX2IiIHgxPSI0IiB4Mj0iMTMuMDgiIHkxPSI2LjkiIHkyPSIxNS43NzUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzRCQUJGRiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii44OSIgc3RvcC1jb2xvcj0iIzk2MDBGRiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJNQlhfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/MBX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMBX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMBX', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1k693zu._.js.map