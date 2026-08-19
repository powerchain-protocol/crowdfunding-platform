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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/wallets/WalletLit.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>WalletLit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FF4205',
                d: 'M8.936 9.496s-.017.314-.639 1.338c-.72 1.186-.788 2.575-.052 3.734 1.55 2.445 5.758 2.399 7.319.002.603-.927.776-1.99.57-3.071 0 0-.5-2.256-2.204-3.68.027.023.093.325.106.454.039.395 0 .81-.135 1.187-.1.277-.238.516-.47.7 0-.064-.017-.18-.018-.218-.01-.788-.323-1.518-.831-2.13-.445-.535-1.054-.9-1.695-1.169.016.054.046.278.05.323.033.372.04.893-.01 1.265s-.136.574-.252.922c-.177.528-.417.92-.721 1.39a14 14 0 0 1-.314.443s-.154-.952-.704-1.49'
            }
        ],
        [
            'path',
            {
                fill: '#FF4205',
                d: 'm19.389 7.507-7.106-4.014a.58.58 0 0 0-.566 0L4.611 7.507a.55.55 0 0 0-.282.48v8.027c0 .197.107.38.282.479l7.107 4.014a.58.58 0 0 0 .565 0l7.106-4.014a.55.55 0 0 0 .282-.48V7.987a.55.55 0 0 0-.282-.479M12.497 3.13a1.01 1.01 0 0 0-.994 0L4.397 7.144a.97.97 0 0 0-.497.842v8.028c0 .347.19.668.497.842l7.106 4.014c.308.173.686.173.994 0l7.106-4.014a.97.97 0 0 0 .497-.842V7.986a.97.97 0 0 0-.497-.842z',
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
                d: 'M8.936 9.496s-.017.314-.639 1.338c-.72 1.186-.788 2.575-.052 3.734 1.55 2.445 5.758 2.399 7.319.002.603-.927.776-1.99.57-3.071 0 0-.5-2.256-2.204-3.68.027.023.093.325.106.454.039.395 0 .81-.135 1.187-.1.277-.238.516-.47.7 0-.064-.017-.18-.018-.218-.01-.788-.323-1.518-.831-2.13-.445-.535-1.054-.9-1.695-1.169.016.054.046.278.05.323.033.372.04.893-.01 1.265s-.136.574-.252.922c-.177.528-.417.92-.721 1.39a14 14 0 0 1-.314.443s-.154-.952-.704-1.49'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm19.389 7.507-7.106-4.014a.58.58 0 0 0-.566 0L4.611 7.507a.55.55 0 0 0-.282.48v8.027c0 .197.107.38.282.479l7.107 4.014a.58.58 0 0 0 .565 0l7.106-4.014a.55.55 0 0 0 .282-.48V7.987a.55.55 0 0 0-.282-.479M12.497 3.13a1.01 1.01 0 0 0-.994 0L4.397 7.144a.97.97 0 0 0-.497.842v8.028c0 .347.19.668.497.842l7.106 4.014c.308.173.686.173.994 0l7.106-4.014a.97.97 0 0 0 .497-.842V7.986a.97.97 0 0 0-.497-.842z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#lit__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FF4205',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M9.276 9.774s-.015.28-.568 1.19c-.64 1.054-.7 2.288-.046 3.32 1.378 2.172 5.119 2.13 6.506 0 .536-.824.69-1.77.506-2.73 0 0-.443-2.005-1.958-3.27.023.02.082.288.093.403.035.352.001.72-.12 1.055-.088.246-.21.459-.418.623 0-.057-.015-.16-.015-.194-.01-.7-.287-1.35-.74-1.894-.394-.476-.935-.8-1.506-1.039.015.048.041.248.045.287.03.33.035.794-.01 1.124-.044.33-.12.51-.223.82-.157.47-.37.818-.641 1.236-.05.076-.199.287-.279.393 0 0-.137-.846-.626-1.324'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M18.568 8.007 12.25 4.439a.51.51 0 0 0-.502 0L5.432 8.007a.49.49 0 0 0-.25.425v7.136a.49.49 0 0 0 .25.425l6.317 3.568a.51.51 0 0 0 .502 0l6.317-3.568a.49.49 0 0 0 .251-.425V8.432a.49.49 0 0 0-.251-.425m-6.126-3.891a.9.9 0 0 0-.884 0L5.242 7.684a.86.86 0 0 0-.442.748v7.136c0 .309.168.594.442.748l6.316 3.568a.9.9 0 0 0 .884 0l6.316-3.568a.86.86 0 0 0 .442-.748V8.432a.86.86 0 0 0-.442-.748z',
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
                        id: 'lit__a'
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
 * @component @name WalletLit
 * @description Web3Icon for WalletLit
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRjQyMDUiIGQ9Ik04LjkzNiA5LjQ5NnMtLjAxNy4zMTQtLjYzOSAxLjMzOGMtLjcyIDEuMTg2LS43ODggMi41NzUtLjA1MiAzLjczNCAxLjU1IDIuNDQ1IDUuNzU4IDIuMzk5IDcuMzE5LjAwMi42MDMtLjkyNy43NzYtMS45OS41Ny0zLjA3MSAwIDAtLjUtMi4yNTYtMi4yMDQtMy42OC4wMjcuMDIzLjA5My4zMjUuMTA2LjQ1NC4wMzkuMzk1IDAgLjgxLS4xMzUgMS4xODctLjEuMjc3LS4yMzguNTE2LS40Ny43IDAtLjA2NC0uMDE3LS4xOC0uMDE4LS4yMTgtLjAxLS43ODgtLjMyMy0xLjUxOC0uODMxLTIuMTMtLjQ0NS0uNTM1LTEuMDU0LS45LTEuNjk1LTEuMTY5LjAxNi4wNTQuMDQ2LjI3OC4wNS4zMjMuMDMzLjM3Mi4wNC44OTMtLjAxIDEuMjY1cy0uMTM2LjU3NC0uMjUyLjkyMmMtLjE3Ny41MjgtLjQxNy45Mi0uNzIxIDEuMzlhMTQgMTQgMCAwIDEtLjMxNC40NDNzLS4xNTQtLjk1Mi0uNzA0LTEuNDkiLz4KICAgIDxwYXRoIGZpbGw9IiNGRjQyMDUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTE5LjM4OSA3LjUwNy03LjEwNi00LjAxNGEuNTguNTggMCAwIDAtLjU2NiAwTDQuNjExIDcuNTA3YS41NS41NSAwIDAgMC0uMjgyLjQ4djguMDI3YzAgLjE5Ny4xMDcuMzguMjgyLjQ3OWw3LjEwNyA0LjAxNGEuNTguNTggMCAwIDAgLjU2NSAwbDcuMTA2LTQuMDE0YS41NS41NSAwIDAgMCAuMjgyLS40OFY3Ljk4N2EuNTUuNTUgMCAwIDAtLjI4Mi0uNDc5TTEyLjQ5NyAzLjEzYTEuMDEgMS4wMSAwIDAgMC0uOTk0IDBMNC4zOTcgNy4xNDRhLjk3Ljk3IDAgMCAwLS40OTcuODQydjguMDI4YzAgLjM0Ny4xOS42NjguNDk3Ljg0Mmw3LjEwNiA0LjAxNGMuMzA4LjE3My42ODYuMTczLjk5NCAwbDcuMTA2LTQuMDE0YS45Ny45NyAwIDAgMCAuNDk3LS44NDJWNy45ODZhLjk3Ljk3IDAgMCAwLS40OTctLjg0MnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04LjkzNiA5LjQ5NnMtLjAxNy4zMTQtLjYzOSAxLjMzOGMtLjcyIDEuMTg2LS43ODggMi41NzUtLjA1MiAzLjczNCAxLjU1IDIuNDQ1IDUuNzU4IDIuMzk5IDcuMzE5LjAwMi42MDMtLjkyNy43NzYtMS45OS41Ny0zLjA3MSAwIDAtLjUtMi4yNTYtMi4yMDQtMy42OC4wMjcuMDIzLjA5My4zMjUuMTA2LjQ1NC4wMzkuMzk1IDAgLjgxLS4xMzUgMS4xODctLjEuMjc3LS4yMzguNTE2LS40Ny43IDAtLjA2NC0uMDE3LS4xOC0uMDE4LS4yMTgtLjAxLS43ODgtLjMyMy0xLjUxOC0uODMxLTIuMTMtLjQ0NS0uNTM1LTEuMDU0LS45LTEuNjk1LTEuMTY5LjAxNi4wNTQuMDQ2LjI3OC4wNS4zMjMuMDMzLjM3Mi4wNC44OTMtLjAxIDEuMjY1cy0uMTM2LjU3NC0uMjUyLjkyMmMtLjE3Ny41MjgtLjQxNy45Mi0uNzIxIDEuMzlhMTQgMTQgMCAwIDEtLjMxNC40NDNzLS4xNTQtLjk1Mi0uNzA0LTEuNDkiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTE5LjM4OSA3LjUwNy03LjEwNi00LjAxNGEuNTguNTggMCAwIDAtLjU2NiAwTDQuNjExIDcuNTA3YS41NS41NSAwIDAgMC0uMjgyLjQ4djguMDI3YzAgLjE5Ny4xMDcuMzguMjgyLjQ3OWw3LjEwNyA0LjAxNGEuNTguNTggMCAwIDAgLjU2NSAwbDcuMTA2LTQuMDE0YS41NS41NSAwIDAgMCAuMjgyLS40OFY3Ljk4N2EuNTUuNTUgMCAwIDAtLjI4Mi0uNDc5TTEyLjQ5NyAzLjEzYTEuMDEgMS4wMSAwIDAgMC0uOTk0IDBMNC4zOTcgNy4xNDRhLjk3Ljk3IDAgMCAwLS40OTcuODQydjguMDI4YzAgLjM0Ny4xOS42NjguNDk3Ljg0Mmw3LjEwNiA0LjAxNGMuMzA4LjE3My42ODYuMTczLjk5NCAwbDcuMTA2LTQuMDE0YS45Ny45NyAwIDAgMCAuNDk3LS44NDJWNy45ODZhLjk3Ljk3IDAgMCAwLS40OTctLjg0MnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNsaXRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRkY0MjA1IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05LjI3NiA5Ljc3NHMtLjAxNS4yOC0uNTY4IDEuMTljLS42NCAxLjA1NC0uNyAyLjI4OC0uMDQ2IDMuMzIgMS4zNzggMi4xNzIgNS4xMTkgMi4xMyA2LjUwNiAwIC41MzYtLjgyNC42OS0xLjc3LjUwNi0yLjczIDAgMC0uNDQzLTIuMDA1LTEuOTU4LTMuMjcuMDIzLjAyLjA4Mi4yODguMDkzLjQwMy4wMzUuMzUyLjAwMS43Mi0uMTIgMS4wNTUtLjA4OC4yNDYtLjIxLjQ1OS0uNDE4LjYyMyAwLS4wNTctLjAxNS0uMTYtLjAxNS0uMTk0LS4wMS0uNy0uMjg3LTEuMzUtLjc0LTEuODk0LS4zOTQtLjQ3Ni0uOTM1LS44LTEuNTA2LTEuMDM5LjAxNS4wNDguMDQxLjI0OC4wNDUuMjg3LjAzLjMzLjAzNS43OTQtLjAxIDEuMTI0LS4wNDQuMzMtLjEyLjUxLS4yMjMuODItLjE1Ny40Ny0uMzcuODE4LS42NDEgMS4yMzYtLjA1LjA3Ni0uMTk5LjI4Ny0uMjc5LjM5MyAwIDAtLjEzNy0uODQ2LS42MjYtMS4zMjQiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOC41NjggOC4wMDcgMTIuMjUgNC40MzlhLjUxLjUxIDAgMCAwLS41MDIgMEw1LjQzMiA4LjAwN2EuNDkuNDkgMCAwIDAtLjI1LjQyNXY3LjEzNmEuNDkuNDkgMCAwIDAgLjI1LjQyNWw2LjMxNyAzLjU2OGEuNTEuNTEgMCAwIDAgLjUwMiAwbDYuMzE3LTMuNTY4YS40OS40OSAwIDAgMCAuMjUxLS40MjVWOC40MzJhLjQ5LjQ5IDAgMCAwLS4yNTEtLjQyNW0tNi4xMjYtMy44OTFhLjkuOSAwIDAgMC0uODg0IDBMNS4yNDIgNy42ODRhLjg2Ljg2IDAgMCAwLS40NDIuNzQ4djcuMTM2YzAgLjMwOS4xNjguNTk0LjQ0Mi43NDhsNi4zMTYgMy41NjhhLjkuOSAwIDAgMCAuODg0IDBsNi4zMTYtMy41NjhhLjg2Ljg2IDAgMCAwIC40NDItLjc0OFY4LjQzMmEuODYuODYgMCAwIDAtLjQ0Mi0uNzQ4eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImxpdF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/wallets/lit
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const WalletLit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('WalletLit', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1izn09f._.js.map