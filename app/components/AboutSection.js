'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="pt-12 pb-16 px-4 bg-teal-50">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-teal-900 mb-4"
        >
          About Dr. Arunima Mukherjee
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 mb-6 leading-relaxed"
        >
          With over two decade of experience in cosmetic and implant dentistry, Dr. Arunima blends advanced clinical skill with a passion for compassionate care. She believes every smile is personal — and every patient deserves the best.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="/about"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg text-base shadow transition"
          >
            Learn More About Her
          </a>
        </motion.div>
      </div>
    </section>
  );
}
