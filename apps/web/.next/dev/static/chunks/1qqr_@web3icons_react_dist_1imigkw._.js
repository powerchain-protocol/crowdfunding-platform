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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDEFIT.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDEFIT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#037CFF',
                d: 'M14.21 7.134h-1.566l.413-1.46h-1.581l-.472 1.46H4.226l1.246 1.767L3 16.866h4.958l-.472 1.46h1.65l.413-1.46h1.616l-.468 1.46h1.645l.418-1.46h3.976a2.2 2.2 0 0 0 2.097-1.547l2.116-6.75a1.104 1.104 0 0 0-1.046-1.435h-4.058l.414-1.46h-1.582l-.472 1.46zm-.014 7.299 1.557-4.866H9.67l-.467 1.46h2.116l-.516 1.46H8.732l-.623 1.946z',
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
                d: 'M14.21 7.134h-1.566l.413-1.46h-1.581l-.472 1.46H4.226l1.246 1.767L3 16.866h4.958l-.472 1.46h1.65l.413-1.46h1.616l-.468 1.46h1.645l.418-1.46h3.976a2.2 2.2 0 0 0 2.097-1.547l2.116-6.75a1.104 1.104 0 0 0-1.046-1.435h-4.058l.414-1.46h-1.582l-.472 1.46zm-.014 7.299 1.557-4.866H9.67l-.467 1.46h2.116l-.516 1.46H8.732l-.623 1.946z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#DEFIT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#037CFF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.965 7.675h-1.393l.368-1.298h-1.406l-.42 1.298H5.09l1.107 1.57L4 16.325h4.407l-.42 1.297h1.467l.367-1.297h1.436l-.415 1.297h1.462l.372-1.297h3.533a1.96 1.96 0 0 0 1.865-1.375l1.88-6a.982.982 0 0 0-.929-1.275h-3.607l.368-1.298H14.38l-.42 1.298zm-.013 6.487 1.384-4.325H9.93l-.416 1.298h1.882l-.459 1.297H9.095l-.554 1.73z',
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
                        id: 'DEFIT__a'
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
 * @component @name TokenDEFIT
 * @description Web3Icon for TokenDEFIT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMzdDRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjIxIDcuMTM0aC0xLjU2NmwuNDEzLTEuNDZoLTEuNTgxbC0uNDcyIDEuNDZINC4yMjZsMS4yNDYgMS43NjdMMyAxNi44NjZoNC45NThsLS40NzIgMS40NmgxLjY1bC40MTMtMS40NmgxLjYxNmwtLjQ2OCAxLjQ2aDEuNjQ1bC40MTgtMS40NmgzLjk3NmEyLjIgMi4yIDAgMCAwIDIuMDk3LTEuNTQ3bDIuMTE2LTYuNzVhMS4xMDQgMS4xMDQgMCAwIDAtMS4wNDYtMS40MzVoLTQuMDU4bC40MTQtMS40NmgtMS41ODJsLS40NzIgMS40NnptLS4wMTQgNy4yOTkgMS41NTctNC44NjZIOS42N2wtLjQ2NyAxLjQ2aDIuMTE2bC0uNTE2IDEuNDZIOC43MzJsLS42MjMgMS45NDZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjIxIDcuMTM0aC0xLjU2NmwuNDEzLTEuNDZoLTEuNTgxbC0uNDcyIDEuNDZINC4yMjZsMS4yNDYgMS43NjdMMyAxNi44NjZoNC45NThsLS40NzIgMS40NmgxLjY1bC40MTMtMS40NmgxLjYxNmwtLjQ2OCAxLjQ2aDEuNjQ1bC40MTgtMS40NmgzLjk3NmEyLjIgMi4yIDAgMCAwIDIuMDk3LTEuNTQ3bDIuMTE2LTYuNzVhMS4xMDQgMS4xMDQgMCAwIDAtMS4wNDYtMS40MzVoLTQuMDU4bC40MTQtMS40NmgtMS41ODJsLS40NzIgMS40NnptLS4wMTQgNy4yOTkgMS41NTctNC44NjZIOS42N2wtLjQ2NyAxLjQ2aDIuMTE2bC0uNTE2IDEuNDZIOC43MzJsLS42MjMgMS45NDZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNERUZJVF9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMzdDRkYiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuOTY1IDcuNjc1aC0xLjM5M2wuMzY4LTEuMjk4aC0xLjQwNmwtLjQyIDEuMjk4SDUuMDlsMS4xMDcgMS41N0w0IDE2LjMyNWg0LjQwN2wtLjQyIDEuMjk3aDEuNDY3bC4zNjctMS4yOTdoMS40MzZsLS40MTUgMS4yOTdoMS40NjJsLjM3Mi0xLjI5N2gzLjUzM2ExLjk2IDEuOTYgMCAwIDAgMS44NjUtMS4zNzVsMS44OC02YS45ODIuOTgyIDAgMCAwLS45MjktMS4yNzVoLTMuNjA3bC4zNjgtMS4yOThIMTQuMzhsLS40MiAxLjI5OHptLS4wMTMgNi40ODcgMS4zODQtNC4zMjVIOS45M2wtLjQxNiAxLjI5OGgxLjg4MmwtLjQ1OSAxLjI5N0g5LjA5NWwtLjU1NCAxLjczeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkRFRklUX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/DEFIT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDEFIT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDEFIT', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1imigkw._.js.map