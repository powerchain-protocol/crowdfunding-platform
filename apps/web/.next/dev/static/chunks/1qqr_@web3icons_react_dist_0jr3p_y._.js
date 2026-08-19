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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSTOS.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSTOS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#00847B',
                d: 'M15.177 8.03c0-1.324-1.308-2.647-2.685-2.647-1.376 0-2.589 1.323-2.589 2.647 0 .38.096.74.255 1.058l-.837.821-.026.016a3.53 3.53 0 0 1-.471-1.895c0-2.044 1.535-3.706 3.668-3.706a3.684 3.684 0 0 1 3.743 3.706c0 2.043-1.895 3.706-4.023 3.706H3l2.118-1.589v.53h7.147c1.376 0 2.912-1.324 2.912-2.647m-6.353 7.94c0 1.324 1.307 2.648 2.684 2.648 1.376 0 2.61-1.324 2.61-2.647 0-.381-.09-.742-.255-1.06l.816-.82.026-.016c.345.556.472 1.208.472 1.896 0 2.043-1.536 3.706-3.67 3.706a3.685 3.685 0 0 1-3.742-3.706c0-2.044 1.726-3.706 3.86-3.706H21l-2.118 1.588v-.53h-7.258c-1.376 0-2.8 1.324-2.8 2.648'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M15.177 8.03c0-1.324-1.308-2.647-2.685-2.647-1.376 0-2.589 1.323-2.589 2.647 0 .38.096.74.255 1.058l-.837.821-.026.016a3.53 3.53 0 0 1-.471-1.895c0-2.044 1.535-3.706 3.668-3.706a3.684 3.684 0 0 1 3.743 3.706c0 2.043-1.895 3.706-4.023 3.706H3l2.118-1.589v.53h7.147c1.376 0 2.912-1.324 2.912-2.647m-6.353 7.94c0 1.324 1.307 2.648 2.684 2.648 1.376 0 2.61-1.324 2.61-2.647 0-.381-.09-.742-.255-1.06l.816-.82.026-.016c.344.556.472 1.208.472 1.896 0 2.043-1.536 3.706-3.67 3.706a3.686 3.686 0 0 1-3.742-3.706c0-2.044 1.726-3.706 3.86-3.706H21l-2.118 1.588v-.53h-7.258c-1.376 0-2.8 1.324-2.8 2.648'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#STOS__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#00847B',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M14.824 8.47c0-1.176-1.163-2.353-2.386-2.353s-2.302 1.177-2.302 2.353c0 .34.085.66.226.941l-.743.73-.024.014a3.14 3.14 0 0 1-.419-1.685c0-1.816 1.365-3.294 3.262-3.294a3.275 3.275 0 0 1 3.327 3.294c0 1.817-1.685 3.294-3.577 3.294H4l1.882-1.411v.47h6.353c1.224 0 2.589-1.176 2.589-2.353m-5.648 7.06c0 1.176 1.163 2.352 2.386 2.352s2.32-1.176 2.32-2.353c0-.339-.08-.659-.226-.941l.725-.73.024-.014c.306.495.418 1.073.418 1.685 0 1.817-1.364 3.294-3.26 3.294a3.277 3.277 0 0 1-3.328-3.294c0-1.816 1.534-3.294 3.43-3.294H20l-1.882 1.412v-.47h-6.452c-1.224 0-2.49 1.176-2.49 2.352'
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
                        id: 'STOS__a'
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
 * @component @name TokenSTOS
 * @description Web3Icon for TokenSTOS
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDg0N0IiIGQ9Ik0xNS4xNzcgOC4wM2MwLTEuMzI0LTEuMzA4LTIuNjQ3LTIuNjg1LTIuNjQ3LTEuMzc2IDAtMi41ODkgMS4zMjMtMi41ODkgMi42NDcgMCAuMzguMDk2Ljc0LjI1NSAxLjA1OGwtLjgzNy44MjEtLjAyNi4wMTZhMy41MyAzLjUzIDAgMCAxLS40NzEtMS44OTVjMC0yLjA0NCAxLjUzNS0zLjcwNiAzLjY2OC0zLjcwNmEzLjY4NCAzLjY4NCAwIDAgMSAzLjc0MyAzLjcwNmMwIDIuMDQzLTEuODk1IDMuNzA2LTQuMDIzIDMuNzA2SDNsMi4xMTgtMS41ODl2LjUzaDcuMTQ3YzEuMzc2IDAgMi45MTItMS4zMjQgMi45MTItMi42NDdtLTYuMzUzIDcuOTRjMCAxLjMyNCAxLjMwNyAyLjY0OCAyLjY4NCAyLjY0OCAxLjM3NiAwIDIuNjEtMS4zMjQgMi42MS0yLjY0NyAwLS4zODEtLjA5LS43NDItLjI1NS0xLjA2bC44MTYtLjgyLjAyNi0uMDE2Yy4zNDUuNTU2LjQ3MiAxLjIwOC40NzIgMS44OTYgMCAyLjA0My0xLjUzNiAzLjcwNi0zLjY3IDMuNzA2YTMuNjg1IDMuNjg1IDAgMCAxLTMuNzQyLTMuNzA2YzAtMi4wNDQgMS43MjYtMy43MDYgMy44Ni0zLjcwNkgyMWwtMi4xMTggMS41ODh2LS41M2gtNy4yNThjLTEuMzc2IDAtMi44IDEuMzI0LTIuOCAyLjY0OCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNS4xNzcgOC4wM2MwLTEuMzI0LTEuMzA4LTIuNjQ3LTIuNjg1LTIuNjQ3LTEuMzc2IDAtMi41ODkgMS4zMjMtMi41ODkgMi42NDcgMCAuMzguMDk2Ljc0LjI1NSAxLjA1OGwtLjgzNy44MjEtLjAyNi4wMTZhMy41MyAzLjUzIDAgMCAxLS40NzEtMS44OTVjMC0yLjA0NCAxLjUzNS0zLjcwNiAzLjY2OC0zLjcwNmEzLjY4NCAzLjY4NCAwIDAgMSAzLjc0MyAzLjcwNmMwIDIuMDQzLTEuODk1IDMuNzA2LTQuMDIzIDMuNzA2SDNsMi4xMTgtMS41ODl2LjUzaDcuMTQ3YzEuMzc2IDAgMi45MTItMS4zMjQgMi45MTItMi42NDdtLTYuMzUzIDcuOTRjMCAxLjMyNCAxLjMwNyAyLjY0OCAyLjY4NCAyLjY0OCAxLjM3NiAwIDIuNjEtMS4zMjQgMi42MS0yLjY0NyAwLS4zODEtLjA5LS43NDItLjI1NS0xLjA2bC44MTYtLjgyLjAyNi0uMDE2Yy4zNDQuNTU2LjQ3MiAxLjIwOC40NzIgMS44OTYgMCAyLjA0My0xLjUzNiAzLjcwNi0zLjY3IDMuNzA2YTMuNjg2IDMuNjg2IDAgMCAxLTMuNzQyLTMuNzA2YzAtMi4wNDQgMS43MjYtMy43MDYgMy44Ni0zLjcwNkgyMWwtMi4xMTggMS41ODh2LS41M2gtNy4yNThjLTEuMzc2IDAtMi44IDEuMzI0LTIuOCAyLjY0OCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTVE9TX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwODQ3QiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTQuODI0IDguNDdjMC0xLjE3Ni0xLjE2My0yLjM1My0yLjM4Ni0yLjM1M3MtMi4zMDIgMS4xNzctMi4zMDIgMi4zNTNjMCAuMzQuMDg1LjY2LjIyNi45NDFsLS43NDMuNzMtLjAyNC4wMTRhMy4xNCAzLjE0IDAgMCAxLS40MTktMS42ODVjMC0xLjgxNiAxLjM2NS0zLjI5NCAzLjI2Mi0zLjI5NGEzLjI3NSAzLjI3NSAwIDAgMSAzLjMyNyAzLjI5NGMwIDEuODE3LTEuNjg1IDMuMjk0LTMuNTc3IDMuMjk0SDRsMS44ODItMS40MTF2LjQ3aDYuMzUzYzEuMjI0IDAgMi41ODktMS4xNzYgMi41ODktMi4zNTNtLTUuNjQ4IDcuMDZjMCAxLjE3NiAxLjE2MyAyLjM1MiAyLjM4NiAyLjM1MnMyLjMyLTEuMTc2IDIuMzItMi4zNTNjMC0uMzM5LS4wOC0uNjU5LS4yMjYtLjk0MWwuNzI1LS43My4wMjQtLjAxNGMuMzA2LjQ5NS40MTggMS4wNzMuNDE4IDEuNjg1IDAgMS44MTctMS4zNjQgMy4yOTQtMy4yNiAzLjI5NGEzLjI3NyAzLjI3NyAwIDAgMS0zLjMyOC0zLjI5NGMwLTEuODE2IDEuNTM0LTMuMjk0IDMuNDMtMy4yOTRIMjBsLTEuODgyIDEuNDEydi0uNDdoLTYuNDUyYy0xLjIyNCAwLTIuNDkgMS4xNzYtMi40OSAyLjM1MiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJTVE9TX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/STOS
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSTOS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSTOS', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0jr3p_y._.js.map