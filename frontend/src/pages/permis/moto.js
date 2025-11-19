import React from 'react';
import Layout from '../../components/layout/Layout';
import SectionTitle from '../../components/ui/SectionTitle';
import Gallery from '../../components/ui/Gallery';

const PermisMoto = () => {
  // Liste des images spécifiques au permis moto
  const motoImages = [
    '/images/WhatsApp Image 2025-11-11 at 03.56.40.jpeg',
    '/images/WhatsApp Image 2025-11-11 at 03.56.41 (1).jpeg',
    '/images/WhatsApp Image 2025-11-11 at 03.56.42.jpeg',
    '/images/WhatsApp Image 2025-11-11 at 03.56.44 (1).jpeg'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Permis A (Moto)" 
            subtitle="Formation complète pour l'obtention du permis moto"
            center
          />
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary-800 mb-4">Description de la formation</h3>
                <p className="text-gray-700 mb-6">
                  Notre formation au permis A vous prépare à la conduite d'une moto en toute sécurité. 
                  Nos moniteurs expérimentés vous accompagnent dans votre apprentissage, que vous soyez 
                  débutant ou que vous souhaitiez vous perfectionner.
                </p>
                
                <h4 className="font-semibold text-lg text-primary-700 mb-3">Contenu de la formation :</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                  <li>Maîtrise de la moto à allure lente</li>
                  <li>Freinage et évitement</n>
                  <li>Conduite sur route et en circulation</li>
                  <li>Gestion des situations d'urgence</li>
                  <li>Perfectionnement de la conduite</li>
                </ul>
                
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Prérequis :</h4>
                  <ul className="list-disc pl-5 text-yellow-700 space-y-1">
                    <li>Avoir 24 ans ou 20 ans avec 2 ans de permis A2</li>
                    <li>Être titulaire de l'ASSR2 ou de l'ASR</li>
                    <li>Réussir l'examen du code de la route moto</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-100 rounded-lg p-6 h-full">
                  <h3 className="text-xl font-bold text-primary-800 mb-4">Détails pratiques</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Durée :</h4>
                      <p className="text-gray-700">15 heures minimum (formation accélérée possible)</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800">Tarifs :</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Forfait code moto : 250 €</li>
                        <li>Heure de conduite : 50 €</li>
                        <li>Forfait 15h : 700 €</li>
                        <li>Forfait 20h : 900 €</li>
                        <li>Passage plateau : 180 €</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800">Équipement fourni :</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Casque intégral</li>
                        <li>Gants homologués</li>
                        <li>Veste et pantalon de protection</li>
                        <li>Protections dorsales</li>
                      </ul>
                    </div>
                  </div>
                  
                  <button className="mt-6 w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200">
                    S'inscrire à la formation
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold text-primary-800 mb-4">Nos motos école</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">Honda CB650R</h4>
                  <p className="text-gray-600 text-sm">Moteur : 4 cylindres, 649 cm³</p>
                  <p className="text-gray-600 text-sm">Puissance : 95 ch</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">Yamaha MT-07</h4>
                  <p className="text-gray-600 text-sm">Moteur : Bicylindre, 689 cm³</p>
                  <p className="text-gray-600 text-sm">Puissance : 75 ch</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">Kawasaki Z650</h4>
                  <p className="text-gray-600 text-sm">Moteur : Bicylindre, 649 cm³</p>
                  <p className="text-gray-600 text-sm">Puissance : 68 ch</p>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-800">Quelle est la différence entre le permis A1, A2 et A ?</h4>
                  <p className="text-gray-700 mt-2">
                    Le permis A1 (125 cm³) est accessible dès 16 ans, le A2 (limité à 35 kW) à partir de 18 ans, 
                    et le permis A (sans restriction) à partir de 24 ans (ou 20 ans avec 2 ans de permis A2).
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-800">Faut-il fournir son équipement ?</h4>
                  <p className="text-gray-700 mt-2">
                    Non, tout l'équipement de protection est fourni par l'auto-école. Cependant, si vous possédez déjà votre propre équipement homologué, 
                    vous pouvez bien sûr l'utiliser.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <Gallery 
              images={motoImages}
              title="Formation Moto en Images"
              subtitle="Découvrez notre formation moto à travers ces photos"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PermisMoto;
