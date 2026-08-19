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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenGT.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenGT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#D35756',
                d: 'M20.5 8 15 11v3l1.5-.9v2.075L11.5 18l-3.96-2.56a2.04 2.04 0 0 1-1.04-1.79V8.77l4.14-2.52c.275-.155.54-.25.86-.25s.68.095.96.25l4.425 2.52 2.71-1.54-6.9-3.925c-.35-.2-.79-.305-1.195-.305-.4 0-.75.1-1.1.3L3.5 7.235v7.96c0 .745.4 1.425 1.05 1.8L11.5 21l6.94-4.01a2.11 2.11 0 0 0 1.06-1.815V11.5l1-.5z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M20.5 8 15 11v3l1.5-.9v2.075L11.5 18l-3.96-2.56a2.04 2.04 0 0 1-1.04-1.79V8.77l4.14-2.52c.275-.155.54-.25.86-.25s.68.095.96.25l4.425 2.52 2.71-1.54-6.9-3.925c-.35-.2-.79-.305-1.195-.305-.4 0-.75.1-1.1.3L3.5 7.235v7.96c0 .745.4 1.425 1.05 1.8L11.5 21l6.94-4.01a2.11 2.11 0 0 0 1.06-1.815V11.5l1-.5z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#GT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#D35756',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm19.556 8.444-4.89 2.667v2.667l1.334-.8v1.844l-4.445 2.511-3.52-2.275a1.81 1.81 0 0 1-.924-1.591V9.129l3.68-2.24c.245-.138.48-.222.764-.222s.605.084.854.222l3.933 2.24 2.409-1.369-6.133-3.489A2.2 2.2 0 0 0 11.555 4a1.9 1.9 0 0 0-.977.267L4.444 7.764v7.076c0 .662.356 1.267.934 1.6L11.555 20l6.17-3.564a1.88 1.88 0 0 0 .942-1.614v-3.266l.888-.445z'
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
                        id: 'GT__a'
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
 * @component @name TokenGT
 * @description Web3Icon for TokenGT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNEMzU3NTYiIGQ9Ik0yMC41IDggMTUgMTF2M2wxLjUtLjl2Mi4wNzVMMTEuNSAxOGwtMy45Ni0yLjU2YTIuMDQgMi4wNCAwIDAgMS0xLjA0LTEuNzlWOC43N2w0LjE0LTIuNTJjLjI3NS0uMTU1LjU0LS4yNS44Ni0uMjVzLjY4LjA5NS45Ni4yNWw0LjQyNSAyLjUyIDIuNzEtMS41NC02LjktMy45MjVjLS4zNS0uMi0uNzktLjMwNS0xLjE5NS0uMzA1LS40IDAtLjc1LjEtMS4xLjNMMy41IDcuMjM1djcuOTZjMCAuNzQ1LjQgMS40MjUgMS4wNSAxLjhMMTEuNSAyMWw2Ljk0LTQuMDFhMi4xMSAyLjExIDAgMCAwIDEuMDYtMS44MTVWMTEuNWwxLS41eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMC41IDggMTUgMTF2M2wxLjUtLjl2Mi4wNzVMMTEuNSAxOGwtMy45Ni0yLjU2YTIuMDQgMi4wNCAwIDAgMS0xLjA0LTEuNzlWOC43N2w0LjE0LTIuNTJjLjI3NS0uMTU1LjU0LS4yNS44Ni0uMjVzLjY4LjA5NS45Ni4yNWw0LjQyNSAyLjUyIDIuNzEtMS41NC02LjktMy45MjVjLS4zNS0uMi0uNzktLjMwNS0xLjE5NS0uMzA1LS40IDAtLjc1LjEtMS4xLjNMMy41IDcuMjM1djcuOTZjMCAuNzQ1LjQgMS40MjUgMS4wNSAxLjhMMTEuNSAyMWw2Ljk0LTQuMDFhMi4xMSAyLjExIDAgMCAwIDEuMDYtMS44MTVWMTEuNWwxLS41eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNHVF9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiNEMzU3NTYiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTE5LjU1NiA4LjQ0NC00Ljg5IDIuNjY3djIuNjY3bDEuMzM0LS44djEuODQ0bC00LjQ0NSAyLjUxMS0zLjUyLTIuMjc1YTEuODEgMS44MSAwIDAgMS0uOTI0LTEuNTkxVjkuMTI5bDMuNjgtMi4yNGMuMjQ1LS4xMzguNDgtLjIyMi43NjQtLjIyMnMuNjA1LjA4NC44NTQuMjIybDMuOTMzIDIuMjQgMi40MDktMS4zNjktNi4xMzMtMy40ODlBMi4yIDIuMiAwIDAgMCAxMS41NTUgNGExLjkgMS45IDAgMCAwLS45NzcuMjY3TDQuNDQ0IDcuNzY0djcuMDc2YzAgLjY2Mi4zNTYgMS4yNjcuOTM0IDEuNkwxMS41NTUgMjBsNi4xNy0zLjU2NGExLjg4IDEuODggMCAwIDAgLjk0Mi0xLjYxNHYtMy4yNjZsLjg4OC0uNDQ1eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJHVF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/GT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenGT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenGT', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0v4dp6p._.js.map