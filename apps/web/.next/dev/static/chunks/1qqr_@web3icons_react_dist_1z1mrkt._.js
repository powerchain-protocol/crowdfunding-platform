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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenLEOX.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenLEOX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M4.9 16.656a.546.546 0 1 0 0-1.093.546.546 0 0 0 0 1.093m2.02-1.64h.05a.4.4 0 0 0 .289-.125l5.713-5.719a.4.4 0 0 0 .12-.306.41.41 0 0 0-.41-.404.42.42 0 0 0-.3.12L7.04 13.924a6.2 6.2 0 0 1-.764-2.987c0-3.42 2.785-6.025 6.194-6.025a6.16 6.16 0 0 1 3.43 1.021.415.415 0 0 0 .53-.049l2.005-2.174a.415.415 0 0 0-.279-.71.46.46 0 0 0-.311.12l-1.852 1.906a6.63 6.63 0 0 0-3.518-.934c-3.878 0-7.03 2.966-7.03 6.845A7 7 0 0 0 6.62 14.83c.07.104.18.17.306.186zm11.307-8.029a.426.426 0 0 0-.758.196.4.4 0 0 0 .08.307 6.1 6.1 0 0 1 1.279 3.709 6.336 6.336 0 0 1-6.282 6.303c-1.081 0-2.168-.382-3.102-.89l5.167-5.255a.4.4 0 0 0 .12-.278.46.46 0 0 0-.12-.312.43.43 0 0 0-.328-.12.44.44 0 0 0-.273.12L4.473 20.31a.42.42 0 0 0 .596.59l3.752-3.682a7.25 7.25 0 0 0 3.682 1.076c3.932 0 7.144-3.222 7.144-7.1a6.9 6.9 0 0 0-1.42-4.207'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.9 16.656a.546.546 0 1 0 0-1.093.546.546 0 0 0 0 1.093m2.02-1.64h.05a.4.4 0 0 0 .289-.125l5.713-5.719a.4.4 0 0 0 .12-.306.41.41 0 0 0-.41-.404.42.42 0 0 0-.3.12L7.04 13.924a6.2 6.2 0 0 1-.764-2.987c0-3.42 2.785-6.025 6.194-6.025a6.16 6.16 0 0 1 3.43 1.021.415.415 0 0 0 .53-.049l2.005-2.174a.415.415 0 0 0-.279-.71.46.46 0 0 0-.311.12l-1.852 1.906a6.63 6.63 0 0 0-3.518-.934c-3.878 0-7.03 2.966-7.03 6.845A7 7 0 0 0 6.62 14.83c.07.104.18.17.306.186zm11.307-8.029a.426.426 0 0 0-.758.196.4.4 0 0 0 .08.307 6.1 6.1 0 0 1 1.279 3.709 6.336 6.336 0 0 1-6.282 6.303c-1.081 0-2.168-.382-3.102-.89l5.167-5.255a.4.4 0 0 0 .12-.278.46.46 0 0 0-.12-.312.43.43 0 0 0-.328-.12.44.44 0 0 0-.273.12L4.473 20.31a.42.42 0 0 0 .596.59l3.752-3.682a7.25 7.25 0 0 0 3.682 1.076c3.932 0 7.144-3.222 7.144-7.1a6.9 6.9 0 0 0-1.42-4.207'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#LEOX__a)'
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
                        d: 'M5.688 16.138a.486.486 0 1 0 0-.971.486.486 0 0 0 0 .971m1.797-1.456h.043a.35.35 0 0 0 .258-.112l5.078-5.084a.37.37 0 0 0 .107-.271.364.364 0 0 0-.364-.36.37.37 0 0 0-.267.107l-4.75 4.749a5.5 5.5 0 0 1-.68-2.656c0-3.04 2.477-5.356 5.507-5.356a5.5 5.5 0 0 1 3.049.908.37.37 0 0 0 .47-.043L17.72 4.63a.37.37 0 0 0-.248-.63.4.4 0 0 0-.277.107L15.55 5.8a5.9 5.9 0 0 0-3.127-.83c-3.447 0-6.248 2.636-6.248 6.084 0 1.238.359 2.432 1.044 3.462.063.092.16.15.271.165zm10.05-7.138a.379.379 0 0 0-.674.174.36.36 0 0 0 .072.273 5.42 5.42 0 0 1 1.136 3.297 5.633 5.633 0 0 1-5.583 5.603c-.962 0-1.928-.34-2.758-.792l4.593-4.67a.37.37 0 0 0 .107-.248.4.4 0 0 0-.107-.277.38.38 0 0 0-.291-.107.4.4 0 0 0-.243.107l-8.478 8.483a.374.374 0 0 0 .53.524l3.335-3.273a6.44 6.44 0 0 0 3.273.957c3.496 0 6.35-2.865 6.35-6.312 0-1.36-.436-2.656-1.262-3.739'
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
                        id: 'LEOX__a'
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
 * @component @name TokenLEOX
 * @description Web3Icon for TokenLEOX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjkgMTYuNjU2YS41NDYuNTQ2IDAgMSAwIDAtMS4wOTMuNTQ2LjU0NiAwIDAgMCAwIDEuMDkzbTIuMDItMS42NGguMDVhLjQuNCAwIDAgMCAuMjg5LS4xMjVsNS43MTMtNS43MTlhLjQuNCAwIDAgMCAuMTItLjMwNi40MS40MSAwIDAgMC0uNDEtLjQwNC40Mi40MiAwIDAgMC0uMy4xMkw3LjA0IDEzLjkyNGE2LjIgNi4yIDAgMCAxLS43NjQtMi45ODdjMC0zLjQyIDIuNzg1LTYuMDI1IDYuMTk0LTYuMDI1YTYuMTYgNi4xNiAwIDAgMSAzLjQzIDEuMDIxLjQxNS40MTUgMCAwIDAgLjUzLS4wNDlsMi4wMDUtMi4xNzRhLjQxNS40MTUgMCAwIDAtLjI3OS0uNzEuNDYuNDYgMCAwIDAtLjMxMS4xMmwtMS44NTIgMS45MDZhNi42MyA2LjYzIDAgMCAwLTMuNTE4LS45MzRjLTMuODc4IDAtNy4wMyAyLjk2Ni03LjAzIDYuODQ1QTcgNyAwIDAgMCA2LjYyIDE0LjgzYy4wNy4xMDQuMTguMTcuMzA2LjE4NnptMTEuMzA3LTguMDI5YS40MjYuNDI2IDAgMCAwLS43NTguMTk2LjQuNCAwIDAgMCAuMDguMzA3IDYuMSA2LjEgMCAwIDEgMS4yNzkgMy43MDkgNi4zMzYgNi4zMzYgMCAwIDEtNi4yODIgNi4zMDNjLTEuMDgxIDAtMi4xNjgtLjM4Mi0zLjEwMi0uODlsNS4xNjctNS4yNTVhLjQuNCAwIDAgMCAuMTItLjI3OC40Ni40NiAwIDAgMC0uMTItLjMxMi40My40MyAwIDAgMC0uMzI4LS4xMi40NC40NCAwIDAgMC0uMjczLjEyTDQuNDczIDIwLjMxYS40Mi40MiAwIDAgMCAuNTk2LjU5bDMuNzUyLTMuNjgyYTcuMjUgNy4yNSAwIDAgMCAzLjY4MiAxLjA3NmMzLjkzMiAwIDcuMTQ0LTMuMjIyIDcuMTQ0LTcuMWE2LjkgNi45IDAgMCAwLTEuNDItNC4yMDciLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjkgMTYuNjU2YS41NDYuNTQ2IDAgMSAwIDAtMS4wOTMuNTQ2LjU0NiAwIDAgMCAwIDEuMDkzbTIuMDItMS42NGguMDVhLjQuNCAwIDAgMCAuMjg5LS4xMjVsNS43MTMtNS43MTlhLjQuNCAwIDAgMCAuMTItLjMwNi40MS40MSAwIDAgMC0uNDEtLjQwNC40Mi40MiAwIDAgMC0uMy4xMkw3LjA0IDEzLjkyNGE2LjIgNi4yIDAgMCAxLS43NjQtMi45ODdjMC0zLjQyIDIuNzg1LTYuMDI1IDYuMTk0LTYuMDI1YTYuMTYgNi4xNiAwIDAgMSAzLjQzIDEuMDIxLjQxNS40MTUgMCAwIDAgLjUzLS4wNDlsMi4wMDUtMi4xNzRhLjQxNS40MTUgMCAwIDAtLjI3OS0uNzEuNDYuNDYgMCAwIDAtLjMxMS4xMmwtMS44NTIgMS45MDZhNi42MyA2LjYzIDAgMCAwLTMuNTE4LS45MzRjLTMuODc4IDAtNy4wMyAyLjk2Ni03LjAzIDYuODQ1QTcgNyAwIDAgMCA2LjYyIDE0LjgzYy4wNy4xMDQuMTguMTcuMzA2LjE4NnptMTEuMzA3LTguMDI5YS40MjYuNDI2IDAgMCAwLS43NTguMTk2LjQuNCAwIDAgMCAuMDguMzA3IDYuMSA2LjEgMCAwIDEgMS4yNzkgMy43MDkgNi4zMzYgNi4zMzYgMCAwIDEtNi4yODIgNi4zMDNjLTEuMDgxIDAtMi4xNjgtLjM4Mi0zLjEwMi0uODlsNS4xNjctNS4yNTVhLjQuNCAwIDAgMCAuMTItLjI3OC40Ni40NiAwIDAgMC0uMTItLjMxMi40My40MyAwIDAgMC0uMzI4LS4xMi40NC40NCAwIDAgMC0uMjczLjEyTDQuNDczIDIwLjMxYS40Mi40MiAwIDAgMCAuNTk2LjU5bDMuNzUyLTMuNjgyYTcuMjUgNy4yNSAwIDAgMCAzLjY4MiAxLjA3NmMzLjkzMiAwIDcuMTQ0LTMuMjIyIDcuMTQ0LTcuMWE2LjkgNi45IDAgMCAwLTEuNDItNC4yMDciLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNMRU9YX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNS42ODggMTYuMTM4YS40ODYuNDg2IDAgMSAwIDAtLjk3MS40ODYuNDg2IDAgMCAwIDAgLjk3MW0xLjc5Ny0xLjQ1NmguMDQzYS4zNS4zNSAwIDAgMCAuMjU4LS4xMTJsNS4wNzgtNS4wODRhLjM3LjM3IDAgMCAwIC4xMDctLjI3MS4zNjQuMzY0IDAgMCAwLS4zNjQtLjM2LjM3LjM3IDAgMCAwLS4yNjcuMTA3bC00Ljc1IDQuNzQ5YTUuNSA1LjUgMCAwIDEtLjY4LTIuNjU2YzAtMy4wNCAyLjQ3Ny01LjM1NiA1LjUwNy01LjM1NmE1LjUgNS41IDAgMCAxIDMuMDQ5LjkwOC4zNy4zNyAwIDAgMCAuNDctLjA0M0wxNy43MiA0LjYzYS4zNy4zNyAwIDAgMC0uMjQ4LS42My40LjQgMCAwIDAtLjI3Ny4xMDdMMTUuNTUgNS44YTUuOSA1LjkgMCAwIDAtMy4xMjctLjgzYy0zLjQ0NyAwLTYuMjQ4IDIuNjM2LTYuMjQ4IDYuMDg0IDAgMS4yMzguMzU5IDIuNDMyIDEuMDQ0IDMuNDYyLjA2My4wOTIuMTYuMTUuMjcxLjE2NXptMTAuMDUtNy4xMzhhLjM3OS4zNzkgMCAwIDAtLjY3NC4xNzQuMzYuMzYgMCAwIDAgLjA3Mi4yNzMgNS40MiA1LjQyIDAgMCAxIDEuMTM2IDMuMjk3IDUuNjMzIDUuNjMzIDAgMCAxLTUuNTgzIDUuNjAzYy0uOTYyIDAtMS45MjgtLjM0LTIuNzU4LS43OTJsNC41OTMtNC42N2EuMzcuMzcgMCAwIDAgLjEwNy0uMjQ4LjQuNCAwIDAgMC0uMTA3LS4yNzcuMzguMzggMCAwIDAtLjI5MS0uMTA3LjQuNCAwIDAgMC0uMjQzLjEwN2wtOC40NzggOC40ODNhLjM3NC4zNzQgMCAwIDAgLjUzLjUyNGwzLjMzNS0zLjI3M2E2LjQ0IDYuNDQgMCAwIDAgMy4yNzMuOTU3YzMuNDk2IDAgNi4zNS0yLjg2NSA2LjM1LTYuMzEyIDAtMS4zNi0uNDM2LTIuNjU2LTEuMjYyLTMuNzM5Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkxFT1hfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/LEOX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenLEOX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenLEOX', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1z1mrkt._.js.map