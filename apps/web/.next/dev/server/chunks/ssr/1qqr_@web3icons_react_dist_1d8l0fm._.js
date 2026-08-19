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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMATH.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMATH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M8.625 9.975a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25m0 3.6a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25M16.5 12.45a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0m-9.675-.675a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25M14.7 10.65a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0m-4.275 1.125a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25M18.3 10.65a1.124 1.124 0 1 1-2.25 0 1.124 1.124 0 0 1 2.25 0m-2.925-.675a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25m-2.475 2.7a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0m-2.7 2.7a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8m9.45-2.7a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0m-2.25 2.7a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8m-11.25-2.7a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0m-2.7 1.8a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9m2.25 1.35a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0m6.3.45a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9m7.2-.45a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0m1.35-1.35a.45.45 0 1 0 0-.899.45.45 0 0 0 0 .899m-12.825 0a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0m5.85.9a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M8.625 9.975a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25m0 3.6a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25M16.5 12.45a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0m-9.675-.675a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25M14.7 10.65a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0m-4.275 1.125a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25M18.3 10.65a1.124 1.124 0 1 1-2.25 0 1.124 1.124 0 0 1 2.25 0m-2.925-.675a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25m-2.475 2.7a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0m-2.7 2.7a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8m9.45-2.7a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0m-2.25 2.7a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8m-11.25-2.7a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0m-2.7 1.8a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9m2.25 1.35a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0m6.3.45a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9m7.2-.45a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0m1.35-1.35a.45.45 0 1 0 0-.899.45.45 0 0 0 0 .899m-12.825 0a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0m5.85.9a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MATH__a)'
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
                        d: 'M9 10.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 3.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-8.6-.6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3.8 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-2.6-.6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-2.2 2.4a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0M10.4 15a.8.8 0 1 0 0-1.598.8.8 0 0 0 0 1.598m8.4-2.4a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0m-2 2.4a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6m-10-2.4a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0m-2.4 1.6a.4.4 0 1 0 0-.8.4.4 0 0 0 0 .8m2 1.2a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0m5.6.4a.4.4 0 1 0 0-.8.4.4 0 0 0 0 .801m6.4-.4a.4.4 0 1 1-.801 0 .4.4 0 0 1 .801 0m1.2-1.2a.4.4 0 1 0 0-.8.4.4 0 0 0 0 .8m-11.4 0a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0m5.2.8a.8.8 0 1 0 0-1.598.8.8 0 0 0 0 1.598',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
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
                        id: 'MATH__a'
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
 * @component @name TokenMATH
 * @description Web3Icon for TokenMATH
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTguNjI1IDkuOTc1YTEuMTI1IDEuMTI1IDAgMSAwIDAtMi4yNSAxLjEyNSAxLjEyNSAwIDAgMCAwIDIuMjVtMCAzLjZhMS4xMjUgMS4xMjUgMCAxIDAgMC0yLjI1IDEuMTI1IDEuMTI1IDAgMCAwIDAgMi4yNU0xNi41IDEyLjQ1YTEuMTI1IDEuMTI1IDAgMSAxLTIuMjUgMCAxLjEyNSAxLjEyNSAwIDAgMSAyLjI1IDBtLTkuNjc1LS42NzVhMS4xMjUgMS4xMjUgMCAxIDAgMC0yLjI1IDEuMTI1IDEuMTI1IDAgMCAwIDAgMi4yNU0xNC43IDEwLjY1YTEuMTI1IDEuMTI1IDAgMSAxLTIuMjUgMCAxLjEyNSAxLjEyNSAwIDAgMSAyLjI1IDBtLTQuMjc1IDEuMTI1YTEuMTI1IDEuMTI1IDAgMSAwIDAtMi4yNSAxLjEyNSAxLjEyNSAwIDAgMCAwIDIuMjVNMTguMyAxMC42NWExLjEyNCAxLjEyNCAwIDEgMS0yLjI1IDAgMS4xMjQgMS4xMjQgMCAwIDEgMi4yNSAwbS0yLjkyNS0uNjc1YTEuMTI1IDEuMTI1IDAgMSAwIDAtMi4yNSAxLjEyNSAxLjEyNSAwIDAgMCAwIDIuMjVtLTIuNDc1IDIuN2EuOS45IDAgMSAxLTEuOCAwIC45LjkgMCAwIDEgMS44IDBtLTIuNyAyLjdhLjkuOSAwIDEgMCAwLTEuOC45LjkgMCAwIDAgMCAxLjhtOS40NS0yLjdhLjkuOSAwIDEgMS0xLjggMCAuOS45IDAgMCAxIDEuOCAwbS0yLjI1IDIuN2EuOS45IDAgMSAwIDAtMS44LjkuOSAwIDAgMCAwIDEuOG0tMTEuMjUtMi43YS45LjkgMCAxIDEtMS44IDAgLjkuOSAwIDAgMSAxLjggMG0tMi43IDEuOGEuNDUuNDUgMCAxIDAgMC0uOS40NS40NSAwIDAgMCAwIC45bTIuMjUgMS4zNWEuNDUuNDUgMCAxIDEtLjkgMCAuNDUuNDUgMCAwIDEgLjkgMG02LjMuNDVhLjQ1LjQ1IDAgMSAwIDAtLjkuNDUuNDUgMCAwIDAgMCAuOW03LjItLjQ1YS40NS40NSAwIDEgMS0uOSAwIC40NS40NSAwIDAgMSAuOSAwbTEuMzUtMS4zNWEuNDUuNDUgMCAxIDAgMC0uODk5LjQ1LjQ1IDAgMCAwIDAgLjg5OW0tMTIuODI1IDBhLjkuOSAwIDEgMS0xLjggMCAuOS45IDAgMCAxIDEuOCAwbTUuODUuOWEuOS45IDAgMSAwIDAtMS44LjkuOSAwIDAgMCAwIDEuOCIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTguNjI1IDkuOTc1YTEuMTI1IDEuMTI1IDAgMSAwIDAtMi4yNSAxLjEyNSAxLjEyNSAwIDAgMCAwIDIuMjVtMCAzLjZhMS4xMjUgMS4xMjUgMCAxIDAgMC0yLjI1IDEuMTI1IDEuMTI1IDAgMCAwIDAgMi4yNU0xNi41IDEyLjQ1YTEuMTI1IDEuMTI1IDAgMSAxLTIuMjUgMCAxLjEyNSAxLjEyNSAwIDAgMSAyLjI1IDBtLTkuNjc1LS42NzVhMS4xMjUgMS4xMjUgMCAxIDAgMC0yLjI1IDEuMTI1IDEuMTI1IDAgMCAwIDAgMi4yNU0xNC43IDEwLjY1YTEuMTI1IDEuMTI1IDAgMSAxLTIuMjUgMCAxLjEyNSAxLjEyNSAwIDAgMSAyLjI1IDBtLTQuMjc1IDEuMTI1YTEuMTI1IDEuMTI1IDAgMSAwIDAtMi4yNSAxLjEyNSAxLjEyNSAwIDAgMCAwIDIuMjVNMTguMyAxMC42NWExLjEyNCAxLjEyNCAwIDEgMS0yLjI1IDAgMS4xMjQgMS4xMjQgMCAwIDEgMi4yNSAwbS0yLjkyNS0uNjc1YTEuMTI1IDEuMTI1IDAgMSAwIDAtMi4yNSAxLjEyNSAxLjEyNSAwIDAgMCAwIDIuMjVtLTIuNDc1IDIuN2EuOS45IDAgMSAxLTEuOCAwIC45LjkgMCAwIDEgMS44IDBtLTIuNyAyLjdhLjkuOSAwIDEgMCAwLTEuOC45LjkgMCAwIDAgMCAxLjhtOS40NS0yLjdhLjkuOSAwIDEgMS0xLjggMCAuOS45IDAgMCAxIDEuOCAwbS0yLjI1IDIuN2EuOS45IDAgMSAwIDAtMS44LjkuOSAwIDAgMCAwIDEuOG0tMTEuMjUtMi43YS45LjkgMCAxIDEtMS44IDAgLjkuOSAwIDAgMSAxLjggMG0tMi43IDEuOGEuNDUuNDUgMCAxIDAgMC0uOS40NS40NSAwIDAgMCAwIC45bTIuMjUgMS4zNWEuNDUuNDUgMCAxIDEtLjkgMCAuNDUuNDUgMCAwIDEgLjkgMG02LjMuNDVhLjQ1LjQ1IDAgMSAwIDAtLjkuNDUuNDUgMCAwIDAgMCAuOW03LjItLjQ1YS40NS40NSAwIDEgMS0uOSAwIC40NS40NSAwIDAgMSAuOSAwbTEuMzUtMS4zNWEuNDUuNDUgMCAxIDAgMC0uODk5LjQ1LjQ1IDAgMCAwIDAgLjg5OW0tMTIuODI1IDBhLjkuOSAwIDEgMS0xLjggMCAuOS45IDAgMCAxIDEuOCAwbTUuODUuOWEuOS45IDAgMSAwIDAtMS44LjkuOSAwIDAgMCAwIDEuOCIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNQVRIX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDEwLjJhMSAxIDAgMSAwIDAtMiAxIDEgMCAwIDAgMCAybTAgMy4yYTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMm03LTFhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbS04LjYtLjZhMSAxIDAgMSAwIDAtMiAxIDEgMCAwIDAgMCAybTctMWExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtLTMuOCAxYTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMm03LTFhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbS0yLjYtLjZhMSAxIDAgMSAwIDAtMiAxIDEgMCAwIDAgMCAybS0yLjIgMi40YS44LjggMCAxIDEtMS42IDAgLjguOCAwIDAgMSAxLjYgME0xMC40IDE1YS44LjggMCAxIDAgMC0xLjU5OC44LjggMCAwIDAgMCAxLjU5OG04LjQtMi40YS44LjggMCAxIDEtMS42IDAgLjguOCAwIDAgMSAxLjYgMG0tMiAyLjRhLjguOCAwIDEgMCAwLTEuNi44LjggMCAwIDAgMCAxLjZtLTEwLTIuNGEuOC44IDAgMSAxLTEuNiAwIC44LjggMCAwIDEgMS42IDBtLTIuNCAxLjZhLjQuNCAwIDEgMCAwLS44LjQuNCAwIDAgMCAwIC44bTIgMS4yYS40LjQgMCAxIDEtLjggMCAuNC40IDAgMCAxIC44IDBtNS42LjRhLjQuNCAwIDEgMCAwLS44LjQuNCAwIDAgMCAwIC44MDFtNi40LS40YS40LjQgMCAxIDEtLjgwMSAwIC40LjQgMCAwIDEgLjgwMSAwbTEuMi0xLjJhLjQuNCAwIDEgMCAwLS44LjQuNCAwIDAgMCAwIC44bS0xMS40IDBhLjguOCAwIDEgMS0xLjYgMCAuOC44IDAgMCAxIDEuNiAwbTUuMi44YS44LjggMCAxIDAgMC0xLjU5OC44LjggMCAwIDAgMCAxLjU5OCIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9Ik1BVEhfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/MATH
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMATH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMATH', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1d8l0fm._.js.map