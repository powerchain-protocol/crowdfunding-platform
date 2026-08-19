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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenHBOT.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenHBOT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#2C2C2C',
                d: 'M17.2 14.209c-1.549-.19-2.818-.985-3.428-2.01.835-.84 2.26-1.3 3.799-1.11 1.55.19 2.82.985 3.429 2.01l-.145.135c-.85.755-2.2 1.154-3.654.975'
            }
        ],
        [
            'path',
            {
                fill: '#676767',
                d: 'M15.927 15.598c-1.29-.89-2.065-2.184-2.15-3.379 1.12-.364 2.59-.115 3.88.775 1.289.885 2.064 2.18 2.149 3.37-.07.024-.14.05-.21.064-1.09.27-2.46 0-3.67-.835z'
            }
        ],
        [
            'path',
            {
                fill: '#A7A7A7',
                d: 'M14.327 16.2c-.8-1.35-.97-2.86-.55-3.979 1.165.15 2.4 1.01 3.2 2.365.799 1.35.964 2.864.55 3.978-.1-.01-.196-.03-.29-.05-1.076-.244-2.175-1.07-2.91-2.309z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M14.862 8.776a5.26 5.26 0 0 0-.35-4.024l-4.26 5.289c-.404-.245-.824-.455-1.259-.555a1.72 1.72 0 0 0-1.464.3c-.225.17-.35.385-.475.605-.09.155-.18.315-.31.455C6.464 11.16 3 12.68 3 12.68l.05.115s3.234-1.45 3.889-1.33c.66.12 1.994.53 2.839 2.26.9 1.824 2.62 2.949 3.579 2.809l-.93 2.704c4.799.235 3.09-3.849 1.61-5.898a10 10 0 0 0 1.89-.795c.36-.19.7-.435 1.009-.71a7.5 7.5 0 0 0 1.65-2.149 11 11 0 0 0 1.19-3.534l-4.92 2.624z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M17.2 14.209c-1.549-.19-2.818-.985-3.428-2.01.835-.84 2.26-1.3 3.799-1.11 1.55.19 2.82.985 3.429 2.01l-.145.135c-.85.755-2.2 1.154-3.654.975'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M15.926 15.599c-1.29-.89-2.065-2.185-2.15-3.38 1.12-.364 2.59-.115 3.88.775 1.289.885 2.064 2.18 2.149 3.37-.07.024-.14.05-.21.064-1.09.27-2.46 0-3.67-.835z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M14.327 16.198c-.8-1.35-.97-2.86-.55-3.979 1.165.15 2.4 1.01 3.2 2.365.799 1.35.964 2.864.55 3.979a3 3 0 0 1-.29-.05c-1.076-.245-2.175-1.07-2.91-2.31z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M14.862 8.776a5.27 5.27 0 0 0-.35-4.024l-4.26 5.289c-.404-.245-.824-.455-1.259-.555a1.72 1.72 0 0 0-1.464.3c-.225.17-.35.385-.475.605-.09.155-.18.315-.31.455C6.464 11.16 3 12.68 3 12.68l.05.115s3.234-1.45 3.889-1.33c.66.12 1.994.53 2.839 2.26.9 1.824 2.62 2.949 3.579 2.809l-.93 2.704c4.799.235 3.09-3.849 1.61-5.898a10 10 0 0 0 1.89-.795c.36-.19.7-.435 1.009-.71a7.5 7.5 0 0 0 1.65-2.149 11 11 0 0 0 1.19-3.534l-4.92 2.624z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#HBOT__a)'
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
                        fill: '#2C2C2C',
                        d: 'M16.623 13.963c-1.377-.169-2.506-.875-3.048-1.786.742-.746 2.009-1.155 3.377-.986 1.377.168 2.506.875 3.048 1.786l-.129.12c-.755.67-1.955 1.026-3.248.866'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#676767',
                        d: 'M15.49 15.199c-1.146-.791-1.834-1.942-1.91-3.004.995-.324 2.302-.102 3.448.689 1.146.786 1.835 1.937 1.91 2.995-.062.022-.124.044-.186.057-.969.24-2.186 0-3.261-.742z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#A7A7A7',
                        d: 'M14.068 15.733c-.71-1.2-.862-2.541-.488-3.537 1.035.134 2.132.898 2.843 2.102.711 1.2.858 2.546.489 3.537q-.132-.017-.258-.045c-.955-.217-1.933-.95-2.586-2.052z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M14.544 9.134a4.68 4.68 0 0 0-.311-3.576l-3.786 4.7c-.36-.217-.733-.404-1.12-.493a1.53 1.53 0 0 0-1.301.267c-.2.15-.311.342-.423.537-.08.138-.16.28-.275.405-.249.28-3.328 1.63-3.328 1.63l.044.103s2.875-1.289 3.457-1.182c.587.106 1.773.47 2.524 2.008.8 1.622 2.328 2.622 3.181 2.497l-.826 2.404c4.265.209 2.746-3.421 1.43-5.243a9 9 0 0 0 1.68-.707c.32-.168.622-.386.898-.63a6.7 6.7 0 0 0 1.466-1.911 9.8 9.8 0 0 0 1.057-3.141L14.54 9.134z'
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
                        id: 'HBOT__a'
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
 * @component @name TokenHBOT
 * @description Web3Icon for TokenHBOT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMyQzJDMkMiIGQ9Ik0xNy4yIDE0LjIwOWMtMS41NDktLjE5LTIuODE4LS45ODUtMy40MjgtMi4wMS44MzUtLjg0IDIuMjYtMS4zIDMuNzk5LTEuMTEgMS41NS4xOSAyLjgyLjk4NSAzLjQyOSAyLjAxbC0uMTQ1LjEzNWMtLjg1Ljc1NS0yLjIgMS4xNTQtMy42NTQuOTc1Ii8+CiAgICA8cGF0aCBmaWxsPSIjNjc2NzY3IiBkPSJNMTUuOTI3IDE1LjU5OGMtMS4yOS0uODktMi4wNjUtMi4xODQtMi4xNS0zLjM3OSAxLjEyLS4zNjQgMi41OS0uMTE1IDMuODguNzc1IDEuMjg5Ljg4NSAyLjA2NCAyLjE4IDIuMTQ5IDMuMzctLjA3LjAyNC0uMTQuMDUtLjIxLjA2NC0xLjA5LjI3LTIuNDYgMC0zLjY3LS44MzV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjQTdBN0E3IiBkPSJNMTQuMzI3IDE2LjJjLS44LTEuMzUtLjk3LTIuODYtLjU1LTMuOTc5IDEuMTY1LjE1IDIuNCAxLjAxIDMuMiAyLjM2NS43OTkgMS4zNS45NjQgMi44NjQuNTUgMy45NzgtLjEtLjAxLS4xOTYtLjAzLS4yOS0uMDUtMS4wNzYtLjI0NC0yLjE3NS0xLjA3LTIuOTEtMi4zMDl6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTQuODYyIDguNzc2YTUuMjYgNS4yNiAwIDAgMC0uMzUtNC4wMjRsLTQuMjYgNS4yODljLS40MDQtLjI0NS0uODI0LS40NTUtMS4yNTktLjU1NWExLjcyIDEuNzIgMCAwIDAtMS40NjQuM2MtLjIyNS4xNy0uMzUuMzg1LS40NzUuNjA1LS4wOS4xNTUtLjE4LjMxNS0uMzEuNDU1QzYuNDY0IDExLjE2IDMgMTIuNjggMyAxMi42OGwuMDUuMTE1czMuMjM0LTEuNDUgMy44ODktMS4zM2MuNjYuMTIgMS45OTQuNTMgMi44MzkgMi4yNi45IDEuODI0IDIuNjIgMi45NDkgMy41NzkgMi44MDlsLS45MyAyLjcwNGM0Ljc5OS4yMzUgMy4wOS0zLjg0OSAxLjYxLTUuODk4YTEwIDEwIDAgMCAwIDEuODktLjc5NWMuMzYtLjE5LjctLjQzNSAxLjAwOS0uNzFhNy41IDcuNSAwIDAgMCAxLjY1LTIuMTQ5IDExIDExIDAgMCAwIDEuMTktMy41MzRsLTQuOTIgMi42MjR6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy4yIDE0LjIwOWMtMS41NDktLjE5LTIuODE4LS45ODUtMy40MjgtMi4wMS44MzUtLjg0IDIuMjYtMS4zIDMuNzk5LTEuMTEgMS41NS4xOSAyLjgyLjk4NSAzLjQyOSAyLjAxbC0uMTQ1LjEzNWMtLjg1Ljc1NS0yLjIgMS4xNTQtMy42NTQuOTc1Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTUuOTI2IDE1LjU5OWMtMS4yOS0uODktMi4wNjUtMi4xODUtMi4xNS0zLjM4IDEuMTItLjM2NCAyLjU5LS4xMTUgMy44OC43NzUgMS4yODkuODg1IDIuMDY0IDIuMTggMi4xNDkgMy4zNy0uMDcuMDI0LS4xNC4wNS0uMjEuMDY0LTEuMDkuMjctMi40NiAwLTMuNjctLjgzNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC4zMjcgMTYuMTk4Yy0uOC0xLjM1LS45Ny0yLjg2LS41NS0zLjk3OSAxLjE2NS4xNSAyLjQgMS4wMSAzLjIgMi4zNjUuNzk5IDEuMzUuOTY0IDIuODY0LjU1IDMuOTc5YTMgMyAwIDAgMS0uMjktLjA1Yy0xLjA3Ni0uMjQ1LTIuMTc1LTEuMDctMi45MS0yLjMxeiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE0Ljg2MiA4Ljc3NmE1LjI3IDUuMjcgMCAwIDAtLjM1LTQuMDI0bC00LjI2IDUuMjg5Yy0uNDA0LS4yNDUtLjgyNC0uNDU1LTEuMjU5LS41NTVhMS43MiAxLjcyIDAgMCAwLTEuNDY0LjNjLS4yMjUuMTctLjM1LjM4NS0uNDc1LjYwNS0uMDkuMTU1LS4xOC4zMTUtLjMxLjQ1NUM2LjQ2NCAxMS4xNiAzIDEyLjY4IDMgMTIuNjhsLjA1LjExNXMzLjIzNC0xLjQ1IDMuODg5LTEuMzNjLjY2LjEyIDEuOTk0LjUzIDIuODM5IDIuMjYuOSAxLjgyNCAyLjYyIDIuOTQ5IDMuNTc5IDIuODA5bC0uOTMgMi43MDRjNC43OTkuMjM1IDMuMDktMy44NDkgMS42MS01Ljg5OGExMCAxMCAwIDAgMCAxLjg5LS43OTVjLjM2LS4xOS43LS40MzUgMS4wMDktLjcxYTcuNSA3LjUgMCAwIDAgMS42NS0yLjE0OSAxMSAxMSAwIDAgMCAxLjE5LTMuNTM0bC00LjkyIDIuNjI0eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNIQk9UX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMkMyQzJDIiBkPSJNMTYuNjIzIDEzLjk2M2MtMS4zNzctLjE2OS0yLjUwNi0uODc1LTMuMDQ4LTEuNzg2Ljc0Mi0uNzQ2IDIuMDA5LTEuMTU1IDMuMzc3LS45ODYgMS4zNzcuMTY4IDIuNTA2Ljg3NSAzLjA0OCAxLjc4NmwtLjEyOS4xMmMtLjc1NS42Ny0xLjk1NSAxLjAyNi0zLjI0OC44NjYiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNjc2NzY3IiBkPSJNMTUuNDkgMTUuMTk5Yy0xLjE0Ni0uNzkxLTEuODM0LTEuOTQyLTEuOTEtMy4wMDQuOTk1LS4zMjQgMi4zMDItLjEwMiAzLjQ0OC42ODkgMS4xNDYuNzg2IDEuODM1IDEuOTM3IDEuOTEgMi45OTUtLjA2Mi4wMjItLjEyNC4wNDQtLjE4Ni4wNTctLjk2OS4yNC0yLjE4NiAwLTMuMjYxLS43NDJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0E3QTdBNyIgZD0iTTE0LjA2OCAxNS43MzNjLS43MS0xLjItLjg2Mi0yLjU0MS0uNDg4LTMuNTM3IDEuMDM1LjEzNCAyLjEzMi44OTggMi44NDMgMi4xMDIuNzExIDEuMi44NTggMi41NDYuNDg5IDMuNTM3cS0uMTMyLS4wMTctLjI1OC0uMDQ1Yy0uOTU1LS4yMTctMS45MzMtLjk1LTIuNTg2LTIuMDUyeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC41NDQgOS4xMzRhNC42OCA0LjY4IDAgMCAwLS4zMTEtMy41NzZsLTMuNzg2IDQuN2MtLjM2LS4yMTctLjczMy0uNDA0LTEuMTItLjQ5M2ExLjUzIDEuNTMgMCAwIDAtMS4zMDEuMjY3Yy0uMi4xNS0uMzExLjM0Mi0uNDIzLjUzNy0uMDguMTM4LS4xNi4yOC0uMjc1LjQwNS0uMjQ5LjI4LTMuMzI4IDEuNjMtMy4zMjggMS42M2wuMDQ0LjEwM3MyLjg3NS0xLjI4OSAzLjQ1Ny0xLjE4MmMuNTg3LjEwNiAxLjc3My40NyAyLjUyNCAyLjAwOC44IDEuNjIyIDIuMzI4IDIuNjIyIDMuMTgxIDIuNDk3bC0uODI2IDIuNDA0YzQuMjY1LjIwOSAyLjc0Ni0zLjQyMSAxLjQzLTUuMjQzYTkgOSAwIDAgMCAxLjY4LS43MDdjLjMyLS4xNjguNjIyLS4zODYuODk4LS42M2E2LjcgNi43IDAgMCAwIDEuNDY2LTEuOTExIDkuOCA5LjggMCAwIDAgMS4wNTctMy4xNDFMMTQuNTQgOS4xMzR6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkhCT1RfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/HBOT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenHBOT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenHBOT', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_02xaigy._.js.map