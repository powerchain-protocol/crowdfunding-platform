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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/wallets/WalletPortal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>WalletPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#3E71F8',
                d: 'M19.582 15.424a4.84 4.84 0 0 0 0-6.848s-5.053-5.217-5.74-5.513c-.033-.014-.03-.025-.028-.035.004-.018.006-.028-.28-.028a.775.775 0 0 0-.774.775v2.017c0 .428.347.775.775.775h.84c1.782 0 3.227 1.23 3.227 3.012v4.842c0 1.783-1.445 3.012-3.228 3.012h-.84a.775.775 0 0 0-.774.774v2.018a.774.774 0 0 0 1.081.712c.688-.297 5.74-5.513 5.74-5.513M11.24 5.793V3.775a.776.776 0 0 0-1.081-.712c-.688.297-5.74 5.513-5.74 5.513a4.84 4.84 0 0 0 0 6.848s5.052 5.217 5.74 5.513a.773.773 0 0 0 1.08-.712v-2.017a.775.775 0 0 0-.774-.775h-.84c-1.782 0-3.227-1.23-3.227-3.012V9.579c0-1.783 1.445-3.012 3.228-3.012h.84a.775.775 0 0 0 .774-.774',
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
                d: 'M19.582 15.424a4.84 4.84 0 0 0 0-6.848s-5.053-5.217-5.74-5.513c-.033-.014-.03-.025-.028-.035.004-.018.006-.028-.28-.028a.775.775 0 0 0-.774.775v2.017c0 .428.347.775.775.775h.84c1.782 0 3.227 1.23 3.227 3.012v4.842c0 1.783-1.445 3.012-3.228 3.012h-.84a.775.775 0 0 0-.774.774v2.018a.774.774 0 0 0 1.081.712c.688-.297 5.74-5.513 5.74-5.513M11.24 5.793V3.775a.776.776 0 0 0-1.081-.712c-.688.297-5.74 5.513-5.74 5.513a4.84 4.84 0 0 0 0 6.848s5.052 5.217 5.74 5.513a.773.773 0 0 0 1.08-.712v-2.017a.775.775 0 0 0-.774-.775h-.84c-1.782 0-3.227-1.23-3.227-3.012V9.579c0-1.783 1.445-3.012 3.228-3.012h.84a.775.775 0 0 0 .774-.774',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#portal__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#3E71F8',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M18.74 15.043a4.304 4.304 0 0 0 0-6.086s-4.492-4.638-5.103-4.9c-.029-.013-.027-.024-.025-.032.004-.016.006-.025-.248-.025a.69.69 0 0 0-.688.689v1.793c0 .38.308.689.688.689h.746c1.585 0 2.87 1.092 2.87 2.677v4.304c0 1.585-1.285 2.677-2.87 2.677h-.746a.69.69 0 0 0-.688.689v1.793a.69.69 0 0 0 .96.633c.612-.264 5.103-4.9 5.103-4.9m-7.416-8.56V4.688a.688.688 0 0 0-.96-.633c-.612.264-5.103 4.9-5.103 4.9a4.304 4.304 0 0 0 0 6.087s4.49 4.637 5.102 4.9a.688.688 0 0 0 .961-.632v-1.793a.69.69 0 0 0-.688-.689H9.89c-1.585 0-2.87-1.092-2.87-2.677V9.848c0-1.584 1.285-2.677 2.87-2.677h.746c.38 0 .688-.308.688-.689',
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
                        id: 'portal__a'
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
 * @component @name WalletPortal
 * @description Web3Icon for WalletPortal
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMzRTcxRjgiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjU4MiAxNS40MjRhNC44NCA0Ljg0IDAgMCAwIDAtNi44NDhzLTUuMDUzLTUuMjE3LTUuNzQtNS41MTNjLS4wMzMtLjAxNC0uMDMtLjAyNS0uMDI4LS4wMzUuMDA0LS4wMTguMDA2LS4wMjgtLjI4LS4wMjhhLjc3NS43NzUgMCAwIDAtLjc3NC43NzV2Mi4wMTdjMCAuNDI4LjM0Ny43NzUuNzc1Ljc3NWguODRjMS43ODIgMCAzLjIyNyAxLjIzIDMuMjI3IDMuMDEydjQuODQyYzAgMS43ODMtMS40NDUgMy4wMTItMy4yMjggMy4wMTJoLS44NGEuNzc1Ljc3NSAwIDAgMC0uNzc0Ljc3NHYyLjAxOGEuNzc0Ljc3NCAwIDAgMCAxLjA4MS43MTJjLjY4OC0uMjk3IDUuNzQtNS41MTMgNS43NC01LjUxM00xMS4yNCA1Ljc5M1YzLjc3NWEuNzc2Ljc3NiAwIDAgMC0xLjA4MS0uNzEyYy0uNjg4LjI5Ny01Ljc0IDUuNTEzLTUuNzQgNS41MTNhNC44NCA0Ljg0IDAgMCAwIDAgNi44NDhzNS4wNTIgNS4yMTcgNS43NCA1LjUxM2EuNzczLjc3MyAwIDAgMCAxLjA4LS43MTJ2LTIuMDE3YS43NzUuNzc1IDAgMCAwLS43NzQtLjc3NWgtLjg0Yy0xLjc4MiAwLTMuMjI3LTEuMjMtMy4yMjctMy4wMTJWOS41NzljMC0xLjc4MyAxLjQ0NS0zLjAxMiAzLjIyOC0zLjAxMmguODRhLjc3NS43NzUgMCAwIDAgLjc3NC0uNzc0IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjU4MiAxNS40MjRhNC44NCA0Ljg0IDAgMCAwIDAtNi44NDhzLTUuMDUzLTUuMjE3LTUuNzQtNS41MTNjLS4wMzMtLjAxNC0uMDMtLjAyNS0uMDI4LS4wMzUuMDA0LS4wMTguMDA2LS4wMjgtLjI4LS4wMjhhLjc3NS43NzUgMCAwIDAtLjc3NC43NzV2Mi4wMTdjMCAuNDI4LjM0Ny43NzUuNzc1Ljc3NWguODRjMS43ODIgMCAzLjIyNyAxLjIzIDMuMjI3IDMuMDEydjQuODQyYzAgMS43ODMtMS40NDUgMy4wMTItMy4yMjggMy4wMTJoLS44NGEuNzc1Ljc3NSAwIDAgMC0uNzc0Ljc3NHYyLjAxOGEuNzc0Ljc3NCAwIDAgMCAxLjA4MS43MTJjLjY4OC0uMjk3IDUuNzQtNS41MTMgNS43NC01LjUxM00xMS4yNCA1Ljc5M1YzLjc3NWEuNzc2Ljc3NiAwIDAgMC0xLjA4MS0uNzEyYy0uNjg4LjI5Ny01Ljc0IDUuNTEzLTUuNzQgNS41MTNhNC44NCA0Ljg0IDAgMCAwIDAgNi44NDhzNS4wNTIgNS4yMTcgNS43NCA1LjUxM2EuNzczLjc3MyAwIDAgMCAxLjA4LS43MTJ2LTIuMDE3YS43NzUuNzc1IDAgMCAwLS43NzQtLjc3NWgtLjg0Yy0xLjc4MiAwLTMuMjI3LTEuMjMtMy4yMjctMy4wMTJWOS41NzljMC0xLjc4MyAxLjQ0NS0zLjAxMiAzLjIyOC0zLjAxMmguODRhLjc3NS43NzUgMCAwIDAgLjc3NC0uNzc0IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNwb3J0YWxfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjM0U3MUY4IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE4Ljc0IDE1LjA0M2E0LjMwNCA0LjMwNCAwIDAgMCAwLTYuMDg2cy00LjQ5Mi00LjYzOC01LjEwMy00LjljLS4wMjktLjAxMy0uMDI3LS4wMjQtLjAyNS0uMDMyLjAwNC0uMDE2LjAwNi0uMDI1LS4yNDgtLjAyNWEuNjkuNjkgMCAwIDAtLjY4OC42ODl2MS43OTNjMCAuMzguMzA4LjY4OS42ODguNjg5aC43NDZjMS41ODUgMCAyLjg3IDEuMDkyIDIuODcgMi42Nzd2NC4zMDRjMCAxLjU4NS0xLjI4NSAyLjY3Ny0yLjg3IDIuNjc3aC0uNzQ2YS42OS42OSAwIDAgMC0uNjg4LjY4OXYxLjc5M2EuNjkuNjkgMCAwIDAgLjk2LjYzM2MuNjEyLS4yNjQgNS4xMDMtNC45IDUuMTAzLTQuOW0tNy40MTYtOC41NlY0LjY4OGEuNjg4LjY4OCAwIDAgMC0uOTYtLjYzM2MtLjYxMi4yNjQtNS4xMDMgNC45LTUuMTAzIDQuOWE0LjMwNCA0LjMwNCAwIDAgMCAwIDYuMDg3czQuNDkgNC42MzcgNS4xMDIgNC45YS42ODguNjg4IDAgMCAwIC45NjEtLjYzMnYtMS43OTNhLjY5LjY5IDAgMCAwLS42ODgtLjY4OUg5Ljg5Yy0xLjU4NSAwLTIuODctMS4wOTItMi44Ny0yLjY3N1Y5Ljg0OGMwLTEuNTg0IDEuMjg1LTIuNjc3IDIuODctMi42NzdoLjc0NmMuMzggMCAuNjg4LS4zMDguNjg4LS42ODkiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJwb3J0YWxfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/wallets/portal
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const WalletPortal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('WalletPortal', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0kn4px2._.js.map