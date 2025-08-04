import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100"
    >
     <div className="container flex flex-col md:flex-row gap-10 px-6">

        <div className="text-center items-center justify-center flex flex-col">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </p>
        </div>

        <div className="">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Mail className="text-purple-600" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <a
                    href="mailto:ankitssingh1912@gmail.com"
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    ankitssingh1912@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Phone</p>
                  <a
                    href="tel:+919112711270"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    +91 9112711270
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <MapPin className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Location</p>
                  <p className="text-gray-600">Pune, Maharashtra</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Ankit-0040/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                >
                  <Github className="text-gray-700" size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ankit-singh-89b55917b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="text-blue-600" size={20} />
                </a>
                <a
                  href="mailto:ankitssingh1912@example.com"
                  className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
