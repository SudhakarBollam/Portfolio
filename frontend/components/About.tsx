// components/About.tsx
'use client';

import { motion } from 'framer-motion';
import { containerVariants, slideLeftVariants, slideRightVariants } from '@/lib/animations';
import { PROFILE, EDUCATION } from '@/lib/constants';

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-neon-cyan">Me</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Learn more about my journey, background, and what drives me as a developer.
          </p>
        </motion.div>

        {/* Main content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left - Image */}
          <motion.div variants={slideLeftVariants} className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-neon-cyan/30">
              <img
                src={PROFILE.aboutImage}
                alt={PROFILE.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 -right-6 glass-effect p-4 rounded-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="text-sm text-neon-cyan font-semibold">Full-Stack Developer</p>
              <p className="text-xs text-text-secondary">AI Enthusiast</p>
            </motion.div>
          </motion.div>

          {/* Right - Text content */}
          <motion.div variants={slideRightVariants} className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                I&apos;m a passionate full-stack developer and B.Tech student specializing in Artificial
                Intelligence and Data Science. With a strong foundation in modern web technologies, I create
                innovative digital solutions that merge beautiful design with powerful functionality.
              </p>
              <p className="text-text-secondary leading-relaxed">
                My journey in tech has been driven by curiosity and a desire to solve real-world problems through
                code. Whether it&apos;s building responsive frontends or architecting scalable backends, I bring
                dedication and expertise to every project.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4 py-4 border-t border-neon-cyan/20">
              {[
                { label: 'Location', value: PROFILE.location },
                { label: 'Email', value: 'sudhakarbollam...' },
                { label: 'Expertise', value: 'Full-Stack Dev' },
                { label: 'Status', value: 'Open to work' },
              ].map((item, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-sm text-text-muted">{item.label}</p>
                  <p className="text-sm font-semibold text-text-primary">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Education timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold mb-12 text-center">
            Education & <span className="text-neon-cyan">Learning</span>
          </h3>

          <div className="space-y-6">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="glass-effect p-6 rounded-lg border border-neon-cyan/20 hover:border-neon-cyan/50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-lg font-bold text-text-primary">{edu.degree}</h4>
                    <p className="text-neon-cyan font-medium">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-text-muted bg-dark-surface-light px-3 py-1 rounded-full">
                    {edu.year}
                  </span>
                </div>
                <p className="text-text-secondary text-sm mb-2">{edu.field}</p>
                <p className="text-text-secondary text-sm">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
