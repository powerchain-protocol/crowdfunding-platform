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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenTEER.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenTEER
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#000563',
                d: 'M20.381 5.812c.338 0 .619-.224.619-.562s-.281-.562-.619-.562H3.62c-.338 0-.619.224-.619.562s.225.562.563.562h7.874V18.75a.562.562 0 1 0 1.126 0V5.812z'
            }
        ],
        [
            'path',
            {
                fill: '#000563',
                d: 'M9.187 6.938H3.563c-.321 0-.563.219-.563.562s.242.562.563.562h5.062v4.5H4.187c-.304 0-.625.237-.625.563s.26.562.563.562h4.5v4.5H3.563c-.321 0-.563.22-.563.563s.242.562.563.562h5.624c.225 0 .366-.135.467-.337a.75.75 0 0 0 .096-.36V7.635a.7.7 0 0 0-.113-.382c-.1-.186-.236-.316-.45-.316m11.25 1.124c.321 0 .563-.219.563-.562a.537.537 0 0 0-.562-.562h-5.57a.58.58 0 0 0-.506.315.7.7 0 0 0-.112.382v10.98c0 .13.034.253.096.36.1.202.241.337.466.337h5.626c.32 0 .562-.219.562-.562a.537.537 0 0 0-.562-.563h-5.063v-4.5h4.5a.557.557 0 0 0 .563-.562.557.557 0 0 0-.563-.562h-4.5v-4.5z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M20.381 5.812c.338 0 .619-.224.619-.562s-.281-.562-.619-.562H3.62c-.338 0-.619.224-.619.562s.225.562.563.562h7.874V18.75a.562.562 0 1 0 1.126 0V5.812z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M9.187 6.938H3.563c-.321 0-.563.219-.563.562s.242.562.563.562h5.062v4.5H4.187c-.304 0-.625.237-.625.563s.26.563.563.563h4.5v4.5H3.563c-.321 0-.563.219-.563.562s.242.563.563.563h5.624c.226 0 .366-.136.467-.338a.75.75 0 0 0 .096-.36V7.635a.7.7 0 0 0-.113-.382c-.1-.186-.236-.316-.45-.316m11.25 1.124c.321 0 .563-.219.563-.562a.537.537 0 0 0-.562-.562h-5.57a.58.58 0 0 0-.506.315.7.7 0 0 0-.112.382v10.98c0 .13.034.253.096.36.1.202.241.337.466.337h5.626c.32 0 .562-.219.562-.562a.537.537 0 0 0-.562-.563h-5.063v-4.5h4.5a.557.557 0 0 0 .563-.562.557.557 0 0 0-.563-.562h-4.5v-4.5z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#TEER__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#000563',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M19.45 6.5c.3 0 .55-.2.55-.5s-.25-.5-.55-.5H4.55c-.3 0-.55.2-.55.5s.2.5.5.5h7V18a.499.499 0 1 0 1 0V6.5z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M9.5 7.5h-5c-.285 0-.5.195-.5.5s.215.5.5.5H9v4H5.055c-.27 0-.555.21-.555.5s.23.5.5.5h4v4H4.5c-.285 0-.5.195-.5.5s.215.5.5.5h5c.2 0 .325-.12.415-.3.05-.09.085-.2.085-.32V8.12a.6.6 0 0 0-.1-.34c-.09-.165-.21-.28-.4-.28m10 1c.285 0 .5-.195.5-.5s-.215-.5-.5-.5h-4.95a.52.52 0 0 0-.45.28q-.099.151-.1.34v9.76c0 .115.03.225.085.32.09.18.215.3.415.3h5c.285 0 .5-.195.5-.5s-.215-.5-.5-.5H15v-4h4c.27 0 .5-.21.5-.5s-.23-.5-.5-.5h-4v-4z'
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
                        id: 'TEER__a'
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
 * @component @name TokenTEER
 * @description Web3Icon for TokenTEER
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDA1NjMiIGQ9Ik0yMC4zODEgNS44MTJjLjMzOCAwIC42MTktLjIyNC42MTktLjU2MnMtLjI4MS0uNTYyLS42MTktLjU2MkgzLjYyYy0uMzM4IDAtLjYxOS4yMjQtLjYxOS41NjJzLjIyNS41NjIuNTYzLjU2Mmg3Ljg3NFYxOC43NWEuNTYyLjU2MiAwIDEgMCAxLjEyNiAwVjUuODEyeiIvPgogICAgPHBhdGggZmlsbD0iIzAwMDU2MyIgZD0iTTkuMTg3IDYuOTM4SDMuNTYzYy0uMzIxIDAtLjU2My4yMTktLjU2My41NjJzLjI0Mi41NjIuNTYzLjU2Mmg1LjA2MnY0LjVINC4xODdjLS4zMDQgMC0uNjI1LjIzNy0uNjI1LjU2M3MuMjYuNTYyLjU2My41NjJoNC41djQuNUgzLjU2M2MtLjMyMSAwLS41NjMuMjItLjU2My41NjNzLjI0Mi41NjIuNTYzLjU2Mmg1LjYyNGMuMjI1IDAgLjM2Ni0uMTM1LjQ2Ny0uMzM3YS43NS43NSAwIDAgMCAuMDk2LS4zNlY3LjYzNWEuNy43IDAgMCAwLS4xMTMtLjM4MmMtLjEtLjE4Ni0uMjM2LS4zMTYtLjQ1LS4zMTZtMTEuMjUgMS4xMjRjLjMyMSAwIC41NjMtLjIxOS41NjMtLjU2MmEuNTM3LjUzNyAwIDAgMC0uNTYyLS41NjJoLTUuNTdhLjU4LjU4IDAgMCAwLS41MDYuMzE1LjcuNyAwIDAgMC0uMTEyLjM4MnYxMC45OGMwIC4xMy4wMzQuMjUzLjA5Ni4zNi4xLjIwMi4yNDEuMzM3LjQ2Ni4zMzdoNS42MjZjLjMyIDAgLjU2Mi0uMjE5LjU2Mi0uNTYyYS41MzcuNTM3IDAgMCAwLS41NjItLjU2M2gtNS4wNjN2LTQuNWg0LjVhLjU1Ny41NTcgMCAwIDAgLjU2My0uNTYyLjU1Ny41NTcgMCAwIDAtLjU2My0uNTYyaC00LjV2LTQuNXoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMC4zODEgNS44MTJjLjMzOCAwIC42MTktLjIyNC42MTktLjU2MnMtLjI4MS0uNTYyLS42MTktLjU2MkgzLjYyYy0uMzM4IDAtLjYxOS4yMjQtLjYxOS41NjJzLjIyNS41NjIuNTYzLjU2Mmg3Ljg3NFYxOC43NWEuNTYyLjU2MiAwIDEgMCAxLjEyNiAwVjUuODEyeiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkuMTg3IDYuOTM4SDMuNTYzYy0uMzIxIDAtLjU2My4yMTktLjU2My41NjJzLjI0Mi41NjIuNTYzLjU2Mmg1LjA2MnY0LjVINC4xODdjLS4zMDQgMC0uNjI1LjIzNy0uNjI1LjU2M3MuMjYuNTYzLjU2My41NjNoNC41djQuNUgzLjU2M2MtLjMyMSAwLS41NjMuMjE5LS41NjMuNTYycy4yNDIuNTYzLjU2My41NjNoNS42MjRjLjIyNiAwIC4zNjYtLjEzNi40NjctLjMzOGEuNzUuNzUgMCAwIDAgLjA5Ni0uMzZWNy42MzVhLjcuNyAwIDAgMC0uMTEzLS4zODJjLS4xLS4xODYtLjIzNi0uMzE2LS40NS0uMzE2bTExLjI1IDEuMTI0Yy4zMjEgMCAuNTYzLS4yMTkuNTYzLS41NjJhLjUzNy41MzcgMCAwIDAtLjU2Mi0uNTYyaC01LjU3YS41OC41OCAwIDAgMC0uNTA2LjMxNS43LjcgMCAwIDAtLjExMi4zODJ2MTAuOThjMCAuMTMuMDM0LjI1My4wOTYuMzYuMS4yMDIuMjQxLjMzNy40NjYuMzM3aDUuNjI2Yy4zMiAwIC41NjItLjIxOS41NjItLjU2MmEuNTM3LjUzNyAwIDAgMC0uNTYyLS41NjNoLTUuMDYzdi00LjVoNC41YS41NTcuNTU3IDAgMCAwIC41NjMtLjU2Mi41NTcuNTU3IDAgMCAwLS41NjMtLjU2MmgtNC41di00LjV6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNURUVSX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMDU2MyIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTkuNDUgNi41Yy4zIDAgLjU1LS4yLjU1LS41cy0uMjUtLjUtLjU1LS41SDQuNTVjLS4zIDAtLjU1LjItLjU1LjVzLjIuNS41LjVoN1YxOGEuNDk5LjQ5OSAwIDEgMCAxIDBWNi41eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05LjUgNy41aC01Yy0uMjg1IDAtLjUuMTk1LS41LjVzLjIxNS41LjUuNUg5djRINS4wNTVjLS4yNyAwLS41NTUuMjEtLjU1NS41cy4yMy41LjUuNWg0djRINC41Yy0uMjg1IDAtLjUuMTk1LS41LjVzLjIxNS41LjUuNWg1Yy4yIDAgLjMyNS0uMTIuNDE1LS4zLjA1LS4wOS4wODUtLjIuMDg1LS4zMlY4LjEyYS42LjYgMCAwIDAtLjEtLjM0Yy0uMDktLjE2NS0uMjEtLjI4LS40LS4yOG0xMCAxYy4yODUgMCAuNS0uMTk1LjUtLjVzLS4yMTUtLjUtLjUtLjVoLTQuOTVhLjUyLjUyIDAgMCAwLS40NS4yOHEtLjA5OS4xNTEtLjEuMzR2OS43NmMwIC4xMTUuMDMuMjI1LjA4NS4zMi4wOS4xOC4yMTUuMy40MTUuM2g1Yy4yODUgMCAuNS0uMTk1LjUtLjVzLS4yMTUtLjUtLjUtLjVIMTV2LTRoNGMuMjcgMCAuNS0uMjEuNS0uNXMtLjIzLS41LS41LS41aC00di00eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJURUVSX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/TEER
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenTEER = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenTEER', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_08plx93._.js.map