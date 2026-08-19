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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenTEL.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenTEL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#14C8FF',
                d: 'M20.177 7.93a2.47 2.47 0 0 1 .805 2.116l-1.227 6.777a2.52 2.52 0 0 1-1.497 1.728l-6.682 2.342a2.66 2.66 0 0 1-2.302-.394L3.82 16.075a2.45 2.45 0 0 1-.8-2.122l1.222-6.777a2.52 2.52 0 0 1 1.497-1.729l6.687-2.341a2.66 2.66 0 0 1 2.297.394zm-5.685 2.944.27-1.126h-2.55l.36-2.252h-.821c-.597.912-1.464 1.858-2.477 2.252l-.23 1.126h1.468s-.5 1.773-.625 2.403c-.315 1.604.242 2.663 1.464 2.663h2.06l.259-1.126h-1.728c-.765 0-.72-.422-.574-1.165l.574-2.775z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M20.177 7.93a2.47 2.47 0 0 1 .805 2.116l-1.227 6.777a2.52 2.52 0 0 1-1.497 1.728l-6.682 2.342a2.66 2.66 0 0 1-2.302-.394L3.82 16.075a2.45 2.45 0 0 1-.8-2.122l1.222-6.777a2.52 2.52 0 0 1 1.497-1.729l6.687-2.341a2.66 2.66 0 0 1 2.297.394zm-5.685 2.944.27-1.126h-2.55l.36-2.252h-.821c-.597.912-1.464 1.858-2.477 2.252l-.23 1.126h1.468s-.5 1.773-.625 2.403c-.315 1.604.242 2.663 1.464 2.663h2.06l.26-1.126h-1.729c-.765 0-.72-.422-.574-1.165l.574-2.775z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#TEL__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#14C8FF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M19.268 8.382a2.19 2.19 0 0 1 .716 1.881l-1.091 6.024a2.24 2.24 0 0 1-1.331 1.536l-5.939 2.082a2.37 2.37 0 0 1-2.046-.35l-4.849-3.933a2.18 2.18 0 0 1-.71-1.886l1.086-6.024a2.24 2.24 0 0 1 1.33-1.536l5.945-2.082a2.37 2.37 0 0 1 2.041.35zm-5.053 2.617.24-1h-2.267l.32-2.002h-.73c-.53.81-1.3 1.65-2.201 2.001l-.205 1h1.306s-.446 1.577-.556 2.137c-.28 1.426.215 2.367 1.3 2.367h1.832l.23-1h-1.536c-.68 0-.64-.376-.51-1.037l.51-2.466z'
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
                        id: 'TEL__a'
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
 * @component @name TokenTEL
 * @description Web3Icon for TokenTEL
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxNEM4RkYiIGQ9Ik0yMC4xNzcgNy45M2EyLjQ3IDIuNDcgMCAwIDEgLjgwNSAyLjExNmwtMS4yMjcgNi43NzdhMi41MiAyLjUyIDAgMCAxLTEuNDk3IDEuNzI4bC02LjY4MiAyLjM0MmEyLjY2IDIuNjYgMCAwIDEtMi4zMDItLjM5NEwzLjgyIDE2LjA3NWEyLjQ1IDIuNDUgMCAwIDEtLjgtMi4xMjJsMS4yMjItNi43NzdhMi41MiAyLjUyIDAgMCAxIDEuNDk3LTEuNzI5bDYuNjg3LTIuMzQxYTIuNjYgMi42NiAwIDAgMSAyLjI5Ny4zOTR6bS01LjY4NSAyLjk0NC4yNy0xLjEyNmgtMi41NWwuMzYtMi4yNTJoLS44MjFjLS41OTcuOTEyLTEuNDY0IDEuODU4LTIuNDc3IDIuMjUybC0uMjMgMS4xMjZoMS40NjhzLS41IDEuNzczLS42MjUgMi40MDNjLS4zMTUgMS42MDQuMjQyIDIuNjYzIDEuNDY0IDIuNjYzaDIuMDZsLjI1OS0xLjEyNmgtMS43MjhjLS43NjUgMC0uNzItLjQyMi0uNTc0LTEuMTY1bC41NzQtMi43NzV6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMC4xNzcgNy45M2EyLjQ3IDIuNDcgMCAwIDEgLjgwNSAyLjExNmwtMS4yMjcgNi43NzdhMi41MiAyLjUyIDAgMCAxLTEuNDk3IDEuNzI4bC02LjY4MiAyLjM0MmEyLjY2IDIuNjYgMCAwIDEtMi4zMDItLjM5NEwzLjgyIDE2LjA3NWEyLjQ1IDIuNDUgMCAwIDEtLjgtMi4xMjJsMS4yMjItNi43NzdhMi41MiAyLjUyIDAgMCAxIDEuNDk3LTEuNzI5bDYuNjg3LTIuMzQxYTIuNjYgMi42NiAwIDAgMSAyLjI5Ny4zOTR6bS01LjY4NSAyLjk0NC4yNy0xLjEyNmgtMi41NWwuMzYtMi4yNTJoLS44MjFjLS41OTcuOTEyLTEuNDY0IDEuODU4LTIuNDc3IDIuMjUybC0uMjMgMS4xMjZoMS40NjhzLS41IDEuNzczLS42MjUgMi40MDNjLS4zMTUgMS42MDQuMjQyIDIuNjYzIDEuNDY0IDIuNjYzaDIuMDZsLjI2LTEuMTI2aC0xLjcyOWMtLjc2NSAwLS43Mi0uNDIyLS41NzQtMS4xNjVsLjU3NC0yLjc3NXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNURUxfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMTRDOEZGIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOS4yNjggOC4zODJhMi4xOSAyLjE5IDAgMCAxIC43MTYgMS44ODFsLTEuMDkxIDYuMDI0YTIuMjQgMi4yNCAwIDAgMS0xLjMzMSAxLjUzNmwtNS45MzkgMi4wODJhMi4zNyAyLjM3IDAgMCAxLTIuMDQ2LS4zNWwtNC44NDktMy45MzNhMi4xOCAyLjE4IDAgMCAxLS43MS0xLjg4NmwxLjA4Ni02LjAyNGEyLjI0IDIuMjQgMCAwIDEgMS4zMy0xLjUzNmw1Ljk0NS0yLjA4MmEyLjM3IDIuMzcgMCAwIDEgMi4wNDEuMzV6bS01LjA1MyAyLjYxNy4yNC0xaC0yLjI2N2wuMzItMi4wMDJoLS43M2MtLjUzLjgxLTEuMyAxLjY1LTIuMjAxIDIuMDAxbC0uMjA1IDFoMS4zMDZzLS40NDYgMS41NzctLjU1NiAyLjEzN2MtLjI4IDEuNDI2LjIxNSAyLjM2NyAxLjMgMi4zNjdoMS44MzJsLjIzLTFoLTEuNTM2Yy0uNjggMC0uNjQtLjM3Ni0uNTEtMS4wMzdsLjUxLTIuNDY2eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJURUxfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/TEL
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenTEL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenTEL', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0ql1f8s._.js.map