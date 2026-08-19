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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCEUR.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCEUR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#3BC77B',
                d: 'M17.338 11.997c1 0 1.905-.399 2.563-1.05l.528 1.77a5.36 5.36 0 0 1-8.052-2.406H9.578l.55-1.124h1.94a5.4 5.4 0 0 1-.057-1.123h-1.798l.545-1.124h1.428a5.355 5.355 0 0 1 8.226-2.978l-.562 1.73a3.642 3.642 0 0 0-5.883 1.248h5.473l-.422 1.124h-5.321c-.03.376 0 .755.084 1.123h5.03l-.422 1.124h-4.13a3.65 3.65 0 0 0 3.08 1.686M3.571 13.402A7.59 7.59 0 0 1 8.64 6.243a9.7 9.7 0 0 0 .225 2.338 5.338 5.338 0 1 0 7.08 7.18 10 10 0 0 0 2.326.287 7.585 7.585 0 0 1-14.7-2.646'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M17.338 11.997c1 0 1.905-.399 2.563-1.05l.528 1.77a5.358 5.358 0 0 1-8.052-2.406H9.578l.55-1.124h1.94a5.4 5.4 0 0 1-.057-1.123h-1.798l.545-1.124h1.428a5.356 5.356 0 0 1 8.226-2.978l-.562 1.73a3.642 3.642 0 0 0-5.883 1.248h5.473l-.422 1.124h-5.321c-.03.376 0 .755.084 1.123h5.03l-.422 1.124h-4.13a3.65 3.65 0 0 0 3.08 1.686M3.571 13.402A7.59 7.59 0 0 1 8.64 6.243a9.7 9.7 0 0 0 .225 2.338 5.338 5.338 0 1 0 7.08 7.18 10 10 0 0 0 2.326.287 7.586 7.586 0 0 1-14.7-2.646'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CEUR__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#3BC77B',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M16.745 11.997a3.22 3.22 0 0 0 2.278-.934l.47 1.574a4.764 4.764 0 0 1-7.158-2.138H9.847l.49-1h1.723a4.8 4.8 0 0 1-.05-.998h-1.598l.484-.999h1.269a4.76 4.76 0 0 1 7.312-2.647l-.5 1.538a3.237 3.237 0 0 0-5.229 1.109h4.865l-.375.999h-4.73c-.025.335 0 .672.075.999h4.47l-.374.999h-3.671a3.25 3.25 0 0 0 2.737 1.498M4.508 13.246a6.74 6.74 0 0 1 4.505-6.363 8.6 8.6 0 0 0 .2 2.077 4.745 4.745 0 1 0 6.293 6.384q.997.247 2.068.255a6.743 6.743 0 0 1-13.066-2.353'
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
                        id: 'CEUR__a'
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
 * @component @name TokenCEUR
 * @description Web3Icon for TokenCEUR
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMzQkM3N0IiIGQ9Ik0xNy4zMzggMTEuOTk3YzEgMCAxLjkwNS0uMzk5IDIuNTYzLTEuMDVsLjUyOCAxLjc3YTUuMzYgNS4zNiAwIDAgMS04LjA1Mi0yLjQwNkg5LjU3OGwuNTUtMS4xMjRoMS45NGE1LjQgNS40IDAgMCAxLS4wNTctMS4xMjNoLTEuNzk4bC41NDUtMS4xMjRoMS40MjhhNS4zNTUgNS4zNTUgMCAwIDEgOC4yMjYtMi45NzhsLS41NjIgMS43M2EzLjY0MiAzLjY0MiAwIDAgMC01Ljg4MyAxLjI0OGg1LjQ3M2wtLjQyMiAxLjEyNGgtNS4zMjFjLS4wMy4zNzYgMCAuNzU1LjA4NCAxLjEyM2g1LjAzbC0uNDIyIDEuMTI0aC00LjEzYTMuNjUgMy42NSAwIDAgMCAzLjA4IDEuNjg2TTMuNTcxIDEzLjQwMkE3LjU5IDcuNTkgMCAwIDEgOC42NCA2LjI0M2E5LjcgOS43IDAgMCAwIC4yMjUgMi4zMzggNS4zMzggNS4zMzggMCAxIDAgNy4wOCA3LjE4IDEwIDEwIDAgMCAwIDIuMzI2LjI4NyA3LjU4NSA3LjU4NSAwIDAgMS0xNC43LTIuNjQ2Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy4zMzggMTEuOTk3YzEgMCAxLjkwNS0uMzk5IDIuNTYzLTEuMDVsLjUyOCAxLjc3YTUuMzU4IDUuMzU4IDAgMCAxLTguMDUyLTIuNDA2SDkuNTc4bC41NS0xLjEyNGgxLjk0YTUuNCA1LjQgMCAwIDEtLjA1Ny0xLjEyM2gtMS43OThsLjU0NS0xLjEyNGgxLjQyOGE1LjM1NiA1LjM1NiAwIDAgMSA4LjIyNi0yLjk3OGwtLjU2MiAxLjczYTMuNjQyIDMuNjQyIDAgMCAwLTUuODgzIDEuMjQ4aDUuNDczbC0uNDIyIDEuMTI0aC01LjMyMWMtLjAzLjM3NiAwIC43NTUuMDg0IDEuMTIzaDUuMDNsLS40MjIgMS4xMjRoLTQuMTNhMy42NSAzLjY1IDAgMCAwIDMuMDggMS42ODZNMy41NzEgMTMuNDAyQTcuNTkgNy41OSAwIDAgMSA4LjY0IDYuMjQzYTkuNyA5LjcgMCAwIDAgLjIyNSAyLjMzOCA1LjMzOCA1LjMzOCAwIDEgMCA3LjA4IDcuMTggMTAgMTAgMCAwIDAgMi4zMjYuMjg3IDcuNTg2IDcuNTg2IDAgMCAxLTE0LjctMi42NDYiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDRVVSX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzNCQzc3QiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYuNzQ1IDExLjk5N2EzLjIyIDMuMjIgMCAwIDAgMi4yNzgtLjkzNGwuNDcgMS41NzRhNC43NjQgNC43NjQgMCAwIDEtNy4xNTgtMi4xMzhIOS44NDdsLjQ5LTFoMS43MjNhNC44IDQuOCAwIDAgMS0uMDUtLjk5OGgtMS41OThsLjQ4NC0uOTk5aDEuMjY5YTQuNzYgNC43NiAwIDAgMSA3LjMxMi0yLjY0N2wtLjUgMS41MzhhMy4yMzcgMy4yMzcgMCAwIDAtNS4yMjkgMS4xMDloNC44NjVsLS4zNzUuOTk5aC00LjczYy0uMDI1LjMzNSAwIC42NzIuMDc1Ljk5OWg0LjQ3bC0uMzc0Ljk5OWgtMy42NzFhMy4yNSAzLjI1IDAgMCAwIDIuNzM3IDEuNDk4TTQuNTA4IDEzLjI0NmE2Ljc0IDYuNzQgMCAwIDEgNC41MDUtNi4zNjMgOC42IDguNiAwIDAgMCAuMiAyLjA3NyA0Ljc0NSA0Ljc0NSAwIDEgMCA2LjI5MyA2LjM4NHEuOTk3LjI0NyAyLjA2OC4yNTVhNi43NDMgNi43NDMgMCAwIDEtMTMuMDY2LTIuMzUzIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkNFVVJfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/CEUR
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCEUR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCEUR', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1-2m6xl._.js.map