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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenKNDX.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenKNDX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.972 8.67a.02.02 0 0 0 .017.01H12v-.01l3.29-5.446a.46.46 0 0 1 .406-.208q.672 0 1.344.011a.02.02 0 0 1 0 .023l-3.094 4.905a.07.07 0 0 1-.056.033c-.157.012-.304.017-.439.102-.54.348-.377 1.164.265 1.294.573.118 1.012-.574.664-1.092a.06.06 0 0 1-.012-.034q0-.019.011-.033l3.263-5.175a.08.08 0 0 1 .068-.034c.32 0 .995-.073 1.237.095.276.186.186.507.023.76-1.649 2.61-3.302 5.231-4.962 7.842a.09.09 0 0 0 0 .1l5.108 8.258c.163.26.32.563.056.788-.23.186-.675.14-.979.124a.07.07 0 0 1-.056-.034L8.974 6.464a.06.06 0 0 1 0-.067.698.698 0 0 0-.636-1.075c-.86.045-.833 1.423.079 1.39q.015-.002.028.005.013.006.022.017l8.99 14.21a.03.03 0 0 1 0 .028l-.012.01h-.01l-1.418.006c-.17 0-.327-.146-.422-.298l-3.561-5.794q-.042-.075-.09 0L8.4 20.746c-.107.17-.31.242-.518.242H5.177c-.08 0-.119-.022-.186-.056-.326-.169-.394-.416-.186-.742q2.608-4.193 5.198-8.393a.06.06 0 0 0 0-.062L5.115 3.966a1.3 1.3 0 0 1-.22-.472c-.04-.36.282-.478.591-.478h2.779c.332 0 .416.112.574.382z'
            }
        ]
    ]
};
/**
 * @component @name TokenKNDX
 * @description Web3Icon for TokenKNDX
 *
 * @preview (mono)
 * @preview ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS45NzIgOC42N2EuMDIuMDIgMCAwIDAgLjAxNy4wMUgxMnYtLjAxbDMuMjktNS40NDZhLjQ2LjQ2IDAgMCAxIC40MDYtLjIwOHEuNjcyIDAgMS4zNDQuMDExYS4wMi4wMiAwIDAgMSAwIC4wMjNsLTMuMDk0IDQuOTA1YS4wNy4wNyAwIDAgMS0uMDU2LjAzM2MtLjE1Ny4wMTItLjMwNC4wMTctLjQzOS4xMDItLjU0LjM0OC0uMzc3IDEuMTY0LjI2NSAxLjI5NC41NzMuMTE4IDEuMDEyLS41NzQuNjY0LTEuMDkyYS4wNi4wNiAwIDAgMS0uMDEyLS4wMzRxMC0uMDE5LjAxMS0uMDMzbDMuMjYzLTUuMTc1YS4wOC4wOCAwIDAgMSAuMDY4LS4wMzRjLjMyIDAgLjk5NS0uMDczIDEuMjM3LjA5NS4yNzYuMTg2LjE4Ni41MDcuMDIzLjc2LTEuNjQ5IDIuNjEtMy4zMDIgNS4yMzEtNC45NjIgNy44NDJhLjA5LjA5IDAgMCAwIDAgLjFsNS4xMDggOC4yNThjLjE2My4yNi4zMi41NjMuMDU2Ljc4OC0uMjMuMTg2LS42NzUuMTQtLjk3OS4xMjRhLjA3LjA3IDAgMCAxLS4wNTYtLjAzNEw4Ljk3NCA2LjQ2NGEuMDYuMDYgMCAwIDEgMC0uMDY3LjY5OC42OTggMCAwIDAtLjYzNi0xLjA3NWMtLjg2LjA0NS0uODMzIDEuNDIzLjA3OSAxLjM5cS4wMTUtLjAwMi4wMjguMDA1LjAxMy4wMDYuMDIyLjAxN2w4Ljk5IDE0LjIxYS4wMy4wMyAwIDAgMSAwIC4wMjhsLS4wMTIuMDFoLS4wMWwtMS40MTguMDA2Yy0uMTcgMC0uMzI3LS4xNDYtLjQyMi0uMjk4bC0zLjU2MS01Ljc5NHEtLjA0Mi0uMDc1LS4wOSAwTDguNCAyMC43NDZjLS4xMDcuMTctLjMxLjI0Mi0uNTE4LjI0Mkg1LjE3N2MtLjA4IDAtLjExOS0uMDIyLS4xODYtLjA1Ni0uMzI2LS4xNjktLjM5NC0uNDE2LS4xODYtLjc0MnEyLjYwOC00LjE5MyA1LjE5OC04LjM5M2EuMDYuMDYgMCAwIDAgMC0uMDYyTDUuMTE1IDMuOTY2YTEuMyAxLjMgMCAwIDEtLjIyLS40NzJjLS4wNC0uMzYuMjgyLS40NzguNTkxLS40NzhoMi43NzljLjMzMiAwIC40MTYuMTEyLjU3NC4zODJ6Ii8+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/KNDX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenKNDX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenKNDX', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0n5btt2._.js.map