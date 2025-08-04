
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for managing online store operations with real-time analytics and inventory management.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      tech: ['React JS', 'Javascript', 'CSS', 'MySQL', 'Context API'],
      codeUrl: 'https://github.com/Ankit-0040/app-ecommerce'
    },
    {
      title: 'LinkedIn Clone',
      description: 'A collaborative platform mimicking LinkedIn features, including user profiles, connections, and real-time messaging.',
       image: 'https://imgs.search.brave.com/R0SJ7T_GmoH77y9tLK9PRG-CL3UgfNhYC3wDzCfj1_I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuam9ic2Nhbi5j/by9ibG9nL3VwbG9h/ZHMvTGlua2VkSW4t/SGVhZGxpbmUtMzAw/eDI4OS53ZWJw?w=500&h=300&fit=crop', // professional social
      tech: ['React JS', 'JavaScript', 'Redux Toolkit', 'CSS'],
      codeUrl: 'https://github.com/Ankit-0040/LinkedInClone__React'
    },
    {
      title: 'Weather App',
      description: 'A beautiful and responsive weather application with location-based forecasts, interactive maps, and detailed weather insights.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      tech: ['React', 'OpenWeather API', 'CSS3', 'Geolocation'],
      codeUrl: 'https://github.com/Ankit-0040/WeatherApp'
    },
    {
      title: 'BookMart',
      description: 'A modern e-commerce platform for buying and selling books, featuring user authentication, product listings, and a shopping cart.',
       image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=300&fit=crop', // books
      tech: ['React Native', 'Mobile App Development', 'Tailwind CSS', 'Python'],
      codeUrl: 'https://github.com/Ankit-0040/BookMartFrontend2'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* <a
                      href={project.demoUrl}
                      className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="text-gray-700" />
                    </a> */}
                    <a
                      href={project.codeUrl}
                      className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="text-gray-700" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/Ankit-0040/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Github size={20} />
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
