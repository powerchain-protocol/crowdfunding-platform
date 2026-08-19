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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMYRIA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMYRIA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M6.6 10.2c0-.99.796-1.8 1.8-1.8 1.003 0 1.8.81 1.8 1.8S10.997 12 12 12c1.085 0 1.8-.828 1.8-1.8 0-.99.797-1.8 1.8-1.8s1.769.81 1.769 1.8c0 1.103.796 1.778 1.831 1.8.918 0 1.8.833 1.8 1.8a1.81 1.81 0 0 1-3.084 1.272A1.78 1.78 0 0 1 17.4 13.8c0-.99-.797-1.8-1.8-1.8a1.76 1.76 0 0 0-1.8 1.8c0 .99-.796 1.8-1.8 1.8s-1.8-.81-1.8-1.8S9.403 12 8.4 12a1.76 1.76 0 0 0-1.8 1.8c0 .99-.779 1.8-1.782 1.8A1.807 1.807 0 0 1 3 13.8c0-.98.828-1.8 1.818-1.8a1.75 1.75 0 0 0 1.663-1.106A1.7 1.7 0 0 0 6.6 10.2'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M6.6 10.2c0-.99.796-1.8 1.8-1.8 1.003 0 1.8.81 1.8 1.8S10.997 12 12 12c1.085 0 1.8-.828 1.8-1.8 0-.99.797-1.8 1.8-1.8s1.769.81 1.769 1.8c0 1.103.796 1.778 1.831 1.8.918 0 1.8.833 1.8 1.8a1.81 1.81 0 0 1-3.084 1.272A1.78 1.78 0 0 1 17.4 13.8c0-.99-.797-1.8-1.8-1.8a1.76 1.76 0 0 0-1.8 1.8c0 .99-.796 1.8-1.8 1.8s-1.8-.81-1.8-1.8S9.403 12 8.4 12a1.76 1.76 0 0 0-1.8 1.8c0 .99-.779 1.8-1.782 1.8A1.807 1.807 0 0 1 3 13.8c0-.98.828-1.8 1.818-1.8a1.75 1.75 0 0 0 1.663-1.106A1.7 1.7 0 0 0 6.6 10.2'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MYRIA__a)'
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
                        d: 'M7.2 10.4c0-.88.708-1.6 1.6-1.6s1.6.72 1.6 1.6.708 1.6 1.6 1.6c.964 0 1.6-.736 1.6-1.6 0-.88.708-1.6 1.6-1.6s1.572.72 1.572 1.6c0 .98.708 1.58 1.628 1.6.816 0 1.6.74 1.6 1.6a1.608 1.608 0 0 1-2.742 1.13 1.6 1.6 0 0 1-.458-1.13c0-.88-.708-1.6-1.6-1.6a1.56 1.56 0 0 0-1.6 1.6c0 .88-.708 1.6-1.6 1.6s-1.6-.72-1.6-1.6S9.692 12 8.8 12a1.563 1.563 0 0 0-1.6 1.6c0 .88-.692 1.6-1.584 1.6A1.61 1.61 0 0 1 4 13.6c0-.872.736-1.6 1.616-1.6A1.55 1.55 0 0 0 7.2 10.4'
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
                        id: 'MYRIA__a'
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
 * @component @name TokenMYRIA
 * @description Web3Icon for TokenMYRIA
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02LjYgMTAuMmMwLS45OS43OTYtMS44IDEuOC0xLjggMS4wMDMgMCAxLjguODEgMS44IDEuOFMxMC45OTcgMTIgMTIgMTJjMS4wODUgMCAxLjgtLjgyOCAxLjgtMS44IDAtLjk5Ljc5Ny0xLjggMS44LTEuOHMxLjc2OS44MSAxLjc2OSAxLjhjMCAxLjEwMy43OTYgMS43NzggMS44MzEgMS44LjkxOCAwIDEuOC44MzMgMS44IDEuOGExLjgxIDEuODEgMCAwIDEtMy4wODQgMS4yNzJBMS43OCAxLjc4IDAgMCAxIDE3LjQgMTMuOGMwLS45OS0uNzk3LTEuOC0xLjgtMS44YTEuNzYgMS43NiAwIDAgMC0xLjggMS44YzAgLjk5LS43OTYgMS44LTEuOCAxLjhzLTEuOC0uODEtMS44LTEuOFM5LjQwMyAxMiA4LjQgMTJhMS43NiAxLjc2IDAgMCAwLTEuOCAxLjhjMCAuOTktLjc3OSAxLjgtMS43ODIgMS44QTEuODA3IDEuODA3IDAgMCAxIDMgMTMuOGMwLS45OC44MjgtMS44IDEuODE4LTEuOGExLjc1IDEuNzUgMCAwIDAgMS42NjMtMS4xMDZBMS43IDEuNyAwIDAgMCA2LjYgMTAuMiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02LjYgMTAuMmMwLS45OS43OTYtMS44IDEuOC0xLjggMS4wMDMgMCAxLjguODEgMS44IDEuOFMxMC45OTcgMTIgMTIgMTJjMS4wODUgMCAxLjgtLjgyOCAxLjgtMS44IDAtLjk5Ljc5Ny0xLjggMS44LTEuOHMxLjc2OS44MSAxLjc2OSAxLjhjMCAxLjEwMy43OTYgMS43NzggMS44MzEgMS44LjkxOCAwIDEuOC44MzMgMS44IDEuOGExLjgxIDEuODEgMCAwIDEtMy4wODQgMS4yNzJBMS43OCAxLjc4IDAgMCAxIDE3LjQgMTMuOGMwLS45OS0uNzk3LTEuOC0xLjgtMS44YTEuNzYgMS43NiAwIDAgMC0xLjggMS44YzAgLjk5LS43OTYgMS44LTEuOCAxLjhzLTEuOC0uODEtMS44LTEuOFM5LjQwMyAxMiA4LjQgMTJhMS43NiAxLjc2IDAgMCAwLTEuOCAxLjhjMCAuOTktLjc3OSAxLjgtMS43ODIgMS44QTEuODA3IDEuODA3IDAgMCAxIDMgMTMuOGMwLS45OC44MjgtMS44IDEuODE4LTEuOGExLjc1IDEuNzUgMCAwIDAgMS42NjMtMS4xMDZBMS43IDEuNyAwIDAgMCA2LjYgMTAuMiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNWVJJQV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTcuMiAxMC40YzAtLjg4LjcwOC0xLjYgMS42LTEuNnMxLjYuNzIgMS42IDEuNi43MDggMS42IDEuNiAxLjZjLjk2NCAwIDEuNi0uNzM2IDEuNi0xLjYgMC0uODguNzA4LTEuNiAxLjYtMS42czEuNTcyLjcyIDEuNTcyIDEuNmMwIC45OC43MDggMS41OCAxLjYyOCAxLjYuODE2IDAgMS42Ljc0IDEuNiAxLjZhMS42MDggMS42MDggMCAwIDEtMi43NDIgMS4xMyAxLjYgMS42IDAgMCAxLS40NTgtMS4xM2MwLS44OC0uNzA4LTEuNi0xLjYtMS42YTEuNTYgMS41NiAwIDAgMC0xLjYgMS42YzAgLjg4LS43MDggMS42LTEuNiAxLjZzLTEuNi0uNzItMS42LTEuNlM5LjY5MiAxMiA4LjggMTJhMS41NjMgMS41NjMgMCAwIDAtMS42IDEuNmMwIC44OC0uNjkyIDEuNi0xLjU4NCAxLjZBMS42MSAxLjYxIDAgMCAxIDQgMTMuNmMwLS44NzIuNzM2LTEuNiAxLjYxNi0xLjZBMS41NSAxLjU1IDAgMCAwIDcuMiAxMC40Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9Ik1ZUklBX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/MYRIA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMYRIA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMYRIA', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0nhaz4e._.js.map