import React from 'react';
import Layout from '../../components/layout/Layout';
import SectionTitle from '../../components/ui/SectionTitle';
import Gallery from '../../components/ui/Gallery';

const PermisVoiture = () => {
  // Liste des images spécifiques au permis voiture
  const voitureImages = [
    '/images/WhatsApp Image 2025-11-11 at 03.56.44.jpeg',
    '/images/WhatsApp Image 2025-11-11 at 03.56.35.jpeg',
    '/images/WhatsApp Image 2025-11-11 at 03.56.34.jpeg',
    '/images/WhatsApp Image 2025-11-11 at 03.56.37.jpeg'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Permis B (Voiture)" 
            subtitle="Formation complète pour l'obtention du permis de conduire voiture"
            center
          />
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary-800 mb-4">Description de la formation</h3>
                <p className="text-gray-700 mb-6">
                  Notre formation au permis B vous prépare efficacement à l'examen du permis de conduire voiture. 
                  Nos moniteurs diplômés vous accompagnent tout au long de votre apprentissage pour vous assurer 
                  une maîtrise parfaite de la conduite et des règles de sécurité routière.
                </p>
                
                <h4 className="font-semibold text-lg text-primary-700 mb-3">Contenu de la formation :</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                  <li>Code de la route et signalisation</li>
                  <li>Maîtrise du véhicule et des commandes</li>
                  <li>Conduite en ville et sur route</li>
                  <li>Conduite autonome et éco-conduite</li>
                  <li>Gestion des situations d'urgence</li>
                </ul>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Prérequis :</h4>
                  <ul className="list-disc pl-5 text-blue-700 space-y-1">
                    <li>Avoir 18 ans révolus</li>
                    <li>Être titulaire de l'ASSR2 ou de l'ASR</li>
                    <li>Réussir l'examen du code de la route</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-100 rounded-lg p-6 h-full">
                  <h3 className="text-xl font-bold text-primary-800 mb-4">Détails pratiques</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Durée :</h4>
                      <p className="text-gray-700">20 heures minimum (forfait de base)</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800">Tarifs :</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Forfait code : 300 €</li>
                        <li>Heure de conduite : 45 €</li>
                        <li>Forfait 20h : 850 €</li>
                        <li>Forfait 30h : 1 200 €</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800">Documents à fournir :</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>1 photocopie de la pièce d'identité</li>
                        <li>2 photos d'identité</li>
                        <li>1 justificatif de domicile</li>
                        <li>1 enveloppe timbrée</li>
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
              <h3 className="text-xl font-bold text-primary-800 mb-4">Questions fréquentes</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-800">Combien de temps faut-il pour obtenir le permis ?</h4>
                  <p className="text-gray-700 mt-2">
                    La durée varie en fonction de votre rythme d'apprentissage. En moyenne, il faut compter 2 à 3 mois 
                    entre l'inscription et l'obtention du permis, sous réserve de réussite aux examens.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-800">Puis-je payer en plusieurs fois ?</h4>
                  <p className="text-gray-700 mt-2">
                    Oui, nous proposons des facilités de paiement sans frais. N'hésitez pas à nous contacter pour plus d'informations.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-800">Quand puis-je commencer les leçons de conduite ?</h4>
                  <p className="text-gray-700 mt-2">
                    Vous pouvez commencer les leçons de conduite dès que vous avez obtenu votre numéro NEPH (numéro de dossier) 
                    et que vous avez effectué votre évaluation de départ.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <Gallery 
              images={voitureImages}
              title="Formation Voiture en Images"
              subtitle="Découvrez notre formation voiture à travers ces photos"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PermisVoiture;
