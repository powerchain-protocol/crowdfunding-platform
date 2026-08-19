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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenALCX.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenALCX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M21 3H3v18h18z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#ALCX__a)',
                d: 'M3 3h18v18H3z'
            }
        ],
        [
            'path',
            {
                fill: '#ECBE9D',
                d: 'M12 17.786a5.784 5.784 0 0 0 4.092-9.876A5.785 5.785 0 1 0 12 17.786m0-.321a5.464 5.464 0 1 0 0-10.929 5.464 5.464 0 0 0 0 10.929',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#ECBE9D',
                d: 'M11.862 7.573V6.48h.321v1.093l3.674 2.925v2.916l-.62.514.736 1.286h-2.372l-1.575 1.298-1.626-1.298H8.143l.675-1.257-.675-.543v-2.919l3.719-2.925zm.16.28-3.461 2.726 1.433 1.15 2.032-3.432 1.983 3.48 1.434-1.198zm3.514 3.066-1.363 1.141.903 1.588.46-.385zm-5.29 1.013 1.937 1.559v1.401h3.237l-3.4-5.956zm1.937 3.282v.752l.913-.752zm-.321.758v-2.327l-3.398-2.732v2.35zM9.075 14.16l-.395.733H10z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'ALCX__a',
                        x1: '6.349',
                        x2: '24.905',
                        y1: '6.121',
                        y2: '27.435',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#1A1E21'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#06060A'
                            }
                        ]
                    ]
                ]
            ]
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 21a8.998 8.998 0 0 0 8.315-12.444A9 9 0 1 0 12 21m0-.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.784 5.115v-1.7h.5v1.7l5.715 4.55V14.2l-.965.8 1.145 2h-3.69l-2.45 2.02L9.509 17h-3.51l1.05-1.955-1.05-.845V9.66l5.785-4.55zm.25.435L6.649 9.79l2.23 1.79 3.16-5.34 3.085 5.415 2.23-1.865zm5.465 4.77-2.12 1.775 1.405 2.47.715-.6zm-8.23 1.575 3.015 2.425v2.18h5.035l-5.29-9.265zM12.284 17v1.17l1.42-1.17zm-.5 1.18v-3.62l-5.285-4.25v3.655zm-4.335-2.82-.615 1.14h2.055z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ALCX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#ECBE9D',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 20a7.999 7.999 0 1 0 0-15.998A7.999 7.999 0 0 0 12 20m0-.445a7.556 7.556 0 1 0 0-15.111 7.556 7.556 0 0 0 0 15.112',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.808 5.88V4.369h.445v1.51l5.08 4.045v4.031l-.858.712 1.018 1.777h-3.28l-2.178 1.796-2.249-1.796h-3.12l.933-1.737-.933-.752V9.92l5.142-4.045zm.222.387-4.786 3.768 1.982 1.592 2.809-4.747 2.742 4.813 1.982-1.658zm4.858 4.24-1.884 1.577 1.249 2.196.635-.534zm-7.315 1.4 2.68 2.155V16h4.475l-4.702-8.236zm2.68 4.537v1.04l1.262-1.04zm-.445 1.05v-3.219L7.11 10.498v3.249zm-3.853-2.508L7.408 16h1.827z'
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
                        id: 'ALCX__a'
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
 * @component @name TokenALCX
 * @description Web3Icon for TokenALCX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMSAzSDN2MThoMTh6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI0FMQ1hfX2EpIiBkPSJNMyAzaDE4djE4SDN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRUNCRTlEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAxNy43ODZhNS43ODQgNS43ODQgMCAwIDAgNC4wOTItOS44NzZBNS43ODUgNS43ODUgMCAxIDAgMTIgMTcuNzg2bTAtLjMyMWE1LjQ2NCA1LjQ2NCAwIDEgMCAwLTEwLjkyOSA1LjQ2NCA1LjQ2NCAwIDAgMCAwIDEwLjkyOSIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjRUNCRTlEIiBkPSJNMTEuODYyIDcuNTczVjYuNDhoLjMyMXYxLjA5M2wzLjY3NCAyLjkyNXYyLjkxNmwtLjYyLjUxNC43MzYgMS4yODZoLTIuMzcybC0xLjU3NSAxLjI5OC0xLjYyNi0xLjI5OEg4LjE0M2wuNjc1LTEuMjU3LS42NzUtLjU0M3YtMi45MTlsMy43MTktMi45MjV6bS4xNi4yOC0zLjQ2MSAyLjcyNiAxLjQzMyAxLjE1IDIuMDMyLTMuNDMyIDEuOTgzIDMuNDggMS40MzQtMS4xOTh6bTMuNTE0IDMuMDY2LTEuMzYzIDEuMTQxLjkwMyAxLjU4OC40Ni0uMzg1em0tNS4yOSAxLjAxMyAxLjkzNyAxLjU1OXYxLjQwMWgzLjIzN2wtMy40LTUuOTU2em0xLjkzNyAzLjI4MnYuNzUybC45MTMtLjc1MnptLS4zMjEuNzU4di0yLjMyN2wtMy4zOTgtMi43MzJ2Mi4zNXpNOS4wNzUgMTQuMTZsLS4zOTUuNzMzSDEweiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJBTENYX19hIiB4MT0iNi4zNDkiIHgyPSIyNC45MDUiIHkxPSI2LjEyMSIgeTI9IjI3LjQzNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMUExRTIxIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzA2MDYwQSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDIxYTguOTk4IDguOTk4IDAgMCAwIDguMzE1LTEyLjQ0NEE5IDkgMCAxIDAgMTIgMjFtMC0uNWE4LjUgOC41IDAgMSAwIDAtMTcgOC41IDguNSAwIDAgMCAwIDE3IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS43ODQgNS4xMTV2LTEuN2guNXYxLjdsNS43MTUgNC41NVYxNC4ybC0uOTY1LjggMS4xNDUgMmgtMy42OWwtMi40NSAyLjAyTDkuNTA5IDE3aC0zLjUxbDEuMDUtMS45NTUtMS4wNS0uODQ1VjkuNjZsNS43ODUtNC41NXptLjI1LjQzNUw2LjY0OSA5Ljc5bDIuMjMgMS43OSAzLjE2LTUuMzQgMy4wODUgNS40MTUgMi4yMy0xLjg2NXptNS40NjUgNC43Ny0yLjEyIDEuNzc1IDEuNDA1IDIuNDcuNzE1LS42em0tOC4yMyAxLjU3NSAzLjAxNSAyLjQyNXYyLjE4aDUuMDM1bC01LjI5LTkuMjY1ek0xMi4yODQgMTd2MS4xN2wxLjQyLTEuMTd6bS0uNSAxLjE4di0zLjYybC01LjI4NS00LjI1djMuNjU1em0tNC4zMzUtMi44Mi0uNjE1IDEuMTRoMi4wNTV6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNBTENYX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0VDQkU5RCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAyMGE3Ljk5OSA3Ljk5OSAwIDEgMCAwLTE1Ljk5OEE3Ljk5OSA3Ljk5OSAwIDAgMCAxMiAyMG0wLS40NDVhNy41NTYgNy41NTYgMCAxIDAgMC0xNS4xMTEgNy41NTYgNy41NTYgMCAwIDAgMCAxNS4xMTIiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS44MDggNS44OFY0LjM2OWguNDQ1djEuNTFsNS4wOCA0LjA0NXY0LjAzMWwtLjg1OC43MTIgMS4wMTggMS43NzdoLTMuMjhsLTIuMTc4IDEuNzk2LTIuMjQ5LTEuNzk2aC0zLjEybC45MzMtMS43MzctLjkzMy0uNzUyVjkuOTJsNS4xNDItNC4wNDV6bS4yMjIuMzg3LTQuNzg2IDMuNzY4IDEuOTgyIDEuNTkyIDIuODA5LTQuNzQ3IDIuNzQyIDQuODEzIDEuOTgyLTEuNjU4em00Ljg1OCA0LjI0LTEuODg0IDEuNTc3IDEuMjQ5IDIuMTk2LjYzNS0uNTM0em0tNy4zMTUgMS40IDIuNjggMi4xNTVWMTZoNC40NzVsLTQuNzAyLTguMjM2em0yLjY4IDQuNTM3djEuMDRsMS4yNjItMS4wNHptLS40NDUgMS4wNXYtMy4yMTlMNy4xMSAxMC40OTh2My4yNDl6bS0zLjg1My0yLjUwOEw3LjQwOCAxNmgxLjgyN3oiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQUxDWF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/ALCX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenALCX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenALCX', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1eu1uqe._.js.map