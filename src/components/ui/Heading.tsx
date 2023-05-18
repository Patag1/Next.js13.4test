import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";

const headingVariants = cva(
    "text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tight",
    {
        variants: {
            size: {
                default: 'text-4xl md:text-5xl lg:text-6xl',
                lg: 'text-5xl md:text-6xl lg:text-7xl',
                sm: 'text-2xl md:text-3xl lg:text-4xl'
            }
        },
        defaultVariants: {
            size: 'default'
        },
    }
)

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({
    className, size, children, ...props
}, ref) => {
    return <h1
            ref={ref}
            {...props}
            className={cn(headingVariants({size, className}))}>
                {children}
            </h1>
})

Heading.displayName = 'Heading';

export default Heading;
