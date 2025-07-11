import { ReactNode, forwardRef } from "react";

export const ContactCard = forwardRef<HTMLDivElement, { children: ReactNode; className?: string }>(
  ({ children, className = "" }, ref) => (
    <div
      ref={ref}
      className={`
        opacity-0
        scale-75
        ${className}
        rounded-2xl border border-[#23242b] bg-[#15161a]/80 p-5 shadow-sm
        will-change-transform
      `}
    >
      {children}
    </div>
  )
);
ContactCard.displayName = "ContactCard";
