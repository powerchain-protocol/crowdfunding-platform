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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenGEL.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenGEL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#GEL__a)',
                d: 'M16.858 8.235c0 .247-.232.422-.484.396a8.2 8.2 0 0 0-1.708 0c-1.153.118-2.11.504-2.99.834l-.16.056c-.936.35-1.8.644-2.825.67a6 6 0 0 1-1.333-.124 1.09 1.09 0 0 1-.828-.85 5.213 5.213 0 1 1 10.328-.987z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#GEL__b)',
                d: 'M6.947 10.823a.51.51 0 0 0-.543.243.5.5 0 0 0-.064.2.45.45 0 0 0 .051.237l4.9 9.38a.219.219 0 0 0 .385 0l5.908-10.353a.67.67 0 0 0 .077-.34.596.596 0 0 0-.484-.57 8.4 8.4 0 0 0-2.424-.13c-1.04.109-1.904.428-2.799.762l-.139.052a9.3 9.3 0 0 1-3.103.72c-.566.016-1.106-.046-1.765-.206z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#GEL__c)',
                d: 'M11.485 10.55a.26.26 0 0 1 .17-.246l.144-.052c.95-.375 1.942-.63 2.954-.761a8.4 8.4 0 0 1 2.424.128.6.6 0 0 1 .483.618c0 .103-.03.2-.077.293l-5.907 10.354a.21.21 0 0 1-.19.113z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'GEL__a',
                        x1: '14.573',
                        x2: '14.573',
                        y1: '9.454',
                        y2: '20.997',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FFC4A4'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FE858C'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'GEL__b',
                        x1: '14.573',
                        x2: '14.573',
                        y1: '9.454',
                        y2: '20.997',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FFC4A4'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FE858C'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'GEL__c',
                        x1: '14.572',
                        x2: '14.572',
                        y1: '9.454',
                        y2: '20.997',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FFC4A4'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FE858C'
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
                d: 'M16.859 8.235c0 .247-.232.422-.484.396a8.2 8.2 0 0 0-1.709 0c-1.152.119-2.11.505-2.99.834l-.16.057c-.936.35-1.8.643-2.825.669a6 6 0 0 1-1.333-.124 1.09 1.09 0 0 1-.828-.849 5.213 5.213 0 1 1 10.329-.988zm-9.913 2.588a.506.506 0 0 0-.607.442.45.45 0 0 0 .052.237l4.899 9.382a.219.219 0 0 0 .386 0l5.908-10.355a.67.67 0 0 0 .077-.34.596.596 0 0 0-.484-.57 8.4 8.4 0 0 0-2.423-.13c-1.04.109-1.905.428-2.8.762l-.14.052a9.3 9.3 0 0 1-3.102.72 6.5 6.5 0 0 1-1.766-.206z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.486 10.55c0-.113.067-.206.17-.247l.144-.052c.949-.375 1.941-.63 2.954-.761a8.4 8.4 0 0 1 2.424.128.6.6 0 0 1 .483.618c0 .103-.03.2-.077.293l-5.908 10.355a.21.21 0 0 1-.19.113z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#GEL__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#GEL__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M16.319 8.654c0 .22-.206.375-.43.352a7.3 7.3 0 0 0-1.519 0c-1.025.105-1.875.448-2.658.741l-.142.05c-.832.311-1.6.572-2.511.595a5.3 5.3 0 0 1-1.185-.11.96.96 0 0 1-.737-.755 4.634 4.634 0 1 1 9.182-.878zm-8.811 2.3a.45.45 0 0 0-.483.215.5.5 0 0 0-.057.178.4.4 0 0 0 .046.21l4.355 8.34c.073.137.27.137.343 0l5.252-9.204a.6.6 0 0 0 .068-.302.53.53 0 0 0-.43-.508 7.4 7.4 0 0 0-2.155-.114c-.924.096-1.692.38-2.488.677l-.124.046a8.3 8.3 0 0 1-2.758.64 5.8 5.8 0 0 1-1.57-.183z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.543 10.711c0-.1.06-.183.15-.22l.129-.045c.844-.333 1.726-.56 2.626-.677a7.4 7.4 0 0 1 2.155.114.536.536 0 0 1 .43.55.6.6 0 0 1-.069.26l-5.252 9.204a.19.19 0 0 1-.169.1z'
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
                        id: 'GEL__b',
                        x1: '14.287',
                        x2: '14.287',
                        y1: '9.737',
                        y2: '19.998',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FFC4A4'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FE858C'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'GEL__a'
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
 * @component @name TokenGEL
 * @description Web3Icon for TokenGEL
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjR0VMX19hKSIgZD0iTTE2Ljg1OCA4LjIzNWMwIC4yNDctLjIzMi40MjItLjQ4NC4zOTZhOC4yIDguMiAwIDAgMC0xLjcwOCAwYy0xLjE1My4xMTgtMi4xMS41MDQtMi45OS44MzRsLS4xNi4wNTZjLS45MzYuMzUtMS44LjY0NC0yLjgyNS42N2E2IDYgMCAwIDEtMS4zMzMtLjEyNCAxLjA5IDEuMDkgMCAwIDEtLjgyOC0uODUgNS4yMTMgNS4yMTMgMCAxIDEgMTAuMzI4LS45ODd6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI0dFTF9fYikiIGQ9Ik02Ljk0NyAxMC44MjNhLjUxLjUxIDAgMCAwLS41NDMuMjQzLjUuNSAwIDAgMC0uMDY0LjIuNDUuNDUgMCAwIDAgLjA1MS4yMzdsNC45IDkuMzhhLjIxOS4yMTkgMCAwIDAgLjM4NSAwbDUuOTA4LTEwLjM1M2EuNjcuNjcgMCAwIDAgLjA3Ny0uMzQuNTk2LjU5NiAwIDAgMC0uNDg0LS41NyA4LjQgOC40IDAgMCAwLTIuNDI0LS4xM2MtMS4wNC4xMDktMS45MDQuNDI4LTIuNzk5Ljc2MmwtLjEzOS4wNTJhOS4zIDkuMyAwIDAgMS0zLjEwMy43MmMtLjU2Ni4wMTYtMS4xMDYtLjA0Ni0xLjc2NS0uMjA2eiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNHRUxfX2MpIiBkPSJNMTEuNDg1IDEwLjU1YS4yNi4yNiAwIDAgMSAuMTctLjI0NmwuMTQ0LS4wNTJjLjk1LS4zNzUgMS45NDItLjYzIDIuOTU0LS43NjFhOC40IDguNCAwIDAgMSAyLjQyNC4xMjguNi42IDAgMCAxIC40ODMuNjE4YzAgLjEwMy0uMDMuMi0uMDc3LjI5M2wtNS45MDcgMTAuMzU0YS4yMS4yMSAwIDAgMS0uMTkuMTEzeiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJHRUxfX2EiIHgxPSIxNC41NzMiIHgyPSIxNC41NzMiIHkxPSI5LjQ1NCIgeTI9IjIwLjk5NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZDNEE0Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZFODU4QyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJHRUxfX2IiIHgxPSIxNC41NzMiIHgyPSIxNC41NzMiIHkxPSI5LjQ1NCIgeTI9IjIwLjk5NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZDNEE0Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZFODU4QyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJHRUxfX2MiIHgxPSIxNC41NzIiIHgyPSIxNC41NzIiIHkxPSI5LjQ1NCIgeTI9IjIwLjk5NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZDNEE0Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZFODU4QyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi44NTkgOC4yMzVjMCAuMjQ3LS4yMzIuNDIyLS40ODQuMzk2YTguMiA4LjIgMCAwIDAtMS43MDkgMGMtMS4xNTIuMTE5LTIuMTEuNTA1LTIuOTkuODM0bC0uMTYuMDU3Yy0uOTM2LjM1LTEuOC42NDMtMi44MjUuNjY5YTYgNiAwIDAgMS0xLjMzMy0uMTI0IDEuMDkgMS4wOSAwIDAgMS0uODI4LS44NDkgNS4yMTMgNS4yMTMgMCAxIDEgMTAuMzI5LS45ODh6bS05LjkxMyAyLjU4OGEuNTA2LjUwNiAwIDAgMC0uNjA3LjQ0Mi40NS40NSAwIDAgMCAuMDUyLjIzN2w0Ljg5OSA5LjM4MmEuMjE5LjIxOSAwIDAgMCAuMzg2IDBsNS45MDgtMTAuMzU1YS42Ny42NyAwIDAgMCAuMDc3LS4zNC41OTYuNTk2IDAgMCAwLS40ODQtLjU3IDguNCA4LjQgMCAwIDAtMi40MjMtLjEzYy0xLjA0LjEwOS0xLjkwNS40MjgtMi44Ljc2MmwtLjE0LjA1MmE5LjMgOS4zIDAgMCAxLTMuMTAyLjcyIDYuNSA2LjUgMCAwIDEtMS43NjYtLjIwNnoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS40ODYgMTAuNTVjMC0uMTEzLjA2Ny0uMjA2LjE3LS4yNDdsLjE0NC0uMDUyYy45NDktLjM3NSAxLjk0MS0uNjMgMi45NTQtLjc2MWE4LjQgOC40IDAgMCAxIDIuNDI0LjEyOC42LjYgMCAwIDEgLjQ4My42MThjMCAuMTAzLS4wMy4yLS4wNzcuMjkzbC01LjkwOCAxMC4zNTVhLjIxLjIxIDAgMCAxLS4xOS4xMTN6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNHRUxfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0dFTF9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjMxOSA4LjY1NGMwIC4yMi0uMjA2LjM3NS0uNDMuMzUyYTcuMyA3LjMgMCAwIDAtMS41MTkgMGMtMS4wMjUuMTA1LTEuODc1LjQ0OC0yLjY1OC43NDFsLS4xNDIuMDVjLS44MzIuMzExLTEuNi41NzItMi41MTEuNTk1YTUuMyA1LjMgMCAwIDEtMS4xODUtLjExLjk2Ljk2IDAgMCAxLS43MzctLjc1NSA0LjYzNCA0LjYzNCAwIDEgMSA5LjE4Mi0uODc4em0tOC44MTEgMi4zYS40NS40NSAwIDAgMC0uNDgzLjIxNS41LjUgMCAwIDAtLjA1Ny4xNzguNC40IDAgMCAwIC4wNDYuMjFsNC4zNTUgOC4zNGMuMDczLjEzNy4yNy4xMzcuMzQzIDBsNS4yNTItOS4yMDRhLjYuNiAwIDAgMCAuMDY4LS4zMDIuNTMuNTMgMCAwIDAtLjQzLS41MDggNy40IDcuNCAwIDAgMC0yLjE1NS0uMTE0Yy0uOTI0LjA5Ni0xLjY5Mi4zOC0yLjQ4OC42NzdsLS4xMjQuMDQ2YTguMyA4LjMgMCAwIDEtMi43NTguNjQgNS44IDUuOCAwIDAgMS0xLjU3LS4xODN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTExLjU0MyAxMC43MTFjMC0uMS4wNi0uMTgzLjE1LS4yMmwuMTI5LS4wNDVjLjg0NC0uMzMzIDEuNzI2LS41NiAyLjYyNi0uNjc3YTcuNCA3LjQgMCAwIDEgMi4xNTUuMTE0LjUzNi41MzYgMCAwIDEgLjQzLjU1LjYuNiAwIDAgMS0uMDY5LjI2bC01LjI1MiA5LjIwNGEuMTkuMTkgMCAwIDEtLjE2OS4xeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJHRUxfX2IiIHgxPSIxNC4yODciIHgyPSIxNC4yODciIHkxPSI5LjczNyIgeTI9IjE5Ljk5OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZDNEE0Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZFODU4QyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJHRUxfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/GEL
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenGEL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenGEL', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1qkgdu_._.js.map