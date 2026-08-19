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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMETFI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMETFI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#77FCD1',
                d: 'M12 5.647c-4.066 0-7.412 3.303-7.412 7.062a.847.847 0 0 1-.836.88c-.477 0-.752-.393-.752-.88 0-4.828 4.076-8.65 9-8.65s9 3.822 9 8.65c0 .487-.275.88-.752.88a.85.85 0 0 1-.836-.88c0-3.759-3.346-7.062-7.412-7.062'
            }
        ],
        [
            'path',
            {
                fill: '#77FCD1',
                d: 'M16.235 11.72v7.22c0 .556-.487 1.001-1.059 1.001-.571 0-1.058-.445-1.058-1v-6.412a.51.51 0 0 0-.53-.53.51.51 0 0 0-.53.53v3.235c0 .556-.603 1-1.058 1s-1.059-.476-1.059-1.021v-3.23c0-.296-.217-.513-.53-.513-.312 0-.529.217-.529.519v6.48c0 .556-.487.942-1.059.942-.571 0-1.058-.445-1.058-1v-7.253c0-1.875 1.895-3.394 4.235-3.394 1.996 0 4.256 1.292 4.235 3.425'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 5.647c-4.066 0-7.412 3.303-7.412 7.062a.847.847 0 0 1-.836.88c-.477 0-.752-.393-.752-.88 0-4.828 4.076-8.65 9-8.65s9 3.822 9 8.65c0 .487-.275.88-.752.88a.85.85 0 0 1-.836-.88c0-3.759-3.346-7.062-7.412-7.062'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M16.235 11.72v7.22c0 .556-.487 1.001-1.059 1.001-.571 0-1.058-.445-1.058-1v-6.412a.51.51 0 0 0-.53-.53.51.51 0 0 0-.53.53v3.235c0 .556-.603 1-1.058 1s-1.059-.476-1.059-1.021v-3.23c0-.296-.217-.513-.53-.513-.312 0-.529.217-.529.519v6.48c0 .556-.487.942-1.059.942-.571 0-1.058-.445-1.058-1v-7.253c0-1.875 1.895-3.394 4.235-3.394 1.996 0 4.256 1.292 4.235 3.425'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#METFI__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#77FCD1',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M12 6.353c-3.614 0-6.588 2.937-6.588 6.278a.75.75 0 0 1-.744.781c-.423 0-.668-.348-.668-.781 0-4.292 3.624-7.69 8-7.69 4.377 0 8 3.398 8 7.69 0 .433-.245.781-.668.781a.753.753 0 0 1-.744-.781c0-3.341-2.974-6.278-6.588-6.278'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M15.765 11.75v6.42c0 .494-.433.889-.941.889-.509 0-.942-.395-.942-.89v-5.698a.455.455 0 0 0-.47-.47.455.455 0 0 0-.47.47v2.875c0 .494-.537.89-.942.89s-.941-.424-.941-.909v-2.87c0-.264-.193-.457-.47-.457-.278 0-.471.193-.471.461v5.76c0 .494-.433.838-.941.838-.509 0-.942-.395-.942-.89v-6.446c0-1.666 1.685-3.017 3.765-3.017 1.774 0 3.784 1.148 3.765 3.045'
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
                        id: 'METFI__a'
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
 * @component @name TokenMETFI
 * @description Web3Icon for TokenMETFI
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM3N0ZDRDEiIGQ9Ik0xMiA1LjY0N2MtNC4wNjYgMC03LjQxMiAzLjMwMy03LjQxMiA3LjA2MmEuODQ3Ljg0NyAwIDAgMS0uODM2Ljg4Yy0uNDc3IDAtLjc1Mi0uMzkzLS43NTItLjg4IDAtNC44MjggNC4wNzYtOC42NSA5LTguNjVzOSAzLjgyMiA5IDguNjVjMCAuNDg3LS4yNzUuODgtLjc1Mi44OGEuODUuODUgMCAwIDEtLjgzNi0uODhjMC0zLjc1OS0zLjM0Ni03LjA2Mi03LjQxMi03LjA2MiIvPgogICAgPHBhdGggZmlsbD0iIzc3RkNEMSIgZD0iTTE2LjIzNSAxMS43MnY3LjIyYzAgLjU1Ni0uNDg3IDEuMDAxLTEuMDU5IDEuMDAxLS41NzEgMC0xLjA1OC0uNDQ1LTEuMDU4LTF2LTYuNDEyYS41MS41MSAwIDAgMC0uNTMtLjUzLjUxLjUxIDAgMCAwLS41My41M3YzLjIzNWMwIC41NTYtLjYwMyAxLTEuMDU4IDFzLTEuMDU5LS40NzYtMS4wNTktMS4wMjF2LTMuMjNjMC0uMjk2LS4yMTctLjUxMy0uNTMtLjUxMy0uMzEyIDAtLjUyOS4yMTctLjUyOS41MTl2Ni40OGMwIC41NTYtLjQ4Ny45NDItMS4wNTkuOTQyLS41NzEgMC0xLjA1OC0uNDQ1LTEuMDU4LTF2LTcuMjUzYzAtMS44NzUgMS44OTUtMy4zOTQgNC4yMzUtMy4zOTQgMS45OTYgMCA0LjI1NiAxLjI5MiA0LjIzNSAzLjQyNSIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiA1LjY0N2MtNC4wNjYgMC03LjQxMiAzLjMwMy03LjQxMiA3LjA2MmEuODQ3Ljg0NyAwIDAgMS0uODM2Ljg4Yy0uNDc3IDAtLjc1Mi0uMzkzLS43NTItLjg4IDAtNC44MjggNC4wNzYtOC42NSA5LTguNjVzOSAzLjgyMiA5IDguNjVjMCAuNDg3LS4yNzUuODgtLjc1Mi44OGEuODUuODUgMCAwIDEtLjgzNi0uODhjMC0zLjc1OS0zLjM0Ni03LjA2Mi03LjQxMi03LjA2MiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjIzNSAxMS43MnY3LjIyYzAgLjU1Ni0uNDg3IDEuMDAxLTEuMDU5IDEuMDAxLS41NzEgMC0xLjA1OC0uNDQ1LTEuMDU4LTF2LTYuNDEyYS41MS41MSAwIDAgMC0uNTMtLjUzLjUxLjUxIDAgMCAwLS41My41M3YzLjIzNWMwIC41NTYtLjYwMyAxLTEuMDU4IDFzLTEuMDU5LS40NzYtMS4wNTktMS4wMjF2LTMuMjNjMC0uMjk2LS4yMTctLjUxMy0uNTMtLjUxMy0uMzEyIDAtLjUyOS4yMTctLjUyOS41MTl2Ni40OGMwIC41NTYtLjQ4Ny45NDItMS4wNTkuOTQyLS41NzEgMC0xLjA1OC0uNDQ1LTEuMDU4LTF2LTcuMjUzYzAtMS44NzUgMS44OTUtMy4zOTQgNC4yMzUtMy4zOTQgMS45OTYgMCA0LjI1NiAxLjI5MiA0LjIzNSAzLjQyNSIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNRVRGSV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiM3N0ZDRDEiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTEyIDYuMzUzYy0zLjYxNCAwLTYuNTg4IDIuOTM3LTYuNTg4IDYuMjc4YS43NS43NSAwIDAgMS0uNzQ0Ljc4MWMtLjQyMyAwLS42NjgtLjM0OC0uNjY4LS43ODEgMC00LjI5MiAzLjYyNC03LjY5IDgtNy42OSA0LjM3NyAwIDggMy4zOTggOCA3LjY5IDAgLjQzMy0uMjQ1Ljc4MS0uNjY4Ljc4MWEuNzUzLjc1MyAwIDAgMS0uNzQ0LS43ODFjMC0zLjM0MS0yLjk3NC02LjI3OC02LjU4OC02LjI3OCIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xNS43NjUgMTEuNzV2Ni40MmMwIC40OTQtLjQzMy44ODktLjk0MS44ODktLjUwOSAwLS45NDItLjM5NS0uOTQyLS44OXYtNS42OThhLjQ1NS40NTUgMCAwIDAtLjQ3LS40Ny40NTUuNDU1IDAgMCAwLS40Ny40N3YyLjg3NWMwIC40OTQtLjUzNy44OS0uOTQyLjg5cy0uOTQxLS40MjQtLjk0MS0uOTA5di0yLjg3YzAtLjI2NC0uMTkzLS40NTctLjQ3LS40NTctLjI3OCAwLS40NzEuMTkzLS40NzEuNDYxdjUuNzZjMCAuNDk0LS40MzMuODM4LS45NDEuODM4LS41MDkgMC0uOTQyLS4zOTUtLjk0Mi0uODl2LTYuNDQ2YzAtMS42NjYgMS42ODUtMy4wMTcgMy43NjUtMy4wMTcgMS43NzQgMCAzLjc4NCAxLjE0OCAzLjc2NSAzLjA0NSIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJNRVRGSV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/METFI
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMETFI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMETFI', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0ym3h_g._.js.map