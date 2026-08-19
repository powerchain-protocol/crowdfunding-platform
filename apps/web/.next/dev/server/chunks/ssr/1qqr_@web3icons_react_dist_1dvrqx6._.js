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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSHIDO.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSHIDO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#SHIDO__a)',
                d: 'M14.27 5.25A2.26 2.26 0 0 1 12 7.5a2.26 2.26 0 0 1-2.271-2.25A2.26 2.26 0 0 1 11.999 3a2.26 2.26 0 0 1 2.272 2.25m-5.976 5.691v1.705l2.33 1.472 1.376-.9zm7.412 0v1.705l-2.33 1.472-1.376-.9zm-2.404-3.51a2.53 2.53 0 0 0 1.191-2.726l5.448 3.033v2.933l-2.647 1.419V9.65l-3.992-2.224zm3.992 6.094 2.647-1.446v4.5L12 21l-7.941-4.42v-4.516l2.647 1.445v2.027L12 18.476l5.294-2.939zM4.059 7.738v2.912l2.647 1.424V9.65l3.991-2.223a2.525 2.525 0 0 1-1.19-2.721z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'SHIDO__a',
                        x1: '19.941',
                        x2: '7.187',
                        y1: '8.241',
                        y2: '17.172',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#009CFF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#0070FF'
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
                d: 'M14.271 5.25a2.26 2.26 0 0 1-2.27 2.25 2.26 2.26 0 0 1-2.272-2.25A2.26 2.26 0 0 1 12 3a2.26 2.26 0 0 1 2.271 2.25m-5.977 5.691v1.705l2.33 1.472 1.376-.9zm7.412 0v1.705l-2.33 1.472-1.376-.9zm-2.403-3.51a2.525 2.525 0 0 0 1.19-2.726l5.448 3.033v2.933l-2.647 1.419V9.65l-3.992-2.224zm3.991 6.094 2.647-1.446v4.5L12.001 21l-7.942-4.42v-4.516l2.647 1.445v2.027L12 18.476l5.294-2.939zM4.06 7.738v2.912l2.647 1.424V9.65l3.992-2.223a2.525 2.525 0 0 1-1.191-2.721z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#SHIDO__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#SHIDO__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M14.019 6A2.007 2.007 0 0 1 12 8a2.01 2.01 0 0 1-2.019-2 2.01 2.01 0 0 1 2.02-2c1.115 0 2.018.894 2.018 2m-5.313 5.059v1.515l2.07 1.308 1.224-.8zm6.588 0v1.515l-2.07 1.308-1.224-.8zm-2.136-3.12a2.245 2.245 0 0 0 1.059-2.424l4.842 2.697v2.607l-2.353 1.26V9.912l-3.548-1.977zm3.548 5.416 2.353-1.284v4L12 20l-7.059-3.93v-4.014l2.353 1.285v1.803L12 17.755l4.706-2.611zM4.941 8.212V10.8l2.353 1.266V9.91l3.549-1.977a2.245 2.245 0 0 1-1.06-2.419z'
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
                        id: 'SHIDO__b',
                        x1: '19.059',
                        x2: '7.722',
                        y1: '8.659',
                        y2: '16.598',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#009CFF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#0070FF'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'SHIDO__a'
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
 * @component @name TokenSHIDO
 * @description Web3Icon for TokenSHIDO
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjU0hJRE9fX2EpIiBkPSJNMTQuMjcgNS4yNUEyLjI2IDIuMjYgMCAwIDEgMTIgNy41YTIuMjYgMi4yNiAwIDAgMS0yLjI3MS0yLjI1QTIuMjYgMi4yNiAwIDAgMSAxMS45OTkgM2EyLjI2IDIuMjYgMCAwIDEgMi4yNzIgMi4yNW0tNS45NzYgNS42OTF2MS43MDVsMi4zMyAxLjQ3MiAxLjM3Ni0uOXptNy40MTIgMHYxLjcwNWwtMi4zMyAxLjQ3Mi0xLjM3Ni0uOXptLTIuNDA0LTMuNTFhMi41MyAyLjUzIDAgMCAwIDEuMTkxLTIuNzI2bDUuNDQ4IDMuMDMzdjIuOTMzbC0yLjY0NyAxLjQxOVY5LjY1bC0zLjk5Mi0yLjIyNHptMy45OTIgNi4wOTQgMi42NDctMS40NDZ2NC41TDEyIDIxbC03Ljk0MS00LjQydi00LjUxNmwyLjY0NyAxLjQ0NXYyLjAyN0wxMiAxOC40NzZsNS4yOTQtMi45Mzl6TTQuMDU5IDcuNzM4djIuOTEybDIuNjQ3IDEuNDI0VjkuNjVsMy45OTEtMi4yMjNhMi41MjUgMi41MjUgMCAwIDEtMS4xOS0yLjcyMXoiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iU0hJRE9fX2EiIHgxPSIxOS45NDEiIHgyPSI3LjE4NyIgeTE9IjguMjQxIiB5Mj0iMTcuMTcyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMDlDRkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA3MEZGIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC4yNzEgNS4yNWEyLjI2IDIuMjYgMCAwIDEtMi4yNyAyLjI1IDIuMjYgMi4yNiAwIDAgMS0yLjI3Mi0yLjI1QTIuMjYgMi4yNiAwIDAgMSAxMiAzYTIuMjYgMi4yNiAwIDAgMSAyLjI3MSAyLjI1bS01Ljk3NyA1LjY5MXYxLjcwNWwyLjMzIDEuNDcyIDEuMzc2LS45em03LjQxMiAwdjEuNzA1bC0yLjMzIDEuNDcyLTEuMzc2LS45em0tMi40MDMtMy41MWEyLjUyNSAyLjUyNSAwIDAgMCAxLjE5LTIuNzI2bDUuNDQ4IDMuMDMzdjIuOTMzbC0yLjY0NyAxLjQxOVY5LjY1bC0zLjk5Mi0yLjIyNHptMy45OTEgNi4wOTQgMi42NDctMS40NDZ2NC41TDEyLjAwMSAyMWwtNy45NDItNC40MnYtNC41MTZsMi42NDcgMS40NDV2Mi4wMjdMMTIgMTguNDc2bDUuMjk0LTIuOTM5ek00LjA2IDcuNzM4djIuOTEybDIuNjQ3IDEuNDI0VjkuNjVsMy45OTItMi4yMjNhMi41MjUgMi41MjUgMCAwIDEtMS4xOTEtMi43MjF6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTSElET19fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjU0hJRE9fX2IpIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC4wMTkgNkEyLjAwNyAyLjAwNyAwIDAgMSAxMiA4YTIuMDEgMi4wMSAwIDAgMS0yLjAxOS0yIDIuMDEgMi4wMSAwIDAgMSAyLjAyLTJjMS4xMTUgMCAyLjAxOC44OTQgMi4wMTggMm0tNS4zMTMgNS4wNTl2MS41MTVsMi4wNyAxLjMwOCAxLjIyNC0uOHptNi41ODggMHYxLjUxNWwtMi4wNyAxLjMwOC0xLjIyNC0uOHptLTIuMTM2LTMuMTJhMi4yNDUgMi4yNDUgMCAwIDAgMS4wNTktMi40MjRsNC44NDIgMi42OTd2Mi42MDdsLTIuMzUzIDEuMjZWOS45MTJsLTMuNTQ4LTEuOTc3em0zLjU0OCA1LjQxNiAyLjM1My0xLjI4NHY0TDEyIDIwbC03LjA1OS0zLjkzdi00LjAxNGwyLjM1MyAxLjI4NXYxLjgwM0wxMiAxNy43NTVsNC43MDYtMi42MTF6TTQuOTQxIDguMjEyVjEwLjhsMi4zNTMgMS4yNjZWOS45MWwzLjU0OS0xLjk3N2EyLjI0NSAyLjI0NSAwIDAgMS0xLjA2LTIuNDE5eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJTSElET19fYiIgeDE9IjE5LjA1OSIgeDI9IjcuNzIyIiB5MT0iOC42NTkiIHkyPSIxNi41OTgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwOUNGRiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDcwRkYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iU0hJRE9fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/SHIDO
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSHIDO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSHIDO', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1dvrqx6._.js.map