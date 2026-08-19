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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenNEAR.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenNEAR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#00EC97',
                d: 'M17.426 3.92 13.665 9.5c-.257.385.244.835.604.52l3.279-3.214c.096-.084.238-.026.238.116v10.06c0 .135-.18.193-.258.097L6.754 3.682A1.85 1.85 0 0 0 5.295 3C4.138 3 3 3.585 3 4.922v14.15a1.922 1.922 0 0 0 3.555 1.002l3.754-5.58c.257-.385-.238-.835-.598-.52l-3.259 3.278c-.096.084-.238.026-.238-.115V7.102c0-.142.18-.193.257-.097L17.226 20.32c.36.443.9.681 1.46.681C19.849 21 21 20.422 21 19.078V4.928a1.929 1.929 0 0 0-3.574-1.002z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M17.426 3.92 13.665 9.5c-.257.385.244.835.604.52l3.279-3.214c.096-.084.238-.026.238.116v10.06c0 .135-.18.193-.258.097L6.754 3.682A1.85 1.85 0 0 0 5.295 3C4.138 3 3 3.585 3 4.922v14.15a1.922 1.922 0 0 0 3.555 1.002l3.754-5.58c.257-.385-.238-.835-.598-.52l-3.259 3.278c-.096.084-.238.026-.238-.115V7.102c0-.142.18-.193.257-.097L17.226 20.32c.36.443.9.681 1.46.681C19.849 21 21 20.422 21 19.078V4.928a1.929 1.929 0 0 0-3.574-1.002z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#NEAR__a)'
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
                        fill: '#fff',
                        d: 'm16.823 4.817-3.343 4.96c-.229.343.217.743.537.463l2.914-2.857c.086-.074.212-.023.212.103v8.943c0 .12-.16.171-.229.085L7.337 4.606A1.64 1.64 0 0 0 6.04 4C5.011 4 4 4.52 4 5.71v12.577a1.709 1.709 0 0 0 3.16.891l3.337-4.96c.229-.343-.211-.743-.531-.463L7.069 16.67c-.086.074-.212.023-.212-.103v-8.92c0-.126.16-.172.229-.086l9.56 11.834c.32.395.8.606 1.297.606C18.977 20 20 19.486 20 18.291V5.714a1.714 1.714 0 0 0-3.177-.891z'
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
                        id: 'NEAR__a'
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
 * @component @name TokenNEAR
 * @description Web3Icon for TokenNEAR
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMEVDOTciIGQ9Ik0xNy40MjYgMy45MiAxMy42NjUgOS41Yy0uMjU3LjM4NS4yNDQuODM1LjYwNC41MmwzLjI3OS0zLjIxNGMuMDk2LS4wODQuMjM4LS4wMjYuMjM4LjExNnYxMC4wNmMwIC4xMzUtLjE4LjE5My0uMjU4LjA5N0w2Ljc1NCAzLjY4MkExLjg1IDEuODUgMCAwIDAgNS4yOTUgM0M0LjEzOCAzIDMgMy41ODUgMyA0LjkyMnYxNC4xNWExLjkyMiAxLjkyMiAwIDAgMCAzLjU1NSAxLjAwMmwzLjc1NC01LjU4Yy4yNTctLjM4NS0uMjM4LS44MzUtLjU5OC0uNTJsLTMuMjU5IDMuMjc4Yy0uMDk2LjA4NC0uMjM4LjAyNi0uMjM4LS4xMTVWNy4xMDJjMC0uMTQyLjE4LS4xOTMuMjU3LS4wOTdMMTcuMjI2IDIwLjMyYy4zNi40NDMuOS42ODEgMS40Ni42ODFDMTkuODQ5IDIxIDIxIDIwLjQyMiAyMSAxOS4wNzhWNC45MjhhMS45MjkgMS45MjkgMCAwIDAtMy41NzQtMS4wMDJ6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy40MjYgMy45MiAxMy42NjUgOS41Yy0uMjU3LjM4NS4yNDQuODM1LjYwNC41MmwzLjI3OS0zLjIxNGMuMDk2LS4wODQuMjM4LS4wMjYuMjM4LjExNnYxMC4wNmMwIC4xMzUtLjE4LjE5My0uMjU4LjA5N0w2Ljc1NCAzLjY4MkExLjg1IDEuODUgMCAwIDAgNS4yOTUgM0M0LjEzOCAzIDMgMy41ODUgMyA0LjkyMnYxNC4xNWExLjkyMiAxLjkyMiAwIDAgMCAzLjU1NSAxLjAwMmwzLjc1NC01LjU4Yy4yNTctLjM4NS0uMjM4LS44MzUtLjU5OC0uNTJsLTMuMjU5IDMuMjc4Yy0uMDk2LjA4NC0uMjM4LjAyNi0uMjM4LS4xMTVWNy4xMDJjMC0uMTQyLjE4LS4xOTMuMjU3LS4wOTdMMTcuMjI2IDIwLjMyYy4zNi40NDMuOS42ODEgMS40Ni42ODFDMTkuODQ5IDIxIDIxIDIwLjQyMiAyMSAxOS4wNzhWNC45MjhhMS45MjkgMS45MjkgMCAwIDAtMy41NzQtMS4wMDJ6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNORUFSX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwRUM5NyIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTYuODIzIDQuODE3LTMuMzQzIDQuOTZjLS4yMjkuMzQzLjIxNy43NDMuNTM3LjQ2M2wyLjkxNC0yLjg1N2MuMDg2LS4wNzQuMjEyLS4wMjMuMjEyLjEwM3Y4Ljk0M2MwIC4xMi0uMTYuMTcxLS4yMjkuMDg1TDcuMzM3IDQuNjA2QTEuNjQgMS42NCAwIDAgMCA2LjA0IDRDNS4wMTEgNCA0IDQuNTIgNCA1LjcxdjEyLjU3N2ExLjcwOSAxLjcwOSAwIDAgMCAzLjE2Ljg5MWwzLjMzNy00Ljk2Yy4yMjktLjM0My0uMjExLS43NDMtLjUzMS0uNDYzTDcuMDY5IDE2LjY3Yy0uMDg2LjA3NC0uMjEyLjAyMy0uMjEyLS4xMDN2LTguOTJjMC0uMTI2LjE2LS4xNzIuMjI5LS4wODZsOS41NiAxMS44MzRjLjMyLjM5NS44LjYwNiAxLjI5Ny42MDZDMTguOTc3IDIwIDIwIDE5LjQ4NiAyMCAxOC4yOTFWNS43MTRhMS43MTQgMS43MTQgMCAwIDAtMy4xNzctLjg5MXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iTkVBUl9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/NEAR
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenNEAR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenNEAR', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1zhmmxm._.js.map