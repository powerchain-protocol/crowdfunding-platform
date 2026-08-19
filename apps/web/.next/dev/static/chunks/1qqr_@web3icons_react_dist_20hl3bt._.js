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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenKUNCI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenKUNCI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#703893',
                d: 'M16.656 7.736a4.37 4.37 0 0 0-4.215 3.316H3v1.895h9.436c.46 1.866 2.179 3.316 4.216 3.316A4.31 4.31 0 0 0 21 11.999c0-2.349-1.952-4.263-4.344-4.263m.08 6.632a2.369 2.369 0 1 1 0-4.737 2.369 2.369 0 0 1 0 4.737M9.983 7.803c0 .7-.526 1.27-1.189 1.255-.649 0-1.18-.569-1.165-1.279v-.043H6.496v.024c0 .701-.526 1.274-1.184 1.26-.654 0-1.185-.568-1.17-1.284H3v2.842h8.038l.015-2.842h-1.07zm7.702 4.196c0 .526-.63.948-1.42.948v-1.895c.776 0 1.42.422 1.42.947'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M16.656 7.736a4.37 4.37 0 0 0-4.215 3.316H3v1.895h9.436c.46 1.866 2.179 3.316 4.216 3.316A4.31 4.31 0 0 0 21 11.999c0-2.349-1.952-4.263-4.344-4.263m.08 6.632a2.369 2.369 0 1 1 0-4.737 2.369 2.369 0 0 1 0 4.737M9.983 7.803c0 .7-.526 1.27-1.189 1.255-.649 0-1.18-.569-1.165-1.279v-.043H6.496v.024c0 .701-.526 1.274-1.184 1.26-.654 0-1.185-.568-1.17-1.284H3v2.842h8.038l.015-2.842h-1.07zm7.702 4.196c0 .526-.63.948-1.42.948v-1.895c.776 0 1.42.422 1.42.947'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#KUNCI__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#703893',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M16.139 8.21a3.89 3.89 0 0 0-3.747 2.947H4v1.685h8.387c.409 1.659 1.937 2.947 3.748 2.947A3.83 3.83 0 0 0 20 11.999c0-2.088-1.735-3.789-3.861-3.789m.072 5.895a2.106 2.106 0 1 1 0-4.212 2.106 2.106 0 0 1 0 4.212m-6.005-5.836c0 .623-.467 1.128-1.057 1.116-.576 0-1.048-.506-1.035-1.137V8.21H7.107v.021c0 .623-.467 1.133-1.052 1.12-.581 0-1.053-.505-1.04-1.141H4v2.526h7.145l.013-2.526h-.952zm6.847 3.73c0 .468-.56.843-1.264.843v-1.685c.691 0 1.264.375 1.264.842'
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
                        id: 'KUNCI__a'
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
 * @component @name TokenKUNCI
 * @description Web3Icon for TokenKUNCI
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM3MDM4OTMiIGQ9Ik0xNi42NTYgNy43MzZhNC4zNyA0LjM3IDAgMCAwLTQuMjE1IDMuMzE2SDN2MS44OTVoOS40MzZjLjQ2IDEuODY2IDIuMTc5IDMuMzE2IDQuMjE2IDMuMzE2QTQuMzEgNC4zMSAwIDAgMCAyMSAxMS45OTljMC0yLjM0OS0xLjk1Mi00LjI2My00LjM0NC00LjI2M20uMDggNi42MzJhMi4zNjkgMi4zNjkgMCAxIDEgMC00LjczNyAyLjM2OSAyLjM2OSAwIDAgMSAwIDQuNzM3TTkuOTgzIDcuODAzYzAgLjctLjUyNiAxLjI3LTEuMTg5IDEuMjU1LS42NDkgMC0xLjE4LS41NjktMS4xNjUtMS4yNzl2LS4wNDNINi40OTZ2LjAyNGMwIC43MDEtLjUyNiAxLjI3NC0xLjE4NCAxLjI2LS42NTQgMC0xLjE4NS0uNTY4LTEuMTctMS4yODRIM3YyLjg0Mmg4LjAzOGwuMDE1LTIuODQyaC0xLjA3em03LjcwMiA0LjE5NmMwIC41MjYtLjYzLjk0OC0xLjQyLjk0OHYtMS44OTVjLjc3NiAwIDEuNDIuNDIyIDEuNDIuOTQ3Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi42NTYgNy43MzZhNC4zNyA0LjM3IDAgMCAwLTQuMjE1IDMuMzE2SDN2MS44OTVoOS40MzZjLjQ2IDEuODY2IDIuMTc5IDMuMzE2IDQuMjE2IDMuMzE2QTQuMzEgNC4zMSAwIDAgMCAyMSAxMS45OTljMC0yLjM0OS0xLjk1Mi00LjI2My00LjM0NC00LjI2M20uMDggNi42MzJhMi4zNjkgMi4zNjkgMCAxIDEgMC00LjczNyAyLjM2OSAyLjM2OSAwIDAgMSAwIDQuNzM3TTkuOTgzIDcuODAzYzAgLjctLjUyNiAxLjI3LTEuMTg5IDEuMjU1LS42NDkgMC0xLjE4LS41NjktMS4xNjUtMS4yNzl2LS4wNDNINi40OTZ2LjAyNGMwIC43MDEtLjUyNiAxLjI3NC0xLjE4NCAxLjI2LS42NTQgMC0xLjE4NS0uNTY4LTEuMTctMS4yODRIM3YyLjg0Mmg4LjAzOGwuMDE1LTIuODQyaC0xLjA3em03LjcwMiA0LjE5NmMwIC41MjYtLjYzLjk0OC0xLjQyLjk0OHYtMS44OTVjLjc3NiAwIDEuNDIuNDIyIDEuNDIuOTQ3Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNLVU5DSV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiM3MDM4OTMiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjEzOSA4LjIxYTMuODkgMy44OSAwIDAgMC0zLjc0NyAyLjk0N0g0djEuNjg1aDguMzg3Yy40MDkgMS42NTkgMS45MzcgMi45NDcgMy43NDggMi45NDdBMy44MyAzLjgzIDAgMCAwIDIwIDExLjk5OWMwLTIuMDg4LTEuNzM1LTMuNzg5LTMuODYxLTMuNzg5bS4wNzIgNS44OTVhMi4xMDYgMi4xMDYgMCAxIDEgMC00LjIxMiAyLjEwNiAyLjEwNiAwIDAgMSAwIDQuMjEybS02LjAwNS01LjgzNmMwIC42MjMtLjQ2NyAxLjEyOC0xLjA1NyAxLjExNi0uNTc2IDAtMS4wNDgtLjUwNi0xLjAzNS0xLjEzN1Y4LjIxSDcuMTA3di4wMjFjMCAuNjIzLS40NjcgMS4xMzMtMS4wNTIgMS4xMi0uNTgxIDAtMS4wNTMtLjUwNS0xLjA0LTEuMTQxSDR2Mi41MjZoNy4xNDVsLjAxMy0yLjUyNmgtLjk1MnptNi44NDcgMy43M2MwIC40NjgtLjU2Ljg0My0xLjI2NC44NDN2LTEuNjg1Yy42OTEgMCAxLjI2NC4zNzUgMS4yNjQuODQyIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IktVTkNJX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/KUNCI
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenKUNCI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenKUNCI', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_20hl3bt._.js.map