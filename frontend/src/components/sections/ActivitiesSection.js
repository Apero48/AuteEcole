import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';


const activities = [
  {
    id: 1,
    title: 'Permis B (Voiture)',
    description: 'Formation complète pour l\'obtention du permis de conduire voiture (catégorie B) avec des moniteurs expérimentés.',
    image: '/images/WhatsApp Image 2025-09-17 at 04.33.31 (11).jpeg',
    linkTo: '/permis/voiture',
  },
  {
    id: 2,
    title: 'Permis A (Moto)',
    description: 'Apprenez à conduire une moto en toute sécurité avec nos formations adaptées à tous les niveaux.',
    image: '/images/WhatsApp Image 2025-09-17 at 04.33.33 (11).jpeg',
    linkTo: '/permis/moto',
  },
  {
    id: 3,
    title: 'Conduite Accompagnée',
    description: 'Formation anticipée à la conduite accessible dès 15 ans pour une meilleure expérience de conduite.',
    image: '/images/WhatsApp Image 2025-09-17 at 04.33.38 (5).jpeg',
    linkTo: '/formations/conducteur',
  },
  {
    id: 4,
    title: 'Stage de Perfectionnement',
    description: 'Perfectionnez votre conduite avec nos stages adaptés à vos besoins spécifiques.',
    image: '/images/WhatsApp Image 2025-09-17 at 04.33.38 (7).jpeg',
    linkTo: '/stages/perfectionnement',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ActivitiesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nos Activités"
          subtitle="Découvrez nos formations adaptées à vos besoins en conduite automobile"
          center
        />
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {activities.map((activity) => (
            <motion.div key={activity.id} variants={item}>
              <Card
                title={activity.title}
                description={activity.description}
                image={activity.image}
                linkTo={activity.linkTo}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesSection;