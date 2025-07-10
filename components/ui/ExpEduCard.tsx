import { ReactNode } from "react";

export function ExpEduCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`
        rounded-2xl border border-[#23242b] bg-[#15161a]/80
        p-5 shadow-sm transition
        hover:shadow-lg hover:border-[#5593f7]/50
        ${className}
      `}
    >
      {children}
    </div>
  );
}