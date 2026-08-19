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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkExpchain.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkExpchain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#141413',
                d: 'm13.465 3.837 6.408 10.988c.467.801.19 1.826-.62 2.288l-6.407 3.663a1.71 1.71 0 0 1-1.692 0l-6.408-3.663a1.666 1.666 0 0 1-.62-2.288l6.409-10.988c.651-1.116 2.279-1.116 2.93 0M5.364 15.532a.26.26 0 0 0 .096.356l6.178 3.531V4.775zm6.998-10.757v14.644l6.178-3.53a.26.26 0 0 0 .096-.357z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm13.465 3.837 6.408 10.988c.467.801.19 1.826-.62 2.288l-6.407 3.663a1.71 1.71 0 0 1-1.692 0l-6.408-3.663a1.666 1.666 0 0 1-.62-2.288l6.409-10.988c.651-1.116 2.279-1.116 2.93 0M5.364 15.532a.26.26 0 0 0 .096.356l6.178 3.531V4.775zm6.998-10.757v14.644l6.178-3.53a.26.26 0 0 0 .096-.357z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#expchain__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#F5F5F5',
                        d: 'M0 0h24v24H0z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#141413',
                        d: 'm13.302 4.744 5.696 9.767a1.48 1.48 0 0 1-.55 2.034L12.752 19.8a1.52 1.52 0 0 1-1.504 0l-5.696-3.255a1.48 1.48 0 0 1-.55-2.034l5.696-9.767c.578-.992 2.025-.992 2.604 0m-7.2 10.396a.23.23 0 0 0 .085.316l5.49 3.139V5.578zm6.22-9.562v13.017l5.49-3.139a.23.23 0 0 0 .086-.316z',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
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
                        id: 'expchain__a'
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
 * @component @name NetworkExpchain
 * @description Web3Icon for NetworkExpchain
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxNDE0MTMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTEzLjQ2NSAzLjgzNyA2LjQwOCAxMC45ODhjLjQ2Ny44MDEuMTkgMS44MjYtLjYyIDIuMjg4bC02LjQwNyAzLjY2M2ExLjcxIDEuNzEgMCAwIDEtMS42OTIgMGwtNi40MDgtMy42NjNhMS42NjYgMS42NjYgMCAwIDEtLjYyLTIuMjg4bDYuNDA5LTEwLjk4OGMuNjUxLTEuMTE2IDIuMjc5LTEuMTE2IDIuOTMgME01LjM2NCAxNS41MzJhLjI2LjI2IDAgMCAwIC4wOTYuMzU2bDYuMTc4IDMuNTMxVjQuNzc1em02Ljk5OC0xMC43NTd2MTQuNjQ0bDYuMTc4LTMuNTNhLjI2LjI2IDAgMCAwIC4wOTYtLjM1N3oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTEzLjQ2NSAzLjgzNyA2LjQwOCAxMC45ODhjLjQ2Ny44MDEuMTkgMS44MjYtLjYyIDIuMjg4bC02LjQwNyAzLjY2M2ExLjcxIDEuNzEgMCAwIDEtMS42OTIgMGwtNi40MDgtMy42NjNhMS42NjYgMS42NjYgMCAwIDEtLjYyLTIuMjg4bDYuNDA5LTEwLjk4OGMuNjUxLTEuMTE2IDIuMjc5LTEuMTE2IDIuOTMgME01LjM2NCAxNS41MzJhLjI2LjI2IDAgMCAwIC4wOTYuMzU2bDYuMTc4IDMuNTMxVjQuNzc1em02Ljk5OC0xMC43NTd2MTQuNjQ0bDYuMTc4LTMuNTNhLjI2LjI2IDAgMCAwIC4wOTYtLjM1N3oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNleHBjaGFpbl9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiNGNUY1RjUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMTQxNDEzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0xMy4zMDIgNC43NDQgNS42OTYgOS43NjdhMS40OCAxLjQ4IDAgMCAxLS41NSAyLjAzNEwxMi43NTIgMTkuOGExLjUyIDEuNTIgMCAwIDEtMS41MDQgMGwtNS42OTYtMy4yNTVhMS40OCAxLjQ4IDAgMCAxLS41NS0yLjAzNGw1LjY5Ni05Ljc2N2MuNTc4LS45OTIgMi4wMjUtLjk5MiAyLjYwNCAwbS03LjIgMTAuMzk2YS4yMy4yMyAwIDAgMCAuMDg1LjMxNmw1LjQ5IDMuMTM5VjUuNTc4em02LjIyLTkuNTYydjEzLjAxN2w1LjQ5LTMuMTM5YS4yMy4yMyAwIDAgMCAuMDg2LS4zMTZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iZXhwY2hhaW5fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/networks/expchain
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkExpchain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkExpchain', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0pu0_83._.js.map