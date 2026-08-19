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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenFRA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenFRA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#73F',
                d: 'M7.103 6.343a.18.18 0 0 0 .24.126l8.798-2.267c.21-.048.186-.342-.036-.36l-9.656-.84c-.138-.006-.24.108-.204.228l.858 3.12zm.881 5.542L6.701 7.273l-.168-.6-.69-2.453c-.048-.18-.312-.18-.366 0l-2.47 8.84c-.037.139.09.265.24.229l4.6-1.182c.095-.018.155-.12.131-.222zm9.98-7.51c.27-.071.57.049.714.283l2.297 3.838c.06.096.006.234-.12.27L8.849 11.843a.18.18 0 0 1-.24-.126l-1.23-4.426c-.035-.102.025-.204.133-.228zM8.249 12.84a.18.18 0 0 0-.24-.12l-4.6 1.181c-.138.03-.192.21-.09.3l6.766 6.556c.143.132.371.006.33-.18l-2.16-7.731zm.756-.39L20.46 9.498c.186-.042.318.156.204.3L11.487 20.93c-.096.12-.288.072-.336-.072l-2.279-8.181c-.036-.096.03-.198.132-.228'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M7.103 6.343a.18.18 0 0 0 .24.126l8.798-2.267c.21-.048.186-.342-.036-.36l-9.656-.84c-.138-.006-.24.108-.204.228l.858 3.12zm.881 5.542L6.701 7.273l-.168-.6-.69-2.453c-.048-.18-.312-.18-.366 0l-2.47 8.84c-.037.139.09.265.24.229l4.6-1.182c.095-.018.155-.12.131-.222zm9.98-7.51c.27-.071.57.049.714.283l2.297 3.838c.06.096.006.234-.12.27L8.849 11.843a.18.18 0 0 1-.24-.126l-1.23-4.426c-.035-.102.025-.204.133-.228zM8.249 12.84a.18.18 0 0 0-.093-.114.18.18 0 0 0-.147-.006l-4.6 1.181c-.138.03-.192.21-.09.3l6.766 6.556c.143.132.371.006.33-.18l-2.16-7.731zm.756-.39L20.46 9.498c.186-.042.318.156.204.3L11.487 20.93c-.096.12-.288.072-.336-.072l-2.279-8.181c-.036-.096.03-.198.132-.228'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#FRA__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#73F',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M7.647 6.972a.16.16 0 0 0 .213.112l7.821-2.016c.187-.042.165-.303-.032-.32l-8.583-.746c-.123-.005-.214.096-.182.203l.763 2.772zm.784 4.926-1.141-4.1-.15-.533-.613-2.18c-.042-.16-.277-.16-.325 0l-2.196 7.858c-.032.123.08.234.213.202l4.089-1.05c.085-.016.139-.106.117-.197zm8.87-6.675a.58.58 0 0 1 .635.25l2.042 3.413c.054.085.005.208-.106.24L9.198 11.86a.16.16 0 0 1-.213-.112L7.892 7.814c-.032-.09.021-.181.117-.203zm-8.636 7.523a.16.16 0 0 0-.213-.107l-4.09 1.05c-.122.027-.17.187-.08.267l6.015 5.827c.127.117.33.005.293-.16l-1.92-6.872zm.672-.347L19.52 9.776c.165-.037.282.139.181.267l-8.157 9.895c-.085.106-.256.064-.299-.064L9.22 12.602c-.032-.086.026-.176.117-.203'
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
                        id: 'FRA__a'
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
 * @component @name TokenFRA
 * @description Web3Icon for TokenFRA
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM3M0YiIGQ9Ik03LjEwMyA2LjM0M2EuMTguMTggMCAwIDAgLjI0LjEyNmw4Ljc5OC0yLjI2N2MuMjEtLjA0OC4xODYtLjM0Mi0uMDM2LS4zNmwtOS42NTYtLjg0Yy0uMTM4LS4wMDYtLjI0LjEwOC0uMjA0LjIyOGwuODU4IDMuMTJ6bS44ODEgNS41NDJMNi43MDEgNy4yNzNsLS4xNjgtLjYtLjY5LTIuNDUzYy0uMDQ4LS4xOC0uMzEyLS4xOC0uMzY2IDBsLTIuNDcgOC44NGMtLjAzNy4xMzkuMDkuMjY1LjI0LjIyOWw0LjYtMS4xODJjLjA5NS0uMDE4LjE1NS0uMTIuMTMxLS4yMjJ6bTkuOTgtNy41MWMuMjctLjA3MS41Ny4wNDkuNzE0LjI4M2wyLjI5NyAzLjgzOGMuMDYuMDk2LjAwNi4yMzQtLjEyLjI3TDguODQ5IDExLjg0M2EuMTguMTggMCAwIDEtLjI0LS4xMjZsLTEuMjMtNC40MjZjLS4wMzUtLjEwMi4wMjUtLjIwNC4xMzMtLjIyOHpNOC4yNDkgMTIuODRhLjE4LjE4IDAgMCAwLS4yNC0uMTJsLTQuNiAxLjE4MWMtLjEzOC4wMy0uMTkyLjIxLS4wOS4zbDYuNzY2IDYuNTU2Yy4xNDMuMTMyLjM3MS4wMDYuMzMtLjE4bC0yLjE2LTcuNzMxem0uNzU2LS4zOUwyMC40NiA5LjQ5OGMuMTg2LS4wNDIuMzE4LjE1Ni4yMDQuM0wxMS40ODcgMjAuOTNjLS4wOTYuMTItLjI4OC4wNzItLjMzNi0uMDcybC0yLjI3OS04LjE4MWMtLjAzNi0uMDk2LjAzLS4xOTguMTMyLS4yMjgiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03LjEwMyA2LjM0M2EuMTguMTggMCAwIDAgLjI0LjEyNmw4Ljc5OC0yLjI2N2MuMjEtLjA0OC4xODYtLjM0Mi0uMDM2LS4zNmwtOS42NTYtLjg0Yy0uMTM4LS4wMDYtLjI0LjEwOC0uMjA0LjIyOGwuODU4IDMuMTJ6bS44ODEgNS41NDJMNi43MDEgNy4yNzNsLS4xNjgtLjYtLjY5LTIuNDUzYy0uMDQ4LS4xOC0uMzEyLS4xOC0uMzY2IDBsLTIuNDcgOC44NGMtLjAzNy4xMzkuMDkuMjY1LjI0LjIyOWw0LjYtMS4xODJjLjA5NS0uMDE4LjE1NS0uMTIuMTMxLS4yMjJ6bTkuOTgtNy41MWMuMjctLjA3MS41Ny4wNDkuNzE0LjI4M2wyLjI5NyAzLjgzOGMuMDYuMDk2LjAwNi4yMzQtLjEyLjI3TDguODQ5IDExLjg0M2EuMTguMTggMCAwIDEtLjI0LS4xMjZsLTEuMjMtNC40MjZjLS4wMzUtLjEwMi4wMjUtLjIwNC4xMzMtLjIyOHpNOC4yNDkgMTIuODRhLjE4LjE4IDAgMCAwLS4wOTMtLjExNC4xOC4xOCAwIDAgMC0uMTQ3LS4wMDZsLTQuNiAxLjE4MWMtLjEzOC4wMy0uMTkyLjIxLS4wOS4zbDYuNzY2IDYuNTU2Yy4xNDMuMTMyLjM3MS4wMDYuMzMtLjE4bC0yLjE2LTcuNzMxem0uNzU2LS4zOUwyMC40NiA5LjQ5OGMuMTg2LS4wNDIuMzE4LjE1Ni4yMDQuM0wxMS40ODcgMjAuOTNjLS4wOTYuMTItLjI4OC4wNzItLjMzNi0uMDcybC0yLjI3OS04LjE4MWMtLjAzNi0uMDk2LjAzLS4xOTguMTMyLS4yMjgiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNGUkFfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNzNGIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03LjY0NyA2Ljk3MmEuMTYuMTYgMCAwIDAgLjIxMy4xMTJsNy44MjEtMi4wMTZjLjE4Ny0uMDQyLjE2NS0uMzAzLS4wMzItLjMybC04LjU4My0uNzQ2Yy0uMTIzLS4wMDUtLjIxNC4wOTYtLjE4Mi4yMDNsLjc2MyAyLjc3MnptLjc4NCA0LjkyNi0xLjE0MS00LjEtLjE1LS41MzMtLjYxMy0yLjE4Yy0uMDQyLS4xNi0uMjc3LS4xNi0uMzI1IDBsLTIuMTk2IDcuODU4Yy0uMDMyLjEyMy4wOC4yMzQuMjEzLjIwMmw0LjA4OS0xLjA1Yy4wODUtLjAxNi4xMzktLjEwNi4xMTctLjE5N3ptOC44Ny02LjY3NWEuNTguNTggMCAwIDEgLjYzNS4yNWwyLjA0MiAzLjQxM2MuMDU0LjA4NS4wMDUuMjA4LS4xMDYuMjRMOS4xOTggMTEuODZhLjE2LjE2IDAgMCAxLS4yMTMtLjExMkw3Ljg5MiA3LjgxNGMtLjAzMi0uMDkuMDIxLS4xODEuMTE3LS4yMDN6bS04LjYzNiA3LjUyM2EuMTYuMTYgMCAwIDAtLjIxMy0uMTA3bC00LjA5IDEuMDVjLS4xMjIuMDI3LS4xNy4xODctLjA4LjI2N2w2LjAxNSA1LjgyN2MuMTI3LjExNy4zMy4wMDUuMjkzLS4xNmwtMS45Mi02Ljg3MnptLjY3Mi0uMzQ3TDE5LjUyIDkuNzc2Yy4xNjUtLjAzNy4yODIuMTM5LjE4MS4yNjdsLTguMTU3IDkuODk1Yy0uMDg1LjEwNi0uMjU2LjA2NC0uMjk5LS4wNjRMOS4yMiAxMi42MDJjLS4wMzItLjA4Ni4wMjYtLjE3Ni4xMTctLjIwMyIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJGUkFfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/FRA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenFRA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenFRA', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_11wersx._.js.map