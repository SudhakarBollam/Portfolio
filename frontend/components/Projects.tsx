// components/Projects.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, Play } from 'lucide-react';
import { containerVariants, itemVariants } from '@/lib/animations';
import { PROJECTS, GITHUB_REPOS_URL } from '@/lib/constants';

function isValidProjectUrl(url?: string) {
  if (!url?.trim() || url.startsWith('ADD_')) return false;

  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

function PitchButton({ pitchUrl }: { pitchUrl?: string }) {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handlePitchClick = () => {
    if (pitchUrl?.trim()) {
      window.open(pitchUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    setShowComingSoon(true);
    window.setTimeout(() => setShowComingSoon(false), 2500);
  };

  return (
    <div className="flex-1 relative">
      <motion.button
        type="button"
        onClick={handlePitchClick}
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-neon-cyan/10 text-neon-cyan rounded-lg border border-neon-cyan/30 hover:bg-neon-cyan/20 transition-colors text-sm font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Play className="w-4 h-4" />
        Pitch
      </motion.button>

      <AnimatePresence>
        {showComingSoon && (
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="absolute left-0 right-0 top-full mt-2 text-center text-xs text-neon-pink font-medium"
          >
            Coming soon
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function CodeButton({ codeUrl }: { codeUrl?: string }) {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleCodeClick = () => {
    if (isValidProjectUrl(codeUrl)) {
      window.open(codeUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    setShowComingSoon(true);
    window.setTimeout(() => setShowComingSoon(false), 2500);
  };

  return (
    <div className="flex-1 relative">
      <motion.button
        type="button"
        onClick={handleCodeClick}
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 border border-neon-pink/30 text-neon-pink rounded-lg hover:border-neon-pink/50 transition-colors text-sm font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Code className="w-4 h-4" />
        Code
      </motion.button>

      <AnimatePresence>
        {showComingSoon && (
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="absolute left-0 right-0 top-full mt-2 text-center text-xs text-neon-pink font-medium"
          >
            Coming soon
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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
            Featured <span className="text-neon-cyan">Projects</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Showcasing my best work and innovative solutions built with modern technologies.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              className="glass-effect rounded-xl overflow-hidden border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300 group"
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
              custom={1}
            >
              {/* Project image */}
              <motion.div className="relative h-48 overflow-hidden bg-dark-surface-light">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Featured badge */}
                {project.featured && (
                  <motion.div className="absolute top-3 right-3 bg-neon-pink text-dark-bg text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </motion.div>
                )}
              </motion.div>

              {/* Project content */}
              <motion.div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-text-primary group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-dark-surface-light text-neon-cyan px-3 py-1 rounded-full border border-neon-cyan/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-4">
                  <PitchButton pitchUrl={project.pitchUrl} />
                  <CodeButton codeUrl={project.url} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-text-secondary mb-6">Want to see more projects?</p>
          <motion.a
            href={GITHUB_REPOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-neon-cyan text-neon-cyan rounded-lg hover:bg-neon-cyan/10 transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
