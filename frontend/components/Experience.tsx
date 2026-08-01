// components/Experience.tsx
'use client';

import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/lib/animations';
import { EXPERIENCE } from '@/lib/constants';
import { Trophy, Zap, Cloud, Code, Leaf } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
  Code: <Code className="w-5 h-5" />,
  Leaf: <Leaf className="w-5 h-5" />,
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-neon-cyan">Experience</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A timeline of my professional journey, achievements, and learning experiences.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative"
              variants={itemVariants}
            >
              {/* Timeline line */}
              {index !== EXPERIENCE.length - 1 && (
                <div className="absolute left-6 top-16 h-12 w-1 bg-gradient-to-b from-neon-cyan to-transparent opacity-50" />
              )}

              {/* Timeline content */}
              <div className="flex gap-6">
                {/* Timeline dot */}
                <motion.div
                  className="flex-shrink-0 relative z-10"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(0, 217, 255, 0.7)',
                      '0 0 0 10px rgba(0, 217, 255, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-dark-surface border-2 border-neon-cyan flex items-center justify-center text-neon-cyan">
                    {iconMap[exp.icon]}
                  </div>
                </motion.div>

                {/* Content card */}
                <motion.div
                  className="flex-1 glass-effect rounded-lg p-6 border border-neon-cyan/20 hover:border-neon-cyan/50 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">
                        {exp.title}
                      </h3>
                      <p className="text-neon-cyan font-medium text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-text-muted bg-dark-surface-light px-3 py-1 rounded-full">
                      {exp.date}
                    </span>
                  </div>
                  {'bullets' in exp && exp.bullets ? (
                    <ul className="space-y-2 list-disc list-inside text-text-secondary leading-relaxed">
                      {exp.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-text-secondary leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="mt-12 pt-12 border-t border-neon-cyan/10">
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold">
              Always <span className="text-neon-cyan">learning</span> and growing
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              I&apos;m committed to continuous learning and staying updated with the latest technologies
              and industry best practices. Currently exploring AI, machine learning, and advanced system design.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
