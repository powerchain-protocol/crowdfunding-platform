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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDIONE.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDIONE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#30128D',
                d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18'
            }
        ],
        [
            'path',
            {
                fill: '#7D1FA9',
                d: 'M12 19.41a7.41 7.41 0 1 0 0-14.821 7.41 7.41 0 0 0 0 14.82'
            }
        ],
        [
            'path',
            {
                fill: '#FB88F3',
                d: 'M12 17.604a5.605 5.605 0 1 0 0-11.21 5.605 5.605 0 0 0 0 11.21'
            }
        ],
        [
            'path',
            {
                fill: '#E7B2F8',
                d: 'M12 17.16a5.16 5.16 0 1 0 0-10.32 5.16 5.16 0 0 0 0 10.32'
            }
        ],
        [
            'path',
            {
                fill: 'url(#DIONE__a)',
                d: 'M16.56 12.17c0 2.6-1.74 3.75-4.295 4.405-1.135.295-2.085.165-2.915 0-1.33-.265-2.045-1.2-2.435-2.5a3.3 3.3 0 0 1-.105-.99c0-1.885 2.46-5.61 5.05-5.61a4.7 4.7 0 0 1 4.7 4.7z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'DIONE__a',
                        x1: '14.98',
                        x2: '7.415',
                        y1: '9.14',
                        y2: '15.185',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#6DDFF4'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.42',
                                stopColor: '#10FDF7'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.65',
                                stopColor: '#20DFFB'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#688FEB'
                            }
                        ]
                    ]
                ]
            ]
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#DIONE__a)'
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
                        fill: '#30128D',
                        d: 'M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#7D1FA9',
                        d: 'M12 18.586a6.587 6.587 0 1 0 0-13.173 6.587 6.587 0 0 0 0 13.173'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#FB88F3',
                        d: 'M12 16.982a4.982 4.982 0 1 0 0-9.965 4.982 4.982 0 0 0 0 9.965'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#E7B2F8',
                        d: 'M12 16.586a4.587 4.587 0 1 0 0-9.173 4.587 4.587 0 0 0 0 9.173'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#DIONE__b)',
                        d: 'M16.054 12.152c0 2.31-1.547 3.333-3.818 3.915-1.01.262-1.854.147-2.591 0-1.183-.235-1.818-1.066-2.165-2.222a3 3 0 0 1-.093-.88c0-1.676 2.186-4.987 4.489-4.987a4.18 4.18 0 0 1 4.178 4.178z'
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
                        id: 'DIONE__b',
                        x1: '14.649',
                        x2: '7.925',
                        y1: '9.458',
                        y2: '14.832',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#6DDFF4'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.42',
                                stopColor: '#10FDF7'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.65',
                                stopColor: '#20DFFB'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#688FEB'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'DIONE__a'
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
 * @component @name TokenDIONE
 * @description Web3Icon for TokenDIONE
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMzMDEyOEQiIGQ9Ik0xMiAyMWE5IDkgMCAxIDAgMC0xOCA5IDkgMCAwIDAgMCAxOCIvPgogICAgPHBhdGggZmlsbD0iIzdEMUZBOSIgZD0iTTEyIDE5LjQxYTcuNDEgNy40MSAwIDEgMCAwLTE0LjgyMSA3LjQxIDcuNDEgMCAwIDAgMCAxNC44MiIvPgogICAgPHBhdGggZmlsbD0iI0ZCODhGMyIgZD0iTTEyIDE3LjYwNGE1LjYwNSA1LjYwNSAwIDEgMCAwLTExLjIxIDUuNjA1IDUuNjA1IDAgMCAwIDAgMTEuMjEiLz4KICAgIDxwYXRoIGZpbGw9IiNFN0IyRjgiIGQ9Ik0xMiAxNy4xNmE1LjE2IDUuMTYgMCAxIDAgMC0xMC4zMiA1LjE2IDUuMTYgMCAwIDAgMCAxMC4zMiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNESU9ORV9fYSkiIGQ9Ik0xNi41NiAxMi4xN2MwIDIuNi0xLjc0IDMuNzUtNC4yOTUgNC40MDUtMS4xMzUuMjk1LTIuMDg1LjE2NS0yLjkxNSAwLTEuMzMtLjI2NS0yLjA0NS0xLjItMi40MzUtMi41YTMuMyAzLjMgMCAwIDEtLjEwNS0uOTljMC0xLjg4NSAyLjQ2LTUuNjEgNS4wNS01LjYxYTQuNyA0LjcgMCAwIDEgNC43IDQuN3oiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iRElPTkVfX2EiIHgxPSIxNC45OCIgeDI9IjcuNDE1IiB5MT0iOS4xNCIgeTI9IjE1LjE4NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNkRERkY0Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjQyIiBzdG9wLWNvbG9yPSIjMTBGREY3Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjY1IiBzdG9wLWNvbG9yPSIjMjBERkZCIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzY4OEZFQiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNESU9ORV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzMwMTI4RCIgZD0iTTEyIDIwYTggOCAwIDEgMCAwLTE2IDggOCAwIDAgMCAwIDE2Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzdEMUZBOSIgZD0iTTEyIDE4LjU4NmE2LjU4NyA2LjU4NyAwIDEgMCAwLTEzLjE3MyA2LjU4NyA2LjU4NyAwIDAgMCAwIDEzLjE3MyIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGQjg4RjMiIGQ9Ik0xMiAxNi45ODJhNC45ODIgNC45ODIgMCAxIDAgMC05Ljk2NSA0Ljk4MiA0Ljk4MiAwIDAgMCAwIDkuOTY1Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0U3QjJGOCIgZD0iTTEyIDE2LjU4NmE0LjU4NyA0LjU4NyAwIDEgMCAwLTkuMTczIDQuNTg3IDQuNTg3IDAgMCAwIDAgOS4xNzMiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0RJT05FX19iKSIgZD0iTTE2LjA1NCAxMi4xNTJjMCAyLjMxLTEuNTQ3IDMuMzMzLTMuODE4IDMuOTE1LTEuMDEuMjYyLTEuODU0LjE0Ny0yLjU5MSAwLTEuMTgzLS4yMzUtMS44MTgtMS4wNjYtMi4xNjUtMi4yMjJhMyAzIDAgMCAxLS4wOTMtLjg4YzAtMS42NzYgMi4xODYtNC45ODcgNC40ODktNC45ODdhNC4xOCA0LjE4IDAgMCAxIDQuMTc4IDQuMTc4eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJESU9ORV9fYiIgeDE9IjE0LjY0OSIgeDI9IjcuOTI1IiB5MT0iOS40NTgiIHkyPSIxNC44MzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzZEREZGNCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii40MiIgc3RvcC1jb2xvcj0iIzEwRkRGNyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii42NSIgc3RvcC1jb2xvcj0iIzIwREZGQiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2ODhGRUIiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iRElPTkVfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/DIONE
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDIONE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDIONE', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1cnamf8._.js.map