
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React JS', level: 91, color: 'bg-blue-500' },
    { name: 'React Native', level: 80, color: 'bg-green-500' },
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    { name: 'MYSQL', level: 90, color: 'bg-orange-500' },
    { name: 'TypeScript', level: 70, color: 'bg-blue-600' },
    { name: 'HTML/CSS', level: 98, color: 'bg-orange-500' },
    { name: 'Tailwind CSS', level: 95, color: 'bg-cyan-500' },
    { name: 'Figma', level: 88, color: 'bg-purple-500' },
    { name: 'Postman', level: 95, color: 'bg-red-500' },
  ];

  const tools = [
    'React JS', 'JavaScript', "Redux Toolkit" , "HTML/CSS", 'React Native', 'Tailwind CSS', 'Node.js',
    'Git', 'Figma', 'Webpack', 'Vite', 'JIRA', "VS Code", 'Postman', 'MySQL', 'REST APIs', 'React Native', 'Bitbucket'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills Progress Bars */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:opacity-80`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Tools & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={tool}
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center group hover:scale-105"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-3">Always Learning</h4>
                <p className="text-gray-600">
                  I'm constantly exploring new technologies and staying up-to-date with 
                  the latest trends in web development to deliver cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
