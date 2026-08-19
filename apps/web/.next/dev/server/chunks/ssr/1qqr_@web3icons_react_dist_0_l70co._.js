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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/Token0X0.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Token0X0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#D3D2D3',
                d: 'M11.47 3.641a2.353 2.353 0 0 0-3.884 2.332A2.506 2.506 0 0 0 4.481 9.48a2.793 2.793 0 0 0 .043 4.949 2.506 2.506 0 0 0 3.062 3.576A2.332 2.332 0 0 0 9.833 21a2.32 2.32 0 0 0 1.637-.652v-2.527h-.673a1.06 1.06 0 1 1 0-1.06H11a.47.47 0 0 0 .471-.472v-3.237a.53.53 0 0 0-1.06 0v1.06a.53.53 0 0 1-.53.53H8.679a1.06 1.06 0 1 1 0-1.06h.143a.53.53 0 0 0 .53-.53v-2.12a.53.53 0 0 0-.53-.53h-.143a1.06 1.06 0 1 1 0-1.06H9.88a.53.53 0 0 1 .53.53v1.06a.53.53 0 1 0 1.06 0V7.695a.47.47 0 0 0-.472-.472h-.202a1.06 1.06 0 1 1 0-1.06h.673z'
            }
        ],
        [
            'path',
            {
                fill: '#00CBC4',
                d: 'M12.53 3.641a2.353 2.353 0 0 1 3.883 2.332 2.507 2.507 0 0 1 3.105 3.508 2.794 2.794 0 0 1-.042 4.949 2.505 2.505 0 0 1-3.063 3.576A2.332 2.332 0 0 1 14.167 21a2.32 2.32 0 0 1-1.637-.652v-2.527h.673a1.06 1.06 0 1 0 0-1.06H13a.47.47 0 0 1-.471-.472v-3.237a.53.53 0 0 1 1.06 0v1.06a.53.53 0 0 0 .53.53h1.202a1.059 1.059 0 1 0 0-1.06h-.143a.53.53 0 0 1-.53-.53v-2.12a.53.53 0 0 1 .53-.53h.143a1.06 1.06 0 1 0 0-1.06h-1.203a.53.53 0 0 0-.53.53v1.06a.53.53 0 1 1-1.06 0V7.695A.47.47 0 0 1 13 7.223h.202a1.06 1.06 0 1 0 0-1.06h-.673z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.47 3.641a2.353 2.353 0 0 0-3.884 2.332A2.506 2.506 0 0 0 4.481 9.48a2.793 2.793 0 0 0 .043 4.949 2.506 2.506 0 0 0 3.062 3.576A2.332 2.332 0 0 0 9.833 21a2.32 2.32 0 0 0 1.637-.652v-2.527h-.673a1.06 1.06 0 1 1 0-1.06H11a.47.47 0 0 0 .471-.472v-3.237a.53.53 0 0 0-1.06 0v1.06a.53.53 0 0 1-.53.53H8.679a1.06 1.06 0 1 1 0-1.06h.143a.53.53 0 0 0 .53-.53v-2.12a.53.53 0 0 0-.53-.53h-.143a1.06 1.06 0 1 1 0-1.06H9.88a.53.53 0 0 1 .53.53v1.06a.53.53 0 1 0 1.06 0V7.695a.47.47 0 0 0-.472-.472h-.202a1.06 1.06 0 1 1 0-1.06h.673zm1.06 0a2.353 2.353 0 0 1 3.883 2.332 2.507 2.507 0 0 1 3.105 3.508 2.794 2.794 0 0 1-.042 4.949 2.505 2.505 0 0 1-3.063 3.576A2.332 2.332 0 0 1 14.167 21a2.32 2.32 0 0 1-1.637-.652v-2.527h.673a1.06 1.06 0 1 0 0-1.06H13a.47.47 0 0 1-.471-.472v-3.237a.53.53 0 0 1 1.06 0v1.06a.53.53 0 0 0 .53.53h1.202a1.059 1.059 0 1 0 0-1.06h-.143a.53.53 0 0 1-.53-.53v-2.12a.53.53 0 0 1 .53-.53h.143a1.06 1.06 0 1 0 0-1.06h-1.203a.53.53 0 0 0-.53.53v1.06a.53.53 0 1 1-1.06 0V7.695A.47.47 0 0 1 13 7.223h.202a1.06 1.06 0 1 0 0-1.06h-.673z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#0X0__a)'
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
                        fill: '#D3D2D3',
                        d: 'M11.53 4.57a2.092 2.092 0 0 0-3.453 2.073 2.228 2.228 0 0 0-2.76 3.118 2.483 2.483 0 0 0 .037 4.399 2.227 2.227 0 0 0 2.723 3.179 2.073 2.073 0 0 0 1.997 2.66 2.06 2.06 0 0 0 1.455-.578v-2.247h-.598a.943.943 0 0 1-1.758-.471.942.942 0 0 1 1.758-.471h.179c.235 0 .42-.188.42-.42v-2.877a.471.471 0 0 0-.943 0v.942a.47.47 0 0 1-.47.471h-1.07a.942.942 0 1 1 0-.942h.127a.47.47 0 0 0 .471-.471v-1.884a.47.47 0 0 0-.47-.471h-.128a.943.943 0 1 1 0-.942h1.07a.47.47 0 0 1 .47.471v.942a.47.47 0 1 0 .942 0V8.173a.417.417 0 0 0-.42-.419h-.178a.942.942 0 1 1 0-.942h.598z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#00CBC4',
                        d: 'M12.47 4.57a2.091 2.091 0 0 1 3.453 2.073 2.228 2.228 0 0 1 2.76 3.118 2.484 2.484 0 0 1 .943 3.493 2.5 2.5 0 0 1-.98.906 2.228 2.228 0 0 1-2.723 3.179 2.072 2.072 0 0 1-1.997 2.66 2.06 2.06 0 0 1-1.455-.578v-2.247h.598a.943.943 0 1 0 0-.942h-.18a.417.417 0 0 1-.418-.42v-2.877a.472.472 0 0 1 .942 0v.942a.47.47 0 0 0 .47.471h1.07a.942.942 0 1 0 0-.942h-.127a.47.47 0 0 1-.471-.471v-1.884a.47.47 0 0 1 .47-.471h.128a.943.943 0 1 0 0-.942h-1.07a.47.47 0 0 0-.47.471v.942a.47.47 0 1 1-.942 0V8.173c0-.235.188-.419.419-.419h.179a.942.942 0 1 0 0-.942h-.598z'
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
                        id: '0X0__a'
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
 * @component @name Token0X0
 * @description Web3Icon for Token0X0
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNEM0QyRDMiIGQ9Ik0xMS40NyAzLjY0MWEyLjM1MyAyLjM1MyAwIDAgMC0zLjg4NCAyLjMzMkEyLjUwNiAyLjUwNiAwIDAgMCA0LjQ4MSA5LjQ4YTIuNzkzIDIuNzkzIDAgMCAwIC4wNDMgNC45NDkgMi41MDYgMi41MDYgMCAwIDAgMy4wNjIgMy41NzZBMi4zMzIgMi4zMzIgMCAwIDAgOS44MzMgMjFhMi4zMiAyLjMyIDAgMCAwIDEuNjM3LS42NTJ2LTIuNTI3aC0uNjczYTEuMDYgMS4wNiAwIDEgMSAwLTEuMDZIMTFhLjQ3LjQ3IDAgMCAwIC40NzEtLjQ3MnYtMy4yMzdhLjUzLjUzIDAgMCAwLTEuMDYgMHYxLjA2YS41My41MyAwIDAgMS0uNTMuNTNIOC42NzlhMS4wNiAxLjA2IDAgMSAxIDAtMS4wNmguMTQzYS41My41MyAwIDAgMCAuNTMtLjUzdi0yLjEyYS41My41MyAwIDAgMC0uNTMtLjUzaC0uMTQzYTEuMDYgMS4wNiAwIDEgMSAwLTEuMDZIOS44OGEuNTMuNTMgMCAwIDEgLjUzLjUzdjEuMDZhLjUzLjUzIDAgMSAwIDEuMDYgMFY3LjY5NWEuNDcuNDcgMCAwIDAtLjQ3Mi0uNDcyaC0uMjAyYTEuMDYgMS4wNiAwIDEgMSAwLTEuMDZoLjY3M3oiLz4KICAgIDxwYXRoIGZpbGw9IiMwMENCQzQiIGQ9Ik0xMi41MyAzLjY0MWEyLjM1MyAyLjM1MyAwIDAgMSAzLjg4MyAyLjMzMiAyLjUwNyAyLjUwNyAwIDAgMSAzLjEwNSAzLjUwOCAyLjc5NCAyLjc5NCAwIDAgMS0uMDQyIDQuOTQ5IDIuNTA1IDIuNTA1IDAgMCAxLTMuMDYzIDMuNTc2QTIuMzMyIDIuMzMyIDAgMCAxIDE0LjE2NyAyMWEyLjMyIDIuMzIgMCAwIDEtMS42MzctLjY1MnYtMi41MjdoLjY3M2ExLjA2IDEuMDYgMCAxIDAgMC0xLjA2SDEzYS40Ny40NyAwIDAgMS0uNDcxLS40NzJ2LTMuMjM3YS41My41MyAwIDAgMSAxLjA2IDB2MS4wNmEuNTMuNTMgMCAwIDAgLjUzLjUzaDEuMjAyYTEuMDU5IDEuMDU5IDAgMSAwIDAtMS4wNmgtLjE0M2EuNTMuNTMgMCAwIDEtLjUzLS41M3YtMi4xMmEuNTMuNTMgMCAwIDEgLjUzLS41M2guMTQzYTEuMDYgMS4wNiAwIDEgMCAwLTEuMDZoLTEuMjAzYS41My41MyAwIDAgMC0uNTMuNTN2MS4wNmEuNTMuNTMgMCAxIDEtMS4wNiAwVjcuNjk1QS40Ny40NyAwIDAgMSAxMyA3LjIyM2guMjAyYTEuMDYgMS4wNiAwIDEgMCAwLTEuMDZoLS42NzN6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS40NyAzLjY0MWEyLjM1MyAyLjM1MyAwIDAgMC0zLjg4NCAyLjMzMkEyLjUwNiAyLjUwNiAwIDAgMCA0LjQ4MSA5LjQ4YTIuNzkzIDIuNzkzIDAgMCAwIC4wNDMgNC45NDkgMi41MDYgMi41MDYgMCAwIDAgMy4wNjIgMy41NzZBMi4zMzIgMi4zMzIgMCAwIDAgOS44MzMgMjFhMi4zMiAyLjMyIDAgMCAwIDEuNjM3LS42NTJ2LTIuNTI3aC0uNjczYTEuMDYgMS4wNiAwIDEgMSAwLTEuMDZIMTFhLjQ3LjQ3IDAgMCAwIC40NzEtLjQ3MnYtMy4yMzdhLjUzLjUzIDAgMCAwLTEuMDYgMHYxLjA2YS41My41MyAwIDAgMS0uNTMuNTNIOC42NzlhMS4wNiAxLjA2IDAgMSAxIDAtMS4wNmguMTQzYS41My41MyAwIDAgMCAuNTMtLjUzdi0yLjEyYS41My41MyAwIDAgMC0uNTMtLjUzaC0uMTQzYTEuMDYgMS4wNiAwIDEgMSAwLTEuMDZIOS44OGEuNTMuNTMgMCAwIDEgLjUzLjUzdjEuMDZhLjUzLjUzIDAgMSAwIDEuMDYgMFY3LjY5NWEuNDcuNDcgMCAwIDAtLjQ3Mi0uNDcyaC0uMjAyYTEuMDYgMS4wNiAwIDEgMSAwLTEuMDZoLjY3M3ptMS4wNiAwYTIuMzUzIDIuMzUzIDAgMCAxIDMuODgzIDIuMzMyIDIuNTA3IDIuNTA3IDAgMCAxIDMuMTA1IDMuNTA4IDIuNzk0IDIuNzk0IDAgMCAxLS4wNDIgNC45NDkgMi41MDUgMi41MDUgMCAwIDEtMy4wNjMgMy41NzZBMi4zMzIgMi4zMzIgMCAwIDEgMTQuMTY3IDIxYTIuMzIgMi4zMiAwIDAgMS0xLjYzNy0uNjUydi0yLjUyN2guNjczYTEuMDYgMS4wNiAwIDEgMCAwLTEuMDZIMTNhLjQ3LjQ3IDAgMCAxLS40NzEtLjQ3MnYtMy4yMzdhLjUzLjUzIDAgMCAxIDEuMDYgMHYxLjA2YS41My41MyAwIDAgMCAuNTMuNTNoMS4yMDJhMS4wNTkgMS4wNTkgMCAxIDAgMC0xLjA2aC0uMTQzYS41My41MyAwIDAgMS0uNTMtLjUzdi0yLjEyYS41My41MyAwIDAgMSAuNTMtLjUzaC4xNDNhMS4wNiAxLjA2IDAgMSAwIDAtMS4wNmgtMS4yMDNhLjUzLjUzIDAgMCAwLS41My41M3YxLjA2YS41My41MyAwIDEgMS0xLjA2IDBWNy42OTVBLjQ3LjQ3IDAgMCAxIDEzIDcuMjIzaC4yMDJhMS4wNiAxLjA2IDAgMSAwIDAtMS4wNmgtLjY3M3oiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCMwWDBfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNEM0QyRDMiIGQ9Ik0xMS41MyA0LjU3YTIuMDkyIDIuMDkyIDAgMCAwLTMuNDUzIDIuMDczIDIuMjI4IDIuMjI4IDAgMCAwLTIuNzYgMy4xMTggMi40ODMgMi40ODMgMCAwIDAgLjAzNyA0LjM5OSAyLjIyNyAyLjIyNyAwIDAgMCAyLjcyMyAzLjE3OSAyLjA3MyAyLjA3MyAwIDAgMCAxLjk5NyAyLjY2IDIuMDYgMi4wNiAwIDAgMCAxLjQ1NS0uNTc4di0yLjI0N2gtLjU5OGEuOTQzLjk0MyAwIDAgMS0xLjc1OC0uNDcxLjk0Mi45NDIgMCAwIDEgMS43NTgtLjQ3MWguMTc5Yy4yMzUgMCAuNDItLjE4OC40Mi0uNDJ2LTIuODc3YS40NzEuNDcxIDAgMCAwLS45NDMgMHYuOTQyYS40Ny40NyAwIDAgMS0uNDcuNDcxaC0xLjA3YS45NDIuOTQyIDAgMSAxIDAtLjk0MmguMTI3YS40Ny40NyAwIDAgMCAuNDcxLS40NzF2LTEuODg0YS40Ny40NyAwIDAgMC0uNDctLjQ3MWgtLjEyOGEuOTQzLjk0MyAwIDEgMSAwLS45NDJoMS4wN2EuNDcuNDcgMCAwIDEgLjQ3LjQ3MXYuOTQyYS40Ny40NyAwIDEgMCAuOTQyIDBWOC4xNzNhLjQxNy40MTcgMCAwIDAtLjQyLS40MTloLS4xNzhhLjk0Mi45NDIgMCAxIDEgMC0uOTQyaC41OTh6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwQ0JDNCIgZD0iTTEyLjQ3IDQuNTdhMi4wOTEgMi4wOTEgMCAwIDEgMy40NTMgMi4wNzMgMi4yMjggMi4yMjggMCAwIDEgMi43NiAzLjExOCAyLjQ4NCAyLjQ4NCAwIDAgMSAuOTQzIDMuNDkzIDIuNSAyLjUgMCAwIDEtLjk4LjkwNiAyLjIyOCAyLjIyOCAwIDAgMS0yLjcyMyAzLjE3OSAyLjA3MiAyLjA3MiAwIDAgMS0xLjk5NyAyLjY2IDIuMDYgMi4wNiAwIDAgMS0xLjQ1NS0uNTc4di0yLjI0N2guNTk4YS45NDMuOTQzIDAgMSAwIDAtLjk0MmgtLjE4YS40MTcuNDE3IDAgMCAxLS40MTgtLjQydi0yLjg3N2EuNDcyLjQ3MiAwIDAgMSAuOTQyIDB2Ljk0MmEuNDcuNDcgMCAwIDAgLjQ3LjQ3MWgxLjA3YS45NDIuOTQyIDAgMSAwIDAtLjk0MmgtLjEyN2EuNDcuNDcgMCAwIDEtLjQ3MS0uNDcxdi0xLjg4NGEuNDcuNDcgMCAwIDEgLjQ3LS40NzFoLjEyOGEuOTQzLjk0MyAwIDEgMCAwLS45NDJoLTEuMDdhLjQ3LjQ3IDAgMCAwLS40Ny40NzF2Ljk0MmEuNDcuNDcgMCAxIDEtLjk0MiAwVjguMTczYzAtLjIzNS4xODgtLjQxOS40MTktLjQxOWguMTc5YS45NDIuOTQyIDAgMSAwIDAtLjk0MmgtLjU5OHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iMFgwX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/0X0
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const Token0X0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('Token0X0', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0_l70co._.js.map