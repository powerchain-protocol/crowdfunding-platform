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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCRPT.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCRPT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#2992FB',
                d: 'M17.178 6.885a6.35 6.35 0 0 0-4.14-1.515 6.57 6.57 0 0 0-6.495 6.18h-.675a7.22 7.22 0 0 1 7.17-6.87c1.688 0 3.301.622 4.613 1.725zm-.232 2.265a4.8 4.8 0 0 0-3.9-2.025A4.853 4.853 0 0 0 8.23 12a4.86 4.86 0 0 0 4.807 4.912 4.78 4.78 0 0 0 3.9-2.025l.48.48a5.45 5.45 0 0 1-4.38 2.235A5.55 5.55 0 0 1 7.563 12a5.535 5.535 0 0 1 5.475-5.565 5.44 5.44 0 0 1 4.38 2.235zm.772-1.755.473-.48c.165.173.3.345.434.518l-.472.48a6 6 0 0 0-.435-.518m-4.71 11.955a7.22 7.22 0 0 1-7.17-6.87h.675a6.57 6.57 0 0 0 6.495 6.187 6.4 6.4 0 0 0 4.14-1.515l.473.48a7.1 7.1 0 0 1-4.613 1.726zm4.71-2.715c.165-.173.3-.337.435-.51l.473.48a7 7 0 0 1-.435.51zM4.893 12a8.25 8.25 0 0 0 8.145 8.31 7.93 7.93 0 0 0 6.263-3.022l.472.48A8.63 8.63 0 0 1 13.039 21c-4.875 0-8.813-4.05-8.813-9 0-4.98 3.975-9 8.813-9 2.595 0 5.055 1.17 6.734 3.225l-.472.488a8.03 8.03 0 0 0-6.262-3.023A8.25 8.25 0 0 0 4.9 12z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M17.178 6.885a6.35 6.35 0 0 0-4.14-1.515 6.57 6.57 0 0 0-6.495 6.18h-.675a7.22 7.22 0 0 1 7.17-6.87c1.688 0 3.301.622 4.613 1.725zm-.232 2.265a4.8 4.8 0 0 0-3.9-2.025A4.853 4.853 0 0 0 8.23 12a4.86 4.86 0 0 0 4.807 4.912 4.78 4.78 0 0 0 3.9-2.025l.48.48a5.45 5.45 0 0 1-4.38 2.235A5.55 5.55 0 0 1 7.563 12a5.535 5.535 0 0 1 5.475-5.565 5.44 5.44 0 0 1 4.38 2.235zm.772-1.755.473-.48c.165.173.3.345.434.518l-.472.48a6 6 0 0 0-.435-.518m-4.71 11.955a7.22 7.22 0 0 1-7.17-6.87h.675a6.57 6.57 0 0 0 6.495 6.187 6.4 6.4 0 0 0 4.14-1.515l.473.48a7.1 7.1 0 0 1-4.613 1.726zm4.71-2.715c.165-.173.3-.337.435-.51l.473.48a7 7 0 0 1-.435.51zM4.893 12a8.25 8.25 0 0 0 8.145 8.31 7.93 7.93 0 0 0 6.263-3.022l.472.48A8.63 8.63 0 0 1 13.039 21c-4.875 0-8.813-4.05-8.813-9 0-4.98 3.975-9 8.813-9 2.595 0 5.055 1.17 6.734 3.225l-.472.488a8.03 8.03 0 0 0-6.262-3.023A8.25 8.25 0 0 0 4.9 12z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CRPT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#2992FB',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M16.603 7.454a5.65 5.65 0 0 0-3.68-1.348A5.84 5.84 0 0 0 7.149 11.6h-.6a6.42 6.42 0 0 1 6.374-6.106c1.5 0 2.934.553 4.1 1.533zm-.207 2.013a4.27 4.27 0 0 0-3.467-1.8A4.314 4.314 0 0 0 8.65 12a4.32 4.32 0 0 0 4.274 4.367 4.24 4.24 0 0 0 3.466-1.8l.427.426a4.85 4.85 0 0 1-3.893 1.987A4.934 4.934 0 0 1 8.056 12a4.92 4.92 0 0 1 4.867-4.946 4.84 4.84 0 0 1 3.893 1.986zm.687-1.56.42-.427c.146.153.266.306.386.46l-.42.427a5 5 0 0 0-.386-.46m-4.187 10.627a6.42 6.42 0 0 1-6.373-6.107h.6a5.84 5.84 0 0 0 5.773 5.5 5.68 5.68 0 0 0 3.68-1.347l.42.427a6.32 6.32 0 0 1-4.1 1.533zm4.187-2.414c.146-.154.266-.3.386-.453l.42.426c-.12.154-.24.3-.386.454zM5.683 12a7.333 7.333 0 0 0 7.24 7.387 7.05 7.05 0 0 0 5.566-2.687l.42.427A7.67 7.67 0 0 1 12.923 20C8.59 20 5.09 16.4 5.09 12c0-4.426 3.533-8 7.833-8 2.307 0 4.494 1.04 5.987 2.867l-.42.433a7.13 7.13 0 0 0-5.567-2.686A7.333 7.333 0 0 0 5.69 12z'
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
                        id: 'CRPT__a'
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
 * @component @name TokenCRPT
 * @description Web3Icon for TokenCRPT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMyOTkyRkIiIGQ9Ik0xNy4xNzggNi44ODVhNi4zNSA2LjM1IDAgMCAwLTQuMTQtMS41MTUgNi41NyA2LjU3IDAgMCAwLTYuNDk1IDYuMThoLS42NzVhNy4yMiA3LjIyIDAgMCAxIDcuMTctNi44N2MxLjY4OCAwIDMuMzAxLjYyMiA0LjYxMyAxLjcyNXptLS4yMzIgMi4yNjVhNC44IDQuOCAwIDAgMC0zLjktMi4wMjVBNC44NTMgNC44NTMgMCAwIDAgOC4yMyAxMmE0Ljg2IDQuODYgMCAwIDAgNC44MDcgNC45MTIgNC43OCA0Ljc4IDAgMCAwIDMuOS0yLjAyNWwuNDguNDhhNS40NSA1LjQ1IDAgMCAxLTQuMzggMi4yMzVBNS41NSA1LjU1IDAgMCAxIDcuNTYzIDEyYTUuNTM1IDUuNTM1IDAgMCAxIDUuNDc1LTUuNTY1IDUuNDQgNS40NCAwIDAgMSA0LjM4IDIuMjM1em0uNzcyLTEuNzU1LjQ3My0uNDhjLjE2NS4xNzMuMy4zNDUuNDM0LjUxOGwtLjQ3Mi40OGE2IDYgMCAwIDAtLjQzNS0uNTE4bS00LjcxIDExLjk1NWE3LjIyIDcuMjIgMCAwIDEtNy4xNy02Ljg3aC42NzVhNi41NyA2LjU3IDAgMCAwIDYuNDk1IDYuMTg3IDYuNCA2LjQgMCAwIDAgNC4xNC0xLjUxNWwuNDczLjQ4YTcuMSA3LjEgMCAwIDEtNC42MTMgMS43MjZ6bTQuNzEtMi43MTVjLjE2NS0uMTczLjMtLjMzNy40MzUtLjUxbC40NzMuNDhhNyA3IDAgMCAxLS40MzUuNTF6TTQuODkzIDEyYTguMjUgOC4yNSAwIDAgMCA4LjE0NSA4LjMxIDcuOTMgNy45MyAwIDAgMCA2LjI2My0zLjAyMmwuNDcyLjQ4QTguNjMgOC42MyAwIDAgMSAxMy4wMzkgMjFjLTQuODc1IDAtOC44MTMtNC4wNS04LjgxMy05IDAtNC45OCAzLjk3NS05IDguODEzLTkgMi41OTUgMCA1LjA1NSAxLjE3IDYuNzM0IDMuMjI1bC0uNDcyLjQ4OGE4LjAzIDguMDMgMCAwIDAtNi4yNjItMy4wMjNBOC4yNSA4LjI1IDAgMCAwIDQuOSAxMnoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy4xNzggNi44ODVhNi4zNSA2LjM1IDAgMCAwLTQuMTQtMS41MTUgNi41NyA2LjU3IDAgMCAwLTYuNDk1IDYuMThoLS42NzVhNy4yMiA3LjIyIDAgMCAxIDcuMTctNi44N2MxLjY4OCAwIDMuMzAxLjYyMiA0LjYxMyAxLjcyNXptLS4yMzIgMi4yNjVhNC44IDQuOCAwIDAgMC0zLjktMi4wMjVBNC44NTMgNC44NTMgMCAwIDAgOC4yMyAxMmE0Ljg2IDQuODYgMCAwIDAgNC44MDcgNC45MTIgNC43OCA0Ljc4IDAgMCAwIDMuOS0yLjAyNWwuNDguNDhhNS40NSA1LjQ1IDAgMCAxLTQuMzggMi4yMzVBNS41NSA1LjU1IDAgMCAxIDcuNTYzIDEyYTUuNTM1IDUuNTM1IDAgMCAxIDUuNDc1LTUuNTY1IDUuNDQgNS40NCAwIDAgMSA0LjM4IDIuMjM1em0uNzcyLTEuNzU1LjQ3My0uNDhjLjE2NS4xNzMuMy4zNDUuNDM0LjUxOGwtLjQ3Mi40OGE2IDYgMCAwIDAtLjQzNS0uNTE4bS00LjcxIDExLjk1NWE3LjIyIDcuMjIgMCAwIDEtNy4xNy02Ljg3aC42NzVhNi41NyA2LjU3IDAgMCAwIDYuNDk1IDYuMTg3IDYuNCA2LjQgMCAwIDAgNC4xNC0xLjUxNWwuNDczLjQ4YTcuMSA3LjEgMCAwIDEtNC42MTMgMS43MjZ6bTQuNzEtMi43MTVjLjE2NS0uMTczLjMtLjMzNy40MzUtLjUxbC40NzMuNDhhNyA3IDAgMCAxLS40MzUuNTF6TTQuODkzIDEyYTguMjUgOC4yNSAwIDAgMCA4LjE0NSA4LjMxIDcuOTMgNy45MyAwIDAgMCA2LjI2My0zLjAyMmwuNDcyLjQ4QTguNjMgOC42MyAwIDAgMSAxMy4wMzkgMjFjLTQuODc1IDAtOC44MTMtNC4wNS04LjgxMy05IDAtNC45OCAzLjk3NS05IDguODEzLTkgMi41OTUgMCA1LjA1NSAxLjE3IDYuNzM0IDMuMjI1bC0uNDcyLjQ4OGE4LjAzIDguMDMgMCAwIDAtNi4yNjItMy4wMjNBOC4yNSA4LjI1IDAgMCAwIDQuOSAxMnoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDUlBUX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzI5OTJGQiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYuNjAzIDcuNDU0YTUuNjUgNS42NSAwIDAgMC0zLjY4LTEuMzQ4QTUuODQgNS44NCAwIDAgMCA3LjE0OSAxMS42aC0uNmE2LjQyIDYuNDIgMCAwIDEgNi4zNzQtNi4xMDZjMS41IDAgMi45MzQuNTUzIDQuMSAxLjUzM3ptLS4yMDcgMi4wMTNhNC4yNyA0LjI3IDAgMCAwLTMuNDY3LTEuOEE0LjMxNCA0LjMxNCAwIDAgMCA4LjY1IDEyYTQuMzIgNC4zMiAwIDAgMCA0LjI3NCA0LjM2NyA0LjI0IDQuMjQgMCAwIDAgMy40NjYtMS44bC40MjcuNDI2YTQuODUgNC44NSAwIDAgMS0zLjg5MyAxLjk4N0E0LjkzNCA0LjkzNCAwIDAgMSA4LjA1NiAxMmE0LjkyIDQuOTIgMCAwIDEgNC44NjctNC45NDYgNC44NCA0Ljg0IDAgMCAxIDMuODkzIDEuOTg2em0uNjg3LTEuNTYuNDItLjQyN2MuMTQ2LjE1My4yNjYuMzA2LjM4Ni40NmwtLjQyLjQyN2E1IDUgMCAwIDAtLjM4Ni0uNDZtLTQuMTg3IDEwLjYyN2E2LjQyIDYuNDIgMCAwIDEtNi4zNzMtNi4xMDdoLjZhNS44NCA1Ljg0IDAgMCAwIDUuNzczIDUuNSA1LjY4IDUuNjggMCAwIDAgMy42OC0xLjM0N2wuNDIuNDI3YTYuMzIgNi4zMiAwIDAgMS00LjEgMS41MzN6bTQuMTg3LTIuNDE0Yy4xNDYtLjE1NC4yNjYtLjMuMzg2LS40NTNsLjQyLjQyNmMtLjEyLjE1NC0uMjQuMy0uMzg2LjQ1NHpNNS42ODMgMTJhNy4zMzMgNy4zMzMgMCAwIDAgNy4yNCA3LjM4NyA3LjA1IDcuMDUgMCAwIDAgNS41NjYtMi42ODdsLjQyLjQyN0E3LjY3IDcuNjcgMCAwIDEgMTIuOTIzIDIwQzguNTkgMjAgNS4wOSAxNi40IDUuMDkgMTJjMC00LjQyNiAzLjUzMy04IDcuODMzLTggMi4zMDcgMCA0LjQ5NCAxLjA0IDUuOTg3IDIuODY3bC0uNDIuNDMzYTcuMTMgNy4xMyAwIDAgMC01LjU2Ny0yLjY4NkE3LjMzMyA3LjMzMyAwIDAgMCA1LjY5IDEyeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJDUlBUX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/CRPT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCRPT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCRPT', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_04si49n._.js.map