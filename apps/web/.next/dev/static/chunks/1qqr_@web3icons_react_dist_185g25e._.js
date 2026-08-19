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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenG.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FFAC43',
                d: 'M20.938 6.852a.46.46 0 0 0-.638-.164L8.454 13.896a4.029 4.029 0 0 1 6.077-5.037l-2.52 1.731 6.55-3.783a.295.295 0 1 0-.315-.499L16.642 7.41a6.5 6.5 0 0 0-4.633-1.935A6.523 6.523 0 0 0 5.488 12a6.5 6.5 0 0 0 .833 3.194L3 17.214l3.41-1.867a6.52 6.52 0 0 0 5.599 3.178A6.523 6.523 0 0 0 18.529 12v-.78c0-.61.248-1.39 1.126-1.86a.15.15 0 1 0-.146-.264l-7.777 4.492c.868-.37 1.532-.594 2.411-.77 1.833-.37 1.88.505 1.172 1.49-.474.661-1.544 1.721-3.305 1.721a4.02 4.02 0 0 1-3.409-1.883l12.16-6.66a.46.46 0 0 0 .177-.635'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M20.938 6.852a.46.46 0 0 0-.638-.164L8.454 13.896a4.029 4.029 0 0 1 6.077-5.037l-2.52 1.731 6.55-3.783a.295.295 0 1 0-.315-.499L16.642 7.41a6.5 6.5 0 0 0-4.633-1.935A6.523 6.523 0 0 0 5.488 12a6.5 6.5 0 0 0 .833 3.194L3 17.214l3.41-1.867a6.52 6.52 0 0 0 5.599 3.178A6.523 6.523 0 0 0 18.529 12v-.78c0-.61.248-1.39 1.126-1.86a.15.15 0 1 0-.146-.264l-7.777 4.492c.868-.37 1.532-.594 2.411-.77 1.833-.37 1.88.505 1.172 1.49-.474.661-1.544 1.721-3.305 1.721a4.02 4.02 0 0 1-3.409-1.883l12.16-6.66a.46.46 0 0 0 .177-.635'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#G__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FFAC43',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M19.945 7.424a.41.41 0 0 0-.567-.145l-10.53 6.407a3.581 3.581 0 0 1 5.402-4.477l-2.24 1.538 5.821-3.363a.262.262 0 1 0-.28-.443l-1.425.979a5.78 5.78 0 0 0-4.118-1.72 5.798 5.798 0 0 0-5.056 8.64L4 16.634l3.031-1.66a5.79 5.79 0 0 0 4.977 2.825 5.8 5.8 0 0 0 5.796-5.8v-.693c0-.542.22-1.236 1-1.654a.134.134 0 1 0-.13-.235l-6.912 3.993c.772-.328 1.361-.527 2.143-.684 1.629-.328 1.67.45 1.041 1.326-.42.586-1.372 1.529-2.937 1.529a3.58 3.58 0 0 1-3.03-1.674l10.808-5.92a.41.41 0 0 0 .158-.564'
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
                        id: 'G__a'
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
 * @component @name TokenG
 * @description Web3Icon for TokenG
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRkFDNDMiIGQ9Ik0yMC45MzggNi44NTJhLjQ2LjQ2IDAgMCAwLS42MzgtLjE2NEw4LjQ1NCAxMy44OTZhNC4wMjkgNC4wMjkgMCAwIDEgNi4wNzctNS4wMzdsLTIuNTIgMS43MzEgNi41NS0zLjc4M2EuMjk1LjI5NSAwIDEgMC0uMzE1LS40OTlMMTYuNjQyIDcuNDFhNi41IDYuNSAwIDAgMC00LjYzMy0xLjkzNUE2LjUyMyA2LjUyMyAwIDAgMCA1LjQ4OCAxMmE2LjUgNi41IDAgMCAwIC44MzMgMy4xOTRMMyAxNy4yMTRsMy40MS0xLjg2N2E2LjUyIDYuNTIgMCAwIDAgNS41OTkgMy4xNzhBNi41MjMgNi41MjMgMCAwIDAgMTguNTI5IDEydi0uNzhjMC0uNjEuMjQ4LTEuMzkgMS4xMjYtMS44NmEuMTUuMTUgMCAxIDAtLjE0Ni0uMjY0bC03Ljc3NyA0LjQ5MmMuODY4LS4zNyAxLjUzMi0uNTk0IDIuNDExLS43NyAxLjgzMy0uMzcgMS44OC41MDUgMS4xNzIgMS40OS0uNDc0LjY2MS0xLjU0NCAxLjcyMS0zLjMwNSAxLjcyMWE0LjAyIDQuMDIgMCAwIDEtMy40MDktMS44ODNsMTIuMTYtNi42NmEuNDYuNDYgMCAwIDAgLjE3Ny0uNjM1Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMC45MzggNi44NTJhLjQ2LjQ2IDAgMCAwLS42MzgtLjE2NEw4LjQ1NCAxMy44OTZhNC4wMjkgNC4wMjkgMCAwIDEgNi4wNzctNS4wMzdsLTIuNTIgMS43MzEgNi41NS0zLjc4M2EuMjk1LjI5NSAwIDEgMC0uMzE1LS40OTlMMTYuNjQyIDcuNDFhNi41IDYuNSAwIDAgMC00LjYzMy0xLjkzNUE2LjUyMyA2LjUyMyAwIDAgMCA1LjQ4OCAxMmE2LjUgNi41IDAgMCAwIC44MzMgMy4xOTRMMyAxNy4yMTRsMy40MS0xLjg2N2E2LjUyIDYuNTIgMCAwIDAgNS41OTkgMy4xNzhBNi41MjMgNi41MjMgMCAwIDAgMTguNTI5IDEydi0uNzhjMC0uNjEuMjQ4LTEuMzkgMS4xMjYtMS44NmEuMTUuMTUgMCAxIDAtLjE0Ni0uMjY0bC03Ljc3NyA0LjQ5MmMuODY4LS4zNyAxLjUzMi0uNTk0IDIuNDExLS43NyAxLjgzMy0uMzcgMS44OC41MDUgMS4xNzIgMS40OS0uNDc0LjY2MS0xLjU0NCAxLjcyMS0zLjMwNSAxLjcyMWE0LjAyIDQuMDIgMCAwIDEtMy40MDktMS44ODNsMTIuMTYtNi42NmEuNDYuNDYgMCAwIDAgLjE3Ny0uNjM1Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNHX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGQUM0MyIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTkuOTQ1IDcuNDI0YS40MS40MSAwIDAgMC0uNTY3LS4xNDVsLTEwLjUzIDYuNDA3YTMuNTgxIDMuNTgxIDAgMCAxIDUuNDAyLTQuNDc3bC0yLjI0IDEuNTM4IDUuODIxLTMuMzYzYS4yNjIuMjYyIDAgMSAwLS4yOC0uNDQzbC0xLjQyNS45NzlhNS43OCA1Ljc4IDAgMCAwLTQuMTE4LTEuNzIgNS43OTggNS43OTggMCAwIDAtNS4wNTYgOC42NEw0IDE2LjYzNGwzLjAzMS0xLjY2YTUuNzkgNS43OSAwIDAgMCA0Ljk3NyAyLjgyNSA1LjggNS44IDAgMCAwIDUuNzk2LTUuOHYtLjY5M2MwLS41NDIuMjItMS4yMzYgMS0xLjY1NGEuMTM0LjEzNCAwIDEgMC0uMTMtLjIzNWwtNi45MTIgMy45OTNjLjc3Mi0uMzI4IDEuMzYxLS41MjcgMi4xNDMtLjY4NCAxLjYyOS0uMzI4IDEuNjcuNDUgMS4wNDEgMS4zMjYtLjQyLjU4Ni0xLjM3MiAxLjUyOS0yLjkzNyAxLjUyOWEzLjU4IDMuNTggMCAwIDEtMy4wMy0xLjY3NGwxMC44MDgtNS45MmEuNDEuNDEgMCAwIDAgLjE1OC0uNTY0Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkdfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/G
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenG', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_185g25e._.js.map