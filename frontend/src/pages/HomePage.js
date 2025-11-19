import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ActivitiesSection from '../components/sections/ActivitiesSection';
import StatsSection from '../components/sections/StatsSection';
import NewsSection from '../components/sections/NewsSection';
import ContactSection from '../components/sections/ContactSection';
import Gallery from '../components/ui/Gallery';

// Liste des images pour la galerie de la page d'accueil
const homeGalleryImages = [
  '/images/WhatsApp Image 2025-11-11 at 03.56.27 (1).jpeg',
  '/images/WhatsApp Image 2025-11-11 at 03.56.27 (2).jpeg',
  '/images/WhatsApp Image 2025-11-11 at 03.56.29.jpeg',
  '/images/WhatsApp Image 2025-11-11 at 03.56.30.jpeg'
];

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <Gallery 
        images={homeGalleryImages} 
        title="Notre École en Images" 
        subtitle="Découvrez notre école et nos formations à travers ces photos"
      />
      <StatsSection />
      <NewsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
