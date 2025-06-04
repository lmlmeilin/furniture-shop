import Home from './pages/Home';

import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import ProductGrid from './components/ProductGrid/ProductGrid';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Home />
      <HeroSection />
      <ProductGrid />
      <AboutUs />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
