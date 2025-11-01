'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi';
import { scrollToSection } from '@/lib/utils';

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/aaravdesai', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/aaravdesai', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/aaravdesai', label: 'Twitter' },
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="relative bg-gradient-to-b from-[#161620] to-[#0f0f14] border-t border-white/5">
      <div className="mx-auto max-w-7xl container-padding py-12">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <h2 className="gradient-text text-xl font-bold tracking-tight">Aarav Desai</h2>
            <p className="text-sm text-gray-400 font-light">
              © {new Date().getFullYear()} Aarav Desai. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 transition-colors hover:text-[#00f5ff]"
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection('hero')}
            className="glass fixed bottom-8 right-8 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-white shadow-lg transition-all hover:border-[#00f5ff]/50 hover:bg-[#00f5ff]/20 hover:shadow-[#00f5ff]/30"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

