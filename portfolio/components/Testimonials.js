'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { testimonials } from '@/data/testimonials';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
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
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00f5ff]/60" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#00f5ff]/60" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#9333ea]/60" />
            </div>
          </div>
          <p className="text-base text-gray-400 lg:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            What people say about working with me
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass relative rounded-2xl border border-white/5 p-8 sm:p-12 shadow-xl"
            >
              {/* Quote Icon */}
              <div className="absolute left-6 top-6 text-6xl font-bold text-[#00f5ff]/20">
                &ldquo;
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-5">
                {/* Rating */}
                <div className="flex gap-1.5">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FiStar key={i} className="fill-[#00f5ff] text-[#00f5ff]" size={20} />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-base lg:text-lg leading-relaxed text-gray-300 font-light">
                  {testimonials[currentIndex].feedback}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-2">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-[#00f5ff]/50 bg-gray-800">
                    <div className="absolute inset-0 flex items-center justify-center text-2xl">
                      👤
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-gray-400 font-light mt-0.5">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="glass flex items-center justify-center rounded-full border border-white/20 p-3.5 text-white transition-all hover:border-[#00f5ff]/50 hover:bg-[#00f5ff]/20 hover:shadow-lg"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={20} />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-gradient-to-r from-[#00f5ff] to-[#9333ea]'
                      : 'w-2 bg-gray-600/60 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="glass flex items-center justify-center rounded-full border border-white/20 p-3.5 text-white transition-all hover:border-[#9333ea]/50 hover:bg-[#9333ea]/20 hover:shadow-lg"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9333ea]/40 to-transparent" />
    </section>
  );
}

