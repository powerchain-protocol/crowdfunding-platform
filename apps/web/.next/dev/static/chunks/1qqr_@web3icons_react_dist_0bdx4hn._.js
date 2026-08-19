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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenBIT.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenBIT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#ACFE00',
                d: 'M3 4.8v14.4h6.012c1.386-.15 2.22-1.26 2.388-2.598v-3.264c-.06-.93-.54-1.638-1.44-1.902v-.168c.528-.192.732-.606.84-1.14V7.332c0-1.35-1.05-2.532-2.394-2.532zm9.6 0v1.8h1.8V4.8zm4.2 0V9h-4.2v10.2h1.8v-8.4h2.4v8.4H21v-1.8h-2.4v-6.6H21V9h-2.4V4.8zM8.106 6.6c.438.108.846.486.894.936v2.598c-.084.408-.492.588-.912.666H4.8V6.6zm.69 6c.408.102.744.324.804.738v3.174c-.066.438-.378.78-.804.888H4.8v-4.8z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3 4.8v14.4h6.012c1.386-.15 2.22-1.26 2.388-2.598v-3.264c-.06-.93-.54-1.638-1.44-1.902v-.168c.528-.192.732-.606.84-1.14V7.332c0-1.35-1.05-2.532-2.394-2.532zm9.6 0v1.8h1.8V4.8zm4.2 0V9h-4.2v10.2h1.8v-8.4h2.4v8.4H21v-1.8h-2.4v-6.6H21V9h-2.4V4.8zM8.106 6.6c.438.108.846.486.894.936v2.598c-.084.408-.492.588-.912.666H4.8V6.6zm.69 6c.408.102.744.324.804.738v3.174c-.066.438-.378.78-.804.888H4.8v-4.8z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#BIT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#ACFE00',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4 5.6v12.8h5.344c1.232-.134 1.973-1.12 2.123-2.31v-2.9c-.054-.827-.48-1.457-1.28-1.691v-.15c.47-.17.65-.539.746-1.013V7.85c0-1.2-.933-2.251-2.128-2.251zm8.533 0v1.6h1.6V5.6zm3.734 0v3.733h-3.734V18.4h1.6v-7.467h2.134V18.4H20v-1.6h-2.133v-5.867H20v-1.6h-2.133V5.6zM8.539 7.2c.389.096.752.432.794.832v2.31c-.074.362-.437.522-.81.591H5.6V7.2zm.613 5.333c.363.09.661.288.715.656v2.822a.95.95 0 0 1-.715.789H5.6v-4.267z'
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
                        id: 'BIT__a'
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
 * @component @name TokenBIT
 * @description Web3Icon for TokenBIT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNBQ0ZFMDAiIGQ9Ik0zIDQuOHYxNC40aDYuMDEyYzEuMzg2LS4xNSAyLjIyLTEuMjYgMi4zODgtMi41OTh2LTMuMjY0Yy0uMDYtLjkzLS41NC0xLjYzOC0xLjQ0LTEuOTAydi0uMTY4Yy41MjgtLjE5Mi43MzItLjYwNi44NC0xLjE0VjcuMzMyYzAtMS4zNS0xLjA1LTIuNTMyLTIuMzk0LTIuNTMyem05LjYgMHYxLjhoMS44VjQuOHptNC4yIDBWOWgtNC4ydjEwLjJoMS44di04LjRoMi40djguNEgyMXYtMS44aC0yLjR2LTYuNkgyMVY5aC0yLjRWNC44ek04LjEwNiA2LjZjLjQzOC4xMDguODQ2LjQ4Ni44OTQuOTM2djIuNTk4Yy0uMDg0LjQwOC0uNDkyLjU4OC0uOTEyLjY2Nkg0LjhWNi42em0uNjkgNmMuNDA4LjEwMi43NDQuMzI0LjgwNC43Mzh2My4xNzRjLS4wNjYuNDM4LS4zNzguNzgtLjgwNC44ODhINC44di00Ljh6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zIDQuOHYxNC40aDYuMDEyYzEuMzg2LS4xNSAyLjIyLTEuMjYgMi4zODgtMi41OTh2LTMuMjY0Yy0uMDYtLjkzLS41NC0xLjYzOC0xLjQ0LTEuOTAydi0uMTY4Yy41MjgtLjE5Mi43MzItLjYwNi44NC0xLjE0VjcuMzMyYzAtMS4zNS0xLjA1LTIuNTMyLTIuMzk0LTIuNTMyem05LjYgMHYxLjhoMS44VjQuOHptNC4yIDBWOWgtNC4ydjEwLjJoMS44di04LjRoMi40djguNEgyMXYtMS44aC0yLjR2LTYuNkgyMVY5aC0yLjRWNC44ek04LjEwNiA2LjZjLjQzOC4xMDguODQ2LjQ4Ni44OTQuOTM2djIuNTk4Yy0uMDg0LjQwOC0uNDkyLjU4OC0uOTEyLjY2Nkg0LjhWNi42em0uNjkgNmMuNDA4LjEwMi43NDQuMzI0LjgwNC43Mzh2My4xNzRjLS4wNjYuNDM4LS4zNzguNzgtLjgwNC44ODhINC44di00Ljh6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNCSVRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjQUNGRTAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00IDUuNnYxMi44aDUuMzQ0YzEuMjMyLS4xMzQgMS45NzMtMS4xMiAyLjEyMy0yLjMxdi0yLjljLS4wNTQtLjgyNy0uNDgtMS40NTctMS4yOC0xLjY5MXYtLjE1Yy40Ny0uMTcuNjUtLjUzOS43NDYtMS4wMTNWNy44NWMwLTEuMi0uOTMzLTIuMjUxLTIuMTI4LTIuMjUxem04LjUzMyAwdjEuNmgxLjZWNS42em0zLjczNCAwdjMuNzMzaC0zLjczNFYxOC40aDEuNnYtNy40NjdoMi4xMzRWMTguNEgyMHYtMS42aC0yLjEzM3YtNS44NjdIMjB2LTEuNmgtMi4xMzNWNS42ek04LjUzOSA3LjJjLjM4OS4wOTYuNzUyLjQzMi43OTQuODMydjIuMzFjLS4wNzQuMzYyLS40MzcuNTIyLS44MS41OTFINS42VjcuMnptLjYxMyA1LjMzM2MuMzYzLjA5LjY2MS4yODguNzE1LjY1NnYyLjgyMmEuOTUuOTUgMCAwIDEtLjcxNS43ODlINS42di00LjI2N3oiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQklUX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/BIT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenBIT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenBIT', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0bdx4hn._.js.map