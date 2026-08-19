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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMLN.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMLN
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#MLN__a)',
                d: 'M13.703 6.162c-.808 0-1.46.671-1.46 1.498V12H9.324V9.086a.973.973 0 1 0-1.946 0V12H4.946v-.973a.972.972 0 1 0-1.946 0V12h1.946v1.571c0 .745.545 1.348 1.216 1.348.672 0 1.216-.603 1.216-1.348V12h1.946v4.315a1.494 1.494 0 0 0 1.46 1.523c.807 0 1.46-.681 1.46-1.523V12h2.918v3.42c0 .53.438.958.973.958a.966.966 0 0 0 .973-.958V12h1.946v.973a.973.973 0 1 0 1.946 0V12h-1.946V8.945c0-.462-.438-.837-.973-.837s-.973.375-.973.837V12h-1.946V7.66c0-.827-.652-1.498-1.46-1.498'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'MLN__a',
                        x1: '12',
                        x2: '12',
                        y1: '6.162',
                        y2: '17.838',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.24',
                                stopColor: '#6F4AEF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.66',
                                stopColor: '#01CBBF'
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
                d: 'M13.703 6.162c-.808 0-1.46.671-1.46 1.498V12H9.324V9.086a.973.973 0 1 0-1.946 0V12H4.946v-.973a.973.973 0 0 0-1.946 0V12h1.946v1.571c0 .745.545 1.348 1.216 1.348.672 0 1.216-.603 1.216-1.348V12h1.946v4.315a1.494 1.494 0 0 0 1.46 1.523c.807 0 1.46-.681 1.46-1.523V12h2.918v3.42c0 .53.438.958.973.958a.966.966 0 0 0 .973-.958V12h1.946v.973a.972.972 0 1 0 1.946 0V12h-1.946V8.945c0-.462-.438-.837-.973-.837s-.973.375-.973.837V12h-1.946V7.66c0-.827-.652-1.498-1.46-1.498'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MLN__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#MLN__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.514 6.81c-.718 0-1.298.597-1.298 1.332V12H9.622V9.41a.865.865 0 1 0-1.73 0V12H5.73v-.865a.865.865 0 1 0-1.73 0V12h1.73v1.396c0 .662.484 1.198 1.08 1.198.598 0 1.082-.536 1.082-1.197V12h1.73v3.835a1.33 1.33 0 0 0 1.297 1.354c.718 0 1.297-.606 1.297-1.354V12h2.595v3.04a.86.86 0 0 0 .865.852.86.86 0 0 0 .865-.852V12h1.73v.864a.865.865 0 1 0 1.729 0V12h-1.73V9.284c0-.41-.389-.744-.865-.744-.475 0-.864.333-.864.744V12h-1.73V8.142c0-.735-.58-1.331-1.297-1.331'
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
                        id: 'MLN__b',
                        x1: '12',
                        x2: '12',
                        y1: '6.811',
                        y2: '17.189',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.24',
                                stopColor: '#6F4AEF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.66',
                                stopColor: '#01CBBF'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'MLN__a'
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
 * @component @name TokenMLN
 * @description Web3Icon for TokenMLN
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjTUxOX19hKSIgZD0iTTEzLjcwMyA2LjE2MmMtLjgwOCAwLTEuNDYuNjcxLTEuNDYgMS40OThWMTJIOS4zMjRWOS4wODZhLjk3My45NzMgMCAxIDAtMS45NDYgMFYxMkg0Ljk0NnYtLjk3M2EuOTcyLjk3MiAwIDEgMC0xLjk0NiAwVjEyaDEuOTQ2djEuNTcxYzAgLjc0NS41NDUgMS4zNDggMS4yMTYgMS4zNDguNjcyIDAgMS4yMTYtLjYwMyAxLjIxNi0xLjM0OFYxMmgxLjk0NnY0LjMxNWExLjQ5NCAxLjQ5NCAwIDAgMCAxLjQ2IDEuNTIzYy44MDcgMCAxLjQ2LS42ODEgMS40Ni0xLjUyM1YxMmgyLjkxOHYzLjQyYzAgLjUzLjQzOC45NTguOTczLjk1OGEuOTY2Ljk2NiAwIDAgMCAuOTczLS45NThWMTJoMS45NDZ2Ljk3M2EuOTczLjk3MyAwIDEgMCAxLjk0NiAwVjEyaC0xLjk0NlY4Ljk0NWMwLS40NjItLjQzOC0uODM3LS45NzMtLjgzN3MtLjk3My4zNzUtLjk3My44MzdWMTJoLTEuOTQ2VjcuNjZjMC0uODI3LS42NTItMS40OTgtMS40Ni0xLjQ5OCIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJNTE5fX2EiIHgxPSIxMiIgeDI9IjEyIiB5MT0iNi4xNjIiIHkyPSIxNy44MzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMjQiIHN0b3AtY29sb3I9IiM2RjRBRUYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNjYiIHN0b3AtY29sb3I9IiMwMUNCQkYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMy43MDMgNi4xNjJjLS44MDggMC0xLjQ2LjY3MS0xLjQ2IDEuNDk4VjEySDkuMzI0VjkuMDg2YS45NzMuOTczIDAgMSAwLTEuOTQ2IDBWMTJINC45NDZ2LS45NzNhLjk3My45NzMgMCAwIDAtMS45NDYgMFYxMmgxLjk0NnYxLjU3MWMwIC43NDUuNTQ1IDEuMzQ4IDEuMjE2IDEuMzQ4LjY3MiAwIDEuMjE2LS42MDMgMS4yMTYtMS4zNDhWMTJoMS45NDZ2NC4zMTVhMS40OTQgMS40OTQgMCAwIDAgMS40NiAxLjUyM2MuODA3IDAgMS40Ni0uNjgxIDEuNDYtMS41MjNWMTJoMi45MTh2My40MmMwIC41My40MzguOTU4Ljk3My45NThhLjk2Ni45NjYgMCAwIDAgLjk3My0uOTU4VjEyaDEuOTQ2di45NzNhLjk3Mi45NzIgMCAxIDAgMS45NDYgMFYxMmgtMS45NDZWOC45NDVjMC0uNDYyLS40MzgtLjgzNy0uOTczLS44MzdzLS45NzMuMzc1LS45NzMuODM3VjEyaC0xLjk0NlY3LjY2YzAtLjgyNy0uNjUyLTEuNDk4LTEuNDYtMS40OTgiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNTE5fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI01MTl9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEzLjUxNCA2LjgxYy0uNzE4IDAtMS4yOTguNTk3LTEuMjk4IDEuMzMyVjEySDkuNjIyVjkuNDFhLjg2NS44NjUgMCAxIDAtMS43MyAwVjEySDUuNzN2LS44NjVhLjg2NS44NjUgMCAxIDAtMS43MyAwVjEyaDEuNzN2MS4zOTZjMCAuNjYyLjQ4NCAxLjE5OCAxLjA4IDEuMTk4LjU5OCAwIDEuMDgyLS41MzYgMS4wODItMS4xOTdWMTJoMS43M3YzLjgzNWExLjMzIDEuMzMgMCAwIDAgMS4yOTcgMS4zNTRjLjcxOCAwIDEuMjk3LS42MDYgMS4yOTctMS4zNTRWMTJoMi41OTV2My4wNGEuODYuODYgMCAwIDAgLjg2NS44NTIuODYuODYgMCAwIDAgLjg2NS0uODUyVjEyaDEuNzN2Ljg2NGEuODY1Ljg2NSAwIDEgMCAxLjcyOSAwVjEyaC0xLjczVjkuMjg0YzAtLjQxLS4zODktLjc0NC0uODY1LS43NDQtLjQ3NSAwLS44NjQuMzMzLS44NjQuNzQ0VjEyaC0xLjczVjguMTQyYzAtLjczNS0uNTgtMS4zMzEtMS4yOTctMS4zMzEiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iTUxOX19iIiB4MT0iMTIiIHgyPSIxMiIgeTE9IjYuODExIiB5Mj0iMTcuMTg5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjI0IiBzdG9wLWNvbG9yPSIjNkY0QUVGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjY2IiBzdG9wLWNvbG9yPSIjMDFDQkJGIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9Ik1MTl9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/MLN
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMLN = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMLN', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_11mbqnm._.js.map