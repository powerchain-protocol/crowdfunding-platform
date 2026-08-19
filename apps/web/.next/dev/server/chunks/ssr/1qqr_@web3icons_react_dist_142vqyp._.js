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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMOC.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMOC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#9CE3E5',
                d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18'
            }
        ],
        [
            'path',
            {
                fill: '#4F97A5',
                d: 'M21 12a9 9 0 0 1-18 0z'
            }
        ],
        [
            'path',
            {
                fill: '#36C7CE',
                d: 'M12 20.437a8.438 8.438 0 1 0 0-16.875 8.438 8.438 0 0 0 0 16.875'
            }
        ],
        [
            'path',
            {
                fill: '#359BB1',
                d: 'm12.956 20.944-5.23-5.007 1.821-5.996 2.104 2.385 4.078-4.264 5.203 5.063a9.3 9.3 0 0 1-1.788 4.37 9.18 9.18 0 0 1-6.188 3.449'
            }
        ],
        [
            'path',
            {
                fill: '#3AB1D3',
                d: 'M20.437 12c0-2.953-3.64-7.875-8.437-7.875-4.798 0-8.437 4.494-8.437 7.875a8.437 8.437 0 1 1 16.874 0'
            }
        ],
        [
            'path',
            {
                fill: '#28808E',
                d: 'M7.933 11.23V8.327h1.85l2.116 3.47 2.08-3.47h1.958v2.903l1.688-.265.225.265V12h-1.913v.805l1.682-.265.225.265v.787h-1.907v2.616h-1.726l-.225-.27.225-4.708-2.363 3.206-2.205-3.206v4.978h-1.62l-.298-.27.208-2.346H6.021l-.208-.27.208-.517h1.912v-.822H6.021l-.208-.264.208-.49z'
            }
        ],
        [
            'path',
            {
                fill: '#EBEBEB',
                d: 'M7.725 10.965V8.063H9.66l2.025 3.324 2.07-3.325h1.969v2.903h1.9v.754H15.73v.815h1.896v.788H15.73v2.615h-1.743v-4.972l-2.307 3.217-2.25-3.217v4.972H7.725v-2.615H5.813v-.788h1.912v-.815H5.813v-.754z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MOC__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#9CE3E5',
                        d: 'M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#4F97A5',
                        d: 'M20 12a8 8 0 0 1-16 0z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#36C7CE',
                        d: 'M12 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#359BB1',
                        d: 'M12.85 19.95 8.2 15.5l1.62-5.33 1.87 2.12 3.625-3.79L19.94 13a8.3 8.3 0 0 1-1.59 3.885 8.16 8.16 0 0 1-5.5 3.065'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#3AB1D3',
                        d: 'M19.5 12c0-2.625-3.235-7-7.5-7s-7.5 3.995-7.5 7a7.5 7.5 0 1 1 15 0'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#28808E',
                        d: 'M8.385 11.315v-2.58h1.645l1.88 3.085 1.85-3.085h1.74v2.58l1.5-.235.2.235V12h-1.7v.715l1.495-.235.2.235v.7H15.5v2.325h-1.535l-.2-.24.2-4.185-2.1 2.85-1.96-2.85v4.425h-1.44L8.2 15.5l.185-2.085h-1.7l-.185-.24.185-.46h1.7v-.73h-1.7L6.5 11.75l.185-.435z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#EBEBEB',
                        d: 'M8.2 11.08V8.5h1.72l1.8 2.955L13.56 8.5h1.75v2.58H17v.67h-1.685v.725H17v.7h-1.685V15.5h-1.55v-4.42l-2.05 2.86-2-2.86v4.42H8.2v-2.325H6.5v-.7h1.7v-.725H6.5v-.67z'
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
                        id: 'MOC__a'
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
 * @component @name TokenMOC
 * @description Web3Icon for TokenMOC
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM5Q0UzRTUiIGQ9Ik0xMiAyMWE5IDkgMCAxIDAgMC0xOCA5IDkgMCAwIDAgMCAxOCIvPgogICAgPHBhdGggZmlsbD0iIzRGOTdBNSIgZD0iTTIxIDEyYTkgOSAwIDAgMS0xOCAweiIvPgogICAgPHBhdGggZmlsbD0iIzM2QzdDRSIgZD0iTTEyIDIwLjQzN2E4LjQzOCA4LjQzOCAwIDEgMCAwLTE2Ljg3NSA4LjQzOCA4LjQzOCAwIDAgMCAwIDE2Ljg3NSIvPgogICAgPHBhdGggZmlsbD0iIzM1OUJCMSIgZD0ibTEyLjk1NiAyMC45NDQtNS4yMy01LjAwNyAxLjgyMS01Ljk5NiAyLjEwNCAyLjM4NSA0LjA3OC00LjI2NCA1LjIwMyA1LjA2M2E5LjMgOS4zIDAgMCAxLTEuNzg4IDQuMzcgOS4xOCA5LjE4IDAgMCAxLTYuMTg4IDMuNDQ5Ii8+CiAgICA8cGF0aCBmaWxsPSIjM0FCMUQzIiBkPSJNMjAuNDM3IDEyYzAtMi45NTMtMy42NC03Ljg3NS04LjQzNy03Ljg3NS00Ljc5OCAwLTguNDM3IDQuNDk0LTguNDM3IDcuODc1YTguNDM3IDguNDM3IDAgMSAxIDE2Ljg3NCAwIi8+CiAgICA8cGF0aCBmaWxsPSIjMjg4MDhFIiBkPSJNNy45MzMgMTEuMjNWOC4zMjdoMS44NWwyLjExNiAzLjQ3IDIuMDgtMy40N2gxLjk1OHYyLjkwM2wxLjY4OC0uMjY1LjIyNS4yNjVWMTJoLTEuOTEzdi44MDVsMS42ODItLjI2NS4yMjUuMjY1di43ODdoLTEuOTA3djIuNjE2aC0xLjcyNmwtLjIyNS0uMjcuMjI1LTQuNzA4LTIuMzYzIDMuMjA2LTIuMjA1LTMuMjA2djQuOTc4aC0xLjYybC0uMjk4LS4yNy4yMDgtMi4zNDZINi4wMjFsLS4yMDgtLjI3LjIwOC0uNTE3aDEuOTEydi0uODIySDYuMDIxbC0uMjA4LS4yNjQuMjA4LS40OXoiLz4KICAgIDxwYXRoIGZpbGw9IiNFQkVCRUIiIGQ9Ik03LjcyNSAxMC45NjVWOC4wNjNIOS42NmwyLjAyNSAzLjMyNCAyLjA3LTMuMzI1aDEuOTY5djIuOTAzaDEuOXYuNzU0SDE1Ljczdi44MTVoMS44OTZ2Ljc4OEgxNS43M3YyLjYxNWgtMS43NDN2LTQuOTcybC0yLjMwNyAzLjIxNy0yLjI1LTMuMjE3djQuOTcySDcuNzI1di0yLjYxNUg1LjgxM3YtLjc4OGgxLjkxMnYtLjgxNUg1LjgxM3YtLjc1NHoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNT0NfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM5Q0UzRTUiIGQ9Ik0xMiAyMGE4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM0Rjk3QTUiIGQ9Ik0yMCAxMmE4IDggMCAwIDEtMTYgMHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMzZDN0NFIiBkPSJNMTIgMTkuNWE3LjUgNy41IDAgMSAwIDAtMTUgNy41IDcuNSAwIDAgMCAwIDE1Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzM1OUJCMSIgZD0iTTEyLjg1IDE5Ljk1IDguMiAxNS41bDEuNjItNS4zMyAxLjg3IDIuMTIgMy42MjUtMy43OUwxOS45NCAxM2E4LjMgOC4zIDAgMCAxLTEuNTkgMy44ODUgOC4xNiA4LjE2IDAgMCAxLTUuNSAzLjA2NSIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMzQUIxRDMiIGQ9Ik0xOS41IDEyYzAtMi42MjUtMy4yMzUtNy03LjUtN3MtNy41IDMuOTk1LTcuNSA3YTcuNSA3LjUgMCAxIDEgMTUgMCIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMyODgwOEUiIGQ9Ik04LjM4NSAxMS4zMTV2LTIuNThoMS42NDVsMS44OCAzLjA4NSAxLjg1LTMuMDg1aDEuNzR2Mi41OGwxLjUtLjIzNS4yLjIzNVYxMmgtMS43di43MTVsMS40OTUtLjIzNS4yLjIzNXYuN0gxNS41djIuMzI1aC0xLjUzNWwtLjItLjI0LjItNC4xODUtMi4xIDIuODUtMS45Ni0yLjg1djQuNDI1aC0xLjQ0TDguMiAxNS41bC4xODUtMi4wODVoLTEuN2wtLjE4NS0uMjQuMTg1LS40NmgxLjd2LS43M2gtMS43TDYuNSAxMS43NWwuMTg1LS40MzV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0VCRUJFQiIgZD0iTTguMiAxMS4wOFY4LjVoMS43MmwxLjggMi45NTVMMTMuNTYgOC41aDEuNzV2Mi41OEgxN3YuNjdoLTEuNjg1di43MjVIMTd2LjdoLTEuNjg1VjE1LjVoLTEuNTV2LTQuNDJsLTIuMDUgMi44Ni0yLTIuODZ2NC40Mkg4LjJ2LTIuMzI1SDYuNXYtLjdoMS43di0uNzI1SDYuNXYtLjY3eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJNT0NfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/MOC
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMOC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMOC', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_142vqyp._.js.map