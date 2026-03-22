'use client';

import Image from 'next/image';

export default function CosmeticService({ title, description, image, benefits }) {
  return (
    <section className="px-4 py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="relative w-full h-80 md:h-[28rem]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-2xl shadow-lg"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>

        {/* Text */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-teal-800">{title}</h1>
          <p className="text-lg text-gray-700 mb-6">{description}</p>
          {benefits?.length > 0 && (
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              {benefits.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
