import React from "react";

interface BadgeProps extends React.ComponentPropsWithoutRef<"span"> {
  size?: 'sm' | 'md' | 'lg';
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, className, size = 'md', ...props }: BadgeProps, forwardedRef) => {
    const sizeClasses = {
      sm: "px-2 py-1 text-xs",
      md: "px-3 py-1.5 text-sm",
      lg: "px-4 py-2 text-lg",
    };

    return (
      <span
        ref={forwardedRef}
        className={`z-10 block w-fit rounded-lg border border-primary/20 bg-primary/10 font-semibold uppercase leading-4 tracking-tighter ${sizeClasses[size]} ${className}`}
        {...props}
      >
        <span className="bg-gradient-to-b from-primary to-primary/90 bg-clip-text text-transparent">
          {children}
        </span>
      </span>
    )
  },
)

Badge.displayName = "Badge"

export { Badge, type BadgeProps };

