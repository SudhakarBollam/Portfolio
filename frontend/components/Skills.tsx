// components/Skills.tsx
'use client';

import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/lib/animations';
import { SKILLS } from '@/lib/constants';
import {
  Code,
  Zap,
  Server,
  Database,
  GitBranch,
  Cloud,
  Palette,
  Grid,
  Brain,
  Atom,
  Layers,
  Network,
  BookOpen,
  Cpu,
  Terminal,
  Sparkles,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  GitBranch: <GitBranch className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Grid: <Grid className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  Atom: <Atom className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Network: <Network className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Terminal: <Terminal className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
            My <span className="text-neon-cyan">Skills</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build amazing digital products.
          </p>
        </motion.div>

        {/* Skills by category */}
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(SKILLS).map(([category, skills]) => (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="text-2xl font-bold text-neon-cyan mb-8 text-center lg:text-left">
                {category}
              </h3>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={`${category}-${skill.name}`}
                    className="group relative flex items-center gap-3 px-5 py-4 rounded-xl border border-neon-cyan/15 bg-dark-surface/35 backdrop-blur-md cursor-default"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      opacity: { duration: 0.4, delay: index * 0.05 },
                      y: {
                        duration: 3.5 + (index % 4) * 0.4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.15,
                      },
                    }}
                    whileHover={{
                      y: -10,
                      scale: 1.06,
                      borderColor: 'rgba(239, 106, 100, 0.55)',
                      backgroundColor: 'rgba(37, 43, 62, 0.65)',
                      boxShadow: '0 16px 40px rgba(239, 106, 100, 0.18)',
                    }}
                  >
                    <span className="text-neon-cyan transition-transform duration-300 group-hover:scale-110 group-hover:text-neon-pink">
                      {iconMap[skill.icon] || <Code className="w-5 h-5" />}
                    </span>
                    <span className="text-text-primary font-medium whitespace-nowrap transition-colors duration-300 group-hover:text-white">
                      {skill.name}
                    </span>

                    {/* Hover glow overlay */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-cyan/0 to-neon-pink/0 group-hover:from-neon-cyan/5 group-hover:to-neon-pink/10 transition-all duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
