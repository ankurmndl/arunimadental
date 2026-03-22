

// // // // app/page.js
// // // import Image from 'next/image';

// // // export default function HomePage() {
// // //   return (
// // //     <main className="min-h-screen bg-white text-gray-900">
// // //       {/* Hero Section */}
// // //       <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-white via-teal-50 to-white px-4">
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl items-center">
          
// // //           {/* Text Content */}
// // //           <div className="z-10 text-center md:text-left">
// // //             <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
// // //               Cosmetic & Implant Dentistry<br />with a Human Touch
// // //             </h1>
// // //             <p className="text-lg md:text-xl text-gray-600 mb-6">
// // //               12+ years of creating beautiful, confident smiles
// // //             </p>
// // //             <div className="flex justify-center md:justify-start gap-4">
// // //               <a href="/contact" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg text-lg shadow transition">
// // //                 Book Appointment
// // //               </a>
// // //               <a href="/services" className="text-teal-700 border border-teal-600 px-6 py-3 rounded-lg text-lg hover:bg-teal-50 transition">
// // //                 View Services
// // //               </a>
// // //             </div>
// // //           </div>

// // //           {/* Doctor Image */}
// // //           <div className="relative w-full h-80 md:h-96 flex justify-center">
// // //             <Image
// // //               src="/images/dr-arunima.jpg"
// // //               alt="Dr. Arunima Mukherjee"
// // //               width={400}
// // //               height={400}
// // //               className="rounded-2xl object-cover shadow-lg"
// // //               priority={false} // lazy-load
// // //             />
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </main>
// // //   );
// // // }

// // 'use client';

// // import Image from 'next/image';
// // import { motion } from 'framer-motion';

// // export default function HomePage() {
// //   return (
// //     <main className="min-h-screen bg-white text-gray-900">
// //       {/* Hero Section */}
// //       <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-white via-teal-50 to-white px-4">
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl items-center">

// //           {/* Text Content with slide-up animation */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 40 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, ease: 'easeOut' }}
// //             className="z-10 text-center md:text-left"
// //           >
// //             <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
// //               Cosmetic & Implant Dentistry<br />with a Human Touch
// //             </h1>
// //             <p className="text-lg md:text-xl text-gray-600 mb-6">
// //               12+ years of creating beautiful, confident smiles
// //             </p>
// //             <div className="flex justify-center md:justify-start gap-4">
// //               <a href="/contact" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg text-lg shadow transition">
// //                 Book Appointment
// //               </a>
// //               <a href="/services" className="text-teal-700 border border-teal-600 px-6 py-3 rounded-lg text-lg hover:bg-teal-50 transition">
// //                 View Services
// //               </a>
// //             </div>
// //           </motion.div>

// //           {/* Doctor Image with zoom-in animation */}
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
// //             className="relative w-full h-80 md:h-96 flex justify-center"
// //           >
// //             <Image
// //               src="/images/dr-arunima.jpg"
// //               alt="Dr. Arunima Mukherjee"
// //               width={400}
// //               height={400}
// //               className="rounded-2xl object-cover shadow-lg"
// //               priority={false}
// //             />
// //           </motion.div>

// //         </div>
// //       </section>
// //     </main>
// //   );
// // }


// 'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import ServicesSection from './components/ServicesSection';
// import TestimonialsSection from './components/TestimonialsSection';
// import LocationSection from './components/LocationSection';
// import Footer from './components/Footer';
// import GallerySection from './components/GallerySection';
// import HeroSection from './components/HeroSection';
// import AboutSection from './components/AboutSection';

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-white text-gray-900">
//     <HeroSection />
//     <AboutSection />
//     <ServicesSection />
//     <TestimonialsSection />
//     <LocationSection />
//     <GallerySection />
//     <Footer />
//     </main>
//   );
// }

'use client';

import dynamic from 'next/dynamic';
import HeroSection from './components/HeroSection';
import Navbar from './components/NavBar';

// Lazy-load non-critical sections
const AboutSection = dynamic(() => import('./components/AboutSection'));
const ServicesSection = dynamic(() => import('./components/ServicesSection'));
const TestimonialsSection = dynamic(() => import('./components/TestimonialsSection'));
const GallerySection = dynamic(() => import('./components/GallerySection'));
const LocationSection = dynamic(() => import('./components/LocationSection'));
const Footer = dynamic(() => import('./components/Footer'));

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <LocationSection />
      <GallerySection />
    </main>
  );
}
