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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkAbstract.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkAbstract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#054729',
                d: 'm14.849 14.776 3.61 3.576-1.695 1.677-3.61-3.575a1.63 1.63 0 0 0-1.156-.474c-.44 0-.846.167-1.156.474l-3.61 3.576-1.694-1.678 3.61-3.576zm.602-1.03 4.93 1.306.619-2.294-4.93-1.307a1.62 1.62 0 0 1-.993-.755 1.6 1.6 0 0 1-.163-1.23l1.32-4.882-2.316-.614-1.32 4.884 2.85 4.888zm-6.902 0-4.93 1.306L3 12.758l4.93-1.307a1.62 1.62 0 0 0 .993-.755 1.6 1.6 0 0 0 .163-1.23l-1.32-4.882 2.316-.614 1.32 4.884-2.85 4.888z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm14.849 14.776 3.61 3.576-1.695 1.677-3.61-3.575a1.63 1.63 0 0 0-1.156-.474c-.44 0-.846.167-1.156.474l-3.61 3.576-1.694-1.678 3.61-3.576zm.602-1.03 4.93 1.306.619-2.294-4.93-1.307a1.62 1.62 0 0 1-.993-.755 1.6 1.6 0 0 1-.163-1.23l1.32-4.882-2.316-.614-1.32 4.884 2.85 4.888zm-6.902 0-4.93 1.306L3 12.758l4.93-1.307a1.62 1.62 0 0 0 .993-.755 1.6 1.6 0 0 0 .163-1.23l-1.32-4.882 2.316-.614 1.32 4.884-2.85 4.888z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#abstract__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#054729',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm14.532 14.467 3.209 3.179-1.506 1.49-3.208-3.177a1.45 1.45 0 0 0-1.029-.421c-.39 0-.752.148-1.028.421l-3.208 3.179-1.506-1.492 3.208-3.179zm.535-.916 4.383 1.162.55-2.04-4.382-1.16a1.44 1.44 0 0 1-1.028-1.765l1.173-4.34-2.058-.546-1.174 4.341 2.534 4.346zm-6.134 0L4.55 14.713 4 12.673l4.382-1.16A1.44 1.44 0 0 0 9.41 9.747l-1.173-4.34 2.058-.546 1.173 4.341-2.533 4.346z'
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
                        id: 'abstract__a'
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
 * @component @name NetworkAbstract
 * @description Web3Icon for NetworkAbstract
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwNTQ3MjkiIGQ9Im0xNC44NDkgMTQuNzc2IDMuNjEgMy41NzYtMS42OTUgMS42NzctMy42MS0zLjU3NWExLjYzIDEuNjMgMCAwIDAtMS4xNTYtLjQ3NGMtLjQ0IDAtLjg0Ni4xNjctMS4xNTYuNDc0bC0zLjYxIDMuNTc2LTEuNjk0LTEuNjc4IDMuNjEtMy41NzZ6bS42MDItMS4wMyA0LjkzIDEuMzA2LjYxOS0yLjI5NC00LjkzLTEuMzA3YTEuNjIgMS42MiAwIDAgMS0uOTkzLS43NTUgMS42IDEuNiAwIDAgMS0uMTYzLTEuMjNsMS4zMi00Ljg4Mi0yLjMxNi0uNjE0LTEuMzIgNC44ODQgMi44NSA0Ljg4OHptLTYuOTAyIDAtNC45MyAxLjMwNkwzIDEyLjc1OGw0LjkzLTEuMzA3YTEuNjIgMS42MiAwIDAgMCAuOTkzLS43NTUgMS42IDEuNiAwIDAgMCAuMTYzLTEuMjNsLTEuMzItNC44ODIgMi4zMTYtLjYxNCAxLjMyIDQuODg0LTIuODUgNC44ODh6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNC44NDkgMTQuNzc2IDMuNjEgMy41NzYtMS42OTUgMS42NzctMy42MS0zLjU3NWExLjYzIDEuNjMgMCAwIDAtMS4xNTYtLjQ3NGMtLjQ0IDAtLjg0Ni4xNjctMS4xNTYuNDc0bC0zLjYxIDMuNTc2LTEuNjk0LTEuNjc4IDMuNjEtMy41NzZ6bS42MDItMS4wMyA0LjkzIDEuMzA2LjYxOS0yLjI5NC00LjkzLTEuMzA3YTEuNjIgMS42MiAwIDAgMS0uOTkzLS43NTUgMS42IDEuNiAwIDAgMS0uMTYzLTEuMjNsMS4zMi00Ljg4Mi0yLjMxNi0uNjE0LTEuMzIgNC44ODQgMi44NSA0Ljg4OHptLTYuOTAyIDAtNC45MyAxLjMwNkwzIDEyLjc1OGw0LjkzLTEuMzA3YTEuNjIgMS42MiAwIDAgMCAuOTkzLS43NTUgMS42IDEuNiAwIDAgMCAuMTYzLTEuMjNsLTEuMzItNC44ODIgMi4zMTYtLjYxNCAxLjMyIDQuODg0LTIuODUgNC44ODh6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNhYnN0cmFjdF9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMwNTQ3MjkiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTE0LjUzMiAxNC40NjcgMy4yMDkgMy4xNzktMS41MDYgMS40OS0zLjIwOC0zLjE3N2ExLjQ1IDEuNDUgMCAwIDAtMS4wMjktLjQyMWMtLjM5IDAtLjc1Mi4xNDgtMS4wMjguNDIxbC0zLjIwOCAzLjE3OS0xLjUwNi0xLjQ5MiAzLjIwOC0zLjE3OXptLjUzNS0uOTE2IDQuMzgzIDEuMTYyLjU1LTIuMDQtNC4zODItMS4xNmExLjQ0IDEuNDQgMCAwIDEtMS4wMjgtMS43NjVsMS4xNzMtNC4zNC0yLjA1OC0uNTQ2LTEuMTc0IDQuMzQxIDIuNTM0IDQuMzQ2em0tNi4xMzQgMEw0LjU1IDE0LjcxMyA0IDEyLjY3M2w0LjM4Mi0xLjE2QTEuNDQgMS40NCAwIDAgMCA5LjQxIDkuNzQ3bC0xLjE3My00LjM0IDIuMDU4LS41NDYgMS4xNzMgNC4zNDEtMi41MzMgNC4zNDZ6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImFic3RyYWN0X19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/networks/abstract
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkAbstract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkAbstract', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0vf8gg6._.js.map