import { SkillCard } from "@/components/ui/SkillCard";
import {
  FaCode,
  FaPalette,
  FaDatabase,
  FaUserCog,
  FaLightbulb,
} from "react-icons/fa";
import { AiFillTool } from "react-icons/ai";

export function TechnicalSkillsSection() {
  return (
    <section className="w-full py-6 px-4 bg-transparent scroll-mt-20" id="skills">
      <h2 className="text-5xl font-extrabold text-center mb-3">
        <span className="text-white">Technical </span>
        <span className="text-[#5593f7]">Skills</span>
      </h2>
      <p className="text-gray-300 text-xl text-center mb-12 font-normal">
        A comprehensive toolkit for building modern, scalable web applications
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto mb-14">
        <SkillCard
          icon={<FaCode className="text-[#2764c8]" />}
          title="Frontend Development"
          skills={[
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
          ]}
        />
        <SkillCard
          icon={<FaPalette className="text-[#a989fa]" />}
          title="UI/UX & Styling"
          skills={[
            "Material UI (MUI)",
            "DaisyUI",
            "Tailwind CSS",
            "Bootstrap",
            "Sass",
          ]}
        />
        <SkillCard
          icon={<FaDatabase className="text-[#22c1c3]" />}
          title="Backend & Database"
          skills={["Firebase", "Supabase", "API Integration", "Postman"]}
        />
        <SkillCard
          icon={<AiFillTool className="text-[#ff9800]" />}
          title="Tools & Workflow"
          skills={["Git", "GitHub", "Netlify", "Microsoft Office"]}
        />
        <SkillCard
          icon={<FaUserCog className="text-[#a569bd]" />}
          title="Soft Skills"
          skills={[
            "Communication",
            "Problem Solving",
            "Collaboration",
            "Teamwork",
          ]}
        />
        <SkillCard
          icon={<FaLightbulb className="text-[#43b581]" />}
          title="Programming Concepts"
          skills={["OOP", "Responsive Design", "Accessibility", "Performance"]}
        />
      </div>

      <div className="text-center mt-10">
        <h3 className="text-2xl font-bold text-white mb-8">Core Expertise</h3>
        <div className="flex flex-wrap justify-center gap-5">
          {[
            "React",
            "TypeScript",
            "Next.js",
            "Tailwind CSS",
            "Material UI",
            "Firebase",
          ].map((exp) => (
            <span
              key={exp}
              className="
              bg-[#5593f7] text-white text-lg font-semibold px-8 py-3 rounded-full shadow
              transition hover:scale-105 duration-200
              cursor-default
            "
            >
              {exp}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
