import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from "../components/Carousel"
import HotDealsSection from '../components/HotDealsSection';
import ItemsSection from '../components/ItemsSection';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Carousel />
      <HotDealsSection />
      <ItemsSection />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;
