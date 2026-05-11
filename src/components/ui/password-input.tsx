import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Lock } from "lucide-react";
import { forwardRef, useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | boolean;
  showIcon?: boolean;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    { id, name, label, placeholder = "Password", showIcon = true, error, className, ...rest },
    ref,
  ) => {
    const [show, setShow] = useState(false);
    const [focused, setFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Always keep hasValue in sync with the actual DOM value
    useEffect(() => {
      const input = inputRef.current;
      if (!input) return;

      const updateValue = () => setHasValue(input.value.length > 0);

      // Initial check
      updateValue();

      // Listen to all changes (covers controlled, uncontrolled, typing, clear, etc.)
      input.addEventListener("input", updateValue);
      input.addEventListener("change", updateValue);

      return () => {
        input.removeEventListener("input", updateValue);
        input.removeEventListener("change", updateValue);
      };
    }, []);

    // Also respect controlled value prop if provided
    useEffect(() => {
      if (rest.value !== undefined) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setHasValue(String(rest.value ?? "").length > 0);
      }
    }, [rest.value]);

    const isFloating = focused || hasValue;

    // Merge external ref with our internal one
    const mergedRef = (node: HTMLInputElement | null) => {
      inputRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
    };

    return (
      <div className="space-y-1">
        {label && (
          <label htmlFor={id} className="block font-medium text-dark dark:text-light text-sm">
            {label}
          </label>
        )}

        <div className="relative">
          <Input
            {...rest}
            ref={mergedRef}
            id={id}
            name={name}
            type={show ? "text" : "password"}
            placeholder=" " // Required for peer-placeholder-shown
            className={cn(
              "peer bg-transparent px-4 pt-5 pb-2 border rounded-[1.25rem] outline-none w-full h-12 font-Baloo font-normal text-dark dark:text-light text-base transition-all",
              "placeholder:transparent",
              "focus-visible:ring-[3px] focus-visible:ring-main/50 focus-visible:border-main",
              "disabled:cursor-not-allowed disabled:opacity-50",
              error
                ? "border-destructive focus-visible:ring-destructive/40"
                : "border-dark dark:border-light focus-visible:border-main",
              "pr-12", // space for toggle
              className,
            )}
            onFocus={(e) => {
              setFocused(true);
              rest.onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              rest.onBlur?.(e);
            }}
          />

          {/* Floating Label + Lock Icon */}
          <label
            htmlFor={id}
            className={cn(
              "absolute top-1/2 rtl:right-4 ltr:left-4 flex items-center gap-2",
              "-translate-y-1/2 pointer-events-none",
              "font-Baloo font-normal transition-all duration-200 ease-out",
              "peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base",
              "peer-focus:top-3 peer-focus:text-xs",
              isFloating && "top-3 text-xs",
              focused && !error && "text-main",
              !focused && !error && "text-dark dark:text-light",
              error && "text-destructive",
            )}
          >
            {showIcon && <Lock className="w-4 h-4" />}
            <span className="leading-none capitalize">{placeholder}</span>
          </label>

          {/* Toggle Button */}
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className={cn(
              "absolute top-1/2 ltr:right-3 rtl:left-3 -translate-y-1/2 cursor-pointer transition-colors",
              focused ? "text-main" : "text-dark dark:text-light hover:text-main",
            )}
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
          </button>
        </div>

        {error && typeof error === "string" && <p className="text-destructive text-sm">{error}</p>}
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
