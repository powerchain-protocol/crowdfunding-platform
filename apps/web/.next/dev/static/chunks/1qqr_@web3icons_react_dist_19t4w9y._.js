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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenXELS.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenXELS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#4DB135',
                d: 'm3 8.174 3.99 7.65h.53l-4.026-7.65zm1.31 7.65 1.228-2.085-.45-.763-1.69 2.848zm4.506-7.65-1.892 3.212-.418-.797L7.94 8.174zm-.88 7.65-3.99-7.65h.877l4.027 7.65zm4.291-7.644C10.094 8.29 8.4 9.958 8.4 12s1.694 3.71 3.827 3.818v-.9c-1.555-.102-2.8-1.252-2.918-2.694h2.241v-.9H9.384c.312-1.225 1.454-2.152 2.843-2.242zm.45.902V8.18c2.13.111 3.823 1.78 3.823 3.82 0 1.173-.56 2.222-1.44 2.924h2.34l-.45.9h-4.275v-.9h.002v-.007c1.634-.108 2.923-1.373 2.923-2.918 0-1.544-1.29-2.809-2.923-2.917m6.252 3.359a3 3 0 0 1-.25-.025 2 2 0 0 1-.453-.107 1.8 1.8 0 0 1-.562-.307l.002-.002a2.14 2.14 0 0 1-.825-1.698c0-1.116.84-2.032 1.909-2.12v.917c-.514.115-.9.614-.9 1.213 0 .667.48 1.211 1.08 1.236q.085.01.186.03C20.173 11.678 21 12.59 21 13.7c0 1.124-.85 2.045-1.926 2.126H17.4l.45-.9h1.26c.558-.074.99-.6.99-1.238 0-.689-.504-1.248-1.125-1.248z',
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
                d: 'm3 8.174 3.99 7.65h.53l-4.026-7.65zm1.31 7.65 1.228-2.085-.45-.763-1.69 2.848zm4.506-7.65-1.892 3.212-.418-.797L7.94 8.174zm-.88 7.65-3.99-7.65h.877l4.027 7.65zm4.291-7.644C10.094 8.29 8.4 9.958 8.4 12s1.694 3.71 3.827 3.818v-.9c-1.555-.102-2.8-1.252-2.918-2.694h2.241v-.9H9.384c.312-1.225 1.454-2.152 2.843-2.242zm.45.902V8.18c2.13.111 3.823 1.78 3.823 3.82 0 1.173-.56 2.222-1.44 2.924h2.34l-.45.9h-4.275v-.9h.002v-.007c1.634-.108 2.923-1.373 2.923-2.918 0-1.544-1.29-2.809-2.923-2.917m6.252 3.359a3 3 0 0 1-.25-.025 2 2 0 0 1-.453-.107 1.8 1.8 0 0 1-.562-.307l.002-.002a2.14 2.14 0 0 1-.825-1.698c0-1.116.84-2.032 1.909-2.12v.917c-.514.115-.9.614-.9 1.213 0 .667.48 1.211 1.08 1.236q.085.01.186.03C20.173 11.678 21 12.59 21 13.7c0 1.124-.85 2.045-1.926 2.126H17.4l.45-.9h1.26c.558-.074.99-.6.99-1.238 0-.689-.504-1.248-1.125-1.248z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#XELS__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#4DB135',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm4 8.6 3.546 6.8h.472L4.44 8.6zm1.164 6.8 1.092-1.854-.4-.678L4.353 15.4zM9.17 8.6l-1.682 2.854-.372-.708L8.391 8.6zm-.783 6.8L4.841 8.6h.78L9.2 15.4zm3.815-6.795c-1.896.097-3.402 1.58-3.402 3.394s1.506 3.299 3.402 3.395v-.8c-1.383-.09-2.489-1.113-2.594-2.394H11.6v-.8H9.675c.277-1.09 1.292-1.914 2.527-1.994zm.4.801v-.801c1.894.099 3.398 1.58 3.398 3.394 0 1.044-.497 1.977-1.28 2.6h2.08l-.4.8h-3.8v-.8h.002v-.006c1.452-.096 2.598-1.22 2.598-2.594 0-1.372-1.146-2.497-2.598-2.593m5.557 2.986a3 3 0 0 1-.222-.022 1.8 1.8 0 0 1-.403-.096 1.6 1.6 0 0 1-.5-.272l.003-.002a1.9 1.9 0 0 1-.734-1.51c0-.991.747-1.805 1.697-1.884v.816c-.456.102-.8.546-.8 1.078 0 .593.427 1.076.96 1.099q.076.008.166.026c.939.09 1.674.9 1.674 1.886 0 1-.755 1.818-1.712 1.89H16.8l.4-.8h1.12c.496-.065.88-.534.88-1.1 0-.613-.448-1.11-1-1.11z',
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
                        id: 'XELS__a'
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
 * @component @name TokenXELS
 * @description Web3Icon for TokenXELS
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM0REIxMzUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTMgOC4xNzQgMy45OSA3LjY1aC41M2wtNC4wMjYtNy42NXptMS4zMSA3LjY1IDEuMjI4LTIuMDg1LS40NS0uNzYzLTEuNjkgMi44NDh6bTQuNTA2LTcuNjUtMS44OTIgMy4yMTItLjQxOC0uNzk3TDcuOTQgOC4xNzR6bS0uODggNy42NS0zLjk5LTcuNjVoLjg3N2w0LjAyNyA3LjY1em00LjI5MS03LjY0NEMxMC4wOTQgOC4yOSA4LjQgOS45NTggOC40IDEyczEuNjk0IDMuNzEgMy44MjcgMy44MTh2LS45Yy0xLjU1NS0uMTAyLTIuOC0xLjI1Mi0yLjkxOC0yLjY5NGgyLjI0MXYtLjlIOS4zODRjLjMxMi0xLjIyNSAxLjQ1NC0yLjE1MiAyLjg0My0yLjI0MnptLjQ1LjkwMlY4LjE4YzIuMTMuMTExIDMuODIzIDEuNzggMy44MjMgMy44MiAwIDEuMTczLS41NiAyLjIyMi0xLjQ0IDIuOTI0aDIuMzRsLS40NS45aC00LjI3NXYtLjloLjAwMnYtLjAwN2MxLjYzNC0uMTA4IDIuOTIzLTEuMzczIDIuOTIzLTIuOTE4IDAtMS41NDQtMS4yOS0yLjgwOS0yLjkyMy0yLjkxN202LjI1MiAzLjM1OWEzIDMgMCAwIDEtLjI1LS4wMjUgMiAyIDAgMCAxLS40NTMtLjEwNyAxLjggMS44IDAgMCAxLS41NjItLjMwN2wuMDAyLS4wMDJhMi4xNCAyLjE0IDAgMCAxLS44MjUtMS42OThjMC0xLjExNi44NC0yLjAzMiAxLjkwOS0yLjEydi45MTdjLS41MTQuMTE1LS45LjYxNC0uOSAxLjIxMyAwIC42NjcuNDggMS4yMTEgMS4wOCAxLjIzNnEuMDg1LjAxLjE4Ni4wM0MyMC4xNzMgMTEuNjc4IDIxIDEyLjU5IDIxIDEzLjdjMCAxLjEyNC0uODUgMi4wNDUtMS45MjYgMi4xMjZIMTcuNGwuNDUtLjloMS4yNmMuNTU4LS4wNzQuOTktLjYuOTktMS4yMzggMC0uNjg5LS41MDQtMS4yNDgtMS4xMjUtMS4yNDh6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTMgOC4xNzQgMy45OSA3LjY1aC41M2wtNC4wMjYtNy42NXptMS4zMSA3LjY1IDEuMjI4LTIuMDg1LS40NS0uNzYzLTEuNjkgMi44NDh6bTQuNTA2LTcuNjUtMS44OTIgMy4yMTItLjQxOC0uNzk3TDcuOTQgOC4xNzR6bS0uODggNy42NS0zLjk5LTcuNjVoLjg3N2w0LjAyNyA3LjY1em00LjI5MS03LjY0NEMxMC4wOTQgOC4yOSA4LjQgOS45NTggOC40IDEyczEuNjk0IDMuNzEgMy44MjcgMy44MTh2LS45Yy0xLjU1NS0uMTAyLTIuOC0xLjI1Mi0yLjkxOC0yLjY5NGgyLjI0MXYtLjlIOS4zODRjLjMxMi0xLjIyNSAxLjQ1NC0yLjE1MiAyLjg0My0yLjI0MnptLjQ1LjkwMlY4LjE4YzIuMTMuMTExIDMuODIzIDEuNzggMy44MjMgMy44MiAwIDEuMTczLS41NiAyLjIyMi0xLjQ0IDIuOTI0aDIuMzRsLS40NS45aC00LjI3NXYtLjloLjAwMnYtLjAwN2MxLjYzNC0uMTA4IDIuOTIzLTEuMzczIDIuOTIzLTIuOTE4IDAtMS41NDQtMS4yOS0yLjgwOS0yLjkyMy0yLjkxN202LjI1MiAzLjM1OWEzIDMgMCAwIDEtLjI1LS4wMjUgMiAyIDAgMCAxLS40NTMtLjEwNyAxLjggMS44IDAgMCAxLS41NjItLjMwN2wuMDAyLS4wMDJhMi4xNCAyLjE0IDAgMCAxLS44MjUtMS42OThjMC0xLjExNi44NC0yLjAzMiAxLjkwOS0yLjEydi45MTdjLS41MTQuMTE1LS45LjYxNC0uOSAxLjIxMyAwIC42NjcuNDggMS4yMTEgMS4wOCAxLjIzNnEuMDg1LjAxLjE4Ni4wM0MyMC4xNzMgMTEuNjc4IDIxIDEyLjU5IDIxIDEzLjdjMCAxLjEyNC0uODUgMi4wNDUtMS45MjYgMi4xMjZIMTcuNGwuNDUtLjloMS4yNmMuNTU4LS4wNzQuOTktLjYuOTktMS4yMzggMC0uNjg5LS41MDQtMS4yNDgtMS4xMjUtMS4yNDh6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNYRUxTX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzREQjEzNSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Im00IDguNiAzLjU0NiA2LjhoLjQ3Mkw0LjQ0IDguNnptMS4xNjQgNi44IDEuMDkyLTEuODU0LS40LS42NzhMNC4zNTMgMTUuNHpNOS4xNyA4LjZsLTEuNjgyIDIuODU0LS4zNzItLjcwOEw4LjM5MSA4LjZ6bS0uNzgzIDYuOEw0Ljg0MSA4LjZoLjc4TDkuMiAxNS40em0zLjgxNS02Ljc5NWMtMS44OTYuMDk3LTMuNDAyIDEuNTgtMy40MDIgMy4zOTRzMS41MDYgMy4yOTkgMy40MDIgMy4zOTV2LS44Yy0xLjM4My0uMDktMi40ODktMS4xMTMtMi41OTQtMi4zOTRIMTEuNnYtLjhIOS42NzVjLjI3Ny0xLjA5IDEuMjkyLTEuOTE0IDIuNTI3LTEuOTk0em0uNC44MDF2LS44MDFjMS44OTQuMDk5IDMuMzk4IDEuNTggMy4zOTggMy4zOTQgMCAxLjA0NC0uNDk3IDEuOTc3LTEuMjggMi42aDIuMDhsLS40LjhoLTMuOHYtLjhoLjAwMnYtLjAwNmMxLjQ1Mi0uMDk2IDIuNTk4LTEuMjIgMi41OTgtMi41OTQgMC0xLjM3Mi0xLjE0Ni0yLjQ5Ny0yLjU5OC0yLjU5M201LjU1NyAyLjk4NmEzIDMgMCAwIDEtLjIyMi0uMDIyIDEuOCAxLjggMCAwIDEtLjQwMy0uMDk2IDEuNiAxLjYgMCAwIDEtLjUtLjI3MmwuMDAzLS4wMDJhMS45IDEuOSAwIDAgMS0uNzM0LTEuNTFjMC0uOTkxLjc0Ny0xLjgwNSAxLjY5Ny0xLjg4NHYuODE2Yy0uNDU2LjEwMi0uOC41NDYtLjggMS4wNzggMCAuNTkzLjQyNyAxLjA3Ni45NiAxLjA5OXEuMDc2LjAwOC4xNjYuMDI2Yy45MzkuMDkgMS42NzQuOSAxLjY3NCAxLjg4NiAwIDEtLjc1NSAxLjgxOC0xLjcxMiAxLjg5SDE2LjhsLjQtLjhoMS4xMmMuNDk2LS4wNjUuODgtLjUzNC44OC0xLjEgMC0uNjEzLS40NDgtMS4xMS0xLTEuMTF6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iWEVMU19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/XELS
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenXELS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenXELS', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_19t4w9y._.js.map