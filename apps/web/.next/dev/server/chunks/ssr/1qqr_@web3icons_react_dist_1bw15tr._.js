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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenVELO.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenVELO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#DB2264',
                d: 'M12.667 18.353c-.828-.02-1.557-.295-2.149-.886-2.188-2.203-4.396-4.387-6.603-6.59C2.279 9.242 2.929 6.488 5.136 5.8c1.164-.354 2.228-.099 3.096.767 2.188 2.164 4.337 4.328 6.505 6.493.592.59.927 1.298.966 2.144.06 1.397-.946 2.715-2.326 3.03-.217.058-.474.079-.71.118m5.44-12.706A2.88 2.88 0 0 1 21 8.539a2.915 2.915 0 0 1-2.893 2.931c-1.597.019-2.912-1.315-2.93-2.911a2.93 2.93 0 0 1 2.93-2.912'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.667 18.353c-.828-.02-1.557-.295-2.149-.885-2.188-2.204-4.396-4.388-6.603-6.592-1.636-1.632-.986-4.386 1.221-5.075 1.164-.354 2.228-.099 3.096.767 2.188 2.164 4.337 4.328 6.505 6.493.592.59.927 1.298.966 2.144.06 1.397-.946 2.715-2.326 3.03-.217.058-.473.079-.71.118m5.44-12.706A2.883 2.883 0 0 1 21 8.539a2.915 2.915 0 0 1-2.893 2.931c-1.597.019-2.912-1.315-2.93-2.911a2.93 2.93 0 0 1 2.93-2.912'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#VELO__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#DB2264',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.593 17.647c-.736-.017-1.384-.262-1.91-.787-1.945-1.959-3.908-3.9-5.87-5.859-1.454-1.451-.876-3.9 1.086-4.511 1.034-.315 1.98-.088 2.752.682 1.945 1.923 3.855 3.847 5.782 5.77.526.525.824 1.155.859 1.907.052 1.242-.841 2.413-2.068 2.693-.193.052-.42.07-.631.105m4.835-11.294A2.56 2.56 0 0 1 20 8.924a2.59 2.59 0 0 1-2.572 2.605c-1.42.017-2.588-1.169-2.605-2.588a2.605 2.605 0 0 1 2.605-2.588'
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
                        id: 'VELO__a'
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
 * @component @name TokenVELO
 * @description Web3Icon for TokenVELO
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNEQjIyNjQiIGQ9Ik0xMi42NjcgMTguMzUzYy0uODI4LS4wMi0xLjU1Ny0uMjk1LTIuMTQ5LS44ODYtMi4xODgtMi4yMDMtNC4zOTYtNC4zODctNi42MDMtNi41OUMyLjI3OSA5LjI0MiAyLjkyOSA2LjQ4OCA1LjEzNiA1LjhjMS4xNjQtLjM1NCAyLjIyOC0uMDk5IDMuMDk2Ljc2NyAyLjE4OCAyLjE2NCA0LjMzNyA0LjMyOCA2LjUwNSA2LjQ5My41OTIuNTkuOTI3IDEuMjk4Ljk2NiAyLjE0NC4wNiAxLjM5Ny0uOTQ2IDIuNzE1LTIuMzI2IDMuMDMtLjIxNy4wNTgtLjQ3NC4wNzktLjcxLjExOG01LjQ0LTEyLjcwNkEyLjg4IDIuODggMCAwIDEgMjEgOC41MzlhMi45MTUgMi45MTUgMCAwIDEtMi44OTMgMi45MzFjLTEuNTk3LjAxOS0yLjkxMi0xLjMxNS0yLjkzLTIuOTExYTIuOTMgMi45MyAwIDAgMSAyLjkzLTIuOTEyIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi42NjcgMTguMzUzYy0uODI4LS4wMi0xLjU1Ny0uMjk1LTIuMTQ5LS44ODUtMi4xODgtMi4yMDQtNC4zOTYtNC4zODgtNi42MDMtNi41OTItMS42MzYtMS42MzItLjk4Ni00LjM4NiAxLjIyMS01LjA3NSAxLjE2NC0uMzU0IDIuMjI4LS4wOTkgMy4wOTYuNzY3IDIuMTg4IDIuMTY0IDQuMzM3IDQuMzI4IDYuNTA1IDYuNDkzLjU5Mi41OS45MjcgMS4yOTguOTY2IDIuMTQ0LjA2IDEuMzk3LS45NDYgMi43MTUtMi4zMjYgMy4wMy0uMjE3LjA1OC0uNDczLjA3OS0uNzEuMTE4bTUuNDQtMTIuNzA2QTIuODgzIDIuODgzIDAgMCAxIDIxIDguNTM5YTIuOTE1IDIuOTE1IDAgMCAxLTIuODkzIDIuOTMxYy0xLjU5Ny4wMTktMi45MTItMS4zMTUtMi45My0yLjkxMWEyLjkzIDIuOTMgMCAwIDEgMi45My0yLjkxMiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNWRUxPX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0RCMjI2NCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIuNTkzIDE3LjY0N2MtLjczNi0uMDE3LTEuMzg0LS4yNjItMS45MS0uNzg3LTEuOTQ1LTEuOTU5LTMuOTA4LTMuOS01Ljg3LTUuODU5LTEuNDU0LTEuNDUxLS44NzYtMy45IDEuMDg2LTQuNTExIDEuMDM0LS4zMTUgMS45OC0uMDg4IDIuNzUyLjY4MiAxLjk0NSAxLjkyMyAzLjg1NSAzLjg0NyA1Ljc4MiA1Ljc3LjUyNi41MjUuODI0IDEuMTU1Ljg1OSAxLjkwNy4wNTIgMS4yNDItLjg0MSAyLjQxMy0yLjA2OCAyLjY5My0uMTkzLjA1Mi0uNDIuMDctLjYzMS4xMDVtNC44MzUtMTEuMjk0QTIuNTYgMi41NiAwIDAgMSAyMCA4LjkyNGEyLjU5IDIuNTkgMCAwIDEtMi41NzIgMi42MDVjLTEuNDIuMDE3LTIuNTg4LTEuMTY5LTIuNjA1LTIuNTg4YTIuNjA1IDIuNjA1IDAgMCAxIDIuNjA1LTIuNTg4Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlZFTE9fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/VELO
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenVELO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenVELO', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1bw15tr._.js.map