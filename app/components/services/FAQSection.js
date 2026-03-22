'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection({ faqs = [] }) {
  if (!faqs.length) return null;

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <Accordion key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}

function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left font-medium"
      >
        {question}
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden px-4 pb-4"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
