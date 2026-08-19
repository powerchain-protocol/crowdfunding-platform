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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCTG.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCTG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#000',
                d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-2.118 0a6.883 6.883 0 1 1-13.766 0 6.883 6.883 0 0 1 13.766 0m-12.176-.265c.09-1.673 1.286-5.03 5.32-5.03a5.28 5.28 0 0 1 4.739 2.97h-1.943c-.175-.274-.678-.836-1.244-.836-.71 0-1.335.826-1.551 1.403l-.048.117a9.5 9.5 0 0 0-.662 3.722c0 2.133 1.768 3.605 3.325 1.577-.657-.106-1.975-.566-1.975-1.577-.053-.255.222-.763 1.726-.763 1.874 0 2.234.625 2.234 1.133s-.81 2.843-3.96 2.843c-3.155 0-3.68-2.737-3.68-4.304 0-1.26.827-3.039 1.24-3.775.037-.074.052-.2-.18-.11-.292.105-2.208 1.497-2.208 3.694a3.75 3.75 0 0 0-1.133-1.058z',
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
                d: 'M21 12a9 9 0 1 1-17.999 0A9 9 0 0 1 21 12m-2.118 0a6.883 6.883 0 1 1-13.765 0 6.883 6.883 0 0 1 13.765 0m-12.176-.265c.09-1.673 1.286-5.03 5.32-5.03a5.28 5.28 0 0 1 4.739 2.97h-1.943c-.175-.274-.678-.836-1.244-.836-.71 0-1.335.826-1.551 1.403l-.048.117a9.5 9.5 0 0 0-.662 3.722c0 2.133 1.768 3.605 3.325 1.577-.657-.106-1.975-.566-1.975-1.577-.053-.255.223-.763 1.726-.763 1.874 0 2.234.625 2.234 1.133s-.81 2.843-3.96 2.843c-3.155 0-3.68-2.737-3.68-4.304 0-1.26.827-3.039 1.24-3.775.037-.074.052-.2-.18-.11-.292.105-2.208 1.497-2.208 3.694a3.75 3.75 0 0 0-1.133-1.058z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CTG__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-1.882 0a6.118 6.118 0 1 1-12.235 0 6.118 6.118 0 0 1 12.235 0m-10.824-.235c.08-1.487 1.144-4.47 4.73-4.47a4.7 4.7 0 0 1 4.211 2.64h-1.727c-.155-.246-.602-.744-1.106-.744-.63 0-1.185.734-1.378 1.247l-.043.103a8.4 8.4 0 0 0-.588 3.308c0 1.897 1.572 3.205 2.955 1.403-.583-.094-1.755-.504-1.755-1.403-.047-.226.198-.677 1.534-.677 1.666 0 1.986.555 1.986 1.007s-.72 2.527-3.52 2.527c-2.805 0-3.27-2.433-3.27-3.826 0-1.12.733-2.701 1.1-3.355.034-.066.048-.18-.16-.1-.258.095-1.962 1.333-1.962 3.286a3.3 3.3 0 0 0-1.007-.942z',
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
                        id: 'CTG__a'
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
 * @component @name TokenCTG
 * @description Web3Icon for TokenCTG
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIxIDEyYTkgOSAwIDEgMS0xOCAwIDkgOSAwIDAgMSAxOCAwbS0yLjExOCAwYTYuODgzIDYuODgzIDAgMSAxLTEzLjc2NiAwIDYuODgzIDYuODgzIDAgMCAxIDEzLjc2NiAwbS0xMi4xNzYtLjI2NWMuMDktMS42NzMgMS4yODYtNS4wMyA1LjMyLTUuMDNhNS4yOCA1LjI4IDAgMCAxIDQuNzM5IDIuOTdoLTEuOTQzYy0uMTc1LS4yNzQtLjY3OC0uODM2LTEuMjQ0LS44MzYtLjcxIDAtMS4zMzUuODI2LTEuNTUxIDEuNDAzbC0uMDQ4LjExN2E5LjUgOS41IDAgMCAwLS42NjIgMy43MjJjMCAyLjEzMyAxLjc2OCAzLjYwNSAzLjMyNSAxLjU3Ny0uNjU3LS4xMDYtMS45NzUtLjU2Ni0xLjk3NS0xLjU3Ny0uMDUzLS4yNTUuMjIyLS43NjMgMS43MjYtLjc2MyAxLjg3NCAwIDIuMjM0LjYyNSAyLjIzNCAxLjEzM3MtLjgxIDIuODQzLTMuOTYgMi44NDNjLTMuMTU1IDAtMy42OC0yLjczNy0zLjY4LTQuMzA0IDAtMS4yNi44MjctMy4wMzkgMS4yNC0zLjc3NS4wMzctLjA3NC4wNTItLjItLjE4LS4xMS0uMjkyLjEwNS0yLjIwOCAxLjQ5Ny0yLjIwOCAzLjY5NGEzLjc1IDMuNzUgMCAwIDAtMS4xMzMtMS4wNTh6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIxIDEyYTkgOSAwIDEgMS0xNy45OTkgMEE5IDkgMCAwIDEgMjEgMTJtLTIuMTE4IDBhNi44ODMgNi44ODMgMCAxIDEtMTMuNzY1IDAgNi44ODMgNi44ODMgMCAwIDEgMTMuNzY1IDBtLTEyLjE3Ni0uMjY1Yy4wOS0xLjY3MyAxLjI4Ni01LjAzIDUuMzItNS4wM2E1LjI4IDUuMjggMCAwIDEgNC43MzkgMi45N2gtMS45NDNjLS4xNzUtLjI3NC0uNjc4LS44MzYtMS4yNDQtLjgzNi0uNzEgMC0xLjMzNS44MjYtMS41NTEgMS40MDNsLS4wNDguMTE3YTkuNSA5LjUgMCAwIDAtLjY2MiAzLjcyMmMwIDIuMTMzIDEuNzY4IDMuNjA1IDMuMzI1IDEuNTc3LS42NTctLjEwNi0xLjk3NS0uNTY2LTEuOTc1LTEuNTc3LS4wNTMtLjI1NS4yMjMtLjc2MyAxLjcyNi0uNzYzIDEuODc0IDAgMi4yMzQuNjI1IDIuMjM0IDEuMTMzcy0uODEgMi44NDMtMy45NiAyLjg0M2MtMy4xNTUgMC0zLjY4LTIuNzM3LTMuNjgtNC4zMDQgMC0xLjI2LjgyNy0zLjAzOSAxLjI0LTMuNzc1LjAzNy0uMDc0LjA1Mi0uMi0uMTgtLjExLS4yOTIuMTA1LTIuMjA4IDEuNDk3LTIuMjA4IDMuNjk0YTMuNzUgMy43NSAwIDAgMC0xLjEzMy0xLjA1OHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDVEdfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIwIDEyYTggOCAwIDEgMS0xNiAwIDggOCAwIDAgMSAxNiAwbS0xLjg4MiAwYTYuMTE4IDYuMTE4IDAgMSAxLTEyLjIzNSAwIDYuMTE4IDYuMTE4IDAgMCAxIDEyLjIzNSAwbS0xMC44MjQtLjIzNWMuMDgtMS40ODcgMS4xNDQtNC40NyA0LjczLTQuNDdhNC43IDQuNyAwIDAgMSA0LjIxMSAyLjY0aC0xLjcyN2MtLjE1NS0uMjQ2LS42MDItLjc0NC0xLjEwNi0uNzQ0LS42MyAwLTEuMTg1LjczNC0xLjM3OCAxLjI0N2wtLjA0My4xMDNhOC40IDguNCAwIDAgMC0uNTg4IDMuMzA4YzAgMS44OTcgMS41NzIgMy4yMDUgMi45NTUgMS40MDMtLjU4My0uMDk0LTEuNzU1LS41MDQtMS43NTUtMS40MDMtLjA0Ny0uMjI2LjE5OC0uNjc3IDEuNTM0LS42NzcgMS42NjYgMCAxLjk4Ni41NTUgMS45ODYgMS4wMDdzLS43MiAyLjUyNy0zLjUyIDIuNTI3Yy0yLjgwNSAwLTMuMjctMi40MzMtMy4yNy0zLjgyNiAwLTEuMTIuNzMzLTIuNzAxIDEuMS0zLjM1NS4wMzQtLjA2Ni4wNDgtLjE4LS4xNi0uMS0uMjU4LjA5NS0xLjk2MiAxLjMzMy0xLjk2MiAzLjI4NmEzLjMgMy4zIDAgMCAwLTEuMDA3LS45NDJ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQ1RHX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/CTG
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCTG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCTG', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1vzuea8._.js.map