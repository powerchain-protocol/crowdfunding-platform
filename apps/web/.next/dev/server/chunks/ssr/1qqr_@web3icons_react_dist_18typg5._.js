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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkTenet.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkTenet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#5F498A',
                d: 'M20.603 6.099c-.53-.807-1.478-1.29-2.537-1.29h-5.84Q12.115 4.8 12 4.8t-.227.009h-5.84c-1.058 0-2.006.483-2.536 1.29a2.29 2.29 0 0 0 0 2.576l6.067 9.235c.529.807 1.477 1.29 2.536 1.29s2.007-.483 2.536-1.29l6.067-9.235c.53-.803.53-1.77 0-2.576m-7.468 11.102c-.237.359-.661.576-1.135.576s-.898-.217-1.135-.576l-3.414-5.197 3.414-5.2c.212-.324.57-.528.984-.568h.302c.414.04.772.249.984.568L16.549 12z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M20.603 6.099c-.53-.807-1.478-1.29-2.537-1.29h-5.84Q12.115 4.8 12 4.8t-.227.009h-5.84c-1.058 0-2.006.483-2.536 1.29a2.29 2.29 0 0 0 0 2.576l6.067 9.235c.529.807 1.477 1.29 2.536 1.29s2.007-.483 2.536-1.29l6.067-9.235c.53-.803.53-1.77 0-2.576m-7.468 11.102c-.237.359-.661.576-1.135.576s-.898-.217-1.135-.576l-3.414-5.197 3.414-5.2c.212-.324.57-.528.984-.568h.302c.414.04.772.249.984.568L16.549 12z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#tenet__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#5F498A',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M19.647 6.755c-.47-.718-1.313-1.147-2.255-1.147h-5.19Q12.1 5.6 12 5.6q-.1.001-.202.008h-5.19c-.942 0-1.784.43-2.255 1.147a2.03 2.03 0 0 0 0 2.29l5.392 8.208c.471.718 1.314 1.147 2.255 1.147s1.784-.43 2.255-1.147l5.392-8.209c.47-.713.47-1.572 0-2.29m-6.638 9.868c-.211.319-.588.512-1.009.512s-.798-.193-1.009-.512l-3.034-4.619 3.034-4.623a1.16 1.16 0 0 1 .875-.504h.268c.368.035.686.22.874.504L16.044 12z'
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
                        id: 'tenet__a'
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
 * @component @name NetworkTenet
 * @description Web3Icon for NetworkTenet
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM1RjQ5OEEiIGQ9Ik0yMC42MDMgNi4wOTljLS41My0uODA3LTEuNDc4LTEuMjktMi41MzctMS4yOWgtNS44NFExMi4xMTUgNC44IDEyIDQuOHQtLjIyNy4wMDloLTUuODRjLTEuMDU4IDAtMi4wMDYuNDgzLTIuNTM2IDEuMjlhMi4yOSAyLjI5IDAgMCAwIDAgMi41NzZsNi4wNjcgOS4yMzVjLjUyOS44MDcgMS40NzcgMS4yOSAyLjUzNiAxLjI5czIuMDA3LS40ODMgMi41MzYtMS4yOWw2LjA2Ny05LjIzNWMuNTMtLjgwMy41My0xLjc3IDAtMi41NzZtLTcuNDY4IDExLjEwMmMtLjIzNy4zNTktLjY2MS41NzYtMS4xMzUuNTc2cy0uODk4LS4yMTctMS4xMzUtLjU3NmwtMy40MTQtNS4xOTcgMy40MTQtNS4yYy4yMTItLjMyNC41Ny0uNTI4Ljk4NC0uNTY4aC4zMDJjLjQxNC4wNC43NzIuMjQ5Ljk4NC41NjhMMTYuNTQ5IDEyeiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMC42MDMgNi4wOTljLS41My0uODA3LTEuNDc4LTEuMjktMi41MzctMS4yOWgtNS44NFExMi4xMTUgNC44IDEyIDQuOHQtLjIyNy4wMDloLTUuODRjLTEuMDU4IDAtMi4wMDYuNDgzLTIuNTM2IDEuMjlhMi4yOSAyLjI5IDAgMCAwIDAgMi41NzZsNi4wNjcgOS4yMzVjLjUyOS44MDcgMS40NzcgMS4yOSAyLjUzNiAxLjI5czIuMDA3LS40ODMgMi41MzYtMS4yOWw2LjA2Ny05LjIzNWMuNTMtLjgwMy41My0xLjc3IDAtMi41NzZtLTcuNDY4IDExLjEwMmMtLjIzNy4zNTktLjY2MS41NzYtMS4xMzUuNTc2cy0uODk4LS4yMTctMS4xMzUtLjU3NmwtMy40MTQtNS4xOTcgMy40MTQtNS4yYy4yMTItLjMyNC41Ny0uNTI4Ljk4NC0uNTY4aC4zMDJjLjQxNC4wNC43NzIuMjQ5Ljk4NC41NjhMMTYuNTQ5IDEyeiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCN0ZW5ldF9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiM1RjQ5OEEiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5LjY0NyA2Ljc1NWMtLjQ3LS43MTgtMS4zMTMtMS4xNDctMi4yNTUtMS4xNDdoLTUuMTlRMTIuMSA1LjYgMTIgNS42cS0uMS4wMDEtLjIwMi4wMDhoLTUuMTljLS45NDIgMC0xLjc4NC40My0yLjI1NSAxLjE0N2EyLjAzIDIuMDMgMCAwIDAgMCAyLjI5bDUuMzkyIDguMjA4Yy40NzEuNzE4IDEuMzE0IDEuMTQ3IDIuMjU1IDEuMTQ3czEuNzg0LS40MyAyLjI1NS0xLjE0N2w1LjM5Mi04LjIwOWMuNDctLjcxMy40Ny0xLjU3MiAwLTIuMjltLTYuNjM4IDkuODY4Yy0uMjExLjMxOS0uNTg4LjUxMi0xLjAwOS41MTJzLS43OTgtLjE5My0xLjAwOS0uNTEybC0zLjAzNC00LjYxOSAzLjAzNC00LjYyM2ExLjE2IDEuMTYgMCAwIDEgLjg3NS0uNTA0aC4yNjhjLjM2OC4wMzUuNjg2LjIyLjg3NC41MDRMMTYuMDQ0IDEyeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJ0ZW5ldF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/networks/tenet
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkTenet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkTenet', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_18typg5._.js.map