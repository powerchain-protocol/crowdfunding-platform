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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSPA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSPA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#4FD6CF',
                d: 'M17.137 13.285a3.854 3.854 0 1 1 .019 7.707h-.02a3.853 3.853 0 0 1-3.853-3.854c0-.102 0-.199.013-.295.006-.18.02-.353 0-.54a6.45 6.45 0 0 0-5.646-5.58c-.193-.02-.366-.014-.552-.014l-.238.007a3.854 3.854 0 1 1-.013-7.708h.013a3.854 3.854 0 0 1 3.841 4.169c-.007.199-.013.398.013.61a6.49 6.49 0 0 0 5.78 5.498c.148.013.29.006.43 0zm.064-2.57a3.854 3.854 0 1 0-.128-7.706 3.854 3.854 0 0 0 .128 7.707m-10.34 2.57a3.853 3.853 0 1 1 0 7.707 3.853 3.853 0 0 1 0-7.707'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M17.137 13.285a3.853 3.853 0 1 1 .019 7.707h-.02a3.853 3.853 0 0 1-3.853-3.853c0-.103 0-.2.013-.296.006-.18.02-.353 0-.54a6.45 6.45 0 0 0-5.646-5.58c-.193-.02-.366-.014-.552-.014l-.238.007a3.853 3.853 0 1 1-.013-7.708h.013a3.854 3.854 0 0 1 3.841 4.169c-.007.199-.013.398.013.61a6.49 6.49 0 0 0 5.78 5.498c.148.013.29.006.43 0zm.064-2.57a3.854 3.854 0 1 0-.128-7.706 3.854 3.854 0 0 0 .128 7.707m-10.34 2.57a3.854 3.854 0 1 1 0 7.707 3.854 3.854 0 0 1 0-7.707'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#SPA__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#4FD6CF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M16.566 13.142a3.426 3.426 0 0 1 .017 6.851h-.017a3.425 3.425 0 0 1-3.426-3.425c0-.092 0-.177.012-.263.006-.16.017-.314 0-.48a5.73 5.73 0 0 0-5.019-4.961c-.17-.017-.325-.011-.49-.011l-.212.005a3.425 3.425 0 1 1-.011-6.85h.011a3.426 3.426 0 0 1 3.414 3.705c-.005.177-.011.354.012.542a5.77 5.77 0 0 0 5.138 4.887c.131.011.257.006.383 0zm.057-2.284a3.426 3.426 0 1 0-.114-6.85 3.426 3.426 0 0 0 .114 6.85m-9.192 2.284a3.425 3.425 0 1 1 0 6.85 3.425 3.425 0 0 1 0-6.85'
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
                        id: 'SPA__a'
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
 * @component @name TokenSPA
 * @description Web3Icon for TokenSPA
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM0RkQ2Q0YiIGQ9Ik0xNy4xMzcgMTMuMjg1YTMuODU0IDMuODU0IDAgMSAxIC4wMTkgNy43MDdoLS4wMmEzLjg1MyAzLjg1MyAwIDAgMS0zLjg1My0zLjg1NGMwLS4xMDIgMC0uMTk5LjAxMy0uMjk1LjAwNi0uMTguMDItLjM1MyAwLS41NGE2LjQ1IDYuNDUgMCAwIDAtNS42NDYtNS41OGMtLjE5My0uMDItLjM2Ni0uMDE0LS41NTItLjAxNGwtLjIzOC4wMDdhMy44NTQgMy44NTQgMCAxIDEtLjAxMy03LjcwOGguMDEzYTMuODU0IDMuODU0IDAgMCAxIDMuODQxIDQuMTY5Yy0uMDA3LjE5OS0uMDEzLjM5OC4wMTMuNjFhNi40OSA2LjQ5IDAgMCAwIDUuNzggNS40OThjLjE0OC4wMTMuMjkuMDA2LjQzIDB6bS4wNjQtMi41N2EzLjg1NCAzLjg1NCAwIDEgMC0uMTI4LTcuNzA2IDMuODU0IDMuODU0IDAgMCAwIC4xMjggNy43MDdtLTEwLjM0IDIuNTdhMy44NTMgMy44NTMgMCAxIDEgMCA3LjcwNyAzLjg1MyAzLjg1MyAwIDAgMSAwLTcuNzA3Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy4xMzcgMTMuMjg1YTMuODUzIDMuODUzIDAgMSAxIC4wMTkgNy43MDdoLS4wMmEzLjg1MyAzLjg1MyAwIDAgMS0zLjg1My0zLjg1M2MwLS4xMDMgMC0uMi4wMTMtLjI5Ni4wMDYtLjE4LjAyLS4zNTMgMC0uNTRhNi40NSA2LjQ1IDAgMCAwLTUuNjQ2LTUuNThjLS4xOTMtLjAyLS4zNjYtLjAxNC0uNTUyLS4wMTRsLS4yMzguMDA3YTMuODUzIDMuODUzIDAgMSAxLS4wMTMtNy43MDhoLjAxM2EzLjg1NCAzLjg1NCAwIDAgMSAzLjg0MSA0LjE2OWMtLjAwNy4xOTktLjAxMy4zOTguMDEzLjYxYTYuNDkgNi40OSAwIDAgMCA1Ljc4IDUuNDk4Yy4xNDguMDEzLjI5LjAwNi40MyAwem0uMDY0LTIuNTdhMy44NTQgMy44NTQgMCAxIDAtLjEyOC03LjcwNiAzLjg1NCAzLjg1NCAwIDAgMCAuMTI4IDcuNzA3bS0xMC4zNCAyLjU3YTMuODU0IDMuODU0IDAgMSAxIDAgNy43MDcgMy44NTQgMy44NTQgMCAwIDEgMC03LjcwNyIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTUEFfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNEZENkNGIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi41NjYgMTMuMTQyYTMuNDI2IDMuNDI2IDAgMCAxIC4wMTcgNi44NTFoLS4wMTdhMy40MjUgMy40MjUgMCAwIDEtMy40MjYtMy40MjVjMC0uMDkyIDAtLjE3Ny4wMTItLjI2My4wMDYtLjE2LjAxNy0uMzE0IDAtLjQ4YTUuNzMgNS43MyAwIDAgMC01LjAxOS00Ljk2MWMtLjE3LS4wMTctLjMyNS0uMDExLS40OS0uMDExbC0uMjEyLjAwNWEzLjQyNSAzLjQyNSAwIDEgMS0uMDExLTYuODVoLjAxMWEzLjQyNiAzLjQyNiAwIDAgMSAzLjQxNCAzLjcwNWMtLjAwNS4xNzctLjAxMS4zNTQuMDEyLjU0MmE1Ljc3IDUuNzcgMCAwIDAgNS4xMzggNC44ODdjLjEzMS4wMTEuMjU3LjAwNi4zODMgMHptLjA1Ny0yLjI4NGEzLjQyNiAzLjQyNiAwIDEgMC0uMTE0LTYuODUgMy40MjYgMy40MjYgMCAwIDAgLjExNCA2Ljg1bS05LjE5MiAyLjI4NGEzLjQyNSAzLjQyNSAwIDEgMSAwIDYuODUgMy40MjUgMy40MjUgMCAwIDEgMC02Ljg1Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlNQQV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/SPA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSPA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSPA', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1dw7pum._.js.map