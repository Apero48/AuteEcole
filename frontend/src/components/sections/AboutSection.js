import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <SectionTitle title="Auto-école" subtitle="Formations complètes pour obtenir votre permis" />

          <p className="text-lg text-gray-600 mb-6">
            Auto-école propose des formations complètes pour l'obtention du permis de conduire (théorique et pratique). Nos moniteurs expérimentés accompagnent les élèves tout au long de leur apprentissage pour garantir réussite et sécurité. Nous offrons des forfaits adaptés, une application de suivi, et un réseau d'agences pour vous accompagner.
          </p>

          <div className="flex justify-center gap-4">
            <Button as="link" to="/activities" variant="primary">Nos Formations</Button>
            <Button as="link" to="/contact" variant="outline">S'inscrire</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;