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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenOAX.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenOAX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#1A467E',
                d: 'M9.75 15.375h-.9l3.015-6.75 2.052 4.5h-.9l-1.147-2.25zm5.175-.032L17.472 12l-2.547-3.375h.9l2.133 2.727-.486.648.486.607-2.133 2.768h-1.8l-.495-1.125h.869zM18.44 12l-.482-.648L20.1 8.625h.9zm0 0L21 15.375h-.9l-2.142-2.768zM9.3 12c.023 1.746-1.34 3.375-3.15 3.375A3.1 3.1 0 0 1 3 12.225a4.17 4.17 0 0 1 .568-2.178l.594.778c-.239.432-.261.846-.261 1.4a2.25 2.25 0 0 0 2.25 2.25c1.422.031 2.25-1.184 2.25-2.417 0-1.305-.747-2.533-2.25-2.533-.473 0-.864.148-1.17.35l-.684-.63a2.95 2.95 0 0 1 1.854-.62C7.964 8.593 9.35 10.258 9.3 12'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M9.75 15.375h-.9l3.015-6.75 2.052 4.5h-.9l-1.147-2.25zm5.175-.032L17.472 12l-2.547-3.375h.9l2.133 2.727-.486.648.486.607-2.133 2.768h-1.8l-.495-1.125h.869zM18.44 12l-.482-.648L20.1 8.625h.9zm0 0L21 15.375h-.9l-2.142-2.768zM9.3 12c.023 1.746-1.34 3.375-3.15 3.375A3.1 3.1 0 0 1 3 12.225a4.17 4.17 0 0 1 .568-2.178l.594.778c-.239.432-.261.846-.261 1.4a2.25 2.25 0 0 0 2.25 2.25c1.422.031 2.25-1.184 2.25-2.417 0-1.305-.747-2.533-2.25-2.533-.473 0-.864.148-1.17.35l-.684-.63a2.95 2.95 0 0 1 1.854-.62C7.964 8.593 9.35 10.258 9.3 12'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#OAX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#1A467E',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M10 15h-.8l2.68-6 1.824 4h-.8l-1.02-2zm4.6-.028L16.864 12 14.6 9h.8l1.896 2.424-.432.576.432.54L15.4 15h-1.6l-.44-1h.772zM17.724 12l-.428-.576L19.2 9h.8zm0 0L20 15h-.8l-1.904-2.46zM9.6 12c.02 1.552-1.192 3-2.8 3A2.755 2.755 0 0 1 4 12.2a3.7 3.7 0 0 1 .505-1.936l.528.692c-.212.384-.232.752-.232 1.244a2 2 0 0 0 2 2c1.263.028 2-1.052 2-2.148 0-1.16-.665-2.252-2-2.252-.42 0-.768.132-1.04.312l-.608-.56A2.62 2.62 0 0 1 6.8 9c1.611-.028 2.843 1.452 2.8 3'
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
                        id: 'OAX__a'
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
 * @component @name TokenOAX
 * @description Web3Icon for TokenOAX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxQTQ2N0UiIGQ9Ik05Ljc1IDE1LjM3NWgtLjlsMy4wMTUtNi43NSAyLjA1MiA0LjVoLS45bC0xLjE0Ny0yLjI1em01LjE3NS0uMDMyTDE3LjQ3MiAxMmwtMi41NDctMy4zNzVoLjlsMi4xMzMgMi43MjctLjQ4Ni42NDguNDg2LjYwNy0yLjEzMyAyLjc2OGgtMS44bC0uNDk1LTEuMTI1aC44Njl6TTE4LjQ0IDEybC0uNDgyLS42NDhMMjAuMSA4LjYyNWguOXptMCAwTDIxIDE1LjM3NWgtLjlsLTIuMTQyLTIuNzY4ek05LjMgMTJjLjAyMyAxLjc0Ni0xLjM0IDMuMzc1LTMuMTUgMy4zNzVBMy4xIDMuMSAwIDAgMSAzIDEyLjIyNWE0LjE3IDQuMTcgMCAwIDEgLjU2OC0yLjE3OGwuNTk0Ljc3OGMtLjIzOS40MzItLjI2MS44NDYtLjI2MSAxLjRhMi4yNSAyLjI1IDAgMCAwIDIuMjUgMi4yNWMxLjQyMi4wMzEgMi4yNS0xLjE4NCAyLjI1LTIuNDE3IDAtMS4zMDUtLjc0Ny0yLjUzMy0yLjI1LTIuNTMzLS40NzMgMC0uODY0LjE0OC0xLjE3LjM1bC0uNjg0LS42M2EyLjk1IDIuOTUgMCAwIDEgMS44NTQtLjYyQzcuOTY0IDguNTkzIDkuMzUgMTAuMjU4IDkuMyAxMiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05Ljc1IDE1LjM3NWgtLjlsMy4wMTUtNi43NSAyLjA1MiA0LjVoLS45bC0xLjE0Ny0yLjI1em01LjE3NS0uMDMyTDE3LjQ3MiAxMmwtMi41NDctMy4zNzVoLjlsMi4xMzMgMi43MjctLjQ4Ni42NDguNDg2LjYwNy0yLjEzMyAyLjc2OGgtMS44bC0uNDk1LTEuMTI1aC44Njl6TTE4LjQ0IDEybC0uNDgyLS42NDhMMjAuMSA4LjYyNWguOXptMCAwTDIxIDE1LjM3NWgtLjlsLTIuMTQyLTIuNzY4ek05LjMgMTJjLjAyMyAxLjc0Ni0xLjM0IDMuMzc1LTMuMTUgMy4zNzVBMy4xIDMuMSAwIDAgMSAzIDEyLjIyNWE0LjE3IDQuMTcgMCAwIDEgLjU2OC0yLjE3OGwuNTk0Ljc3OGMtLjIzOS40MzItLjI2MS44NDYtLjI2MSAxLjRhMi4yNSAyLjI1IDAgMCAwIDIuMjUgMi4yNWMxLjQyMi4wMzEgMi4yNS0xLjE4NCAyLjI1LTIuNDE3IDAtMS4zMDUtLjc0Ny0yLjUzMy0yLjI1LTIuNTMzLS40NzMgMC0uODY0LjE0OC0xLjE3LjM1bC0uNjg0LS42M2EyLjk1IDIuOTUgMCAwIDEgMS44NTQtLjYyQzcuOTY0IDguNTkzIDkuMzUgMTAuMjU4IDkuMyAxMiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNPQVhfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMUE0NjdFIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMCAxNWgtLjhsMi42OC02IDEuODI0IDRoLS44bC0xLjAyLTJ6bTQuNi0uMDI4TDE2Ljg2NCAxMiAxNC42IDloLjhsMS44OTYgMi40MjQtLjQzMi41NzYuNDMyLjU0TDE1LjQgMTVoLTEuNmwtLjQ0LTFoLjc3MnpNMTcuNzI0IDEybC0uNDI4LS41NzZMMTkuMiA5aC44em0wIDBMMjAgMTVoLS44bC0xLjkwNC0yLjQ2ek05LjYgMTJjLjAyIDEuNTUyLTEuMTkyIDMtMi44IDNBMi43NTUgMi43NTUgMCAwIDEgNCAxMi4yYTMuNyAzLjcgMCAwIDEgLjUwNS0xLjkzNmwuNTI4LjY5MmMtLjIxMi4zODQtLjIzMi43NTItLjIzMiAxLjI0NGEyIDIgMCAwIDAgMiAyYzEuMjYzLjAyOCAyLTEuMDUyIDItMi4xNDggMC0xLjE2LS42NjUtMi4yNTItMi0yLjI1Mi0uNDIgMC0uNzY4LjEzMi0xLjA0LjMxMmwtLjYwOC0uNTZBMi42MiAyLjYyIDAgMCAxIDYuOCA5YzEuNjExLS4wMjggMi44NDMgMS40NTIgMi44IDMiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iT0FYX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/OAX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenOAX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenOAX', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1ansnfy._.js.map