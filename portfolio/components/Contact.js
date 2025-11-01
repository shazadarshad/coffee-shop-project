'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiSend,
  FiCheckCircle,
  FiXCircle,
} from 'react-icons/fi';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: FiGithub,
      href: 'https://github.com/aaravdesai',
      label: 'GitHub',
      color: 'hover:text-[#00f5ff]',
    },
    {
      icon: FiLinkedin,
      href: 'https://linkedin.com/in/aaravdesai',
      label: 'LinkedIn',
      color: 'hover:text-[#0066ff]',
    },
    {
      icon: FiTwitter,
      href: 'https://twitter.com/aaravdesai',
      label: 'Twitter',
      color: 'hover:text-[#9333ea]',
    },
    {
      icon: FiMail,
      href: 'mailto:aarav@example.com',
      label: 'Email',
      color: 'hover:text-[#c026d3]',
    },
  ];

  return (
    <section
      id="contact"
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
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00f5ff]/60" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#00f5ff]/60" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#9333ea]/60" />
            </div>
          </div>
          <p className="text-base text-gray-400 lg:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Have a project in mind? Let&apos;s work together to bring it to life.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-10 lg:gap-16 lg:grid-cols-2 mt-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="glass rounded-2xl border border-white/5 p-8 shadow-xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-[#00f5ff]/50 focus:outline-none focus:ring-2 focus:ring-[#00f5ff]/20 transition-all"
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-[#00f5ff]/50 focus:outline-none focus:ring-2 focus:ring-[#00f5ff]/20 transition-all"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-[#00f5ff]/50 focus:outline-none focus:ring-2 focus:ring-[#00f5ff]/20 transition-all resize-none"
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-full bg-gradient-to-r from-[#00f5ff] to-[#0066ff] px-8 py-4 font-semibold text-white shadow-lg shadow-[#00f5ff]/50 transition-all hover:shadow-xl hover:shadow-[#00f5ff]/70 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:y-0"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2.5">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="h-5 w-5 rounded-full border-2 border-white border-t-transparent"
                    />
                    <span>Sending...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2.5">
                    <span>Send Message</span>
                    <FiSend size={18} />
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col justify-center space-y-10"
          >
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">Connect with me</h3>
              <p className="text-gray-400">
                Feel free to reach out through any of these channels. I&apos;m always open to
                discussing new projects and opportunities.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`glass flex h-16 w-16 items-center justify-center rounded-xl border border-white/5 text-gray-400 transition-all ${social.color} hover:border-[#00f5ff]/30 hover:shadow-lg hover:shadow-[#00f5ff]/10`}
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>

            <div className="glass rounded-xl border border-white/5 p-6 shadow-lg">
              <h4 className="mb-2 font-semibold text-white">Email</h4>
              <a
                href="mailto:aarav@example.com"
                className="text-[#00f5ff] transition-colors hover:text-[#9333ea]"
              >
                aarav@example.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9333ea]/40 to-transparent" />

      {/* Toast Notification */}
      <AnimatePresence>
        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <div
              className={`glass flex items-center gap-3 rounded-lg border px-6 py-4 ${
                submitStatus === 'success'
                  ? 'border-green-500/50 bg-green-500/10'
                  : 'border-red-500/50 bg-red-500/10'
              }`}
            >
              {submitStatus === 'success' ? (
                <>
                  <FiCheckCircle className="text-green-400" size={24} />
                  <span className="text-white">Message sent successfully!</span>
                </>
              ) : (
                <>
                  <FiXCircle className="text-red-400" size={24} />
                  <span className="text-white">Something went wrong. Please try again.</span>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

