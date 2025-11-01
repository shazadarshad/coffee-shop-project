'use client';

import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiMongodb,
  SiFirebase,
  SiFramer,
} from 'react-icons/si';

const technologies = [
  { name: 'HTML5', icon: SiHtml5, level: 95 },
  { name: 'CSS3', icon: SiCss3, level: 95 },
  { name: 'JavaScript', icon: SiJavascript, level: 90 },
  { name: 'TypeScript', icon: SiTypescript, level: 85 },
  { name: 'React', icon: SiReact, level: 90 },
  { name: 'Next.js', icon: SiNextdotjs, level: 85 },
  { name: 'Node.js', icon: SiNodedotjs, level: 80 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 95 },
  { name: 'Figma', icon: SiFigma, level: 85 },
  { name: 'Git', icon: SiGit, level: 90 },
  { name: 'MongoDB', icon: SiMongodb, level: 75 },
  { name: 'Firebase', icon: SiFirebase, level: 80 },
  { name: 'Framer Motion', icon: SiFramer, level: 90 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-gradient-to-b from-[#161620] via-[#181825] to-[#161620]"
    >
      {/* Subtle Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f5ff]/40 to-transparent" />

      <div className="mx-auto max-w-7xl container-padding py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16 lg:mb-20 text-center"
        >
          <div className="space-y-4 mb-8">
            <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl tracking-tight">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00f5ff]/60" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#00f5ff]/60" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#9333ea]/60" />
            </div>
          </div>
          <p className="text-base text-gray-400 lg:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Technologies and tools I work with to create exceptional web experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
        >
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -10 }}
                className="group relative"
              >
                <div className="glass relative flex h-40 flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 p-8 transition-all hover:border-[#00f5ff]/50 hover:bg-[#00f5ff]/10 hover:shadow-xl hover:shadow-[#00f5ff]/20">
                  <Icon
                    className="h-10 w-10 text-[#00f5ff] transition-all group-hover:scale-110 group-hover:text-[#9333ea]"
                    size={40}
                  />
                  <span className="text-sm font-semibold text-gray-300 transition-colors group-hover:text-white text-center">
                    {tech.name}
                  </span>

                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-2xl bg-gray-800/50">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-[#00f5ff] to-[#9333ea]"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Subtle Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9333ea]/40 to-transparent" />
    </section>
  );
}

