import { forwardRef } from "react";
import { FiGithub } from "react-icons/fi";
import { RiShareBoxLine } from "react-icons/ri";

interface ProjectCardProps {
  color: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  codeUrl: string;
  liveUrl?: string;
  className?: string;
}

export const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  (
    {
      color,
      title,
      description,
      category,
      tags,
      codeUrl,
      liveUrl,
      className = "",
    },
    ref
  ) => (
    <div
      ref={ref}
      className={`
        opacity-0
        rounded-2xl border border-[#23242b] bg-[#15161a]/70
        p-6 shadow-md
        transition-all duration-300
        flex flex-col h-full
        group
        hover:shadow-[0_0_32px_2px_${color}]
        hover:border-[${color}]
        hover:-translate-y-1
        hover:bg-[#191b22]/80
        cursor-pointer
        ${className}
      `}
      style={{
        borderColor: "#23242b",
      }}
    >
      <div className="h-1 w-full rounded-full mb-5" style={{ background: color }} />
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white text-lg font-bold">{title}</h3>
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: color,
            color: "#fff",
            opacity: 0.93,
            fontSize: "0.85rem",
          }}
        >
          {category}
        </span>
      </div>
      <p className="text-gray-300 mb-5 min-h-[56px]">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-[#23242b] text-gray-200 text-xs px-3 py-1 rounded-full font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-2 mt-auto pt-4">
        <a
          href={codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#181920] text-gray-200 px-0 py-0 rounded-xl font-medium flex items-center justify-center gap-2 h-10 border border-[#23242b] hover:bg-[#23242b] transition"
        >
          <FiGithub />
          Code
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#5593f7] text-white h-10 rounded-xl flex items-center justify-center gap-2 font-medium hover:bg-[#407bce] transition"
            style={{ boxShadow: "0 2px 18px 0 #5593f750" }}
          >
            <RiShareBoxLine />
             Live
          </a>
        )}
      </div>
    </div>
  )
);
ProjectCard.displayName = "ProjectCard";
