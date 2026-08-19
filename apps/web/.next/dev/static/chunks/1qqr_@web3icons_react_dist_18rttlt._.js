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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenOXY.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenOXY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#2261F6',
                d: 'M12 5.25A1.125 1.125 0 1 0 12 3a1.125 1.125 0 0 0 0 2.25M12 21a1.125 1.125 0 1 0 0-2.25A1.125 1.125 0 0 0 12 21m1.125-12.938a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0M8.344 6.937a.844.844 0 1 0 0-1.687.844.844 0 0 0 0 1.687m.843 10.97a.844.844 0 1 1-1.688 0 .844.844 0 0 1 1.688 0m6.188-6.47a1.125 1.125 0 1 0 0-2.249 1.125 1.125 0 0 0 0 2.25m1.125 2.25a1.124 1.124 0 1 1-2.249 0 1.124 1.124 0 0 1 2.249 0M12 17.063a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25M12.831 12a.835.835 0 0 1-.831.838.835.835 0 0 1-.831-.838c0-.463.372-.838.831-.838s.831.375.831.838m-4.487 2.796a.844.844 0 1 0 0-1.687.844.844 0 0 0 0 1.687m.843-4.798a.844.844 0 1 1-1.688 0 .844.844 0 0 1 1.688 0m-4.5-1.373a.563.563 0 1 0 0-1.125.563.563 0 0 0 0 1.125M5.25 12a.563.563 0 1 1-1.126 0 .563.563 0 0 1 1.126 0m-.562 4.5a.563.563 0 1 0 0-1.126.563.563 0 0 0 0 1.126M16.5 6.375a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0M15.375 18.75a1.124 1.124 0 1 0 0-2.248 1.124 1.124 0 0 0 0 2.248m4.5-10.406a1.406 1.406 0 1 1-2.813 0 1.406 1.406 0 0 1 2.813 0m-1.406 8.719a1.406 1.406 0 1 0 0-2.812 1.406 1.406 0 0 0 0 2.812M19.875 12a1.406 1.406 0 1 1-2.812 0 1.406 1.406 0 0 1 2.812 0',
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
                d: 'M12 5.25A1.125 1.125 0 1 0 12 3a1.125 1.125 0 0 0 0 2.25M12 21a1.125 1.125 0 1 0 0-2.25A1.125 1.125 0 0 0 12 21m1.125-12.938a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0M8.344 6.937a.844.844 0 1 0 0-1.687.844.844 0 0 0 0 1.687m.843 10.97a.844.844 0 1 1-1.688 0 .844.844 0 0 1 1.688 0m6.188-6.47a1.125 1.125 0 1 0 0-2.249 1.125 1.125 0 0 0 0 2.25m1.125 2.25a1.124 1.124 0 1 1-2.249 0 1.124 1.124 0 0 1 2.249 0M12 17.063a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25M12.831 12a.835.835 0 0 1-.831.838.835.835 0 0 1-.831-.838c0-.463.372-.838.831-.838s.831.375.831.838m-4.487 2.796a.844.844 0 1 0 0-1.687.844.844 0 0 0 0 1.687m.843-4.798a.844.844 0 1 1-1.688 0 .844.844 0 0 1 1.688 0m-4.5-1.373a.563.563 0 1 0 0-1.125.563.563 0 0 0 0 1.125M5.25 12a.563.563 0 1 1-1.126 0 .563.563 0 0 1 1.126 0m-.562 4.5a.563.563 0 1 0 0-1.126.563.563 0 0 0 0 1.126M16.5 6.375a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0M15.375 18.75a1.124 1.124 0 1 0 0-2.248 1.124 1.124 0 0 0 0 2.248m4.5-10.406a1.406 1.406 0 1 1-2.813 0 1.406 1.406 0 0 1 2.813 0m-1.406 8.719a1.406 1.406 0 1 0 0-2.812 1.406 1.406 0 0 0 0 2.812M19.875 12a1.406 1.406 0 1 1-2.812 0 1.406 1.406 0 0 1 2.812 0',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#OXY__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#2261F6',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1-11.5a1 1 0 1 1-2.001 0 1 1 0 0 1 2 0m-4.25-1a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 9.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M15 11.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 2a1 1 0 1 1-1.999 0 1 1 0 0 1 1.999 0m-4 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m.739-4.5a.742.742 0 0 1-1.023.687.74.74 0 0 1-.455-.687c0-.412.331-.745.739-.745s.739.333.739.745M8.75 14.485a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75-4.265a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M5.5 9a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M16 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 11a1 1 0 1 0 0-1.999A1 1 0 0 0 15 18m4-9.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-1.25 7.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M19 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0',
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
                        id: 'OXY__a'
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
 * @component @name TokenOXY
 * @description Web3Icon for TokenOXY
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMyMjYxRjYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDUuMjVBMS4xMjUgMS4xMjUgMCAxIDAgMTIgM2ExLjEyNSAxLjEyNSAwIDAgMCAwIDIuMjVNMTIgMjFhMS4xMjUgMS4xMjUgMCAxIDAgMC0yLjI1QTEuMTI1IDEuMTI1IDAgMCAwIDEyIDIxbTEuMTI1LTEyLjkzOGExLjEyNSAxLjEyNSAwIDEgMS0yLjI1IDAgMS4xMjUgMS4xMjUgMCAwIDEgMi4yNSAwTTguMzQ0IDYuOTM3YS44NDQuODQ0IDAgMSAwIDAtMS42ODcuODQ0Ljg0NCAwIDAgMCAwIDEuNjg3bS44NDMgMTAuOTdhLjg0NC44NDQgMCAxIDEtMS42ODggMCAuODQ0Ljg0NCAwIDAgMSAxLjY4OCAwbTYuMTg4LTYuNDdhMS4xMjUgMS4xMjUgMCAxIDAgMC0yLjI0OSAxLjEyNSAxLjEyNSAwIDAgMCAwIDIuMjVtMS4xMjUgMi4yNWExLjEyNCAxLjEyNCAwIDEgMS0yLjI0OSAwIDEuMTI0IDEuMTI0IDAgMCAxIDIuMjQ5IDBNMTIgMTcuMDYzYTEuMTI1IDEuMTI1IDAgMSAwIDAtMi4yNSAxLjEyNSAxLjEyNSAwIDAgMCAwIDIuMjVNMTIuODMxIDEyYS44MzUuODM1IDAgMCAxLS44MzEuODM4LjgzNS44MzUgMCAwIDEtLjgzMS0uODM4YzAtLjQ2My4zNzItLjgzOC44MzEtLjgzOHMuODMxLjM3NS44MzEuODM4bS00LjQ4NyAyLjc5NmEuODQ0Ljg0NCAwIDEgMCAwLTEuNjg3Ljg0NC44NDQgMCAwIDAgMCAxLjY4N20uODQzLTQuNzk4YS44NDQuODQ0IDAgMSAxLTEuNjg4IDAgLjg0NC44NDQgMCAwIDEgMS42ODggMG0tNC41LTEuMzczYS41NjMuNTYzIDAgMSAwIDAtMS4xMjUuNTYzLjU2MyAwIDAgMCAwIDEuMTI1TTUuMjUgMTJhLjU2My41NjMgMCAxIDEtMS4xMjYgMCAuNTYzLjU2MyAwIDAgMSAxLjEyNiAwbS0uNTYyIDQuNWEuNTYzLjU2MyAwIDEgMCAwLTEuMTI2LjU2My41NjMgMCAwIDAgMCAxLjEyNk0xNi41IDYuMzc1YTEuMTI1IDEuMTI1IDAgMSAxLTIuMjUgMCAxLjEyNSAxLjEyNSAwIDAgMSAyLjI1IDBNMTUuMzc1IDE4Ljc1YTEuMTI0IDEuMTI0IDAgMSAwIDAtMi4yNDggMS4xMjQgMS4xMjQgMCAwIDAgMCAyLjI0OG00LjUtMTAuNDA2YTEuNDA2IDEuNDA2IDAgMSAxLTIuODEzIDAgMS40MDYgMS40MDYgMCAwIDEgMi44MTMgMG0tMS40MDYgOC43MTlhMS40MDYgMS40MDYgMCAxIDAgMC0yLjgxMiAxLjQwNiAxLjQwNiAwIDAgMCAwIDIuODEyTTE5Ljg3NSAxMmExLjQwNiAxLjQwNiAwIDEgMS0yLjgxMiAwIDEuNDA2IDEuNDA2IDAgMCAxIDIuODEyIDAiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDUuMjVBMS4xMjUgMS4xMjUgMCAxIDAgMTIgM2ExLjEyNSAxLjEyNSAwIDAgMCAwIDIuMjVNMTIgMjFhMS4xMjUgMS4xMjUgMCAxIDAgMC0yLjI1QTEuMTI1IDEuMTI1IDAgMCAwIDEyIDIxbTEuMTI1LTEyLjkzOGExLjEyNSAxLjEyNSAwIDEgMS0yLjI1IDAgMS4xMjUgMS4xMjUgMCAwIDEgMi4yNSAwTTguMzQ0IDYuOTM3YS44NDQuODQ0IDAgMSAwIDAtMS42ODcuODQ0Ljg0NCAwIDAgMCAwIDEuNjg3bS44NDMgMTAuOTdhLjg0NC44NDQgMCAxIDEtMS42ODggMCAuODQ0Ljg0NCAwIDAgMSAxLjY4OCAwbTYuMTg4LTYuNDdhMS4xMjUgMS4xMjUgMCAxIDAgMC0yLjI0OSAxLjEyNSAxLjEyNSAwIDAgMCAwIDIuMjVtMS4xMjUgMi4yNWExLjEyNCAxLjEyNCAwIDEgMS0yLjI0OSAwIDEuMTI0IDEuMTI0IDAgMCAxIDIuMjQ5IDBNMTIgMTcuMDYzYTEuMTI1IDEuMTI1IDAgMSAwIDAtMi4yNSAxLjEyNSAxLjEyNSAwIDAgMCAwIDIuMjVNMTIuODMxIDEyYS44MzUuODM1IDAgMCAxLS44MzEuODM4LjgzNS44MzUgMCAwIDEtLjgzMS0uODM4YzAtLjQ2My4zNzItLjgzOC44MzEtLjgzOHMuODMxLjM3NS44MzEuODM4bS00LjQ4NyAyLjc5NmEuODQ0Ljg0NCAwIDEgMCAwLTEuNjg3Ljg0NC44NDQgMCAwIDAgMCAxLjY4N20uODQzLTQuNzk4YS44NDQuODQ0IDAgMSAxLTEuNjg4IDAgLjg0NC44NDQgMCAwIDEgMS42ODggMG0tNC41LTEuMzczYS41NjMuNTYzIDAgMSAwIDAtMS4xMjUuNTYzLjU2MyAwIDAgMCAwIDEuMTI1TTUuMjUgMTJhLjU2My41NjMgMCAxIDEtMS4xMjYgMCAuNTYzLjU2MyAwIDAgMSAxLjEyNiAwbS0uNTYyIDQuNWEuNTYzLjU2MyAwIDEgMCAwLTEuMTI2LjU2My41NjMgMCAwIDAgMCAxLjEyNk0xNi41IDYuMzc1YTEuMTI1IDEuMTI1IDAgMSAxLTIuMjUgMCAxLjEyNSAxLjEyNSAwIDAgMSAyLjI1IDBNMTUuMzc1IDE4Ljc1YTEuMTI0IDEuMTI0IDAgMSAwIDAtMi4yNDggMS4xMjQgMS4xMjQgMCAwIDAgMCAyLjI0OG00LjUtMTAuNDA2YTEuNDA2IDEuNDA2IDAgMSAxLTIuODEzIDAgMS40MDYgMS40MDYgMCAwIDEgMi44MTMgMG0tMS40MDYgOC43MTlhMS40MDYgMS40MDYgMCAxIDAgMC0yLjgxMiAxLjQwNiAxLjQwNiAwIDAgMCAwIDIuODEyTTE5Ljg3NSAxMmExLjQwNiAxLjQwNiAwIDEgMS0yLjgxMiAwIDEuNDA2IDEuNDA2IDAgMCAxIDIuODEyIDAiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNPWFlfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMjI2MUY2IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDZhMSAxIDAgMSAwIDAtMiAxIDEgMCAwIDAgMCAybTAgMTRhMSAxIDAgMSAwIDAtMiAxIDEgMCAwIDAgMCAybTEtMTEuNWExIDEgMCAxIDEtMi4wMDEgMCAxIDEgMCAwIDEgMiAwbS00LjI1LTFhLjc1Ljc1IDAgMSAwIDAtMS41Ljc1Ljc1IDAgMCAwIDAgMS41bS43NSA5Ljc1YS43NS43NSAwIDEgMS0xLjUgMCAuNzUuNzUgMCAwIDEgMS41IDBNMTUgMTEuNWExIDEgMCAxIDAgMC0yIDEgMSAwIDAgMCAwIDJtMSAyYTEgMSAwIDEgMS0xLjk5OSAwIDEgMSAwIDAgMSAxLjk5OSAwbS00IDNhMSAxIDAgMSAwIDAtMiAxIDEgMCAwIDAgMCAybS43MzktNC41YS43NDIuNzQyIDAgMCAxLTEuMDIzLjY4Ny43NC43NCAwIDAgMS0uNDU1LS42ODdjMC0uNDEyLjMzMS0uNzQ1LjczOS0uNzQ1cy43MzkuMzMzLjczOS43NDVNOC43NSAxNC40ODVhLjc1Ljc1IDAgMSAwIDAtMS41Ljc1Ljc1IDAgMCAwIDAgMS41bS43NS00LjI2NWEuNzUuNzUgMCAxIDEtMS41IDAgLjc1Ljc1IDAgMCAxIDEuNSAwTTUuNSA5YS41LjUgMCAxIDAgMC0xIC41LjUgMCAwIDAgMCAxbS41IDNhLjUuNSAwIDEgMS0xIDAgLjUuNSAwIDAgMSAxIDBtLS41IDRhLjUuNSAwIDEgMCAwLTEgLjUuNSAwIDAgMCAwIDFNMTYgN2ExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtLTEgMTFhMSAxIDAgMSAwIDAtMS45OTlBMSAxIDAgMCAwIDE1IDE4bTQtOS4yNWExLjI1IDEuMjUgMCAxIDEtMi41IDAgMS4yNSAxLjI1IDAgMCAxIDIuNSAwbS0xLjI1IDcuNzVhMS4yNSAxLjI1IDAgMSAwIDAtMi41IDEuMjUgMS4yNSAwIDAgMCAwIDIuNU0xOSAxMmExLjI1IDEuMjUgMCAxIDEtMi41IDAgMS4yNSAxLjI1IDAgMCAxIDIuNSAwIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iT1hZX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/OXY
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenOXY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenOXY', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_18rttlt._.js.map