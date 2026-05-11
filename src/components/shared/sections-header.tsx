import { cn } from "@/lib/utils";
import type React from "react";

export function SectionTitle({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <h2
      className={cn(
        "mb-8 px-4 max-w-2xl font-Baloo font-bold text-gray-100 text-2xl lg:text-4xl text-center uppercase",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function SectionIcons({
  src,
  alt,
  icon,
  title,
}: {
  src?: string;
  alt?: string;
  icon?: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="z-10 translate-x-14">
      <img src={src} alt={alt} className="opacity-50 -translate-x-16" />
      <div className="flex justify-evenly items-center w-44 font-Inter font-semibold text-main text-sm">
        {icon} {title}
      </div>
    </div>
  );
}
