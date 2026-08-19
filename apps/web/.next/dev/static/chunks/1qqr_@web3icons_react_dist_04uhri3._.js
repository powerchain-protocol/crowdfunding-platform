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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCREO.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCREO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#39B0F4',
                d: 'M12.25 3v2.44l-5.205 3.1a.56.56 0 0 0-.295.485v5.926c0 .2.06.32.23.425l5.135 3.055c.175.105.39.105.565 0l4.55-2.775 2.02 1.51-6.285 3.685c-.35.2-.78.2-1.13-.01L5.3 16.876a1.15 1.15 0 0 1-.55-.975V8.025c0-.405.21-.78.55-.985zm0 2.92v1.715L8.9 9.66c-.11.07-.15.245-.15.375v3.89l-.005.096c-.01.095-.015.175.07.225l3.26 1.96c.115.07.255.065.37 0l2.98-1.82 1.315.985-4.11 2.415a.72.72 0 0 1-.735-.005l-4.275-2.6a.76.76 0 0 1-.37-.64V9.385c0-.265.15-.51.37-.65l4.63-2.81zM12.5 14a1.75 1.75 0 1 0 0-3.499 1.75 1.75 0 0 0 0 3.5M18 9.126a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0m-2.75 1.376a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.25 3v2.44l-5.205 3.1a.56.56 0 0 0-.295.485v5.926c0 .2.06.32.23.425l5.135 3.055c.175.105.39.105.565 0l4.55-2.775 2.02 1.51-6.285 3.685c-.35.2-.78.2-1.13-.01L5.3 16.876a1.15 1.15 0 0 1-.55-.975V8.025c0-.405.21-.78.55-.985zm0 2.92v1.715L8.9 9.66c-.11.07-.15.245-.15.375v3.89l-.005.096c-.01.095-.015.175.07.225l3.26 1.96c.115.07.255.065.37 0l2.98-1.82 1.315.985-4.11 2.415a.72.72 0 0 1-.735-.005l-4.275-2.6a.76.76 0 0 1-.37-.64V9.385c0-.265.15-.51.37-.65l4.63-2.81zM12.5 14a1.75 1.75 0 1 0 0-3.499 1.75 1.75 0 0 0 0 3.5M18 9.126a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0m-2.75 1.376a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CREO__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#39B0F4',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.222 4v2.169L7.595 8.925a.5.5 0 0 0-.262.43v5.268c0 .178.053.285.205.378l4.564 2.716a.49.49 0 0 0 .502 0l4.045-2.467 1.796 1.342-5.587 3.276a.99.99 0 0 1-1.005-.01l-5.809-3.524a1.02 1.02 0 0 1-.489-.867v-7c0-.36.187-.693.49-.876zm0 2.596V8.12l-2.978 1.8c-.097.063-.133.218-.133.334v3.458l-.004.084c-.01.085-.014.156.062.2l2.898 1.743a.32.32 0 0 0 .329 0l2.649-1.618 1.169.875-3.654 2.147a.64.64 0 0 1-.653-.004l-3.8-2.312a.68.68 0 0 1-.33-.569V9.677c0-.236.134-.453.33-.578L12.221 6.6zm.223 7.182a1.555 1.555 0 1 0 0-3.11 1.555 1.555 0 0 0 0 3.11m4.889-4.333a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-2.445 1.222a.444.444 0 1 0 0-.888.444.444 0 0 0 0 .888'
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
                        id: 'CREO__a'
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
 * @component @name TokenCREO
 * @description Web3Icon for TokenCREO
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMzOUIwRjQiIGQ9Ik0xMi4yNSAzdjIuNDRsLTUuMjA1IDMuMWEuNTYuNTYgMCAwIDAtLjI5NS40ODV2NS45MjZjMCAuMi4wNi4zMi4yMy40MjVsNS4xMzUgMy4wNTVjLjE3NS4xMDUuMzkuMTA1LjU2NSAwbDQuNTUtMi43NzUgMi4wMiAxLjUxLTYuMjg1IDMuNjg1Yy0uMzUuMi0uNzguMi0xLjEzLS4wMUw1LjMgMTYuODc2YTEuMTUgMS4xNSAwIDAgMS0uNTUtLjk3NVY4LjAyNWMwLS40MDUuMjEtLjc4LjU1LS45ODV6bTAgMi45MnYxLjcxNUw4LjkgOS42NmMtLjExLjA3LS4xNS4yNDUtLjE1LjM3NXYzLjg5bC0uMDA1LjA5NmMtLjAxLjA5NS0uMDE1LjE3NS4wNy4yMjVsMy4yNiAxLjk2Yy4xMTUuMDcuMjU1LjA2NS4zNyAwbDIuOTgtMS44MiAxLjMxNS45ODUtNC4xMSAyLjQxNWEuNzIuNzIgMCAwIDEtLjczNS0uMDA1bC00LjI3NS0yLjZhLjc2Ljc2IDAgMCAxLS4zNy0uNjRWOS4zODVjMC0uMjY1LjE1LS41MS4zNy0uNjVsNC42My0yLjgxek0xMi41IDE0YTEuNzUgMS43NSAwIDEgMCAwLTMuNDk5IDEuNzUgMS43NSAwIDAgMCAwIDMuNU0xOCA5LjEyNmExLjEyNSAxLjEyNSAwIDEgMS0yLjI1IDAgMS4xMjUgMS4xMjUgMCAwIDEgMi4yNSAwbS0yLjc1IDEuMzc2YS41LjUgMCAxIDAgMC0xIC41LjUgMCAwIDAgMCAxIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi4yNSAzdjIuNDRsLTUuMjA1IDMuMWEuNTYuNTYgMCAwIDAtLjI5NS40ODV2NS45MjZjMCAuMi4wNi4zMi4yMy40MjVsNS4xMzUgMy4wNTVjLjE3NS4xMDUuMzkuMTA1LjU2NSAwbDQuNTUtMi43NzUgMi4wMiAxLjUxLTYuMjg1IDMuNjg1Yy0uMzUuMi0uNzguMi0xLjEzLS4wMUw1LjMgMTYuODc2YTEuMTUgMS4xNSAwIDAgMS0uNTUtLjk3NVY4LjAyNWMwLS40MDUuMjEtLjc4LjU1LS45ODV6bTAgMi45MnYxLjcxNUw4LjkgOS42NmMtLjExLjA3LS4xNS4yNDUtLjE1LjM3NXYzLjg5bC0uMDA1LjA5NmMtLjAxLjA5NS0uMDE1LjE3NS4wNy4yMjVsMy4yNiAxLjk2Yy4xMTUuMDcuMjU1LjA2NS4zNyAwbDIuOTgtMS44MiAxLjMxNS45ODUtNC4xMSAyLjQxNWEuNzIuNzIgMCAwIDEtLjczNS0uMDA1bC00LjI3NS0yLjZhLjc2Ljc2IDAgMCAxLS4zNy0uNjRWOS4zODVjMC0uMjY1LjE1LS41MS4zNy0uNjVsNC42My0yLjgxek0xMi41IDE0YTEuNzUgMS43NSAwIDEgMCAwLTMuNDk5IDEuNzUgMS43NSAwIDAgMCAwIDMuNU0xOCA5LjEyNmExLjEyNSAxLjEyNSAwIDEgMS0yLjI1IDAgMS4xMjUgMS4xMjUgMCAwIDEgMi4yNSAwbS0yLjc1IDEuMzc2YS41LjUgMCAxIDAgMC0xIC41LjUgMCAwIDAgMCAxIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDUkVPX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzM5QjBGNCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIuMjIyIDR2Mi4xNjlMNy41OTUgOC45MjVhLjUuNSAwIDAgMC0uMjYyLjQzdjUuMjY4YzAgLjE3OC4wNTMuMjg1LjIwNS4zNzhsNC41NjQgMi43MTZhLjQ5LjQ5IDAgMCAwIC41MDIgMGw0LjA0NS0yLjQ2NyAxLjc5NiAxLjM0Mi01LjU4NyAzLjI3NmEuOTkuOTkgMCAwIDEtMS4wMDUtLjAxbC01LjgwOS0zLjUyNGExLjAyIDEuMDIgMCAwIDEtLjQ4OS0uODY3di03YzAtLjM2LjE4Ny0uNjkzLjQ5LS44NzZ6bTAgMi41OTZWOC4xMmwtMi45NzggMS44Yy0uMDk3LjA2My0uMTMzLjIxOC0uMTMzLjMzNHYzLjQ1OGwtLjAwNC4wODRjLS4wMS4wODUtLjAxNC4xNTYuMDYyLjJsMi44OTggMS43NDNhLjMyLjMyIDAgMCAwIC4zMjkgMGwyLjY0OS0xLjYxOCAxLjE2OS44NzUtMy42NTQgMi4xNDdhLjY0LjY0IDAgMCAxLS42NTMtLjAwNGwtMy44LTIuMzEyYS42OC42OCAwIDAgMS0uMzMtLjU2OVY5LjY3N2MwLS4yMzYuMTM0LS40NTMuMzMtLjU3OEwxMi4yMjEgNi42em0uMjIzIDcuMTgyYTEuNTU1IDEuNTU1IDAgMSAwIDAtMy4xMSAxLjU1NSAxLjU1NSAwIDAgMCAwIDMuMTFtNC44ODktNC4zMzNhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbS0yLjQ0NSAxLjIyMmEuNDQ0LjQ0NCAwIDEgMCAwLS44ODguNDQ0LjQ0NCAwIDAgMCAwIC44ODgiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQ1JFT19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/CREO
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCREO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCREO', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_04uhri3._.js.map