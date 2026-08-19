export function publicId(prefix: string, value: string): string { return `${prefix}_${value.replace(/[^A-Za-z0-9]/g, "").slice(0, 24)}`; }
