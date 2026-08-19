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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenTRIAS.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenTRIAS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#TRIAS__a)',
                d: 'M13.396 3.085a.42.42 0 0 0-.563.053L3.65 13.756a.35.35 0 0 0 .076.527l9.847 6.647c.15.101.357.092.497-.023l6.235-5.163a.35.35 0 0 0 .118-.373L17.74 6.443zm-8.95 10.73 9.645.873.695-6.262-1.832-4.449zm9.578 1.482-8.865-.803 8.33 5.622zm.656.059 4.6.416-5.115 4.236zm5.004-.162-4.936-.447.675-6.085 1.836-1.541zm-2.781-8.6-1.609 1.35-1.568-3.806z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'TRIAS__a',
                        x1: '5.634',
                        x2: '16.474',
                        y1: '4.44',
                        y2: '16.349',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#79DCE5'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.807',
                                stopColor: '#12ABA9'
                            }
                        ]
                    ]
                ]
            ]
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M13.396 3.085a.42.42 0 0 0-.563.053L3.65 13.756a.35.35 0 0 0 .076.527l9.847 6.647c.15.101.357.092.497-.023l6.235-5.163a.35.35 0 0 0 .118-.373L17.74 6.443zm-8.95 10.73 9.645.873.695-6.262-1.832-4.449zm9.578 1.482-8.865-.803 8.33 5.622zm.656.059 4.6.416-5.115 4.236zm5.004-.162-4.936-.447.675-6.085 1.836-1.541zm-2.781-8.6-1.609 1.35-1.568-3.806z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#TRIAS__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#TRIAS__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.24 4.076a.37.37 0 0 0-.5.046l-8.163 9.44a.31.31 0 0 0 .068.468l8.753 5.908c.134.09.318.082.441-.02l5.543-4.59a.31.31 0 0 0 .105-.331L17.102 7.06zm-7.955 9.537 8.573.776.618-5.566-1.629-3.954zm8.513 1.317-7.88-.713 7.405 4.997zm.584.053 4.088.37-4.546 3.765zm4.448-.144-4.388-.397.6-5.409 1.632-1.37zm-2.472-7.645-1.43 1.201-1.394-3.384z',
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
                    'linearGradient',
                    {
                        id: 'TRIAS__b',
                        x1: '8.48',
                        x2: '13.986',
                        y1: '8.661',
                        y2: '14.71',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#79DCE5'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.807',
                                stopColor: '#12ABA9'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'TRIAS__a'
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
 * @component @name TokenTRIAS
 * @description Web3Icon for TokenTRIAS
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjVFJJQVNfX2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy4zOTYgMy4wODVhLjQyLjQyIDAgMCAwLS41NjMuMDUzTDMuNjUgMTMuNzU2YS4zNS4zNSAwIDAgMCAuMDc2LjUyN2w5Ljg0NyA2LjY0N2MuMTUuMTAxLjM1Ny4wOTIuNDk3LS4wMjNsNi4yMzUtNS4xNjNhLjM1LjM1IDAgMCAwIC4xMTgtLjM3M0wxNy43NCA2LjQ0M3ptLTguOTUgMTAuNzMgOS42NDUuODczLjY5NS02LjI2Mi0xLjgzMi00LjQ0OXptOS41NzggMS40ODItOC44NjUtLjgwMyA4LjMzIDUuNjIyem0uNjU2LjA1OSA0LjYuNDE2LTUuMTE1IDQuMjM2em01LjAwNC0uMTYyLTQuOTM2LS40NDcuNjc1LTYuMDg1IDEuODM2LTEuNTQxem0tMi43ODEtOC42LTEuNjA5IDEuMzUtMS41NjgtMy44MDZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iVFJJQVNfX2EiIHgxPSI1LjYzNCIgeDI9IjE2LjQ3NCIgeTE9IjQuNDQiIHkyPSIxNi4zNDkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzc5RENFNSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii44MDciIHN0b3AtY29sb3I9IiMxMkFCQTkiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjM5NiAzLjA4NWEuNDIuNDIgMCAwIDAtLjU2My4wNTNMMy42NSAxMy43NTZhLjM1LjM1IDAgMCAwIC4wNzYuNTI3bDkuODQ3IDYuNjQ3Yy4xNS4xMDEuMzU3LjA5Mi40OTctLjAyM2w2LjIzNS01LjE2M2EuMzUuMzUgMCAwIDAgLjExOC0uMzczTDE3Ljc0IDYuNDQzem0tOC45NSAxMC43MyA5LjY0NS44NzMuNjk1LTYuMjYyLTEuODMyLTQuNDQ5em05LjU3OCAxLjQ4Mi04Ljg2NS0uODAzIDguMzMgNS42MjJ6bS42NTYuMDU5IDQuNi40MTYtNS4xMTUgNC4yMzZ6bTUuMDA0LS4xNjItNC45MzYtLjQ0Ny42NzUtNi4wODUgMS44MzYtMS41NDF6bS0yLjc4MS04LjYtMS42MDkgMS4zNS0xLjU2OC0zLjgwNnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNUUklBU19fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjVFJJQVNfX2IpIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjI0IDQuMDc2YS4zNy4zNyAwIDAgMC0uNS4wNDZsLTguMTYzIDkuNDRhLjMxLjMxIDAgMCAwIC4wNjguNDY4bDguNzUzIDUuOTA4Yy4xMzQuMDkuMzE4LjA4Mi40NDEtLjAybDUuNTQzLTQuNTlhLjMxLjMxIDAgMCAwIC4xMDUtLjMzMUwxNy4xMDIgNy4wNnptLTcuOTU1IDkuNTM3IDguNTczLjc3Ni42MTgtNS41NjYtMS42MjktMy45NTR6bTguNTEzIDEuMzE3LTcuODgtLjcxMyA3LjQwNSA0Ljk5N3ptLjU4NC4wNTMgNC4wODguMzctNC41NDYgMy43NjV6bTQuNDQ4LS4xNDQtNC4zODgtLjM5Ny42LTUuNDA5IDEuNjMyLTEuMzd6bS0yLjQ3Mi03LjY0NS0xLjQzIDEuMjAxLTEuMzk0LTMuMzg0eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlRSSUFTX19iIiB4MT0iOC40OCIgeDI9IjEzLjk4NiIgeTE9IjguNjYxIiB5Mj0iMTQuNzEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzc5RENFNSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii44MDciIHN0b3AtY29sb3I9IiMxMkFCQTkiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iVFJJQVNfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/TRIAS
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenTRIAS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenTRIAS', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0204ao2._.js.map