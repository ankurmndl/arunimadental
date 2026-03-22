'use client';

import Head from 'next/head';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FAQAccordion from './FAQAccordion';
import BookAppointment from '../BookAppointment';
// import BookAppointment from '@/components/BookAppointment';


// export default function SingleServicePage({ title, description, image, benefits, schema, faq }) {
export default function SingleServicePage({ title, description, image, benefits, schema, faq, treatments, learnMore }) {
  const pathname = usePathname();

  // Ensure description supports arrays for multi-paragraph content
  const renderDescription = () => {
    if (Array.isArray(description)) {
      return description.map((para, idx) => (
        <p key={idx} className="text-lg leading-relaxed text-gray-700 mb-6">
          {para}
        </p>
      ));
    }
    return <p className="text-lg leading-relaxed text-gray-700 mb-8">{description}</p>;
  };

  return (
    
    <>
      {/* --- SEO TAGS --- */}
      <Head>
        <title>{`${title} | Dr. Arunima Mukherjee`}</title>
        <meta name="description" content={Array.isArray(description) ? description[0].slice(0, 155) : description.slice(0, 155)} />
        <link rel="canonical" href={`https://yourdomain.com${pathname}`} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={Array.isArray(description) ? description[0].slice(0, 155) : description.slice(0, 155)} />
        <meta property="og:image" content={`https://yourdomain.com${image}`} />
        <meta property="og:url" content={`https://yourdomain.com${pathname}`} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={Array.isArray(description) ? description[0].slice(0, 155) : description.slice(0, 155)} />
        <meta name="twitter:image" content={`https://yourdomain.com${image}`} />
      </Head>
      {/* <div className="bg-[#F4F9F9] min-h-screen"></div> */}
      <main className="bg-[#F4F9F9] text-gray-900 px-4 py-16">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Link href="/services" className="text-teal-700 hover:underline text-sm">
            ← Back to Services
          </Link>
        </div>

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-teal-900 mb-6"
        >
          {title}
        </motion.h1>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <Image
            src={image}
            alt={title}
            width={1000}
            height={600}
            className="rounded-xl shadow-lg object-cover w-full max-h-[450px]"
          />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg max-w-none mb-10"
        >
          {renderDescription()}
        </motion.div>
       
        {/* Learn More Section */}
            {learnMore?.link && learnMore?.text && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mb-12"
            >
                <Link
                href={learnMore.link}
                className="inline-flex items-center px-5 py-2 bg-teal-600 text-white font-semibold rounded-lg shadow hover:bg-teal-700 transition group"
                >
                {learnMore.text}
                <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform">→</span>
                </Link>
            </motion.div>
            )}


        {/* Benefits */}
        {/* {benefits?.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-teal-800 mb-4">Benefits</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
          </motion.div>
        )} */}

        {/* {benefits && (
          <div className="mb-10">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Benefits</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="flex items-start p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold mr-3">
                    ✓
                  </div>
                  <p className="text-gray-700">{b}</p>
                </div>
              ))}
            </div>
          </div>
        )} */}

          {/* {benefits && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-start p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
                  >
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold mr-3">
                      ✓
                    </div>
                    <p className="text-gray-700">{b}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )} */}

          {benefits && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <h2 className="text-3xl font-bold mb-8 text-teal-900 text-center">
                Benefits
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-start p-5 rounded-2xl shadow-lg border border-gray-100 
                              hover:shadow-xl transition-transform duration-300 hover:-translate-y-1
                              bg-gradient-to-br from-white to-teal-50"
                  >
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center 
                                    bg-teal-100 text-teal-700 rounded-full font-bold mr-4 shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">{b}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}



{/* {treatments && treatments.length > 0 && (
  <section className="mt-20 relative overflow-hidden">

    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50 to-white"></div>
      <svg
        className="absolute bottom-0 w-full h-64 opacity-30 animate-[wave_8s_linear_infinite]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#99f6e4"
          fillOpacity="0.3"
          d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,197.3C672,192,768,160,864,160C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192V320H0Z"
        ></path>
      </svg>
    </div>

    <h2 className="relative text-3xl font-bold text-teal-900 mb-12 text-center">
      Treatments Offered
    </h2>


    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative grid md:grid-cols-3 gap-8"
    >
      {treatments.map((treatment, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.15 }}
    className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
               transition-all duration-300 hover:-translate-y-1 flex flex-col justify-end group"
    style={{
      backgroundImage: `url(${treatment.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "280px"
    }}
  >

    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
    <div
      className={`absolute bottom-0 left-0 right-0 h-1/2 bg-black/30 
                  backdrop-blur-[0px] group-hover:backdrop-blur-[4px] 
                  transition-all duration-500`}
    ></div>



    <div className="relative p-6 z-10 transform translate-y-0 group-hover:-translate-y-2 transition-all duration-500 ease-out">
      <h3 className="text-xl font-semibold text-white mb-2">
        {treatment.name}
      </h3>
      <p className="text-white/90 mb-5 leading-relaxed text-sm">
        {treatment.shortDescription}
      </p>

      {treatment.slug && (
        <Link
          href={`/services/${pathname.split("/").pop()}/${treatment.slug}`}
          className="inline-flex items-center px-5 py-2 bg-teal-500 text-white 
                     font-semibold rounded-full shadow hover:bg-teal-600 transition group text-sm"
        >
          Learn More
          <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      )}
    </div>
  </motion.div>
))}
    </motion.div> 
    <style jsx>{`
      @keyframes wave {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `}</style>
  </section>
)} */}

{treatments && treatments.length > 0 && (
  <section className="mt-20 relative overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50 to-white"></div>
      <svg
        className="absolute bottom-0 w-full h-64 opacity-30 animate-[wave_8s_linear_infinite]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#99f6e4"
          fillOpacity="0.3"
          d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,197.3C672,192,768,160,864,160C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192V320H0Z"
        ></path>
      </svg>
    </div>

    <h2 className="relative text-3xl font-bold text-teal-900 mb-12 text-center">
      Treatments Offered
    </h2>

    {/* Treatment Cards */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative grid md:grid-cols-3 gap-8"
    >
      {treatments.map((treatment, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
          className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                     transition-all duration-300 hover:-translate-y-1 flex flex-col justify-end group"
          style={{
            backgroundImage: `url(${treatment.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "360px"
          }}
        >
          
          {/* Gradient fade on bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* Blur ONLY behind text */}
          
          <div
            className={`absolute bottom-0 left-0 right-0 p-6 bg-black/30
              backdrop-blur-[1px] group-hover:backdrop-blur-[6px]
              transition-all duration-500`}
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {treatment.name}
            </h3>
            <p className="text-white/90 mb-5 leading-relaxed text-sm">
              {treatment.shortDescription}
            </p>

            {treatment.slug && (
              <Link
                href={`/services/${pathname.split("/").pop()}/${treatment.slug}`}
                className="inline-flex items-center px-5 py-2 bg-teal-500 text-white 
                           font-semibold rounded-full shadow hover:bg-teal-600 transition group text-sm"
              >
                Learn More
                <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>

    <style jsx>{`
      @keyframes wave {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `}</style>
  </section>
)}



        {/* FAQ Section */}
        {faq?.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 border-t pt-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-center text-teal-900">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faq={faq} />
          </motion.div>
        )}
      </main>

      {/* Call-to-Action */}
      {/* <section className="bg-teal-50 py-14 px-4 mt-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-teal-900 mb-4"
          >
            Ready for a confident smile?
          </motion.h3>
          <p className="text-lg text-gray-700 mb-6">
            Book a consultation with Dr. Arunima Mukherjee and discover the best version of your smile.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg text-base shadow transition"
          >
            Schedule Your Appointment
          </Link>
        </div>
      </section> */}
      <section className="bg-teal-50 py-14 px-4 mt-10">
        <div className="max-w-3xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-teal-900 mb-4"
        >
          Ready for a confident smile?
        </motion.h3>
        <p className="text-lg text-gray-700 mb-6">
          Book a consultation with Dr. Arunima Mukherjee and discover the best version of your smile.
        </p>

        {/* Appointment Modal Trigger */}
        <BookAppointment/>
      </div>
    </section>
    </>
  );
}

