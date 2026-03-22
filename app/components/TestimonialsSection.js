// // 'use client';

// // import { motion } from 'framer-motion';

// // export default function TestimonialsSection() {
// //   const testimonials = [
// //     {
// //       quote:
// //         "Dr. Arunima transformed my smile. I’ve never felt more confident!",
// //       name: 'Riya S.',
// //     },
// //     {
// //       quote:
// //         "Professional, gentle, and extremely knowledgeable. Highly recommended!",
// //       name: 'Amit D.',
// //     },
// //     {
// //       quote:
// //         "The best dental experience I’ve ever had. Truly exceptional care.",
// //       name: 'Neha M.',
// //     },
// //   ];

// //   return (
// //     <section id="testimonials" className="bg-white py-20 px-4">
// //       <div className="max-w-6xl mx-auto">
// //         <motion.h2
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, ease: 'easeOut' }}
// //           viewport={{ once: true }}
// //           className="text-3xl md:text-4xl font-bold text-center text-teal-900 mb-12"
// //         >
// //           What Our Patients Say
// //         </motion.h2>

// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //           {testimonials.map((testimonial, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
// //               viewport={{ once: true }}
// //               className="bg-teal-50 p-6 rounded-xl shadow-md border border-teal-100"
// //             >
// //               <p className="text-gray-700 text-lg leading-relaxed mb-4">
// //                 “{testimonial.quote}”
// //               </p>
// //               <p className="text-teal-800 font-semibold text-sm">
// //                 — {testimonial.name}
// //               </p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// 'use client';

// import { motion } from 'framer-motion';
// import { Star } from 'lucide-react';

// const testimonials = [
//   {
//     name: 'Priya S.',
//     quote: 'Dr. Arunima truly changed my life with her care. I now smile with confidence!',
//     rating: 5
//   },
//   {
//     name: 'Arjun M.',
//     quote: 'Exceptional service and genuine care. Highly recommend her for dental implants.',
//     rating: 5
//   },
//   {
//     name: 'Sneha R.',
//     quote: 'Painless and professional. The best dental experience I have ever had.',
//     rating: 5
//   },
// ];

// export default function TestimonialsSection() {
//   return (
//     <section className="py-20 bg-white px-4">
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-teal-800">
//           What Patients Are Saying
//         </h2>
//         <p className="text-gray-600 mt-4 text-lg">
//           Real stories from real smiles
//         </p>
//       </div>

//       <div className="overflow-x-auto flex gap-6 snap-x snap-mandatory px-4 md:px-0">
//         {testimonials.map((t, index) => (
//           <motion.div
//             key={index}
//             className="min-w-[320px] md:min-w-[380px] snap-center bg-teal-50 p-6 rounded-2xl shadow-lg flex-shrink-0"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             viewport={{ once: true }}
//           >
//             <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
//             <div className="flex items-center gap-2 mb-2">
//               {Array.from({ length: t.rating }).map((_, i) => (
//                 <Star key={i} className="w-4 h-4 fill-teal-600 text-teal-600" />
//               ))}
//             </div>
//             <div className="font-semibold text-teal-800">– {t.name}</div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Priya S.',
    text: 'Dr. Arunima transformed my smile! Her attention to detail and warmth made the whole process so comfortable.',
  },
  {
    name: 'Rohit M.',
    text: 'The implants feel so natural. Grateful for the care and expertise — highly recommended!',
  },
  {
    name: 'Meera D.',
    text: 'She made my child feel at ease instantly. We’re lucky to have such a gentle dentist nearby.',
  },
  {
    name: 'Aakash V.',
    text: 'From consultation to the final smile — everything was seamless. Thank you, doctor!',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="bg-teal-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-12">
          What Our Patients Say
        </h2>

        <div className="relative h-40 md:h-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 px-4"
            >
              <p className="text-lg md:text-xl italic text-gray-700 mb-4">
                “{testimonials[current].text}”
              </p>
              <p className="text-sm font-semibold text-teal-900">
                — {testimonials[current].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === i ? 'bg-teal-700' : 'bg-teal-300'
              }`}
            ></button>
          ))}
        </div> */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === i ? 'bg-teal-700' : 'bg-teal-300'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
              title={`Go to testimonial ${i + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
}