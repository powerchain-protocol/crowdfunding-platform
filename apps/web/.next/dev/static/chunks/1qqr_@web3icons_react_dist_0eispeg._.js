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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenWAGMIGAMES.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenWAGMIGAMES
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#00D8FF',
                d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m0-1.059a7.942 7.942 0 1 0 0-15.883 7.942 7.942 0 0 0 0 15.883',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M7.379 9.882H6.177l2.838 6.353h.868l2.134-4.844 2.085 4.844h.948l2.774-6.353h-1.133L14.574 14.7l-2.097-4.818h-.9L9.423 14.7l-2.05-4.818z'
            }
        ],
        [
            'path',
            {
                fill: '#FD124D',
                d: 'M6.177 8.293v.53h4.114l.339-.287h7.194v-.243z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 21a9 9 0 1 0 0-17.999A9 9 0 0 0 12 21m0-1.059a7.942 7.942 0 1 0 0-15.883 7.942 7.942 0 0 0 0 15.883',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M7.378 9.882H6.176l2.838 6.353h.868l2.134-4.844 2.085 4.844h.948l2.774-6.353H16.69L14.573 14.7l-2.097-4.818h-.9L9.422 14.7l-2.05-4.818zM6.176 8.294v.53h4.114l.339-.287h7.194v-.243z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#WAGMIGAMES__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#00D8FF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0-.941a7.06 7.06 0 1 0 0-14.12 7.06 7.06 0 0 0 0 14.12',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M7.891 10.117H6.823l2.523 5.647h.771l1.897-4.306 1.854 4.306h.842l2.466-5.647H16.17L14.287 14.4l-1.864-4.282h-.8L9.708 14.4l-1.821-4.282zM6.823 8.706v.47h3.657l.3-.253h6.396v-.217z'
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
                        id: 'WAGMIGAMES__a'
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
 * @component @name TokenWAGMIGAMES
 * @description Web3Icon for TokenWAGMIGAMES
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMEQ4RkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDIxYTkgOSAwIDEgMCAwLTE4IDkgOSAwIDAgMCAwIDE4bTAtMS4wNTlhNy45NDIgNy45NDIgMCAxIDAgMC0xNS44ODMgNy45NDIgNy45NDIgMCAwIDAgMCAxNS44ODMiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTcuMzc5IDkuODgySDYuMTc3bDIuODM4IDYuMzUzaC44NjhsMi4xMzQtNC44NDQgMi4wODUgNC44NDRoLjk0OGwyLjc3NC02LjM1M2gtMS4xMzNMMTQuNTc0IDE0LjdsLTIuMDk3LTQuODE4aC0uOUw5LjQyMyAxNC43bC0yLjA1LTQuODE4eiIvPgogICAgPHBhdGggZmlsbD0iI0ZEMTI0RCIgZD0iTTYuMTc3IDguMjkzdi41M2g0LjExNGwuMzM5LS4yODdoNy4xOTR2LS4yNDN6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDIxYTkgOSAwIDEgMCAwLTE3Ljk5OUE5IDkgMCAwIDAgMTIgMjFtMC0xLjA1OWE3Ljk0MiA3Ljk0MiAwIDEgMCAwLTE1Ljg4MyA3Ljk0MiA3Ljk0MiAwIDAgMCAwIDE1Ljg4MyIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNy4zNzggOS44ODJINi4xNzZsMi44MzggNi4zNTNoLjg2OGwyLjEzNC00Ljg0NCAyLjA4NSA0Ljg0NGguOTQ4bDIuNzc0LTYuMzUzSDE2LjY5TDE0LjU3MyAxNC43bC0yLjA5Ny00LjgxOGgtLjlMOS40MjIgMTQuN2wtMi4wNS00LjgxOHpNNi4xNzYgOC4yOTR2LjUzaDQuMTE0bC4zMzktLjI4N2g3LjE5NHYtLjI0M3oiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNXQUdNSUdBTUVTX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwRDhGRiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAyMGE4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNm0wLS45NDFhNy4wNiA3LjA2IDAgMSAwIDAtMTQuMTIgNy4wNiA3LjA2IDAgMCAwIDAgMTQuMTIiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03Ljg5MSAxMC4xMTdINi44MjNsMi41MjMgNS42NDdoLjc3MWwxLjg5Ny00LjMwNiAxLjg1NCA0LjMwNmguODQybDIuNDY2LTUuNjQ3SDE2LjE3TDE0LjI4NyAxNC40bC0xLjg2NC00LjI4MmgtLjhMOS43MDggMTQuNGwtMS44MjEtNC4yODJ6TTYuODIzIDguNzA2di40N2gzLjY1N2wuMy0uMjUzaDYuMzk2di0uMjE3eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJXQUdNSUdBTUVTX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/WAGMIGAMES
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenWAGMIGAMES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenWAGMIGAMES', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0eispeg._.js.map