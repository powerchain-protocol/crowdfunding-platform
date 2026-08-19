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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkHolesky.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkHolesky
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#8FFCF3',
                d: 'M12 3v6.651l5.625 2.516z'
            }
        ],
        [
            'path',
            {
                fill: '#CABCF8',
                d: 'm12 3-5.625 9.166L12 9.653z'
            }
        ],
        [
            'path',
            {
                fill: '#CBA7F5',
                d: 'M12 16.478V21l5.625-7.784z'
            }
        ],
        [
            'path',
            {
                fill: '#74A0F3',
                d: 'M12 21v-4.522l-5.625-3.262z'
            }
        ],
        [
            'path',
            {
                fill: '#CBA7F5',
                d: 'm12 15.43 5.625-3.263L12 9.652z'
            }
        ],
        [
            'path',
            {
                fill: '#74A0F3',
                d: 'M6.375 12.167 12 15.43V9.652z'
            }
        ],
        [
            'path',
            {
                fill: '#202699',
                d: 'm12 15.43-5.625-3.263L12 3l5.624 9.166zm-5.252-3.528 5.161-8.41v6.114zm-.077.229 5.238-2.327v5.364zm5.418-2.327v5.364l5.234-3.037zm0-.198 5.161 2.296-5.161-8.41z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#202699',
                d: 'm12 16.406-5.625-3.195L12 21l5.624-7.79zm-4.995-2.633 4.904 2.79v4.005zm5.084 2.79v4.005l4.905-6.795z',
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
                d: 'M12 3v6.652l5.625 2.516zm0 0-5.625 9.166L12 9.652zm0 13.478V21l5.625-7.785zM12 21v-4.522l-5.625-3.263z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm12 15.43 5.625-3.263L12 9.652zm-5.625-3.263L12 15.43V9.652z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm12 15.43-5.625-3.262L12 3l5.625 9.166zm-5.25-3.528 5.162-8.41v6.115zm-.077.229 5.239-2.327v5.364zm5.418-2.327v5.364l5.233-3.037zm0-.197 5.162 2.295-5.162-8.41z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm12 16.407-5.625-3.195L12 21l5.625-7.789zm-4.995-2.633 4.906 2.79v4.005zm5.085 2.79v4.005l4.904-6.795z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ethereum__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#8FFCF3',
                        d: 'M12 4v5.912l5 2.237z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#CABCF8',
                        d: 'm12 4-5 8.148 5-2.235z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#CBA7F5',
                        d: 'M12 15.98V20l5-6.92z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#74A0F3',
                        d: 'M12 20v-4.02l-5-2.9z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#CBA7F5',
                        d: 'm12 15.049 5-2.9-5-2.236z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#74A0F3',
                        d: 'm7 12.149 5 2.9V9.913z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#202699',
                        d: 'm12 15.048-5-2.9L12 4l5 8.148zm-4.67-3.136 4.588-7.475v5.435zm-.068.204 4.656-2.068v4.768zm4.816-2.068v4.768l4.653-2.7zm0-.176 4.588 2.04-4.588-7.475z',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#202699',
                        d: 'm12 15.917-5-2.84L12 20l5-6.924zm-4.44-2.341 4.36 2.48v3.56zm4.519 2.48v3.56l4.36-6.04z',
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
                        id: 'ethereum__a'
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
 * @component @name NetworkHolesky
 * @description Web3Icon for NetworkHolesky
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM4RkZDRjMiIGQ9Ik0xMiAzdjYuNjUxbDUuNjI1IDIuNTE2eiIvPgogICAgPHBhdGggZmlsbD0iI0NBQkNGOCIgZD0ibTEyIDMtNS42MjUgOS4xNjZMMTIgOS42NTN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjQ0JBN0Y1IiBkPSJNMTIgMTYuNDc4VjIxbDUuNjI1LTcuNzg0eiIvPgogICAgPHBhdGggZmlsbD0iIzc0QTBGMyIgZD0iTTEyIDIxdi00LjUyMmwtNS42MjUtMy4yNjJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjQ0JBN0Y1IiBkPSJtMTIgMTUuNDMgNS42MjUtMy4yNjNMMTIgOS42NTJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNzRBMEYzIiBkPSJNNi4zNzUgMTIuMTY3IDEyIDE1LjQzVjkuNjUyeiIvPgogICAgPHBhdGggZmlsbD0iIzIwMjY5OSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTIgMTUuNDMtNS42MjUtMy4yNjNMMTIgM2w1LjYyNCA5LjE2NnptLTUuMjUyLTMuNTI4IDUuMTYxLTguNDF2Ni4xMTR6bS0uMDc3LjIyOSA1LjIzOC0yLjMyN3Y1LjM2NHptNS40MTgtMi4zMjd2NS4zNjRsNS4yMzQtMy4wMzd6bTAtLjE5OCA1LjE2MSAyLjI5Ni01LjE2MS04LjQxeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjMjAyNjk5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0xMiAxNi40MDYtNS42MjUtMy4xOTVMMTIgMjFsNS42MjQtNy43OXptLTQuOTk1LTIuNjMzIDQuOTA0IDIuNzl2NC4wMDV6bTUuMDg0IDIuNzl2NC4wMDVsNC45MDUtNi43OTV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAzdjYuNjUybDUuNjI1IDIuNTE2em0wIDAtNS42MjUgOS4xNjZMMTIgOS42NTJ6bTAgMTMuNDc4VjIxbDUuNjI1LTcuNzg1ek0xMiAyMXYtNC41MjJsLTUuNjI1LTMuMjYzeiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTEyIDE1LjQzIDUuNjI1LTMuMjYzTDEyIDkuNjUyem0tNS42MjUtMy4yNjNMMTIgMTUuNDNWOS42NTJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0xMiAxNS40My01LjYyNS0zLjI2MkwxMiAzbDUuNjI1IDkuMTY2em0tNS4yNS0zLjUyOCA1LjE2Mi04LjQxdjYuMTE1em0tLjA3Ny4yMjkgNS4yMzktMi4zMjd2NS4zNjR6bTUuNDE4LTIuMzI3djUuMzY0bDUuMjMzLTMuMDM3em0wLS4xOTcgNS4xNjIgMi4yOTUtNS4xNjItOC40MXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTIgMTYuNDA3LTUuNjI1LTMuMTk1TDEyIDIxbDUuNjI1LTcuNzg5em0tNC45OTUtMi42MzMgNC45MDYgMi43OXY0LjAwNXptNS4wODUgMi43OXY0LjAwNWw0LjkwNC02Ljc5NXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNldGhlcmV1bV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzhGRkNGMyIgZD0iTTEyIDR2NS45MTJsNSAyLjIzN3oiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjQ0FCQ0Y4IiBkPSJtMTIgNC01IDguMTQ4IDUtMi4yMzV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0NCQTdGNSIgZD0iTTEyIDE1Ljk4VjIwbDUtNi45MnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNzRBMEYzIiBkPSJNMTIgMjB2LTQuMDJsLTUtMi45eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNDQkE3RjUiIGQ9Im0xMiAxNS4wNDkgNS0yLjktNS0yLjIzNnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNzRBMEYzIiBkPSJtNyAxMi4xNDkgNSAyLjlWOS45MTN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzIwMjY5OSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTIgMTUuMDQ4LTUtMi45TDEyIDRsNSA4LjE0OHptLTQuNjctMy4xMzYgNC41ODgtNy40NzV2NS40MzV6bS0uMDY4LjIwNCA0LjY1Ni0yLjA2OHY0Ljc2OHptNC44MTYtMi4wNjh2NC43NjhsNC42NTMtMi43em0wLS4xNzYgNC41ODggMi4wNC00LjU4OC03LjQ3NXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMyMDI2OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTEyIDE1LjkxNy01LTIuODRMMTIgMjBsNS02LjkyNHptLTQuNDQtMi4zNDEgNC4zNiAyLjQ4djMuNTZ6bTQuNTE5IDIuNDh2My41Nmw0LjM2LTYuMDR6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iZXRoZXJldW1fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/networks/holesky
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkHolesky = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkHolesky', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1r1hwpi._.js.map