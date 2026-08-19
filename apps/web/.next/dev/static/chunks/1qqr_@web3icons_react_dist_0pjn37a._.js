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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCTI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCTI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#00D1AF',
                d: 'M7.8 5.04v-.474C7.8 3.666 8.34 3 9.6 3s1.8.666 1.8 1.566v.474c0 .894-.54 1.56-1.8 1.56-1.254 0-1.8-.666-1.8-1.56m4.8 0v-.474c0-.9.54-1.566 1.8-1.566s1.8.666 1.8 1.566v.474c0 .894-.54 1.56-1.8 1.56-1.254 0-1.8-.666-1.8-1.56m4.8 4.32v.48c0 .9.54 1.56 1.8 1.56s1.8-.66 1.8-1.56v-.48c0-.9-.546-1.56-1.8-1.56-1.26 0-1.8.66-1.8 1.56m0 4.8v.48c0 .9.54 1.56 1.8 1.56s1.8-.66 1.8-1.56v-.48c0-.9-.546-1.56-1.8-1.56-1.26 0-1.8.66-1.8 1.56m-4.8-4.8v.48c0 .9.546 1.56 1.8 1.56 1.26 0 1.8-.66 1.8-1.56v-.48c0-.9-.54-1.56-1.8-1.56s-1.8.66-1.8 1.56m0 5.28v-.48c0-.9.54-1.56 1.8-1.56s1.8.66 1.8 1.56v.48c0 .9-.54 1.56-1.8 1.56-1.254 0-1.8-.66-1.8-1.56m0 4.32v.48c0 .9.546 1.56 1.8 1.56 1.26 0 1.8-.66 1.8-1.56v-.48c0-.9-.54-1.56-1.8-1.56s-1.8.66-1.8 1.56m-4.8-9.6v.48c0 .9.546 1.56 1.8 1.56 1.26 0 1.8-.66 1.8-1.56v-.48c0-.9-.54-1.56-1.8-1.56s-1.8.66-1.8 1.56m0 5.28v-.48c0-.9.54-1.56 1.8-1.56s1.8.66 1.8 1.56v.48c0 .9-.54 1.56-1.8 1.56-1.254 0-1.8-.66-1.8-1.56m0 4.32v.48c0 .9.546 1.56 1.8 1.56 1.26 0 1.8-.66 1.8-1.56v-.48c0-.9-.54-1.56-1.8-1.56s-1.8.66-1.8 1.56M3 9.84v-.48c0-.9.54-1.56 1.8-1.56s1.8.66 1.8 1.56v.48c0 .9-.54 1.56-1.8 1.56-1.254 0-1.8-.66-1.8-1.56m0 4.32v.48c0 .9.546 1.56 1.8 1.56 1.26 0 1.8-.66 1.8-1.56v-.48c0-.9-.54-1.56-1.8-1.56S3 13.26 3 14.16'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M7.8 5.04v-.474C7.8 3.666 8.34 3 9.6 3s1.8.666 1.8 1.566v.474c0 .894-.54 1.56-1.8 1.56-1.254 0-1.8-.666-1.8-1.56m4.8 0v-.474c0-.9.54-1.566 1.8-1.566s1.8.666 1.8 1.566v.474c0 .894-.54 1.56-1.8 1.56-1.254 0-1.8-.666-1.8-1.56m4.8 4.32v.48c0 .9.54 1.56 1.8 1.56s1.8-.66 1.8-1.56v-.48c0-.9-.546-1.56-1.8-1.56-1.26 0-1.8.66-1.8 1.56m0 4.8v.48c0 .9.54 1.56 1.8 1.56s1.8-.66 1.8-1.56v-.48c0-.9-.546-1.56-1.8-1.56-1.26 0-1.8.66-1.8 1.56m-4.8-4.8v.48c0 .9.546 1.56 1.8 1.56 1.26 0 1.8-.66 1.8-1.56v-.48c0-.9-.54-1.56-1.8-1.56s-1.8.66-1.8 1.56m0 5.28v-.48c0-.9.54-1.56 1.8-1.56s1.8.66 1.8 1.56v.48c0 .9-.54 1.56-1.8 1.56-1.254 0-1.8-.66-1.8-1.56m0 4.32v.48c0 .9.546 1.56 1.8 1.56 1.26 0 1.8-.66 1.8-1.56v-.48c0-.9-.54-1.56-1.8-1.56s-1.8.66-1.8 1.56m-4.8-9.6v.48c0 .9.546 1.56 1.8 1.56 1.26 0 1.8-.66 1.8-1.56v-.48c0-.9-.54-1.56-1.8-1.56s-1.8.66-1.8 1.56m0 5.28v-.48c0-.9.54-1.56 1.8-1.56s1.8.66 1.8 1.56v.48c0 .9-.54 1.56-1.8 1.56-1.254 0-1.8-.66-1.8-1.56m0 4.32v.48c0 .9.546 1.56 1.8 1.56 1.26 0 1.8-.66 1.8-1.56v-.48c0-.9-.54-1.56-1.8-1.56s-1.8.66-1.8 1.56M3 9.84v-.48c0-.9.54-1.56 1.8-1.56s1.8.66 1.8 1.56v.48c0 .9-.54 1.56-1.8 1.56-1.254 0-1.8-.66-1.8-1.56m0 4.32v.48c0 .9.546 1.56 1.8 1.56 1.26 0 1.8-.66 1.8-1.56v-.48c0-.9-.54-1.56-1.8-1.56S3 13.26 3 14.16'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CTI__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#00D1AF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M8.267 5.813v-.421c0-.8.48-1.392 1.6-1.392s1.6.592 1.6 1.392v.421c0 .795-.48 1.387-1.6 1.387-1.115 0-1.6-.592-1.6-1.387m4.266 0v-.421c0-.8.48-1.392 1.6-1.392s1.6.592 1.6 1.392v.421c0 .795-.48 1.387-1.6 1.387-1.114 0-1.6-.592-1.6-1.387m4.267 3.84v.427c0 .8.48 1.387 1.6 1.387S20 10.88 20 10.08v-.427c0-.8-.485-1.386-1.6-1.386-1.12 0-1.6.586-1.6 1.386m0 4.267v.427c0 .8.48 1.386 1.6 1.386s1.6-.586 1.6-1.386v-.427c0-.8-.485-1.387-1.6-1.387-1.12 0-1.6.587-1.6 1.387m-4.267-4.267v.427c0 .8.486 1.387 1.6 1.387 1.12 0 1.6-.587 1.6-1.387v-.427c0-.8-.48-1.386-1.6-1.386s-1.6.586-1.6 1.386m0 4.694v-.427c0-.8.48-1.387 1.6-1.387s1.6.587 1.6 1.387v.427c0 .8-.48 1.386-1.6 1.386-1.114 0-1.6-.586-1.6-1.386m0 3.84v.426c0 .8.486 1.387 1.6 1.387 1.12 0 1.6-.587 1.6-1.387v-.426c0-.8-.48-1.387-1.6-1.387s-1.6.587-1.6 1.387M8.267 9.653v.427c0 .8.485 1.387 1.6 1.387 1.12 0 1.6-.587 1.6-1.387v-.427c0-.8-.48-1.386-1.6-1.386s-1.6.586-1.6 1.386m0 4.694v-.427c0-.8.48-1.387 1.6-1.387s1.6.587 1.6 1.387v.427c0 .8-.48 1.386-1.6 1.386-1.115 0-1.6-.586-1.6-1.386m0 3.84v.426c0 .8.485 1.387 1.6 1.387 1.12 0 1.6-.587 1.6-1.387v-.426c0-.8-.48-1.387-1.6-1.387s-1.6.587-1.6 1.387M4 10.08v-.427c0-.8.48-1.386 1.6-1.386s1.6.586 1.6 1.386v.427c0 .8-.48 1.387-1.6 1.387-1.115 0-1.6-.587-1.6-1.387m0 3.84v.427c0 .8.485 1.386 1.6 1.386 1.12 0 1.6-.586 1.6-1.386v-.427c0-.8-.48-1.387-1.6-1.387S4 13.12 4 13.92'
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
                        id: 'CTI__a'
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
 * @component @name TokenCTI
 * @description Web3Icon for TokenCTI
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMEQxQUYiIGQ9Ik03LjggNS4wNHYtLjQ3NEM3LjggMy42NjYgOC4zNCAzIDkuNiAzczEuOC42NjYgMS44IDEuNTY2di40NzRjMCAuODk0LS41NCAxLjU2LTEuOCAxLjU2LTEuMjU0IDAtMS44LS42NjYtMS44LTEuNTZtNC44IDB2LS40NzRjMC0uOS41NC0xLjU2NiAxLjgtMS41NjZzMS44LjY2NiAxLjggMS41NjZ2LjQ3NGMwIC44OTQtLjU0IDEuNTYtMS44IDEuNTYtMS4yNTQgMC0xLjgtLjY2Ni0xLjgtMS41Nm00LjggNC4zMnYuNDhjMCAuOS41NCAxLjU2IDEuOCAxLjU2czEuOC0uNjYgMS44LTEuNTZ2LS40OGMwLS45LS41NDYtMS41Ni0xLjgtMS41Ni0xLjI2IDAtMS44LjY2LTEuOCAxLjU2bTAgNC44di40OGMwIC45LjU0IDEuNTYgMS44IDEuNTZzMS44LS42NiAxLjgtMS41NnYtLjQ4YzAtLjktLjU0Ni0xLjU2LTEuOC0xLjU2LTEuMjYgMC0xLjguNjYtMS44IDEuNTZtLTQuOC00Ljh2LjQ4YzAgLjkuNTQ2IDEuNTYgMS44IDEuNTYgMS4yNiAwIDEuOC0uNjYgMS44LTEuNTZ2LS40OGMwLS45LS41NC0xLjU2LTEuOC0xLjU2cy0xLjguNjYtMS44IDEuNTZtMCA1LjI4di0uNDhjMC0uOS41NC0xLjU2IDEuOC0xLjU2czEuOC42NiAxLjggMS41NnYuNDhjMCAuOS0uNTQgMS41Ni0xLjggMS41Ni0xLjI1NCAwLTEuOC0uNjYtMS44LTEuNTZtMCA0LjMydi40OGMwIC45LjU0NiAxLjU2IDEuOCAxLjU2IDEuMjYgMCAxLjgtLjY2IDEuOC0xLjU2di0uNDhjMC0uOS0uNTQtMS41Ni0xLjgtMS41NnMtMS44LjY2LTEuOCAxLjU2bS00LjgtOS42di40OGMwIC45LjU0NiAxLjU2IDEuOCAxLjU2IDEuMjYgMCAxLjgtLjY2IDEuOC0xLjU2di0uNDhjMC0uOS0uNTQtMS41Ni0xLjgtMS41NnMtMS44LjY2LTEuOCAxLjU2bTAgNS4yOHYtLjQ4YzAtLjkuNTQtMS41NiAxLjgtMS41NnMxLjguNjYgMS44IDEuNTZ2LjQ4YzAgLjktLjU0IDEuNTYtMS44IDEuNTYtMS4yNTQgMC0xLjgtLjY2LTEuOC0xLjU2bTAgNC4zMnYuNDhjMCAuOS41NDYgMS41NiAxLjggMS41NiAxLjI2IDAgMS44LS42NiAxLjgtMS41NnYtLjQ4YzAtLjktLjU0LTEuNTYtMS44LTEuNTZzLTEuOC42Ni0xLjggMS41Nk0zIDkuODR2LS40OGMwLS45LjU0LTEuNTYgMS44LTEuNTZzMS44LjY2IDEuOCAxLjU2di40OGMwIC45LS41NCAxLjU2LTEuOCAxLjU2LTEuMjU0IDAtMS44LS42Ni0xLjgtMS41Nm0wIDQuMzJ2LjQ4YzAgLjkuNTQ2IDEuNTYgMS44IDEuNTYgMS4yNiAwIDEuOC0uNjYgMS44LTEuNTZ2LS40OGMwLS45LS41NC0xLjU2LTEuOC0xLjU2UzMgMTMuMjYgMyAxNC4xNiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03LjggNS4wNHYtLjQ3NEM3LjggMy42NjYgOC4zNCAzIDkuNiAzczEuOC42NjYgMS44IDEuNTY2di40NzRjMCAuODk0LS41NCAxLjU2LTEuOCAxLjU2LTEuMjU0IDAtMS44LS42NjYtMS44LTEuNTZtNC44IDB2LS40NzRjMC0uOS41NC0xLjU2NiAxLjgtMS41NjZzMS44LjY2NiAxLjggMS41NjZ2LjQ3NGMwIC44OTQtLjU0IDEuNTYtMS44IDEuNTYtMS4yNTQgMC0xLjgtLjY2Ni0xLjgtMS41Nm00LjggNC4zMnYuNDhjMCAuOS41NCAxLjU2IDEuOCAxLjU2czEuOC0uNjYgMS44LTEuNTZ2LS40OGMwLS45LS41NDYtMS41Ni0xLjgtMS41Ni0xLjI2IDAtMS44LjY2LTEuOCAxLjU2bTAgNC44di40OGMwIC45LjU0IDEuNTYgMS44IDEuNTZzMS44LS42NiAxLjgtMS41NnYtLjQ4YzAtLjktLjU0Ni0xLjU2LTEuOC0xLjU2LTEuMjYgMC0xLjguNjYtMS44IDEuNTZtLTQuOC00Ljh2LjQ4YzAgLjkuNTQ2IDEuNTYgMS44IDEuNTYgMS4yNiAwIDEuOC0uNjYgMS44LTEuNTZ2LS40OGMwLS45LS41NC0xLjU2LTEuOC0xLjU2cy0xLjguNjYtMS44IDEuNTZtMCA1LjI4di0uNDhjMC0uOS41NC0xLjU2IDEuOC0xLjU2czEuOC42NiAxLjggMS41NnYuNDhjMCAuOS0uNTQgMS41Ni0xLjggMS41Ni0xLjI1NCAwLTEuOC0uNjYtMS44LTEuNTZtMCA0LjMydi40OGMwIC45LjU0NiAxLjU2IDEuOCAxLjU2IDEuMjYgMCAxLjgtLjY2IDEuOC0xLjU2di0uNDhjMC0uOS0uNTQtMS41Ni0xLjgtMS41NnMtMS44LjY2LTEuOCAxLjU2bS00LjgtOS42di40OGMwIC45LjU0NiAxLjU2IDEuOCAxLjU2IDEuMjYgMCAxLjgtLjY2IDEuOC0xLjU2di0uNDhjMC0uOS0uNTQtMS41Ni0xLjgtMS41NnMtMS44LjY2LTEuOCAxLjU2bTAgNS4yOHYtLjQ4YzAtLjkuNTQtMS41NiAxLjgtMS41NnMxLjguNjYgMS44IDEuNTZ2LjQ4YzAgLjktLjU0IDEuNTYtMS44IDEuNTYtMS4yNTQgMC0xLjgtLjY2LTEuOC0xLjU2bTAgNC4zMnYuNDhjMCAuOS41NDYgMS41NiAxLjggMS41NiAxLjI2IDAgMS44LS42NiAxLjgtMS41NnYtLjQ4YzAtLjktLjU0LTEuNTYtMS44LTEuNTZzLTEuOC42Ni0xLjggMS41Nk0zIDkuODR2LS40OGMwLS45LjU0LTEuNTYgMS44LTEuNTZzMS44LjY2IDEuOCAxLjU2di40OGMwIC45LS41NCAxLjU2LTEuOCAxLjU2LTEuMjU0IDAtMS44LS42Ni0xLjgtMS41Nm0wIDQuMzJ2LjQ4YzAgLjkuNTQ2IDEuNTYgMS44IDEuNTYgMS4yNiAwIDEuOC0uNjYgMS44LTEuNTZ2LS40OGMwLS45LS41NC0xLjU2LTEuOC0xLjU2UzMgMTMuMjYgMyAxNC4xNiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDVElfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDBEMUFGIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04LjI2NyA1LjgxM3YtLjQyMWMwLS44LjQ4LTEuMzkyIDEuNi0xLjM5MnMxLjYuNTkyIDEuNiAxLjM5MnYuNDIxYzAgLjc5NS0uNDggMS4zODctMS42IDEuMzg3LTEuMTE1IDAtMS42LS41OTItMS42LTEuMzg3bTQuMjY2IDB2LS40MjFjMC0uOC40OC0xLjM5MiAxLjYtMS4zOTJzMS42LjU5MiAxLjYgMS4zOTJ2LjQyMWMwIC43OTUtLjQ4IDEuMzg3LTEuNiAxLjM4Ny0xLjExNCAwLTEuNi0uNTkyLTEuNi0xLjM4N200LjI2NyAzLjg0di40MjdjMCAuOC40OCAxLjM4NyAxLjYgMS4zODdTMjAgMTAuODggMjAgMTAuMDh2LS40MjdjMC0uOC0uNDg1LTEuMzg2LTEuNi0xLjM4Ni0xLjEyIDAtMS42LjU4Ni0xLjYgMS4zODZtMCA0LjI2N3YuNDI3YzAgLjguNDggMS4zODYgMS42IDEuMzg2czEuNi0uNTg2IDEuNi0xLjM4NnYtLjQyN2MwLS44LS40ODUtMS4zODctMS42LTEuMzg3LTEuMTIgMC0xLjYuNTg3LTEuNiAxLjM4N20tNC4yNjctNC4yNjd2LjQyN2MwIC44LjQ4NiAxLjM4NyAxLjYgMS4zODcgMS4xMiAwIDEuNi0uNTg3IDEuNi0xLjM4N3YtLjQyN2MwLS44LS40OC0xLjM4Ni0xLjYtMS4zODZzLTEuNi41ODYtMS42IDEuMzg2bTAgNC42OTR2LS40MjdjMC0uOC40OC0xLjM4NyAxLjYtMS4zODdzMS42LjU4NyAxLjYgMS4zODd2LjQyN2MwIC44LS40OCAxLjM4Ni0xLjYgMS4zODYtMS4xMTQgMC0xLjYtLjU4Ni0xLjYtMS4zODZtMCAzLjg0di40MjZjMCAuOC40ODYgMS4zODcgMS42IDEuMzg3IDEuMTIgMCAxLjYtLjU4NyAxLjYtMS4zODd2LS40MjZjMC0uOC0uNDgtMS4zODctMS42LTEuMzg3cy0xLjYuNTg3LTEuNiAxLjM4N004LjI2NyA5LjY1M3YuNDI3YzAgLjguNDg1IDEuMzg3IDEuNiAxLjM4NyAxLjEyIDAgMS42LS41ODcgMS42LTEuMzg3di0uNDI3YzAtLjgtLjQ4LTEuMzg2LTEuNi0xLjM4NnMtMS42LjU4Ni0xLjYgMS4zODZtMCA0LjY5NHYtLjQyN2MwLS44LjQ4LTEuMzg3IDEuNi0xLjM4N3MxLjYuNTg3IDEuNiAxLjM4N3YuNDI3YzAgLjgtLjQ4IDEuMzg2LTEuNiAxLjM4Ni0xLjExNSAwLTEuNi0uNTg2LTEuNi0xLjM4Nm0wIDMuODR2LjQyNmMwIC44LjQ4NSAxLjM4NyAxLjYgMS4zODcgMS4xMiAwIDEuNi0uNTg3IDEuNi0xLjM4N3YtLjQyNmMwLS44LS40OC0xLjM4Ny0xLjYtMS4zODdzLTEuNi41ODctMS42IDEuMzg3TTQgMTAuMDh2LS40MjdjMC0uOC40OC0xLjM4NiAxLjYtMS4zODZzMS42LjU4NiAxLjYgMS4zODZ2LjQyN2MwIC44LS40OCAxLjM4Ny0xLjYgMS4zODctMS4xMTUgMC0xLjYtLjU4Ny0xLjYtMS4zODdtMCAzLjg0di40MjdjMCAuOC40ODUgMS4zODYgMS42IDEuMzg2IDEuMTIgMCAxLjYtLjU4NiAxLjYtMS4zODZ2LS40MjdjMC0uOC0uNDgtMS4zODctMS42LTEuMzg3UzQgMTMuMTIgNCAxMy45MiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJDVElfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/CTI
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCTI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCTI', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0pjn37a._.js.map