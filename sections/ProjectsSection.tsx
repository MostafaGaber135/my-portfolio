import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
 
  {
    color: "#2ac9a0",
    title: "CozyKart",
    description: "User-friendly e-commerce website for buying furniture and home decor. Offers a wide range of stylish and comfortable products to help users create a cozy living space.",
    category: "Ecommerce",
    tags: ["React", "Tailwind CSS", "DaisyUI", "JavaScript"],
    codeUrl: "https://github.com/MostafaGaber135/CozyKart.git",
  },
  {
    color: "#d443d6",
    title: "ITI Market",
    description: "E-commerce platform offering a wide range of products, from electronics and gadgets to home essentials and fashion. Clean, responsive design with modern UI.",
    category: "E-commerce",
    tags: ["HTML", "CSS", "JavaScript"],
    codeUrl: "https://github.com/MostafaGaber135/ITI_1st.git",
    liveUrl: "https://iti-market.netlify.app/",
  },
  {
    color: "#ffc940",
    title: "MovieFlix",
    description: "React-based movie browser that lets users search, explore, and view details of movies using the TMDB API. Features favorites list and responsive, clean UI.",
    category: "Entertainment",
    tags: ["React", "Tailwind CSS", "DaisyUI"],
    codeUrl: "https://github.com/MostafaGaber135/MovieFlix.git",
    liveUrl: "https://movieflixyz.netlify.app/",
  },
  {
    color: "#49a5fd",
    title: "CodeMap",
    description: "Modern web application designed to organize and simplify the learning journey for developers. Offers well-structured learning paths and roadmaps in various programming fields.",
    category: "Education",
    tags: ["Next.js", "Material UI", "Supabase"],
    codeUrl: "https://github.com/MostafaGaber135/CodeMap.git",
    liveUrl: "https://code-map-psi.vercel.app/",
  },
];

export function ProjectsSection() {
  return (
    <section className="w-full py-16 px-4 bg-transparent" id="projects">
      <h2 className="text-5xl font-extrabold text-center mb-3">
         <span className="text-white">Featured </span>
         <span className="text-[#5593f7]">Projects</span>
      </h2>
      <p className="text-gray-300 text-xl text-center mb-10 font-normal max-w-2xl mx-auto">
        A showcase of my development work, from educational platforms to e-commerce solutions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <a
          href="https://github.com/MostafaGaber135"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#5593f7] text-[#5593f7] px-6 py-2 rounded-xl font-medium hover:bg-[#5593f7] hover:text-white transition duration-200"
        >
          View All Projects on GitHub
        </a>
      </div>
    </section>
  );
}
