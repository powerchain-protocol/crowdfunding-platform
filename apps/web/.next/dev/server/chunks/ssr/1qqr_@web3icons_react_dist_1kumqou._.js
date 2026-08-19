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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenTROVE.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenTROVE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#TROVE__a)',
                d: 'M14.897 19.198a2.83 2.83 0 0 0 2.515 1.52h2.172a1.413 1.413 0 0 0 1.254-2.066L13.254 4.04a1.417 1.417 0 0 0-2.51 0L3.16 18.652a1.412 1.412 0 0 0 1.255 2.065h1.93a2.84 2.84 0 0 0 2.464-1.434l2.144-3.793a2.13 2.13 0 0 1-.81-.816 2.25 2.25 0 1 1 3.713 0 2.14 2.14 0 0 1-.872.85z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'TROVE__a',
                        x1: '11.999',
                        x2: '11.999',
                        y1: '3.275',
                        y2: '20.717',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#6036EF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#746E89'
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
                d: 'M14.897 19.198a2.83 2.83 0 0 0 2.515 1.52h2.172a1.413 1.413 0 0 0 1.254-2.066L13.254 4.04a1.417 1.417 0 0 0-2.51 0L3.16 18.652a1.412 1.412 0 0 0 1.255 2.065h1.93a2.84 2.84 0 0 0 2.464-1.434l2.144-3.793a2.13 2.13 0 0 1-.81-.816 2.25 2.25 0 1 1 3.713 0 2.14 2.14 0 0 1-.872.85z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#TROVE__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#TROVE__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M14.575 18.399a2.52 2.52 0 0 0 2.236 1.35h1.93c.945 0 1.55-1 1.115-1.836L13.114 4.925a1.26 1.26 0 0 0-2.23 0L4.142 17.913a1.255 1.255 0 0 0 1.115 1.836h1.716c.905 0 1.745-.49 2.19-1.275l1.906-3.371c-.3-.17-.55-.42-.72-.726a2 2 0 1 1 3.3 0 1.9 1.9 0 0 1-.775.756z'
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
                        id: 'TROVE__b',
                        x1: '11.999',
                        x2: '11.999',
                        y1: '4.244',
                        y2: '19.749',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#6036EF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#746E89'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'TROVE__a'
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
 * @component @name TokenTROVE
 * @description Web3Icon for TokenTROVE
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjVFJPVkVfX2EpIiBkPSJNMTQuODk3IDE5LjE5OGEyLjgzIDIuODMgMCAwIDAgMi41MTUgMS41MmgyLjE3MmExLjQxMyAxLjQxMyAwIDAgMCAxLjI1NC0yLjA2NkwxMy4yNTQgNC4wNGExLjQxNyAxLjQxNyAwIDAgMC0yLjUxIDBMMy4xNiAxOC42NTJhMS40MTIgMS40MTIgMCAwIDAgMS4yNTUgMi4wNjVoMS45M2EyLjg0IDIuODQgMCAwIDAgMi40NjQtMS40MzRsMi4xNDQtMy43OTNhMi4xMyAyLjEzIDAgMCAxLS44MS0uODE2IDIuMjUgMi4yNSAwIDEgMSAzLjcxMyAwIDIuMTQgMi4xNCAwIDAgMS0uODcyLjg1eiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJUUk9WRV9fYSIgeDE9IjExLjk5OSIgeDI9IjExLjk5OSIgeTE9IjMuMjc1IiB5Mj0iMjAuNzE3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM2MDM2RUYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzQ2RTg5Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC44OTcgMTkuMTk4YTIuODMgMi44MyAwIDAgMCAyLjUxNSAxLjUyaDIuMTcyYTEuNDEzIDEuNDEzIDAgMCAwIDEuMjU0LTIuMDY2TDEzLjI1NCA0LjA0YTEuNDE3IDEuNDE3IDAgMCAwLTIuNTEgMEwzLjE2IDE4LjY1MmExLjQxMiAxLjQxMiAwIDAgMCAxLjI1NSAyLjA2NWgxLjkzYTIuODQgMi44NCAwIDAgMCAyLjQ2NC0xLjQzNGwyLjE0NC0zLjc5M2EyLjEzIDIuMTMgMCAwIDEtLjgxLS44MTYgMi4yNSAyLjI1IDAgMSAxIDMuNzEzIDAgMi4xNCAyLjE0IDAgMCAxLS44NzIuODV6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNUUk9WRV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjVFJPVkVfX2IpIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC41NzUgMTguMzk5YTIuNTIgMi41MiAwIDAgMCAyLjIzNiAxLjM1aDEuOTNjLjk0NSAwIDEuNTUtMSAxLjExNS0xLjgzNkwxMy4xMTQgNC45MjVhMS4yNiAxLjI2IDAgMCAwLTIuMjMgMEw0LjE0MiAxNy45MTNhMS4yNTUgMS4yNTUgMCAwIDAgMS4xMTUgMS44MzZoMS43MTZjLjkwNSAwIDEuNzQ1LS40OSAyLjE5LTEuMjc1bDEuOTA2LTMuMzcxYy0uMy0uMTctLjU1LS40Mi0uNzItLjcyNmEyIDIgMCAxIDEgMy4zIDAgMS45IDEuOSAwIDAgMS0uNzc1Ljc1NnoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iVFJPVkVfX2IiIHgxPSIxMS45OTkiIHgyPSIxMS45OTkiIHkxPSI0LjI0NCIgeTI9IjE5Ljc0OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNjAzNkVGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzc0NkU4OSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJUUk9WRV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/TROVE
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenTROVE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenTROVE', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1kumqou._.js.map