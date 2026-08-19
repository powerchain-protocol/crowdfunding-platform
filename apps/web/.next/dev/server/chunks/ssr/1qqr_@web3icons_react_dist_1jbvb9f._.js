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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenRBD.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenRBD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#C4171D',
                d: 'M3 21v-4.2h5.682L11.4 21zm0-10.8v3.6h7.578c.48 0 1.422-.3 1.422-1.8s-.948-1.8-1.422-1.8z'
            }
        ],
        [
            'path',
            {
                fill: '#000',
                d: 'M3 3h13.83C18.72 3 21 4.014 21 6.204v3.138c0 1.056-.588 1.986-1.44 2.574 1.128.54 1.44 1.818 1.44 2.502v3.378c0 2.142-2.88 3.203-4.65 3.203h-1.128l-3.276-4.913.51-.042c1.92-.156 2.622-2.412 2.622-4.044 0-2.106-1.152-4.8-3.564-4.8H3zm.606.606V6.6h7.914c2.754 0 4.17 2.958 4.17 5.406 0 1.782-.744 4.092-2.688 4.572l2.55 3.822h.804c1.416 0 4.044-.828 4.044-2.598v-3.378c0-1.008-.624-1.98-1.668-2.118l-.072-.582c.972-.366 1.74-1.32 1.74-2.376V6.21c0-1.842-2.022-2.598-3.564-2.598H3.606z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3 21v-4.2h5.682L11.4 21zm0-10.8v3.6h7.578c.48 0 1.422-.3 1.422-1.8s-.948-1.8-1.422-1.8z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3 3h13.83C18.72 3 21 4.014 21 6.204v3.138c0 1.056-.588 1.986-1.44 2.574 1.128.54 1.44 1.818 1.44 2.502v3.378c0 2.142-2.88 3.203-4.65 3.203h-1.128l-3.276-4.913.51-.042c1.92-.156 2.622-2.412 2.622-4.044 0-2.106-1.152-4.8-3.564-4.8H3zm.606.606V6.6h7.914c2.754 0 4.17 2.958 4.17 5.406 0 1.782-.744 4.092-2.688 4.572l2.55 3.822h.804c1.416 0 4.044-.829 4.044-2.599v-3.377c0-1.008-.624-1.98-1.668-2.118l-.072-.582c.972-.366 1.74-1.32 1.74-2.376V6.21c0-1.842-2.022-2.598-3.564-2.598H3.606z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#RBD__a)'
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
                        d: 'M4 20v-3.733h5.051L11.467 20zm0-9.6v3.2h6.736c.427 0 1.264-.266 1.264-1.6 0-1.333-.842-1.6-1.264-1.6z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4 4h12.294C17.974 4 20 4.901 20 6.848v2.79c0 .938-.523 1.765-1.28 2.287 1.003.48 1.28 1.616 1.28 2.224v3.003C20 19.056 17.44 20 15.867 20h-1.003l-2.912-4.368.454-.038c1.706-.138 2.33-2.144 2.33-3.594 0-1.872-1.024-4.267-3.168-4.267H4zm.54.539v2.66h7.034c2.448 0 3.706 2.63 3.706 4.806 0 1.584-.661 3.637-2.39 4.064l2.268 3.397h.714c1.259 0 3.595-.736 3.595-2.31v-3.002c0-.896-.555-1.76-1.483-1.882l-.064-.518c.864-.325 1.547-1.173 1.547-2.111v-2.79c0-1.637-1.798-2.309-3.168-2.309H4.539z'
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
                        id: 'RBD__a'
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
 * @component @name TokenRBD
 * @description Web3Icon for TokenRBD
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNDNDE3MUQiIGQ9Ik0zIDIxdi00LjJoNS42ODJMMTEuNCAyMXptMC0xMC44djMuNmg3LjU3OGMuNDggMCAxLjQyMi0uMyAxLjQyMi0xLjhzLS45NDgtMS44LTEuNDIyLTEuOHoiLz4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0zIDNoMTMuODNDMTguNzIgMyAyMSA0LjAxNCAyMSA2LjIwNHYzLjEzOGMwIDEuMDU2LS41ODggMS45ODYtMS40NCAyLjU3NCAxLjEyOC41NCAxLjQ0IDEuODE4IDEuNDQgMi41MDJ2My4zNzhjMCAyLjE0Mi0yLjg4IDMuMjAzLTQuNjUgMy4yMDNoLTEuMTI4bC0zLjI3Ni00LjkxMy41MS0uMDQyYzEuOTItLjE1NiAyLjYyMi0yLjQxMiAyLjYyMi00LjA0NCAwLTIuMTA2LTEuMTUyLTQuOC0zLjU2NC00LjhIM3ptLjYwNi42MDZWNi42aDcuOTE0YzIuNzU0IDAgNC4xNyAyLjk1OCA0LjE3IDUuNDA2IDAgMS43ODItLjc0NCA0LjA5Mi0yLjY4OCA0LjU3MmwyLjU1IDMuODIyaC44MDRjMS40MTYgMCA0LjA0NC0uODI4IDQuMDQ0LTIuNTk4di0zLjM3OGMwLTEuMDA4LS42MjQtMS45OC0xLjY2OC0yLjExOGwtLjA3Mi0uNTgyYy45NzItLjM2NiAxLjc0LTEuMzIgMS43NC0yLjM3NlY2LjIxYzAtMS44NDItMi4wMjItMi41OTgtMy41NjQtMi41OThIMy42MDZ6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zIDIxdi00LjJoNS42ODJMMTEuNCAyMXptMC0xMC44djMuNmg3LjU3OGMuNDggMCAxLjQyMi0uMyAxLjQyMi0xLjhzLS45NDgtMS44LTEuNDIyLTEuOHoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zIDNoMTMuODNDMTguNzIgMyAyMSA0LjAxNCAyMSA2LjIwNHYzLjEzOGMwIDEuMDU2LS41ODggMS45ODYtMS40NCAyLjU3NCAxLjEyOC41NCAxLjQ0IDEuODE4IDEuNDQgMi41MDJ2My4zNzhjMCAyLjE0Mi0yLjg4IDMuMjAzLTQuNjUgMy4yMDNoLTEuMTI4bC0zLjI3Ni00LjkxMy41MS0uMDQyYzEuOTItLjE1NiAyLjYyMi0yLjQxMiAyLjYyMi00LjA0NCAwLTIuMTA2LTEuMTUyLTQuOC0zLjU2NC00LjhIM3ptLjYwNi42MDZWNi42aDcuOTE0YzIuNzU0IDAgNC4xNyAyLjk1OCA0LjE3IDUuNDA2IDAgMS43ODItLjc0NCA0LjA5Mi0yLjY4OCA0LjU3MmwyLjU1IDMuODIyaC44MDRjMS40MTYgMCA0LjA0NC0uODI5IDQuMDQ0LTIuNTk5di0zLjM3N2MwLTEuMDA4LS42MjQtMS45OC0xLjY2OC0yLjExOGwtLjA3Mi0uNTgyYy45NzItLjM2NiAxLjc0LTEuMzIgMS43NC0yLjM3NlY2LjIxYzAtMS44NDItMi4wMjItMi41OTgtMy41NjQtMi41OThIMy42MDZ6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNSQkRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00IDIwdi0zLjczM2g1LjA1MUwxMS40NjcgMjB6bTAtOS42djMuMmg2LjczNmMuNDI3IDAgMS4yNjQtLjI2NiAxLjI2NC0xLjYgMC0xLjMzMy0uODQyLTEuNi0xLjI2NC0xLjZ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQgNGgxMi4yOTRDMTcuOTc0IDQgMjAgNC45MDEgMjAgNi44NDh2Mi43OWMwIC45MzgtLjUyMyAxLjc2NS0xLjI4IDIuMjg3IDEuMDAzLjQ4IDEuMjggMS42MTYgMS4yOCAyLjIyNHYzLjAwM0MyMCAxOS4wNTYgMTcuNDQgMjAgMTUuODY3IDIwaC0xLjAwM2wtMi45MTItNC4zNjguNDU0LS4wMzhjMS43MDYtLjEzOCAyLjMzLTIuMTQ0IDIuMzMtMy41OTQgMC0xLjg3Mi0xLjAyNC00LjI2Ny0zLjE2OC00LjI2N0g0em0uNTQuNTM5djIuNjZoNy4wMzRjMi40NDggMCAzLjcwNiAyLjYzIDMuNzA2IDQuODA2IDAgMS41ODQtLjY2MSAzLjYzNy0yLjM5IDQuMDY0bDIuMjY4IDMuMzk3aC43MTRjMS4yNTkgMCAzLjU5NS0uNzM2IDMuNTk1LTIuMzF2LTMuMDAyYzAtLjg5Ni0uNTU1LTEuNzYtMS40ODMtMS44ODJsLS4wNjQtLjUxOGMuODY0LS4zMjUgMS41NDctMS4xNzMgMS41NDctMi4xMTF2LTIuNzljMC0xLjYzNy0xLjc5OC0yLjMwOS0zLjE2OC0yLjMwOUg0LjUzOXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iUkJEX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/RBD
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenRBD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenRBD', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1jbvb9f._.js.map