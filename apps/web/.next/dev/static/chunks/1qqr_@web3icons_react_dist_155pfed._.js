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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDIMO.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDIMO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M6.465 7.219c-.962 0-1.778.866-1.778 1.856v9.394H3V9.075c0-1.958 1.552-3.544 3.465-3.544S9.75 7.117 9.75 9.075v6.722c0 .506.422.984 1.08.984.337 0 .652-.264.804-.58l4.349-9.162a2.64 2.64 0 0 1 2.373-1.508c1.463 0 2.644 1.21 2.644 2.7V18.47h-1.688V8.23c0-.523-.45-1.012-.956-1.012-.354 0-.675.27-.832.596l-4.348 9.169a2.61 2.61 0 0 1-2.346 1.485c-1.446 0-2.768-1.193-2.768-2.672V9.075c0-.99-.63-1.856-1.597-1.856'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M6.465 7.219c-.962 0-1.778.866-1.778 1.856v9.394H3V9.075c0-1.958 1.552-3.544 3.465-3.544S9.75 7.117 9.75 9.075v6.722c0 .506.422.984 1.08.984.337 0 .652-.264.804-.58l4.349-9.162a2.64 2.64 0 0 1 2.373-1.508c1.463 0 2.644 1.21 2.644 2.7V18.47h-1.688V8.23c0-.523-.45-1.012-.956-1.012-.354 0-.675.27-.832.596l-4.348 9.169a2.61 2.61 0 0 1-2.346 1.485c-1.446 0-2.768-1.193-2.768-2.672V9.075c0-.99-.63-1.856-1.597-1.856'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#DIMO__a)'
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
                        d: 'M7.08 7.75c-.855 0-1.58.77-1.58 1.65v8.35H4V9.4c0-1.74 1.38-3.15 3.08-3.15S10 7.66 10 9.4v5.975c0 .45.375.875.96.875.3 0 .58-.235.715-.515L15.54 7.59a2.35 2.35 0 0 1 2.11-1.34c1.3 0 2.35 1.075 2.35 2.4v9.1h-1.5v-9.1c0-.465-.4-.9-.85-.9-.315 0-.6.24-.74.53l-3.865 8.15a2.32 2.32 0 0 1-2.085 1.32c-1.285 0-2.46-1.06-2.46-2.375V9.4c0-.88-.56-1.65-1.42-1.65'
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
                        id: 'DIMO__a'
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
 * @component @name TokenDIMO
 * @description Web3Icon for TokenDIMO
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02LjQ2NSA3LjIxOWMtLjk2MiAwLTEuNzc4Ljg2Ni0xLjc3OCAxLjg1NnY5LjM5NEgzVjkuMDc1YzAtMS45NTggMS41NTItMy41NDQgMy40NjUtMy41NDRTOS43NSA3LjExNyA5Ljc1IDkuMDc1djYuNzIyYzAgLjUwNi40MjIuOTg0IDEuMDguOTg0LjMzNyAwIC42NTItLjI2NC44MDQtLjU4bDQuMzQ5LTkuMTYyYTIuNjQgMi42NCAwIDAgMSAyLjM3My0xLjUwOGMxLjQ2MyAwIDIuNjQ0IDEuMjEgMi42NDQgMi43VjE4LjQ3aC0xLjY4OFY4LjIzYzAtLjUyMy0uNDUtMS4wMTItLjk1Ni0xLjAxMi0uMzU0IDAtLjY3NS4yNy0uODMyLjU5NmwtNC4zNDggOS4xNjlhMi42MSAyLjYxIDAgMCAxLTIuMzQ2IDEuNDg1Yy0xLjQ0NiAwLTIuNzY4LTEuMTkzLTIuNzY4LTIuNjcyVjkuMDc1YzAtLjk5LS42My0xLjg1Ni0xLjU5Ny0xLjg1NiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02LjQ2NSA3LjIxOWMtLjk2MiAwLTEuNzc4Ljg2Ni0xLjc3OCAxLjg1NnY5LjM5NEgzVjkuMDc1YzAtMS45NTggMS41NTItMy41NDQgMy40NjUtMy41NDRTOS43NSA3LjExNyA5Ljc1IDkuMDc1djYuNzIyYzAgLjUwNi40MjIuOTg0IDEuMDguOTg0LjMzNyAwIC42NTItLjI2NC44MDQtLjU4bDQuMzQ5LTkuMTYyYTIuNjQgMi42NCAwIDAgMSAyLjM3My0xLjUwOGMxLjQ2MyAwIDIuNjQ0IDEuMjEgMi42NDQgMi43VjE4LjQ3aC0xLjY4OFY4LjIzYzAtLjUyMy0uNDUtMS4wMTItLjk1Ni0xLjAxMi0uMzU0IDAtLjY3NS4yNy0uODMyLjU5NmwtNC4zNDggOS4xNjlhMi42MSAyLjYxIDAgMCAxLTIuMzQ2IDEuNDg1Yy0xLjQ0NiAwLTIuNzY4LTEuMTkzLTIuNzY4LTIuNjcyVjkuMDc1YzAtLjk5LS42My0xLjg1Ni0xLjU5Ny0xLjg1NiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNESU1PX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNy4wOCA3Ljc1Yy0uODU1IDAtMS41OC43Ny0xLjU4IDEuNjV2OC4zNUg0VjkuNGMwLTEuNzQgMS4zOC0zLjE1IDMuMDgtMy4xNVMxMCA3LjY2IDEwIDkuNHY1Ljk3NWMwIC40NS4zNzUuODc1Ljk2Ljg3NS4zIDAgLjU4LS4yMzUuNzE1LS41MTVMMTUuNTQgNy41OWEyLjM1IDIuMzUgMCAwIDEgMi4xMS0xLjM0YzEuMyAwIDIuMzUgMS4wNzUgMi4zNSAyLjR2OS4xaC0xLjV2LTkuMWMwLS40NjUtLjQtLjktLjg1LS45LS4zMTUgMC0uNi4yNC0uNzQuNTNsLTMuODY1IDguMTVhMi4zMiAyLjMyIDAgMCAxLTIuMDg1IDEuMzJjLTEuMjg1IDAtMi40Ni0xLjA2LTIuNDYtMi4zNzVWOS40YzAtLjg4LS41Ni0xLjY1LTEuNDItMS42NSIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJESU1PX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/DIMO
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDIMO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDIMO', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_155pfed._.js.map