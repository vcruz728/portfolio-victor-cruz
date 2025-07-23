// components/ProjectCard.jsx
export default function ProjectCard({ title, description, link }) {
  return (
    <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
      <a href={link} className="text-blue-500 mt-2 inline-block" target="_blank">
        View Project
      </a>
    </div>
  );
}
