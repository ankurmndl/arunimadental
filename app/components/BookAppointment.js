

// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { CheckCircle2 } from 'lucide-react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// export default function BookAppointment() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [startDate, setStartDate] = useState(new Date());
//   const [formData, setFormData] = useState({
//     name: '', email: '', phone: '', message: ''
//   });
//   const [status, setStatus] = useState(null);
//   const captchaRef = useRef(null);

//   const toggleModal = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     if (!document.getElementById('recaptcha-script')) {
//       const script = document.createElement('script');
//       script.id = 'recaptcha-script';
//       script.src = 'https://www.google.com/recaptcha/api.js';
//       script.async = true;
//       script.defer = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   useEffect(() => {
//     if (isOpen && window.grecaptcha && captchaRef.current) {
//       window.grecaptcha.render(captchaRef.current, {
//         sitekey: '6LfuO8srAAAAAKQGQvj9ICiGQMIyXcLIxKXJ7-fx',
//       });
//     }
//   }, [isOpen]);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.phone || !startDate) {
//       setStatus('Please fill all required fields.');
//       return;
//     }
//     const captchaResponse = window.grecaptcha?.getResponse();
//     if (!captchaResponse) {
//       setStatus('Please complete the CAPTCHA.');
//       return;
//     }

//     setStatus('loading');

//     try {
//       const res = await fetch('/api/appointment', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           ...formData,
//           date: startDate,
//           captcha: captchaResponse,
//         }),
//       });
//       const result = await res.json();
//       if (result.status === 'success') {
//         setStatus('success');
//         setFormData({ name: '', email: '', phone: '', message: '' });
//         setStartDate(new Date());
//         setTimeout(() => setIsOpen(false), 2000);
//       } else {
//         setStatus(result.message || 'Something went wrong.');
//       }
//       window.grecaptcha?.reset();
//     } catch {
//       setStatus('Something went wrong. Please try again.');
//       window.grecaptcha?.reset();
//     }
//   };

//   return (
//     <>
//       {/* CTA Button */}
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.98 }}
//         onClick={toggleModal}
//         className="bg-gradient-to-r from-teal-600 to-teal-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
//       >
//         Book Appointment
//       </motion.button>

//       {/* Modal */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             key="modal"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md"
//             onClick={toggleModal}
//           >
//             <motion.div
//               key="content"
//               initial={{ scale: 0.9, opacity: 0, y: 20 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.95, opacity: 0 }}
//               transition={{ type: 'spring', stiffness: 260, damping: 25 }}
//               className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-md p-8 relative border border-white/20"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Close */}
//               <button
//                 onClick={toggleModal}
//                 className="absolute top-3 right-3 text-gray-600 hover:text-gray-700 text-xl"
//               >
//                 ✕
//               </button>

//               <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
//                 Book Your Consultation
//               </h2>

//               <form onSubmit={handleSubmit} className="space-y-5">
//                 {['name', 'email', 'phone'].map((field) => (
//                   <div key={field} className="relative">
//                     <input
//                       type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
//                       name={field}
//                       required
//                       value={formData[field]}
//                       onChange={handleChange}
//                       className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition bg-white/70"
//                       placeholder=" "
//                     />
//                     <label
//                       className="absolute left-4 top-2.5 text-gray-500 text-xs uppercase tracking-wider transition-all
//                       peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400"
//                     >
//                       {field.charAt(0).toUpperCase() + field.slice(1)}
//                     </label>
//                   </div>
//                 ))}

//                 {/* Date + Time Picker */}
//                 <div className="relative">
//                   <label className="block text-xs uppercase text-gray-500 mb-1 tracking-wide">
//                     Select Date & Time
//                   </label>
//                   <DatePicker
//                     selected={startDate}
//                     onChange={(date) => setStartDate(date)}
//                     showTimeSelect
//                     dateFormat="MMMM d, yyyy h:mm aa"
//                     className="w-full border border-gray-300 text-gray-600 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 outline-none bg-white/70 cursor-pointer"
//                     minDate={new Date()}
//                   />
//                 </div>

//                 <textarea
//                   name="message"
//                   rows="3"
//                   placeholder="Message / Notes"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 text-gray-600 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition bg-white/70"
//                 ></textarea>

//                 <div ref={captchaRef}></div>

//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   type="submit"
//                   disabled={status === 'loading'}
//                   className="w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white py-3 rounded-full font-medium shadow-md hover:shadow-lg transition disabled:opacity-50"
//                 >
//                   {status === 'loading' ? 'Submitting...' : 'Submit'}
//                 </motion.button>

//                 {/* Status */}
//                 <AnimatePresence>
//                   {status === 'success' && (
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0 }}
//                       className="flex flex-col items-center justify-center text-green-600 mt-4"
//                     >
//                       <CheckCircle2 size={28} className="mb-1" />
//                       <p className="text-sm font-medium">Appointment booked successfully!</p>
//                     </motion.div>
//                   )}
//                   {status && status !== 'loading' && status !== 'success' && (
//                     <motion.p
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       className="text-center text-red-600 text-sm"
//                     >
//                       {status}
//                     </motion.p>
//                   )}
//                 </AnimatePresence>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// components/BookAppointment.jsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CheckCircle2 } from 'lucide-react';

/**
 * Production-ready BookAppointment modal
 *
 * - Lazy-loads reCAPTCHA script when modal opens
 * - Renders modal as a portal to document.body (avoids style inheritance)
 * - ESC to close, focus trap, initial focus
 * - DatePicker is readOnly so users must use the picker (no manual typing)
 * - Default date is today
 * - Keeps the same /api/appointment POST flow you already have
 *
 * NOTE: Replace the sitekey with your own if needed.
 */

export default function BookAppointment() {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(() => {
    // round to next available 15-min slot optionally, here default to now
    return new Date();
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [recaptchaRendered, setRecaptchaRendered] = useState(false);
  const captchaRef = useRef(null);
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  // Toggle modal
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // --- Lazy load reCAPTCHA when modal opens ---
  useEffect(() => {
    // load script only when modal opens and not already present
    if (isOpen && !document.getElementById('recaptcha-script')) {
      const script = document.createElement('script');
      script.id = 'recaptcha-script';
      script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.onload = () => setRecaptchaLoaded(true);
      document.body.appendChild(script);
    } else if (isOpen && window.grecaptcha) {
      // script may already be present
      setRecaptchaLoaded(true);
    }
  }, [isOpen]);

  // --- Render the recaptcha widget after script has loaded and modal opens ---
  useEffect(() => {
    if (isOpen && recaptchaLoaded && window.grecaptcha && captchaRef.current && !recaptchaRendered) {
      try {
        // render the widget
        window.grecaptcha.render(captchaRef.current, {
          sitekey: '6LfuO8srAAAAAKQGQvj9ICiGQMIyXcLIxKXJ7-fx', // keep your site key or replace
        });
        setRecaptchaRendered(true);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn('recaptcha render failed', err);
      }
    }
  }, [isOpen, recaptchaLoaded, recaptchaRendered]);

  // --- Prevent body scroll when modal open ---
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return undefined;
  }, [isOpen]);

  // --- Focus trap and ESC handling ---
  useEffect(() => {
    if (!isOpen) return;

    const modal = modalRef.current;
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ];

    const focusable = modal ? Array.from(modal.querySelectorAll(focusableSelectors.join(','))) : [];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    // set initial focus
    (firstInputRef.current || first)?.focus();

    function onKeyDown(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
      } else if (e.key === 'Tab') {
        // focus trap
        if (!focusable.length) {
          e.preventDefault();
          return;
        }
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  // --- form handling ---
  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  // Create a read-only custom input for react-datepicker so manual typing is prevented
  const DateInput = React.forwardRef(({ value, onClick }, ref) => (
    <input
      ref={ref}
      value={value}
      onClick={onClick}
      readOnly
      aria-label="Select appointment date and time"
      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 outline-none bg-white placeholder:text-gray-500 text-gray-800 cursor-pointer"
      placeholder="Select date & time"
    />
  ));
  DateInput.displayName = 'DateInput';

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !startDate) {
      setStatus({ type: 'error', text: 'Please fill all required fields.' });
      return;
    }

    // Get recaptcha response (if rendered)
    const captchaResponse = window.grecaptcha?.getResponse?.() || null;
    if (!captchaResponse) {
      setStatus({ type: 'error', text: 'Please complete the CAPTCHA.' });
      return;
    }

    setStatus({ type: 'loading', text: 'Submitting...' });

    try {
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: startDate.toISOString(),
          captcha: captchaResponse,
        }),
      });
      const result = await res.json();

      if (result?.status === 'success') {
        setStatus({ type: 'success', text: 'Appointment booked successfully!' });
        setFormData({ name: '', email: '', phone: '', message: '' });
        setStartDate(new Date());
        // reset recaptcha if present
        window.grecaptcha?.reset?.();
        // auto close after small delay
        setTimeout(() => {
          setIsOpen(false);
          setStatus(null);
        }, 1800);
      } else {
        setStatus({ type: 'error', text: result?.message || 'Something went wrong. Please try again.' });
        window.grecaptcha?.reset?.();
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      setStatus({ type: 'error', text: 'Network error. Try again later.' });
      window.grecaptcha?.reset?.();
    }
  };

  // Helper to stop propagation on the inner modal click
  const stop = (e) => e.stopPropagation();

  // Modal content
  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/45 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-appoint-title"
            key="modal"
            initial={{ scale: 0.96, opacity: 0, y: 8 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 8 }}
            transition={{ type: 'spring', stiffness: 380, damping: 28 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative border border-gray-100"
            onClick={stop}
          >
            <button
              onClick={closeModal}
              aria-label="Close appointment dialog"
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>

            <h2 id="book-appoint-title" className="text-2xl font-semibold text-center mb-4 text-gray-800">
              Book Your Consultation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="sr-only">Full name</label>
                <input
                  ref={firstInputRef}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 outline-none bg-white placeholder:text-gray-500 text-gray-800"
                  required
                />
              </div>

              <div>
                <label className="sr-only">Email address</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 outline-none bg-white placeholder:text-gray-500 text-gray-800"
                  required
                />
              </div>

              <div>
                <label className="sr-only">Phone number</label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 outline-none bg-white placeholder:text-gray-500 text-gray-800"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase text-gray-500 mb-2">Select date & time</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  minDate={new Date()}
                  customInput={<DateInput />}
                  popperPlacement="bottom"
                />
              </div>

              <div>
                <label className="sr-only">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message / Notes (optional)"
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 outline-none bg-white placeholder:text-gray-500 text-gray-800"
                />
              </div>

              {/* CAPTCHA renders here only after lazy load */}
              <div ref={captchaRef} className="mt-2" />

              <button
                type="submit"
                disabled={status?.type === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white py-3 rounded-full font-medium shadow transition disabled:opacity-60"
              >
                {status?.type === 'loading' ? 'Submitting...' : 'Book Appointment'}
              </button>

              {/* feedback */}
              {status?.type === 'success' && (
                <div className="flex items-center gap-2 text-green-600 justify-center mt-2">
                  <CheckCircle2 />
                  <span className="text-sm font-medium">{status.text}</span>
                </div>
              )}
              {status?.type === 'error' && (
                <div className="text-red-600 text-sm text-center mt-2">{status.text}</div>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Render portal to body so modal doesn't inherit page styles
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={openModal}
        className="bg-gradient-to-r from-teal-600 to-teal-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
      >
        Book Appointment
      </motion.button>

      {typeof window !== 'undefined' && createPortal(modalContent, document.body)}
    </>
  );
}
