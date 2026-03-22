
// // import SingleServicePage from '@/app/components/services/SingleServicePage';
// // import { servicesArray, servicesMap } from '@/lib/servicesData';
// // import { notFound } from 'next/navigation';

// // // --- Metadata generation using servicesMap for quick lookup
// // export function generateMetadata({ params }) {
// //   const service = servicesMap[params.slug];
// //   if (!service) return {};

// //   return {
// //     title: `${service.title} | Dr. Arunima Mukherjee`,
// //     description: service.description,
// //     openGraph: {
// //       title: `${service.title} | Dr. Arunima Mukherjee`,
// //       description: service.description,
// //       url: `https://yourdomain.com/services/${params.slug}`,
// //       images: [
// //         {
// //           url: `https://yourdomain.com${service.image}`,
// //           width: 1200,
// //           height: 630,
// //           alt: service.title,
// //         },
// //       ],
// //     },
// //   };
// // }

// // export default function ServicePage({ params }) {
// //   const service = servicesMap[params.slug];
// //   if (!service) return notFound();

// //   const breadcrumbSchema = {
// //     "@context": "https://schema.org",
// //     "@type": "BreadcrumbList",
// //     "itemListElement": [
// //       {
// //         "@type": "ListItem",
// //         "position": 1,
// //         "name": "Home",
// //         "item": "https://yourdomain.com"
// //       },
// //       {
// //         "@type": "ListItem",
// //         "position": 2,
// //         "name": "Services",
// //         "item": "https://yourdomain.com/services"
// //       },
// //       {
// //         "@type": "ListItem",
// //         "position": 3,
// //         "name": service.title,
// //         "item": `https://yourdomain.com/services/${service.slug}`
// //       }
// //     ]
// //   };

// //   return (
// //     <>
// //       <SingleServicePage
// //         title={service.title}
// //         description={service.description}
// //         image={service.image}
// //         benefits={service.benefits}
// //         schema={service.schema}
// //       />

// //       {/* Inject JSON-LD for service + breadcrumb */}
// //       <script
// //         type="application/ld+json"
// //         dangerouslySetInnerHTML={{
// //           __html: JSON.stringify([service.schema, breadcrumbSchema]),
// //         }}
// //       />
// //     </>
// //   );
// // }

// import SingleServicePage from '@/app/components/services/SingleServicePage';
// import { servicesArray, servicesMap } from '@/lib/servicesData';
// import { notFound } from 'next/navigation';

// // --- Metadata generation using servicesMap for quick lookup
// export function generateMetadata({ params }) {
//   const service = servicesMap[params.slug];
//   if (!service) return {};

//   return {
//     title: `${service.title} | Dr. Arunima Mukherjee`,
//     description: service.description,
//     openGraph: {
//       title: `${service.title} | Dr. Arunima Mukherjee`,
//       description: service.description,
//       url: `https://yourdomain.com/services/${params.slug}`,
//       images: [
//         {
//           url: `https://yourdomain.com${service.image}`,
//           width: 1200,
//           height: 630,
//           alt: service.title,
//         },
//       ],
//     },
//   };
// }

// export default function ServicePage({ params }) {
//   const service = servicesMap[params.slug];
//   if (!service) return notFound();

//   const breadcrumbSchema = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": "https://yourdomain.com"
//       },
//       {
//         "@type": "ListItem",
//         "position": 2,
//         "name": "Services",
//         "item": "https://yourdomain.com/services"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": service.title,
//         "item": `https://yourdomain.com/services/${service.slug}`
//       }
//     ]
//   };

//   const faqSchema = service.faq
//     ? {
//         "@context": "https://schema.org",
//         "@type": "FAQPage",
//         "mainEntity": service.faq.map(({ question, answer }) => ({
//           "@type": "Question",
//           "name": question,
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": answer
//           }
//         }))
//       }
//     : null;

//   return (
//     <>
//       <SingleServicePage
//         title={service.title}
//         description={service.description}
//         image={service.image}
//         benefits={service.benefits}
//         schema={service.schema}
//         faq={service.faq}
//       />

//       {/* Inject structured data */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(
//             [service.schema, breadcrumbSchema, faqSchema].filter(Boolean)
//           ),
//         }}
//       />
//     </>
//   );
// }

import SingleServicePage from '@/app/components/services/SingleServicePage';
import { servicesMap } from '@/lib/servicesData';
import { notFound } from 'next/navigation';

// --- Metadata generation using servicesMap for quick lookup
export function generateMetadata({ params }) {
  const service = servicesMap[params.slug];
  if (!service) return {};

  return {
    title: `${service.title} | Dr. Arunima Mukherjee`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Dr. Arunima Mukherjee`,
      description: service.description,
      url: `https://yourdomain.com/services/${params.slug}`,
      images: [
        {
          url: `https://yourdomain.com${service.image}`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default function ServicePage({ params }) {
  const service = servicesMap[params.slug];
  if (!service) return notFound();

  // --- Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://yourdomain.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://yourdomain.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://yourdomain.com/services/${service.slug}`
      }
    ]
  };

  // --- FAQ schema (only if FAQ exists and is non-empty)
  const faqSchema = Array.isArray(service.faq) && service.faq.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": service.faq.map(({ question, answer }) => ({
          "@type": "Question",
          "name": question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": answer
          }
        }))
      }
    : null;

  return (
    <>
      <SingleServicePage
        title={service.title}
        description={service.description}
        image={service.image}
        benefits={service.benefits}
        schema={service.schema}
        treatments={service.treatments} 
        faq={service.faq} // Pass FAQ to render accordion
      />

      {/* Inject JSON-LD for service, breadcrumbs, and FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [service.schema, breadcrumbSchema, faqSchema].filter(Boolean)
          ),
        }}
      />
    </>
  );
}
