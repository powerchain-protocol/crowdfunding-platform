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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkXdcNetwork.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkXdcNetwork
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#B8B5B1',
                d: 'M20.977 11.128C18.907-.836 3.281 1.48 3 11.128l1.474.76s-.478.28-1.474.933c1.811 11.745 17.184 10.035 18-.017a135 135 0 0 0-1.513-.917zm-7.706 4.185-1.468-2.531-1.474 2.53-1.136-.084 2.132-3.583-1.913-3.082 1.154-.101 1.35 2.289 1.36-2.194 1.07.023-1.767 3.049 1.969 3.645-1.271.039z'
            }
        ],
        [
            'path',
            {
                fill: '#254C82',
                d: 'M20.24 10.65C17.433.02 4.591 2.888 3.714 10.65l2.194 1.237-2.194 1.396c1.912 10.231 15.772 8.257 16.526-.023-1.39-.877-2.227-1.395-2.227-1.395s1.89-1.013 2.227-1.215m-6.964 4.68-1.473-2.531-1.497 2.531-1.136-.079 2.138-3.583L9.395 8.58l1.153-.096 1.35 2.29 1.356-2.194 1.074.023-1.766 3.043 1.991 3.645-1.271.039z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M20.977 11.128C18.907-.836 3.281 1.48 3 11.128l1.474.76s-.478.28-1.474.933c1.811 11.745 17.184 10.035 18-.017a135 135 0 0 0-1.513-.917zm-7.706 4.185-1.468-2.531-1.474 2.53-1.136-.084 2.132-3.583-1.912-3.082 1.153-.101 1.35 2.289 1.36-2.194 1.07.023-1.767 3.049 1.969 3.645-1.271.039z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M20.241 10.65C17.434.02 4.592 2.888 3.715 10.65l2.194 1.237-2.194 1.396c1.912 10.231 15.772 8.257 16.526-.023a292 292 0 0 0-2.227-1.395s1.89-1.013 2.227-1.215m-6.964 4.68-1.473-2.531-1.497 2.531-1.136-.079 2.138-3.583L9.396 8.58l1.153-.096 1.35 2.29 1.356-2.194 1.074.022-1.766 3.044 1.991 3.645-1.271.039z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#XDC__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#B8B5B1',
                        d: 'M19.98 11.225C18.14.59 4.25 2.65 4 11.225l1.31.675s-.425.25-1.31.83c1.61 10.44 15.275 8.92 16-.015q-.67-.412-1.345-.815zm-6.85 3.72-1.305-2.25-1.31 2.25-1.01-.075 1.895-3.185-1.7-2.74 1.025-.09 1.2 2.035 1.21-1.95.95.02-1.57 2.71 1.75 3.24-1.13.035z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#254C82',
                        d: 'M19.325 10.8c-2.495-9.45-13.91-6.9-14.69 0l1.95 1.1-1.95 1.24c1.7 9.095 14.02 7.34 14.69-.02-1.235-.78-1.98-1.24-1.98-1.24s1.68-.9 1.98-1.08m-6.19 4.16-1.31-2.25-1.33 2.25-1.01-.07 1.9-3.185-1.7-2.745 1.025-.085 1.2 2.035 1.205-1.95.955.02-1.57 2.705 1.77 3.24-1.13.035z'
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
                        id: 'XDC__a'
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
 * @component @name NetworkXdcNetwork
 * @description Web3Icon for NetworkXdcNetwork
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNCOEI1QjEiIGQ9Ik0yMC45NzcgMTEuMTI4QzE4LjkwNy0uODM2IDMuMjgxIDEuNDggMyAxMS4xMjhsMS40NzQuNzZzLS40NzguMjgtMS40NzQuOTMzYzEuODExIDExLjc0NSAxNy4xODQgMTAuMDM1IDE4LS4wMTdhMTM1IDEzNSAwIDAgMC0xLjUxMy0uOTE3em0tNy43MDYgNC4xODUtMS40NjgtMi41MzEtMS40NzQgMi41My0xLjEzNi0uMDg0IDIuMTMyLTMuNTgzLTEuOTEzLTMuMDgyIDEuMTU0LS4xMDEgMS4zNSAyLjI4OSAxLjM2LTIuMTk0IDEuMDcuMDIzLTEuNzY3IDMuMDQ5IDEuOTY5IDMuNjQ1LTEuMjcxLjAzOXoiLz4KICAgIDxwYXRoIGZpbGw9IiMyNTRDODIiIGQ9Ik0yMC4yNCAxMC42NUMxNy40MzMuMDIgNC41OTEgMi44ODggMy43MTQgMTAuNjVsMi4xOTQgMS4yMzctMi4xOTQgMS4zOTZjMS45MTIgMTAuMjMxIDE1Ljc3MiA4LjI1NyAxNi41MjYtLjAyMy0xLjM5LS44NzctMi4yMjctMS4zOTUtMi4yMjctMS4zOTVzMS44OS0xLjAxMyAyLjIyNy0xLjIxNW0tNi45NjQgNC42OC0xLjQ3My0yLjUzMS0xLjQ5NyAyLjUzMS0xLjEzNi0uMDc5IDIuMTM4LTMuNTgzTDkuMzk1IDguNThsMS4xNTMtLjA5NiAxLjM1IDIuMjkgMS4zNTYtMi4xOTQgMS4wNzQuMDIzLTEuNzY2IDMuMDQzIDEuOTkxIDMuNjQ1LTEuMjcxLjAzOXoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMC45NzcgMTEuMTI4QzE4LjkwNy0uODM2IDMuMjgxIDEuNDggMyAxMS4xMjhsMS40NzQuNzZzLS40NzguMjgtMS40NzQuOTMzYzEuODExIDExLjc0NSAxNy4xODQgMTAuMDM1IDE4LS4wMTdhMTM1IDEzNSAwIDAgMC0xLjUxMy0uOTE3em0tNy43MDYgNC4xODUtMS40NjgtMi41MzEtMS40NzQgMi41My0xLjEzNi0uMDg0IDIuMTMyLTMuNTgzLTEuOTEyLTMuMDgyIDEuMTUzLS4xMDEgMS4zNSAyLjI4OSAxLjM2LTIuMTk0IDEuMDcuMDIzLTEuNzY3IDMuMDQ5IDEuOTY5IDMuNjQ1LTEuMjcxLjAzOXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMC4yNDEgMTAuNjVDMTcuNDM0LjAyIDQuNTkyIDIuODg4IDMuNzE1IDEwLjY1bDIuMTk0IDEuMjM3LTIuMTk0IDEuMzk2YzEuOTEyIDEwLjIzMSAxNS43NzIgOC4yNTcgMTYuNTI2LS4wMjNhMjkyIDI5MiAwIDAgMC0yLjIyNy0xLjM5NXMxLjg5LTEuMDEzIDIuMjI3LTEuMjE1bS02Ljk2NCA0LjY4LTEuNDczLTIuNTMxLTEuNDk3IDIuNTMxLTEuMTM2LS4wNzkgMi4xMzgtMy41ODNMOS4zOTYgOC41OGwxLjE1My0uMDk2IDEuMzUgMi4yOSAxLjM1Ni0yLjE5NCAxLjA3NC4wMjItMS43NjYgMy4wNDQgMS45OTEgMy42NDUtMS4yNzEuMDM5eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNYRENfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNCOEI1QjEiIGQ9Ik0xOS45OCAxMS4yMjVDMTguMTQuNTkgNC4yNSAyLjY1IDQgMTEuMjI1bDEuMzEuNjc1cy0uNDI1LjI1LTEuMzEuODNjMS42MSAxMC40NCAxNS4yNzUgOC45MiAxNi0uMDE1cS0uNjctLjQxMi0xLjM0NS0uODE1em0tNi44NSAzLjcyLTEuMzA1LTIuMjUtMS4zMSAyLjI1LTEuMDEtLjA3NSAxLjg5NS0zLjE4NS0xLjctMi43NCAxLjAyNS0uMDkgMS4yIDIuMDM1IDEuMjEtMS45NS45NS4wMi0xLjU3IDIuNzEgMS43NSAzLjI0LTEuMTMuMDM1eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMyNTRDODIiIGQ9Ik0xOS4zMjUgMTAuOGMtMi40OTUtOS40NS0xMy45MS02LjktMTQuNjkgMGwxLjk1IDEuMS0xLjk1IDEuMjRjMS43IDkuMDk1IDE0LjAyIDcuMzQgMTQuNjktLjAyLTEuMjM1LS43OC0xLjk4LTEuMjQtMS45OC0xLjI0czEuNjgtLjkgMS45OC0xLjA4bS02LjE5IDQuMTYtMS4zMS0yLjI1LTEuMzMgMi4yNS0xLjAxLS4wNyAxLjktMy4xODUtMS43LTIuNzQ1IDEuMDI1LS4wODUgMS4yIDIuMDM1IDEuMjA1LTEuOTUuOTU1LjAyLTEuNTcgMi43MDUgMS43NyAzLjI0LTEuMTMuMDM1eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJYRENfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/networks/xdc-network
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkXdcNetwork = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkXdcNetwork', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0hv8e_s._.js.map