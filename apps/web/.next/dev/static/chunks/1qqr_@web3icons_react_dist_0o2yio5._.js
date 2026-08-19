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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPOLY.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPOLY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#3F4B80',
                d: 'm21 7.49-.039-.61-.18.507-.996.888-1.157.173-.341-.321 1.003-1.415 1.035-.315-1.112.026-1.62 1.19-1.479-.11-.058-.038-2.127-1.068-1.26.258-3.941 3.317-1.884.61-.79.918H4.659l-.682 1.21-.977.277.913.142.861-1.164 1.305.264-.013 1.253-.655 1.788-.386 1.665-.405.668 1.029-.225-.116-.695.874-1.825 1.69-.681.644-1.093 1.105-.81 2.18.328 2.205-.984-.386 1.682h-.964l-.283 1.23.836-.573 1.382-.604 1.234-1.722v-.83l.514.624 1.685 1.067.964-.457-.064-2.269-.264-.887 1.254-.322z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm21 7.49-.039-.61-.18.507-.996.888-1.157.173-.341-.321 1.003-1.415 1.035-.315-1.112.026-1.62 1.19-1.479-.11-.058-.038-2.127-1.068-1.26.258-3.941 3.317-1.884.61-.79.918H4.659l-.682 1.21-.977.277.913.142.861-1.164 1.305.264-.013 1.253-.655 1.788-.386 1.665-.405.668 1.029-.225-.116-.695.874-1.825 1.69-.681.644-1.093 1.105-.81 2.18.328 2.205-.984-.386 1.682h-.964l-.283 1.23.836-.573 1.382-.604 1.234-1.723v-.829l.514.624 1.685 1.067.964-.457-.064-2.269-.264-.887 1.254-.322z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#POLY__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#3F4B80',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm20 7.991-.034-.542-.16.451-.886.789-1.029.154-.303-.286.892-1.257.92-.28-.988.023-1.44 1.057-1.315-.097-.051-.034-1.892-.949-1.12.229-3.503 2.948-1.674.543-.703.815h-1.24l-.606 1.076-.868.246.811.126.766-1.034 1.16.234-.011 1.115-.583 1.588-.343 1.48-.36.594.914-.2-.102-.617.776-1.623 1.503-.605.572-.972.983-.72 1.937.292 1.96-.875-.343 1.495h-.857l-.252 1.094.743-.51 1.229-.536 1.097-1.531v-.738l.457.555 1.497.948.857-.405-.057-2.018-.234-.788 1.114-.286z'
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
                        id: 'POLY__a'
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
 * @component @name TokenPOLY
 * @description Web3Icon for TokenPOLY
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMzRjRCODAiIGQ9Im0yMSA3LjQ5LS4wMzktLjYxLS4xOC41MDctLjk5Ni44ODgtMS4xNTcuMTczLS4zNDEtLjMyMSAxLjAwMy0xLjQxNSAxLjAzNS0uMzE1LTEuMTEyLjAyNi0xLjYyIDEuMTktMS40NzktLjExLS4wNTgtLjAzOC0yLjEyNy0xLjA2OC0xLjI2LjI1OC0zLjk0MSAzLjMxNy0xLjg4NC42MS0uNzkuOTE4SDQuNjU5bC0uNjgyIDEuMjEtLjk3Ny4yNzcuOTEzLjE0Mi44NjEtMS4xNjQgMS4zMDUuMjY0LS4wMTMgMS4yNTMtLjY1NSAxLjc4OC0uMzg2IDEuNjY1LS40MDUuNjY4IDEuMDI5LS4yMjUtLjExNi0uNjk1Ljg3NC0xLjgyNSAxLjY5LS42ODEuNjQ0LTEuMDkzIDEuMTA1LS44MSAyLjE4LjMyOCAyLjIwNS0uOTg0LS4zODYgMS42ODJoLS45NjRsLS4yODMgMS4yMy44MzYtLjU3MyAxLjM4Mi0uNjA0IDEuMjM0LTEuNzIydi0uODNsLjUxNC42MjQgMS42ODUgMS4wNjcuOTY0LS40NTctLjA2NC0yLjI2OS0uMjY0LS44ODcgMS4yNTQtLjMyMnoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0yMSA3LjQ5LS4wMzktLjYxLS4xOC41MDctLjk5Ni44ODgtMS4xNTcuMTczLS4zNDEtLjMyMSAxLjAwMy0xLjQxNSAxLjAzNS0uMzE1LTEuMTEyLjAyNi0xLjYyIDEuMTktMS40NzktLjExLS4wNTgtLjAzOC0yLjEyNy0xLjA2OC0xLjI2LjI1OC0zLjk0MSAzLjMxNy0xLjg4NC42MS0uNzkuOTE4SDQuNjU5bC0uNjgyIDEuMjEtLjk3Ny4yNzcuOTEzLjE0Mi44NjEtMS4xNjQgMS4zMDUuMjY0LS4wMTMgMS4yNTMtLjY1NSAxLjc4OC0uMzg2IDEuNjY1LS40MDUuNjY4IDEuMDI5LS4yMjUtLjExNi0uNjk1Ljg3NC0xLjgyNSAxLjY5LS42ODEuNjQ0LTEuMDkzIDEuMTA1LS44MSAyLjE4LjMyOCAyLjIwNS0uOTg0LS4zODYgMS42ODJoLS45NjRsLS4yODMgMS4yMy44MzYtLjU3MyAxLjM4Mi0uNjA0IDEuMjM0LTEuNzIzdi0uODI5bC41MTQuNjI0IDEuNjg1IDEuMDY3Ljk2NC0uNDU3LS4wNjQtMi4yNjktLjI2NC0uODg3IDEuMjU0LS4zMjJ6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQT0xZX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzNGNEI4MCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMjAgNy45OTEtLjAzNC0uNTQyLS4xNi40NTEtLjg4Ni43ODktMS4wMjkuMTU0LS4zMDMtLjI4Ni44OTItMS4yNTcuOTItLjI4LS45ODguMDIzLTEuNDQgMS4wNTctMS4zMTUtLjA5Ny0uMDUxLS4wMzQtMS44OTItLjk0OS0xLjEyLjIyOS0zLjUwMyAyLjk0OC0xLjY3NC41NDMtLjcwMy44MTVoLTEuMjRsLS42MDYgMS4wNzYtLjg2OC4yNDYuODExLjEyNi43NjYtMS4wMzQgMS4xNi4yMzQtLjAxMSAxLjExNS0uNTgzIDEuNTg4LS4zNDMgMS40OC0uMzYuNTk0LjkxNC0uMi0uMTAyLS42MTcuNzc2LTEuNjIzIDEuNTAzLS42MDUuNTcyLS45NzIuOTgzLS43MiAxLjkzNy4yOTIgMS45Ni0uODc1LS4zNDMgMS40OTVoLS44NTdsLS4yNTIgMS4wOTQuNzQzLS41MSAxLjIyOS0uNTM2IDEuMDk3LTEuNTMxdi0uNzM4bC40NTcuNTU1IDEuNDk3Ljk0OC44NTctLjQwNS0uMDU3LTIuMDE4LS4yMzQtLjc4OCAxLjExNC0uMjg2eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJQT0xZX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/POLY
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPOLY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPOLY', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0o2yio5._.js.map