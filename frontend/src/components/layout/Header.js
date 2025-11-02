import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaGlobe, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('FR');
  const [activeMenu, setActiveMenu] = useState(null); // État pour les sous-menus

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'FR' ? 'EN' : 'FR');
  };

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-primary-700 text-white px-4 py-2">
        <div className="container mx-auto flex justify-between items-center">
            <div className="hidden md:flex space-x-4 text-sm">
            <a href="tel:+22921312485" className="hover:text-secondary-300">+229 01 55 01 02 85</a>
            <a href="mailto:autoecole260@gmail.com" className="hover:text-secondary-300">autoecole260@gmail.com</a>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={toggleLanguage} className="flex items-center text-sm hover:text-secondary-300">
              <FaGlobe className="mr-1" />
              <span>{currentLanguage}</span>
            </button>
            <button className="text-sm hover:text-secondary-300 flex items-center">
              <FaSearch className="mr-1" />
              <span>Recherche</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/images/WhatsApp Image 2025-09-17 at 04.33.35 (5).jpeg" alt="Auto-école Logo" className="h-12" />
            <div className="text-primary-700 font-bold text-2xl ml-2">
              <span className="text-accent-500">Auto-école</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/presentation">Présentation</NavLink>
            <NavLink to="/permis">Permis</NavLink>
            <NavLink to="/temoignages">Témoignages</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-primary-700 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink to="/" onClick={toggleMobileMenu}>Accueil</MobileNavLink>
              <MobileNavLink to="/presentation" onClick={toggleMobileMenu}>Présentation</MobileNavLink>
              <MobileNavLink to="/permis" onClick={toggleMobileMenu}>Permis</MobileNavLink>
              <MobileNavLink to="/temoignages" onClick={toggleMobileMenu}>Témoignages</MobileNavLink>
              <MobileNavLink to="/contact" onClick={toggleMobileMenu}>Contact</MobileNavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }) => {
  return (
    <Link 
      to={to} 
      className="text-primary-700 font-medium hover:text-accent-500 transition-colors duration-200"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children, onClick }) => {
  return (
    <Link 
      to={to} 
      className="text-primary-700 font-medium hover:text-accent-500 transition-colors duration-200 py-2 border-b border-gray-100"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Header;
