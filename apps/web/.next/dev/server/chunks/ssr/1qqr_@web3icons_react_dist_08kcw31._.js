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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenXCP.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenXCP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#ED1650',
                d: 'M18.143 6.375h-3.317a.5.5 0 0 0-.361.146l-6.06 5.986a.54.54 0 0 1-.361.168h-1.11a.53.53 0 0 1-.36-.168l-.725-.608a.53.53 0 0 1-.148-.369v-1.125a.53.53 0 0 1 .148-.37l.725-.804a.52.52 0 0 1 .36-.156h1.11a.53.53 0 0 1 .36.156l.485.493a.506.506 0 0 0 .723 0l1.165-1.183a.53.53 0 0 0 0-.739l-1.27-1.274a.5.5 0 0 0-.362-.153H5.819a.5.5 0 0 0-.361.153L3.117 8.903c-.097.1-.12.238-.117.378v3.374c0 .14.026.271.117.37l2.348 2.223a.5.5 0 0 0 .361.128h3.326a.5.5 0 0 0 .361-.137l6.051-6c.092-.1.225-.16.362-.164h1.116c.131 0 .263.065.361.164l.78.797c.096.098.118.231.117.369v.955c0 .138-.02.27-.117.37l-.78.804a.5.5 0 0 1-.36.141h-1.117a.5.5 0 0 1-.362-.141l-.484-.405a.506.506 0 0 0-.715-.008l-1.292 1.51a.54.54 0 0 0-.173.37v3.13c0 .288.247.494.526.494h1.654c.281-.004.524-.212.52-.494v-1.238c0-.288.219-.518.505-.518h2.037a.5.5 0 0 0 .362-.147l2.348-2.203a.53.53 0 0 0 .148-.37V9.28a.53.53 0 0 0-.148-.37l-2.348-2.389a.5.5 0 0 0-.361-.146'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M18.143 6.375h-3.317a.5.5 0 0 0-.361.146l-6.06 5.986a.54.54 0 0 1-.361.168h-1.11a.53.53 0 0 1-.36-.168l-.725-.608a.53.53 0 0 1-.148-.369v-1.125a.53.53 0 0 1 .148-.37l.725-.804a.52.52 0 0 1 .36-.156h1.11a.53.53 0 0 1 .36.156l.485.493a.506.506 0 0 0 .723 0l1.165-1.183a.53.53 0 0 0 0-.739l-1.27-1.274a.5.5 0 0 0-.362-.153H5.819a.5.5 0 0 0-.361.153L3.117 8.903c-.097.1-.12.238-.117.378v3.374c0 .14.026.271.117.37l2.348 2.223a.5.5 0 0 0 .361.128h3.326a.5.5 0 0 0 .361-.137l6.051-6c.092-.1.225-.16.362-.164h1.116c.131 0 .263.065.361.164l.78.797c.096.098.118.231.117.369v.955c0 .138-.02.27-.117.37l-.78.804a.5.5 0 0 1-.36.141h-1.117a.5.5 0 0 1-.362-.141l-.484-.405a.506.506 0 0 0-.715-.008l-1.292 1.51a.54.54 0 0 0-.173.37v3.13c0 .288.247.494.526.494h1.654c.281-.004.524-.212.52-.494v-1.238c0-.288.219-.518.505-.518h2.037a.5.5 0 0 0 .362-.147l2.348-2.203a.53.53 0 0 0 .148-.37V9.28a.53.53 0 0 0-.148-.37l-2.348-2.389a.5.5 0 0 0-.361-.146'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#XCP__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#ED1650',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M17.46 7h-2.948a.45.45 0 0 0-.321.13l-5.387 5.32a.48.48 0 0 1-.32.15h-.986a.48.48 0 0 1-.321-.15l-.644-.54a.47.47 0 0 1-.132-.327v-1a.47.47 0 0 1 .132-.33l.644-.714a.46.46 0 0 1 .32-.139h.986c.124 0 .234.058.321.139l.43.438c.174.18.47.18.643 0l1.036-1.052a.47.47 0 0 0 0-.657l-1.13-1.132A.45.45 0 0 0 9.462 7H6.506a.46.46 0 0 0-.321.136l-2.081 2.11c-.087.09-.107.213-.104.337v3c0 .124.023.24.104.328l2.087 1.976a.44.44 0 0 0 .321.114h2.956a.44.44 0 0 0 .322-.122l5.378-5.333c.082-.09.2-.143.321-.146h.993c.117 0 .233.058.321.146l.693.708c.085.088.105.206.104.328v.849c0 .122-.019.24-.104.328l-.693.716a.45.45 0 0 1-.321.125h-.993a.45.45 0 0 1-.32-.125l-.432-.36a.45.45 0 0 0-.634-.007l-1.149 1.343a.48.48 0 0 0-.154.328v2.782c0 .256.22.44.468.44h1.47c.25-.005.466-.19.462-.44v-1.1a.45.45 0 0 1 .45-.46h1.81c.12 0 .237-.048.321-.132l2.087-1.958a.47.47 0 0 0 .132-.329v-3a.47.47 0 0 0-.131-.328L17.78 7.13a.45.45 0 0 0-.32-.13'
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
                        id: 'XCP__a'
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
 * @component @name TokenXCP
 * @description Web3Icon for TokenXCP
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNFRDE2NTAiIGQ9Ik0xOC4xNDMgNi4zNzVoLTMuMzE3YS41LjUgMCAwIDAtLjM2MS4xNDZsLTYuMDYgNS45ODZhLjU0LjU0IDAgMCAxLS4zNjEuMTY4aC0xLjExYS41My41MyAwIDAgMS0uMzYtLjE2OGwtLjcyNS0uNjA4YS41My41MyAwIDAgMS0uMTQ4LS4zNjl2LTEuMTI1YS41My41MyAwIDAgMSAuMTQ4LS4zN2wuNzI1LS44MDRhLjUyLjUyIDAgMCAxIC4zNi0uMTU2aDEuMTFhLjUzLjUzIDAgMCAxIC4zNi4xNTZsLjQ4NS40OTNhLjUwNi41MDYgMCAwIDAgLjcyMyAwbDEuMTY1LTEuMTgzYS41My41MyAwIDAgMCAwLS43MzlsLTEuMjctMS4yNzRhLjUuNSAwIDAgMC0uMzYyLS4xNTNINS44MTlhLjUuNSAwIDAgMC0uMzYxLjE1M0wzLjExNyA4LjkwM2MtLjA5Ny4xLS4xMi4yMzgtLjExNy4zNzh2My4zNzRjMCAuMTQuMDI2LjI3MS4xMTcuMzdsMi4zNDggMi4yMjNhLjUuNSAwIDAgMCAuMzYxLjEyOGgzLjMyNmEuNS41IDAgMCAwIC4zNjEtLjEzN2w2LjA1MS02Yy4wOTItLjEuMjI1LS4xNi4zNjItLjE2NGgxLjExNmMuMTMxIDAgLjI2My4wNjUuMzYxLjE2NGwuNzguNzk3Yy4wOTYuMDk4LjExOC4yMzEuMTE3LjM2OXYuOTU1YzAgLjEzOC0uMDIuMjctLjExNy4zN2wtLjc4LjgwNGEuNS41IDAgMCAxLS4zNi4xNDFoLTEuMTE3YS41LjUgMCAwIDEtLjM2Mi0uMTQxbC0uNDg0LS40MDVhLjUwNi41MDYgMCAwIDAtLjcxNS0uMDA4bC0xLjI5MiAxLjUxYS41NC41NCAwIDAgMC0uMTczLjM3djMuMTNjMCAuMjg4LjI0Ny40OTQuNTI2LjQ5NGgxLjY1NGMuMjgxLS4wMDQuNTI0LS4yMTIuNTItLjQ5NHYtMS4yMzhjMC0uMjg4LjIxOS0uNTE4LjUwNS0uNTE4aDIuMDM3YS41LjUgMCAwIDAgLjM2Mi0uMTQ3bDIuMzQ4LTIuMjAzYS41My41MyAwIDAgMCAuMTQ4LS4zN1Y5LjI4YS41My41MyAwIDAgMC0uMTQ4LS4zN2wtMi4zNDgtMi4zODlhLjUuNSAwIDAgMC0uMzYxLS4xNDYiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC4xNDMgNi4zNzVoLTMuMzE3YS41LjUgMCAwIDAtLjM2MS4xNDZsLTYuMDYgNS45ODZhLjU0LjU0IDAgMCAxLS4zNjEuMTY4aC0xLjExYS41My41MyAwIDAgMS0uMzYtLjE2OGwtLjcyNS0uNjA4YS41My41MyAwIDAgMS0uMTQ4LS4zNjl2LTEuMTI1YS41My41MyAwIDAgMSAuMTQ4LS4zN2wuNzI1LS44MDRhLjUyLjUyIDAgMCAxIC4zNi0uMTU2aDEuMTFhLjUzLjUzIDAgMCAxIC4zNi4xNTZsLjQ4NS40OTNhLjUwNi41MDYgMCAwIDAgLjcyMyAwbDEuMTY1LTEuMTgzYS41My41MyAwIDAgMCAwLS43MzlsLTEuMjctMS4yNzRhLjUuNSAwIDAgMC0uMzYyLS4xNTNINS44MTlhLjUuNSAwIDAgMC0uMzYxLjE1M0wzLjExNyA4LjkwM2MtLjA5Ny4xLS4xMi4yMzgtLjExNy4zNzh2My4zNzRjMCAuMTQuMDI2LjI3MS4xMTcuMzdsMi4zNDggMi4yMjNhLjUuNSAwIDAgMCAuMzYxLjEyOGgzLjMyNmEuNS41IDAgMCAwIC4zNjEtLjEzN2w2LjA1MS02Yy4wOTItLjEuMjI1LS4xNi4zNjItLjE2NGgxLjExNmMuMTMxIDAgLjI2My4wNjUuMzYxLjE2NGwuNzguNzk3Yy4wOTYuMDk4LjExOC4yMzEuMTE3LjM2OXYuOTU1YzAgLjEzOC0uMDIuMjctLjExNy4zN2wtLjc4LjgwNGEuNS41IDAgMCAxLS4zNi4xNDFoLTEuMTE3YS41LjUgMCAwIDEtLjM2Mi0uMTQxbC0uNDg0LS40MDVhLjUwNi41MDYgMCAwIDAtLjcxNS0uMDA4bC0xLjI5MiAxLjUxYS41NC41NCAwIDAgMC0uMTczLjM3djMuMTNjMCAuMjg4LjI0Ny40OTQuNTI2LjQ5NGgxLjY1NGMuMjgxLS4wMDQuNTI0LS4yMTIuNTItLjQ5NHYtMS4yMzhjMC0uMjg4LjIxOS0uNTE4LjUwNS0uNTE4aDIuMDM3YS41LjUgMCAwIDAgLjM2Mi0uMTQ3bDIuMzQ4LTIuMjAzYS41My41MyAwIDAgMCAuMTQ4LS4zN1Y5LjI4YS41My41MyAwIDAgMC0uMTQ4LS4zN2wtMi4zNDgtMi4zODlhLjUuNSAwIDAgMC0uMzYxLS4xNDYiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNYQ1BfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRUQxNjUwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy40NiA3aC0yLjk0OGEuNDUuNDUgMCAwIDAtLjMyMS4xM2wtNS4zODcgNS4zMmEuNDguNDggMCAwIDEtLjMyLjE1aC0uOTg2YS40OC40OCAwIDAgMS0uMzIxLS4xNWwtLjY0NC0uNTRhLjQ3LjQ3IDAgMCAxLS4xMzItLjMyN3YtMWEuNDcuNDcgMCAwIDEgLjEzMi0uMzNsLjY0NC0uNzE0YS40Ni40NiAwIDAgMSAuMzItLjEzOWguOTg2Yy4xMjQgMCAuMjM0LjA1OC4zMjEuMTM5bC40My40MzhjLjE3NC4xOC40Ny4xOC42NDMgMGwxLjAzNi0xLjA1MmEuNDcuNDcgMCAwIDAgMC0uNjU3bC0xLjEzLTEuMTMyQS40NS40NSAwIDAgMCA5LjQ2MiA3SDYuNTA2YS40Ni40NiAwIDAgMC0uMzIxLjEzNmwtMi4wODEgMi4xMWMtLjA4Ny4wOS0uMTA3LjIxMy0uMTA0LjMzN3YzYzAgLjEyNC4wMjMuMjQuMTA0LjMyOGwyLjA4NyAxLjk3NmEuNDQuNDQgMCAwIDAgLjMyMS4xMTRoMi45NTZhLjQ0LjQ0IDAgMCAwIC4zMjItLjEyMmw1LjM3OC01LjMzM2MuMDgyLS4wOS4yLS4xNDMuMzIxLS4xNDZoLjk5M2MuMTE3IDAgLjIzMy4wNTguMzIxLjE0NmwuNjkzLjcwOGMuMDg1LjA4OC4xMDUuMjA2LjEwNC4zMjh2Ljg0OWMwIC4xMjItLjAxOS4yNC0uMTA0LjMyOGwtLjY5My43MTZhLjQ1LjQ1IDAgMCAxLS4zMjEuMTI1aC0uOTkzYS40NS40NSAwIDAgMS0uMzItLjEyNWwtLjQzMi0uMzZhLjQ1LjQ1IDAgMCAwLS42MzQtLjAwN2wtMS4xNDkgMS4zNDNhLjQ4LjQ4IDAgMCAwLS4xNTQuMzI4djIuNzgyYzAgLjI1Ni4yMi40NC40NjguNDRoMS40N2MuMjUtLjAwNS40NjYtLjE5LjQ2Mi0uNDR2LTEuMWEuNDUuNDUgMCAwIDEgLjQ1LS40NmgxLjgxYy4xMiAwIC4yMzctLjA0OC4zMjEtLjEzMmwyLjA4Ny0xLjk1OGEuNDcuNDcgMCAwIDAgLjEzMi0uMzI5di0zYS40Ny40NyAwIDAgMC0uMTMxLS4zMjhMMTcuNzggNy4xM2EuNDUuNDUgMCAwIDAtLjMyLS4xMyIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJYQ1BfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/XCP
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenXCP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenXCP', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_08kcw31._.js.map