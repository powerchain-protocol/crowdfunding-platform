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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenHOT.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenHOT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#007F88',
                d: 'M3.467 5.495s-.485.016-.466.044c.101.279.773 1.812.782 1.822 2.423.193 4.094 1.206 4.953 3.55H7.365l-.828 2.182s1.977-.003 2.2 0c-.688 2.196-2.604 3.48-4.871 3.48-.097.228-.798 1.856-.764 1.867 3.926.455 7.632-2.443 7.991-5.347h1.75c0 .371.288 1.052.497 1.5 1.271 2.559 4.02 4.026 6.832 3.95.46-.01.81-.066.79-.112l-.781-1.813c-2.213-.175-4.677-1.06-5.166-3.525h1.375c.019 0 .758-2.182.758-2.182h-2.15c.764-2.319 2.846-3.507 5.238-3.54 0 0 .529-1.195.764-1.804-3.547-.665-7.562 1.68-8.166 5.344H11.12c-.433-3.827-4.585-5.574-7.654-5.416'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3.467 5.495s-.485.016-.466.044c.101.279.773 1.812.782 1.822 2.423.193 4.094 1.206 4.953 3.55H7.365l-.828 2.182s1.977-.003 2.2 0c-.688 2.196-2.604 3.48-4.871 3.48-.097.228-.798 1.856-.764 1.867 3.926.455 7.632-2.443 7.991-5.347h1.75c0 .371.288 1.052.497 1.5 1.271 2.559 4.02 4.026 6.832 3.95.46-.01.81-.066.79-.112l-.781-1.813c-2.213-.175-4.677-1.06-5.166-3.525h1.375c.019 0 .758-2.182.758-2.182h-2.15c.764-2.319 2.846-3.507 5.238-3.54 0 0 .529-1.195.764-1.804-3.547-.665-7.562 1.68-8.166 5.344H11.12c-.433-3.827-4.585-5.574-7.654-5.416'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#HOT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#007F88',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4.415 6.218s-.431.014-.415.039c.09.248.688 1.611.696 1.62 2.154.171 3.64 1.072 4.403 3.155h-1.22l-.735 1.94s1.757-.003 1.955 0c-.61 1.951-2.314 3.093-4.33 3.093-.085.202-.708 1.65-.678 1.66 3.49.404 6.783-2.172 7.103-4.754h1.555c0 .331.256.936.442 1.334 1.13 2.275 3.574 3.579 6.073 3.511.409-.008.72-.058.703-.1l-.695-1.61c-1.967-.156-4.157-.944-4.592-3.135h1.222c.017 0 .674-1.939.674-1.939h-1.912c.68-2.06 2.531-3.117 4.657-3.147 0 0 .47-1.062.679-1.603-3.153-.591-6.722 1.494-7.259 4.75H11.22c-.385-3.401-4.076-4.954-6.804-4.814'
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
                        id: 'HOT__a'
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
 * @component @name TokenHOT
 * @description Web3Icon for TokenHOT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDdGODgiIGQ9Ik0zLjQ2NyA1LjQ5NXMtLjQ4NS4wMTYtLjQ2Ni4wNDRjLjEwMS4yNzkuNzczIDEuODEyLjc4MiAxLjgyMiAyLjQyMy4xOTMgNC4wOTQgMS4yMDYgNC45NTMgMy41NUg3LjM2NWwtLjgyOCAyLjE4MnMxLjk3Ny0uMDAzIDIuMiAwYy0uNjg4IDIuMTk2LTIuNjA0IDMuNDgtNC44NzEgMy40OC0uMDk3LjIyOC0uNzk4IDEuODU2LS43NjQgMS44NjcgMy45MjYuNDU1IDcuNjMyLTIuNDQzIDcuOTkxLTUuMzQ3aDEuNzVjMCAuMzcxLjI4OCAxLjA1Mi40OTcgMS41IDEuMjcxIDIuNTU5IDQuMDIgNC4wMjYgNi44MzIgMy45NS40Ni0uMDEuODEtLjA2Ni43OS0uMTEybC0uNzgxLTEuODEzYy0yLjIxMy0uMTc1LTQuNjc3LTEuMDYtNS4xNjYtMy41MjVoMS4zNzVjLjAxOSAwIC43NTgtMi4xODIuNzU4LTIuMTgyaC0yLjE1Yy43NjQtMi4zMTkgMi44NDYtMy41MDcgNS4yMzgtMy41NCAwIDAgLjUyOS0xLjE5NS43NjQtMS44MDQtMy41NDctLjY2NS03LjU2MiAxLjY4LTguMTY2IDUuMzQ0SDExLjEyYy0uNDMzLTMuODI3LTQuNTg1LTUuNTc0LTcuNjU0LTUuNDE2Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zLjQ2NyA1LjQ5NXMtLjQ4NS4wMTYtLjQ2Ni4wNDRjLjEwMS4yNzkuNzczIDEuODEyLjc4MiAxLjgyMiAyLjQyMy4xOTMgNC4wOTQgMS4yMDYgNC45NTMgMy41NUg3LjM2NWwtLjgyOCAyLjE4MnMxLjk3Ny0uMDAzIDIuMiAwYy0uNjg4IDIuMTk2LTIuNjA0IDMuNDgtNC44NzEgMy40OC0uMDk3LjIyOC0uNzk4IDEuODU2LS43NjQgMS44NjcgMy45MjYuNDU1IDcuNjMyLTIuNDQzIDcuOTkxLTUuMzQ3aDEuNzVjMCAuMzcxLjI4OCAxLjA1Mi40OTcgMS41IDEuMjcxIDIuNTU5IDQuMDIgNC4wMjYgNi44MzIgMy45NS40Ni0uMDEuODEtLjA2Ni43OS0uMTEybC0uNzgxLTEuODEzYy0yLjIxMy0uMTc1LTQuNjc3LTEuMDYtNS4xNjYtMy41MjVoMS4zNzVjLjAxOSAwIC43NTgtMi4xODIuNzU4LTIuMTgyaC0yLjE1Yy43NjQtMi4zMTkgMi44NDYtMy41MDcgNS4yMzgtMy41NCAwIDAgLjUyOS0xLjE5NS43NjQtMS44MDQtMy41NDctLjY2NS03LjU2MiAxLjY4LTguMTY2IDUuMzQ0SDExLjEyYy0uNDMzLTMuODI3LTQuNTg1LTUuNTc0LTcuNjU0LTUuNDE2Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNIT1RfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDA3Rjg4IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjQxNSA2LjIxOHMtLjQzMS4wMTQtLjQxNS4wMzljLjA5LjI0OC42ODggMS42MTEuNjk2IDEuNjIgMi4xNTQuMTcxIDMuNjQgMS4wNzIgNC40MDMgMy4xNTVoLTEuMjJsLS43MzUgMS45NHMxLjc1Ny0uMDAzIDEuOTU1IDBjLS42MSAxLjk1MS0yLjMxNCAzLjA5My00LjMzIDMuMDkzLS4wODUuMjAyLS43MDggMS42NS0uNjc4IDEuNjYgMy40OS40MDQgNi43ODMtMi4xNzIgNy4xMDMtNC43NTRoMS41NTVjMCAuMzMxLjI1Ni45MzYuNDQyIDEuMzM0IDEuMTMgMi4yNzUgMy41NzQgMy41NzkgNi4wNzMgMy41MTEuNDA5LS4wMDguNzItLjA1OC43MDMtLjFsLS42OTUtMS42MWMtMS45NjctLjE1Ni00LjE1Ny0uOTQ0LTQuNTkyLTMuMTM1aDEuMjIyYy4wMTcgMCAuNjc0LTEuOTM5LjY3NC0xLjkzOWgtMS45MTJjLjY4LTIuMDYgMi41MzEtMy4xMTcgNC42NTctMy4xNDcgMCAwIC40Ny0xLjA2Mi42NzktMS42MDMtMy4xNTMtLjU5MS02LjcyMiAxLjQ5NC03LjI1OSA0Ljc1SDExLjIyYy0uMzg1LTMuNDAxLTQuMDc2LTQuOTU0LTYuODA0LTQuODE0Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkhPVF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/HOT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenHOT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenHOT', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0njvrx0._.js.map