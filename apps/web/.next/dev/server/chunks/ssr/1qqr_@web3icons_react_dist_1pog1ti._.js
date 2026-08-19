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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenXAUT.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenXAUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M12 12c2.734 0 4.95-.403 4.95-.9s-2.216-.9-4.95-.9-4.95.403-4.95.9 2.216.9 4.95.9'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M17.631 3.9H6.343L3 11.238l9 8.862 9-8.862zM12.9 12.432c2.555-.107 4.502-.662 4.502-1.332 0-.745-2.418-1.35-5.4-1.35s-5.4.605-5.4 1.35c0 .67 1.945 1.224 4.498 1.331v4.07h1.8z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#DDA85B',
                d: 'M16.05 6.6h-8.1v1.8h3.15v3.15h1.8V8.4h3.15z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M17.631 3.9H6.343L3 11.238l9 8.862 9-8.862zm-11.03 7.2c0 .67 1.946 1.224 4.499 1.331v4.07h1.8v-4.07c2.555-.106 4.502-.661 4.502-1.33 0-.67-1.947-1.225-4.502-1.332V8.401h3.15V6.6h-8.1v1.8h3.15v1.368c-2.553.107-4.498.662-4.498 1.331m6.299-.885v1.77c2.304-.077 4.05-.444 4.05-.885s-1.746-.808-4.05-.885m-1.8 0c-2.304.077-4.05.444-4.05.885s1.746.808 4.05.885z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#XAUT__a)'
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
                        d: 'M12 12c2.43 0 4.4-.358 4.4-.8 0-.441-1.97-.8-4.4-.8s-4.4.358-4.4.8 1.97.8 4.4.8'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M17.006 4.8H6.972L4 11.322l8 7.878 8-7.878zM12.8 12.383c2.27-.095 4.002-.588 4.002-1.183 0-.663-2.15-1.2-4.8-1.2s-4.8.537-4.8 1.2c0 .594 1.729 1.088 3.998 1.183V16h1.6z',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#DDA85B',
                        d: 'M15.6 7.2H8.4v1.6h2.8v2.8h1.6V8.8h2.8z'
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
                        id: 'XAUT__a'
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
 * @component @name TokenXAUT
 * @description Web3Icon for TokenXAUT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAxMmMyLjczNCAwIDQuOTUtLjQwMyA0Ljk1LS45cy0yLjIxNi0uOS00Ljk1LS45LTQuOTUuNDAzLTQuOTUuOSAyLjIxNi45IDQuOTUuOSIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTcuNjMxIDMuOUg2LjM0M0wzIDExLjIzOGw5IDguODYyIDktOC44NjJ6TTEyLjkgMTIuNDMyYzIuNTU1LS4xMDcgNC41MDItLjY2MiA0LjUwMi0xLjMzMiAwLS43NDUtMi40MTgtMS4zNS01LjQtMS4zNXMtNS40LjYwNS01LjQgMS4zNWMwIC42NyAxLjk0NSAxLjIyNCA0LjQ5OCAxLjMzMXY0LjA3aDEuOHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPHBhdGggZmlsbD0iI0REQTg1QiIgZD0iTTE2LjA1IDYuNmgtOC4xdjEuOGgzLjE1djMuMTVoMS44VjguNGgzLjE1eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE3LjYzMSAzLjlINi4zNDNMMyAxMS4yMzhsOSA4Ljg2MiA5LTguODYyem0tMTEuMDMgNy4yYzAgLjY3IDEuOTQ2IDEuMjI0IDQuNDk5IDEuMzMxdjQuMDdoMS44di00LjA3YzIuNTU1LS4xMDYgNC41MDItLjY2MSA0LjUwMi0xLjMzIDAtLjY3LTEuOTQ3LTEuMjI1LTQuNTAyLTEuMzMyVjguNDAxaDMuMTVWNi42aC04LjF2MS44aDMuMTV2MS4zNjhjLTIuNTUzLjEwNy00LjQ5OC42NjItNC40OTggMS4zMzFtNi4yOTktLjg4NXYxLjc3YzIuMzA0LS4wNzcgNC4wNS0uNDQ0IDQuMDUtLjg4NXMtMS43NDYtLjgwOC00LjA1LS44ODVtLTEuOCAwYy0yLjMwNC4wNzctNC4wNS40NDQtNC4wNS44ODVzMS43NDYuODA4IDQuMDUuODg1eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNYQVVUX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMTJjMi40MyAwIDQuNC0uMzU4IDQuNC0uOCAwLS40NDEtMS45Ny0uOC00LjQtLjhzLTQuNC4zNTgtNC40LjggMS45Ny44IDQuNC44Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTcuMDA2IDQuOEg2Ljk3Mkw0IDExLjMyMmw4IDcuODc4IDgtNy44Nzh6TTEyLjggMTIuMzgzYzIuMjctLjA5NSA0LjAwMi0uNTg4IDQuMDAyLTEuMTgzIDAtLjY2My0yLjE1LTEuMi00LjgtMS4ycy00LjguNTM3LTQuOCAxLjJjMCAuNTk0IDEuNzI5IDEuMDg4IDMuOTk4IDEuMTgzVjE2aDEuNnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNEREE4NUIiIGQ9Ik0xNS42IDcuMkg4LjR2MS42aDIuOHYyLjhoMS42VjguOGgyLjh6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlhBVVRfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/XAUT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenXAUT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenXAUT', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1pog1ti._.js.map