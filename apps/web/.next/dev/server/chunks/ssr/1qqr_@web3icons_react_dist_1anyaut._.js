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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenKUB.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenKUB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#4CBA64',
                d: 'M14.925 6.717a1.8 1.8 0 0 1 .373-.567L21 11.762l-5.715 6.075-4.09-4.185a1.68 1.68 0 0 1 1.863-.377c.208.088.396.216.553.377l1.678 1.714 3.294-3.6-3.284-3.14a1.755 1.755 0 0 1-.37-1.909zm1.575 5.058a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0M8.701 17.85a1.773 1.773 0 0 0 0-2.475l-3.285-3.577 3.299-3.164 1.674 1.715a1.7 1.7 0 0 0 1.206.513c.454 0 .855-.306 1.17-.635L8.715 6.16 3 11.798zm1.049-6.075a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M14.925 6.717a1.8 1.8 0 0 1 .373-.567L21 11.762l-5.715 6.075-4.09-4.185a1.68 1.68 0 0 1 1.863-.377c.208.088.396.216.553.377l1.678 1.714 3.294-3.6-3.284-3.14a1.755 1.755 0 0 1-.37-1.909zm1.575 5.058a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0M8.701 17.85a1.773 1.773 0 0 0 0-2.475l-3.285-3.577 3.299-3.164 1.674 1.715a1.7 1.7 0 0 0 1.206.513c.454 0 .855-.306 1.17-.635L8.715 6.16 3 11.798zm1.049-6.075a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#KUB__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#4CBA64',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M14.6 7.304c.08-.188.188-.36.332-.504L20 11.788l-5.08 5.4-3.636-3.72a1.5 1.5 0 0 1 2.148 0l1.492 1.524 2.928-3.2L14.932 9a1.56 1.56 0 0 1-.328-1.696zM16 11.8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6.932 5.4a1.576 1.576 0 0 0 0-2.2l-2.92-3.18L9.08 9.008l1.488 1.524a1.5 1.5 0 0 0 1.072.456c.404 0 .76-.272 1.04-.564l-3.6-3.616L4 11.82zM10 11.8a1 1 0 1 1-2 0 1 1 0 0 1 2 0'
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
                        id: 'KUB__a'
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
 * @component @name TokenKUB
 * @description Web3Icon for TokenKUB
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM0Q0JBNjQiIGQ9Ik0xNC45MjUgNi43MTdhMS44IDEuOCAwIDAgMSAuMzczLS41NjdMMjEgMTEuNzYybC01LjcxNSA2LjA3NS00LjA5LTQuMTg1YTEuNjggMS42OCAwIDAgMSAxLjg2My0uMzc3Yy4yMDguMDg4LjM5Ni4yMTYuNTUzLjM3N2wxLjY3OCAxLjcxNCAzLjI5NC0zLjYtMy4yODQtMy4xNGExLjc1NSAxLjc1NSAwIDAgMS0uMzctMS45MDl6bTEuNTc1IDUuMDU4YTEuMTI1IDEuMTI1IDAgMSAxLTIuMjUgMCAxLjEyNSAxLjEyNSAwIDAgMSAyLjI1IDBNOC43MDEgMTcuODVhMS43NzMgMS43NzMgMCAwIDAgMC0yLjQ3NWwtMy4yODUtMy41NzcgMy4yOTktMy4xNjQgMS42NzQgMS43MTVhMS43IDEuNyAwIDAgMCAxLjIwNi41MTNjLjQ1NCAwIC44NTUtLjMwNiAxLjE3LS42MzVMOC43MTUgNi4xNiAzIDExLjc5OHptMS4wNDktNi4wNzVhMS4xMjUgMS4xMjUgMCAxIDEtMi4yNSAwIDEuMTI1IDEuMTI1IDAgMCAxIDIuMjUgMCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC45MjUgNi43MTdhMS44IDEuOCAwIDAgMSAuMzczLS41NjdMMjEgMTEuNzYybC01LjcxNSA2LjA3NS00LjA5LTQuMTg1YTEuNjggMS42OCAwIDAgMSAxLjg2My0uMzc3Yy4yMDguMDg4LjM5Ni4yMTYuNTUzLjM3N2wxLjY3OCAxLjcxNCAzLjI5NC0zLjYtMy4yODQtMy4xNGExLjc1NSAxLjc1NSAwIDAgMS0uMzctMS45MDl6bTEuNTc1IDUuMDU4YTEuMTI1IDEuMTI1IDAgMSAxLTIuMjUgMCAxLjEyNSAxLjEyNSAwIDAgMSAyLjI1IDBNOC43MDEgMTcuODVhMS43NzMgMS43NzMgMCAwIDAgMC0yLjQ3NWwtMy4yODUtMy41NzcgMy4yOTktMy4xNjQgMS42NzQgMS43MTVhMS43IDEuNyAwIDAgMCAxLjIwNi41MTNjLjQ1NCAwIC44NTUtLjMwNiAxLjE3LS42MzVMOC43MTUgNi4xNiAzIDExLjc5OHptMS4wNDktNi4wNzVhMS4xMjUgMS4xMjUgMCAxIDEtMi4yNSAwIDEuMTI1IDEuMTI1IDAgMCAxIDIuMjUgMCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNLVUJfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNENCQTY0IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC42IDcuMzA0Yy4wOC0uMTg4LjE4OC0uMzYuMzMyLS41MDRMMjAgMTEuNzg4bC01LjA4IDUuNC0zLjYzNi0zLjcyYTEuNSAxLjUgMCAwIDEgMi4xNDggMGwxLjQ5MiAxLjUyNCAyLjkyOC0zLjJMMTQuOTMyIDlhMS41NiAxLjU2IDAgMCAxLS4zMjgtMS42OTZ6TTE2IDExLjhhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbS02LjkzMiA1LjRhMS41NzYgMS41NzYgMCAwIDAgMC0yLjJsLTIuOTItMy4xOEw5LjA4IDkuMDA4bDEuNDg4IDEuNTI0YTEuNSAxLjUgMCAwIDAgMS4wNzIuNDU2Yy40MDQgMCAuNzYtLjI3MiAxLjA0LS41NjRsLTMuNi0zLjYxNkw0IDExLjgyek0xMCAxMS44YTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJLVUJfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/KUB
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenKUB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenKUB', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1anyaut._.js.map