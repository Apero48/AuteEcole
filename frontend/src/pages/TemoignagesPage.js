import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Permis B obtenu",
    image: "/images/WhatsApp Image 2025-09-17 at 04.33.31 (11).jpeg",
    content: "Une formation de qualité avec des moniteurs patients et pédagogues. J'ai obtenu mon permis du premier coup !",
    rating: 5
  },
  {
    id: 2,
    name: "Thomas Dubois",
    role: "Permis A obtenu",
    image: "/images/WhatsApp Image 2025-09-17 at 04.33.31 (12).jpeg",
    content: "Excellente auto-école ! Le programme de formation est bien structuré et les véhicules sont récents et confortables.",
    rating: 5
  },
  {
    id: 3,
    name: "Marie Petit",
    role: "Formation Trottinette",
    image: "/images/WhatsApp Image 2025-09-17 at 04.33.31 (13).jpeg",
    content: "Formation trottinette très complète. J'ai appris beaucoup sur la sécurité et les règles de circulation.",
    rating: 5
  },
  {
    id: 4,
    name: "Lucas Bernard",
    role: "Permis B obtenu",
    image: "/images/WhatsApp Image 2025-09-17 at 04.33.31 (14).jpeg",
    content: "Les cours de code en ligne sont très pratiques, on peut réviser à son rythme. Les moniteurs sont très professionnels.",
    rating: 5
  }
];

const TemoignagesPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle
          title="Témoignages de nos élèves"
          subtitle="Découvrez les retours d'expérience de nos apprenants"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: testimonial.id * 0.2 }}
              className="bg-white rounded-lg shadow-md p-6 relative"
            >
              <div className="flex items-start mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-700">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <div className="flex mt-2">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <FaStar key={index} className="text-yellow-400 mr-1" />
                    ))}
                  </div>
                </div>
              </div>
              <FaQuoteLeft className="text-2xl text-primary-200 absolute top-6 right-6" />
              <p className="text-gray-600 italic">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Section Photos */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-primary-700 mb-8">Nos moments de réussite</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "WhatsApp Image 2025-09-17 at 04.33.31 (15).jpeg",
              "WhatsApp Image 2025-09-17 at 04.33.31 (16).jpeg",
              "WhatsApp Image 2025-09-17 at 04.33.31 (17).jpeg",
              "WhatsApp Image 2025-09-17 at 04.33.31 (18).jpeg",
              "WhatsApp Image 2025-09-17 at 04.33.31 (19).jpeg",
              "WhatsApp Image 2025-09-17 at 04.33.31 (20).jpeg",
              "WhatsApp Image 2025-09-17 at 04.33.31 (21).jpeg",
              "WhatsApp Image 2025-09-17 at 04.33.32 (11).jpeg"
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square"
              >
                <img
                  src={`/images/${image}`}
                  alt={`Moment de réussite ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section Statistiques */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-primary-50 rounded-lg p-6 text-center"
          >
            <h3 className="text-4xl font-bold text-primary-700 mb-2">94%</h3>
            <p className="text-gray-600">Taux de réussite</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary-50 rounded-lg p-6 text-center"
          >
            <h3 className="text-4xl font-bold text-primary-700 mb-2">1500+</h3>
            <p className="text-gray-600">Élèves formés</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-primary-50 rounded-lg p-6 text-center"
          >
            <h3 className="text-4xl font-bold text-primary-700 mb-2">15</h3>
            <p className="text-gray-600">Années d'expérience</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TemoignagesPage;