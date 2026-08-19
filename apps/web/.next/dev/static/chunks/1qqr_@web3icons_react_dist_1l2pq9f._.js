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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenROME.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenROME
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#BE1F3D',
                d: 'M3.197 4.47c1.342.51 1.545 1.399 1.545 7.583 0 6.183-.128 6.59-1.62 7.374a.36.36 0 0 0-.122.14c.081.19 1.556.237 4.918.237 4.674 0 5.203-.035 4.46-.441a2.83 2.83 0 0 1-1.133-1.098c-.424-.986-.348-11.572.035-12.634.354-.854.302-.889 1.754-.755 3.152.377 4.57 2.12 4.57 5.742 0 2.526-.64 3.96-2.23 5.192-.779.58-1.104 1.196-1.278 2.426l-.238 1.603H21v-1.945c0-1.881-.035-1.916-.57-1.196-.458.65-.847.755-2.827.755-2.264 0-3.008-.447-1.417-.825 1.278-.308 3.078-1.875 3.612-3.176.743-1.672.639-4.506-.25-5.876-1.84-2.903-3.454-3.45-11.06-3.414-3.758 0-5.79.104-5.29.307m5.395.888c.104.308.214 3.35.214 6.793 0 4.994-.11 6.323-.499 6.631-.987.784-1.463-.72-1.463-6.793 0-5.47.435-7.177 1.22-7.177.173 0 .423.238.522.546z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3.197 4.47c1.342.51 1.545 1.399 1.545 7.583 0 6.183-.128 6.59-1.62 7.374a.36.36 0 0 0-.122.14c.081.19 1.556.237 4.918.237 4.674 0 5.203-.035 4.46-.441a2.83 2.83 0 0 1-1.133-1.098c-.424-.986-.348-11.572.035-12.634.354-.854.302-.889 1.754-.755 3.152.377 4.57 2.12 4.57 5.742 0 2.526-.64 3.96-2.23 5.192-.779.58-1.104 1.196-1.278 2.426l-.238 1.603H21v-1.945c0-1.881-.035-1.916-.57-1.196-.458.65-.847.755-2.827.755-2.264 0-3.008-.447-1.417-.825 1.278-.308 3.078-1.875 3.612-3.176.743-1.672.639-4.506-.25-5.876-1.84-2.903-3.454-3.45-11.06-3.414-3.758 0-5.79.104-5.29.307m5.395.888c.104.308.214 3.35.214 6.793 0 4.994-.11 6.323-.499 6.631-.987.784-1.463-.72-1.463-6.793 0-5.47.435-7.177 1.22-7.177.173 0 .423.238.522.546z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ROME__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#BE1F3D',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4.175 5.306c1.193.454 1.373 1.244 1.373 6.74 0 5.498-.113 5.859-1.44 6.556a.3.3 0 0 0-.108.123c.072.17 1.383.212 4.372.212 4.155 0 4.624-.03 3.963-.392a2.5 2.5 0 0 1-1.006-.976c-.377-.877-.31-10.286.031-11.23.315-.76.268-.79 1.559-.672 2.802.336 4.062 1.884 4.062 5.105 0 2.245-.568 3.52-1.982 4.614-.692.516-.98 1.063-1.136 2.158l-.211 1.424H20V17.24c0-1.672-.031-1.703-.506-1.063-.408.578-.753.67-2.513.67-2.013 0-2.674-.397-1.26-.732 1.136-.274 2.736-1.667 3.21-2.823.661-1.487.568-4.005-.221-5.224-1.637-2.58-3.071-3.065-9.833-3.034-3.339 0-5.145.092-4.702.273m4.795.79c.093.273.191 2.978.191 6.039 0 4.438-.098 5.62-.444 5.894-.877.696-1.3-.64-1.3-6.039 0-4.862.387-6.38 1.084-6.38.154 0 .376.212.464.486z'
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
                        id: 'ROME__a'
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
 * @component @name TokenROME
 * @description Web3Icon for TokenROME
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNCRTFGM0QiIGQ9Ik0zLjE5NyA0LjQ3YzEuMzQyLjUxIDEuNTQ1IDEuMzk5IDEuNTQ1IDcuNTgzIDAgNi4xODMtLjEyOCA2LjU5LTEuNjIgNy4zNzRhLjM2LjM2IDAgMCAwLS4xMjIuMTRjLjA4MS4xOSAxLjU1Ni4yMzcgNC45MTguMjM3IDQuNjc0IDAgNS4yMDMtLjAzNSA0LjQ2LS40NDFhMi44MyAyLjgzIDAgMCAxLTEuMTMzLTEuMDk4Yy0uNDI0LS45ODYtLjM0OC0xMS41NzIuMDM1LTEyLjYzNC4zNTQtLjg1NC4zMDItLjg4OSAxLjc1NC0uNzU1IDMuMTUyLjM3NyA0LjU3IDIuMTIgNC41NyA1Ljc0MiAwIDIuNTI2LS42NCAzLjk2LTIuMjMgNS4xOTItLjc3OS41OC0xLjEwNCAxLjE5Ni0xLjI3OCAyLjQyNmwtLjIzOCAxLjYwM0gyMXYtMS45NDVjMC0xLjg4MS0uMDM1LTEuOTE2LS41Ny0xLjE5Ni0uNDU4LjY1LS44NDcuNzU1LTIuODI3Ljc1NS0yLjI2NCAwLTMuMDA4LS40NDctMS40MTctLjgyNSAxLjI3OC0uMzA4IDMuMDc4LTEuODc1IDMuNjEyLTMuMTc2Ljc0My0xLjY3Mi42MzktNC41MDYtLjI1LTUuODc2LTEuODQtMi45MDMtMy40NTQtMy40NS0xMS4wNi0zLjQxNC0zLjc1OCAwLTUuNzkuMTA0LTUuMjkuMzA3bTUuMzk1Ljg4OGMuMTA0LjMwOC4yMTQgMy4zNS4yMTQgNi43OTMgMCA0Ljk5NC0uMTEgNi4zMjMtLjQ5OSA2LjYzMS0uOTg3Ljc4NC0xLjQ2My0uNzItMS40NjMtNi43OTMgMC01LjQ3LjQzNS03LjE3NyAxLjIyLTcuMTc3LjE3MyAwIC40MjMuMjM4LjUyMi41NDZ6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zLjE5NyA0LjQ3YzEuMzQyLjUxIDEuNTQ1IDEuMzk5IDEuNTQ1IDcuNTgzIDAgNi4xODMtLjEyOCA2LjU5LTEuNjIgNy4zNzRhLjM2LjM2IDAgMCAwLS4xMjIuMTRjLjA4MS4xOSAxLjU1Ni4yMzcgNC45MTguMjM3IDQuNjc0IDAgNS4yMDMtLjAzNSA0LjQ2LS40NDFhMi44MyAyLjgzIDAgMCAxLTEuMTMzLTEuMDk4Yy0uNDI0LS45ODYtLjM0OC0xMS41NzIuMDM1LTEyLjYzNC4zNTQtLjg1NC4zMDItLjg4OSAxLjc1NC0uNzU1IDMuMTUyLjM3NyA0LjU3IDIuMTIgNC41NyA1Ljc0MiAwIDIuNTI2LS42NCAzLjk2LTIuMjMgNS4xOTItLjc3OS41OC0xLjEwNCAxLjE5Ni0xLjI3OCAyLjQyNmwtLjIzOCAxLjYwM0gyMXYtMS45NDVjMC0xLjg4MS0uMDM1LTEuOTE2LS41Ny0xLjE5Ni0uNDU4LjY1LS44NDcuNzU1LTIuODI3Ljc1NS0yLjI2NCAwLTMuMDA4LS40NDctMS40MTctLjgyNSAxLjI3OC0uMzA4IDMuMDc4LTEuODc1IDMuNjEyLTMuMTc2Ljc0My0xLjY3Mi42MzktNC41MDYtLjI1LTUuODc2LTEuODQtMi45MDMtMy40NTQtMy40NS0xMS4wNi0zLjQxNC0zLjc1OCAwLTUuNzkuMTA0LTUuMjkuMzA3bTUuMzk1Ljg4OGMuMTA0LjMwOC4yMTQgMy4zNS4yMTQgNi43OTMgMCA0Ljk5NC0uMTEgNi4zMjMtLjQ5OSA2LjYzMS0uOTg3Ljc4NC0xLjQ2My0uNzItMS40NjMtNi43OTMgMC01LjQ3LjQzNS03LjE3NyAxLjIyLTcuMTc3LjE3MyAwIC40MjMuMjM4LjUyMi41NDZ6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNST01FX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0JFMUYzRCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNC4xNzUgNS4zMDZjMS4xOTMuNDU0IDEuMzczIDEuMjQ0IDEuMzczIDYuNzQgMCA1LjQ5OC0uMTEzIDUuODU5LTEuNDQgNi41NTZhLjMuMyAwIDAgMC0uMTA4LjEyM2MuMDcyLjE3IDEuMzgzLjIxMiA0LjM3Mi4yMTIgNC4xNTUgMCA0LjYyNC0uMDMgMy45NjMtLjM5MmEyLjUgMi41IDAgMCAxLTEuMDA2LS45NzZjLS4zNzctLjg3Ny0uMzEtMTAuMjg2LjAzMS0xMS4yMy4zMTUtLjc2LjI2OC0uNzkgMS41NTktLjY3MiAyLjgwMi4zMzYgNC4wNjIgMS44ODQgNC4wNjIgNS4xMDUgMCAyLjI0NS0uNTY4IDMuNTItMS45ODIgNC42MTQtLjY5Mi41MTYtLjk4IDEuMDYzLTEuMTM2IDIuMTU4bC0uMjExIDEuNDI0SDIwVjE3LjI0YzAtMS42NzItLjAzMS0xLjcwMy0uNTA2LTEuMDYzLS40MDguNTc4LS43NTMuNjctMi41MTMuNjctMi4wMTMgMC0yLjY3NC0uMzk3LTEuMjYtLjczMiAxLjEzNi0uMjc0IDIuNzM2LTEuNjY3IDMuMjEtMi44MjMuNjYxLTEuNDg3LjU2OC00LjAwNS0uMjIxLTUuMjI0LTEuNjM3LTIuNTgtMy4wNzEtMy4wNjUtOS44MzMtMy4wMzQtMy4zMzkgMC01LjE0NS4wOTItNC43MDIuMjczbTQuNzk1Ljc5Yy4wOTMuMjczLjE5MSAyLjk3OC4xOTEgNi4wMzkgMCA0LjQzOC0uMDk4IDUuNjItLjQ0NCA1Ljg5NC0uODc3LjY5Ni0xLjMtLjY0LTEuMy02LjAzOSAwLTQuODYyLjM4Ny02LjM4IDEuMDg0LTYuMzguMTU0IDAgLjM3Ni4yMTIuNDY0LjQ4NnoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iUk9NRV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/ROME
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenROME = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenROME', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1l2pq9f._.js.map