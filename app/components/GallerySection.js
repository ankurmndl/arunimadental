// 'use client';

// import { useState } from 'react';
// import Lightbox from 'yet-another-react-lightbox';
// import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
// import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
// import Zoom from 'yet-another-react-lightbox/plugins/zoom';
// import 'yet-another-react-lightbox/styles.css';
// import 'yet-another-react-lightbox/plugins/thumbnails.css';

// const images = [
//   { src: '/images/gallery/clinic1.jpg', alt: 'Clinic Interior' },
//   { src: '/images/gallery/smile1.jpg', alt: 'Patient Smile - Before/After' },
//   { src: '/images/gallery/clinic2.jpg', alt: 'Treatment Room' },
//   { src: '/images/gallery/smile2.jpg', alt: 'Smile Makeover' },
//   { src: '/images/gallery/clinic3.jpg', alt: 'Reception Area' },
//   { src: '/images/gallery/smile3.jpg', alt: 'Another Happy Patient' },
// ];

// export default function GallerySection() {
//   const [index, setIndex] = useState(-1);

//   return (
//     <section className="bg-white py-20 px-4">
//       <div className="max-w-6xl mx-auto text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">
//           Smile Gallery
//         </h2>
//         <p className="text-gray-600 text-lg">
//           Real smiles. Real results. Take a look at our patient transformations and clinic environment.
//         </p>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
//         {images.map((img, i) => (
//           <div
//             key={i}
//             className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
//             onClick={() => setIndex(i)}
//           >
//             <img
//               src={img.src}
//               alt={img.alt}
//               className="w-full h-48 md:h-64 object-cover"
//               loading="lazy"
//             />
//           </div>
//         ))}
//       </div>

//       <Lightbox
//         open={index >= 0}
//         close={() => setIndex(-1)}
//         index={index}
//         slides={images}
//         plugins={[Thumbnails, Zoom, Fullscreen]}
//       />
//     </section>
//   );
// }

'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const images = [
  {
    src: '/images/services/waiting-area.webp',
    alt: 'Comfortable waiting area at Exthetix Dental Ranchi',
  },
  {
    src: '/images/services/kid-1.webp',
    alt: 'Happy child patient with Dr Arunima',
  },
  {
    src: '/images/services/kid-2.webp',
    alt: 'Positive pediatric dental experience',
  },
  {
    src: '/images/services/kid-3.webp',
    alt: 'Friendly dental care for children',
  },
  {
    src: '/images/services/kid-4.webp',
    alt: 'Smiling young patient after treatment',
  },
  {
    src: '/images/services/family.webp',
    alt: 'Happy patient and family at Exthetix Dental',
  },
];

export default function GallerySection() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="bg-white py-24 px-4">

      {/* 🔥 HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">
          Inside Exthetix Dental
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A glimpse into our clinic, happy patients, and the care we provide every day in Ranchi.
        </p>
      </div>

      {/* 🔥 PREMIUM GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-5 auto-rows-[200px] md:auto-rows-[220px]">

        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`relative cursor-pointer overflow-hidden rounded-2xl shadow-md group ${
              i === 0 ? 'col-span-2 row-span-2' : ''
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />

            {/* 🔥 Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
          </div>
        ))}

      </div>

      {/* 🔥 LIGHTBOX */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images}
        plugins={[Thumbnails, Zoom, Fullscreen]}
      />

    </section>
  );
}