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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDCR.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDCR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#2970FF',
                d: 'M10.917 13.634h4.452c1.592-.01 2.997-1.295 2.992-2.918.005-1.623-1.4-3.206-2.992-3.216h-1.42l-3.032-2.25h4.452a5.77 5.77 0 0 1 3.58 1.252 5.4 5.4 0 0 1 1.94 3.164 5.3 5.3 0 0 1-.566 3.653 5.6 5.6 0 0 1-2.839 2.474L21 18.75h-4.03z'
            }
        ],
        [
            'path',
            {
                fill: '#2970FF',
                d: 'M8.64 10.313h4.433L7.03 5.25H3l3.516 2.956a5.6 5.6 0 0 0-2.835 2.472c-1.27 2.28-.659 5.195 1.371 6.819a5.76 5.76 0 0 0 3.589 1.253h4.442L10.05 16.5H8.64c-2.024-.007-3.601-2.389-2.777-4.33.449-1.055 1.619-1.854 2.777-1.857'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M10.917 13.634h4.452c1.592-.01 2.997-1.295 2.992-2.918.005-1.623-1.4-3.206-2.992-3.216h-1.42l-3.032-2.25h4.452a5.77 5.77 0 0 1 3.58 1.252 5.4 5.4 0 0 1 1.94 3.164 5.3 5.3 0 0 1-.566 3.653 5.6 5.6 0 0 1-2.839 2.474L21 18.75h-4.03z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M8.64 10.313h4.433L7.03 5.25H3l3.516 2.956a5.6 5.6 0 0 0-2.835 2.472c-1.27 2.28-.659 5.195 1.371 6.819a5.76 5.76 0 0 0 3.589 1.253h4.442L10.05 16.5H8.64c-2.024-.007-3.601-2.389-2.777-4.33.449-1.055 1.619-1.854 2.777-1.857'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#DCR__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#2970FF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.038 13.453h3.957c1.415-.01 2.664-1.151 2.659-2.594.005-1.443-1.244-2.85-2.659-2.859h-1.262l-2.695-2h3.957a5.13 5.13 0 0 1 3.182 1.113 4.8 4.8 0 0 1 1.724 2.812 4.72 4.72 0 0 1-.503 3.247 5 5 0 0 1-2.523 2.2L20 18h-3.58z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M9.014 10.5h3.94L7.58 6H4l3.125 2.628a4.98 4.98 0 0 0-2.52 2.197c-1.129 2.027-.585 4.617 1.219 6.06A5.12 5.12 0 0 0 9.014 18h3.949l-2.695-2H9.014c-1.799-.006-3.201-2.123-2.468-3.848.398-.938 1.438-1.649 2.468-1.652'
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
                        id: 'DCR__a'
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
 * @component @name TokenDCR
 * @description Web3Icon for TokenDCR
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMyOTcwRkYiIGQ9Ik0xMC45MTcgMTMuNjM0aDQuNDUyYzEuNTkyLS4wMSAyLjk5Ny0xLjI5NSAyLjk5Mi0yLjkxOC4wMDUtMS42MjMtMS40LTMuMjA2LTIuOTkyLTMuMjE2aC0xLjQybC0zLjAzMi0yLjI1aDQuNDUyYTUuNzcgNS43NyAwIDAgMSAzLjU4IDEuMjUyIDUuNCA1LjQgMCAwIDEgMS45NCAzLjE2NCA1LjMgNS4zIDAgMCAxLS41NjYgMy42NTMgNS42IDUuNiAwIDAgMS0yLjgzOSAyLjQ3NEwyMSAxOC43NWgtNC4wM3oiLz4KICAgIDxwYXRoIGZpbGw9IiMyOTcwRkYiIGQ9Ik04LjY0IDEwLjMxM2g0LjQzM0w3LjAzIDUuMjVIM2wzLjUxNiAyLjk1NmE1LjYgNS42IDAgMCAwLTIuODM1IDIuNDcyYy0xLjI3IDIuMjgtLjY1OSA1LjE5NSAxLjM3MSA2LjgxOWE1Ljc2IDUuNzYgMCAwIDAgMy41ODkgMS4yNTNoNC40NDJMMTAuMDUgMTYuNUg4LjY0Yy0yLjAyNC0uMDA3LTMuNjAxLTIuMzg5LTIuNzc3LTQuMzMuNDQ5LTEuMDU1IDEuNjE5LTEuODU0IDIuNzc3LTEuODU3Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMC45MTcgMTMuNjM0aDQuNDUyYzEuNTkyLS4wMSAyLjk5Ny0xLjI5NSAyLjk5Mi0yLjkxOC4wMDUtMS42MjMtMS40LTMuMjA2LTIuOTkyLTMuMjE2aC0xLjQybC0zLjAzMi0yLjI1aDQuNDUyYTUuNzcgNS43NyAwIDAgMSAzLjU4IDEuMjUyIDUuNCA1LjQgMCAwIDEgMS45NCAzLjE2NCA1LjMgNS4zIDAgMCAxLS41NjYgMy42NTMgNS42IDUuNiAwIDAgMS0yLjgzOSAyLjQ3NEwyMSAxOC43NWgtNC4wM3oiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04LjY0IDEwLjMxM2g0LjQzM0w3LjAzIDUuMjVIM2wzLjUxNiAyLjk1NmE1LjYgNS42IDAgMCAwLTIuODM1IDIuNDcyYy0xLjI3IDIuMjgtLjY1OSA1LjE5NSAxLjM3MSA2LjgxOWE1Ljc2IDUuNzYgMCAwIDAgMy41ODkgMS4yNTNoNC40NDJMMTAuMDUgMTYuNUg4LjY0Yy0yLjAyNC0uMDA3LTMuNjAxLTIuMzg5LTIuNzc3LTQuMzMuNDQ5LTEuMDU1IDEuNjE5LTEuODU0IDIuNzc3LTEuODU3Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNEQ1JfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMjk3MEZGIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS4wMzggMTMuNDUzaDMuOTU3YzEuNDE1LS4wMSAyLjY2NC0xLjE1MSAyLjY1OS0yLjU5NC4wMDUtMS40NDMtMS4yNDQtMi44NS0yLjY1OS0yLjg1OWgtMS4yNjJsLTIuNjk1LTJoMy45NTdhNS4xMyA1LjEzIDAgMCAxIDMuMTgyIDEuMTEzIDQuOCA0LjggMCAwIDEgMS43MjQgMi44MTIgNC43MiA0LjcyIDAgMCAxLS41MDMgMy4yNDcgNSA1IDAgMCAxLTIuNTIzIDIuMkwyMCAxOGgtMy41OHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNOS4wMTQgMTAuNWgzLjk0TDcuNTggNkg0bDMuMTI1IDIuNjI4YTQuOTggNC45OCAwIDAgMC0yLjUyIDIuMTk3Yy0xLjEyOSAyLjAyNy0uNTg1IDQuNjE3IDEuMjE5IDYuMDZBNS4xMiA1LjEyIDAgMCAwIDkuMDE0IDE4aDMuOTQ5bC0yLjY5NS0ySDkuMDE0Yy0xLjc5OS0uMDA2LTMuMjAxLTIuMTIzLTIuNDY4LTMuODQ4LjM5OC0uOTM4IDEuNDM4LTEuNjQ5IDIuNDY4LTEuNjUyIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkRDUl9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/DCR
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDCR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDCR', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0_eaqt8._.js.map