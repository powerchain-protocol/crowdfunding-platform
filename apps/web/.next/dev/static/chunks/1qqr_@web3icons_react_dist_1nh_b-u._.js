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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenFLX.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenFLX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#FLX__a)',
                d: 'M16.263 3h-1.82l-.847 4.14a5 5 0 0 0-1.142-.303l.493-2.416H9.963l-.616 2.994a4.974 4.974 0 0 0-1.511 7.403L6.808 19.84A.96.96 0 0 0 7.74 21h1.814l.91-4.434q.56.15 1.17.17l-.583 2.843h2.984l.8-3.903a4.964 4.964 0 0 0 1.29-6.3l1.065-5.21A.962.962 0 0 0 16.258 3zm-4.5 10.895a2.132 2.132 0 1 0 0-4.264 2.132 2.132 0 0 0 0 4.264',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'FLX__a',
                        x1: '15.351',
                        x2: '3.87',
                        y1: '5.25',
                        y2: '13.428',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#77D8FE'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#4FDF9D'
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
                d: 'M16.263 3h-1.82l-.847 4.14a5 5 0 0 0-1.142-.303l.493-2.416H9.963l-.616 2.994a4.974 4.974 0 0 0-1.511 7.403L6.808 19.84A.96.96 0 0 0 7.74 21h1.814l.91-4.434q.56.15 1.17.17l-.583 2.843h2.984l.8-3.903a4.964 4.964 0 0 0 1.29-6.3l1.065-5.21A.962.962 0 0 0 16.258 3zm-4.5 10.895a2.131 2.131 0 1 0 0-4.263 2.131 2.131 0 0 0 0 4.263',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#FLX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#FLX__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M15.789 4h-1.617l-.753 3.68a4.5 4.5 0 0 0-1.015-.27l.438-2.147h-2.653l-.547 2.661a4.42 4.42 0 0 0-1.343 6.581l-.914 4.463A.855.855 0 0 0 8.215 20h1.612l.808-3.941q.498.132 1.04.152l-.518 2.526h2.653l.712-3.47a4.41 4.41 0 0 0 1.145-5.6l.947-4.631A.854.854 0 0 0 15.784 4zm-4 9.684a1.895 1.895 0 1 0 0-3.79 1.895 1.895 0 0 0 0 3.79',
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
                    'linearGradient',
                    {
                        id: 'FLX__b',
                        x1: '14.979',
                        x2: '4.774',
                        y1: '6',
                        y2: '13.269',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#77D8FE'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#4FDF9D'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'FLX__a'
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
 * @component @name TokenFLX
 * @description Web3Icon for TokenFLX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjRkxYX19hKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMjYzIDNoLTEuODJsLS44NDcgNC4xNGE1IDUgMCAwIDAtMS4xNDItLjMwM2wuNDkzLTIuNDE2SDkuOTYzbC0uNjE2IDIuOTk0YTQuOTc0IDQuOTc0IDAgMCAwLTEuNTExIDcuNDAzTDYuODA4IDE5Ljg0QS45Ni45NiAwIDAgMCA3Ljc0IDIxaDEuODE0bC45MS00LjQzNHEuNTYuMTUgMS4xNy4xN2wtLjU4MyAyLjg0M2gyLjk4NGwuOC0zLjkwM2E0Ljk2NCA0Ljk2NCAwIDAgMCAxLjI5LTYuM2wxLjA2NS01LjIxQS45NjIuOTYyIDAgMCAwIDE2LjI1OCAzem0tNC41IDEwLjg5NWEyLjEzMiAyLjEzMiAwIDEgMCAwLTQuMjY0IDIuMTMyIDIuMTMyIDAgMCAwIDAgNC4yNjQiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJGTFhfX2EiIHgxPSIxNS4zNTEiIHgyPSIzLjg3IiB5MT0iNS4yNSIgeTI9IjEzLjQyOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNzdEOEZFIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzRGREY5RCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjI2MyAzaC0xLjgybC0uODQ3IDQuMTRhNSA1IDAgMCAwLTEuMTQyLS4zMDNsLjQ5My0yLjQxNkg5Ljk2M2wtLjYxNiAyLjk5NGE0Ljk3NCA0Ljk3NCAwIDAgMC0xLjUxMSA3LjQwM0w2LjgwOCAxOS44NEEuOTYuOTYgMCAwIDAgNy43NCAyMWgxLjgxNGwuOTEtNC40MzRxLjU2LjE1IDEuMTcuMTdsLS41ODMgMi44NDNoMi45ODRsLjgtMy45MDNhNC45NjQgNC45NjQgMCAwIDAgMS4yOS02LjNsMS4wNjUtNS4yMUEuOTYyLjk2MiAwIDAgMCAxNi4yNTggM3ptLTQuNSAxMC44OTVhMi4xMzEgMi4xMzEgMCAxIDAgMC00LjI2MyAyLjEzMSAyLjEzMSAwIDAgMCAwIDQuMjYzIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNGTFhfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0ZMWF9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTUuNzg5IDRoLTEuNjE3bC0uNzUzIDMuNjhhNC41IDQuNSAwIDAgMC0xLjAxNS0uMjdsLjQzOC0yLjE0N2gtMi42NTNsLS41NDcgMi42NjFhNC40MiA0LjQyIDAgMCAwLTEuMzQzIDYuNTgxbC0uOTE0IDQuNDYzQS44NTUuODU1IDAgMCAwIDguMjE1IDIwaDEuNjEybC44MDgtMy45NDFxLjQ5OC4xMzIgMS4wNC4xNTJsLS41MTggMi41MjZoMi42NTNsLjcxMi0zLjQ3YTQuNDEgNC40MSAwIDAgMCAxLjE0NS01LjZsLjk0Ny00LjYzMUEuODU0Ljg1NCAwIDAgMCAxNS43ODQgNHptLTQgOS42ODRhMS44OTUgMS44OTUgMCAxIDAgMC0zLjc5IDEuODk1IDEuODk1IDAgMCAwIDAgMy43OSIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkZMWF9fYiIgeDE9IjE0Ljk3OSIgeDI9IjQuNzc0IiB5MT0iNiIgeTI9IjEzLjI2OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNzdEOEZFIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzRGREY5RCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJGTFhfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/FLX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenFLX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenFLX', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1nh_b-u._.js.map