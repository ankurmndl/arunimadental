'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';

// Lazy load BookAppointment only when needed
const LazyBookAppointment = dynamic(() => import('./BookAppointment'), {
  ssr: false,
  loading: () => (
    <button
      disabled
      className="bg-gray-300 text-gray-600 px-6 py-3 rounded-full text-lg shadow cursor-not-allowed"
    >
      Loading...
    </button>
  ),
});

export default function BookAppointmentTrigger() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full text-lg shadow transition-all duration-200"
      >
        Book Appointment
      </button>

      {showModal && <LazyBookAppointment onClose={() => setShowModal(false)} />}
    </>
  );
}
