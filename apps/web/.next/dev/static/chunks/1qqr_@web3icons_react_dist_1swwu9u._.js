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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenTKO.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenTKO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#17A84B',
                d: 'M15.05 6.08c-.737-.521-1.125-1.565-.61-2.305.435-.623 1.252-.878 1.908-.494 2.473 1.448 4.123 4.034 4.123 7.126a8.474 8.474 0 0 1-6.883 8.323v.677a1.589 1.589 0 1 1-3.177 0v-.677a8.474 8.474 0 0 1-6.882-8.323c0-3.134 1.7-5.788 4.23-7.232.664-.379 1.482-.114 1.913.517.519.76.104 1.822-.656 2.34a5.29 5.29 0 0 0-2.31 4.375 5.3 5.3 0 0 0 3.705 5.052v-1.346a1.589 1.589 0 0 1 3.177 0v1.346a5.297 5.297 0 0 0 1.461-9.38m-1.462 4.332a1.589 1.589 0 1 1-3.178 0 1.589 1.589 0 0 1 3.178 0',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#077FA2',
                d: 'M12 21a1.59 1.59 0 0 0 1.589-1.588v-.676c3.92-.74 6.883-4.17 6.883-8.285a8.49 8.49 0 0 0-4.026-7.223c-.7-.432-1.585-.14-2.033.549-.509.784-.089 1.849.672 2.392a5.25 5.25 0 0 1 2.21 4.282c0 2.359-1.558 4.348-3.706 5.017V14.12A1.59 1.59 0 0 0 12 12.53zm0-8.998a1.59 1.59 0 0 0 0-3.177z',
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
                d: 'M15.05 6.08c-.737-.521-1.125-1.565-.61-2.305.435-.624 1.252-.878 1.908-.494 2.473 1.448 4.123 4.034 4.123 7.127a8.474 8.474 0 0 1-6.883 8.322v.677a1.587 1.587 0 1 1-3.177 0v-.677a8.47 8.47 0 0 1-6.882-8.323c0-3.134 1.7-5.788 4.23-7.232.664-.379 1.482-.114 1.913.517.519.76.104 1.822-.656 2.34a5.29 5.29 0 0 0-2.31 4.376 5.3 5.3 0 0 0 3.705 5.051v-1.346a1.589 1.589 0 0 1 3.177 0v1.346a5.297 5.297 0 0 0 1.461-9.38m-1.462 4.332a1.588 1.588 0 1 1-3.176 0 1.588 1.588 0 0 1 3.176 0',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 21a1.59 1.59 0 0 0 1.589-1.588v-.676c3.92-.74 6.882-4.17 6.882-8.285a8.49 8.49 0 0 0-4.025-7.223c-.7-.432-1.585-.14-2.033.549-.509.784-.089 1.849.672 2.392a5.25 5.25 0 0 1 2.21 4.282c0 2.359-1.558 4.348-3.706 5.017V14.12A1.59 1.59 0 0 0 12 12.53zm0-8.998a1.588 1.588 0 0 0 0-3.177z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#TKO__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#17A84B',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M14.71 6.737c-.655-.462-1-1.39-.541-2.048.386-.554 1.112-.78 1.696-.439 2.197 1.287 3.664 3.586 3.664 6.334a7.53 7.53 0 0 1-6.118 7.398v.602a1.411 1.411 0 1 1-2.823 0v-.602a7.53 7.53 0 0 1-6.118-7.398c0-2.786 1.511-5.145 3.76-6.429.59-.336 1.317-.1 1.7.46.461.675.092 1.62-.582 2.08a4.7 4.7 0 0 0-2.055 3.89 4.71 4.71 0 0 0 3.295 4.49v-1.197a1.412 1.412 0 1 1 2.823 0v1.196a4.708 4.708 0 0 0 1.3-8.337m-1.299 3.851a1.411 1.411 0 1 1-2.822 0 1.411 1.411 0 0 1 2.822 0',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 20a1.41 1.41 0 0 0 1.412-1.412v-.6c3.484-.659 6.118-3.707 6.118-7.365a7.55 7.55 0 0 0-3.579-6.42c-.622-.385-1.408-.125-1.807.488-.452.696-.079 1.643.598 2.126a4.67 4.67 0 0 1 1.964 3.806 4.675 4.675 0 0 1-3.294 4.46v-1.2A1.41 1.41 0 0 0 12 12.473zm0-7.998a1.412 1.412 0 0 0 0-2.824z',
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
                        id: 'TKO__a'
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
 * @component @name TokenTKO
 * @description Web3Icon for TokenTKO
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxN0E4NEIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE1LjA1IDYuMDhjLS43MzctLjUyMS0xLjEyNS0xLjU2NS0uNjEtMi4zMDUuNDM1LS42MjMgMS4yNTItLjg3OCAxLjkwOC0uNDk0IDIuNDczIDEuNDQ4IDQuMTIzIDQuMDM0IDQuMTIzIDcuMTI2YTguNDc0IDguNDc0IDAgMCAxLTYuODgzIDguMzIzdi42NzdhMS41ODkgMS41ODkgMCAxIDEtMy4xNzcgMHYtLjY3N2E4LjQ3NCA4LjQ3NCAwIDAgMS02Ljg4Mi04LjMyM2MwLTMuMTM0IDEuNy01Ljc4OCA0LjIzLTcuMjMyLjY2NC0uMzc5IDEuNDgyLS4xMTQgMS45MTMuNTE3LjUxOS43Ni4xMDQgMS44MjItLjY1NiAyLjM0YTUuMjkgNS4yOSAwIDAgMC0yLjMxIDQuMzc1IDUuMyA1LjMgMCAwIDAgMy43MDUgNS4wNTJ2LTEuMzQ2YTEuNTg5IDEuNTg5IDAgMCAxIDMuMTc3IDB2MS4zNDZhNS4yOTcgNS4yOTcgMCAwIDAgMS40NjEtOS4zOG0tMS40NjIgNC4zMzJhMS41ODkgMS41ODkgMCAxIDEtMy4xNzggMCAxLjU4OSAxLjU4OSAwIDAgMSAzLjE3OCAwIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDxwYXRoIGZpbGw9IiMwNzdGQTIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDIxYTEuNTkgMS41OSAwIDAgMCAxLjU4OS0xLjU4OHYtLjY3NmMzLjkyLS43NCA2Ljg4My00LjE3IDYuODgzLTguMjg1YTguNDkgOC40OSAwIDAgMC00LjAyNi03LjIyM2MtLjctLjQzMi0xLjU4NS0uMTQtMi4wMzMuNTQ5LS41MDkuNzg0LS4wODkgMS44NDkuNjcyIDIuMzkyYTUuMjUgNS4yNSAwIDAgMSAyLjIxIDQuMjgyYzAgMi4zNTktMS41NTggNC4zNDgtMy43MDYgNS4wMTdWMTQuMTJBMS41OSAxLjU5IDAgMCAwIDEyIDEyLjUzem0wLTguOTk4YTEuNTkgMS41OSAwIDAgMCAwLTMuMTc3eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE1LjA1IDYuMDhjLS43MzctLjUyMS0xLjEyNS0xLjU2NS0uNjEtMi4zMDUuNDM1LS42MjQgMS4yNTItLjg3OCAxLjkwOC0uNDk0IDIuNDczIDEuNDQ4IDQuMTIzIDQuMDM0IDQuMTIzIDcuMTI3YTguNDc0IDguNDc0IDAgMCAxLTYuODgzIDguMzIydi42NzdhMS41ODcgMS41ODcgMCAxIDEtMy4xNzcgMHYtLjY3N2E4LjQ3IDguNDcgMCAwIDEtNi44ODItOC4zMjNjMC0zLjEzNCAxLjctNS43ODggNC4yMy03LjIzMi42NjQtLjM3OSAxLjQ4Mi0uMTE0IDEuOTEzLjUxNy41MTkuNzYuMTA0IDEuODIyLS42NTYgMi4zNGE1LjI5IDUuMjkgMCAwIDAtMi4zMSA0LjM3NiA1LjMgNS4zIDAgMCAwIDMuNzA1IDUuMDUxdi0xLjM0NmExLjU4OSAxLjU4OSAwIDAgMSAzLjE3NyAwdjEuMzQ2YTUuMjk3IDUuMjk3IDAgMCAwIDEuNDYxLTkuMzhtLTEuNDYyIDQuMzMyYTEuNTg4IDEuNTg4IDAgMSAxLTMuMTc2IDAgMS41ODggMS41ODggMCAwIDEgMy4xNzYgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAyMWExLjU5IDEuNTkgMCAwIDAgMS41ODktMS41ODh2LS42NzZjMy45Mi0uNzQgNi44ODItNC4xNyA2Ljg4Mi04LjI4NWE4LjQ5IDguNDkgMCAwIDAtNC4wMjUtNy4yMjNjLS43LS40MzItMS41ODUtLjE0LTIuMDMzLjU0OS0uNTA5Ljc4NC0uMDg5IDEuODQ5LjY3MiAyLjM5MmE1LjI1IDUuMjUgMCAwIDEgMi4yMSA0LjI4MmMwIDIuMzU5LTEuNTU4IDQuMzQ4LTMuNzA2IDUuMDE3VjE0LjEyQTEuNTkgMS41OSAwIDAgMCAxMiAxMi41M3ptMC04Ljk5OGExLjU4OCAxLjU4OCAwIDAgMCAwLTMuMTc3eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNUS09fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMTdBODRCIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjcxIDYuNzM3Yy0uNjU1LS40NjItMS0xLjM5LS41NDEtMi4wNDguMzg2LS41NTQgMS4xMTItLjc4IDEuNjk2LS40MzkgMi4xOTcgMS4yODcgMy42NjQgMy41ODYgMy42NjQgNi4zMzRhNy41MyA3LjUzIDAgMCAxLTYuMTE4IDcuMzk4di42MDJhMS40MTEgMS40MTEgMCAxIDEtMi44MjMgMHYtLjYwMmE3LjUzIDcuNTMgMCAwIDEtNi4xMTgtNy4zOThjMC0yLjc4NiAxLjUxMS01LjE0NSAzLjc2LTYuNDI5LjU5LS4zMzYgMS4zMTctLjEgMS43LjQ2LjQ2MS42NzUuMDkyIDEuNjItLjU4MiAyLjA4YTQuNyA0LjcgMCAwIDAtMi4wNTUgMy44OSA0LjcxIDQuNzEgMCAwIDAgMy4yOTUgNC40OXYtMS4xOTdhMS40MTIgMS40MTIgMCAxIDEgMi44MjMgMHYxLjE5NmE0LjcwOCA0LjcwOCAwIDAgMCAxLjMtOC4zMzdtLTEuMjk5IDMuODUxYTEuNDExIDEuNDExIDAgMSAxLTIuODIyIDAgMS40MTEgMS40MTEgMCAwIDEgMi44MjIgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMjBhMS40MSAxLjQxIDAgMCAwIDEuNDEyLTEuNDEydi0uNmMzLjQ4NC0uNjU5IDYuMTE4LTMuNzA3IDYuMTE4LTcuMzY1YTcuNTUgNy41NSAwIDAgMC0zLjU3OS02LjQyYy0uNjIyLS4zODUtMS40MDgtLjEyNS0xLjgwNy40ODgtLjQ1Mi42OTYtLjA3OSAxLjY0My41OTggMi4xMjZhNC42NyA0LjY3IDAgMCAxIDEuOTY0IDMuODA2IDQuNjc1IDQuNjc1IDAgMCAxLTMuMjk0IDQuNDZ2LTEuMkExLjQxIDEuNDEgMCAwIDAgMTIgMTIuNDczem0wLTcuOTk4YTEuNDEyIDEuNDEyIDAgMCAwIDAtMi44MjR6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iVEtPX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/TKO
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenTKO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenTKO', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1swwu9u._.js.map