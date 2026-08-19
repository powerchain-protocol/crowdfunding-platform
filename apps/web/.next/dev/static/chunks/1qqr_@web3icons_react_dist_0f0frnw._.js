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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSPOOL.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSPOOL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#24B4E6',
                d: 'm7.759 14-1.555-2.84a1.65 1.65 0 0 1 .635-2.23l8.94-5.06c.115-.115.29-.42.115-.685L16.209 3l1.69 2.965c.17.475.245 1.575-.795 2.165-1.035.585-6.295 3.485-8.795 4.86-.17.095-.47.39-.32.825-.05.05-.18.15-.23.185m0 7-1.555-2.84a1.65 1.65 0 0 1 .635-2.23l8.94-5.06c.115-.115.29-.42.115-.685l.315-.185 1.69 2.965c.17.475.245 1.575-.795 2.165-1.035.585-6.295 3.485-8.795 4.86-.17.095-.47.39-.32.825-.05.05-.18.15-.23.185'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm7.759 14-1.555-2.84a1.65 1.65 0 0 1 .635-2.23l8.94-5.06c.115-.115.29-.42.115-.685L16.209 3l1.69 2.965c.17.475.245 1.575-.795 2.165-1.035.585-6.295 3.485-8.795 4.86-.17.095-.47.39-.32.825-.05.05-.18.15-.23.185m0 7-1.555-2.84a1.65 1.65 0 0 1 .635-2.23l8.94-5.06c.115-.115.29-.42.115-.685l.315-.185 1.69 2.965c.17.475.245 1.575-.795 2.165-1.035.585-6.295 3.485-8.795 4.86-.17.095-.47.39-.32.825-.05.05-.18.15-.23.185'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#SPOOL__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#24B4E6',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm8.23 13.778-1.382-2.525a1.466 1.466 0 0 1 .564-1.982l7.947-4.498c.102-.102.258-.373.102-.609l.28-.164 1.502 2.636c.151.422.218 1.4-.706 1.924-.92.52-5.596 3.098-7.818 4.32-.151.084-.418.347-.285.733-.044.045-.16.134-.204.165m0 6.222-1.382-2.524a1.466 1.466 0 0 1 .564-1.983l7.947-4.497c.102-.103.258-.374.102-.61l.28-.164 1.502 2.636c.151.422.218 1.4-.706 1.924-.92.52-5.596 3.098-7.818 4.32-.151.085-.418.347-.285.733-.044.045-.16.134-.204.165'
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
                        id: 'SPOOL__a'
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
 * @component @name TokenSPOOL
 * @description Web3Icon for TokenSPOOL
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMyNEI0RTYiIGQ9Im03Ljc1OSAxNC0xLjU1NS0yLjg0YTEuNjUgMS42NSAwIDAgMSAuNjM1LTIuMjNsOC45NC01LjA2Yy4xMTUtLjExNS4yOS0uNDIuMTE1LS42ODVMMTYuMjA5IDNsMS42OSAyLjk2NWMuMTcuNDc1LjI0NSAxLjU3NS0uNzk1IDIuMTY1LTEuMDM1LjU4NS02LjI5NSAzLjQ4NS04Ljc5NSA0Ljg2LS4xNy4wOTUtLjQ3LjM5LS4zMi44MjUtLjA1LjA1LS4xOC4xNS0uMjMuMTg1bTAgNy0xLjU1NS0yLjg0YTEuNjUgMS42NSAwIDAgMSAuNjM1LTIuMjNsOC45NC01LjA2Yy4xMTUtLjExNS4yOS0uNDIuMTE1LS42ODVsLjMxNS0uMTg1IDEuNjkgMi45NjVjLjE3LjQ3NS4yNDUgMS41NzUtLjc5NSAyLjE2NS0xLjAzNS41ODUtNi4yOTUgMy40ODUtOC43OTUgNC44Ni0uMTcuMDk1LS40Ny4zOS0uMzIuODI1LS4wNS4wNS0uMTguMTUtLjIzLjE4NSIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im03Ljc1OSAxNC0xLjU1NS0yLjg0YTEuNjUgMS42NSAwIDAgMSAuNjM1LTIuMjNsOC45NC01LjA2Yy4xMTUtLjExNS4yOS0uNDIuMTE1LS42ODVMMTYuMjA5IDNsMS42OSAyLjk2NWMuMTcuNDc1LjI0NSAxLjU3NS0uNzk1IDIuMTY1LTEuMDM1LjU4NS02LjI5NSAzLjQ4NS04Ljc5NSA0Ljg2LS4xNy4wOTUtLjQ3LjM5LS4zMi44MjUtLjA1LjA1LS4xOC4xNS0uMjMuMTg1bTAgNy0xLjU1NS0yLjg0YTEuNjUgMS42NSAwIDAgMSAuNjM1LTIuMjNsOC45NC01LjA2Yy4xMTUtLjExNS4yOS0uNDIuMTE1LS42ODVsLjMxNS0uMTg1IDEuNjkgMi45NjVjLjE3LjQ3NS4yNDUgMS41NzUtLjc5NSAyLjE2NS0xLjAzNS41ODUtNi4yOTUgMy40ODUtOC43OTUgNC44Ni0uMTcuMDk1LS40Ny4zOS0uMzIuODI1LS4wNS4wNS0uMTguMTUtLjIzLjE4NSIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTUE9PTF9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMyNEI0RTYiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTguMjMgMTMuNzc4LTEuMzgyLTIuNTI1YTEuNDY2IDEuNDY2IDAgMCAxIC41NjQtMS45ODJsNy45NDctNC40OThjLjEwMi0uMTAyLjI1OC0uMzczLjEwMi0uNjA5bC4yOC0uMTY0IDEuNTAyIDIuNjM2Yy4xNTEuNDIyLjIxOCAxLjQtLjcwNiAxLjkyNC0uOTIuNTItNS41OTYgMy4wOTgtNy44MTggNC4zMi0uMTUxLjA4NC0uNDE4LjM0Ny0uMjg1LjczMy0uMDQ0LjA0NS0uMTYuMTM0LS4yMDQuMTY1bTAgNi4yMjItMS4zODItMi41MjRhMS40NjYgMS40NjYgMCAwIDEgLjU2NC0xLjk4M2w3Ljk0Ny00LjQ5N2MuMTAyLS4xMDMuMjU4LS4zNzQuMTAyLS42MWwuMjgtLjE2NCAxLjUwMiAyLjYzNmMuMTUxLjQyMi4yMTggMS40LS43MDYgMS45MjQtLjkyLjUyLTUuNTk2IDMuMDk4LTcuODE4IDQuMzItLjE1MS4wODUtLjQxOC4zNDctLjI4NS43MzMtLjA0NC4wNDUtLjE2LjEzNC0uMjA0LjE2NSIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJTUE9PTF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/SPOOL
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSPOOL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSPOOL', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0f0frnw._.js.map