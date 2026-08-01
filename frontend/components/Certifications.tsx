// components/Certifications.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, BadgeCheck, ArrowUpRight, Trophy } from 'lucide-react';
import { containerVariants, itemVariants } from '@/lib/animations';
import { ACHIEVEMENTS, CERTIFICATIONS } from '@/lib/constants';

function isValidProofUrl(url?: string) {
  if (!url?.trim()) return false;

  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

function KnowMoreButton({ proofUrl }: { proofUrl?: string }) {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleClick = () => {
    if (isValidProofUrl(proofUrl)) {
      window.open(proofUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    setShowComingSoon(true);
    window.setTimeout(() => setShowComingSoon(false), 2500);
  };

  return (
    <div className="relative mt-auto pt-4">
      <motion.button
        type="button"
        onClick={handleClick}
        className="inline-flex items-center gap-2 text-sm font-semibold text-neon-cyan hover:text-neon-pink transition-colors group/btn"
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.97 }}
      >
        Know More
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
      </motion.button>

      <AnimatePresence>
        {showComingSoon && (
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="absolute left-0 top-full mt-1 text-xs text-neon-pink font-medium"
          >
            Coming soon
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function AchievementCard({
  title,
  date,
  description,
  proofUrl,
  index,
}: {
  title: string;
  date: string;
  description: string;
  proofUrl?: string;
  index: number;
}) {
  return (
    <motion.article
      variants={itemVariants}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neon-pink/20 bg-gradient-to-br from-dark-surface/80 via-dark-surface/50 to-dark-bg/80 p-6 backdrop-blur-md"
      whileHover={{ y: -8, borderColor: 'rgba(217, 80, 91, 0.45)' }}
    >
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-neon-pink/10 blur-2xl transition-all duration-500 group-hover:bg-neon-pink/20" />
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-neon-pink via-neon-cyan to-transparent opacity-70" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neon-pink/30 bg-neon-pink/10 text-neon-pink">
          <Trophy className="h-5 w-5" />
        </div>
        <span className="rounded-full border border-neon-pink/25 bg-dark-surface-light/80 px-3 py-1 text-xs font-medium text-neon-pink">
          {date}
        </span>
      </div>

      <div className="relative mt-5 flex flex-1 flex-col">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-text-muted">
          Achievement #{index + 1}
        </p>
        <h3 className="text-lg font-bold leading-snug text-text-primary transition-colors group-hover:text-neon-cyan">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">{description}</p>
        <KnowMoreButton proofUrl={proofUrl} />
      </div>
    </motion.article>
  );
}

function CertificationCard({
  title,
  issuer,
  date,
  description,
  proofUrl,
  index,
}: {
  title: string;
  issuer: string;
  date: string;
  description: string;
  proofUrl?: string;
  index: number;
}) {
  return (
    <motion.article
      variants={itemVariants}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neon-cyan/20 bg-dark-surface/45 p-6 backdrop-blur-md"
      whileHover={{ y: -8, borderColor: 'rgba(239, 106, 100, 0.45)' }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/70 to-transparent" />
      <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-neon-cyan/10 blur-2xl transition-all duration-500 group-hover:bg-neon-cyan/20" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan">
          <BadgeCheck className="h-5 w-5" />
        </div>
        <span className="rounded-full border border-neon-cyan/25 bg-dark-surface-light/80 px-3 py-1 text-xs font-medium text-neon-cyan">
          {date}
        </span>
      </div>

      <div className="relative mt-5 flex flex-1 flex-col">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-text-muted">
          Certification #{index + 1}
        </p>
        <h3 className="text-lg font-bold leading-snug text-text-primary transition-colors group-hover:text-neon-cyan">
          {title}
        </h3>
        <p className="mt-2 text-sm font-medium text-neon-cyan/90">{issuer}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">{description}</p>
        <KnowMoreButton proofUrl={proofUrl} />
      </div>

      <div className="pointer-events-none absolute bottom-4 right-4 rotate-[-12deg] rounded-md border border-dashed border-neon-cyan/20 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-neon-cyan/30 transition-colors group-hover:border-neon-cyan/40 group-hover:text-neon-cyan/50">
        Verified
      </div>
    </motion.article>
  );
}

export default function Certifications() {
  return (
    <section id="achievements" className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Achievements & <span className="text-neon-cyan">Certifications</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            Milestones, wins, and credentials from my learning journey.
          </p>
        </motion.div>

        <div className="space-y-20">
          <div>
            <motion.div
              className="mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Award className="h-6 w-6 text-neon-pink" />
              <h3 className="text-2xl font-bold text-text-primary">Achievements</h3>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {ACHIEVEMENTS.map((item, index) => (
                <AchievementCard key={item.id} {...item} index={index} />
              ))}
            </motion.div>
          </div>

          <div>
            <motion.div
              className="mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <BadgeCheck className="h-6 w-6 text-neon-cyan" />
              <h3 className="text-2xl font-bold text-text-primary">Certifications</h3>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {CERTIFICATIONS.map((item, index) => (
                <CertificationCard key={item.id} {...item} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
