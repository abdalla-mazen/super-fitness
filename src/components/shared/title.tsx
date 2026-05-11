import type { ReactNode } from "react";

declare type Props = {
  icon: ReactNode;
  title: string;
};

export default function Title({ icon, title }: Props) {
  return (
    <div className="flex items-center gap-2.5 text-main">
      {icon}
      <h1 className="capitalize font-semibold text-sm">{title}</h1>
    </div>
  );
}
