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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSSV.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSSV
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#009CF2',
                d: 'M9.247 6.62a.38.38 0 0 1 0-.483l2.458-2.998a.38.38 0 0 1 .587 0l2.463 2.998a.38.38 0 0 1 0 .483l-2.463 2.913a.378.378 0 0 1-.587 0L9.242 6.62z'
            }
        ],
        [
            'path',
            {
                fill: '#00649B',
                d: 'M9.247 17.948a.38.38 0 0 1 0-.483l2.458-2.998a.38.38 0 0 1 .456-.103.4.4 0 0 1 .13.103l2.464 2.998a.38.38 0 0 1 0 .483l-2.463 2.912a.378.378 0 0 1-.587 0l-2.463-2.912z'
            }
        ],
        [
            'path',
            {
                fill: '#009CF2',
                d: 'M5.695 11.133a.38.38 0 0 1-.004-.483L8.13 7.652a.38.38 0 0 1 .587 0l2.439 2.998a.38.38 0 0 1 0 .483l-2.444 2.913a.38.38 0 0 1-.578 0zm7.151 0a.38.38 0 0 1 0-.483l2.435-2.998a.38.38 0 0 1 .587 0l2.439 2.998a.38.38 0 0 1 0 .483l-2.444 2.913a.378.378 0 0 1-.577 0z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M9.248 6.62a.38.38 0 0 1 0-.483l2.458-2.998a.378.378 0 0 1 .587 0l2.463 2.998a.38.38 0 0 1 0 .483l-2.463 2.913a.378.378 0 0 1-.587 0L9.243 6.62zm0 11.328a.38.38 0 0 1 0-.483l2.458-2.998a.38.38 0 0 1 .587 0l2.463 2.998a.38.38 0 0 1 0 .483l-2.463 2.913a.378.378 0 0 1-.587 0l-2.463-2.913zm-3.553-6.815a.38.38 0 0 1-.004-.483L8.13 7.652a.38.38 0 0 1 .587 0l2.439 2.998a.38.38 0 0 1 0 .483l-2.444 2.913a.38.38 0 0 1-.578 0zm7.152 0a.38.38 0 0 1 0-.483l2.434-2.998a.38.38 0 0 1 .587 0l2.44 2.998a.38.38 0 0 1 0 .483l-2.445 2.913a.38.38 0 0 1-.577 0z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#SSV__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#009CF2',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M9.553 7.218a.34.34 0 0 1 0-.43l2.185-2.664a.338.338 0 0 1 .522 0l2.19 2.665a.34.34 0 0 1 0 .429l-2.19 2.589a.337.337 0 0 1-.522 0L9.55 7.218zm0 10.069a.34.34 0 0 1 0-.43l2.185-2.664a.34.34 0 0 1 .406-.091.34.34 0 0 1 .116.091l2.19 2.665a.34.34 0 0 1 0 .43l-2.19 2.588a.34.34 0 0 1-.405.092.34.34 0 0 1-.117-.092L9.55 17.287zM6.396 11.23a.34.34 0 0 1-.004-.43L8.56 8.135a.337.337 0 0 1 .522 0l2.167 2.665a.34.34 0 0 1 0 .43l-2.172 2.588a.337.337 0 0 1-.513 0zm6.356 0a.336.336 0 0 1 0-.43l2.164-2.665a.337.337 0 0 1 .522 0l2.168 2.665a.34.34 0 0 1 0 .43l-2.172 2.588a.337.337 0 0 1-.514 0z'
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
                        id: 'SSV__a'
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
 * @component @name TokenSSV
 * @description Web3Icon for TokenSSV
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDlDRjIiIGQ9Ik05LjI0NyA2LjYyYS4zOC4zOCAwIDAgMSAwLS40ODNsMi40NTgtMi45OThhLjM4LjM4IDAgMCAxIC41ODcgMGwyLjQ2MyAyLjk5OGEuMzguMzggMCAwIDEgMCAuNDgzbC0yLjQ2MyAyLjkxM2EuMzc4LjM3OCAwIDAgMS0uNTg3IDBMOS4yNDIgNi42MnoiLz4KICAgIDxwYXRoIGZpbGw9IiMwMDY0OUIiIGQ9Ik05LjI0NyAxNy45NDhhLjM4LjM4IDAgMCAxIDAtLjQ4M2wyLjQ1OC0yLjk5OGEuMzguMzggMCAwIDEgLjQ1Ni0uMTAzLjQuNCAwIDAgMSAuMTMuMTAzbDIuNDY0IDIuOTk4YS4zOC4zOCAwIDAgMSAwIC40ODNsLTIuNDYzIDIuOTEyYS4zNzguMzc4IDAgMCAxLS41ODcgMGwtMi40NjMtMi45MTJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDA5Q0YyIiBkPSJNNS42OTUgMTEuMTMzYS4zOC4zOCAwIDAgMS0uMDA0LS40ODNMOC4xMyA3LjY1MmEuMzguMzggMCAwIDEgLjU4NyAwbDIuNDM5IDIuOTk4YS4zOC4zOCAwIDAgMSAwIC40ODNsLTIuNDQ0IDIuOTEzYS4zOC4zOCAwIDAgMS0uNTc4IDB6bTcuMTUxIDBhLjM4LjM4IDAgMCAxIDAtLjQ4M2wyLjQzNS0yLjk5OGEuMzguMzggMCAwIDEgLjU4NyAwbDIuNDM5IDIuOTk4YS4zOC4zOCAwIDAgMSAwIC40ODNsLTIuNDQ0IDIuOTEzYS4zNzguMzc4IDAgMCAxLS41NzcgMHoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05LjI0OCA2LjYyYS4zOC4zOCAwIDAgMSAwLS40ODNsMi40NTgtMi45OThhLjM3OC4zNzggMCAwIDEgLjU4NyAwbDIuNDYzIDIuOTk4YS4zOC4zOCAwIDAgMSAwIC40ODNsLTIuNDYzIDIuOTEzYS4zNzguMzc4IDAgMCAxLS41ODcgMEw5LjI0MyA2LjYyem0wIDExLjMyOGEuMzguMzggMCAwIDEgMC0uNDgzbDIuNDU4LTIuOTk4YS4zOC4zOCAwIDAgMSAuNTg3IDBsMi40NjMgMi45OThhLjM4LjM4IDAgMCAxIDAgLjQ4M2wtMi40NjMgMi45MTNhLjM3OC4zNzggMCAwIDEtLjU4NyAwbC0yLjQ2My0yLjkxM3ptLTMuNTUzLTYuODE1YS4zOC4zOCAwIDAgMS0uMDA0LS40ODNMOC4xMyA3LjY1MmEuMzguMzggMCAwIDEgLjU4NyAwbDIuNDM5IDIuOTk4YS4zOC4zOCAwIDAgMSAwIC40ODNsLTIuNDQ0IDIuOTEzYS4zOC4zOCAwIDAgMS0uNTc4IDB6bTcuMTUyIDBhLjM4LjM4IDAgMCAxIDAtLjQ4M2wyLjQzNC0yLjk5OGEuMzguMzggMCAwIDEgLjU4NyAwbDIuNDQgMi45OThhLjM4LjM4IDAgMCAxIDAgLjQ4M2wtMi40NDUgMi45MTNhLjM4LjM4IDAgMCAxLS41NzcgMHoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTU1ZfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDA5Q0YyIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05LjU1MyA3LjIxOGEuMzQuMzQgMCAwIDEgMC0uNDNsMi4xODUtMi42NjRhLjMzOC4zMzggMCAwIDEgLjUyMiAwbDIuMTkgMi42NjVhLjM0LjM0IDAgMCAxIDAgLjQyOWwtMi4xOSAyLjU4OWEuMzM3LjMzNyAwIDAgMS0uNTIyIDBMOS41NSA3LjIxOHptMCAxMC4wNjlhLjM0LjM0IDAgMCAxIDAtLjQzbDIuMTg1LTIuNjY0YS4zNC4zNCAwIDAgMSAuNDA2LS4wOTEuMzQuMzQgMCAwIDEgLjExNi4wOTFsMi4xOSAyLjY2NWEuMzQuMzQgMCAwIDEgMCAuNDNsLTIuMTkgMi41ODhhLjM0LjM0IDAgMCAxLS40MDUuMDkyLjM0LjM0IDAgMCAxLS4xMTctLjA5Mkw5LjU1IDE3LjI4N3pNNi4zOTYgMTEuMjNhLjM0LjM0IDAgMCAxLS4wMDQtLjQzTDguNTYgOC4xMzVhLjMzNy4zMzcgMCAwIDEgLjUyMiAwbDIuMTY3IDIuNjY1YS4zNC4zNCAwIDAgMSAwIC40M2wtMi4xNzIgMi41ODhhLjMzNy4zMzcgMCAwIDEtLjUxMyAwem02LjM1NiAwYS4zMzYuMzM2IDAgMCAxIDAtLjQzbDIuMTY0LTIuNjY1YS4zMzcuMzM3IDAgMCAxIC41MjIgMGwyLjE2OCAyLjY2NWEuMzQuMzQgMCAwIDEgMCAuNDNsLTIuMTcyIDIuNTg4YS4zMzcuMzM3IDAgMCAxLS41MTQgMHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iU1NWX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/SSV
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSSV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSSV', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0x9ugoz._.js.map