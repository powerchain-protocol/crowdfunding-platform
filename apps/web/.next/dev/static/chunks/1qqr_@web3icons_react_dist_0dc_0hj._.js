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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPIKA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPIKA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FCE74F',
                d: 'M10.456 4.19c-1.309.397-2.274 1.755-2.274 4.62 0 2.737.61 4.03 1.773 4.974.1.082.225.127.354.125.306 0 .6-.202.6-.545V5.967C10.91 4.91 11.58 3 13.925 3c2.93 0 5.166 2.755 5.166 5.81 0 2.917-1.527 6.015-5.53 6.866-.355.071-.47.371-.47.72v3.584c0 .562-.365 1.02-1.091 1.02-.578 0-1.09-.458-1.09-1.02v-3.59c0-.348-.317-.643-.66-.73-2.074-.546-5.34-2.454-5.34-6.85 0-4.42 3.354-5.674 5.426-5.805a.545.545 0 0 1 .573.557c0 .273-.202.513-.453.627m2.635 8.917V5.771c0-.955.955-1.522 1.61-.824.872.928 1.663 2.373 1.663 4.397 0 2.449-1.168 3.812-2.226 4.461-.496.306-1.047-.109-1.047-.698',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M10.456 4.19c-1.309.397-2.274 1.755-2.274 4.62 0 2.737.61 4.03 1.773 4.974.1.082.225.127.354.125.306 0 .6-.202.6-.545V5.967C10.91 4.91 11.58 3 13.925 3c2.93 0 5.166 2.755 5.166 5.81 0 2.917-1.527 6.015-5.53 6.866-.355.071-.47.371-.47.72v3.584c0 .562-.365 1.02-1.091 1.02-.578 0-1.09-.458-1.09-1.02v-3.59c0-.348-.317-.643-.66-.73-2.074-.546-5.34-2.454-5.34-6.85 0-4.42 3.354-5.674 5.426-5.805a.545.545 0 0 1 .573.557c0 .273-.202.513-.453.627m2.635 8.917V5.771c0-.955.955-1.522 1.61-.824.872.928 1.663 2.373 1.663 4.397 0 2.449-1.168 3.812-2.226 4.461-.496.306-1.047-.109-1.047-.698',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#PIKA__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FCE74F',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M10.628 5.057c-1.164.354-2.022 1.561-2.022 4.107 0 2.434.543 3.583 1.576 4.421.088.074.2.113.315.112.272 0 .533-.18.533-.485V6.638c0-.941.597-2.638 2.682-2.638 2.603 0 4.591 2.448 4.591 5.164 0 2.594-1.358 5.347-4.916 6.104-.315.063-.417.33-.417.64v3.185c0 .5-.325.907-.97.907-.514 0-.97-.407-.97-.907v-3.19c0-.31-.28-.572-.586-.65-1.843-.485-4.747-2.181-4.747-6.09 0-3.927 2.982-5.042 4.824-5.158a.485.485 0 0 1 .51.494c0 .243-.18.456-.403.558m2.342 7.927V6.463c0-.848.848-1.353 1.43-.732.776.824 1.479 2.109 1.479 3.908 0 2.177-1.038 3.389-1.978 3.966-.442.271-.931-.097-.931-.62',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
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
                        id: 'PIKA__a'
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
 * @component @name TokenPIKA
 * @description Web3Icon for TokenPIKA
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGQ0U3NEYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQ1NiA0LjE5Yy0xLjMwOS4zOTctMi4yNzQgMS43NTUtMi4yNzQgNC42MiAwIDIuNzM3LjYxIDQuMDMgMS43NzMgNC45NzQuMS4wODIuMjI1LjEyNy4zNTQuMTI1LjMwNiAwIC42LS4yMDIuNi0uNTQ1VjUuOTY3QzEwLjkxIDQuOTEgMTEuNTggMyAxMy45MjUgM2MyLjkzIDAgNS4xNjYgMi43NTUgNS4xNjYgNS44MSAwIDIuOTE3LTEuNTI3IDYuMDE1LTUuNTMgNi44NjYtLjM1NS4wNzEtLjQ3LjM3MS0uNDcuNzJ2My41ODRjMCAuNTYyLS4zNjUgMS4wMi0xLjA5MSAxLjAyLS41NzggMC0xLjA5LS40NTgtMS4wOS0xLjAydi0zLjU5YzAtLjM0OC0uMzE3LS42NDMtLjY2LS43My0yLjA3NC0uNTQ2LTUuMzQtMi40NTQtNS4zNC02Ljg1IDAtNC40MiAzLjM1NC01LjY3NCA1LjQyNi01LjgwNWEuNTQ1LjU0NSAwIDAgMSAuNTczLjU1N2MwIC4yNzMtLjIwMi41MTMtLjQ1My42MjdtMi42MzUgOC45MTdWNS43NzFjMC0uOTU1Ljk1NS0xLjUyMiAxLjYxLS44MjQuODcyLjkyOCAxLjY2MyAyLjM3MyAxLjY2MyA0LjM5NyAwIDIuNDQ5LTEuMTY4IDMuODEyLTIuMjI2IDQuNDYxLS40OTYuMzA2LTEuMDQ3LS4xMDktMS4wNDctLjY5OCIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQ1NiA0LjE5Yy0xLjMwOS4zOTctMi4yNzQgMS43NTUtMi4yNzQgNC42MiAwIDIuNzM3LjYxIDQuMDMgMS43NzMgNC45NzQuMS4wODIuMjI1LjEyNy4zNTQuMTI1LjMwNiAwIC42LS4yMDIuNi0uNTQ1VjUuOTY3QzEwLjkxIDQuOTEgMTEuNTggMyAxMy45MjUgM2MyLjkzIDAgNS4xNjYgMi43NTUgNS4xNjYgNS44MSAwIDIuOTE3LTEuNTI3IDYuMDE1LTUuNTMgNi44NjYtLjM1NS4wNzEtLjQ3LjM3MS0uNDcuNzJ2My41ODRjMCAuNTYyLS4zNjUgMS4wMi0xLjA5MSAxLjAyLS41NzggMC0xLjA5LS40NTgtMS4wOS0xLjAydi0zLjU5YzAtLjM0OC0uMzE3LS42NDMtLjY2LS43My0yLjA3NC0uNTQ2LTUuMzQtMi40NTQtNS4zNC02Ljg1IDAtNC40MiAzLjM1NC01LjY3NCA1LjQyNi01LjgwNWEuNTQ1LjU0NSAwIDAgMSAuNTczLjU1N2MwIC4yNzMtLjIwMi41MTMtLjQ1My42MjdtMi42MzUgOC45MTdWNS43NzFjMC0uOTU1Ljk1NS0xLjUyMiAxLjYxLS44MjQuODcyLjkyOCAxLjY2MyAyLjM3MyAxLjY2MyA0LjM5NyAwIDIuNDQ5LTEuMTY4IDMuODEyLTIuMjI2IDQuNDYxLS40OTYuMzA2LTEuMDQ3LS4xMDktMS4wNDctLjY5OCIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQSUtBX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZDRTc0RiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC42MjggNS4wNTdjLTEuMTY0LjM1NC0yLjAyMiAxLjU2MS0yLjAyMiA0LjEwNyAwIDIuNDM0LjU0MyAzLjU4MyAxLjU3NiA0LjQyMS4wODguMDc0LjIuMTEzLjMxNS4xMTIuMjcyIDAgLjUzMy0uMTguNTMzLS40ODVWNi42MzhjMC0uOTQxLjU5Ny0yLjYzOCAyLjY4Mi0yLjYzOCAyLjYwMyAwIDQuNTkxIDIuNDQ4IDQuNTkxIDUuMTY0IDAgMi41OTQtMS4zNTggNS4zNDctNC45MTYgNi4xMDQtLjMxNS4wNjMtLjQxNy4zMy0uNDE3LjY0djMuMTg1YzAgLjUtLjMyNS45MDctLjk3LjkwNy0uNTE0IDAtLjk3LS40MDctLjk3LS45MDd2LTMuMTljMC0uMzEtLjI4LS41NzItLjU4Ni0uNjUtMS44NDMtLjQ4NS00Ljc0Ny0yLjE4MS00Ljc0Ny02LjA5IDAtMy45MjcgMi45ODItNS4wNDIgNC44MjQtNS4xNThhLjQ4NS40ODUgMCAwIDEgLjUxLjQ5NGMwIC4yNDMtLjE4LjQ1Ni0uNDAzLjU1OG0yLjM0MiA3LjkyN1Y2LjQ2M2MwLS44NDguODQ4LTEuMzUzIDEuNDMtLjczMi43NzYuODI0IDEuNDc5IDIuMTA5IDEuNDc5IDMuOTA4IDAgMi4xNzctMS4wMzggMy4zODktMS45NzggMy45NjYtLjQ0Mi4yNzEtLjkzMS0uMDk3LS45MzEtLjYyIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iUElLQV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/PIKA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPIKA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPIKA', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0dc_0hj._.js.map