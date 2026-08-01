// components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Download } from 'lucide-react';
import { slideUpVariants, containerVariants } from '@/lib/animations';
import { PROFILE, HERO_HIGHLIGHTS } from '@/lib/constants';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[720px] h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 hero-landscape" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/25 via-dark-bg/45 to-dark-bg" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10 w-full">
        <motion.div
          className="flex flex-col items-center text-center pt-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-6 max-w-3xl">
            <motion.div variants={slideUpVariants} className="space-y-3">
              <img src={PROFILE.profileImage} alt="" className="w-24 h-24 rounded-full object-cover border-[5px] border-dark-bg shadow-glow-cyan mx-auto" />
              <motion.h3
                className="text-xs uppercase tracking-[0.28em] text-text-secondary font-bold"
                variants={slideUpVariants}
              >
                Portfolio / 2027(Year of graduation)
              </motion.h3>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight font-display">
                <span className="gradient-text">{PROFILE.name}</span>
              </h1>
              <h2 className="text-base md:text-lg text-text-secondary font-medium uppercase tracking-[0.13em]">
                {PROFILE.role}
              </h2>
            </motion.div>

            <motion.p
              className="text-text-secondary text-base leading-relaxed max-w-2xl mx-auto"
              variants={slideUpVariants}
            >
              {PROFILE.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 pt-3"
              variants={slideUpVariants}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-neon-cyan text-dark-bg font-bold hover:shadow-glow-cyan transition-all duration-300 group uppercase tracking-wider text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href={PROFILE.resumeUrl}
                download
                className="inline-flex items-center justify-center gap-2 px-7 py-3 border border-text-primary/30 text-text-primary hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 group uppercase tracking-wider text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Highlights */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 pt-8 border-t border-text-primary/15"
              variants={slideUpVariants}
            >
              {HERO_HIGHLIGHTS.map((highlight) => (
                <span
                  key={highlight}
                  className="px-4 py-2 text-sm text-text-primary bg-dark-surface/50 border border-neon-cyan/20 rounded-full backdrop-blur-sm"
                >
                  {highlight}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
