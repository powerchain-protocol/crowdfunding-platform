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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenBBANK.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenBBANK
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#F26122',
                d: 'M4.91 3h1.637v10.907H4.91z'
            }
        ],
        [
            'path',
            {
                fill: '#F6851F',
                d: 'M4.91 3h1.637v3.817S6.274 4.363 4.91 3'
            }
        ],
        [
            'path',
            {
                fill: '#F26122',
                d: 'M19.09 13.907a7.09 7.09 0 0 1-6.15 7.03A7.089 7.089 0 0 1 6.548 9.381v4.526a5.453 5.453 0 1 0 1.636-3.894V7.93a7.09 7.09 0 0 1 10.906 5.977'
            }
        ],
        [
            'path',
            {
                fill: '#F6851F',
                d: 'M19.088 13.907c0-4.614-5.59-6.686-9.358-4.963a5.5 5.5 0 0 0-1.548 1.074V7.935a7.09 7.09 0 0 1 10.906 5.972'
            }
        ],
        [
            'path',
            {
                fill: '#F6851F',
                d: 'm10.364 9.544-1.636.818v4.09a3.272 3.272 0 1 0 1.636-2.835zm0 4.908a1.637 1.637 0 1 0 3.273 0 1.637 1.637 0 0 0-3.273 0',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#F26122',
                d: 'm8.728 10.362 1.636-.818v2.073a3.256 3.256 0 0 1 4.292.927c-1.048 0-2.525-.055-3.474.49-1.615.933-1.833 3.338-1.833 3.338a3.26 3.26 0 0 1-.621-1.92z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.91 3h1.637v10.907H4.91z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.91 3h1.637v3.817S6.274 4.363 4.91 3m14.18 10.907A7.088 7.088 0 1 1 6.546 9.381v4.526a5.453 5.453 0 1 0 1.636-3.894V7.93a7.09 7.09 0 0 1 10.906 5.977'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M19.088 13.907c0-4.614-5.59-6.686-9.358-4.963a5.5 5.5 0 0 0-1.548 1.074V7.935a7.09 7.09 0 0 1 10.906 5.972'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm10.364 9.544-1.636.818v4.09a3.272 3.272 0 1 0 1.636-2.835zm0 4.908a1.637 1.637 0 1 0 3.274 0 1.637 1.637 0 0 0-3.274 0',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm8.728 10.362 1.636-.818v2.073a3.256 3.256 0 0 1 4.292.927c-1.048 0-2.525-.055-3.474.49-1.615.933-1.833 3.338-1.833 3.338a3.26 3.26 0 0 1-.621-1.92z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#BBANK__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#F26122',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M5.698 4h1.454v9.695H5.698z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M5.698 4h1.454v3.393S6.91 5.212 5.698 4m12.604 9.695a6.302 6.302 0 1 1-11.15-4.023v4.023a4.847 4.847 0 1 0 1.455-3.461V8.382a6.302 6.302 0 0 1 9.695 5.313'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M18.3 13.695c0-4.1-4.968-5.943-8.317-4.411-.511.236-.977.56-1.377.955V8.387a6.302 6.302 0 0 1 9.695 5.308'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm10.546 9.817-1.454.727v3.636a2.909 2.909 0 1 0 1.454-2.52zm0 4.363a1.455 1.455 0 1 0 2.91 0 1.455 1.455 0 0 0-2.91 0',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm9.091 10.545 1.455-.728v1.842a2.894 2.894 0 0 1 3.815.824c-.931 0-2.245-.048-3.088.437-1.435.829-1.63 2.966-1.63 2.966a2.9 2.9 0 0 1-.552-1.706z'
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
                        id: 'BBANK__a'
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
 * @component @name TokenBBANK
 * @description Web3Icon for TokenBBANK
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGMjYxMjIiIGQ9Ik00LjkxIDNoMS42Mzd2MTAuOTA3SDQuOTF6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRjY4NTFGIiBkPSJNNC45MSAzaDEuNjM3djMuODE3UzYuMjc0IDQuMzYzIDQuOTEgMyIvPgogICAgPHBhdGggZmlsbD0iI0YyNjEyMiIgZD0iTTE5LjA5IDEzLjkwN2E3LjA5IDcuMDkgMCAwIDEtNi4xNSA3LjAzQTcuMDg5IDcuMDg5IDAgMCAxIDYuNTQ4IDkuMzgxdjQuNTI2YTUuNDUzIDUuNDUzIDAgMSAwIDEuNjM2LTMuODk0VjcuOTNhNy4wOSA3LjA5IDAgMCAxIDEwLjkwNiA1Ljk3NyIvPgogICAgPHBhdGggZmlsbD0iI0Y2ODUxRiIgZD0iTTE5LjA4OCAxMy45MDdjMC00LjYxNC01LjU5LTYuNjg2LTkuMzU4LTQuOTYzYTUuNSA1LjUgMCAwIDAtMS41NDggMS4wNzRWNy45MzVhNy4wOSA3LjA5IDAgMCAxIDEwLjkwNiA1Ljk3MiIvPgogICAgPHBhdGggZmlsbD0iI0Y2ODUxRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTAuMzY0IDkuNTQ0LTEuNjM2LjgxOHY0LjA5YTMuMjcyIDMuMjcyIDAgMSAwIDEuNjM2LTIuODM1em0wIDQuOTA4YTEuNjM3IDEuNjM3IDAgMSAwIDMuMjczIDAgMS42MzcgMS42MzcgMCAwIDAtMy4yNzMgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjRjI2MTIyIiBkPSJtOC43MjggMTAuMzYyIDEuNjM2LS44MTh2Mi4wNzNhMy4yNTYgMy4yNTYgMCAwIDEgNC4yOTIuOTI3Yy0xLjA0OCAwLTIuNTI1LS4wNTUtMy40NzQuNDktMS42MTUuOTMzLTEuODMzIDMuMzM4LTEuODMzIDMuMzM4YTMuMjYgMy4yNiAwIDAgMS0uNjIxLTEuOTJ6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjkxIDNoMS42Mzd2MTAuOTA3SDQuOTF6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNC45MSAzaDEuNjM3djMuODE3UzYuMjc0IDQuMzYzIDQuOTEgM20xNC4xOCAxMC45MDdBNy4wODggNy4wODggMCAxIDEgNi41NDYgOS4zODF2NC41MjZhNS40NTMgNS40NTMgMCAxIDAgMS42MzYtMy44OTRWNy45M2E3LjA5IDcuMDkgMCAwIDEgMTAuOTA2IDUuOTc3Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTkuMDg4IDEzLjkwN2MwLTQuNjE0LTUuNTktNi42ODYtOS4zNTgtNC45NjNhNS41IDUuNSAwIDAgMC0xLjU0OCAxLjA3NFY3LjkzNWE3LjA5IDcuMDkgMCAwIDEgMTAuOTA2IDUuOTcyIi8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0xMC4zNjQgOS41NDQtMS42MzYuODE4djQuMDlhMy4yNzIgMy4yNzIgMCAxIDAgMS42MzYtMi44MzV6bTAgNC45MDhhMS42MzcgMS42MzcgMCAxIDAgMy4yNzQgMCAxLjYzNyAxLjYzNyAwIDAgMC0zLjI3NCAwIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im04LjcyOCAxMC4zNjIgMS42MzYtLjgxOHYyLjA3M2EzLjI1NiAzLjI1NiAwIDAgMSA0LjI5Mi45MjdjLTEuMDQ4IDAtMi41MjUtLjA1NS0zLjQ3NC40OS0xLjYxNS45MzMtMS44MzMgMy4zMzgtMS44MzMgMy4zMzhhMy4yNiAzLjI2IDAgMCAxLS42MjEtMS45MnoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNCQkFOS19fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiNGMjYxMjIiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTUuNjk4IDRoMS40NTR2OS42OTVINS42OTh6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTUuNjk4IDRoMS40NTR2My4zOTNTNi45MSA1LjIxMiA1LjY5OCA0bTEyLjYwNCA5LjY5NWE2LjMwMiA2LjMwMiAwIDEgMS0xMS4xNS00LjAyM3Y0LjAyM2E0Ljg0NyA0Ljg0NyAwIDEgMCAxLjQ1NS0zLjQ2MVY4LjM4MmE2LjMwMiA2LjMwMiAwIDAgMSA5LjY5NSA1LjMxMyIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC4zIDEzLjY5NWMwLTQuMS00Ljk2OC01Ljk0My04LjMxNy00LjQxMS0uNTExLjIzNi0uOTc3LjU2LTEuMzc3Ljk1NVY4LjM4N2E2LjMwMiA2LjMwMiAwIDAgMSA5LjY5NSA1LjMwOCIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTEwLjU0NiA5LjgxNy0xLjQ1NC43Mjd2My42MzZhMi45MDkgMi45MDkgMCAxIDAgMS40NTQtMi41MnptMCA0LjM2M2ExLjQ1NSAxLjQ1NSAwIDEgMCAyLjkxIDAgMS40NTUgMS40NTUgMCAwIDAtMi45MSAwIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtOS4wOTEgMTAuNTQ1IDEuNDU1LS43Mjh2MS44NDJhMi44OTQgMi44OTQgMCAwIDEgMy44MTUuODI0Yy0uOTMxIDAtMi4yNDUtLjA0OC0zLjA4OC40MzctMS40MzUuODI5LTEuNjMgMi45NjYtMS42MyAyLjk2NmEyLjkgMi45IDAgMCAxLS41NTItMS43MDZ6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkJCQU5LX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/BBANK
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenBBANK = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenBBANK', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1iq9d6c._.js.map