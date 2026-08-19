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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenGET.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenGET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#01C696',
                d: 'M12.563 10.875V9.187L9.75 12l2.813 2.813v-1.688h5.099l-5.405 5.227L5.724 12l6.532-6.352 3.461 3.365c.212.206.499.321.798.321s.586-.115.798-.32a1.08 1.08 0 0 0 0-1.552l-4.258-4.14A1.15 1.15 0 0 0 12.256 3a1.14 1.14 0 0 0-.797.321L3.33 11.224a1.08 1.08 0 0 0-.331.777c0 .29.119.569.33.775l8.129 7.903c.211.206.499.321.797.321.3 0 .587-.115.799-.321l7.438-7.232c.308-.293.507-.67.507-1.111 0-.442-.199-.819-.517-1.12-.21-.201-.493-.341-.788-.341z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.563 10.875V9.187L9.75 12l2.813 2.813v-1.688h5.099l-5.405 5.227L5.724 12l6.532-6.352 3.461 3.365c.212.206.499.321.798.321s.586-.115.798-.32a1.08 1.08 0 0 0 0-1.552l-4.258-4.14A1.15 1.15 0 0 0 12.256 3a1.14 1.14 0 0 0-.797.321L3.33 11.224a1.08 1.08 0 0 0-.331.777c0 .29.119.569.33.775l8.129 7.903c.211.206.499.321.797.321.3 0 .587-.115.799-.321l7.438-7.232c.309-.293.507-.67.507-1.111 0-.442-.198-.819-.517-1.12-.21-.201-.493-.341-.788-.341z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#GET__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#01C696',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.5 11V9.5L10 12l2.5 2.5V13h4.532l-4.803 4.646L6.42 12l5.807-5.646 3.076 2.991c.188.183.444.285.71.285s.52-.102.709-.285a.96.96 0 0 0 .294-.69.96.96 0 0 0-.294-.689l-3.785-3.68a1.02 1.02 0 0 0-.71-.286 1.02 1.02 0 0 0-.709.285L4.294 11.31a.96.96 0 0 0 0 1.38l7.225 7.024a1.02 1.02 0 0 0 1.419 0l6.611-6.428c.274-.26.451-.595.451-.987 0-.393-.177-.728-.46-.996a1.04 1.04 0 0 0-.7-.303z'
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
                        id: 'GET__a'
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
 * @component @name TokenGET
 * @description Web3Icon for TokenGET
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMUM2OTYiIGQ9Ik0xMi41NjMgMTAuODc1VjkuMTg3TDkuNzUgMTJsMi44MTMgMi44MTN2LTEuNjg4aDUuMDk5bC01LjQwNSA1LjIyN0w1LjcyNCAxMmw2LjUzMi02LjM1MiAzLjQ2MSAzLjM2NWMuMjEyLjIwNi40OTkuMzIxLjc5OC4zMjFzLjU4Ni0uMTE1Ljc5OC0uMzJhMS4wOCAxLjA4IDAgMCAwIDAtMS41NTJsLTQuMjU4LTQuMTRBMS4xNSAxLjE1IDAgMCAwIDEyLjI1NiAzYTEuMTQgMS4xNCAwIDAgMC0uNzk3LjMyMUwzLjMzIDExLjIyNGExLjA4IDEuMDggMCAwIDAtLjMzMS43NzdjMCAuMjkuMTE5LjU2OS4zMy43NzVsOC4xMjkgNy45MDNjLjIxMS4yMDYuNDk5LjMyMS43OTcuMzIxLjMgMCAuNTg3LS4xMTUuNzk5LS4zMjFsNy40MzgtNy4yMzJjLjMwOC0uMjkzLjUwNy0uNjcuNTA3LTEuMTExIDAtLjQ0Mi0uMTk5LS44MTktLjUxNy0xLjEyLS4yMS0uMjAxLS40OTMtLjM0MS0uNzg4LS4zNDF6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi41NjMgMTAuODc1VjkuMTg3TDkuNzUgMTJsMi44MTMgMi44MTN2LTEuNjg4aDUuMDk5bC01LjQwNSA1LjIyN0w1LjcyNCAxMmw2LjUzMi02LjM1MiAzLjQ2MSAzLjM2NWMuMjEyLjIwNi40OTkuMzIxLjc5OC4zMjFzLjU4Ni0uMTE1Ljc5OC0uMzJhMS4wOCAxLjA4IDAgMCAwIDAtMS41NTJsLTQuMjU4LTQuMTRBMS4xNSAxLjE1IDAgMCAwIDEyLjI1NiAzYTEuMTQgMS4xNCAwIDAgMC0uNzk3LjMyMUwzLjMzIDExLjIyNGExLjA4IDEuMDggMCAwIDAtLjMzMS43NzdjMCAuMjkuMTE5LjU2OS4zMy43NzVsOC4xMjkgNy45MDNjLjIxMS4yMDYuNDk5LjMyMS43OTcuMzIxLjMgMCAuNTg3LS4xMTUuNzk5LS4zMjFsNy40MzgtNy4yMzJjLjMwOS0uMjkzLjUwNy0uNjcuNTA3LTEuMTExIDAtLjQ0Mi0uMTk4LS44MTktLjUxNy0xLjEyLS4yMS0uMjAxLS40OTMtLjM0MS0uNzg4LS4zNDF6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNHRVRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDFDNjk2IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi41IDExVjkuNUwxMCAxMmwyLjUgMi41VjEzaDQuNTMybC00LjgwMyA0LjY0Nkw2LjQyIDEybDUuODA3LTUuNjQ2IDMuMDc2IDIuOTkxYy4xODguMTgzLjQ0NC4yODUuNzEuMjg1cy41Mi0uMTAyLjcwOS0uMjg1YS45Ni45NiAwIDAgMCAuMjk0LS42OS45Ni45NiAwIDAgMC0uMjk0LS42ODlsLTMuNzg1LTMuNjhhMS4wMiAxLjAyIDAgMCAwLS43MS0uMjg2IDEuMDIgMS4wMiAwIDAgMC0uNzA5LjI4NUw0LjI5NCAxMS4zMWEuOTYuOTYgMCAwIDAgMCAxLjM4bDcuMjI1IDcuMDI0YTEuMDIgMS4wMiAwIDAgMCAxLjQxOSAwbDYuNjExLTYuNDI4Yy4yNzQtLjI2LjQ1MS0uNTk1LjQ1MS0uOTg3IDAtLjM5My0uMTc3LS43MjgtLjQ2LS45OTZhMS4wNCAxLjA0IDAgMCAwLS43LS4zMDN6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkdFVF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/GET
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenGET = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenGET', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0fys_-u._.js.map