
// import { notFound } from "next/navigation";
// import SingleTreatmentPage from "../../../components/services/SingleTreatmentPage";
// import { servicesMap } from "../../../../lib/servicesData";

// // 🔥 SEO Metadata for treatment pages
// export function generateMetadata({ params }) {
//   const { slug, treatmentSlug } = params;

//   const service = servicesMap[slug];
//   if (!service) return {};

//   const treatment = service.treatments.find(
//     (t) => t.slug === treatmentSlug
//   );
//   if (!treatment) return {};

//   return {
//     title: `${treatment.name} | ${service.title}`,
//     description: treatment.shortDescription,
//     openGraph: {
//       title: `${treatment.name} | ${service.title}`,
//       description: treatment.shortDescription,
//       url: `https://yourdomain.com/services/${slug}/${treatmentSlug}`,
//       images: [
//         {
//           url: `https://yourdomain.com${treatment.image || service.image}`,
//           width: 1200,
//           height: 630,
//           alt: treatment.name,
//         },
//       ],
//     },
//   };
// }

// export default function TreatmentPage({ params }) {
//   const { slug, treatmentSlug } = params;

//   // ✅ Use servicesMap (fast + consistent)
//   const service = servicesMap[slug];
//   if (!service) return notFound();

//   // ✅ Find treatment inside service
//   const treatment = service.treatments.find(
//     (t) => t.slug === treatmentSlug
//   );
//   if (!treatment) return notFound();

//   return (
//     <SingleTreatmentPage
//       title={treatment.name}
//       description={treatment.fullDescription} // 🔥 use full content for SEO
//       benefits={treatment.benefits}
//       steps={treatment.steps}
//       image={treatment.image || service.image}
//     />
//   );
// }

import { notFound } from "next/navigation";
import SingleTreatmentPage from "../../../components/services/SingleTreatmentPage";
import { servicesMap } from "../../../../lib/servicesData";

// 🔥 SEO Metadata (FIXED for Next.js 16)
export async function generateMetadata({ params }) {
  const { slug, treatmentSlug } = await params;

  const service = servicesMap[slug];
  if (!service) return {};

  const treatment = service.treatments.find(
    (t) => t.slug === treatmentSlug
  );
  if (!treatment) return {};

  return {
    title: `${treatment.name} | ${service.title}`,
    description: treatment.shortDescription,
    openGraph: {
      title: `${treatment.name} | ${service.title}`,
      description: treatment.shortDescription,
      url: `https://yourdomain.com/services/${slug}/${treatmentSlug}`,
      images: [
        {
          url: `https://yourdomain.com${treatment.image || service.image}`,
          width: 1200,
          height: 630,
          alt: treatment.name,
        },
      ],
    },
  };
}

// 🔥 Page (FIXED)
export default async function TreatmentPage({ params }) {
  const { slug, treatmentSlug } = await params;

  const service = servicesMap[slug];
  if (!service) return notFound();

  const treatment = service.treatments.find(
    (t) => t.slug === treatmentSlug
  );
  if (!treatment) return notFound();

  return (
    <SingleTreatmentPage
      title={treatment.name}
      description={treatment.fullDescription}
      benefits={treatment.benefits}
      steps={treatment.steps}
      image={treatment.image || service.image}
    />
  );
}