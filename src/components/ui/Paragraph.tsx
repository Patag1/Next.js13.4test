import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";

const ParagraphVariants = cva(
    "max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center",
    {
        variants: {
            size: {
                default: 'text-base sm:text-lg',
                sm: 'text-sm sm-text-base'
            }
        },
        defaultVariants: {
            size: 'default'
        },
    }
)

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof ParagraphVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(({
    className, size, children, ...props
}, ref) => {
    return <p
            ref={ref}
            {...props}
            className={cn(ParagraphVariants({size, className}))}>
                {children}
            </p>
})

Paragraph.displayName = 'Paragraph';

export default Paragraph;
