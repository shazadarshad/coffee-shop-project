'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (projectId) => {
    setSelectedProject(projectId);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const project = selectedProject ? projects.find((p) => p.id === selectedProject) : null;

  return (
    <>
      <section
        id="projects"
        className="relative bg-gradient-to-b from-[#141420] via-[#161620] to-[#141420]"
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
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00f5ff]/60" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#00f5ff]/60" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#9333ea]/60" />
              </div>
            </div>
            <p className="text-base text-gray-400 lg:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              A collection of my recent work showcasing modern web development
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid gap-8 sm:gap-12 lg:gap-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -10 }}
                onClick={() => openModal(project.id)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl"
              >
                {/* Project Card */}
                <div className="glass relative h-full border border-white/10 rounded-2xl overflow-hidden transition-all hover:border-[#00f5ff]/50 hover:shadow-2xl hover:shadow-[#00f5ff]/20">
                  {/* Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-gray-800">
                    <div className="absolute inset-0 flex items-center justify-center text-6xl text-gray-600">
                      🎨
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141420]/95 via-[#141420]/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col p-8 space-y-6">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <h3 className="text-xl font-bold text-white leading-tight tracking-tight flex-1">
                        {project.title}
                      </h3>
                      <span className="shrink-0 rounded-full bg-gradient-to-r from-[#00f5ff]/20 to-[#9333ea]/20 border border-[#00f5ff]/30 px-4 py-2 text-xs font-semibold text-[#00f5ff] shadow-lg shadow-[#00f5ff]/20">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-base leading-relaxed text-gray-300 flex-grow font-normal">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3 pt-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-white/10 border border-white/20 px-4 py-2 text-xs text-gray-300 font-medium shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="rounded-full bg-white/10 border border-white/20 px-4 py-2 text-xs text-gray-300 font-medium shadow-sm">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center gap-5 bg-[#141420]/98 backdrop-blur-xl rounded-2xl"
                    >
                      <motion.button
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                        className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#00f5ff] to-[#0066ff] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#00f5ff]/50 transition-all hover:shadow-2xl hover:shadow-[#00f5ff]/70"
                      >
                        <span className="relative z-10 flex items-center gap-2.5">
                          <FiGithub size={18} />
                          <span>GitHub</span>
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[#0066ff] to-[#00f5ff]"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveUrl, '_blank');
                        }}
                        className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#9333ea] to-[#c026d3] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#9333ea]/50 transition-all hover:shadow-2xl hover:shadow-[#9333ea]/70"
                      >
                        <span className="relative z-10 flex items-center gap-2.5">
                          <FiExternalLink size={18} />
                          <span>Live Demo</span>
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[#c026d3] to-[#9333ea]"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Subtle Bottom Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9333ea]/40 to-transparent" />
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {project && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 p-8 sm:p-12"
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 rounded-full p-2 text-gray-400 transition-colors hover:text-white hover:bg-white/10"
                aria-label="Close modal"
              >
                <FiX size={24} />
              </button>

              <div className="space-y-6">
                <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center text-8xl text-gray-600">
                    🎨
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                    <span className="rounded-full bg-gradient-to-r from-[#00f5ff]/20 to-[#9333ea]/20 border border-[#00f5ff]/30 px-4 py-2 text-sm font-semibold text-[#00f5ff]">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-lg leading-relaxed text-gray-300">
                    {project.longDescription || project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm text-gray-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-5 pt-6">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative flex flex-1 items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#00f5ff] to-[#0066ff] px-8 py-4 font-semibold text-white shadow-xl shadow-[#00f5ff]/50 transition-all hover:shadow-2xl hover:shadow-[#00f5ff]/70"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <FiGithub size={20} />
                        <span>View on GitHub</span>
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#0066ff] to-[#00f5ff]"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative flex flex-1 items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#9333ea] to-[#c026d3] px-8 py-4 font-semibold text-white shadow-xl shadow-[#9333ea]/50 transition-all hover:shadow-2xl hover:shadow-[#9333ea]/70"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <FiExternalLink size={20} />
                        <span>Live Demo</span>
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#c026d3] to-[#9333ea]"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

