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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSTMX.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSTMX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FF2A4D',
                d: 'M7.765 4.059h-4.5s4.235 5.029 5.03 6.088c.805 1.075 1.686 1.663.264 3.441C6.44 16.235 3 19.941 3 19.941h4.765s4.5-5.559 5.03-6.353c.58-.87 1.008-2.444 0-3.706-1.06-1.323-5.03-5.823-5.03-5.823m13.235 0h-5.823L12.53 7.235s1.486.456 1.852.53c1.324.264 1.853.264 2.647-.265C17.054 7.483 21 4.059 21 4.059m0 15.882h-5.823l-2.647-3.176s1.486-.456 1.852-.53c1.324-.265 1.853-.265 2.647.265.025.016 3.971 3.44 3.971 3.44'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M7.765 4.059h-4.5s4.235 5.029 5.03 6.088c.805 1.075 1.686 1.663.264 3.441C6.44 16.235 3 19.941 3 19.941h4.765s4.5-5.559 5.03-6.353c.58-.87 1.008-2.444 0-3.706-1.06-1.323-5.03-5.823-5.03-5.823m13.235 0h-5.823L12.53 7.235s1.486.456 1.852.53c1.324.264 1.853.264 2.647-.265C17.054 7.483 21 4.059 21 4.059m0 15.882h-5.823l-2.647-3.176s1.486-.456 1.852-.53c1.324-.265 1.853-.265 2.647.265.025.016 3.971 3.441 3.971 3.441'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#STMX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FF2A4D',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M8.235 4.941h-4S8 9.412 8.705 10.353c.718.956 1.5 1.478.236 3.059C7.06 15.765 4 19.059 4 19.059h4.235s4-4.941 4.47-5.647c.517-.774.898-2.173 0-3.294-.94-1.177-4.47-5.177-4.47-5.177m11.765 0h-5.177l-2.352 2.824s1.32.405 1.647.47c1.176.236 1.647.236 2.353-.235C16.493 7.986 20 4.941 20 4.941m0 14.118h-5.177l-2.352-2.824s1.32-.405 1.647-.47c1.176-.235 1.647-.235 2.353.235.022.015 3.529 3.059 3.529 3.059'
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
                        id: 'STMX__a'
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
 * @component @name TokenSTMX
 * @description Web3Icon for TokenSTMX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRjJBNEQiIGQ9Ik03Ljc2NSA0LjA1OWgtNC41czQuMjM1IDUuMDI5IDUuMDMgNi4wODhjLjgwNSAxLjA3NSAxLjY4NiAxLjY2My4yNjQgMy40NDFDNi40NCAxNi4yMzUgMyAxOS45NDEgMyAxOS45NDFoNC43NjVzNC41LTUuNTU5IDUuMDMtNi4zNTNjLjU4LS44NyAxLjAwOC0yLjQ0NCAwLTMuNzA2LTEuMDYtMS4zMjMtNS4wMy01LjgyMy01LjAzLTUuODIzbTEzLjIzNSAwaC01LjgyM0wxMi41MyA3LjIzNXMxLjQ4Ni40NTYgMS44NTIuNTNjMS4zMjQuMjY0IDEuODUzLjI2NCAyLjY0Ny0uMjY1QzE3LjA1NCA3LjQ4MyAyMSA0LjA1OSAyMSA0LjA1OW0wIDE1Ljg4MmgtNS44MjNsLTIuNjQ3LTMuMTc2czEuNDg2LS40NTYgMS44NTItLjUzYzEuMzI0LS4yNjUgMS44NTMtLjI2NSAyLjY0Ny4yNjUuMDI1LjAxNiAzLjk3MSAzLjQ0IDMuOTcxIDMuNDQiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03Ljc2NSA0LjA1OWgtNC41czQuMjM1IDUuMDI5IDUuMDMgNi4wODhjLjgwNSAxLjA3NSAxLjY4NiAxLjY2My4yNjQgMy40NDFDNi40NCAxNi4yMzUgMyAxOS45NDEgMyAxOS45NDFoNC43NjVzNC41LTUuNTU5IDUuMDMtNi4zNTNjLjU4LS44NyAxLjAwOC0yLjQ0NCAwLTMuNzA2LTEuMDYtMS4zMjMtNS4wMy01LjgyMy01LjAzLTUuODIzbTEzLjIzNSAwaC01LjgyM0wxMi41MyA3LjIzNXMxLjQ4Ni40NTYgMS44NTIuNTNjMS4zMjQuMjY0IDEuODUzLjI2NCAyLjY0Ny0uMjY1QzE3LjA1NCA3LjQ4MyAyMSA0LjA1OSAyMSA0LjA1OW0wIDE1Ljg4MmgtNS44MjNsLTIuNjQ3LTMuMTc2czEuNDg2LS40NTYgMS44NTItLjUzYzEuMzI0LS4yNjUgMS44NTMtLjI2NSAyLjY0Ny4yNjUuMDI1LjAxNiAzLjk3MSAzLjQ0MSAzLjk3MSAzLjQ0MSIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTVE1YX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGMkE0RCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNOC4yMzUgNC45NDFoLTRTOCA5LjQxMiA4LjcwNSAxMC4zNTNjLjcxOC45NTYgMS41IDEuNDc4LjIzNiAzLjA1OUM3LjA2IDE1Ljc2NSA0IDE5LjA1OSA0IDE5LjA1OWg0LjIzNXM0LTQuOTQxIDQuNDctNS42NDdjLjUxNy0uNzc0Ljg5OC0yLjE3MyAwLTMuMjk0LS45NC0xLjE3Ny00LjQ3LTUuMTc3LTQuNDctNS4xNzdtMTEuNzY1IDBoLTUuMTc3bC0yLjM1MiAyLjgyNHMxLjMyLjQwNSAxLjY0Ny40N2MxLjE3Ni4yMzYgMS42NDcuMjM2IDIuMzUzLS4yMzVDMTYuNDkzIDcuOTg2IDIwIDQuOTQxIDIwIDQuOTQxbTAgMTQuMTE4aC01LjE3N2wtMi4zNTItMi44MjRzMS4zMi0uNDA1IDEuNjQ3LS40N2MxLjE3Ni0uMjM1IDEuNjQ3LS4yMzUgMi4zNTMuMjM1LjAyMi4wMTUgMy41MjkgMy4wNTkgMy41MjkgMy4wNTkiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iU1RNWF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/STMX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSTMX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSTMX', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0p5l0vg._.js.map