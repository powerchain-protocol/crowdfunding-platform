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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkAcala.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkAcala
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#acala__a)',
                d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m.037-.845a8.155 8.155 0 1 0 0-16.31 8.155 8.155 0 0 0 0 16.31M12 19.531a7.53 7.53 0 1 0 0-15.062 7.53 7.53 0 0 0 0 15.062m.018-.919a6.63 6.63 0 1 0 0-13.261 6.63 6.63 0 0 0 0 13.261m-.374-11.988 4.8 8.328.515-.893-4.285-7.435zm-4.603 7.42 4.108-7.128.009.015.008-.014 4.869 8.447h-1.03l-1.23-2.134a5.9 5.9 0 0 0-1.771-.272q-.478 0-.93.066l.592-1.027a7 7 0 0 1 1.445.081l-1.954-3.39-3.601 6.249zm2.793-.108 1.846-3.203-.515-.893-3.184 5.524h1.03l.01-.017c.883-.532 1.896-.8 3.002-.8a5.9 5.9 0 0 1 2.011.353l-.69-1.195a6.9 6.9 0 0 0-3.51.23',
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
                        id: 'acala__a',
                        x1: '19.99',
                        x2: '6.71',
                        y1: '21',
                        y2: '4.598',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#5A81FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.524',
                                stopColor: '#E40C5B'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FF4C3B'
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
                d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m.037-.845a8.155 8.155 0 1 0 0-16.31 8.155 8.155 0 0 0 0 16.31M12 19.531a7.53 7.53 0 1 0 0-15.062 7.53 7.53 0 0 0 0 15.062m.018-.919a6.63 6.63 0 1 0 0-13.261 6.63 6.63 0 0 0 0 13.261m-.374-11.988 4.8 8.328.515-.893-4.285-7.435zm-4.603 7.42 4.108-7.128.009.015.008-.014 4.869 8.447h-1.03l-1.23-2.134a5.9 5.9 0 0 0-1.771-.272q-.478 0-.93.066l.592-1.027a7 7 0 0 1 1.445.081l-1.954-3.39-3.601 6.249zm2.793-.108 1.846-3.203-.515-.893-3.184 5.524h1.03l.01-.017c.883-.532 1.896-.8 3.002-.8a5.9 5.9 0 0 1 2.011.353l-.69-1.195a6.9 6.9 0 0 0-3.51.23',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#acala__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#acala__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m.033-.751a7.249 7.249 0 1 0 0-14.498 7.249 7.249 0 0 0 0 14.498M12 18.694a6.694 6.694 0 1 0 0-13.388 6.694 6.694 0 0 0 0 13.388m.016-.816a5.894 5.894 0 1 0 0-11.788 5.894 5.894 0 0 0 0 11.788m-.332-10.656 4.267 7.402.457-.794-3.81-6.608zm-4.092 6.595 3.652-6.336.007.013.008-.012 4.327 7.508h-.915l-1.093-1.897a5.2 5.2 0 0 0-1.575-.242q-.425 0-.827.06l.527-.913a6 6 0 0 1 1.285.072l-1.737-3.014-3.202 5.555zm2.483-.096 1.64-2.847-.457-.794-2.83 4.91h.915l.009-.015c.784-.473 1.685-.712 2.669-.712.628 0 1.23.111 1.787.315l-.613-1.062a6.1 6.1 0 0 0-3.12.205',
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
                        id: 'acala__b',
                        x1: '19.102',
                        x2: '7.298',
                        y1: '20',
                        y2: '5.42',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#5A81FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.524',
                                stopColor: '#E40C5B'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FF4C3B'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'acala__a'
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
 * @component @name NetworkAcala
 * @description Web3Icon for NetworkAcala
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjYWNhbGFfX2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAyMWE5IDkgMCAxIDAgMC0xOCA5IDkgMCAwIDAgMCAxOG0uMDM3LS44NDVhOC4xNTUgOC4xNTUgMCAxIDAgMC0xNi4zMSA4LjE1NSA4LjE1NSAwIDAgMCAwIDE2LjMxTTEyIDE5LjUzMWE3LjUzIDcuNTMgMCAxIDAgMC0xNS4wNjIgNy41MyA3LjUzIDAgMCAwIDAgMTUuMDYybS4wMTgtLjkxOWE2LjYzIDYuNjMgMCAxIDAgMC0xMy4yNjEgNi42MyA2LjYzIDAgMCAwIDAgMTMuMjYxbS0uMzc0LTExLjk4OCA0LjggOC4zMjguNTE1LS44OTMtNC4yODUtNy40MzV6bS00LjYwMyA3LjQyIDQuMTA4LTcuMTI4LjAwOS4wMTUuMDA4LS4wMTQgNC44NjkgOC40NDdoLTEuMDNsLTEuMjMtMi4xMzRhNS45IDUuOSAwIDAgMC0xLjc3MS0uMjcycS0uNDc4IDAtLjkzLjA2NmwuNTkyLTEuMDI3YTcgNyAwIDAgMSAxLjQ0NS4wODFsLTEuOTU0LTMuMzktMy42MDEgNi4yNDl6bTIuNzkzLS4xMDggMS44NDYtMy4yMDMtLjUxNS0uODkzLTMuMTg0IDUuNTI0aDEuMDNsLjAxLS4wMTdjLjg4My0uNTMyIDEuODk2LS44IDMuMDAyLS44YTUuOSA1LjkgMCAwIDEgMi4wMTEuMzUzbC0uNjktMS4xOTVhNi45IDYuOSAwIDAgMC0zLjUxLjIzIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYWNhbGFfX2EiIHgxPSIxOS45OSIgeDI9IjYuNzEiIHkxPSIyMSIgeTI9IjQuNTk4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM1QTgxRkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNTI0IiBzdG9wLWNvbG9yPSIjRTQwQzVCIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNEMzQiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDIxYTkgOSAwIDEgMCAwLTE4IDkgOSAwIDAgMCAwIDE4bS4wMzctLjg0NWE4LjE1NSA4LjE1NSAwIDEgMCAwLTE2LjMxIDguMTU1IDguMTU1IDAgMCAwIDAgMTYuMzFNMTIgMTkuNTMxYTcuNTMgNy41MyAwIDEgMCAwLTE1LjA2MiA3LjUzIDcuNTMgMCAwIDAgMCAxNS4wNjJtLjAxOC0uOTE5YTYuNjMgNi42MyAwIDEgMCAwLTEzLjI2MSA2LjYzIDYuNjMgMCAwIDAgMCAxMy4yNjFtLS4zNzQtMTEuOTg4IDQuOCA4LjMyOC41MTUtLjg5My00LjI4NS03LjQzNXptLTQuNjAzIDcuNDIgNC4xMDgtNy4xMjguMDA5LjAxNS4wMDgtLjAxNCA0Ljg2OSA4LjQ0N2gtMS4wM2wtMS4yMy0yLjEzNGE1LjkgNS45IDAgMCAwLTEuNzcxLS4yNzJxLS40NzggMC0uOTMuMDY2bC41OTItMS4wMjdhNyA3IDAgMCAxIDEuNDQ1LjA4MWwtMS45NTQtMy4zOS0zLjYwMSA2LjI0OXptMi43OTMtLjEwOCAxLjg0Ni0zLjIwMy0uNTE1LS44OTMtMy4xODQgNS41MjRoMS4wM2wuMDEtLjAxN2MuODgzLS41MzIgMS44OTYtLjggMy4wMDItLjhhNS45IDUuOSAwIDAgMSAyLjAxMS4zNTNsLS42OS0xLjE5NWE2LjkgNi45IDAgMCAwLTMuNTEuMjMiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNhY2FsYV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjYWNhbGFfX2IpIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDIwYTggOCAwIDEgMCAwLTE2IDggOCAwIDAgMCAwIDE2bS4wMzMtLjc1MWE3LjI0OSA3LjI0OSAwIDEgMCAwLTE0LjQ5OCA3LjI0OSA3LjI0OSAwIDAgMCAwIDE0LjQ5OE0xMiAxOC42OTRhNi42OTQgNi42OTQgMCAxIDAgMC0xMy4zODggNi42OTQgNi42OTQgMCAwIDAgMCAxMy4zODhtLjAxNi0uODE2YTUuODk0IDUuODk0IDAgMSAwIDAtMTEuNzg4IDUuODk0IDUuODk0IDAgMCAwIDAgMTEuNzg4bS0uMzMyLTEwLjY1NiA0LjI2NyA3LjQwMi40NTctLjc5NC0zLjgxLTYuNjA4em0tNC4wOTIgNi41OTUgMy42NTItNi4zMzYuMDA3LjAxMy4wMDgtLjAxMiA0LjMyNyA3LjUwOGgtLjkxNWwtMS4wOTMtMS44OTdhNS4yIDUuMiAwIDAgMC0xLjU3NS0uMjQycS0uNDI1IDAtLjgyNy4wNmwuNTI3LS45MTNhNiA2IDAgMCAxIDEuMjg1LjA3MmwtMS43MzctMy4wMTQtMy4yMDIgNS41NTV6bTIuNDgzLS4wOTYgMS42NC0yLjg0Ny0uNDU3LS43OTQtMi44MyA0LjkxaC45MTVsLjAwOS0uMDE1Yy43ODQtLjQ3MyAxLjY4NS0uNzEyIDIuNjY5LS43MTIuNjI4IDAgMS4yMy4xMTEgMS43ODcuMzE1bC0uNjEzLTEuMDYyYTYuMSA2LjEgMCAwIDAtMy4xMi4yMDUiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJhY2FsYV9fYiIgeDE9IjE5LjEwMiIgeDI9IjcuMjk4IiB5MT0iMjAiIHkyPSI1LjQyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM1QTgxRkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNTI0IiBzdG9wLWNvbG9yPSIjRTQwQzVCIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNEMzQiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJhY2FsYV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/networks/acala
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkAcala = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkAcala', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1tng27v._.js.map