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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenXDATA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenXDATA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#F0C419',
                d: 'M12 9.828c4.17 0 7.549-1.528 7.549-3.414C19.549 4.53 16.169 3 12 3S4.452 4.529 4.452 6.414 7.832 9.828 12 9.828'
            }
        ],
        [
            'path',
            {
                fill: '#25AE5F',
                d: 'M4.452 7.964v2.172c0 1.887 3.38 3.414 7.548 3.414 4.17 0 7.549-1.527 7.549-3.414V7.97h-.03c-.348 1.736-3.582 3.1-7.519 3.1S4.83 9.707 4.48 7.965z'
            }
        ],
        [
            'path',
            {
                fill: '#E64C3C',
                d: 'M4.452 11.692v2.172c0 1.881 3.38 3.414 7.548 3.414 4.17 0 7.549-1.533 7.549-3.414v-2.172h-.03c-.348 1.742-3.582 3.101-7.519 3.101s-7.17-1.364-7.52-3.1z'
            }
        ],
        [
            'path',
            {
                fill: '#7A69A7',
                d: 'M4.452 15.414v2.172C4.452 19.473 7.832 21 12 21c4.17 0 7.549-1.527 7.549-3.414v-2.172h-.03c-.348 1.742-3.582 3.1-7.519 3.1s-7.17-1.358-7.52-3.1z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 9.828c4.17 0 7.549-1.528 7.549-3.414C19.549 4.53 16.169 3 12 3S4.452 4.529 4.452 6.414 7.832 9.828 12 9.828'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.452 7.964v2.172c0 1.887 3.379 3.414 7.548 3.414s7.549-1.527 7.549-3.414V7.97h-.03c-.348 1.736-3.582 3.1-7.519 3.1S4.83 9.707 4.48 7.965z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.452 11.692v2.172c0 1.881 3.379 3.414 7.548 3.414s7.549-1.533 7.549-3.414v-2.172h-.03c-.348 1.742-3.582 3.101-7.519 3.101s-7.17-1.364-7.52-3.1z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.452 15.414v2.172C4.452 19.473 7.83 21 12 21s7.549-1.527 7.549-3.414v-2.172h-.03c-.348 1.742-3.582 3.1-7.519 3.1s-7.17-1.358-7.52-3.1z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#XDATA__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#25AE5F',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 10.07c3.706 0 6.71-1.359 6.71-3.035S15.706 4 12 4 5.29 5.359 5.29 7.035 8.294 10.07 12 10.07'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M5.29 8.413v1.93c0 1.677 3.004 3.035 6.71 3.035s6.71-1.358 6.71-3.035V8.418h-.026c-.31 1.543-3.185 2.756-6.684 2.756S5.626 9.96 5.316 8.413z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M5.29 11.727v1.93c0 1.672 3.004 3.035 6.71 3.035s6.71-1.363 6.71-3.035v-1.93h-.026c-.31 1.548-3.185 2.756-6.684 2.756s-6.374-1.213-6.684-2.756z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M5.29 15.035v1.93C5.29 18.642 8.294 20 12 20s6.71-1.358 6.71-3.035v-1.93h-.026c-.31 1.548-3.185 2.756-6.684 2.756s-6.374-1.208-6.684-2.756z'
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
                        id: 'XDATA__a'
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
 * @component @name TokenXDATA
 * @description Web3Icon for TokenXDATA
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGMEM0MTkiIGQ9Ik0xMiA5LjgyOGM0LjE3IDAgNy41NDktMS41MjggNy41NDktMy40MTRDMTkuNTQ5IDQuNTMgMTYuMTY5IDMgMTIgM1M0LjQ1MiA0LjUyOSA0LjQ1MiA2LjQxNCA3LjgzMiA5LjgyOCAxMiA5LjgyOCIvPgogICAgPHBhdGggZmlsbD0iIzI1QUU1RiIgZD0iTTQuNDUyIDcuOTY0djIuMTcyYzAgMS44ODcgMy4zOCAzLjQxNCA3LjU0OCAzLjQxNCA0LjE3IDAgNy41NDktMS41MjcgNy41NDktMy40MTRWNy45N2gtLjAzYy0uMzQ4IDEuNzM2LTMuNTgyIDMuMS03LjUxOSAzLjFTNC44MyA5LjcwNyA0LjQ4IDcuOTY1eiIvPgogICAgPHBhdGggZmlsbD0iI0U2NEMzQyIgZD0iTTQuNDUyIDExLjY5MnYyLjE3MmMwIDEuODgxIDMuMzggMy40MTQgNy41NDggMy40MTQgNC4xNyAwIDcuNTQ5LTEuNTMzIDcuNTQ5LTMuNDE0di0yLjE3MmgtLjAzYy0uMzQ4IDEuNzQyLTMuNTgyIDMuMTAxLTcuNTE5IDMuMTAxcy03LjE3LTEuMzY0LTcuNTItMy4xeiIvPgogICAgPHBhdGggZmlsbD0iIzdBNjlBNyIgZD0iTTQuNDUyIDE1LjQxNHYyLjE3MkM0LjQ1MiAxOS40NzMgNy44MzIgMjEgMTIgMjFjNC4xNyAwIDcuNTQ5LTEuNTI3IDcuNTQ5LTMuNDE0di0yLjE3MmgtLjAzYy0uMzQ4IDEuNzQyLTMuNTgyIDMuMS03LjUxOSAzLjFzLTcuMTctMS4zNTgtNy41Mi0zLjF6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiA5LjgyOGM0LjE3IDAgNy41NDktMS41MjggNy41NDktMy40MTRDMTkuNTQ5IDQuNTMgMTYuMTY5IDMgMTIgM1M0LjQ1MiA0LjUyOSA0LjQ1MiA2LjQxNCA3LjgzMiA5LjgyOCAxMiA5LjgyOCIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQuNDUyIDcuOTY0djIuMTcyYzAgMS44ODcgMy4zNzkgMy40MTQgNy41NDggMy40MTRzNy41NDktMS41MjcgNy41NDktMy40MTRWNy45N2gtLjAzYy0uMzQ4IDEuNzM2LTMuNTgyIDMuMS03LjUxOSAzLjFTNC44MyA5LjcwNyA0LjQ4IDcuOTY1eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQuNDUyIDExLjY5MnYyLjE3MmMwIDEuODgxIDMuMzc5IDMuNDE0IDcuNTQ4IDMuNDE0czcuNTQ5LTEuNTMzIDcuNTQ5LTMuNDE0di0yLjE3MmgtLjAzYy0uMzQ4IDEuNzQyLTMuNTgyIDMuMTAxLTcuNTE5IDMuMTAxcy03LjE3LTEuMzY0LTcuNTItMy4xeiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQuNDUyIDE1LjQxNHYyLjE3MkM0LjQ1MiAxOS40NzMgNy44MyAyMSAxMiAyMXM3LjU0OS0xLjUyNyA3LjU0OS0zLjQxNHYtMi4xNzJoLS4wM2MtLjM0OCAxLjc0Mi0zLjU4MiAzLjEtNy41MTkgMy4xcy03LjE3LTEuMzU4LTcuNTItMy4xeiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNYREFUQV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMyNUFFNUYiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDEwLjA3YzMuNzA2IDAgNi43MS0xLjM1OSA2LjcxLTMuMDM1UzE1LjcwNiA0IDEyIDQgNS4yOSA1LjM1OSA1LjI5IDcuMDM1IDguMjk0IDEwLjA3IDEyIDEwLjA3Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTUuMjkgOC40MTN2MS45M2MwIDEuNjc3IDMuMDA0IDMuMDM1IDYuNzEgMy4wMzVzNi43MS0xLjM1OCA2LjcxLTMuMDM1VjguNDE4aC0uMDI2Yy0uMzEgMS41NDMtMy4xODUgMi43NTYtNi42ODQgMi43NTZTNS42MjYgOS45NiA1LjMxNiA4LjQxM3oiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNS4yOSAxMS43Mjd2MS45M2MwIDEuNjcyIDMuMDA0IDMuMDM1IDYuNzEgMy4wMzVzNi43MS0xLjM2MyA2LjcxLTMuMDM1di0xLjkzaC0uMDI2Yy0uMzEgMS41NDgtMy4xODUgMi43NTYtNi42ODQgMi43NTZzLTYuMzc0LTEuMjEzLTYuNjg0LTIuNzU2eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjI5IDE1LjAzNXYxLjkzQzUuMjkgMTguNjQyIDguMjk0IDIwIDEyIDIwczYuNzEtMS4zNTggNi43MS0zLjAzNXYtMS45M2gtLjAyNmMtLjMxIDEuNTQ4LTMuMTg1IDIuNzU2LTYuNjg0IDIuNzU2cy02LjM3NC0xLjIwOC02LjY4NC0yLjc1NnoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iWERBVEFfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/XDATA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenXDATA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenXDATA', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1-z9la_._.js.map