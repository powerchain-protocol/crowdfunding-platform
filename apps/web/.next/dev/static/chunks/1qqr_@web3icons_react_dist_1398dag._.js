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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDFX.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDFX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#DFX__a)',
                d: 'M12 3.006v9.033l-3.538-3.6c-1.142.979-1.49 2.83-1.541 3.6 0 3.066 3.06 5.204 5.079 4.984V21c-7.099-.337-8.96-6.114-9-8.96 0-6.323 5.45-9.18 9-9.034'
            }
        ],
        [
            'path',
            {
                fill: 'url(#DFX__b)',
                d: 'M12 20.995V11.96l3.538 3.6c1.142-.979 1.49-2.83 1.541-3.6 0-3.066-3.06-5.203-5.079-4.984V3c7.099.338 8.96 6.115 9 8.96 0 6.323-5.45 9.18-9 9.035'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'DFX__a',
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
                                offset: '.32',
                                stopColor: '#00E8F2'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#3F28F7'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'DFX__b',
                        x1: '16.5',
                        x2: '16.5',
                        y1: '21',
                        y2: '3',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.46',
                                stopColor: '#EA00D1'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#6401F2'
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
                d: 'M12 3.006v9.033l-3.538-3.6c-1.142.979-1.49 2.83-1.541 3.6 0 3.066 3.06 5.203 5.079 4.984V21c-7.099-.338-8.96-6.115-9-8.96 0-6.323 5.45-9.18 9-9.034m0 17.989V11.96l3.538 3.6c1.142-.979 1.49-2.83 1.541-3.6 0-3.066-3.06-5.203-5.079-4.984V3c7.099.338 8.96 6.115 9 8.96 0 6.323-5.45 9.18-9 9.034'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#DFX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#DFX__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 4.005v8.03l-3.145-3.2c-1.015.87-1.325 2.515-1.37 3.2 0 2.725 2.72 4.625 4.515 4.43V20c-6.31-.3-7.965-5.435-8-7.965 0-5.62 4.845-8.16 8-8.03m0 15.99v-8.03l3.145 3.2c1.015-.87 1.325-2.515 1.37-3.2 0-2.725-2.72-4.625-4.515-4.43V4c6.31.3 7.965 5.435 8 7.965 0 5.62-4.845 8.16-8 8.03'
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
                        id: 'DFX__b',
                        x1: '12',
                        x2: '12',
                        y1: '3.999',
                        y2: '20',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.32',
                                stopColor: '#00E8F2'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#3F28F7'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'DFX__a'
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
 * @component @name TokenDFX
 * @description Web3Icon for TokenDFX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjREZYX19hKSIgZD0iTTEyIDMuMDA2djkuMDMzbC0zLjUzOC0zLjZjLTEuMTQyLjk3OS0xLjQ5IDIuODMtMS41NDEgMy42IDAgMy4wNjYgMy4wNiA1LjIwNCA1LjA3OSA0Ljk4NFYyMWMtNy4wOTktLjMzNy04Ljk2LTYuMTE0LTktOC45NiAwLTYuMzIzIDUuNDUtOS4xOCA5LTkuMDM0Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI0RGWF9fYikiIGQ9Ik0xMiAyMC45OTVWMTEuOTZsMy41MzggMy42YzEuMTQyLS45NzkgMS40OS0yLjgzIDEuNTQxLTMuNiAwLTMuMDY2LTMuMDYtNS4yMDMtNS4wNzktNC45ODRWM2M3LjA5OS4zMzggOC45NiA2LjExNSA5IDguOTYgMCA2LjMyMy01LjQ1IDkuMTgtOSA5LjAzNSIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJERlhfX2EiIHgxPSIxMiIgeDI9IjEyIiB5MT0iMyIgeTI9IjIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjMyIiBzdG9wLWNvbG9yPSIjMDBFOEYyIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzNGMjhGNyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJERlhfX2IiIHgxPSIxNi41IiB4Mj0iMTYuNSIgeTE9IjIxIiB5Mj0iMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii40NiIgc3RvcC1jb2xvcj0iI0VBMDBEMSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2NDAxRjIiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAzLjAwNnY5LjAzM2wtMy41MzgtMy42Yy0xLjE0Mi45NzktMS40OSAyLjgzLTEuNTQxIDMuNiAwIDMuMDY2IDMuMDYgNS4yMDMgNS4wNzkgNC45ODRWMjFjLTcuMDk5LS4zMzgtOC45Ni02LjExNS05LTguOTYgMC02LjMyMyA1LjQ1LTkuMTggOS05LjAzNG0wIDE3Ljk4OVYxMS45NmwzLjUzOCAzLjZjMS4xNDItLjk3OSAxLjQ5LTIuODMgMS41NDEtMy42IDAtMy4wNjYtMy4wNi01LjIwMy01LjA3OS00Ljk4NFYzYzcuMDk5LjMzOCA4Ljk2IDYuMTE1IDkgOC45NiAwIDYuMzIzLTUuNDUgOS4xOC05IDkuMDM0Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNERlhfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0RGWF9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDQuMDA1djguMDNsLTMuMTQ1LTMuMmMtMS4wMTUuODctMS4zMjUgMi41MTUtMS4zNyAzLjIgMCAyLjcyNSAyLjcyIDQuNjI1IDQuNTE1IDQuNDNWMjBjLTYuMzEtLjMtNy45NjUtNS40MzUtOC03Ljk2NSAwLTUuNjIgNC44NDUtOC4xNiA4LTguMDNtMCAxNS45OXYtOC4wM2wzLjE0NSAzLjJjMS4wMTUtLjg3IDEuMzI1LTIuNTE1IDEuMzctMy4yIDAtMi43MjUtMi43Mi00LjYyNS00LjUxNS00LjQzVjRjNi4zMS4zIDcuOTY1IDUuNDM1IDggNy45NjUgMCA1LjYyLTQuODQ1IDguMTYtOCA4LjAzIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkRGWF9fYiIgeDE9IjEyIiB4Mj0iMTIiIHkxPSIzLjk5OSIgeTI9IjIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjMyIiBzdG9wLWNvbG9yPSIjMDBFOEYyIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzNGMjhGNyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJERlhfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/DFX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDFX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDFX', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1398dag._.js.map