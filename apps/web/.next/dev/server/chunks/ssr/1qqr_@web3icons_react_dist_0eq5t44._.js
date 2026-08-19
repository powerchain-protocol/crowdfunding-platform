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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenRCN.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenRCN
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#4155FF',
                d: 'M20.967 8.374a.56.56 0 0 0-.515-.37.55.55 0 0 0-.5.315c-.146.31-.3.61-.48.9a8 8 0 0 0-3.822-4.331A7.93 7.93 0 0 0 5.286 7.704a8.04 8.04 0 0 0-1.125 5.672 10 10 0 0 0-1.1 1.825.549.549 0 1 0 .99.47q.216-.459.485-.895a8 8 0 0 0 3.816 4.337 7.93 7.93 0 0 0 10.364-2.816 8.03 8.03 0 0 0 1.13-5.672c.43-.57.8-1.18 1.1-1.826a.55.55 0 0 0 .02-.425M18.866 12c0 1.68-.615 3.311-1.726 4.572a6.852 6.852 0 0 1-11.804-2.916 10.2 10.2 0 0 1 5.227-3.166c1.12-.3 2.266-.48 3.426-.526l-1.645 1.651.78.785L16.1 9.404l-3.391-3.406-.775.78 2.065 2.081c-1.25.04-2.49.23-3.701.56-1.42.375-2.761 1-3.966 1.84-.42.301-.82.636-1.19 1.001l-.006-.265a6.852 6.852 0 0 1 13.52-1.66 10.15 10.15 0 0 1-5.222 3.17c-1.12.3-2.266.48-3.426.526l1.64-1.65-.78-.786-2.97 2.991 3.4 3.416.776-.78-2.066-2.08c1.25-.046 2.49-.23 3.701-.561 1.415-.375 2.761-1 3.962-1.84a9.5 9.5 0 0 0 1.195-1.001z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M20.967 8.374a.56.56 0 0 0-.515-.37.55.55 0 0 0-.5.315c-.146.31-.3.61-.48.9a8 8 0 0 0-3.822-4.331A7.93 7.93 0 0 0 5.286 7.704a8.04 8.04 0 0 0-1.125 5.672 10 10 0 0 0-1.1 1.825.55.55 0 1 0 .99.47q.216-.459.485-.895a8 8 0 0 0 3.816 4.337 7.93 7.93 0 0 0 10.364-2.816 8.03 8.03 0 0 0 1.13-5.672c.43-.57.8-1.18 1.1-1.826a.55.55 0 0 0 .02-.425M18.866 12c0 1.68-.615 3.311-1.726 4.572a6.852 6.852 0 0 1-11.804-2.916 10.2 10.2 0 0 1 5.227-3.166c1.12-.3 2.266-.48 3.426-.526l-1.645 1.651.78.785L16.1 9.404l-3.391-3.406-.775.78 2.065 2.081c-1.25.04-2.49.23-3.701.56-1.42.375-2.761 1-3.966 1.84-.42.301-.82.636-1.19 1.001l-.006-.265a6.852 6.852 0 0 1 13.52-1.66 10.15 10.15 0 0 1-5.222 3.17c-1.12.3-2.266.48-3.426.526l1.64-1.65-.78-.786-2.97 2.991 3.4 3.416.776-.78-2.066-2.08c1.25-.046 2.49-.23 3.701-.561 1.416-.375 2.761-1 3.962-1.84q.639-.452 1.195-1.001z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#RCN__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#4155FF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M19.97 8.777a.5.5 0 0 0-.458-.329.49.49 0 0 0-.444.28 8 8 0 0 1-.427.8 7.1 7.1 0 0 0-3.397-3.85 7.047 7.047 0 0 0-9.212 2.503 7.15 7.15 0 0 0-1 5.042 9 9 0 0 0-.978 1.623.488.488 0 1 0 .88.418q.192-.408.431-.796a7.1 7.1 0 0 0 3.393 3.855 7.047 7.047 0 0 0 9.212-2.504 7.14 7.14 0 0 0 1.005-5.041q.575-.762.978-1.623a.5.5 0 0 0 .017-.378m-1.867 3.224a6.16 6.16 0 0 1-1.534 4.063 6.09 6.09 0 0 1-10.492-2.592 9.1 9.1 0 0 1 4.646-2.814 13.8 13.8 0 0 1 3.045-.467l-1.463 1.467.694.698 2.646-2.663-3.015-3.028-.689.694 1.836 1.85a14.2 14.2 0 0 0-3.29.497c-1.263.334-2.454.89-3.526 1.636a9 9 0 0 0-1.058.89l-.004-.236a6.091 6.091 0 0 1 12.017-1.476 9.03 9.03 0 0 1-4.641 2.819c-.996.266-2.014.426-3.046.466l1.459-1.467-.694-.698-2.641 2.66 3.023 3.037.69-.694-1.837-1.85a14.5 14.5 0 0 0 3.29-.497 11.1 11.1 0 0 0 3.522-1.636 8.5 8.5 0 0 0 1.062-.89z'
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
                        id: 'RCN__a'
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
 * @component @name TokenRCN
 * @description Web3Icon for TokenRCN
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM0MTU1RkYiIGQ9Ik0yMC45NjcgOC4zNzRhLjU2LjU2IDAgMCAwLS41MTUtLjM3LjU1LjU1IDAgMCAwLS41LjMxNWMtLjE0Ni4zMS0uMy42MS0uNDguOWE4IDggMCAwIDAtMy44MjItNC4zMzFBNy45MyA3LjkzIDAgMCAwIDUuMjg2IDcuNzA0YTguMDQgOC4wNCAwIDAgMC0xLjEyNSA1LjY3MiAxMCAxMCAwIDAgMC0xLjEgMS44MjUuNTQ5LjU0OSAwIDEgMCAuOTkuNDdxLjIxNi0uNDU5LjQ4NS0uODk1YTggOCAwIDAgMCAzLjgxNiA0LjMzNyA3LjkzIDcuOTMgMCAwIDAgMTAuMzY0LTIuODE2IDguMDMgOC4wMyAwIDAgMCAxLjEzLTUuNjcyYy40My0uNTcuOC0xLjE4IDEuMS0xLjgyNmEuNTUuNTUgMCAwIDAgLjAyLS40MjVNMTguODY2IDEyYzAgMS42OC0uNjE1IDMuMzExLTEuNzI2IDQuNTcyYTYuODUyIDYuODUyIDAgMCAxLTExLjgwNC0yLjkxNiAxMC4yIDEwLjIgMCAwIDEgNS4yMjctMy4xNjZjMS4xMi0uMyAyLjI2Ni0uNDggMy40MjYtLjUyNmwtMS42NDUgMS42NTEuNzguNzg1TDE2LjEgOS40MDRsLTMuMzkxLTMuNDA2LS43NzUuNzggMi4wNjUgMi4wODFjLTEuMjUuMDQtMi40OS4yMy0zLjcwMS41Ni0xLjQyLjM3NS0yLjc2MSAxLTMuOTY2IDEuODQtLjQyLjMwMS0uODIuNjM2LTEuMTkgMS4wMDFsLS4wMDYtLjI2NWE2Ljg1MiA2Ljg1MiAwIDAgMSAxMy41Mi0xLjY2IDEwLjE1IDEwLjE1IDAgMCAxLTUuMjIyIDMuMTdjLTEuMTIuMy0yLjI2Ni40OC0zLjQyNi41MjZsMS42NC0xLjY1LS43OC0uNzg2LTIuOTcgMi45OTEgMy40IDMuNDE2Ljc3Ni0uNzgtMi4wNjYtMi4wOGMxLjI1LS4wNDYgMi40OS0uMjMgMy43MDEtLjU2MSAxLjQxNS0uMzc1IDIuNzYxLTEgMy45NjItMS44NGE5LjUgOS41IDAgMCAwIDEuMTk1LTEuMDAxeiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMC45NjcgOC4zNzRhLjU2LjU2IDAgMCAwLS41MTUtLjM3LjU1LjU1IDAgMCAwLS41LjMxNWMtLjE0Ni4zMS0uMy42MS0uNDguOWE4IDggMCAwIDAtMy44MjItNC4zMzFBNy45MyA3LjkzIDAgMCAwIDUuMjg2IDcuNzA0YTguMDQgOC4wNCAwIDAgMC0xLjEyNSA1LjY3MiAxMCAxMCAwIDAgMC0xLjEgMS44MjUuNTUuNTUgMCAxIDAgLjk5LjQ3cS4yMTYtLjQ1OS40ODUtLjg5NWE4IDggMCAwIDAgMy44MTYgNC4zMzcgNy45MyA3LjkzIDAgMCAwIDEwLjM2NC0yLjgxNiA4LjAzIDguMDMgMCAwIDAgMS4xMy01LjY3MmMuNDMtLjU3LjgtMS4xOCAxLjEtMS44MjZhLjU1LjU1IDAgMCAwIC4wMi0uNDI1TTE4Ljg2NiAxMmMwIDEuNjgtLjYxNSAzLjMxMS0xLjcyNiA0LjU3MmE2Ljg1MiA2Ljg1MiAwIDAgMS0xMS44MDQtMi45MTYgMTAuMiAxMC4yIDAgMCAxIDUuMjI3LTMuMTY2YzEuMTItLjMgMi4yNjYtLjQ4IDMuNDI2LS41MjZsLTEuNjQ1IDEuNjUxLjc4Ljc4NUwxNi4xIDkuNDA0bC0zLjM5MS0zLjQwNi0uNzc1Ljc4IDIuMDY1IDIuMDgxYy0xLjI1LjA0LTIuNDkuMjMtMy43MDEuNTYtMS40Mi4zNzUtMi43NjEgMS0zLjk2NiAxLjg0LS40Mi4zMDEtLjgyLjYzNi0xLjE5IDEuMDAxbC0uMDA2LS4yNjVhNi44NTIgNi44NTIgMCAwIDEgMTMuNTItMS42NiAxMC4xNSAxMC4xNSAwIDAgMS01LjIyMiAzLjE3Yy0xLjEyLjMtMi4yNjYuNDgtMy40MjYuNTI2bDEuNjQtMS42NS0uNzgtLjc4Ni0yLjk3IDIuOTkxIDMuNCAzLjQxNi43NzYtLjc4LTIuMDY2LTIuMDhjMS4yNS0uMDQ2IDIuNDktLjIzIDMuNzAxLS41NjEgMS40MTYtLjM3NSAyLjc2MS0xIDMuOTYyLTEuODRxLjYzOS0uNDUyIDEuMTk1LTEuMDAxeiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNSQ05fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNDE1NUZGIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOS45NyA4Ljc3N2EuNS41IDAgMCAwLS40NTgtLjMyOS40OS40OSAwIDAgMC0uNDQ0LjI4IDggOCAwIDAgMS0uNDI3LjggNy4xIDcuMSAwIDAgMC0zLjM5Ny0zLjg1IDcuMDQ3IDcuMDQ3IDAgMCAwLTkuMjEyIDIuNTAzIDcuMTUgNy4xNSAwIDAgMC0xIDUuMDQyIDkgOSAwIDAgMC0uOTc4IDEuNjIzLjQ4OC40ODggMCAxIDAgLjg4LjQxOHEuMTkyLS40MDguNDMxLS43OTZhNy4xIDcuMSAwIDAgMCAzLjM5MyAzLjg1NSA3LjA0NyA3LjA0NyAwIDAgMCA5LjIxMi0yLjUwNCA3LjE0IDcuMTQgMCAwIDAgMS4wMDUtNS4wNDFxLjU3NS0uNzYyLjk3OC0xLjYyM2EuNS41IDAgMCAwIC4wMTctLjM3OG0tMS44NjcgMy4yMjRhNi4xNiA2LjE2IDAgMCAxLTEuNTM0IDQuMDYzIDYuMDkgNi4wOSAwIDAgMS0xMC40OTItMi41OTIgOS4xIDkuMSAwIDAgMSA0LjY0Ni0yLjgxNCAxMy44IDEzLjggMCAwIDEgMy4wNDUtLjQ2N2wtMS40NjMgMS40NjcuNjk0LjY5OCAyLjY0Ni0yLjY2My0zLjAxNS0zLjAyOC0uNjg5LjY5NCAxLjgzNiAxLjg1YTE0LjIgMTQuMiAwIDAgMC0zLjI5LjQ5N2MtMS4yNjMuMzM0LTIuNDU0Ljg5LTMuNTI2IDEuNjM2YTkgOSAwIDAgMC0xLjA1OC44OWwtLjAwNC0uMjM2YTYuMDkxIDYuMDkxIDAgMCAxIDEyLjAxNy0xLjQ3NiA5LjAzIDkuMDMgMCAwIDEtNC42NDEgMi44MTljLS45OTYuMjY2LTIuMDE0LjQyNi0zLjA0Ni40NjZsMS40NTktMS40NjctLjY5NC0uNjk4LTIuNjQxIDIuNjYgMy4wMjMgMy4wMzcuNjktLjY5NC0xLjgzNy0xLjg1YTE0LjUgMTQuNSAwIDAgMCAzLjI5LS40OTcgMTEuMSAxMS4xIDAgMCAwIDMuNTIyLTEuNjM2IDguNSA4LjUgMCAwIDAgMS4wNjItLjg5eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJSQ05fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/RCN
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenRCN = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenRCN', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0eq5t44._.js.map