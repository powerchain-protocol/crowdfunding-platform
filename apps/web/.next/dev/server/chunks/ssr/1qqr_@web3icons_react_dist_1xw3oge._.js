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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkFilecoinCalibration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkFilecoinCalibration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#0090FF',
                d: 'm13.212 10.457-.415 2.109 3.947.528-.277.988-3.877-.528c-.277.859-.417 1.781-.762 2.573-.346.923-.693 1.845-1.109 2.704-.554 1.12-1.522 1.912-2.837 2.109-.762.132-1.592.065-2.216-.395-.207-.132-.416-.395-.416-.594 0-.263-.005-.573.347-.725.351-.153.496-.045.693.065.207.198.414.462.553.726.415.528.969.593 1.523.197.623-.526.97-1.252 1.177-1.977.415-1.582.831-3.1 1.176-4.681v-.265l-3.668-.528.138-.988 3.808.527.483-2.043-3.945-.595.14-1.054 4.084.528c.137-.397.207-.726.346-1.055.345-1.188.692-2.375 1.523-3.43.83-1.055 1.8-1.714 3.253-1.649.624 0 1.247.199 1.662.66.07.066.207.198.207.329 0 .265 0 .594-.207.793-.277.196-.623.13-.9-.132-.208-.198-.347-.396-.554-.594-.415-.528-1.038-.594-1.523-.132-.375.359-.68.783-.9 1.253-.486 1.384-.831 2.835-1.315 4.286l3.807.528-.277.988z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm13.212 10.457-.415 2.109 3.947.528-.277.988-3.877-.528c-.277.859-.417 1.781-.762 2.573-.346.923-.693 1.845-1.109 2.704-.554 1.12-1.522 1.912-2.837 2.109-.762.132-1.592.065-2.216-.395-.207-.132-.416-.395-.416-.594 0-.263-.005-.573.347-.725.351-.153.496-.045.693.065.207.198.414.462.553.726.415.528.969.593 1.523.197.623-.526.97-1.252 1.177-1.977.415-1.582.831-3.1 1.176-4.681v-.265l-3.668-.528.138-.988 3.808.527.483-2.043-3.945-.595.14-1.054 4.084.528c.137-.397.207-.726.346-1.055.345-1.188.692-2.375 1.523-3.43.83-1.055 1.8-1.714 3.253-1.649.624 0 1.247.199 1.662.66.07.066.207.198.207.329 0 .265 0 .594-.207.793-.277.196-.623.13-.9-.132-.208-.198-.347-.396-.554-.594-.415-.528-1.038-.594-1.523-.132-.375.359-.68.783-.9 1.253-.486 1.384-.831 2.835-1.315 4.286l3.807.528-.277.988z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#filecoin__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#0090FF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm13.077 10.628-.369 1.875 3.508.47-.246.878-3.446-.47c-.246.764-.37 1.584-.677 2.287-.308.82-.616 1.64-.985 2.404-.493.996-1.354 1.7-2.523 1.874-.677.118-1.415.059-1.97-.35-.183-.117-.369-.352-.369-.528 0-.235-.005-.51.308-.645s.441-.04.616.058c.184.176.369.41.492.645.369.47.861.528 1.354.175.554-.467.862-1.113 1.046-1.757.369-1.407.739-2.755 1.045-4.161v-.236l-3.26-.469.122-.878 3.386.469.43-1.817-3.508-.528.124-.937 3.63.469c.123-.353.185-.645.309-.938.306-1.056.614-2.11 1.353-3.049.738-.938 1.6-1.523 2.892-1.465.554 0 1.108.176 1.477.587.062.058.184.175.184.291 0 .236 0 .529-.184.705-.246.175-.554.117-.8-.117-.185-.176-.308-.352-.493-.528-.368-.469-.922-.527-1.353-.117a3.7 3.7 0 0 0-.8 1.113c-.432 1.231-.739 2.52-1.17 3.81l3.385.47-.246.878z'
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
                        id: 'filecoin__a'
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
 * @component @name NetworkFilecoinCalibration
 * @description Web3Icon for NetworkFilecoinCalibration
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDkwRkYiIGQ9Im0xMy4yMTIgMTAuNDU3LS40MTUgMi4xMDkgMy45NDcuNTI4LS4yNzcuOTg4LTMuODc3LS41MjhjLS4yNzcuODU5LS40MTcgMS43ODEtLjc2MiAyLjU3My0uMzQ2LjkyMy0uNjkzIDEuODQ1LTEuMTA5IDIuNzA0LS41NTQgMS4xMi0xLjUyMiAxLjkxMi0yLjgzNyAyLjEwOS0uNzYyLjEzMi0xLjU5Mi4wNjUtMi4yMTYtLjM5NS0uMjA3LS4xMzItLjQxNi0uMzk1LS40MTYtLjU5NCAwLS4yNjMtLjAwNS0uNTczLjM0Ny0uNzI1LjM1MS0uMTUzLjQ5Ni0uMDQ1LjY5My4wNjUuMjA3LjE5OC40MTQuNDYyLjU1My43MjYuNDE1LjUyOC45NjkuNTkzIDEuNTIzLjE5Ny42MjMtLjUyNi45Ny0xLjI1MiAxLjE3Ny0xLjk3Ny40MTUtMS41ODIuODMxLTMuMSAxLjE3Ni00LjY4MXYtLjI2NWwtMy42NjgtLjUyOC4xMzgtLjk4OCAzLjgwOC41MjcuNDgzLTIuMDQzLTMuOTQ1LS41OTUuMTQtMS4wNTQgNC4wODQuNTI4Yy4xMzctLjM5Ny4yMDctLjcyNi4zNDYtMS4wNTUuMzQ1LTEuMTg4LjY5Mi0yLjM3NSAxLjUyMy0zLjQzLjgzLTEuMDU1IDEuOC0xLjcxNCAzLjI1My0xLjY0OS42MjQgMCAxLjI0Ny4xOTkgMS42NjIuNjYuMDcuMDY2LjIwNy4xOTguMjA3LjMyOSAwIC4yNjUgMCAuNTk0LS4yMDcuNzkzLS4yNzcuMTk2LS42MjMuMTMtLjktLjEzMi0uMjA4LS4xOTgtLjM0Ny0uMzk2LS41NTQtLjU5NC0uNDE1LS41MjgtMS4wMzgtLjU5NC0xLjUyMy0uMTMyLS4zNzUuMzU5LS42OC43ODMtLjkgMS4yNTMtLjQ4NiAxLjM4NC0uODMxIDIuODM1LTEuMzE1IDQuMjg2bDMuODA3LjUyOC0uMjc3Ljk4OHoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMy4yMTIgMTAuNDU3LS40MTUgMi4xMDkgMy45NDcuNTI4LS4yNzcuOTg4LTMuODc3LS41MjhjLS4yNzcuODU5LS40MTcgMS43ODEtLjc2MiAyLjU3My0uMzQ2LjkyMy0uNjkzIDEuODQ1LTEuMTA5IDIuNzA0LS41NTQgMS4xMi0xLjUyMiAxLjkxMi0yLjgzNyAyLjEwOS0uNzYyLjEzMi0xLjU5Mi4wNjUtMi4yMTYtLjM5NS0uMjA3LS4xMzItLjQxNi0uMzk1LS40MTYtLjU5NCAwLS4yNjMtLjAwNS0uNTczLjM0Ny0uNzI1LjM1MS0uMTUzLjQ5Ni0uMDQ1LjY5My4wNjUuMjA3LjE5OC40MTQuNDYyLjU1My43MjYuNDE1LjUyOC45NjkuNTkzIDEuNTIzLjE5Ny42MjMtLjUyNi45Ny0xLjI1MiAxLjE3Ny0xLjk3Ny40MTUtMS41ODIuODMxLTMuMSAxLjE3Ni00LjY4MXYtLjI2NWwtMy42NjgtLjUyOC4xMzgtLjk4OCAzLjgwOC41MjcuNDgzLTIuMDQzLTMuOTQ1LS41OTUuMTQtMS4wNTQgNC4wODQuNTI4Yy4xMzctLjM5Ny4yMDctLjcyNi4zNDYtMS4wNTUuMzQ1LTEuMTg4LjY5Mi0yLjM3NSAxLjUyMy0zLjQzLjgzLTEuMDU1IDEuOC0xLjcxNCAzLjI1My0xLjY0OS42MjQgMCAxLjI0Ny4xOTkgMS42NjIuNjYuMDcuMDY2LjIwNy4xOTguMjA3LjMyOSAwIC4yNjUgMCAuNTk0LS4yMDcuNzkzLS4yNzcuMTk2LS42MjMuMTMtLjktLjEzMi0uMjA4LS4xOTgtLjM0Ny0uMzk2LS41NTQtLjU5NC0uNDE1LS41MjgtMS4wMzgtLjU5NC0xLjUyMy0uMTMyLS4zNzUuMzU5LS42OC43ODMtLjkgMS4yNTMtLjQ4NiAxLjM4NC0uODMxIDIuODM1LTEuMzE1IDQuMjg2bDMuODA3LjUyOC0uMjc3Ljk4OHoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNmaWxlY29pbl9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDkwRkYiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTEzLjA3NyAxMC42MjgtLjM2OSAxLjg3NSAzLjUwOC40Ny0uMjQ2Ljg3OC0zLjQ0Ni0uNDdjLS4yNDYuNzY0LS4zNyAxLjU4NC0uNjc3IDIuMjg3LS4zMDguODItLjYxNiAxLjY0LS45ODUgMi40MDQtLjQ5My45OTYtMS4zNTQgMS43LTIuNTIzIDEuODc0LS42NzcuMTE4LTEuNDE1LjA1OS0xLjk3LS4zNS0uMTgzLS4xMTctLjM2OS0uMzUyLS4zNjktLjUyOCAwLS4yMzUtLjAwNS0uNTEuMzA4LS42NDVzLjQ0MS0uMDQuNjE2LjA1OGMuMTg0LjE3Ni4zNjkuNDEuNDkyLjY0NS4zNjkuNDcuODYxLjUyOCAxLjM1NC4xNzUuNTU0LS40NjcuODYyLTEuMTEzIDEuMDQ2LTEuNzU3LjM2OS0xLjQwNy43MzktMi43NTUgMS4wNDUtNC4xNjF2LS4yMzZsLTMuMjYtLjQ2OS4xMjItLjg3OCAzLjM4Ni40NjkuNDMtMS44MTctMy41MDgtLjUyOC4xMjQtLjkzNyAzLjYzLjQ2OWMuMTIzLS4zNTMuMTg1LS42NDUuMzA5LS45MzguMzA2LTEuMDU2LjYxNC0yLjExIDEuMzUzLTMuMDQ5LjczOC0uOTM4IDEuNi0xLjUyMyAyLjg5Mi0xLjQ2NS41NTQgMCAxLjEwOC4xNzYgMS40NzcuNTg3LjA2Mi4wNTguMTg0LjE3NS4xODQuMjkxIDAgLjIzNiAwIC41MjktLjE4NC43MDUtLjI0Ni4xNzUtLjU1NC4xMTctLjgtLjExNy0uMTg1LS4xNzYtLjMwOC0uMzUyLS40OTMtLjUyOC0uMzY4LS40NjktLjkyMi0uNTI3LTEuMzUzLS4xMTdhMy43IDMuNyAwIDAgMC0uOCAxLjExM2MtLjQzMiAxLjIzMS0uNzM5IDIuNTItMS4xNyAzLjgxbDMuMzg1LjQ3LS4yNDYuODc4eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJmaWxlY29pbl9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/networks/filecoin-calibration
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkFilecoinCalibration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkFilecoinCalibration', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1xw3oge._.js.map