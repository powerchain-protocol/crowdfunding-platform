module.exports = [
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWeb3Icon",
    ()=>createWeb3Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@types+node@24.13.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/BaseIcon.js [app-ssr] (ecmascript)");
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
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = defaultVariant, fallback, ...props }, ref)=>{
        const iconData = variants[variant];
        if (!iconData) {
            console.warn(`Icon "${name}" does not have variant "${variant}". ` + `Available variants: ${availableVariants.join(', ')}`);
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseIcon"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(element, elementProps, childElements);
    });
}
;
}),
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkInjective.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkInjective
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#4D3DFF',
                d: 'm13.89 3-.054.11c1.872.83 2.934 2.543 2.934 4.422 0 2.027-1.296 3.87-3.816 5.435l-.414.258c-1.89 1.18-2.844 2.506-2.844 4.109 0 2.063 1.584 3.574 3.762 3.574 3.492 0 7.542-3.814 7.542-8.899a9.7 9.7 0 0 0-.306-2.413l-.126.037c.054.423.072.737.072 1.031 0 3.003-1.656 5.583-4.428 7.296l-.27.166c-.594.35-1.098.553-1.602.553-.666 0-1.17-.442-1.17-1.087 0-.553.36-1.106 1.53-1.806l.342-.203c2.592-1.547 4.032-3.721 4.032-6.135 0-3.058-2.232-5.582-5.184-6.448m-3.78 18 .054-.11c-1.872-.83-2.934-2.543-2.934-4.422 0-2.027 1.296-3.87 3.816-5.435l.414-.258c1.89-1.18 2.844-2.506 2.844-4.109 0-2.063-1.584-3.574-3.762-3.574C7.05 3.092 3 6.906 3 11.991c0 .829.108 1.64.306 2.413l.126-.037a8 8 0 0 1-.072-1.031c0-3.003 1.656-5.583 4.428-7.296l.27-.166c.594-.35 1.098-.553 1.602-.553.666 0 1.17.443 1.17 1.087 0 .553-.36 1.106-1.53 1.806l-.342.203c-2.592 1.547-4.032 3.721-4.032 6.135 0 3.058 2.232 5.582 5.184 6.448'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm13.89 3-.054.11c1.872.83 2.934 2.543 2.934 4.422 0 2.027-1.296 3.87-3.816 5.435l-.414.258c-1.89 1.18-2.844 2.506-2.844 4.109 0 2.063 1.584 3.574 3.762 3.574 3.492 0 7.542-3.814 7.542-8.899a9.7 9.7 0 0 0-.306-2.413l-.126.037c.054.423.072.737.072 1.031 0 3.003-1.656 5.583-4.428 7.296l-.27.166c-.594.35-1.098.553-1.602.553-.666 0-1.17-.442-1.17-1.087 0-.553.36-1.106 1.53-1.806l.342-.203c2.592-1.547 4.032-3.721 4.032-6.135 0-3.058-2.232-5.582-5.184-6.448m-3.78 18 .054-.11c-1.872-.83-2.934-2.543-2.934-4.422 0-2.027 1.296-3.87 3.816-5.435l.414-.258c1.89-1.18 2.844-2.506 2.844-4.109 0-2.063-1.584-3.574-3.762-3.574C7.05 3.092 3 6.906 3 11.991c0 .829.108 1.64.306 2.413l.126-.037a8 8 0 0 1-.072-1.031c0-3.003 1.656-5.583 4.428-7.296l.27-.166c.594-.35 1.098-.553 1.602-.553.666 0 1.17.443 1.17 1.087 0 .553-.36 1.106-1.53 1.806l-.342.203c-2.592 1.547-4.032 3.721-4.032 6.135 0 3.058 2.232 5.582 5.184 6.448'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#injective__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#4D3DFF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm13.68 4-.048.098c1.664.737 2.608 2.26 2.608 3.93 0 1.802-1.152 3.44-3.392 4.832l-.368.23c-1.68 1.047-2.528 2.226-2.528 3.651 0 1.834 1.408 3.177 3.344 3.177 3.104 0 6.704-3.39 6.704-7.91 0-.737-.096-1.457-.272-2.145l-.112.033c.048.376.064.655.064.917 0 2.67-1.472 4.962-3.936 6.485l-.24.147c-.528.311-.976.492-1.424.492-.592 0-1.04-.393-1.04-.967 0-.491.32-.982 1.36-1.605l.304-.18c2.304-1.375 3.584-3.308 3.584-5.453 0-2.719-1.984-4.962-4.608-5.732m-3.36 16 .048-.098c-1.664-.737-2.608-2.26-2.608-3.93 0-1.802 1.152-3.44 3.392-4.832l.368-.229c1.68-1.048 2.528-2.227 2.528-3.652 0-1.834-1.408-3.177-3.344-3.177C7.6 4.082 4 7.472 4 11.992c0 .737.096 1.457.272 2.145l.112-.033a7 7 0 0 1-.064-.917c0-2.67 1.472-4.962 3.936-6.485l.24-.147c.528-.311.976-.492 1.424-.492.592 0 1.04.394 1.04.967 0 .491-.32.982-1.36 1.605l-.304.18c-2.304 1.375-3.584 3.308-3.584 5.453 0 2.719 1.984 4.962 4.608 5.732'
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
                        id: 'injective__a'
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
 * @component @name NetworkInjective
 * @description Web3Icon for NetworkInjective
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM0RDNERkYiIGQ9Im0xMy44OSAzLS4wNTQuMTFjMS44NzIuODMgMi45MzQgMi41NDMgMi45MzQgNC40MjIgMCAyLjAyNy0xLjI5NiAzLjg3LTMuODE2IDUuNDM1bC0uNDE0LjI1OGMtMS44OSAxLjE4LTIuODQ0IDIuNTA2LTIuODQ0IDQuMTA5IDAgMi4wNjMgMS41ODQgMy41NzQgMy43NjIgMy41NzQgMy40OTIgMCA3LjU0Mi0zLjgxNCA3LjU0Mi04Ljg5OWE5LjcgOS43IDAgMCAwLS4zMDYtMi40MTNsLS4xMjYuMDM3Yy4wNTQuNDIzLjA3Mi43MzcuMDcyIDEuMDMxIDAgMy4wMDMtMS42NTYgNS41ODMtNC40MjggNy4yOTZsLS4yNy4xNjZjLS41OTQuMzUtMS4wOTguNTUzLTEuNjAyLjU1My0uNjY2IDAtMS4xNy0uNDQyLTEuMTctMS4wODcgMC0uNTUzLjM2LTEuMTA2IDEuNTMtMS44MDZsLjM0Mi0uMjAzYzIuNTkyLTEuNTQ3IDQuMDMyLTMuNzIxIDQuMDMyLTYuMTM1IDAtMy4wNTgtMi4yMzItNS41ODItNS4xODQtNi40NDhtLTMuNzggMTggLjA1NC0uMTFjLTEuODcyLS44My0yLjkzNC0yLjU0My0yLjkzNC00LjQyMiAwLTIuMDI3IDEuMjk2LTMuODcgMy44MTYtNS40MzVsLjQxNC0uMjU4YzEuODktMS4xOCAyLjg0NC0yLjUwNiAyLjg0NC00LjEwOSAwLTIuMDYzLTEuNTg0LTMuNTc0LTMuNzYyLTMuNTc0QzcuMDUgMy4wOTIgMyA2LjkwNiAzIDExLjk5MWMwIC44MjkuMTA4IDEuNjQuMzA2IDIuNDEzbC4xMjYtLjAzN2E4IDggMCAwIDEtLjA3Mi0xLjAzMWMwLTMuMDAzIDEuNjU2LTUuNTgzIDQuNDI4LTcuMjk2bC4yNy0uMTY2Yy41OTQtLjM1IDEuMDk4LS41NTMgMS42MDItLjU1My42NjYgMCAxLjE3LjQ0MyAxLjE3IDEuMDg3IDAgLjU1My0uMzYgMS4xMDYtMS41MyAxLjgwNmwtLjM0Mi4yMDNjLTIuNTkyIDEuNTQ3LTQuMDMyIDMuNzIxLTQuMDMyIDYuMTM1IDAgMy4wNTggMi4yMzIgNS41ODIgNS4xODQgNi40NDgiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMy44OSAzLS4wNTQuMTFjMS44NzIuODMgMi45MzQgMi41NDMgMi45MzQgNC40MjIgMCAyLjAyNy0xLjI5NiAzLjg3LTMuODE2IDUuNDM1bC0uNDE0LjI1OGMtMS44OSAxLjE4LTIuODQ0IDIuNTA2LTIuODQ0IDQuMTA5IDAgMi4wNjMgMS41ODQgMy41NzQgMy43NjIgMy41NzQgMy40OTIgMCA3LjU0Mi0zLjgxNCA3LjU0Mi04Ljg5OWE5LjcgOS43IDAgMCAwLS4zMDYtMi40MTNsLS4xMjYuMDM3Yy4wNTQuNDIzLjA3Mi43MzcuMDcyIDEuMDMxIDAgMy4wMDMtMS42NTYgNS41ODMtNC40MjggNy4yOTZsLS4yNy4xNjZjLS41OTQuMzUtMS4wOTguNTUzLTEuNjAyLjU1My0uNjY2IDAtMS4xNy0uNDQyLTEuMTctMS4wODcgMC0uNTUzLjM2LTEuMTA2IDEuNTMtMS44MDZsLjM0Mi0uMjAzYzIuNTkyLTEuNTQ3IDQuMDMyLTMuNzIxIDQuMDMyLTYuMTM1IDAtMy4wNTgtMi4yMzItNS41ODItNS4xODQtNi40NDhtLTMuNzggMTggLjA1NC0uMTFjLTEuODcyLS44My0yLjkzNC0yLjU0My0yLjkzNC00LjQyMiAwLTIuMDI3IDEuMjk2LTMuODcgMy44MTYtNS40MzVsLjQxNC0uMjU4YzEuODktMS4xOCAyLjg0NC0yLjUwNiAyLjg0NC00LjEwOSAwLTIuMDYzLTEuNTg0LTMuNTc0LTMuNzYyLTMuNTc0QzcuMDUgMy4wOTIgMyA2LjkwNiAzIDExLjk5MWMwIC44MjkuMTA4IDEuNjQuMzA2IDIuNDEzbC4xMjYtLjAzN2E4IDggMCAwIDEtLjA3Mi0xLjAzMWMwLTMuMDAzIDEuNjU2LTUuNTgzIDQuNDI4LTcuMjk2bC4yNy0uMTY2Yy41OTQtLjM1IDEuMDk4LS41NTMgMS42MDItLjU1My42NjYgMCAxLjE3LjQ0MyAxLjE3IDEuMDg3IDAgLjU1My0uMzYgMS4xMDYtMS41MyAxLjgwNmwtLjM0Mi4yMDNjLTIuNTkyIDEuNTQ3LTQuMDMyIDMuNzIxLTQuMDMyIDYuMTM1IDAgMy4wNTggMi4yMzIgNS41ODIgNS4xODQgNi40NDgiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNpbmplY3RpdmVfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNEQzREZGIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMy42OCA0LS4wNDguMDk4YzEuNjY0LjczNyAyLjYwOCAyLjI2IDIuNjA4IDMuOTMgMCAxLjgwMi0xLjE1MiAzLjQ0LTMuMzkyIDQuODMybC0uMzY4LjIzYy0xLjY4IDEuMDQ3LTIuNTI4IDIuMjI2LTIuNTI4IDMuNjUxIDAgMS44MzQgMS40MDggMy4xNzcgMy4zNDQgMy4xNzcgMy4xMDQgMCA2LjcwNC0zLjM5IDYuNzA0LTcuOTEgMC0uNzM3LS4wOTYtMS40NTctLjI3Mi0yLjE0NWwtLjExMi4wMzNjLjA0OC4zNzYuMDY0LjY1NS4wNjQuOTE3IDAgMi42Ny0xLjQ3MiA0Ljk2Mi0zLjkzNiA2LjQ4NWwtLjI0LjE0N2MtLjUyOC4zMTEtLjk3Ni40OTItMS40MjQuNDkyLS41OTIgMC0xLjA0LS4zOTMtMS4wNC0uOTY3IDAtLjQ5MS4zMi0uOTgyIDEuMzYtMS42MDVsLjMwNC0uMThjMi4zMDQtMS4zNzUgMy41ODQtMy4zMDggMy41ODQtNS40NTMgMC0yLjcxOS0xLjk4NC00Ljk2Mi00LjYwOC01LjczMm0tMy4zNiAxNiAuMDQ4LS4wOThjLTEuNjY0LS43MzctMi42MDgtMi4yNi0yLjYwOC0zLjkzIDAtMS44MDIgMS4xNTItMy40NCAzLjM5Mi00LjgzMmwuMzY4LS4yMjljMS42OC0xLjA0OCAyLjUyOC0yLjIyNyAyLjUyOC0zLjY1MiAwLTEuODM0LTEuNDA4LTMuMTc3LTMuMzQ0LTMuMTc3QzcuNiA0LjA4MiA0IDcuNDcyIDQgMTEuOTkyYzAgLjczNy4wOTYgMS40NTcuMjcyIDIuMTQ1bC4xMTItLjAzM2E3IDcgMCAwIDEtLjA2NC0uOTE3YzAtMi42NyAxLjQ3Mi00Ljk2MiAzLjkzNi02LjQ4NWwuMjQtLjE0N2MuNTI4LS4zMTEuOTc2LS40OTIgMS40MjQtLjQ5Mi41OTIgMCAxLjA0LjM5NCAxLjA0Ljk2NyAwIC40OTEtLjMyLjk4Mi0xLjM2IDEuNjA1bC0uMzA0LjE4Yy0yLjMwNCAxLjM3NS0zLjU4NCAzLjMwOC0zLjU4NCA1LjQ1MyAwIDIuNzE5IDEuOTg0IDQuOTYyIDQuNjA4IDUuNzMyIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImluamVjdGl2ZV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/networks/injective
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkInjective = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkInjective', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1e52e51._.js.map