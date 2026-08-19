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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkInk.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkInk
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#7757E2',
                d: 'M21 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0m-7.716 6.736c0 .61-.5 1.107-1.212 1.12l-.059.001h-.026a7.857 7.857 0 1 1 .083-15.714c.803.014 1.214.51 1.214 1.121 0 .622-.549 1.079-1.13 1.079-.583 0-.611 0-1.168.045-.557.044-1.133.501-1.133 1.12 0 .624.506 1.126 1.133 1.126h4.94c.625 0 1.131.502 1.131 1.121 0 .62-.506 1.122-1.131 1.122h-7.61c-.626 0-1.132.503-1.132 1.125 0 .62.506 1.121 1.133 1.121h3.836c.625 0 1.131.502 1.131 1.124 0 .619-.506 1.12-1.13 1.12h-1.168c-.627 0-1.133.503-1.133 1.122 0 .622.519 1.075 1.133 1.122l.133.01c.216.016.335.025.453.03.142.006.285.006.6.006.624 0 1.112.46 1.112 1.079',
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
                d: 'M21 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0m-7.716 6.736c0 .61-.5 1.107-1.212 1.12l-.059.001h-.026a7.857 7.857 0 1 1 .083-15.714c.803.014 1.214.51 1.214 1.121 0 .622-.549 1.079-1.13 1.079-.583 0-.611 0-1.168.045-.557.044-1.133.501-1.133 1.12 0 .624.506 1.126 1.133 1.126h4.94c.625 0 1.131.502 1.131 1.121 0 .62-.506 1.122-1.131 1.122h-7.61c-.626 0-1.132.503-1.132 1.125 0 .62.506 1.121 1.133 1.121h3.836c.625 0 1.131.502 1.131 1.124 0 .619-.506 1.12-1.13 1.12h-1.168c-.627 0-1.133.503-1.133 1.122 0 .622.519 1.075 1.133 1.122l.133.01c.216.016.335.025.453.03.142.006.285.006.6.006.624 0 1.112.46 1.112 1.079',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ink__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#7757E2',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M21 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0m-7.716 6.736c0 .61-.5 1.107-1.212 1.12l-.059.001h-.026a7.857 7.857 0 1 1 .083-15.714c.803.014 1.214.51 1.214 1.121 0 .622-.549 1.079-1.13 1.079-.583 0-.611 0-1.168.045-.557.044-1.133.501-1.133 1.12 0 .624.506 1.126 1.133 1.126h4.94c.625 0 1.131.502 1.131 1.121 0 .62-.506 1.122-1.131 1.122h-7.61c-.626 0-1.132.503-1.132 1.125 0 .62.506 1.121 1.133 1.121h3.836c.625 0 1.131.502 1.131 1.124 0 .619-.506 1.12-1.13 1.12h-1.168c-.627 0-1.133.503-1.133 1.122 0 .622.519 1.075 1.133 1.122l.133.01c.216.016.335.025.453.03.142.006.285.006.6.006.624 0 1.112.46 1.112 1.079',
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
                        id: 'ink__a'
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
 * @component @name NetworkInk
 * @description Web3Icon for NetworkInk
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM3NzU3RTIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIxIDEyYTkgOSAwIDEgMC0xOCAwIDkgOSAwIDAgMCAxOCAwbS03LjcxNiA2LjczNmMwIC42MS0uNSAxLjEwNy0xLjIxMiAxLjEybC0uMDU5LjAwMWgtLjAyNmE3Ljg1NyA3Ljg1NyAwIDEgMSAuMDgzLTE1LjcxNGMuODAzLjAxNCAxLjIxNC41MSAxLjIxNCAxLjEyMSAwIC42MjItLjU0OSAxLjA3OS0xLjEzIDEuMDc5LS41ODMgMC0uNjExIDAtMS4xNjguMDQ1LS41NTcuMDQ0LTEuMTMzLjUwMS0xLjEzMyAxLjEyIDAgLjYyNC41MDYgMS4xMjYgMS4xMzMgMS4xMjZoNC45NGMuNjI1IDAgMS4xMzEuNTAyIDEuMTMxIDEuMTIxIDAgLjYyLS41MDYgMS4xMjItMS4xMzEgMS4xMjJoLTcuNjFjLS42MjYgMC0xLjEzMi41MDMtMS4xMzIgMS4xMjUgMCAuNjIuNTA2IDEuMTIxIDEuMTMzIDEuMTIxaDMuODM2Yy42MjUgMCAxLjEzMS41MDIgMS4xMzEgMS4xMjQgMCAuNjE5LS41MDYgMS4xMi0xLjEzIDEuMTJoLTEuMTY4Yy0uNjI3IDAtMS4xMzMuNTAzLTEuMTMzIDEuMTIyIDAgLjYyMi41MTkgMS4wNzUgMS4xMzMgMS4xMjJsLjEzMy4wMWMuMjE2LjAxNi4zMzUuMDI1LjQ1My4wMy4xNDIuMDA2LjI4NS4wMDYuNi4wMDYuNjI0IDAgMS4xMTIuNDYgMS4xMTIgMS4wNzkiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIxIDEyYTkgOSAwIDEgMC0xOCAwIDkgOSAwIDAgMCAxOCAwbS03LjcxNiA2LjczNmMwIC42MS0uNSAxLjEwNy0xLjIxMiAxLjEybC0uMDU5LjAwMWgtLjAyNmE3Ljg1NyA3Ljg1NyAwIDEgMSAuMDgzLTE1LjcxNGMuODAzLjAxNCAxLjIxNC41MSAxLjIxNCAxLjEyMSAwIC42MjItLjU0OSAxLjA3OS0xLjEzIDEuMDc5LS41ODMgMC0uNjExIDAtMS4xNjguMDQ1LS41NTcuMDQ0LTEuMTMzLjUwMS0xLjEzMyAxLjEyIDAgLjYyNC41MDYgMS4xMjYgMS4xMzMgMS4xMjZoNC45NGMuNjI1IDAgMS4xMzEuNTAyIDEuMTMxIDEuMTIxIDAgLjYyLS41MDYgMS4xMjItMS4xMzEgMS4xMjJoLTcuNjFjLS42MjYgMC0xLjEzMi41MDMtMS4xMzIgMS4xMjUgMCAuNjIuNTA2IDEuMTIxIDEuMTMzIDEuMTIxaDMuODM2Yy42MjUgMCAxLjEzMS41MDIgMS4xMzEgMS4xMjQgMCAuNjE5LS41MDYgMS4xMi0xLjEzIDEuMTJoLTEuMTY4Yy0uNjI3IDAtMS4xMzMuNTAzLTEuMTMzIDEuMTIyIDAgLjYyMi41MTkgMS4wNzUgMS4xMzMgMS4xMjJsLjEzMy4wMWMuMjE2LjAxNi4zMzUuMDI1LjQ1My4wMy4xNDIuMDA2LjI4NS4wMDYuNi4wMDYuNjI0IDAgMS4xMTIuNDYgMS4xMTIgMS4wNzkiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNpbmtfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNzc1N0UyIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIxIDEyYTkgOSAwIDEgMC0xOCAwIDkgOSAwIDAgMCAxOCAwbS03LjcxNiA2LjczNmMwIC42MS0uNSAxLjEwNy0xLjIxMiAxLjEybC0uMDU5LjAwMWgtLjAyNmE3Ljg1NyA3Ljg1NyAwIDEgMSAuMDgzLTE1LjcxNGMuODAzLjAxNCAxLjIxNC41MSAxLjIxNCAxLjEyMSAwIC42MjItLjU0OSAxLjA3OS0xLjEzIDEuMDc5LS41ODMgMC0uNjExIDAtMS4xNjguMDQ1LS41NTcuMDQ0LTEuMTMzLjUwMS0xLjEzMyAxLjEyIDAgLjYyNC41MDYgMS4xMjYgMS4xMzMgMS4xMjZoNC45NGMuNjI1IDAgMS4xMzEuNTAyIDEuMTMxIDEuMTIxIDAgLjYyLS41MDYgMS4xMjItMS4xMzEgMS4xMjJoLTcuNjFjLS42MjYgMC0xLjEzMi41MDMtMS4xMzIgMS4xMjUgMCAuNjIuNTA2IDEuMTIxIDEuMTMzIDEuMTIxaDMuODM2Yy42MjUgMCAxLjEzMS41MDIgMS4xMzEgMS4xMjQgMCAuNjE5LS41MDYgMS4xMi0xLjEzIDEuMTJoLTEuMTY4Yy0uNjI3IDAtMS4xMzMuNTAzLTEuMTMzIDEuMTIyIDAgLjYyMi41MTkgMS4wNzUgMS4xMzMgMS4xMjJsLjEzMy4wMWMuMjE2LjAxNi4zMzUuMDI1LjQ1My4wMy4xNDIuMDA2LjI4NS4wMDYuNi4wMDYuNjI0IDAgMS4xMTIuNDYgMS4xMTIgMS4wNzkiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJpbmtfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/networks/ink
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkInk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkInk', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1oc-xd0._.js.map