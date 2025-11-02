import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

const images = [
  'WhatsApp Image 2025-09-17 at 04.33.30 (5).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.30 (6).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.30 (7).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.30 (8).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.30 (9).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.31 (11).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.31 (12).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.31 (13).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.31 (14).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.31 (15).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.31 (16).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.31 (17).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.31 (18).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.31 (19).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.31 (20).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.31 (21).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.32 (11).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.32 (12).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.32 (13).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.32 (14).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.32 (15).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.32 (16).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.32 (17).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.32 (18).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.32 (19).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.32 (20).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.32 (21).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.33 (10).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.33 (11).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.33 (12).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.33 (13).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.33 (14).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.33 (15).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.33 (16).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.33 (17).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.33 (18).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.33 (19).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.34 (10).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.34 (11).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.34 (12).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.34 (13).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.34 (14).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.34 (15).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.34 (8).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.34 (9).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.35 (3).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.35 (4).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.35 (5).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.36 (10).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.36 (11).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.36 (12).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.36 (13).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.36 (14).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.36 (15).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.36 (16).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.36 (17).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.36 (9).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.37 (10).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.37 (11).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.37 (12).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.37 (13).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.37 (14).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.37 (15).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.37 (16).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.37 (17).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.37 (18).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.37 (19).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.38 (4).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.38 (5).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.38 (6).jpeg',
  'WhatsApp Image 2025-09-17 at 04.33.38 (7).jpeg'
];

const permits = [
  {
    id: 'B',
    name: 'Permis Voiture (B)',
    price: 'à partir de 1200€',
    description: 'Forfait code + pratique, suivi personnalisé et application de suivi.',
  },
  {
    id: 'STYCH',
    name: "Offre Stych (Permis Voiture)",
    price: 'à partir de 499€',
    description: "Programme intensif pour se préparer rapidement à l'examen.",
  },
  {
    id: 'A',
    name: 'Permis Moto (A)',
    price: 'à partir de 599€',
    description: 'Packs valides 12 mois, accès à pistes privées, prise en charge démarches.',
  },
  {
    id: 'T',
    name: "Formation Trottinette - La trott' facile",
    price: 'à partir de 60.99€',
    description: "Formation 30 minutes : règles, sanctions et conseils pratiques.",
  }
];

const PermisPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle title="Nos Permis" subtitle="Choisissez la formation qui vous convient" />

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {permits.map((p) => (
          <div key={p.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-primary-700 mb-2">{p.name}</h3>
            <p className="text-gray-600 mb-4">{p.description}</p>
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold">{p.price}</div>
              <Button as="link" to="/contact" variant="primary">S'inscrire</Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <SectionTitle title="Galerie" subtitle="Exemples de nos sessions et véhicules" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {images.map((img) => (
            <div key={img} className="overflow-hidden rounded shadow-sm">
              <img src={`/images/${img}`} alt={img} className="w-full h-40 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PermisPage;
