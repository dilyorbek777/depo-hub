import { LoaderIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const loaderVariants = cva("text-muted-foreground animate-spin text-primary", {
    variants: {
        size: {
            default: "h-4 w-4",
            sm: "h-2 w-2",
            lg: "h-6 w-6",
            xl: "h-10 w-10",
        },
    },
    defaultVariants: {
        size: "default",
    },
});

interface LoaderProps extends VariantProps<typeof loaderVariants> { }

export const Loader = ({ size }: LoaderProps) => {
    return <LoaderIcon className={cn(loaderVariants({ size }))} />;
};