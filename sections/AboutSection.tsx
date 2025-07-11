"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaUser, FaGraduationCap } from "react-icons/fa";
import { AboutCard } from "@/components/ui/AboutCard";
import { MdLanguage } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const highlightsRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    if (!cardsRef.current) return;
    gsap.to(cardsRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top 75%",
        once: true,
      },
    });

    if (!highlightsRef.current) return;
    gsap.to(highlightsRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.11,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#key-highlights",
        start: "top 85%",
        once: true,
      },
    });
  }, []);

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 scroll-mt-20" id="about">
      <div className="text-center mb-14">
        <h2 className="text-5xl font-extrabold mb-4">
          <span className="text-white">About </span>
          <span className="text-[#5593f7]">Me</span>
        </h2>
        <p className="text-gray-300 text-xl font-normal max-w-3xl mx-auto">
          Frontend Development graduate from Egyptian E-Learning University with
          a passion
          <br />
          for creating exceptional digital experiences
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1 flex flex-col gap-10">
          {[
            {
              icon: <FaUser />,
              title: "Profile",
              children: (
                <>
                  Passionate Frontend Developer with expertise in modern web
                  technologies. I specialize in React, TypeScript, and creating
                  responsive, accessible web applications that provide exceptional
                  user experiences.
                </>
              ),
            },
            {
              icon: <FaGraduationCap />,
              title: "Education",
              children: (
                <>
                  <div>
                    <span className="font-bold text-white">Bachelor's Degree</span> in
                    Computer and Information Technology <br />
                    Egyptian E-Learning University, Asyut Branch (2020-2024)
                  </div>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    <span className="bg-[#22232a] text-white text-xs px-3 py-1 rounded-full font-semibold">
                      GPA: 3.41(B+)
                    </span>
                  </div>
                </>
              ),
            },
            {
              icon: <MdLanguage />,
              title: "Languages",
              children: (
                <>
                  <div className="flex items-center justify-between mt-2">
                    <div className="text-white">Arabic</div>
                    <span className="bg-[#5593f7] text-white text-xs px-3 py-1 rounded-full font-semibold">
                      Native
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="text-white">English</div>
                    <span className="bg-[#22232a] text-white text-xs px-3 py-1 rounded-full font-semibold">
                      B2
                    </span>
                  </div>
                </>
              ),
            },
          ].map((props, idx) => (
            <AboutCard
              key={props.title}
              {...props}
              ref={el => { cardsRef.current[idx] = el!; }}
            />
          ))}
        </div>
        <div className="flex-1">
          <div
            className="
              rounded-2xl border border-[#22232a] bg-[#131417]/70
              p-8 shadow-md
              transition
              hover:shadow-2xl
              hover:border-[#3b3c43]
              hover:-translate-y-1
              duration-200
            "
            id="key-highlights"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Key Highlights
            </h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-3">
              {[
                <>
                  <span className="font-bold text-white">Current Role: </span>
                  Front-end Developer
                </>,
                <>
                  <span className="font-bold text-white">Experience: </span>
                  Specialized in React, TypeScript, and modern frontend frameworks
                </>,
                <>
                  <span className="font-bold text-white">Focus: </span>
                  Building responsive, accessible, and maintainable web applications
                </>,
                <>
                  <span className="font-bold text-white">Passion: </span>
                  Creating exceptional user experiences through clean, modern design
                </>,
                <>
                  <span className="font-bold text-white">Activities: </span>
                  Public Relations member at VOP, IT member at Enactus EELU
                </>
              ].map((content, idx) => (
                <li
                  key={idx}
                  ref={el => { highlightsRef.current[idx] = el!; }}
                  className="opacity-0 scale-[0.97]"
                >
                  {content}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
