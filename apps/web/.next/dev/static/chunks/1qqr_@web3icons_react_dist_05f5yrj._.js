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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMPL.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMPL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FF7900',
                d: 'M12 4.588c4.96 0 9 1.662 9 3.706 0 1.927-3.399 3.515-7.941 3.706v-.636c.042-1.778.323-1.747 1.8-2.498.842-.276 1.376-.689 1.376-1.165 0-.831-1.773-1.509-3.97-1.509s-3.97.678-3.97 1.52c0 .338.28.645.772.9 1.53.878 2.403.645 2.403 2.805V12C6.674 11.926 3 10.295 3 8.294c0-2.044 4.024-3.706 9-3.706'
            }
        ],
        [
            'path',
            {
                fill: '#FF7900',
                d: 'M20.54 10.941c.296.35.46.726.46 1.107 0 1.117-1.101 1.943-3.177 2.6v-1.536c0-.424.059-.402.461-.561a5.6 5.6 0 0 0 2.255-1.61m-4.305 4.236c-1.276.28-2.684.529-4.24.529-4.96 0-8.995-1.7-8.995-3.648 0-.391.159-.767.46-1.1 1.144 1.355 4.199 2.35 8.01 2.419v.476c0 .35.265.794.747.794s.842-.46.842-.794v-.492a18 18 0 0 0 2.827-.302c.196 0 .35.17.35.36z'
            }
        ],
        [
            'path',
            {
                fill: '#FF7900',
                d: 'M20.497 14.648c.323.37.503.778.503 1.19 0 1.97-4.023 3.574-9 3.574-4.96 0-9-1.604-9-3.573 0-.413.201-.821.53-1.191 1.233 1.392 4.536 2.117 8.454 2.117 1.562 0 3.193 0 4.251-.175v.456c0 .354.276.778.805.778.53 0 .784-.456.784-.794v-.794c1.334-.413 2.107-.953 2.673-1.588'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 4.588c4.96 0 9 1.662 9 3.706 0 1.927-3.399 3.515-7.941 3.706v-.636c.042-1.778.323-1.747 1.8-2.498.842-.276 1.376-.689 1.376-1.165 0-.831-1.773-1.509-3.97-1.509s-3.97.678-3.97 1.52c0 .338.28.645.772.9 1.53.878 2.404.645 2.404 2.805V12C6.674 11.925 3 10.295 3 8.294c0-2.044 4.024-3.706 9-3.706'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M20.54 10.941c.296.35.46.726.46 1.107 0 1.117-1.101 1.943-3.177 2.6v-1.536c0-.424.059-.402.461-.561a5.6 5.6 0 0 0 2.255-1.61m-4.305 4.236c-1.276.28-2.684.529-4.24.529-4.96 0-8.995-1.7-8.995-3.648 0-.391.159-.767.46-1.1 1.144 1.355 4.199 2.35 8.01 2.419v.476c0 .35.265.794.747.794s.842-.46.842-.794v-.492a18 18 0 0 0 2.827-.302c.196 0 .35.17.35.36z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M20.497 14.648c.323.37.503.778.503 1.19 0 1.97-4.024 3.574-9 3.574-4.96 0-9-1.604-9-3.573 0-.413.201-.821.53-1.191 1.233 1.392 4.536 2.117 8.454 2.117 1.562 0 3.193 0 4.251-.175v.456c0 .354.276.778.805.778.53 0 .784-.456.784-.794v-.794c1.334-.413 2.107-.953 2.673-1.588'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MPL__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FF7900',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 5.411c4.41 0 8 1.478 8 3.294 0 1.713-3.021 3.125-7.059 3.294v-.564c.038-1.582.287-1.553 1.6-2.222.748-.244 1.224-.611 1.224-1.035 0-.739-1.577-1.341-3.53-1.341s-3.53.602-3.53 1.35c0 .302.25.575.688.8 1.36.782 2.136.575 2.136 2.495v.517C7.266 11.933 4 10.484 4 8.705c0-1.816 3.576-3.294 8-3.294'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M19.59 11.059c.264.31.41.644.41.983 0 .993-.979 1.727-2.823 2.31v-1.364c0-.377.051-.358.409-.499a5 5 0 0 0 2.005-1.43m-3.825 3.764c-1.134.25-2.386.47-3.77.47-4.41 0-7.995-1.51-7.995-3.242 0-.348.141-.682.41-.978 1.016 1.204 3.731 2.09 7.12 2.15v.424c0 .31.235.706.663.706s.748-.41.748-.706v-.438a16 16 0 0 0 2.513-.268c.174 0 .31.15.31.32z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M19.553 14.354c.287.329.447.691.447 1.058 0 1.75-3.577 3.177-8 3.177-4.41 0-8-1.426-8-3.177 0-.367.179-.73.47-1.059 1.097 1.238 4.034 1.883 7.516 1.883 1.388 0 2.837 0 3.779-.156v.405c0 .315.244.692.715.692.47 0 .697-.405.697-.706v-.706c1.185-.367 1.872-.847 2.376-1.412'
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
                        id: 'MPL__a'
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
 * @component @name TokenMPL
 * @description Web3Icon for TokenMPL
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRjc5MDAiIGQ9Ik0xMiA0LjU4OGM0Ljk2IDAgOSAxLjY2MiA5IDMuNzA2IDAgMS45MjctMy4zOTkgMy41MTUtNy45NDEgMy43MDZ2LS42MzZjLjA0Mi0xLjc3OC4zMjMtMS43NDcgMS44LTIuNDk4Ljg0Mi0uMjc2IDEuMzc2LS42ODkgMS4zNzYtMS4xNjUgMC0uODMxLTEuNzczLTEuNTA5LTMuOTctMS41MDlzLTMuOTcuNjc4LTMuOTcgMS41MmMwIC4zMzguMjguNjQ1Ljc3Mi45IDEuNTMuODc4IDIuNDAzLjY0NSAyLjQwMyAyLjgwNVYxMkM2LjY3NCAxMS45MjYgMyAxMC4yOTUgMyA4LjI5NGMwLTIuMDQ0IDQuMDI0LTMuNzA2IDktMy43MDYiLz4KICAgIDxwYXRoIGZpbGw9IiNGRjc5MDAiIGQ9Ik0yMC41NCAxMC45NDFjLjI5Ni4zNS40Ni43MjYuNDYgMS4xMDcgMCAxLjExNy0xLjEwMSAxLjk0My0zLjE3NyAyLjZ2LTEuNTM2YzAtLjQyNC4wNTktLjQwMi40NjEtLjU2MWE1LjYgNS42IDAgMCAwIDIuMjU1LTEuNjFtLTQuMzA1IDQuMjM2Yy0xLjI3Ni4yOC0yLjY4NC41MjktNC4yNC41MjktNC45NiAwLTguOTk1LTEuNy04Ljk5NS0zLjY0OCAwLS4zOTEuMTU5LS43NjcuNDYtMS4xIDEuMTQ0IDEuMzU1IDQuMTk5IDIuMzUgOC4wMSAyLjQxOXYuNDc2YzAgLjM1LjI2NS43OTQuNzQ3Ljc5NHMuODQyLS40Ni44NDItLjc5NHYtLjQ5MmExOCAxOCAwIDAgMCAyLjgyNy0uMzAyYy4xOTYgMCAuMzUuMTcuMzUuMzZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkY3OTAwIiBkPSJNMjAuNDk3IDE0LjY0OGMuMzIzLjM3LjUwMy43NzguNTAzIDEuMTkgMCAxLjk3LTQuMDIzIDMuNTc0LTkgMy41NzQtNC45NiAwLTktMS42MDQtOS0zLjU3MyAwLS40MTMuMjAxLS44MjEuNTMtMS4xOTEgMS4yMzMgMS4zOTIgNC41MzYgMi4xMTcgOC40NTQgMi4xMTcgMS41NjIgMCAzLjE5MyAwIDQuMjUxLS4xNzV2LjQ1NmMwIC4zNTQuMjc2Ljc3OC44MDUuNzc4LjUzIDAgLjc4NC0uNDU2Ljc4NC0uNzk0di0uNzk0YzEuMzM0LS40MTMgMi4xMDctLjk1MyAyLjY3My0xLjU4OCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiA0LjU4OGM0Ljk2IDAgOSAxLjY2MiA5IDMuNzA2IDAgMS45MjctMy4zOTkgMy41MTUtNy45NDEgMy43MDZ2LS42MzZjLjA0Mi0xLjc3OC4zMjMtMS43NDcgMS44LTIuNDk4Ljg0Mi0uMjc2IDEuMzc2LS42ODkgMS4zNzYtMS4xNjUgMC0uODMxLTEuNzczLTEuNTA5LTMuOTctMS41MDlzLTMuOTcuNjc4LTMuOTcgMS41MmMwIC4zMzguMjguNjQ1Ljc3Mi45IDEuNTMuODc4IDIuNDA0LjY0NSAyLjQwNCAyLjgwNVYxMkM2LjY3NCAxMS45MjUgMyAxMC4yOTUgMyA4LjI5NGMwLTIuMDQ0IDQuMDI0LTMuNzA2IDktMy43MDYiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMC41NCAxMC45NDFjLjI5Ni4zNS40Ni43MjYuNDYgMS4xMDcgMCAxLjExNy0xLjEwMSAxLjk0My0zLjE3NyAyLjZ2LTEuNTM2YzAtLjQyNC4wNTktLjQwMi40NjEtLjU2MWE1LjYgNS42IDAgMCAwIDIuMjU1LTEuNjFtLTQuMzA1IDQuMjM2Yy0xLjI3Ni4yOC0yLjY4NC41MjktNC4yNC41MjktNC45NiAwLTguOTk1LTEuNy04Ljk5NS0zLjY0OCAwLS4zOTEuMTU5LS43NjcuNDYtMS4xIDEuMTQ0IDEuMzU1IDQuMTk5IDIuMzUgOC4wMSAyLjQxOXYuNDc2YzAgLjM1LjI2NS43OTQuNzQ3Ljc5NHMuODQyLS40Ni44NDItLjc5NHYtLjQ5MmExOCAxOCAwIDAgMCAyLjgyNy0uMzAyYy4xOTYgMCAuMzUuMTcuMzUuMzZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjAuNDk3IDE0LjY0OGMuMzIzLjM3LjUwMy43NzguNTAzIDEuMTkgMCAxLjk3LTQuMDI0IDMuNTc0LTkgMy41NzQtNC45NiAwLTktMS42MDQtOS0zLjU3MyAwLS40MTMuMjAxLS44MjEuNTMtMS4xOTEgMS4yMzMgMS4zOTIgNC41MzYgMi4xMTcgOC40NTQgMi4xMTcgMS41NjIgMCAzLjE5MyAwIDQuMjUxLS4xNzV2LjQ1NmMwIC4zNTQuMjc2Ljc3OC44MDUuNzc4LjUzIDAgLjc4NC0uNDU2Ljc4NC0uNzk0di0uNzk0YzEuMzM0LS40MTMgMi4xMDctLjk1MyAyLjY3My0xLjU4OCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNUExfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRkY3OTAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiA1LjQxMWM0LjQxIDAgOCAxLjQ3OCA4IDMuMjk0IDAgMS43MTMtMy4wMjEgMy4xMjUtNy4wNTkgMy4yOTR2LS41NjRjLjAzOC0xLjU4Mi4yODctMS41NTMgMS42LTIuMjIyLjc0OC0uMjQ0IDEuMjI0LS42MTEgMS4yMjQtMS4wMzUgMC0uNzM5LTEuNTc3LTEuMzQxLTMuNTMtMS4zNDFzLTMuNTMuNjAyLTMuNTMgMS4zNWMwIC4zMDIuMjUuNTc1LjY4OC44IDEuMzYuNzgyIDIuMTM2LjU3NSAyLjEzNiAyLjQ5NXYuNTE3QzcuMjY2IDExLjkzMyA0IDEwLjQ4NCA0IDguNzA1YzAtMS44MTYgMy41NzYtMy4yOTQgOC0zLjI5NCIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOS41OSAxMS4wNTljLjI2NC4zMS40MS42NDQuNDEuOTgzIDAgLjk5My0uOTc5IDEuNzI3LTIuODIzIDIuMzF2LTEuMzY0YzAtLjM3Ny4wNTEtLjM1OC40MDktLjQ5OWE1IDUgMCAwIDAgMi4wMDUtMS40M20tMy44MjUgMy43NjRjLTEuMTM0LjI1LTIuMzg2LjQ3LTMuNzcuNDctNC40MSAwLTcuOTk1LTEuNTEtNy45OTUtMy4yNDIgMC0uMzQ4LjE0MS0uNjgyLjQxLS45NzggMS4wMTYgMS4yMDQgMy43MzEgMi4wOSA3LjEyIDIuMTV2LjQyNGMwIC4zMS4yMzUuNzA2LjY2My43MDZzLjc0OC0uNDEuNzQ4LS43MDZ2LS40MzhhMTYgMTYgMCAwIDAgMi41MTMtLjI2OGMuMTc0IDAgLjMxLjE1LjMxLjMyeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOS41NTMgMTQuMzU0Yy4yODcuMzI5LjQ0Ny42OTEuNDQ3IDEuMDU4IDAgMS43NS0zLjU3NyAzLjE3Ny04IDMuMTc3LTQuNDEgMC04LTEuNDI2LTgtMy4xNzcgMC0uMzY3LjE3OS0uNzMuNDctMS4wNTkgMS4wOTcgMS4yMzggNC4wMzQgMS44ODMgNy41MTYgMS44ODMgMS4zODggMCAyLjgzNyAwIDMuNzc5LS4xNTZ2LjQwNWMwIC4zMTUuMjQ0LjY5Mi43MTUuNjkyLjQ3IDAgLjY5Ny0uNDA1LjY5Ny0uNzA2di0uNzA2YzEuMTg1LS4zNjcgMS44NzItLjg0NyAyLjM3Ni0xLjQxMiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJNUExfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/MPL
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMPL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMPL', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_05f5yrj._.js.map