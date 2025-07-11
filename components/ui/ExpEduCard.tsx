import { ReactNode, forwardRef } from "react";

export const ExpEduCard = forwardRef<HTMLDivElement, { children: ReactNode; className?: string }>(
  ({ children, className = "" }, ref) => (
    <div
      ref={ref}
      className={`
        opacity-0 scale-95 translate-y-12
        rounded-2xl border border-[#23242b] bg-[#15161a]/80
        p-5 shadow-sm transition
        hover:shadow-lg hover:border-[#5593f7]/50
        ${className}
      `}
    >
      {children}
    </div>
  )
);
ExpEduCard.displayName = "ExpEduCard";
