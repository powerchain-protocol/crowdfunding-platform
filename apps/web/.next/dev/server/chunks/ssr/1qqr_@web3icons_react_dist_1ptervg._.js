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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDCB.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDCB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#DCB__a)',
                d: 'M14.613 5.903c0-2.48 1.405-2.903 2.903-2.903v11.654c0 1.3.058 2.438-.58 3.443 1.16 0 2.322 1.335 2.322 2.903h-8.42c-3.35 0-6.096-2.845-6.096-6.346 0-3.508 2.961-6.428 6.311-6.428 1.243 0 2.602.493 3.56 1.161zm-3.56 12.194c1.858 0 3.56-1.51 3.56-3.443a3.594 3.594 0 0 0-3.525-3.525 3.483 3.483 0 0 0-3.443 3.484c0 1.94 1.556 3.484 3.408 3.484'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'DCB__a',
                        x1: '6.556',
                        x2: '19.942',
                        y1: '17.464',
                        y2: '10.189',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#C41859'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#4D0E75'
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
                d: 'M14.613 5.903c0-2.48 1.405-2.903 2.903-2.903v11.654c0 1.3.058 2.438-.58 3.443 1.16 0 2.322 1.335 2.322 2.903h-8.42c-3.35 0-6.096-2.845-6.096-6.346 0-3.508 2.961-6.428 6.311-6.428 1.243 0 2.602.493 3.56 1.161zm-3.56 12.194c1.858 0 3.56-1.51 3.56-3.443a3.594 3.594 0 0 0-3.525-3.525 3.483 3.483 0 0 0-3.443 3.484c0 1.94 1.556 3.484 3.408 3.484'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#DCB__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#DCB__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M14.323 6.58c0-2.203 1.249-2.58 2.58-2.58v10.359c0 1.156.052 2.168-.516 3.06 1.032 0 2.064 1.188 2.064 2.581h-7.483c-2.978 0-5.42-2.529-5.42-5.641 0-3.118 2.633-5.714 5.61-5.714 1.105 0 2.313.439 3.165 1.032zm-3.164 10.84c1.651 0 3.163-1.343 3.163-3.061a3.195 3.195 0 0 0-3.132-3.133 3.097 3.097 0 0 0-3.061 3.097c0 1.724 1.383 3.096 3.03 3.096'
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
                        id: 'DCB__b',
                        x1: '7.161',
                        x2: '19.06',
                        y1: '16.857',
                        y2: '10.391',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#C41859'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#4D0E75'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'DCB__a'
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
 * @component @name TokenDCB
 * @description Web3Icon for TokenDCB
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjRENCX19hKSIgZD0iTTE0LjYxMyA1LjkwM2MwLTIuNDggMS40MDUtMi45MDMgMi45MDMtMi45MDN2MTEuNjU0YzAgMS4zLjA1OCAyLjQzOC0uNTggMy40NDMgMS4xNiAwIDIuMzIyIDEuMzM1IDIuMzIyIDIuOTAzaC04LjQyYy0zLjM1IDAtNi4wOTYtMi44NDUtNi4wOTYtNi4zNDYgMC0zLjUwOCAyLjk2MS02LjQyOCA2LjMxMS02LjQyOCAxLjI0MyAwIDIuNjAyLjQ5MyAzLjU2IDEuMTYxem0tMy41NiAxMi4xOTRjMS44NTggMCAzLjU2LTEuNTEgMy41Ni0zLjQ0M2EzLjU5NCAzLjU5NCAwIDAgMC0zLjUyNS0zLjUyNSAzLjQ4MyAzLjQ4MyAwIDAgMC0zLjQ0MyAzLjQ4NGMwIDEuOTQgMS41NTYgMy40ODQgMy40MDggMy40ODQiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iRENCX19hIiB4MT0iNi41NTYiIHgyPSIxOS45NDIiIHkxPSIxNy40NjQiIHkyPSIxMC4xODkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0M0MTg1OSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM0RDBFNzUiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC42MTMgNS45MDNjMC0yLjQ4IDEuNDA1LTIuOTAzIDIuOTAzLTIuOTAzdjExLjY1NGMwIDEuMy4wNTggMi40MzgtLjU4IDMuNDQzIDEuMTYgMCAyLjMyMiAxLjMzNSAyLjMyMiAyLjkwM2gtOC40MmMtMy4zNSAwLTYuMDk2LTIuODQ1LTYuMDk2LTYuMzQ2IDAtMy41MDggMi45NjEtNi40MjggNi4zMTEtNi40MjggMS4yNDMgMCAyLjYwMi40OTMgMy41NiAxLjE2MXptLTMuNTYgMTIuMTk0YzEuODU4IDAgMy41Ni0xLjUxIDMuNTYtMy40NDNhMy41OTQgMy41OTQgMCAwIDAtMy41MjUtMy41MjUgMy40ODMgMy40ODMgMCAwIDAtMy40NDMgMy40ODRjMCAxLjk0IDEuNTU2IDMuNDg0IDMuNDA4IDMuNDg0Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNEQ0JfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0RDQl9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE0LjMyMyA2LjU4YzAtMi4yMDMgMS4yNDktMi41OCAyLjU4LTIuNTh2MTAuMzU5YzAgMS4xNTYuMDUyIDIuMTY4LS41MTYgMy4wNiAxLjAzMiAwIDIuMDY0IDEuMTg4IDIuMDY0IDIuNTgxaC03LjQ4M2MtMi45NzggMC01LjQyLTIuNTI5LTUuNDItNS42NDEgMC0zLjExOCAyLjYzMy01LjcxNCA1LjYxLTUuNzE0IDEuMTA1IDAgMi4zMTMuNDM5IDMuMTY1IDEuMDMyem0tMy4xNjQgMTAuODRjMS42NTEgMCAzLjE2My0xLjM0MyAzLjE2My0zLjA2MWEzLjE5NSAzLjE5NSAwIDAgMC0zLjEzMi0zLjEzMyAzLjA5NyAzLjA5NyAwIDAgMC0zLjA2MSAzLjA5N2MwIDEuNzI0IDEuMzgzIDMuMDk2IDMuMDMgMy4wOTYiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iRENCX19iIiB4MT0iNy4xNjEiIHgyPSIxOS4wNiIgeTE9IjE2Ljg1NyIgeTI9IjEwLjM5MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQzQxODU5Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzREMEU3NSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJEQ0JfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/DCB
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDCB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDCB', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1ptervg._.js.map