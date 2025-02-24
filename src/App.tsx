import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FullGallery from './pages/FullGallery';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/full-gallery" element={<FullGallery />} />
          <Route path="/" element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <Hero />
              <Services />
              <Gallery />
              <Contact />
              <Footer />
            </div>
          } />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;