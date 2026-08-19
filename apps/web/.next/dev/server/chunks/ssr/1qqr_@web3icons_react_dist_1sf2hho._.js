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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkSui.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkSui
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#4BA2FF',
                d: 'M16.128 10.508a5.44 5.44 0 0 1 1.15 3.356 5.47 5.47 0 0 1-1.182 3.4l-.063.079-.016-.107a5 5 0 0 0-.053-.26c-.37-1.656-1.566-3.08-3.546-4.233-1.334-.774-2.102-1.705-2.304-2.765a4.1 4.1 0 0 1 .16-1.969c.15-.494.385-.961.693-1.376l.773-.963a.332.332 0 0 1 .518 0zm1.218-.964L12.19 3.092a.244.244 0 0 0-.38 0L6.653 9.549l-.016.016a7.1 7.1 0 0 0-1.52 4.405C5.118 17.85 8.199 21 12 21s6.883-3.15 6.883-7.03a7.1 7.1 0 0 0-1.52-4.405zm-9.46.943.46-.577.017.105.037.255c.301 1.604 1.366 2.938 3.15 3.97 1.551.905 2.45 1.943 2.71 3.081.1.443.128.898.079 1.35v.027l-.021.01a5.2 5.2 0 0 1-2.319.544c-2.911 0-5.278-2.412-5.278-5.388a5.44 5.44 0 0 1 1.165-3.377'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M16.129 10.508a5.44 5.44 0 0 1 1.148 3.356 5.47 5.47 0 0 1-1.18 3.4l-.064.079-.016-.107a5 5 0 0 0-.053-.26c-.37-1.656-1.566-3.08-3.546-4.233-1.334-.774-2.102-1.705-2.304-2.765a4.1 4.1 0 0 1 .16-1.969c.15-.494.385-.961.693-1.376l.773-.963a.334.334 0 0 1 .519 0zm1.217-.964L12.19 3.092a.243.243 0 0 0-.38 0L6.653 9.549l-.016.016a7.1 7.1 0 0 0-1.52 4.405C5.118 17.85 8.199 21 12 21s6.883-3.15 6.883-7.03a7.1 7.1 0 0 0-1.52-4.405zm-9.46.943.46-.577.017.105.037.255c.301 1.604 1.366 2.938 3.15 3.97 1.551.905 2.45 1.943 2.71 3.081.1.443.128.898.079 1.35v.027l-.021.01a5.2 5.2 0 0 1-2.319.544c-2.911 0-5.278-2.412-5.278-5.388a5.44 5.44 0 0 1 1.165-3.377'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#sui__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#4BA2FF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M15.67 10.674a4.84 4.84 0 0 1 1.021 2.983 4.86 4.86 0 0 1-1.05 3.022l-.055.07-.015-.095a4 4 0 0 0-.047-.23c-.33-1.473-1.392-2.738-3.152-3.764-1.186-.687-1.869-1.515-2.048-2.457a3.6 3.6 0 0 1 .142-1.75c.134-.44.342-.855.616-1.224l.687-.856a.296.296 0 0 1 .461 0zm1.083-.857-4.584-5.736a.22.22 0 0 0-.263-.06.2.2 0 0 0-.075.06l-4.583 5.74-.015.015a6.3 6.3 0 0 0-1.35 3.915C5.883 17.201 8.62 20 12 20s6.118-2.8 6.118-6.249a6.3 6.3 0 0 0-1.35-3.915zm-8.41.838.41-.513.014.094.033.226c.268 1.426 1.214 2.612 2.8 3.529 1.38.805 2.178 1.727 2.409 2.74a3.6 3.6 0 0 1 .07 1.198v.024l-.018.01a4.6 4.6 0 0 1-2.061.483c-2.588 0-4.692-2.144-4.692-4.789 0-1.134.387-2.178 1.035-3.002'
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
                        id: 'sui__a'
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
 * @component @name NetworkSui
 * @description Web3Icon for NetworkSui
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM0QkEyRkYiIGQ9Ik0xNi4xMjggMTAuNTA4YTUuNDQgNS40NCAwIDAgMSAxLjE1IDMuMzU2IDUuNDcgNS40NyAwIDAgMS0xLjE4MiAzLjRsLS4wNjMuMDc5LS4wMTYtLjEwN2E1IDUgMCAwIDAtLjA1My0uMjZjLS4zNy0xLjY1Ni0xLjU2Ni0zLjA4LTMuNTQ2LTQuMjMzLTEuMzM0LS43NzQtMi4xMDItMS43MDUtMi4zMDQtMi43NjVhNC4xIDQuMSAwIDAgMSAuMTYtMS45NjljLjE1LS40OTQuMzg1LS45NjEuNjkzLTEuMzc2bC43NzMtLjk2M2EuMzMyLjMzMiAwIDAgMSAuNTE4IDB6bTEuMjE4LS45NjRMMTIuMTkgMy4wOTJhLjI0NC4yNDQgMCAwIDAtLjM4IDBMNi42NTMgOS41NDlsLS4wMTYuMDE2YTcuMSA3LjEgMCAwIDAtMS41MiA0LjQwNUM1LjExOCAxNy44NSA4LjE5OSAyMSAxMiAyMXM2Ljg4My0zLjE1IDYuODgzLTcuMDNhNy4xIDcuMSAwIDAgMC0xLjUyLTQuNDA1em0tOS40Ni45NDMuNDYtLjU3Ny4wMTcuMTA1LjAzNy4yNTVjLjMwMSAxLjYwNCAxLjM2NiAyLjkzOCAzLjE1IDMuOTcgMS41NTEuOTA1IDIuNDUgMS45NDMgMi43MSAzLjA4MS4xLjQ0My4xMjguODk4LjA3OSAxLjM1di4wMjdsLS4wMjEuMDFhNS4yIDUuMiAwIDAgMS0yLjMxOS41NDRjLTIuOTExIDAtNS4yNzgtMi40MTItNS4yNzgtNS4zODhhNS40NCA1LjQ0IDAgMCAxIDEuMTY1LTMuMzc3Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi4xMjkgMTAuNTA4YTUuNDQgNS40NCAwIDAgMSAxLjE0OCAzLjM1NiA1LjQ3IDUuNDcgMCAwIDEtMS4xOCAzLjRsLS4wNjQuMDc5LS4wMTYtLjEwN2E1IDUgMCAwIDAtLjA1My0uMjZjLS4zNy0xLjY1Ni0xLjU2Ni0zLjA4LTMuNTQ2LTQuMjMzLTEuMzM0LS43NzQtMi4xMDItMS43MDUtMi4zMDQtMi43NjVhNC4xIDQuMSAwIDAgMSAuMTYtMS45NjljLjE1LS40OTQuMzg1LS45NjEuNjkzLTEuMzc2bC43NzMtLjk2M2EuMzM0LjMzNCAwIDAgMSAuNTE5IDB6bTEuMjE3LS45NjRMMTIuMTkgMy4wOTJhLjI0My4yNDMgMCAwIDAtLjM4IDBMNi42NTMgOS41NDlsLS4wMTYuMDE2YTcuMSA3LjEgMCAwIDAtMS41MiA0LjQwNUM1LjExOCAxNy44NSA4LjE5OSAyMSAxMiAyMXM2Ljg4My0zLjE1IDYuODgzLTcuMDNhNy4xIDcuMSAwIDAgMC0xLjUyLTQuNDA1em0tOS40Ni45NDMuNDYtLjU3Ny4wMTcuMTA1LjAzNy4yNTVjLjMwMSAxLjYwNCAxLjM2NiAyLjkzOCAzLjE1IDMuOTcgMS41NTEuOTA1IDIuNDUgMS45NDMgMi43MSAzLjA4MS4xLjQ0My4xMjguODk4LjA3OSAxLjM1di4wMjdsLS4wMjEuMDFhNS4yIDUuMiAwIDAgMS0yLjMxOS41NDRjLTIuOTExIDAtNS4yNzgtMi40MTItNS4yNzgtNS4zODhhNS40NCA1LjQ0IDAgMCAxIDEuMTY1LTMuMzc3Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNzdWlfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNEJBMkZGIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNS42NyAxMC42NzRhNC44NCA0Ljg0IDAgMCAxIDEuMDIxIDIuOTgzIDQuODYgNC44NiAwIDAgMS0xLjA1IDMuMDIybC0uMDU1LjA3LS4wMTUtLjA5NWE0IDQgMCAwIDAtLjA0Ny0uMjNjLS4zMy0xLjQ3My0xLjM5Mi0yLjczOC0zLjE1Mi0zLjc2NC0xLjE4Ni0uNjg3LTEuODY5LTEuNTE1LTIuMDQ4LTIuNDU3YTMuNiAzLjYgMCAwIDEgLjE0Mi0xLjc1Yy4xMzQtLjQ0LjM0Mi0uODU1LjYxNi0xLjIyNGwuNjg3LS44NTZhLjI5Ni4yOTYgMCAwIDEgLjQ2MSAwem0xLjA4My0uODU3LTQuNTg0LTUuNzM2YS4yMi4yMiAwIDAgMC0uMjYzLS4wNi4yLjIgMCAwIDAtLjA3NS4wNmwtNC41ODMgNS43NC0uMDE1LjAxNWE2LjMgNi4zIDAgMCAwLTEuMzUgMy45MTVDNS44ODMgMTcuMjAxIDguNjIgMjAgMTIgMjBzNi4xMTgtMi44IDYuMTE4LTYuMjQ5YTYuMyA2LjMgMCAwIDAtMS4zNS0zLjkxNXptLTguNDEuODM4LjQxLS41MTMuMDE0LjA5NC4wMzMuMjI2Yy4yNjggMS40MjYgMS4yMTQgMi42MTIgMi44IDMuNTI5IDEuMzguODA1IDIuMTc4IDEuNzI3IDIuNDA5IDIuNzRhMy42IDMuNiAwIDAgMSAuMDcgMS4xOTh2LjAyNGwtLjAxOC4wMWE0LjYgNC42IDAgMCAxLTIuMDYxLjQ4M2MtMi41ODggMC00LjY5Mi0yLjE0NC00LjY5Mi00Ljc4OSAwLTEuMTM0LjM4Ny0yLjE3OCAxLjAzNS0zLjAwMiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJzdWlfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/networks/sui
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkSui = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkSui', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1sf2hho._.js.map