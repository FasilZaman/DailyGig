"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx } from "clsx";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref" | "children"> {
    variant?: "primary" | "accent" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg" | "icon";
    isLoading?: boolean;
    children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-sm uppercase text-sm";

        // Industrial Look: solid colors, sharp or slightly rounded corners, maybe slight tracking for tech feel.
        const variants = {
            primary: "bg-primary text-white hover:bg-[#152860] focus-visible:ring-primary shadow-sm border border-transparent", // Darker navy hover
            accent: "bg-accent text-white hover:bg-blue-600 focus-visible:ring-accent shadow-sm border border-transparent",
            secondary: "bg-white text-primary hover:bg-stone-100 focus-visible:ring-white shadow-sm border border-transparent",
            outline: "border-2 border-primary text-primary hover:bg-primary/10 focus-visible:ring-primary bg-transparent",
            ghost: "text-primary hover:bg-primary/10 focus-visible:ring-primary",
        };

        const sizes = {
            sm: "h-8 px-3 text-xs",
            md: "h-11 px-5",
            lg: "h-14 px-8 text-base",
            icon: "h-10 w-10",
        };

        return (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.96 }}
                className={clsx(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {isLoading ? (
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                ) : null}
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
