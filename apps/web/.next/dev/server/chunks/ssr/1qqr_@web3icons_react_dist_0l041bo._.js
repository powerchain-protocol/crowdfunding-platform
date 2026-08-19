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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenREGEN.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenREGEN
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#52B675',
                d: 'm3.784 11.047 5.479.762-5.48.768L3 11.809l.784-.767zm3.52 1.906h2.35l-1.958 1.154-.784-.381.392-.768zm2.737.773-1.959.762v.768h.79l1.17-1.536zm-.778 3.06v-.763l1.562-1.148-.784 1.91zm1.562 3.833L12 15.256l-2.345 4.976.386.768zm1.958-3.447.392-1.916.392 1.916-.392.381zm1.562 0-.386-1.916 1.17 1.535v.762zm5.48.381-3.913-3.827L21 16.405v1.148zm-1.17-6.13-2.35.386 2.35.382.386-.382zm1.17-5.358-3.913 3.828L21 7.595V6.446zm-4.696 1.15-.392 1.534 1.175-1.154v-.767zm-1.562-.769-.392 1.917-.392-1.917.392-.38zm-2.742-3.065L12 8.744 9.655 3.768 10.04 3zM9.263 7.595l1.17 1.917-1.959-1.15v-.767z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm3.784 11.047 5.479.762-5.48.768L3 11.809l.784-.767zm3.52 1.906h2.35l-1.958 1.154-.784-.381.392-.768zm2.737.773-1.959.762v.768h.79l1.17-1.536zm-.778 3.06v-.763l1.562-1.148-.784 1.91zm1.562 3.833L12 15.256l-2.345 4.976.386.768zm1.958-3.447.392-1.916.392 1.916-.392.381zm1.562 0-.386-1.916 1.17 1.535v.762zm5.48.381-3.913-3.827L21 16.405v1.148zm-1.17-6.13-2.35.386 2.35.382.386-.382zm1.17-5.358-3.913 3.828L21 7.595V6.446zm-4.696 1.15-.392 1.534 1.175-1.154v-.767zm-1.562-.769-.392 1.917-.392-1.917.392-.38zm-2.742-3.065L12 8.744 9.655 3.768 10.04 3zM9.263 7.595l1.17 1.917-1.959-1.15v-.767z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#REGEN__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#52B675',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm4.696 11.153 4.871.678-4.87.682L4 11.83l.696-.683zm3.13 1.694h2.09l-1.742 1.026-.696-.339.348-.682zm2.433.687-1.741.678v.682h.7l1.04-1.365zm-.692 2.72v-.678l1.388-1.02-.696 1.698zm1.388 3.407L12 14.894l-2.085 4.424.344.682zm1.741-3.063.349-1.704.348 1.704-.348.338zm1.389 0-.344-1.704 1.04 1.365v.677zm4.87.338-3.477-3.402L20 15.915v1.021zm-1.04-5.449-2.09.344 2.09.338.344-.338zm1.04-4.762-3.477 3.402L20 8.085V7.064zm-4.174 1.02-.348 1.366 1.045-1.026v-.683zm-1.388-.681-.348 1.703-.349-1.703.349-.34zm-2.438-2.725L12 9.106 9.915 4.682 10.26 4zM9.567 8.085l1.04 1.703-1.741-1.021v-.682z'
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
                        id: 'REGEN__a'
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
 * @component @name TokenREGEN
 * @description Web3Icon for TokenREGEN
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM1MkI2NzUiIGQ9Im0zLjc4NCAxMS4wNDcgNS40NzkuNzYyLTUuNDguNzY4TDMgMTEuODA5bC43ODQtLjc2N3ptMy41MiAxLjkwNmgyLjM1bC0xLjk1OCAxLjE1NC0uNzg0LS4zODEuMzkyLS43Njh6bTIuNzM3Ljc3My0xLjk1OS43NjJ2Ljc2OGguNzlsMS4xNy0xLjUzNnptLS43NzggMy4wNnYtLjc2M2wxLjU2Mi0xLjE0OC0uNzg0IDEuOTF6bTEuNTYyIDMuODMzTDEyIDE1LjI1NmwtMi4zNDUgNC45NzYuMzg2Ljc2OHptMS45NTgtMy40NDcuMzkyLTEuOTE2LjM5MiAxLjkxNi0uMzkyLjM4MXptMS41NjIgMC0uMzg2LTEuOTE2IDEuMTcgMS41MzV2Ljc2MnptNS40OC4zODEtMy45MTMtMy44MjdMMjEgMTYuNDA1djEuMTQ4em0tMS4xNy02LjEzLTIuMzUuMzg2IDIuMzUuMzgyLjM4Ni0uMzgyem0xLjE3LTUuMzU4LTMuOTEzIDMuODI4TDIxIDcuNTk1VjYuNDQ2em0tNC42OTYgMS4xNS0uMzkyIDEuNTM0IDEuMTc1LTEuMTU0di0uNzY3em0tMS41NjItLjc2OS0uMzkyIDEuOTE3LS4zOTItMS45MTcuMzkyLS4zOHptLTIuNzQyLTMuMDY1TDEyIDguNzQ0IDkuNjU1IDMuNzY4IDEwLjA0IDN6TTkuMjYzIDcuNTk1bDEuMTcgMS45MTctMS45NTktMS4xNXYtLjc2N3oiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0zLjc4NCAxMS4wNDcgNS40NzkuNzYyLTUuNDguNzY4TDMgMTEuODA5bC43ODQtLjc2N3ptMy41MiAxLjkwNmgyLjM1bC0xLjk1OCAxLjE1NC0uNzg0LS4zODEuMzkyLS43Njh6bTIuNzM3Ljc3My0xLjk1OS43NjJ2Ljc2OGguNzlsMS4xNy0xLjUzNnptLS43NzggMy4wNnYtLjc2M2wxLjU2Mi0xLjE0OC0uNzg0IDEuOTF6bTEuNTYyIDMuODMzTDEyIDE1LjI1NmwtMi4zNDUgNC45NzYuMzg2Ljc2OHptMS45NTgtMy40NDcuMzkyLTEuOTE2LjM5MiAxLjkxNi0uMzkyLjM4MXptMS41NjIgMC0uMzg2LTEuOTE2IDEuMTcgMS41MzV2Ljc2MnptNS40OC4zODEtMy45MTMtMy44MjdMMjEgMTYuNDA1djEuMTQ4em0tMS4xNy02LjEzLTIuMzUuMzg2IDIuMzUuMzgyLjM4Ni0uMzgyem0xLjE3LTUuMzU4LTMuOTEzIDMuODI4TDIxIDcuNTk1VjYuNDQ2em0tNC42OTYgMS4xNS0uMzkyIDEuNTM0IDEuMTc1LTEuMTU0di0uNzY3em0tMS41NjItLjc2OS0uMzkyIDEuOTE3LS4zOTItMS45MTcuMzkyLS4zOHptLTIuNzQyLTMuMDY1TDEyIDguNzQ0IDkuNjU1IDMuNzY4IDEwLjA0IDN6TTkuMjYzIDcuNTk1bDEuMTcgMS45MTctMS45NTktMS4xNXYtLjc2N3oiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNSRUdFTl9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiM1MkI2NzUiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTQuNjk2IDExLjE1MyA0Ljg3MS42NzgtNC44Ny42ODJMNCAxMS44M2wuNjk2LS42ODN6bTMuMTMgMS42OTRoMi4wOWwtMS43NDIgMS4wMjYtLjY5Ni0uMzM5LjM0OC0uNjgyem0yLjQzMy42ODctMS43NDEuNjc4di42ODJoLjdsMS4wNC0xLjM2NXptLS42OTIgMi43MnYtLjY3OGwxLjM4OC0xLjAyLS42OTYgMS42OTh6bTEuMzg4IDMuNDA3TDEyIDE0Ljg5NGwtMi4wODUgNC40MjQuMzQ0LjY4MnptMS43NDEtMy4wNjMuMzQ5LTEuNzA0LjM0OCAxLjcwNC0uMzQ4LjMzOHptMS4zODkgMC0uMzQ0LTEuNzA0IDEuMDQgMS4zNjV2LjY3N3ptNC44Ny4zMzgtMy40NzctMy40MDJMMjAgMTUuOTE1djEuMDIxem0tMS4wNC01LjQ0OS0yLjA5LjM0NCAyLjA5LjMzOC4zNDQtLjMzOHptMS4wNC00Ljc2Mi0zLjQ3NyAzLjQwMkwyMCA4LjA4NVY3LjA2NHptLTQuMTc0IDEuMDItLjM0OCAxLjM2NiAxLjA0NS0xLjAyNnYtLjY4M3ptLTEuMzg4LS42ODEtLjM0OCAxLjcwMy0uMzQ5LTEuNzAzLjM0OS0uMzR6bS0yLjQzOC0yLjcyNUwxMiA5LjEwNiA5LjkxNSA0LjY4MiAxMC4yNiA0ek05LjU2NyA4LjA4NWwxLjA0IDEuNzAzLTEuNzQxLTEuMDIxdi0uNjgyeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJSRUdFTl9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/REGEN
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenREGEN = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenREGEN', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0l041bo._.js.map