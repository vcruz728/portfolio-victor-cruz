import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100 dark:bg-zinc-900 py-15 px-6">
     <div data-aos="fade-up" data-aos-duration="1000">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </div>
    </section>
  );
}
