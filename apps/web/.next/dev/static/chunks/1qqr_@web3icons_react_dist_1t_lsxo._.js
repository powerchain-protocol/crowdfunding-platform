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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenKLEVA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenKLEVA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#1A56FF',
                d: 'm3.034 15.216 3.227 5.705c.06.102.204.102.258 0l6.653-11.757a.23.23 0 0 0 0-.228l-3.3-5.819a.22.22 0 0 0-.186-.114H3.148a.15.15 0 0 0-.126.228l2.67 4.583c.047.09.173.102.24.024L8.87 4.827a.07.07 0 0 1 .048-.024c.042-.006.09.03.084.078 0 .012 0 .024-.012.036L3.034 14.988a.23.23 0 0 0 0 .228m11.98 3.87L20.97 9.014a.23.23 0 0 0 0-.228L17.743 3.08a.144.144 0 0 0-.258 0l-6.653 11.757a.23.23 0 0 0 0 .228l3.3 5.82a.21.21 0 0 0 .185.113h6.539c.078 0 .138-.06.144-.138 0-.03 0-.06-.018-.09l-2.67-4.583a.144.144 0 0 0-.24-.024l-2.939 3.011a.07.07 0 0 1-.048.024.08.08 0 0 1-.059-.02.08.08 0 0 1-.025-.057c0-.012 0-.025.012-.037'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm3.034 15.216 3.227 5.705c.06.102.204.102.258 0l6.653-11.757a.23.23 0 0 0 0-.228l-3.3-5.819a.22.22 0 0 0-.186-.114H3.148a.15.15 0 0 0-.126.228l2.67 4.583c.047.09.173.102.24.024L8.87 4.827a.07.07 0 0 1 .048-.024c.042-.006.09.03.084.078 0 .012 0 .024-.012.036L3.034 14.988a.23.23 0 0 0 0 .228m11.98 3.87L20.97 9.014a.23.23 0 0 0 0-.228L17.743 3.08a.144.144 0 0 0-.258 0l-6.653 11.757a.23.23 0 0 0 0 .228l3.3 5.819a.21.21 0 0 0 .185.114h6.539c.078 0 .138-.06.144-.138 0-.03 0-.06-.018-.09l-2.67-4.583a.144.144 0 0 0-.24-.024l-2.939 3.011a.07.07 0 0 1-.048.024.08.08 0 0 1-.059-.02.08.08 0 0 1-.025-.057c0-.012 0-.025.012-.037'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#KLEVA__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#1A56FF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm4.03 14.86 2.87 5.07c.053.09.181.09.23 0l5.91-10.451a.21.21 0 0 0 0-.203l-2.93-5.172a.2.2 0 0 0-.166-.101H4.131a.133.133 0 0 0-.112.202L6.392 8.28a.13.13 0 0 0 .214.021l2.612-2.676a.06.06 0 0 1 .043-.022c.037-.005.08.027.075.07 0 .01 0 .021-.011.032L4.03 14.656a.21.21 0 0 0 0 .203m10.648 3.438 5.295-8.952a.21.21 0 0 0 0-.203l-2.868-5.07a.128.128 0 0 0-.23 0l-5.913 10.45a.21.21 0 0 0 0 .203l2.933 5.172a.18.18 0 0 0 .165.101h5.812c.07 0 .123-.053.128-.122 0-.027 0-.054-.016-.08l-2.373-4.074a.13.13 0 0 0-.213-.022l-2.613 2.677a.06.06 0 0 1-.043.022.07.07 0 0 1-.052-.019.07.07 0 0 1-.022-.051c0-.01 0-.021.01-.032'
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
                        id: 'KLEVA__a'
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
 * @component @name TokenKLEVA
 * @description Web3Icon for TokenKLEVA
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxQTU2RkYiIGQ9Im0zLjAzNCAxNS4yMTYgMy4yMjcgNS43MDVjLjA2LjEwMi4yMDQuMTAyLjI1OCAwbDYuNjUzLTExLjc1N2EuMjMuMjMgMCAwIDAgMC0uMjI4bC0zLjMtNS44MTlhLjIyLjIyIDAgMCAwLS4xODYtLjExNEgzLjE0OGEuMTUuMTUgMCAwIDAtLjEyNi4yMjhsMi42NyA0LjU4M2MuMDQ3LjA5LjE3My4xMDIuMjQuMDI0TDguODcgNC44MjdhLjA3LjA3IDAgMCAxIC4wNDgtLjAyNGMuMDQyLS4wMDYuMDkuMDMuMDg0LjA3OCAwIC4wMTIgMCAuMDI0LS4wMTIuMDM2TDMuMDM0IDE0Ljk4OGEuMjMuMjMgMCAwIDAgMCAuMjI4bTExLjk4IDMuODdMMjAuOTcgOS4wMTRhLjIzLjIzIDAgMCAwIDAtLjIyOEwxNy43NDMgMy4wOGEuMTQ0LjE0NCAwIDAgMC0uMjU4IDBsLTYuNjUzIDExLjc1N2EuMjMuMjMgMCAwIDAgMCAuMjI4bDMuMyA1LjgyYS4yMS4yMSAwIDAgMCAuMTg1LjExM2g2LjUzOWMuMDc4IDAgLjEzOC0uMDYuMTQ0LS4xMzggMC0uMDMgMC0uMDYtLjAxOC0uMDlsLTIuNjctNC41ODNhLjE0NC4xNDQgMCAwIDAtLjI0LS4wMjRsLTIuOTM5IDMuMDExYS4wNy4wNyAwIDAgMS0uMDQ4LjAyNC4wOC4wOCAwIDAgMS0uMDU5LS4wMi4wOC4wOCAwIDAgMS0uMDI1LS4wNTdjMC0uMDEyIDAtLjAyNS4wMTItLjAzNyIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0zLjAzNCAxNS4yMTYgMy4yMjcgNS43MDVjLjA2LjEwMi4yMDQuMTAyLjI1OCAwbDYuNjUzLTExLjc1N2EuMjMuMjMgMCAwIDAgMC0uMjI4bC0zLjMtNS44MTlhLjIyLjIyIDAgMCAwLS4xODYtLjExNEgzLjE0OGEuMTUuMTUgMCAwIDAtLjEyNi4yMjhsMi42NyA0LjU4M2MuMDQ3LjA5LjE3My4xMDIuMjQuMDI0TDguODcgNC44MjdhLjA3LjA3IDAgMCAxIC4wNDgtLjAyNGMuMDQyLS4wMDYuMDkuMDMuMDg0LjA3OCAwIC4wMTIgMCAuMDI0LS4wMTIuMDM2TDMuMDM0IDE0Ljk4OGEuMjMuMjMgMCAwIDAgMCAuMjI4bTExLjk4IDMuODdMMjAuOTcgOS4wMTRhLjIzLjIzIDAgMCAwIDAtLjIyOEwxNy43NDMgMy4wOGEuMTQ0LjE0NCAwIDAgMC0uMjU4IDBsLTYuNjUzIDExLjc1N2EuMjMuMjMgMCAwIDAgMCAuMjI4bDMuMyA1LjgxOWEuMjEuMjEgMCAwIDAgLjE4NS4xMTRoNi41MzljLjA3OCAwIC4xMzgtLjA2LjE0NC0uMTM4IDAtLjAzIDAtLjA2LS4wMTgtLjA5bC0yLjY3LTQuNTgzYS4xNDQuMTQ0IDAgMCAwLS4yNC0uMDI0bC0yLjkzOSAzLjAxMWEuMDcuMDcgMCAwIDEtLjA0OC4wMjQuMDguMDggMCAwIDEtLjA1OS0uMDIuMDguMDggMCAwIDEtLjAyNS0uMDU3YzAtLjAxMiAwLS4wMjUuMDEyLS4wMzciLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNLTEVWQV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMxQTU2RkYiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTQuMDMgMTQuODYgMi44NyA1LjA3Yy4wNTMuMDkuMTgxLjA5LjIzIDBsNS45MS0xMC40NTFhLjIxLjIxIDAgMCAwIDAtLjIwM2wtMi45My01LjE3MmEuMi4yIDAgMCAwLS4xNjYtLjEwMUg0LjEzMWEuMTMzLjEzMyAwIDAgMC0uMTEyLjIwMkw2LjM5MiA4LjI4YS4xMy4xMyAwIDAgMCAuMjE0LjAyMWwyLjYxMi0yLjY3NmEuMDYuMDYgMCAwIDEgLjA0My0uMDIyYy4wMzctLjAwNS4wOC4wMjcuMDc1LjA3IDAgLjAxIDAgLjAyMS0uMDExLjAzMkw0LjAzIDE0LjY1NmEuMjEuMjEgMCAwIDAgMCAuMjAzbTEwLjY0OCAzLjQzOCA1LjI5NS04Ljk1MmEuMjEuMjEgMCAwIDAgMC0uMjAzbC0yLjg2OC01LjA3YS4xMjguMTI4IDAgMCAwLS4yMyAwbC01LjkxMyAxMC40NWEuMjEuMjEgMCAwIDAgMCAuMjAzbDIuOTMzIDUuMTcyYS4xOC4xOCAwIDAgMCAuMTY1LjEwMWg1LjgxMmMuMDcgMCAuMTIzLS4wNTMuMTI4LS4xMjIgMC0uMDI3IDAtLjA1NC0uMDE2LS4wOGwtMi4zNzMtNC4wNzRhLjEzLjEzIDAgMCAwLS4yMTMtLjAyMmwtMi42MTMgMi42NzdhLjA2LjA2IDAgMCAxLS4wNDMuMDIyLjA3LjA3IDAgMCAxLS4wNTItLjAxOS4wNy4wNyAwIDAgMS0uMDIyLS4wNTFjMC0uMDEgMC0uMDIxLjAxLS4wMzIiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iS0xFVkFfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/KLEVA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenKLEVA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenKLEVA', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1t_lsxo._.js.map