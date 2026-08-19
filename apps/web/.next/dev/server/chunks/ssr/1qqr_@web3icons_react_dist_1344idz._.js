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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMPS.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMPS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#59C7F2',
                d: 'M17 3h-1.33a3.75 3.75 0 0 1-3.605 3.81h-.13A3.75 3.75 0 0 1 8.33 3H7c0 1.925 1.01 3.6 2.505 4.5C8.005 8.4 7 10.075 7 12s1.01 3.6 2.505 4.5C8.005 17.4 7 19.075 7 21h1.33a3.75 3.75 0 0 1 3.61-3.81h.12A3.75 3.75 0 0 1 15.67 21H17c0-1.925-1.01-3.6-2.505-4.5C15.995 15.6 17 13.925 17 12s-1.01-3.6-2.505-4.5C15.995 6.6 17 4.925 17 3m-1.33 9a3.75 3.75 0 0 1-3.61 3.81h-.12A3.75 3.75 0 0 1 8.33 12a3.75 3.75 0 0 1 3.605-3.81h.13A3.75 3.75 0 0 1 15.67 12'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M17 3h-1.33a3.75 3.75 0 0 1-3.605 3.81h-.13A3.75 3.75 0 0 1 8.33 3H7c0 1.925 1.01 3.6 2.505 4.5C8.005 8.4 7 10.075 7 12s1.01 3.6 2.505 4.5C8.005 17.4 7 19.075 7 21h1.33a3.75 3.75 0 0 1 3.61-3.81h.12A3.75 3.75 0 0 1 15.67 21H17c0-1.925-1.01-3.6-2.505-4.5C15.995 15.6 17 13.925 17 12s-1.01-3.6-2.505-4.5C15.995 6.6 17 4.925 17 3m-1.33 9a3.75 3.75 0 0 1-3.61 3.81h-.12A3.75 3.75 0 0 1 8.33 12a3.75 3.75 0 0 1 3.605-3.81h.13A3.75 3.75 0 0 1 15.67 12'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MPS__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#59C7F2',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M16.445 4h-1.183a3.333 3.333 0 0 1-3.204 3.387h-.116A3.333 3.333 0 0 1 8.738 4H7.556c0 1.711.897 3.2 2.226 4-1.333.8-2.226 2.289-2.226 4s.897 3.2 2.226 4c-1.333.8-2.226 2.289-2.226 4h1.182a3.333 3.333 0 0 1 3.209-3.387h.107A3.333 3.333 0 0 1 15.262 20h1.183c0-1.711-.898-3.2-2.227-4 1.333-.8 2.227-2.289 2.227-4s-.898-3.2-2.227-4c1.333-.8 2.227-2.289 2.227-4m-1.183 8a3.334 3.334 0 0 1-3.209 3.387h-.106A3.333 3.333 0 0 1 8.737 12a3.333 3.333 0 0 1 3.205-3.387h.116A3.333 3.333 0 0 1 15.262 12'
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
                        id: 'MPS__a'
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
 * @component @name TokenMPS
 * @description Web3Icon for TokenMPS
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM1OUM3RjIiIGQ9Ik0xNyAzaC0xLjMzYTMuNzUgMy43NSAwIDAgMS0zLjYwNSAzLjgxaC0uMTNBMy43NSAzLjc1IDAgMCAxIDguMzMgM0g3YzAgMS45MjUgMS4wMSAzLjYgMi41MDUgNC41QzguMDA1IDguNCA3IDEwLjA3NSA3IDEyczEuMDEgMy42IDIuNTA1IDQuNUM4LjAwNSAxNy40IDcgMTkuMDc1IDcgMjFoMS4zM2EzLjc1IDMuNzUgMCAwIDEgMy42MS0zLjgxaC4xMkEzLjc1IDMuNzUgMCAwIDEgMTUuNjcgMjFIMTdjMC0xLjkyNS0xLjAxLTMuNi0yLjUwNS00LjVDMTUuOTk1IDE1LjYgMTcgMTMuOTI1IDE3IDEycy0xLjAxLTMuNi0yLjUwNS00LjVDMTUuOTk1IDYuNiAxNyA0LjkyNSAxNyAzbS0xLjMzIDlhMy43NSAzLjc1IDAgMCAxLTMuNjEgMy44MWgtLjEyQTMuNzUgMy43NSAwIDAgMSA4LjMzIDEyYTMuNzUgMy43NSAwIDAgMSAzLjYwNS0zLjgxaC4xM0EzLjc1IDMuNzUgMCAwIDEgMTUuNjcgMTIiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNyAzaC0xLjMzYTMuNzUgMy43NSAwIDAgMS0zLjYwNSAzLjgxaC0uMTNBMy43NSAzLjc1IDAgMCAxIDguMzMgM0g3YzAgMS45MjUgMS4wMSAzLjYgMi41MDUgNC41QzguMDA1IDguNCA3IDEwLjA3NSA3IDEyczEuMDEgMy42IDIuNTA1IDQuNUM4LjAwNSAxNy40IDcgMTkuMDc1IDcgMjFoMS4zM2EzLjc1IDMuNzUgMCAwIDEgMy42MS0zLjgxaC4xMkEzLjc1IDMuNzUgMCAwIDEgMTUuNjcgMjFIMTdjMC0xLjkyNS0xLjAxLTMuNi0yLjUwNS00LjVDMTUuOTk1IDE1LjYgMTcgMTMuOTI1IDE3IDEycy0xLjAxLTMuNi0yLjUwNS00LjVDMTUuOTk1IDYuNiAxNyA0LjkyNSAxNyAzbS0xLjMzIDlhMy43NSAzLjc1IDAgMCAxLTMuNjEgMy44MWgtLjEyQTMuNzUgMy43NSAwIDAgMSA4LjMzIDEyYTMuNzUgMy43NSAwIDAgMSAzLjYwNS0zLjgxaC4xM0EzLjc1IDMuNzUgMCAwIDEgMTUuNjcgMTIiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNUFNfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNTlDN0YyIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi40NDUgNGgtMS4xODNhMy4zMzMgMy4zMzMgMCAwIDEtMy4yMDQgMy4zODdoLS4xMTZBMy4zMzMgMy4zMzMgMCAwIDEgOC43MzggNEg3LjU1NmMwIDEuNzExLjg5NyAzLjIgMi4yMjYgNC0xLjMzMy44LTIuMjI2IDIuMjg5LTIuMjI2IDRzLjg5NyAzLjIgMi4yMjYgNGMtMS4zMzMuOC0yLjIyNiAyLjI4OS0yLjIyNiA0aDEuMTgyYTMuMzMzIDMuMzMzIDAgMCAxIDMuMjA5LTMuMzg3aC4xMDdBMy4zMzMgMy4zMzMgMCAwIDEgMTUuMjYyIDIwaDEuMTgzYzAtMS43MTEtLjg5OC0zLjItMi4yMjctNCAxLjMzMy0uOCAyLjIyNy0yLjI4OSAyLjIyNy00cy0uODk4LTMuMi0yLjIyNy00YzEuMzMzLS44IDIuMjI3LTIuMjg5IDIuMjI3LTRtLTEuMTgzIDhhMy4zMzQgMy4zMzQgMCAwIDEtMy4yMDkgMy4zODdoLS4xMDZBMy4zMzMgMy4zMzMgMCAwIDEgOC43MzcgMTJhMy4zMzMgMy4zMzMgMCAwIDEgMy4yMDUtMy4zODdoLjExNkEzLjMzMyAzLjMzMyAwIDAgMSAxNS4yNjIgMTIiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iTVBTX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/MPS
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMPS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMPS', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1344idz._.js.map