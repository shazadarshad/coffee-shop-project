'use client';

import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blog';
import { formatDate } from '@/lib/utils';
import { FiArrowRight } from 'react-icons/fi';

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

export default function Blog() {
  return (
    <section
      id="blog"
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
              Latest <span className="gradient-text">Blog</span>
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00f5ff]/60" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#00f5ff]/60" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#9333ea]/60" />
            </div>
          </div>
          <p className="text-base text-gray-400 lg:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Thoughts, tutorials, and insights on web development and design
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-8 sm:gap-10 lg:gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -10 }}
              className="group glass relative h-full overflow-hidden rounded-2xl border border-white/5 transition-all hover:border-[#00f5ff]/30 hover:shadow-xl hover:shadow-[#00f5ff]/10"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-800">
                <div className="absolute inset-0 flex items-center justify-center text-6xl text-gray-600">
                  📝
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col h-full p-6">
                {/* Tags */}
                <div className="flex items-center justify-between mb-3">
                  <span className="rounded-full bg-gradient-to-r from-[#00f5ff]/20 to-[#9333ea]/20 border border-[#00f5ff]/30 px-3 py-1 text-xs font-semibold text-[#00f5ff]">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{post.title}</h3>

                {/* Date */}
                <p className="text-sm text-gray-400 mb-3">{formatDate(post.date)}</p>

                {/* Excerpt */}
                <p className="text-sm text-gray-300 mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>

                {/* Read More */}
                <motion.button
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2.5 text-sm font-semibold text-[#00f5ff] transition-colors hover:text-[#9333ea] mt-2"
                >
                  <span>Read More</span>
                  <FiArrowRight size={16} />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Subtle Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9333ea]/40 to-transparent" />
    </section>
  );
}

