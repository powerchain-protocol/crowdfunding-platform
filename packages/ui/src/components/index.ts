/**
 * Canonical shared UI component surface for PowerChain apps.
 *
 * shadcn-generated components belong in this directory so all applications
 * consume one implementation instead of maintaining app-local copies.
 */
export { Button, type ButtonProps, type ButtonSize, type ButtonVariant } from "./button";
export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardIcon, CardStatusDot, CardTitle } from "./card";
export { Input } from "./input";
export { Textarea } from "./textarea";
export { Label } from "./label";
export { Badge, type BadgeProps, type BadgeVariant } from "./badge";
export { Separator, type SeparatorProps } from "./separator";
export { Skeleton } from "./skeleton";
export { Progress, type ProgressProps } from "./progress";
export { Alert, AlertDescription, AlertTitle, type AlertProps, type AlertVariant } from "./alert";
export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./table";
export { EmptyState, type EmptyStateProps } from "./empty-state";
export { FormField, type FormFieldProps } from "./form-field";

/* Existing domain-aware primitives remain available from the shared component alias. */
export { Counter } from "../counter";
export { Countdown } from "../countdown";
export { FundingProgress } from "../funding-progress";
