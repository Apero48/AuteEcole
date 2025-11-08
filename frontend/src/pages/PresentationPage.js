import React from 'react';
import { FaCar, FaUserGraduate, FaAward, FaUsers, FaCheckCircle, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';

const PresentationPage = () => {
  const teamMembers = [
    {
      name: 'Jean Dupont',
      role: 'Directeur',
      image: '/images/team1.jpg',
      bio: '20 ans d\'expérience dans la formation à la conduite'
    },
    {
      name: 'Marie Martin',
      role: 'Monitrice principale',
      image: '/images/team2.jpg',
      bio: 'Spécialiste de la conduite accompagnée'
    },
    {
      name: 'Pierre Durand',
      role: 'Moniteur moto',
      image: '/images/team3.jpg',
      bio: 'Expert en deux-roues depuis 15 ans'
    },
    {
      name: 'Sophie Petit',
      role: 'Secrétaire',
      image: '/images/team4.jpg',
      bio: 'À votre écoute pour toutes vos démarches'
    }
  ];

  const testimonials = [
    {
      name: 'Thomas L.',
      role: 'Élève',
      text: 'Une équipe à l\'écoute et des moniteurs patients. J\'ai obtenu mon permis du premier coup !',
      rating: 5
    },
    {
      name: 'Julie M.',
      role: 'Élève',
      text: 'Formation de qualité avec des méthodes modernes. Je recommande vivement cette auto-école !',
      rating: 5
    },
    {
      name: 'Marc D.',
      role: 'Parent d\'élève',
      text: 'Très satisfait du suivi personnalisé pour mon fils. Les progrès ont été rapides et constants.',
      rating: 4
    }
  ];

  const gallery = [
    '/images/WhatsApp Image 2025-09-17 at 04.33.31 (12).jpeg',
    '/images/WhatsApp Image 2025-09-17 at 04.33.31 (13).jpeg',
    '/images/WhatsApp Image 2025-09-17 at 04.33.31 (17).jpeg',
    '/images/WhatsApp Image 2025-09-17 at 04.33.32 (12).jpeg',
    '/images/WhatsApp Image 2025-09-17 at 04.33.32 (14).jpeg',
    '/images/WhatsApp Image 2025-09-17 at 04.33.38 (6).jpeg'
  ];

  return (
    <div className="bg-white">
      {/* Section Hero */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img 
            src="/images/WhatsApp Image 2025-09-17 at 04.33.31 (12).jpeg" 
            alt="Élève en cours de conduite" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Bienvenue à l'Auto-École Fischer
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Votre réussite est notre priorité. Découvrez une formation de qualité adaptée à vos besoins.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="#contact" 
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-8 rounded-full inline-flex items-center transition-colors"
              >
                <FaPhoneAlt className="mr-2" /> Nous contacter
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Notre Histoire" 
            subtitle="Plus de 15 ans d'expérience dans la formation à la conduite"
            center
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Une histoire de passion et d'engagement</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Fondée en 2008, l'Auto-École Fischer s'est imposée comme une référence dans la formation à la conduite.
                  Notre engagement envers l'excellence et la satisfaction de nos élèves nous a permis de former des milliers
                  de conducteurs responsables et confiants au volant.
                </p>
                <p>
                  Au fil des années, nous avons développé des méthodes d'apprentissage innovantes et adaptées à chaque profil,
                  tout en maintenant des taux de réussite supérieurs à la moyenne nationale.
                </p>
                <p>
                  Notre équipe de moniteurs expérimentés et passionnés est notre plus grande fierté. Ils accompagnent chaque
                  élève avec bienveillance et professionnalisme pour garantir une formation de qualité.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2008</div>
                  <div className="text-gray-600">Année de création</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Années d'expérience</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">5 000+</div>
                  <div className="text-gray-600">Élèves formés</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
                  <div className="text-gray-600">Taux de réussite</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/WhatsApp Image 2025-09-17 at 04.33.32 (12).jpeg" 
                  alt="Équipe de l'auto-école" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400 rounded-lg z-0"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-100 rounded-full z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nos Valeurs" 
            subtitle="Ce qui nous distingue des autres auto-écoles"
            center
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <FaUserGraduate className="text-4xl mb-4 text-blue-600" />,
                title: 'Pédagogie Adaptée',
                description: 'Des méthodes d\'apprentissage personnalisées pour chaque élève, quel que soit son rythme.'
              },
              {
                icon: <FaCar className="text-4xl mb-4 text-blue-600" />,
                title: 'Véhicules Modernes',
                description: 'Une flotte de véhicules récents et parfaitement entretenus pour un apprentissage optimal.'
              },
              {
                icon: <FaAward className="text-4xl mb-4 text-blue-600" />,
                title: 'Qualité Certifiée',
                description: 'Label Qualité des Écoles de Conduite délivré par l\'État pour la qualité de notre formation.'
              },
              {
                icon: <FaCheckCircle className="text-4xl mb-4 text-blue-600" />,
                title: 'Suivi Personnalisé',
                description: 'Un accompagnement sur mesure avec des bilans réguliers pour suivre votre progression.'
              },
              {
                icon: <FaUsers className="text-4xl mb-4 text-blue-600" />,
                title: 'Équipe Expérimentée',
                description: 'Des moniteurs diplômés et expérimentés, à l\'écoute de vos besoins.'
              },
              {
                icon: <FaClock className="text-4xl mb-4 text-blue-600" />,
                title: 'Flexibilité',
                description: 'Des horaires adaptés à votre emploi du temps, même le soir et le week-end.'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Notre Équipe" 
            subtitle="Des professionnels à votre écoute"
            center
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.role === 'Directeur' ? '/images/WhatsApp Image 2025-09-17 at 04.33.31 (13).jpeg' : 
                         member.role === 'Monitrice principale' ? '/images/WhatsApp Image 2025-09-17 at 04.33.31 (17).jpeg' :
                         member.role === 'Moniteur moto' ? '/images/WhatsApp Image 2025-09-17 at 04.33.32 (14).jpeg' :
                         '/images/WhatsApp Image 2025-09-17 at 04.33.38 (6).jpeg'} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Ils nous font confiance" 
            subtitle="Ce que disent nos élèves"
            center
            light
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-400'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="italic mb-4">"{testimonial.text}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-blue-200 text-sm">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Galerie Photos" 
            subtitle="Découvrez notre univers"
            center
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {gallery.map((image, index) => (
              <motion.div 
                key={index}
                className="relative overflow-hidden rounded-lg aspect-square group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <img 
                  src={image} 
                  alt={`Galerie ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-blue-700 text-white p-8">
                <h2 className="text-2xl font-bold mb-6">Contactez-nous</h2>
                <p className="mb-8">
                  Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre projet de formation.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Adresse</h3>
                      <p className="text-blue-100">123 Avenue de la République, 75011 Paris</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <FaPhoneAlt className="text-yellow-400 mr-3" />
                    <div>
                      <h3 className="font-semibold">Téléphone</h3>
                      <a href="tel:+33123456789" className="text-blue-100 hover:underline">01 23 45 67 89</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <FaEnvelope className="text-yellow-400 mr-3" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href="mailto:contact@autoecolefischer.fr" className="text-blue-100 hover:underline">contact@autoecolefischer.fr</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <FaClock className="text-yellow-400 mr-3" />
                    <div>
                      <h3 className="font-semibold">Horaires</h3>
                      <p className="text-blue-100">Lun-Ven: 9h-19h<br />Sam: 9h-17h</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold mb-3">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors">
                      <span className="sr-only">Facebook</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors">
                      <span className="sr-only">Instagram</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="01 23 45 67 89"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Votre message..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PresentationPage;
