module.exports = [
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWeb3Icon",
    ()=>createWeb3Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@types+node@24.13.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/BaseIcon.js [app-ssr] (ecmascript)");
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
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = defaultVariant, fallback, ...props }, ref)=>{
        const iconData = variants[variant];
        if (!iconData) {
            console.warn(`Icon "${name}" does not have variant "${variant}". ` + `Available variants: ${availableVariants.join(', ')}`);
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseIcon"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(element, elementProps, childElements);
    });
}
;
}),
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenYCC.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenYCC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#0276F7',
                d: 'm15.381 12.027 4.674-2.983c.624-.464 1.544-1.837.405-3.698-1.113-1.82-2.719-1.787-3.335-1.41l-7.39 4.578 2.56 1.428 5.167-3.073c.32-.194.543-.196.634-.038.09.16.045.294-.243.493L15.381 8.88zM6.883 3.963l4.834 2.651-2.542 1.627-2.673-1.494c-.362-.194-.522-.125-.595 0-.072.124-.042.327.275.49l5.817 3.202v3.02L3.924 9.055C3.29 8.71 2.46 7.335 3.48 5.462c1.043-1.917 2.69-1.807 3.404-1.499m2.86 14.039v-5.189L12 14.158v2.833c0 .455.132.55.28.547.262-.005.292-.198.283-.547v-6.545l2.255-1.292v9.01c0 .705-.452 2.107-2.537 2.107-2.133 0-2.468-1.512-2.537-2.27'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm15.381 12.027 4.674-2.983c.624-.464 1.544-1.837.405-3.698-1.113-1.82-2.719-1.787-3.335-1.41l-7.39 4.578 2.56 1.428 5.167-3.073c.32-.194.543-.196.634-.038.09.16.045.294-.243.493L15.381 8.88zM6.883 3.963l4.834 2.651-2.542 1.627-2.673-1.494c-.362-.194-.522-.125-.595 0-.072.124-.042.327.275.49l5.817 3.202v3.02L3.924 9.055C3.29 8.71 2.46 7.335 3.48 5.462c1.043-1.917 2.69-1.807 3.404-1.499m2.86 14.039v-5.189L12 14.158v2.833c0 .455.132.55.28.547.262-.005.292-.198.283-.547v-6.545l2.255-1.292v9.01c0 .705-.452 2.107-2.537 2.107-2.133 0-2.468-1.512-2.537-2.27'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#YCC__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#0276F7',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm15.005 12.024 4.155-2.651c.555-.413 1.372-1.633.36-3.288-.99-1.617-2.417-1.588-2.964-1.254l-6.57 4.07 2.276 1.27 4.593-2.732c.285-.172.483-.174.564-.033s.04.26-.216.438l-2.198 1.382zM7.452 4.856l4.297 2.357-2.26 1.445-2.376-1.327c-.322-.173-.464-.112-.53 0-.063.11-.037.29.245.435l5.17 2.846v2.685L4.822 9.382c-.563-.307-1.302-1.528-.395-3.194.927-1.703 2.391-1.606 3.026-1.332m2.542 12.479v-4.612L12 13.918v2.519c0 .403.117.488.25.486.232-.004.258-.177.25-.486v-5.818l2.005-1.149v8.009c0 .626-.402 1.873-2.255 1.873-1.897 0-2.194-1.344-2.255-2.017'
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
                        id: 'YCC__a'
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
 * @component @name TokenYCC
 * @description Web3Icon for TokenYCC
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMjc2RjciIGQ9Im0xNS4zODEgMTIuMDI3IDQuNjc0LTIuOTgzYy42MjQtLjQ2NCAxLjU0NC0xLjgzNy40MDUtMy42OTgtMS4xMTMtMS44Mi0yLjcxOS0xLjc4Ny0zLjMzNS0xLjQxbC03LjM5IDQuNTc4IDIuNTYgMS40MjggNS4xNjctMy4wNzNjLjMyLS4xOTQuNTQzLS4xOTYuNjM0LS4wMzguMDkuMTYuMDQ1LjI5NC0uMjQzLjQ5M0wxNS4zODEgOC44OHpNNi44ODMgMy45NjNsNC44MzQgMi42NTEtMi41NDIgMS42MjctMi42NzMtMS40OTRjLS4zNjItLjE5NC0uNTIyLS4xMjUtLjU5NSAwLS4wNzIuMTI0LS4wNDIuMzI3LjI3NS40OWw1LjgxNyAzLjIwMnYzLjAyTDMuOTI0IDkuMDU1QzMuMjkgOC43MSAyLjQ2IDcuMzM1IDMuNDggNS40NjJjMS4wNDMtMS45MTcgMi42OS0xLjgwNyAzLjQwNC0xLjQ5OW0yLjg2IDE0LjAzOXYtNS4xODlMMTIgMTQuMTU4djIuODMzYzAgLjQ1NS4xMzIuNTUuMjguNTQ3LjI2Mi0uMDA1LjI5Mi0uMTk4LjI4My0uNTQ3di02LjU0NWwyLjI1NS0xLjI5MnY5LjAxYzAgLjcwNS0uNDUyIDIuMTA3LTIuNTM3IDIuMTA3LTIuMTMzIDAtMi40NjgtMS41MTItMi41MzctMi4yNyIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNS4zODEgMTIuMDI3IDQuNjc0LTIuOTgzYy42MjQtLjQ2NCAxLjU0NC0xLjgzNy40MDUtMy42OTgtMS4xMTMtMS44Mi0yLjcxOS0xLjc4Ny0zLjMzNS0xLjQxbC03LjM5IDQuNTc4IDIuNTYgMS40MjggNS4xNjctMy4wNzNjLjMyLS4xOTQuNTQzLS4xOTYuNjM0LS4wMzguMDkuMTYuMDQ1LjI5NC0uMjQzLjQ5M0wxNS4zODEgOC44OHpNNi44ODMgMy45NjNsNC44MzQgMi42NTEtMi41NDIgMS42MjctMi42NzMtMS40OTRjLS4zNjItLjE5NC0uNTIyLS4xMjUtLjU5NSAwLS4wNzIuMTI0LS4wNDIuMzI3LjI3NS40OWw1LjgxNyAzLjIwMnYzLjAyTDMuOTI0IDkuMDU1QzMuMjkgOC43MSAyLjQ2IDcuMzM1IDMuNDggNS40NjJjMS4wNDMtMS45MTcgMi42OS0xLjgwNyAzLjQwNC0xLjQ5OW0yLjg2IDE0LjAzOXYtNS4xODlMMTIgMTQuMTU4djIuODMzYzAgLjQ1NS4xMzIuNTUuMjguNTQ3LjI2Mi0uMDA1LjI5Mi0uMTk4LjI4My0uNTQ3di02LjU0NWwyLjI1NS0xLjI5MnY5LjAxYzAgLjcwNS0uNDUyIDIuMTA3LTIuNTM3IDIuMTA3LTIuMTMzIDAtMi40NjgtMS41MTItMi41MzctMi4yNyIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNZQ0NfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDI3NkY3IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNS4wMDUgMTIuMDI0IDQuMTU1LTIuNjUxYy41NTUtLjQxMyAxLjM3Mi0xLjYzMy4zNi0zLjI4OC0uOTktMS42MTctMi40MTctMS41ODgtMi45NjQtMS4yNTRsLTYuNTcgNC4wNyAyLjI3NiAxLjI3IDQuNTkzLTIuNzMyYy4yODUtLjE3Mi40ODMtLjE3NC41NjQtLjAzM3MuMDQuMjYtLjIxNi40MzhsLTIuMTk4IDEuMzgyek03LjQ1MiA0Ljg1Nmw0LjI5NyAyLjM1Ny0yLjI2IDEuNDQ1LTIuMzc2LTEuMzI3Yy0uMzIyLS4xNzMtLjQ2NC0uMTEyLS41MyAwLS4wNjMuMTEtLjAzNy4yOS4yNDUuNDM1bDUuMTcgMi44NDZ2Mi42ODVMNC44MjIgOS4zODJjLS41NjMtLjMwNy0xLjMwMi0xLjUyOC0uMzk1LTMuMTk0LjkyNy0xLjcwMyAyLjM5MS0xLjYwNiAzLjAyNi0xLjMzMm0yLjU0MiAxMi40Nzl2LTQuNjEyTDEyIDEzLjkxOHYyLjUxOWMwIC40MDMuMTE3LjQ4OC4yNS40ODYuMjMyLS4wMDQuMjU4LS4xNzcuMjUtLjQ4NnYtNS44MThsMi4wMDUtMS4xNDl2OC4wMDljMCAuNjI2LS40MDIgMS44NzMtMi4yNTUgMS44NzMtMS44OTcgMC0yLjE5NC0xLjM0NC0yLjI1NS0yLjAxNyIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJZQ0NfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/YCC
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenYCC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenYCC', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_19hip7w._.js.map