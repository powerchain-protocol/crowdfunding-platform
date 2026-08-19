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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenTOMI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenTOMI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FF0083',
                d: 'M10.454 3.102c-3.242.6-5.95 3.133-6.948 6.517a8 8 0 0 0-.235 2.43c.022 1.844.41 3.334 1.234 4.677l.491.814 5.371-3.363V21h3.275v-6.73l5.426 3.051s1.364-2.292 1.255-2.385c-.027-.028-1.916-1.196-4.192-2.588l-4.126-2.543-2.79 1.73a35 35 0 0 1-2.964 1.73c-.13 0-.158-.343-.114-1.397.043-1.2.114-1.528.497-2.363a5.84 5.84 0 0 1 9.917-1.376 6.8 6.8 0 0 1 1.277 2.844c.082.42.164.78.18.792l1.36.835 1.32.808.044-1.18c.06-1.615-.163-2.674-.878-4.192a8 8 0 0 0-2.942-3.493 9.16 9.16 0 0 0-6.452-1.44z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M10.454 3.102c-3.242.6-5.95 3.133-6.948 6.517a8 8 0 0 0-.235 2.43c.022 1.844.41 3.334 1.234 4.677l.491.814 5.371-3.363V21h3.275v-6.73l5.426 3.051s1.364-2.292 1.255-2.385c-.027-.028-1.916-1.196-4.192-2.588l-4.126-2.543-2.79 1.73a35 35 0 0 1-2.964 1.73c-.13 0-.158-.343-.114-1.397.043-1.2.114-1.528.497-2.363a5.84 5.84 0 0 1 9.917-1.376 6.8 6.8 0 0 1 1.277 2.844c.082.42.164.78.18.792l1.36.835 1.32.808.044-1.18c.06-1.615-.163-2.674-.878-4.192a8 8 0 0 0-2.942-3.493 9.16 9.16 0 0 0-6.452-1.44z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#TOMI__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FF0083',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M10.626 4.09c-2.882.535-5.289 2.786-6.176 5.794a7.1 7.1 0 0 0-.21 2.159c.02 1.64.365 2.964 1.097 4.158l.437.723 4.774-2.989V20h2.912v-5.982l4.822 2.712s1.213-2.038 1.116-2.12a304 304 0 0 0-3.726-2.3l-3.668-2.261-2.48 1.538a31 31 0 0 1-2.634 1.538c-.116 0-.14-.306-.102-1.242.039-1.068.102-1.359.442-2.101a5.19 5.19 0 0 1 8.816-1.223 6.05 6.05 0 0 1 1.135 2.528c.073.374.145.694.16.704l1.208.742 1.174.718.039-1.048c.053-1.436-.146-2.377-.781-3.726a7.1 7.1 0 0 0-2.615-3.105A8.14 8.14 0 0 0 10.63 4.09z'
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
                        id: 'TOMI__a'
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
 * @component @name TokenTOMI
 * @description Web3Icon for TokenTOMI
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRjAwODMiIGQ9Ik0xMC40NTQgMy4xMDJjLTMuMjQyLjYtNS45NSAzLjEzMy02Ljk0OCA2LjUxN2E4IDggMCAwIDAtLjIzNSAyLjQzYy4wMjIgMS44NDQuNDEgMy4zMzQgMS4yMzQgNC42NzdsLjQ5MS44MTQgNS4zNzEtMy4zNjNWMjFoMy4yNzV2LTYuNzNsNS40MjYgMy4wNTFzMS4zNjQtMi4yOTIgMS4yNTUtMi4zODVjLS4wMjctLjAyOC0xLjkxNi0xLjE5Ni00LjE5Mi0yLjU4OGwtNC4xMjYtMi41NDMtMi43OSAxLjczYTM1IDM1IDAgMCAxLTIuOTY0IDEuNzNjLS4xMyAwLS4xNTgtLjM0My0uMTE0LTEuMzk3LjA0My0xLjIuMTE0LTEuNTI4LjQ5Ny0yLjM2M2E1Ljg0IDUuODQgMCAwIDEgOS45MTctMS4zNzYgNi44IDYuOCAwIDAgMSAxLjI3NyAyLjg0NGMuMDgyLjQyLjE2NC43OC4xOC43OTJsMS4zNi44MzUgMS4zMi44MDguMDQ0LTEuMThjLjA2LTEuNjE1LS4xNjMtMi42NzQtLjg3OC00LjE5MmE4IDggMCAwIDAtMi45NDItMy40OTMgOS4xNiA5LjE2IDAgMCAwLTYuNDUyLTEuNDR6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMC40NTQgMy4xMDJjLTMuMjQyLjYtNS45NSAzLjEzMy02Ljk0OCA2LjUxN2E4IDggMCAwIDAtLjIzNSAyLjQzYy4wMjIgMS44NDQuNDEgMy4zMzQgMS4yMzQgNC42NzdsLjQ5MS44MTQgNS4zNzEtMy4zNjNWMjFoMy4yNzV2LTYuNzNsNS40MjYgMy4wNTFzMS4zNjQtMi4yOTIgMS4yNTUtMi4zODVjLS4wMjctLjAyOC0xLjkxNi0xLjE5Ni00LjE5Mi0yLjU4OGwtNC4xMjYtMi41NDMtMi43OSAxLjczYTM1IDM1IDAgMCAxLTIuOTY0IDEuNzNjLS4xMyAwLS4xNTgtLjM0My0uMTE0LTEuMzk3LjA0My0xLjIuMTE0LTEuNTI4LjQ5Ny0yLjM2M2E1Ljg0IDUuODQgMCAwIDEgOS45MTctMS4zNzYgNi44IDYuOCAwIDAgMSAxLjI3NyAyLjg0NGMuMDgyLjQyLjE2NC43OC4xOC43OTJsMS4zNi44MzUgMS4zMi44MDguMDQ0LTEuMThjLjA2LTEuNjE1LS4xNjMtMi42NzQtLjg3OC00LjE5MmE4IDggMCAwIDAtMi45NDItMy40OTMgOS4xNiA5LjE2IDAgMCAwLTYuNDUyLTEuNDR6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNUT01JX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGMDA4MyIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTAuNjI2IDQuMDljLTIuODgyLjUzNS01LjI4OSAyLjc4Ni02LjE3NiA1Ljc5NGE3LjEgNy4xIDAgMCAwLS4yMSAyLjE1OWMuMDIgMS42NC4zNjUgMi45NjQgMS4wOTcgNC4xNThsLjQzNy43MjMgNC43NzQtMi45ODlWMjBoMi45MTJ2LTUuOTgybDQuODIyIDIuNzEyczEuMjEzLTIuMDM4IDEuMTE2LTIuMTJhMzA0IDMwNCAwIDAgMC0zLjcyNi0yLjNsLTMuNjY4LTIuMjYxLTIuNDggMS41MzhhMzEgMzEgMCAwIDEtMi42MzQgMS41MzhjLS4xMTYgMC0uMTQtLjMwNi0uMTAyLTEuMjQyLjAzOS0xLjA2OC4xMDItMS4zNTkuNDQyLTIuMTAxYTUuMTkgNS4xOSAwIDAgMSA4LjgxNi0xLjIyMyA2LjA1IDYuMDUgMCAwIDEgMS4xMzUgMi41MjhjLjA3My4zNzQuMTQ1LjY5NC4xNi43MDRsMS4yMDguNzQyIDEuMTc0LjcxOC4wMzktMS4wNDhjLjA1My0xLjQzNi0uMTQ2LTIuMzc3LS43ODEtMy43MjZhNy4xIDcuMSAwIDAgMC0yLjYxNS0zLjEwNUE4LjE0IDguMTQgMCAwIDAgMTAuNjMgNC4wOXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iVE9NSV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/TOMI
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenTOMI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenTOMI', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0qrrbl_._.js.map