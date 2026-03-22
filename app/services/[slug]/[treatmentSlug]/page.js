// // // import { servicesMap } from "@/lib/servicesData";
// // // import SingleTreatmentPage from "@/app/components/services/SingleTreatmentPage";

// // // export default function TreatmentPage({ params }) {
// // //   const { slug, treatmentSlug } = params;

// // //   // Find main service
// // //   const service = servicesMap[slug];
// // //   if (!service) return <div>Service not found</div>;

// // //   // Find treatment inside main service
// // //   const treatment = service.treatments?.find(
// // //     (t) => t.slug === treatmentSlug
// // //   );
// // //   if (!treatment) return <div>Treatment not found</div>;

// // //   return (
// // //     <SingleTreatmentPage
// // //       title={treatment.name}
// // //       description={treatment.description}
// // //       benefits={treatment.benefits}
// // //       steps={treatment.steps}
// // //       image={treatment.image}
// // //     />
// // //   );
// // // }

// // import servicesData from "@/lib/servicesData";

// // export default function TreatmentPage({ params }) {
// //   const { slug, treatmentSlug } = params;
// //   const service = servicesData.find(s => s.slug === slug);
// //   const treatment = service?.treatments.find(t => t.treatmentSlug === treatmentSlug);

// //   if (!treatment) return <p>Treatment not found</p>;

// //   return (
// //     <div className="max-w-4xl mx-auto py-12 px-4">
// //       <h1 className="text-4xl font-bold text-teal-900 mb-6">{treatment.name}</h1>
// //       <p className="mb-6 text-gray-700">{treatment.fullDescription}</p>

// //       <h2 className="text-2xl font-semibold text-teal-800 mt-8 mb-4">Benefits</h2>
// //       <ul className="list-disc list-inside text-gray-600 mb-6">
// //         {treatment.benefits.map((b, i) => <li key={i}>{b}</li>)}
// //       </ul>

// //       <h2 className="text-2xl font-semibold text-teal-800 mt-8 mb-4">Treatment Steps</h2>
// //       <ol className="list-decimal list-inside text-gray-600">
// //         {treatment.steps.map((s, i) => <li key={i}>{s}</li>)}
// //       </ol>
// //     </div>
// //   );
// // }

// import SingleTreatmentPage from "@/app/components/services/SingleTreatmentPage";
// import { servicesArray } from "@/lib/servicesData"; // Import your array

// export default function TreatmentPage({ params }) {
//   const { slug, treatmentSlug } = params;

//   // 1️⃣ Find the parent service
//   const service = servicesArray.find((s) => s.slug === slug);
//   if (!service) return <div>Service not found</div>;

//   // 2️⃣ Find the specific treatment
//   const treatment = service.treatments.find((t) => t.slug === treatmentSlug);
//   if (!treatment) return <div>Treatment not found</div>;

//   // 3️⃣ Render the treatment page
//   return (
//     <SingleTreatmentPage
//       title={treatment.name}
//       description={treatment.shortDescription}
//       benefits={treatment.benefits}
//       steps={treatment.steps}
//       image={treatment.image || service.image} // fallback to service image
//     />
//   );
// }

import SingleTreatmentPage from "@/app/components/services/SingleTreatmentPage";
import { servicesMap } from "@/lib/servicesData";
import { notFound } from "next/navigation";

// 🔥 SEO Metadata for treatment pages
export function generateMetadata({ params }) {
  const { slug, treatmentSlug } = params;

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

export default function TreatmentPage({ params }) {
  const { slug, treatmentSlug } = params;

  // ✅ Use servicesMap (fast + consistent)
  const service = servicesMap[slug];
  if (!service) return notFound();

  // ✅ Find treatment inside service
  const treatment = service.treatments.find(
    (t) => t.slug === treatmentSlug
  );
  if (!treatment) return notFound();

  return (
    <SingleTreatmentPage
      title={treatment.name}
      description={treatment.fullDescription} // 🔥 use full content for SEO
      benefits={treatment.benefits}
      steps={treatment.steps}
      image={treatment.image || service.image}
    />
  );
}