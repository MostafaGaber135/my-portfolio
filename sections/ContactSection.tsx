"use client";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ContactCard } from "@/components/ui/ContactCard";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationPin } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const serviceID = "service_xfz0mrv";
  const templateID = "template_4lckofe";
  const publicKey = "htcNkndhmM3DrQiG2";

  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const directions = [
      { x: -120, y: 60, rotate: -18 }, 
      { x: 120, y: 60, rotate: 18 }, 
      { x: 0, y: 100, rotate: -12 },
      { x: 0, y: -100, rotate: 12 }, 
    ];
    cardRefs.current.forEach((el, idx) => {
      if (!el) return;
      gsap.fromTo(
        el,
        {
          opacity: 0,
          scale: 0.75,
          x: directions[idx]?.x ?? 0,
          y: directions[idx]?.y ?? 0,
          rotate: directions[idx]?.rotate ?? 0,
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          rotate: 0,
          duration: 0.75,
          delay: idx * 0.18,
          ease: "expo.out",
          scrollTrigger: {
            trigger: "#contact",
            start: "top 75%",
            once: true,
          },
        }
      );
    });
  }, []);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSent(false);
    setLoading(true);

    try {
      await emailjs.sendForm(serviceID, templateID, formRef.current!, publicKey);
      setSent(true);
      if (formRef.current) formRef.current.reset();
    } catch (err) {
      setError("Something went wrong, try again later.");
    }
    setLoading(false);
  };

  return (
    <section className="w-full py-16 px-4 bg-transparent scroll-mt-20" id="contact">
      <h2 className="text-5xl font-extrabold text-center mb-2">
        <span className="text-white">Get In </span>
        <span className="text-[#5593f7]">Touch</span>
      </h2>
      <p className="text-gray-300 text-lg text-center mb-10">
        Let’s discuss your next project or explore opportunities to work together
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto h-full min-h-[520px]">
        <ContactCard
          className="h-full flex flex-col"
          ref={el => { cardRefs.current[0] = el!; }}
        >
          <div className="text-white text-lg font-bold mb-4">Send a Message</div>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col flex-1 justify-between h-full"
          >
            <div className="flex flex-col gap-4 flex-1">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full rounded-md bg-transparent border border-[#23242b] px-3 py-2 text-white focus:border-[#5593f7] outline-none transition"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Email Address</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full rounded-md bg-transparent border border-[#23242b] px-3 py-2 text-white focus:border-[#5593f7] outline-none transition"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  className="w-full rounded-md bg-transparent border border-[#23242b] px-3 py-2 text-white focus:border-[#5593f7] outline-none transition resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-[#5593f7] text-white font-semibold py-2.5 rounded-md flex items-center justify-center gap-2 mt-2 hover:bg-[#407bce] transition
                  ${loading ? "opacity-50 cursor-not-allowed" : ""}
                `}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {loading ? "Sending..." : "Send Message"}
              </button>
              {sent && <div className="text-green-500 mt-2 text-sm text-center">Message sent successfully!</div>}
              {error && <div className="text-red-500 mt-2 text-sm text-center">{error}</div>}
            </div>
          </form>
        </ContactCard>

        <div className="flex flex-col gap-7">
          <ContactCard ref={el => { cardRefs.current[1] = el!; }}>
            <div className="text-white text-lg font-bold mb-4">Contact Information</div>
            <div className="flex items-center gap-2 mb-2 text-gray-300">
              <MdEmail className="text-[#5593f7] text-2xl" />
              <span>Email</span>
              <span className="ml-auto text-white font-semibold">mostafagaber123456@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 mb-2 text-gray-300">
              <MdPhone className="text-[#5593f7] text-2xl" />
              <span>Phone</span>
              <span className="ml-auto text-white font-semibold">(+20) 1028237890</span>
            </div>
            <div className="flex items-center gap-2 mb-2 text-gray-300">
              <MdLocationPin className="text-[#5593f7] text-2xl" />
              <span>Location</span>
              <span className="ml-auto text-white font-semibold">Cairo, Egypt</span>
            </div>
          </ContactCard>
          <ContactCard ref={el => { cardRefs.current[2] = el!; }}>
            <div className="text-white text-lg font-bold mb-4">Connect With Me</div>
            <div className="flex gap-3 mb-3">
              <a href="https://github.com/MostafaGaber135" target="_blank" rel="noopener noreferrer" className="bg-[#22232a] rounded-full p-3 text-white hover:scale-110 transition">
                <FaGithub className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/mostafagaber135/" target="_blank" rel="noopener noreferrer" className="bg-[#22232a] rounded-full p-3 text-white hover:scale-110 transition">
                <FaLinkedinIn className="text-xl" />
              </a>
              <a href="mailto:mostafagaber123456@gmail.com" className="bg-[#22232a] rounded-full p-3 text-white hover:scale-110 transition">
                <MdEmail className="text-xl" />
              </a>
            </div>
            <div className="bg-[#22232a] text-gray-300 text-sm rounded-lg p-3">
              Availability: Open to new opportunities and collaborations. Currently based in Cairo, Egypt and available for remote work.
            </div>
          </ContactCard>
          <ContactCard ref={el => { cardRefs.current[3] = el!; }}>
            <div className="text-white text-lg font-bold mb-3">Let's Work Together</div>
            <div className="text-gray-300 text-sm mb-1">I'm always interested in new projects and opportunities. Whether you need:</div>
            <ul className="list-disc pl-6 text-gray-300 text-sm space-y-1">
              <li>Frontend development for web applications</li>
              <li>React/Next.js project development</li>
              <li>Code review and optimization</li>
            </ul>
          </ContactCard>
        </div>
      </div>
    </section>
  );
}
