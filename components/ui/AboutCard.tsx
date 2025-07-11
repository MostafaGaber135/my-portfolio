import { ReactNode, forwardRef } from "react";

interface AboutCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
}

export const AboutCard = forwardRef<HTMLDivElement, AboutCardProps>(
  ({ icon, title, children, className = "" }, ref) => (
    <div
      ref={ref}
      className={`
        opacity-0 scale-[0.97]
        rounded-2xl border border-[#22232a] bg-[#131417]/70
        p-4 sm:p-6 shadow-md transition
        hover:shadow-2xl
        hover:border-[#3b3c43]
        hover:-translate-y-1
        duration-200
        w-full min-w-0
        ${className}
      `}
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="bg-[#22232a] p-3 rounded-xl text-[#5593f7] text-2xl flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-white text-2xl font-bold">{title}</h3>
      </div>
      <div className="text-gray-300 text-lg">{children}</div>
    </div>
  )
);
AboutCard.displayName = "AboutCard";
