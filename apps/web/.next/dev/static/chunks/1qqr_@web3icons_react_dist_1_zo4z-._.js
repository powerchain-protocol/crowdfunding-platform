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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenZEE.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenZEE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#1741C3',
                d: 'M8.5 12.064v-5.54a6.5 6.5 0 0 0-3 5.479c0 1.99.894 3.77 2.301 4.962l.071-.058c2.867-2.352 5.88-4.825 6.405-5.202.584-.42 1.204-.121 1.223.248v5.528a6.5 6.5 0 0 0 3-5.478 6.49 6.49 0 0 0-2.321-4.98c-2.937 2.337-6.076 4.8-6.605 5.18-.773.555-1.055.23-1.074-.139m6 5.94v-5.001l-5.664 4.679c.967.54 2.056.822 3.164.82a6.5 6.5 0 0 0 2.5-.498m-6.484.354A7.5 7.5 0 0 0 16.975 6.39a432 432 0 0 0 2.85-2.291c.132-.15.317-.54 0-.9-.319-.36-.84-.15-1.061 0l-2.907 2.37a7.5 7.5 0 0 0-8.84 12.038c-1.05.863-2.043 1.676-2.841 2.327-.133.15-.318.54 0 .9.306.348.722.064.95-.091l.025-.017zM9.5 10.753V6c.792-.33 1.642-.5 2.5-.498 1.092 0 2.121.27 3.025.745z',
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
                d: 'M8.5 12.064v-5.54a6.5 6.5 0 0 0-3 5.479c0 1.99.894 3.77 2.301 4.962l.071-.058c2.867-2.352 5.88-4.825 6.405-5.202.584-.42 1.204-.121 1.223.248v5.528a6.5 6.5 0 0 0 3-5.478 6.49 6.49 0 0 0-2.321-4.98c-2.937 2.337-6.076 4.8-6.605 5.18-.773.555-1.055.23-1.074-.139m6 5.94v-5.001l-5.664 4.679c.967.54 2.056.822 3.164.82a6.5 6.5 0 0 0 2.5-.498m-6.484.354A7.5 7.5 0 0 0 16.975 6.39a432 432 0 0 0 2.85-2.291c.132-.15.317-.54 0-.9-.319-.36-.84-.15-1.061 0l-2.907 2.37a7.5 7.5 0 0 0-8.84 12.038c-1.05.863-2.043 1.676-2.841 2.327-.133.15-.318.54 0 .9.306.348.722.064.95-.091l.025-.017zM9.5 10.753V6c.792-.33 1.642-.5 2.5-.498 1.092 0 2.121.27 3.025.745z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ZEE__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#1741C3',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M8.889 12.057V7.133a5.77 5.77 0 0 0-2.667 4.87c0 1.768.794 3.35 2.045 4.41l.064-.051c2.548-2.091 5.226-4.289 5.693-4.624.519-.373 1.07-.108 1.087.22v4.914a5.77 5.77 0 0 0 2.666-4.87 5.77 5.77 0 0 0-2.063-4.425c-2.61 2.077-5.4 4.265-5.87 4.604-.688.493-.938.204-.955-.124m5.333 5.28v-4.446l-5.035 4.16a5.75 5.75 0 0 0 2.813.73c.787 0 1.538-.159 2.222-.444m-5.763.315a6.667 6.667 0 0 0 7.964-10.638 439 439 0 0 0 2.532-2.037c.118-.134.283-.48 0-.8s-.747-.134-.943 0l-2.584 2.107a6.667 6.667 0 0 0-7.858 10.7c-.933.767-1.815 1.49-2.525 2.068-.118.133-.283.48 0 .801.272.309.642.056.844-.082l.022-.015zm1.319-6.76V6.666A5.8 5.8 0 0 1 12 6.225c.97 0 1.885.24 2.689.662z',
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
                        id: 'ZEE__a'
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
 * @component @name TokenZEE
 * @description Web3Icon for TokenZEE
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxNzQxQzMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTguNSAxMi4wNjR2LTUuNTRhNi41IDYuNSAwIDAgMC0zIDUuNDc5YzAgMS45OS44OTQgMy43NyAyLjMwMSA0Ljk2MmwuMDcxLS4wNThjMi44NjctMi4zNTIgNS44OC00LjgyNSA2LjQwNS01LjIwMi41ODQtLjQyIDEuMjA0LS4xMjEgMS4yMjMuMjQ4djUuNTI4YTYuNSA2LjUgMCAwIDAgMy01LjQ3OCA2LjQ5IDYuNDkgMCAwIDAtMi4zMjEtNC45OGMtMi45MzcgMi4zMzctNi4wNzYgNC44LTYuNjA1IDUuMTgtLjc3My41NTUtMS4wNTUuMjMtMS4wNzQtLjEzOW02IDUuOTR2LTUuMDAxbC01LjY2NCA0LjY3OWMuOTY3LjU0IDIuMDU2LjgyMiAzLjE2NC44MmE2LjUgNi41IDAgMCAwIDIuNS0uNDk4bS02LjQ4NC4zNTRBNy41IDcuNSAwIDAgMCAxNi45NzUgNi4zOWE0MzIgNDMyIDAgMCAwIDIuODUtMi4yOTFjLjEzMi0uMTUuMzE3LS41NCAwLS45LS4zMTktLjM2LS44NC0uMTUtMS4wNjEgMGwtMi45MDcgMi4zN2E3LjUgNy41IDAgMCAwLTguODQgMTIuMDM4Yy0xLjA1Ljg2My0yLjA0MyAxLjY3Ni0yLjg0MSAyLjMyNy0uMTMzLjE1LS4zMTguNTQgMCAuOS4zMDYuMzQ4LjcyMi4wNjQuOTUtLjA5MWwuMDI1LS4wMTd6TTkuNSAxMC43NTNWNmMuNzkyLS4zMyAxLjY0Mi0uNSAyLjUtLjQ5OCAxLjA5MiAwIDIuMTIxLjI3IDMuMDI1Ljc0NXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTguNSAxMi4wNjR2LTUuNTRhNi41IDYuNSAwIDAgMC0zIDUuNDc5YzAgMS45OS44OTQgMy43NyAyLjMwMSA0Ljk2MmwuMDcxLS4wNThjMi44NjctMi4zNTIgNS44OC00LjgyNSA2LjQwNS01LjIwMi41ODQtLjQyIDEuMjA0LS4xMjEgMS4yMjMuMjQ4djUuNTI4YTYuNSA2LjUgMCAwIDAgMy01LjQ3OCA2LjQ5IDYuNDkgMCAwIDAtMi4zMjEtNC45OGMtMi45MzcgMi4zMzctNi4wNzYgNC44LTYuNjA1IDUuMTgtLjc3My41NTUtMS4wNTUuMjMtMS4wNzQtLjEzOW02IDUuOTR2LTUuMDAxbC01LjY2NCA0LjY3OWMuOTY3LjU0IDIuMDU2LjgyMiAzLjE2NC44MmE2LjUgNi41IDAgMCAwIDIuNS0uNDk4bS02LjQ4NC4zNTRBNy41IDcuNSAwIDAgMCAxNi45NzUgNi4zOWE0MzIgNDMyIDAgMCAwIDIuODUtMi4yOTFjLjEzMi0uMTUuMzE3LS41NCAwLS45LS4zMTktLjM2LS44NC0uMTUtMS4wNjEgMGwtMi45MDcgMi4zN2E3LjUgNy41IDAgMCAwLTguODQgMTIuMDM4Yy0xLjA1Ljg2My0yLjA0MyAxLjY3Ni0yLjg0MSAyLjMyNy0uMTMzLjE1LS4zMTguNTQgMCAuOS4zMDYuMzQ4LjcyMi4wNjQuOTUtLjA5MWwuMDI1LS4wMTd6TTkuNSAxMC43NTNWNmMuNzkyLS4zMyAxLjY0Mi0uNSAyLjUtLjQ5OCAxLjA5MiAwIDIuMTIxLjI3IDMuMDI1Ljc0NXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNaRUVfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMTc0MUMzIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTguODg5IDEyLjA1N1Y3LjEzM2E1Ljc3IDUuNzcgMCAwIDAtMi42NjcgNC44N2MwIDEuNzY4Ljc5NCAzLjM1IDIuMDQ1IDQuNDFsLjA2NC0uMDUxYzIuNTQ4LTIuMDkxIDUuMjI2LTQuMjg5IDUuNjkzLTQuNjI0LjUxOS0uMzczIDEuMDctLjEwOCAxLjA4Ny4yMnY0LjkxNGE1Ljc3IDUuNzcgMCAwIDAgMi42NjYtNC44NyA1Ljc3IDUuNzcgMCAwIDAtMi4wNjMtNC40MjVjLTIuNjEgMi4wNzctNS40IDQuMjY1LTUuODcgNC42MDQtLjY4OC40OTMtLjkzOC4yMDQtLjk1NS0uMTI0bTUuMzMzIDUuMjh2LTQuNDQ2bC01LjAzNSA0LjE2YTUuNzUgNS43NSAwIDAgMCAyLjgxMy43M2MuNzg3IDAgMS41MzgtLjE1OSAyLjIyMi0uNDQ0bS01Ljc2My4zMTVhNi42NjcgNi42NjcgMCAwIDAgNy45NjQtMTAuNjM4IDQzOSA0MzkgMCAwIDAgMi41MzItMi4wMzdjLjExOC0uMTM0LjI4My0uNDggMC0uOHMtLjc0Ny0uMTM0LS45NDMgMGwtMi41ODQgMi4xMDdhNi42NjcgNi42NjcgMCAwIDAtNy44NTggMTAuN2MtLjkzMy43NjctMS44MTUgMS40OS0yLjUyNSAyLjA2OC0uMTE4LjEzMy0uMjgzLjQ4IDAgLjgwMS4yNzIuMzA5LjY0Mi4wNTYuODQ0LS4wODJsLjAyMi0uMDE1em0xLjMxOS02Ljc2VjYuNjY2QTUuOCA1LjggMCAwIDEgMTIgNi4yMjVjLjk3IDAgMS44ODUuMjQgMi42ODkuNjYyeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlpFRV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/ZEE
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenZEE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenZEE', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1_zo4z-._.js.map