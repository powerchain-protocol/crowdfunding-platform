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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenIDV.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenIDV
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#IDV__a)',
                d: 'M9.547 8.113h-.818v2.332a3.273 3.273 0 1 0 .082 4.23l-.438-.79a2.456 2.456 0 1 1 .323-1.68h.85z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#IDV__b)',
                d: 'M17.729 15.887a3.273 3.273 0 1 0-2.516-5.367l.462.749a2.456 2.456 0 1 1-.401 1.264l-.655-.941c-.108.33-.163.675-.163 1.023v3.272h.818v-1.104a3.26 3.26 0 0 0 2.455 1.104'
            }
        ],
        [
            'path',
            {
                fill: '#14B4FE',
                d: 'M3.026 12.204A3.272 3.272 0 0 0 8.81 14.68l-.437-.793a2.455 2.455 0 0 1-4.521-1.682z'
            }
        ],
        [
            'path',
            {
                fill: '#1EBCFF',
                d: 'M12.001 15.887a3.273 3.273 0 1 0 0-6.545 3.273 3.273 0 0 0 0 6.545m0-.818a2.454 2.454 0 1 0 0-4.908 2.454 2.454 0 0 0 0 4.908',
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
                        id: 'IDV__a',
                        x1: '15.939',
                        x2: '16.587',
                        y1: '9.955',
                        y2: '13.261',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#14B4FE'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.66',
                                stopColor: '#1A2C58'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'IDV__b',
                        x1: '.186',
                        x2: '3.687',
                        y1: '14.916',
                        y2: '8.834',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#122543'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.45',
                                stopColor: '#173C66'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#5FC0F0'
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
                d: 'M9.547 8.113h-.818v2.332a3.273 3.273 0 1 0 .081 4.23l-.437-.79a2.455 2.455 0 1 1 .323-1.68h.85zm8.181 7.774a3.272 3.272 0 1 0-2.516-5.367l.463.749a2.455 2.455 0 1 1-.401 1.264l-.655-.941c-.108.33-.163.675-.163 1.022v3.273h.818v-1.104a3.26 3.26 0 0 0 2.454 1.104'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3.026 12.204A3.273 3.273 0 0 0 8.81 14.68l-.438-.794a2.454 2.454 0 0 1-4.52-1.68z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.002 15.888a3.273 3.273 0 1 0 0-6.546 3.273 3.273 0 0 0 0 6.545m0-.819a2.455 2.455 0 1 0 0-4.909 2.455 2.455 0 0 0 0 4.91',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#IDV__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#1EBCFF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M9.82 8.545h-.728v2.073a2.91 2.91 0 1 0 .073 3.76l-.39-.702a2.182 2.182 0 1 1 .288-1.495h.756zm7.272 6.91a2.909 2.909 0 1 0-2.237-4.771l.411.666a2.182 2.182 0 1 1-.356 1.123l-.582-.836a2.9 2.9 0 0 0-.145.909v2.909h.727v-.982a2.9 2.9 0 0 0 2.182.982'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M4.023 12.18a2.909 2.909 0 0 0 5.142 2.2l-.39-.705a2.182 2.182 0 0 1-4.018-1.494z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M12.002 15.455a2.91 2.91 0 1 0 0-5.819 2.91 2.91 0 0 0 0 5.82m0-.727a2.182 2.182 0 1 0 0-4.365 2.182 2.182 0 0 0 0 4.365',
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
                        id: 'IDV__a'
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
 * @component @name TokenIDV
 * @description Web3Icon for TokenIDV
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjSURWX19hKSIgZD0iTTkuNTQ3IDguMTEzaC0uODE4djIuMzMyYTMuMjczIDMuMjczIDAgMSAwIC4wODIgNC4yM2wtLjQzOC0uNzlhMi40NTYgMi40NTYgMCAxIDEgLjMyMy0xLjY4aC44NXoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjSURWX19iKSIgZD0iTTE3LjcyOSAxNS44ODdhMy4yNzMgMy4yNzMgMCAxIDAtMi41MTYtNS4zNjdsLjQ2Mi43NDlhMi40NTYgMi40NTYgMCAxIDEtLjQwMSAxLjI2NGwtLjY1NS0uOTQxYy0uMTA4LjMzLS4xNjMuNjc1LS4xNjMgMS4wMjN2My4yNzJoLjgxOHYtMS4xMDRhMy4yNiAzLjI2IDAgMCAwIDIuNDU1IDEuMTA0Ii8+CiAgICA8cGF0aCBmaWxsPSIjMTRCNEZFIiBkPSJNMy4wMjYgMTIuMjA0QTMuMjcyIDMuMjcyIDAgMCAwIDguODEgMTQuNjhsLS40MzctLjc5M2EyLjQ1NSAyLjQ1NSAwIDAgMS00LjUyMS0xLjY4MnoiLz4KICAgIDxwYXRoIGZpbGw9IiMxRUJDRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjAwMSAxNS44ODdhMy4yNzMgMy4yNzMgMCAxIDAgMC02LjU0NSAzLjI3MyAzLjI3MyAwIDAgMCAwIDYuNTQ1bTAtLjgxOGEyLjQ1NCAyLjQ1NCAwIDEgMCAwLTQuOTA4IDIuNDU0IDIuNDU0IDAgMCAwIDAgNC45MDgiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJJRFZfX2EiIHgxPSIxNS45MzkiIHgyPSIxNi41ODciIHkxPSI5Ljk1NSIgeTI9IjEzLjI2MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMTRCNEZFIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjY2IiBzdG9wLWNvbG9yPSIjMUEyQzU4Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IklEVl9fYiIgeDE9Ii4xODYiIHgyPSIzLjY4NyIgeTE9IjE0LjkxNiIgeTI9IjguODM0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxMjI1NDMiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNDUiIHN0b3AtY29sb3I9IiMxNzNDNjYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNUZDMEYwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05LjU0NyA4LjExM2gtLjgxOHYyLjMzMmEzLjI3MyAzLjI3MyAwIDEgMCAuMDgxIDQuMjNsLS40MzctLjc5YTIuNDU1IDIuNDU1IDAgMSAxIC4zMjMtMS42OGguODV6bTguMTgxIDcuNzc0YTMuMjcyIDMuMjcyIDAgMSAwLTIuNTE2LTUuMzY3bC40NjMuNzQ5YTIuNDU1IDIuNDU1IDAgMSAxLS40MDEgMS4yNjRsLS42NTUtLjk0MWMtLjEwOC4zMy0uMTYzLjY3NS0uMTYzIDEuMDIydjMuMjczaC44MTh2LTEuMTA0YTMuMjYgMy4yNiAwIDAgMCAyLjQ1NCAxLjEwNCIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMuMDI2IDEyLjIwNEEzLjI3MyAzLjI3MyAwIDAgMCA4LjgxIDE0LjY4bC0uNDM4LS43OTRhMi40NTQgMi40NTQgMCAwIDEtNC41Mi0xLjY4eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMDAyIDE1Ljg4OGEzLjI3MyAzLjI3MyAwIDEgMCAwLTYuNTQ2IDMuMjczIDMuMjczIDAgMCAwIDAgNi41NDVtMC0uODE5YTIuNDU1IDIuNDU1IDAgMSAwIDAtNC45MDkgMi40NTUgMi40NTUgMCAwIDAgMCA0LjkxIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNJRFZfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMUVCQ0ZGIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik05LjgyIDguNTQ1aC0uNzI4djIuMDczYTIuOTEgMi45MSAwIDEgMCAuMDczIDMuNzZsLS4zOS0uNzAyYTIuMTgyIDIuMTgyIDAgMSAxIC4yODgtMS40OTVoLjc1NnptNy4yNzIgNi45MWEyLjkwOSAyLjkwOSAwIDEgMC0yLjIzNy00Ljc3MWwuNDExLjY2NmEyLjE4MiAyLjE4MiAwIDEgMS0uMzU2IDEuMTIzbC0uNTgyLS44MzZhMi45IDIuOSAwIDAgMC0uMTQ1LjkwOXYyLjkwOWguNzI3di0uOTgyYTIuOSAyLjkgMCAwIDAgMi4xODIuOTgyIi8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTQuMDIzIDEyLjE4YTIuOTA5IDIuOTA5IDAgMCAwIDUuMTQyIDIuMmwtLjM5LS43MDVhMi4xODIgMi4xODIgMCAwIDEtNC4wMTgtMS40OTR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMDAyIDE1LjQ1NWEyLjkxIDIuOTEgMCAxIDAgMC01LjgxOSAyLjkxIDIuOTEgMCAwIDAgMCA1LjgybTAtLjcyN2EyLjE4MiAyLjE4MiAwIDEgMCAwLTQuMzY1IDIuMTgyIDIuMTgyIDAgMCAwIDAgNC4zNjUiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJJRFZfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/IDV
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenIDV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenIDV', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1h4u350._.js.map