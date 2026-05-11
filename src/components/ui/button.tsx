import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// eslint-disable-next-line react-refresh/only-export-components
export const buttonVariants = cva(
  "inline-flex justify-center items-center gap-2 px-4 py-2 rounded-[1.25rem] font-Baloo font-medium text-secondary text-base whitespace-nowrap" +
    "ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 " +
    "focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 " +
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-main  hover:bg-main/90 disabled:bg-[#D3D3D3] ",

        secondary: "bg-[#D3D3D3] cursor-not-allowed ",

        outline:
          "border border-main bg-transparent text-main hover:bg-main hover:text-white disabled:border-[#D3D3D3] disabled:text-[#D3D3D3] rounded-full ",
        ghost: "hover:bg-accent hover:text-accent-foreground",

        link: "text-main underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 w-xs  font-extrabold  ",
        lg: "h-12  w-40 rounded-full font-semibold font-Rubik",
        sm: "h-10  w-20  font-bold",
        icon: "h-10 w-10",
      },
      loading: {
        true: "cursor-wait",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      loading: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean; // explicit prop for TS ergonomics
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading = false, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, loading, className }))}
        disabled={loading || props.disabled}
        {...props}
      >
        <span className="flex items-center gap-2">
          {children}
          {loading && <LoaderCircle className="animate-spin" aria-hidden="true" />}
        </span>
      </Comp>
    );
  },
);
Button.displayName = "Button";
