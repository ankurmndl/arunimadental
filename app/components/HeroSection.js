

// // 'use client';

// // import { motion } from 'framer-motion';
// // import Image from 'next/image';
// // import Link from 'next/link';
// // import BookAppointment from './BookAppointment';


// // export default function HeroSection() {
// //   return (
// //     <section className="relative w-full py-24 flex items-center justify-center bg-gradient-to-br from-white via-teal-50 to-white px-4">
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl items-center">
        
// //         {/* Text Content with slide-up animation */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 40 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, ease: 'easeOut' }}
// //           className="z-10 text-center md:text-left"
// //         >
// //           <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
// //             Cosmetic & Implant Dentistry<br />with a Human Touch
// //           </h1>
// //           <p className="text-lg md:text-xl text-gray-600 mb-6">
// //             20+ years of creating beautiful, confident smiles
// //           </p>
// //           <div className="flex justify-center md:justify-start gap-4">
// //             {/* <Link
// //               href="/contact"
// //               className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg text-lg shadow transition"
// //             >
// //               Book Appointment
// //             </Link> */}
// //             <BookAppointment />
// //             <Link
// //               href="/services"
// //               className="text-teal-700 border border-teal-600 px-6 py-3 rounded-lg text-lg hover:bg-teal-50 transition"
// //             >
// //               View Services
// //             </Link>
// //           </div>
// //         </motion.div>

// //         {/* Doctor Image with zoom-in animation */}
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.9 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
// //           className="relative w-full h-80 md:h-96 flex justify-center"
// //         >
// //           <Image
// //             src="/images/dr-arunima.jpg"
// //             alt="Dr. Arunima Mukherjee"
// //             width={400}
// //             height={400}
// //             className="rounded-2xl object-cover shadow-lg"
// //             priority
// //             // fetchPriority="high"
// //             loading="eager"
// //           />
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }


// // 'use client';

// // import dynamic from 'next/dynamic';
// // import { motion } from 'framer-motion';
// // import Image from 'next/image';
// // import Link from 'next/link';

// // // Lazy-load BookAppointment modal to cut bundle size
// // const BookAppointment = dynamic(() => import('./BookAppointment'), {
// //   ssr: false,
// //   loading: () => (
// //     <button
// //       className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg text-lg shadow transition"
// //     >
// //       Loading...
// //     </button>
// //   ),
// // });

// // export default function HeroSection() {
// //   return (
// //     <section className="relative w-full py-24 flex items-center justify-center bg-gradient-to-br from-white via-teal-50 to-white px-4">
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl items-center">
        
// //         {/* Text Content with animation */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 40 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8, ease: 'easeOut' }}
// //           className="z-10 text-center md:text-left"
// //         >
// //           <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
// //             Cosmetic & Implant Dentistry<br />with a Human Touch
// //           </h1>
// //           <p className="text-lg md:text-xl text-gray-600 mb-6">
// //             20+ years of creating beautiful, confident smiles
// //           </p>

// //           <div className="flex justify-center md:justify-start gap-4">
// //             <BookAppointment />
// //             <Link
// //               href="/services"
// //               prefetch={false} // avoids early JS fetch
// //               className="text-teal-700 border border-teal-600 px-6 py-3 rounded-lg text-lg hover:bg-teal-50 transition"
// //             >
// //               View Services
// //             </Link>
// //           </div>
// //         </motion.div>

// //         {/* Doctor Image with animation */}
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.9 }}
// //           whileInView={{ opacity: 1, scale: 1 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
// //           className="relative w-full h-80 md:h-96 flex justify-center"
// //         >
// //           {/* <Image
// //             src="/images/dr-arunima.webp"
// //             alt="Dr. Arunima Mukherjee"
// //             width={400}
// //             height={400}
// //             className="rounded-2xl object-cover shadow-lg"
// //             priority
// //             sizes="(max-width: 768px) 100vw, 400px"
// //             placeholder="blur"  
// //             blurDataURL="/images/placeholder.jpg" // tiny version of the image
// //           /> */}
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }

// // 'use client';

// // import dynamic from 'next/dynamic';
// // import { motion } from 'framer-motion';
// // import Image from 'next/image';
// // import Link from 'next/link';
// // import BookAppointmentTrigger from './BookAppointmentTrigger';

// // // Lazy-load BookAppointment modal to cut bundle size
// // const BookAppointment = dynamic(() => import('./BookAppointment'), {
// //   ssr: false,
// //   loading: () => (
// //     <button className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow">Loading...</button>
// //   ),
// // });

// // export default function HeroSection() {
// //   return (
// //     <section className="relative w-full py-24 flex items-center justify-center bg-gradient-to-br from-white via-teal-50 to-white px-4">
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl items-center">

// //         {/* ✅ Static h1 paints immediately */}
// //         <div className="z-10 text-center md:text-left">
// //           <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
// //             Cosmetic & Implant Dentistry<br />with a Human Touch
// //           </h1>

// //           {/* Animate smaller subtext */}
// //           <motion.p
// //             initial={{ opacity: 0, y: 15 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.5, delay: 0.2 }}
// //             className="text-lg md:text-xl text-gray-600 mb-6"
// //           >
// //             20+ years of creating beautiful, confident smiles
// //           </motion.p>

// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.5, delay: 0.4 }}
// //             className="flex justify-center md:justify-start gap-4"
// //           >
// //             <BookAppointmentTrigger />
// //             <Link
// //               href="/services"
// //               prefetch={false}
// //               className="text-teal-700 border border-teal-600 px-6 py-3 rounded-lg text-lg hover:bg-teal-50 transition"
// //             >
// //               View Services
// //             </Link>
// //           </motion.div>
// //         </div>

// //         {/* ✅ Make the hero image the new LCP element */}
// //         <div className="relative w-full h-80 md:h-96 flex justify-center">
// //           <Image
// //             src="/images/dr-arunima.webp"
// //             alt="Dr. Arunima Mukherjee"
// //             width={400}
// //             height={400}
// //             priority  // ✅ preload for LCP
// //             sizes="(max-width: 768px) 100vw, 400px"
// //             className="rounded-2xl object-cover shadow-lg"
// //           />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// 'use client';

// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import BookAppointmentTrigger from './BookAppointmentTrigger';

// export default function HeroSection() {
//   return (
//     <section className="relative w-full h-[90vh] min-h-[600px] flex items-center">

//       {/* 🔥 Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src="/images/services/clinic.webp" // 👉 your cleaned image
//           alt="Dental Clinic Interior"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* 🔥 Gradient Overlay (VERY IMPORTANT) */}
//       {/* <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" /> */}
//       <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/90 to-transparent backdrop-blur-[1px]" />

//       {/* 🔥 Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
//         <div className="max-w-xl">

//           {/* Headline */}
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
//             Confident Smiles <br /> Start Here
//           </h1>

//           {/* Subtext */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1.0, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg md:text-xl text-gray-700 mb-6"
//           >
//             Advanced, gentle dental care for your entire family in Ranchi.
//           </motion.p>

//           {/* CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="flex flex-wrap gap-4"
//           >
//             <BookAppointmentTrigger />

//             <Link
//               href="/services"
//               className="border border-teal-600 text-teal-700 px-6 py-3 rounded-lg text-lg hover:bg-teal-50 transition"
//             >
//               View Services
//             </Link>
//           </motion.div>

//           {/* 🔥 Trust badges */}
//           <div className="mt-6 text-sm text-gray-600 flex flex-wrap gap-4">
//             <span>✔ 20+ Years Experience</span>
//             <span>✔ Gentle & Pain-Free</span>
//             <span>✔ Modern Equipment</span>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import BookAppointmentTrigger from './BookAppointmentTrigger';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center overflow-hidden">

      {/* 🔥 Background Image with subtle zoom */}
      <div className="absolute inset-0">
        <Image
          src="/images/services/clinic.webp"
          alt="Dr Arunima Dental Clinic"
          className="w-full h-full object-cover scale-105 animate-zoom"
        />
      </div>

      {/* 🔥 Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-teal-50/40 to-transparent" />

      {/* 🔥 Depth Layer */}
      <div className="absolute inset-0 bg-black/5" />

      {/* 🔥 Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-xl">

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Confident Smiles <br /> Start Here
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 mb-6"
          >
            Advanced, gentle dental care for your entire family in Ranchi.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            {/* <BookAppointmentTrigger /> */}

            <Link
              href="/services"
              className="border border-teal-600 text-teal-700 px-6 py-3 rounded-lg text-lg hover:bg-teal-50 transition"
            >
              View Services
            </Link>
          </motion.div>

          {/* 🔥 Trust Indicators */}
          <div className="mt-6 text-sm text-gray-600 flex flex-wrap gap-4">
            <span>✔ 20+ Years Experience</span>
            <span>✔ Gentle & Pain-Free</span>
            <span>✔ Modern Equipment</span>
          </div>

        </div>
      </div>
    </section>
  );
}