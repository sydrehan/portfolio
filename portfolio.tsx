"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Inter, Roboto_Slab } from "next/font/google"
import Image from "next/image"
import { FaGithub, FaLinkedin, FaTwitter, FaTimes, FaDownload, FaEye } from "react-icons/fa"
import { SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiGit } from "react-icons/si"
import { GrTechnology } from "react-icons/gr"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const robotoSlab = Roboto_Slab({ subsets: ["latin"], variable: "--font-heading" })

const iconColors = {
  JavaScript: "#F7DF1E",
  React: "#61DAFB",
  "Node.js": "#339933",
  "Express.js": "#000000",
  MongoDB: "#47A248",
  "Tailwind CSS": "#06B6D4",
  Git: "#F05032",
  "C/C++": "#00599C",
}

const projects = [
  {
    title: "Innovation Nexus - GITS",
    description: "A digital platform showcasing cutting-edge innovations, built with React, Vite, and Tailwind CSS.",
    details:
      "Innovation Nexus is a responsive web application that serves as a hub for showcasing technological innovations. Built with React for a dynamic UI, Vite for rapid development, and Tailwind CSS for sleek styling, this project demonstrates modern web development practices and efficient performance optimization techniques.",
  },
  {
    title: "Knowledge Hub - GITS-Charcha",
    description: "An interactive learning platform connecting students and educators across digital realms.",
    details:
      "GITS-Charcha is a comprehensive Learning Management System developed using the MERN stack. It features real-time collaboration tools, course management capabilities, and an intuitive user interface. This project showcases advanced backend architecture with Node.js and Express, coupled with a responsive React frontend.",
  },
  {
    title: "Streaming Reimagined - Netflix Clone",
    description: "A feature-rich streaming service clone built with modern web technologies.",
    details:
      "This Netflix clone project is a full-stack application that replicates core functionalities of a video streaming platform. It utilizes React for the frontend, Node.js for the backend, and integrates with a cloud-based media service for content delivery. Key features include user authentication, content recommendation algorithms, and responsive video playback.",
  },
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [showResumeOptions, setShowResumeOptions] = useState(false)

  const handleViewResume = () => {
    window.open("/path-to-your-resume.pdf", "_blank", "noopener,noreferrer")
    setShowResumeOptions(false)
  }

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/path-to-your-resume.pdf"
    link.download = "Rehan_Raza_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setShowResumeOptions(false)
  }

  return (
    <div className={`${inter.variable} ${robotoSlab.variable} font-sans bg-gray-50 text-gray-900 min-h-screen`}>
      <header className="bg-white shadow-sm py-8 px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-center text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Rehan Raza
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-center mt-4 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Full Stack Developer | Web Solutions Architect
        </motion.p>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.section
          className="mb-16 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-heading font-bold mb-6 text-gray-800">About Me</h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-600">
              As a seasoned Full Stack Developer, I specialize in creating efficient, scalable, and user-friendly web
              applications. With expertise in both frontend and backend technologies, I bring a comprehensive approach
              to every project, ensuring seamless integration and optimal performance.
            </p>
            <div className="relative">
              <motion.button
                className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowResumeOptions(!showResumeOptions)}
              >
                Resume Options
              </motion.button>
              {showResumeOptions && (
                <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <button
                      onClick={handleViewResume}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      role="menuitem"
                    >
                      <FaEye className="inline mr-2" /> View Resume
                    </button>
                    <button
                      onClick={handleDownloadResume}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      role="menuitem"
                    >
                      <FaDownload className="inline mr-2" /> Download Resume
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <motion.div
            className="md:w-1/3 w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image src="/placeholder.svg" alt="Rehan Raza" width={256} height={256} className="object-cover" />
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <h2 className="text-3xl font-heading font-bold mb-6 text-gray-800">Technical Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { skill: "JavaScript", icon: SiJavascript },
              { skill: "React", icon: SiReact },
              { skill: "Node.js", icon: SiNodedotjs },
              { skill: "Express.js", icon: SiExpress },
              { skill: "MongoDB", icon: SiMongodb },
              { skill: "Tailwind CSS", icon: SiTailwindcss },
              { skill: "Git", icon: SiGit },
              { skill: "C/C++", icon: GrTechnology },
            ].map(({ skill, icon: Icon }) => (
              <motion.div
                key={skill}
                className="bg-white rounded-lg p-4 shadow-md text-center flex flex-col items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Icon className="text-4xl mb-2" style={{ color: iconColors[skill] }} />
                <p className="text-gray-700">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <h2 className="text-3xl font-heading font-bold mb-6 text-gray-800">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
              >
                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <h2 className="text-3xl font-heading font-bold mb-6 text-gray-800">Contact Information</h2>
          <p className="text-lg mb-4 text-gray-600">
            I'm always open to new opportunities and collaborations. Feel free to reach out:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>📧 rehanrazasayed@mail.com</li>
            <li>📱 +91 8529995587</li>
            <li>📍 Udaipur, Rajasthan, India</li>
          </ul>
          <div className="mt-6 flex space-x-4">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <FaGithub size={30} className="text-gray-700 hover:text-blue-600" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <FaLinkedin size={30} className="text-gray-700 hover:text-blue-600" />
            </motion.a>
            <motion.a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <FaTwitter size={30} className="text-gray-700 hover:text-blue-600" />
            </motion.a>
          </div>
        </motion.section>
      </main>

      <footer className="bg-gray-100 text-center py-4 mt-12">
        <p className="text-sm text-gray-600">&copy; 2023 Rehan Raza. All rights reserved.</p>
        <p className="text-xs mt-2 italic text-gray-500">"Bridging technology and creativity through code."</p>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg max-w-md w-full"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">{selectedProject.title}</h3>
                <button onClick={() => setSelectedProject(null)} className="text-gray-500 hover:text-gray-700">
                  <FaTimes />
                </button>
              </div>
              <p className="text-gray-600 mb-4">{selectedProject.details}</p>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

