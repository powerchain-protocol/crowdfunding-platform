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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenKCS.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenKCS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#23AF91',
                d: 'm9.04 12 5.172 5.333 3.272-3.362a1.465 1.465 0 0 1 2.09 0c.57.593.57 1.56 0 2.152l-4.312 4.443a1.474 1.474 0 0 1-2.09 0L6.856 14.16v3.803c.011.814-.616 1.505-1.43 1.52-.817-.01-1.44-.702-1.43-1.52V6.036c0-.84.61-1.52 1.43-1.52.81 0 1.43.68 1.43 1.52V9.84l6.315-6.405a1.476 1.476 0 0 1 2.09 0l4.302 4.443c.571.593.571 1.56 0 2.151a1.464 1.464 0 0 1-2.08 0l-3.272-3.362zm5.182-1.521c.81 0 1.47.68 1.47 1.521s-.66 1.521-1.47 1.521-1.48-.68-1.48-1.521.66-1.521 1.48-1.521'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm9.04 12 5.172 5.333 3.272-3.362a1.465 1.465 0 0 1 2.09 0c.57.593.57 1.56 0 2.152l-4.312 4.443a1.474 1.474 0 0 1-2.09 0L6.856 14.16v3.803c.011.814-.616 1.505-1.43 1.52-.817-.01-1.44-.702-1.43-1.52V6.036c0-.84.61-1.52 1.43-1.52.81 0 1.43.68 1.43 1.52V9.84l6.315-6.405a1.476 1.476 0 0 1 2.09 0l4.302 4.443c.571.593.571 1.56 0 2.151a1.464 1.464 0 0 1-2.08 0l-3.272-3.362zm5.182-1.521c.81 0 1.47.68 1.47 1.521s-.66 1.521-1.47 1.521-1.48-.68-1.48-1.521.66-1.521 1.48-1.521'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#KCS__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#23AF91',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm9.369 12 4.598 4.74 2.907-2.988c.5-.52 1.36-.52 1.86 0a1.393 1.393 0 0 1 0 1.913L14.9 19.614a1.31 1.31 0 0 1-1.859 0L7.428 13.92v3.38c.01.724-.547 1.338-1.27 1.352-.727-.01-1.28-.625-1.271-1.352V6.7c0-.747.541-1.352 1.27-1.352.72 0 1.271.605 1.271 1.352v3.38l5.613-5.693a1.31 1.31 0 0 1 1.86 0l3.823 3.95a1.39 1.39 0 0 1 0 1.912c-.5.514-1.35.514-1.85 0l-2.907-2.99zm4.606-1.352c.72 0 1.308.605 1.308 1.352s-.588 1.352-1.308 1.352S12.66 12.747 12.66 12s.587-1.352 1.316-1.352'
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
                        id: 'KCS__a'
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
 * @component @name TokenKCS
 * @description Web3Icon for TokenKCS
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMyM0FGOTEiIGQ9Im05LjA0IDEyIDUuMTcyIDUuMzMzIDMuMjcyLTMuMzYyYTEuNDY1IDEuNDY1IDAgMCAxIDIuMDkgMGMuNTcuNTkzLjU3IDEuNTYgMCAyLjE1MmwtNC4zMTIgNC40NDNhMS40NzQgMS40NzQgMCAwIDEtMi4wOSAwTDYuODU2IDE0LjE2djMuODAzYy4wMTEuODE0LS42MTYgMS41MDUtMS40MyAxLjUyLS44MTctLjAxLTEuNDQtLjcwMi0xLjQzLTEuNTJWNi4wMzZjMC0uODQuNjEtMS41MiAxLjQzLTEuNTIuODEgMCAxLjQzLjY4IDEuNDMgMS41MlY5Ljg0bDYuMzE1LTYuNDA1YTEuNDc2IDEuNDc2IDAgMCAxIDIuMDkgMGw0LjMwMiA0LjQ0M2MuNTcxLjU5My41NzEgMS41NiAwIDIuMTUxYTEuNDY0IDEuNDY0IDAgMCAxLTIuMDggMGwtMy4yNzItMy4zNjJ6bTUuMTgyLTEuNTIxYy44MSAwIDEuNDcuNjggMS40NyAxLjUyMXMtLjY2IDEuNTIxLTEuNDcgMS41MjEtMS40OC0uNjgtMS40OC0xLjUyMS42Ni0xLjUyMSAxLjQ4LTEuNTIxIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im05LjA0IDEyIDUuMTcyIDUuMzMzIDMuMjcyLTMuMzYyYTEuNDY1IDEuNDY1IDAgMCAxIDIuMDkgMGMuNTcuNTkzLjU3IDEuNTYgMCAyLjE1MmwtNC4zMTIgNC40NDNhMS40NzQgMS40NzQgMCAwIDEtMi4wOSAwTDYuODU2IDE0LjE2djMuODAzYy4wMTEuODE0LS42MTYgMS41MDUtMS40MyAxLjUyLS44MTctLjAxLTEuNDQtLjcwMi0xLjQzLTEuNTJWNi4wMzZjMC0uODQuNjEtMS41MiAxLjQzLTEuNTIuODEgMCAxLjQzLjY4IDEuNDMgMS41MlY5Ljg0bDYuMzE1LTYuNDA1YTEuNDc2IDEuNDc2IDAgMCAxIDIuMDkgMGw0LjMwMiA0LjQ0M2MuNTcxLjU5My41NzEgMS41NiAwIDIuMTUxYTEuNDY0IDEuNDY0IDAgMCAxLTIuMDggMGwtMy4yNzItMy4zNjJ6bTUuMTgyLTEuNTIxYy44MSAwIDEuNDcuNjggMS40NyAxLjUyMXMtLjY2IDEuNTIxLTEuNDcgMS41MjEtMS40OC0uNjgtMS40OC0xLjUyMS42Ni0xLjUyMSAxLjQ4LTEuNTIxIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNLQ1NfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMjNBRjkxIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im05LjM2OSAxMiA0LjU5OCA0Ljc0IDIuOTA3LTIuOTg4Yy41LS41MiAxLjM2LS41MiAxLjg2IDBhMS4zOTMgMS4zOTMgMCAwIDEgMCAxLjkxM0wxNC45IDE5LjYxNGExLjMxIDEuMzEgMCAwIDEtMS44NTkgMEw3LjQyOCAxMy45MnYzLjM4Yy4wMS43MjQtLjU0NyAxLjMzOC0xLjI3IDEuMzUyLS43MjctLjAxLTEuMjgtLjYyNS0xLjI3MS0xLjM1MlY2LjdjMC0uNzQ3LjU0MS0xLjM1MiAxLjI3LTEuMzUyLjcyIDAgMS4yNzEuNjA1IDEuMjcxIDEuMzUydjMuMzhsNS42MTMtNS42OTNhMS4zMSAxLjMxIDAgMCAxIDEuODYgMGwzLjgyMyAzLjk1YTEuMzkgMS4zOSAwIDAgMSAwIDEuOTEyYy0uNS41MTQtMS4zNS41MTQtMS44NSAwbC0yLjkwNy0yLjk5em00LjYwNi0xLjM1MmMuNzIgMCAxLjMwOC42MDUgMS4zMDggMS4zNTJzLS41ODggMS4zNTItMS4zMDggMS4zNTJTMTIuNjYgMTIuNzQ3IDEyLjY2IDEycy41ODctMS4zNTIgMS4zMTYtMS4zNTIiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iS0NTX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/KCS
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenKCS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenKCS', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0pf13cu._.js.map