import { useController } from "react-hook-form";
import type { Control, FieldValues, Path, PathValue } from "react-hook-form";
import { Button } from "./button";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type Props<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  min: number;
  max: number;
  unit?: string;
};

export default function NumberPicker<T extends FieldValues>({
  name,
  control,
  min,
  max,
  unit,
}: Props<T>) {
  const defaultVal = Math.floor((min + max) / 2) as PathValue<T, Path<T>>;

  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    defaultValue: defaultVal,
  });

  const numericValue = typeof value === "number" ? value : defaultVal;

  const numbers = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  const currentIndex = numbers.indexOf(numericValue);

  const visible = numbers.slice(
    Math.max(currentIndex - 3, 0),
    Math.min(currentIndex + 4, numbers.length),
  );

  // PRESS & HOLD LOGIC
  const intervalRef = useRef<number | null>(null);

  const startHold = (type: "inc" | "dec") => {
    // One press
    if (type === "inc" && numericValue < max) onChange(numericValue + 1);
    if (type === "dec" && numericValue > min) onChange(numericValue - 1);

    // Hold on button
    intervalRef.current = window.setTimeout(() => {
      intervalRef.current = window.setInterval(() => {
        onChange((prev: number) => {
          if (type === "inc") return prev < max ? prev + 1 : prev;
          return prev > min ? prev - 1 : prev;
        });
      }, 80);
    }, 300);
  };

  const stopHold = () => {
    if (intervalRef.current) {
      clearTimeout(intervalRef.current);
      clearInterval(intervalRef.current);
    }
  };

  return (
    // Picker wrapper
    <div className="my-8">
      {/* Picker */}
      <div>
        {/* Unit */}
        {unit && <div className="text-main capitalize">{unit}</div>}

        {/* Numbers container */}
        <div className="flex justify-center items-center gap-2 h-16 text-dark dark:text-light">
          {visible.map((num) => {
            const diff = Math.abs(num - numericValue);
            return (
              <div
                key={num}
                className={cn(
                  "transition-all duration-75 ease-in-out",
                  diff === 0
                    ? "num-scale-0 text-main"
                    : diff === 1
                      ? "num-scale-1"
                      : diff === 2
                        ? "num-scale-2"
                        : "num-scale-3 text-dark dark:text-light",
                )}
              >
                {num}
              </div>
            );
          })}
        </div>

        <div className="text-main">▲</div>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        {/* DECREASE */}
        <Button
          type="button"
          className="bg-main w-10 text-light"
          disabled={numericValue <= min}
          onMouseDown={() => startHold("dec")}
          onMouseUp={stopHold}
          onMouseLeave={stopHold}
        >
          −
        </Button>

        {/* INCREASE */}
        <Button
          type="button"
          className="bg-main text-light w-10"
          disabled={numericValue >= max}
          onMouseDown={() => startHold("inc")}
          onMouseUp={stopHold}
          onMouseLeave={stopHold}
        >
          +
        </Button>
      </div>
    </div>
  );
}
