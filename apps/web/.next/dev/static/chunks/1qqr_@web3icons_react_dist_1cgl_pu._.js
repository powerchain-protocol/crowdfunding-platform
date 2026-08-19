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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenAUCTION.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenAUCTION
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#000',
                d: 'M5.813 4.125C5.813 3.506 6.33 3 6.97 3h3.87c.643 0 1.16.506 1.16 1.125s-.518 1.125-1.159 1.125h-3.87c-.641 0-1.158-.506-1.158-1.125m12.301 1.114a1.116 1.116 0 0 1-.686 1.44L7.376 10.273a1.17 1.17 0 0 1-1.49-.67 1.114 1.114 0 0 1 .686-1.44L16.624 4.57a1.17 1.17 0 0 1 1.49.67m0 9.157a1.116 1.116 0 0 1-.686 1.44L7.376 19.431a1.17 1.17 0 0 1-1.49-.67 1.114 1.114 0 0 1 .686-1.44l10.052-3.594a1.17 1.17 0 0 1 1.49.67M12 19.876c0-.62.518-1.126 1.159-1.126h3.87c.641 0 1.159.506 1.159 1.125S17.67 21 17.028 21h-3.87c-.64 0-1.158-.506-1.158-1.125m6.109-10.154a1.11 1.11 0 0 1-.664 1.451L7.387 14.925a1.17 1.17 0 0 1-1.496-.647 1.115 1.115 0 0 1 .664-1.451l10.058-3.752a1.17 1.17 0 0 1 1.496.647'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M5.813 4.125C5.813 3.506 6.33 3 6.97 3h3.87c.642 0 1.16.506 1.16 1.125s-.518 1.125-1.159 1.125h-3.87c-.641 0-1.158-.506-1.158-1.125m12.301 1.114a1.114 1.114 0 0 1-.686 1.44L7.376 10.273a1.17 1.17 0 0 1-1.49-.67 1.114 1.114 0 0 1 .686-1.44L16.624 4.57a1.17 1.17 0 0 1 1.49.67m0 9.157a1.114 1.114 0 0 1-.686 1.44L7.376 19.431a1.17 1.17 0 0 1-1.49-.67 1.115 1.115 0 0 1 .686-1.44l10.052-3.594a1.17 1.17 0 0 1 1.49.67M12 19.876c0-.62.518-1.126 1.159-1.126h3.87c.641 0 1.159.506 1.159 1.125S17.67 21 17.028 21h-3.87c-.64 0-1.158-.506-1.158-1.125m6.109-10.154a1.11 1.11 0 0 1-.664 1.451L7.387 14.925a1.17 1.17 0 0 1-1.496-.647 1.115 1.115 0 0 1 .664-1.451l10.058-3.752a1.17 1.17 0 0 1 1.496.647'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#AUCTION__a)'
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
                        d: 'M6.5 5c0-.55.46-1 1.03-1h3.44c.57 0 1.03.45 1.03 1s-.46 1-1.03 1H7.53C6.96 6 6.5 5.55 6.5 5m10.935.99a.99.99 0 0 1-.61 1.28L7.89 10.465a1.04 1.04 0 0 1-1.325-.595.99.99 0 0 1 .61-1.28l8.935-3.195a1.04 1.04 0 0 1 1.325.595m0 8.14a.99.99 0 0 1-.61 1.28L7.89 18.605a1.04 1.04 0 0 1-1.325-.595.99.99 0 0 1 .61-1.28l8.935-3.195a1.04 1.04 0 0 1 1.325.595M12 19c0-.55.46-1 1.03-1h3.44c.57 0 1.03.45 1.03 1s-.46 1-1.03 1h-3.44c-.57 0-1.03-.45-1.03-1m5.43-9.025a.99.99 0 0 1-.59 1.29L7.9 14.6a1.04 1.04 0 0 1-1.33-.575.99.99 0 0 1 .59-1.29L16.1 9.4c.53-.2 1.125.06 1.33.575'
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
                        id: 'AUCTION__a'
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
 * @component @name TokenAUCTION
 * @description Web3Icon for TokenAUCTION
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik01LjgxMyA0LjEyNUM1LjgxMyAzLjUwNiA2LjMzIDMgNi45NyAzaDMuODdjLjY0MyAwIDEuMTYuNTA2IDEuMTYgMS4xMjVzLS41MTggMS4xMjUtMS4xNTkgMS4xMjVoLTMuODdjLS42NDEgMC0xLjE1OC0uNTA2LTEuMTU4LTEuMTI1bTEyLjMwMSAxLjExNGExLjExNiAxLjExNiAwIDAgMS0uNjg2IDEuNDRMNy4zNzYgMTAuMjczYTEuMTcgMS4xNyAwIDAgMS0xLjQ5LS42NyAxLjExNCAxLjExNCAwIDAgMSAuNjg2LTEuNDRMMTYuNjI0IDQuNTdhMS4xNyAxLjE3IDAgMCAxIDEuNDkuNjdtMCA5LjE1N2ExLjExNiAxLjExNiAwIDAgMS0uNjg2IDEuNDRMNy4zNzYgMTkuNDMxYTEuMTcgMS4xNyAwIDAgMS0xLjQ5LS42NyAxLjExNCAxLjExNCAwIDAgMSAuNjg2LTEuNDRsMTAuMDUyLTMuNTk0YTEuMTcgMS4xNyAwIDAgMSAxLjQ5LjY3TTEyIDE5Ljg3NmMwLS42Mi41MTgtMS4xMjYgMS4xNTktMS4xMjZoMy44N2MuNjQxIDAgMS4xNTkuNTA2IDEuMTU5IDEuMTI1UzE3LjY3IDIxIDE3LjAyOCAyMWgtMy44N2MtLjY0IDAtMS4xNTgtLjUwNi0xLjE1OC0xLjEyNW02LjEwOS0xMC4xNTRhMS4xMSAxLjExIDAgMCAxLS42NjQgMS40NTFMNy4zODcgMTQuOTI1YTEuMTcgMS4xNyAwIDAgMS0xLjQ5Ni0uNjQ3IDEuMTE1IDEuMTE1IDAgMCAxIC42NjQtMS40NTFsMTAuMDU4LTMuNzUyYTEuMTcgMS4xNyAwIDAgMSAxLjQ5Ni42NDciLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjgxMyA0LjEyNUM1LjgxMyAzLjUwNiA2LjMzIDMgNi45NyAzaDMuODdjLjY0MiAwIDEuMTYuNTA2IDEuMTYgMS4xMjVzLS41MTggMS4xMjUtMS4xNTkgMS4xMjVoLTMuODdjLS42NDEgMC0xLjE1OC0uNTA2LTEuMTU4LTEuMTI1bTEyLjMwMSAxLjExNGExLjExNCAxLjExNCAwIDAgMS0uNjg2IDEuNDRMNy4zNzYgMTAuMjczYTEuMTcgMS4xNyAwIDAgMS0xLjQ5LS42NyAxLjExNCAxLjExNCAwIDAgMSAuNjg2LTEuNDRMMTYuNjI0IDQuNTdhMS4xNyAxLjE3IDAgMCAxIDEuNDkuNjdtMCA5LjE1N2ExLjExNCAxLjExNCAwIDAgMS0uNjg2IDEuNDRMNy4zNzYgMTkuNDMxYTEuMTcgMS4xNyAwIDAgMS0xLjQ5LS42NyAxLjExNSAxLjExNSAwIDAgMSAuNjg2LTEuNDRsMTAuMDUyLTMuNTk0YTEuMTcgMS4xNyAwIDAgMSAxLjQ5LjY3TTEyIDE5Ljg3NmMwLS42Mi41MTgtMS4xMjYgMS4xNTktMS4xMjZoMy44N2MuNjQxIDAgMS4xNTkuNTA2IDEuMTU5IDEuMTI1UzE3LjY3IDIxIDE3LjAyOCAyMWgtMy44N2MtLjY0IDAtMS4xNTgtLjUwNi0xLjE1OC0xLjEyNW02LjEwOS0xMC4xNTRhMS4xMSAxLjExIDAgMCAxLS42NjQgMS40NTFMNy4zODcgMTQuOTI1YTEuMTcgMS4xNyAwIDAgMS0xLjQ5Ni0uNjQ3IDEuMTE1IDEuMTE1IDAgMCAxIC42NjQtMS40NTFsMTAuMDU4LTMuNzUyYTEuMTcgMS4xNyAwIDAgMSAxLjQ5Ni42NDciLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNBVUNUSU9OX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNi41IDVjMC0uNTUuNDYtMSAxLjAzLTFoMy40NGMuNTcgMCAxLjAzLjQ1IDEuMDMgMXMtLjQ2IDEtMS4wMyAxSDcuNTNDNi45NiA2IDYuNSA1LjU1IDYuNSA1bTEwLjkzNS45OWEuOTkuOTkgMCAwIDEtLjYxIDEuMjhMNy44OSAxMC40NjVhMS4wNCAxLjA0IDAgMCAxLTEuMzI1LS41OTUuOTkuOTkgMCAwIDEgLjYxLTEuMjhsOC45MzUtMy4xOTVhMS4wNCAxLjA0IDAgMCAxIDEuMzI1LjU5NW0wIDguMTRhLjk5Ljk5IDAgMCAxLS42MSAxLjI4TDcuODkgMTguNjA1YTEuMDQgMS4wNCAwIDAgMS0xLjMyNS0uNTk1Ljk5Ljk5IDAgMCAxIC42MS0xLjI4bDguOTM1LTMuMTk1YTEuMDQgMS4wNCAwIDAgMSAxLjMyNS41OTVNMTIgMTljMC0uNTUuNDYtMSAxLjAzLTFoMy40NGMuNTcgMCAxLjAzLjQ1IDEuMDMgMXMtLjQ2IDEtMS4wMyAxaC0zLjQ0Yy0uNTcgMC0xLjAzLS40NS0xLjAzLTFtNS40My05LjAyNWEuOTkuOTkgMCAwIDEtLjU5IDEuMjlMNy45IDE0LjZhMS4wNCAxLjA0IDAgMCAxLTEuMzMtLjU3NS45OS45OSAwIDAgMSAuNTktMS4yOUwxNi4xIDkuNGMuNTMtLjIgMS4xMjUuMDYgMS4zMy41NzUiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQVVDVElPTl9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/AUCTION
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenAUCTION = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenAUCTION', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1cgl_pu._.js.map