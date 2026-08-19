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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkOrderly.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkOrderly
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#5D00BA',
                d: 'M12.018 4h-.036a7.97 7.97 0 0 0-5.24 1.97.14.14 0 0 0 .094.247h10.327c.13 0 .194-.16.095-.246A7.97 7.97 0 0 0 12.018 4m-3.38 10.045c.1 0 .192.05.25.133a3.8 3.8 0 0 0 3.11 1.62 3.8 3.8 0 0 0 3.113-1.62.31.31 0 0 1 .25-.133h4.137c.12 0 .206.114.172.23a8.002 8.002 0 0 1-15.342 0 .178.178 0 0 1 .172-.23zm6.374-4.36a.39.39 0 0 0 .305.156h4.147a.178.178 0 0 0 .173-.231 8 8 0 0 0-1.473-2.71.3.3 0 0 0-.221-.103H6.057a.3.3 0 0 0-.22.103 8 8 0 0 0-1.474 2.71.18.18 0 0 0 .173.231h4.147c.12 0 .232-.059.305-.155A3.79 3.79 0 0 1 12.001 8.2c1.227 0 2.318.582 3.013 1.486zm.553 3.627a.114.114 0 0 0 .105.154v-.003h4.044a.18.18 0 0 0 .179-.149 8 8 0 0 0-.021-2.746.18.18 0 0 0-.179-.147h-4.068c-.08 0-.132.084-.102.158.178.439.275.962.275 1.422s-.082.901-.233 1.311m-7.235.154c.08 0 .133-.08.105-.154v.002a3.6 3.6 0 0 1-.233-1.31c0-.505.099-.984.275-1.423.03-.076-.023-.158-.102-.158H4.307a.18.18 0 0 0-.179.147A8.4 8.4 0 0 0 4 12.001q0 .673.107 1.315a.18.18 0 0 0 .179.15z',
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
                d: 'M12.018 4h-.036a7.97 7.97 0 0 0-5.24 1.97.14.14 0 0 0 .094.247h10.327c.13 0 .194-.16.095-.246A7.97 7.97 0 0 0 12.018 4m-3.38 10.045c.1 0 .192.05.25.133a3.8 3.8 0 0 0 3.11 1.62 3.8 3.8 0 0 0 3.113-1.62.31.31 0 0 1 .25-.133h4.137c.12 0 .206.114.172.23a8.002 8.002 0 0 1-15.342 0 .178.178 0 0 1 .172-.23zm6.374-4.36a.39.39 0 0 0 .305.156h4.147a.178.178 0 0 0 .173-.231 8 8 0 0 0-1.473-2.71.3.3 0 0 0-.221-.103H6.057a.3.3 0 0 0-.22.103 8 8 0 0 0-1.474 2.71.18.18 0 0 0 .173.231h4.147c.12 0 .232-.059.305-.155A3.79 3.79 0 0 1 12.001 8.2c1.227 0 2.318.582 3.013 1.486zm.553 3.627a.114.114 0 0 0 .105.154v-.003h4.044a.18.18 0 0 0 .179-.149 8 8 0 0 0-.021-2.746.18.18 0 0 0-.179-.147h-4.068c-.08 0-.132.084-.102.158.178.439.275.962.275 1.422s-.082.901-.233 1.311m-7.235.154c.08 0 .133-.08.105-.154v.002a3.6 3.6 0 0 1-.233-1.31c0-.505.099-.984.275-1.423.03-.076-.023-.158-.102-.158H4.307a.18.18 0 0 0-.179.147A8.4 8.4 0 0 0 4 12.001q0 .673.107 1.315a.18.18 0 0 0 .179.15z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#orderly__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#5D00BA',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.018 4h-.036a7.97 7.97 0 0 0-5.24 1.97.14.14 0 0 0 .094.247h10.327c.13 0 .194-.16.095-.246A7.97 7.97 0 0 0 12.018 4m-3.38 10.045c.1 0 .192.05.25.133a3.8 3.8 0 0 0 3.11 1.62 3.8 3.8 0 0 0 3.113-1.62.31.31 0 0 1 .25-.133h4.137c.12 0 .206.114.172.23a8.002 8.002 0 0 1-15.342 0 .178.178 0 0 1 .172-.23zm6.374-4.36a.39.39 0 0 0 .305.156h4.147a.178.178 0 0 0 .173-.231 8 8 0 0 0-1.473-2.71.3.3 0 0 0-.221-.103H6.057a.3.3 0 0 0-.22.103 8 8 0 0 0-1.474 2.71.18.18 0 0 0 .173.231h4.147c.12 0 .232-.059.305-.155A3.79 3.79 0 0 1 12.001 8.2c1.227 0 2.318.582 3.013 1.486zm.553 3.627a.114.114 0 0 0 .105.154v-.003h4.044a.18.18 0 0 0 .179-.149 8 8 0 0 0-.021-2.746.18.18 0 0 0-.179-.147h-4.068c-.08 0-.132.084-.102.158.178.439.275.962.275 1.422s-.082.901-.233 1.311m-7.235.154c.08 0 .133-.08.105-.154v.002a3.6 3.6 0 0 1-.233-1.31c0-.505.099-.984.275-1.423.03-.076-.023-.158-.102-.158H4.307a.18.18 0 0 0-.179.147A8.4 8.4 0 0 0 4 12.001q0 .673.107 1.315a.18.18 0 0 0 .179.15z',
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
                        id: 'orderly__a'
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
 * @component @name NetworkOrderly
 * @description Web3Icon for NetworkOrderly
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM1RDAwQkEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjAxOCA0aC0uMDM2YTcuOTcgNy45NyAwIDAgMC01LjI0IDEuOTcuMTQuMTQgMCAwIDAgLjA5NC4yNDdoMTAuMzI3Yy4xMyAwIC4xOTQtLjE2LjA5NS0uMjQ2QTcuOTcgNy45NyAwIDAgMCAxMi4wMTggNG0tMy4zOCAxMC4wNDVjLjEgMCAuMTkyLjA1LjI1LjEzM2EzLjggMy44IDAgMCAwIDMuMTEgMS42MiAzLjggMy44IDAgMCAwIDMuMTEzLTEuNjIuMzEuMzEgMCAwIDEgLjI1LS4xMzNoNC4xMzdjLjEyIDAgLjIwNi4xMTQuMTcyLjIzYTguMDAyIDguMDAyIDAgMCAxLTE1LjM0MiAwIC4xNzguMTc4IDAgMCAxIC4xNzItLjIzem02LjM3NC00LjM2YS4zOS4zOSAwIDAgMCAuMzA1LjE1Nmg0LjE0N2EuMTc4LjE3OCAwIDAgMCAuMTczLS4yMzEgOCA4IDAgMCAwLTEuNDczLTIuNzEuMy4zIDAgMCAwLS4yMjEtLjEwM0g2LjA1N2EuMy4zIDAgMCAwLS4yMi4xMDMgOCA4IDAgMCAwLTEuNDc0IDIuNzEuMTguMTggMCAwIDAgLjE3My4yMzFoNC4xNDdjLjEyIDAgLjIzMi0uMDU5LjMwNS0uMTU1QTMuNzkgMy43OSAwIDAgMSAxMi4wMDEgOC4yYzEuMjI3IDAgMi4zMTguNTgyIDMuMDEzIDEuNDg2em0uNTUzIDMuNjI3YS4xMTQuMTE0IDAgMCAwIC4xMDUuMTU0di0uMDAzaDQuMDQ0YS4xOC4xOCAwIDAgMCAuMTc5LS4xNDkgOCA4IDAgMCAwLS4wMjEtMi43NDYuMTguMTggMCAwIDAtLjE3OS0uMTQ3aC00LjA2OGMtLjA4IDAtLjEzMi4wODQtLjEwMi4xNTguMTc4LjQzOS4yNzUuOTYyLjI3NSAxLjQyMnMtLjA4Mi45MDEtLjIzMyAxLjMxMW0tNy4yMzUuMTU0Yy4wOCAwIC4xMzMtLjA4LjEwNS0uMTU0di4wMDJhMy42IDMuNiAwIDAgMS0uMjMzLTEuMzFjMC0uNTA1LjA5OS0uOTg0LjI3NS0xLjQyMy4wMy0uMDc2LS4wMjMtLjE1OC0uMTAyLS4xNThINC4zMDdhLjE4LjE4IDAgMCAwLS4xNzkuMTQ3QTguNCA4LjQgMCAwIDAgNCAxMi4wMDFxMCAuNjczLjEwNyAxLjMxNWEuMTguMTggMCAwIDAgLjE3OS4xNXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjAxOCA0aC0uMDM2YTcuOTcgNy45NyAwIDAgMC01LjI0IDEuOTcuMTQuMTQgMCAwIDAgLjA5NC4yNDdoMTAuMzI3Yy4xMyAwIC4xOTQtLjE2LjA5NS0uMjQ2QTcuOTcgNy45NyAwIDAgMCAxMi4wMTggNG0tMy4zOCAxMC4wNDVjLjEgMCAuMTkyLjA1LjI1LjEzM2EzLjggMy44IDAgMCAwIDMuMTEgMS42MiAzLjggMy44IDAgMCAwIDMuMTEzLTEuNjIuMzEuMzEgMCAwIDEgLjI1LS4xMzNoNC4xMzdjLjEyIDAgLjIwNi4xMTQuMTcyLjIzYTguMDAyIDguMDAyIDAgMCAxLTE1LjM0MiAwIC4xNzguMTc4IDAgMCAxIC4xNzItLjIzem02LjM3NC00LjM2YS4zOS4zOSAwIDAgMCAuMzA1LjE1Nmg0LjE0N2EuMTc4LjE3OCAwIDAgMCAuMTczLS4yMzEgOCA4IDAgMCAwLTEuNDczLTIuNzEuMy4zIDAgMCAwLS4yMjEtLjEwM0g2LjA1N2EuMy4zIDAgMCAwLS4yMi4xMDMgOCA4IDAgMCAwLTEuNDc0IDIuNzEuMTguMTggMCAwIDAgLjE3My4yMzFoNC4xNDdjLjEyIDAgLjIzMi0uMDU5LjMwNS0uMTU1QTMuNzkgMy43OSAwIDAgMSAxMi4wMDEgOC4yYzEuMjI3IDAgMi4zMTguNTgyIDMuMDEzIDEuNDg2em0uNTUzIDMuNjI3YS4xMTQuMTE0IDAgMCAwIC4xMDUuMTU0di0uMDAzaDQuMDQ0YS4xOC4xOCAwIDAgMCAuMTc5LS4xNDkgOCA4IDAgMCAwLS4wMjEtMi43NDYuMTguMTggMCAwIDAtLjE3OS0uMTQ3aC00LjA2OGMtLjA4IDAtLjEzMi4wODQtLjEwMi4xNTguMTc4LjQzOS4yNzUuOTYyLjI3NSAxLjQyMnMtLjA4Mi45MDEtLjIzMyAxLjMxMW0tNy4yMzUuMTU0Yy4wOCAwIC4xMzMtLjA4LjEwNS0uMTU0di4wMDJhMy42IDMuNiAwIDAgMS0uMjMzLTEuMzFjMC0uNTA1LjA5OS0uOTg0LjI3NS0xLjQyMy4wMy0uMDc2LS4wMjMtLjE1OC0uMTAyLS4xNThINC4zMDdhLjE4LjE4IDAgMCAwLS4xNzkuMTQ3QTguNCA4LjQgMCAwIDAgNCAxMi4wMDFxMCAuNjczLjEwNyAxLjMxNWEuMTguMTggMCAwIDAgLjE3OS4xNXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNvcmRlcmx5X19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzVEMDBCQSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi4wMTggNGgtLjAzNmE3Ljk3IDcuOTcgMCAwIDAtNS4yNCAxLjk3LjE0LjE0IDAgMCAwIC4wOTQuMjQ3aDEwLjMyN2MuMTMgMCAuMTk0LS4xNi4wOTUtLjI0NkE3Ljk3IDcuOTcgMCAwIDAgMTIuMDE4IDRtLTMuMzggMTAuMDQ1Yy4xIDAgLjE5Mi4wNS4yNS4xMzNhMy44IDMuOCAwIDAgMCAzLjExIDEuNjIgMy44IDMuOCAwIDAgMCAzLjExMy0xLjYyLjMxLjMxIDAgMCAxIC4yNS0uMTMzaDQuMTM3Yy4xMiAwIC4yMDYuMTE0LjE3Mi4yM2E4LjAwMiA4LjAwMiAwIDAgMS0xNS4zNDIgMCAuMTc4LjE3OCAwIDAgMSAuMTcyLS4yM3ptNi4zNzQtNC4zNmEuMzkuMzkgMCAwIDAgLjMwNS4xNTZoNC4xNDdhLjE3OC4xNzggMCAwIDAgLjE3My0uMjMxIDggOCAwIDAgMC0xLjQ3My0yLjcxLjMuMyAwIDAgMC0uMjIxLS4xMDNINi4wNTdhLjMuMyAwIDAgMC0uMjIuMTAzIDggOCAwIDAgMC0xLjQ3NCAyLjcxLjE4LjE4IDAgMCAwIC4xNzMuMjMxaDQuMTQ3Yy4xMiAwIC4yMzItLjA1OS4zMDUtLjE1NUEzLjc5IDMuNzkgMCAwIDEgMTIuMDAxIDguMmMxLjIyNyAwIDIuMzE4LjU4MiAzLjAxMyAxLjQ4NnptLjU1MyAzLjYyN2EuMTE0LjExNCAwIDAgMCAuMTA1LjE1NHYtLjAwM2g0LjA0NGEuMTguMTggMCAwIDAgLjE3OS0uMTQ5IDggOCAwIDAgMC0uMDIxLTIuNzQ2LjE4LjE4IDAgMCAwLS4xNzktLjE0N2gtNC4wNjhjLS4wOCAwLS4xMzIuMDg0LS4xMDIuMTU4LjE3OC40MzkuMjc1Ljk2Mi4yNzUgMS40MjJzLS4wODIuOTAxLS4yMzMgMS4zMTFtLTcuMjM1LjE1NGMuMDggMCAuMTMzLS4wOC4xMDUtLjE1NHYuMDAyYTMuNiAzLjYgMCAwIDEtLjIzMy0xLjMxYzAtLjUwNS4wOTktLjk4NC4yNzUtMS40MjMuMDMtLjA3Ni0uMDIzLS4xNTgtLjEwMi0uMTU4SDQuMzA3YS4xOC4xOCAwIDAgMC0uMTc5LjE0N0E4LjQgOC40IDAgMCAwIDQgMTIuMDAxcTAgLjY3My4xMDcgMS4zMTVhLjE4LjE4IDAgMCAwIC4xNzkuMTV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0ib3JkZXJseV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/networks/orderly
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkOrderly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkOrderly', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1e819ur._.js.map