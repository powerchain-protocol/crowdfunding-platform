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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenHYPE.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenHYPE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#50D2C1',
                d: 'M21 11.937a9.4 9.4 0 0 1-.901 4.112c-.867 1.863-2.947 3.387-4.846 1.765-1.55-1.322-1.837-4.005-4.157-4.398-3.07-.361-3.145 3.092-5.15 3.482-2.236.44-2.978-3.206-2.945-4.862s.487-3.984 2.43-3.984c2.236 0 2.386 3.283 5.224 3.105 2.81-.186 2.86-3.602 4.696-5.064 1.585-1.264 3.448-.337 4.381 1.184.865 1.406 1.245 3.057 1.265 4.66z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M21 11.937a9.4 9.4 0 0 1-.901 4.112c-.867 1.863-2.947 3.387-4.846 1.765-1.55-1.322-1.837-4.005-4.157-4.398-3.07-.361-3.145 3.092-5.15 3.482-2.236.44-2.978-3.206-2.945-4.862s.487-3.984 2.43-3.984c2.236 0 2.386 3.283 5.224 3.105 2.81-.186 2.86-3.602 4.696-5.064 1.585-1.264 3.448-.337 4.381 1.184.865 1.406 1.245 3.057 1.265 4.66z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#hyper-evm__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#072723',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#50D2C1',
                        d: 'M20 11.942a9 9 0 0 1-.8 3.795c-.772 1.72-2.62 3.127-4.309 1.63-1.377-1.22-1.632-3.698-3.695-4.06-2.729-.333-2.795 2.854-4.578 3.214-1.987.407-2.646-2.96-2.617-4.488.03-1.529.433-3.678 2.16-3.678 1.987 0 2.121 3.031 4.644 2.867 2.498-.172 2.542-3.325 4.174-4.675 1.408-1.166 3.065-.311 3.894 1.093.769 1.298 1.107 2.822 1.124 4.302z'
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
                        id: 'hyper-evm__a'
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
 * @component @name TokenHYPE
 * @description Web3Icon for TokenHYPE
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM1MEQyQzEiIGQ9Ik0yMSAxMS45MzdhOS40IDkuNCAwIDAgMS0uOTAxIDQuMTEyYy0uODY3IDEuODYzLTIuOTQ3IDMuMzg3LTQuODQ2IDEuNzY1LTEuNTUtMS4zMjItMS44MzctNC4wMDUtNC4xNTctNC4zOTgtMy4wNy0uMzYxLTMuMTQ1IDMuMDkyLTUuMTUgMy40ODItMi4yMzYuNDQtMi45NzgtMy4yMDYtMi45NDUtNC44NjJzLjQ4Ny0zLjk4NCAyLjQzLTMuOTg0YzIuMjM2IDAgMi4zODYgMy4yODMgNS4yMjQgMy4xMDUgMi44MS0uMTg2IDIuODYtMy42MDIgNC42OTYtNS4wNjQgMS41ODUtMS4yNjQgMy40NDgtLjMzNyA0LjM4MSAxLjE4NC44NjUgMS40MDYgMS4yNDUgMy4wNTcgMS4yNjUgNC42NnoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMSAxMS45MzdhOS40IDkuNCAwIDAgMS0uOTAxIDQuMTEyYy0uODY3IDEuODYzLTIuOTQ3IDMuMzg3LTQuODQ2IDEuNzY1LTEuNTUtMS4zMjItMS44MzctNC4wMDUtNC4xNTctNC4zOTgtMy4wNy0uMzYxLTMuMTQ1IDMuMDkyLTUuMTUgMy40ODItMi4yMzYuNDQtMi45NzgtMy4yMDYtMi45NDUtNC44NjJzLjQ4Ny0zLjk4NCAyLjQzLTMuOTg0YzIuMjM2IDAgMi4zODYgMy4yODMgNS4yMjQgMy4xMDUgMi44MS0uMTg2IDIuODYtMy42MDIgNC42OTYtNS4wNjQgMS41ODUtMS4yNjQgMy40NDgtLjMzNyA0LjM4MSAxLjE4NC44NjUgMS40MDYgMS4yNDUgMy4wNTcgMS4yNjUgNC42NnoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNoeXBlci1ldm1fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDcyNzIzIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM1MEQyQzEiIGQ9Ik0yMCAxMS45NDJhOSA5IDAgMCAxLS44IDMuNzk1Yy0uNzcyIDEuNzItMi42MiAzLjEyNy00LjMwOSAxLjYzLTEuMzc3LTEuMjItMS42MzItMy42OTgtMy42OTUtNC4wNi0yLjcyOS0uMzMzLTIuNzk1IDIuODU0LTQuNTc4IDMuMjE0LTEuOTg3LjQwNy0yLjY0Ni0yLjk2LTIuNjE3LTQuNDg4LjAzLTEuNTI5LjQzMy0zLjY3OCAyLjE2LTMuNjc4IDEuOTg3IDAgMi4xMjEgMy4wMzEgNC42NDQgMi44NjcgMi40OTgtLjE3MiAyLjU0Mi0zLjMyNSA0LjE3NC00LjY3NSAxLjQwOC0xLjE2NiAzLjA2NS0uMzExIDMuODk0IDEuMDkzLjc2OSAxLjI5OCAxLjEwNyAyLjgyMiAxLjEyNCA0LjMwMnoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iaHlwZXItZXZtX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/HYPE
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenHYPE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenHYPE', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0-2fn5x._.js.map