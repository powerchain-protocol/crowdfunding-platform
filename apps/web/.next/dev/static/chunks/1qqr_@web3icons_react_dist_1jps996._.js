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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenBTS.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenBTS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#35BAEB',
                d: 'm10.229 14.496-3.824-3.917v4.583h3.605c.034-.238.11-.463.219-.666m1.528-1.052a2 2 0 0 0-1.045.457L6.405 9.498V3l5.352 4.751zm1.55.456a2 2 0 0 0-1.064-.458v-3.39c1.232.087 2.537.582 3.45 1.406zm.702 1.262a2 2 0 0 0-.222-.673l2.437-2.486c.812.953 1.293 1.915 1.37 3.16zm-.282 1.35a2 2 0 0 0 .291-.845h3.577a5.78 5.78 0 0 1-1.371 3.392zm-1.484.942a2 2 0 0 0 .978-.39l2.471 2.531c-.912.824-2.217 1.318-3.449 1.405zm-1.445-.39c.28.21.61.344.959.388V21c-1.235-.084-2.525-.579-3.44-1.405zm-.796-1.397c.033.305.133.589.287.838L7.795 19.05a5.78 5.78 0 0 1-1.39-3.374l.01-.01z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm10.229 14.496-3.824-3.917v4.583h3.605c.034-.238.11-.463.219-.666m1.528-1.052a2 2 0 0 0-1.045.457L6.405 9.498V3l5.352 4.751zm1.55.456a2 2 0 0 0-1.064-.458v-3.39c1.232.087 2.537.582 3.45 1.406zm.702 1.262a2 2 0 0 0-.222-.673l2.437-2.486c.812.953 1.293 1.915 1.37 3.16zm-.282 1.35c.156-.25.258-.538.29-.845h3.578a5.78 5.78 0 0 1-1.371 3.392zm-1.484.942a2 2 0 0 0 .978-.39l2.471 2.531c-.912.824-2.217 1.318-3.449 1.405zm-1.445-.39c.28.21.61.344.959.388V21c-1.235-.084-2.525-.579-3.44-1.405zm-.796-1.397c.033.305.133.589.287.838L7.795 19.05a5.78 5.78 0 0 1-1.39-3.374l.01-.01z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#BTS__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#35BAEB',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm10.425 14.218-3.398-3.48v4.073h3.204q.047-.319.194-.593m1.359-.935a1.8 1.8 0 0 0-.93.407L7.028 9.776V4l4.757 4.223zm1.378.406a1.8 1.8 0 0 0-.946-.407v-3.013c1.095.076 2.255.517 3.066 1.249zm.624 1.122a1.8 1.8 0 0 0-.197-.599l2.165-2.21c.722.847 1.15 1.703 1.219 2.809zm-.25 1.199a1.8 1.8 0 0 0 .258-.75h3.179a5.14 5.14 0 0 1-1.219 3.015zm-1.32.838c.316-.036.616-.156.87-.346l2.196 2.25c-.811.731-1.971 1.171-3.066 1.248zm-1.285-.347c.25.187.543.306.853.345V20c-1.098-.075-2.245-.515-3.058-1.249zm-.707-1.242c.03.271.118.524.255.745l-2.217 2.262a5.14 5.14 0 0 1-1.235-2.999l.009-.008z'
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
                        id: 'BTS__a'
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
 * @component @name TokenBTS
 * @description Web3Icon for TokenBTS
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMzNUJBRUIiIGQ9Im0xMC4yMjkgMTQuNDk2LTMuODI0LTMuOTE3djQuNTgzaDMuNjA1Yy4wMzQtLjIzOC4xMS0uNDYzLjIxOS0uNjY2bTEuNTI4LTEuMDUyYTIgMiAwIDAgMC0xLjA0NS40NTdMNi40MDUgOS40OThWM2w1LjM1MiA0Ljc1MXptMS41NS40NTZhMiAyIDAgMCAwLTEuMDY0LS40NTh2LTMuMzljMS4yMzIuMDg3IDIuNTM3LjU4MiAzLjQ1IDEuNDA2em0uNzAyIDEuMjYyYTIgMiAwIDAgMC0uMjIyLS42NzNsMi40MzctMi40ODZjLjgxMi45NTMgMS4yOTMgMS45MTUgMS4zNyAzLjE2em0tLjI4MiAxLjM1YTIgMiAwIDAgMCAuMjkxLS44NDVoMy41NzdhNS43OCA1Ljc4IDAgMCAxLTEuMzcxIDMuMzkyem0tMS40ODQuOTQyYTIgMiAwIDAgMCAuOTc4LS4zOWwyLjQ3MSAyLjUzMWMtLjkxMi44MjQtMi4yMTcgMS4zMTgtMy40NDkgMS40MDV6bS0xLjQ0NS0uMzljLjI4LjIxLjYxLjM0NC45NTkuMzg4VjIxYy0xLjIzNS0uMDg0LTIuNTI1LS41NzktMy40NC0xLjQwNXptLS43OTYtMS4zOTdjLjAzMy4zMDUuMTMzLjU4OS4yODcuODM4TDcuNzk1IDE5LjA1YTUuNzggNS43OCAwIDAgMS0xLjM5LTMuMzc0bC4wMS0uMDF6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMC4yMjkgMTQuNDk2LTMuODI0LTMuOTE3djQuNTgzaDMuNjA1Yy4wMzQtLjIzOC4xMS0uNDYzLjIxOS0uNjY2bTEuNTI4LTEuMDUyYTIgMiAwIDAgMC0xLjA0NS40NTdMNi40MDUgOS40OThWM2w1LjM1MiA0Ljc1MXptMS41NS40NTZhMiAyIDAgMCAwLTEuMDY0LS40NTh2LTMuMzljMS4yMzIuMDg3IDIuNTM3LjU4MiAzLjQ1IDEuNDA2em0uNzAyIDEuMjYyYTIgMiAwIDAgMC0uMjIyLS42NzNsMi40MzctMi40ODZjLjgxMi45NTMgMS4yOTMgMS45MTUgMS4zNyAzLjE2em0tLjI4MiAxLjM1Yy4xNTYtLjI1LjI1OC0uNTM4LjI5LS44NDVoMy41NzhhNS43OCA1Ljc4IDAgMCAxLTEuMzcxIDMuMzkyem0tMS40ODQuOTQyYTIgMiAwIDAgMCAuOTc4LS4zOWwyLjQ3MSAyLjUzMWMtLjkxMi44MjQtMi4yMTcgMS4zMTgtMy40NDkgMS40MDV6bS0xLjQ0NS0uMzljLjI4LjIxLjYxLjM0NC45NTkuMzg4VjIxYy0xLjIzNS0uMDg0LTIuNTI1LS41NzktMy40NC0xLjQwNXptLS43OTYtMS4zOTdjLjAzMy4zMDUuMTMzLjU4OS4yODcuODM4TDcuNzk1IDE5LjA1YTUuNzggNS43OCAwIDAgMS0xLjM5LTMuMzc0bC4wMS0uMDF6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNCVFNfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMzVCQUVCIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMC40MjUgMTQuMjE4LTMuMzk4LTMuNDh2NC4wNzNoMy4yMDRxLjA0Ny0uMzE5LjE5NC0uNTkzbTEuMzU5LS45MzVhMS44IDEuOCAwIDAgMC0uOTMuNDA3TDcuMDI4IDkuNzc2VjRsNC43NTcgNC4yMjN6bTEuMzc4LjQwNmExLjggMS44IDAgMCAwLS45NDYtLjQwN3YtMy4wMTNjMS4wOTUuMDc2IDIuMjU1LjUxNyAzLjA2NiAxLjI0OXptLjYyNCAxLjEyMmExLjggMS44IDAgMCAwLS4xOTctLjU5OWwyLjE2NS0yLjIxYy43MjIuODQ3IDEuMTUgMS43MDMgMS4yMTkgMi44MDl6bS0uMjUgMS4xOTlhMS44IDEuOCAwIDAgMCAuMjU4LS43NWgzLjE3OWE1LjE0IDUuMTQgMCAwIDEtMS4yMTkgMy4wMTV6bS0xLjMyLjgzOGMuMzE2LS4wMzYuNjE2LS4xNTYuODctLjM0NmwyLjE5NiAyLjI1Yy0uODExLjczMS0xLjk3MSAxLjE3MS0zLjA2NiAxLjI0OHptLTEuMjg1LS4zNDdjLjI1LjE4Ny41NDMuMzA2Ljg1My4zNDVWMjBjLTEuMDk4LS4wNzUtMi4yNDUtLjUxNS0zLjA1OC0xLjI0OXptLS43MDctMS4yNDJjLjAzLjI3MS4xMTguNTI0LjI1NS43NDVsLTIuMjE3IDIuMjYyYTUuMTQgNS4xNCAwIDAgMS0xLjIzNS0yLjk5OWwuMDA5LS4wMDh6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkJUU19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/BTS
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenBTS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenBTS', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1jps996._.js.map