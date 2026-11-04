import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { Products } from './components/Products';
import { Difference } from './components/Difference';
import { Heritage } from './components/Heritage';
import { Craft } from './components/Craft';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export function App() {
  const [selectedProductForEnquiry, setSelectedProductForEnquiry] = useState<string | undefined>(
    undefined
  );

  const handleSelectProduct = (productName: string) => {
    setSelectedProductForEnquiry(productName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenGeneralEnquiry = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mr-foods-app">
      {/* Sticky Top Navigation */}
      <Navbar onOpenEnquiry={handleOpenGeneralEnquiry} />

      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Brand Introduction ("Our Story") */}
        <BrandIntro />

        {/* 3. Our Signature Products */}
        <Products onSelectForEnquiry={handleSelectProduct} />

        {/* 4. The MR Foods Difference */}
        <Difference />

        {/* 5. Our Heritage Section */}
        <Heritage />

        {/* 6. Our Craft / Preparation */}
        <Craft />

        {/* 7. Visual Gallery */}
        <Gallery />

        {/* 8. Contact & Enquiry Section */}
        <Contact
          key={selectedProductForEnquiry || 'default'}
          initialProduct={selectedProductForEnquiry}
        />
      </main>

      {/* 9. Sophisticated Burgundy Footer */}
      <Footer onSelectProduct={handleSelectProduct} />

      {/* Floating Instant WhatsApp Action */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
