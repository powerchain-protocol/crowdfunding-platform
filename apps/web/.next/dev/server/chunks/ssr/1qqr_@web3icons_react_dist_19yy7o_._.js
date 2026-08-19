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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenGYEN.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenGYEN
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#005BAC',
                d: 'M21 12c0 2.983-4.027 5.4-9 5.4S3 14.984 3 12c0-2.983 4.027-5.4 9-5.4 3.33 0 6.241 1.085 7.794 2.7h-3.677c-.99-.828-2.466-1.35-4.117-1.35-2.984 0-5.4 1.71-5.4 3.825S9.016 15.6 12 15.6c2.43 0 4.486-1.138 5.162-2.7h-5.175a.894.894 0 0 1-.887-.9c0-.495.396-.9.891-.9h8.883q.127.44.126.9'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M21 12c0 2.984-4.027 5.4-9 5.4S3 14.984 3 12c0-2.983 4.027-5.4 9-5.4 3.33 0 6.241 1.085 7.794 2.7h-3.677c-.99-.828-2.466-1.35-4.117-1.35-2.984 0-5.4 1.71-5.4 3.825S9.016 15.6 12 15.6c2.43 0 4.486-1.138 5.162-2.7h-5.175a.894.894 0 0 1-.887-.9c0-.495.396-.9.891-.9h8.883q.127.44.126.9'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#GYEN__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#005BAC',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M20 12c0 2.652-3.58 4.8-8 4.8S4 14.652 4 12s3.58-4.8 8-4.8c2.96 0 5.548.964 6.928 2.4H15.66c-.88-.736-2.192-1.2-3.66-1.2-2.652 0-4.8 1.52-4.8 3.4s2.148 3.4 4.8 3.4c2.16 0 3.988-1.012 4.588-2.4h-4.6a.795.795 0 0 1-.788-.8c0-.44.352-.8.792-.8h7.896q.113.391.112.8'
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
                        id: 'GYEN__a'
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
 * @component @name TokenGYEN
 * @description Web3Icon for TokenGYEN
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDVCQUMiIGQ9Ik0yMSAxMmMwIDIuOTgzLTQuMDI3IDUuNC05IDUuNFMzIDE0Ljk4NCAzIDEyYzAtMi45ODMgNC4wMjctNS40IDktNS40IDMuMzMgMCA2LjI0MSAxLjA4NSA3Ljc5NCAyLjdoLTMuNjc3Yy0uOTktLjgyOC0yLjQ2Ni0xLjM1LTQuMTE3LTEuMzUtMi45ODQgMC01LjQgMS43MS01LjQgMy44MjVTOS4wMTYgMTUuNiAxMiAxNS42YzIuNDMgMCA0LjQ4Ni0xLjEzOCA1LjE2Mi0yLjdoLTUuMTc1YS44OTQuODk0IDAgMCAxLS44ODctLjljMC0uNDk1LjM5Ni0uOS44OTEtLjloOC44ODNxLjEyNy40NC4xMjYuOSIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMSAxMmMwIDIuOTg0LTQuMDI3IDUuNC05IDUuNFMzIDE0Ljk4NCAzIDEyYzAtMi45ODMgNC4wMjctNS40IDktNS40IDMuMzMgMCA2LjI0MSAxLjA4NSA3Ljc5NCAyLjdoLTMuNjc3Yy0uOTktLjgyOC0yLjQ2Ni0xLjM1LTQuMTE3LTEuMzUtMi45ODQgMC01LjQgMS43MS01LjQgMy44MjVTOS4wMTYgMTUuNiAxMiAxNS42YzIuNDMgMCA0LjQ4Ni0xLjEzOCA1LjE2Mi0yLjdoLTUuMTc1YS44OTQuODk0IDAgMCAxLS44ODctLjljMC0uNDk1LjM5Ni0uOS44OTEtLjloOC44ODNxLjEyNy40NC4xMjYuOSIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNHWUVOX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwNUJBQyIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjAgMTJjMCAyLjY1Mi0zLjU4IDQuOC04IDQuOFM0IDE0LjY1MiA0IDEyczMuNTgtNC44IDgtNC44YzIuOTYgMCA1LjU0OC45NjQgNi45MjggMi40SDE1LjY2Yy0uODgtLjczNi0yLjE5Mi0xLjItMy42Ni0xLjItMi42NTIgMC00LjggMS41Mi00LjggMy40czIuMTQ4IDMuNCA0LjggMy40YzIuMTYgMCAzLjk4OC0xLjAxMiA0LjU4OC0yLjRoLTQuNmEuNzk1Ljc5NSAwIDAgMS0uNzg4LS44YzAtLjQ0LjM1Mi0uOC43OTItLjhoNy44OTZxLjExMy4zOTEuMTEyLjgiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iR1lFTl9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/GYEN
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenGYEN = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenGYEN', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_19yy7o_._.js.map