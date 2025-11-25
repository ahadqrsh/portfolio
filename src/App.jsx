import React from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb
} from 'react-icons/si';
import ContactForm from './components/ContactForm ';
function App() {
  const skills = [
    { name: 'Frontend', percentage: 80 },
    { name: 'Backend', percentage: 60 },
    { name: 'Database Management', percentage: 40 }
  ];

  const technologies = [
    { name: 'HTML', icon: <SiHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <SiCss3 className="text-blue-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'React', icon: <SiReact className="text-cyan-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-black to-cyan-900 py-16 px-4"
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text Content */}
            <div className="text-center lg:text-left lg:w-1/2">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
              >
                Ahad <span className="text-cyan-400">Qureshi</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg md:text-xl lg:text-2xl text-cyan-300 mb-6"
              >
                Full Stack Developer
              </motion.p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="h-1 bg-cyan-400 mx-auto lg:mx-0"
              ></motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="mt-6"
              >
                <p className="text-gray-300 text-sm md:text-base">
                  Passionate about creating amazing web experiences
                </p>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="lg:w-1/2 flex justify-center"
            >
              <div className="relative">
                {/* Image Container */}
                <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-4 border-cyan-400 p-2 bg-gradient-to-br from-cyan-500 to-cyan-800 shadow-2xl shadow-cyan-500/30">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden border-2 border-cyan-300">
                    {/* Replace this div with your actual image */}
                    
                    <div className="text-center text-cyan-200">
                      <div className="text-4xl mb-2">📸</div>
                      <p className="text-sm">Your Photo Here</p>
                   <img
                  src="ahad.jpg"
                  alt="Ahad Qureshi - Full Stack Developer"
                  className="w-full h-fit object-cover rounded-full"
                />
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-400 rounded-full opacity-70"
                ></motion.div>
                <motion.div
                  animate={{
                    rotate: -360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity }
                  }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-300 rounded-full opacity-60"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-400"
          >
            Skills & Expertise
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-900 rounded-lg p-6 shadow-lg border border-cyan-900"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-semibold text-cyan-300">{skill.name}</span>
                  <span className="text-cyan-400 font-bold">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="bg-gradient-to-r from-cyan-400 to-cyan-600 h-4 rounded-full shadow-lg shadow-cyan-500/50"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-400"
          >
            Technologies I Work With
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                className="bg-black border border-cyan-400 rounded-xl p-6 text-center hover:bg-cyan-900/20 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <span className="text-cyan-300 font-medium text-lg">{tech.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Passionate Full Stack Developer with expertise in modern web technologies.
            I specialize in creating responsive, user-friendly applications using cutting-edge tools and frameworks.
            With strong frontend skills and growing backend expertise, I'm always eager to learn new technologies
            and take on challenging projects that push my boundaries.
          </motion.p>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">80%</div>
              <div className="text-gray-300">Frontend Mastery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">60%</div>
              <div className="text-gray-300">Backend Development</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">Database Management</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    <ContactForm/>
    {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-gradient-to-r from-cyan-900 to-black py-8 px-4 border-t border-cyan-400"
      >
        <div className="container mx-auto text-center">
          <p className="text-cyan-300 text-lg">
            &copy; 2024 Ahad Qureshi. All rights reserved.
          </p>
          <p className="text-cyan-200 mt-2">
            Full Stack Developer | React | Node.js | MongoDB
          </p>
        </div>
      </motion.footer>
    </>
  );
  
}

export default App;