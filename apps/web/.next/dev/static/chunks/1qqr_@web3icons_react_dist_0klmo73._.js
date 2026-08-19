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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenTORN.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenTORN
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#92FFBE',
                d: 'M6.902 7.542C8.03 6 11.325 3.242 15.463 4.548c4.14 1.307 5.416 5.12 5.537 6.864-.252-1.297-1.535-4.013-4.65-4.503 1.688 1.232 4.637 4.756 2.919 8.995-1.719 4.238-5.256 5.16-6.81 5.093 1.257-.1 3.926-1.147 4.548-4.545-.861 1.21-3.378 3.567-6.558 3.311-3.976-.32-6.946-3.014-7.449-6.76.206 1.188 1.408 3.659 4.57 4.042-1.272-.783-3.724-3.348-3.36-7.33.458-4.98 5.096-6.647 7.153-6.715-1.413.224-4.283 1.445-4.461 4.542M12 15.176a3.175 3.175 0 1 0 0-6.35 3.175 3.175 0 0 0 0 6.35',
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
                d: 'M6.902 7.542C8.03 6 11.325 3.242 15.463 4.548c4.14 1.307 5.416 5.12 5.537 6.864-.252-1.297-1.535-4.013-4.651-4.503 1.689 1.232 4.638 4.756 2.92 8.995-1.719 4.238-5.256 5.16-6.81 5.093 1.257-.1 3.926-1.147 4.548-4.545-.861 1.21-3.378 3.567-6.558 3.311-3.976-.32-6.946-3.014-7.449-6.76.206 1.188 1.408 3.659 4.57 4.042-1.272-.783-3.724-3.348-3.36-7.33.458-4.98 5.096-6.647 7.153-6.715-1.413.224-4.283 1.445-4.461 4.542M12 15.176a3.175 3.175 0 0 0 2.246-5.422 3.175 3.175 0 0 0-4.492 0A3.176 3.176 0 0 0 12 15.176',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#TORN__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#92FFBE',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M7.468 8.038c1.004-1.372 3.932-3.823 7.61-2.662 3.68 1.161 4.815 4.551 4.922 6.102-.224-1.153-1.365-3.567-4.134-4.003 1.501 1.095 4.122 4.227 2.595 7.995s-4.671 4.588-6.052 4.527c1.117-.088 3.489-1.02 4.041-4.04-.765 1.076-3.002 3.17-5.829 2.944-3.534-.285-6.174-2.68-6.62-6.01.182 1.056 1.25 3.253 4.061 3.594-1.13-.697-3.31-2.976-2.986-6.517.407-4.425 4.53-5.907 6.358-5.968-1.256.199-3.807 1.285-3.966 4.038M12 14.823a2.823 2.823 0 1 0 0-5.646 2.823 2.823 0 0 0 0 5.646',
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
                        id: 'TORN__a'
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
 * @component @name TokenTORN
 * @description Web3Icon for TokenTORN
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM5MkZGQkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuOTAyIDcuNTQyQzguMDMgNiAxMS4zMjUgMy4yNDIgMTUuNDYzIDQuNTQ4YzQuMTQgMS4zMDcgNS40MTYgNS4xMiA1LjUzNyA2Ljg2NC0uMjUyLTEuMjk3LTEuNTM1LTQuMDEzLTQuNjUtNC41MDMgMS42ODggMS4yMzIgNC42MzcgNC43NTYgMi45MTkgOC45OTUtMS43MTkgNC4yMzgtNS4yNTYgNS4xNi02LjgxIDUuMDkzIDEuMjU3LS4xIDMuOTI2LTEuMTQ3IDQuNTQ4LTQuNTQ1LS44NjEgMS4yMS0zLjM3OCAzLjU2Ny02LjU1OCAzLjMxMS0zLjk3Ni0uMzItNi45NDYtMy4wMTQtNy40NDktNi43Ni4yMDYgMS4xODggMS40MDggMy42NTkgNC41NyA0LjA0Mi0xLjI3Mi0uNzgzLTMuNzI0LTMuMzQ4LTMuMzYtNy4zMy40NTgtNC45OCA1LjA5Ni02LjY0NyA3LjE1My02LjcxNS0xLjQxMy4yMjQtNC4yODMgMS40NDUtNC40NjEgNC41NDJNMTIgMTUuMTc2YTMuMTc1IDMuMTc1IDAgMSAwIDAtNi4zNSAzLjE3NSAzLjE3NSAwIDAgMCAwIDYuMzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuOTAyIDcuNTQyQzguMDMgNiAxMS4zMjUgMy4yNDIgMTUuNDYzIDQuNTQ4YzQuMTQgMS4zMDcgNS40MTYgNS4xMiA1LjUzNyA2Ljg2NC0uMjUyLTEuMjk3LTEuNTM1LTQuMDEzLTQuNjUxLTQuNTAzIDEuNjg5IDEuMjMyIDQuNjM4IDQuNzU2IDIuOTIgOC45OTUtMS43MTkgNC4yMzgtNS4yNTYgNS4xNi02LjgxIDUuMDkzIDEuMjU3LS4xIDMuOTI2LTEuMTQ3IDQuNTQ4LTQuNTQ1LS44NjEgMS4yMS0zLjM3OCAzLjU2Ny02LjU1OCAzLjMxMS0zLjk3Ni0uMzItNi45NDYtMy4wMTQtNy40NDktNi43Ni4yMDYgMS4xODggMS40MDggMy42NTkgNC41NyA0LjA0Mi0xLjI3Mi0uNzgzLTMuNzI0LTMuMzQ4LTMuMzYtNy4zMy40NTgtNC45OCA1LjA5Ni02LjY0NyA3LjE1My02LjcxNS0xLjQxMy4yMjQtNC4yODMgMS40NDUtNC40NjEgNC41NDJNMTIgMTUuMTc2YTMuMTc1IDMuMTc1IDAgMCAwIDIuMjQ2LTUuNDIyIDMuMTc1IDMuMTc1IDAgMCAwLTQuNDkyIDBBMy4xNzYgMy4xNzYgMCAwIDAgMTIgMTUuMTc2IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNUT1JOX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzkyRkZCRSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjQ2OCA4LjAzOGMxLjAwNC0xLjM3MiAzLjkzMi0zLjgyMyA3LjYxLTIuNjYyIDMuNjggMS4xNjEgNC44MTUgNC41NTEgNC45MjIgNi4xMDItLjIyNC0xLjE1My0xLjM2NS0zLjU2Ny00LjEzNC00LjAwMyAxLjUwMSAxLjA5NSA0LjEyMiA0LjIyNyAyLjU5NSA3Ljk5NXMtNC42NzEgNC41ODgtNi4wNTIgNC41MjdjMS4xMTctLjA4OCAzLjQ4OS0xLjAyIDQuMDQxLTQuMDQtLjc2NSAxLjA3Ni0zLjAwMiAzLjE3LTUuODI5IDIuOTQ0LTMuNTM0LS4yODUtNi4xNzQtMi42OC02LjYyLTYuMDEuMTgyIDEuMDU2IDEuMjUgMy4yNTMgNC4wNjEgMy41OTQtMS4xMy0uNjk3LTMuMzEtMi45NzYtMi45ODYtNi41MTcuNDA3LTQuNDI1IDQuNTMtNS45MDcgNi4zNTgtNS45NjgtMS4yNTYuMTk5LTMuODA3IDEuMjg1LTMuOTY2IDQuMDM4TTEyIDE0LjgyM2EyLjgyMyAyLjgyMyAwIDEgMCAwLTUuNjQ2IDIuODIzIDIuODIzIDAgMCAwIDAgNS42NDYiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJUT1JOX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/TORN
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenTORN = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenTORN', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0klmo73._.js.map