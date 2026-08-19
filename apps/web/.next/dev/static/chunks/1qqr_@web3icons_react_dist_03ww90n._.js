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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenNGM.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenNGM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#CBF6EC',
                d: 'M3 12h1.626A7.31 7.31 0 0 0 12 19.312V21a9 9 0 0 1-9-9m9-9v1.687A7.313 7.313 0 0 1 19.25 12H21a9 9 0 0 0-9-9m2.79 10.896a3.375 3.375 0 0 1-6.12-1.334H7.5v-1.125h1.17a3.375 3.375 0 0 1 6.66 0h1.451l-.562 1.126h-6.11a1.968 1.968 0 0 0 3.427.675zm-4.68-2.459a1.97 1.97 0 0 1 3.774 0z',
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
                d: 'M3 12h1.626A7.31 7.31 0 0 0 12 19.312V21a9 9 0 0 1-9-9m9-9v1.687A7.31 7.31 0 0 1 19.25 12H21a9 9 0 0 0-9-9m2.79 10.896a3.375 3.375 0 0 1-6.12-1.334H7.5v-1.125h1.17a3.375 3.375 0 0 1 6.66 0h1.451l-.562 1.126H10.11a1.968 1.968 0 0 0 3.426.675zm-4.68-2.459a1.97 1.97 0 0 1 3.774 0z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#NGM__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#CBF6EC',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M4 12h1.445A6.5 6.5 0 0 0 12 18.5V20a8 8 0 0 1-8-8m8-8v1.5a6.5 6.5 0 0 1 6.445 6.5H20a8 8 0 0 0-8-8m2.48 9.685A3 3 0 0 1 9.04 12.5H8v-1h1.04a3 3 0 0 1 5.92 0h1.29l-.5 1h-5.43a1.75 1.75 0 0 0 3.045.6zM10.32 11.5a1.75 1.75 0 0 1 3.355 0z',
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
                        id: 'NGM__a'
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
 * @component @name TokenNGM
 * @description Web3Icon for TokenNGM
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNDQkY2RUMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMgMTJoMS42MjZBNy4zMSA3LjMxIDAgMCAwIDEyIDE5LjMxMlYyMWE5IDkgMCAwIDEtOS05bTktOXYxLjY4N0E3LjMxMyA3LjMxMyAwIDAgMSAxOS4yNSAxMkgyMWE5IDkgMCAwIDAtOS05bTIuNzkgMTAuODk2YTMuMzc1IDMuMzc1IDAgMCAxLTYuMTItMS4zMzRINy41di0xLjEyNWgxLjE3YTMuMzc1IDMuMzc1IDAgMCAxIDYuNjYgMGgxLjQ1MWwtLjU2MiAxLjEyNmgtNi4xMWExLjk2OCAxLjk2OCAwIDAgMCAzLjQyNy42NzV6bS00LjY4LTIuNDU5YTEuOTcgMS45NyAwIDAgMSAzLjc3NCAweiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMgMTJoMS42MjZBNy4zMSA3LjMxIDAgMCAwIDEyIDE5LjMxMlYyMWE5IDkgMCAwIDEtOS05bTktOXYxLjY4N0E3LjMxIDcuMzEgMCAwIDEgMTkuMjUgMTJIMjFhOSA5IDAgMCAwLTktOW0yLjc5IDEwLjg5NmEzLjM3NSAzLjM3NSAwIDAgMS02LjEyLTEuMzM0SDcuNXYtMS4xMjVoMS4xN2EzLjM3NSAzLjM3NSAwIDAgMSA2LjY2IDBoMS40NTFsLS41NjIgMS4xMjZIMTAuMTFhMS45NjggMS45NjggMCAwIDAgMy40MjYuNjc1em0tNC42OC0yLjQ1OWExLjk3IDEuOTcgMCAwIDEgMy43NzQgMHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNOR01fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjQ0JGNkVDIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQgMTJoMS40NDVBNi41IDYuNSAwIDAgMCAxMiAxOC41VjIwYTggOCAwIDAgMS04LThtOC04djEuNWE2LjUgNi41IDAgMCAxIDYuNDQ1IDYuNUgyMGE4IDggMCAwIDAtOC04bTIuNDggOS42ODVBMyAzIDAgMCAxIDkuMDQgMTIuNUg4di0xaDEuMDRhMyAzIDAgMCAxIDUuOTIgMGgxLjI5bC0uNSAxaC01LjQzYTEuNzUgMS43NSAwIDAgMCAzLjA0NS42ek0xMC4zMiAxMS41YTEuNzUgMS43NSAwIDAgMSAzLjM1NSAweiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9Ik5HTV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/NGM
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenNGM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenNGM', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_03ww90n._.js.map