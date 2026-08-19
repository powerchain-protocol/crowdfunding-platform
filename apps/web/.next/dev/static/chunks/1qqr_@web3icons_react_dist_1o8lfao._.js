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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPOND.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPOND
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#2DB8E3',
                d: 'M14.64 6.356A1.22 1.22 0 0 0 13.777 6h-.003a1.22 1.22 0 0 0-.864.36l-9.552 9.56a1.21 1.21 0 0 0 .004 1.725 1.2 1.2 0 0 0 .863.356c.328 0 .637-.128.869-.36l9.551-9.56a1.22 1.22 0 0 0-.003-1.725',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#3840C7',
                d: 'M20.241 6.093a1.23 1.23 0 0 0-1.34.267l-9.583 9.56c-.23.23-.32.54-.318.864 0 .323.092.633.323.861a1.235 1.235 0 0 0 1.737-.005l7.44-7.465v6.606c0 .323.173.633.403.862a1.234 1.234 0 0 0 1.737 0c.23-.229.36-.539.36-.862V7.22c0-.242-.071-.478-.206-.679a1.2 1.2 0 0 0-.553-.449',
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
                d: 'M14.64 6.356A1.22 1.22 0 0 0 13.777 6h-.003a1.22 1.22 0 0 0-.864.36l-9.552 9.56a1.2 1.2 0 0 0-.357.864c.001.325.129.631.361.861a1.2 1.2 0 0 0 .863.356c.328 0 .637-.128.869-.36l9.551-9.56a1.22 1.22 0 0 0-.003-1.725m5.599-.263a1.23 1.23 0 0 0-1.34.267l-9.583 9.56c-.23.23-.32.54-.318.864 0 .323.092.633.323.861a1.234 1.234 0 0 0 1.737-.005l7.44-7.465v6.606c0 .323.173.633.403.862a1.234 1.234 0 0 0 1.737 0c.23-.229.36-.539.36-.862V7.22a1.22 1.22 0 0 0-.759-1.128',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#POND__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#3840C7',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M14.347 6.982a1.1 1.1 0 0 0-.768-.316h-.003a1.08 1.08 0 0 0-.768.32l-8.49 8.498a1.08 1.08 0 0 0-.318.768c0 .289.115.56.32.765a1.08 1.08 0 0 0 .768.316c.292 0 .566-.113.772-.319l8.49-8.5a1.085 1.085 0 0 0-.003-1.532m4.978-.232a1.09 1.09 0 0 0-1.19.236l-8.519 8.498c-.204.204-.284.48-.283.768 0 .287.082.562.287.765a1.1 1.1 0 0 0 1.545-.004l6.613-6.635v5.87c0 .288.153.564.358.767a1.097 1.097 0 0 0 1.544 0 1.08 1.08 0 0 0 .32-.766V7.75a1.07 1.07 0 0 0-.675-1.002',
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
                        id: 'POND__a'
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
 * @component @name TokenPOND
 * @description Web3Icon for TokenPOND
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMyREI4RTMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjY0IDYuMzU2QTEuMjIgMS4yMiAwIDAgMCAxMy43NzcgNmgtLjAwM2ExLjIyIDEuMjIgMCAwIDAtLjg2NC4zNmwtOS41NTIgOS41NmExLjIxIDEuMjEgMCAwIDAgLjAwNCAxLjcyNSAxLjIgMS4yIDAgMCAwIC44NjMuMzU2Yy4zMjggMCAuNjM3LS4xMjguODY5LS4zNmw5LjU1MS05LjU2YTEuMjIgMS4yMiAwIDAgMC0uMDAzLTEuNzI1IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDxwYXRoIGZpbGw9IiMzODQwQzciIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjI0MSA2LjA5M2ExLjIzIDEuMjMgMCAwIDAtMS4zNC4yNjdsLTkuNTgzIDkuNTZjLS4yMy4yMy0uMzIuNTQtLjMxOC44NjQgMCAuMzIzLjA5Mi42MzMuMzIzLjg2MWExLjIzNSAxLjIzNSAwIDAgMCAxLjczNy0uMDA1bDcuNDQtNy40NjV2Ni42MDZjMCAuMzIzLjE3My42MzMuNDAzLjg2MmExLjIzNCAxLjIzNCAwIDAgMCAxLjczNyAwYy4yMy0uMjI5LjM2LS41MzkuMzYtLjg2MlY3LjIyYzAtLjI0Mi0uMDcxLS40NzgtLjIwNi0uNjc5YTEuMiAxLjIgMCAwIDAtLjU1My0uNDQ5IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjY0IDYuMzU2QTEuMjIgMS4yMiAwIDAgMCAxMy43NzcgNmgtLjAwM2ExLjIyIDEuMjIgMCAwIDAtLjg2NC4zNmwtOS41NTIgOS41NmExLjIgMS4yIDAgMCAwLS4zNTcuODY0Yy4wMDEuMzI1LjEyOS42MzEuMzYxLjg2MWExLjIgMS4yIDAgMCAwIC44NjMuMzU2Yy4zMjggMCAuNjM3LS4xMjguODY5LS4zNmw5LjU1MS05LjU2YTEuMjIgMS4yMiAwIDAgMC0uMDAzLTEuNzI1bTUuNTk5LS4yNjNhMS4yMyAxLjIzIDAgMCAwLTEuMzQuMjY3bC05LjU4MyA5LjU2Yy0uMjMuMjMtLjMyLjU0LS4zMTguODY0IDAgLjMyMy4wOTIuNjMzLjMyMy44NjFhMS4yMzQgMS4yMzQgMCAwIDAgMS43MzctLjAwNWw3LjQ0LTcuNDY1djYuNjA2YzAgLjMyMy4xNzMuNjMzLjQwMy44NjJhMS4yMzQgMS4yMzQgMCAwIDAgMS43MzcgMGMuMjMtLjIyOS4zNi0uNTM5LjM2LS44NjJWNy4yMmExLjIyIDEuMjIgMCAwIDAtLjc1OS0xLjEyOCIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQT05EX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzM4NDBDNyIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC4zNDcgNi45ODJhMS4xIDEuMSAwIDAgMC0uNzY4LS4zMTZoLS4wMDNhMS4wOCAxLjA4IDAgMCAwLS43NjguMzJsLTguNDkgOC40OThhMS4wOCAxLjA4IDAgMCAwLS4zMTguNzY4YzAgLjI4OS4xMTUuNTYuMzIuNzY1YTEuMDggMS4wOCAwIDAgMCAuNzY4LjMxNmMuMjkyIDAgLjU2Ni0uMTEzLjc3Mi0uMzE5bDguNDktOC41YTEuMDg1IDEuMDg1IDAgMCAwLS4wMDMtMS41MzJtNC45NzgtLjIzMmExLjA5IDEuMDkgMCAwIDAtMS4xOS4yMzZsLTguNTE5IDguNDk4Yy0uMjA0LjIwNC0uMjg0LjQ4LS4yODMuNzY4IDAgLjI4Ny4wODIuNTYyLjI4Ny43NjVhMS4xIDEuMSAwIDAgMCAxLjU0NS0uMDA0bDYuNjEzLTYuNjM1djUuODdjMCAuMjg4LjE1My41NjQuMzU4Ljc2N2ExLjA5NyAxLjA5NyAwIDAgMCAxLjU0NCAwIDEuMDggMS4wOCAwIDAgMCAuMzItLjc2NlY3Ljc1YTEuMDcgMS4wNyAwIDAgMC0uNjc1LTEuMDAyIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iUE9ORF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/POND
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPOND = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPOND', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1o8lfao._.js.map