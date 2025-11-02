import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import PresentationPage from './pages/PresentationPage';
import ContactPage from './pages/ContactPage';
import PermisPage from './pages/PermisPage';
import TemoignagesPage from './pages/TemoignagesPage';

// CSS
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/presentation" element={<PresentationPage />} />
          <Route path="/permis" element={<PermisPage />} />
          <Route path="/temoignages" element={<TemoignagesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
