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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenTRVL.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenTRVL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#TRVL__a)',
                d: 'M21 12c0 .563-.281 2.824-3.38 2.824-2.2 0-3.916-1.35-4.866-2.12a.045.045 0 0 0-.057 0 .045.045 0 0 0-.01.061c.776.956 2.126 2.65 2.126 4.86C14.813 19.228 12.675 21 12 21v-9z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#TRVL__b)',
                d: 'M6.375 9.187c2.2 0 3.91 1.345 4.866 2.121a.05.05 0 0 0 .033.015.05.05 0 0 0 .034-.015.045.045 0 0 0 0-.062c-.776-.956-2.126-2.666-2.126-4.871C9.182 3 11.719 3 12 3v9H3c0-.281 0-2.813 3.375-2.813'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'TRVL__a',
                        x1: '19.2',
                        x2: '3.011',
                        y1: '3.473',
                        y2: '19.211',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#8FA3A4'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#C1D0D1'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'TRVL__b',
                        x1: '12.006',
                        x2: '5.481',
                        y1: '3',
                        y2: '12.45',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#C7D5D6'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#5A6966'
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
                d: 'M21 12c0 .563-.281 2.824-3.38 2.824-2.2 0-3.916-1.35-4.866-2.12a.045.045 0 0 0-.056 0 .045.045 0 0 0-.012.061c.777.956 2.127 2.65 2.127 4.86C14.813 19.228 12.675 21 12 21v-9zM6.375 9.187c2.2 0 3.91 1.345 4.866 2.121q.006.008.015.011a.044.044 0 0 0 .052-.01.045.045 0 0 0 0-.063c-.776-.956-2.126-2.666-2.126-4.871C9.182 3 11.719 3 12 3v9H3c0-.281 0-2.813 3.375-2.813'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#TRVL__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#TRVL__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M20 12c0 .5-.25 2.51-3.005 2.51-1.955 0-3.48-1.2-4.325-1.885a.04.04 0 0 0-.05 0 .04.04 0 0 0-.01.055c.69.85 1.89 2.355 1.89 4.32 0 1.425-1.9 3-2.5 3v-8zM7 9.5c1.955 0 3.475 1.195 4.325 1.885a.04.04 0 0 0 .03.014l.016-.004.014-.01a.04.04 0 0 0 0-.055c-.69-.85-1.89-2.37-1.89-4.33 0-3 2.255-3 2.505-3v8H4c0-.25 0-2.5 3-2.5'
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
                        id: 'TRVL__b',
                        x1: '18.4',
                        x2: '4.01',
                        y1: '4.42',
                        y2: '18.41',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#8FA3A4'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#C1D0D1'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'TRVL__a'
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
 * @component @name TokenTRVL
 * @description Web3Icon for TokenTRVL
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjVFJWTF9fYSkiIGQ9Ik0yMSAxMmMwIC41NjMtLjI4MSAyLjgyNC0zLjM4IDIuODI0LTIuMiAwLTMuOTE2LTEuMzUtNC44NjYtMi4xMmEuMDQ1LjA0NSAwIDAgMC0uMDU3IDAgLjA0NS4wNDUgMCAwIDAtLjAxLjA2MWMuNzc2Ljk1NiAyLjEyNiAyLjY1IDIuMTI2IDQuODZDMTQuODEzIDE5LjIyOCAxMi42NzUgMjEgMTIgMjF2LTl6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI1RSVkxfX2IpIiBkPSJNNi4zNzUgOS4xODdjMi4yIDAgMy45MSAxLjM0NSA0Ljg2NiAyLjEyMWEuMDUuMDUgMCAwIDAgLjAzMy4wMTUuMDUuMDUgMCAwIDAgLjAzNC0uMDE1LjA0NS4wNDUgMCAwIDAgMC0uMDYyYy0uNzc2LS45NTYtMi4xMjYtMi42NjYtMi4xMjYtNC44NzFDOS4xODIgMyAxMS43MTkgMyAxMiAzdjlIM2MwLS4yODEgMC0yLjgxMyAzLjM3NS0yLjgxMyIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJUUlZMX19hIiB4MT0iMTkuMiIgeDI9IjMuMDExIiB5MT0iMy40NzMiIHkyPSIxOS4yMTEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzhGQTNBNCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNDMUQwRDEiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iVFJWTF9fYiIgeDE9IjEyLjAwNiIgeDI9IjUuNDgxIiB5MT0iMyIgeTI9IjEyLjQ1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNDN0Q1RDYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNUE2OTY2Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMSAxMmMwIC41NjMtLjI4MSAyLjgyNC0zLjM4IDIuODI0LTIuMiAwLTMuOTE2LTEuMzUtNC44NjYtMi4xMmEuMDQ1LjA0NSAwIDAgMC0uMDU2IDAgLjA0NS4wNDUgMCAwIDAtLjAxMi4wNjFjLjc3Ny45NTYgMi4xMjcgMi42NSAyLjEyNyA0Ljg2QzE0LjgxMyAxOS4yMjggMTIuNjc1IDIxIDEyIDIxdi05ek02LjM3NSA5LjE4N2MyLjIgMCAzLjkxIDEuMzQ1IDQuODY2IDIuMTIxcS4wMDYuMDA4LjAxNS4wMTFhLjA0NC4wNDQgMCAwIDAgLjA1Mi0uMDEuMDQ1LjA0NSAwIDAgMCAwLS4wNjNjLS43NzYtLjk1Ni0yLjEyNi0yLjY2Ni0yLjEyNi00Ljg3MUM5LjE4MiAzIDExLjcxOSAzIDEyIDN2OUgzYzAtLjI4MSAwLTIuODEzIDMuMzc1LTIuODEzIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNUUlZMX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNUUlZMX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjAgMTJjMCAuNS0uMjUgMi41MS0zLjAwNSAyLjUxLTEuOTU1IDAtMy40OC0xLjItNC4zMjUtMS44ODVhLjA0LjA0IDAgMCAwLS4wNSAwIC4wNC4wNCAwIDAgMC0uMDEuMDU1Yy42OS44NSAxLjg5IDIuMzU1IDEuODkgNC4zMiAwIDEuNDI1LTEuOSAzLTIuNSAzdi04ek03IDkuNWMxLjk1NSAwIDMuNDc1IDEuMTk1IDQuMzI1IDEuODg1YS4wNC4wNCAwIDAgMCAuMDMuMDE0bC4wMTYtLjAwNC4wMTQtLjAxYS4wNC4wNCAwIDAgMCAwLS4wNTVjLS42OS0uODUtMS44OS0yLjM3LTEuODktNC4zMyAwLTMgMi4yNTUtMyAyLjUwNS0zdjhINGMwLS4yNSAwLTIuNSAzLTIuNSIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJUUlZMX19iIiB4MT0iMTguNCIgeDI9IjQuMDEiIHkxPSI0LjQyIiB5Mj0iMTguNDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzhGQTNBNCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNDMUQwRDEiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iVFJWTF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/TRVL
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenTRVL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenTRVL', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1bcc-11._.js.map