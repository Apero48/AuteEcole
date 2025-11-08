import React from 'react';
import Layout from '../../components/layout/Layout';
import SectionTitle from '../../components/ui/SectionTitle';

const ConduiteAccompagnee = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Conduite Accompagnée (AAC)" 
            subtitle="Apprenez à conduire dès 15 ans avec la conduite accompagnée"
            center
          />
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary-800 mb-4">La conduite accompagnée, comment ça marche ?</h3>
                <p className="text-gray-700 mb-6">
                  La conduite accompagnée (AAC) permet d'acquérir de l'expérience de conduite avant le passage de l'examen du permis de conduire (permis B). 
                  Cette formation comprend une période de formation initiale en auto-école, suivie d'une période de conduite accompagnée d'au moins un an.
                </p>
                
                <h4 className="font-semibold text-lg text-primary-700 mb-3">Les avantages :</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                  <li>Apprentissage anticipé dès 15 ans</li>
                  <li>Taux de réussite plus élevé à l'examen du permis</li>
                  <li>Période probatoire réduite à 2 ans (au lieu de 3)</li>
                  <li>Prime d'assurance souvent plus avantageuse</li>
                  <li>Expérience de conduite plus longue avant l'examen</li>
                </ul>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Conditions d'accès :</h4>
                  <ul className="list-disc pl-5 text-green-700 space-y-1">
                    <li>Avoir au moins 15 ans</li>
                    <li>Avoir l'accord de son représentant légal et de l'assureur du véhicule</li>
                    <li>Avoir réussi l'épreuve théorique du code de la route</li>
                    <li>Avoir effectué la formation initiale en auto-école</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-100 rounded-lg p-6 h-full">
                  <h3 className="text-xl font-bold text-primary-800 mb-4">Déroulement de la formation</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Formation initiale</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          Formation théorique (code de la route) et pratique (20h minimum de conduite) en auto-école.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Conduite accompagnée</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          Période d'au moins un an et 3 000 km de conduite avec un accompagnateur.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Rendez-vous pédagogiques</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          2 rendez-vous obligatoires avec un enseignant pour faire le point sur la progression.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Passage de l'examen</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          Passage de l'épreuve pratique du permis de conduire dès 17 ans et demi.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-semibold text-gray-800 mb-3">Tarifs :</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Forfait code + évaluation</span>
                        <span className="font-semibold">300 €</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Forfait 20h de conduite</span>
                        <span className="font-semibold">850 €</span>
                      </li>
                      <li className="flex justify-between">
                        <span>1er rendez-vous pédagogique</span>
                        <span className="font-semibold">100 €</span>
                      </li>
                      <li className="flex justify-between">
                        <span>2ème rendez-vous pédagogique</span>
                        <span className="font-semibold">100 €</span>
                      </li>
                      <li className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                        <span className="font-semibold">Total</span>
                        <span className="font-bold text-lg text-primary-700">1 350 €</span>
                      </li>
                    </ul>
                  </div>
                  
                  <button className="mt-6 w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200">
                    S'inscrire à la formation
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold text-primary-800 mb-6">Questions fréquentes</h3>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-800">Qui peut être accompagnateur ?</h4>
                  <p className="text-gray-700 mt-2">
                    L'accompagnateur doit être titulaire du permis B depuis au moins 5 ans sans interruption (sans annulation ou invalidation). 
                    Il doit avoir obtenu l'accord de son assureur et être mentionné dans le contrat signé avec l'auto-école.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-800">Quelles sont les limitations de vitesse pour la conduite accompagnée ?</h4>
                  <p className="text-gray-700 mt-2">
                    Les limitations de vitesse sont les mêmes que pour les conducteurs novices : 110 km/h sur autoroute, 100 km/h sur les routes 
                    à chaussées séparées et 50 km/h en agglomération.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-800">Peut-on faire la conduite accompagnée en boîte automatique ?</h4>
                  <p className="text-gray-700 mt-2">
                    Oui, il est possible de faire la conduite accompagnée avec un véhicule à boîte automatique. Cependant, 
                    le permis obtenu ne sera valable que pour les véhicules à boîte automatique.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 text-lg mb-3">Besoin de plus d'informations ?</h4>
                <p className="text-blue-700 mb-4">
                  Notre équipe est à votre disposition pour répondre à toutes vos questions sur la conduite accompagnée.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
                  Nous contacter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ConduiteAccompagnee;
