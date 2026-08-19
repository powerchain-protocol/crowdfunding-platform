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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCUSD.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCUSD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#45CD85',
                d: 'M16.247 4.153c.63.056 1.282.169 1.94.349V6.29c-.337-.248-1.17-.748-2.717-.748-1.546 0-1.817.663-1.76 1-.045.153.112.524 1.068.788.209.057.462.102.754.158 1.468.264 3.78.692 3.78 2.925 0 1.547-1.299 2.48-3.065 2.672l.197 1.164H14.7l.186-1.158a8.5 8.5 0 0 1-2.886-.81v-1.868c.799.506 5.316 2.098 5.552 0 .073-.686-.872-.889-2.003-1.136C13.957 8.94 12 8.513 12 6.549c0-1.473 1.216-2.233 2.88-2.39L14.7 3h1.75l-.197 1.153zM12 19.313a5.63 5.63 0 0 0 5.158-3.375h1.8A7.313 7.313 0 1 1 9.75 6.729v1.8A5.625 5.625 0 0 0 12 19.314'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M16.247 4.153c.63.056 1.282.169 1.94.349V6.29c-.337-.248-1.17-.748-2.717-.748-1.546 0-1.817.663-1.76 1-.045.153.112.524 1.068.788.209.057.462.102.754.158 1.468.264 3.78.692 3.78 2.925 0 1.547-1.299 2.48-3.065 2.672l.197 1.164H14.7l.186-1.158a8.5 8.5 0 0 1-2.886-.81v-1.868c.799.506 5.316 2.098 5.552 0 .073-.686-.872-.889-2.003-1.136C13.957 8.94 12 8.513 12 6.549c0-1.473 1.216-2.233 2.88-2.39L14.7 3h1.75l-.197 1.153zM12 19.313a5.63 5.63 0 0 0 5.158-3.375h1.8a7.31 7.31 0 0 1-12.129 2.92A7.312 7.312 0 0 1 9.75 6.73v1.8A5.625 5.625 0 0 0 12 19.314'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CUSD__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#45CD85',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M15.775 5.025c.56.05 1.14.15 1.725.31v1.59c-.3-.22-1.04-.665-2.415-.665s-1.615.59-1.565.89c-.04.135.1.465.95.7.185.05.41.09.67.14 1.305.235 3.36.615 3.36 2.6 0 1.375-1.155 2.205-2.725 2.375L15.95 14H14.4l.165-1.03A7.6 7.6 0 0 1 12 12.25v-1.66c.71.45 4.725 1.865 4.935 0 .065-.61-.775-.79-1.78-1.01C13.74 9.28 12 8.9 12 7.155c0-1.31 1.08-1.985 2.56-2.125L14.4 4h1.555l-.175 1.025zM12 18.5a5 5 0 0 0 4.585-3h1.6a6.497 6.497 0 0 1-7.947 4.257A6.501 6.501 0 0 1 10 7.315v1.6a5 5 0 0 0 2 9.586'
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
                        id: 'CUSD__a'
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
 * @component @name TokenCUSD
 * @description Web3Icon for TokenCUSD
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM0NUNEODUiIGQ9Ik0xNi4yNDcgNC4xNTNjLjYzLjA1NiAxLjI4Mi4xNjkgMS45NC4zNDlWNi4yOWMtLjMzNy0uMjQ4LTEuMTctLjc0OC0yLjcxNy0uNzQ4LTEuNTQ2IDAtMS44MTcuNjYzLTEuNzYgMS0uMDQ1LjE1My4xMTIuNTI0IDEuMDY4Ljc4OC4yMDkuMDU3LjQ2Mi4xMDIuNzU0LjE1OCAxLjQ2OC4yNjQgMy43OC42OTIgMy43OCAyLjkyNSAwIDEuNTQ3LTEuMjk5IDIuNDgtMy4wNjUgMi42NzJsLjE5NyAxLjE2NEgxNC43bC4xODYtMS4xNThhOC41IDguNSAwIDAgMS0yLjg4Ni0uODF2LTEuODY4Yy43OTkuNTA2IDUuMzE2IDIuMDk4IDUuNTUyIDAgLjA3My0uNjg2LS44NzItLjg4OS0yLjAwMy0xLjEzNkMxMy45NTcgOC45NCAxMiA4LjUxMyAxMiA2LjU0OWMwLTEuNDczIDEuMjE2LTIuMjMzIDIuODgtMi4zOUwxNC43IDNoMS43NWwtLjE5NyAxLjE1M3pNMTIgMTkuMzEzYTUuNjMgNS42MyAwIDAgMCA1LjE1OC0zLjM3NWgxLjhBNy4zMTMgNy4zMTMgMCAxIDEgOS43NSA2LjcyOXYxLjhBNS42MjUgNS42MjUgMCAwIDAgMTIgMTkuMzE0Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi4yNDcgNC4xNTNjLjYzLjA1NiAxLjI4Mi4xNjkgMS45NC4zNDlWNi4yOWMtLjMzNy0uMjQ4LTEuMTctLjc0OC0yLjcxNy0uNzQ4LTEuNTQ2IDAtMS44MTcuNjYzLTEuNzYgMS0uMDQ1LjE1My4xMTIuNTI0IDEuMDY4Ljc4OC4yMDkuMDU3LjQ2Mi4xMDIuNzU0LjE1OCAxLjQ2OC4yNjQgMy43OC42OTIgMy43OCAyLjkyNSAwIDEuNTQ3LTEuMjk5IDIuNDgtMy4wNjUgMi42NzJsLjE5NyAxLjE2NEgxNC43bC4xODYtMS4xNThhOC41IDguNSAwIDAgMS0yLjg4Ni0uODF2LTEuODY4Yy43OTkuNTA2IDUuMzE2IDIuMDk4IDUuNTUyIDAgLjA3My0uNjg2LS44NzItLjg4OS0yLjAwMy0xLjEzNkMxMy45NTcgOC45NCAxMiA4LjUxMyAxMiA2LjU0OWMwLTEuNDczIDEuMjE2LTIuMjMzIDIuODgtMi4zOUwxNC43IDNoMS43NWwtLjE5NyAxLjE1M3pNMTIgMTkuMzEzYTUuNjMgNS42MyAwIDAgMCA1LjE1OC0zLjM3NWgxLjhhNy4zMSA3LjMxIDAgMCAxLTEyLjEyOSAyLjkyQTcuMzEyIDcuMzEyIDAgMCAxIDkuNzUgNi43M3YxLjhBNS42MjUgNS42MjUgMCAwIDAgMTIgMTkuMzE0Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDVVNEX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzQ1Q0Q4NSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTUuNzc1IDUuMDI1Yy41Ni4wNSAxLjE0LjE1IDEuNzI1LjMxdjEuNTljLS4zLS4yMi0xLjA0LS42NjUtMi40MTUtLjY2NXMtMS42MTUuNTktMS41NjUuODljLS4wNC4xMzUuMS40NjUuOTUuNy4xODUuMDUuNDEuMDkuNjcuMTQgMS4zMDUuMjM1IDMuMzYuNjE1IDMuMzYgMi42IDAgMS4zNzUtMS4xNTUgMi4yMDUtMi43MjUgMi4zNzVMMTUuOTUgMTRIMTQuNGwuMTY1LTEuMDNBNy42IDcuNiAwIDAgMSAxMiAxMi4yNXYtMS42NmMuNzEuNDUgNC43MjUgMS44NjUgNC45MzUgMCAuMDY1LS42MS0uNzc1LS43OS0xLjc4LTEuMDFDMTMuNzQgOS4yOCAxMiA4LjkgMTIgNy4xNTVjMC0xLjMxIDEuMDgtMS45ODUgMi41Ni0yLjEyNUwxNC40IDRoMS41NTVsLS4xNzUgMS4wMjV6TTEyIDE4LjVhNSA1IDAgMCAwIDQuNTg1LTNoMS42YTYuNDk3IDYuNDk3IDAgMCAxLTcuOTQ3IDQuMjU3QTYuNTAxIDYuNTAxIDAgMCAxIDEwIDcuMzE1djEuNmE1IDUgMCAwIDAgMiA5LjU4NiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJDVVNEX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/CUSD
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCUSD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCUSD', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0tmnufv._.js.map