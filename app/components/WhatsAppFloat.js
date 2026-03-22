'use client';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/917677279977?text=Hi%20I%20want%20to%20book%20an%20appointment"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Button */}
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95">
        {/* WhatsApp Icon (SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-6 h-6 fill-current"
        >
          <path d="M16.01 3C9.39 3 4 8.39 4 15c0 2.64.86 5.08 2.32 7.06L4 29l7.18-2.26A11.94 11.94 0 0 0 16.01 27C22.62 27 28 21.61 28 15S22.62 3 16.01 3zm0 22c-2.23 0-4.31-.72-6.01-1.94l-.43-.28-4.26 1.34 1.39-4.15-.28-.44A9.96 9.96 0 1 1 16.01 25zm5.47-7.53c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07s-1.28-.47-2.43-1.5c-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.48 0 1.46 1.08 2.87 1.23 3.07.15.2 2.13 3.25 5.17 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
        </svg>
      </div>

      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-gray-700 text-sm px-3 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
}