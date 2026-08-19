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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenGAFI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenGAFI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#72F34B',
                d: 'M4.421 8.21A1.42 1.42 0 0 0 3 9.633v4.736a1.42 1.42 0 0 0 1.421 1.422h6.158A1.42 1.42 0 0 0 12 14.369v-1.895a1.42 1.42 0 0 0-1.421-1.421H6.316v1.894h3.316v.474H5.368V10.58H12V8.21zm10.421 1.895h5.684v-1.42h-6.158a.95.95 0 0 0-.947.947v5.684h1.421v-2.369h5.684v-1.42h-5.684zm.474 5.495a.19.19 0 0 1-.19.19h-1.99a.19.19 0 0 1-.189-.19V9.632a1.42 1.42 0 0 1 1.421-1.421h6.443A.19.19 0 0 1 21 8.4v1.99a.19.19 0 0 1-.19.189h-5.494v.474h5.495a.19.19 0 0 1 .189.19v1.989a.19.19 0 0 1-.19.19h-5.494z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.421 8.21A1.42 1.42 0 0 0 3 9.633v4.736a1.42 1.42 0 0 0 1.421 1.422h6.158A1.42 1.42 0 0 0 12 14.369v-1.895a1.42 1.42 0 0 0-1.421-1.421H6.316v1.894h3.316v.474H5.368V10.58H12V8.211zm10.421 1.895h5.684v-1.42h-6.158a.947.947 0 0 0-.947.947v5.684h1.421v-2.369h5.684v-1.42h-5.684zm.474 5.495a.19.19 0 0 1-.19.19h-1.99a.19.19 0 0 1-.189-.19V9.632a1.42 1.42 0 0 1 1.421-1.421h6.443A.19.19 0 0 1 21 8.4v1.99a.19.19 0 0 1-.19.189h-5.494v.474h5.495a.19.19 0 0 1 .189.19v1.989a.19.19 0 0 1-.19.19h-5.494z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#GAFI__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#72F34B',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M5.263 8.632A1.263 1.263 0 0 0 4 9.895v4.21a1.263 1.263 0 0 0 1.263 1.263h5.474A1.263 1.263 0 0 0 12 14.105v-1.684a1.263 1.263 0 0 0-1.263-1.263h-3.79v1.684h2.948v.421h-3.79v-2.526H12V8.632zm9.263 1.684h5.053V9.053h-5.474a.84.84 0 0 0-.842.842v5.053h1.263v-2.106h5.053V11.58h-5.053zm.421 4.884a.17.17 0 0 1-.168.168h-1.768a.17.17 0 0 1-.169-.168V9.895a1.263 1.263 0 0 1 1.263-1.263h5.727c.092 0 .168.075.168.168v1.768a.17.17 0 0 1-.168.169h-4.885v.42h4.885a.17.17 0 0 1 .168.17v1.768a.17.17 0 0 1-.168.168h-4.885z'
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
                        id: 'GAFI__a'
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
 * @component @name TokenGAFI
 * @description Web3Icon for TokenGAFI
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM3MkYzNEIiIGQ9Ik00LjQyMSA4LjIxQTEuNDIgMS40MiAwIDAgMCAzIDkuNjMzdjQuNzM2YTEuNDIgMS40MiAwIDAgMCAxLjQyMSAxLjQyMmg2LjE1OEExLjQyIDEuNDIgMCAwIDAgMTIgMTQuMzY5di0xLjg5NWExLjQyIDEuNDIgMCAwIDAtMS40MjEtMS40MjFINi4zMTZ2MS44OTRoMy4zMTZ2LjQ3NEg1LjM2OFYxMC41OEgxMlY4LjIxem0xMC40MjEgMS44OTVoNS42ODR2LTEuNDJoLTYuMTU4YS45NS45NSAwIDAgMC0uOTQ3Ljk0N3Y1LjY4NGgxLjQyMXYtMi4zNjloNS42ODR2LTEuNDJoLTUuNjg0em0uNDc0IDUuNDk1YS4xOS4xOSAwIDAgMS0uMTkuMTloLTEuOTlhLjE5LjE5IDAgMCAxLS4xODktLjE5VjkuNjMyYTEuNDIgMS40MiAwIDAgMSAxLjQyMS0xLjQyMWg2LjQ0M0EuMTkuMTkgMCAwIDEgMjEgOC40djEuOTlhLjE5LjE5IDAgMCAxLS4xOS4xODloLTUuNDk0di40NzRoNS40OTVhLjE5LjE5IDAgMCAxIC4xODkuMTl2MS45ODlhLjE5LjE5IDAgMCAxLS4xOS4xOWgtNS40OTR6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjQyMSA4LjIxQTEuNDIgMS40MiAwIDAgMCAzIDkuNjMzdjQuNzM2YTEuNDIgMS40MiAwIDAgMCAxLjQyMSAxLjQyMmg2LjE1OEExLjQyIDEuNDIgMCAwIDAgMTIgMTQuMzY5di0xLjg5NWExLjQyIDEuNDIgMCAwIDAtMS40MjEtMS40MjFINi4zMTZ2MS44OTRoMy4zMTZ2LjQ3NEg1LjM2OFYxMC41OEgxMlY4LjIxMXptMTAuNDIxIDEuODk1aDUuNjg0di0xLjQyaC02LjE1OGEuOTQ3Ljk0NyAwIDAgMC0uOTQ3Ljk0N3Y1LjY4NGgxLjQyMXYtMi4zNjloNS42ODR2LTEuNDJoLTUuNjg0em0uNDc0IDUuNDk1YS4xOS4xOSAwIDAgMS0uMTkuMTloLTEuOTlhLjE5LjE5IDAgMCAxLS4xODktLjE5VjkuNjMyYTEuNDIgMS40MiAwIDAgMSAxLjQyMS0xLjQyMWg2LjQ0M0EuMTkuMTkgMCAwIDEgMjEgOC40djEuOTlhLjE5LjE5IDAgMCAxLS4xOS4xODloLTUuNDk0di40NzRoNS40OTVhLjE5LjE5IDAgMCAxIC4xODkuMTl2MS45ODlhLjE5LjE5IDAgMCAxLS4xOS4xOWgtNS40OTR6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNHQUZJX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzcyRjM0QiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNS4yNjMgOC42MzJBMS4yNjMgMS4yNjMgMCAwIDAgNCA5Ljg5NXY0LjIxYTEuMjYzIDEuMjYzIDAgMCAwIDEuMjYzIDEuMjYzaDUuNDc0QTEuMjYzIDEuMjYzIDAgMCAwIDEyIDE0LjEwNXYtMS42ODRhMS4yNjMgMS4yNjMgMCAwIDAtMS4yNjMtMS4yNjNoLTMuNzl2MS42ODRoMi45NDh2LjQyMWgtMy43OXYtMi41MjZIMTJWOC42MzJ6bTkuMjYzIDEuNjg0aDUuMDUzVjkuMDUzaC01LjQ3NGEuODQuODQgMCAwIDAtLjg0Mi44NDJ2NS4wNTNoMS4yNjN2LTIuMTA2aDUuMDUzVjExLjU4aC01LjA1M3ptLjQyMSA0Ljg4NGEuMTcuMTcgMCAwIDEtLjE2OC4xNjhoLTEuNzY4YS4xNy4xNyAwIDAgMS0uMTY5LS4xNjhWOS44OTVhMS4yNjMgMS4yNjMgMCAwIDEgMS4yNjMtMS4yNjNoNS43MjdjLjA5MiAwIC4xNjguMDc1LjE2OC4xNjh2MS43NjhhLjE3LjE3IDAgMCAxLS4xNjguMTY5aC00Ljg4NXYuNDJoNC44ODVhLjE3LjE3IDAgMCAxIC4xNjguMTd2MS43NjhhLjE3LjE3IDAgMCAxLS4xNjguMTY4aC00Ljg4NXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iR0FGSV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/GAFI
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenGAFI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenGAFI', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_10f--7l._.js.map