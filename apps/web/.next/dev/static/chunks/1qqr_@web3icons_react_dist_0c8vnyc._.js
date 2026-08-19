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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSTAT.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSTAT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#21353E',
                d: 'M20.421 8.951a.84.84 0 1 0-.707-1.524l-5.739-3.31a.838.838 0 1 0-1.676 0L6.51 7.389a.838.838 0 0 0-.789 1.47v6.598l-1.11-.626.212-.403H3l.99 1.573.219-.424 8.944 5.144 6.474-3.756a.83.83 0 0 0 .506.18.838.838 0 0 0 .294-1.634V8.957zm-13.888 6.99V8.924l.098-.055 6.169 3.577v7.061zm6.588-4.246L7.018 8.124v-.06l5.684-3.207a.83.83 0 0 0 .876 0l5.662 3.234-6.114 3.61zm.833.49 5.65-3.365v6.708zm-.338.751 5.624 3.321-5.624 3.25z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M20.421 8.951a.84.84 0 1 0-.707-1.524l-5.739-3.31a.838.838 0 1 0-1.676 0L6.512 7.389a.838.838 0 0 0-.79 1.47v6.598l-1.11-.626.212-.403H3L3.99 16l.219-.424 8.944 5.144 6.474-3.756a.83.83 0 0 0 .506.18.838.838 0 0 0 .294-1.634V8.957zm-13.888 6.99V8.925l.098-.055 6.169 3.577v7.061zm6.588-4.246L7.018 8.124v-.06l5.684-3.207a.83.83 0 0 0 .876 0l5.662 3.234-6.114 3.61zm.833.49 5.65-3.365v6.708zm-.338.751 5.624 3.321-5.624 3.25z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#STAT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#21353E',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M19.486 9.29a.747.747 0 1 0-.63-1.355l-5.1-2.942a.745.745 0 1 0-1.49 0L7.12 7.9a.745.745 0 0 0-.701 1.307v5.865l-.988-.556.19-.359H4l.88 1.399.194-.378 7.951 4.574 5.754-3.34c.126.097.28.16.45.16a.745.745 0 0 0 .262-1.452V9.295zM7.14 15.504V9.266l.087-.049 5.483 3.18v6.276zm5.855-3.775L7.571 8.555V8.5l5.053-2.85a.74.74 0 0 0 .779 0l5.033 2.874L13 11.734zm.74.436 5.024-2.991v5.962zm-.3.667 5 2.952-5 2.89z'
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
                        id: 'STAT__a'
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
 * @component @name TokenSTAT
 * @description Web3Icon for TokenSTAT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMyMTM1M0UiIGQ9Ik0yMC40MjEgOC45NTFhLjg0Ljg0IDAgMSAwLS43MDctMS41MjRsLTUuNzM5LTMuMzFhLjgzOC44MzggMCAxIDAtMS42NzYgMEw2LjUxIDcuMzg5YS44MzguODM4IDAgMCAwLS43ODkgMS40N3Y2LjU5OGwtMS4xMS0uNjI2LjIxMi0uNDAzSDNsLjk5IDEuNTczLjIxOS0uNDI0IDguOTQ0IDUuMTQ0IDYuNDc0LTMuNzU2YS44My44MyAwIDAgMCAuNTA2LjE4LjgzOC44MzggMCAwIDAgLjI5NC0xLjYzNFY4Ljk1N3ptLTEzLjg4OCA2Ljk5VjguOTI0bC4wOTgtLjA1NSA2LjE2OSAzLjU3N3Y3LjA2MXptNi41ODgtNC4yNDZMNy4wMTggOC4xMjR2LS4wNmw1LjY4NC0zLjIwN2EuODMuODMgMCAwIDAgLjg3NiAwbDUuNjYyIDMuMjM0LTYuMTE0IDMuNjF6bS44MzMuNDkgNS42NS0zLjM2NXY2LjcwOHptLS4zMzguNzUxIDUuNjI0IDMuMzIxLTUuNjI0IDMuMjV6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMC40MjEgOC45NTFhLjg0Ljg0IDAgMSAwLS43MDctMS41MjRsLTUuNzM5LTMuMzFhLjgzOC44MzggMCAxIDAtMS42NzYgMEw2LjUxMiA3LjM4OWEuODM4LjgzOCAwIDAgMC0uNzkgMS40N3Y2LjU5OGwtMS4xMS0uNjI2LjIxMi0uNDAzSDNMMy45OSAxNmwuMjE5LS40MjQgOC45NDQgNS4xNDQgNi40NzQtMy43NTZhLjgzLjgzIDAgMCAwIC41MDYuMTguODM4LjgzOCAwIDAgMCAuMjk0LTEuNjM0VjguOTU3em0tMTMuODg4IDYuOTlWOC45MjVsLjA5OC0uMDU1IDYuMTY5IDMuNTc3djcuMDYxem02LjU4OC00LjI0Nkw3LjAxOCA4LjEyNHYtLjA2bDUuNjg0LTMuMjA3YS44My44MyAwIDAgMCAuODc2IDBsNS42NjIgMy4yMzQtNi4xMTQgMy42MXptLjgzMy40OSA1LjY1LTMuMzY1djYuNzA4em0tLjMzOC43NTEgNS42MjQgMy4zMjEtNS42MjQgMy4yNXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTVEFUX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzIxMzUzRSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTkuNDg2IDkuMjlhLjc0Ny43NDcgMCAxIDAtLjYzLTEuMzU1bC01LjEtMi45NDJhLjc0NS43NDUgMCAxIDAtMS40OSAwTDcuMTIgNy45YS43NDUuNzQ1IDAgMCAwLS43MDEgMS4zMDd2NS44NjVsLS45ODgtLjU1Ni4xOS0uMzU5SDRsLjg4IDEuMzk5LjE5NC0uMzc4IDcuOTUxIDQuNTc0IDUuNzU0LTMuMzRjLjEyNi4wOTcuMjguMTYuNDUuMTZhLjc0NS43NDUgMCAwIDAgLjI2Mi0xLjQ1MlY5LjI5NXpNNy4xNCAxNS41MDRWOS4yNjZsLjA4Ny0uMDQ5IDUuNDgzIDMuMTh2Ni4yNzZ6bTUuODU1LTMuNzc1TDcuNTcxIDguNTU1VjguNWw1LjA1My0yLjg1YS43NC43NCAwIDAgMCAuNzc5IDBsNS4wMzMgMi44NzRMMTMgMTEuNzM0em0uNzQuNDM2IDUuMDI0LTIuOTkxdjUuOTYyem0tLjMuNjY3IDUgMi45NTItNSAyLjg5eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJTVEFUX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/STAT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSTAT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSTAT', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0c8vnyc._.js.map