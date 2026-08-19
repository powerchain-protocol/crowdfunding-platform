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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkAutonomys.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkAutonomys
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#000',
                d: 'm14.268 3 6.393 11.35A9.3 9.3 0 0 0 21 11.853c0-4.254-2.86-7.83-6.732-8.853'
            }
        ],
        [
            'path',
            {
                fill: '#000',
                d: 'm14.268 3 6.393 11.35A9.3 9.3 0 0 0 21 11.853c0-4.254-2.86-7.83-6.732-8.853M12 21c2.536 0 4.825-1.067 6.462-2.78H5.538A8.9 8.9 0 0 0 12 21'
            }
        ],
        [
            'path',
            {
                fill: '#000',
                d: 'M12 21c2.536 0 4.825-1.067 6.462-2.78H5.538A8.9 8.9 0 0 0 12 21m-9-9.146c0 .866.12 1.704.34 2.498L9.732 3C5.86 4.022 3 7.599 3 11.854'
            }
        ],
        [
            'path',
            {
                fill: '#000',
                d: 'M3 11.854c0 .866.12 1.704.34 2.498L9.732 3C5.86 4.022 3 7.599 3 11.854m13.277 2.482L12 6.742l-4.276 7.594z'
            }
        ],
        [
            'path',
            {
                fill: '#000',
                d: 'M16.277 14.336 12 6.742l-4.276 7.594z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm14.268 3 6.393 11.35A9.3 9.3 0 0 0 21 11.853c0-4.254-2.86-7.83-6.732-8.853'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm14.268 3 6.393 11.35A9.3 9.3 0 0 0 21 11.853c0-4.254-2.86-7.83-6.732-8.853M12 21c2.536 0 4.825-1.067 6.462-2.78H5.538A8.9 8.9 0 0 0 12 21'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 21c2.536 0 4.825-1.067 6.462-2.78H5.538A8.9 8.9 0 0 0 12 21m-9-9.146c0 .866.12 1.704.34 2.498L9.732 3C5.86 4.022 3 7.599 3 11.854'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3 11.854c0 .866.12 1.704.34 2.498L9.732 3C5.86 4.022 3 7.599 3 11.854m13.277 2.482L12 6.742l-4.276 7.594z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M16.277 14.336 12 6.742l-4.276 7.594z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#autonomys__a)'
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
                        d: 'm14.016 4 5.682 10.09A8.3 8.3 0 0 0 20 11.87c0-3.782-2.542-6.961-5.985-7.87'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm14.016 4 5.682 10.09A8.3 8.3 0 0 0 20 11.87c0-3.782-2.542-6.961-5.985-7.87M12 20a7.92 7.92 0 0 0 5.744-2.471H6.256A7.92 7.92 0 0 0 12 20'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 20a7.92 7.92 0 0 0 5.744-2.471H6.256A7.92 7.92 0 0 0 12 20m-8-8.13c0 .77.106 1.515.302 2.22L9.984 4C6.543 4.909 4 8.088 4 11.87'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4 11.87c0 .77.106 1.515.302 2.22L9.984 4C6.543 4.909 4 8.088 4 11.87m11.802 2.207L12 7.326l-3.8 6.75z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M15.802 14.077 12 7.326l-3.8 6.75z'
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
                        id: 'autonomys__a'
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
 * @component @name NetworkAutonomys
 * @description Web3Icon for NetworkAutonomys
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Im0xNC4yNjggMyA2LjM5MyAxMS4zNUE5LjMgOS4zIDAgMCAwIDIxIDExLjg1M2MwLTQuMjU0LTIuODYtNy44My02LjczMi04Ljg1MyIvPgogICAgPHBhdGggZmlsbD0iIzAwMCIgZD0ibTE0LjI2OCAzIDYuMzkzIDExLjM1QTkuMyA5LjMgMCAwIDAgMjEgMTEuODUzYzAtNC4yNTQtMi44Ni03LjgzLTYuNzMyLTguODUzTTEyIDIxYzIuNTM2IDAgNC44MjUtMS4wNjcgNi40NjItMi43OEg1LjUzOEE4LjkgOC45IDAgMCAwIDEyIDIxIi8+CiAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTIgMjFjMi41MzYgMCA0LjgyNS0xLjA2NyA2LjQ2Mi0yLjc4SDUuNTM4QTguOSA4LjkgMCAwIDAgMTIgMjFtLTktOS4xNDZjMCAuODY2LjEyIDEuNzA0LjM0IDIuNDk4TDkuNzMyIDNDNS44NiA0LjAyMiAzIDcuNTk5IDMgMTEuODU0Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMyAxMS44NTRjMCAuODY2LjEyIDEuNzA0LjM0IDIuNDk4TDkuNzMyIDNDNS44NiA0LjAyMiAzIDcuNTk5IDMgMTEuODU0bTEzLjI3NyAyLjQ4MkwxMiA2Ljc0MmwtNC4yNzYgNy41OTR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTYuMjc3IDE0LjMzNiAxMiA2Ljc0MmwtNC4yNzYgNy41OTR6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNC4yNjggMyA2LjM5MyAxMS4zNUE5LjMgOS4zIDAgMCAwIDIxIDExLjg1M2MwLTQuMjU0LTIuODYtNy44My02LjczMi04Ljg1MyIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTE0LjI2OCAzIDYuMzkzIDExLjM1QTkuMyA5LjMgMCAwIDAgMjEgMTEuODUzYzAtNC4yNTQtMi44Ni03LjgzLTYuNzMyLTguODUzTTEyIDIxYzIuNTM2IDAgNC44MjUtMS4wNjcgNi40NjItMi43OEg1LjUzOEE4LjkgOC45IDAgMCAwIDEyIDIxIi8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMjFjMi41MzYgMCA0LjgyNS0xLjA2NyA2LjQ2Mi0yLjc4SDUuNTM4QTguOSA4LjkgMCAwIDAgMTIgMjFtLTktOS4xNDZjMCAuODY2LjEyIDEuNzA0LjM0IDIuNDk4TDkuNzMyIDNDNS44NiA0LjAyMiAzIDcuNTk5IDMgMTEuODU0Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMyAxMS44NTRjMCAuODY2LjEyIDEuNzA0LjM0IDIuNDk4TDkuNzMyIDNDNS44NiA0LjAyMiAzIDcuNTk5IDMgMTEuODU0bTEzLjI3NyAyLjQ4MkwxMiA2Ljc0MmwtNC4yNzYgNy41OTR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYuMjc3IDE0LjMzNiAxMiA2Ljc0MmwtNC4yNzYgNy41OTR6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNhdXRvbm9teXNfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNC4wMTYgNCA1LjY4MiAxMC4wOUE4LjMgOC4zIDAgMCAwIDIwIDExLjg3YzAtMy43ODItMi41NDItNi45NjEtNS45ODUtNy44NyIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNC4wMTYgNCA1LjY4MiAxMC4wOUE4LjMgOC4zIDAgMCAwIDIwIDExLjg3YzAtMy43ODItMi41NDItNi45NjEtNS45ODUtNy44N00xMiAyMGE3LjkyIDcuOTIgMCAwIDAgNS43NDQtMi40NzFINi4yNTZBNy45MiA3LjkyIDAgMCAwIDEyIDIwIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDIwYTcuOTIgNy45MiAwIDAgMCA1Ljc0NC0yLjQ3MUg2LjI1NkE3LjkyIDcuOTIgMCAwIDAgMTIgMjBtLTgtOC4xM2MwIC43Ny4xMDYgMS41MTUuMzAyIDIuMjJMOS45ODQgNEM2LjU0MyA0LjkwOSA0IDguMDg4IDQgMTEuODciLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNCAxMS44N2MwIC43Ny4xMDYgMS41MTUuMzAyIDIuMjJMOS45ODQgNEM2LjU0MyA0LjkwOSA0IDguMDg4IDQgMTEuODdtMTEuODAyIDIuMjA3TDEyIDcuMzI2bC0zLjggNi43NXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTUuODAyIDE0LjA3NyAxMiA3LjMyNmwtMy44IDYuNzV6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImF1dG9ub215c19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/networks/autonomys
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkAutonomys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkAutonomys', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1j6qqy0._.js.map