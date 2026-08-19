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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPPT.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPPT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#1E375E',
                d: 'M11.053 20.688V6.316H15.5c.17 0 .288.138.288.302v7.922c0 .164-.118.304-.28.304h-2.56v5.844c0 .164-.128.312-.297.312h-1.348c-.207-.01-.252-.136-.252-.312m-.948-5.846h-1.58a.323.323 0 0 1-.315-.292V6.618c0-.164.145-.302.315-.302h1.58zm0-10.422c0 .78.95 1.42 2.132 1.42s2.131-.64 2.131-1.42c0-.788-.949-1.42-2.131-1.42-1.183 0-2.132.64-2.132 1.42'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.053 20.688V6.316H15.5c.17 0 .288.138.288.302v7.922c0 .164-.118.304-.28.304h-2.56v5.844c0 .164-.128.312-.297.312h-1.348c-.207-.01-.252-.136-.252-.312m-.948-5.846h-1.58a.323.323 0 0 1-.315-.292V6.618c0-.164.145-.302.315-.302h1.58zm0-10.422c0 .78.95 1.42 2.132 1.42s2.131-.64 2.131-1.42c0-.788-.949-1.42-2.131-1.42-1.183 0-2.132.64-2.132 1.42'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#PPT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#1E375E',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.158 19.723V6.947h3.953c.152 0 .257.123.257.269v7.042c0 .146-.105.27-.25.27h-2.274v5.195c0 .146-.114.277-.265.277h-1.198c-.183-.01-.224-.121-.223-.277m-.842-5.197H8.91a.29.29 0 0 1-.28-.259V7.216c0-.146.129-.269.28-.269h1.405zm0-9.264c0 .693.843 1.263 1.894 1.263s1.895-.57 1.895-1.263c0-.7-.844-1.262-1.895-1.262-1.05 0-1.894.57-1.894 1.262'
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
                        id: 'PPT__a'
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
 * @component @name TokenPPT
 * @description Web3Icon for TokenPPT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxRTM3NUUiIGQ9Ik0xMS4wNTMgMjAuNjg4VjYuMzE2SDE1LjVjLjE3IDAgLjI4OC4xMzguMjg4LjMwMnY3LjkyMmMwIC4xNjQtLjExOC4zMDQtLjI4LjMwNGgtMi41NnY1Ljg0NGMwIC4xNjQtLjEyOC4zMTItLjI5Ny4zMTJoLTEuMzQ4Yy0uMjA3LS4wMS0uMjUyLS4xMzYtLjI1Mi0uMzEybS0uOTQ4LTUuODQ2aC0xLjU4YS4zMjMuMzIzIDAgMCAxLS4zMTUtLjI5MlY2LjYxOGMwLS4xNjQuMTQ1LS4zMDIuMzE1LS4zMDJoMS41OHptMC0xMC40MjJjMCAuNzguOTUgMS40MiAyLjEzMiAxLjQyczIuMTMxLS42NCAyLjEzMS0xLjQyYzAtLjc4OC0uOTQ5LTEuNDItMi4xMzEtMS40Mi0xLjE4MyAwLTIuMTMyLjY0LTIuMTMyIDEuNDIiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS4wNTMgMjAuNjg4VjYuMzE2SDE1LjVjLjE3IDAgLjI4OC4xMzguMjg4LjMwMnY3LjkyMmMwIC4xNjQtLjExOC4zMDQtLjI4LjMwNGgtMi41NnY1Ljg0NGMwIC4xNjQtLjEyOC4zMTItLjI5Ny4zMTJoLTEuMzQ4Yy0uMjA3LS4wMS0uMjUyLS4xMzYtLjI1Mi0uMzEybS0uOTQ4LTUuODQ2aC0xLjU4YS4zMjMuMzIzIDAgMCAxLS4zMTUtLjI5MlY2LjYxOGMwLS4xNjQuMTQ1LS4zMDIuMzE1LS4zMDJoMS41OHptMC0xMC40MjJjMCAuNzguOTUgMS40MiAyLjEzMiAxLjQyczIuMTMxLS42NCAyLjEzMS0xLjQyYzAtLjc4OC0uOTQ5LTEuNDItMi4xMzEtMS40Mi0xLjE4MyAwLTIuMTMyLjY0LTIuMTMyIDEuNDIiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQUFRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMUUzNzVFIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS4xNTggMTkuNzIzVjYuOTQ3aDMuOTUzYy4xNTIgMCAuMjU3LjEyMy4yNTcuMjY5djcuMDQyYzAgLjE0Ni0uMTA1LjI3LS4yNS4yN2gtMi4yNzR2NS4xOTVjMCAuMTQ2LS4xMTQuMjc3LS4yNjUuMjc3aC0xLjE5OGMtLjE4My0uMDEtLjIyNC0uMTIxLS4yMjMtLjI3N20tLjg0Mi01LjE5N0g4LjkxYS4yOS4yOSAwIDAgMS0uMjgtLjI1OVY3LjIxNmMwLS4xNDYuMTI5LS4yNjkuMjgtLjI2OWgxLjQwNXptMC05LjI2NGMwIC42OTMuODQzIDEuMjYzIDEuODk0IDEuMjYzczEuODk1LS41NyAxLjg5NS0xLjI2M2MwLS43LS44NDQtMS4yNjItMS44OTUtMS4yNjItMS4wNSAwLTEuODk0LjU3LTEuODk0IDEuMjYyIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlBQVF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/PPT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPPT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPPT', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0ku_2t-._.js.map