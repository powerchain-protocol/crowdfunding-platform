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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPSTAKE.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPSTAKE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M16.886 10.313H13.32c0-.518-.298-1.688-1.496-1.688s-1.519.917-1.508 1.35c0 1.125 1.84 1.879 2.734 2.12 3.47 1.024 4.106 3.072 3.994 3.966.18 1.648-.563 4.939-4.95 4.939s-5.265-2.959-5.153-4.5h3.375c0 .523.32 1.688 1.778 1.688 1.164 0 1.575-1.294 1.597-1.744.09-.433-.506-1.238-3.324-2.042-3.533-1.007-3.414-3.488-3.414-4.157 0-.675.016-4.432 4.966-4.432 3.96 0 4.962 3.02 4.967 4.5'
            }
        ],
        [
            'path',
            {
                fill: '#E50913',
                d: 'M6.943 3h10.125v2.25H6.943z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M16.886 10.313H13.32c0-.518-.298-1.688-1.496-1.688s-1.519.917-1.508 1.35c0 1.125 1.84 1.879 2.734 2.12 3.47 1.024 4.106 3.072 3.994 3.966.18 1.648-.563 4.939-4.95 4.939s-5.265-2.959-5.153-4.5h3.375c0 .523.32 1.687 1.778 1.687 1.164 0 1.575-1.293 1.597-1.743.09-.433-.506-1.238-3.324-2.042-3.533-1.007-3.414-3.488-3.414-4.157 0-.675.016-4.432 4.966-4.432 3.96 0 4.962 3.02 4.967 4.5M6.943 3h10.125v2.25H6.943z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#PSTAKE__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#E50913',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M16.343 10.5h-3.17c0-.46-.265-1.5-1.33-1.5s-1.35.815-1.34 1.2c0 1 1.635 1.67 2.43 1.885 3.085.91 3.65 2.73 3.55 3.525.16 1.465-.5 4.39-4.4 4.39s-4.68-2.63-4.58-4h3c0 .465.285 1.5 1.58 1.5 1.035 0 1.4-1.15 1.42-1.55.08-.385-.45-1.1-2.955-1.815-3.14-.895-3.035-3.1-3.035-3.695 0-.6.015-3.94 4.415-3.94 3.52 0 4.41 2.685 4.415 4M7.505 4h9v2h-9z'
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
                        id: 'PSTAKE__a'
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
 * @component @name TokenPSTAKE
 * @description Web3Icon for TokenPSTAKE
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi44ODYgMTAuMzEzSDEzLjMyYzAtLjUxOC0uMjk4LTEuNjg4LTEuNDk2LTEuNjg4cy0xLjUxOS45MTctMS41MDggMS4zNWMwIDEuMTI1IDEuODQgMS44NzkgMi43MzQgMi4xMiAzLjQ3IDEuMDI0IDQuMTA2IDMuMDcyIDMuOTk0IDMuOTY2LjE4IDEuNjQ4LS41NjMgNC45MzktNC45NSA0LjkzOXMtNS4yNjUtMi45NTktNS4xNTMtNC41aDMuMzc1YzAgLjUyMy4zMiAxLjY4OCAxLjc3OCAxLjY4OCAxLjE2NCAwIDEuNTc1LTEuMjk0IDEuNTk3LTEuNzQ0LjA5LS40MzMtLjUwNi0xLjIzOC0zLjMyNC0yLjA0Mi0zLjUzMy0xLjAwNy0zLjQxNC0zLjQ4OC0zLjQxNC00LjE1NyAwLS42NzUuMDE2LTQuNDMyIDQuOTY2LTQuNDMyIDMuOTYgMCA0Ljk2MiAzLjAyIDQuOTY3IDQuNSIvPgogICAgPHBhdGggZmlsbD0iI0U1MDkxMyIgZD0iTTYuOTQzIDNoMTAuMTI1djIuMjVINi45NDN6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi44ODYgMTAuMzEzSDEzLjMyYzAtLjUxOC0uMjk4LTEuNjg4LTEuNDk2LTEuNjg4cy0xLjUxOS45MTctMS41MDggMS4zNWMwIDEuMTI1IDEuODQgMS44NzkgMi43MzQgMi4xMiAzLjQ3IDEuMDI0IDQuMTA2IDMuMDcyIDMuOTk0IDMuOTY2LjE4IDEuNjQ4LS41NjMgNC45MzktNC45NSA0LjkzOXMtNS4yNjUtMi45NTktNS4xNTMtNC41aDMuMzc1YzAgLjUyMy4zMiAxLjY4NyAxLjc3OCAxLjY4NyAxLjE2NCAwIDEuNTc1LTEuMjkzIDEuNTk3LTEuNzQzLjA5LS40MzMtLjUwNi0xLjIzOC0zLjMyNC0yLjA0Mi0zLjUzMy0xLjAwNy0zLjQxNC0zLjQ4OC0zLjQxNC00LjE1NyAwLS42NzUuMDE2LTQuNDMyIDQuOTY2LTQuNDMyIDMuOTYgMCA0Ljk2MiAzLjAyIDQuOTY3IDQuNU02Ljk0MyAzaDEwLjEyNXYyLjI1SDYuOTQzeiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQU1RBS0VfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRTUwOTEzIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi4zNDMgMTAuNWgtMy4xN2MwLS40Ni0uMjY1LTEuNS0xLjMzLTEuNXMtMS4zNS44MTUtMS4zNCAxLjJjMCAxIDEuNjM1IDEuNjcgMi40MyAxLjg4NSAzLjA4NS45MSAzLjY1IDIuNzMgMy41NSAzLjUyNS4xNiAxLjQ2NS0uNSA0LjM5LTQuNCA0LjM5cy00LjY4LTIuNjMtNC41OC00aDNjMCAuNDY1LjI4NSAxLjUgMS41OCAxLjUgMS4wMzUgMCAxLjQtMS4xNSAxLjQyLTEuNTUuMDgtLjM4NS0uNDUtMS4xLTIuOTU1LTEuODE1LTMuMTQtLjg5NS0zLjAzNS0zLjEtMy4wMzUtMy42OTUgMC0uNi4wMTUtMy45NCA0LjQxNS0zLjk0IDMuNTIgMCA0LjQxIDIuNjg1IDQuNDE1IDRNNy41MDUgNGg5djJoLTl6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlBTVEFLRV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/PSTAKE
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPSTAKE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPSTAKE', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_05nbkkj._.js.map