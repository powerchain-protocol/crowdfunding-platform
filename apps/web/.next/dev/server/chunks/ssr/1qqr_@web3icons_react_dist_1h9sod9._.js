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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDIP.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDIP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#5081F4',
                d: 'm20.362 9.763-.055-.049-.261-.24-.682-.61-.579-.524-.098-.093-.376.066-3.59.37-2.056-2.836a.4.4 0 0 0-.218-.136l-7.309-1.2-.927-.147.502.66.36.474H3l.955.895 5.727 5.394-1.642 7.85.076-.12 3.05-4.823 5.274-2.59a.9.9 0 0 0 .447-.388l.993-1.352H21zm-15.687-3.6h.9l1.898 2.624zm1.047-.878 6.213 1.01-1.964 4.772-4.255-5.782zm3.649 11.09.747-3.475.507 1.45-1.254 2.019zm1.784-2.406-.655-1.964h4.636zm-.617-2.515 1.931-4.75 3.382 4.75zm5.956-.327-1.336-1.833 2.75-.256-1.419 2.095zm1.8-1.309.35-.725.845.725h-1.2z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm20.362 9.763-.055-.049-.261-.24-.682-.61-.579-.524-.098-.093-.376.066-3.59.37-2.056-2.836a.4.4 0 0 0-.218-.136l-7.309-1.2-.927-.147.502.66.36.474H3l.955.895 5.727 5.394-1.642 7.85.076-.12 3.05-4.823 5.274-2.59a.9.9 0 0 0 .447-.388l.993-1.352H21zm-15.687-3.6h.9l1.898 2.624zm1.047-.878 6.213 1.01-1.964 4.772-4.255-5.782zm3.649 11.09.747-3.475.507 1.45-1.254 2.019zm1.784-2.406-.655-1.964h4.636zm-.617-2.515 1.931-4.75 3.382 4.75zm5.956-.327-1.336-1.833 2.75-.256-1.419 2.095zm1.8-1.309.35-.725.845.725h-1.2z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#DIP__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#5081F4',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm19.433 10.012-.049-.043-.233-.214-.606-.543-.514-.465-.087-.083-.334.058-3.19.33-1.828-2.521a.34.34 0 0 0-.194-.121L5.9 5.343l-.825-.13.446.586.32.422H4l.848.795L9.94 11.81l-1.46 6.978.068-.107 2.71-4.286 4.689-2.303a.8.8 0 0 0 .397-.344l.883-1.202H20zm-13.945-3.2h.8l1.688 2.332zm.931-.78 5.523.897-1.746 4.242-3.781-5.14zm3.244 9.857.664-3.089.451 1.29-1.115 1.794zm1.585-2.139-.581-1.745h4.12zm-.547-2.235 1.716-4.223 3.006 4.223zm5.294-.29-1.188-1.63 2.444-.228-1.26 1.862zm1.6-1.164.31-.645.752.645H17.59z'
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
                        id: 'DIP__a'
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
 * @component @name TokenDIP
 * @description Web3Icon for TokenDIP
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM1MDgxRjQiIGQ9Im0yMC4zNjIgOS43NjMtLjA1NS0uMDQ5LS4yNjEtLjI0LS42ODItLjYxLS41NzktLjUyNC0uMDk4LS4wOTMtLjM3Ni4wNjYtMy41OS4zNy0yLjA1Ni0yLjgzNmEuNC40IDAgMCAwLS4yMTgtLjEzNmwtNy4zMDktMS4yLS45MjctLjE0Ny41MDIuNjYuMzYuNDc0SDNsLjk1NS44OTUgNS43MjcgNS4zOTQtMS42NDIgNy44NS4wNzYtLjEyIDMuMDUtNC44MjMgNS4yNzQtMi41OWEuOS45IDAgMCAwIC40NDctLjM4OGwuOTkzLTEuMzUySDIxem0tMTUuNjg3LTMuNmguOWwxLjg5OCAyLjYyNHptMS4wNDctLjg3OCA2LjIxMyAxLjAxLTEuOTY0IDQuNzcyLTQuMjU1LTUuNzgyem0zLjY0OSAxMS4wOS43NDctMy40NzUuNTA3IDEuNDUtMS4yNTQgMi4wMTl6bTEuNzg0LTIuNDA2LS42NTUtMS45NjRoNC42MzZ6bS0uNjE3LTIuNTE1IDEuOTMxLTQuNzUgMy4zODIgNC43NXptNS45NTYtLjMyNy0xLjMzNi0xLjgzMyAyLjc1LS4yNTYtMS40MTkgMi4wOTV6bTEuOC0xLjMwOS4zNS0uNzI1Ljg0NS43MjVoLTEuMnoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0yMC4zNjIgOS43NjMtLjA1NS0uMDQ5LS4yNjEtLjI0LS42ODItLjYxLS41NzktLjUyNC0uMDk4LS4wOTMtLjM3Ni4wNjYtMy41OS4zNy0yLjA1Ni0yLjgzNmEuNC40IDAgMCAwLS4yMTgtLjEzNmwtNy4zMDktMS4yLS45MjctLjE0Ny41MDIuNjYuMzYuNDc0SDNsLjk1NS44OTUgNS43MjcgNS4zOTQtMS42NDIgNy44NS4wNzYtLjEyIDMuMDUtNC44MjMgNS4yNzQtMi41OWEuOS45IDAgMCAwIC40NDctLjM4OGwuOTkzLTEuMzUySDIxem0tMTUuNjg3LTMuNmguOWwxLjg5OCAyLjYyNHptMS4wNDctLjg3OCA2LjIxMyAxLjAxLTEuOTY0IDQuNzcyLTQuMjU1LTUuNzgyem0zLjY0OSAxMS4wOS43NDctMy40NzUuNTA3IDEuNDUtMS4yNTQgMi4wMTl6bTEuNzg0LTIuNDA2LS42NTUtMS45NjRoNC42MzZ6bS0uNjE3LTIuNTE1IDEuOTMxLTQuNzUgMy4zODIgNC43NXptNS45NTYtLjMyNy0xLjMzNi0xLjgzMyAyLjc1LS4yNTYtMS40MTkgMi4wOTV6bTEuOC0xLjMwOS4zNS0uNzI1Ljg0NS43MjVoLTEuMnoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNESVBfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNTA4MUY0IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xOS40MzMgMTAuMDEyLS4wNDktLjA0My0uMjMzLS4yMTQtLjYwNi0uNTQzLS41MTQtLjQ2NS0uMDg3LS4wODMtLjMzNC4wNTgtMy4xOS4zMy0xLjgyOC0yLjUyMWEuMzQuMzQgMCAwIDAtLjE5NC0uMTIxTDUuOSA1LjM0M2wtLjgyNS0uMTMuNDQ2LjU4Ni4zMi40MjJINGwuODQ4Ljc5NUw5Ljk0IDExLjgxbC0xLjQ2IDYuOTc4LjA2OC0uMTA3IDIuNzEtNC4yODYgNC42ODktMi4zMDNhLjguOCAwIDAgMCAuMzk3LS4zNDRsLjg4My0xLjIwMkgyMHptLTEzLjk0NS0zLjJoLjhsMS42ODggMi4zMzJ6bS45MzEtLjc4IDUuNTIzLjg5Ny0xLjc0NiA0LjI0Mi0zLjc4MS01LjE0em0zLjI0NCA5Ljg1Ny42NjQtMy4wODkuNDUxIDEuMjktMS4xMTUgMS43OTR6bTEuNTg1LTIuMTM5LS41ODEtMS43NDVoNC4xMnptLS41NDctMi4yMzUgMS43MTYtNC4yMjMgMy4wMDYgNC4yMjN6bTUuMjk0LS4yOS0xLjE4OC0xLjYzIDIuNDQ0LS4yMjgtMS4yNiAxLjg2MnptMS42LTEuMTY0LjMxLS42NDUuNzUyLjY0NUgxNy41OXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iRElQX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/DIP
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDIP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDIP', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1h9sod9._.js.map