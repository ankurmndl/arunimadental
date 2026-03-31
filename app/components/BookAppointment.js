
// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import { createPortal } from 'react-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { CheckCircle2 } from 'lucide-react';

// export default function BookAppointment() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [startDate, setStartDate] = useState(() => {
//     // round to next available 15-min slot optionally, here default to now
//     return new Date();
//   });
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });
//   const [status, setStatus] = useState(null);
//   const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
//   const [recaptchaRendered, setRecaptchaRendered] = useState(false);
//   const captchaRef = useRef(null);
//   const modalRef = useRef(null);
//   const firstInputRef = useRef(null);

//   // Toggle modal
//   const openModal = () => setIsOpen(true);
//   const closeModal = () => setIsOpen(false);

//   // --- Lazy load reCAPTCHA when modal opens ---
//   useEffect(() => {
//     // load script only when modal opens and not already present
//     if (isOpen && !document.getElementById('recaptcha-script')) {
//       const script = document.createElement('script');
//       script.id = 'recaptcha-script';
//       script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
//       script.async = true;
//       script.defer = true;
//       script.onload = () => setRecaptchaLoaded(true);
//       document.body.appendChild(script);
//     } else if (isOpen && window.grecaptcha) {
//       // script may already be present
//       setRecaptchaLoaded(true);
//     }
//   }, [isOpen]);

//   // --- Render the recaptcha widget after script has loaded and modal opens ---
//   useEffect(() => {
//     if (isOpen && recaptchaLoaded && window.grecaptcha && captchaRef.current && !recaptchaRendered) {
//       try {
//         // render the widget
//         window.grecaptcha.render(captchaRef.current, {
//           sitekey: '6LfuO8srAAAAAKQGQvj9ICiGQMIyXcLIxKXJ7-fx', // keep your site key or replace
//         });
//         setRecaptchaRendered(true);
//       } catch (err) {
//         // eslint-disable-next-line no-console
//         console.warn('recaptcha render failed', err);
//       }
//     }
//   }, [isOpen, recaptchaLoaded, recaptchaRendered]);

//   // --- Prevent body scroll when modal open ---
//   useEffect(() => {
//     if (isOpen) {
//       const prev = document.body.style.overflow;
//       document.body.style.overflow = 'hidden';
//       return () => {
//         document.body.style.overflow = prev;
//       };
//     }
//     return undefined;
//   }, [isOpen]);

//   // --- Focus trap and ESC handling ---
//   useEffect(() => {
//     if (!isOpen) return;

//     const modal = modalRef.current;
//     const focusableSelectors = [
//       'a[href]',
//       'button:not([disabled])',
//       'textarea:not([disabled])',
//       'input:not([disabled])',
//       'select:not([disabled])',
//       '[tabindex]:not([tabindex="-1"])',
//     ];

//     const focusable = modal ? Array.from(modal.querySelectorAll(focusableSelectors.join(','))) : [];
//     const first = focusable[0];
//     const last = focusable[focusable.length - 1];

//     // set initial focus
//     (firstInputRef.current || first)?.focus();

//     function onKeyDown(e) {
//       if (e.key === 'Escape') {
//         e.preventDefault();
//         closeModal();
//       } else if (e.key === 'Tab') {
//         // focus trap
//         if (!focusable.length) {
//           e.preventDefault();
//           return;
//         }
//         if (e.shiftKey) {
//           if (document.activeElement === first) {
//             e.preventDefault();
//             last.focus();
//           }
//         } else {
//           if (document.activeElement === last) {
//             e.preventDefault();
//             first.focus();
//           }
//         }
//       }
//     }

//     document.addEventListener('keydown', onKeyDown);
//     return () => document.removeEventListener('keydown', onKeyDown);
//   }, [isOpen]);

//   // --- form handling ---
//   const handleChange = (e) => {
//     setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
//   };

//   // Create a read-only custom input for react-datepicker so manual typing is prevented
//   const DateInput = React.forwardRef(({ value, onClick }, ref) => (
//     <input
//       ref={ref}
//       value={value}
//       onClick={onClick}
//       readOnly
//       aria-label="Select appointment date and time"
//       className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 outline-none bg-white placeholder:text-gray-500 text-gray-800 cursor-pointer"
//       placeholder="Select date & time"
//     />
//   ));
//   DateInput.displayName = 'DateInput';

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!formData.name || !formData.email || !formData.phone || !startDate) {
//       setStatus({ type: 'error', text: 'Please fill all required fields.' });
//       return;
//     }

//     // Get recaptcha response (if rendered)
//     const captchaResponse = window.grecaptcha?.getResponse?.() || null;
//     if (!captchaResponse) {
//       setStatus({ type: 'error', text: 'Please complete the CAPTCHA.' });
//       return;
//     }

//     setStatus({ type: 'loading', text: 'Submitting...' });

//     try {
//       const res = await fetch('/api/appointment', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           ...formData,
//           date: startDate.toISOString(),
//           captcha: captchaResponse,
//         }),
//       });
//       const result = await res.json();

//       if (result?.status === 'success') {
//         setStatus({ type: 'success', text: 'Appointment booked successfully!' });
//         setFormData({ name: '', email: '', phone: '', message: '' });
//         setStartDate(new Date());
//         // reset recaptcha if present
//         window.grecaptcha?.reset?.();
//         // auto close after small delay
//         setTimeout(() => {
//           setIsOpen(false);
//           setStatus(null);
//         }, 1800);
//       } else {
//         setStatus({ type: 'error', text: result?.message || 'Something went wrong. Please try again.' });
//         window.grecaptcha?.reset?.();
//       }
//     } catch (err) {
//       // eslint-disable-next-line no-console
//       console.error(err);
//       setStatus({ type: 'error', text: 'Network error. Try again later.' });
//       window.grecaptcha?.reset?.();
//     }
//   };

//   // Helper to stop propagation on the inner modal click
//   const stop = (e) => e.stopPropagation();

//   // Modal content
//   const modalContent = (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           key="backdrop"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/45 backdrop-blur-sm p-4"
//           onClick={closeModal}
//         >
//           <motion.div
//             ref={modalRef}
//             role="dialog"
//             aria-modal="true"
//             aria-labelledby="book-appoint-title"
//             key="modal"
//             initial={{ scale: 0.96, opacity: 0, y: 8 }}
//             animate={{ scale: 1, opacity: 1, y: 0 }}
//             exit={{ scale: 0.96, opacity: 0, y: 8 }}
//             transition={{ type: 'spring', stiffness: 380, damping: 28 }}
//             className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative border border-gray-100"
//             onClick={stop}
//           >
//             <button
//               onClick={closeModal}
//               aria-label="Close appointment dialog"
//               className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
//             >
//               ✕
//             </button>

//             <h2 id="book-appoint-title" className="text-2xl font-semibold text-center mb-4 text-gray-800">
//               Book Your Consultation
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="sr-only">Full name</label>
//                 <input
//                   ref={firstInputRef}
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Full name"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 outline-none bg-white placeholder:text-gray-500 text-gray-800"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="sr-only">Email address</label>
//                 <input
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email address"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 outline-none bg-white placeholder:text-gray-500 text-gray-800"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="sr-only">Phone number</label>
//                 <input
//                   name="phone"
//                   type="tel"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Phone number"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 outline-none bg-white placeholder:text-gray-500 text-gray-800"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs uppercase text-gray-500 mb-2">Select date & time</label>
//                 <DatePicker
//                   selected={startDate}
//                   onChange={(date) => setStartDate(date)}
//                   showTimeSelect
//                   timeIntervals={15}
//                   dateFormat="MMMM d, yyyy h:mm aa"
//                   minDate={new Date()}
//                   customInput={<DateInput />}
//                   popperPlacement="bottom"
//                 />
//               </div>

//               <div>
//                 <label className="sr-only">Message</label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Message / Notes (optional)"
//                   rows={3}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 outline-none bg-white placeholder:text-gray-500 text-gray-800"
//                 />
//               </div>

//               {/* CAPTCHA renders here only after lazy load */}
//               <div ref={captchaRef} className="mt-2" />

//               <button
//                 type="submit"
//                 disabled={status?.type === 'loading'}
//                 className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white py-3 rounded-full font-medium shadow transition disabled:opacity-60"
//               >
//                 {status?.type === 'loading' ? 'Submitting...' : 'Book Appointment'}
//               </button>

//               {/* feedback */}
//               {status?.type === 'success' && (
//                 <div className="flex items-center gap-2 text-green-600 justify-center mt-2">
//                   <CheckCircle2 />
//                   <span className="text-sm font-medium">{status.text}</span>
//                 </div>
//               )}
//               {status?.type === 'error' && (
//                 <div className="text-red-600 text-sm text-center mt-2">{status.text}</div>
//               )}
//             </form>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );

//   // Render portal to body so modal doesn't inherit page styles
//   return (
//     <>
//       <motion.button
//         whileHover={{ scale: 1.03 }}
//         whileTap={{ scale: 0.98 }}
//         onClick={openModal}
//         className="bg-gradient-to-r from-teal-600 to-teal-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
//       >
//         Book Appointment
//       </motion.button>

//       {typeof window !== 'undefined' && createPortal(modalContent, document.body)}
//     </>
//   );
// }

'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CheckCircle2 } from 'lucide-react';


export default function BookAppointment() {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(() => new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [bookedSlots, setBookedSlots] = useState([]);

  const captchaRef = useRef(null);
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  // 🔥 OPEN / CLOSE
  const openModal = () => setIsOpen(true);

  const closeModal = () => {
    setIsOpen(false);

    // 🔥 Clear old captcha instance
    if (captchaRef.current) {
      captchaRef.current.innerHTML = "";
    }
  };

  const openWhatsApp = () => {
  const message = `Hi, I just booked an appointment at Esthetix Dental.

  Name: ${formData.name}
  Date: ${startDate.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    })}

  📍 Location: https://maps.google.com/?q=Esthetix+Dental+Ranchi

  Please confirm.`;

    window.open(
      `https://wa.me/917677279977?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const openMaps = () => {
    window.open(
      "https://maps.google.com/?q=Esthetix+Dental+Ranchi",
      "_blank"
    );
  };

  const callClinic = () => {
    window.open("tel:+917677279977");
  };

  useEffect(() => {
      async function fetchSlots() {
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbyDstljLVMdMJPPmzfbAAeFokqBIudX69M3muXNVwCjr09m5sci0dBMNeVbwThaekXn/exec?action=getAppointments"
        );
        const data = await res.json();

        if (data.status === "success") {
          const slots = data.appointments.map(a => new Date(a.Date));
          setBookedSlots(slots);
        }
      }

      fetchSlots();
    }, []);

  const isSlotBooked = (date) => {
    return bookedSlots.some(
      (slot) => slot.toLocaleString() === date.toLocaleString()
    );
  };

  // 🔥 Load reCAPTCHA script once
  useEffect(() => {
    if (isOpen && !document.getElementById('recaptcha-script')) {
      const script = document.createElement('script');
      script.id = 'recaptcha-script';
      script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.onload = () => setRecaptchaLoaded(true);
      document.body.appendChild(script);
    } else if (isOpen && window.grecaptcha) {
      setRecaptchaLoaded(true);
    }
  }, [isOpen]);

  // 🔥 ALWAYS render fresh captcha
  // useEffect(() => {
  //   if (!isOpen) return;

  //   if (!window.grecaptcha || !captchaRef.current) return;

  //   // clear previous instance
  //   captchaRef.current.innerHTML = "";

  //   try {
  //     window.grecaptcha.render(captchaRef.current, {
  //       sitekey: '6LfuO8srAAAAAKQGQvj9ICiGQMIyXcLIxKXJ7-fx',
  //     });
  //   } catch (err) {
  //     console.warn("recaptcha render failed", err);
  //   }
  // }, [isOpen, recaptchaLoaded]);

  useEffect(() => {
      if (!isOpen) return;

        const interval = setInterval(() => {
          if (window.grecaptcha && captchaRef.current) {
            try {
              captchaRef.current.innerHTML = "";

              window.grecaptcha.render(captchaRef.current, {
                sitekey: '6LfuO8srAAAAAKQGQvj9ICiGQMIyXcLIxKXJ7-fx',
              });

              clearInterval(interval); // 🔥 stop once rendered
            } catch (err) {
              console.warn("recaptcha render failed", err);
            }
          }
        }, 300); // check every 300ms

        return () => clearInterval(interval);
      }, [isOpen]);

  // 🔥 Prevent scroll
  useEffect(() => {
    if (!isOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prev || '';
    };
  }, [isOpen]);

  // 🔥 Focus trap
  useEffect(() => {
    if (!isOpen) return;

    const modal = modalRef.current;
    const focusable = modal
      ? modal.querySelectorAll('input, button, textarea')
      : [];

    focusable[0]?.focus();

    const handleKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  // 🔥 Form
  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const DateInput = React.forwardRef(({ value, onClick }, ref) => (
    <input
      ref={ref}
      value={value}
      onClick={onClick}
      readOnly
      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 outline-none text-gray-800"
      placeholder="Select date & time"
    />
  ));
  DateInput.displayName = 'DateInput';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !startDate) {
      setStatus({ type: 'error', text: 'Please fill all required fields.' });
      return;
    }

    const captchaResponse = window.grecaptcha?.getResponse?.();

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

        window.grecaptcha?.reset?.();

        // setTimeout(() => {
        //   closeModal();
        //   setStatus(null);
        // }, 1500);
      } else {
        setStatus({ type: 'error', text: result?.message || 'Something went wrong.' });
        window.grecaptcha?.reset?.();
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', text: 'Network error. Try again.' });
      window.grecaptcha?.reset?.();
    }
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <motion.div
            ref={modalRef}
            // className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6"
            className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-200 w-full max-w-md p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className="absolute top-4 right-4">✕</button>

            {/* <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
              Book Appointment
            </h2> */}
            <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800 tracking-tight">
                  Book Appointment
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Quick and easy scheduling
                </p>
              </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                ref={firstInputRef}
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                // className="w-full border px-4 py-3 rounded-lg text-gray-800"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
              />

              <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                // className="w-full border px-4 py-3 rounded-lg text-gray-800"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
              />

              <input
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                // className="w-full border px-4 py-3 rounded-lg text-gray-800"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
              />

              {/* <DatePicker
                selected={startDate}
                onChange={(date) => date && setStartDate(date)}
                showTimeSelect
                timeIntervals={15}
                minDate={new Date()}
                customInput={<DateInput />}
              /> */}
              <DatePicker
                selected={startDate}
                onChange={(date) => date && setStartDate(date)}
                showTimeSelect
                timeIntervals={15}
                minDate={new Date()}

                // 🔥 Time restriction
                minTime={setTime(new Date(), 10, 0)}
                maxTime={setTime(new Date(), 19, 0)}

                // 🔥 Disable booked slots
                filterTime={(time) => !isSlotBooked(time)}

                customInput={<DateInput />}
                timeClassName={() => "text-gray-800 text-sm px-3 py-2"}
                calendarClassName="shadow-xl rounded-xl border border-gray-200"
                timeCaption="Time"
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                // className="w-full border px-4 py-3 rounded-lg text-gray-800"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
              />

              {/* CAPTCHA */}
              <div ref={captchaRef} />

              <button className="w-full bg-gray-900 text-white py-3 rounded-lg">
                {/* {status?.type === 'loading' ? 'Submitting...' : 'Book Appointment'} */}
                {status?.type === 'loading' ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Booking...
                </span>
              ) : 'Book Appointment'}
              </button>

              {/* {status?.type === 'success' && (
                <div className="flex justify-center text-green-600 text-sm">
                  <CheckCircle2 /> {status.text}
                </div>
              )} */}

              {status?.type === 'success' && (
               <div className="mt-5 text-center space-y-5">

    {/* Success */}
              <div className="flex items-center justify-center gap-2 text-green-600">
                <CheckCircle2 size={20} />
                <span className="text-sm font-medium">
                  Appointment booked successfully
                </span>
              </div>

              <p className="text-sm text-gray-600">
                You can confirm or get directions instantly
              </p>

              {/* Actions */}
              <div className="grid grid-cols-1 gap-3">

                {/* WhatsApp */}
                <button
                  onClick={openWhatsApp}
                  className="bg-green-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-green-700 transition"
                >
                  Confirm on WhatsApp
                </button>

                {/* Location */}
                <button
                  onClick={openMaps}
                  className="bg-white border border-gray-300 text-gray-800 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
                >
                  View Location
                </button>

                {/* Call */}
                <button
                  onClick={callClinic}
                  className="bg-white border border-gray-300 text-gray-800 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
                >
                  Call Clinic
                </button>

                {/* Done */}
                <button
                  onClick={closeModal}
                  className="text-sm text-gray-500 hover:text-gray-800 mt-1"
                >
                  Done
                </button>

              </div>

            </div>
          )}

              {status?.type === 'error' && (
                <p className="text-red-600 text-sm text-center">{status.text}</p>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

    function setTime(date, hour, minute) {
    const d = new Date(date);
    d.setHours(hour);
    d.setMinutes(minute);
    d.setSeconds(0);
    d.setMilliseconds(0);
    return d;
  }

  return (
    <>
      <button
        onClick={openModal}
        className="bg-gray-900 text-white px-6 py-3 rounded-full"
      >
        Book Appointment
      </button>

      {typeof window !== 'undefined' && createPortal(modalContent, document.body)}
    </>
  );
}