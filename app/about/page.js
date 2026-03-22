// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-white text-gray-900">
      
//       {/* --- Hero Section --- */}
//       {/* ...Your existing Hero Section code here... */}

//       {/* --- About Section --- */}
//       <section className="py-20 px-4 bg-teal-50">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
//           {/* Image (optional) */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//             viewport={{ once: true }}
//             className="flex justify-center"
//           >
//             <Image
//               src="/images/dr-arunima.jpg"
//               alt="Dr. Arunima Mukherjee"
//               width={350}
//               height={350}
//               className="rounded-xl shadow-lg object-cover"
//             />
//           </motion.div>

//           {/* Text */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//             viewport={{ once: true }}
//             className="text-center md:text-left"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
//               Meet Dr. Arunima Mukherjee
//             </h2>
//             <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//               With over a decade of experience in cosmetic and implant dentistry, Dr. Arunima blends advanced clinical skill with a passion for compassionate care. She believes every smile is personal — and every patient deserves the best.
//             </p>
//             <a
//               href="/about" 
//               className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-5 py-3 rounded-lg text-base shadow transition"
//             >
//               Learn More About Her
//             </a>
//           </motion.div>

//         </div>
//       </section>

//     </main>
//   );
// }

// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import CountUp from 'react-countup';

// export default function AboutSection() {
//   return (
//     <section className="py-20 px-4 bg-teal-50">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

//         {/* 🖼️ Image */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="flex justify-center"
//         >
//           <Image
//             src="/images/dr-arunima.jpg"
//             alt="Dr. Arunima Mukherjee"
//             width={800}
//             height={1000}
//             className="rounded-2xl shadow-lg object-cover"
//           />
//         </motion.div>

//         {/* 🧠 Content */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center md:text-left"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-3">
//             About Dr. Arunima Mukherjee
//           </h2>

//           <p className="text-teal-700 font-medium mb-4">
//             Widely regarded as a leading dental expert in Ranchi
//           </p>

//           <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//             Dr. Arunima Mukherjee completed her dental education from DY Patil, Mumbai — one of India’s leading dental institutions. She began her career as a consulting dental surgeon in Mumbai, working alongside renowned dentists across Bandra, Santacruz, and Andheri.
//           </p>

//           <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//             During her time in Mumbai, she treated a diverse clientele including national and international patients, as well as TV actors, models, and Bollywood professionals. After over 8 years of successful clinical practice in Mumbai, she brought her expertise to Ranchi and established Exthetix Dental.
//           </p>

//           <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//             With more than 18 years of clinical experience, Dr. Arunima is known for her precise diagnosis, advanced treatment planning, and a gentle, patient-first approach. Her ability to treat patients across all age groups — from children to the elderly — combined with her expertise in cosmetic dentistry, has made her one of the most trusted names in dental care in Ranchi.
//           </p>

//           {/* 🔥 Stats INLINE */}
//           <div className="grid grid-cols-3 gap-4 mb-6 text-center md:text-left">
            
//             <div>
//               <p className="text-3xl font-bold text-teal-600">
//                 <CountUp end={8000} duration={2} />+
//               </p>
//               <p className="text-gray-600 text-sm">Smiles Transformed</p>
//             </div>

//             <div>
//               <p className="text-3xl font-bold text-teal-600">
//                 <CountUp end={5000} duration={2} />+
//               </p>
//               <p className="text-gray-600 text-sm">Happy Patients</p>
//             </div>

//             <div>
//               <p className="text-3xl font-bold text-teal-600">
//                 <CountUp end={18} duration={2} />+
//               </p>
//               <p className="text-gray-600 text-sm">Years Experience</p>
//             </div>

//           </div>

//           {/* 🔥 Specializations */}
//           <div className="space-y-2 text-gray-700 mb-6">
//             <p>✔ Advanced Cosmetic & Smile Design</p>
//             <p>✔ Specialized Pediatric Dental Care</p>
//             <p>✔ Expertise in Dental Implants</p>
//             <p>✔ Gentle & Pain-Free Treatment Approach</p>
//           </div>

//           {/* CTA */}
//           <a
//             href="/about"
//             className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-5 py-3 rounded-lg text-base shadow transition"
//           >
//             Learn More About Her
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CountUp from 'react-countup';
import BookAppointment from '../components/BookAppointment';

export default function AboutSection() {
  return (
    <section className="relative py-20 px-4 bg-teal-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">

        {/* 🖼️ IMAGE SIDE (FULL HEIGHT FEEL) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[500px] md:h-[650px] w-full"
        >
          <Image
            src="/images/dr-arunima.jpg"
            alt="Dr. Arunima Mukherjee"
            fill
            className="object-cover rounded-2xl md:rounded-none md:rounded-l-3xl"
            priority
          />

          {/* 🔥 Soft gradient blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-50/30 to-teal-50" />
        </motion.div>

        {/* 🧠 TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 px-6 md:px-12 py-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-3">
            About Dr. Arunima Mukherjee
          </h2>

          <p className="text-teal-700 font-medium mb-4">
            Widely regarded as a leading dental expert in Ranchi
          </p>

          <p className="text-lg text-gray-700 mb-5 leading-relaxed">
            Dr. Arunima Mukherjee completed her dental education from DY Patil, Mumbai — one of India’s leading dental institutions. She began her career as a consulting dental surgeon in Mumbai, working alongside renowned dentists across Bandra, Santacruz, and Andheri.
          </p>

          <p className="text-lg text-gray-700 mb-5 leading-relaxed">
            During her time in Mumbai, she treated a diverse clientele including national and international patients, as well as TV actors, models, and Bollywood professionals. After over 8 years of successful clinical practice in Mumbai, she brought her expertise to Ranchi and established Exthetix Dental.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            With more than 18 years of clinical experience, Dr. Arunima is known for her precise diagnosis, advanced treatment planning, and a gentle, patient-first approach.
          </p>

          {/* 🔥 STATS (INLINE BUT CLEAN) */}
          <div className="flex gap-8 mb-6">
            <div>
              <p className="text-3xl font-bold text-teal-600">
                <CountUp end={12000} duration={2} />+
              </p>
              <p className="text-gray-600 text-sm">Smiles</p>
            </div>

            {/* <div>
              <p className="text-3xl font-bold text-teal-600">
                <CountUp end={5000} duration={2} />+
              </p>
              <p className="text-gray-600 text-sm">Patients</p>
            </div> */}

            <div>
              <p className="text-3xl font-bold text-teal-600">
                <CountUp end={18} duration={2} />+
              </p>
              <p className="text-gray-600 text-sm">Years</p>
            </div>
          </div>

          {/* CTA */}
          {/* <a
            href="/about"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-5 py-3 rounded-lg text-base shadow transition"
          >
            Learn More About Her
          </a> */}
          <BookAppointment />
        </motion.div>

      </div>
    </section>
  );
}