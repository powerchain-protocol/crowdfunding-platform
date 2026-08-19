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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenZKP.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenZKP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#000',
                d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M5.118 8.008l-.09.027a8.036 8.036 0 1 1 6.988 11.996 3.03 3.03 0 0 1-3.019-3.24 3.03 3.03 0 0 1 .547-1.54l.005-.011a3.02 3.02 0 0 1 4.002-.847l1.218 1.202c.143.211 1.34.143 1.55 0 .17-.106.16-.662.15-.89 0-.058.02-.121.068-.159.159-.143.519-.46.63-.571.106-.106.132-.493.138-.678a.21.21 0 0 1 .084-.159c.196-.159.286-.418.318-.556a.2.2 0 0 0-.021-.159l-1.112-1.768a.2.2 0 0 1-.026-.137c.016-.143.01-.487-.371-.916-.492-.567-2.89-1.906-3.24-1.975-.265-.053-.646-.026-.82-.01a.2.2 0 0 1-.17-.059c-.238-.238-1.016-1.006-1.196-1.133-.202-.132-.292-.053-.344 0H10.4c-.13.272-.216.564-.254.863a.21.21 0 0 1-.228.175c-1.355-.138-3.61.286-4.796.545z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 21a9 9 0 1 0 0-17.999A9 9 0 0 0 12 21M5.118 8.008l-.09.027a8.036 8.036 0 1 1 6.988 11.996 3.03 3.03 0 0 1-3.019-3.24 3.03 3.03 0 0 1 .547-1.54l.005-.011a3.02 3.02 0 0 1 4.002-.847l1.218 1.202c.143.211 1.34.143 1.551 0 .17-.106.159-.662.148-.89 0-.058.021-.121.069-.159.159-.143.519-.46.63-.571.106-.106.132-.493.138-.678a.21.21 0 0 1 .084-.159c.196-.159.286-.418.318-.556a.2.2 0 0 0-.021-.159l-1.112-1.768a.2.2 0 0 1-.026-.137c.016-.143.01-.487-.37-.916-.493-.567-2.892-1.906-3.241-1.975-.265-.053-.646-.026-.82-.01a.2.2 0 0 1-.17-.059c-.238-.238-1.016-1.006-1.196-1.133-.202-.132-.292-.053-.344 0H10.4c-.13.272-.216.564-.254.863a.21.21 0 0 1-.228.175c-1.355-.138-3.61.286-4.796.545z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ZKP__a)'
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
                        d: 'M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16M5.882 8.452l-.08.023a7.144 7.144 0 1 1 6.212 10.664 2.695 2.695 0 0 1-2.198-4.25l.005-.01a2.683 2.683 0 0 1 3.558-.752l1.082 1.068c.127.188 1.19.127 1.379 0 .15-.094.141-.588.132-.79a.18.18 0 0 1 .06-.141c.142-.127.462-.41.56-.509.095-.094.119-.437.123-.602 0-.052.029-.104.076-.141.174-.141.254-.372.282-.494a.17.17 0 0 0-.019-.142l-.988-1.571a.18.18 0 0 1-.024-.123c.014-.127.01-.433-.329-.814-.438-.503-2.57-1.694-2.88-1.755-.235-.047-.574-.024-.73-.01a.17.17 0 0 1-.15-.051c-.212-.212-.904-.894-1.064-1.007-.178-.118-.258-.047-.305 0h-.005q-.175.365-.226.767a.19.19 0 0 1-.202.155c-1.205-.122-3.21.254-4.264.485z'
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
                        id: 'ZKP__a'
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
 * @component @name TokenZKP
 * @description Web3Icon for TokenZKP
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xMiAyMWE5IDkgMCAxIDAgMC0xOCA5IDkgMCAwIDAgMCAxOE01LjExOCA4LjAwOGwtLjA5LjAyN2E4LjAzNiA4LjAzNiAwIDEgMSA2Ljk4OCAxMS45OTYgMy4wMyAzLjAzIDAgMCAxLTMuMDE5LTMuMjQgMy4wMyAzLjAzIDAgMCAxIC41NDctMS41NGwuMDA1LS4wMTFhMy4wMiAzLjAyIDAgMCAxIDQuMDAyLS44NDdsMS4yMTggMS4yMDJjLjE0My4yMTEgMS4zNC4xNDMgMS41NSAwIC4xNy0uMTA2LjE2LS42NjIuMTUtLjg5IDAtLjA1OC4wMi0uMTIxLjA2OC0uMTU5LjE1OS0uMTQzLjUxOS0uNDYuNjMtLjU3MS4xMDYtLjEwNi4xMzItLjQ5My4xMzgtLjY3OGEuMjEuMjEgMCAwIDEgLjA4NC0uMTU5Yy4xOTYtLjE1OS4yODYtLjQxOC4zMTgtLjU1NmEuMi4yIDAgMCAwLS4wMjEtLjE1OWwtMS4xMTItMS43NjhhLjIuMiAwIDAgMS0uMDI2LS4xMzdjLjAxNi0uMTQzLjAxLS40ODctLjM3MS0uOTE2LS40OTItLjU2Ny0yLjg5LTEuOTA2LTMuMjQtMS45NzUtLjI2NS0uMDUzLS42NDYtLjAyNi0uODItLjAxYS4yLjIgMCAwIDEtLjE3LS4wNTljLS4yMzgtLjIzOC0xLjAxNi0xLjAwNi0xLjE5Ni0xLjEzMy0uMjAyLS4xMzItLjI5Mi0uMDUzLS4zNDQgMEgxMC40Yy0uMTMuMjcyLS4yMTYuNTY0LS4yNTQuODYzYS4yMS4yMSAwIDAgMS0uMjI4LjE3NWMtMS4zNTUtLjEzOC0zLjYxLjI4Ni00Ljc5Ni41NDV6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAyMWE5IDkgMCAxIDAgMC0xNy45OTlBOSA5IDAgMCAwIDEyIDIxTTUuMTE4IDguMDA4bC0uMDkuMDI3YTguMDM2IDguMDM2IDAgMSAxIDYuOTg4IDExLjk5NiAzLjAzIDMuMDMgMCAwIDEtMy4wMTktMy4yNCAzLjAzIDMuMDMgMCAwIDEgLjU0Ny0xLjU0bC4wMDUtLjAxMWEzLjAyIDMuMDIgMCAwIDEgNC4wMDItLjg0N2wxLjIxOCAxLjIwMmMuMTQzLjIxMSAxLjM0LjE0MyAxLjU1MSAwIC4xNy0uMTA2LjE1OS0uNjYyLjE0OC0uODkgMC0uMDU4LjAyMS0uMTIxLjA2OS0uMTU5LjE1OS0uMTQzLjUxOS0uNDYuNjMtLjU3MS4xMDYtLjEwNi4xMzItLjQ5My4xMzgtLjY3OGEuMjEuMjEgMCAwIDEgLjA4NC0uMTU5Yy4xOTYtLjE1OS4yODYtLjQxOC4zMTgtLjU1NmEuMi4yIDAgMCAwLS4wMjEtLjE1OWwtMS4xMTItMS43NjhhLjIuMiAwIDAgMS0uMDI2LS4xMzdjLjAxNi0uMTQzLjAxLS40ODctLjM3LS45MTYtLjQ5My0uNTY3LTIuODkyLTEuOTA2LTMuMjQxLTEuOTc1LS4yNjUtLjA1My0uNjQ2LS4wMjYtLjgyLS4wMWEuMi4yIDAgMCAxLS4xNy0uMDU5Yy0uMjM4LS4yMzgtMS4wMTYtMS4wMDYtMS4xOTYtMS4xMzMtLjIwMi0uMTMyLS4yOTItLjA1My0uMzQ0IDBIMTAuNGMtLjEzLjI3Mi0uMjE2LjU2NC0uMjU0Ljg2M2EuMjEuMjEgMCAwIDEtLjIyOC4xNzVjLTEuMzU1LS4xMzgtMy42MS4yODYtNC43OTYuNTQ1eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNaS1BfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAyMGE4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNk01Ljg4MiA4LjQ1MmwtLjA4LjAyM2E3LjE0NCA3LjE0NCAwIDEgMSA2LjIxMiAxMC42NjQgMi42OTUgMi42OTUgMCAwIDEtMi4xOTgtNC4yNWwuMDA1LS4wMWEyLjY4MyAyLjY4MyAwIDAgMSAzLjU1OC0uNzUybDEuMDgyIDEuMDY4Yy4xMjcuMTg4IDEuMTkuMTI3IDEuMzc5IDAgLjE1LS4wOTQuMTQxLS41ODguMTMyLS43OWEuMTguMTggMCAwIDEgLjA2LS4xNDFjLjE0Mi0uMTI3LjQ2Mi0uNDEuNTYtLjUwOS4wOTUtLjA5NC4xMTktLjQzNy4xMjMtLjYwMiAwLS4wNTIuMDI5LS4xMDQuMDc2LS4xNDEuMTc0LS4xNDEuMjU0LS4zNzIuMjgyLS40OTRhLjE3LjE3IDAgMCAwLS4wMTktLjE0MmwtLjk4OC0xLjU3MWEuMTguMTggMCAwIDEtLjAyNC0uMTIzYy4wMTQtLjEyNy4wMS0uNDMzLS4zMjktLjgxNC0uNDM4LS41MDMtMi41Ny0xLjY5NC0yLjg4LTEuNzU1LS4yMzUtLjA0Ny0uNTc0LS4wMjQtLjczLS4wMWEuMTcuMTcgMCAwIDEtLjE1LS4wNTFjLS4yMTItLjIxMi0uOTA0LS44OTQtMS4wNjQtMS4wMDctLjE3OC0uMTE4LS4yNTgtLjA0Ny0uMzA1IDBoLS4wMDVxLS4xNzUuMzY1LS4yMjYuNzY3YS4xOS4xOSAwIDAgMS0uMjAyLjE1NWMtMS4yMDUtLjEyMi0zLjIxLjI1NC00LjI2NC40ODV6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlpLUF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/ZKP
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenZKP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenZKP', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0cpto99._.js.map