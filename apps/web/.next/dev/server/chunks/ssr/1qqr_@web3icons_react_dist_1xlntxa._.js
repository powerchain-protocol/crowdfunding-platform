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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/wallets/WalletSolflare.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>WalletSolflare
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FFEF46',
                d: 'm12.063 12.715 1.245-1.199 2.32.757c1.518.505 2.278 1.43 2.278 2.734 0 .988-.38 1.64-1.14 2.481l-.231.253.084-.59c.337-2.144-.295-3.07-2.383-3.742zM8.942 5.376l6.327 2.103-1.37 1.304-3.291-1.094c-1.139-.378-1.519-.988-1.666-2.27zm-.38 10.682 1.434-1.367 2.7.884c1.413.462 1.898 1.072 1.75 2.607zM6.748 9.96c0-.4.211-.778.57-1.093.38.547 1.033 1.03 2.067 1.367l2.235.736-1.244 1.198-2.194-.715c-1.012-.336-1.434-.84-1.434-1.493M13.371 21c4.64-3.07 7.129-5.152 7.129-7.717 0-1.704-1.012-2.65-3.248-3.386l-1.687-.568 4.619-4.415-.928-.989-1.371 1.199L11.409 3c-2.003.652-4.534 2.565-4.534 4.479 0 .21.02.42.084.652-1.666.946-2.341 1.83-2.341 2.923 0 1.03.548 2.06 2.299 2.628l1.392.463L3.5 18.75l.928.988 1.498-1.366z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm12.063 12.715 1.245-1.199 2.32.757c1.518.505 2.278 1.43 2.278 2.734 0 .988-.38 1.64-1.14 2.481l-.231.253.084-.59c.337-2.144-.295-3.07-2.383-3.742zM8.942 5.376l6.327 2.103-1.37 1.304-3.291-1.094c-1.139-.378-1.519-.988-1.666-2.27zm-.38 10.682 1.434-1.367 2.7.884c1.413.462 1.898 1.072 1.75 2.607zM6.748 9.96c0-.4.211-.778.57-1.093.38.547 1.033 1.03 2.067 1.367l2.235.736-1.244 1.198-2.194-.715c-1.012-.336-1.434-.84-1.434-1.493M13.371 21c4.64-3.07 7.129-5.152 7.129-7.717 0-1.704-1.012-2.65-3.248-3.386l-1.687-.568 4.619-4.415-.928-.989-1.371 1.199L11.409 3c-2.003.652-4.534 2.565-4.534 4.479 0 .21.02.42.084.652-1.666.946-2.341 1.83-2.341 2.923 0 1.03.548 2.06 2.299 2.628l1.392.463L3.5 18.75l.928.988 1.498-1.366z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#solflare__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FFEF46',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#02050A',
                        d: 'm12.056 12.636 1.098-1.066 2.047.673c1.34.449 2.01 1.271 2.01 2.43 0 .878-.335 1.458-1.005 2.205l-.205.225.075-.524c.297-1.906-.26-2.729-2.103-3.327zM9.3 6.112l5.584 1.87-1.21 1.158-2.903-.972c-1.005-.336-1.34-.878-1.47-2.018zm-.335 9.496 1.266-1.216 2.382.786c1.247.41 1.675.953 1.545 2.317zm-1.6-5.421c0-.355.186-.692.502-.972.335.486.912.916 1.824 1.215l1.973.654-1.098 1.066-1.935-.636c-.894-.299-1.266-.748-1.266-1.327M13.21 20c4.094-2.729 6.29-4.58 6.29-6.86 0-1.514-.893-2.355-2.866-3.01l-1.489-.504 4.076-3.925-.819-.879-1.21 1.066L11.48 4c-1.768.58-4.001 2.28-4.001 3.981 0 .187.018.374.074.58-1.47.84-2.066 1.626-2.066 2.598 0 .916.484 1.832 2.029 2.336l1.228.412L4.5 18l.819.878 1.321-1.214z'
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
                        id: 'solflare__a'
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
 * @component @name WalletSolflare
 * @description Web3Icon for WalletSolflare
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRkVGNDYiIGQ9Im0xMi4wNjMgMTIuNzE1IDEuMjQ1LTEuMTk5IDIuMzIuNzU3YzEuNTE4LjUwNSAyLjI3OCAxLjQzIDIuMjc4IDIuNzM0IDAgLjk4OC0uMzggMS42NC0xLjE0IDIuNDgxbC0uMjMxLjI1My4wODQtLjU5Yy4zMzctMi4xNDQtLjI5NS0zLjA3LTIuMzgzLTMuNzQyek04Ljk0MiA1LjM3Nmw2LjMyNyAyLjEwMy0xLjM3IDEuMzA0LTMuMjkxLTEuMDk0Yy0xLjEzOS0uMzc4LTEuNTE5LS45ODgtMS42NjYtMi4yN3ptLS4zOCAxMC42ODIgMS40MzQtMS4zNjcgMi43Ljg4NGMxLjQxMy40NjIgMS44OTggMS4wNzIgMS43NSAyLjYwN3pNNi43NDggOS45NmMwLS40LjIxMS0uNzc4LjU3LTEuMDkzLjM4LjU0NyAxLjAzMyAxLjAzIDIuMDY3IDEuMzY3bDIuMjM1LjczNi0xLjI0NCAxLjE5OC0yLjE5NC0uNzE1Yy0xLjAxMi0uMzM2LTEuNDM0LS44NC0xLjQzNC0xLjQ5M00xMy4zNzEgMjFjNC42NC0zLjA3IDcuMTI5LTUuMTUyIDcuMTI5LTcuNzE3IDAtMS43MDQtMS4wMTItMi42NS0zLjI0OC0zLjM4NmwtMS42ODctLjU2OCA0LjYxOS00LjQxNS0uOTI4LS45ODktMS4zNzEgMS4xOTlMMTEuNDA5IDNjLTIuMDAzLjY1Mi00LjUzNCAyLjU2NS00LjUzNCA0LjQ3OSAwIC4yMS4wMi40Mi4wODQuNjUyLTEuNjY2Ljk0Ni0yLjM0MSAxLjgzLTIuMzQxIDIuOTIzIDAgMS4wMy41NDggMi4wNiAyLjI5OSAyLjYyOGwxLjM5Mi40NjNMMy41IDE4Ljc1bC45MjguOTg4IDEuNDk4LTEuMzY2eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMi4wNjMgMTIuNzE1IDEuMjQ1LTEuMTk5IDIuMzIuNzU3YzEuNTE4LjUwNSAyLjI3OCAxLjQzIDIuMjc4IDIuNzM0IDAgLjk4OC0uMzggMS42NC0xLjE0IDIuNDgxbC0uMjMxLjI1My4wODQtLjU5Yy4zMzctMi4xNDQtLjI5NS0zLjA3LTIuMzgzLTMuNzQyek04Ljk0MiA1LjM3Nmw2LjMyNyAyLjEwMy0xLjM3IDEuMzA0LTMuMjkxLTEuMDk0Yy0xLjEzOS0uMzc4LTEuNTE5LS45ODgtMS42NjYtMi4yN3ptLS4zOCAxMC42ODIgMS40MzQtMS4zNjcgMi43Ljg4NGMxLjQxMy40NjIgMS44OTggMS4wNzIgMS43NSAyLjYwN3pNNi43NDggOS45NmMwLS40LjIxMS0uNzc4LjU3LTEuMDkzLjM4LjU0NyAxLjAzMyAxLjAzIDIuMDY3IDEuMzY3bDIuMjM1LjczNi0xLjI0NCAxLjE5OC0yLjE5NC0uNzE1Yy0xLjAxMi0uMzM2LTEuNDM0LS44NC0xLjQzNC0xLjQ5M00xMy4zNzEgMjFjNC42NC0zLjA3IDcuMTI5LTUuMTUyIDcuMTI5LTcuNzE3IDAtMS43MDQtMS4wMTItMi42NS0zLjI0OC0zLjM4NmwtMS42ODctLjU2OCA0LjYxOS00LjQxNS0uOTI4LS45ODktMS4zNzEgMS4xOTlMMTEuNDA5IDNjLTIuMDAzLjY1Mi00LjUzNCAyLjU2NS00LjUzNCA0LjQ3OSAwIC4yMS4wMi40Mi4wODQuNjUyLTEuNjY2Ljk0Ni0yLjM0MSAxLjgzLTIuMzQxIDIuOTIzIDAgMS4wMy41NDggMi4wNiAyLjI5OSAyLjYyOGwxLjM5Mi40NjNMMy41IDE4Ljc1bC45MjguOTg4IDEuNDk4LTEuMzY2eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNzb2xmbGFyZV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkVGNDYiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAyMDUwQSIgZD0ibTEyLjA1NiAxMi42MzYgMS4wOTgtMS4wNjYgMi4wNDcuNjczYzEuMzQuNDQ5IDIuMDEgMS4yNzEgMi4wMSAyLjQzIDAgLjg3OC0uMzM1IDEuNDU4LTEuMDA1IDIuMjA1bC0uMjA1LjIyNS4wNzUtLjUyNGMuMjk3LTEuOTA2LS4yNi0yLjcyOS0yLjEwMy0zLjMyN3pNOS4zIDYuMTEybDUuNTg0IDEuODctMS4yMSAxLjE1OC0yLjkwMy0uOTcyYy0xLjAwNS0uMzM2LTEuMzQtLjg3OC0xLjQ3LTIuMDE4em0tLjMzNSA5LjQ5NiAxLjI2Ni0xLjIxNiAyLjM4Mi43ODZjMS4yNDcuNDEgMS42NzUuOTUzIDEuNTQ1IDIuMzE3em0tMS42LTUuNDIxYzAtLjM1NS4xODYtLjY5Mi41MDItLjk3Mi4zMzUuNDg2LjkxMi45MTYgMS44MjQgMS4yMTVsMS45NzMuNjU0LTEuMDk4IDEuMDY2LTEuOTM1LS42MzZjLS44OTQtLjI5OS0xLjI2Ni0uNzQ4LTEuMjY2LTEuMzI3TTEzLjIxIDIwYzQuMDk0LTIuNzI5IDYuMjktNC41OCA2LjI5LTYuODYgMC0xLjUxNC0uODkzLTIuMzU1LTIuODY2LTMuMDFsLTEuNDg5LS41MDQgNC4wNzYtMy45MjUtLjgxOS0uODc5LTEuMjEgMS4wNjZMMTEuNDggNGMtMS43NjguNTgtNC4wMDEgMi4yOC00LjAwMSAzLjk4MSAwIC4xODcuMDE4LjM3NC4wNzQuNTgtMS40Ny44NC0yLjA2NiAxLjYyNi0yLjA2NiAyLjU5OCAwIC45MTYuNDg0IDEuODMyIDIuMDI5IDIuMzM2bDEuMjI4LjQxMkw0LjUgMThsLjgxOS44NzggMS4zMjEtMS4yMTR6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9InNvbGZsYXJlX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/wallets/solflare
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const WalletSolflare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('WalletSolflare', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1xlntxa._.js.map