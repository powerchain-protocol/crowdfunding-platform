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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenENG.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenENG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'm11.972 3 7.779 4.464v8.928l-7.78 4.464-7.722-4.464V7.464z'
            }
        ],
        [
            'path',
            {
                fill: '#065198',
                d: 'M11.968 11.876 7.866 9.52v4.509l4.102 2.64z'
            }
        ],
        [
            'path',
            {
                fill: '#21B1F8',
                d: 'm12 12.078 4.133-2.367v4.532L12 16.811z'
            }
        ],
        [
            'path',
            {
                fill: '#E82E9D',
                d: 'm12 6.971 4.138 2.566-4.139 2.299-4.097-2.298z'
            }
        ],
        [
            'path',
            {
                fill: '#0C0E15',
                d: 'M3.945 7.163a.274.274 0 0 0 .1.375l7.684 4.474v8.714a.274.274 0 1 0 .548 0v-8.714l7.674-4.456a.274.274 0 1 0-.275-.473l-7.673 4.454L4.32 7.065a.274.274 0 0 0-.375.098M12 5.274a.44.44 0 1 0 0-.882.44.44 0 0 0 0 .882m0 1.207a.44.44 0 1 0 0-.881.44.44 0 0 0 0 .881m-5.034 8.51a.44.44 0 1 0 0-.881.44.44 0 0 0 0 .881m-1.208.756a.44.44 0 1 0 0-.881.44.44 0 0 0 0 .881m11.358-.756a.44.44 0 1 1 0-.881.44.44 0 0 1 0 .881m1.209.756a.44.44 0 1 1 0-.882.44.44 0 0 1 0 .882'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ENG__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm11.975 4 6.915 3.968v7.936l-6.915 3.968-6.865-3.968V7.968z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#065198',
                        d: 'M11.972 11.89 8.326 9.797v4.008l3.646 2.346z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#21B1F8',
                        d: 'm12 12.07 3.674-2.104v4.028L12 16.277z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#E82E9D',
                        d: 'm12 7.53 3.678 2.281L12 11.854 8.358 9.812z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#0C0E15',
                        d: 'M4.84 7.7a.243.243 0 0 0 .088.334l6.831 3.976v7.746a.244.244 0 0 0 .487 0V12.01l6.822-3.96a.24.24 0 0 0 .092-.335.243.243 0 0 0-.337-.086l-6.82 3.96-6.83-3.976a.243.243 0 0 0-.333.088M12 6.021a.392.392 0 1 0 0-.783.392.392 0 0 0 0 .783m0 1.074a.392.392 0 1 0 0-.784.392.392 0 0 0 0 .784m-4.474 7.564a.392.392 0 1 0 0-.784.392.392 0 0 0 0 .784m-1.074.671a.392.392 0 1 0 0-.783.392.392 0 0 0 0 .784m10.096-.672a.392.392 0 1 1 0-.784.392.392 0 0 1 0 .784m1.074.671a.392.392 0 1 1 0-.783.392.392 0 0 1 0 .784'
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
                        id: 'ENG__a'
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
 * @component @name TokenENG
 * @description Web3Icon for TokenENG
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMS45NzIgMyA3Ljc3OSA0LjQ2NHY4LjkyOGwtNy43OCA0LjQ2NC03LjcyMi00LjQ2NFY3LjQ2NHoiLz4KICAgIDxwYXRoIGZpbGw9IiMwNjUxOTgiIGQ9Ik0xMS45NjggMTEuODc2IDcuODY2IDkuNTJ2NC41MDlsNC4xMDIgMi42NHoiLz4KICAgIDxwYXRoIGZpbGw9IiMyMUIxRjgiIGQ9Im0xMiAxMi4wNzggNC4xMzMtMi4zNjd2NC41MzJMMTIgMTYuODExeiIvPgogICAgPHBhdGggZmlsbD0iI0U4MkU5RCIgZD0ibTEyIDYuOTcxIDQuMTM4IDIuNTY2LTQuMTM5IDIuMjk5LTQuMDk3LTIuMjk4eiIvPgogICAgPHBhdGggZmlsbD0iIzBDMEUxNSIgZD0iTTMuOTQ1IDcuMTYzYS4yNzQuMjc0IDAgMCAwIC4xLjM3NWw3LjY4NCA0LjQ3NHY4LjcxNGEuMjc0LjI3NCAwIDEgMCAuNTQ4IDB2LTguNzE0bDcuNjc0LTQuNDU2YS4yNzQuMjc0IDAgMSAwLS4yNzUtLjQ3M2wtNy42NzMgNC40NTRMNC4zMiA3LjA2NWEuMjc0LjI3NCAwIDAgMC0uMzc1LjA5OE0xMiA1LjI3NGEuNDQuNDQgMCAxIDAgMC0uODgyLjQ0LjQ0IDAgMCAwIDAgLjg4Mm0wIDEuMjA3YS40NC40NCAwIDEgMCAwLS44ODEuNDQuNDQgMCAwIDAgMCAuODgxbS01LjAzNCA4LjUxYS40NC40NCAwIDEgMCAwLS44ODEuNDQuNDQgMCAwIDAgMCAuODgxbS0xLjIwOC43NTZhLjQ0LjQ0IDAgMSAwIDAtLjg4MS40NC40NCAwIDAgMCAwIC44ODFtMTEuMzU4LS43NTZhLjQ0LjQ0IDAgMSAxIDAtLjg4MS40NC40NCAwIDAgMSAwIC44ODFtMS4yMDkuNzU2YS40NC40NCAwIDEgMSAwLS44ODIuNDQuNDQgMCAwIDEgMCAuODgyIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNFTkdfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMS45NzUgNCA2LjkxNSAzLjk2OHY3LjkzNmwtNi45MTUgMy45NjgtNi44NjUtMy45NjhWNy45Njh6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzA2NTE5OCIgZD0iTTExLjk3MiAxMS44OSA4LjMyNiA5Ljc5N3Y0LjAwOGwzLjY0NiAyLjM0NnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMjFCMUY4IiBkPSJtMTIgMTIuMDcgMy42NzQtMi4xMDR2NC4wMjhMMTIgMTYuMjc3eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNFODJFOUQiIGQ9Im0xMiA3LjUzIDMuNjc4IDIuMjgxTDEyIDExLjg1NCA4LjM1OCA5LjgxMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMEMwRTE1IiBkPSJNNC44NCA3LjdhLjI0My4yNDMgMCAwIDAgLjA4OC4zMzRsNi44MzEgMy45NzZ2Ny43NDZhLjI0NC4yNDQgMCAwIDAgLjQ4NyAwVjEyLjAxbDYuODIyLTMuOTZhLjI0LjI0IDAgMCAwIC4wOTItLjMzNS4yNDMuMjQzIDAgMCAwLS4zMzctLjA4NmwtNi44MiAzLjk2LTYuODMtMy45NzZhLjI0My4yNDMgMCAwIDAtLjMzMy4wODhNMTIgNi4wMjFhLjM5Mi4zOTIgMCAxIDAgMC0uNzgzLjM5Mi4zOTIgMCAwIDAgMCAuNzgzbTAgMS4wNzRhLjM5Mi4zOTIgMCAxIDAgMC0uNzg0LjM5Mi4zOTIgMCAwIDAgMCAuNzg0bS00LjQ3NCA3LjU2NGEuMzkyLjM5MiAwIDEgMCAwLS43ODQuMzkyLjM5MiAwIDAgMCAwIC43ODRtLTEuMDc0LjY3MWEuMzkyLjM5MiAwIDEgMCAwLS43ODMuMzkyLjM5MiAwIDAgMCAwIC43ODRtMTAuMDk2LS42NzJhLjM5Mi4zOTIgMCAxIDEgMC0uNzg0LjM5Mi4zOTIgMCAwIDEgMCAuNzg0bTEuMDc0LjY3MWEuMzkyLjM5MiAwIDEgMSAwLS43ODMuMzkyLjM5MiAwIDAgMSAwIC43ODQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iRU5HX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/ENG
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenENG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenENG', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1nrvlpw._.js.map