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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenJAM.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenJAM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#EB2324',
                d: 'M12.122 3C16.78 3 21 7.315 21 11.936 21 18.898 15.505 21 14.33 21c-1.546 0-1.8-1.932-1.8-2.727s1.942-3.626 4.012-3.626c.9 0 .948.291 1.282.53.375-.52.518-1.377.529-2.356.048-3.479-3.124-5.496-6.247-5.586h-.212c-3.092 0-6.279 2.245-6.247 5.586.01 1.18.27 2.207.54 2.355.318-.222.355-.529 1.27-.529 2.07 0 4.014 2.832 4.014 3.626 0 .795-.255 2.727-1.8 2.727C8.495 21 3 18.898 3 11.936 3 7.331 7.214 3 11.862 3z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.122 3C16.78 3 21 7.315 21 11.936 21 18.898 15.505 21 14.33 21c-1.546 0-1.8-1.932-1.8-2.727s1.942-3.626 4.012-3.626c.9 0 .948.291 1.282.53.375-.52.518-1.377.529-2.356.048-3.479-3.124-5.496-6.247-5.586h-.212c-3.092 0-6.279 2.245-6.247 5.586.01 1.18.27 2.207.54 2.355.318-.222.355-.529 1.27-.529 2.07 0 4.014 2.832 4.014 3.626 0 .795-.255 2.727-1.8 2.727C8.495 21 3 18.898 3 11.936 3 7.331 7.214 3 11.862 3z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#JAM__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#EB2324',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.108 4C16.25 4 20 7.835 20 11.943 20 18.132 15.115 20 14.07 20c-1.373 0-1.6-1.718-1.6-2.424 0-.705 1.728-3.223 3.568-3.223.8 0 .842.259 1.139.47.334-.46.46-1.223.47-2.094.042-3.091-2.776-4.884-5.553-4.964h-.188c-2.748 0-5.581 1.995-5.553 4.964.01 1.05.24 1.963.48 2.095.282-.198.315-.471 1.13-.471 1.84 0 3.566 2.518 3.566 3.223S11.303 20 9.93 20C8.885 20 4 18.132 4 11.943 4 7.85 7.746 4 11.878 4z'
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
                        id: 'JAM__a'
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
 * @component @name TokenJAM
 * @description Web3Icon for TokenJAM
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNFQjIzMjQiIGQ9Ik0xMi4xMjIgM0MxNi43OCAzIDIxIDcuMzE1IDIxIDExLjkzNiAyMSAxOC44OTggMTUuNTA1IDIxIDE0LjMzIDIxYy0xLjU0NiAwLTEuOC0xLjkzMi0xLjgtMi43MjdzMS45NDItMy42MjYgNC4wMTItMy42MjZjLjkgMCAuOTQ4LjI5MSAxLjI4Mi41My4zNzUtLjUyLjUxOC0xLjM3Ny41MjktMi4zNTYuMDQ4LTMuNDc5LTMuMTI0LTUuNDk2LTYuMjQ3LTUuNTg2aC0uMjEyYy0zLjA5MiAwLTYuMjc5IDIuMjQ1LTYuMjQ3IDUuNTg2LjAxIDEuMTguMjcgMi4yMDcuNTQgMi4zNTUuMzE4LS4yMjIuMzU1LS41MjkgMS4yNy0uNTI5IDIuMDcgMCA0LjAxNCAyLjgzMiA0LjAxNCAzLjYyNiAwIC43OTUtLjI1NSAyLjcyNy0xLjggMi43MjdDOC40OTUgMjEgMyAxOC44OTggMyAxMS45MzYgMyA3LjMzMSA3LjIxNCAzIDExLjg2MiAzeiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi4xMjIgM0MxNi43OCAzIDIxIDcuMzE1IDIxIDExLjkzNiAyMSAxOC44OTggMTUuNTA1IDIxIDE0LjMzIDIxYy0xLjU0NiAwLTEuOC0xLjkzMi0xLjgtMi43MjdzMS45NDItMy42MjYgNC4wMTItMy42MjZjLjkgMCAuOTQ4LjI5MSAxLjI4Mi41My4zNzUtLjUyLjUxOC0xLjM3Ny41MjktMi4zNTYuMDQ4LTMuNDc5LTMuMTI0LTUuNDk2LTYuMjQ3LTUuNTg2aC0uMjEyYy0zLjA5MiAwLTYuMjc5IDIuMjQ1LTYuMjQ3IDUuNTg2LjAxIDEuMTguMjcgMi4yMDcuNTQgMi4zNTUuMzE4LS4yMjIuMzU1LS41MjkgMS4yNy0uNTI5IDIuMDcgMCA0LjAxNCAyLjgzMiA0LjAxNCAzLjYyNiAwIC43OTUtLjI1NSAyLjcyNy0xLjggMi43MjdDOC40OTUgMjEgMyAxOC44OTggMyAxMS45MzYgMyA3LjMzMSA3LjIxNCAzIDExLjg2MiAzeiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNKQU1fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRUIyMzI0IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi4xMDggNEMxNi4yNSA0IDIwIDcuODM1IDIwIDExLjk0MyAyMCAxOC4xMzIgMTUuMTE1IDIwIDE0LjA3IDIwYy0xLjM3MyAwLTEuNi0xLjcxOC0xLjYtMi40MjQgMC0uNzA1IDEuNzI4LTMuMjIzIDMuNTY4LTMuMjIzLjggMCAuODQyLjI1OSAxLjEzOS40Ny4zMzQtLjQ2LjQ2LTEuMjIzLjQ3LTIuMDk0LjA0Mi0zLjA5MS0yLjc3Ni00Ljg4NC01LjU1My00Ljk2NGgtLjE4OGMtMi43NDggMC01LjU4MSAxLjk5NS01LjU1MyA0Ljk2NC4wMSAxLjA1LjI0IDEuOTYzLjQ4IDIuMDk1LjI4Mi0uMTk4LjMxNS0uNDcxIDEuMTMtLjQ3MSAxLjg0IDAgMy41NjYgMi41MTggMy41NjYgMy4yMjNTMTEuMzAzIDIwIDkuOTMgMjBDOC44ODUgMjAgNCAxOC4xMzIgNCAxMS45NDMgNCA3Ljg1IDcuNzQ2IDQgMTEuODc4IDR6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkpBTV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/JAM
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenJAM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenJAM', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0d9pg37._.js.map