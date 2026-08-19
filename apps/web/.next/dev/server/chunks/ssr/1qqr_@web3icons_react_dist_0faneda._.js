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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMCADE.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMCADE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FFC010',
                d: 'M10.244 3.878a.878.878 0 1 1 1.756 0v.891c-.61.04-1.199.154-1.756.338zm0 14.576v1.668a.878.878 0 1 0 1.756 0v-1.33a7 7 0 0 1-1.756-.338m2.634.338v1.33a.878.878 0 1 0 1.756 0v-1.668a7 7 0 0 1-1.756.338m1.756-13.685V3.878a.878.878 0 1 0-1.756 0v.891q.917.061 1.756.338m3.073 3.161L12.44 12l5.268 3.732c-1.15 1.409-3.16 2.195-5.14 2.195-3.47 0-6.275-2.753-6.275-6.146 0-3.394 2.81-6.147 6.274-6.147a6.38 6.38 0 0 1 5.141 2.634'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M10.244 3.878a.878.878 0 1 1 1.756 0v.891a7 7 0 0 0-1.756.338zm0 14.576v1.668a.878.878 0 1 0 1.756 0v-1.33a7 7 0 0 1-1.756-.338m2.634.338v1.33a.878.878 0 0 0 1.756 0v-1.668a7 7 0 0 1-1.756.338m1.756-13.685V3.878a.878.878 0 1 0-1.756 0v.891q.917.061 1.756.338m3.073 3.161L12.44 12l5.268 3.732c-1.15 1.409-3.16 2.195-5.14 2.195-3.47 0-6.275-2.753-6.275-6.146 0-3.394 2.81-6.147 6.274-6.147a6.38 6.38 0 0 1 5.141 2.634'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MCADE__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FFC010',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M10.439 4.78a.78.78 0 1 1 1.56 0v.793a6.3 6.3 0 0 0-1.56.3zm0 12.957v1.483a.78.78 0 1 0 1.56 0v-1.183a6.2 6.2 0 0 1-1.56-.3m2.342.3v1.183a.78.78 0 1 0 1.56 0v-1.483a6.3 6.3 0 0 1-1.56.3m1.56-12.164V4.78a.78.78 0 1 0-1.56 0v.793a6.3 6.3 0 0 1 1.56.3m2.732 2.81L12.39 12l4.683 3.317c-1.022 1.253-2.81 1.951-4.57 1.951-3.083 0-5.576-2.447-5.576-5.463S9.424 6.34 12.503 6.34a5.67 5.67 0 0 1 4.57 2.342'
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
                        id: 'MCADE__a'
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
 * @component @name TokenMCADE
 * @description Web3Icon for TokenMCADE
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRkMwMTAiIGQ9Ik0xMC4yNDQgMy44NzhhLjg3OC44NzggMCAxIDEgMS43NTYgMHYuODkxYy0uNjEuMDQtMS4xOTkuMTU0LTEuNzU2LjMzOHptMCAxNC41NzZ2MS42NjhhLjg3OC44NzggMCAxIDAgMS43NTYgMHYtMS4zM2E3IDcgMCAwIDEtMS43NTYtLjMzOG0yLjYzNC4zMzh2MS4zM2EuODc4Ljg3OCAwIDEgMCAxLjc1NiAwdi0xLjY2OGE3IDcgMCAwIDEtMS43NTYuMzM4bTEuNzU2LTEzLjY4NVYzLjg3OGEuODc4Ljg3OCAwIDEgMC0xLjc1NiAwdi44OTFxLjkxNy4wNjEgMS43NTYuMzM4bTMuMDczIDMuMTYxTDEyLjQ0IDEybDUuMjY4IDMuNzMyYy0xLjE1IDEuNDA5LTMuMTYgMi4xOTUtNS4xNCAyLjE5NS0zLjQ3IDAtNi4yNzUtMi43NTMtNi4yNzUtNi4xNDYgMC0zLjM5NCAyLjgxLTYuMTQ3IDYuMjc0LTYuMTQ3YTYuMzggNi4zOCAwIDAgMSA1LjE0MSAyLjYzNCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMC4yNDQgMy44NzhhLjg3OC44NzggMCAxIDEgMS43NTYgMHYuODkxYTcgNyAwIDAgMC0xLjc1Ni4zMzh6bTAgMTQuNTc2djEuNjY4YS44NzguODc4IDAgMSAwIDEuNzU2IDB2LTEuMzNhNyA3IDAgMCAxLTEuNzU2LS4zMzhtMi42MzQuMzM4djEuMzNhLjg3OC44NzggMCAwIDAgMS43NTYgMHYtMS42NjhhNyA3IDAgMCAxLTEuNzU2LjMzOG0xLjc1Ni0xMy42ODVWMy44NzhhLjg3OC44NzggMCAxIDAtMS43NTYgMHYuODkxcS45MTcuMDYxIDEuNzU2LjMzOG0zLjA3MyAzLjE2MUwxMi40NCAxMmw1LjI2OCAzLjczMmMtMS4xNSAxLjQwOS0zLjE2IDIuMTk1LTUuMTQgMi4xOTUtMy40NyAwLTYuMjc1LTIuNzUzLTYuMjc1LTYuMTQ2IDAtMy4zOTQgMi44MS02LjE0NyA2LjI3NC02LjE0N2E2LjM4IDYuMzggMCAwIDEgNS4xNDEgMi42MzQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNQ0FERV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkMwMTAiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEwLjQzOSA0Ljc4YS43OC43OCAwIDEgMSAxLjU2IDB2Ljc5M2E2LjMgNi4zIDAgMCAwLTEuNTYuM3ptMCAxMi45NTd2MS40ODNhLjc4Ljc4IDAgMSAwIDEuNTYgMHYtMS4xODNhNi4yIDYuMiAwIDAgMS0xLjU2LS4zbTIuMzQyLjN2MS4xODNhLjc4Ljc4IDAgMSAwIDEuNTYgMHYtMS40ODNhNi4zIDYuMyAwIDAgMS0xLjU2LjNtMS41Ni0xMi4xNjRWNC43OGEuNzguNzggMCAxIDAtMS41NiAwdi43OTNhNi4zIDYuMyAwIDAgMSAxLjU2LjNtMi43MzIgMi44MUwxMi4zOSAxMmw0LjY4MyAzLjMxN2MtMS4wMjIgMS4yNTMtMi44MSAxLjk1MS00LjU3IDEuOTUxLTMuMDgzIDAtNS41NzYtMi40NDctNS41NzYtNS40NjNTOS40MjQgNi4zNCAxMi41MDMgNi4zNGE1LjY3IDUuNjcgMCAwIDEgNC41NyAyLjM0MiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJNQ0FERV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/MCADE
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMCADE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMCADE', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0faneda._.js.map