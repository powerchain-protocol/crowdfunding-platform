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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenZIG.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenZIG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#734ACC',
                d: 'M3.58 9.307c0-.599.448-1.08 1-1.08h.905c.552 0 .999.481.999 1.08v4.807c0 .598-.447 1.08-.999 1.08h-.906c-.551 0-.998-.482-.998-1.08z'
            }
        ],
        [
            'path',
            {
                fill: '#AC8CE1',
                d: 'M17.516 9.179c0-.523.447-.952.999-.952h.906c.551 0 .998.43.998.952v3.902c0 .522-.447.952-.998.952h-.906c-.552 0-.999-.43-.999-.952z'
            }
        ],
        [
            'path',
            {
                fill: '#936ED8',
                d: 'M14.032 11.552c0-.551.447-1.004.998-1.004h.906c.552 0 .999.453.999 1.004v6.12c0 .552-.447 1.005-.999 1.005h-.906c-.551 0-.998-.453-.998-1.005z'
            }
        ],
        [
            'path',
            {
                fill: '#6640C7',
                d: 'M7.064 4.028c0-.57.447-1.028.999-1.028h.905c.552 0 1 .465 1 1.028v8.396c0 .569-.448 1.027-1 1.027h-.905c-.552 0-.999-.464-.999-1.027z'
            }
        ],
        [
            'path',
            {
                fill: '#8961D4',
                d: 'M10.549 5.764c0-.563.447-1.022.998-1.022h.906c.552 0 .999.459.999 1.022v14.214c0 .563-.447 1.022-.999 1.022h-.906c-.551 0-.998-.459-.998-1.022z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3.581 9.307c0-.599.447-1.08.999-1.08h.906c.551 0 .998.481.998 1.08v4.807c0 .598-.447 1.08-.998 1.08H4.58c-.552 0-.999-.482-.999-1.08zm13.935-.128c0-.523.447-.952.998-.952h.906c.552 0 .999.43.999.952v3.902c0 .522-.447.952-.999.952h-.906c-.551 0-.998-.43-.998-.952zm-3.484 2.373c0-.551.447-1.004.999-1.004h.906c.551 0 .998.453.998 1.004v6.12c0 .552-.447 1.005-.998 1.005h-.906c-.552 0-.999-.453-.999-1.005zM7.065 4.028c0-.57.447-1.028.999-1.028h.905c.552 0 1 .465 1 1.028v8.396c0 .569-.448 1.027-1 1.027h-.905c-.552 0-1-.464-1-1.027zm3.483 1.736c0-.563.447-1.022.999-1.022h.906c.551 0 .998.459.998 1.022v14.214c0 .563-.447 1.022-.998 1.022h-.906c-.552 0-.999-.459-.999-1.022z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ZIG__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#734ACC',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4.517 9.606c0-.532.397-.96.887-.96h.805c.49 0 .888.428.888.96v4.273c0 .532-.397.96-.888.96h-.805c-.49 0-.887-.428-.887-.96zm12.386-.114c0-.465.397-.846.888-.846h.805c.49 0 .887.381.887.846v3.468c0 .465-.397.847-.887.847h-.805c-.49 0-.888-.382-.888-.847zm-3.095 2.111c0-.49.397-.893.887-.893h.805c.49 0 .888.402.888.893v5.44c0 .49-.397.893-.888.893h-.805a.89.89 0 0 1-.887-.893zM7.613 4.914A.9.9 0 0 1 8.501 4h.805c.49 0 .888.413.888.914v7.463a.9.9 0 0 1-.888.913h-.805c-.49 0-.888-.413-.888-.913zm3.097 1.543a.9.9 0 0 1 .888-.908h.805a.9.9 0 0 1 .888.908v12.635a.9.9 0 0 1-.888.908h-.805a.9.9 0 0 1-.888-.908z'
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
                        id: 'ZIG__a'
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
 * @component @name TokenZIG
 * @description Web3Icon for TokenZIG
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM3MzRBQ0MiIGQ9Ik0zLjU4IDkuMzA3YzAtLjU5OS40NDgtMS4wOCAxLTEuMDhoLjkwNWMuNTUyIDAgLjk5OS40ODEuOTk5IDEuMDh2NC44MDdjMCAuNTk4LS40NDcgMS4wOC0uOTk5IDEuMDhoLS45MDZjLS41NTEgMC0uOTk4LS40ODItLjk5OC0xLjA4eiIvPgogICAgPHBhdGggZmlsbD0iI0FDOENFMSIgZD0iTTE3LjUxNiA5LjE3OWMwLS41MjMuNDQ3LS45NTIuOTk5LS45NTJoLjkwNmMuNTUxIDAgLjk5OC40My45OTguOTUydjMuOTAyYzAgLjUyMi0uNDQ3Ljk1Mi0uOTk4Ljk1MmgtLjkwNmMtLjU1MiAwLS45OTktLjQzLS45OTktLjk1MnoiLz4KICAgIDxwYXRoIGZpbGw9IiM5MzZFRDgiIGQ9Ik0xNC4wMzIgMTEuNTUyYzAtLjU1MS40NDctMS4wMDQuOTk4LTEuMDA0aC45MDZjLjU1MiAwIC45OTkuNDUzLjk5OSAxLjAwNHY2LjEyYzAgLjU1Mi0uNDQ3IDEuMDA1LS45OTkgMS4wMDVoLS45MDZjLS41NTEgMC0uOTk4LS40NTMtLjk5OC0xLjAwNXoiLz4KICAgIDxwYXRoIGZpbGw9IiM2NjQwQzciIGQ9Ik03LjA2NCA0LjAyOGMwLS41Ny40NDctMS4wMjguOTk5LTEuMDI4aC45MDVjLjU1MiAwIDEgLjQ2NSAxIDEuMDI4djguMzk2YzAgLjU2OS0uNDQ4IDEuMDI3LTEgMS4wMjdoLS45MDVjLS41NTIgMC0uOTk5LS40NjQtLjk5OS0xLjAyN3oiLz4KICAgIDxwYXRoIGZpbGw9IiM4OTYxRDQiIGQ9Ik0xMC41NDkgNS43NjRjMC0uNTYzLjQ0Ny0xLjAyMi45OTgtMS4wMjJoLjkwNmMuNTUyIDAgLjk5OS40NTkuOTk5IDEuMDIydjE0LjIxNGMwIC41NjMtLjQ0NyAxLjAyMi0uOTk5IDEuMDIyaC0uOTA2Yy0uNTUxIDAtLjk5OC0uNDU5LS45OTgtMS4wMjJ6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zLjU4MSA5LjMwN2MwLS41OTkuNDQ3LTEuMDguOTk5LTEuMDhoLjkwNmMuNTUxIDAgLjk5OC40ODEuOTk4IDEuMDh2NC44MDdjMCAuNTk4LS40NDcgMS4wOC0uOTk4IDEuMDhINC41OGMtLjU1MiAwLS45OTktLjQ4Mi0uOTk5LTEuMDh6bTEzLjkzNS0uMTI4YzAtLjUyMy40NDctLjk1Mi45OTgtLjk1MmguOTA2Yy41NTIgMCAuOTk5LjQzLjk5OS45NTJ2My45MDJjMCAuNTIyLS40NDcuOTUyLS45OTkuOTUyaC0uOTA2Yy0uNTUxIDAtLjk5OC0uNDMtLjk5OC0uOTUyem0tMy40ODQgMi4zNzNjMC0uNTUxLjQ0Ny0xLjAwNC45OTktMS4wMDRoLjkwNmMuNTUxIDAgLjk5OC40NTMuOTk4IDEuMDA0djYuMTJjMCAuNTUyLS40NDcgMS4wMDUtLjk5OCAxLjAwNWgtLjkwNmMtLjU1MiAwLS45OTktLjQ1My0uOTk5LTEuMDA1ek03LjA2NSA0LjAyOGMwLS41Ny40NDctMS4wMjguOTk5LTEuMDI4aC45MDVjLjU1MiAwIDEgLjQ2NSAxIDEuMDI4djguMzk2YzAgLjU2OS0uNDQ4IDEuMDI3LTEgMS4wMjdoLS45MDVjLS41NTIgMC0xLS40NjQtMS0xLjAyN3ptMy40ODMgMS43MzZjMC0uNTYzLjQ0Ny0xLjAyMi45OTktMS4wMjJoLjkwNmMuNTUxIDAgLjk5OC40NTkuOTk4IDEuMDIydjE0LjIxNGMwIC41NjMtLjQ0NyAxLjAyMi0uOTk4IDEuMDIyaC0uOTA2Yy0uNTUyIDAtLjk5OS0uNDU5LS45OTktMS4wMjJ6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNaSUdfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNzM0QUNDIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjUxNyA5LjYwNmMwLS41MzIuMzk3LS45Ni44ODctLjk2aC44MDVjLjQ5IDAgLjg4OC40MjguODg4Ljk2djQuMjczYzAgLjUzMi0uMzk3Ljk2LS44ODguOTZoLS44MDVjLS40OSAwLS44ODctLjQyOC0uODg3LS45NnptMTIuMzg2LS4xMTRjMC0uNDY1LjM5Ny0uODQ2Ljg4OC0uODQ2aC44MDVjLjQ5IDAgLjg4Ny4zODEuODg3Ljg0NnYzLjQ2OGMwIC40NjUtLjM5Ny44NDctLjg4Ny44NDdoLS44MDVjLS40OSAwLS44ODgtLjM4Mi0uODg4LS44NDd6bS0zLjA5NSAyLjExMWMwLS40OS4zOTctLjg5My44ODctLjg5M2guODA1Yy40OSAwIC44ODguNDAyLjg4OC44OTN2NS40NGMwIC40OS0uMzk3Ljg5My0uODg4Ljg5M2gtLjgwNWEuODkuODkgMCAwIDEtLjg4Ny0uODkzek03LjYxMyA0LjkxNEEuOS45IDAgMCAxIDguNTAxIDRoLjgwNWMuNDkgMCAuODg4LjQxMy44ODguOTE0djcuNDYzYS45LjkgMCAwIDEtLjg4OC45MTNoLS44MDVjLS40OSAwLS44ODgtLjQxMy0uODg4LS45MTN6bTMuMDk3IDEuNTQzYS45LjkgMCAwIDEgLjg4OC0uOTA4aC44MDVhLjkuOSAwIDAgMSAuODg4LjkwOHYxMi42MzVhLjkuOSAwIDAgMS0uODg4LjkwOGgtLjgwNWEuOS45IDAgMCAxLS44ODgtLjkwOHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iWklHX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/ZIG
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenZIG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenZIG', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0m7y9rf._.js.map