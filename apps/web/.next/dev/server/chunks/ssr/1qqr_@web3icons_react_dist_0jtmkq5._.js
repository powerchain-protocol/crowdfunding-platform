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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenTAKI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenTAKI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#TAKI__a)',
                d: 'M4.535 3.799A1.38 1.38 0 0 1 5.78 3h13.83c1.03 0 1.705 1.125 1.238 2.081L18.756 9.43c-.226.462-.63.855-1.131.883h-2.436l-2.672 9.647A1.394 1.394 0 0 1 11.184 21h-3.78c-.911 0-1.575-.9-1.339-1.811a177 177 0 0 1 2.205-7.774c.585-1.817 2.453-2.227 4.236-2.227h1.226c-.326-.406-.888-.563-1.676-.563H4.39c-1.03 0-1.704-.99-1.237-1.946zM15.19 9.188h2.053a.56.56 0 0 0 .523-.36l1.542-3.938a.563.563 0 0 0-.523-.765H6.155a.56.56 0 0 0-.517.349l-.928 2.25a.562.562 0 0 0 .517.776h6.83c1.743 0 2.744.883 3.132 1.688m-1.502 1.124h-1.406c-1.164 0-2.306.338-2.694 1.553-.675 2.11-1.508 5.383-2.003 7.29a.58.58 0 0 0 .551.72h2.61a.58.58 0 0 0 .546-.433z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'TAKI__a',
                        x1: '6.116',
                        x2: '12.422',
                        y1: '4.44',
                        y2: '21.563',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FDC85B'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#A811AA'
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
                d: 'M4.535 3.799A1.38 1.38 0 0 1 5.78 3h13.83c1.03 0 1.705 1.125 1.238 2.081L18.756 9.43c-.226.462-.63.855-1.131.883h-2.436l-2.672 9.647A1.394 1.394 0 0 1 11.184 21h-3.78c-.911 0-1.575-.9-1.339-1.811a177 177 0 0 1 2.205-7.774c.585-1.817 2.453-2.227 4.236-2.227h1.226c-.326-.406-.888-.563-1.676-.563H4.39c-1.03 0-1.704-.99-1.237-1.946zM15.19 9.188h2.053a.56.56 0 0 0 .523-.36l1.542-3.938a.563.563 0 0 0-.523-.765H6.155a.56.56 0 0 0-.517.349l-.928 2.25a.562.562 0 0 0 .517.776h6.83c1.743 0 2.744.883 3.132 1.688m-1.502 1.124h-1.406c-1.164 0-2.306.338-2.694 1.553-.675 2.11-1.508 5.383-2.003 7.29a.58.58 0 0 0 .551.72h2.61a.58.58 0 0 0 .546-.433z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#TAKI__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#TAKI__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M5.365 4.71A1.23 1.23 0 0 1 6.47 4h12.295c.915 0 1.515 1 1.1 1.85l-1.86 3.865c-.2.41-.56.76-1.005.785h-2.165l-2.375 8.575a1.24 1.24 0 0 1-1.185.925h-3.36c-.81 0-1.4-.8-1.19-1.61q.9-3.478 1.96-6.91c.52-1.615 2.18-1.98 3.765-1.98h1.09c-.29-.36-.79-.5-1.49-.5H5.235c-.915 0-1.515-.88-1.1-1.73zm9.47 4.79h1.825a.5.5 0 0 0 .465-.32l1.37-3.5A.498.498 0 0 0 18.03 5H6.805a.5.5 0 0 0-.46.31l-.825 2a.5.5 0 0 0 .46.69h6.07c1.55 0 2.44.785 2.785 1.5m-1.335 1h-1.25c-1.035 0-2.05.3-2.395 1.38-.6 1.875-1.34 4.785-1.78 6.48-.08.315.16.64.49.64h2.32c.23 0 .425-.17.485-.385z'
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
                        id: 'TAKI__b',
                        x1: '6.77',
                        x2: '12.375',
                        y1: '5.28',
                        y2: '20.5',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FDC85B'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#A811AA'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'TAKI__a'
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
 * @component @name TokenTAKI
 * @description Web3Icon for TokenTAKI
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjVEFLSV9fYSkiIGQ9Ik00LjUzNSAzLjc5OUExLjM4IDEuMzggMCAwIDEgNS43OCAzaDEzLjgzYzEuMDMgMCAxLjcwNSAxLjEyNSAxLjIzOCAyLjA4MUwxOC43NTYgOS40M2MtLjIyNi40NjItLjYzLjg1NS0xLjEzMS44ODNoLTIuNDM2bC0yLjY3MiA5LjY0N0ExLjM5NCAxLjM5NCAwIDAgMSAxMS4xODQgMjFoLTMuNzhjLS45MTEgMC0xLjU3NS0uOS0xLjMzOS0xLjgxMWExNzcgMTc3IDAgMCAxIDIuMjA1LTcuNzc0Yy41ODUtMS44MTcgMi40NTMtMi4yMjcgNC4yMzYtMi4yMjdoMS4yMjZjLS4zMjYtLjQwNi0uODg4LS41NjMtMS42NzYtLjU2M0g0LjM5Yy0xLjAzIDAtMS43MDQtLjk5LTEuMjM3LTEuOTQ2ek0xNS4xOSA5LjE4OGgyLjA1M2EuNTYuNTYgMCAwIDAgLjUyMy0uMzZsMS41NDItMy45MzhhLjU2My41NjMgMCAwIDAtLjUyMy0uNzY1SDYuMTU1YS41Ni41NiAwIDAgMC0uNTE3LjM0OWwtLjkyOCAyLjI1YS41NjIuNTYyIDAgMCAwIC41MTcuNzc2aDYuODNjMS43NDMgMCAyLjc0NC44ODMgMy4xMzIgMS42ODhtLTEuNTAyIDEuMTI0aC0xLjQwNmMtMS4xNjQgMC0yLjMwNi4zMzgtMi42OTQgMS41NTMtLjY3NSAyLjExLTEuNTA4IDUuMzgzLTIuMDAzIDcuMjlhLjU4LjU4IDAgMCAwIC41NTEuNzJoMi42MWEuNTguNTggMCAwIDAgLjU0Ni0uNDMzeiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJUQUtJX19hIiB4MT0iNi4xMTYiIHgyPSIxMi40MjIiIHkxPSI0LjQ0IiB5Mj0iMjEuNTYzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGREM4NUIiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQTgxMUFBIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjUzNSAzLjc5OUExLjM4IDEuMzggMCAwIDEgNS43OCAzaDEzLjgzYzEuMDMgMCAxLjcwNSAxLjEyNSAxLjIzOCAyLjA4MUwxOC43NTYgOS40M2MtLjIyNi40NjItLjYzLjg1NS0xLjEzMS44ODNoLTIuNDM2bC0yLjY3MiA5LjY0N0ExLjM5NCAxLjM5NCAwIDAgMSAxMS4xODQgMjFoLTMuNzhjLS45MTEgMC0xLjU3NS0uOS0xLjMzOS0xLjgxMWExNzcgMTc3IDAgMCAxIDIuMjA1LTcuNzc0Yy41ODUtMS44MTcgMi40NTMtMi4yMjcgNC4yMzYtMi4yMjdoMS4yMjZjLS4zMjYtLjQwNi0uODg4LS41NjMtMS42NzYtLjU2M0g0LjM5Yy0xLjAzIDAtMS43MDQtLjk5LTEuMjM3LTEuOTQ2ek0xNS4xOSA5LjE4OGgyLjA1M2EuNTYuNTYgMCAwIDAgLjUyMy0uMzZsMS41NDItMy45MzhhLjU2My41NjMgMCAwIDAtLjUyMy0uNzY1SDYuMTU1YS41Ni41NiAwIDAgMC0uNTE3LjM0OWwtLjkyOCAyLjI1YS41NjIuNTYyIDAgMCAwIC41MTcuNzc2aDYuODNjMS43NDMgMCAyLjc0NC44ODMgMy4xMzIgMS42ODhtLTEuNTAyIDEuMTI0aC0xLjQwNmMtMS4xNjQgMC0yLjMwNi4zMzgtMi42OTQgMS41NTMtLjY3NSAyLjExLTEuNTA4IDUuMzgzLTIuMDAzIDcuMjlhLjU4LjU4IDAgMCAwIC41NTEuNzJoMi42MWEuNTguNTggMCAwIDAgLjU0Ni0uNDMzeiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNUQUtJX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNUQUtJX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNS4zNjUgNC43MUExLjIzIDEuMjMgMCAwIDEgNi40NyA0aDEyLjI5NWMuOTE1IDAgMS41MTUgMSAxLjEgMS44NWwtMS44NiAzLjg2NWMtLjIuNDEtLjU2Ljc2LTEuMDA1Ljc4NWgtMi4xNjVsLTIuMzc1IDguNTc1YTEuMjQgMS4yNCAwIDAgMS0xLjE4NS45MjVoLTMuMzZjLS44MSAwLTEuNC0uOC0xLjE5LTEuNjFxLjktMy40NzggMS45Ni02LjkxYy41Mi0xLjYxNSAyLjE4LTEuOTggMy43NjUtMS45OGgxLjA5Yy0uMjktLjM2LS43OS0uNS0xLjQ5LS41SDUuMjM1Yy0uOTE1IDAtMS41MTUtLjg4LTEuMS0xLjczem05LjQ3IDQuNzloMS44MjVhLjUuNSAwIDAgMCAuNDY1LS4zMmwxLjM3LTMuNUEuNDk4LjQ5OCAwIDAgMCAxOC4wMyA1SDYuODA1YS41LjUgMCAwIDAtLjQ2LjMxbC0uODI1IDJhLjUuNSAwIDAgMCAuNDYuNjloNi4wN2MxLjU1IDAgMi40NC43ODUgMi43ODUgMS41bS0xLjMzNSAxaC0xLjI1Yy0xLjAzNSAwLTIuMDUuMy0yLjM5NSAxLjM4LS42IDEuODc1LTEuMzQgNC43ODUtMS43OCA2LjQ4LS4wOC4zMTUuMTYuNjQuNDkuNjRoMi4zMmMuMjMgMCAuNDI1LS4xNy40ODUtLjM4NXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iVEFLSV9fYiIgeDE9IjYuNzciIHgyPSIxMi4zNzUiIHkxPSI1LjI4IiB5Mj0iMjAuNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkRDODVCIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0E4MTFBQSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJUQUtJX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/TAKI
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenTAKI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenTAKI', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0jtmkq5._.js.map