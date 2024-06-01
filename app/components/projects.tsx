import Image from 'next/image';
import project1 from './public/file.jpg'; 
import project2 from './public/file.jpg';  
import project3 from './public/file.jpg'; 

const projects = [
  {
    image: project1,
    title: 'Project One',
    description: 'This is a brief description of Project One.',
  },
  {
    image: project2,
    title: 'Project Two',
    description: 'This is a brief description of Project Two.',
  },
  {
    image: project3,
    title: 'Project Three',
    description: 'This is a brief description of Project Three.',
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
