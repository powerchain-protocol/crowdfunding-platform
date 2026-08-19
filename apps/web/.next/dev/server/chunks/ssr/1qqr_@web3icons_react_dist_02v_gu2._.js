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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCTX.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCTX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#DEB132',
                d: 'm8.136 11.852-3.167 1.513 1.652.763q.719-.405 1.412-.851c.46-.303.734-.126.873 0v3.09l-1.125.756v2.348l-1.125.441V21l1.982-.835v-2.191l3.08-1.608V15.09l4.01-1.576c.57-.857 1.499-1.345 1.891-1.482v2.302l-.837.48v1.124l1.687-.958v-4.65l-1.688.458V7.36l1.49.809.76-2.254c-.051-.452-.604-1.12-.94-.875-.483.353.082.801.335 1.001l-.511.962-1.335-1.191h-.924v-.417c.236.025.506-.116.563-.19.01-.146.024-.614 0-1.308-.025-.693-.688-.887-1.004-.898-1.415-.012-1.075 1.423-.684 1.902v.91h-1.258l-2.187 1.774c.257.4.814 1.288.99 1.635.22.433.552.53.732.544s.548.042.63-.461c.066-.402-.514-.439-.812-.406l-.354-1.009 1.252-.528.733 2.786L9.483 12.5z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm8.136 11.852-3.167 1.513 1.652.763q.719-.405 1.412-.851c.46-.303.734-.126.873 0v3.09l-1.125.756v2.348l-1.125.441V21l1.982-.835v-2.191l3.08-1.608V15.09l4.01-1.576c.57-.857 1.499-1.345 1.891-1.482v2.302l-.837.48v1.124l1.687-.958v-4.65l-1.688.458V7.36l1.49.809.76-2.254c-.051-.452-.604-1.12-.94-.875-.483.353.082.801.335 1.001l-.511.962-1.335-1.191h-.924v-.417c.236.025.506-.116.563-.19.01-.146.024-.614 0-1.308-.025-.693-.688-.887-1.004-.898-1.415-.012-1.075 1.423-.684 1.902v.91h-1.258l-2.187 1.774c.257.4.814 1.288.99 1.635.22.433.552.53.732.544s.548.042.63-.461c.066-.402-.514-.439-.812-.406l-.354-1.009 1.252-.528.733 2.786L9.483 12.5z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CTX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#DEB132',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M8.565 11.868 5.75 13.213l1.469.679q.638-.36 1.255-.757c.408-.269.652-.112.776 0v2.746l-1 .672v2.088l-1 .392V20l1.761-.743V17.31l2.739-1.429v-1.135l3.563-1.401c.507-.762 1.333-1.196 1.682-1.317v2.045l-.745.427v1l1.5-.852v-4.133l-1.5.406V7.877l1.324.719.676-2.004c-.046-.401-.538-.995-.835-.778-.43.314.072.713.297.89l-.454.855L16.07 6.5h-.821v-.37c.21.022.45-.103.5-.168.009-.13.022-.547 0-1.163-.022-.617-.611-.789-.892-.799-1.258-.01-.956 1.265-.608 1.691v.81h-1.118l-1.944 1.575c.228.356.723 1.145.88 1.454.196.385.49.471.65.484.16.012.487.037.56-.41.059-.358-.457-.39-.722-.361l-.314-.897 1.113-.47.651 2.477-4.244 2.092z'
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
                        id: 'CTX__a'
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
 * @component @name TokenCTX
 * @description Web3Icon for TokenCTX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNERUIxMzIiIGQ9Im04LjEzNiAxMS44NTItMy4xNjcgMS41MTMgMS42NTIuNzYzcS43MTktLjQwNSAxLjQxMi0uODUxYy40Ni0uMzAzLjczNC0uMTI2Ljg3MyAwdjMuMDlsLTEuMTI1Ljc1NnYyLjM0OGwtMS4xMjUuNDQxVjIxbDEuOTgyLS44MzV2LTIuMTkxbDMuMDgtMS42MDhWMTUuMDlsNC4wMS0xLjU3NmMuNTctLjg1NyAxLjQ5OS0xLjM0NSAxLjg5MS0xLjQ4MnYyLjMwMmwtLjgzNy40OHYxLjEyNGwxLjY4Ny0uOTU4di00LjY1bC0xLjY4OC40NThWNy4zNmwxLjQ5LjgwOS43Ni0yLjI1NGMtLjA1MS0uNDUyLS42MDQtMS4xMi0uOTQtLjg3NS0uNDgzLjM1My4wODIuODAxLjMzNSAxLjAwMWwtLjUxMS45NjItMS4zMzUtMS4xOTFoLS45MjR2LS40MTdjLjIzNi4wMjUuNTA2LS4xMTYuNTYzLS4xOS4wMS0uMTQ2LjAyNC0uNjE0IDAtMS4zMDgtLjAyNS0uNjkzLS42ODgtLjg4Ny0xLjAwNC0uODk4LTEuNDE1LS4wMTItMS4wNzUgMS40MjMtLjY4NCAxLjkwMnYuOTFoLTEuMjU4bC0yLjE4NyAxLjc3NGMuMjU3LjQuODE0IDEuMjg4Ljk5IDEuNjM1LjIyLjQzMy41NTIuNTMuNzMyLjU0NHMuNTQ4LjA0Mi42My0uNDYxYy4wNjYtLjQwMi0uNTE0LS40MzktLjgxMi0uNDA2bC0uMzU0LTEuMDA5IDEuMjUyLS41MjguNzMzIDIuNzg2TDkuNDgzIDEyLjV6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im04LjEzNiAxMS44NTItMy4xNjcgMS41MTMgMS42NTIuNzYzcS43MTktLjQwNSAxLjQxMi0uODUxYy40Ni0uMzAzLjczNC0uMTI2Ljg3MyAwdjMuMDlsLTEuMTI1Ljc1NnYyLjM0OGwtMS4xMjUuNDQxVjIxbDEuOTgyLS44MzV2LTIuMTkxbDMuMDgtMS42MDhWMTUuMDlsNC4wMS0xLjU3NmMuNTctLjg1NyAxLjQ5OS0xLjM0NSAxLjg5MS0xLjQ4MnYyLjMwMmwtLjgzNy40OHYxLjEyNGwxLjY4Ny0uOTU4di00LjY1bC0xLjY4OC40NThWNy4zNmwxLjQ5LjgwOS43Ni0yLjI1NGMtLjA1MS0uNDUyLS42MDQtMS4xMi0uOTQtLjg3NS0uNDgzLjM1My4wODIuODAxLjMzNSAxLjAwMWwtLjUxMS45NjItMS4zMzUtMS4xOTFoLS45MjR2LS40MTdjLjIzNi4wMjUuNTA2LS4xMTYuNTYzLS4xOS4wMS0uMTQ2LjAyNC0uNjE0IDAtMS4zMDgtLjAyNS0uNjkzLS42ODgtLjg4Ny0xLjAwNC0uODk4LTEuNDE1LS4wMTItMS4wNzUgMS40MjMtLjY4NCAxLjkwMnYuOTFoLTEuMjU4bC0yLjE4NyAxLjc3NGMuMjU3LjQuODE0IDEuMjg4Ljk5IDEuNjM1LjIyLjQzMy41NTIuNTMuNzMyLjU0NHMuNTQ4LjA0Mi42My0uNDYxYy4wNjYtLjQwMi0uNTE0LS40MzktLjgxMi0uNDA2bC0uMzU0LTEuMDA5IDEuMjUyLS41MjguNzMzIDIuNzg2TDkuNDgzIDEyLjV6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDVFhfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjREVCMTMyIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04LjU2NSAxMS44NjggNS43NSAxMy4yMTNsMS40NjkuNjc5cS42MzgtLjM2IDEuMjU1LS43NTdjLjQwOC0uMjY5LjY1Mi0uMTEyLjc3NiAwdjIuNzQ2bC0xIC42NzJ2Mi4wODhsLTEgLjM5MlYyMGwxLjc2MS0uNzQzVjE3LjMxbDIuNzM5LTEuNDI5di0xLjEzNWwzLjU2My0xLjQwMWMuNTA3LS43NjIgMS4zMzMtMS4xOTYgMS42ODItMS4zMTd2Mi4wNDVsLS43NDUuNDI3djFsMS41LS44NTJ2LTQuMTMzbC0xLjUuNDA2VjcuODc3bDEuMzI0LjcxOS42NzYtMi4wMDRjLS4wNDYtLjQwMS0uNTM4LS45OTUtLjgzNS0uNzc4LS40My4zMTQuMDcyLjcxMy4yOTcuODlsLS40NTQuODU1TDE2LjA3IDYuNWgtLjgyMXYtLjM3Yy4yMS4wMjIuNDUtLjEwMy41LS4xNjguMDA5LS4xMy4wMjItLjU0NyAwLTEuMTYzLS4wMjItLjYxNy0uNjExLS43ODktLjg5Mi0uNzk5LTEuMjU4LS4wMS0uOTU2IDEuMjY1LS42MDggMS42OTF2LjgxaC0xLjExOGwtMS45NDQgMS41NzVjLjIyOC4zNTYuNzIzIDEuMTQ1Ljg4IDEuNDU0LjE5Ni4zODUuNDkuNDcxLjY1LjQ4NC4xNi4wMTIuNDg3LjAzNy41Ni0uNDEuMDU5LS4zNTgtLjQ1Ny0uMzktLjcyMi0uMzYxbC0uMzE0LS44OTcgMS4xMTMtLjQ3LjY1MSAyLjQ3Ny00LjI0NCAyLjA5MnoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQ1RYX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/CTX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCTX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCTX', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_02v_gu2._.js.map