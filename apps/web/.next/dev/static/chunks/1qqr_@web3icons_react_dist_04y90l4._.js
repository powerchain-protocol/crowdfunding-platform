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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSAITAMA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSAITAMA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#SAITAMA__a)',
                d: 'M6.96 3a9.95 9.95 0 0 0 0 6.87l.03.042-1.676 1.44 2.263 1.476L4.8 15.302l3.76 2.262L9.35 21l2.572-2.294L14.597 21l.808-3.436 3.795-2.262-2.772-2.453 2.258-1.497-1.687-1.43.046-.051c.463-1.085 1.111-3.986 0-6.871L13.61 7.068a3 3 0 0 0-1.625-.468c-.72 0-1.307.247-1.62.437zm-.417 12.08 1.898-1.691 1.132.735.504 1.733h3.733l.545-1.635 1.338-.89-.175.154 1.939 1.595-2.952 1.8-.468 2.242-2.12-1.703-1.969 1.698-.597-2.243-2.808-1.8zm7.859-2.144 2.556-1.697-2.978-2.556-.411 1.851zM13.11 7.999a2.4 2.4 0 0 0-1.126-.304c-.494 0-.91.175-1.194.35l.628 2.628-.998 3.014.432 1.142h.633v-1.543h1.028v1.543h.535l.407-1.142-.973-3.014zm-3.173.74-2.942 2.5 2.592 1.65.782-2.36zm-.34-1.07L7.562 5.264c-.134.401-.206 1.131-.19 1.851.015.751.18 1.528.462 2.068zm4.773.037 1.78 1.501a4.7 4.7 0 0 0 .478-2.124c0-.622-.088-1.177-.155-1.594l-.036-.226z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'SAITAMA__a',
                        x1: '4.8',
                        x2: '18.364',
                        y1: '12',
                        y2: '12',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.27',
                                stopColor: '#2F239F'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#81BBE3'
                            }
                        ]
                    ]
                ]
            ]
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M6.96 3a9.95 9.95 0 0 0 0 6.87l.03.042-1.676 1.44 2.263 1.476L4.8 15.302l3.76 2.262L9.35 21l2.572-2.294L14.597 21l.808-3.436 3.795-2.262-2.772-2.453 2.258-1.497-1.687-1.43.046-.051c.463-1.085 1.111-3.986 0-6.871L13.61 7.068a3 3 0 0 0-1.625-.468c-.72 0-1.307.247-1.62.437zm-.417 12.08 1.898-1.691 1.132.735.504 1.733h3.733l.545-1.635 1.338-.89-.175.154 1.939 1.595-2.952 1.8-.468 2.242-2.12-1.703-1.969 1.698-.597-2.243-2.808-1.8zm7.859-2.144 2.556-1.697-2.978-2.556-.411 1.851zM13.11 7.999a2.4 2.4 0 0 0-1.126-.304c-.494 0-.91.175-1.194.35l.628 2.628-.998 3.014.432 1.142h.633v-1.543h1.028v1.543h.535l.407-1.142-.973-3.014zm-3.173.74-2.942 2.5 2.592 1.65.782-2.36zm-.34-1.07L7.562 5.264c-.134.401-.206 1.131-.19 1.851.015.751.18 1.528.462 2.068zm4.773.037 1.78 1.501a4.7 4.7 0 0 0 .478-2.124c0-.622-.088-1.177-.155-1.594l-.036-.226z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#SAITAMA__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#SAITAMA__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M7.52 4a8.84 8.84 0 0 0 0 6.107l.028.037-1.49 1.28 2.01 1.312L5.6 14.935l3.342 2.011L9.646 20l2.285-2.039L14.31 20l.717-3.054 3.374-2.011-2.464-2.18 2.007-1.331-1.5-1.27.042-.047c.411-.964.987-3.542 0-6.107L13.43 7.616a2.65 2.65 0 0 0-1.445-.416c-.64 0-1.16.22-1.44.389zm-.37 10.738 1.687-1.504 1.005.654.448 1.54h3.32l.484-1.453 1.188-.791-.155.137 1.723 1.417-2.624 1.6-.416 1.993-1.883-1.513-1.75 1.509-.531-1.993-2.496-1.6zm6.985-1.906 2.272-1.509-2.647-2.272-.366 1.646zm-1.147-4.389a2.1 2.1 0 0 0-1.002-.27c-.439 0-.809.156-1.06.312l.557 2.335-.886 2.68.384 1.014h.562v-1.371h.914v1.371h.476l.36-1.015-.863-2.679zm-2.821.659-2.615 2.221 2.304 1.468.695-2.098zm-.302-.951-1.81-2.14c-.119.357-.183 1.006-.17 1.646.015.668.16 1.358.412 1.838zm4.243.032 1.581 1.335a4.2 4.2 0 0 0 .425-1.888c0-.553-.077-1.047-.137-1.417l-.032-.202z',
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
                    'linearGradient',
                    {
                        id: 'SAITAMA__b',
                        x1: '5.6',
                        x2: '17.657',
                        y1: '12',
                        y2: '12',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.27',
                                stopColor: '#2F239F'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#81BBE3'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'SAITAMA__a'
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
 * @component @name TokenSAITAMA
 * @description Web3Icon for TokenSAITAMA
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjU0FJVEFNQV9fYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuOTYgM2E5Ljk1IDkuOTUgMCAwIDAgMCA2Ljg3bC4wMy4wNDItMS42NzYgMS40NCAyLjI2MyAxLjQ3Nkw0LjggMTUuMzAybDMuNzYgMi4yNjJMOS4zNSAyMWwyLjU3Mi0yLjI5NEwxNC41OTcgMjFsLjgwOC0zLjQzNiAzLjc5NS0yLjI2Mi0yLjc3Mi0yLjQ1MyAyLjI1OC0xLjQ5Ny0xLjY4Ny0xLjQzLjA0Ni0uMDUxYy40NjMtMS4wODUgMS4xMTEtMy45ODYgMC02Ljg3MUwxMy42MSA3LjA2OGEzIDMgMCAwIDAtMS42MjUtLjQ2OGMtLjcyIDAtMS4zMDcuMjQ3LTEuNjIuNDM3em0tLjQxNyAxMi4wOCAxLjg5OC0xLjY5MSAxLjEzMi43MzUuNTA0IDEuNzMzaDMuNzMzbC41NDUtMS42MzUgMS4zMzgtLjg5LS4xNzUuMTU0IDEuOTM5IDEuNTk1LTIuOTUyIDEuOC0uNDY4IDIuMjQyLTIuMTItMS43MDMtMS45NjkgMS42OTgtLjU5Ny0yLjI0My0yLjgwOC0xLjh6bTcuODU5LTIuMTQ0IDIuNTU2LTEuNjk3LTIuOTc4LTIuNTU2LS40MTEgMS44NTF6TTEzLjExIDcuOTk5YTIuNCAyLjQgMCAwIDAtMS4xMjYtLjMwNGMtLjQ5NCAwLS45MS4xNzUtMS4xOTQuMzVsLjYyOCAyLjYyOC0uOTk4IDMuMDE0LjQzMiAxLjE0MmguNjMzdi0xLjU0M2gxLjAyOHYxLjU0M2guNTM1bC40MDctMS4xNDItLjk3My0zLjAxNHptLTMuMTczLjc0LTIuOTQyIDIuNSAyLjU5MiAxLjY1Ljc4Mi0yLjM2em0tLjM0LTEuMDdMNy41NjIgNS4yNjRjLS4xMzQuNDAxLS4yMDYgMS4xMzEtLjE5IDEuODUxLjAxNS43NTEuMTggMS41MjguNDYyIDIuMDY4em00Ljc3My4wMzcgMS43OCAxLjUwMWE0LjcgNC43IDAgMCAwIC40NzgtMi4xMjRjMC0uNjIyLS4wODgtMS4xNzctLjE1NS0xLjU5NGwtLjAzNi0uMjI2eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlNBSVRBTUFfX2EiIHgxPSI0LjgiIHgyPSIxOC4zNjQiIHkxPSIxMiIgeTI9IjEyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjI3IiBzdG9wLWNvbG9yPSIjMkYyMzlGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzgxQkJFMyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuOTYgM2E5Ljk1IDkuOTUgMCAwIDAgMCA2Ljg3bC4wMy4wNDItMS42NzYgMS40NCAyLjI2MyAxLjQ3Nkw0LjggMTUuMzAybDMuNzYgMi4yNjJMOS4zNSAyMWwyLjU3Mi0yLjI5NEwxNC41OTcgMjFsLjgwOC0zLjQzNiAzLjc5NS0yLjI2Mi0yLjc3Mi0yLjQ1MyAyLjI1OC0xLjQ5Ny0xLjY4Ny0xLjQzLjA0Ni0uMDUxYy40NjMtMS4wODUgMS4xMTEtMy45ODYgMC02Ljg3MUwxMy42MSA3LjA2OGEzIDMgMCAwIDAtMS42MjUtLjQ2OGMtLjcyIDAtMS4zMDcuMjQ3LTEuNjIuNDM3em0tLjQxNyAxMi4wOCAxLjg5OC0xLjY5MSAxLjEzMi43MzUuNTA0IDEuNzMzaDMuNzMzbC41NDUtMS42MzUgMS4zMzgtLjg5LS4xNzUuMTU0IDEuOTM5IDEuNTk1LTIuOTUyIDEuOC0uNDY4IDIuMjQyLTIuMTItMS43MDMtMS45NjkgMS42OTgtLjU5Ny0yLjI0My0yLjgwOC0xLjh6bTcuODU5LTIuMTQ0IDIuNTU2LTEuNjk3LTIuOTc4LTIuNTU2LS40MTEgMS44NTF6TTEzLjExIDcuOTk5YTIuNCAyLjQgMCAwIDAtMS4xMjYtLjMwNGMtLjQ5NCAwLS45MS4xNzUtMS4xOTQuMzVsLjYyOCAyLjYyOC0uOTk4IDMuMDE0LjQzMiAxLjE0MmguNjMzdi0xLjU0M2gxLjAyOHYxLjU0M2guNTM1bC40MDctMS4xNDItLjk3My0zLjAxNHptLTMuMTczLjc0LTIuOTQyIDIuNSAyLjU5MiAxLjY1Ljc4Mi0yLjM2em0tLjM0LTEuMDdMNy41NjIgNS4yNjRjLS4xMzQuNDAxLS4yMDYgMS4xMzEtLjE5IDEuODUxLjAxNS43NTEuMTggMS41MjguNDYyIDIuMDY4em00Ljc3My4wMzcgMS43OCAxLjUwMWE0LjcgNC43IDAgMCAwIC40NzgtMi4xMjRjMC0uNjIyLS4wODgtMS4xNzctLjE1NS0xLjU5NGwtLjAzNi0uMjI2eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTQUlUQU1BX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNTQUlUQU1BX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjUyIDRhOC44NCA4Ljg0IDAgMCAwIDAgNi4xMDdsLjAyOC4wMzctMS40OSAxLjI4IDIuMDEgMS4zMTJMNS42IDE0LjkzNWwzLjM0MiAyLjAxMUw5LjY0NiAyMGwyLjI4NS0yLjAzOUwxNC4zMSAyMGwuNzE3LTMuMDU0IDMuMzc0LTIuMDExLTIuNDY0LTIuMTggMi4wMDctMS4zMzEtMS41LTEuMjcuMDQyLS4wNDdjLjQxMS0uOTY0Ljk4Ny0zLjU0MiAwLTYuMTA3TDEzLjQzIDcuNjE2YTIuNjUgMi42NSAwIDAgMC0xLjQ0NS0uNDE2Yy0uNjQgMC0xLjE2LjIyLTEuNDQuMzg5em0tLjM3IDEwLjczOCAxLjY4Ny0xLjUwNCAxLjAwNS42NTQuNDQ4IDEuNTRoMy4zMmwuNDg0LTEuNDUzIDEuMTg4LS43OTEtLjE1NS4xMzcgMS43MjMgMS40MTctMi42MjQgMS42LS40MTYgMS45OTMtMS44ODMtMS41MTMtMS43NSAxLjUwOS0uNTMxLTEuOTkzLTIuNDk2LTEuNnptNi45ODUtMS45MDYgMi4yNzItMS41MDktMi42NDctMi4yNzItLjM2NiAxLjY0NnptLTEuMTQ3LTQuMzg5YTIuMSAyLjEgMCAwIDAtMS4wMDItLjI3Yy0uNDM5IDAtLjgwOS4xNTYtMS4wNi4zMTJsLjU1NyAyLjMzNS0uODg2IDIuNjguMzg0IDEuMDE0aC41NjJ2LTEuMzcxaC45MTR2MS4zNzFoLjQ3NmwuMzYtMS4wMTUtLjg2My0yLjY3OXptLTIuODIxLjY1OS0yLjYxNSAyLjIyMSAyLjMwNCAxLjQ2OC42OTUtMi4wOTh6bS0uMzAyLS45NTEtMS44MS0yLjE0Yy0uMTE5LjM1Ny0uMTgzIDEuMDA2LS4xNyAxLjY0Ni4wMTUuNjY4LjE2IDEuMzU4LjQxMiAxLjgzOHptNC4yNDMuMDMyIDEuNTgxIDEuMzM1YTQuMiA0LjIgMCAwIDAgLjQyNS0xLjg4OGMwLS41NTMtLjA3Ny0xLjA0Ny0uMTM3LTEuNDE3bC0uMDMyLS4yMDJ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iU0FJVEFNQV9fYiIgeDE9IjUuNiIgeDI9IjE3LjY1NyIgeTE9IjEyIiB5Mj0iMTIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMjciIHN0b3AtY29sb3I9IiMyRjIzOUYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjODFCQkUzIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlNBSVRBTUFfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/SAITAMA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSAITAMA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSAITAMA', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_04y90l4._.js.map