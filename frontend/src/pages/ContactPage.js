import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCar, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
       <div className="w-full mb-12">
        <img
          src="/images/security-entrance.jpg"
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
          title="Contactez-nous"
          subtitle="Nous sommes à votre écoute pour toute question ou demande d'information"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold text-primary-700 mb-6">Nos Coordonnées</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary-600 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-primary-700 mb-1">Siège social</h3>
                  <p className="text-gray-600">Zone Portuaire, Route des Pêches, 01 BP 49 Cotonou, Bénin</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaPhone className="text-primary-600 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-primary-700 mb-1">Téléphone</h3>
                  <p className="text-gray-600">+229 21 31 24 85</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaEnvelope className="text-primary-600 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-primary-700 mb-1">Email</h3>
                  <p className="text-gray-600">autoecole260@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaClock className="text-primary-600 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-primary-700 mb-1">Horaires d'ouverture</h3>
                  <p className="text-gray-600">Lundi - Samedi: 7h00 - 21h00</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold text-primary-700 mb-6">S'inscrire à une formation</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Nom complet *</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="phone">Téléphone *</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="formation">Type de formation *</label>
                <select
                  id="formation"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Choisissez une formation</option>
                  <option value="permisB">Permis B - à partir de 1200€</option>
                  <option value="permisB-stych">Permis B Stych - à partir de 499€</option>
                  <option value="permisA">Permis Moto (A) - à partir de 599€</option>
                  <option value="trottinette">Formation Trottinette - 60.99€</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="disponibilite">Disponibilité préférée</label>
                <select
                  id="disponibilite"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="matin">Matin (7h-12h)</option>
                  <option value="aprem">Après-midi (12h-17h)</option>
                  <option value="soir">Soir (17h-21h)</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message / Questions</label>
                <textarea
                  id="message"
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Questions ou informations complémentaires..."
                ></textarea>
              </div>
              <p className="text-sm text-gray-500">* Champs obligatoires</p>
              <Button type="submit" className="w-full">S'inscrire maintenant</Button>
            </form>
          </motion.div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="text-center">
              <FaCar className="text-4xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-700 mb-3">Nos Véhicules</h3>
              <p className="text-gray-600">
                Une flotte moderne de véhicules équipés double-commande pour votre formation en toute sécurité.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="text-center">
              <FaGraduationCap className="text-4xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-700 mb-3">Formation Code</h3>
              <p className="text-gray-600">
                Accès illimité à notre plateforme en ligne pour réviser le code de la route 24h/24.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="text-center">
              <FaCalendarAlt className="text-4xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-700 mb-3">Réservation</h3>
              <p className="text-gray-600">
                Planifiez vos leçons de conduite en ligne selon vos disponibilités.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-12 bg-white rounded-lg shadow-md"
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold text-primary-700 mb-4">Localisez-nous</h2>
            <p className="text-gray-600 mb-4">
              Notre siège social est situé au cœur de Cotonou, facilement accessible depuis les principaux axes routiers.
            </p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-b-lg">
            <div className="text-center px-4">
              <p className="text-gray-600 mb-4">Carte interactive indisponible pour le moment.</p>
              <p className="text-gray-600">Adresse: Zone Portuaire, Route des Pêches, Cotonou</p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-primary-700 mb-6">Questions Fréquentes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-primary-700 mb-3">Combien de temps faut-il pour obtenir le permis B ?</h3>
              <p className="text-gray-600">
                La durée moyenne pour obtenir le permis B est de 3 à 6 mois, incluant la formation au code de la route 
                et la conduite. Cette durée peut varier selon votre rythme d'apprentissage et votre disponibilité. 
                Nous proposons aussi des formations accélérées pour obtenir votre permis plus rapidement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-primary-700 mb-3">Quel est le coût total du permis B ?</h3>
              <p className="text-gray-600">
                Le forfait de base pour le permis B commence à partir de 1200€, incluant le code de la route et 20h de conduite. 
                Des formules économiques à partir de 499€ avec Stych sont également disponibles. Des heures supplémentaires 
                peuvent être nécessaires selon votre progression (45€/heure).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-primary-700 mb-3">Comment se déroule la formation ?</h3>
              <p className="text-gray-600">
                La formation commence par l'apprentissage du code de la route, accessible en salle et en ligne 24h/24. 
                Une fois le code obtenu, vous démarrez la conduite avec nos moniteurs diplômés. Les leçons sont 
                planifiées selon vos disponibilités, avec une progression personnalisée.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-primary-700 mb-3">Quels sont vos taux de réussite ?</h3>
              <p className="text-gray-600">
                Notre taux de réussite moyen est de 94% au permis B ! Ce résultat exceptionnel est dû à notre méthode 
                d'enseignement personnalisée et à l'expérience de nos moniteurs diplômés d'État. Nous accompagnons chaque 
                élève jusqu'à la réussite.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
