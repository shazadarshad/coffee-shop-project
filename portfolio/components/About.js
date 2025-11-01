'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';

const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Framer Motion', icon: '✨' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Figma', icon: '🎭' },
  { name: 'UI/UX Design', icon: '💡' },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-[#141420] via-[#161620] to-[#141420]"
    >
      {/* Subtle Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f5ff]/40 to-transparent" />

      <div className="mx-auto max-w-7xl container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid gap-16 lg:grid-cols-2 lg:gap-24 py-16 sm:py-20"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#00f5ff] via-[#9333ea] to-[#c026d3] opacity-20 blur-xl animate-pulse" />
              <div className="relative overflow-hidden rounded-2xl border-2 border-white/10 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm p-2 shadow-2xl">
                <div className="relative h-96 w-full max-w-[320px] mx-auto overflow-hidden rounded-xl bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    👨‍💻
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8 lg:space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl tracking-tight">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="h-0.5 w-24 bg-gradient-to-r from-[#00f5ff]/60 to-[#9333ea]/60 rounded-full" />
            </div>
            <div className="space-y-8">
              <p className="text-base leading-relaxed text-gray-300 lg:text-lg font-normal">
                I&apos;m Aarav Desai, a passionate front-end developer with a love for creating
                beautiful, functional web experiences. With expertise in modern web technologies and
                a keen eye for design, I transform ideas into pixel-perfect digital solutions.
              </p>
              <p className="text-base leading-relaxed text-gray-300 lg:text-lg font-normal">
                My journey in web development started with curiosity and has evolved into a career
                focused on building user-centric applications that make a difference. I specialize
                in React, Next.js, and modern CSS frameworks, always staying up-to-date with the
                latest industry trends.
              </p>
            </div>

            {/* Skill Tags */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 lg:gap-5 pt-4"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="glass group flex items-center justify-center gap-2.5 rounded-lg border border-white/10 px-4 py-2.5 transition-all hover:border-[#00f5ff]/50 hover:bg-[#00f5ff]/10"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Download Resume Button */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex w-fit items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#00f5ff] to-[#0066ff] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#00f5ff]/50 transition-all hover:shadow-xl hover:shadow-[#00f5ff]/70"
            >
              <FiDownload className="transition-transform group-hover:translate-y-0.5" size={18} />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9333ea]/40 to-transparent" />
    </section>
  );
}

