import React from 'react';
import Layout from '../../../components/layout/Layout';
import SectionTitle from '../../../components/ui/SectionTitle';

const StagePerfectionnement = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Stages de Perfectionnement" 
            subtitle="Améliorez votre conduite et votre sécurité routière"
            center
          />
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8 mt-8">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Que vous soyez un conducteur novice qui souhaite gagner en confiance ou un conducteur expérimenté 
                désireux de parfaire sa maîtrise du véhicule, nos stages de perfectionnement sont conçus pour répondre 
                à vos besoins spécifiques.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Pour qui ?</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Jeunes conducteurs souhaitant gagner en assurance</li>
                    <li>Personnes reprenant la conduite après une longue période d'arrêt</li>
                    <li>Conducteurs anxieux ou stressés</li>
                    <li>Personnes ayant échoué plusieurs fois à l'examen pratique</li>
                    <li>Toute personne souhaitant améliorer sa conduite</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                  <h3 className="text-xl font-bold text-green-800 mb-4">Objectifs</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Gagner en confiance au volant</li>
                    <li>Améliorer sa maîtrise du véhicule</li>
                    <li>Apprendre à gérer le stress de la conduite</li>
                    <li>Perfectionner sa conduite écologique</li>
                    <li>Se préparer à l'examen du permis</li>
                  </ul>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-6">Nos formules de stages</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-primary-600 text-white p-4 text-center">
                    <h3 className="font-bold text-lg">Découverte</h3>
                    <p className="text-sm opacity-90">4 heures</p>
                  </div>
                  <div className="p-6">
                    <p className="text-3xl font-bold text-center mb-4">150 €</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Évaluation initiale
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        3h de conduite
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Bilan personnalisé
                      </li>
                    </ul>
                    <button className="mt-6 w-full bg-primary-100 hover:bg-primary-200 text-primary-700 font-semibold py-2 px-4 rounded transition duration-200">
                      Réserver
                    </button>
                  </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow transform scale-105 border-primary-300">
                  <div className="bg-primary-700 text-white p-4 text-center">
                    <h3 className="font-bold text-lg">Intensif</h3>
                    <p className="text-sm opacity-90">10 heures</p>
                  </div>
                  <div className="p-6">
                    <p className="text-3xl font-bold text-center mb-4">350 €</p>
                    <p className="text-xs text-center text-red-600 font-semibold mb-3">Le plus populaire</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Évaluation initiale
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        9h de conduite
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Suivi personnalisé
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Bilan final détaillé
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        -10% sur le permis
                      </li>
                    </ul>
                    <button className="mt-6 w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded transition duration-200">
                      Réserver
                    </button>
                  </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-primary-600 text-white p-4 text-center">
                    <h3 className="font-bold text-lg">Expert</h3>
                    <p className="text-sm opacity-90">20 heures</p>
                  </div>
                  <div className="p-6">
                    <p className="text-3xl font-bold text-center mb-4">650 €</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Évaluation approfondie
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        19h de conduite
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Coaching personnalisé
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Bilan complet
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        -15% sur le permis
                      </li>
                    </ul>
                    <button className="mt-6 w-full bg-primary-100 hover:bg-primary-200 text-primary-700 font-semibold py-2 px-4 rounded transition duration-200">
                      Réserver
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <span className="font-semibold">Important :</span> Les stages peuvent être programmés sur mesure selon vos disponibilités. 
                      Les prix incluent le matériel pédagogique et l'utilisation du véhicule.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Témoignages</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      "Après avoir échoué deux fois à l'examen, j'ai opté pour le stage intensif. Les moniteurs sont à l'écoute et très pédagogues. J'ai réussi mon permis du premier coup après le stage !"
                    </p>
                    <p className="font-semibold text-gray-800">- Thomas, 24 ans</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      "Je n'avais pas conduit depuis 10 ans. Le stage m'a permis de reprendre confiance et de me remettre à niveau. Je recommande vivement !"
                    </p>
                    <p className="font-semibold text-gray-800">- Sophie, 35 ans</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Prêt à améliorer votre conduite ?</h3>
                <p className="text-blue-700 mb-6">
                  Contactez-nous pour plus d'informations ou pour réserver votre stage de perfectionnement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+2250155010285"
                    className="bg-white hover:bg-gray-100 text-blue-700 font-semibold py-3 px-6 rounded-lg border border-blue-200 flex items-center justify-center gap-2 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    01 55 01 02 85
                  </a>
                  <a 
                    href="mailto:autoecolefischer01@gmail.com"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Nous écrire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StagePerfectionnement;
