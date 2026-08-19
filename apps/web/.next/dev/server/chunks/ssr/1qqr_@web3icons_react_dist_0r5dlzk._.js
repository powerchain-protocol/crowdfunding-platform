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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenECO.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenECO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M5.676 18.39q.448.43.955.803a8.89 8.89 0 0 0 3.684-7.183c0-2.938-1.449-5.544-3.69-7.184a9 9 0 0 0-.949.804 7.61 7.61 0 0 1 3.516 6.38c0 2.662-1.393 5.004-3.516 6.38'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M19.004 6.375A7.68 7.68 0 0 1 12 10.885a7.68 7.68 0 0 1-7.003-4.51c-.293.36-.557.747-.787 1.151A8.99 8.99 0 0 0 12 12.008a8.99 8.99 0 0 0 7.79-4.482 9 9 0 0 0-.786-1.151m-8.689 14.434c.112-4.88 4.044-8.8 8.874-8.8a8.6 8.6 0 0 1 1.797.184 9 9 0 0 1-.106 1.174 7.5 7.5 0 0 0-1.86-.236 7.65 7.65 0 0 0-5.435 2.327 7.64 7.64 0 0 0-2.147 5.508 8 8 0 0 1-1.123-.157'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M19.846 12.503c-.264 4.021-3.774 7.369-7.846 7.369q-.456.001-.904-.057l-.14 1.124a8.985 8.985 0 0 0 9.985-8.004l-1.078-.37-.017-.068zm-.241-5.29a8.98 8.98 0 0 0-16.591 4.796c0 2.785 1.27 5.28 3.257 6.925l.922-.77a7.92 7.92 0 0 1-3.056-6.155c0-4.235 3.628-7.863 7.863-7.863a7.98 7.98 0 0 1 6.751 3.92z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M5.676 18.39q.448.43.955.803a8.89 8.89 0 0 0 3.684-7.183c0-2.938-1.449-5.544-3.69-7.184a9 9 0 0 0-.949.804 7.61 7.61 0 0 1 3.516 6.38c0 2.662-1.393 5.004-3.516 6.38'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M19.004 6.375A7.68 7.68 0 0 1 12 10.885a7.68 7.68 0 0 1-7.003-4.51c-.293.36-.557.747-.787 1.151A8.99 8.99 0 0 0 12 12.008a8.99 8.99 0 0 0 7.79-4.482 9 9 0 0 0-.786-1.151m-8.689 14.434c.112-4.88 4.044-8.8 8.874-8.8a8.6 8.6 0 0 1 1.797.184 9 9 0 0 1-.106 1.174 7.5 7.5 0 0 0-1.86-.236 7.65 7.65 0 0 0-5.435 2.327 7.64 7.64 0 0 0-2.147 5.508 8 8 0 0 1-1.123-.157'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M19.846 12.503c-.264 4.021-3.774 7.369-7.846 7.369q-.456.001-.904-.057l-.14 1.124a8.985 8.985 0 0 0 9.985-8.004l-1.078-.37-.017-.068zm-.241-5.29a8.98 8.98 0 0 0-16.591 4.796c0 2.785 1.27 5.28 3.257 6.925l.922-.77a7.92 7.92 0 0 1-3.056-6.155c0-4.235 3.628-7.863 7.863-7.863a7.98 7.98 0 0 1 6.751 3.92z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ECO__a)'
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
                        d: 'M6.379 17.68q.398.383.848.714a7.9 7.9 0 0 0 3.275-6.385c0-2.611-1.288-4.928-3.28-6.385q-.448.331-.843.713a6.76 6.76 0 0 1 3.125 5.672c0 2.366-1.238 4.448-3.125 5.671'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M18.225 7A6.83 6.83 0 0 1 12 11.009 6.83 6.83 0 0 1 5.775 7a7.6 7.6 0 0 0-.7 1.023A7.99 7.99 0 0 0 12 12.007a7.99 7.99 0 0 0 6.924-3.984A8 8 0 0 0 18.225 7m-7.723 12.83c.1-4.338 3.595-7.823 7.888-7.823.55 0 1.078.055 1.598.165q-.014.526-.095 1.043a6.7 6.7 0 0 0-1.653-.21 6.79 6.79 0 0 0-6.278 4.325 6.8 6.8 0 0 0-.461 2.64 7 7 0 0 1-.999-.14'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M18.974 12.447c-.234 3.575-3.355 6.55-6.974 6.55q-.407.001-.804-.05l-.125.999a7.987 7.987 0 0 0 8.877-7.115l-.959-.329-.015-.06zm-.215-4.703a7.983 7.983 0 0 0-14.747 4.264 7.98 7.98 0 0 0 2.896 6.155l.819-.684a7.04 7.04 0 0 1-2.716-5.471c0-3.764 3.225-6.99 6.989-6.99a7.09 7.09 0 0 1 6 3.485z'
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
                        id: 'ECO__a'
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
 * @component @name TokenECO
 * @description Web3Icon for TokenECO
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjY3NiAxOC4zOXEuNDQ4LjQzLjk1NS44MDNhOC44OSA4Ljg5IDAgMCAwIDMuNjg0LTcuMTgzYzAtMi45MzgtMS40NDktNS41NDQtMy42OS03LjE4NGE5IDkgMCAwIDAtLjk0OS44MDQgNy42MSA3LjYxIDAgMCAxIDMuNTE2IDYuMzhjMCAyLjY2Mi0xLjM5MyA1LjAwNC0zLjUxNiA2LjM4Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTkuMDA0IDYuMzc1QTcuNjggNy42OCAwIDAgMSAxMiAxMC44ODVhNy42OCA3LjY4IDAgMCAxLTcuMDAzLTQuNTFjLS4yOTMuMzYtLjU1Ny43NDctLjc4NyAxLjE1MUE4Ljk5IDguOTkgMCAwIDAgMTIgMTIuMDA4YTguOTkgOC45OSAwIDAgMCA3Ljc5LTQuNDgyIDkgOSAwIDAgMC0uNzg2LTEuMTUxbS04LjY4OSAxNC40MzRjLjExMi00Ljg4IDQuMDQ0LTguOCA4Ljg3NC04LjhhOC42IDguNiAwIDAgMSAxLjc5Ny4xODQgOSA5IDAgMCAxLS4xMDYgMS4xNzQgNy41IDcuNSAwIDAgMC0xLjg2LS4yMzYgNy42NSA3LjY1IDAgMCAwLTUuNDM1IDIuMzI3IDcuNjQgNy42NCAwIDAgMC0yLjE0NyA1LjUwOCA4IDggMCAwIDEtMS4xMjMtLjE1NyIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5Ljg0NiAxMi41MDNjLS4yNjQgNC4wMjEtMy43NzQgNy4zNjktNy44NDYgNy4zNjlxLS40NTYuMDAxLS45MDQtLjA1N2wtLjE0IDEuMTI0YTguOTg1IDguOTg1IDAgMCAwIDkuOTg1LTguMDA0bC0xLjA3OC0uMzctLjAxNy0uMDY4em0tLjI0MS01LjI5YTguOTggOC45OCAwIDAgMC0xNi41OTEgNC43OTZjMCAyLjc4NSAxLjI3IDUuMjggMy4yNTcgNi45MjVsLjkyMi0uNzdhNy45MiA3LjkyIDAgMCAxLTMuMDU2LTYuMTU1YzAtNC4yMzUgMy42MjgtNy44NjMgNy44NjMtNy44NjNhNy45OCA3Ljk4IDAgMCAxIDYuNzUxIDMuOTJ6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjY3NiAxOC4zOXEuNDQ4LjQzLjk1NS44MDNhOC44OSA4Ljg5IDAgMCAwIDMuNjg0LTcuMTgzYzAtMi45MzgtMS40NDktNS41NDQtMy42OS03LjE4NGE5IDkgMCAwIDAtLjk0OS44MDQgNy42MSA3LjYxIDAgMCAxIDMuNTE2IDYuMzhjMCAyLjY2Mi0xLjM5MyA1LjAwNC0zLjUxNiA2LjM4Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTkuMDA0IDYuMzc1QTcuNjggNy42OCAwIDAgMSAxMiAxMC44ODVhNy42OCA3LjY4IDAgMCAxLTcuMDAzLTQuNTFjLS4yOTMuMzYtLjU1Ny43NDctLjc4NyAxLjE1MUE4Ljk5IDguOTkgMCAwIDAgMTIgMTIuMDA4YTguOTkgOC45OSAwIDAgMCA3Ljc5LTQuNDgyIDkgOSAwIDAgMC0uNzg2LTEuMTUxbS04LjY4OSAxNC40MzRjLjExMi00Ljg4IDQuMDQ0LTguOCA4Ljg3NC04LjhhOC42IDguNiAwIDAgMSAxLjc5Ny4xODQgOSA5IDAgMCAxLS4xMDYgMS4xNzQgNy41IDcuNSAwIDAgMC0xLjg2LS4yMzYgNy42NSA3LjY1IDAgMCAwLTUuNDM1IDIuMzI3IDcuNjQgNy42NCAwIDAgMC0yLjE0NyA1LjUwOCA4IDggMCAwIDEtMS4xMjMtLjE1NyIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5Ljg0NiAxMi41MDNjLS4yNjQgNC4wMjEtMy43NzQgNy4zNjktNy44NDYgNy4zNjlxLS40NTYuMDAxLS45MDQtLjA1N2wtLjE0IDEuMTI0YTguOTg1IDguOTg1IDAgMCAwIDkuOTg1LTguMDA0bC0xLjA3OC0uMzctLjAxNy0uMDY4em0tLjI0MS01LjI5YTguOTggOC45OCAwIDAgMC0xNi41OTEgNC43OTZjMCAyLjc4NSAxLjI3IDUuMjggMy4yNTcgNi45MjVsLjkyMi0uNzdhNy45MiA3LjkyIDAgMCAxLTMuMDU2LTYuMTU1YzAtNC4yMzUgMy42MjgtNy44NjMgNy44NjMtNy44NjNhNy45OCA3Ljk4IDAgMCAxIDYuNzUxIDMuOTJ6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNFQ09fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02LjM3OSAxNy42OHEuMzk4LjM4My44NDguNzE0YTcuOSA3LjkgMCAwIDAgMy4yNzUtNi4zODVjMC0yLjYxMS0xLjI4OC00LjkyOC0zLjI4LTYuMzg1cS0uNDQ4LjMzMS0uODQzLjcxM2E2Ljc2IDYuNzYgMCAwIDEgMy4xMjUgNS42NzJjMCAyLjM2Ni0xLjIzOCA0LjQ0OC0zLjEyNSA1LjY3MSIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC4yMjUgN0E2LjgzIDYuODMgMCAwIDEgMTIgMTEuMDA5IDYuODMgNi44MyAwIDAgMSA1Ljc3NSA3YTcuNiA3LjYgMCAwIDAtLjcgMS4wMjNBNy45OSA3Ljk5IDAgMCAwIDEyIDEyLjAwN2E3Ljk5IDcuOTkgMCAwIDAgNi45MjQtMy45ODRBOCA4IDAgMCAwIDE4LjIyNSA3bS03LjcyMyAxMi44M2MuMS00LjMzOCAzLjU5NS03LjgyMyA3Ljg4OC03LjgyMy41NSAwIDEuMDc4LjA1NSAxLjU5OC4xNjVxLS4wMTQuNTI2LS4wOTUgMS4wNDNhNi43IDYuNyAwIDAgMC0xLjY1My0uMjEgNi43OSA2Ljc5IDAgMCAwLTYuMjc4IDQuMzI1IDYuOCA2LjggMCAwIDAtLjQ2MSAyLjY0IDcgNyAwIDAgMS0uOTk5LS4xNCIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC45NzQgMTIuNDQ3Yy0uMjM0IDMuNTc1LTMuMzU1IDYuNTUtNi45NzQgNi41NXEtLjQwNy4wMDEtLjgwNC0uMDVsLS4xMjUuOTk5YTcuOTg3IDcuOTg3IDAgMCAwIDguODc3LTcuMTE1bC0uOTU5LS4zMjktLjAxNS0uMDZ6bS0uMjE1LTQuNzAzYTcuOTgzIDcuOTgzIDAgMCAwLTE0Ljc0NyA0LjI2NCA3Ljk4IDcuOTggMCAwIDAgMi44OTYgNi4xNTVsLjgxOS0uNjg0YTcuMDQgNy4wNCAwIDAgMS0yLjcxNi01LjQ3MWMwLTMuNzY0IDMuMjI1LTYuOTkgNi45ODktNi45OWE3LjA5IDcuMDkgMCAwIDEgNiAzLjQ4NXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iRUNPX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/ECO
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenECO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenECO', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0r5dlzk._.js.map