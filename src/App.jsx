import React, { Suspense } from 'react';
import './App.css'
import Topbar from './components/Topbar'
import Carousel from './components/Carousel';
import FooterOne from './components/FooterOne'
import ServicesSection from './components/ServicesSection';
import Figures from './pages/Figures';
import AstrologerFAQ from './components/AstrologerFAQ';

<Suspense fallback={<div>Loading...</div>}>
  <ServicesSection />
</Suspense>

function App() {
  return (
    <>
      <Topbar />
      <Carousel />
      <ServicesSection/>
      <Figures/> 
      <AstrologerFAQ/>
      <FooterOne/>
    </>
  )
}

export default App
