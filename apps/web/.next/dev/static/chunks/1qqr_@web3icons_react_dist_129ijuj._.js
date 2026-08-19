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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenT.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#7D00FE',
                d: 'M21 6.316h-6.158V8.21H21zM11.053 8.21H9.158v1.894h1.895zm-1.895 9.473h1.895V12H9.158zm3.79-9.473v1.894h1.894V8.211zm0 9.473h1.894V12h-1.895zm0-11.368h-1.895V8.21h1.894zM3 6.316V8.21h6.158V6.316zM21 12v-1.895h-6.158V12zm-9.947-1.895V12h1.894v-1.895zm-8.053 0V12h6.158v-1.895z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M21 6.316h-6.158V8.21H21zM11.053 8.21H9.158v1.894h1.895zm-1.895 9.473h1.895V12H9.158zm3.79-9.473v1.894h1.894V8.211zm0 9.473h1.894V12h-1.895zm0-11.368h-1.895V8.21h1.894zM3 6.316V8.21h6.158V6.316zM21 12v-1.895h-6.158V12zm-9.947-1.895V12h1.894v-1.895zm-8.053 0V12h6.158v-1.895z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#T__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#7D00FE',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M20 6.947h-5.474v1.684H20zm-8.842 1.684H9.474v1.685h1.684zm-1.684 8.422h1.684V12H9.474zm3.368-8.422v1.685h1.684V8.63zm0 8.422h1.684V12h-1.684zm0-10.106h-1.684v1.684h1.684zM4 6.947v1.684h5.474V6.947zM20 12v-1.684h-5.474V12zm-8.842-1.684V12h1.684v-1.684zm-7.158 0V12h5.474v-1.684z'
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
                        id: 'T__a'
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
 * @component @name TokenT
 * @description Web3Icon for TokenT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM3RDAwRkUiIGQ9Ik0yMSA2LjMxNmgtNi4xNThWOC4yMUgyMXpNMTEuMDUzIDguMjFIOS4xNTh2MS44OTRoMS44OTV6bS0xLjg5NSA5LjQ3M2gxLjg5NVYxMkg5LjE1OHptMy43OS05LjQ3M3YxLjg5NGgxLjg5NFY4LjIxMXptMCA5LjQ3M2gxLjg5NFYxMmgtMS44OTV6bTAtMTEuMzY4aC0xLjg5NVY4LjIxaDEuODk0ek0zIDYuMzE2VjguMjFoNi4xNThWNi4zMTZ6TTIxIDEydi0xLjg5NWgtNi4xNThWMTJ6bS05Ljk0Ny0xLjg5NVYxMmgxLjg5NHYtMS44OTV6bS04LjA1MyAwVjEyaDYuMTU4di0xLjg5NXoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMSA2LjMxNmgtNi4xNThWOC4yMUgyMXpNMTEuMDUzIDguMjFIOS4xNTh2MS44OTRoMS44OTV6bS0xLjg5NSA5LjQ3M2gxLjg5NVYxMkg5LjE1OHptMy43OS05LjQ3M3YxLjg5NGgxLjg5NFY4LjIxMXptMCA5LjQ3M2gxLjg5NFYxMmgtMS44OTV6bTAtMTEuMzY4aC0xLjg5NVY4LjIxaDEuODk0ek0zIDYuMzE2VjguMjFoNi4xNThWNi4zMTZ6TTIxIDEydi0xLjg5NWgtNi4xNThWMTJ6bS05Ljk0Ny0xLjg5NVYxMmgxLjg5NHYtMS44OTV6bS04LjA1MyAwVjEyaDYuMTU4di0xLjg5NXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNUX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzdEMDBGRSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjAgNi45NDdoLTUuNDc0djEuNjg0SDIwem0tOC44NDIgMS42ODRIOS40NzR2MS42ODVoMS42ODR6bS0xLjY4NCA4LjQyMmgxLjY4NFYxMkg5LjQ3NHptMy4zNjgtOC40MjJ2MS42ODVoMS42ODRWOC42M3ptMCA4LjQyMmgxLjY4NFYxMmgtMS42ODR6bTAtMTAuMTA2aC0xLjY4NHYxLjY4NGgxLjY4NHpNNCA2Ljk0N3YxLjY4NGg1LjQ3NFY2Ljk0N3pNMjAgMTJ2LTEuNjg0aC01LjQ3NFYxMnptLTguODQyLTEuNjg0VjEyaDEuNjg0di0xLjY4NHptLTcuMTU4IDBWMTJoNS40NzR2LTEuNjg0eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJUX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/T
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenT', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_129ijuj._.js.map