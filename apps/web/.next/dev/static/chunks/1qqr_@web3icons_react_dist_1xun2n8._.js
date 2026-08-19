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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/exchanges/ExchangeBalancer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ExchangeBalancer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#000',
                d: 'M16.24 13.663c2.833.522 4.76 1.551 4.76 2.736 0 1.713-4.03 3.101-9 3.101s-9-1.388-9-3.101c0-1.185 1.928-2.214 4.76-2.736 1.23.32 2.684.503 4.24.503s3.01-.184 4.24-.502zM15.157 8.64c2.406.4 4.063 1.243 4.063 2.218 0 1.362-3.232 2.466-7.219 2.466s-7.22-1.104-7.22-2.466c0-.975 1.658-1.818 4.064-2.218a13 13 0 0 0 3.156.369 13 13 0 0 0 3.156-.369M12.033 4.5c2.986 0 5.407.835 5.407 1.867 0 1.03-2.421 1.866-5.407 1.866s-5.407-.836-5.407-1.866c0-1.032 2.421-1.867 5.407-1.867'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M16.24 13.663c2.833.522 4.76 1.551 4.76 2.736 0 1.713-4.03 3.101-9 3.101s-9-1.388-9-3.101c0-1.185 1.928-2.214 4.76-2.736 1.23.32 2.684.503 4.24.503s3.01-.184 4.24-.502zM15.157 8.64c2.406.4 4.063 1.243 4.063 2.218 0 1.362-3.232 2.466-7.219 2.466s-7.22-1.104-7.22-2.466c0-.975 1.658-1.818 4.064-2.218a13 13 0 0 0 3.156.369 13 13 0 0 0 3.156-.369M12.033 4.5c2.986 0 5.407.835 5.407 1.867 0 1.03-2.421 1.866-5.407 1.866s-5.407-.836-5.407-1.866c0-1.032 2.421-1.867 5.407-1.867'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#balancer__a)'
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
                        d: 'M15.77 13.478c2.517.465 4.23 1.38 4.23 2.432 0 1.523-3.582 2.757-8 2.757s-8-1.234-8-2.757c0-1.053 1.713-1.967 4.23-2.432 1.095.284 2.387.447 3.77.447s2.675-.164 3.77-.447m-.965-4.465c2.139.356 3.612 1.105 3.612 1.972 0 1.21-2.873 2.192-6.417 2.192s-6.417-.982-6.417-2.192c0-.866 1.473-1.616 3.612-1.972.822.209 1.78.328 2.805.328s1.983-.12 2.805-.328m-2.776-3.68c2.654 0 4.806.743 4.806 1.66S14.683 8.65 12.03 8.65s-4.807-.74-4.807-1.657 2.152-1.66 4.806-1.66'
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
                        id: 'balancer__a'
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
 * @component @name ExchangeBalancer
 * @description Web3Icon for ExchangeBalancer
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xNi4yNCAxMy42NjNjMi44MzMuNTIyIDQuNzYgMS41NTEgNC43NiAyLjczNiAwIDEuNzEzLTQuMDMgMy4xMDEtOSAzLjEwMXMtOS0xLjM4OC05LTMuMTAxYzAtMS4xODUgMS45MjgtMi4yMTQgNC43Ni0yLjczNiAxLjIzLjMyIDIuNjg0LjUwMyA0LjI0LjUwM3MzLjAxLS4xODQgNC4yNC0uNTAyek0xNS4xNTcgOC42NGMyLjQwNi40IDQuMDYzIDEuMjQzIDQuMDYzIDIuMjE4IDAgMS4zNjItMy4yMzIgMi40NjYtNy4yMTkgMi40NjZzLTcuMjItMS4xMDQtNy4yMi0yLjQ2NmMwLS45NzUgMS42NTgtMS44MTggNC4wNjQtMi4yMThhMTMgMTMgMCAwIDAgMy4xNTYuMzY5IDEzIDEzIDAgMCAwIDMuMTU2LS4zNjlNMTIuMDMzIDQuNWMyLjk4NiAwIDUuNDA3LjgzNSA1LjQwNyAxLjg2NyAwIDEuMDMtMi40MjEgMS44NjYtNS40MDcgMS44NjZzLTUuNDA3LS44MzYtNS40MDctMS44NjZjMC0xLjAzMiAyLjQyMS0xLjg2NyA1LjQwNy0xLjg2NyIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi4yNCAxMy42NjNjMi44MzMuNTIyIDQuNzYgMS41NTEgNC43NiAyLjczNiAwIDEuNzEzLTQuMDMgMy4xMDEtOSAzLjEwMXMtOS0xLjM4OC05LTMuMTAxYzAtMS4xODUgMS45MjgtMi4yMTQgNC43Ni0yLjczNiAxLjIzLjMyIDIuNjg0LjUwMyA0LjI0LjUwM3MzLjAxLS4xODQgNC4yNC0uNTAyek0xNS4xNTcgOC42NGMyLjQwNi40IDQuMDYzIDEuMjQzIDQuMDYzIDIuMjE4IDAgMS4zNjItMy4yMzIgMi40NjYtNy4yMTkgMi40NjZzLTcuMjItMS4xMDQtNy4yMi0yLjQ2NmMwLS45NzUgMS42NTgtMS44MTggNC4wNjQtMi4yMThhMTMgMTMgMCAwIDAgMy4xNTYuMzY5IDEzIDEzIDAgMCAwIDMuMTU2LS4zNjlNMTIuMDMzIDQuNWMyLjk4NiAwIDUuNDA3LjgzNSA1LjQwNyAxLjg2NyAwIDEuMDMtMi40MjEgMS44NjYtNS40MDcgMS44NjZzLTUuNDA3LS44MzYtNS40MDctMS44NjZjMC0xLjAzMiAyLjQyMS0xLjg2NyA1LjQwNy0xLjg2NyIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNiYWxhbmNlcl9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE1Ljc3IDEzLjQ3OGMyLjUxNy40NjUgNC4yMyAxLjM4IDQuMjMgMi40MzIgMCAxLjUyMy0zLjU4MiAyLjc1Ny04IDIuNzU3cy04LTEuMjM0LTgtMi43NTdjMC0xLjA1MyAxLjcxMy0xLjk2NyA0LjIzLTIuNDMyIDEuMDk1LjI4NCAyLjM4Ny40NDcgMy43Ny40NDdzMi42NzUtLjE2NCAzLjc3LS40NDdtLS45NjUtNC40NjVjMi4xMzkuMzU2IDMuNjEyIDEuMTA1IDMuNjEyIDEuOTcyIDAgMS4yMS0yLjg3MyAyLjE5Mi02LjQxNyAyLjE5MnMtNi40MTctLjk4Mi02LjQxNy0yLjE5MmMwLS44NjYgMS40NzMtMS42MTYgMy42MTItMS45NzIuODIyLjIwOSAxLjc4LjMyOCAyLjgwNS4zMjhzMS45ODMtLjEyIDIuODA1LS4zMjhtLTIuNzc2LTMuNjhjMi42NTQgMCA0LjgwNi43NDMgNC44MDYgMS42NlMxNC42ODMgOC42NSAxMi4wMyA4LjY1cy00LjgwNy0uNzQtNC44MDctMS42NTcgMi4xNTItMS42NiA0LjgwNi0xLjY2Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImJhbGFuY2VyX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/exchanges/balancer
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const ExchangeBalancer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('ExchangeBalancer', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1xun2n8._.js.map