import { ReactNode } from "react";

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  skills: string[];
  className?: string;
}

export function SkillCard({ icon, title, skills, className = "" }: SkillCardProps) {
  return (
    <div
      className={`
        rounded-2xl border border-[#22232a] bg-[#181920]/80
        p-6 shadow-md transition
        hover:shadow-2xl
        hover:border-[#3b3c43]
        hover:-translate-y-1
        duration-200
        ${className}
      `}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-[#1a2540] p-3 rounded-xl text-2xl flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-white text-xl font-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
         <span
         key={idx}
         className="
           bg-[#181920] text-gray-200 text-xs px-3 py-1 rounded-full font-semibold border border-[#23242b]
           hover:bg-[#5593f7] hover:text-white
           transition duration-150
           cursor-pointer
         "
       >
         {skill}
       </span>
        ))}
      </div>
    </div>
  );
}