import React from 'react'
import Topbar from "../components/Topbar";
import FooterOne from "../components/FooterOne";
import { FaBookOpen, FaCalendarAlt, FaChartPie, FaHeartbeat, 
  FaPrayingHands, FaRoad, FaShieldAlt, FaSignature} from 'react-icons/fa';
import ChildBirthPackages from './packages/ChildBirthPackages';

const whatsIncluded = [
  { id: 1, icon: <FaChartPie className="text-red-600"/>, text: "Birth Chart Reading for the Child" },
  { id: 2, icon: <FaHeartbeat className="text-pink-500"/>, text: "Health, behavior & personality profiling" },
  { id: 3, icon: <FaRoad className="text-yellow-500"/>, text: "Life path & future prediction (basic to detailed)" },
  { id: 4, icon: <FaBookOpen className="text-indigo-500"/>, text: "Education & talent analysis" },
  { id: 5, icon: <FaCalendarAlt className="text-green-500"/>, text: "Shubh Muhurat for childbirth (if required)" },
  { id: 6, icon: <FaShieldAlt className="text-blue-500"/>, text: "Dosha identification & protective remedies" },
  { id: 7, icon: <FaSignature className="text-purple-500"/>, text: "Name suggestion based on Numerology + Nakshatra" },
  { id: 8, icon: <FaPrayingHands className="text-teal-500"/>, text: "Spiritual guidelines for early upbringing" }
]

const knowItems = [
  "Child’s personality, emotional nature & future potential",
  "Strengths, talents, and learning abilities",
  "Health & immunity tendencies",
  "Planetary influences on education & career",
  "Favorable time periods for growth & development",
  "Child’s dominant planet, Nakshatra, and life path",
  "Possible challenges & their remedies",
  "Best gemstones or protective elements (if needed)",
  "Naming suggestions based on Nakshatra & Rashi",
  "Numerology compatibility of the chosen name"
]

const astroNamingItems = [
  "Nakshatra & Pada",
  "Rashi (Moon Sign)",
  "Dasha influence during early childhood",
  "Numerology (Destiny, Personality & Soul Number)",
  "Planetary lordship of letters",
  "Sound vibrations (Beej Akshar)"
]

const suitableFor = [
  "New Parents",
  "Expecting Parents",
  "Parents planning a C-section or selecting a Muhurat",
  "Families facing child-related challenges",
  "Anyone seeking meaningful, destiny-aligned baby names"
]

const ChildBirthNamingPage = () => {
  return (
    <> 
    <Topbar/>
    <header className="lg:h-[130vh] h-auto py-6 object-cover bg-cover bg-center bg-no-repeat 
      space-y-6 flex flex-col justify-center" 
      style={{backgroundImage: `url('/images/baby-01.png')`, fontFamily: `serif`}}>
    
      <section className="text-center space-y-2 px-4">
        <h1 className="text-4xl text-cyan-500 font-bold">👶 Child Birth & Naming Astrology</h1>

        <div className="text-xl text-yellow-400">Bless your child’s life with the power of stars, destiny, and divine guidance</div>
      </section>

      {/* Intro */}
      <section className="text-lg text-center text-rose-300 px-4 space-y-8">
        <p>A child’s birth is one of the most sacred and celebrated moments in a family’s life. 
          According to Vedic Astrology, the time, date, and planetary alignment at birth create a unique 
          cosmic blueprint that influences the child’s health, intelligence, personality, emotions, 
          talents, and future potential. Understanding this early allows parents to nurture their 
          child’s strengths while ensuring protection from possible challenges.</p>

        <p>I provide a <span className="font-semibold">deep and compassionate analysis</span> of the 
        child’s birth chart, examining planetary influences that shape early development, education,
        health, behavior, and spiritual energy. For expecting parents, I also offer guidance
        on <span className="font-semibold">favorable childbirth periods (Shubh Muhurat)</span> based 
        on astrological timing for a safe and harmonious beginning.</p>

        <p>A spiritually meaningful name can shape destiny. 
        Through <span className="font-semibold">Vedic Naming Astrology</span>, I help parents choose a
        name that aligns with the child’s Nakshatra, ruling planet, numerology, and life path — ensuring 
        positivity, confidence, and success throughout their life. This service brings clarity, 
        blessings, and divine alignment to your family’s most precious beginning.</p> 
      </section>

      {/* CTA */}
      <div className="text-center flex flex-col items-center space-y-3 mx-8">
        <p className="text-lg italic text-rose-500">Your baby’s destiny is already written — let’s decode it 
          and choose a name that brings lifelong harmony</p>
          
        <a href="/contact"
          className="bg-green-700 text-white font-semibold p-3 rounded-full w-auto">
          📞 Choose a blessed name and shape your child's destiny
        </a>
      </div>
    </header>

    {/* What You'll Know */}
    <section className="py-12 px-4" style={{ background: "linear-gradient(135deg,#1a0a2e,#16213e,#0f3460,#1a2a1a)", fontFamily: "serif" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:wght@300;400&display=swap');
          .ttl{background:linear-gradient(90deg,#F59E0B,#FCD34D,#F59E0B);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:sh 4s linear infinite}
          @keyframes sh{to{background-position:200% center}}.cd{transition:all .35s ease}.cd:hover{transform:translateY(-6px) scale(1.02)}`}
        </style>

      <div className="space-y-4">
        <h2 className="ttl text-3xl font-bold text-center">What You'll Know?</h2>

        <ul className="grid grid-cols-1 md:grid-cols-5 max-w-6xl mx-auto gap-5">
          {knowItems.map((child, index) => (

            <li key={index} className="text-gray-400 text-lg">✅ {child}</li>
          ))}
        </ul>
      </div>

      {/* What's Included */}
      <div className="space-y-4 my-10">
        <h2 className="ttl text-3xl font-bold text-center">What’s Included in Child Birth & Naming Consultation</h2>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {whatsIncluded.map((incl, index) => (

            <div 
              key={index}  
              className="bg-white/10 py-5 px-2 transition hover:scale-105 rounded-lg space-y-2">

              <div className="text-3xl flex flex-col items-center">{incl.icon}</div> 
              <p className="font-semibold text-lg text-gray-400 text-center">{incl.text}</p>
            </div>
          ))}
        </div>
      </div>
    
      {/* Name Suggestion Process */}
      <div className="space-y-4">
        <h2 className="ttl font-bold text-3xl text-center">Name Suggestion Process</h2>

        <ul className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-5">
          {astroNamingItems.map((name, index) => (

            <li key={index} className="text-gray-400 text-lg">🌠 {name}</li>
          ))}
        </ul>

        <p className="text-center text-cyan-400">You receive 3–5 powerful and auspicious name options along with their meanings</p>
      </div>

      {/* Who Should've this Consultation */}
      <div className="space-y-4 my-10">
        <h2 className="ttl font-bold text-3xl text-center">☎ Who Should Take This Consultation?</h2>
      
        <ul className="grid grid-cols-1 md:grid-cols-5 max-w-7xl mx-auto gap-5">
          {suitableFor.map((cust, index) => (

            <li key={index} className="text-gray-400 text-lg">🔹 {cust}</li>
          ))}
        </ul>
      </div>

      <ChildBirthPackages/>
    </section> 
    <FooterOne/>
    </>
  )
}

export default ChildBirthNamingPage