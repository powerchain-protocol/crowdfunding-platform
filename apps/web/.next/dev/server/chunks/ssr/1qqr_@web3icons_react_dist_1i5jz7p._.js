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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkNearProtocol.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkNearProtocol
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#00EC97',
                d: 'm17.425 3.92-3.76 5.58c-.257.385.244.835.604.52l3.28-3.214c.095-.083.236-.026.236.115v10.062c0 .135-.18.192-.256.096L6.754 3.681a1.85 1.85 0 0 0-1.459-.68C4.138 3 3 3.584 3 4.922V19.07a1.922 1.922 0 0 0 3.555 1.003l3.754-5.58c.257-.385-.238-.835-.598-.52l-3.26 3.279c-.096.083-.237.026-.237-.117V7.101c0-.14.18-.192.257-.096L17.226 20.32c.36.444.9.681 1.46.681C19.848 21 21 20.421 21 19.078V4.93a1.93 1.93 0 0 0-3.575-1.003z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm17.425 3.92-3.76 5.58c-.257.385.244.835.604.52l3.28-3.214c.095-.083.236-.026.236.115v10.062c0 .135-.18.192-.256.096L6.754 3.681a1.85 1.85 0 0 0-1.459-.68C4.138 3 3 3.584 3 4.922V19.07a1.922 1.922 0 0 0 3.555 1.003l3.754-5.58c.257-.385-.238-.835-.598-.52l-3.26 3.279c-.096.083-.237.026-.237-.117V7.101c0-.14.18-.192.257-.096L17.226 20.32c.36.444.9.681 1.46.681C19.848 21 21 20.421 21 19.078V4.93a1.93 1.93 0 0 0-3.575-1.003z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#near-protocol__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#00EC97',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'm16.823 4.818-3.343 4.96c-.228.342.217.742.537.462l2.915-2.857c.085-.074.21-.023.21.102v8.944c0 .12-.16.171-.227.086L7.337 4.605A1.64 1.64 0 0 0 6.04 4C5.012 4 4 4.52 4 5.71v12.575a1.708 1.708 0 0 0 3.16.892l3.337-4.96c.228-.342-.212-.742-.532-.462l-2.897 2.914c-.085.074-.21.023-.21-.104v-8.92c0-.125.16-.17.227-.085l9.56 11.835c.32.394.8.605 1.297.605C18.978 20 20 19.485 20 18.292V5.715a1.715 1.715 0 0 0-3.177-.892z'
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
                        id: 'near-protocol__a'
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
 * @component @name NetworkNearProtocol
 * @description Web3Icon for NetworkNearProtocol
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMEVDOTciIGQ9Im0xNy40MjUgMy45Mi0zLjc2IDUuNThjLS4yNTcuMzg1LjI0NC44MzUuNjA0LjUybDMuMjgtMy4yMTRjLjA5NS0uMDgzLjIzNi0uMDI2LjIzNi4xMTV2MTAuMDYyYzAgLjEzNS0uMTguMTkyLS4yNTYuMDk2TDYuNzU0IDMuNjgxYTEuODUgMS44NSAwIDAgMC0xLjQ1OS0uNjhDNC4xMzggMyAzIDMuNTg0IDMgNC45MjJWMTkuMDdhMS45MjIgMS45MjIgMCAwIDAgMy41NTUgMS4wMDNsMy43NTQtNS41OGMuMjU3LS4zODUtLjIzOC0uODM1LS41OTgtLjUybC0zLjI2IDMuMjc5Yy0uMDk2LjA4My0uMjM3LjAyNi0uMjM3LS4xMTdWNy4xMDFjMC0uMTQuMTgtLjE5Mi4yNTctLjA5NkwxNy4yMjYgMjAuMzJjLjM2LjQ0NC45LjY4MSAxLjQ2LjY4MUMxOS44NDggMjEgMjEgMjAuNDIxIDIxIDE5LjA3OFY0LjkzYTEuOTMgMS45MyAwIDAgMC0zLjU3NS0xLjAwM3oiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNy40MjUgMy45Mi0zLjc2IDUuNThjLS4yNTcuMzg1LjI0NC44MzUuNjA0LjUybDMuMjgtMy4yMTRjLjA5NS0uMDgzLjIzNi0uMDI2LjIzNi4xMTV2MTAuMDYyYzAgLjEzNS0uMTguMTkyLS4yNTYuMDk2TDYuNzU0IDMuNjgxYTEuODUgMS44NSAwIDAgMC0xLjQ1OS0uNjhDNC4xMzggMyAzIDMuNTg0IDMgNC45MjJWMTkuMDdhMS45MjIgMS45MjIgMCAwIDAgMy41NTUgMS4wMDNsMy43NTQtNS41OGMuMjU3LS4zODUtLjIzOC0uODM1LS41OTgtLjUybC0zLjI2IDMuMjc5Yy0uMDk2LjA4My0uMjM3LjAyNi0uMjM3LS4xMTdWNy4xMDFjMC0uMTQuMTgtLjE5Mi4yNTctLjA5NkwxNy4yMjYgMjAuMzJjLjM2LjQ0NC45LjY4MSAxLjQ2LjY4MUMxOS44NDggMjEgMjEgMjAuNDIxIDIxIDE5LjA3OFY0LjkzYTEuOTMgMS45MyAwIDAgMC0zLjU3NS0xLjAwM3oiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNuZWFyLXByb3RvY29sX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwRUM5NyIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJtMTYuODIzIDQuODE4LTMuMzQzIDQuOTZjLS4yMjguMzQyLjIxNy43NDIuNTM3LjQ2MmwyLjkxNS0yLjg1N2MuMDg1LS4wNzQuMjEtLjAyMy4yMS4xMDJ2OC45NDRjMCAuMTItLjE2LjE3MS0uMjI3LjA4Nkw3LjMzNyA0LjYwNUExLjY0IDEuNjQgMCAwIDAgNi4wNCA0QzUuMDEyIDQgNCA0LjUyIDQgNS43MXYxMi41NzVhMS43MDggMS43MDggMCAwIDAgMy4xNi44OTJsMy4zMzctNC45NmMuMjI4LS4zNDItLjIxMi0uNzQyLS41MzItLjQ2MmwtMi44OTcgMi45MTRjLS4wODUuMDc0LS4yMS4wMjMtLjIxLS4xMDR2LTguOTJjMC0uMTI1LjE2LS4xNy4yMjctLjA4NWw5LjU2IDExLjgzNWMuMzIuMzk0LjguNjA1IDEuMjk3LjYwNUMxOC45NzggMjAgMjAgMTkuNDg1IDIwIDE4LjI5MlY1LjcxNWExLjcxNSAxLjcxNSAwIDAgMC0zLjE3Ny0uODkyeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJuZWFyLXByb3RvY29sX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/networks/near-protocol
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkNearProtocol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkNearProtocol', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1i5jz7p._.js.map