'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import BookAppointment from '../components/BookAppointment';
// import BookAppointment from '../components/BookAppointment';

export default function RootCanalPageClient() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-20 px-4 bg-teal-50">
        <div className="max-w-5xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-semibold text-teal-800 mb-4"
          >
            Root Canal Treatment in Ranchi
          </motion.h1>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Advanced and painless root canal treatment designed to save your natural tooth and relieve pain.
          </p>

          <BookAppointment />

        </div>
      </section>

      {/* IMAGE + CONTENT (MATCHES YOUR ABOUT STYLE) */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-[400px] md:h-[500px]"
          >
            <Image
              src="/images/services/dental-cleaning.webp"
              alt="Root Canal Treatment"
              fill
              className="object-cover rounded-2xl md:rounded-none md:rounded-l-3xl"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="px-6 md:px-12 py-10"
          >
            <h2 className="text-2xl font-semibold text-teal-900 mb-4">
              What is Root Canal Treatment?
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Root canal treatment is used to treat infected or damaged teeth by removing the infected pulp and sealing the tooth to prevent further infection.
            </p>

            <p className="text-gray-700 leading-relaxed">
              At Esthetix Dental, we provide painless root canal treatment in Ranchi using modern techniques that ensure comfort and long-term success.
            </p>
          </motion.div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 px-4 bg-teal-50">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl font-semibold text-teal-900 mb-8 text-center">
            Benefits of Root Canal Treatment
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            {[
              "Relieves severe tooth pain",
              "Saves your natural tooth",
              "Prevents infection spread",
              "Restores chewing ability",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-teal-600 mt-1">•</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-semibold text-teal-900 mb-6">
            Why Choose Esthetix Dental
          </h2>

          <div className="space-y-3 text-gray-700">
            <p>• Painless and gentle procedures</p>
            <p>• Advanced dental technology</p>
            <p>• Experienced dental expertise</p>
            <p>• Personalized treatment care</p>
          </div>

        </div>
      </section>

      {/* FAQ (IMPROVED UI YOU BUILT) */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl font-semibold text-teal-900 mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 text-gray-600">
            {[
              {
                q: "Is root canal treatment painful?",
                a: "Modern root canal treatments are painless with advanced techniques.",
              },
              {
                q: "How long does a root canal take?",
                a: "Typically 1–2 visits depending on the case.",
              },
              {
                q: "What is the cost of root canal treatment in Ranchi?",
                a: "Costs vary, but we provide transparent pricing.",
              },
            ].map((faq, i) => {
              const isOpen = openIndex === i;

              return (
                <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex justify-between items-center p-5 text-left"
                  >
                    <span className="font-medium">{faq.q}</span>
                    <span className="text-teal-600">{isOpen ? "−" : "+"}</span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    className="px-5 overflow-hidden"
                  >
                    <p className="text-gray-600 pb-5">{faq.a}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">

          <p className="text-lg text-gray-700 mb-6">
            Book your appointment for root canal treatment in Ranchi and get expert care in a comfortable setting.
          </p>

          <BookAppointment />

        </div>
      </section>

    </main>
  );
}