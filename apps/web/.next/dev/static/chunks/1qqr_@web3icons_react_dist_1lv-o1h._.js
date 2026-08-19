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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMANC.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMANC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#252060',
                d: 'M8.106 6.788A5.13 5.13 0 0 0 3 11.937v4.088a1.184 1.184 0 0 0 2.368 0V12.07c0-1.61 1.142-2.913 2.738-2.913 1.601 0 2.473 1.307 2.473 2.913v3.822a1.32 1.32 0 1 0 2.638 0v-3.955c0-2.842-2.287-5.149-5.11-5.149'
            }
        ],
        [
            'path',
            {
                fill: '#252060',
                d: 'M15.894 6.788c-2.824 0-5.315 2.307-5.315 5.149v3.851a1.42 1.42 0 0 0 2.842 0V12.07c0-1.61.872-2.913 2.473-2.913 1.596 0 2.737 1.307 2.737 2.913v3.955a1.184 1.184 0 0 0 2.369 0v-4.088c0-2.842-2.288-5.149-5.106-5.149'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M8.106 6.788A5.13 5.13 0 0 0 3 11.937v4.088a1.184 1.184 0 1 0 2.368 0V12.07c0-1.61 1.142-2.914 2.738-2.914 1.601 0 2.473 1.308 2.473 2.914v3.822a1.32 1.32 0 0 0 2.638 0v-3.955c0-2.842-2.287-5.149-5.11-5.149'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M15.894 6.788c-2.824 0-5.315 2.307-5.315 5.149v3.851a1.42 1.42 0 1 0 2.842 0V12.07c0-1.61.872-2.914 2.473-2.914 1.596 0 2.737 1.308 2.737 2.914v3.955a1.184 1.184 0 0 0 2.369 0v-4.088c0-2.842-2.288-5.149-5.106-5.149'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MANC__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#252060',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M8.539 7.367A4.56 4.56 0 0 0 4 11.944v3.634a1.053 1.053 0 1 0 2.105 0v-3.516c0-1.432 1.015-2.59 2.434-2.59 1.423 0 2.198 1.163 2.198 2.59v3.398a1.173 1.173 0 0 0 2.345 0v-3.516c0-2.526-2.033-4.577-4.543-4.577'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M15.461 7.367c-2.51 0-4.724 2.05-4.724 4.577v3.423a1.263 1.263 0 1 0 2.526 0v-3.305c0-1.432.775-2.59 2.198-2.59 1.42 0 2.434 1.163 2.434 2.59v3.516a1.053 1.053 0 0 0 2.105 0v-3.634c0-2.526-2.034-4.577-4.539-4.577'
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
                        id: 'MANC__a'
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
 * @component @name TokenMANC
 * @description Web3Icon for TokenMANC
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMyNTIwNjAiIGQ9Ik04LjEwNiA2Ljc4OEE1LjEzIDUuMTMgMCAwIDAgMyAxMS45Mzd2NC4wODhhMS4xODQgMS4xODQgMCAwIDAgMi4zNjggMFYxMi4wN2MwLTEuNjEgMS4xNDItMi45MTMgMi43MzgtMi45MTMgMS42MDEgMCAyLjQ3MyAxLjMwNyAyLjQ3MyAyLjkxM3YzLjgyMmExLjMyIDEuMzIgMCAxIDAgMi42MzggMHYtMy45NTVjMC0yLjg0Mi0yLjI4Ny01LjE0OS01LjExLTUuMTQ5Ii8+CiAgICA8cGF0aCBmaWxsPSIjMjUyMDYwIiBkPSJNMTUuODk0IDYuNzg4Yy0yLjgyNCAwLTUuMzE1IDIuMzA3LTUuMzE1IDUuMTQ5djMuODUxYTEuNDIgMS40MiAwIDAgMCAyLjg0MiAwVjEyLjA3YzAtMS42MS44NzItMi45MTMgMi40NzMtMi45MTMgMS41OTYgMCAyLjczNyAxLjMwNyAyLjczNyAyLjkxM3YzLjk1NWExLjE4NCAxLjE4NCAwIDAgMCAyLjM2OSAwdi00LjA4OGMwLTIuODQyLTIuMjg4LTUuMTQ5LTUuMTA2LTUuMTQ5Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04LjEwNiA2Ljc4OEE1LjEzIDUuMTMgMCAwIDAgMyAxMS45Mzd2NC4wODhhMS4xODQgMS4xODQgMCAxIDAgMi4zNjggMFYxMi4wN2MwLTEuNjEgMS4xNDItMi45MTQgMi43MzgtMi45MTQgMS42MDEgMCAyLjQ3MyAxLjMwOCAyLjQ3MyAyLjkxNHYzLjgyMmExLjMyIDEuMzIgMCAwIDAgMi42MzggMHYtMy45NTVjMC0yLjg0Mi0yLjI4Ny01LjE0OS01LjExLTUuMTQ5Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTUuODk0IDYuNzg4Yy0yLjgyNCAwLTUuMzE1IDIuMzA3LTUuMzE1IDUuMTQ5djMuODUxYTEuNDIgMS40MiAwIDEgMCAyLjg0MiAwVjEyLjA3YzAtMS42MS44NzItMi45MTQgMi40NzMtMi45MTQgMS41OTYgMCAyLjczNyAxLjMwOCAyLjczNyAyLjkxNHYzLjk1NWExLjE4NCAxLjE4NCAwIDAgMCAyLjM2OSAwdi00LjA4OGMwLTIuODQyLTIuMjg4LTUuMTQ5LTUuMTA2LTUuMTQ5Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNQU5DX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzI1MjA2MCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNOC41MzkgNy4zNjdBNC41NiA0LjU2IDAgMCAwIDQgMTEuOTQ0djMuNjM0YTEuMDUzIDEuMDUzIDAgMSAwIDIuMTA1IDB2LTMuNTE2YzAtMS40MzIgMS4wMTUtMi41OSAyLjQzNC0yLjU5IDEuNDIzIDAgMi4xOTggMS4xNjMgMi4xOTggMi41OXYzLjM5OGExLjE3MyAxLjE3MyAwIDAgMCAyLjM0NSAwdi0zLjUxNmMwLTIuNTI2LTIuMDMzLTQuNTc3LTQuNTQzLTQuNTc3Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE1LjQ2MSA3LjM2N2MtMi41MSAwLTQuNzI0IDIuMDUtNC43MjQgNC41Nzd2My40MjNhMS4yNjMgMS4yNjMgMCAxIDAgMi41MjYgMHYtMy4zMDVjMC0xLjQzMi43NzUtMi41OSAyLjE5OC0yLjU5IDEuNDIgMCAyLjQzNCAxLjE2MyAyLjQzNCAyLjU5djMuNTE2YTEuMDUzIDEuMDUzIDAgMCAwIDIuMTA1IDB2LTMuNjM0YzAtMi41MjYtMi4wMzQtNC41NzctNC41MzktNC41NzciLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iTUFOQ19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/MANC
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMANC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMANC', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1lv-o1h._.js.map