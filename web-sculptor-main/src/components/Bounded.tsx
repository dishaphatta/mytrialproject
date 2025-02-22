import React from "react";
import clsx from "clsx";

type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
}

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
    ({ as: Comp = "section", className, children, ...restProps }, ref) => {
        return (
            <Comp 
            ref={ref} className={clsx("px-4 py-10 md:px-6 md:py-4 lg:py-8", className)}
            {...restProps}>
                <div className="mx-auto w-full max-w-[90%]">
                    {children}
                </div>
                
            </Comp>
        )
    }
)

Bounded.displayName = "Bounded"

export default Bounded