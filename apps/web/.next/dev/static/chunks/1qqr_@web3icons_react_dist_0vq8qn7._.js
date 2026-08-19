(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWeb3Icon",
    ()=>createWeb3Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@types+node@24.13.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/BaseIcon.js [app-client] (ecmascript)");
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
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = defaultVariant, fallback, ...props }, ref)=>{
        const iconData = variants[variant];
        if (!iconData) {
            console.warn(`Icon "${name}" does not have variant "${variant}". ` + `Available variants: ${availableVariants.join(', ')}`);
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseIcon"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(element, elementProps, childElements);
    });
}
;
}),
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenKEX.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenKEX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#298DFF',
                d: 'M4.35 8.512c-.349.192-.787.158-.787-.247v-1.67L9.885 3v1.67c0 .406-.281.9-.653 1.092L4.35 8.518z'
            }
        ],
        [
            'path',
            {
                fill: '#344AE6',
                d: 'M13.463 20.167c.349-.197.349-.54 0-.732l-5.034-2.868a1.5 1.5 0 0 0-1.283 0l-1.457.838 6.323 3.594 1.457-.832z'
            }
        ],
        [
            'path',
            {
                fill: '#4264F2',
                d: 'M18.863 5.756c-.36-.185-.675-.04-.675.371v5.738c0 .405.292.9.675 1.085l1.518.839V6.594l-1.518-.832z'
            }
        ],
        [
            'path',
            {
                fill: '#298DFF',
                d: 'M3.563 6.6 9.885 3l5.687 3.234c.349.192.349.535 0 .726l-5.04 2.869c-.343.191-.934.191-1.277 0L3.562 6.594z'
            }
        ],
        [
            'path',
            {
                fill: '#344AE6',
                d: 'M5.25 10.763c0-.411.298-.563.692-.366l5.366 2.92A1.41 1.41 0 0 1 12 14.418V21l-6.75-3.656z'
            }
        ],
        [
            'path',
            {
                fill: '#4264F2',
                d: 'M14.886 17.018c-.338.197-.636.045-.636-.36V10.92c0-.405.276-.9.636-1.091l5.552-3.234v7.194z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.35 8.513c-.349.19-.787.157-.787-.248v-1.67L9.885 3v1.67c0 .406-.281.9-.652 1.092L4.35 8.518zm9.113 11.654c.349-.197.349-.54 0-.732L8.43 16.568a1.5 1.5 0 0 0-1.283 0l-1.457.838L12.013 21l1.457-.832zm5.4-14.41c-.36-.185-.675-.04-.675.371v5.738c0 .405.292.9.675 1.085l1.518.839V6.595l-1.518-.832z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3.563 6.6 9.885 3l5.687 3.234c.349.192.349.535 0 .726l-5.04 2.869c-.343.191-.934.191-1.277 0L3.562 6.594zm1.687 4.163c0-.411.298-.563.692-.366l5.366 2.92A1.41 1.41 0 0 1 12 14.418V21l-6.75-3.656zm9.636 6.255c-.338.197-.636.045-.636-.36V10.92c0-.405.276-.9.636-1.091l5.552-3.234v7.194z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#KEX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#344AE6',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M5.2 8.9c-.31.17-.7.14-.7-.22V7.195L10.12 4v1.485c0 .36-.25.8-.58.97L5.2 8.905zm8.1 10.36c.31-.176.31-.48 0-.65l-4.474-2.55a1.33 1.33 0 0 0-1.14 0l-1.295.745L12.01 20l1.295-.74zm4.8-12.81c-.32-.165-.6-.035-.6.33v5.1c0 .36.26.8.6.965l1.35.745V7.195l-1.35-.74z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4.5 7.2 10.12 4l5.055 2.875c.31.17.31.475 0 .645l-4.48 2.55c-.305.17-.83.17-1.135 0L4.5 7.195zM6 10.9c0-.365.265-.5.615-.325l4.77 2.595a1.25 1.25 0 0 1 .615.98V20l-6-3.25zm8.565 5.56c-.3.175-.565.04-.565-.32v-5.1c0-.36.245-.8.565-.97L19.5 7.195v6.395z'
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
                        id: 'KEX__a'
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
 * @component @name TokenKEX
 * @description Web3Icon for TokenKEX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMyOThERkYiIGQ9Ik00LjM1IDguNTEyYy0uMzQ5LjE5Mi0uNzg3LjE1OC0uNzg3LS4yNDd2LTEuNjdMOS44ODUgM3YxLjY3YzAgLjQwNi0uMjgxLjktLjY1MyAxLjA5Mkw0LjM1IDguNTE4eiIvPgogICAgPHBhdGggZmlsbD0iIzM0NEFFNiIgZD0iTTEzLjQ2MyAyMC4xNjdjLjM0OS0uMTk3LjM0OS0uNTQgMC0uNzMybC01LjAzNC0yLjg2OGExLjUgMS41IDAgMCAwLTEuMjgzIDBsLTEuNDU3LjgzOCA2LjMyMyAzLjU5NCAxLjQ1Ny0uODMyeiIvPgogICAgPHBhdGggZmlsbD0iIzQyNjRGMiIgZD0iTTE4Ljg2MyA1Ljc1NmMtLjM2LS4xODUtLjY3NS0uMDQtLjY3NS4zNzF2NS43MzhjMCAuNDA1LjI5Mi45LjY3NSAxLjA4NWwxLjUxOC44MzlWNi41OTRsLTEuNTE4LS44MzJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMjk4REZGIiBkPSJNMy41NjMgNi42IDkuODg1IDNsNS42ODcgMy4yMzRjLjM0OS4xOTIuMzQ5LjUzNSAwIC43MjZsLTUuMDQgMi44NjljLS4zNDMuMTkxLS45MzQuMTkxLTEuMjc3IDBMMy41NjIgNi41OTR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMzQ0QUU2IiBkPSJNNS4yNSAxMC43NjNjMC0uNDExLjI5OC0uNTYzLjY5Mi0uMzY2bDUuMzY2IDIuOTJBMS40MSAxLjQxIDAgMCAxIDEyIDE0LjQxOFYyMWwtNi43NS0zLjY1NnoiLz4KICAgIDxwYXRoIGZpbGw9IiM0MjY0RjIiIGQ9Ik0xNC44ODYgMTcuMDE4Yy0uMzM4LjE5Ny0uNjM2LjA0NS0uNjM2LS4zNlYxMC45MmMwLS40MDUuMjc2LS45LjYzNi0xLjA5MWw1LjU1Mi0zLjIzNHY3LjE5NHoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjM1IDguNTEzYy0uMzQ5LjE5LS43ODcuMTU3LS43ODctLjI0OHYtMS42N0w5Ljg4NSAzdjEuNjdjMCAuNDA2LS4yODEuOS0uNjUyIDEuMDkyTDQuMzUgOC41MTh6bTkuMTEzIDExLjY1NGMuMzQ5LS4xOTcuMzQ5LS41NCAwLS43MzJMOC40MyAxNi41NjhhMS41IDEuNSAwIDAgMC0xLjI4MyAwbC0xLjQ1Ny44MzhMMTIuMDEzIDIxbDEuNDU3LS44MzJ6bTUuNC0xNC40MWMtLjM2LS4xODUtLjY3NS0uMDQtLjY3NS4zNzF2NS43MzhjMCAuNDA1LjI5Mi45LjY3NSAxLjA4NWwxLjUxOC44MzlWNi41OTVsLTEuNTE4LS44MzJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMy41NjMgNi42IDkuODg1IDNsNS42ODcgMy4yMzRjLjM0OS4xOTIuMzQ5LjUzNSAwIC43MjZsLTUuMDQgMi44NjljLS4zNDMuMTkxLS45MzQuMTkxLTEuMjc3IDBMMy41NjIgNi41OTR6bTEuNjg3IDQuMTYzYzAtLjQxMS4yOTgtLjU2My42OTItLjM2Nmw1LjM2NiAyLjkyQTEuNDEgMS40MSAwIDAgMSAxMiAxNC40MThWMjFsLTYuNzUtMy42NTZ6bTkuNjM2IDYuMjU1Yy0uMzM4LjE5Ny0uNjM2LjA0NS0uNjM2LS4zNlYxMC45MmMwLS40MDUuMjc2LS45LjYzNi0xLjA5MWw1LjU1Mi0zLjIzNHY3LjE5NHoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNLRVhfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMzQ0QUU2IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjIgOC45Yy0uMzEuMTctLjcuMTQtLjctLjIyVjcuMTk1TDEwLjEyIDR2MS40ODVjMCAuMzYtLjI1LjgtLjU4Ljk3TDUuMiA4LjkwNXptOC4xIDEwLjM2Yy4zMS0uMTc2LjMxLS40OCAwLS42NWwtNC40NzQtMi41NWExLjMzIDEuMzMgMCAwIDAtMS4xNCAwbC0xLjI5NS43NDVMMTIuMDEgMjBsMS4yOTUtLjc0em00LjgtMTIuODFjLS4zMi0uMTY1LS42LS4wMzUtLjYuMzN2NS4xYzAgLjM2LjI2LjguNi45NjVsMS4zNS43NDVWNy4xOTVsLTEuMzUtLjc0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjUgNy4yIDEwLjEyIDRsNS4wNTUgMi44NzVjLjMxLjE3LjMxLjQ3NSAwIC42NDVsLTQuNDggMi41NWMtLjMwNS4xNy0uODMuMTctMS4xMzUgMEw0LjUgNy4xOTV6TTYgMTAuOWMwLS4zNjUuMjY1LS41LjYxNS0uMzI1bDQuNzcgMi41OTVhMS4yNSAxLjI1IDAgMCAxIC42MTUuOThWMjBsLTYtMy4yNXptOC41NjUgNS41NmMtLjMuMTc1LS41NjUuMDQtLjU2NS0uMzJ2LTUuMWMwLS4zNi4yNDUtLjguNTY1LS45N0wxOS41IDcuMTk1djYuMzk1eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJLRVhfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/KEX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenKEX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenKEX', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0vq8qn7._.js.map