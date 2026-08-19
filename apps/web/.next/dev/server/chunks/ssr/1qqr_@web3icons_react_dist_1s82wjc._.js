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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenBZRX.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenBZRX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#BZRX__a)',
                d: 'M3 6.6A3.6 3.6 0 0 1 6.6 3h2.025v3.937h1.688V3H17.4A3.6 3.6 0 0 1 21 6.6v10.8a3.6 3.6 0 0 1-3.6 3.6H6.6A3.6 3.6 0 0 1 3 17.4v-7.087h10.239c.36 0 .448.236.448.597v2.215c0 .362-.2.563-.562.563h-2.271c-.362 0-.541-.285-.541-.646v-1.604H8.625V13.3c0 1.357.875 2.075 2.229 2.075h2.385c1.354 0 2.136-.718 2.136-2.075v-2.39c0-1.356-.783-2.285-2.136-2.285H3z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'BZRX__a',
                        x1: '19.83',
                        x2: '5.43',
                        y1: '19.83',
                        y2: '5.43',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.159',
                                stopColor: '#003CDA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#33DFCC'
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
                d: 'M3 6.6A3.6 3.6 0 0 1 6.6 3h2.025v3.937h1.688V3H17.4A3.6 3.6 0 0 1 21 6.6v10.8a3.6 3.6 0 0 1-3.6 3.6H6.6A3.6 3.6 0 0 1 3 17.4v-7.087h10.239c.36 0 .448.236.448.597v2.215c0 .362-.2.563-.562.563h-2.271c-.362 0-.541-.285-.541-.646v-1.604H8.625V13.3c0 1.357.875 2.075 2.229 2.075h2.385c1.354 0 2.136-.718 2.136-2.075v-2.39c0-1.356-.783-2.285-2.136-2.285H3z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#BZRX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#BZRX__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4 7.2A3.2 3.2 0 0 1 7.2 4H9v3.5h1.5V4h6.3A3.2 3.2 0 0 1 20 7.2v9.6a3.2 3.2 0 0 1-3.2 3.2H7.2A3.2 3.2 0 0 1 4 16.8v-6.3h9.101c.321 0 .399.21.399.531V13c0 .322-.179.5-.5.5h-2.019c-.321 0-.481-.252-.481-.574V11.5H9v1.656C9 14.36 9.777 15 10.981 15h2.12C14.305 15 15 14.361 15 13.156V11.03C15 9.825 14.305 9 13.1 9H4z'
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
                        id: 'BZRX__b',
                        x1: '18.96',
                        x2: '6.16',
                        y1: '18.96',
                        y2: '6.16',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.159',
                                stopColor: '#003CDA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#33DFCC'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'BZRX__a'
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
 * @component @name TokenBZRX
 * @description Web3Icon for TokenBZRX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjQlpSWF9fYSkiIGQ9Ik0zIDYuNkEzLjYgMy42IDAgMCAxIDYuNiAzaDIuMDI1djMuOTM3aDEuNjg4VjNIMTcuNEEzLjYgMy42IDAgMCAxIDIxIDYuNnYxMC44YTMuNiAzLjYgMCAwIDEtMy42IDMuNkg2LjZBMy42IDMuNiAwIDAgMSAzIDE3LjR2LTcuMDg3aDEwLjIzOWMuMzYgMCAuNDQ4LjIzNi40NDguNTk3djIuMjE1YzAgLjM2Mi0uMi41NjMtLjU2Mi41NjNoLTIuMjcxYy0uMzYyIDAtLjU0MS0uMjg1LS41NDEtLjY0NnYtMS42MDRIOC42MjVWMTMuM2MwIDEuMzU3Ljg3NSAyLjA3NSAyLjIyOSAyLjA3NWgyLjM4NWMxLjM1NCAwIDIuMTM2LS43MTggMi4xMzYtMi4wNzV2LTIuMzljMC0xLjM1Ni0uNzgzLTIuMjg1LTIuMTM2LTIuMjg1SDN6Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkJaUlhfX2EiIHgxPSIxOS44MyIgeDI9IjUuNDMiIHkxPSIxOS44MyIgeTI9IjUuNDMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMTU5IiBzdG9wLWNvbG9yPSIjMDAzQ0RBIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMzREZDQyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zIDYuNkEzLjYgMy42IDAgMCAxIDYuNiAzaDIuMDI1djMuOTM3aDEuNjg4VjNIMTcuNEEzLjYgMy42IDAgMCAxIDIxIDYuNnYxMC44YTMuNiAzLjYgMCAwIDEtMy42IDMuNkg2LjZBMy42IDMuNiAwIDAgMSAzIDE3LjR2LTcuMDg3aDEwLjIzOWMuMzYgMCAuNDQ4LjIzNi40NDguNTk3djIuMjE1YzAgLjM2Mi0uMi41NjMtLjU2Mi41NjNoLTIuMjcxYy0uMzYyIDAtLjU0MS0uMjg1LS41NDEtLjY0NnYtMS42MDRIOC42MjVWMTMuM2MwIDEuMzU3Ljg3NSAyLjA3NSAyLjIyOSAyLjA3NWgyLjM4NWMxLjM1NCAwIDIuMTM2LS43MTggMi4xMzYtMi4wNzV2LTIuMzljMC0xLjM1Ni0uNzgzLTIuMjg1LTIuMTM2LTIuMjg1SDN6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNCWlJYX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNCWlJYX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNCA3LjJBMy4yIDMuMiAwIDAgMSA3LjIgNEg5djMuNWgxLjVWNGg2LjNBMy4yIDMuMiAwIDAgMSAyMCA3LjJ2OS42YTMuMiAzLjIgMCAwIDEtMy4yIDMuMkg3LjJBMy4yIDMuMiAwIDAgMSA0IDE2Ljh2LTYuM2g5LjEwMWMuMzIxIDAgLjM5OS4yMS4zOTkuNTMxVjEzYzAgLjMyMi0uMTc5LjUtLjUuNWgtMi4wMTljLS4zMjEgMC0uNDgxLS4yNTItLjQ4MS0uNTc0VjExLjVIOXYxLjY1NkM5IDE0LjM2IDkuNzc3IDE1IDEwLjk4MSAxNWgyLjEyQzE0LjMwNSAxNSAxNSAxNC4zNjEgMTUgMTMuMTU2VjExLjAzQzE1IDkuODI1IDE0LjMwNSA5IDEzLjEgOUg0eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJCWlJYX19iIiB4MT0iMTguOTYiIHgyPSI2LjE2IiB5MT0iMTguOTYiIHkyPSI2LjE2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjE1OSIgc3RvcC1jb2xvcj0iIzAwM0NEQSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzM0RGQ0MiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iQlpSWF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/BZRX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenBZRX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenBZRX', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1s82wjc._.js.map