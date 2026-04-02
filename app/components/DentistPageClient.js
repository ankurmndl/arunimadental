'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import BookAppointment from '../components/BookAppointment';

export default function DentistPageClient() {
const [openIndex, setOpenIndex] = useState(null);
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-20 px-4 bg-teal-50">
        <div className="max-w-5xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            // className="text-3xl md:text-4xl font-bold text-teal-900 mb-4"
            className="text-2xl md:text-3xl font-semibold text-teal-800"
          >
            Best Dentist in Ranchi
          </motion.h1>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Esthetix Dental offers advanced, painless and personalized dental care in Ranchi, combining modern technology with a patient-first approach.
          </p>

          <BookAppointment />

        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-gray-700 text-lg leading-relaxed"
          >
            <p>
              Esthetix Dental is a leading dental clinic in Ranchi headed by Dr. Arunima Mukherjee, with over 20 years of expertise in cosmetic and advanced dentistry.
            </p>

            <p>
              Patients looking for a reliable dentist in Ranchi choose us for accurate diagnosis, painless procedures and long-lasting treatment outcomes using modern dental technology.
            </p>

            <p>
              From routine dental care to advanced treatments, we provide personalized solutions for patients of all age groups in a comfortable and stress-free environment.
            </p>
          </motion.div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl font-semibold text-teal-900 mb-8 text-center">
            Dental Treatments in Ranchi
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Root Canal Treatment",
              "Dental Implants",
              "Braces & Orthodontics",
              "Teeth Whitening",
              "Smile Design",
              "Preventive Dental Care",
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
              >
                <p className="text-gray-800 font-medium">{service}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-semibold text-teal-900 mb-8">
            Why Choose Esthetix Dental in Ranchi
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            {[
              "20+ years of clinical experience",
              "Painless and comfortable treatments",
              "Advanced dental technology and equipment",
              "Personalized treatment planning",
              "Trusted dental clinic in Ranchi",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-teal-600 mt-1">•</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      FAQ
      {/* <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl font-semibold text-teal-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Is root canal treatment painful?",
                a: "Modern root canal procedures are painless and performed using advanced techniques to ensure patient comfort.",
              },
              {
                q: "What is the cost of dental treatment in Ranchi?",
                a: "The cost depends on the type of treatment. We provide transparent and affordable pricing for all procedures.",
              },
              {
                q: "How often should I visit a dentist?",
                a: "It is recommended to visit a dentist every 6 months for routine check-ups and preventive care.",
              },
            ].map((faq, i) => (
              <div key={i} className="border-b pb-4">
                <p className="font-medium text-gray-800 mb-1">{faq.q}</p>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>

        </div>
      </section> */}

/* FAQ */
<section className="py-16 px-4 bg-gray-50">
  <div className="max-w-3xl mx-auto">

    <h2 className="text-2xl font-semibold text-teal-900 mb-10 text-center">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      {[
        {
          q: "Is root canal treatment painful?",
          a: "Modern root canal procedures are painless and performed using advanced techniques to ensure patient comfort.",
        },
        {
          q: "What is the cost of dental treatment in Ranchi?",
          a: "The cost depends on the type of treatment. We provide transparent and affordable pricing for all procedures.",
        },
        {
          q: "How often should I visit a dentist?",
          a: "It is recommended to visit a dentist every 6 months for routine check-ups and preventive care.",
        },
      ].map((faq, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition"
          >
            {/* QUESTION */}
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <span className="font-medium text-gray-800">
                {faq.q}
              </span>

              <span className="text-teal-600 text-lg">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {/* ANSWER */}
            <motion.div
              initial={false}
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.25 }}
              className="px-5 overflow-hidden"
            >
              <p className="text-gray-600 pb-5 leading-relaxed">
                {faq.a}
              </p>
            </motion.div>
          </div>
        );
      })}
    </div>

  </div>
</section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">

          <p className="text-lg text-gray-700 mb-6">
            Book your appointment with a trusted dentist in Ranchi and experience advanced, comfortable dental care.
          </p>

          <BookAppointment />

        </div>
      </section>

    </main>
  );
}