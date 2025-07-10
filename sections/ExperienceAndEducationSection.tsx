import { FaBriefcase, FaUserGraduate } from "react-icons/fa";
import { ExpEduCard } from "@/components/ui/ExpEduCard";
import { LiaCertificateSolid } from "react-icons/lia";
import { FcTodoList } from "react-icons/fc";
import { BsCalendar2DateFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";

export function ExperienceAndEducationSection() {
  return (
    <section className="w-full py-16 px-4 bg-transparent" id="experience">
      <h2 className="text-5xl font-extrabold text-center mb-2">
        <span className="text-white">Experience &</span>
        <span className="text-[#5593f7]"> Education</span>
      </h2>
      <p className="text-gray-300 text-lg text-center mb-10">
        My professional journey and academic achievements
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="flex flex-col gap-7">
          <div>
            <div className="flex items-center gap-2 mb-4 text-white text-2xl font-bold">
              <FaBriefcase className="text-[#5593f7] text-2xl" />
              Professional Experience
            </div>
            <ExpEduCard>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[#3a84e9] font-bold text-lg">
                    Front-end and Cross-Platform Mobile Developer
                  </div>
                  <div className="text-white font-semibold text-sm">
                    ITI-Sohag Branch
                  </div>
                </div>
              
              </div>
              <div className="flex items-center gap-4 text-gray-400 text-xs mt-2 mb-2">
                <BsCalendar2DateFill /> <span> Dec 2024 - Apr 2025</span>
                <IoLocationSharp />
                <span> Sohag, Egypt</span>
              </div>
              <div className="text-gray-300 text-sm mb-2">
                Currently working on developing modern web and mobile
                applications using React, React Native, and other cutting-edge
                technologies.
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "React Native",
                  "TypeScript",
                  "Mobile Development",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#23242b] text-white text-xs px-3 py-1 rounded-full font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ExpEduCard>
            <ExpEduCard className="mt-5">
              <div className="text-[#3a84e9] font-bold text-lg">
                Summer Training Project
              </div>
              <div className="text-white font-semibold text-sm">
                Online, Banque Misr
              </div>
              <div className="flex items-center gap-4 text-gray-400 text-xs mt-2 mb-2">
              <BsCalendar2DateFill /><span>June 2021 - July 2021</span>
              <AiOutlineGlobal />  <span>Online</span>
              </div>
              <div className="text-gray-300 text-sm mb-2">
                Participated in an intensive summer training program focusing on
                financial technology and digital banking solutions.
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Financial Technology",
                  "Digital Banking",
                  "Project Management",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#23242b] text-white text-xs px-3 py-1 rounded-full font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ExpEduCard>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4 text-white text-2xl font-bold">
              <FcTodoList className="text-[#5593f7] text-2xl" />
              Extracurricular Activities
            </div>
            <ExpEduCard>
              <div>
                <span className="text-white font-bold">
                  Public Relations member
                </span>
                <span className="bg-[#23242b] text-white text-xs px-3 py-1 rounded-full ml-2 font-semibold">
                  2022 — 2024
                </span>
              </div>
              <div className="text-gray-400 text-sm mb-2">VOP</div>
            </ExpEduCard>
            <ExpEduCard className="mt-3">
              <div>
                <span className="text-white font-bold">IT member</span>
                <span className="bg-[#23242b] text-white text-xs px-3 py-1 rounded-full ml-2 font-semibold">
                  2021 — 2023
                </span>
              </div>
              <div className="text-gray-400 text-sm mb-2">Enactus EELU</div>
            </ExpEduCard>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <div>
            <div className="flex items-center gap-2 mb-4 text-white text-2xl font-bold">
              <FaUserGraduate className="text-[#5593f7] text-2xl" />
              Education
            </div>
            <ExpEduCard>
              <div className="text-[#3a84e9] font-bold text-lg">
                Bachelor's Degree in Computer and Information Technology
              </div>
              <div className="text-white font-semibold text-sm">
                Egyptian E-Learning University, Asyut Branch
              </div>
              <div className="flex items-center gap-4 text-gray-400 text-xs mt-2 mb-2">
              <BsCalendar2DateFill />  <span>2020-2024</span>
              <IoLocationSharp /><span>Asyut, Egypt</span>
              </div>
              <div className="flex flex-wrap gap-4 mb-2 text-xs">
                <div>
                  <div className="text-gray-400 font-semibold mb-3">GPA</div>
                  <span className="bg-[#23242b] text-white px-3 py-1  rounded-full font-semibold">
                    3.41(B+)
                  </span>
                </div>
                <div></div>
              </div>
              <div className="text-gray-400 mt-3 text-xs font-semibold">
                Graduation Project
              </div>
              <div className="flex gap-2 mt-2">
                <span className="bg-[#23242b] text-white text-xs px-3 py-2 rounded-full font-semibold">
                  RoadX
                </span>
                <span className="bg-[#5593f7] text-white px-3 py-1 rounded-full font-bold">
                  A+
                </span>
              </div>
            </ExpEduCard>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4 text-white text-2xl font-bold">
              <LiaCertificateSolid className="text-[#5593f7] text-2xl" />
              Courses & Certificates
            </div>
            <ExpEduCard>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-white font-bold">
                    Master Git & GitHub: Essential Skills for Developers
                  </div>
                  <div className="text-gray-400 text-sm">Udemy</div>
                </div>
                <span className="bg-[#23242b] text-white px-3 py-1 rounded-full font-semibold ml-4">
                  2024
                </span>
              </div>
            </ExpEduCard>
            <ExpEduCard className="mt-3">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-white font-bold">
                    Introduction to Web Technologies
                  </div>
                  <div className="text-gray-400 text-sm">
                    Information Technology Institute (ITI)
                  </div>
                </div>
                <span className="bg-[#23242b] text-white px-3 py-1 rounded-full font-semibold ml-4">
                  2023
                </span>
              </div>
            </ExpEduCard>
            <ExpEduCard className="mt-3">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-white font-bold">IC3 (Offline)</div>
                  <div className="text-gray-400 text-sm">
                    Faculty of Computers and Information-Assiut
                  </div>
                </div>
                <span className="bg-[#23242b] text-white px-3 py-1 rounded-full font-semibold ml-4">
                  2020
                </span>
              </div>
            </ExpEduCard>
          </div>
        </div>
      </div>
    </section>
  );
}
