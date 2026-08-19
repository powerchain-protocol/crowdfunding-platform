(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWeb3Icon",
    ()=>createWeb3Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@types+node@24.13.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/BaseIcon.js [app-client] (ecmascript)");
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
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = defaultVariant, fallback, ...props }, ref)=>{
        const iconData = variants[variant];
        if (!iconData) {
            console.warn(`Icon "${name}" does not have variant "${variant}". ` + `Available variants: ${availableVariants.join(', ')}`);
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseIcon"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(element, elementProps, childElements);
    });
}
;
}),
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkTon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkTon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#0098EA',
                d: 'M18.078 3H5.922C3.687 3 2.27 5.41 3.394 7.36l7.503 13.003c.49.85 1.716.85 2.206 0L20.607 7.36C21.729 5.414 20.313 3 18.079 3zM10.89 16.464l-1.634-3.162L5.314 6.25a.689.689 0 0 1 .606-1.03h4.969v11.244zm7.791-10.215-3.94 7.054-1.635 3.16V5.22h4.97c.544 0 .865.578.605 1.03'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M18.078 3H5.922C3.687 3 2.27 5.41 3.394 7.36l7.503 13.003c.49.85 1.716.85 2.206 0L20.607 7.36C21.729 5.414 20.313 3 18.079 3zM10.89 16.464l-1.634-3.162L5.314 6.25a.689.689 0 0 1 .606-1.03h4.969v11.244zm7.791-10.215-3.94 7.054-1.635 3.16V5.22h4.97c.544 0 .865.578.605 1.03'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ton__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#0098EA',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M17.402 4H6.597C4.61 4 3.351 6.143 4.35 7.875l6.67 11.559a1.132 1.132 0 0 0 1.96 0l6.67-11.559C20.648 6.145 19.39 4 17.404 4zm-6.388 11.968L9.56 13.157 6.057 6.89a.612.612 0 0 1 .539-.916h4.416v9.995zm6.926-9.08-3.503 6.27-1.453 2.81V5.973h4.417c.484 0 .77.514.538.915'
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
                        id: 'ton__a'
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
 * @component @name NetworkTon
 * @description Web3Icon for NetworkTon
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDk4RUEiIGQ9Ik0xOC4wNzggM0g1LjkyMkMzLjY4NyAzIDIuMjcgNS40MSAzLjM5NCA3LjM2bDcuNTAzIDEzLjAwM2MuNDkuODUgMS43MTYuODUgMi4yMDYgMEwyMC42MDcgNy4zNkMyMS43MjkgNS40MTQgMjAuMzEzIDMgMTguMDc5IDN6TTEwLjg5IDE2LjQ2NGwtMS42MzQtMy4xNjJMNS4zMTQgNi4yNWEuNjg5LjY4OSAwIDAgMSAuNjA2LTEuMDNoNC45Njl2MTEuMjQ0em03Ljc5MS0xMC4yMTUtMy45NCA3LjA1NC0xLjYzNSAzLjE2VjUuMjJoNC45N2MuNTQ0IDAgLjg2NS41NzguNjA1IDEuMDMiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC4wNzggM0g1LjkyMkMzLjY4NyAzIDIuMjcgNS40MSAzLjM5NCA3LjM2bDcuNTAzIDEzLjAwM2MuNDkuODUgMS43MTYuODUgMi4yMDYgMEwyMC42MDcgNy4zNkMyMS43MjkgNS40MTQgMjAuMzEzIDMgMTguMDc5IDN6TTEwLjg5IDE2LjQ2NGwtMS42MzQtMy4xNjJMNS4zMTQgNi4yNWEuNjg5LjY4OSAwIDAgMSAuNjA2LTEuMDNoNC45Njl2MTEuMjQ0em03Ljc5MS0xMC4yMTUtMy45NCA3LjA1NC0xLjYzNSAzLjE2VjUuMjJoNC45N2MuNTQ0IDAgLjg2NS41NzguNjA1IDEuMDMiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCN0b25fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDA5OEVBIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy40MDIgNEg2LjU5N0M0LjYxIDQgMy4zNTEgNi4xNDMgNC4zNSA3Ljg3NWw2LjY3IDExLjU1OWExLjEzMiAxLjEzMiAwIDAgMCAxLjk2IDBsNi42Ny0xMS41NTlDMjAuNjQ4IDYuMTQ1IDE5LjM5IDQgMTcuNDA0IDR6bS02LjM4OCAxMS45NjhMOS41NiAxMy4xNTcgNi4wNTcgNi44OWEuNjEyLjYxMiAwIDAgMSAuNTM5LS45MTZoNC40MTZ2OS45OTV6bTYuOTI2LTkuMDgtMy41MDMgNi4yNy0xLjQ1MyAyLjgxVjUuOTczaDQuNDE3Yy40ODQgMCAuNzcuNTE0LjUzOC45MTUiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0idG9uX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/networks/ton
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkTon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkTon', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_19d-uly._.js.map