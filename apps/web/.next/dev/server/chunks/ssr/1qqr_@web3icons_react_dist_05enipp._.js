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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPREMIA.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPREMIA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#5293FE',
                d: 'M7.9 7.5h8.182c.467 0 .737.495.467.86l-3.824 5.01c-.28.366-.005.878.462.878h3.441a.57.57 0 0 0 .461-.225l3.801-5.061a.54.54 0 0 0 0-.652L17.5 3.794a.57.57 0 0 0-.462-.23H6.962a.57.57 0 0 0-.462.224L3.11 8.31a.54.54 0 0 0 0 .652l8.429 11.246a.58.58 0 0 0 .922 0l1.72-2.3a.54.54 0 0 0 0-.652L7.446 8.36c-.275-.365 0-.86.461-.86z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M7.9 7.5h8.182c.467 0 .737.495.467.86l-3.824 5.01c-.28.366-.005.878.462.878h3.441a.57.57 0 0 0 .461-.225l3.801-5.061a.54.54 0 0 0 0-.652L17.5 3.794a.57.57 0 0 0-.462-.23H6.962a.57.57 0 0 0-.462.224L3.11 8.31a.54.54 0 0 0 0 .652l8.429 11.246a.58.58 0 0 0 .922 0l1.72-2.3a.54.54 0 0 0 0-.652L7.446 8.36c-.275-.365 0-.86.461-.86z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#PREMIA__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#5293FE',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M8.356 8h7.273c.415 0 .655.44.415.765l-3.4 4.453c-.25.325-.004.78.41.78h3.06c.16 0 .315-.07.41-.2l3.378-4.499a.48.48 0 0 0 0-.58l-3.014-4.013a.51.51 0 0 0-.41-.205H7.522a.51.51 0 0 0-.41.2L4.098 8.72a.48.48 0 0 0 0 .58l7.493 9.996c.2.27.62.27.82 0l1.53-2.044a.48.48 0 0 0 0-.58L7.95 8.765C7.705 8.44 7.95 8 8.36 8z'
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
                        id: 'PREMIA__a'
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
 * @component @name TokenPREMIA
 * @description Web3Icon for TokenPREMIA
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM1MjkzRkUiIGQ9Ik03LjkgNy41aDguMTgyYy40NjcgMCAuNzM3LjQ5NS40NjcuODZsLTMuODI0IDUuMDFjLS4yOC4zNjYtLjAwNS44NzguNDYyLjg3OGgzLjQ0MWEuNTcuNTcgMCAwIDAgLjQ2MS0uMjI1bDMuODAxLTUuMDYxYS41NC41NCAwIDAgMCAwLS42NTJMMTcuNSAzLjc5NGEuNTcuNTcgMCAwIDAtLjQ2Mi0uMjNINi45NjJhLjU3LjU3IDAgMCAwLS40NjIuMjI0TDMuMTEgOC4zMWEuNTQuNTQgMCAwIDAgMCAuNjUybDguNDI5IDExLjI0NmEuNTguNTggMCAwIDAgLjkyMiAwbDEuNzItMi4zYS41NC41NCAwIDAgMCAwLS42NTJMNy40NDYgOC4zNmMtLjI3NS0uMzY1IDAtLjg2LjQ2MS0uODZ6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03LjkgNy41aDguMTgyYy40NjcgMCAuNzM3LjQ5NS40NjcuODZsLTMuODI0IDUuMDFjLS4yOC4zNjYtLjAwNS44NzguNDYyLjg3OGgzLjQ0MWEuNTcuNTcgMCAwIDAgLjQ2MS0uMjI1bDMuODAxLTUuMDYxYS41NC41NCAwIDAgMCAwLS42NTJMMTcuNSAzLjc5NGEuNTcuNTcgMCAwIDAtLjQ2Mi0uMjNINi45NjJhLjU3LjU3IDAgMCAwLS40NjIuMjI0TDMuMTEgOC4zMWEuNTQuNTQgMCAwIDAgMCAuNjUybDguNDI5IDExLjI0NmEuNTguNTggMCAwIDAgLjkyMiAwbDEuNzItMi4zYS41NC41NCAwIDAgMCAwLS42NTJMNy40NDYgOC4zNmMtLjI3NS0uMzY1IDAtLjg2LjQ2MS0uODZ6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQUkVNSUFfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNTI5M0ZFIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04LjM1NiA4aDcuMjczYy40MTUgMCAuNjU1LjQ0LjQxNS43NjVsLTMuNCA0LjQ1M2MtLjI1LjMyNS0uMDA0Ljc4LjQxLjc4aDMuMDZjLjE2IDAgLjMxNS0uMDcuNDEtLjJsMy4zNzgtNC40OTlhLjQ4LjQ4IDAgMCAwIDAtLjU4bC0zLjAxNC00LjAxM2EuNTEuNTEgMCAwIDAtLjQxLS4yMDVINy41MjJhLjUxLjUxIDAgMCAwLS40MS4yTDQuMDk4IDguNzJhLjQ4LjQ4IDAgMCAwIDAgLjU4bDcuNDkzIDkuOTk2Yy4yLjI3LjYyLjI3LjgyIDBsMS41My0yLjA0NGEuNDguNDggMCAwIDAgMC0uNThMNy45NSA4Ljc2NUM3LjcwNSA4LjQ0IDcuOTUgOCA4LjM2IDh6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlBSRU1JQV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/PREMIA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPREMIA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPREMIA', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_05enipp._.js.map