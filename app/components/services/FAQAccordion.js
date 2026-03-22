import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQAccordion({ faq }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faq || faq.length === 0) return null;

  return (
    <section className="max-w-3xl mx-auto mt-16 px-4">
      {/* <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2> */}
      <div className="space-y-4">
        {faq.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium focus:outline-none"
            >
              <span>{item.question}</span>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
