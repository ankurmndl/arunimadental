// // 'use client';

// // import { motion } from 'framer-motion';
// // import { Smile, Syringe, Sparkles, AlignHorizontalJustifyStart, Baby, Brush } from 'lucide-react'; // Optional icons

// // const services = [
// //   {
// //     title: 'Smile Makeovers',
// //     description: 'Transform your smile with customized aesthetic treatments tailored just for you.',
// //     icon: <Smile className="w-8 h-8 text-teal-600" />,
// //   },
// //   {
// //     title: 'Dental Implants',
// //     description: 'Permanent, natural-looking solutions for missing teeth with advanced implantology.',
// //     icon: <Syringe className="w-8 h-8 text-teal-600" />,
// //   },
// //   {
// //     title: 'Invisalign',
// //     description: 'Discreet, comfortable, and effective clear aligners for teeth straightening.',
// //     icon: <AlignHorizontalJustifyStart className="w-8 h-8 text-teal-600" />,
// //   },
// //   {
// //     title: 'Teeth Whitening',
// //     description: 'Safe, professional-grade whitening for a noticeably brighter smile.',
// //     icon: <Sparkles className="w-8 h-8 text-teal-600" />,
// //   },
// //   {
// //     title: 'Porcelain Veneers',
// //     description: 'Enhance tooth shape, color, and alignment with custom ultra-thin porcelain shells.',
// //     icon: <Brush className="w-8 h-8 text-teal-600" />,
// //   },
// //   {
// //     title: 'Pediatric Dentistry',
// //     description: 'Gentle and friendly dental care tailored to children and young teens.',
// //     icon: <Baby className="w-8 h-8 text-teal-600" />,
// //   },
// // ];

// // export default function ServicesSection() {
// //   return (
// //     <section className="py-20 px-4 bg-white">
// //       <div className="max-w-6xl mx-auto text-center mb-12">
// //         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
// //         <p className="text-lg text-gray-600">Comprehensive cosmetic and implant dental care designed around you.</p>
// //       </div>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
// //         {services.map((service, index) => (
// //           <motion.div
// //             key={index}
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: index * 0.1 }}
// //             viewport={{ once: true }}
// //             className="bg-teal-50 rounded-xl p-6 shadow hover:shadow-md transition"
// //           >
// //             <div className="mb-4">{service.icon}</div>
// //             <h3 className="text-xl font-semibold text-teal-900 mb-2">{service.title}</h3>
// //             <p className="text-gray-700 text-sm">{service.description}</p>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// // PART II

// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const services = [
//   {
//     title: 'Cosmetic Dentistry',
//     image: '/images/services/cosmetic.webp',
//     description: 'Transform your smile with advanced veneers, whitening, and aesthetic contouring tailored to you.',
//     alt: 'Cosmetic Dentistry - Smile Enhancement',
//     link: '/services/cosmetic',
//   },
//   {
//     title: 'Dental Implants',
//     image: '/images/services/implants.webp',
//     description: 'Restore confidence with natural-looking, permanent tooth replacements anchored securely.',
//     alt: 'Dental Implants - Tooth Replacement',
//     link: '/services/implants',
//   },
//   {
//     title: 'Preventive Care',
//     image: '/images/services/preventive.webp',
//     description: 'Stay ahead of dental issues with personalized cleanings, digital diagnostics, and gum care.',
//     alt: 'Preventive Dental Care - Cleanings & Checkups',
//     link: '/services/preventive',
//   },
//   {
//     title: 'Pediatric Dentistry',
//     image: '/images/services/pediatric.webp',
//     description: 'Gentle care for little smiles — creating positive dental experiences for children of all ages.',
//     alt: 'Pediatric Dentistry - Kids Dental Care',
//     link: '/services/pediatric',
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="bg-white py-20 px-4">
//       <div className="max-w-7xl mx-auto text-center">
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: 'easeOut' }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
//         >
//           Our Signature Services
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
//           viewport={{ once: true }}
//           className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
//         >
//           Expert care across every aspect of dentistry — blending technology, precision, and empathy.
//         </motion.p>

//         {/* Grid */}
//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="group relative rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
//             >
//               <a href={service.link} className="block">
//                 <Image
//                   src={service.image}
//                   alt={service.alt}
//                   width={500}
//                   height={350}
//                   className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//                 <div className="bg-white p-5 text-left">
//                   <h3 className="text-xl font-semibold text-teal-800 mb-2">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {service.description}
//                   </p>
//                 </div>
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Cosmetic Dentistry',
    image: '/images/services/cosmetic3.webp',
    description: 'Transform your smile with veneers, whitening, and aesthetic bonding crafted to your unique look.',
    alt: 'Cosmetic Dentistry smile makeover',
    link: '/services/cosmetic-dentistry',
  },
  {
    title: 'Dental Implants',
    image: '/images/services/implants3.webp',
    description: 'Permanently replace missing teeth with titanium-rooted implants for natural look and function.',
    alt: 'Dental Implants full mouth restoration',
    link: '/services/dental-implants',
  },
  {
    title: 'Preventive Care',
    image: '/images/services/preventive.webp',
    description: 'Personalized cleanings, exams, and digital X-rays to keep your smile healthy long-term.',
    alt: 'Preventive dental checkups and cleanings',
    link: '/services/preventive-dentistry',
  },
  {
    title: 'Pediatric Dentistry',
    image: '/images/services/pediatric.webp',
    description: 'Gentle, child-friendly care that helps kids build lifelong trust in dentistry.',
    alt: 'Pediatric dental care for children',
    link: '/services/pediatric-dentistry',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Dentistry, Reimagined Around You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Every service we offer is designed to give you the best outcome — and the most comfortable experience possible.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden bg-white shadow hover:shadow-xl transition-shadow duration-300"
              aria-label={service.title}
            >
              <Link href={service.link} className="block h-full">
                <div className="relative w-full h-60 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-teal-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/services"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg text-base shadow-md transition"
          >
            Explore All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
