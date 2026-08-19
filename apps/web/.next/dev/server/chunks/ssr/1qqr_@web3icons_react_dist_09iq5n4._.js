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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenREV3L.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenREV3L
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#REV3L__a)',
                d: 'M15.937 3.563 14.25 6.374H8.248c-.872 0-2.435.664-2.435 2.812 0 2.15 1.653 2.684 2.53 2.813h2.813l-4.219 8.438H3.281l3.094-6.188C5.25 13.867 3 12.872 3 9.187s3.375-5.624 5.062-5.624zM8.062 20.438l1.407-2.813h6.283c.872 0 2.435-.664 2.435-2.812 0-2.15-1.653-2.684-2.53-2.813h-3.094l4.5-8.437h3.656l-3.094 6.13c1.125.395 3.375 1.435 3.375 5.12s-2.813 5.624-5.063 5.624z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'REV3L__a',
                        x1: '8.304',
                        x2: '15.388',
                        y1: '4.467',
                        y2: '20.044',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#242A3F'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.38',
                                stopColor: '#321B65'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.73',
                                stopColor: '#622065'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#C56058'
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
                d: 'M15.937 3.563 14.25 6.374H8.248c-.872 0-2.436.664-2.436 2.812 0 2.15 1.654 2.684 2.532 2.813h2.812l-4.219 8.437H3.281l3.094-6.187C5.25 13.867 3 12.872 3 9.187s3.375-5.624 5.062-5.624zM8.062 20.437l1.407-2.812h6.283c.872 0 2.435-.664 2.435-2.813S16.534 12.13 15.657 12h-3.094l4.5-8.437h3.656l-3.094 6.13c1.125.395 3.375 1.435 3.375 5.12s-2.813 5.624-5.063 5.624z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#REV3L__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#REV3L__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M15.5 4.5 14 7H8.665C7.89 7 6.5 7.59 6.5 9.5s1.47 2.385 2.25 2.5h2.5L7.5 19.5H4.25L7 14c-1-.34-3-1.225-3-4.5s3-5 4.5-5zm-7 15L9.75 17h5.585c.775 0 2.165-.59 2.165-2.5s-1.47-2.385-2.25-2.5H12.5l4-7.5h3.25L17 9.95c1 .35 3 1.275 3 4.55s-2.5 5-4.5 5z'
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
                        id: 'REV3L__b',
                        x1: '8.714',
                        x2: '15.012',
                        y1: '5.304',
                        y2: '19.15',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#242A3F'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.38',
                                stopColor: '#321B65'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.73',
                                stopColor: '#622065'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#C56058'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'REV3L__a'
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
 * @component @name TokenREV3L
 * @description Web3Icon for TokenREV3L
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjUkVWM0xfX2EpIiBkPSJNMTUuOTM3IDMuNTYzIDE0LjI1IDYuMzc0SDguMjQ4Yy0uODcyIDAtMi40MzUuNjY0LTIuNDM1IDIuODEyIDAgMi4xNSAxLjY1MyAyLjY4NCAyLjUzIDIuODEzaDIuODEzbC00LjIxOSA4LjQzOEgzLjI4MWwzLjA5NC02LjE4OEM1LjI1IDEzLjg2NyAzIDEyLjg3MiAzIDkuMTg3czMuMzc1LTUuNjI0IDUuMDYyLTUuNjI0ek04LjA2MiAyMC40MzhsMS40MDctMi44MTNoNi4yODNjLjg3MiAwIDIuNDM1LS42NjQgMi40MzUtMi44MTIgMC0yLjE1LTEuNjUzLTIuNjg0LTIuNTMtMi44MTNoLTMuMDk0bDQuNS04LjQzN2gzLjY1NmwtMy4wOTQgNi4xM2MxLjEyNS4zOTUgMy4zNzUgMS40MzUgMy4zNzUgNS4xMnMtMi44MTMgNS42MjQtNS4wNjMgNS42MjR6Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlJFVjNMX19hIiB4MT0iOC4zMDQiIHgyPSIxNS4zODgiIHkxPSI0LjQ2NyIgeTI9IjIwLjA0NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMjQyQTNGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjM4IiBzdG9wLWNvbG9yPSIjMzIxQjY1Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjczIiBzdG9wLWNvbG9yPSIjNjIyMDY1Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0M1NjA1OCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNS45MzcgMy41NjMgMTQuMjUgNi4zNzRIOC4yNDhjLS44NzIgMC0yLjQzNi42NjQtMi40MzYgMi44MTIgMCAyLjE1IDEuNjU0IDIuNjg0IDIuNTMyIDIuODEzaDIuODEybC00LjIxOSA4LjQzN0gzLjI4MWwzLjA5NC02LjE4N0M1LjI1IDEzLjg2NyAzIDEyLjg3MiAzIDkuMTg3czMuMzc1LTUuNjI0IDUuMDYyLTUuNjI0ek04LjA2MiAyMC40MzdsMS40MDctMi44MTJoNi4yODNjLjg3MiAwIDIuNDM1LS42NjQgMi40MzUtMi44MTNTMTYuNTM0IDEyLjEzIDE1LjY1NyAxMmgtMy4wOTRsNC41LTguNDM3aDMuNjU2bC0zLjA5NCA2LjEzYzEuMTI1LjM5NSAzLjM3NSAxLjQzNSAzLjM3NSA1LjEycy0yLjgxMyA1LjYyNC01LjA2MyA1LjYyNHoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNSRVYzTF9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjUkVWM0xfX2IpIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNS41IDQuNSAxNCA3SDguNjY1QzcuODkgNyA2LjUgNy41OSA2LjUgOS41czEuNDcgMi4zODUgMi4yNSAyLjVoMi41TDcuNSAxOS41SDQuMjVMNyAxNGMtMS0uMzQtMy0xLjIyNS0zLTQuNXMzLTUgNC41LTV6bS03IDE1TDkuNzUgMTdoNS41ODVjLjc3NSAwIDIuMTY1LS41OSAyLjE2NS0yLjVzLTEuNDctMi4zODUtMi4yNS0yLjVIMTIuNWw0LTcuNWgzLjI1TDE3IDkuOTVjMSAuMzUgMyAxLjI3NSAzIDQuNTVzLTIuNSA1LTQuNSA1eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJSRVYzTF9fYiIgeDE9IjguNzE0IiB4Mj0iMTUuMDEyIiB5MT0iNS4zMDQiIHkyPSIxOS4xNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMjQyQTNGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjM4IiBzdG9wLWNvbG9yPSIjMzIxQjY1Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjczIiBzdG9wLWNvbG9yPSIjNjIyMDY1Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0M1NjA1OCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJSRVYzTF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/REV3L
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenREV3L = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenREV3L', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_09iq5n4._.js.map