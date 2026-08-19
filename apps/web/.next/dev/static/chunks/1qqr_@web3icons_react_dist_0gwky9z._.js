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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkChiliz.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkChiliz
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#F60250',
                d: 'M10.738 5.662 8.167 7.248a.11.11 0 0 1-.15-.035l-.15-.244a.667.667 0 0 1 .215-.918l1.002-.614a.31.31 0 0 0 .055-.485l-.838-.773a.667.667 0 0 1-.003-.943l.203-.204a.11.11 0 0 1 .152 0l2.148 2.075c.163.162.163.426-.063.555'
            }
        ],
        [
            'path',
            {
                fill: '#F60250',
                d: 'M9.978 13.195c.63.694.88 1.652.67 2.566 0 0-.123 1.203-.828 3.995-.196.778.563 1.463 1.312 1.178 5.101-1.938 5.097-7.118 5.097-7.118.15-3.335-3.23-6.565-4.203-7.462a.45.45 0 0 0-.544-.048L8.825 8.004a2.227 2.227 0 0 0-.47 3.35zm-.53-4.228 1.864-1.182a.32.32 0 0 1 .393.037c5.229 4.92 2.721 8.631.933 10.175-.42.363-1.06-.016-.937-.558l.285-1.248a4.4 4.4 0 0 0-1.033-3.957l-1.698-1.962a.87.87 0 0 1 .192-1.305',
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
                d: 'M10.738 5.662 8.167 7.248a.11.11 0 0 1-.15-.035l-.15-.244a.667.667 0 0 1 .215-.918l1.002-.614a.31.31 0 0 0 .055-.485l-.838-.773a.667.667 0 0 1-.003-.943l.203-.204a.11.11 0 0 1 .152 0l2.148 2.075c.163.162.163.426-.063.555'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M9.978 13.195c.63.694.88 1.652.67 2.566 0 0-.123 1.203-.828 3.995-.196.778.563 1.463 1.312 1.178 5.101-1.938 5.097-7.118 5.097-7.118.15-3.335-3.23-6.565-4.203-7.462a.45.45 0 0 0-.544-.048L8.825 8.004a2.227 2.227 0 0 0-.47 3.35zm-.53-4.228 1.864-1.182a.32.32 0 0 1 .393.037c5.229 4.92 2.721 8.631.933 10.175-.42.363-1.06-.016-.937-.558l.285-1.248a4.4 4.4 0 0 0-1.033-3.957l-1.698-1.962a.87.87 0 0 1 .192-1.305',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#chiliz__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#F60250',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm10.878 6.366-2.286 1.41a.096.096 0 0 1-.132-.031l-.135-.217a.593.593 0 0 1 .192-.816l.89-.545a.277.277 0 0 0 .05-.432l-.745-.687a.593.593 0 0 1-.003-.838l.18-.182a.096.096 0 0 1 .136 0l1.91 1.845c.144.144.144.379-.057.493'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M10.202 13.062a2.54 2.54 0 0 1 .596 2.28s-.11 1.07-.736 3.553c-.174.69.5 1.3 1.166 1.047 4.534-1.724 4.531-6.328 4.531-6.328.133-2.965-2.872-5.835-3.736-6.632a.4.4 0 0 0-.484-.043L9.178 8.448a1.98 1.98 0 0 0-.419 2.978zm-.471-3.758 1.658-1.05a.286.286 0 0 1 .348.032c4.648 4.374 2.42 7.673.83 9.045-.374.323-.943-.014-.833-.496l.253-1.11a3.92 3.92 0 0 0-.918-3.517L9.56 10.464a.774.774 0 0 1 .171-1.16',
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
                        id: 'chiliz__a'
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
 * @component @name NetworkChiliz
 * @description Web3Icon for NetworkChiliz
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGNjAyNTAiIGQ9Ik0xMC43MzggNS42NjIgOC4xNjcgNy4yNDhhLjExLjExIDAgMCAxLS4xNS0uMDM1bC0uMTUtLjI0NGEuNjY3LjY2NyAwIDAgMSAuMjE1LS45MThsMS4wMDItLjYxNGEuMzEuMzEgMCAwIDAgLjA1NS0uNDg1bC0uODM4LS43NzNhLjY2Ny42NjcgMCAwIDEtLjAwMy0uOTQzbC4yMDMtLjIwNGEuMTEuMTEgMCAwIDEgLjE1MiAwbDIuMTQ4IDIuMDc1Yy4xNjMuMTYyLjE2My40MjYtLjA2My41NTUiLz4KICAgIDxwYXRoIGZpbGw9IiNGNjAyNTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuOTc4IDEzLjE5NWMuNjMuNjk0Ljg4IDEuNjUyLjY3IDIuNTY2IDAgMC0uMTIzIDEuMjAzLS44MjggMy45OTUtLjE5Ni43NzguNTYzIDEuNDYzIDEuMzEyIDEuMTc4IDUuMTAxLTEuOTM4IDUuMDk3LTcuMTE4IDUuMDk3LTcuMTE4LjE1LTMuMzM1LTMuMjMtNi41NjUtNC4yMDMtNy40NjJhLjQ1LjQ1IDAgMCAwLS41NDQtLjA0OEw4LjgyNSA4LjAwNGEyLjIyNyAyLjIyNyAwIDAgMC0uNDcgMy4zNXptLS41My00LjIyOCAxLjg2NC0xLjE4MmEuMzIuMzIgMCAwIDEgLjM5My4wMzdjNS4yMjkgNC45MiAyLjcyMSA4LjYzMS45MzMgMTAuMTc1LS40Mi4zNjMtMS4wNi0uMDE2LS45MzctLjU1OGwuMjg1LTEuMjQ4YTQuNCA0LjQgMCAwIDAtMS4wMzMtMy45NTdsLTEuNjk4LTEuOTYyYS44Ny44NyAwIDAgMSAuMTkyLTEuMzA1IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMC43MzggNS42NjIgOC4xNjcgNy4yNDhhLjExLjExIDAgMCAxLS4xNS0uMDM1bC0uMTUtLjI0NGEuNjY3LjY2NyAwIDAgMSAuMjE1LS45MThsMS4wMDItLjYxNGEuMzEuMzEgMCAwIDAgLjA1NS0uNDg1bC0uODM4LS43NzNhLjY2Ny42NjcgMCAwIDEtLjAwMy0uOTQzbC4yMDMtLjIwNGEuMTEuMTEgMCAwIDEgLjE1MiAwbDIuMTQ4IDIuMDc1Yy4xNjMuMTYyLjE2My40MjYtLjA2My41NTUiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuOTc4IDEzLjE5NWMuNjMuNjk0Ljg4IDEuNjUyLjY3IDIuNTY2IDAgMC0uMTIzIDEuMjAzLS44MjggMy45OTUtLjE5Ni43NzguNTYzIDEuNDYzIDEuMzEyIDEuMTc4IDUuMTAxLTEuOTM4IDUuMDk3LTcuMTE4IDUuMDk3LTcuMTE4LjE1LTMuMzM1LTMuMjMtNi41NjUtNC4yMDMtNy40NjJhLjQ1LjQ1IDAgMCAwLS41NDQtLjA0OEw4LjgyNSA4LjAwNGEyLjIyNyAyLjIyNyAwIDAgMC0uNDcgMy4zNXptLS41My00LjIyOCAxLjg2NC0xLjE4MmEuMzIuMzIgMCAwIDEgLjM5My4wMzdjNS4yMjkgNC45MiAyLjcyMSA4LjYzMS45MzMgMTAuMTc1LS40Mi4zNjMtMS4wNi0uMDE2LS45MzctLjU1OGwuMjg1LTEuMjQ4YTQuNCA0LjQgMCAwIDAtMS4wMzMtMy45NTdsLTEuNjk4LTEuOTYyYS44Ny44NyAwIDAgMSAuMTkyLTEuMzA1IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjaGlsaXpfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRjYwMjUwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMC44NzggNi4zNjYtMi4yODYgMS40MWEuMDk2LjA5NiAwIDAgMS0uMTMyLS4wMzFsLS4xMzUtLjIxN2EuNTkzLjU5MyAwIDAgMSAuMTkyLS44MTZsLjg5LS41NDVhLjI3Ny4yNzcgMCAwIDAgLjA1LS40MzJsLS43NDUtLjY4N2EuNTkzLjU5MyAwIDAgMS0uMDAzLS44MzhsLjE4LS4xODJhLjA5Ni4wOTYgMCAwIDEgLjEzNiAwbDEuOTEgMS44NDVjLjE0NC4xNDQuMTQ0LjM3OS0uMDU3LjQ5MyIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjIwMiAxMy4wNjJhMi41NCAyLjU0IDAgMCAxIC41OTYgMi4yOHMtLjExIDEuMDctLjczNiAzLjU1M2MtLjE3NC42OS41IDEuMyAxLjE2NiAxLjA0NyA0LjUzNC0xLjcyNCA0LjUzMS02LjMyOCA0LjUzMS02LjMyOC4xMzMtMi45NjUtMi44NzItNS44MzUtMy43MzYtNi42MzJhLjQuNCAwIDAgMC0uNDg0LS4wNDNMOS4xNzggOC40NDhhMS45OCAxLjk4IDAgMCAwLS40MTkgMi45Nzh6bS0uNDcxLTMuNzU4IDEuNjU4LTEuMDVhLjI4Ni4yODYgMCAwIDEgLjM0OC4wMzJjNC42NDggNC4zNzQgMi40MiA3LjY3My44MyA5LjA0NS0uMzc0LjMyMy0uOTQzLS4wMTQtLjgzMy0uNDk2bC4yNTMtMS4xMWEzLjkyIDMuOTIgMCAwIDAtLjkxOC0zLjUxN0w5LjU2IDEwLjQ2NGEuNzc0Ljc3NCAwIDAgMSAuMTcxLTEuMTYiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJjaGlsaXpfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/networks/chiliz
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkChiliz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkChiliz', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0gwky9z._.js.map