'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="relative overflow-hidden bg-gradient-to-b from-[#0f0f14] to-[#141420] min-h-screen"
        role="main"
      >
        <Hero />
        <div className="relative">
          <About />
          <Skills />
          <Projects />
          <Testimonials />
          <Blog />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
