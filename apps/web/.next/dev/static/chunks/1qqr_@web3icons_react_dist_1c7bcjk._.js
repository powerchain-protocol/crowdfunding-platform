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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPPAY.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPPAY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#PPAY__a)',
                d: 'm21 10.982-.017-.04L12 13.126c-3.156-.754-8.68-2.104-8.983-2.182L3 10.999C3.506 6.499 7.342 3 12 3c4.657 0 8.494 3.487 9 7.982m-.096 2.666L12 14.531l-8.904-.889a9.5 9.5 0 0 0 .495 1.71l8.409.585 8.381-.523a9 9 0 0 0 .523-1.766m-1.423 3.426q-3.736.249-7.481.27c-2.419-.023-5.794-.265-7.571-.405q.438.666.995 1.248h13.152q.496-.52.905-1.113m-2.2 2.238H6.713A9.06 9.06 0 0 0 12 21a9.05 9.05 0 0 0 5.282-1.688'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'PPAY__a',
                        x1: '12',
                        x2: '12',
                        y1: '3',
                        y2: '21',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FB4440'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#A72DC4'
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
                d: 'm21 10.982-.017-.04L12 13.126c-3.156-.754-8.68-2.104-8.983-2.182L3 10.999C3.506 6.499 7.342 3 12 3c4.657 0 8.494 3.487 9 7.982m-.096 2.666L12 14.531l-8.904-.889a9.5 9.5 0 0 0 .495 1.71l8.409.585 8.381-.523a9 9 0 0 0 .523-1.766m-1.423 3.426q-3.736.249-7.481.27c-2.419-.023-5.794-.265-7.571-.405q.438.666.995 1.248h13.152q.496-.52.905-1.113m-2.2 2.238H6.713A9.06 9.06 0 0 0 12 21a9.05 9.05 0 0 0 5.282-1.688'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#PPAY__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#PPAY__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm20 11.095-.015-.035L12 13c-2.805-.67-7.715-1.87-7.985-1.94L4 11.11C4.45 7.11 7.86 4 12 4s7.55 3.1 8 7.095m-.085 2.37L12 14.25l-7.915-.79c.1.53.25 1.035.44 1.52L12 15.5l7.45-.465c.205-.5.365-1.025.465-1.57M18.65 16.51q-3.321.222-6.65.24c-2.15-.02-5.15-.235-6.73-.36q.39.593.885 1.11h11.69q.441-.463.805-.99m-1.955 1.99H7.3A8.05 8.05 0 0 0 12 20c1.75 0 3.375-.555 4.695-1.5'
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
                        id: 'PPAY__b',
                        x1: '12',
                        x2: '12',
                        y1: '4',
                        y2: '20',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FB4440'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#A72DC4'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'PPAY__a'
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
 * @component @name TokenPPAY
 * @description Web3Icon for TokenPPAY
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjUFBBWV9fYSkiIGQ9Im0yMSAxMC45ODItLjAxNy0uMDRMMTIgMTMuMTI2Yy0zLjE1Ni0uNzU0LTguNjgtMi4xMDQtOC45ODMtMi4xODJMMyAxMC45OTlDMy41MDYgNi40OTkgNy4zNDIgMyAxMiAzYzQuNjU3IDAgOC40OTQgMy40ODcgOSA3Ljk4Mm0tLjA5NiAyLjY2NkwxMiAxNC41MzFsLTguOTA0LS44ODlhOS41IDkuNSAwIDAgMCAuNDk1IDEuNzFsOC40MDkuNTg1IDguMzgxLS41MjNhOSA5IDAgMCAwIC41MjMtMS43NjZtLTEuNDIzIDMuNDI2cS0zLjczNi4yNDktNy40ODEuMjdjLTIuNDE5LS4wMjMtNS43OTQtLjI2NS03LjU3MS0uNDA1cS40MzguNjY2Ljk5NSAxLjI0OGgxMy4xNTJxLjQ5Ni0uNTIuOTA1LTEuMTEzbS0yLjIgMi4yMzhINi43MTNBOS4wNiA5LjA2IDAgMCAwIDEyIDIxYTkuMDUgOS4wNSAwIDAgMCA1LjI4Mi0xLjY4OCIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJQUEFZX19hIiB4MT0iMTIiIHgyPSIxMiIgeTE9IjMiIHkyPSIyMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkI0NDQwIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0E3MkRDNCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0yMSAxMC45ODItLjAxNy0uMDRMMTIgMTMuMTI2Yy0zLjE1Ni0uNzU0LTguNjgtMi4xMDQtOC45ODMtMi4xODJMMyAxMC45OTlDMy41MDYgNi40OTkgNy4zNDIgMyAxMiAzYzQuNjU3IDAgOC40OTQgMy40ODcgOSA3Ljk4Mm0tLjA5NiAyLjY2NkwxMiAxNC41MzFsLTguOTA0LS44ODlhOS41IDkuNSAwIDAgMCAuNDk1IDEuNzFsOC40MDkuNTg1IDguMzgxLS41MjNhOSA5IDAgMCAwIC41MjMtMS43NjZtLTEuNDIzIDMuNDI2cS0zLjczNi4yNDktNy40ODEuMjdjLTIuNDE5LS4wMjMtNS43OTQtLjI2NS03LjU3MS0uNDA1cS40MzguNjY2Ljk5NSAxLjI0OGgxMy4xNTJxLjQ5Ni0uNTIuOTA1LTEuMTEzbS0yLjIgMi4yMzhINi43MTNBOS4wNiA5LjA2IDAgMCAwIDEyIDIxYTkuMDUgOS4wNSAwIDAgMCA1LjI4Mi0xLjY4OCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQUEFZX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNQUEFZX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMjAgMTEuMDk1LS4wMTUtLjAzNUwxMiAxM2MtMi44MDUtLjY3LTcuNzE1LTEuODctNy45ODUtMS45NEw0IDExLjExQzQuNDUgNy4xMSA3Ljg2IDQgMTIgNHM3LjU1IDMuMSA4IDcuMDk1bS0uMDg1IDIuMzdMMTIgMTQuMjVsLTcuOTE1LS43OWMuMS41My4yNSAxLjAzNS40NCAxLjUyTDEyIDE1LjVsNy40NS0uNDY1Yy4yMDUtLjUuMzY1LTEuMDI1LjQ2NS0xLjU3TTE4LjY1IDE2LjUxcS0zLjMyMS4yMjItNi42NS4yNGMtMi4xNS0uMDItNS4xNS0uMjM1LTYuNzMtLjM2cS4zOS41OTMuODg1IDEuMTFoMTEuNjlxLjQ0MS0uNDYzLjgwNS0uOTltLTEuOTU1IDEuOTlINy4zQTguMDUgOC4wNSAwIDAgMCAxMiAyMGMxLjc1IDAgMy4zNzUtLjU1NSA0LjY5NS0xLjUiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iUFBBWV9fYiIgeDE9IjEyIiB4Mj0iMTIiIHkxPSI0IiB5Mj0iMjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZCNDQ0MCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNBNzJEQzQiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iUFBBWV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/PPAY
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPPAY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPPAY', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1c7bcjk._.js.map