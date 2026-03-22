
export const servicesArray = [
 
  {
    title: "Cosmetic Dentistry",
    slug: "cosmetic-dentistry",
    description:
      "Discover the art of a confident smile with our advanced cosmetic dentistry services. From whitening to veneers, we combine precision, artistry, and technology to create smiles that look as good as they feel.",
    
    longDescription: `
      At our practice, we believe your smile should reflect the best version of you. 
      Our cosmetic dentistry services are designed to correct imperfections, enhance natural beauty, and give you a smile you can share with confidence.
      Using advanced technology and a personalized approach, Dr. Arunima blends dental science with artistry to deliver stunning, natural-looking results.
  
      **Why Choose Cosmetic Dentistry at Our Clinic**
  
      **Comprehensive Smile Enhancement**  
      Whether you want a subtle change or a complete smile makeover, we offer a wide range of treatments to address discoloration, chips, gaps, misalignment, and more.
  
      **Boosted Confidence & Self-Esteem**  
      A radiant smile can change how you feel about yourself. Many patients tell us they smile more often and feel more comfortable in social and professional settings.
  
      **Health Benefits Alongside Beauty**  
      Certain cosmetic procedures, like crowns, implants, and bonding, not only improve aesthetics but also restore strength and function to your teeth.
  
      **Tailored Treatment Plans**  
      No two smiles are the same. We listen to your goals, assess your needs, and create a fully customized plan to achieve your dream smile.
  
      **State-of-the-Art Techniques**  
      We use advanced materials and methods to ensure results that are durable, comfortable, and remarkably lifelike.
    `,
  
    image: "/images/services/cosmetic3.webp",
  
    benefits: [
      "Brightens and rejuvenates your smile",
      "Boosts self-confidence in every interaction",
      "Improves dental function while enhancing aesthetics",
      "Long-lasting, natural-looking results",
      "Fully customized treatment plans for your unique smile"
    ],
  
    treatments: [
      {
        slug: "porcelain-veneers",
        name: "Porcelain Veneers",
        shortDescription:
          "Custom-crafted porcelain shells that cover the front of your teeth, correcting discoloration, gaps, and misalignment for a strong, beautiful smile.",
        fullDescription:
          "These custom-made shells cover the front surface of your teeth to correct imperfections such as discoloration, gaps, and misalignment. Porcelain veneers are designed to look and feel like natural teeth, providing a durable and aesthetically pleasing solution. They are stain-resistant, minimally invasive, and tailored to match your smile perfectly.",
        benefits: [
          "Brightens and rejuvenates your smile",
          "Boosts self-confidence in every interaction",
          "Improves dental function while enhancing aesthetics",
          "Long-lasting, natural-looking results",
          "Fully customized treatment plans for your unique smile"
        ],
        steps: [
          "Initial consultation and smile assessment",
          "Preparation of the teeth and impressions",
          "Custom veneer design and fabrication",
          "Precise fitting and bonding",
          "Final adjustments for comfort and appearance"
        ],
        image: "/images/services/veneers.jpg"
      },
      {
          slug: "teeth-whitening",
          name: "Teeth Whitening",
          shortDescription:
            "Enhance your smile with professional teeth whitening treatments that brighten discolored or stained teeth for a radiant, confident appearance.",
          fullDescription:
            "Our advanced teeth whitening treatments help eliminate discoloration and stains caused by coffee, tea, smoking, and other lifestyle factors. The procedure is safe, minimally invasive, and tailored to your needs, providing noticeable results after just one session. Achieve a brighter, more youthful smile that boosts confidence and complements your overall appearance.",
          benefits: [
            "Removes stains and discoloration effectively",
            "Safe and minimally invasive procedure",
            "Quick and long-lasting results",
            "Boosts self-confidence and enhances appearance",
            "Custom treatment plans to meet your needs"
          ],
          steps: [
            "Comprehensive dental assessment",
            "Teeth cleaning to remove surface debris",
            "Application of whitening gel with protective measures",
            "Use of specialized light or laser for optimal results",
            "Post-treatment care and follow-up guidance"
          ],
          image: "/images/services/whitening.webp"        
      },
      {
        slug: "crowns-and-bridges",
        name: "Crowns & Bridges",
        shortDescription:
          "Durable, natural-looking restorations that strengthen damaged teeth and replace missing teeth seamlessly.",
      
        fullDescription:
          "Dental crowns and bridges are reliable restorative solutions designed to repair damaged teeth and replace missing ones. A crown is a custom-made cap placed over a weakened or broken tooth to restore its strength, shape, and appearance. A bridge, on the other hand, replaces one or more missing teeth by anchoring an artificial tooth to the adjacent natural teeth or implants. These restorations not only improve aesthetics but also restore proper chewing function, prevent shifting of teeth, and maintain facial structure. With modern materials and precise techniques, crowns and bridges blend naturally with your smile and provide long-lasting durability.",
      
        benefits: [
          "Restores strength and structure to damaged teeth",
          "Replaces one or more missing teeth effectively",
          "Improves chewing efficiency and speech clarity",
          "Prevents surrounding teeth from shifting",
          "Natural appearance that matches surrounding teeth",
          "Long-lasting and highly durable solution"
        ],
      
        steps: [
          "Comprehensive examination and digital imaging",
          "Preparation of the affected tooth or adjacent support teeth",
          "Precise impressions for custom fabrication",
          "Temporary crown or bridge placement (if needed)",
          "Final placement and bite adjustment for optimal comfort"
        ],
      
        image: "/images/services/crowns-bridges.webp"
      },
      {
        slug: "inlays-and-onlays",
        name: "Inlays & Onlays",
        shortDescription:
          "Conservative, custom-made restorations that repair moderately damaged teeth while preserving maximum natural tooth structure.",
      
        fullDescription:
          "Inlays and onlays are advanced restorative treatments used to repair teeth that have moderate decay or structural damage but do not require a full dental crown. These custom-crafted restorations are made from durable materials such as porcelain or composite resin and are precisely bonded to the affected tooth. Unlike traditional fillings, inlays and onlays provide superior strength, longevity, and a more natural appearance. They help restore the tooth’s function while preserving as much healthy tooth structure as possible, making them a minimally invasive and highly effective solution.",
      
        benefits: [
          "Preserves more natural tooth structure than crowns",
          "Stronger and more durable than traditional fillings",
          "Provides excellent fit and natural appearance",
          "Resistant to staining and wear",
          "Restores chewing strength and comfort",
          "Long-lasting restorative solution"
        ],
      
        steps: [
          "Comprehensive dental examination and digital assessment",
          "Removal of decay or damaged tooth structure",
          "Precise impression or digital scan of the tooth",
          "Custom fabrication of the inlay or onlay",
          "Bonding and final adjustment for perfect fit and bite alignment"
        ],
      
        image: "/images/services/inlays-onlays.webp"
      },
      {
        slug: "dental-bonding",
        name: "Dental Bonding",
        shortDescription:
          "A quick, minimally invasive cosmetic treatment that repairs chipped, cracked, or discolored teeth for an instantly improved smile.",
      
        fullDescription:
          "Dental bonding is a simple and effective cosmetic procedure used to repair minor imperfections such as chips, cracks, gaps, and discoloration. A tooth-colored composite resin is carefully sculpted and bonded to the tooth, restoring its natural shape and appearance. This minimally invasive treatment requires little to no removal of natural enamel and is typically completed in a single visit. Dental bonding is an affordable and efficient way to enhance your smile while maintaining a natural look.",
      
        benefits: [
          "Quick and painless procedure, often completed in one visit",
          "Improves chipped, cracked, or uneven teeth",
          "Closes small gaps between teeth",
          "Enhances tooth color and overall smile appearance",
          "Preserves natural tooth structure",
          "Cost-effective cosmetic solution"
        ],
      
        steps: [
          "Initial dental examination and smile assessment",
          "Shade selection to match natural teeth",
          "Preparation of the tooth surface for bonding",
          "Application and sculpting of tooth-colored resin",
          "Curing with specialized light and final polishing"
        ],
      
        image: "/images/services/dental-bonding.webp"
      },
    ],
  
    faq: [
      {
        question: "What issues can cosmetic dentistry fix?",
        answer:
          "Cosmetic dentistry can address a variety of concerns, including discoloration, chipped or cracked teeth, gaps, misshapen teeth, and mild misalignment."
      },
      {
        question: "Is cosmetic dentistry only about looks?",
        answer:
          "While aesthetics are a focus, many cosmetic treatments also improve oral function, strength, and long-term dental health."
      },
      {
        question: "How long do results typically last?",
        answer:
          "With proper oral hygiene and routine dental care, cosmetic dentistry results can last many years—veneers, crowns, and implants may last a decade or longer."
      },
      {
        question: "Does treatment hurt?",
        answer:
          "Most procedures are minimally invasive and performed with local anesthesia, so discomfort is usually minimal."
      },
      {
        question: "Will insurance cover my treatment?",
        answer:
          "Most purely cosmetic procedures are not covered, but those that restore function may be partially covered. We can review your benefits during your consultation."
      }
    ],
  
    learnMore: {
      text: `Porcelain veneers are thin, durable shells made from high-quality dental porcelain. 
      They are bonded to the front of your teeth to create a flawless, natural appearance, masking issues such as stains, chips, gaps, or slightly crooked teeth.
  
      **What to Expect**  
      - **First Visit:** Consultation, smile design discussion, tooth preparation, and impressions.  
      - **Second Visit:** Custom veneers are precisely bonded, instantly transforming your smile.
  
      Veneers are stain-resistant and can last 10–15 years or more with proper care, making them one of the most sought-after cosmetic treatments.
    `,
      link: "/services/porcelain-veneers"
    },
  
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Cosmetic Dentistry",
      "image": "https://yourdomain.com/images/services/cosmetic.webp",
      "description":
        "Our cosmetic dentistry services enhance your smile’s beauty and function using treatments like veneers, whitening, crowns, and implants. Customized care with lasting results.",
      "url": "https://yourdomain.com/services/cosmetic-dentistry",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Your City",
        "addressRegion": "Your State",
        "postalCode": "123456",
        "streetAddress": "123 Your Clinic Street"
      },
      "medicalSpecialty": "Dentistry"
    }
  }
,  
  
  {
    title: "Dental Implants",
    slug: "dental-implants",
    description:
      "Permanent, natural-looking tooth replacements that restore your smile’s beauty, strength, and function — as if you never lost a tooth.",
    
    longDescription: `
      Missing teeth can affect more than your smile — they can impact your ability to eat, speak, and feel confident in daily life.
      Dental implants offer the gold standard in tooth replacement, providing unmatched stability, comfort, and a natural appearance.
  
      At our clinic, we use advanced imaging and guided placement techniques to ensure your implants look, feel, and function just like real teeth. 
      Whether replacing one tooth or restoring your full smile, implants are designed to last for decades with proper care.
  
      **Benefits of Choosing Dental Implants**
  
      **Permanent Tooth Replacement**  
      Unlike dentures or bridges, implants fuse with your jawbone for a secure, long-lasting solution.
  
      **Natural Look & Feel**  
      Custom-designed crowns match the color, shape, and contour of your natural teeth for a seamless smile.
  
      **Improved Function & Comfort**  
      Eat, speak, and laugh with confidence — no slipping, shifting, or discomfort.
  
      **Bone Preservation**  
      Implants stimulate the jawbone, preventing the bone loss that often follows tooth loss.
  
      **High Success Rate**  
      With modern technology and expert placement, dental implants boast one of the highest success rates in dentistry.
    `,
  
    image: "/images/services/implants3.webp",
  
    benefits: [
      "Permanent and stable tooth replacement",
      "Looks, feels, and functions like natural teeth",
      "Prevents bone loss and preserves facial structure",
      "Restores confidence in eating, speaking, and smiling",
      "High success rate with proper care"
    ],
  
    treatments: [
      {
        slug: "single-tooth-implant",
        name: "Single Tooth Implant",
        shortDescription:
          "A permanent, natural-looking solution to replace a missing tooth without affecting adjacent teeth.",
      
        fullDescription:
          "A single tooth implant is an advanced and long-lasting solution for replacing an individual missing tooth. The procedure involves placing a titanium implant post into the jawbone, which functions as an artificial root. Once healed, a custom-made crown is attached to the implant, restoring full function and natural aesthetics. Unlike traditional bridges, a single tooth implant does not require trimming neighboring healthy teeth, making it a conservative and highly durable treatment option.",
      
        benefits: [
          "Replaces a missing tooth without affecting adjacent teeth",
          "Prevents bone loss and maintains facial structure",
          "Restores natural chewing ability and speech",
          "Blends seamlessly with surrounding teeth",
          "Long-lasting and highly durable solution",
          "Improves confidence and smile aesthetics"
        ],
      
        steps: [
          "Comprehensive consultation and digital imaging assessment",
          "Precise placement of the titanium implant into the jawbone",
          "Healing phase for osseointegration (fusion with bone)",
          "Attachment of a custom-designed crown",
          "Final bite adjustment and post-treatment care guidance"
        ],
      
        image: "/images/services/single-tooth-implant.jpg"
      },
            {
        slug: "all-on-4-implants",
        name: "All-on-4 Implants",
        shortDescription:
          "A full-arch dental implant solution that uses four strategically placed implants to support a complete set of fixed replacement teeth.",
      
        fullDescription:
          "All-on-4® implants provide a revolutionary solution for patients who have lost most or all of their teeth. This technique uses four strategically placed dental implants to securely anchor a full arch of replacement teeth. The implants are positioned at precise angles to maximize support and stability, often eliminating the need for bone grafting. All-on-4® implants restore the appearance, function, and comfort of natural teeth, allowing patients to smile, speak, and eat with confidence. The result is a durable, long-lasting, and natural-looking full-mouth restoration.",
      
        benefits: [
          "Restores a full arch of teeth with only four implants",
          "Provides strong, stable support for fixed prosthetic teeth",
          "Often eliminates the need for bone grafting",
          "Improves chewing ability, speech, and confidence",
          "Long-lasting and natural-looking solution for tooth loss"
        ],
      
        steps: [
          "Comprehensive consultation and digital treatment planning",
          "Strategic placement of four dental implants in the jaw",
          "Attachment of a temporary set of teeth if applicable",
          "Healing period for implant integration",
          "Placement of the final custom-designed full arch prosthesis"
        ],
      
        image: "/images/services/all-on-implants.webp"
      },
      {
        slug: "implant-supported-bridges",
        name: "Implant-Supported Bridges",
        shortDescription:
          "An advanced solution for replacing multiple missing teeth using dental implants for strong and stable support.",
      
        fullDescription:
          "Implant-supported bridges are an effective treatment for patients missing several teeth in a row. Instead of relying on neighboring natural teeth for support, the bridge is anchored securely to dental implants placed in the jawbone. This approach provides superior stability, restores chewing ability, and preserves the health of surrounding teeth. Implant-supported bridges also help maintain jawbone structure and facial appearance, offering a long-lasting and natural-looking solution for multiple missing teeth.",
      
        benefits: [
          "Replaces multiple missing teeth securely",
          "Does not rely on adjacent natural teeth for support",
          "Restores strong chewing ability and function",
          "Helps preserve jawbone and facial structure",
          "Durable, stable, and long-lasting restoration"
        ],
      
        steps: [
          "Comprehensive examination and treatment planning",
          "Placement of dental implants in the jawbone",
          "Healing period for implant integration (osseointegration)",
          "Attachment of the custom-designed bridge",
          "Final adjustments to ensure proper bite and comfort"
        ],
      
        image: "/images/services/implant-bridge.webp"
      },
            {
        slug: "same-day-dental-implants",
        name: "Same-Day Dental Implants",
        shortDescription:
          "Advanced implant placement that allows a temporary tooth to be attached on the same day as the implant procedure.",
      
        fullDescription:
          "Same-day dental implants, also known as immediate load implants, allow patients to receive a temporary crown immediately after the implant is placed. Unlike traditional implants that require a healing period before the crown is attached, this approach restores appearance and basic function right away. Careful planning and precise placement ensure that the implant integrates properly with the jawbone while supporting a temporary restoration. Once healing is complete, a permanent custom crown is placed.",
      
        benefits: [
          "Receive a temporary tooth on the same day",
          "Reduces the waiting period for tooth restoration",
          "Maintains appearance and smile immediately",
          "Supports normal speech and function sooner",
          "High success rate with proper case selection"
        ],
      
        steps: [
          "Comprehensive consultation and imaging",
          "Placement of the dental implant",
          "Attachment of a temporary crown the same day",
          "Healing period for implant integration",
          "Placement of the final permanent crown"
        ],
      
        image: "/images/services/same-day-implants.webp"
      },

      {
        slug: "bone-grafting",
        name: "Bone Grafting",
        shortDescription:
          "A preparatory procedure that restores jawbone volume and strength to support successful dental implant placement.",
      
        fullDescription:
          "Bone grafting is a specialized dental procedure used to rebuild or strengthen the jawbone when it lacks sufficient density to support dental implants. Bone loss can occur due to missing teeth, gum disease, or trauma. During the procedure, grafting material is placed in the weakened area to stimulate natural bone growth and regeneration. Over time, the graft integrates with your existing bone, creating a stable and healthy foundation for dental implants. Bone grafting significantly improves the long-term success and stability of implant treatments.",
      
        benefits: [
          "Restores lost jawbone volume and density",
          "Creates a stable foundation for dental implants",
          "Improves long-term success of implant treatments",
          "Helps preserve facial structure and jaw health",
          "Supports overall oral function and aesthetics"
        ],
      
        steps: [
          "Comprehensive dental examination and imaging",
          "Assessment of bone density and treatment planning",
          "Placement of bone grafting material in the affected area",
          "Healing period to allow bone regeneration",
          "Evaluation and preparation for dental implant placement"
        ],
      
        image: "/images/services/bone-grafting.webp"
      },
      {
        slug: "sinus-lift",
        name: "Sinus Lift",
        shortDescription:
          "A specialized bone augmentation procedure that increases bone height in the upper jaw to allow secure placement of dental implants.",
      
        fullDescription:
          "A sinus lift, also known as sinus augmentation, is a surgical procedure used to add bone to the upper jaw in the area of the molars and premolars. When teeth have been missing for a long time, the bone in this region may shrink and the sinus cavity may expand, leaving insufficient bone for dental implants. During a sinus lift, the sinus membrane is gently raised and bone graft material is placed beneath it. Over time, the new bone integrates with the natural jawbone, creating a stable foundation for dental implants.",
      
        benefits: [
          "Creates sufficient bone height for implant placement",
          "Improves long-term stability of upper jaw implants",
          "Restores lost bone caused by tooth loss",
          "Supports successful implant integration",
          "Enables treatment options that were previously not possible"
        ],
      
        steps: [
          "Detailed dental examination and 3D imaging",
          "Access to the sinus area through the upper jawbone",
          "Careful elevation of the sinus membrane",
          "Placement of bone graft material",
          "Healing period before implant placement"
        ],
      
        image: "/images/services/sinus-lift.webp"
      }

    ],
  
    faq: [
      {
        question: "How long do dental implants last?",
        answer:
          "With proper care, dental implants can last 20 years or more — many patients keep them for a lifetime."
      },
      {
        question: "Are dental implants painful?",
        answer:
          "The procedure is performed under local anesthesia and is typically no more uncomfortable than a routine extraction. Most patients report minimal post-treatment discomfort."
      },
      {
        question: "How soon can I get implants after tooth loss?",
        answer:
          "It depends on your oral health and bone density. Some patients qualify for immediate placement, while others may need healing or bone grafting first."
      },
      {
        question: "Will my implants look natural?",
        answer:
          "Yes. We custom-design the crown to match your surrounding teeth so seamlessly that no one will know it’s an implant."
      },
      {
        question: "Are implants covered by insurance?",
        answer:
          "Coverage varies. Some plans contribute to the crown or surgical portion. We can help check your benefits and explore financing options."
      }
    ],
  
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Dental Implants",
      "image": "https://yourdomain.com/images/services/implants.webp",
      "description":
        "Permanent, natural-looking tooth replacements that restore your smile’s beauty, strength, and function with advanced dental implants by Dr. Arunima.",
      "url": "https://yourdomain.com/services/dental-implants",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Your City",
        "addressRegion": "Your State",
        "postalCode": "123456",
        "streetAddress": "123 Your Clinic Street"
      },
      "medicalSpecialty": "Dentistry"
    }
  },
  
  {
    title: "Preventive Dentistry",
    slug: "preventive-dentistry",
    description:
      "Proactive care to protect your teeth and gums, prevent dental problems before they start, and keep your smile healthy for life.",
    
    longDescription: `
      A healthy smile begins with prevention. Preventive dentistry focuses on stopping problems before they require more complex — and costly — treatments.
  
      Our approach combines gentle, thorough dental care with personalized education to help you maintain your oral health between visits. 
      From routine cleanings to advanced screening tools, we provide everything you need to protect your teeth, gums, and overall well-being.
  
      **Why Preventive Dentistry Matters**
  
      **Early Detection Saves Time and Money**  
      Catching cavities, gum disease, or bite issues early means simpler treatments and better outcomes.
  
      **Protects Your Overall Health**  
      Oral health is closely connected to your heart health, diabetes management, and more.
  
      **Keeps Your Smile Beautiful**  
      Regular care helps prevent discoloration, wear, and damage, keeping your teeth looking their best.
  
      **Comfortable, Gentle Appointments**  
      We use advanced tools and a gentle touch to make every visit stress-free.
    `,
  
    image: "/images/services/preventive.webp",
  
    benefits: [
      "Reduces risk of cavities and gum disease",
      "Promotes fresh breath and long-term oral health",
      "Saves money by preventing major dental work",
      "Boosts overall health and well-being",
      "Keeps your smile bright and strong"
    ],
  
    treatments: [
      {
        slug: "routine-dental-exams-cleanings",
        name: "Routine Dental Exams & Cleanings",
        shortDescription:
          "Comprehensive checkups and professional cleanings that help remove plaque, tartar, and surface stains while keeping your teeth and gums healthy.",
      
        fullDescription:
          "Routine dental exams and professional cleanings are essential for maintaining long-term oral health. During your visit, our dental team carefully examines your teeth, gums, and overall oral condition to detect early signs of cavities, gum disease, and other dental issues. Professional cleaning removes plaque, tartar, and stains that regular brushing cannot eliminate. These preventive visits not only keep your smile bright but also help prevent more serious dental problems in the future.",
      
        benefits: [
          "Prevents cavities and gum disease",
          "Removes plaque, tartar, and surface stains",
          "Detects dental problems at an early stage",
          "Maintains fresh breath and healthy gums",
          "Supports long-term oral health and hygiene"
        ],
      
        steps: [
          "Comprehensive oral examination",
          "Digital X-rays if required",
          "Professional scaling to remove plaque and tartar",
          "Polishing to remove surface stains",
          "Personalized oral hygiene advice and follow-up care"
        ],
      
        image: "/images/services/dental-cleaning.webp"
      },
      {
        slug: "digital-xrays-oral-screenings",
        name: "Digital X-Rays & Oral Screenings",
        shortDescription:
          "Advanced diagnostic imaging and oral screenings that help detect dental problems early, including cavities, bone loss, and signs of oral cancer.",
      
        fullDescription:
          "Digital X-rays and oral screenings are essential diagnostic tools that allow dentists to detect dental issues that may not be visible during a routine examination. Digital radiography uses low radiation technology to capture highly detailed images of teeth, roots, and jawbone structures. These images help identify cavities, infections, bone loss, impacted teeth, and other hidden conditions at an early stage. Oral screenings also include careful evaluation of the soft tissues in the mouth to detect abnormalities and early signs of oral cancer. Early detection enables faster, safer, and more effective treatment.",
      
        benefits: [
          "Early detection of cavities and hidden dental problems",
          "Helps diagnose infections, bone loss, and impacted teeth",
          "Low-radiation digital imaging for safer diagnostics",
          "Supports accurate and precise treatment planning",
          "Screens for early signs of oral cancer and other abnormalities"
        ],
      
        steps: [
          "Initial consultation and oral examination",
          "Digital X-ray imaging of teeth and jaw structures",
          "Evaluation of teeth, roots, and surrounding bone",
          "Oral soft-tissue screening for abnormalities",
          "Discussion of findings and recommended treatment if needed"
        ],
      
        image: "/images/services/digital-xrays.webp"
      },
      {
        slug: "fluoride-treatments",
        name: "Fluoride Treatments",
        shortDescription:
          "Professional fluoride applications that strengthen tooth enamel and help prevent cavities, especially beneficial for children and patients prone to tooth decay.",
      
        fullDescription:
          "Fluoride treatments are a simple yet highly effective preventive dental procedure that helps protect teeth from cavities. Fluoride is a natural mineral that strengthens enamel, making teeth more resistant to acid attacks from bacteria and sugars. During a professional fluoride treatment, a concentrated fluoride gel, foam, or varnish is applied directly to the teeth. This quick and painless treatment is particularly beneficial for children, patients with a higher risk of cavities, or individuals with weakened enamel.",
      
        benefits: [
          "Strengthens tooth enamel and prevents cavities",
          "Protects teeth from acid attacks caused by bacteria",
          "Helps reverse early stages of tooth decay",
          "Quick, painless, and non-invasive procedure",
          "Especially beneficial for children and high-risk patients"
        ],
      
        steps: [
          "Initial dental examination and risk assessment",
          "Professional cleaning if required",
          "Application of fluoride gel, foam, or varnish",
          "Short waiting period to allow fluoride absorption",
          "Post-treatment guidance for optimal protection"
        ],
      
        image: "/images/services/fluoride-treatment.webp"
      },
      {
        slug: "dental-sealants",
        name: "Dental Sealants",
        shortDescription:
          "Protective coatings applied to the chewing surfaces of back teeth to help prevent cavities and tooth decay.",
      
        fullDescription:
          "Dental sealants are thin, protective coatings applied to the chewing surfaces of the back teeth (molars and premolars). These teeth often have deep grooves where food particles and bacteria can easily accumulate, making them more prone to cavities. Sealants create a smooth protective barrier over these grooves, preventing plaque and food from settling in hard-to-clean areas. The procedure is quick, painless, and especially beneficial for children and teenagers, though adults with cavity-prone teeth can also benefit from sealants.",
      
        benefits: [
          "Protects molars and premolars from cavities",
          "Seals deep grooves where bacteria can accumulate",
          "Quick, painless, and non-invasive treatment",
          "Long-lasting protection for teeth",
          "Especially effective for children and teenagers"
        ],
      
        steps: [
          "Thorough cleaning of the tooth surface",
          "Preparation of the tooth with a gentle conditioning solution",
          "Application of the liquid sealant material",
          "Hardening of the sealant using a special curing light",
          "Final check to ensure proper bite and seal"
        ],
      
        image: "/images/services/dental-sealants.webp"
      },
      {
        slug: "gum-treatment",
        name: "Gum Treatment",
        shortDescription:
          "Prevention and early treatment of gum problems like bleeding, swelling, and infection.",
      
        fullDescription:
          "Healthy gums are essential for a strong and lasting smile. Gum disease often begins silently with mild inflammation or bleeding gums and can progress to more serious periodontal problems if left untreated. Gum disease prevention focuses on early detection, professional cleaning, and personalized care to protect your gums and supporting bone. Through regular examinations, plaque and tartar removal, and proper home care guidance, we help patients maintain healthy gums and reduce the risk of periodontal disease.",
      
        benefits: [
          "Prevents gum inflammation and bleeding",
          "Reduces the risk of periodontal disease",
          "Protects the supporting bone around teeth",
          "Improves overall oral health and hygiene",
          "Helps maintain a healthy, confident smile"
        ],
      
        steps: [
          "Comprehensive gum health evaluation",
          "Measurement of gum pockets if needed",
          "Professional plaque and tartar removal",
          "Assessment of gum inflammation or bleeding",
          "Personalized oral hygiene and maintenance plan"
        ],
      
        image: "/images/services/gum-treatment.webp"
      }
    ],
  
    faq: [
      {
        question: "How often should I have a dental checkup?",
        answer:
          "Most people benefit from a checkup and cleaning every six months, though your dentist may recommend more frequent visits based on your needs."
      },
      {
        question: "Are preventive treatments covered by insurance?",
        answer:
          "Yes, most dental plans cover routine exams, cleanings, and X-rays. We can help you understand your benefits."
      },
      {
        question: "What if I haven’t been to the dentist in years?",
        answer:
          "It’s never too late to start. We’ll welcome you without judgment and create a plan to get your smile back on track."
      },
      {
        question: "Do children need preventive dentistry?",
        answer:
          "Absolutely. Early dental visits help kids develop healthy habits and prevent cavities from a young age."
      },
      {
        question: "Can preventive dentistry really save me money?",
        answer:
          "Yes. By catching and treating problems early, you can avoid costly and extensive procedures later on."
      }
    ],
  
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Preventive Dentistry",
      "image": "https://yourdomain.com/images/services/preventive.webp",
      "description":
        "Comprehensive preventive dental care in Your City, including cleanings, checkups, fluoride treatments, and oral health guidance for lasting smiles.",
      "url": "https://yourdomain.com/services/preventive-dentistry",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Your City",
        "addressRegion": "Your State",
        "postalCode": "123456",
        "streetAddress": "123 Your Clinic Street"
      },
      "medicalSpecialty": "Dentistry"
    }
  },  
  {
    title: "Pediatric Dentistry",
    slug: "pediatric-dentistry",
    description:
      "Gentle, child-friendly dental care that ensures your little one feels safe and cared for at every visit.",
    image: "/images/services/pediatric.webp",
    benefits: [
      "Kid-friendly environment",
      "Prevention-focused care",
      "Positive dental habits",
      "Painless treatments"
    ],
    treatments: [
      {
        slug: "kids-dental-checkup-cleaning",
        name: "Kids Dental Exams & Cleanings",
        shortDescription:
          "Gentle dental checkups and professional cleanings designed specifically for children to maintain healthy smiles.",
      
        fullDescription:
          "Child dental exams and cleanings help ensure your child’s teeth and gums stay healthy as they grow. Regular visits allow dentists to remove plaque and tartar, monitor tooth development, and detect potential problems early. These appointments also help children become comfortable in the dental environment, promoting positive oral care habits that last a lifetime.",
      
        benefits: [
          "Prevents cavities and gum disease",
          "Detects dental issues early",
          "Encourages healthy oral hygiene habits",
          "Removes plaque and tartar buildup",
          "Helps children feel comfortable at the dentist"
        ],
      
        steps: [
          "Gentle dental examination of teeth and gums",
          "Professional cleaning to remove plaque and tartar",
          "Assessment of tooth development and bite",
          "Fluoride application if needed",
          "Guidance on brushing and flossing habits"
        ],
      
        image: "/images/services/kids-dental-checkup.webp"
      },
      {
        slug: "space-maintainers",
        name: "Space Maintainers",
        shortDescription:
          "Custom dental appliances that hold space for permanent teeth when a baby tooth is lost too early.",
      
        fullDescription:
          "Space maintainers are dental devices used when a baby tooth is lost prematurely due to decay or injury. These appliances help preserve the empty space so that permanent teeth can erupt in the correct position. Without a space maintainer, neighboring teeth may shift into the gap and cause alignment problems in the future.",
      
        benefits: [
          "Prevents teeth from shifting into empty spaces",
          "Supports proper eruption of permanent teeth",
          "Reduces risk of future orthodontic issues",
          "Maintains correct tooth alignment",
          "Protects long-term oral development"
        ],
      
        steps: [
          "Dental examination and assessment",
          "Taking impressions of the child’s teeth",
          "Custom fabrication of the space maintainer",
          "Placement and adjustment of the appliance",
          "Regular monitoring during dental visits"
        ],
      
        image: "/images/services/space-maintainer.webp"
      },
      {
        slug: "early-braces-consultation",
        name: "Early Braces Consultation",
        shortDescription:
          "Early evaluation of jaw growth and tooth alignment to detect orthodontic issues in children.",
      
        fullDescription:
          "Early orthodontic assessments help identify potential alignment or jaw development problems in children before they become severe. By examining the growth of the teeth and jaws, dentists can recommend preventive or interceptive treatments if necessary. Early detection can reduce the need for complex orthodontic treatments later in life.",
      
        benefits: [
          "Detects orthodontic issues early",
          "Guides proper jaw development",
          "Reduces need for complex treatment later",
          "Improves bite and tooth alignment",
          "Supports healthy smile development"
        ],
      
        steps: [
          "Comprehensive dental examination",
          "Evaluation of jaw growth and tooth alignment",
          "X-rays or imaging if necessary",
          "Discussion of potential orthodontic concerns",
          "Recommendation of preventive or interceptive treatment"
        ],
      
        image: "/images/services/early-braces.webp"
      },
      {
        slug: "pulp-therapy",
        name: "Pulp Therapy",
        shortDescription:
          "A child-friendly treatment that removes infection from a baby tooth while preserving the tooth structure.",
      
        fullDescription:
          "Pulp therapy is a treatment used to save a baby tooth that has been affected by deep decay or infection. The procedure removes infected pulp tissue inside the tooth while preserving the remaining healthy structure. This helps relieve pain, prevent further infection, and maintain the tooth until it naturally falls out and is replaced by a permanent tooth.",
      
        benefits: [
          "Relieves tooth pain and infection",
          "Preserves the baby tooth",
          "Prevents spread of infection",
          "Supports normal chewing and speech",
          "Maintains proper space for permanent teeth"
        ],
      
        steps: [
          "Examination and X-ray evaluation",
          "Removal of infected pulp tissue",
          "Cleaning and disinfecting the tooth interior",
          "Placement of protective filling material",
          "Restoration with a dental crown if needed"
        ],
      
        image: "/images/services/pulp-therapy.webp"
      }
    ],
  
    faq: [
      {
        question: "When should my child first visit the dentist?",
        answer:
          "Children should visit the dentist by their first birthday or within six months after their first tooth appears. Early visits help monitor dental development and establish healthy habits."
      },
      {
        question: "How often should my child have a dental checkup?",
        answer:
          "Most children should see the dentist every six months for regular exams and cleanings. These visits help detect cavities early and keep their teeth healthy."
      },
      {
        question: "Are baby teeth really that important?",
        answer:
          "Yes. Baby teeth help children chew properly, speak clearly, and guide permanent teeth into the correct position. Keeping them healthy is essential for proper dental development."
      },
      {
        question: "What can I do to prevent cavities in my child’s teeth?",
        answer:
          "Encourage regular brushing and flossing, limit sugary snacks and drinks, and schedule routine dental visits. Fluoride treatments and dental sealants can also provide extra protection."
      },
      {
        question: "Is fluoride safe for children?",
        answer:
          "Yes. When used appropriately, fluoride is safe and highly effective in strengthening tooth enamel and preventing cavities in children."
      }
    ],
    schema: {  "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Preventive Dentistry",
      "image": "https://yourdomain.com/images/services/preventive.webp",
      "description":
        "Comprehensive preventive dental care in Your City, including cleanings, checkups, fluoride treatments, and oral health guidance for lasting smiles.",
      "url": "https://yourdomain.com/services/pediatric-dentistry",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Your City",
        "addressRegion": "Your State",
        "postalCode": "123456",
        "streetAddress": "123 Your Clinic Street"
      },
      "medicalSpecialty": "Dentistry"}
  }
];

export const servicesMap = Object.fromEntries(
  servicesArray.map((service) => [service.slug, service])
);
