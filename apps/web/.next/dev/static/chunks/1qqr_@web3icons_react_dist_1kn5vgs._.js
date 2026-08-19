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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/wallets/WalletUnipass.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>WalletUnipass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#42EAB2',
                d: 'M16.52 6.287a.58.58 0 0 0-.176-.415.6.6 0 0 0-.424-.172h-3.3a.6.6 0 0 0-.424.172.58.58 0 0 0-.176.415v3.099a.58.58 0 0 0 .176.414c.113.11.265.171.424.171h3.263a.55.55 0 0 1 .424.175.52.52 0 0 1 .13.431c-.373 1.783-1.903 3.167-3.818 3.41a.67.67 0 0 0-.42.201.64.64 0 0 0-.18.421v3.1a.55.55 0 0 0 .175.41.57.57 0 0 0 .426.157c4.486-.28 8.075-3.681 8.38-7.937a.55.55 0 0 0-.16-.416.57.57 0 0 0-.42-.17h-3.3a.6.6 0 0 1-.425-.172.58.58 0 0 1-.176-.415zM7.5 17.713a.58.58 0 0 1-.176.415.6.6 0 0 1-.424.172H3.6a.6.6 0 0 1-.424-.172.58.58 0 0 1-.176-.415v-3.099c0-.155.063-.304.176-.414a.6.6 0 0 1 .423-.171h3.264a.55.55 0 0 0 .426-.178.52.52 0 0 0 .127-.434 4.33 4.33 0 0 0-1.35-2.302 4.5 4.5 0 0 0-2.468-1.106.67.67 0 0 1-.418-.202.64.64 0 0 1-.18-.421v-3.1a.55.55 0 0 1 .174-.41.57.57 0 0 1 .427-.157c4.486.282 8.072 3.681 8.378 7.937a.55.55 0 0 1-.159.416.57.57 0 0 1-.42.17H8.1a.6.6 0 0 0-.424.172.58.58 0 0 0-.176.414z',
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
                d: 'M16.52 6.287a.58.58 0 0 0-.176-.415.6.6 0 0 0-.424-.172h-3.3a.6.6 0 0 0-.424.172.58.58 0 0 0-.176.415v3.099a.58.58 0 0 0 .176.414c.113.11.265.171.424.171h3.263a.55.55 0 0 1 .424.175.52.52 0 0 1 .13.431c-.373 1.783-1.903 3.167-3.818 3.41a.67.67 0 0 0-.42.201.64.64 0 0 0-.18.421v3.1a.55.55 0 0 0 .175.41.57.57 0 0 0 .426.157c4.486-.28 8.075-3.681 8.38-7.937a.55.55 0 0 0-.16-.416.57.57 0 0 0-.42-.17h-3.3a.6.6 0 0 1-.425-.172.58.58 0 0 1-.176-.415zM7.5 17.713a.58.58 0 0 1-.176.415.6.6 0 0 1-.424.172H3.6a.6.6 0 0 1-.424-.172.58.58 0 0 1-.176-.415v-3.099c0-.155.063-.304.176-.414a.6.6 0 0 1 .423-.171h3.264a.55.55 0 0 0 .426-.178.52.52 0 0 0 .127-.434 4.33 4.33 0 0 0-1.35-2.302 4.5 4.5 0 0 0-2.468-1.106.67.67 0 0 1-.418-.202.64.64 0 0 1-.18-.421v-3.1a.55.55 0 0 1 .174-.41.57.57 0 0 1 .427-.157c4.486.282 8.072 3.681 8.378 7.937a.55.55 0 0 1-.159.416.57.57 0 0 1-.42.17H8.1a.6.6 0 0 0-.424.172.58.58 0 0 0-.176.414z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#unipass__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#42EAB2',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M16.017 6.921a.52.52 0 0 0-.156-.368.54.54 0 0 0-.377-.153h-2.932a.54.54 0 0 0-.378.153.52.52 0 0 0-.156.368v2.755c0 .138.056.27.156.368a.54.54 0 0 0 .378.153h2.9a.5.5 0 0 1 .376.155.46.46 0 0 1 .115.383c-.33 1.585-1.69 2.815-3.392 3.03a.6.6 0 0 0-.373.18.57.57 0 0 0-.16.374v2.755a.5.5 0 0 0 .155.365.5.5 0 0 0 .379.14c3.987-.25 7.177-3.272 7.447-7.055a.48.48 0 0 0-.14-.37.5.5 0 0 0-.375-.151h-2.933a.54.54 0 0 1-.377-.153.52.52 0 0 1-.157-.369zM8 17.079c0 .138-.056.27-.156.368a.54.54 0 0 1-.377.153H4.533a.54.54 0 0 1-.377-.153.52.52 0 0 1-.156-.368v-2.755c0-.138.056-.27.156-.368a.54.54 0 0 1 .377-.152h2.9a.5.5 0 0 0 .38-.158.46.46 0 0 0 .113-.387 3.85 3.85 0 0 0-1.2-2.045 4 4 0 0 0-2.194-.984.6.6 0 0 1-.372-.18.57.57 0 0 1-.16-.374V6.921a.5.5 0 0 1 .155-.365.5.5 0 0 1 .379-.139c3.987.25 7.175 3.272 7.448 7.055a.48.48 0 0 1-.142.37.5.5 0 0 1-.373.151H8.534a.54.54 0 0 0-.378.152.52.52 0 0 0-.156.368z',
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
                        id: 'unipass__a'
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
 * @component @name WalletUnipass
 * @description Web3Icon for WalletUnipass
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM0MkVBQjIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjUyIDYuMjg3YS41OC41OCAwIDAgMC0uMTc2LS40MTUuNi42IDAgMCAwLS40MjQtLjE3MmgtMy4zYS42LjYgMCAwIDAtLjQyNC4xNzIuNTguNTggMCAwIDAtLjE3Ni40MTV2My4wOTlhLjU4LjU4IDAgMCAwIC4xNzYuNDE0Yy4xMTMuMTEuMjY1LjE3MS40MjQuMTcxaDMuMjYzYS41NS41NSAwIDAgMSAuNDI0LjE3NS41Mi41MiAwIDAgMSAuMTMuNDMxYy0uMzczIDEuNzgzLTEuOTAzIDMuMTY3LTMuODE4IDMuNDFhLjY3LjY3IDAgMCAwLS40Mi4yMDEuNjQuNjQgMCAwIDAtLjE4LjQyMXYzLjFhLjU1LjU1IDAgMCAwIC4xNzUuNDEuNTcuNTcgMCAwIDAgLjQyNi4xNTdjNC40ODYtLjI4IDguMDc1LTMuNjgxIDguMzgtNy45MzdhLjU1LjU1IDAgMCAwLS4xNi0uNDE2LjU3LjU3IDAgMCAwLS40Mi0uMTdoLTMuM2EuNi42IDAgMCAxLS40MjUtLjE3Mi41OC41OCAwIDAgMS0uMTc2LS40MTV6TTcuNSAxNy43MTNhLjU4LjU4IDAgMCAxLS4xNzYuNDE1LjYuNiAwIDAgMS0uNDI0LjE3MkgzLjZhLjYuNiAwIDAgMS0uNDI0LS4xNzIuNTguNTggMCAwIDEtLjE3Ni0uNDE1di0zLjA5OWMwLS4xNTUuMDYzLS4zMDQuMTc2LS40MTRhLjYuNiAwIDAgMSAuNDIzLS4xNzFoMy4yNjRhLjU1LjU1IDAgMCAwIC40MjYtLjE3OC41Mi41MiAwIDAgMCAuMTI3LS40MzQgNC4zMyA0LjMzIDAgMCAwLTEuMzUtMi4zMDIgNC41IDQuNSAwIDAgMC0yLjQ2OC0xLjEwNi42Ny42NyAwIDAgMS0uNDE4LS4yMDIuNjQuNjQgMCAwIDEtLjE4LS40MjF2LTMuMWEuNTUuNTUgMCAwIDEgLjE3NC0uNDEuNTcuNTcgMCAwIDEgLjQyNy0uMTU3YzQuNDg2LjI4MiA4LjA3MiAzLjY4MSA4LjM3OCA3LjkzN2EuNTUuNTUgMCAwIDEtLjE1OS40MTYuNTcuNTcgMCAwIDEtLjQyLjE3SDguMWEuNi42IDAgMCAwLS40MjQuMTcyLjU4LjU4IDAgMCAwLS4xNzYuNDE0eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjUyIDYuMjg3YS41OC41OCAwIDAgMC0uMTc2LS40MTUuNi42IDAgMCAwLS40MjQtLjE3MmgtMy4zYS42LjYgMCAwIDAtLjQyNC4xNzIuNTguNTggMCAwIDAtLjE3Ni40MTV2My4wOTlhLjU4LjU4IDAgMCAwIC4xNzYuNDE0Yy4xMTMuMTEuMjY1LjE3MS40MjQuMTcxaDMuMjYzYS41NS41NSAwIDAgMSAuNDI0LjE3NS41Mi41MiAwIDAgMSAuMTMuNDMxYy0uMzczIDEuNzgzLTEuOTAzIDMuMTY3LTMuODE4IDMuNDFhLjY3LjY3IDAgMCAwLS40Mi4yMDEuNjQuNjQgMCAwIDAtLjE4LjQyMXYzLjFhLjU1LjU1IDAgMCAwIC4xNzUuNDEuNTcuNTcgMCAwIDAgLjQyNi4xNTdjNC40ODYtLjI4IDguMDc1LTMuNjgxIDguMzgtNy45MzdhLjU1LjU1IDAgMCAwLS4xNi0uNDE2LjU3LjU3IDAgMCAwLS40Mi0uMTdoLTMuM2EuNi42IDAgMCAxLS40MjUtLjE3Mi41OC41OCAwIDAgMS0uMTc2LS40MTV6TTcuNSAxNy43MTNhLjU4LjU4IDAgMCAxLS4xNzYuNDE1LjYuNiAwIDAgMS0uNDI0LjE3MkgzLjZhLjYuNiAwIDAgMS0uNDI0LS4xNzIuNTguNTggMCAwIDEtLjE3Ni0uNDE1di0zLjA5OWMwLS4xNTUuMDYzLS4zMDQuMTc2LS40MTRhLjYuNiAwIDAgMSAuNDIzLS4xNzFoMy4yNjRhLjU1LjU1IDAgMCAwIC40MjYtLjE3OC41Mi41MiAwIDAgMCAuMTI3LS40MzQgNC4zMyA0LjMzIDAgMCAwLTEuMzUtMi4zMDIgNC41IDQuNSAwIDAgMC0yLjQ2OC0xLjEwNi42Ny42NyAwIDAgMS0uNDE4LS4yMDIuNjQuNjQgMCAwIDEtLjE4LS40MjF2LTMuMWEuNTUuNTUgMCAwIDEgLjE3NC0uNDEuNTcuNTcgMCAwIDEgLjQyNy0uMTU3YzQuNDg2LjI4MiA4LjA3MiAzLjY4MSA4LjM3OCA3LjkzN2EuNTUuNTUgMCAwIDEtLjE1OS40MTYuNTcuNTcgMCAwIDEtLjQyLjE3SDguMWEuNi42IDAgMCAwLS40MjQuMTcyLjU4LjU4IDAgMCAwLS4xNzYuNDE0eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCN1bmlwYXNzX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzQyRUFCMiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi4wMTcgNi45MjFhLjUyLjUyIDAgMCAwLS4xNTYtLjM2OC41NC41NCAwIDAgMC0uMzc3LS4xNTNoLTIuOTMyYS41NC41NCAwIDAgMC0uMzc4LjE1My41Mi41MiAwIDAgMC0uMTU2LjM2OHYyLjc1NWMwIC4xMzguMDU2LjI3LjE1Ni4zNjhhLjU0LjU0IDAgMCAwIC4zNzguMTUzaDIuOWEuNS41IDAgMCAxIC4zNzYuMTU1LjQ2LjQ2IDAgMCAxIC4xMTUuMzgzYy0uMzMgMS41ODUtMS42OSAyLjgxNS0zLjM5MiAzLjAzYS42LjYgMCAwIDAtLjM3My4xOC41Ny41NyAwIDAgMC0uMTYuMzc0djIuNzU1YS41LjUgMCAwIDAgLjE1NS4zNjUuNS41IDAgMCAwIC4zNzkuMTRjMy45ODctLjI1IDcuMTc3LTMuMjcyIDcuNDQ3LTcuMDU1YS40OC40OCAwIDAgMC0uMTQtLjM3LjUuNSAwIDAgMC0uMzc1LS4xNTFoLTIuOTMzYS41NC41NCAwIDAgMS0uMzc3LS4xNTMuNTIuNTIgMCAwIDEtLjE1Ny0uMzY5ek04IDE3LjA3OWMwIC4xMzgtLjA1Ni4yNy0uMTU2LjM2OGEuNTQuNTQgMCAwIDEtLjM3Ny4xNTNINC41MzNhLjU0LjU0IDAgMCAxLS4zNzctLjE1My41Mi41MiAwIDAgMS0uMTU2LS4zNjh2LTIuNzU1YzAtLjEzOC4wNTYtLjI3LjE1Ni0uMzY4YS41NC41NCAwIDAgMSAuMzc3LS4xNTJoMi45YS41LjUgMCAwIDAgLjM4LS4xNTguNDYuNDYgMCAwIDAgLjExMy0uMzg3IDMuODUgMy44NSAwIDAgMC0xLjItMi4wNDUgNCA0IDAgMCAwLTIuMTk0LS45ODQuNi42IDAgMCAxLS4zNzItLjE4LjU3LjU3IDAgMCAxLS4xNi0uMzc0VjYuOTIxYS41LjUgMCAwIDEgLjE1NS0uMzY1LjUuNSAwIDAgMSAuMzc5LS4xMzljMy45ODcuMjUgNy4xNzUgMy4yNzIgNy40NDggNy4wNTVhLjQ4LjQ4IDAgMCAxLS4xNDIuMzcuNS41IDAgMCAxLS4zNzMuMTUxSDguNTM0YS41NC41NCAwIDAgMC0uMzc4LjE1Mi41Mi41MiAwIDAgMC0uMTU2LjM2OHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJ1bmlwYXNzX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/wallets/unipass
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const WalletUnipass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('WalletUnipass', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1kn5vgs._.js.map