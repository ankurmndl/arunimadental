// // 'use client';

// // import { useEffect, useState } from 'react';
// // import Link from 'next/link';
// // import { motion, AnimatePresence } from 'framer-motion';

// // export default function Navbar() {
// //   const [scrolled, setScrolled] = useState(false);
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 50);
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   return (
// //     <>
// //       {/* 🔝 Navbar */}
// //       <header
// //         className={`fixed top-0 w-full z-50 transition-all duration-300 ${
// //           scrolled
// //             ? 'bg-white/80 backdrop-blur-md shadow-sm'
// //             : 'bg-transparent'
// //         }`}
// //       >
// //         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

// //           {/* Logo */}
// //           {/* <Link href="/" className="text-xl font-semibold text-gray-800">
// //             Dr. Arunima
// //           </Link> */}
// //           <Link href="/" className="flex flex-col leading-tight">
// //             <span className="text-xl font-bold text-gray-900">
// //                 Exthetix Dental
// //             </span>
// //             <span className="text-xs text-gray-500">
// //                 Dr. Arunima Mukherjee
// //             </span>
// //             </Link>

// //           {/* Desktop Nav */}
// //           <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
// //             <Link href="/">Home</Link>
// //             <Link href="/services">Services</Link>
// //             <Link href="/about">About</Link>
// //             <Link href="/contact">Contact</Link>
// //           </nav>

// //           {/* Desktop CTA */}
// //           <Link
// //             href="/book"
// //             className="hidden md:inline-block bg-teal-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-teal-700 transition"
// //           >
// //             Book Appointment
// //           </Link>

// //           {/* ☰ Mobile Menu Button */}
// //           <button
// //             onClick={() => setMenuOpen(true)}
// //             className="md:hidden text-gray-800"
// //           >
// //             ☰
// //           </button>
// //         </div>
// //       </header>

// //       {/* 🔥 Mobile Drawer */}
// //       <AnimatePresence>
// //         {menuOpen && (
// //           <>
// //             {/* Overlay */}
// //             <motion.div
// //               className="fixed inset-0 bg-black/40 z-40"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               onClick={() => setMenuOpen(false)}
// //             />

// //             {/* Drawer */}
// //             <motion.div
// //               className="fixed top-0 right-0 w-72 h-full bg-white z-50 shadow-lg p-6 flex flex-col gap-6"
// //               initial={{ x: '100%' }}
// //               animate={{ x: 0 }}
// //               exit={{ x: '100%' }}
// //               transition={{ duration: 0.3 }}
// //             >
// //               {/* Close button */}
// //               <button
// //                 onClick={() => setMenuOpen(false)}
// //                 className="self-end text-xl"
// //               >
// //                 ✕
// //               </button>

// //               {/* Links */}
// //               <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
// //               <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
// //               <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
// //               <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

// //               {/* CTA */}
// //               <Link
// //                 href="/book"
// //                 onClick={() => setMenuOpen(false)}
// //                 className="mt-4 bg-teal-600 text-white px-4 py-3 rounded-lg text-center"
// //               >
// //                 Book Appointment
// //               </Link>
// //             </motion.div>
// //           </>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // }

// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import BookAppointment from './BookAppointment';

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       {/* 🔝 Navbar */}
//       <header
//         className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//           scrolled
//             ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200'
//             : 'bg-transparent'
//         }`}
//       >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//         {/* 🔥 LOGO */}
//         <Link href="/" className="flex items-center">
//             <Image
//             src="/images/services/logo.png"
//             alt="Exthetix Dental"
//             width={220}
//             height={60}
//             priority
//             className="object-contain w-[150px] md:w-[190px] lg:w-[220px] transition-transform duration-300 hover:scale-105"
//             />
//         </Link>

//           {/* 🖥️ Desktop Nav */}
//           <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
//             <Link href="/" className="hover:text-teal-600 transition">
//               Home
//             </Link>
//             <Link href="/services" className="hover:text-teal-600 transition">
//               Services
//             </Link>
//             <Link href="/about" className="hover:text-teal-600 transition">
//               About
//             </Link>
//             <Link href="/contact" className="hover:text-teal-600 transition">
//               Contact
//             </Link>
//           </nav>

//           {/* 💎 Desktop CTA */}
//           {/* <Link
//             href="/book"
//             className="hidden md:inline-block bg-teal-600 text-white px-5 py-2 rounded-lg shadow-md shadow-teal-200 hover:bg-teal-700 transition"
//           >
//             Book Appointment
//           </Link> */}
//           <BookAppointment />

//           {/* 📱 Mobile Menu Button */}
//           <button
//             onClick={() => setMenuOpen(true)}
//             className="md:hidden text-gray-800 text-2xl"
//           >
//             ☰
//           </button>
//         </div>
//       </header>

//       {/* 📱 Mobile Drawer */}
//       <AnimatePresence>
//         {menuOpen && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               className="fixed inset-0 bg-black/40 z-40"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setMenuOpen(false)}
//             />

//             {/* Drawer */}
//             <motion.div
//               className="fixed top-0 right-0 w-72 h-full bg-white z-50 shadow-xl p-6 flex flex-col gap-6"
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{ duration: 0.3 }}
//             >
//               {/* Close */}
//               <button
//                 onClick={() => setMenuOpen(false)}
//                 className="self-end text-2xl"
//               >
//                 ✕
//               </button>

//               {/* Links */}
//               <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
//               <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
//               <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
//               <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

//               {/* CTA */}
//               <Link
//                 href="/book"
//                 onClick={() => setMenuOpen(false)}
//                 className="mt-4 bg-teal-600 text-white px-4 py-3 rounded-lg text-center shadow-md"
//               >
//                 Book Appointment
//               </Link>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import BookAppointment from './BookAppointment';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 🔝 Navbar */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 md:py-4 flex items-center justify-between">

          {/* 🔥 LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/services/logo.png"
              alt="Esthetix Dental"
              width={220}
              height={60}
              priority
              className="object-contain w-[140px] md:w-[180px] lg:w-[220px] transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* 🖥️ Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <Link href="/" className="hover:text-teal-600 transition">
              Home
            </Link>
            <Link href="/services" className="hover:text-teal-600 transition">
              Services
            </Link>
            <Link href="/about" className="hover:text-teal-600 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-teal-600 transition">
              Contact
            </Link>
          </nav>

          {/* 💎 Desktop CTA */}
          <div className="hidden md:block">
            <BookAppointment />
          </div>

          {/* 📱 Mobile CTA */}
          <Link
            href="/book"
            className="md:hidden text-sm bg-teal-600 text-white px-3 py-2 rounded-md shadow-sm"
          >
            Book
          </Link>

          {/* 📱 Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-gray-800 text-2xl ml-3"
          >
            ☰
          </button>
        </div>
      </header>

      {/* 📱 Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 w-72 h-full bg-white z-50 shadow-xl p-6 flex flex-col gap-5"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              {/* Close */}
              <button
                onClick={() => setMenuOpen(false)}
                className="self-end text-2xl"
              >
                ✕
              </button>

              {/* Links */}
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 text-lg font-medium hover:text-teal-600 active:scale-95 transition"
              >
                Home
              </Link>

              <Link
                href="/services"
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 text-lg font-medium hover:text-teal-600 active:scale-95 transition"
              >
                Services
              </Link>

              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 text-lg font-medium hover:text-teal-600 active:scale-95 transition"
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 text-lg font-medium hover:text-teal-600 active:scale-95 transition"
              >
                Contact
              </Link>

              {/* Divider */}
              <div className="border-t border-gray-200 my-2"></div>

              {/* CTA */}
              <Link
                href="/book"
                onClick={() => setMenuOpen(false)}
                className="mt-2 bg-teal-600 text-white px-4 py-3 rounded-lg text-center shadow-md hover:bg-teal-700 transition"
              >
                Book Appointment
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}