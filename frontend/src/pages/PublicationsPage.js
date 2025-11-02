import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';

// Mock news data
const newsItems = [
  {
    id: 1,
    title: "Nouveau parc de véhicules pédagogiques",
    excerpt: "Auto-école s'équipe d'un nouveau parc de véhicules pour les leçons pratiques.",
    content: "Nous avons acquis plusieurs véhicules neufs équipés pour les cours pratiques afin d'améliorer l'expérience des élèves et de garantir des formations en conditions réelles.",
    date: '15 Mai 2025',
    category: 'Actualité',
    image: 'images/ims.jpeg'
  },
  {
    id: 2,
    title: 'Atelier permis accéléré',
    excerpt: 'Lancement d\'un programme de préparation accélérée au permis de conduire.',
    content: 'Ce programme intensif permet aux candidats de se préparer efficacement à l\'examen théorique et pratique avec un accompagnement personnalisé.',
    date: '3 Mai 2025',
    category: 'Formation',
    image: 'images/distribution-system.jpg'
  },
  {
    id: 3,
    title: 'Session gratuite d\'information',
    excerpt: 'Journée portes ouvertes et session d\'information sur nos offres et tarifs.',
    content: 'Rejoignez-nous pour une session d\'information gratuite pour découvrir les forfaits, les horaires et rencontrer nos moniteurs.',
    date: '28 Avril 2025',
    category: 'Événement',
    image: 'images/maintenance-worker.jpg'
  }
];

const PublicationsPage = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <div className="container mx-auto px-4 py-16">
       <div className="w-full mb-12">
          <img
          src="/images/publication.png"
          alt="Carrières chez Auto-école"
          className="w-full h-64 object-cover rounded"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle
          title="Publications"
          subtitle="Restez informé des dernières actualités de Auto-école"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {newsItems.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                title={news.title}
                excerpt={news.excerpt}
                image={news.image}
                date={news.date}
                category={news.category}
                onClick={() => setSelectedNews(news)}
              />
            </motion.div>
          ))}
        </div>

        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedNews(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-lg max-w-2xl w-full p-6"
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-primary-700 mb-2">{selectedNews.title}</h2>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>{selectedNews.date}</span>
                <span className="mx-2">•</span>
                <span>{selectedNews.category}</span>
              </div>
              <p className="text-gray-600">{selectedNews.content}</p>
              <button
                className="mt-4 text-primary-700 hover:text-primary-800"
                onClick={() => setSelectedNews(null)}
              >
                Fermer
              </button>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default PublicationsPage;
