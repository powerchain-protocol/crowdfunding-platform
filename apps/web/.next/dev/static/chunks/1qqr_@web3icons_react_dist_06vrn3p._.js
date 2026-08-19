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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenNPC.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenNPC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#BCBCBC',
                d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-8.026-4.07a.35.35 0 0 0-.381.434l1.512 5.847H9.44a.35.35 0 0 0 0 .698h5.12a.35.35 0 0 0 .337-.437l-1.63-6.282a.35.35 0 0 0-.293-.26m-4.11 9.306c-.198 0-.355.128-.355.29h-.006c0 .164.157.292.355.292h6.283c.197 0 .355-.128.355-.291s-.158-.291-.355-.291zm-.646-8.727a.873.873 0 1 0 0-1.745.873.873 0 0 0 0 1.745m8.436-.872a.873.873 0 1 1-1.746 0 .873.873 0 0 1 1.746 0',
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
                d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-8.026-4.07a.35.35 0 0 0-.381.434l1.512 5.847H9.44a.35.35 0 0 0 0 .698h5.12a.35.35 0 0 0 .337-.437l-1.63-6.282a.35.35 0 0 0-.293-.26m-4.11 9.306c-.198 0-.355.128-.355.29h-.006c0 .164.157.292.355.292h6.283c.197 0 .355-.128.355-.291s-.158-.291-.355-.291zm-.646-8.727a.873.873 0 1 0 0-1.745.873.873 0 0 0 0 1.745m8.436-.872a.873.873 0 1 1-1.746 0 .873.873 0 0 1 1.746 0',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#NPC__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#BCBCBC',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-7.134-3.618a.31.31 0 0 0-.34.386l1.345 5.197H9.724a.31.31 0 0 0 0 .62h4.55a.31.31 0 0 0 .3-.387l-1.447-5.585a.31.31 0 0 0-.26-.231m-3.654 8.272c-.176 0-.315.114-.315.259H8.89c0 .145.14.258.316.258h5.585c.176 0 .315-.113.315-.258s-.14-.259-.315-.259zm-.574-7.757a.776.776 0 1 0 0-1.551.776.776 0 0 0 0 1.551m7.499-.775a.776.776 0 1 1-1.552 0 .776.776 0 0 1 1.552 0',
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
                        id: 'NPC__a'
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
 * @component @name TokenNPC
 * @description Web3Icon for TokenNPC
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNCQ0JDQkMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIxIDEyYTkgOSAwIDEgMS0xOCAwIDkgOSAwIDAgMSAxOCAwbS04LjAyNi00LjA3YS4zNS4zNSAwIDAgMC0uMzgxLjQzNGwxLjUxMiA1Ljg0N0g5LjQ0YS4zNS4zNSAwIDAgMCAwIC42OThoNS4xMmEuMzUuMzUgMCAwIDAgLjMzNy0uNDM3bC0xLjYzLTYuMjgyYS4zNS4zNSAwIDAgMC0uMjkzLS4yNm0tNC4xMSA5LjMwNmMtLjE5OCAwLS4zNTUuMTI4LS4zNTUuMjloLS4wMDZjMCAuMTY0LjE1Ny4yOTIuMzU1LjI5Mmg2LjI4M2MuMTk3IDAgLjM1NS0uMTI4LjM1NS0uMjkxcy0uMTU4LS4yOTEtLjM1NS0uMjkxem0tLjY0Ni04LjcyN2EuODczLjg3MyAwIDEgMCAwLTEuNzQ1Ljg3My44NzMgMCAwIDAgMCAxLjc0NW04LjQzNi0uODcyYS44NzMuODczIDAgMSAxLTEuNzQ2IDAgLjg3My44NzMgMCAwIDEgMS43NDYgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIxIDEyYTkgOSAwIDEgMS0xOCAwIDkgOSAwIDAgMSAxOCAwbS04LjAyNi00LjA3YS4zNS4zNSAwIDAgMC0uMzgxLjQzNGwxLjUxMiA1Ljg0N0g5LjQ0YS4zNS4zNSAwIDAgMCAwIC42OThoNS4xMmEuMzUuMzUgMCAwIDAgLjMzNy0uNDM3bC0xLjYzLTYuMjgyYS4zNS4zNSAwIDAgMC0uMjkzLS4yNm0tNC4xMSA5LjMwNmMtLjE5OCAwLS4zNTUuMTI4LS4zNTUuMjloLS4wMDZjMCAuMTY0LjE1Ny4yOTIuMzU1LjI5Mmg2LjI4M2MuMTk3IDAgLjM1NS0uMTI4LjM1NS0uMjkxcy0uMTU4LS4yOTEtLjM1NS0uMjkxem0tLjY0Ni04LjcyN2EuODczLjg3MyAwIDEgMCAwLTEuNzQ1Ljg3My44NzMgMCAwIDAgMCAxLjc0NW04LjQzNi0uODcyYS44NzMuODczIDAgMSAxLTEuNzQ2IDAgLjg3My44NzMgMCAwIDEgMS43NDYgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNOUENfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjQkNCQ0JDIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIwIDEyYTggOCAwIDEgMS0xNiAwIDggOCAwIDAgMSAxNiAwbS03LjEzNC0zLjYxOGEuMzEuMzEgMCAwIDAtLjM0LjM4NmwxLjM0NSA1LjE5N0g5LjcyNGEuMzEuMzEgMCAwIDAgMCAuNjJoNC41NWEuMzEuMzEgMCAwIDAgLjMtLjM4N2wtMS40NDctNS41ODVhLjMxLjMxIDAgMCAwLS4yNi0uMjMxbS0zLjY1NCA4LjI3MmMtLjE3NiAwLS4zMTUuMTE0LS4zMTUuMjU5SDguODljMCAuMTQ1LjE0LjI1OC4zMTYuMjU4aDUuNTg1Yy4xNzYgMCAuMzE1LS4xMTMuMzE1LS4yNThzLS4xNC0uMjU5LS4zMTUtLjI1OXptLS41NzQtNy43NTdhLjc3Ni43NzYgMCAxIDAgMC0xLjU1MS43NzYuNzc2IDAgMCAwIDAgMS41NTFtNy40OTktLjc3NWEuNzc2Ljc3NiAwIDEgMS0xLjU1MiAwIC43NzYuNzc2IDAgMCAxIDEuNTUyIDAiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJOUENfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/NPC
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenNPC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenNPC', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_06vrn3p._.js.map