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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenNXT.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenNXT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#008FBB',
                d: 'M3 13.313a.563.563 0 0 1 .562-.563h1.876a.563.563 0 0 1 0 1.125H3.562A.56.56 0 0 1 3 13.313m12-2.626a.563.563 0 0 1 .563-.562h4.874a.563.563 0 0 1 .563.563v1.465a.562.562 0 1 1-1.125 0v-.903h-4.312a.563.563 0 0 1-.563-.562m-12 0a.563.563 0 0 1 .562-.562h1.876c.105 0 .208.03.297.085l4.08 2.54h1.633a.563.563 0 0 1 0 1.125H9.655a.56.56 0 0 1-.298-.085l-4.08-2.54H3.561A.563.563 0 0 1 3 10.688m6 0a.563.563 0 0 1 .563-.562h2.05c.098 0 .194.025.279.073l4.483 2.552h1.813a.563.563 0 0 1 0 1.125h-1.962a.56.56 0 0 1-.278-.074l-4.483-2.551H9.563A.563.563 0 0 1 9 10.688'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3 13.313a.563.563 0 0 1 .562-.563h1.876a.562.562 0 0 1 0 1.125H3.562A.563.563 0 0 1 3 13.313m12-2.626a.563.563 0 0 1 .563-.562h4.874a.563.563 0 0 1 .563.563v1.465a.562.562 0 1 1-1.125 0v-.903h-4.312a.563.563 0 0 1-.563-.562m-12 0a.563.563 0 0 1 .562-.562h1.876c.104 0 .208.03.297.085l4.08 2.54h1.633a.563.563 0 0 1 0 1.125H9.655a.56.56 0 0 1-.298-.085l-4.08-2.54H3.561A.563.563 0 0 1 3 10.688m6 0a.563.563 0 0 1 .562-.562h2.052c.097 0 .193.025.278.073l4.483 2.552h1.813a.563.563 0 0 1 0 1.125h-1.962a.56.56 0 0 1-.278-.073l-4.483-2.552H9.562A.563.563 0 0 1 9 10.688'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#NXT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#008FBB',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4 13.167a.5.5 0 0 1 .5-.5h1.667a.5.5 0 0 1 0 1H4.5a.5.5 0 0 1-.5-.5m10.667-2.333a.5.5 0 0 1 .5-.5H19.5a.5.5 0 0 1 .5.5v1.302a.5.5 0 1 1-1 0v-.803h-3.833a.5.5 0 0 1-.5-.5M4 10.834a.5.5 0 0 1 .5-.5h1.667c.093 0 .185.026.264.075l3.627 2.258h1.451a.5.5 0 0 1 0 1H9.915a.5.5 0 0 1-.264-.076l-3.628-2.258H4.5a.5.5 0 0 1-.5-.5m5.333 0a.5.5 0 0 1 .5-.5h1.824q.131 0 .247.065l3.985 2.268H17.5a.5.5 0 0 1 0 1h-1.743a.5.5 0 0 1-.248-.066l-3.985-2.268h-1.69a.5.5 0 0 1-.5-.5'
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
                        id: 'NXT__a'
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
 * @component @name TokenNXT
 * @description Web3Icon for TokenNXT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDhGQkIiIGQ9Ik0zIDEzLjMxM2EuNTYzLjU2MyAwIDAgMSAuNTYyLS41NjNoMS44NzZhLjU2My41NjMgMCAwIDEgMCAxLjEyNUgzLjU2MkEuNTYuNTYgMCAwIDEgMyAxMy4zMTNtMTItMi42MjZhLjU2My41NjMgMCAwIDEgLjU2My0uNTYyaDQuODc0YS41NjMuNTYzIDAgMCAxIC41NjMuNTYzdjEuNDY1YS41NjIuNTYyIDAgMSAxLTEuMTI1IDB2LS45MDNoLTQuMzEyYS41NjMuNTYzIDAgMCAxLS41NjMtLjU2Mm0tMTIgMGEuNTYzLjU2MyAwIDAgMSAuNTYyLS41NjJoMS44NzZjLjEwNSAwIC4yMDguMDMuMjk3LjA4NWw0LjA4IDIuNTRoMS42MzNhLjU2My41NjMgMCAwIDEgMCAxLjEyNUg5LjY1NWEuNTYuNTYgMCAwIDEtLjI5OC0uMDg1bC00LjA4LTIuNTRIMy41NjFBLjU2My41NjMgMCAwIDEgMyAxMC42ODhtNiAwYS41NjMuNTYzIDAgMCAxIC41NjMtLjU2MmgyLjA1Yy4wOTggMCAuMTk0LjAyNS4yNzkuMDczbDQuNDgzIDIuNTUyaDEuODEzYS41NjMuNTYzIDAgMCAxIDAgMS4xMjVoLTEuOTYyYS41Ni41NiAwIDAgMS0uMjc4LS4wNzRsLTQuNDgzLTIuNTUxSDkuNTYzQS41NjMuNTYzIDAgMCAxIDkgMTAuNjg4Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zIDEzLjMxM2EuNTYzLjU2MyAwIDAgMSAuNTYyLS41NjNoMS44NzZhLjU2Mi41NjIgMCAwIDEgMCAxLjEyNUgzLjU2MkEuNTYzLjU2MyAwIDAgMSAzIDEzLjMxM20xMi0yLjYyNmEuNTYzLjU2MyAwIDAgMSAuNTYzLS41NjJoNC44NzRhLjU2My41NjMgMCAwIDEgLjU2My41NjN2MS40NjVhLjU2Mi41NjIgMCAxIDEtMS4xMjUgMHYtLjkwM2gtNC4zMTJhLjU2My41NjMgMCAwIDEtLjU2My0uNTYybS0xMiAwYS41NjMuNTYzIDAgMCAxIC41NjItLjU2MmgxLjg3NmMuMTA0IDAgLjIwOC4wMy4yOTcuMDg1bDQuMDggMi41NGgxLjYzM2EuNTYzLjU2MyAwIDAgMSAwIDEuMTI1SDkuNjU1YS41Ni41NiAwIDAgMS0uMjk4LS4wODVsLTQuMDgtMi41NEgzLjU2MUEuNTYzLjU2MyAwIDAgMSAzIDEwLjY4OG02IDBhLjU2My41NjMgMCAwIDEgLjU2Mi0uNTYyaDIuMDUyYy4wOTcgMCAuMTkzLjAyNS4yNzguMDczbDQuNDgzIDIuNTUyaDEuODEzYS41NjMuNTYzIDAgMCAxIDAgMS4xMjVoLTEuOTYyYS41Ni41NiAwIDAgMS0uMjc4LS4wNzNsLTQuNDgzLTIuNTUySDkuNTYyQS41NjMuNTYzIDAgMCAxIDkgMTAuNjg4Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNOWFRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDA4RkJCIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00IDEzLjE2N2EuNS41IDAgMCAxIC41LS41aDEuNjY3YS41LjUgMCAwIDEgMCAxSDQuNWEuNS41IDAgMCAxLS41LS41bTEwLjY2Ny0yLjMzM2EuNS41IDAgMCAxIC41LS41SDE5LjVhLjUuNSAwIDAgMSAuNS41djEuMzAyYS41LjUgMCAxIDEtMSAwdi0uODAzaC0zLjgzM2EuNS41IDAgMCAxLS41LS41TTQgMTAuODM0YS41LjUgMCAwIDEgLjUtLjVoMS42NjdjLjA5MyAwIC4xODUuMDI2LjI2NC4wNzVsMy42MjcgMi4yNThoMS40NTFhLjUuNSAwIDAgMSAwIDFIOS45MTVhLjUuNSAwIDAgMS0uMjY0LS4wNzZsLTMuNjI4LTIuMjU4SDQuNWEuNS41IDAgMCAxLS41LS41bTUuMzMzIDBhLjUuNSAwIDAgMSAuNS0uNWgxLjgyNHEuMTMxIDAgLjI0Ny4wNjVsMy45ODUgMi4yNjhIMTcuNWEuNS41IDAgMCAxIDAgMWgtMS43NDNhLjUuNSAwIDAgMS0uMjQ4LS4wNjZsLTMuOTg1LTIuMjY4aC0xLjY5YS41LjUgMCAwIDEtLjUtLjUiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iTlhUX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/NXT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenNXT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenNXT', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0vyra0s._.js.map