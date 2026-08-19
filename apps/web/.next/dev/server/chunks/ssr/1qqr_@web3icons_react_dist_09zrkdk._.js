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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCDAI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCDAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#CDAI__a)',
                d: 'M19.677 5.065A9.9 9.9 0 0 0 13.588 3c-5.114 0-9.264 4.03-9.264 9s4.15 9 9.264 9a9.43 9.43 0 0 0 6.089-2.202L18.67 17.58a7.86 7.86 0 0 1-5.083 1.832c-4.235 0-7.676-3.32-7.676-7.412s3.441-7.412 7.676-7.412c1.864 0 3.749.636 5.083 1.705z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#CDAI__b)',
                d: 'M13.588 8.295h-2.912v2.647H9.618v.53h1.058v1.058H9.618v.53h1.058v2.117h2.912a3.44 3.44 0 0 0 3.177-2.117h.794v-.53h-.62a3.5 3.5 0 0 0 .08-1.059h.54v-.53h-.62a3.44 3.44 0 0 0-3.35-2.646m2.806 4.235a2.9 2.9 0 0 0 .095-1.059h-5.283v1.059zm-5.188.53v1.588h2.382a2.91 2.91 0 0 0 2.594-1.588zm0-2.118h5.188a2.91 2.91 0 0 0-2.806-2.118h-2.382z',
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
                        id: 'CDAI__a',
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
                                stopColor: '#27D3A2'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#9388FD'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'CDAI__b',
                        x1: '13.742',
                        x2: '13.742',
                        y1: '8.295',
                        y2: '15.177',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#304250'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#5D6E7D'
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
                d: 'M19.677 5.065A9.9 9.9 0 0 0 13.588 3c-5.114 0-9.264 4.03-9.264 9s4.15 9 9.264 9a9.43 9.43 0 0 0 6.089-2.202L18.67 17.58a7.86 7.86 0 0 1-5.083 1.832c-4.235 0-7.676-3.32-7.676-7.412s3.441-7.412 7.676-7.412c1.864 0 3.749.636 5.083 1.705z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M13.588 8.295h-2.912v2.647H9.618v.53h1.058v1.058H9.618v.53h1.058v2.117h2.912a3.44 3.44 0 0 0 3.177-2.118h.794v-.529h-.62a3.5 3.5 0 0 0 .08-1.059h.54v-.53h-.62a3.44 3.44 0 0 0-3.35-2.646m2.806 4.235a2.9 2.9 0 0 0 .095-1.059h-5.283v1.059zm-5.188.53v1.588h2.382a2.91 2.91 0 0 0 2.594-1.589zm0-2.118h5.188a2.91 2.91 0 0 0-2.806-2.118h-2.382z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CDAI__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#CDAI__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M18.824 5.835A8.8 8.8 0 0 0 13.412 4c-4.546 0-8.235 3.581-8.235 8s3.689 8 8.235 8a8.38 8.38 0 0 0 5.411-1.958l-.894-1.082a6.98 6.98 0 0 1-4.517 1.628c-3.765 0-6.824-2.95-6.824-6.588s3.06-6.588 6.824-6.588c1.656 0 3.332.565 4.517 1.515z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.412 8.706h-2.589v2.353h-.94v.47h.94v.942h-.94v.47h.94v1.883h2.589a3.06 3.06 0 0 0 2.823-1.882h.706v-.471h-.55a3 3 0 0 0 .07-.941h.48v-.47h-.55a3.06 3.06 0 0 0-2.98-2.354m2.494 3.765a2.6 2.6 0 0 0 .085-.941h-4.697v.941zm-4.612.47v1.412h2.118a2.59 2.59 0 0 0 2.306-1.411zm0-1.882h4.612a2.59 2.59 0 0 0-2.494-1.882h-2.118z',
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
                    'linearGradient',
                    {
                        id: 'CDAI__b',
                        x1: '12',
                        x2: '12',
                        y1: '4',
                        y2: '20',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#27D3A2'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#9388FD'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'CDAI__a'
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
 * @component @name TokenCDAI
 * @description Web3Icon for TokenCDAI
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjQ0RBSV9fYSkiIGQ9Ik0xOS42NzcgNS4wNjVBOS45IDkuOSAwIDAgMCAxMy41ODggM2MtNS4xMTQgMC05LjI2NCA0LjAzLTkuMjY0IDlzNC4xNSA5IDkuMjY0IDlhOS40MyA5LjQzIDAgMCAwIDYuMDg5LTIuMjAyTDE4LjY3IDE3LjU4YTcuODYgNy44NiAwIDAgMS01LjA4MyAxLjgzMmMtNC4yMzUgMC03LjY3Ni0zLjMyLTcuNjc2LTcuNDEyczMuNDQxLTcuNDEyIDcuNjc2LTcuNDEyYzEuODY0IDAgMy43NDkuNjM2IDUuMDgzIDEuNzA1eiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNDREFJX19iKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTg4IDguMjk1aC0yLjkxMnYyLjY0N0g5LjYxOHYuNTNoMS4wNTh2MS4wNThIOS42MTh2LjUzaDEuMDU4djIuMTE3aDIuOTEyYTMuNDQgMy40NCAwIDAgMCAzLjE3Ny0yLjExN2guNzk0di0uNTNoLS42MmEzLjUgMy41IDAgMCAwIC4wOC0xLjA1OWguNTR2LS41M2gtLjYyYTMuNDQgMy40NCAwIDAgMC0zLjM1LTIuNjQ2bTIuODA2IDQuMjM1YTIuOSAyLjkgMCAwIDAgLjA5NS0xLjA1OWgtNS4yODN2MS4wNTl6bS01LjE4OC41M3YxLjU4OGgyLjM4MmEyLjkxIDIuOTEgMCAwIDAgMi41OTQtMS41ODh6bTAtMi4xMThoNS4xODhhMi45MSAyLjkxIDAgMCAwLTIuODA2LTIuMTE4aC0yLjM4MnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJDREFJX19hIiB4MT0iMTIiIHgyPSIxMiIgeTE9IjMiIHkyPSIyMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMjdEM0EyIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzkzODhGRCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJDREFJX19iIiB4MT0iMTMuNzQyIiB4Mj0iMTMuNzQyIiB5MT0iOC4yOTUiIHkyPSIxNS4xNzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzMwNDI1MCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1RDZFN0QiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOS42NzcgNS4wNjVBOS45IDkuOSAwIDAgMCAxMy41ODggM2MtNS4xMTQgMC05LjI2NCA0LjAzLTkuMjY0IDlzNC4xNSA5IDkuMjY0IDlhOS40MyA5LjQzIDAgMCAwIDYuMDg5LTIuMjAyTDE4LjY3IDE3LjU4YTcuODYgNy44NiAwIDAgMS01LjA4MyAxLjgzMmMtNC4yMzUgMC03LjY3Ni0zLjMyLTcuNjc2LTcuNDEyczMuNDQxLTcuNDEyIDcuNjc2LTcuNDEyYzEuODY0IDAgMy43NDkuNjM2IDUuMDgzIDEuNzA1eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTg4IDguMjk1aC0yLjkxMnYyLjY0N0g5LjYxOHYuNTNoMS4wNTh2MS4wNThIOS42MTh2LjUzaDEuMDU4djIuMTE3aDIuOTEyYTMuNDQgMy40NCAwIDAgMCAzLjE3Ny0yLjExOGguNzk0di0uNTI5aC0uNjJhMy41IDMuNSAwIDAgMCAuMDgtMS4wNTloLjU0di0uNTNoLS42MmEzLjQ0IDMuNDQgMCAwIDAtMy4zNS0yLjY0Nm0yLjgwNiA0LjIzNWEyLjkgMi45IDAgMCAwIC4wOTUtMS4wNTloLTUuMjgzdjEuMDU5em0tNS4xODguNTN2MS41ODhoMi4zODJhMi45MSAyLjkxIDAgMCAwIDIuNTk0LTEuNTg5em0wLTIuMTE4aDUuMTg4YTIuOTEgMi45MSAwIDAgMC0yLjgwNi0yLjExOGgtMi4zODJ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDREFJX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNDREFJX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTguODI0IDUuODM1QTguOCA4LjggMCAwIDAgMTMuNDEyIDRjLTQuNTQ2IDAtOC4yMzUgMy41ODEtOC4yMzUgOHMzLjY4OSA4IDguMjM1IDhhOC4zOCA4LjM4IDAgMCAwIDUuNDExLTEuOTU4bC0uODk0LTEuMDgyYTYuOTggNi45OCAwIDAgMS00LjUxNyAxLjYyOGMtMy43NjUgMC02LjgyNC0yLjk1LTYuODI0LTYuNTg4czMuMDYtNi41ODggNi44MjQtNi41ODhjMS42NTYgMCAzLjMzMi41NjUgNC41MTcgMS41MTV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNDEyIDguNzA2aC0yLjU4OXYyLjM1M2gtLjk0di40N2guOTR2Ljk0MmgtLjk0di40N2guOTR2MS44ODNoMi41ODlhMy4wNiAzLjA2IDAgMCAwIDIuODIzLTEuODgyaC43MDZ2LS40NzFoLS41NWEzIDMgMCAwIDAgLjA3LS45NDFoLjQ4di0uNDdoLS41NWEzLjA2IDMuMDYgMCAwIDAtMi45OC0yLjM1NG0yLjQ5NCAzLjc2NWEyLjYgMi42IDAgMCAwIC4wODUtLjk0MWgtNC42OTd2Ljk0MXptLTQuNjEyLjQ3djEuNDEyaDIuMTE4YTIuNTkgMi41OSAwIDAgMCAyLjMwNi0xLjQxMXptMC0xLjg4Mmg0LjYxMmEyLjU5IDIuNTkgMCAwIDAtMi40OTQtMS44ODJoLTIuMTE4eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkNEQUlfX2IiIHgxPSIxMiIgeDI9IjEyIiB5MT0iNCIgeTI9IjIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyN0QzQTIiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTM4OEZEIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkNEQUlfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/CDAI
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCDAI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCDAI', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_09zrkdk._.js.map