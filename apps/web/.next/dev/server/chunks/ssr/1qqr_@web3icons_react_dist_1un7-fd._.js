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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/wallets/WalletDaimo.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>WalletDaimo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#daimo__a)',
                d: 'M12.487 20.716a.568.568 0 0 1-.983 0L3.077 6.137a.58.58 0 0 1 .207-.785A17.24 17.24 0 0 1 12 3c3.174 0 6.151.856 8.716 2.353a.573.573 0 0 1 .206.785zm-.264-1.837c.044-.06.094-.147.162-.265l6.218-10.743c-.27.028-.544.022-.817-.006-.911-.094-1.951-.456-2.965-.808l-.002-.001-.328-.114c-1.155-.399-2.296-.764-3.376-.833-.874-.055-1.683.086-2.41.56a.27.27 0 0 0-.106.305zm-1.999-2.656L7.34 6.75a.58.58 0 0 1 .167-.597c1.119-1 2.404-1.269 3.68-1.188 1.252.08 2.529.497 3.673.893l.309.107h.001c1.051.365 1.96.68 2.732.76.411.042.737.01.996-.09l.085-.033c.184-.07.371-.14.525-.304a.3.3 0 0 0 .03-.11.3.3 0 0 0-.051-.172c-.041-.057-.111-.092-.252-.163A16.1 16.1 0 0 0 12 4.147c-2.6 0-5.056.614-7.235 1.705-.14.07-.211.106-.252.163a.3.3 0 0 0-.052.173c.003.07.043.14.124.28z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'daimo__a',
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
                                stopColor: '#66B95F'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#95CE96'
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
                d: 'M12.487 20.716a.568.568 0 0 1-.983 0L3.077 6.137a.58.58 0 0 1 .207-.785A17.24 17.24 0 0 1 12 3c3.174 0 6.151.856 8.716 2.353a.573.573 0 0 1 .206.785zm-.264-1.837c.044-.06.094-.147.162-.265l6.218-10.743c-.27.028-.544.022-.817-.006-.911-.094-1.951-.456-2.965-.808l-.002-.001-.328-.114c-1.155-.399-2.296-.764-3.376-.833-.874-.055-1.683.086-2.41.56a.27.27 0 0 0-.106.305zm-1.999-2.656L7.34 6.75a.58.58 0 0 1 .167-.597c1.119-1 2.404-1.269 3.68-1.188 1.252.08 2.529.497 3.673.893l.309.107h.001c1.051.365 1.96.68 2.732.76.411.042.737.01.996-.09l.085-.033c.184-.07.371-.14.525-.304a.3.3 0 0 0 .03-.11.3.3 0 0 0-.051-.172c-.041-.057-.111-.092-.252-.163A16.1 16.1 0 0 0 12 4.147c-2.6 0-5.056.614-7.235 1.705-.14.07-.211.106-.252.163a.3.3 0 0 0-.052.173c.003.07.043.14.124.28z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#daimo__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#71BE6C',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.433 19.747a.505.505 0 0 1-.874 0L4.069 6.789a.514.514 0 0 1 .183-.698A15.3 15.3 0 0 1 12 4c2.821 0 5.468.761 7.747 2.091a.51.51 0 0 1 .184.699zm-.235-1.632c.04-.054.084-.13.144-.236l5.527-9.55c-.24.026-.483.02-.726-.005-.81-.083-1.734-.405-2.635-.718h-.002l-.292-.102c-1.027-.355-2.04-.68-3-.74-.778-.05-1.497.076-2.143.498a.24.24 0 0 0-.094.27zm-1.777-2.361L7.858 7.333a.51.51 0 0 1 .148-.532c.995-.889 2.137-1.127 3.27-1.055 1.114.07 2.25.442 3.266.793l.275.095c.935.325 1.743.605 2.43.676.365.037.654.01.884-.08l.076-.03c.163-.06.33-.123.467-.269a.3.3 0 0 0 .027-.097.25.25 0 0 0-.046-.154c-.036-.05-.099-.082-.224-.145A14.3 14.3 0 0 0 12 5.02c-2.31 0-4.494.546-6.431 1.516-.125.062-.188.094-.224.144a.25.25 0 0 0-.046.154c.002.062.038.124.11.249z',
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
                        id: 'daimo__a'
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
 * @component @name WalletDaimo
 * @description Web3Icon for WalletDaimo
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjZGFpbW9fX2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi40ODcgMjAuNzE2YS41NjguNTY4IDAgMCAxLS45ODMgMEwzLjA3NyA2LjEzN2EuNTguNTggMCAwIDEgLjIwNy0uNzg1QTE3LjI0IDE3LjI0IDAgMCAxIDEyIDNjMy4xNzQgMCA2LjE1MS44NTYgOC43MTYgMi4zNTNhLjU3My41NzMgMCAwIDEgLjIwNi43ODV6bS0uMjY0LTEuODM3Yy4wNDQtLjA2LjA5NC0uMTQ3LjE2Mi0uMjY1bDYuMjE4LTEwLjc0M2MtLjI3LjAyOC0uNTQ0LjAyMi0uODE3LS4wMDYtLjkxMS0uMDk0LTEuOTUxLS40NTYtMi45NjUtLjgwOGwtLjAwMi0uMDAxLS4zMjgtLjExNGMtMS4xNTUtLjM5OS0yLjI5Ni0uNzY0LTMuMzc2LS44MzMtLjg3NC0uMDU1LTEuNjgzLjA4Ni0yLjQxLjU2YS4yNy4yNyAwIDAgMC0uMTA2LjMwNXptLTEuOTk5LTIuNjU2TDcuMzQgNi43NWEuNTguNTggMCAwIDEgLjE2Ny0uNTk3YzEuMTE5LTEgMi40MDQtMS4yNjkgMy42OC0xLjE4OCAxLjI1Mi4wOCAyLjUyOS40OTcgMy42NzMuODkzbC4zMDkuMTA3aC4wMDFjMS4wNTEuMzY1IDEuOTYuNjggMi43MzIuNzYuNDExLjA0Mi43MzcuMDEuOTk2LS4wOWwuMDg1LS4wMzNjLjE4NC0uMDcuMzcxLS4xNC41MjUtLjMwNGEuMy4zIDAgMCAwIC4wMy0uMTEuMy4zIDAgMCAwLS4wNTEtLjE3MmMtLjA0MS0uMDU3LS4xMTEtLjA5Mi0uMjUyLS4xNjNBMTYuMSAxNi4xIDAgMCAwIDEyIDQuMTQ3Yy0yLjYgMC01LjA1Ni42MTQtNy4yMzUgMS43MDUtLjE0LjA3LS4yMTEuMTA2LS4yNTIuMTYzYS4zLjMgMCAwIDAtLjA1Mi4xNzNjLjAwMy4wNy4wNDMuMTQuMTI0LjI4eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImRhaW1vX19hIiB4MT0iMTIiIHgyPSIxMiIgeTE9IjMiIHkyPSIyMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNjZCOTVGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzk1Q0U5NiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjQ4NyAyMC43MTZhLjU2OC41NjggMCAwIDEtLjk4MyAwTDMuMDc3IDYuMTM3YS41OC41OCAwIDAgMSAuMjA3LS43ODVBMTcuMjQgMTcuMjQgMCAwIDEgMTIgM2MzLjE3NCAwIDYuMTUxLjg1NiA4LjcxNiAyLjM1M2EuNTczLjU3MyAwIDAgMSAuMjA2Ljc4NXptLS4yNjQtMS44MzdjLjA0NC0uMDYuMDk0LS4xNDcuMTYyLS4yNjVsNi4yMTgtMTAuNzQzYy0uMjcuMDI4LS41NDQuMDIyLS44MTctLjAwNi0uOTExLS4wOTQtMS45NTEtLjQ1Ni0yLjk2NS0uODA4bC0uMDAyLS4wMDEtLjMyOC0uMTE0Yy0xLjE1NS0uMzk5LTIuMjk2LS43NjQtMy4zNzYtLjgzMy0uODc0LS4wNTUtMS42ODMuMDg2LTIuNDEuNTZhLjI3LjI3IDAgMCAwLS4xMDYuMzA1em0tMS45OTktMi42NTZMNy4zNCA2Ljc1YS41OC41OCAwIDAgMSAuMTY3LS41OTdjMS4xMTktMSAyLjQwNC0xLjI2OSAzLjY4LTEuMTg4IDEuMjUyLjA4IDIuNTI5LjQ5NyAzLjY3My44OTNsLjMwOS4xMDdoLjAwMWMxLjA1MS4zNjUgMS45Ni42OCAyLjczMi43Ni40MTEuMDQyLjczNy4wMS45OTYtLjA5bC4wODUtLjAzM2MuMTg0LS4wNy4zNzEtLjE0LjUyNS0uMzA0YS4zLjMgMCAwIDAgLjAzLS4xMS4zLjMgMCAwIDAtLjA1MS0uMTcyYy0uMDQxLS4wNTctLjExMS0uMDkyLS4yNTItLjE2M0ExNi4xIDE2LjEgMCAwIDAgMTIgNC4xNDdjLTIuNiAwLTUuMDU2LjYxNC03LjIzNSAxLjcwNS0uMTQuMDctLjIxMS4xMDYtLjI1Mi4xNjNhLjMuMyAwIDAgMC0uMDUyLjE3M2MuMDAzLjA3LjA0My4xNC4xMjQuMjh6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNkYWltb19fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiM3MUJFNkMiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuNDMzIDE5Ljc0N2EuNTA1LjUwNSAwIDAgMS0uODc0IDBMNC4wNjkgNi43ODlhLjUxNC41MTQgMCAwIDEgLjE4My0uNjk4QTE1LjMgMTUuMyAwIDAgMSAxMiA0YzIuODIxIDAgNS40NjguNzYxIDcuNzQ3IDIuMDkxYS41MS41MSAwIDAgMSAuMTg0LjY5OXptLS4yMzUtMS42MzJjLjA0LS4wNTQuMDg0LS4xMy4xNDQtLjIzNmw1LjUyNy05LjU1Yy0uMjQuMDI2LS40ODMuMDItLjcyNi0uMDA1LS44MS0uMDgzLTEuNzM0LS40MDUtMi42MzUtLjcxOGgtLjAwMmwtLjI5Mi0uMTAyYy0xLjAyNy0uMzU1LTIuMDQtLjY4LTMtLjc0LS43NzgtLjA1LTEuNDk3LjA3Ni0yLjE0My40OThhLjI0LjI0IDAgMCAwLS4wOTQuMjd6bS0xLjc3Ny0yLjM2MUw3Ljg1OCA3LjMzM2EuNTEuNTEgMCAwIDEgLjE0OC0uNTMyYy45OTUtLjg4OSAyLjEzNy0xLjEyNyAzLjI3LTEuMDU1IDEuMTE0LjA3IDIuMjUuNDQyIDMuMjY2Ljc5M2wuMjc1LjA5NWMuOTM1LjMyNSAxLjc0My42MDUgMi40My42NzYuMzY1LjAzNy42NTQuMDEuODg0LS4wOGwuMDc2LS4wM2MuMTYzLS4wNi4zMy0uMTIzLjQ2Ny0uMjY5YS4zLjMgMCAwIDAgLjAyNy0uMDk3LjI1LjI1IDAgMCAwLS4wNDYtLjE1NGMtLjAzNi0uMDUtLjA5OS0uMDgyLS4yMjQtLjE0NUExNC4zIDE0LjMgMCAwIDAgMTIgNS4wMmMtMi4zMSAwLTQuNDk0LjU0Ni02LjQzMSAxLjUxNi0uMTI1LjA2Mi0uMTg4LjA5NC0uMjI0LjE0NGEuMjUuMjUgMCAwIDAtLjA0Ni4xNTRjLjAwMi4wNjIuMDM4LjEyNC4xMS4yNDl6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iZGFpbW9fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/wallets/daimo
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const WalletDaimo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('WalletDaimo', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1un7-fd._.js.map