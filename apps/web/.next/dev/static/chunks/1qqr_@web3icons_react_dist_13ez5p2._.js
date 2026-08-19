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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDATA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDATA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#E9570F',
                d: 'M8.824 9.618a5.294 5.294 0 0 1 5.294-5.295V3.265a6.353 6.353 0 0 0-6.353 6.353zm5.294-3.706a3.706 3.706 0 0 0-3.706 3.706h-1.06a4.765 4.765 0 0 1 4.766-4.765zm0 1.588A2.12 2.12 0 0 0 12 9.618h-1.059a3.177 3.177 0 0 1 3.177-3.177zm-4.765 7.412a5.294 5.294 0 0 1-5.294-5.294H3a6.353 6.353 0 0 0 6.353 6.352zM5.647 9.618a3.706 3.706 0 0 0 3.706 3.705v1.06a4.765 4.765 0 0 1-4.765-4.765zm1.588 0a2.12 2.12 0 0 0 2.118 2.117v1.059a3.177 3.177 0 0 1-3.177-3.176zm7.412-.53a5.294 5.294 0 0 1 5.294 5.294H21a6.353 6.353 0 0 0-6.353-6.353zm3.706 5.294a3.706 3.706 0 0 0-3.706-3.706V9.618a4.765 4.765 0 0 1 4.765 4.764zm-1.588 0a2.12 2.12 0 0 0-2.118-2.117v-1.06a3.177 3.177 0 0 1 3.176 3.177zm-5.295 0A2.12 2.12 0 0 1 9.354 16.5v1.059a3.176 3.176 0 0 0 3.177-3.177zm1.589 0a3.706 3.706 0 0 1-3.706 3.706v1.059a4.765 4.765 0 0 0 4.765-4.765zm-3.706 5.294a5.294 5.294 0 0 0 5.294-5.294h1.059a6.353 6.353 0 0 1-6.353 6.353z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M8.824 9.618a5.294 5.294 0 0 1 5.294-5.295V3.265a6.353 6.353 0 0 0-6.353 6.353zm5.294-3.706a3.706 3.706 0 0 0-3.706 3.706h-1.06a4.765 4.765 0 0 1 4.766-4.765zm0 1.588A2.12 2.12 0 0 0 12 9.618h-1.059a3.176 3.176 0 0 1 3.177-3.177zm-4.765 7.412a5.294 5.294 0 0 1-5.294-5.294H3a6.353 6.353 0 0 0 6.353 6.352zM5.647 9.618a3.706 3.706 0 0 0 3.706 3.705v1.06a4.765 4.765 0 0 1-4.765-4.765zm1.588 0a2.12 2.12 0 0 0 2.118 2.117v1.059a3.176 3.176 0 0 1-3.177-3.176zm7.412-.53a5.294 5.294 0 0 1 5.294 5.294H21a6.353 6.353 0 0 0-6.353-6.353zm3.706 5.294a3.706 3.706 0 0 0-3.706-3.706V9.618a4.765 4.765 0 0 1 4.765 4.764zm-1.588 0a2.12 2.12 0 0 0-2.118-2.117v-1.06a3.176 3.176 0 0 1 3.176 3.177zm-5.294 0A2.117 2.117 0 0 1 9.353 16.5v1.059a3.177 3.177 0 0 0 3.176-3.177zm1.588 0a3.706 3.706 0 0 1-3.706 3.706v1.059a4.765 4.765 0 0 0 4.765-4.765zm-3.706 5.294a5.294 5.294 0 0 0 5.294-5.294h1.059a6.353 6.353 0 0 1-6.353 6.353z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#DATA__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#E9570F',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M9.176 9.882a4.705 4.705 0 0 1 4.706-4.705v-.942a5.647 5.647 0 0 0-5.647 5.647zm4.706-3.294a3.294 3.294 0 0 0-3.294 3.294h-.94a4.236 4.236 0 0 1 4.234-4.235zm0 1.412A1.88 1.88 0 0 0 12 9.882h-.941a2.823 2.823 0 0 1 2.823-2.823zm-4.235 6.588a4.706 4.706 0 0 1-4.706-4.706H4a5.647 5.647 0 0 0 5.647 5.648zM6.353 9.882a3.294 3.294 0 0 0 3.294 3.295v.94a4.235 4.235 0 0 1-4.235-4.235zm1.412 0a1.883 1.883 0 0 0 1.882 1.883v.941a2.824 2.824 0 0 1-2.823-2.824zm6.588-.47a4.706 4.706 0 0 1 4.706 4.706H20a5.647 5.647 0 0 0-5.647-5.647zm3.294 4.706a3.294 3.294 0 0 0-3.294-3.294v-.942a4.236 4.236 0 0 1 4.235 4.236zm-1.412 0a1.88 1.88 0 0 0-1.882-1.883v-.94a2.823 2.823 0 0 1 2.824 2.823zm-4.706 0A1.883 1.883 0 0 1 9.647 16v.941a2.824 2.824 0 0 0 2.824-2.823zm1.412 0a3.294 3.294 0 0 1-3.294 3.294v.941a4.235 4.235 0 0 0 4.235-4.235zm-3.294 4.706a4.706 4.706 0 0 0 4.706-4.706h.941a5.647 5.647 0 0 1-5.647 5.647z'
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
                        id: 'DATA__a'
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
 * @component @name TokenDATA
 * @description Web3Icon for TokenDATA
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNFOTU3MEYiIGQ9Ik04LjgyNCA5LjYxOGE1LjI5NCA1LjI5NCAwIDAgMSA1LjI5NC01LjI5NVYzLjI2NWE2LjM1MyA2LjM1MyAwIDAgMC02LjM1MyA2LjM1M3ptNS4yOTQtMy43MDZhMy43MDYgMy43MDYgMCAwIDAtMy43MDYgMy43MDZoLTEuMDZhNC43NjUgNC43NjUgMCAwIDEgNC43NjYtNC43NjV6bTAgMS41ODhBMi4xMiAyLjEyIDAgMCAwIDEyIDkuNjE4aC0xLjA1OWEzLjE3NyAzLjE3NyAwIDAgMSAzLjE3Ny0zLjE3N3ptLTQuNzY1IDcuNDEyYTUuMjk0IDUuMjk0IDAgMCAxLTUuMjk0LTUuMjk0SDNhNi4zNTMgNi4zNTMgMCAwIDAgNi4zNTMgNi4zNTJ6TTUuNjQ3IDkuNjE4YTMuNzA2IDMuNzA2IDAgMCAwIDMuNzA2IDMuNzA1djEuMDZhNC43NjUgNC43NjUgMCAwIDEtNC43NjUtNC43NjV6bTEuNTg4IDBhMi4xMiAyLjEyIDAgMCAwIDIuMTE4IDIuMTE3djEuMDU5YTMuMTc3IDMuMTc3IDAgMCAxLTMuMTc3LTMuMTc2em03LjQxMi0uNTNhNS4yOTQgNS4yOTQgMCAwIDEgNS4yOTQgNS4yOTRIMjFhNi4zNTMgNi4zNTMgMCAwIDAtNi4zNTMtNi4zNTN6bTMuNzA2IDUuMjk0YTMuNzA2IDMuNzA2IDAgMCAwLTMuNzA2LTMuNzA2VjkuNjE4YTQuNzY1IDQuNzY1IDAgMCAxIDQuNzY1IDQuNzY0em0tMS41ODggMGEyLjEyIDIuMTIgMCAwIDAtMi4xMTgtMi4xMTd2LTEuMDZhMy4xNzcgMy4xNzcgMCAwIDEgMy4xNzYgMy4xNzd6bS01LjI5NSAwQTIuMTIgMi4xMiAwIDAgMSA5LjM1NCAxNi41djEuMDU5YTMuMTc2IDMuMTc2IDAgMCAwIDMuMTc3LTMuMTc3em0xLjU4OSAwYTMuNzA2IDMuNzA2IDAgMCAxLTMuNzA2IDMuNzA2djEuMDU5YTQuNzY1IDQuNzY1IDAgMCAwIDQuNzY1LTQuNzY1em0tMy43MDYgNS4yOTRhNS4yOTQgNS4yOTQgMCAwIDAgNS4yOTQtNS4yOTRoMS4wNTlhNi4zNTMgNi4zNTMgMCAwIDEtNi4zNTMgNi4zNTN6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04LjgyNCA5LjYxOGE1LjI5NCA1LjI5NCAwIDAgMSA1LjI5NC01LjI5NVYzLjI2NWE2LjM1MyA2LjM1MyAwIDAgMC02LjM1MyA2LjM1M3ptNS4yOTQtMy43MDZhMy43MDYgMy43MDYgMCAwIDAtMy43MDYgMy43MDZoLTEuMDZhNC43NjUgNC43NjUgMCAwIDEgNC43NjYtNC43NjV6bTAgMS41ODhBMi4xMiAyLjEyIDAgMCAwIDEyIDkuNjE4aC0xLjA1OWEzLjE3NiAzLjE3NiAwIDAgMSAzLjE3Ny0zLjE3N3ptLTQuNzY1IDcuNDEyYTUuMjk0IDUuMjk0IDAgMCAxLTUuMjk0LTUuMjk0SDNhNi4zNTMgNi4zNTMgMCAwIDAgNi4zNTMgNi4zNTJ6TTUuNjQ3IDkuNjE4YTMuNzA2IDMuNzA2IDAgMCAwIDMuNzA2IDMuNzA1djEuMDZhNC43NjUgNC43NjUgMCAwIDEtNC43NjUtNC43NjV6bTEuNTg4IDBhMi4xMiAyLjEyIDAgMCAwIDIuMTE4IDIuMTE3djEuMDU5YTMuMTc2IDMuMTc2IDAgMCAxLTMuMTc3LTMuMTc2em03LjQxMi0uNTNhNS4yOTQgNS4yOTQgMCAwIDEgNS4yOTQgNS4yOTRIMjFhNi4zNTMgNi4zNTMgMCAwIDAtNi4zNTMtNi4zNTN6bTMuNzA2IDUuMjk0YTMuNzA2IDMuNzA2IDAgMCAwLTMuNzA2LTMuNzA2VjkuNjE4YTQuNzY1IDQuNzY1IDAgMCAxIDQuNzY1IDQuNzY0em0tMS41ODggMGEyLjEyIDIuMTIgMCAwIDAtMi4xMTgtMi4xMTd2LTEuMDZhMy4xNzYgMy4xNzYgMCAwIDEgMy4xNzYgMy4xNzd6bS01LjI5NCAwQTIuMTE3IDIuMTE3IDAgMCAxIDkuMzUzIDE2LjV2MS4wNTlhMy4xNzcgMy4xNzcgMCAwIDAgMy4xNzYtMy4xNzd6bTEuNTg4IDBhMy43MDYgMy43MDYgMCAwIDEtMy43MDYgMy43MDZ2MS4wNTlhNC43NjUgNC43NjUgMCAwIDAgNC43NjUtNC43NjV6bS0zLjcwNiA1LjI5NGE1LjI5NCA1LjI5NCAwIDAgMCA1LjI5NC01LjI5NGgxLjA1OWE2LjM1MyA2LjM1MyAwIDAgMS02LjM1MyA2LjM1M3oiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNEQVRBX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0U5NTcwRiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNOS4xNzYgOS44ODJhNC43MDUgNC43MDUgMCAwIDEgNC43MDYtNC43MDV2LS45NDJhNS42NDcgNS42NDcgMCAwIDAtNS42NDcgNS42NDd6bTQuNzA2LTMuMjk0YTMuMjk0IDMuMjk0IDAgMCAwLTMuMjk0IDMuMjk0aC0uOTRhNC4yMzYgNC4yMzYgMCAwIDEgNC4yMzQtNC4yMzV6bTAgMS40MTJBMS44OCAxLjg4IDAgMCAwIDEyIDkuODgyaC0uOTQxYTIuODIzIDIuODIzIDAgMCAxIDIuODIzLTIuODIzem0tNC4yMzUgNi41ODhhNC43MDYgNC43MDYgMCAwIDEtNC43MDYtNC43MDZINGE1LjY0NyA1LjY0NyAwIDAgMCA1LjY0NyA1LjY0OHpNNi4zNTMgOS44ODJhMy4yOTQgMy4yOTQgMCAwIDAgMy4yOTQgMy4yOTV2Ljk0YTQuMjM1IDQuMjM1IDAgMCAxLTQuMjM1LTQuMjM1em0xLjQxMiAwYTEuODgzIDEuODgzIDAgMCAwIDEuODgyIDEuODgzdi45NDFhMi44MjQgMi44MjQgMCAwIDEtMi44MjMtMi44MjR6bTYuNTg4LS40N2E0LjcwNiA0LjcwNiAwIDAgMSA0LjcwNiA0LjcwNkgyMGE1LjY0NyA1LjY0NyAwIDAgMC01LjY0Ny01LjY0N3ptMy4yOTQgNC43MDZhMy4yOTQgMy4yOTQgMCAwIDAtMy4yOTQtMy4yOTR2LS45NDJhNC4yMzYgNC4yMzYgMCAwIDEgNC4yMzUgNC4yMzZ6bS0xLjQxMiAwYTEuODggMS44OCAwIDAgMC0xLjg4Mi0xLjg4M3YtLjk0YTIuODIzIDIuODIzIDAgMCAxIDIuODI0IDIuODIzem0tNC43MDYgMEExLjg4MyAxLjg4MyAwIDAgMSA5LjY0NyAxNnYuOTQxYTIuODI0IDIuODI0IDAgMCAwIDIuODI0LTIuODIzem0xLjQxMiAwYTMuMjk0IDMuMjk0IDAgMCAxLTMuMjk0IDMuMjk0di45NDFhNC4yMzUgNC4yMzUgMCAwIDAgNC4yMzUtNC4yMzV6bS0zLjI5NCA0LjcwNmE0LjcwNiA0LjcwNiAwIDAgMCA0LjcwNi00LjcwNmguOTQxYTUuNjQ3IDUuNjQ3IDAgMCAxLTUuNjQ3IDUuNjQ3eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJEQVRBX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/DATA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDATA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDATA', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_13ez5p2._.js.map