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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenQLC.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenQLC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#05C7FF',
                d: 'M12 18.17a.754.754 0 0 0 0-1.508 4.653 4.653 0 0 1-4.668-4.669.754.754 0 0 0-1.502 0A6.17 6.17 0 0 0 12 18.175zm0-12.342a.754.754 0 0 0 0 1.508 4.653 4.653 0 0 1 4.67 4.668.754.754 0 0 0 1.501 0 6.17 6.17 0 0 0-6.17-6.176'
            }
        ],
        [
            'path',
            {
                fill: '#05C7FF',
                d: 'M12.006 8.625A3.36 3.36 0 0 1 15.375 12a.776.776 0 0 1-1.547 0 1.83 1.83 0 0 0-3.123-1.285A1.829 1.829 0 0 0 12 13.834a.776.776 0 0 1 0 1.54 3.37 3.37 0 0 1-2.386-.99 3.375 3.375 0 0 1 2.392-5.76m3.121 6.502a.826.826 0 0 0 0-1.18l-.01-.018a.844.844 0 0 0-1.182 0 .844.844 0 0 0 0 1.187l.006.011a.83.83 0 0 0 1.186 0M12 3a.754.754 0 0 0 0 1.507A7.48 7.48 0 0 1 19.498 12 .754.754 0 0 0 21 12a9 9 0 0 0-2.638-6.368A9 9 0 0 0 12 3m0 18a.754.754 0 0 0 0-1.508A7.48 7.48 0 0 1 4.502 12 .751.751 0 1 0 3 12.01a8.95 8.95 0 0 0 2.638 6.356A8.95 8.95 0 0 0 12 21'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 18.171a.754.754 0 0 0 0-1.507 4.654 4.654 0 0 1-4.669-4.669.754.754 0 0 0-1.501 0A6.17 6.17 0 0 0 12 18.177zm0-12.34a.754.754 0 1 0 0 1.507 4.653 4.653 0 0 1 4.669 4.668.754.754 0 0 0 1.502 0A6.17 6.17 0 0 0 12 5.83'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.006 8.625A3.36 3.36 0 0 1 15.375 12a.776.776 0 0 1-1.547 0A1.828 1.828 0 1 0 12 13.834a.776.776 0 0 1 0 1.54 3.37 3.37 0 0 1-2.386-.99 3.375 3.375 0 0 1 2.392-5.76m3.121 6.502a.826.826 0 0 0 0-1.18l-.01-.018a.844.844 0 0 0-1.182 0 .844.844 0 0 0 0 1.187l.006.011a.83.83 0 0 0 1.186 0M12 3a.754.754 0 0 0 0 1.507A7.48 7.48 0 0 1 19.498 12 .753.753 0 0 0 21 12a9 9 0 0 0-2.638-6.368A9 9 0 0 0 12 3m0 18a.754.754 0 0 0 0-1.508A7.48 7.48 0 0 1 4.502 12 .751.751 0 1 0 3 12.01a8.95 8.95 0 0 0 2.638 6.356A8.95 8.95 0 0 0 12 21'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#QLC__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#05C7FF',
                        d: 'M12 17.486a.67.67 0 0 0 0-1.34 4.14 4.14 0 0 1-4.15-4.15.67.67 0 0 0-1.335 0A5.485 5.485 0 0 0 12 17.49zm0-10.97a.67.67 0 1 0 0 1.34 4.136 4.136 0 0 1 4.15 4.15.67.67 0 0 0 1.335 0A5.487 5.487 0 0 0 12 6.516'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#05C7FF',
                        d: 'M12.005 9A2.984 2.984 0 0 1 15 12a.69.69 0 0 1-1.375 0A1.625 1.625 0 1 0 12 13.63.689.689 0 0 1 12 15a3 3 0 0 1-2.12-.88A3 3 0 0 1 12.004 9m2.775 5.78a.734.734 0 0 0 0-1.05l-.01-.015a.75.75 0 0 0-1.05 0 .75.75 0 0 0 0 1.055l.005.01a.74.74 0 0 0 1.055 0M12 4a.67.67 0 0 0 0 1.34A6.65 6.65 0 0 1 18.665 12 .67.67 0 0 0 20 12c0-2.21-.9-4.215-2.345-5.66A8 8 0 0 0 12 4m0 16a.67.67 0 0 0 0-1.34A6.65 6.65 0 0 1 5.335 12 .668.668 0 1 0 4 12.01c0 2.21.9 4.21 2.345 5.65A7.95 7.95 0 0 0 12 20'
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
                        id: 'QLC__a'
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
 * @component @name TokenQLC
 * @description Web3Icon for TokenQLC
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwNUM3RkYiIGQ9Ik0xMiAxOC4xN2EuNzU0Ljc1NCAwIDAgMCAwLTEuNTA4IDQuNjUzIDQuNjUzIDAgMCAxLTQuNjY4LTQuNjY5Ljc1NC43NTQgMCAwIDAtMS41MDIgMEE2LjE3IDYuMTcgMCAwIDAgMTIgMTguMTc1em0wLTEyLjM0MmEuNzU0Ljc1NCAwIDAgMCAwIDEuNTA4IDQuNjUzIDQuNjUzIDAgMCAxIDQuNjcgNC42NjguNzU0Ljc1NCAwIDAgMCAxLjUwMSAwIDYuMTcgNi4xNyAwIDAgMC02LjE3LTYuMTc2Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDVDN0ZGIiBkPSJNMTIuMDA2IDguNjI1QTMuMzYgMy4zNiAwIDAgMSAxNS4zNzUgMTJhLjc3Ni43NzYgMCAwIDEtMS41NDcgMCAxLjgzIDEuODMgMCAwIDAtMy4xMjMtMS4yODVBMS44MjkgMS44MjkgMCAwIDAgMTIgMTMuODM0YS43NzYuNzc2IDAgMCAxIDAgMS41NCAzLjM3IDMuMzcgMCAwIDEtMi4zODYtLjk5IDMuMzc1IDMuMzc1IDAgMCAxIDIuMzkyLTUuNzZtMy4xMjEgNi41MDJhLjgyNi44MjYgMCAwIDAgMC0xLjE4bC0uMDEtLjAxOGEuODQ0Ljg0NCAwIDAgMC0xLjE4MiAwIC44NDQuODQ0IDAgMCAwIDAgMS4xODdsLjAwNi4wMTFhLjgzLjgzIDAgMCAwIDEuMTg2IDBNMTIgM2EuNzU0Ljc1NCAwIDAgMCAwIDEuNTA3QTcuNDggNy40OCAwIDAgMSAxOS40OTggMTIgLjc1NC43NTQgMCAwIDAgMjEgMTJhOSA5IDAgMCAwLTIuNjM4LTYuMzY4QTkgOSAwIDAgMCAxMiAzbTAgMThhLjc1NC43NTQgMCAwIDAgMC0xLjUwOEE3LjQ4IDcuNDggMCAwIDEgNC41MDIgMTIgLjc1MS43NTEgMCAxIDAgMyAxMi4wMWE4Ljk1IDguOTUgMCAwIDAgMi42MzggNi4zNTZBOC45NSA4Ljk1IDAgMCAwIDEyIDIxIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAxOC4xNzFhLjc1NC43NTQgMCAwIDAgMC0xLjUwNyA0LjY1NCA0LjY1NCAwIDAgMS00LjY2OS00LjY2OS43NTQuNzU0IDAgMCAwLTEuNTAxIDBBNi4xNyA2LjE3IDAgMCAwIDEyIDE4LjE3N3ptMC0xMi4zNGEuNzU0Ljc1NCAwIDEgMCAwIDEuNTA3IDQuNjUzIDQuNjUzIDAgMCAxIDQuNjY5IDQuNjY4Ljc1NC43NTQgMCAwIDAgMS41MDIgMEE2LjE3IDYuMTcgMCAwIDAgMTIgNS44MyIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyLjAwNiA4LjYyNUEzLjM2IDMuMzYgMCAwIDEgMTUuMzc1IDEyYS43NzYuNzc2IDAgMCAxLTEuNTQ3IDBBMS44MjggMS44MjggMCAxIDAgMTIgMTMuODM0YS43NzYuNzc2IDAgMCAxIDAgMS41NCAzLjM3IDMuMzcgMCAwIDEtMi4zODYtLjk5IDMuMzc1IDMuMzc1IDAgMCAxIDIuMzkyLTUuNzZtMy4xMjEgNi41MDJhLjgyNi44MjYgMCAwIDAgMC0xLjE4bC0uMDEtLjAxOGEuODQ0Ljg0NCAwIDAgMC0xLjE4MiAwIC44NDQuODQ0IDAgMCAwIDAgMS4xODdsLjAwNi4wMTFhLjgzLjgzIDAgMCAwIDEuMTg2IDBNMTIgM2EuNzU0Ljc1NCAwIDAgMCAwIDEuNTA3QTcuNDggNy40OCAwIDAgMSAxOS40OTggMTIgLjc1My43NTMgMCAwIDAgMjEgMTJhOSA5IDAgMCAwLTIuNjM4LTYuMzY4QTkgOSAwIDAgMCAxMiAzbTAgMThhLjc1NC43NTQgMCAwIDAgMC0xLjUwOEE3LjQ4IDcuNDggMCAwIDEgNC41MDIgMTIgLjc1MS43NTEgMCAxIDAgMyAxMi4wMWE4Ljk1IDguOTUgMCAwIDAgMi42MzggNi4zNTZBOC45NSA4Ljk1IDAgMCAwIDEyIDIxIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNRTENfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwNUM3RkYiIGQ9Ik0xMiAxNy40ODZhLjY3LjY3IDAgMCAwIDAtMS4zNCA0LjE0IDQuMTQgMCAwIDEtNC4xNS00LjE1LjY3LjY3IDAgMCAwLTEuMzM1IDBBNS40ODUgNS40ODUgMCAwIDAgMTIgMTcuNDl6bTAtMTAuOTdhLjY3LjY3IDAgMSAwIDAgMS4zNCA0LjEzNiA0LjEzNiAwIDAgMSA0LjE1IDQuMTUuNjcuNjcgMCAwIDAgMS4zMzUgMEE1LjQ4NyA1LjQ4NyAwIDAgMCAxMiA2LjUxNiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwNUM3RkYiIGQ9Ik0xMi4wMDUgOUEyLjk4NCAyLjk4NCAwIDAgMSAxNSAxMmEuNjkuNjkgMCAwIDEtMS4zNzUgMEExLjYyNSAxLjYyNSAwIDEgMCAxMiAxMy42My42ODkuNjg5IDAgMCAxIDEyIDE1YTMgMyAwIDAgMS0yLjEyLS44OEEzIDMgMCAwIDEgMTIuMDA0IDltMi43NzUgNS43OGEuNzM0LjczNCAwIDAgMCAwLTEuMDVsLS4wMS0uMDE1YS43NS43NSAwIDAgMC0xLjA1IDAgLjc1Ljc1IDAgMCAwIDAgMS4wNTVsLjAwNS4wMWEuNzQuNzQgMCAwIDAgMS4wNTUgME0xMiA0YS42Ny42NyAwIDAgMCAwIDEuMzRBNi42NSA2LjY1IDAgMCAxIDE4LjY2NSAxMiAuNjcuNjcgMCAwIDAgMjAgMTJjMC0yLjIxLS45LTQuMjE1LTIuMzQ1LTUuNjZBOCA4IDAgMCAwIDEyIDRtMCAxNmEuNjcuNjcgMCAwIDAgMC0xLjM0QTYuNjUgNi42NSAwIDAgMSA1LjMzNSAxMiAuNjY4LjY2OCAwIDEgMCA0IDEyLjAxYzAgMi4yMS45IDQuMjEgMi4zNDUgNS42NUE3Ljk1IDcuOTUgMCAwIDAgMTIgMjAiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iUUxDX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/QLC
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenQLC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenQLC', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1x86un9._.js.map