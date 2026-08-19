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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkCitrea.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkCitrea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#000',
                d: 'M12 9.987c-.414 0-.827-.206-1.138-.62L7.76 4h8.38l-3.104 5.368c-.207.413-.621.62-1.138.62zm2.897 1.652c-.414 0-.828-.207-1.138-.62a1.31 1.31 0 0 1 0-1.239l3.103-5.367L21 11.639h-6.207zM7.862 20l3.104-5.368c.207-.413.62-.62 1.138-.62s.827.207 1.138.62L16.345 20zm5.897-5.677a1.31 1.31 0 0 1 0-1.24c.207-.412.62-.619 1.138-.619H21l-4.138 7.226zM3 11.639l4.138-7.226L10.24 9.78q.31.62 0 1.24c-.207.412-.62.619-1.138.619zm0 .825h6.207c.414 0 .827.207 1.138.62q.31.619 0 1.239L7.24 19.69l-4.138-7.226z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 9.987c-.414 0-.827-.206-1.138-.62L7.76 4h8.38l-3.104 5.368c-.207.413-.621.62-1.138.62zm2.897 1.651c-.414 0-.828-.206-1.138-.619a1.31 1.31 0 0 1 0-1.239l3.103-5.367L21 11.638h-6.207zM7.862 20l3.104-5.367c.207-.413.62-.62 1.138-.62s.827.207 1.138.62L16.345 20zm5.897-5.677a1.31 1.31 0 0 1 0-1.239c.207-.413.62-.62 1.138-.62H21l-4.138 7.227zM3 11.638l4.138-7.225L10.24 9.78q.31.62 0 1.239c-.207.413-.62.62-1.138.62zm0 .827h6.207c.414 0 .827.206 1.138.62q.31.618 0 1.238L7.24 19.69l-4.138-7.226z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#citrea__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FD7F00',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 10.183c-.368 0-.735-.183-1.011-.551L8.23 4.85h7.448L12.92 9.632c-.184.368-.552.551-1.012.551zm2.575 1.471c-.368 0-.736-.184-1.012-.552a1.17 1.17 0 0 1 0-1.103l2.759-4.782L20 11.654h-5.517zm-6.253 7.448 2.758-4.781c.184-.368.552-.552 1.012-.552s.736.184 1.011.552l2.759 4.781zm5.241-5.057a1.17 1.17 0 0 1 0-1.104c.184-.367.552-.551 1.012-.551H20l-3.678 6.436zM4 11.654l3.678-6.437L10.437 10q.276.552 0 1.103c-.184.368-.552.552-1.012.552zm0 .736h5.517c.368 0 .736.184 1.012.551q.276.552 0 1.104L7.77 18.826 4.092 12.39z'
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
                        id: 'citrea__a'
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
 * @component @name NetworkCitrea
 * @description Web3Icon for NetworkCitrea
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xMiA5Ljk4N2MtLjQxNCAwLS44MjctLjIwNi0xLjEzOC0uNjJMNy43NiA0aDguMzhsLTMuMTA0IDUuMzY4Yy0uMjA3LjQxMy0uNjIxLjYyLTEuMTM4LjYyem0yLjg5NyAxLjY1MmMtLjQxNCAwLS44MjgtLjIwNy0xLjEzOC0uNjJhMS4zMSAxLjMxIDAgMCAxIDAtMS4yMzlsMy4xMDMtNS4zNjdMMjEgMTEuNjM5aC02LjIwN3pNNy44NjIgMjBsMy4xMDQtNS4zNjhjLjIwNy0uNDEzLjYyLS42MiAxLjEzOC0uNjJzLjgyNy4yMDcgMS4xMzguNjJMMTYuMzQ1IDIwem01Ljg5Ny01LjY3N2ExLjMxIDEuMzEgMCAwIDEgMC0xLjI0Yy4yMDctLjQxMi42Mi0uNjE5IDEuMTM4LS42MTlIMjFsLTQuMTM4IDcuMjI2ek0zIDExLjYzOWw0LjEzOC03LjIyNkwxMC4yNCA5Ljc4cS4zMS42MiAwIDEuMjRjLS4yMDcuNDEyLS42Mi42MTktMS4xMzguNjE5em0wIC44MjVoNi4yMDdjLjQxNCAwIC44MjcuMjA3IDEuMTM4LjYycS4zMS42MTkgMCAxLjIzOUw3LjI0IDE5LjY5bC00LjEzOC03LjIyNnoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiA5Ljk4N2MtLjQxNCAwLS44MjctLjIwNi0xLjEzOC0uNjJMNy43NiA0aDguMzhsLTMuMTA0IDUuMzY4Yy0uMjA3LjQxMy0uNjIxLjYyLTEuMTM4LjYyem0yLjg5NyAxLjY1MWMtLjQxNCAwLS44MjgtLjIwNi0xLjEzOC0uNjE5YTEuMzEgMS4zMSAwIDAgMSAwLTEuMjM5bDMuMTAzLTUuMzY3TDIxIDExLjYzOGgtNi4yMDd6TTcuODYyIDIwbDMuMTA0LTUuMzY3Yy4yMDctLjQxMy42Mi0uNjIgMS4xMzgtLjYycy44MjcuMjA3IDEuMTM4LjYyTDE2LjM0NSAyMHptNS44OTctNS42NzdhMS4zMSAxLjMxIDAgMCAxIDAtMS4yMzljLjIwNy0uNDEzLjYyLS42MiAxLjEzOC0uNjJIMjFsLTQuMTM4IDcuMjI3ek0zIDExLjYzOGw0LjEzOC03LjIyNUwxMC4yNCA5Ljc4cS4zMS42MiAwIDEuMjM5Yy0uMjA3LjQxMy0uNjIuNjItMS4xMzguNjJ6bTAgLjgyN2g2LjIwN2MuNDE0IDAgLjgyNy4yMDYgMS4xMzguNjJxLjMxLjYxOCAwIDEuMjM4TDcuMjQgMTkuNjlsLTQuMTM4LTcuMjI2eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjaXRyZWFfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRkQ3RjAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAxMC4xODNjLS4zNjggMC0uNzM1LS4xODMtMS4wMTEtLjU1MUw4LjIzIDQuODVoNy40NDhMMTIuOTIgOS42MzJjLS4xODQuMzY4LS41NTIuNTUxLTEuMDEyLjU1MXptMi41NzUgMS40NzFjLS4zNjggMC0uNzM2LS4xODQtMS4wMTItLjU1MmExLjE3IDEuMTcgMCAwIDEgMC0xLjEwM2wyLjc1OS00Ljc4MkwyMCAxMS42NTRoLTUuNTE3em0tNi4yNTMgNy40NDggMi43NTgtNC43ODFjLjE4NC0uMzY4LjU1Mi0uNTUyIDEuMDEyLS41NTJzLjczNi4xODQgMS4wMTEuNTUybDIuNzU5IDQuNzgxem01LjI0MS01LjA1N2ExLjE3IDEuMTcgMCAwIDEgMC0xLjEwNGMuMTg0LS4zNjcuNTUyLS41NTEgMS4wMTItLjU1MUgyMGwtMy42NzggNi40MzZ6TTQgMTEuNjU0bDMuNjc4LTYuNDM3TDEwLjQzNyAxMHEuMjc2LjU1MiAwIDEuMTAzYy0uMTg0LjM2OC0uNTUyLjU1Mi0xLjAxMi41NTJ6bTAgLjczNmg1LjUxN2MuMzY4IDAgLjczNi4xODQgMS4wMTIuNTUxcS4yNzYuNTUyIDAgMS4xMDRMNy43NyAxOC44MjYgNC4wOTIgMTIuMzl6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImNpdHJlYV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/networks/citrea
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkCitrea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkCitrea', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1e868k4._.js.map