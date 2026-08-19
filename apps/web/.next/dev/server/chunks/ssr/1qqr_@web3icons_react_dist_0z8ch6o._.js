module.exports = [
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWeb3Icon",
    ()=>createWeb3Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@types+node@24.13.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/BaseIcon.js [app-ssr] (ecmascript)");
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
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = defaultVariant, fallback, ...props }, ref)=>{
        const iconData = variants[variant];
        if (!iconData) {
            console.warn(`Icon "${name}" does not have variant "${variant}". ` + `Available variants: ${availableVariants.join(', ')}`);
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseIcon"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(element, elementProps, childElements);
    });
}
;
}),
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkStellar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkStellar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#000',
                d: 'M5.826 12.849A6.7 6.7 0 0 1 6.6 8.772a6.4 6.4 0 0 1 2.255-2.374 6.04 6.04 0 0 1 3.088-.892 6.03 6.03 0 0 1 3.105.825l1.426-.758a7.35 7.35 0 0 0-7.933-.648 7.75 7.75 0 0 0-3.035 2.928 8.2 8.2 0 0 0-1.1 4.753c.022.283-.039.567-.173.817-.134.249-.335.45-.579.58L3 14.35v1.622l18-9.566v-1.62zM21 8.03 6.79 15.576 3 17.59v1.621l15.178-8.065q.053.425.053.855a6.7 6.7 0 0 1-.827 3.232 6.4 6.4 0 0 1-2.258 2.375c-.931.57-2 .879-3.092.89a6.03 6.03 0 0 1-3.107-.83l-.076.042-1.345.715a7.43 7.43 0 0 0 3.878 1.49 7.35 7.35 0 0 0 4.054-.841 7.75 7.75 0 0 0 3.035-2.925 8.2 8.2 0 0 0 1.1-4.759c-.02-.283.04-.566.174-.816a1.4 1.4 0 0 1 .578-.58L21 9.647z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M5.826 12.849A6.7 6.7 0 0 1 6.6 8.772a6.4 6.4 0 0 1 2.255-2.374 6.04 6.04 0 0 1 3.088-.892 6.03 6.03 0 0 1 3.105.825l1.426-.758a7.35 7.35 0 0 0-7.933-.648 7.75 7.75 0 0 0-3.035 2.928 8.2 8.2 0 0 0-1.1 4.753c.022.283-.039.567-.173.817-.134.249-.335.45-.579.58L3 14.35v1.622l18-9.566v-1.62zM21 8.03 6.79 15.576 3 17.59v1.621l15.178-8.065q.053.425.053.855a6.7 6.7 0 0 1-.827 3.232 6.4 6.4 0 0 1-2.258 2.375c-.931.57-2 .879-3.092.89a6.03 6.03 0 0 1-3.107-.83l-.076.042-1.345.715a7.43 7.43 0 0 0 3.878 1.49 7.35 7.35 0 0 0 4.054-.841 7.75 7.75 0 0 0 3.035-2.925 8.2 8.2 0 0 0 1.1-4.759c-.02-.283.04-.566.174-.816a1.4 1.4 0 0 1 .578-.58L21 9.647z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#stellar__a)'
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
                        d: 'M6.512 12.754A5.97 5.97 0 0 1 7.2 9.13a5.67 5.67 0 0 1 2.005-2.11 5.37 5.37 0 0 1 2.744-.792 5.36 5.36 0 0 1 2.76.733l1.268-.674c-1-.76-2.197-1.22-3.449-1.324a6.53 6.53 0 0 0-3.603.749 6.9 6.9 0 0 0-2.697 2.602 7.3 7.3 0 0 0-.978 4.225 1.33 1.33 0 0 1-.154.726c-.12.221-.298.4-.514.515L4 14.09v1.442l16-8.503V5.587zM20 8.472 7.37 15.178 4 16.97v1.44l13.491-7.169q.047.38.047.76a6 6 0 0 1-.734 2.873 5.67 5.67 0 0 1-2.008 2.112 5.37 5.37 0 0 1-2.748.791 5.36 5.36 0 0 1-2.762-.738l-.068.038-1.195.635c1 .76 2.196 1.22 3.447 1.325a6.53 6.53 0 0 0 3.603-.748 6.9 6.9 0 0 0 2.698-2.6 7.3 7.3 0 0 0 .979-4.23 1.33 1.33 0 0 1 .154-.726c.117-.219.296-.398.514-.515l.582-.31z'
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
                        id: 'stellar__a'
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
 * @component @name NetworkStellar
 * @description Web3Icon for NetworkStellar
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik01LjgyNiAxMi44NDlBNi43IDYuNyAwIDAgMSA2LjYgOC43NzJhNi40IDYuNCAwIDAgMSAyLjI1NS0yLjM3NCA2LjA0IDYuMDQgMCAwIDEgMy4wODgtLjg5MiA2LjAzIDYuMDMgMCAwIDEgMy4xMDUuODI1bDEuNDI2LS43NThhNy4zNSA3LjM1IDAgMCAwLTcuOTMzLS42NDggNy43NSA3Ljc1IDAgMCAwLTMuMDM1IDIuOTI4IDguMiA4LjIgMCAwIDAtMS4xIDQuNzUzYy4wMjIuMjgzLS4wMzkuNTY3LS4xNzMuODE3LS4xMzQuMjQ5LS4zMzUuNDUtLjU3OS41OEwzIDE0LjM1djEuNjIybDE4LTkuNTY2di0xLjYyek0yMSA4LjAzIDYuNzkgMTUuNTc2IDMgMTcuNTl2MS42MjFsMTUuMTc4LTguMDY1cS4wNTMuNDI1LjA1My44NTVhNi43IDYuNyAwIDAgMS0uODI3IDMuMjMyIDYuNCA2LjQgMCAwIDEtMi4yNTggMi4zNzVjLS45MzEuNTctMiAuODc5LTMuMDkyLjg5YTYuMDMgNi4wMyAwIDAgMS0zLjEwNy0uODNsLS4wNzYuMDQyLTEuMzQ1LjcxNWE3LjQzIDcuNDMgMCAwIDAgMy44NzggMS40OSA3LjM1IDcuMzUgMCAwIDAgNC4wNTQtLjg0MSA3Ljc1IDcuNzUgMCAwIDAgMy4wMzUtMi45MjUgOC4yIDguMiAwIDAgMCAxLjEtNC43NTljLS4wMi0uMjgzLjA0LS41NjYuMTc0LS44MTZhMS40IDEuNCAwIDAgMSAuNTc4LS41OEwyMSA5LjY0N3oiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjgyNiAxMi44NDlBNi43IDYuNyAwIDAgMSA2LjYgOC43NzJhNi40IDYuNCAwIDAgMSAyLjI1NS0yLjM3NCA2LjA0IDYuMDQgMCAwIDEgMy4wODgtLjg5MiA2LjAzIDYuMDMgMCAwIDEgMy4xMDUuODI1bDEuNDI2LS43NThhNy4zNSA3LjM1IDAgMCAwLTcuOTMzLS42NDggNy43NSA3Ljc1IDAgMCAwLTMuMDM1IDIuOTI4IDguMiA4LjIgMCAwIDAtMS4xIDQuNzUzYy4wMjIuMjgzLS4wMzkuNTY3LS4xNzMuODE3LS4xMzQuMjQ5LS4zMzUuNDUtLjU3OS41OEwzIDE0LjM1djEuNjIybDE4LTkuNTY2di0xLjYyek0yMSA4LjAzIDYuNzkgMTUuNTc2IDMgMTcuNTl2MS42MjFsMTUuMTc4LTguMDY1cS4wNTMuNDI1LjA1My44NTVhNi43IDYuNyAwIDAgMS0uODI3IDMuMjMyIDYuNCA2LjQgMCAwIDEtMi4yNTggMi4zNzVjLS45MzEuNTctMiAuODc5LTMuMDkyLjg5YTYuMDMgNi4wMyAwIDAgMS0zLjEwNy0uODNsLS4wNzYuMDQyLTEuMzQ1LjcxNWE3LjQzIDcuNDMgMCAwIDAgMy44NzggMS40OSA3LjM1IDcuMzUgMCAwIDAgNC4wNTQtLjg0MSA3Ljc1IDcuNzUgMCAwIDAgMy4wMzUtMi45MjUgOC4yIDguMiAwIDAgMCAxLjEtNC43NTljLS4wMi0uMjgzLjA0LS41NjYuMTc0LS44MTZhMS40IDEuNCAwIDAgMSAuNTc4LS41OEwyMSA5LjY0N3oiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNzdGVsbGFyX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNi41MTIgMTIuNzU0QTUuOTcgNS45NyAwIDAgMSA3LjIgOS4xM2E1LjY3IDUuNjcgMCAwIDEgMi4wMDUtMi4xMSA1LjM3IDUuMzcgMCAwIDEgMi43NDQtLjc5MiA1LjM2IDUuMzYgMCAwIDEgMi43Ni43MzNsMS4yNjgtLjY3NGMtMS0uNzYtMi4xOTctMS4yMi0zLjQ0OS0xLjMyNGE2LjUzIDYuNTMgMCAwIDAtMy42MDMuNzQ5IDYuOSA2LjkgMCAwIDAtMi42OTcgMi42MDIgNy4zIDcuMyAwIDAgMC0uOTc4IDQuMjI1IDEuMzMgMS4zMyAwIDAgMS0uMTU0LjcyNmMtLjEyLjIyMS0uMjk4LjQtLjUxNC41MTVMNCAxNC4wOXYxLjQ0MmwxNi04LjUwM1Y1LjU4N3pNMjAgOC40NzIgNy4zNyAxNS4xNzggNCAxNi45N3YxLjQ0bDEzLjQ5MS03LjE2OXEuMDQ3LjM4LjA0Ny43NmE2IDYgMCAwIDEtLjczNCAyLjg3MyA1LjY3IDUuNjcgMCAwIDEtMi4wMDggMi4xMTIgNS4zNyA1LjM3IDAgMCAxLTIuNzQ4Ljc5MSA1LjM2IDUuMzYgMCAwIDEtMi43NjItLjczOGwtLjA2OC4wMzgtMS4xOTUuNjM1YzEgLjc2IDIuMTk2IDEuMjIgMy40NDcgMS4zMjVhNi41MyA2LjUzIDAgMCAwIDMuNjAzLS43NDggNi45IDYuOSAwIDAgMCAyLjY5OC0yLjYgNy4zIDcuMyAwIDAgMCAuOTc5LTQuMjMgMS4zMyAxLjMzIDAgMCAxIC4xNTQtLjcyNmMuMTE3LS4yMTkuMjk2LS4zOTguNTE0LS41MTVsLjU4Mi0uMzF6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9InN0ZWxsYXJfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/networks/stellar
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkStellar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkStellar', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0z8ch6o._.js.map