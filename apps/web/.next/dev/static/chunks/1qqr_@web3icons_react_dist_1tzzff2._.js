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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenRVN.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenRVN
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#3D4FC5',
                d: 'M11.274 17.6 6.551 21 9.554 7.192zm.102-.024 2.868.033L9.663 7.234zm3.146-.236 2.201-8.166-.835-1.012zM13.46 4.535 9.832 6.981l5.297-1.712zm-.455 0-2.252.085-.338.927z'
            }
        ],
        [
            'path',
            {
                fill: '#DF5D44',
                d: 'm9.723 7.141 4.656 10.417 1.417-9.564zm.692-1.484 2.868-1.122-3.56 2.395zm.371-1.181.725-.785 1.654.726zm.835-.877 1.139-.523 1.45 1.661zM12.835 3h1.215l.675.734zm1.637 1.847.287-.869.295 1.147z'
            }
        ],
        [
            'path',
            {
                fill: '#E99749',
                d: 'm9.925 7.05 5.804.792-.574-2.446zm5.289-1.873-.371-1.358 2.606.767zm-.54-1.274-.32.87-1.35-1.595z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.275 17.6 6.55 21 9.554 7.192zm.1-.024 2.868.034-4.58-10.376zm3.147-.236 2.202-8.166-.836-1.012zM13.46 4.535 9.832 6.981l5.297-1.712zm-.455 0-2.252.085-.338.927zM9.723 7.141l4.656 10.417 1.417-9.564zm.691-1.484 2.868-1.122-3.56 2.395zm.372-1.181.725-.785 1.653.726zm.834-.877 1.14-.523 1.45 1.661zM12.835 3h1.214l.675.734zm1.636 1.847.287-.869.296 1.147zM9.925 7.05l5.804.792-.574-2.446zm5.289-1.873-.371-1.358 2.606.767zm-.54-1.274-.32.87-1.35-1.595z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#RVN__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#DF5D44',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.355 16.978 7.156 20l2.67-12.274zm.09-.022 2.55.03-4.072-9.222zm2.797-.21 1.956-7.258-.742-.9zm-.945-11.382L10.073 7.54l4.708-1.523zm-.405 0-2.002.075-.3.825zM9.976 7.681l4.138 9.26 1.26-8.502zm.614-1.32 2.55-.997-3.164 2.13zm.33-1.05.645-.697 1.47.645zm.742-.779 1.013-.465 1.29 1.477zM12.742 4h1.08l.6.652zm1.454 1.642.255-.773.263 1.02zM10.156 7.6l5.158.704-.51-2.174zm4.7-1.665-.33-1.207 2.318.682zm-.48-1.132-.284.772-1.2-1.417z'
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
                        id: 'RVN__a'
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
 * @component @name TokenRVN
 * @description Web3Icon for TokenRVN
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMzRDRGQzUiIGQ9Ik0xMS4yNzQgMTcuNiA2LjU1MSAyMSA5LjU1NCA3LjE5MnptLjEwMi0uMDI0IDIuODY4LjAzM0w5LjY2MyA3LjIzNHptMy4xNDYtLjIzNiAyLjIwMS04LjE2Ni0uODM1LTEuMDEyek0xMy40NiA0LjUzNSA5LjgzMiA2Ljk4MWw1LjI5Ny0xLjcxMnptLS40NTUgMC0yLjI1Mi4wODUtLjMzOC45Mjd6Ii8+CiAgICA8cGF0aCBmaWxsPSIjREY1RDQ0IiBkPSJtOS43MjMgNy4xNDEgNC42NTYgMTAuNDE3IDEuNDE3LTkuNTY0em0uNjkyLTEuNDg0IDIuODY4LTEuMTIyLTMuNTYgMi4zOTV6bS4zNzEtMS4xODEuNzI1LS43ODUgMS42NTQuNzI2em0uODM1LS44NzcgMS4xMzktLjUyMyAxLjQ1IDEuNjYxek0xMi44MzUgM2gxLjIxNWwuNjc1LjczNHptMS42MzcgMS44NDcuMjg3LS44NjkuMjk1IDEuMTQ3eiIvPgogICAgPHBhdGggZmlsbD0iI0U5OTc0OSIgZD0ibTkuOTI1IDcuMDUgNS44MDQuNzkyLS41NzQtMi40NDZ6bTUuMjg5LTEuODczLS4zNzEtMS4zNTggMi42MDYuNzY3em0tLjU0LTEuMjc0LS4zMi44Ny0xLjM1LTEuNTk1eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS4yNzUgMTcuNiA2LjU1IDIxIDkuNTU0IDcuMTkyem0uMS0uMDI0IDIuODY4LjAzNC00LjU4LTEwLjM3NnptMy4xNDctLjIzNiAyLjIwMi04LjE2Ni0uODM2LTEuMDEyek0xMy40NiA0LjUzNSA5LjgzMiA2Ljk4MWw1LjI5Ny0xLjcxMnptLS40NTUgMC0yLjI1Mi4wODUtLjMzOC45Mjd6TTkuNzIzIDcuMTQxbDQuNjU2IDEwLjQxNyAxLjQxNy05LjU2NHptLjY5MS0xLjQ4NCAyLjg2OC0xLjEyMi0zLjU2IDIuMzk1em0uMzcyLTEuMTgxLjcyNS0uNzg1IDEuNjUzLjcyNnptLjgzNC0uODc3IDEuMTQtLjUyMyAxLjQ1IDEuNjYxek0xMi44MzUgM2gxLjIxNGwuNjc1LjczNHptMS42MzYgMS44NDcuMjg3LS44NjkuMjk2IDEuMTQ3ek05LjkyNSA3LjA1bDUuODA0Ljc5Mi0uNTc0LTIuNDQ2em01LjI4OS0xLjg3My0uMzcxLTEuMzU4IDIuNjA2Ljc2N3ptLS41NC0xLjI3NC0uMzIuODctMS4zNS0xLjU5NXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNSVk5fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjREY1RDQ0IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS4zNTUgMTYuOTc4IDcuMTU2IDIwbDIuNjctMTIuMjc0em0uMDktLjAyMiAyLjU1LjAzLTQuMDcyLTkuMjIyem0yLjc5Ny0uMjEgMS45NTYtNy4yNTgtLjc0Mi0uOXptLS45NDUtMTEuMzgyTDEwLjA3MyA3LjU0bDQuNzA4LTEuNTIzem0tLjQwNSAwLTIuMDAyLjA3NS0uMy44MjV6TTkuOTc2IDcuNjgxbDQuMTM4IDkuMjYgMS4yNi04LjUwMnptLjYxNC0xLjMyIDIuNTUtLjk5Ny0zLjE2NCAyLjEzem0uMzMtMS4wNS42NDUtLjY5NyAxLjQ3LjY0NXptLjc0Mi0uNzc5IDEuMDEzLS40NjUgMS4yOSAxLjQ3N3pNMTIuNzQyIDRoMS4wOGwuNi42NTJ6bTEuNDU0IDEuNjQyLjI1NS0uNzczLjI2MyAxLjAyek0xMC4xNTYgNy42bDUuMTU4LjcwNC0uNTEtMi4xNzR6bTQuNy0xLjY2NS0uMzMtMS4yMDcgMi4zMTguNjgyem0tLjQ4LTEuMTMyLS4yODQuNzcyLTEuMi0xLjQxN3oiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iUlZOX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/RVN
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenRVN = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenRVN', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1tzzff2._.js.map