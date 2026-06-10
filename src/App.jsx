import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import FeatureSection from './sections/FeatureSection';
import Offerings from './sections/Offerings';
import Testimonials from './sections/Testimonials';
import Newsletter from './sections/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] font-sans antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
        <Offerings />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
