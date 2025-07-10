import { ReactNode } from "react";

export function ContactCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-[#23242b] bg-[#15161a]/80 p-5 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
