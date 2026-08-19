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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCARBON.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCARBON
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#A4A4A4',
                d: 'M12 20.47a8.47 8.47 0 1 0 0-16.94 8.47 8.47 0 0 0 0 16.94m0 .53a9 9 0 1 0 0-18 9 9 0 0 0 0 18',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#FCFCFC',
                d: 'M16.457 12.265c-.116 1.446-.99 3.97-3.833 3.97-2.011 0-3.97-2.048-5.378-3.318-.18-.175-.54-.61-.54-.916s.36-.741.54-.916c1.408-1.27 3.372-3.32 5.378-3.32 2.806 0 3.696 2.52 3.828 3.971h4.018v.53zm-.894-.529c.09 0 .158-.08.143-.17-.18-1.212-.97-3.271-3.177-3.271-.905 0-1.953.81-2.467 1.165a.106.106 0 0 0-.016.158l1.89 2.118zm-5.02 0c.133 0 .197-.164.107-.265L9.368 9.99c-.577.487-1.445 1.101-1.868 1.747zm5.168.699c.016-.09-.095-.17-.18-.17-.17 0-.286.07-.408.19l-2.874 3.23q.144.023.28.022c2.24 0 3.018-2.065 3.182-3.272m-2.017.45c.185-.196.053-.62-.212-.62H7.5a19.7 19.7 0 0 0 3.97 3.193z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 20.47a8.47 8.47 0 1 0 0-16.94 8.47 8.47 0 0 0 0 16.94m0 .53a9 9 0 1 0 0-17.999A9 9 0 0 0 12 21',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M16.457 12.265c-.116 1.446-.99 3.97-3.833 3.97-2.011 0-3.97-2.048-5.378-3.318-.18-.175-.54-.61-.54-.916s.36-.742.54-.916c1.408-1.27 3.372-3.32 5.378-3.32 2.806 0 3.696 2.52 3.828 3.971h4.018v.53zm-.894-.529c.09 0 .158-.08.143-.17-.18-1.212-.97-3.271-3.177-3.271-.905 0-1.953.81-2.467 1.165a.106.106 0 0 0-.016.158l1.89 2.118zm-5.02 0c.133 0 .197-.164.107-.265L9.368 9.99c-.577.487-1.445 1.101-1.868 1.747zm5.168.699c.016-.09-.095-.17-.18-.17-.17 0-.286.07-.408.19l-2.874 3.23q.144.023.28.022c2.24 0 3.018-2.065 3.182-3.272m-2.017.45c.185-.196.053-.62-.212-.62H7.5a19.7 19.7 0 0 0 3.97 3.193z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CARBON__a)'
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
                        d: 'M12 19.53a7.53 7.53 0 1 0 0-15.06 7.53 7.53 0 0 0 0 15.06m0 .47a8 8 0 1 0 0-16 8 8 0 0 0 0 16',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M15.962 12.236c-.103 1.285-.88 3.53-3.407 3.53-1.788 0-3.53-1.822-4.781-2.951-.16-.156-.48-.542-.48-.814 0-.273.32-.66.48-.815 1.252-1.129 2.997-2.95 4.781-2.95 2.494 0 3.285 2.24 3.403 3.53h3.571v.47zm-.795-.47c.08 0 .141-.071.127-.151-.16-1.078-.861-2.909-2.824-2.909-.804 0-1.736.72-2.193 1.036a.1.1 0 0 0-.039.067.1.1 0 0 0 .025.074l1.68 1.882zm-4.461 0c.117 0 .174-.147.094-.236l-1.14-1.318c-.513.433-1.285.98-1.661 1.553zm4.593.62c.014-.08-.085-.15-.16-.15-.151 0-.255.061-.363.17l-2.555 2.87q.129.02.25.019c1.99 0 2.682-1.836 2.828-2.908m-1.793.4c.164-.174.047-.55-.188-.55H8a17.5 17.5 0 0 0 3.53 2.837z'
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
                        id: 'CARBON__a'
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
 * @component @name TokenCARBON
 * @description Web3Icon for TokenCARBON
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNBNEE0QTQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDIwLjQ3YTguNDcgOC40NyAwIDEgMCAwLTE2Ljk0IDguNDcgOC40NyAwIDAgMCAwIDE2Ljk0bTAgLjUzYTkgOSAwIDEgMCAwLTE4IDkgOSAwIDAgMCAwIDE4IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDxwYXRoIGZpbGw9IiNGQ0ZDRkMiIGQ9Ik0xNi40NTcgMTIuMjY1Yy0uMTE2IDEuNDQ2LS45OSAzLjk3LTMuODMzIDMuOTctMi4wMTEgMC0zLjk3LTIuMDQ4LTUuMzc4LTMuMzE4LS4xOC0uMTc1LS41NC0uNjEtLjU0LS45MTZzLjM2LS43NDEuNTQtLjkxNmMxLjQwOC0xLjI3IDMuMzcyLTMuMzIgNS4zNzgtMy4zMiAyLjgwNiAwIDMuNjk2IDIuNTIgMy44MjggMy45NzFoNC4wMTh2LjUzem0tLjg5NC0uNTI5Yy4wOSAwIC4xNTgtLjA4LjE0My0uMTctLjE4LTEuMjEyLS45Ny0zLjI3MS0zLjE3Ny0zLjI3MS0uOTA1IDAtMS45NTMuODEtMi40NjcgMS4xNjVhLjEwNi4xMDYgMCAwIDAtLjAxNi4xNThsMS44OSAyLjExOHptLTUuMDIgMGMuMTMzIDAgLjE5Ny0uMTY0LjEwNy0uMjY1TDkuMzY4IDkuOTljLS41NzcuNDg3LTEuNDQ1IDEuMTAxLTEuODY4IDEuNzQ3em01LjE2OC42OTljLjAxNi0uMDktLjA5NS0uMTctLjE4LS4xNy0uMTcgMC0uMjg2LjA3LS40MDguMTlsLTIuODc0IDMuMjNxLjE0NC4wMjMuMjguMDIyYzIuMjQgMCAzLjAxOC0yLjA2NSAzLjE4Mi0zLjI3Mm0tMi4wMTcuNDVjLjE4NS0uMTk2LjA1My0uNjItLjIxMi0uNjJINy41YTE5LjcgMTkuNyAwIDAgMCAzLjk3IDMuMTkzeiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDIwLjQ3YTguNDcgOC40NyAwIDEgMCAwLTE2Ljk0IDguNDcgOC40NyAwIDAgMCAwIDE2Ljk0bTAgLjUzYTkgOSAwIDEgMCAwLTE3Ljk5OUE5IDkgMCAwIDAgMTIgMjEiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjQ1NyAxMi4yNjVjLS4xMTYgMS40NDYtLjk5IDMuOTctMy44MzMgMy45Ny0yLjAxMSAwLTMuOTctMi4wNDgtNS4zNzgtMy4zMTgtLjE4LS4xNzUtLjU0LS42MS0uNTQtLjkxNnMuMzYtLjc0Mi41NC0uOTE2YzEuNDA4LTEuMjcgMy4zNzItMy4zMiA1LjM3OC0zLjMyIDIuODA2IDAgMy42OTYgMi41MiAzLjgyOCAzLjk3MWg0LjAxOHYuNTN6bS0uODk0LS41MjljLjA5IDAgLjE1OC0uMDguMTQzLS4xNy0uMTgtMS4yMTItLjk3LTMuMjcxLTMuMTc3LTMuMjcxLS45MDUgMC0xLjk1My44MS0yLjQ2NyAxLjE2NWEuMTA2LjEwNiAwIDAgMC0uMDE2LjE1OGwxLjg5IDIuMTE4em0tNS4wMiAwYy4xMzMgMCAuMTk3LS4xNjQuMTA3LS4yNjVMOS4zNjggOS45OWMtLjU3Ny40ODctMS40NDUgMS4xMDEtMS44NjggMS43NDd6bTUuMTY4LjY5OWMuMDE2LS4wOS0uMDk1LS4xNy0uMTgtLjE3LS4xNyAwLS4yODYuMDctLjQwOC4xOWwtMi44NzQgMy4yM3EuMTQ0LjAyMy4yOC4wMjJjMi4yNCAwIDMuMDE4LTIuMDY1IDMuMTgyLTMuMjcybS0yLjAxNy40NWMuMTg1LS4xOTYuMDUzLS42Mi0uMjEyLS42Mkg3LjVhMTkuNyAxOS43IDAgMCAwIDMuOTcgMy4xOTN6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDQVJCT05fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDE5LjUzYTcuNTMgNy41MyAwIDEgMCAwLTE1LjA2IDcuNTMgNy41MyAwIDAgMCAwIDE1LjA2bTAgLjQ3YTggOCAwIDEgMCAwLTE2IDggOCAwIDAgMCAwIDE2IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTUuOTYyIDEyLjIzNmMtLjEwMyAxLjI4NS0uODggMy41My0zLjQwNyAzLjUzLTEuNzg4IDAtMy41My0xLjgyMi00Ljc4MS0yLjk1MS0uMTYtLjE1Ni0uNDgtLjU0Mi0uNDgtLjgxNCAwLS4yNzMuMzItLjY2LjQ4LS44MTUgMS4yNTItMS4xMjkgMi45OTctMi45NSA0Ljc4MS0yLjk1IDIuNDk0IDAgMy4yODUgMi4yNCAzLjQwMyAzLjUzaDMuNTcxdi40N3ptLS43OTUtLjQ3Yy4wOCAwIC4xNDEtLjA3MS4xMjctLjE1MS0uMTYtMS4wNzgtLjg2MS0yLjkwOS0yLjgyNC0yLjkwOS0uODA0IDAtMS43MzYuNzItMi4xOTMgMS4wMzZhLjEuMSAwIDAgMC0uMDM5LjA2Ny4xLjEgMCAwIDAgLjAyNS4wNzRsMS42OCAxLjg4MnptLTQuNDYxIDBjLjExNyAwIC4xNzQtLjE0Ny4wOTQtLjIzNmwtMS4xNC0xLjMxOGMtLjUxMy40MzMtMS4yODUuOTgtMS42NjEgMS41NTN6bTQuNTkzLjYyYy4wMTQtLjA4LS4wODUtLjE1LS4xNi0uMTUtLjE1MSAwLS4yNTUuMDYxLS4zNjMuMTdsLTIuNTU1IDIuODdxLjEyOS4wMi4yNS4wMTljMS45OSAwIDIuNjgyLTEuODM2IDIuODI4LTIuOTA4bS0xLjc5My40Yy4xNjQtLjE3NC4wNDctLjU1LS4xODgtLjU1SDhhMTcuNSAxNy41IDAgMCAwIDMuNTMgMi44Mzd6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkNBUkJPTl9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/CARBON
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCARBON = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCARBON', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1x2w-g3._.js.map