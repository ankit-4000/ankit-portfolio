
import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm a creative UI developer with a passion for building beautiful, 
              functional, and user-centered digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 3 years of experience in frontend development, I specialize in 
                creating responsive, accessible, and performant web applications. I believe 
                that great design is not just about how it looks, but how it works.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                My approach combines technical expertise with creative problem-solving 
                to deliver solutions that not only meet business requirements but also 
                provide exceptional user experiences.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="text-purple-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800">Clean Code</h3>
                  <p className="text-sm text-gray-600">Writing maintainable, scalable code</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette className="text-blue-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800">Design Focus</h3>
                  <p className="text-sm text-gray-600">Pixel-perfect implementations</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="text-green-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800">Performance</h3>
                  <p className="text-sm text-gray-600">Optimized user experiences</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-gray-600 italic">
                    "Design is not just what it looks like and feels like. 
                    Design is how it works."
                  </p>
                  <p className="text-sm text-gray-500 mt-2">- Steve Jobs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
