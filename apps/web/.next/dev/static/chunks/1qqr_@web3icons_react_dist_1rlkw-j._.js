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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPAI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#10C7CA',
                d: 'M11.757 7.864a3.405 3.405 0 1 0 0 6.81 3.405 3.405 0 0 0 0-6.81m-4.865 3.405a4.865 4.865 0 1 1 9.73 0 4.865 4.865 0 0 1-9.73 0'
            }
        ],
        [
            'path',
            {
                fill: '#10C7CA',
                d: 'M7.622 10.541a.73.73 0 0 1 .73.73v9a.73.73 0 0 1-1.46 0v-9a.73.73 0 0 1 .73-.73m8.27 0a.73.73 0 0 1 .73.73v4.621a.73.73 0 1 1-1.46 0v-4.621a.73.73 0 0 1 .73-.73m0-5.109a1.216 1.216 0 1 0 0-2.432 1.216 1.216 0 0 0 0 2.432'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.757 7.864a3.405 3.405 0 1 0 0 6.81 3.405 3.405 0 0 0 0-6.81m-4.865 3.405a4.865 4.865 0 1 1 9.73 0 4.865 4.865 0 0 1-9.73 0'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M7.622 10.541a.73.73 0 0 1 .73.73v9a.73.73 0 0 1-1.46 0v-9a.73.73 0 0 1 .73-.73m8.27 0a.73.73 0 0 1 .73.73v4.621a.73.73 0 0 1-1.46 0v-4.621a.73.73 0 0 1 .73-.73m0-5.109a1.216 1.216 0 1 0 0-2.432 1.216 1.216 0 0 0 0 2.432'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#PAI__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#10C7CA',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.784 8.324a3.027 3.027 0 1 0 0 6.053 3.027 3.027 0 0 0 0-6.053M7.459 11.35a4.324 4.324 0 1 1 8.649 0 4.324 4.324 0 0 1-8.649 0'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M8.108 10.703a.65.65 0 0 1 .649.649v8a.649.649 0 0 1-1.298 0v-8a.65.65 0 0 1 .65-.649m7.351 0a.65.65 0 0 1 .649.649v4.108a.648.648 0 1 1-1.297 0v-4.108a.65.65 0 0 1 .648-.649m-.001-4.541a1.081 1.081 0 1 0 0-2.162 1.081 1.081 0 0 0 0 2.162'
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
                        id: 'PAI__a'
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
 * @component @name TokenPAI
 * @description Web3Icon for TokenPAI
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxMEM3Q0EiIGQ9Ik0xMS43NTcgNy44NjRhMy40MDUgMy40MDUgMCAxIDAgMCA2LjgxIDMuNDA1IDMuNDA1IDAgMCAwIDAtNi44MW0tNC44NjUgMy40MDVhNC44NjUgNC44NjUgMCAxIDEgOS43MyAwIDQuODY1IDQuODY1IDAgMCAxLTkuNzMgMCIvPgogICAgPHBhdGggZmlsbD0iIzEwQzdDQSIgZD0iTTcuNjIyIDEwLjU0MWEuNzMuNzMgMCAwIDEgLjczLjczdjlhLjczLjczIDAgMCAxLTEuNDYgMHYtOWEuNzMuNzMgMCAwIDEgLjczLS43M204LjI3IDBhLjczLjczIDAgMCAxIC43My43M3Y0LjYyMWEuNzMuNzMgMCAxIDEtMS40NiAwdi00LjYyMWEuNzMuNzMgMCAwIDEgLjczLS43M20wLTUuMTA5YTEuMjE2IDEuMjE2IDAgMSAwIDAtMi40MzIgMS4yMTYgMS4yMTYgMCAwIDAgMCAyLjQzMiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS43NTcgNy44NjRhMy40MDUgMy40MDUgMCAxIDAgMCA2LjgxIDMuNDA1IDMuNDA1IDAgMCAwIDAtNi44MW0tNC44NjUgMy40MDVhNC44NjUgNC44NjUgMCAxIDEgOS43MyAwIDQuODY1IDQuODY1IDAgMCAxLTkuNzMgMCIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTcuNjIyIDEwLjU0MWEuNzMuNzMgMCAwIDEgLjczLjczdjlhLjczLjczIDAgMCAxLTEuNDYgMHYtOWEuNzMuNzMgMCAwIDEgLjczLS43M204LjI3IDBhLjczLjczIDAgMCAxIC43My43M3Y0LjYyMWEuNzMuNzMgMCAwIDEtMS40NiAwdi00LjYyMWEuNzMuNzMgMCAwIDEgLjczLS43M20wLTUuMTA5YTEuMjE2IDEuMjE2IDAgMSAwIDAtMi40MzIgMS4yMTYgMS4yMTYgMCAwIDAgMCAyLjQzMiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQQUlfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMTBDN0NBIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS43ODQgOC4zMjRhMy4wMjcgMy4wMjcgMCAxIDAgMCA2LjA1MyAzLjAyNyAzLjAyNyAwIDAgMCAwLTYuMDUzTTcuNDU5IDExLjM1YTQuMzI0IDQuMzI0IDAgMSAxIDguNjQ5IDAgNC4zMjQgNC4zMjQgMCAwIDEtOC42NDkgMCIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04LjEwOCAxMC43MDNhLjY1LjY1IDAgMCAxIC42NDkuNjQ5djhhLjY0OS42NDkgMCAwIDEtMS4yOTggMHYtOGEuNjUuNjUgMCAwIDEgLjY1LS42NDltNy4zNTEgMGEuNjUuNjUgMCAwIDEgLjY0OS42NDl2NC4xMDhhLjY0OC42NDggMCAxIDEtMS4yOTcgMHYtNC4xMDhhLjY1LjY1IDAgMCAxIC42NDgtLjY0OW0tLjAwMS00LjU0MWExLjA4MSAxLjA4MSAwIDEgMCAwLTIuMTYyIDEuMDgxIDEuMDgxIDAgMCAwIDAgMi4xNjIiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iUEFJX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/PAI
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPAI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPAI', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1rlkw-j._.js.map