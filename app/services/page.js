// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import servicesData from '@/lib/servicesData';

// export default function ServicesLandingPage() {
//   return (
//     <main className="min-h-screen px-4 py-16 bg-white text-gray-900">
//       <div className="max-w-6xl mx-auto">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-5xl font-bold text-center text-teal-700 mb-12"
//         >
//           Our Dental Services
//         </motion.h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {servicesData.map((service, index) => (
//             <motion.div
//               key={service.slug}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="group rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white border"
//             >
//               <Link href={`/services/${service.slug}`}>
//                 <div className="relative w-full h-60">
//                   <Image
//                     src={service.image}
//                     alt={service.name}
//                     fill
//                     className="object-cover group-hover:scale-105 transition duration-300"
//                   />
//                 </div>
//                 <div className="p-5">
//                   <h2 className="text-xl font-semibold text-teal-800 mb-2">
//                     {service.name}
//                   </h2>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {service.description.length > 100
//                       ? service.description.slice(0, 100) + '...'
//                       : service.description}
//                   </p>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

// app/services/page.js

import ServicesLandingPage from '@/app/components/services/ServicesLandingPage';

export const metadata = {
  title: 'Dental Services | Dr. Arunima Mukherjee',
  description:
    'Explore premium dental services including cosmetic dentistry, implants, preventive care, and pediatric treatments. Delivered with excellence and compassion.',
  keywords: [
    'Dental services',
    'Cosmetic dentistry',
    'Dental implants',
    'Preventive dental care',
    'Pediatric dentist',
    'Dr. Arunima Mukherjee',
    'Dentist Kolkata',
  ],
  openGraph: {
    title: 'Dental Services | Dr. Arunima Mukherjee',
    description:
      'Browse high-quality dental treatments provided by Dr. Arunima Mukherjee — from cosmetic to preventive dentistry.',
    url: 'https://yourdomain.com/services',
    siteName: 'Dr. Arunima Mukherjee Dental Care',
    images: [
      {
        url: 'https://yourdomain.com/images/opengraph/services-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dental Services by Dr. Arunima',
      },
    ],
    type: 'website',
  },
};

export default function ServicesPage() {
  return <ServicesLandingPage />;
}
