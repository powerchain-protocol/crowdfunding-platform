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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPAY.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPAY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M20.93 11.756a1 1 0 0 0-.172-.244C19.203 9.76 16.02 6.315 16.02 6.315l-4.018 4.37-4.067-4.329s-3.207 3.476-4.778 5.246c-.205.194-.205.56-.025.771.818.918 4.828 5.303 4.828 5.303l4.042-4.377 4.01 4.385 4.844-5.32s.106-.104.123-.17a.6.6 0 0 0-.05-.438m-15.548.487c-.123-.162-.081-.406.041-.544a341 341 0 0 1 2.561-2.76l2.864 3.004-2.864 3.11s-1.75-1.86-2.593-2.818zm13.093.098c-.057.113-.213.292-.213.292l-2.217 2.387L13.18 12l2.815-3.062s1.629 1.665 2.374 2.558c.056.082.13.163.163.252.074.195.024.406-.058.593'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M20.93 11.756a1 1 0 0 0-.172-.244C19.203 9.76 16.02 6.315 16.02 6.315l-4.018 4.37-4.067-4.329s-3.207 3.476-4.778 5.246c-.205.194-.205.56-.025.771.818.918 4.828 5.303 4.828 5.303l4.042-4.377 4.01 4.385 4.844-5.32s.106-.104.123-.17a.6.6 0 0 0-.05-.438m-15.548.487c-.123-.162-.081-.406.041-.544a341 341 0 0 1 2.561-2.76l2.864 3.004-2.864 3.11s-1.75-1.86-2.593-2.818zm13.093.098a2 2 0 0 1-.213.292l-2.217 2.387L13.18 12l2.815-3.062s1.629 1.665 2.374 2.558c.056.082.13.162.163.252.074.195.024.406-.058.593'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#PAY__a)'
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
                        d: 'M19.938 11.784a.8.8 0 0 0-.153-.217c-1.382-1.559-4.212-4.62-4.212-4.62l-3.571 3.884-3.615-3.848s-2.851 3.09-4.248 4.663c-.182.173-.182.498-.022.686.728.816 4.292 4.713 4.292 4.713l3.593-3.89 3.564 3.897 4.306-4.727s.095-.094.11-.152a.53.53 0 0 0-.044-.39m-13.82.432c-.11-.144-.073-.36.036-.483.458-.513 2.277-2.454 2.277-2.454l2.545 2.67-2.545 2.765s-1.557-1.653-2.306-2.505zm11.637.087a1.7 1.7 0 0 1-.189.26l-1.97 2.122L13.048 12l2.502-2.721s1.448 1.48 2.11 2.273c.05.073.116.145.145.224.066.173.022.361-.05.527'
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
                        id: 'PAY__a'
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
 * @component @name TokenPAY
 * @description Web3Icon for TokenPAY
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMC45MyAxMS43NTZhMSAxIDAgMCAwLS4xNzItLjI0NEMxOS4yMDMgOS43NiAxNi4wMiA2LjMxNSAxNi4wMiA2LjMxNWwtNC4wMTggNC4zNy00LjA2Ny00LjMyOXMtMy4yMDcgMy40NzYtNC43NzggNS4yNDZjLS4yMDUuMTk0LS4yMDUuNTYtLjAyNS43NzEuODE4LjkxOCA0LjgyOCA1LjMwMyA0LjgyOCA1LjMwM2w0LjA0Mi00LjM3NyA0LjAxIDQuMzg1IDQuODQ0LTUuMzJzLjEwNi0uMTA0LjEyMy0uMTdhLjYuNiAwIDAgMC0uMDUtLjQzOG0tMTUuNTQ4LjQ4N2MtLjEyMy0uMTYyLS4wODEtLjQwNi4wNDEtLjU0NGEzNDEgMzQxIDAgMCAxIDIuNTYxLTIuNzZsMi44NjQgMy4wMDQtMi44NjQgMy4xMXMtMS43NS0xLjg2LTIuNTkzLTIuODE4em0xMy4wOTMuMDk4Yy0uMDU3LjExMy0uMjEzLjI5Mi0uMjEzLjI5MmwtMi4yMTcgMi4zODdMMTMuMTggMTJsMi44MTUtMy4wNjJzMS42MjkgMS42NjUgMi4zNzQgMi41NThjLjA1Ni4wODIuMTMuMTYzLjE2My4yNTIuMDc0LjE5NS4wMjQuNDA2LS4wNTguNTkzIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMC45MyAxMS43NTZhMSAxIDAgMCAwLS4xNzItLjI0NEMxOS4yMDMgOS43NiAxNi4wMiA2LjMxNSAxNi4wMiA2LjMxNWwtNC4wMTggNC4zNy00LjA2Ny00LjMyOXMtMy4yMDcgMy40NzYtNC43NzggNS4yNDZjLS4yMDUuMTk0LS4yMDUuNTYtLjAyNS43NzEuODE4LjkxOCA0LjgyOCA1LjMwMyA0LjgyOCA1LjMwM2w0LjA0Mi00LjM3NyA0LjAxIDQuMzg1IDQuODQ0LTUuMzJzLjEwNi0uMTA0LjEyMy0uMTdhLjYuNiAwIDAgMC0uMDUtLjQzOG0tMTUuNTQ4LjQ4N2MtLjEyMy0uMTYyLS4wODEtLjQwNi4wNDEtLjU0NGEzNDEgMzQxIDAgMCAxIDIuNTYxLTIuNzZsMi44NjQgMy4wMDQtMi44NjQgMy4xMXMtMS43NS0xLjg2LTIuNTkzLTIuODE4em0xMy4wOTMuMDk4YTIgMiAwIDAgMS0uMjEzLjI5MmwtMi4yMTcgMi4zODdMMTMuMTggMTJsMi44MTUtMy4wNjJzMS42MjkgMS42NjUgMi4zNzQgMi41NThjLjA1Ni4wODIuMTMuMTYyLjE2My4yNTIuMDc0LjE5NS4wMjQuNDA2LS4wNTguNTkzIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQQVlfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOS45MzggMTEuNzg0YS44LjggMCAwIDAtLjE1My0uMjE3Yy0xLjM4Mi0xLjU1OS00LjIxMi00LjYyLTQuMjEyLTQuNjJsLTMuNTcxIDMuODg0LTMuNjE1LTMuODQ4cy0yLjg1MSAzLjA5LTQuMjQ4IDQuNjYzYy0uMTgyLjE3My0uMTgyLjQ5OC0uMDIyLjY4Ni43MjguODE2IDQuMjkyIDQuNzEzIDQuMjkyIDQuNzEzbDMuNTkzLTMuODkgMy41NjQgMy44OTcgNC4zMDYtNC43MjdzLjA5NS0uMDk0LjExLS4xNTJhLjUzLjUzIDAgMCAwLS4wNDQtLjM5bS0xMy44Mi40MzJjLS4xMS0uMTQ0LS4wNzMtLjM2LjAzNi0uNDgzLjQ1OC0uNTEzIDIuMjc3LTIuNDU0IDIuMjc3LTIuNDU0bDIuNTQ1IDIuNjctMi41NDUgMi43NjVzLTEuNTU3LTEuNjUzLTIuMzA2LTIuNTA1em0xMS42MzcuMDg3YTEuNyAxLjcgMCAwIDEtLjE4OS4yNmwtMS45NyAyLjEyMkwxMy4wNDggMTJsMi41MDItMi43MjFzMS40NDggMS40OCAyLjExIDIuMjczYy4wNS4wNzMuMTE2LjE0NS4xNDUuMjI0LjA2Ni4xNzMuMDIyLjM2MS0uMDUuNTI3Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlBBWV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/PAY
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPAY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPAY', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1pulyyu._.js.map