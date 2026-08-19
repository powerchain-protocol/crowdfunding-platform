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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenTLM.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenTLM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#EACB7D',
                d: 'm9.764 6.123 1.2-2.471a1.148 1.148 0 0 1 2.071 0l1.2 2.47c-.425 1.154-1.265 1.94-2.233 1.94H12c-.969 0-1.81-.785-2.236-1.94m-.457.94L8.28 9.18a6.7 6.7 0 0 1 1.945-.881 4.2 4.2 0 0 1-.917-1.236m-4.035 8.305L4.44 17.08a2.8 2.8 0 0 1 1.45.605 6.7 6.7 0 0 1-.618-2.317M6.074 21H3.769a.777.777 0 0 1-.69-1.12l1.096-2.255A2.248 2.248 0 0 1 6.074 21m.63 0h2.594a6.8 6.8 0 0 1-2.448-1.824A2.8 2.8 0 0 1 6.703 21m7.998 0h2.032a2.8 2.8 0 0 1-.234-1.156A6.8 6.8 0 0 1 14.702 21m5.154-3.309 1.064 2.189a.777.777 0 0 1-.69 1.12h-2.867a2.24 2.24 0 0 1-.175-1.87q.383-.459.681-.981a2.25 2.25 0 0 1 1.987-.458m-.3-.618-.829-1.705a6.7 6.7 0 0 1-.431 1.884c.4-.156.832-.217 1.26-.18M15.721 9.18a6.7 6.7 0 0 0-1.945-.881 4.2 4.2 0 0 0 .917-1.236zm-3.159 11.23a5.7 5.7 0 0 1-1.125 0V12h-4.31c.237-.41.525-.787.856-1.125h8.034c.33.338.618.716.855 1.125h-4.31zm.563-.085a5.627 5.627 0 0 0 4.032-7.763h-4.032zM12 9.187c1.267 0 2.436.419 3.375 1.125h-6.75A5.6 5.6 0 0 1 12 9.187m-5.157 3.375a5.628 5.628 0 0 0 4.032 7.763v-7.763z',
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
                d: 'm9.764 6.123 1.2-2.471a1.148 1.148 0 0 1 2.071 0l1.2 2.47c-.425 1.154-1.265 1.94-2.233 1.94H12c-.969 0-1.81-.785-2.236-1.94m-.457.94L8.28 9.18a6.7 6.7 0 0 1 1.945-.881 4.2 4.2 0 0 1-.917-1.236m-4.035 8.305L4.44 17.08a2.8 2.8 0 0 1 1.45.605 6.7 6.7 0 0 1-.618-2.317M6.074 21H3.769a.777.777 0 0 1-.69-1.12l1.096-2.255A2.248 2.248 0 0 1 6.074 21m.63 0h2.594a6.8 6.8 0 0 1-2.448-1.824A2.8 2.8 0 0 1 6.703 21m7.998 0h2.032a2.8 2.8 0 0 1-.234-1.156A6.8 6.8 0 0 1 14.702 21m5.154-3.309 1.064 2.189a.777.777 0 0 1-.69 1.12h-2.867a2.25 2.25 0 0 1-.175-1.87q.383-.459.681-.981a2.25 2.25 0 0 1 1.987-.458m-.3-.618-.829-1.705a6.7 6.7 0 0 1-.431 1.884c.4-.156.832-.217 1.26-.18M15.721 9.18a6.7 6.7 0 0 0-1.945-.881 4.2 4.2 0 0 0 .917-1.236zm-3.158 11.23a5.7 5.7 0 0 1-1.126 0V12h-4.31c.237-.41.525-.787.856-1.125h8.034c.33.338.618.716.855 1.125h-4.31zm.562-.085a5.627 5.627 0 0 0 4.032-7.763h-4.032zM12 9.187c1.267 0 2.436.419 3.375 1.125h-6.75A5.6 5.6 0 0 1 12 9.187m-5.157 3.375a5.628 5.628 0 0 0 4.032 7.763v-7.763z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#TLM__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#EACB7D',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm10.013 6.776 1.067-2.197a1.02 1.02 0 0 1 1.84 0l1.067 2.197C13.609 7.8 12.862 8.499 12.002 8.5H12c-.861 0-1.61-.699-1.987-1.724m-.407.836-.914 1.88a6 6 0 0 1 1.73-.782 3.8 3.8 0 0 1-.816-1.098M6.02 14.993l-.74 1.522a2.5 2.5 0 0 1 1.289.538 6 6 0 0 1-.55-2.06M6.732 20H4.684a.69.69 0 0 1-.613-.995L5.044 17a1.998 1.998 0 0 1 1.688 3m.56 0h2.306a6 6 0 0 1-2.176-1.621c.138.54.092 1.11-.13 1.621m7.11 0h1.806A2.5 2.5 0 0 1 16 18.972 6 6 0 0 1 14.402 20m4.582-2.941.945 1.945a.69.69 0 0 1-.613.996h-2.549a1.99 1.99 0 0 1-.155-1.662q.34-.408.605-.873a2 2 0 0 1 1.767-.406m-.268-.55-.736-1.516a6 6 0 0 1-.384 1.675c.356-.138.74-.192 1.12-.159m-3.409-7.016a6 6 0 0 0-1.729-.783c.319-.29.596-.662.816-1.098zM12.5 19.475a5 5 0 0 1-1 0V12H7.669q.317-.548.76-1h7.141q.444.452.761 1H12.5zm.5-.075a5.002 5.002 0 0 0 3.584-6.9H13zm-1-9.9c1.126 0 2.165.372 3 1H9a4.98 4.98 0 0 1 3-1m-4.584 3A5.002 5.002 0 0 0 11 19.4v-6.9z',
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
                        id: 'TLM__a'
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
 * @component @name TokenTLM
 * @description Web3Icon for TokenTLM
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNFQUNCN0QiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTkuNzY0IDYuMTIzIDEuMi0yLjQ3MWExLjE0OCAxLjE0OCAwIDAgMSAyLjA3MSAwbDEuMiAyLjQ3Yy0uNDI1IDEuMTU0LTEuMjY1IDEuOTQtMi4yMzMgMS45NEgxMmMtLjk2OSAwLTEuODEtLjc4NS0yLjIzNi0xLjk0bS0uNDU3Ljk0TDguMjggOS4xOGE2LjcgNi43IDAgMCAxIDEuOTQ1LS44ODEgNC4yIDQuMiAwIDAgMS0uOTE3LTEuMjM2bS00LjAzNSA4LjMwNUw0LjQ0IDE3LjA4YTIuOCAyLjggMCAwIDEgMS40NS42MDUgNi43IDYuNyAwIDAgMS0uNjE4LTIuMzE3TTYuMDc0IDIxSDMuNzY5YS43NzcuNzc3IDAgMCAxLS42OS0xLjEybDEuMDk2LTIuMjU1QTIuMjQ4IDIuMjQ4IDAgMCAxIDYuMDc0IDIxbS42MyAwaDIuNTk0YTYuOCA2LjggMCAwIDEtMi40NDgtMS44MjRBMi44IDIuOCAwIDAgMSA2LjcwMyAyMW03Ljk5OCAwaDIuMDMyYTIuOCAyLjggMCAwIDEtLjIzNC0xLjE1NkE2LjggNi44IDAgMCAxIDE0LjcwMiAyMW01LjE1NC0zLjMwOSAxLjA2NCAyLjE4OWEuNzc3Ljc3NyAwIDAgMS0uNjkgMS4xMmgtMi44NjdhMi4yNCAyLjI0IDAgMCAxLS4xNzUtMS44N3EuMzgzLS40NTkuNjgxLS45ODFhMi4yNSAyLjI1IDAgMCAxIDEuOTg3LS40NThtLS4zLS42MTgtLjgyOS0xLjcwNWE2LjcgNi43IDAgMCAxLS40MzEgMS44ODRjLjQtLjE1Ni44MzItLjIxNyAxLjI2LS4xOE0xNS43MjEgOS4xOGE2LjcgNi43IDAgMCAwLTEuOTQ1LS44ODEgNC4yIDQuMiAwIDAgMCAuOTE3LTEuMjM2em0tMy4xNTkgMTEuMjNhNS43IDUuNyAwIDAgMS0xLjEyNSAwVjEyaC00LjMxYy4yMzctLjQxLjUyNS0uNzg3Ljg1Ni0xLjEyNWg4LjAzNGMuMzMuMzM4LjYxOC43MTYuODU1IDEuMTI1aC00LjMxem0uNTYzLS4wODVhNS42MjcgNS42MjcgMCAwIDAgNC4wMzItNy43NjNoLTQuMDMyek0xMiA5LjE4N2MxLjI2NyAwIDIuNDM2LjQxOSAzLjM3NSAxLjEyNWgtNi43NUE1LjYgNS42IDAgMCAxIDEyIDkuMTg3bS01LjE1NyAzLjM3NWE1LjYyOCA1LjYyOCAwIDAgMCA0LjAzMiA3Ljc2M3YtNy43NjN6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTkuNzY0IDYuMTIzIDEuMi0yLjQ3MWExLjE0OCAxLjE0OCAwIDAgMSAyLjA3MSAwbDEuMiAyLjQ3Yy0uNDI1IDEuMTU0LTEuMjY1IDEuOTQtMi4yMzMgMS45NEgxMmMtLjk2OSAwLTEuODEtLjc4NS0yLjIzNi0xLjk0bS0uNDU3Ljk0TDguMjggOS4xOGE2LjcgNi43IDAgMCAxIDEuOTQ1LS44ODEgNC4yIDQuMiAwIDAgMS0uOTE3LTEuMjM2bS00LjAzNSA4LjMwNUw0LjQ0IDE3LjA4YTIuOCAyLjggMCAwIDEgMS40NS42MDUgNi43IDYuNyAwIDAgMS0uNjE4LTIuMzE3TTYuMDc0IDIxSDMuNzY5YS43NzcuNzc3IDAgMCAxLS42OS0xLjEybDEuMDk2LTIuMjU1QTIuMjQ4IDIuMjQ4IDAgMCAxIDYuMDc0IDIxbS42MyAwaDIuNTk0YTYuOCA2LjggMCAwIDEtMi40NDgtMS44MjRBMi44IDIuOCAwIDAgMSA2LjcwMyAyMW03Ljk5OCAwaDIuMDMyYTIuOCAyLjggMCAwIDEtLjIzNC0xLjE1NkE2LjggNi44IDAgMCAxIDE0LjcwMiAyMW01LjE1NC0zLjMwOSAxLjA2NCAyLjE4OWEuNzc3Ljc3NyAwIDAgMS0uNjkgMS4xMmgtMi44NjdhMi4yNSAyLjI1IDAgMCAxLS4xNzUtMS44N3EuMzgzLS40NTkuNjgxLS45ODFhMi4yNSAyLjI1IDAgMCAxIDEuOTg3LS40NThtLS4zLS42MTgtLjgyOS0xLjcwNWE2LjcgNi43IDAgMCAxLS40MzEgMS44ODRjLjQtLjE1Ni44MzItLjIxNyAxLjI2LS4xOE0xNS43MjEgOS4xOGE2LjcgNi43IDAgMCAwLTEuOTQ1LS44ODEgNC4yIDQuMiAwIDAgMCAuOTE3LTEuMjM2em0tMy4xNTggMTEuMjNhNS43IDUuNyAwIDAgMS0xLjEyNiAwVjEyaC00LjMxYy4yMzctLjQxLjUyNS0uNzg3Ljg1Ni0xLjEyNWg4LjAzNGMuMzMuMzM4LjYxOC43MTYuODU1IDEuMTI1aC00LjMxem0uNTYyLS4wODVhNS42MjcgNS42MjcgMCAwIDAgNC4wMzItNy43NjNoLTQuMDMyek0xMiA5LjE4N2MxLjI2NyAwIDIuNDM2LjQxOSAzLjM3NSAxLjEyNWgtNi43NUE1LjYgNS42IDAgMCAxIDEyIDkuMTg3bS01LjE1NyAzLjM3NWE1LjYyOCA1LjYyOCAwIDAgMCA0LjAzMiA3Ljc2M3YtNy43NjN6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNUTE1fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRUFDQjdEIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTEwLjAxMyA2Ljc3NiAxLjA2Ny0yLjE5N2ExLjAyIDEuMDIgMCAwIDEgMS44NCAwbDEuMDY3IDIuMTk3QzEzLjYwOSA3LjggMTIuODYyIDguNDk5IDEyLjAwMiA4LjVIMTJjLS44NjEgMC0xLjYxLS42OTktMS45ODctMS43MjRtLS40MDcuODM2LS45MTQgMS44OGE2IDYgMCAwIDEgMS43My0uNzgyIDMuOCAzLjggMCAwIDEtLjgxNi0xLjA5OE02LjAyIDE0Ljk5M2wtLjc0IDEuNTIyYTIuNSAyLjUgMCAwIDEgMS4yODkuNTM4IDYgNiAwIDAgMS0uNTUtMi4wNk02LjczMiAyMEg0LjY4NGEuNjkuNjkgMCAwIDEtLjYxMy0uOTk1TDUuMDQ0IDE3YTEuOTk4IDEuOTk4IDAgMCAxIDEuNjg4IDNtLjU2IDBoMi4zMDZhNiA2IDAgMCAxLTIuMTc2LTEuNjIxYy4xMzguNTQuMDkyIDEuMTEtLjEzIDEuNjIxbTcuMTEgMGgxLjgwNkEyLjUgMi41IDAgMCAxIDE2IDE4Ljk3MiA2IDYgMCAwIDEgMTQuNDAyIDIwbTQuNTgyLTIuOTQxLjk0NSAxLjk0NWEuNjkuNjkgMCAwIDEtLjYxMy45OTZoLTIuNTQ5YTEuOTkgMS45OSAwIDAgMS0uMTU1LTEuNjYycS4zNC0uNDA4LjYwNS0uODczYTIgMiAwIDAgMSAxLjc2Ny0uNDA2bS0uMjY4LS41NS0uNzM2LTEuNTE2YTYgNiAwIDAgMS0uMzg0IDEuNjc1Yy4zNTYtLjEzOC43NC0uMTkyIDEuMTItLjE1OW0tMy40MDktNy4wMTZhNiA2IDAgMCAwLTEuNzI5LS43ODNjLjMxOS0uMjkuNTk2LS42NjIuODE2LTEuMDk4ek0xMi41IDE5LjQ3NWE1IDUgMCAwIDEtMSAwVjEySDcuNjY5cS4zMTctLjU0OC43Ni0xaDcuMTQxcS40NDQuNDUyLjc2MSAxSDEyLjV6bS41LS4wNzVhNS4wMDIgNS4wMDIgMCAwIDAgMy41ODQtNi45SDEzem0tMS05LjljMS4xMjYgMCAyLjE2NS4zNzIgMyAxSDlhNC45OCA0Ljk4IDAgMCAxIDMtMW0tNC41ODQgM0E1LjAwMiA1LjAwMiAwIDAgMCAxMSAxOS40di02Ljl6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iVExNX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/TLM
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenTLM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenTLM', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1t_nypi._.js.map