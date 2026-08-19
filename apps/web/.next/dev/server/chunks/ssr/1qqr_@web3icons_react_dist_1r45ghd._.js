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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenWHITE.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenWHITE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#F1F1F1',
                d: 'M16.5 3.844c-1.125 0-3.094 1.125-4.219 2.812C11.156 4.97 9.75 3.844 7.5 3.844 5.813 3.844 3 4.969 3 8.906s6.75 9 9.281 11.25C14.812 17.906 21 12.844 21 8.906s-2.25-5.062-4.5-5.062'
            }
        ],
        [
            'path',
            {
                fill: '#DFDFDF',
                d: 'M14.08 4.823c.884-.62 1.79-.98 2.42-.98 2.25 0 4.5 1.126 4.5 5.063 0 3.488-4.85 7.853-7.718 10.367 2.734-2.57 6.593-6.564 6.593-9.804 0-3.938-2.183-5.063-4.36-5.063-.394 0-.9.147-1.429.417zm-1.8 1.833C11.157 4.688 9.62 3.844 7.5 3.844c-.974 0-2.318.371-3.285 1.445a4.36 4.36 0 0 1 2.581-.883c2.003 0 3.561 1.423 4.647 2.965.123.18.393.168.495-.029z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M16.5 6.656c0-.9-.748-1.125-1.125-1.125-1.688 0-2.25 2.138-2.25 2.531 0 .563.562.563 1.125.563s2.25-.844 2.25-1.969m-8.117.563c0-.754-.563-1.125-1.125-1.125s-2.25.562-2.531 2.25c-.17 1.023.242 2.222.697 3.032.13.225.433.123.456-.135.152-1.89.877-2.363 1.378-2.616.562-.281 1.125-.563 1.125-1.406'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M16.5 3.844c-1.125 0-3.094 1.125-4.219 2.812C11.156 4.97 9.75 3.844 7.5 3.844 5.812 3.844 3 4.969 3 8.906s6.75 9 9.281 11.25C14.812 17.906 21 12.844 21 8.906s-2.25-5.062-4.5-5.062'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M14.08 4.823c.884-.62 1.79-.98 2.42-.98 2.25 0 4.5 1.126 4.5 5.063 0 3.488-4.85 7.853-7.718 10.367 2.734-2.57 6.593-6.564 6.593-9.804 0-3.938-2.183-5.063-4.36-5.063-.394 0-.9.147-1.429.417zm-1.8 1.833C11.157 4.688 9.62 3.844 7.5 3.844c-.974 0-2.318.371-3.285 1.445a4.36 4.36 0 0 1 2.581-.883c2.003 0 3.561 1.423 4.647 2.965.123.18.393.168.495-.029z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M16.5 6.656c0-.9-.748-1.125-1.125-1.125-1.688 0-2.25 2.138-2.25 2.531 0 .563.562.563 1.125.563s2.25-.844 2.25-1.969m-8.117.563c0-.754-.563-1.125-1.125-1.125s-2.25.562-2.531 2.25c-.17 1.023.242 2.222.697 3.032.13.225.433.123.456-.135.152-1.89.877-2.363 1.378-2.616.562-.281 1.125-.563 1.125-1.406'
            }
        ]
    ],
    background: [
        [
            'path',
            {
                fill: '#F1F1F1',
                d: 'M16 4.75c-1 0-2.75 1-3.75 2.5-1-1.5-2.25-2.5-4.25-2.5-1.5 0-4 1-4 4.5s6 8 8.25 10c2.25-2 7.75-6.5 7.75-10s-2-4.5-4-4.5'
            }
        ],
        [
            'path',
            {
                fill: '#DFDFDF',
                d: 'M13.85 5.62c.784-.55 1.59-.87 2.15-.87 2 0 4 1 4 4.5 0 3.1-4.31 6.98-6.86 9.215C15.57 16.18 19 12.63 19 9.75c0-3.5-1.94-4.5-3.876-4.5-.35 0-.8.13-1.27.37zm-1.6 1.63c-1-1.75-2.365-2.5-4.25-2.5-.865 0-2.06.33-2.92 1.285a3.88 3.88 0 0 1 2.295-.785c1.78 0 3.165 1.265 4.13 2.635.11.16.35.15.44-.025z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M16 7.25c0-.8-.665-1-1-1-1.5 0-2 1.9-2 2.25 0 .5.5.5 1 .5s2-.75 2-1.75m-7.215.5c0-.67-.5-1-1-1s-2 .5-2.25 2c-.15.91.215 1.975.62 2.695.115.2.385.11.405-.12.135-1.68.78-2.1 1.225-2.325.5-.25 1-.5 1-1.25'
            }
        ]
    ]
};
/**
 * @component @name TokenWHITE
 * @description Web3Icon for TokenWHITE
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGMUYxRjEiIGQ9Ik0xNi41IDMuODQ0Yy0xLjEyNSAwLTMuMDk0IDEuMTI1LTQuMjE5IDIuODEyQzExLjE1NiA0Ljk3IDkuNzUgMy44NDQgNy41IDMuODQ0IDUuODEzIDMuODQ0IDMgNC45NjkgMyA4LjkwNnM2Ljc1IDkgOS4yODEgMTEuMjVDMTQuODEyIDE3LjkwNiAyMSAxMi44NDQgMjEgOC45MDZzLTIuMjUtNS4wNjItNC41LTUuMDYyIi8+CiAgICA8cGF0aCBmaWxsPSIjREZERkRGIiBkPSJNMTQuMDggNC44MjNjLjg4NC0uNjIgMS43OS0uOTggMi40Mi0uOTggMi4yNSAwIDQuNSAxLjEyNiA0LjUgNS4wNjMgMCAzLjQ4OC00Ljg1IDcuODUzLTcuNzE4IDEwLjM2NyAyLjczNC0yLjU3IDYuNTkzLTYuNTY0IDYuNTkzLTkuODA0IDAtMy45MzgtMi4xODMtNS4wNjMtNC4zNi01LjA2My0uMzk0IDAtLjkuMTQ3LTEuNDI5LjQxN3ptLTEuOCAxLjgzM0MxMS4xNTcgNC42ODggOS42MiAzLjg0NCA3LjUgMy44NDRjLS45NzQgMC0yLjMxOC4zNzEtMy4yODUgMS40NDVhNC4zNiA0LjM2IDAgMCAxIDIuNTgxLS44ODNjMi4wMDMgMCAzLjU2MSAxLjQyMyA0LjY0NyAyLjk2NS4xMjMuMTguMzkzLjE2OC40OTUtLjAyOXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi41IDYuNjU2YzAtLjktLjc0OC0xLjEyNS0xLjEyNS0xLjEyNS0xLjY4OCAwLTIuMjUgMi4xMzgtMi4yNSAyLjUzMSAwIC41NjMuNTYyLjU2MyAxLjEyNS41NjNzMi4yNS0uODQ0IDIuMjUtMS45NjltLTguMTE3LjU2M2MwLS43NTQtLjU2My0xLjEyNS0xLjEyNS0xLjEyNXMtMi4yNS41NjItMi41MzEgMi4yNWMtLjE3IDEuMDIzLjI0MiAyLjIyMi42OTcgMy4wMzIuMTMuMjI1LjQzMy4xMjMuNDU2LS4xMzUuMTUyLTEuODkuODc3LTIuMzYzIDEuMzc4LTIuNjE2LjU2Mi0uMjgxIDEuMTI1LS41NjMgMS4xMjUtMS40MDYiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi41IDMuODQ0Yy0xLjEyNSAwLTMuMDk0IDEuMTI1LTQuMjE5IDIuODEyQzExLjE1NiA0Ljk3IDkuNzUgMy44NDQgNy41IDMuODQ0IDUuODEyIDMuODQ0IDMgNC45NjkgMyA4LjkwNnM2Ljc1IDkgOS4yODEgMTEuMjVDMTQuODEyIDE3LjkwNiAyMSAxMi44NDQgMjEgOC45MDZzLTIuMjUtNS4wNjItNC41LTUuMDYyIi8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTQuMDggNC44MjNjLjg4NC0uNjIgMS43OS0uOTggMi40Mi0uOTggMi4yNSAwIDQuNSAxLjEyNiA0LjUgNS4wNjMgMCAzLjQ4OC00Ljg1IDcuODUzLTcuNzE4IDEwLjM2NyAyLjczNC0yLjU3IDYuNTkzLTYuNTY0IDYuNTkzLTkuODA0IDAtMy45MzgtMi4xODMtNS4wNjMtNC4zNi01LjA2My0uMzk0IDAtLjkuMTQ3LTEuNDI5LjQxN3ptLTEuOCAxLjgzM0MxMS4xNTcgNC42ODggOS42MiAzLjg0NCA3LjUgMy44NDRjLS45NzQgMC0yLjMxOC4zNzEtMy4yODUgMS40NDVhNC4zNiA0LjM2IDAgMCAxIDIuNTgxLS44ODNjMi4wMDMgMCAzLjU2MSAxLjQyMyA0LjY0NyAyLjk2NS4xMjMuMTguMzkzLjE2OC40OTUtLjAyOXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi41IDYuNjU2YzAtLjktLjc0OC0xLjEyNS0xLjEyNS0xLjEyNS0xLjY4OCAwLTIuMjUgMi4xMzgtMi4yNSAyLjUzMSAwIC41NjMuNTYyLjU2MyAxLjEyNS41NjNzMi4yNS0uODQ0IDIuMjUtMS45NjltLTguMTE3LjU2M2MwLS43NTQtLjU2My0xLjEyNS0xLjEyNS0xLjEyNXMtMi4yNS41NjItMi41MzEgMi4yNWMtLjE3IDEuMDIzLjI0MiAyLjIyMi42OTcgMy4wMzIuMTMuMjI1LjQzMy4xMjMuNDU2LS4xMzUuMTUyLTEuODkuODc3LTIuMzYzIDEuMzc4LTIuNjE2LjU2Mi0uMjgxIDEuMTI1LS41NjMgMS4xMjUtMS40MDYiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGMUYxRjEiIGQ9Ik0xNiA0Ljc1Yy0xIDAtMi43NSAxLTMuNzUgMi41LTEtMS41LTIuMjUtMi41LTQuMjUtMi41LTEuNSAwLTQgMS00IDQuNXM2IDggOC4yNSAxMGMyLjI1LTIgNy43NS02LjUgNy43NS0xMHMtMi00LjUtNC00LjUiLz4KICAgIDxwYXRoIGZpbGw9IiNERkRGREYiIGQ9Ik0xMy44NSA1LjYyYy43ODQtLjU1IDEuNTktLjg3IDIuMTUtLjg3IDIgMCA0IDEgNCA0LjUgMCAzLjEtNC4zMSA2Ljk4LTYuODYgOS4yMTVDMTUuNTcgMTYuMTggMTkgMTIuNjMgMTkgOS43NWMwLTMuNS0xLjk0LTQuNS0zLjg3Ni00LjUtLjM1IDAtLjguMTMtMS4yNy4zN3ptLTEuNiAxLjYzYy0xLTEuNzUtMi4zNjUtMi41LTQuMjUtMi41LS44NjUgMC0yLjA2LjMzLTIuOTIgMS4yODVhMy44OCAzLjg4IDAgMCAxIDIuMjk1LS43ODVjMS43OCAwIDMuMTY1IDEuMjY1IDQuMTMgMi42MzUuMTEuMTYuMzUuMTUuNDQtLjAyNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNiA3LjI1YzAtLjgtLjY2NS0xLTEtMS0xLjUgMC0yIDEuOS0yIDIuMjUgMCAuNS41LjUgMSAuNXMyLS43NSAyLTEuNzVtLTcuMjE1LjVjMC0uNjctLjUtMS0xLTFzLTIgLjUtMi4yNSAyYy0uMTUuOTEuMjE1IDEuOTc1LjYyIDIuNjk1LjExNS4yLjM4NS4xMS40MDUtLjEyLjEzNS0xLjY4Ljc4LTIuMSAxLjIyNS0yLjMyNS41LS4yNSAxLS41IDEtMS4yNSIvPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/WHITE
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenWHITE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenWHITE', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1r45ghd._.js.map