import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiJavascript, SiMysql } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-sky-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'Databases', icon: <FaDatabase className="text-purple-500" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-100 dark:bg-zinc-900 py-15 px-6">
     <div data-aos="fade-up" data-aos-duration="1000">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-12">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg shadow bg-white dark:bg-zinc-800 hover:scale-105 transition"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
