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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenLIBRE.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenLIBRE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#00B7FF',
                d: 'm17.69 6.668-1.471-3.21c-.15-.35-.33-.453-.494-.458-.216-.005-.391.16-.391.16s-8.606 7.732-9.671 8.838c-.463.478-.618.992-.607 1.42.01.55.216.894.216.894.926 1.863 1.723 3.833 2.628 5.72.515.989 1.755.968 1.755.968h8.776c.257 0 .514-.298.514-.478 0-.206-.108-.396-.108-.396s-1.41-3.344-1.852-4.106c-.324-.679-1.075-.679-1.075-.679H10.2c2.34-2.402 6.724-5.833 7.305-6.446.864-.89.185-2.227.185-2.227'
            }
        ],
        [
            'path',
            {
                fill: '#0061E7',
                d: 'M5.273 14.313s.751 1.029 1.595 1.029h3.848c-.993 1.029-2.387 1.78-2.387 1.78s-.916.813-.7 2.335z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm17.69 6.668-1.471-3.21c-.15-.35-.33-.453-.494-.458-.216-.005-.391.16-.391.16s-8.606 7.732-9.671 8.838c-.463.478-.618.992-.607 1.42.01.55.216.894.216.894.926 1.863 1.723 3.833 2.628 5.72.515.989 1.755.968 1.755.968h8.776c.257 0 .514-.298.514-.478 0-.206-.108-.396-.108-.396s-1.41-3.344-1.852-4.106c-.324-.679-1.075-.679-1.075-.679H10.2c2.34-2.402 6.724-5.833 7.305-6.446.864-.89.185-2.227.185-2.227'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M5.273 14.313s.751 1.029 1.595 1.029h3.848c-.993 1.029-2.387 1.78-2.387 1.78s-.916.813-.7 2.335z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#LIBRE__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#00B7FF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M17.058 7.26 15.75 4.407c-.133-.31-.293-.402-.44-.407a.56.56 0 0 0-.347.142s-7.65 6.873-8.596 7.856c-.412.425-.55.882-.54 1.262.01.49.192.795.192.795.823 1.656 1.532 3.407 2.337 5.085.457.878 1.56.86 1.56.86h7.8c.229 0 .457-.265.457-.425 0-.183-.096-.352-.096-.352s-1.253-2.972-1.646-3.65c-.288-.603-.956-.603-.956-.603H10.4c2.08-2.136 5.976-5.185 6.493-5.73.768-.79.165-1.98.165-1.98'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M6.02 14.056s.668.915 1.418.915h3.42c-.883.914-2.122 1.582-2.122 1.582s-.814.722-.622 2.076z'
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
                        id: 'LIBRE__a'
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
 * @component @name TokenLIBRE
 * @description Web3Icon for TokenLIBRE
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMEI3RkYiIGQ9Im0xNy42OSA2LjY2OC0xLjQ3MS0zLjIxYy0uMTUtLjM1LS4zMy0uNDUzLS40OTQtLjQ1OC0uMjE2LS4wMDUtLjM5MS4xNi0uMzkxLjE2cy04LjYwNiA3LjczMi05LjY3MSA4LjgzOGMtLjQ2My40NzgtLjYxOC45OTItLjYwNyAxLjQyLjAxLjU1LjIxNi44OTQuMjE2Ljg5NC45MjYgMS44NjMgMS43MjMgMy44MzMgMi42MjggNS43Mi41MTUuOTg5IDEuNzU1Ljk2OCAxLjc1NS45NjhoOC43NzZjLjI1NyAwIC41MTQtLjI5OC41MTQtLjQ3OCAwLS4yMDYtLjEwOC0uMzk2LS4xMDgtLjM5NnMtMS40MS0zLjM0NC0xLjg1Mi00LjEwNmMtLjMyNC0uNjc5LTEuMDc1LS42NzktMS4wNzUtLjY3OUgxMC4yYzIuMzQtMi40MDIgNi43MjQtNS44MzMgNy4zMDUtNi40NDYuODY0LS44OS4xODUtMi4yMjcuMTg1LTIuMjI3Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDA2MUU3IiBkPSJNNS4yNzMgMTQuMzEzcy43NTEgMS4wMjkgMS41OTUgMS4wMjloMy44NDhjLS45OTMgMS4wMjktMi4zODcgMS43OC0yLjM4NyAxLjc4cy0uOTE2LjgxMy0uNyAyLjMzNXoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNy42OSA2LjY2OC0xLjQ3MS0zLjIxYy0uMTUtLjM1LS4zMy0uNDUzLS40OTQtLjQ1OC0uMjE2LS4wMDUtLjM5MS4xNi0uMzkxLjE2cy04LjYwNiA3LjczMi05LjY3MSA4LjgzOGMtLjQ2My40NzgtLjYxOC45OTItLjYwNyAxLjQyLjAxLjU1LjIxNi44OTQuMjE2Ljg5NC45MjYgMS44NjMgMS43MjMgMy44MzMgMi42MjggNS43Mi41MTUuOTg5IDEuNzU1Ljk2OCAxLjc1NS45NjhoOC43NzZjLjI1NyAwIC41MTQtLjI5OC41MTQtLjQ3OCAwLS4yMDYtLjEwOC0uMzk2LS4xMDgtLjM5NnMtMS40MS0zLjM0NC0xLjg1Mi00LjEwNmMtLjMyNC0uNjc5LTEuMDc1LS42NzktMS4wNzUtLjY3OUgxMC4yYzIuMzQtMi40MDIgNi43MjQtNS44MzMgNy4zMDUtNi40NDYuODY0LS44OS4xODUtMi4yMjcuMTg1LTIuMjI3Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNS4yNzMgMTQuMzEzcy43NTEgMS4wMjkgMS41OTUgMS4wMjloMy44NDhjLS45OTMgMS4wMjktMi4zODcgMS43OC0yLjM4NyAxLjc4cy0uOTE2LjgxMy0uNyAyLjMzNXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNMSUJSRV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMEI3RkYiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE3LjA1OCA3LjI2IDE1Ljc1IDQuNDA3Yy0uMTMzLS4zMS0uMjkzLS40MDItLjQ0LS40MDdhLjU2LjU2IDAgMCAwLS4zNDcuMTQycy03LjY1IDYuODczLTguNTk2IDcuODU2Yy0uNDEyLjQyNS0uNTUuODgyLS41NCAxLjI2Mi4wMS40OS4xOTIuNzk1LjE5Mi43OTUuODIzIDEuNjU2IDEuNTMyIDMuNDA3IDIuMzM3IDUuMDg1LjQ1Ny44NzggMS41Ni44NiAxLjU2Ljg2aDcuOGMuMjI5IDAgLjQ1Ny0uMjY1LjQ1Ny0uNDI1IDAtLjE4My0uMDk2LS4zNTItLjA5Ni0uMzUycy0xLjI1My0yLjk3Mi0xLjY0Ni0zLjY1Yy0uMjg4LS42MDMtLjk1Ni0uNjAzLS45NTYtLjYwM0gxMC40YzIuMDgtMi4xMzYgNS45NzYtNS4xODUgNi40OTMtNS43My43NjgtLjc5LjE2NS0xLjk4LjE2NS0xLjk4Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTYuMDIgMTQuMDU2cy42NjguOTE1IDEuNDE4LjkxNWgzLjQyYy0uODgzLjkxNC0yLjEyMiAxLjU4Mi0yLjEyMiAxLjU4MnMtLjgxNC43MjItLjYyMiAyLjA3NnoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iTElCUkVfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/LIBRE
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenLIBRE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenLIBRE', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0h-q0tp._.js.map