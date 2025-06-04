import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import AboutUs from '../components/AboutUs/AboutUs';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductGrid />
      <AboutUs />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;