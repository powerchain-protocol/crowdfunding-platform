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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenHONEY.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenHONEY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#4D75E4',
                d: 'M16.375 5.317q.008 0 .013-.003a.02.02 0 0 0 .01-.009v-.023L15.08 3.035v-.023L15.092 3h.011c.488.029.9.197 1.22.505.15.134.348.424.604.865q.277.468.557.935a1.93 1.93 0 0 1 3.223.894l-.006.018a.06.06 0 0 1-.047.017q-1.294.004-2.59 0a.05.05 0 0 0-.017.058L19.22 8.29a.07.07 0 0 1 0 .07l-.83 1.416a.06.06 0 0 0 .006.075 8.63 8.63 0 0 1-.134 11.132q-.033.035-.058 0l-2.497-4.355a.3.3 0 0 0-.098-.105 122 122 0 0 1-3.478-2.084 122 122 0 0 0-3.507-2.097.53.53 0 0 0-.256-.052l-5.075-.005v-.03c1.458-4.052 5.522-6.131 9.767-5.492a.1.1 0 0 0 .098-.041l.796-1.365a.09.09 0 0 1 .07-.04zm.482 6.828-5.121-2.92a.05.05 0 0 0-.07.017l-1.12 1.916c-.018.023-.006.058.017.07l5.121 2.926c.03.012.058 0 .07-.023l1.12-1.916a.05.05 0 0 0-.017-.07m-7.026 6.532h4.634a.023.023 0 0 0 .023-.017q0-.008-.002-.013a.02.02 0 0 0-.01-.01l-6.962-4.024h-.009a.02.02 0 0 0-.02.017v.018l2.323 4.018.007.008.01.003z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M16.375 5.317a.02.02 0 0 0 .023-.012v-.023L15.08 3.035v-.023L15.092 3h.011c.488.029.9.197 1.22.505.15.134.348.424.604.865q.277.468.557.935a1.928 1.928 0 0 1 3.223.894l-.006.018a.06.06 0 0 1-.047.017q-1.294.004-2.59 0a.046.046 0 0 0-.017.058L19.22 8.29a.07.07 0 0 1 0 .07l-.83 1.416a.06.06 0 0 0 .006.076 8.63 8.63 0 0 1-.134 11.13q-.033.036-.058 0l-2.497-4.354a.3.3 0 0 0-.098-.105 122 122 0 0 1-3.478-2.084 121 121 0 0 0-3.507-2.097.53.53 0 0 0-.256-.052l-5.075-.005v-.03c1.458-4.052 5.522-6.131 9.767-5.492a.1.1 0 0 0 .098-.041l.796-1.365a.09.09 0 0 1 .07-.04zm.482 6.828-5.121-2.92a.05.05 0 0 0-.07.017l-1.12 1.916c-.018.023-.006.058.017.07l5.121 2.926c.03.012.058 0 .07-.023l1.12-1.916a.05.05 0 0 0 .006-.038.05.05 0 0 0-.023-.032m-7.026 6.532h4.634q.008 0 .014-.004a.02.02 0 0 0 .009-.013q0-.008-.002-.013a.02.02 0 0 0-.01-.01l-6.962-4.024h-.009a.02.02 0 0 0-.02.017v.018l2.323 4.018.007.008.01.003z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#HONEY__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#4D75E4',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M15.89 6.06a.02.02 0 0 0 .02-.011v-.02L14.738 4.03v-.02l.01-.011h.01c.434.026.8.175 1.085.449q.199.18.536.769.247.417.496.831a1.714 1.714 0 0 1 2.864.795l-.005.015a.05.05 0 0 1-.041.016q-1.151.005-2.302 0a.04.04 0 0 0-.015.051l1.042 1.776a.06.06 0 0 1 0 .062l-.738 1.26a.05.05 0 0 0 .005.066 7.67 7.67 0 0 1-.118 9.895q-.03.03-.052 0l-2.22-3.872a.25.25 0 0 0-.087-.092 108 108 0 0 1-3.092-1.853A108 108 0 0 0 9 12.305a.5.5 0 0 0-.227-.047l-4.511-.005v-.026c1.295-3.603 4.908-5.45 8.681-4.882a.09.09 0 0 0 .088-.037l.707-1.213a.08.08 0 0 1 .062-.036zm.427 6.069-4.552-2.596a.05.05 0 0 0-.062.015l-.996 1.704c-.015.02-.005.051.016.061l4.552 2.602c.026.01.051 0 .062-.02l.996-1.704a.046.046 0 0 0-.015-.062m-6.245 5.806h4.12a.02.02 0 0 0 .02-.015l-.002-.012a.02.02 0 0 0-.009-.009l-6.188-3.577a.02.02 0 0 0-.022.008l-.004.008v.016l2.065 3.571.006.007.01.003z'
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
                        id: 'HONEY__a'
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
 * @component @name TokenHONEY
 * @description Web3Icon for TokenHONEY
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM0RDc1RTQiIGQ9Ik0xNi4zNzUgNS4zMTdxLjAwOCAwIC4wMTMtLjAwM2EuMDIuMDIgMCAwIDAgLjAxLS4wMDl2LS4wMjNMMTUuMDggMy4wMzV2LS4wMjNMMTUuMDkyIDNoLjAxMWMuNDg4LjAyOS45LjE5NyAxLjIyLjUwNS4xNS4xMzQuMzQ4LjQyNC42MDQuODY1cS4yNzcuNDY4LjU1Ny45MzVhMS45MyAxLjkzIDAgMCAxIDMuMjIzLjg5NGwtLjAwNi4wMThhLjA2LjA2IDAgMCAxLS4wNDcuMDE3cS0xLjI5NC4wMDQtMi41OSAwYS4wNS4wNSAwIDAgMC0uMDE3LjA1OEwxOS4yMiA4LjI5YS4wNy4wNyAwIDAgMSAwIC4wN2wtLjgzIDEuNDE2YS4wNi4wNiAwIDAgMCAuMDA2LjA3NSA4LjYzIDguNjMgMCAwIDEtLjEzNCAxMS4xMzJxLS4wMzMuMDM1LS4wNTggMGwtMi40OTctNC4zNTVhLjMuMyAwIDAgMC0uMDk4LS4xMDUgMTIyIDEyMiAwIDAgMS0zLjQ3OC0yLjA4NCAxMjIgMTIyIDAgMCAwLTMuNTA3LTIuMDk3LjUzLjUzIDAgMCAwLS4yNTYtLjA1MmwtNS4wNzUtLjAwNXYtLjAzYzEuNDU4LTQuMDUyIDUuNTIyLTYuMTMxIDkuNzY3LTUuNDkyYS4xLjEgMCAwIDAgLjA5OC0uMDQxbC43OTYtMS4zNjVhLjA5LjA5IDAgMCAxIC4wNy0uMDR6bS40ODIgNi44MjgtNS4xMjEtMi45MmEuMDUuMDUgMCAwIDAtLjA3LjAxN2wtMS4xMiAxLjkxNmMtLjAxOC4wMjMtLjAwNi4wNTguMDE3LjA3bDUuMTIxIDIuOTI2Yy4wMy4wMTIuMDU4IDAgLjA3LS4wMjNsMS4xMi0xLjkxNmEuMDUuMDUgMCAwIDAtLjAxNy0uMDdtLTcuMDI2IDYuNTMyaDQuNjM0YS4wMjMuMDIzIDAgMCAwIC4wMjMtLjAxN3EwLS4wMDgtLjAwMi0uMDEzYS4wMi4wMiAwIDAgMC0uMDEtLjAxbC02Ljk2Mi00LjAyNGgtLjAwOWEuMDIuMDIgMCAwIDAtLjAyLjAxN3YuMDE4bDIuMzIzIDQuMDE4LjAwNy4wMDguMDEuMDAzeiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi4zNzUgNS4zMTdhLjAyLjAyIDAgMCAwIC4wMjMtLjAxMnYtLjAyM0wxNS4wOCAzLjAzNXYtLjAyM0wxNS4wOTIgM2guMDExYy40ODguMDI5LjkuMTk3IDEuMjIuNTA1LjE1LjEzNC4zNDguNDI0LjYwNC44NjVxLjI3Ny40NjguNTU3LjkzNWExLjkyOCAxLjkyOCAwIDAgMSAzLjIyMy44OTRsLS4wMDYuMDE4YS4wNi4wNiAwIDAgMS0uMDQ3LjAxN3EtMS4yOTQuMDA0LTIuNTkgMGEuMDQ2LjA0NiAwIDAgMC0uMDE3LjA1OEwxOS4yMiA4LjI5YS4wNy4wNyAwIDAgMSAwIC4wN2wtLjgzIDEuNDE2YS4wNi4wNiAwIDAgMCAuMDA2LjA3NiA4LjYzIDguNjMgMCAwIDEtLjEzNCAxMS4xM3EtLjAzMy4wMzYtLjA1OCAwbC0yLjQ5Ny00LjM1NGEuMy4zIDAgMCAwLS4wOTgtLjEwNSAxMjIgMTIyIDAgMCAxLTMuNDc4LTIuMDg0IDEyMSAxMjEgMCAwIDAtMy41MDctMi4wOTcuNTMuNTMgMCAwIDAtLjI1Ni0uMDUybC01LjA3NS0uMDA1di0uMDNjMS40NTgtNC4wNTIgNS41MjItNi4xMzEgOS43NjctNS40OTJhLjEuMSAwIDAgMCAuMDk4LS4wNDFsLjc5Ni0xLjM2NWEuMDkuMDkgMCAwIDEgLjA3LS4wNHptLjQ4MiA2LjgyOC01LjEyMS0yLjkyYS4wNS4wNSAwIDAgMC0uMDcuMDE3bC0xLjEyIDEuOTE2Yy0uMDE4LjAyMy0uMDA2LjA1OC4wMTcuMDdsNS4xMjEgMi45MjZjLjAzLjAxMi4wNTggMCAuMDctLjAyM2wxLjEyLTEuOTE2YS4wNS4wNSAwIDAgMCAuMDA2LS4wMzguMDUuMDUgMCAwIDAtLjAyMy0uMDMybS03LjAyNiA2LjUzMmg0LjYzNHEuMDA4IDAgLjAxNC0uMDA0YS4wMi4wMiAwIDAgMCAuMDA5LS4wMTNxMC0uMDA4LS4wMDItLjAxM2EuMDIuMDIgMCAwIDAtLjAxLS4wMWwtNi45NjItNC4wMjRoLS4wMDlhLjAyLjAyIDAgMCAwLS4wMi4wMTd2LjAxOGwyLjMyMyA0LjAxOC4wMDcuMDA4LjAxLjAwM3oiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNIT05FWV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiM0RDc1RTQiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE1Ljg5IDYuMDZhLjAyLjAyIDAgMCAwIC4wMi0uMDExdi0uMDJMMTQuNzM4IDQuMDN2LS4wMmwuMDEtLjAxMWguMDFjLjQzNC4wMjYuOC4xNzUgMS4wODUuNDQ5cS4xOTkuMTguNTM2Ljc2OS4yNDcuNDE3LjQ5Ni44MzFhMS43MTQgMS43MTQgMCAwIDEgMi44NjQuNzk1bC0uMDA1LjAxNWEuMDUuMDUgMCAwIDEtLjA0MS4wMTZxLTEuMTUxLjAwNS0yLjMwMiAwYS4wNC4wNCAwIDAgMC0uMDE1LjA1MWwxLjA0MiAxLjc3NmEuMDYuMDYgMCAwIDEgMCAuMDYybC0uNzM4IDEuMjZhLjA1LjA1IDAgMCAwIC4wMDUuMDY2IDcuNjcgNy42NyAwIDAgMS0uMTE4IDkuODk1cS0uMDMuMDMtLjA1MiAwbC0yLjIyLTMuODcyYS4yNS4yNSAwIDAgMC0uMDg3LS4wOTIgMTA4IDEwOCAwIDAgMS0zLjA5Mi0xLjg1M0ExMDggMTA4IDAgMCAwIDkgMTIuMzA1YS41LjUgMCAwIDAtLjIyNy0uMDQ3bC00LjUxMS0uMDA1di0uMDI2YzEuMjk1LTMuNjAzIDQuOTA4LTUuNDUgOC42ODEtNC44ODJhLjA5LjA5IDAgMCAwIC4wODgtLjAzN2wuNzA3LTEuMjEzYS4wOC4wOCAwIDAgMSAuMDYyLS4wMzZ6bS40MjcgNi4wNjktNC41NTItMi41OTZhLjA1LjA1IDAgMCAwLS4wNjIuMDE1bC0uOTk2IDEuNzA0Yy0uMDE1LjAyLS4wMDUuMDUxLjAxNi4wNjFsNC41NTIgMi42MDJjLjAyNi4wMS4wNTEgMCAuMDYyLS4wMmwuOTk2LTEuNzA0YS4wNDYuMDQ2IDAgMCAwLS4wMTUtLjA2Mm0tNi4yNDUgNS44MDZoNC4xMmEuMDIuMDIgMCAwIDAgLjAyLS4wMTVsLS4wMDItLjAxMmEuMDIuMDIgMCAwIDAtLjAwOS0uMDA5bC02LjE4OC0zLjU3N2EuMDIuMDIgMCAwIDAtLjAyMi4wMDhsLS4wMDQuMDA4di4wMTZsMi4wNjUgMy41NzEuMDA2LjAwNy4wMS4wMDN6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkhPTkVZX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/HONEY
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenHONEY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenHONEY', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1ecog_q._.js.map