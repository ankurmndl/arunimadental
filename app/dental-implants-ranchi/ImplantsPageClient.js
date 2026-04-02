'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import BookAppointment from '../components/BookAppointment';
// import BookAppointment from '../components/BookAppointment';

export default function ImplantsPageClient() {
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
            Dental Implants in Ranchi
          </motion.h1>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Replace missing teeth with advanced dental implants that look, feel and function like natural teeth.
          </p>

          <BookAppointment />

        </div>
      </section>

      {/* IMAGE + CONTENT */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-[400px] md:h-[500px]"
          >
            <Image
              src="/images/services/implants4.webp"
              alt="Dental Implants"
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
              What are Dental Implants?
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Dental implants are a permanent solution for missing teeth, designed to restore both function and appearance. They act as artificial tooth roots that support crowns, bridges or dentures.
            </p>

            <p className="text-gray-700 leading-relaxed">
              At Esthetix Dental, we provide advanced dental implants in Ranchi using modern techniques to ensure long-lasting and natural-looking results.
            </p>
          </motion.div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 px-4 bg-teal-50">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl font-semibold text-teal-900 mb-8 text-center">
            Benefits of Dental Implants
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            {[
              "Looks and feels like natural teeth",
              "Permanent and long-lasting solution",
              "Improves chewing and speech",
              "Prevents bone loss and facial changes",
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
            Why Choose Esthetix Dental for Implants
          </h2>

          <div className="space-y-3 text-gray-700">
            <p>• Expertise in implant dentistry</p>
            <p>• Advanced implant technology</p>
            <p>• Precision planning and placement</p>
            <p>• Personalized care and follow-up</p>
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
                q: "Are dental implants painful?",
                a: "The procedure is performed under anesthesia, making it comfortable and pain-free.",
              },
              {
                q: "How long do dental implants last?",
                a: "With proper care, dental implants can last many years or even a lifetime.",
              },
              {
                q: "What is the cost of dental implants in Ranchi?",
                a: "Costs vary depending on the case. We provide transparent consultation and pricing.",
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
            Restore your smile with dental implants in Ranchi and enjoy long-lasting, natural-looking results.
          </p>

          <BookAppointment />

        </div>
      </section>

    </main>
  );
}