import React from 'react'
import Topbar from '../components/Topbar'
import FooterOne from '../components/FooterOne'
import { FaArrowDown, FaArrowUp, FaCoins, FaDotCircle, FaFire, FaHandshake, FaHandsHelping, FaHome,
  FaLeaf, FaPrayingHands, FaRegSun, FaSearch, FaShieldAlt, FaStar, FaTools, FaWind } from 'react-icons/fa'
import SpiritualPackages from './packages/SpiritualPackages'

const balancing = [
  { element: "Earth", description: "provides stability and grounding" },
  { element: "Water", description: "brings prosperity and emotional balance" },
  { element: "Fire", description: "fuels energy and transformation" },
  { element: "Air", description: "enables movement and communication" },
  { element: "Space", description: "offers expansion and connection" }
]

const directions = [
  { id: 1, icon: <FaRegSun className="text-orange-500"/>, direction: "East", significance: "Associated with Sun, Health & Growth" },
  { id: 2, icon: <FaCoins className="text-yellow-600"/>, direction: "West", significance: "Associated with Gains and Stability" },
  { id: 3, icon: <FaArrowUp className="text-blue-500"/>, direction: "North", significance: "Associated with Prosperity and Opportunities" },
  { id: 4, icon: <FaArrowDown className="text-orange-500"/>, direction: "South", significance: "Associated with Fame & Energy" },
  { id: 5, icon: <FaStar className="text-indigo-500"/>, direction: "North-East (Ishanya)", significance: "Associated with Spiritual Activities" },
  { id: 6, icon: <FaWind className="text-gray-500"/>, direction: "North-West (Vayavya)", significance: "Associated with Movement & Change" },
  { id: 7, icon: <FaFire className="text-orange-500"/>, direction: "South-East (Agneya)", significance: "Associated with Fire Element" },
  { id: 8, icon: <FaLeaf className="text-green-500"/>, direction: "South-West (Nairutya)", significance: "Associated with Earth Element" }
]
 
const knowSection = [
  { id: 1, icon: <FaSearch/>, title: "Root Causes of Your Problems",
    desc: "Identify the Planetary Doshas, Karmic Patterns, or Environmental Imbalances causing financial stress, health issues, relationship challenges, delays, or negativity" },
  { id: 2, icon: <FaPrayingHands className="text-purple-600"/>, title: "Planetary Remedies for Mind, Body & Soul", 
    desc: "Personalized solutions including mantras, gemstones, donations, fasting, yantras, and rituals based on your Dasha, transits, and horoscope" },
  { id: 3, icon: <FaHome className="text-indigo-600"/>, title: "Vastu Energy Flow Analysis", 
    desc: "Learn how the energy in your home/office affects your success, peace, productivity, and overall well-being" },
  { id: 4, icon: <FaDotCircle className="text-amber-500"/>, title: "Directions, Elements & Chakras", 
    desc: "Understand how Fire, Water, Earth, Air, and Space elements influence specific areas of life" },
  { id: 5, icon: <FaHandsHelping className="text-teal-600"/>, title: "Powerful Spiritual Techniques", 
    desc: "From mantra chanting to salt cleansing, lamp remedies, incense healing, mirror placements, color therapy, and sound vibrations" },
  { id: 6, icon: <FaTools className="text-green-600"/>, title: "Simple Home-Based Corrections", 
    desc: "Easy adjustments in placement, décor, colors, symbols, and flow to attract prosperity without structural changes" },
  { id: 7, icon: <FaShieldAlt className="text-blue-600"/>, title: "Protection from Negative Energies", 
    desc: "Aura cleansing, remedies against evil eye (Nazar), and methods to block negative vibrations" },
  { id: 8, icon: <FaHandshake className="text-pink-600"/>, title: "Boost for Finances, Career & Relationships", 
    desc: "Targeted Vastu and spiritual solutions to strengthen opportunities and reduce obstacles" },
]

const whoShould = [
  { text: "Financial blockages" },
  { text: "Health issues without medical cause" },
  { text: "Stress, anxiety, or lack of mental clarity" },
  { text: "Relationship conflicts" },
  { text: "Delay in marriage or career growth" },
  { text: "Recurring negativity or bad luck" },
  { text: "Disturbed sleep or restlessness at home" }
]

const SpiritualRemediesPage = () => {
  return (
    <>
    <Topbar/> 
      <header className="py-12 px-4 text-white" style={{ background: "linear-gradient(135deg,#1a0a2e,#16213e,#0f3460,#1a2a1a)", fontFamily: "serif" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:wght@300;400&display=swap')`}</style>

        <section className="text-center space-y-2"> 
          <h1 className="text-4xl font-bold text-blue-600">Spiritual Remedies & Vastu</h1>

          <div className="text-lg">Harmonize Your Space, Balance Your Energy</div>
        </section>

        {/* Intro */}
        <section className="text-lg text-center space-y-8">
          <p>Vastu Shastra is an ancient Indian science of architecture and design that dates back 
            thousands of years. Rooted in sacred texts and Vedic knowledge, it provides guidelines 
            for creating harmonious living spaces that align with natural energies. 
            The word "Vastu" means dwelling, and "Shastra" means science or knowledge, together 
            forming the science of creating dwellings that promote well-being</p>

          <p>With more than <span className="font-semibold">35 years of experience in Vastu Shastra 
            and 2.5 lakh+ consultations</span>, I’ve guided countless individuals to lead a life full 
            of happiness. My approach 
            blends authentic <span className="italic">Vastu Shastra</span> and spiritual intuition to 
            ensure you live a peaceful life, and each source of energy is specifically designed for you.</p>
        </section>
      </header>

      {/* Balancing the 5 Elements */}
      <section className="py-12 px-4" style={{ background: "linear-gradient(135deg,#1a0a2e,#16213e,#0f3460,#1a2a1a)", fontFamily: "serif" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:wght@300;400&display=swap');
          .ttl{background:linear-gradient(90deg,#F59E0B,#FCD34D,#F59E0B);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:sh 4s linear infinite}
          @keyframes sh{to{background-position:200% center}}.cd{transition:all .35s ease}.cd:hover{transform:translateY(-6px) scale(1.02)}`}
        </style>

        <div className="space-y-4">
          <h2 className="ttl text-3xl font-bold text-center">Balancing the Five Elements</h2>
        
          <p className="text-gray-400 text-lg">
            At the core of <span className="font-semibold">Vastu Shastra</span> lies the balance of five 
            fundamental elements - <span className="font-semibold">Earth (Prithvi), Water (Jal), Fire (Agni), 
            Air (Vayu), and Space (Akash).</span> These elements form the foundation of our
            existence and must be harmoniously balanced within our living spaces. 
            When properly aligned, they create a flow of positive energy that enhances 
            our physical, mental, and spiritual wellbeing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {balancing.map((five, index) => (
            
              <div key={index} className="bg-blue-300 p-4 rounded-md">
                <b>{five.element}</b> {five.description}
              </div>
            ))}
          </div>
        </div>

        {/* Directions in Vastu */}
        <div className="space-y-4 my-10">
          <h2 className="ttl text-3xl font-bold text-center">Directions in Vastu</h2>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {directions.map((dir, index) => (

              <div 
                key={index} 
                className="bg-white/10 p-4 border-2 border-sky-500 rounded-md transition hover:-translate-y-3">
                <div className="text-3xl flex flex-col items-center">{dir.icon}</div>
                <b className="text-white">{dir.direction} -</b> <span className="text-gray-400">{dir.significance}</span>
              </div>
            ))} 
          </div> 
        </div>
        
        {/* What You'll Get To Know */}
        <div className="space-y-4">
          <h2 className="ttl text-3xl font-bold text-center">What You'll Get To Know</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {knowSection.map((know, index) => (

              <div key={index} className="bg-white/10 p-6 text-center rounded-lg">
                <div className="text-3xl animate-pulse flex flex-col items-center">{know.icon}</div>
                <h3 className="text-xl font-semibold text-white my-2">{know.title}</h3>
                <p className="text-gray-400">{know.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Who Should Take This Consultation */}
        <div className="max-w-7xl mx-auto rounded-lg bg-blue-100 py-12 px-6 my-10 space-y-6">
          <h2 className="text-3xl font-bold text-center text-green-700">Who Should Take This Consultation</h2>
          
          <div className="space-y-4">
            <p className="text-xl">This service is ideal if you’re experiencing:</p>
            
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 text-gray-700">
              {whoShould.map((feat, index) => (
              
                <li key={index} className="">
                  <span>💠{feat.text}</span>
                </li> 
              ))}
            </ul>
          </div>
        </div>

        <SpiritualPackages/> 
      </section>
    <FooterOne/>
    </>
  )
} 

export default SpiritualRemediesPage