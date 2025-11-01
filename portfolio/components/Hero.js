'use client';

import { motion } from 'framer-motion';
import { scrollToSection } from '@/lib/utils';
import { FiArrowDown } from 'react-icons/fi';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#0f0f14] via-[#141420] to-[#0f0f14]"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(0, 245, 255, 0.12) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.12) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, rgba(0, 102, 255, 0.12) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(0, 245, 255, 0.12) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl container-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="space-y-8 sm:space-y-12 lg:space-y-16"
        >
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-white">
              <span className="block mb-2">Designing</span>
              <span className="block mb-2 gradient-text">Tomorrow&apos;s Web</span>
              <span className="block">Today.</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto max-w-3xl text-lg text-gray-300 sm:text-xl lg:text-2xl leading-relaxed font-light px-4"
          >
            Front-end developer crafting modern, responsive web experiences with cutting-edge
            technologies and innovative design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-6 sm:flex-row pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('projects')}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#00f5ff] to-[#0066ff] px-10 py-4 font-semibold text-white shadow-lg shadow-[#00f5ff]/50 transition-all hover:shadow-xl hover:shadow-[#00f5ff]/70"
            >
              <span className="relative z-10 flex items-center gap-2">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#9333ea] to-[#c026d3]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contact')}
              className="glass group rounded-full border border-white/20 px-10 py-4 font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10 hover:shadow-lg"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-24 lg:mt-32"
          >
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => scrollToSection('about')}
              className="text-gray-400 transition-colors hover:text-white"
              aria-label="Scroll down"
            >
              <FiArrowDown size={32} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

