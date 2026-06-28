import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App.jsx';
import About from './components/About.jsx';
import Gemstone from './components/Gemstone.jsx';
import ContactPage from './components/ContactPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import KundliPage from './pages/KundliPage.jsx';
import CareerPage from './pages/CareerPage.jsx';
import MatchingPage from './pages/MatchingPage.jsx';
import FortunePage from './pages/FortunePage.jsx';
import HealthPage from './pages/HealthPage.jsx';
import GemstonePage from './pages/GemstonePage.jsx';
import NumerologyNameCorrectionPage from './pages/NumerologyNameCorrectionPage.jsx';
import TransitPage from './pages/TransitPage.jsx';
import SpiritualRemediesPage from './pages/SpiritualRemediesPage.jsx';
import PalmistryPage from './pages/PalmistryPage.jsx';
import DoshaIdentificationPage from './pages/DoshaIdentificationPage.jsx';
import ChildBirthNamingPage from './pages/ChildBirthNamingPage.jsx';
import MuhurtaPage from './pages/MuhurtaPage.jsx';
import KarmicPastLifePage from './pages/KarmicPastLifePage.jsx';
import BusinessStartupPage from './pages/BusinessStartupPage.jsx';
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>   
      <Route path="/" element={<App />} /> 
      <Route path="/about" element={<About />} />
      <Route path="/gems" element={<Gemstone/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/kundli" element={<KundliPage/>} /> 
      <Route path="/career" element={<CareerPage/>} />
      <Route path="/matching" element={<MatchingPage/>} />
      <Route path="/fortune" element={<FortunePage/>} />
      <Route path="/health" element={<HealthPage/>} />
      <Route path="/gemstone" element={<GemstonePage/>} />
      <Route path="/numerology-name-correction" element={<NumerologyNameCorrectionPage/>} />
      <Route path="/transit-annual" element={<TransitPage/>} />
      <Route path="/spiritual-remedies" element={<SpiritualRemediesPage/>} />
      <Route path="/palmistry" element={<PalmistryPage/>} />
      <Route path="/dosha-identification" element={<DoshaIdentificationPage/>} />
      <Route path="/child-birth-naming" element={<ChildBirthNamingPage/>} />
      <Route path="/muhurta" element={<MuhurtaPage/>} />
      <Route path="/karmic-past-life" element={<KarmicPastLifePage/>} />
      <Route path="/business-startup" element={<BusinessStartupPage/>} />
    </Routes>
  </BrowserRouter>
)

