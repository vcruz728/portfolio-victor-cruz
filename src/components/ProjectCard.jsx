// src/components/ProjectCard.jsx
export default function ProjectCard({ title, tech, image, github, live }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg transition hover:scale-105 bg-white dark:bg-zinc-800">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm mb-2">{tech.join(" • ")}</p>
        <div className="flex gap-4">
          <a href={github} target="_blank" className="text-blue-600 underline">GitHub</a>
          <a href={live} target="_blank" className="text-green-600 underline">Live</a>
        </div>
      </div>
    </div>
  );
}
