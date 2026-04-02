    'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import BookAppointment from '../components/BookAppointment';
import Link from 'next/link';

export default function BracesPageClient() {
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
            Braces Treatment in Ranchi
          </motion.h1>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Straighten your teeth and improve your smile with advanced braces treatment in Ranchi.
          </p>

          <BookAppointment />

        </div>
      </section>

      {/* IMAGE + CONTENT */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-[400px] md:h-[500px]"
          >
            {/* <Image
              src="/images/services/early-braces.webp"
              alt="Braces Treatment"
              fill
              className="object-cover rounded-2xl md:rounded-none md:rounded-l-3xl"
            /> */}
            <Image
            src="/images/services/root-canal.webp"
            alt="Root Canal Treatment"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="px-6 md:px-12 py-10"
          >
            <h2 className="text-2xl font-semibold text-teal-900 mb-4">
              What is Braces Treatment?
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Braces treatment helps align crooked teeth, correct bite issues and improve overall dental health. It is one of the most effective solutions for achieving a well-aligned smile.
            </p>

            <p className="text-gray-700 leading-relaxed">
              At Esthetix Dental, we offer braces treatment in Ranchi using modern orthodontic techniques for precise and comfortable results.
            </p>

            <p className="text-gray-700 mt-4">
              If you are looking for a trusted{" "}
              <Link href="/dentist-in-ranchi" className="text-teal-600 hover:underline">
                dentist in Ranchi
              </Link>, we provide complete orthodontic care.
            </p>
          </motion.div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 px-4 bg-teal-50">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl font-semibold text-teal-900 mb-8 text-center">
            Benefits of Braces Treatment in Ranchi
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            {[
              "Improves smile and appearance",
              "Corrects bite alignment",
              "Enhances oral health",
              "Boosts confidence",
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
            Why Choose Esthetix Dental for Braces
          </h2>

          <div className="space-y-3 text-gray-700">
            <p>• 20+ years of clinical experience</p>
            <p>• Advanced orthodontic solutions</p>
            <p>• Personalized treatment planning</p>
            <p>• Trusted dental clinic in Ranchi</p>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl font-semibold text-teal-900 mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 text-gray-500">
            {[
              {
                q: "How long does braces treatment take?",
                a: "Treatment duration varies from 6 months to 2 years depending on the case.",
              },
              {
                q: "Are braces painful?",
                a: "There may be mild discomfort initially, but modern braces are designed for comfort.",
              },
              {
                q: "What is the cost of braces in Ranchi?",
                a: "Costs depend on the type of braces and treatment plan. We provide transparent pricing.",
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
            Start your braces treatment in Ranchi and achieve a confident, well-aligned smile.
          </p>

          <BookAppointment />

        </div>
      </section>

    </main>
  );
}