import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  icon?: React.ReactNode;
}

const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", error, className, icon, placeholder, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const hasValue = !!props.value || !!props.defaultValue;

    const isFloating = isFocused || hasValue;

    return (
      <div className="relative w-full">
        <input
          type={type}
          placeholder=" " // Required trick for floating label to work properly
          className={cn(
            "peer bg-transparent px-4 pt-5 pb-2 border rounded-[1.25rem] outline-none w-[310px] h-12 transition-all",
            "text-base font-Baloo font-normal text-light",
            "placeholder:transparent", // Hide native placeholder
            "focus-visible:ring-[3px] focus-visible:ring-main/50 focus:border-main",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error
              ? "border-destructive ring-destructive/20 text-destructive"
              : "border-dark dark:border-light",
            className,
          )}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          ref={ref}
          {...props}
        />

        {/* Floating Label + Icon */}
        <label
          className={cn(
            "top-1/2 rtl:right-4 ltr:left-4 absolute flex items-center gap-2 -translate-y-1/2 pointer-events-none",
            "text-sm font-Baloo font-normal transition-all duration-200 ease-out",
            "peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base",
            "peer-focus:top-3 peer-focus:text-xs peer-focus:text-main",
            isFloating && "top-3 text-xs",
            error ? "text-destructive" : "text-dark dark:text-light",
          )}
        >
          {icon && <span className="w-4 h-4">{icon}</span>}
          <span className={icon ? "mt-0.5 capitalize" : "capitalize"}>{placeholder}</span>
        </label>

        {/* Optional bottom focus/error indicator */}
        {error && <span className="bottom-0 absolute inset-x-0 bg-destructive h-0.5" />}
      </div>
    );
  },
);

TextInput.displayName = "TextInput";

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <TextInput ref={ref} {...props} />;
});
Input.displayName = "Input";

export { Input };
