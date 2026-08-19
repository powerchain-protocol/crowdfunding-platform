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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkCosmos.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkCosmos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#000',
                d: 'M14.194 8.309 8.38 14.115a4.6 4.6 0 0 1-.508-2.132q0-.887.304-1.679.305-.792.845-1.374t1.298-.922a4 4 0 0 1 1.663-.34 4 4 0 0 1 2.212.64m-.513 7.683q-.758.34-1.663.34a4 4 0 0 1-2.212-.64l5.814-5.807q.113.219.203.454.305.79.305 1.679 0 .886-.305 1.678a4.2 4.2 0 0 1-.844 1.374q-.54.583-1.298.922m.88 1.8a6.4 6.4 0 0 0 2.02-1.365 6.1 6.1 0 0 0 1.324-2.009q.47-1.148.47-2.435a6.36 6.36 0 0 0-1.157-3.693L21 4.513l-1.503-1.5L15.704 6.8a6.4 6.4 0 0 0-1.109-.601q-1.167-.495-2.578-.496-1.41 0-2.578.505a6.4 6.4 0 0 0-2.02 1.365 6.1 6.1 0 0 0-1.324 2.01 6.4 6.4 0 0 0-.47 2.435A6.36 6.36 0 0 0 6.78 15.71L3 19.487l1.503 1.5L8.296 17.2q.51.347 1.108.602 1.168.495 2.578.495 1.411 0 2.579-.504',
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
                d: 'M14.194 8.309 8.38 14.115a4.6 4.6 0 0 1-.508-2.132q0-.887.304-1.679.305-.792.845-1.374t1.298-.922a4 4 0 0 1 1.663-.34 4 4 0 0 1 2.212.64m-.513 7.683q-.758.34-1.663.34a4 4 0 0 1-2.212-.64l5.814-5.807q.113.219.203.454.305.79.305 1.679 0 .886-.305 1.678a4.2 4.2 0 0 1-.844 1.374q-.54.583-1.298.922m.88 1.8a6.4 6.4 0 0 0 2.02-1.365 6.1 6.1 0 0 0 1.324-2.009q.47-1.148.47-2.435a6.36 6.36 0 0 0-1.157-3.693L21 4.513l-1.503-1.5L15.704 6.8a6.4 6.4 0 0 0-1.109-.601q-1.167-.495-2.578-.496-1.41 0-2.578.505a6.4 6.4 0 0 0-2.02 1.365 6.1 6.1 0 0 0-1.324 2.01 6.4 6.4 0 0 0-.47 2.435A6.36 6.36 0 0 0 6.78 15.71L3 19.487l1.503 1.5L8.296 17.2q.51.347 1.108.602 1.168.495 2.578.495 1.411 0 2.579-.504',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#cosmos__a)'
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
                        d: 'M13.95 8.719 8.782 13.88a4.1 4.1 0 0 1-.451-1.895q0-.79.27-1.492.27-.705.751-1.222.48-.517 1.154-.82.674-.3 1.478-.301a3.55 3.55 0 0 1 1.966.569m-.456 6.83q-.673.3-1.479.301a3.55 3.55 0 0 1-1.965-.569l5.168-5.16q.1.193.18.402.271.705.271 1.493a4.1 4.1 0 0 1-.27 1.492q-.271.703-.751 1.221t-1.154.82m.782 1.6a5.7 5.7 0 0 0 1.796-1.214 5.4 5.4 0 0 0 1.177-1.786q.418-1.02.418-2.164a5.65 5.65 0 0 0-1.029-3.283L20 5.345 18.664 4.01l-3.372 3.367a5.7 5.7 0 0 0-.985-.535q-1.038-.44-2.292-.44t-2.291.448a5.7 5.7 0 0 0-1.796 1.214A5.4 5.4 0 0 0 6.75 9.85a5.7 5.7 0 0 0-.418 2.165 5.66 5.66 0 0 0 1.028 3.283L4 18.655l1.336 1.334 3.371-3.367q.455.309.986.535 1.037.44 2.291.44t2.292-.448',
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
                        id: 'cosmos__a'
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
 * @component @name NetworkCosmos
 * @description Web3Icon for NetworkCosmos
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjE5NCA4LjMwOSA4LjM4IDE0LjExNWE0LjYgNC42IDAgMCAxLS41MDgtMi4xMzJxMC0uODg3LjMwNC0xLjY3OS4zMDUtLjc5Mi44NDUtMS4zNzR0MS4yOTgtLjkyMmE0IDQgMCAwIDEgMS42NjMtLjM0IDQgNCAwIDAgMSAyLjIxMi42NG0tLjUxMyA3LjY4M3EtLjc1OC4zNC0xLjY2My4zNGE0IDQgMCAwIDEtMi4yMTItLjY0bDUuODE0LTUuODA3cS4xMTMuMjE5LjIwMy40NTQuMzA1Ljc5LjMwNSAxLjY3OSAwIC44ODYtLjMwNSAxLjY3OGE0LjIgNC4yIDAgMCAxLS44NDQgMS4zNzRxLS41NC41ODMtMS4yOTguOTIybS44OCAxLjhhNi40IDYuNCAwIDAgMCAyLjAyLTEuMzY1IDYuMSA2LjEgMCAwIDAgMS4zMjQtMi4wMDlxLjQ3LTEuMTQ4LjQ3LTIuNDM1YTYuMzYgNi4zNiAwIDAgMC0xLjE1Ny0zLjY5M0wyMSA0LjUxM2wtMS41MDMtMS41TDE1LjcwNCA2LjhhNi40IDYuNCAwIDAgMC0xLjEwOS0uNjAxcS0xLjE2Ny0uNDk1LTIuNTc4LS40OTYtMS40MSAwLTIuNTc4LjUwNWE2LjQgNi40IDAgMCAwLTIuMDIgMS4zNjUgNi4xIDYuMSAwIDAgMC0xLjMyNCAyLjAxIDYuNCA2LjQgMCAwIDAtLjQ3IDIuNDM1QTYuMzYgNi4zNiAwIDAgMCA2Ljc4IDE1LjcxTDMgMTkuNDg3bDEuNTAzIDEuNUw4LjI5NiAxNy4ycS41MS4zNDcgMS4xMDguNjAyIDEuMTY4LjQ5NSAyLjU3OC40OTUgMS40MTEgMCAyLjU3OS0uNTA0IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjE5NCA4LjMwOSA4LjM4IDE0LjExNWE0LjYgNC42IDAgMCAxLS41MDgtMi4xMzJxMC0uODg3LjMwNC0xLjY3OS4zMDUtLjc5Mi44NDUtMS4zNzR0MS4yOTgtLjkyMmE0IDQgMCAwIDEgMS42NjMtLjM0IDQgNCAwIDAgMSAyLjIxMi42NG0tLjUxMyA3LjY4M3EtLjc1OC4zNC0xLjY2My4zNGE0IDQgMCAwIDEtMi4yMTItLjY0bDUuODE0LTUuODA3cS4xMTMuMjE5LjIwMy40NTQuMzA1Ljc5LjMwNSAxLjY3OSAwIC44ODYtLjMwNSAxLjY3OGE0LjIgNC4yIDAgMCAxLS44NDQgMS4zNzRxLS41NC41ODMtMS4yOTguOTIybS44OCAxLjhhNi40IDYuNCAwIDAgMCAyLjAyLTEuMzY1IDYuMSA2LjEgMCAwIDAgMS4zMjQtMi4wMDlxLjQ3LTEuMTQ4LjQ3LTIuNDM1YTYuMzYgNi4zNiAwIDAgMC0xLjE1Ny0zLjY5M0wyMSA0LjUxM2wtMS41MDMtMS41TDE1LjcwNCA2LjhhNi40IDYuNCAwIDAgMC0xLjEwOS0uNjAxcS0xLjE2Ny0uNDk1LTIuNTc4LS40OTYtMS40MSAwLTIuNTc4LjUwNWE2LjQgNi40IDAgMCAwLTIuMDIgMS4zNjUgNi4xIDYuMSAwIDAgMC0xLjMyNCAyLjAxIDYuNCA2LjQgMCAwIDAtLjQ3IDIuNDM1QTYuMzYgNi4zNiAwIDAgMCA2Ljc4IDE1LjcxTDMgMTkuNDg3bDEuNTAzIDEuNUw4LjI5NiAxNy4ycS41MS4zNDcgMS4xMDguNjAyIDEuMTY4LjQ5NSAyLjU3OC40OTUgMS40MTEgMCAyLjU3OS0uNTA0IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjb3Ntb3NfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjk1IDguNzE5IDguNzgyIDEzLjg4YTQuMSA0LjEgMCAwIDEtLjQ1MS0xLjg5NXEwLS43OS4yNy0xLjQ5Mi4yNy0uNzA1Ljc1MS0xLjIyMi40OC0uNTE3IDEuMTU0LS44Mi42NzQtLjMgMS40NzgtLjMwMWEzLjU1IDMuNTUgMCAwIDEgMS45NjYuNTY5bS0uNDU2IDYuODNxLS42NzMuMy0xLjQ3OS4zMDFhMy41NSAzLjU1IDAgMCAxLTEuOTY1LS41NjlsNS4xNjgtNS4xNnEuMS4xOTMuMTguNDAyLjI3MS43MDUuMjcxIDEuNDkzYTQuMSA0LjEgMCAwIDEtLjI3IDEuNDkycS0uMjcxLjcwMy0uNzUxIDEuMjIxdC0xLjE1NC44Mm0uNzgyIDEuNmE1LjcgNS43IDAgMCAwIDEuNzk2LTEuMjE0IDUuNCA1LjQgMCAwIDAgMS4xNzctMS43ODZxLjQxOC0xLjAyLjQxOC0yLjE2NGE1LjY1IDUuNjUgMCAwIDAtMS4wMjktMy4yODNMMjAgNS4zNDUgMTguNjY0IDQuMDFsLTMuMzcyIDMuMzY3YTUuNyA1LjcgMCAwIDAtLjk4NS0uNTM1cS0xLjAzOC0uNDQtMi4yOTItLjQ0dC0yLjI5MS40NDhhNS43IDUuNyAwIDAgMC0xLjc5NiAxLjIxNEE1LjQgNS40IDAgMCAwIDYuNzUgOS44NWE1LjcgNS43IDAgMCAwLS40MTggMi4xNjUgNS42NiA1LjY2IDAgMCAwIDEuMDI4IDMuMjgzTDQgMTguNjU1bDEuMzM2IDEuMzM0IDMuMzcxLTMuMzY3cS40NTUuMzA5Ljk4Ni41MzUgMS4wMzcuNDQgMi4yOTEuNDR0Mi4yOTItLjQ0OCIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImNvc21vc19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/networks/cosmos
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkCosmos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkCosmos', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0h6u6h8._.js.map