import { useState } from 'react'
import './App.css'
import { projects } from './data/projects';
import ProjectCard from './components/ProjectCard';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">My Portfolio Victor Cruz</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </main>
    </>
  );
}

export default App
