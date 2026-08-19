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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenFXS.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenFXS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M4.3 4.157a56 56 0 0 0-1.082 1.16c0 .013.525.545 1.178 1.167l.423.405.695.677a7.82 7.82 0 0 0-.12 8.692c-.242.26-.635.683-1.082 1.149l-1.258 1.341-.054.06c0 .013 2.007 1.971 2.194 2.128l.073.06 1.136-1.19 1.209-1.281a7.82 7.82 0 0 0 8.716.036c.538.526 2.478 2.394 2.502 2.406.018.006 2.176-2.267 2.17-2.297-.006-.018-1.487-1.45-2.387-2.31l-.043-.041a7.82 7.82 0 0 0-.012-8.644l1.082-1.148q.643-.658 1.251-1.348a76 76 0 0 0-2.26-2.158c-.018 0-.575.568-1.233 1.27-.466.495-.877.93-1.088 1.142A7.82 7.82 0 0 0 7.8 5.36l-.037-.036-.423-.405-.665-.64L5.581 3.22l-.218-.218L4.3 4.15zM12 16.838a4.835 4.835 0 1 0 0-9.67 4.835 4.835 0 0 0 0 9.67',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.3 4.157a56 56 0 0 0-1.082 1.16c0 .013.525.545 1.178 1.167l.423.405.695.677a7.82 7.82 0 0 0-.12 8.692c-.242.26-.635.683-1.082 1.149l-1.258 1.341-.054.06c0 .013 2.007 1.971 2.194 2.128l.073.06 1.136-1.19 1.209-1.281a7.82 7.82 0 0 0 8.716.036c.538.526 2.478 2.394 2.502 2.406.018.006 2.176-2.267 2.17-2.297-.006-.018-1.487-1.45-2.387-2.31l-.043-.041a7.82 7.82 0 0 0-.012-8.644l1.082-1.148q.643-.658 1.251-1.348a76 76 0 0 0-2.26-2.158c-.018 0-.575.568-1.233 1.27-.466.495-.877.93-1.088 1.142A7.82 7.82 0 0 0 7.8 5.36l-.037-.036-.423-.405-.665-.64L5.581 3.22l-.218-.218L4.3 4.15zM12 16.838a4.835 4.835 0 1 0 0-9.67 4.835 4.835 0 0 0 0 9.67',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#FXS__a)'
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
                        fill: '#fff',
                        d: 'M5.155 5.029a53 53 0 0 0-.962 1.031c0 .011.468.484 1.048 1.037l.376.36.618.602a6.95 6.95 0 0 0-.107 7.726 85 85 0 0 1-.962 1.02L4.048 18 4 18.052c0 .011 1.784 1.752 1.95 1.892l.065.053 1.01-1.058 1.074-1.14a6.95 6.95 0 0 0 7.748.033c.478.467 2.203 2.128 2.224 2.138.016.006 1.934-2.014 1.929-2.041-.006-.016-1.322-1.29-2.122-2.053l-.038-.037a6.95 6.95 0 0 0-.01-7.683l.961-1.021q.572-.585 1.112-1.198a68 68 0 0 0-2.01-1.918c-.015 0-.51.505-1.095 1.128-.414.44-.78.827-.967 1.016a6.95 6.95 0 0 0-7.565-.065l-.032-.032-.376-.36-.591-.57-.973-.94-.193-.193-.946 1.02zM12 16.3a4.298 4.298 0 1 0 0-8.596 4.298 4.298 0 0 0 0 8.596',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
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
                        id: 'FXS__a'
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
 * @component @name TokenFXS
 * @description Web3Icon for TokenFXS
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQuMyA0LjE1N2E1NiA1NiAwIDAgMC0xLjA4MiAxLjE2YzAgLjAxMy41MjUuNTQ1IDEuMTc4IDEuMTY3bC40MjMuNDA1LjY5NS42NzdhNy44MiA3LjgyIDAgMCAwLS4xMiA4LjY5MmMtLjI0Mi4yNi0uNjM1LjY4My0xLjA4MiAxLjE0OWwtMS4yNTggMS4zNDEtLjA1NC4wNmMwIC4wMTMgMi4wMDcgMS45NzEgMi4xOTQgMi4xMjhsLjA3My4wNiAxLjEzNi0xLjE5IDEuMjA5LTEuMjgxYTcuODIgNy44MiAwIDAgMCA4LjcxNi4wMzZjLjUzOC41MjYgMi40NzggMi4zOTQgMi41MDIgMi40MDYuMDE4LjAwNiAyLjE3Ni0yLjI2NyAyLjE3LTIuMjk3LS4wMDYtLjAxOC0xLjQ4Ny0xLjQ1LTIuMzg3LTIuMzFsLS4wNDMtLjA0MWE3LjgyIDcuODIgMCAwIDAtLjAxMi04LjY0NGwxLjA4Mi0xLjE0OHEuNjQzLS42NTggMS4yNTEtMS4zNDhhNzYgNzYgMCAwIDAtMi4yNi0yLjE1OGMtLjAxOCAwLS41NzUuNTY4LTEuMjMzIDEuMjctLjQ2Ni40OTUtLjg3Ny45My0xLjA4OCAxLjE0MkE3LjgyIDcuODIgMCAwIDAgNy44IDUuMzZsLS4wMzctLjAzNi0uNDIzLS40MDUtLjY2NS0uNjRMNS41ODEgMy4yMmwtLjIxOC0uMjE4TDQuMyA0LjE1ek0xMiAxNi44MzhhNC44MzUgNC44MzUgMCAxIDAgMC05LjY3IDQuODM1IDQuODM1IDAgMCAwIDAgOS42NyIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQuMyA0LjE1N2E1NiA1NiAwIDAgMC0xLjA4MiAxLjE2YzAgLjAxMy41MjUuNTQ1IDEuMTc4IDEuMTY3bC40MjMuNDA1LjY5NS42NzdhNy44MiA3LjgyIDAgMCAwLS4xMiA4LjY5MmMtLjI0Mi4yNi0uNjM1LjY4My0xLjA4MiAxLjE0OWwtMS4yNTggMS4zNDEtLjA1NC4wNmMwIC4wMTMgMi4wMDcgMS45NzEgMi4xOTQgMi4xMjhsLjA3My4wNiAxLjEzNi0xLjE5IDEuMjA5LTEuMjgxYTcuODIgNy44MiAwIDAgMCA4LjcxNi4wMzZjLjUzOC41MjYgMi40NzggMi4zOTQgMi41MDIgMi40MDYuMDE4LjAwNiAyLjE3Ni0yLjI2NyAyLjE3LTIuMjk3LS4wMDYtLjAxOC0xLjQ4Ny0xLjQ1LTIuMzg3LTIuMzFsLS4wNDMtLjA0MWE3LjgyIDcuODIgMCAwIDAtLjAxMi04LjY0NGwxLjA4Mi0xLjE0OHEuNjQzLS42NTggMS4yNTEtMS4zNDhhNzYgNzYgMCAwIDAtMi4yNi0yLjE1OGMtLjAxOCAwLS41NzUuNTY4LTEuMjMzIDEuMjctLjQ2Ni40OTUtLjg3Ny45My0xLjA4OCAxLjE0MkE3LjgyIDcuODIgMCAwIDAgNy44IDUuMzZsLS4wMzctLjAzNi0uNDIzLS40MDUtLjY2NS0uNjRMNS41ODEgMy4yMmwtLjIxOC0uMjE4TDQuMyA0LjE1ek0xMiAxNi44MzhhNC44MzUgNC44MzUgMCAxIDAgMC05LjY3IDQuODM1IDQuODM1IDAgMCAwIDAgOS42NyIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNGWFNfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMTU1IDUuMDI5YTUzIDUzIDAgMCAwLS45NjIgMS4wMzFjMCAuMDExLjQ2OC40ODQgMS4wNDggMS4wMzdsLjM3Ni4zNi42MTguNjAyYTYuOTUgNi45NSAwIDAgMC0uMTA3IDcuNzI2IDg1IDg1IDAgMCAxLS45NjIgMS4wMkw0LjA0OCAxOCA0IDE4LjA1MmMwIC4wMTEgMS43ODQgMS43NTIgMS45NSAxLjg5MmwuMDY1LjA1MyAxLjAxLTEuMDU4IDEuMDc0LTEuMTRhNi45NSA2Ljk1IDAgMCAwIDcuNzQ4LjAzM2MuNDc4LjQ2NyAyLjIwMyAyLjEyOCAyLjIyNCAyLjEzOC4wMTYuMDA2IDEuOTM0LTIuMDE0IDEuOTI5LTIuMDQxLS4wMDYtLjAxNi0xLjMyMi0xLjI5LTIuMTIyLTIuMDUzbC0uMDM4LS4wMzdhNi45NSA2Ljk1IDAgMCAwLS4wMS03LjY4M2wuOTYxLTEuMDIxcS41NzItLjU4NSAxLjExMi0xLjE5OGE2OCA2OCAwIDAgMC0yLjAxLTEuOTE4Yy0uMDE1IDAtLjUxLjUwNS0xLjA5NSAxLjEyOC0uNDE0LjQ0LS43OC44MjctLjk2NyAxLjAxNmE2Ljk1IDYuOTUgMCAwIDAtNy41NjUtLjA2NWwtLjAzMi0uMDMyLS4zNzYtLjM2LS41OTEtLjU3LS45NzMtLjk0LS4xOTMtLjE5My0uOTQ2IDEuMDJ6TTEyIDE2LjNhNC4yOTggNC4yOTggMCAxIDAgMC04LjU5NiA0LjI5OCA0LjI5OCAwIDAgMCAwIDguNTk2IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iRlhTX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/FXS
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenFXS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenFXS', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_14_agxn._.js.map