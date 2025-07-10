import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function SocialsAndScroll() {
  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8">
      <div className="flex gap-6 sm:gap-8">
        <a
          href="https://github.com/MostafaGaber135"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#191a1e] rounded-full p-4 sm:p-6 flex items-center justify-center hover:scale-110 transition shadow-md"
        >
          <FaGithub className="text-white text-2xl sm:text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/mostafagaber135/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#191a1e] rounded-full p-4 sm:p-6 flex items-center justify-center hover:scale-110 transition shadow-md"
        >
          <FaLinkedinIn className="text-white text-2xl sm:text-3xl" />
        </a>
        <a
          href="mailto:mostafagaber123456@gmail.com"
          className="bg-[#191a1e] rounded-full p-4 sm:p-6 flex items-center justify-center hover:scale-110 transition shadow-md"
        >
          <MdEmail className="text-white text-2xl sm:text-3xl" />
        </a>
      </div>
      <div className="flex flex-col items-center mt-2 mb-4">
        <div className="w-8 h-12 rounded-full border-2 border-[#5593f7] flex items-center justify-center">
          <div className="w-1 h-4 bg-[#5593f7] rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}
