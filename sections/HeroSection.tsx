"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SocialsAndScroll } from "@/components/ui/SocialsAndScroll";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export function HeroSection() {
  const title1Ref = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (title1Ref.current)
      tl.from(title1Ref.current, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

    if (title2Ref.current)
      tl.from(
        title2Ref.current,
        { y: 80, opacity: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );

    if (descRef.current)
      tl.from(
        descRef.current,
        { y: 40, opacity: 0, duration: 0.7, ease: "power2.out" },
        "-=0.4"
      );

    if (infoRef.current)
      tl.from(
        infoRef.current,
        { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );

    if (btnsRef.current)
      tl.from(
        btnsRef.current,
        { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <section
        className="flex flex-col items-center justify-center min-h-[75vh] py-12 bg-transparent scroll-mt-20"
        id="home"
      >
        <h1 className="text-center">
          <span
            ref={title1Ref}
            className="text-[#5593f7] font-extrabold text-7xl sm:text-8xl block leading-tight"
          >
            Mostafa
          </span>
          <span
            ref={title2Ref}
            className="text-white font-extrabold text-7xl sm:text-8xl block leading-tight"
          >
            Gaber Ahmed
          </span>
        </h1>

        <p
          ref={descRef}
          className="mt-6 text-gray-300 text-lg sm:text-xl text-center max-w-3xl font-medium"
        >
          Frontend Developer passionate about building
          <span className="text-[#5593f7] font-bold"> responsive</span>,
          <span className="text-[#5593f7] font-bold"> accessible</span>, and
          <span className="text-[#5593f7] font-bold"> maintainable</span> web
          applications
        </p>

        <div
          ref={infoRef}
          className="flex flex-wrap gap-2 items-center justify-center mt-6 text-gray-400 text-base"
        >
          <span role="img" aria-label="location">
            <IoLocationSharp />
          </span>
          Cairo, Egypt &nbsp;•&nbsp;
          <span role="img" aria-label="email">
            <MdEmail />
          </span>
          <span className="text-white">mostafagaber123456@gmail.com</span>
          &nbsp;•&nbsp;
          <span role="img" aria-label="phone">
            <FaPhoneAlt />
          </span>
          <span className="text-white">(+20) 1028237890</span>
        </div>

        <div
          ref={btnsRef}
          className="flex gap-4 mt-8"
        >
          <a
            href="#projects"
            className="
              bg-[#5593f7]
              text-white
              px-8 py-3
              rounded-xl font-medium
              shadow
              hover:shadow-[0_0_24px_0_#5593f7]
              hover:bg-[#5593f7]
              transition
              duration-300
            "
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="border border-[#5593f7] text-[#5593f7] px-8 py-3 rounded-2xl font-medium hover:bg-[#5593f7] hover:text-white transition"
          >
            Get In Touch
          </a>
        </div>
      </section>
      <SocialsAndScroll />
    </>
  );
}
