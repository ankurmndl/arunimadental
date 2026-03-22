"use client";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import BookAppointment from "../BookAppointment";
import Image from "next/image";

export default function SingleTreatmentPage({ title, description, benefits, steps, image }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-[#F4F9F9] min-h-screen">
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        {/* <motion.img
          src={image}
          alt={title}
          className="rounded-3xl shadow-2xl w-full object-cover"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        /> */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          priority
          className="rounded-3xl shadow-2xl object-cover w-full h-auto"
        />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold mb-6 leading-tight text-[#0E4D64]">{title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">{description}</p>
          {/* <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-[#01A7C2] text-white rounded-full font-medium shadow-lg hover:bg-[#0E4D64] transition"
          >
            Book a Consultation <ArrowRight className="ml-2" size={18} />
          </a> */}
         <BookAppointment />
        </motion.div>
        {showModal && <BookAppointment />}
      </div>

      {/* Benefits Section */}
      {benefits?.length > 0 && (
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0E4D64]">Why Choose {title}?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <CheckCircle className="text-[#01A7C2] mb-4" size={28} />
                <p className="text-gray-700">{b}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Steps Section */}
      {steps?.length > 0 && (
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0E4D64]">The {title} Process</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-[#F4F9F9]" />
            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  className="relative pl-12"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#01A7C2] text-white flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action Banner */}
      <div className="bg-[#F4F9F9] rounded-3xl p-10 text-center shadow-inner">
        <h3 className="text-2xl font-bold mb-4 text-[#0E4D64]">Ready to Transform Your Smile?</h3>
        <p className="text-gray-600 mb-6">
          Schedule your consultation today and see if {title} is right for you.
        </p>
        {/* <a
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-[#01A7C2] text-white rounded-full font-medium shadow-lg hover:bg-[#0E4D64] transition"
        >
          Book Now <ArrowRight className="ml-2" size={18} />
        </a> */}
        <BookAppointment />
      </div>
    </div>
    </div>
  );
}
