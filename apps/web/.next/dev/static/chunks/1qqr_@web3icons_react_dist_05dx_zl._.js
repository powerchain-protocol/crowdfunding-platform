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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMETA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMETA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M5.7 7.914v1.872c0 .22-.194.414-.414.414H3.405A.417.417 0 0 1 3 9.786V7.914c0-.22.18-.414.405-.414h1.881c.225 0 .414.193.414.414m2.745 2.736H6.573c-.225 0-.423.234-.423.45v4.981c0 .226.202.419.423.419H8.44c.225 0 .405-.23.405-.45V11.1c0-.22-.18-.45-.405-.45zm4.739 0h1.53c.224 0 .436.234.436.454v4.977c0 .22-.212.419-.432.419h-1.872c-.225 0-.396-.198-.396-.419v-4.576c0-.585-.661-1.3-1.26-1.3H9.705a.42.42 0 0 1-.41-.415V7.92c0-.221.185-.415.405-.415h1.904c.225 0 .391.194.391.415v1.665c0 .594.586 1.07 1.184 1.07zm5.85 0h1.53c.224 0 .436.234.436.454v4.977c0 .22-.212.419-.432.419h-1.872c-.225 0-.396-.198-.396-.419v-4.576c0-.585-.662-1.3-1.26-1.3h-1.485a.42.42 0 0 1-.41-.415V7.92c0-.221.185-.415.406-.415h1.903c.225 0 .392.194.392.415v1.665c0 .594.584 1.07 1.183 1.07z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M5.7 7.914v1.872c0 .22-.194.414-.414.414H3.405A.417.417 0 0 1 3 9.786V7.914c0-.22.18-.414.405-.414h1.881c.225 0 .414.193.414.414m2.745 2.736H6.573c-.225 0-.423.234-.423.45v4.981c0 .226.202.419.423.419H8.44c.225 0 .405-.23.405-.45V11.1c0-.22-.18-.45-.405-.45zm4.739 0h1.53c.224 0 .436.234.436.454v4.977c0 .22-.212.419-.432.419h-1.872c-.225 0-.396-.198-.396-.419v-4.576c0-.585-.661-1.3-1.26-1.3H9.705a.42.42 0 0 1-.41-.415V7.92c0-.221.185-.415.405-.415h1.904c.225 0 .391.194.391.415v1.665c0 .594.586 1.07 1.184 1.07zm5.85 0h1.53c.224 0 .436.234.436.454v4.977c0 .22-.212.419-.432.419h-1.872c-.225 0-.396-.198-.396-.419v-4.576c0-.585-.662-1.3-1.26-1.3h-1.485a.42.42 0 0 1-.41-.415V7.92c0-.221.185-.415.406-.415h1.903c.225 0 .392.194.392.415v1.665c0 .594.584 1.07 1.183 1.07z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#META__a)'
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
                        d: 'M6.4 8.368v1.664a.38.38 0 0 1-.368.368H4.36a.37.37 0 0 1-.36-.368V8.368C4 8.172 4.16 8 4.36 8h1.672c.2 0 .368.172.368.368M8.84 10.8H7.176c-.2 0-.376.208-.376.4v4.428c0 .2.18.372.376.372h1.66c.2 0 .36-.204.36-.4v-4.4c0-.196-.16-.4-.36-.4zm4.212 0h1.36c.2 0 .388.208.388.404v4.424c0 .196-.188.372-.384.372h-1.664c-.2 0-.352-.176-.352-.372V11.56c0-.52-.588-1.156-1.12-1.156H9.96a.37.37 0 0 1-.364-.368V8.372a.37.37 0 0 1 .36-.368h1.692c.2 0 .348.172.348.368v1.48c0 .528.52.952 1.052.952zm5.2 0h1.36c.2 0 .388.208.388.404v4.424c0 .196-.188.372-.384.372h-1.664c-.2 0-.352-.176-.352-.372V11.56c0-.52-.588-1.156-1.12-1.156h-1.32a.37.37 0 0 1-.364-.368V8.372a.37.37 0 0 1 .36-.368h1.692c.2 0 .348.172.348.368v1.48c0 .528.52.952 1.052.952z'
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
                        id: 'META__a'
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
 * @component @name TokenMETA
 * @description Web3Icon for TokenMETA
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjcgNy45MTR2MS44NzJjMCAuMjItLjE5NC40MTQtLjQxNC40MTRIMy40MDVBLjQxNy40MTcgMCAwIDEgMyA5Ljc4NlY3LjkxNGMwLS4yMi4xOC0uNDE0LjQwNS0uNDE0aDEuODgxYy4yMjUgMCAuNDE0LjE5My40MTQuNDE0bTIuNzQ1IDIuNzM2SDYuNTczYy0uMjI1IDAtLjQyMy4yMzQtLjQyMy40NXY0Ljk4MWMwIC4yMjYuMjAyLjQxOS40MjMuNDE5SDguNDRjLjIyNSAwIC40MDUtLjIzLjQwNS0uNDVWMTEuMWMwLS4yMi0uMTgtLjQ1LS40MDUtLjQ1em00LjczOSAwaDEuNTNjLjIyNCAwIC40MzYuMjM0LjQzNi40NTR2NC45NzdjMCAuMjItLjIxMi40MTktLjQzMi40MTloLTEuODcyYy0uMjI1IDAtLjM5Ni0uMTk4LS4zOTYtLjQxOXYtNC41NzZjMC0uNTg1LS42NjEtMS4zLTEuMjYtMS4zSDkuNzA1YS40Mi40MiAwIDAgMS0uNDEtLjQxNVY3LjkyYzAtLjIyMS4xODUtLjQxNS40MDUtLjQxNWgxLjkwNGMuMjI1IDAgLjM5MS4xOTQuMzkxLjQxNXYxLjY2NWMwIC41OTQuNTg2IDEuMDcgMS4xODQgMS4wN3ptNS44NSAwaDEuNTNjLjIyNCAwIC40MzYuMjM0LjQzNi40NTR2NC45NzdjMCAuMjItLjIxMi40MTktLjQzMi40MTloLTEuODcyYy0uMjI1IDAtLjM5Ni0uMTk4LS4zOTYtLjQxOXYtNC41NzZjMC0uNTg1LS42NjItMS4zLTEuMjYtMS4zaC0xLjQ4NWEuNDIuNDIgMCAwIDEtLjQxLS40MTVWNy45MmMwLS4yMjEuMTg1LS40MTUuNDA2LS40MTVoMS45MDNjLjIyNSAwIC4zOTIuMTk0LjM5Mi40MTV2MS42NjVjMCAuNTk0LjU4NCAxLjA3IDEuMTgzIDEuMDd6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjcgNy45MTR2MS44NzJjMCAuMjItLjE5NC40MTQtLjQxNC40MTRIMy40MDVBLjQxNy40MTcgMCAwIDEgMyA5Ljc4NlY3LjkxNGMwLS4yMi4xOC0uNDE0LjQwNS0uNDE0aDEuODgxYy4yMjUgMCAuNDE0LjE5My40MTQuNDE0bTIuNzQ1IDIuNzM2SDYuNTczYy0uMjI1IDAtLjQyMy4yMzQtLjQyMy40NXY0Ljk4MWMwIC4yMjYuMjAyLjQxOS40MjMuNDE5SDguNDRjLjIyNSAwIC40MDUtLjIzLjQwNS0uNDVWMTEuMWMwLS4yMi0uMTgtLjQ1LS40MDUtLjQ1em00LjczOSAwaDEuNTNjLjIyNCAwIC40MzYuMjM0LjQzNi40NTR2NC45NzdjMCAuMjItLjIxMi40MTktLjQzMi40MTloLTEuODcyYy0uMjI1IDAtLjM5Ni0uMTk4LS4zOTYtLjQxOXYtNC41NzZjMC0uNTg1LS42NjEtMS4zLTEuMjYtMS4zSDkuNzA1YS40Mi40MiAwIDAgMS0uNDEtLjQxNVY3LjkyYzAtLjIyMS4xODUtLjQxNS40MDUtLjQxNWgxLjkwNGMuMjI1IDAgLjM5MS4xOTQuMzkxLjQxNXYxLjY2NWMwIC41OTQuNTg2IDEuMDcgMS4xODQgMS4wN3ptNS44NSAwaDEuNTNjLjIyNCAwIC40MzYuMjM0LjQzNi40NTR2NC45NzdjMCAuMjItLjIxMi40MTktLjQzMi40MTloLTEuODcyYy0uMjI1IDAtLjM5Ni0uMTk4LS4zOTYtLjQxOXYtNC41NzZjMC0uNTg1LS42NjItMS4zLTEuMjYtMS4zaC0xLjQ4NWEuNDIuNDIgMCAwIDEtLjQxLS40MTVWNy45MmMwLS4yMjEuMTg1LS40MTUuNDA2LS40MTVoMS45MDNjLjIyNSAwIC4zOTIuMTk0LjM5Mi40MTV2MS42NjVjMCAuNTk0LjU4NCAxLjA3IDEuMTgzIDEuMDd6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNRVRBX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNi40IDguMzY4djEuNjY0YS4zOC4zOCAwIDAgMS0uMzY4LjM2OEg0LjM2YS4zNy4zNyAwIDAgMS0uMzYtLjM2OFY4LjM2OEM0IDguMTcyIDQuMTYgOCA0LjM2IDhoMS42NzJjLjIgMCAuMzY4LjE3Mi4zNjguMzY4TTguODQgMTAuOEg3LjE3NmMtLjIgMC0uMzc2LjIwOC0uMzc2LjR2NC40MjhjMCAuMi4xOC4zNzIuMzc2LjM3MmgxLjY2Yy4yIDAgLjM2LS4yMDQuMzYtLjR2LTQuNGMwLS4xOTYtLjE2LS40LS4zNi0uNHptNC4yMTIgMGgxLjM2Yy4yIDAgLjM4OC4yMDguMzg4LjQwNHY0LjQyNGMwIC4xOTYtLjE4OC4zNzItLjM4NC4zNzJoLTEuNjY0Yy0uMiAwLS4zNTItLjE3Ni0uMzUyLS4zNzJWMTEuNTZjMC0uNTItLjU4OC0xLjE1Ni0xLjEyLTEuMTU2SDkuOTZhLjM3LjM3IDAgMCAxLS4zNjQtLjM2OFY4LjM3MmEuMzcuMzcgMCAwIDEgLjM2LS4zNjhoMS42OTJjLjIgMCAuMzQ4LjE3Mi4zNDguMzY4djEuNDhjMCAuNTI4LjUyLjk1MiAxLjA1Mi45NTJ6bTUuMiAwaDEuMzZjLjIgMCAuMzg4LjIwOC4zODguNDA0djQuNDI0YzAgLjE5Ni0uMTg4LjM3Mi0uMzg0LjM3MmgtMS42NjRjLS4yIDAtLjM1Mi0uMTc2LS4zNTItLjM3MlYxMS41NmMwLS41Mi0uNTg4LTEuMTU2LTEuMTItMS4xNTZoLTEuMzJhLjM3LjM3IDAgMCAxLS4zNjQtLjM2OFY4LjM3MmEuMzcuMzcgMCAwIDEgLjM2LS4zNjhoMS42OTJjLjIgMCAuMzQ4LjE3Mi4zNDguMzY4djEuNDhjMCAuNTI4LjUyLjk1MiAxLjA1Mi45NTJ6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9Ik1FVEFfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/META
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMETA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMETA', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_05dx_zl._.js.map