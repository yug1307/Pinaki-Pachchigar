import React from 'react'
import Topbar from '../components/Topbar'
import FooterOne from '../components/FooterOne'
import { FaBalanceScale, FaCompass, FaDoorOpen, FaHeartBroken, FaHourglassHalf, FaInfinity, FaLock, FaMoon, FaPrayingHands, FaProjectDiagram, 
  FaRedo, FaStar } from 'react-icons/fa'
import KarmicPackages from './packages/KarmicPackages'

const knowItems = [
  { id: 1, title: "Past Life Patterns & Experiences",
    desc: "Insights into your previous incarnations, including emotional trauma, unfulfilled desires, or achievements carried forward" },
  { id: 2, title: "Karmic Debts & Blockages",
    desc: "Identify karmic burdens affecting relationships, career, health, or finances." },
  { id: 3, title: "Soul Purpose & Life Lessons",  
    desc: "Discover what your soul has come to learn and complete in this lifetime" },
  { id: 4, title: "Relationship Karma", 
    desc: "Understand karmic ties with parents, spouse, children, and close connections" },
  { id: 5, title: "Spiritual Strengths & Gifts", 
    desc: "Hidden talents, intuitive abilities, or healing powers earned through past lives" },
  { id: 6, title: "Repeating Life Themes", 
    desc: "Why the same problems or patterns occur again and again?" },
  { id: 7, title: "Liberation & Healing Path", 
    desc: "Practical guidance to dissolve karmic knots and accelerate spiritual growth" }
]

const factors = [
  { id: 1, icon: <FaInfinity className="text-purple-600"/>, factor: "Rahu–Ketu Axis" },
  { id: 2, icon: <FaMoon className="text-red-400"/>, factor: "Moon & Subconscious Mind" },
  { id: 3, icon: <FaDoorOpen className="text-emerald-500"/>, factor: "12th House & Moksha Indicators" },
  { id: 4, icon: <FaBalanceScale className="text-violet-500"/>, factor: "Saturn’s Karmic Lessons" },
  { id: 5, icon: <FaStar className="text-yellow-500"/>, factor: "Nakshatra Placements" },
  { id: 6, icon: <FaProjectDiagram className="text-orange-500"/>, factor: "Divisional Charts D9, D12, D60 (where applicable)" }
]

const consultations = [
  { id: 1, icon: <FaRedo size={28} className="text-green-500"/>, text: "Repeated failures or delays" },
  { id: 2, icon: <FaHourglassHalf size={28} className="text-orange-500"/>, text: "Unexplained fears or emotional pain" },
  { id: 3, icon: <FaHeartBroken size={28} className="text-red-500"/>, text: "Difficult relationships or separations" },
  { id: 4, icon: <FaPrayingHands size={28} className="text-indigo-500"/>, text: "Spiritual awakening or confusion" },
  { id: 5, icon: <FaLock size={28} className="text-amber-500"/>, text: "Feeling “stuck” despite efforts" },
  { id: 6, icon: <FaCompass size={28} className="text-sky-500"/>, text: "Desire to understand soul purpose" }
]
const KarmicPastLifePage = () => {
  return (
    <>
    <Topbar/>
      <header className="lg:h-[90vh] h-auto py-6 object-cover bg-cover bg-center bg-no-repeat space-y-4 flex flex-col justify-center" 
        style={{backgroundImage: `url('/images/karmic-01.png')`, fontFamily: `serif`}}>
    
        <section className="text-center space-y-2">
          <h1 className="text-4xl text-orange-500 font-bold">Karmic & Past Life Astrology</h1>

          <div className="text-xl text-sky-500">Understand Your Soul’s Journey Beyond This Lifetime</div>
        </section>

        {/* Intro */}
        <section className="mx-5 text-lg text-center text-green-400 space-y-6">
          <p>Your soul carries memories, lessons, and unfinished karma from previous 
            lives. <span className="font-semibold">Karmic & Past Life Astrology</span> helps you 
            uncover these hidden imprints and understand how they influence your 
            present life—your relationships, challenges, fears, talents, and destiny.</p>

          <p>Through detailed analysis of your <span className="font-semibold">birth chart, 
            Rahu–Ketu axis, Nakshatras, divisional charts, and planetary patterns</span>, this 
            consultation reveals why certain situations repeat in your life and how you can 
            consciously evolve beyond them.</p>
        </section>

        {/* CTA */}
        <div className="text-center flex flex-col items-center space-y-3 mx-8">
          <p className="text-lg italic text-sky-500">Understanding your karmic patterns and gain the power 
            to <span className="font-semibold">heal, transform, and evolve consciously</span></p>
          
          <a href="/contact"
            className="bg-green-700 text-white font-semibold p-3 rounded-full w-auto">
            📞 Begin Your Soul Healing Journey
          </a>
        </div>
      </header> 

      {/* What is Karmic & Past Life Astrology */}
      <section className="py-12 px-4" style={{ background: "linear-gradient(135deg,#1a0a2e,#16213e,#0f3460,#1a2a1a)", fontFamily: "serif" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:wght@300;400&display=swap');
          .ttl{background:linear-gradient(90deg,#F59E0B,#FCD34D,#F59E0B);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:sh 4s linear infinite}
          @keyframes sh{to{background-position:200% center}}.cd{transition:all .35s ease}.cd:hover{transform:translateY(-6px) scale(1.02)}`}
        </style>

        <div className="border border-white p-6 rounded-xl">
          <h2 className="ttl text-center font-bold text-3xl">What is Karmic & Past Life Astrology?</h2>

          <p className="text-lg text-white">Karmic astrology studies the <span className="font-semibold">soul’s unresolved 
            lessons and past-life imprints</span> reflected in your horoscope. 
            Planets like <span className="font-semibold">Rahu, Ketu, Saturn, Moon, and the 12th house</span> play 
            a vital role in decoding karmic baggage and spiritual growth.</p>

          <div className="space-y-2">
            <h3 className="text-xl text-center text-white">This helps you understand:</h3>

            <ul className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-4 text-gray-400 text-lg">
              <li>✔️ Why you face repeated obstacles?</li>
              <li>✔️ Why certain people feel “fated”?</li>
              <li>✔️ Why specific fears or talents exist naturally?</li>
              <li>✔️ How to release karmic debts and move forward?</li>
            </ul>
          </div>
        </div>

        {/* What you get to know */}
        <div className="space-y-4 my-10">
          <h2 className="ttl text-3xl font-bold text-center">What You Will Get To Know</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {knowItems.map((knit, index) => (

              <div 
                key={index} 
                className="flex flex-col items-center text-center bg-white/10 rounded-lg p-5 transition hover:scale-105 space-y-2">

                <h3 className="text-xl text-white font-semibold">🔹{knit.title}</h3>
                <p className="text-gray-400">{knit.desc}</p>
              </div> 
            ))}
          </div>
        </div>
        
        {/* Astrological Factors Considered */}
        <div className="max-w-4xl mx-auto rounded-xl bg-blue-200 py-12 px-4 space-y-6 transition hover:scale-105">
          <h2 className="text-3xl font-bold text-center">🕉️ Astrological Factors Considered</h2>

          <ul className="max-w-xl mx-auto">
            {factors.map((fact, index) => (
            
              <li key={index} className="flex items-center space-x-4 py-2">
                <span className="text-2xl">{fact.icon}</span>
                <span className="text-lg">{fact.factor}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Who Should Take this Consultation */}
        <div className="space-y-4 my-10">
          <h2 className="ttl text-3xl font-bold text-center">🔱 Who Should Take this Consultation?</h2>
 
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-4">
            {consultations.map((consts, index) => (

              <li key={index} 
                className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-gray-700">
                <span>{consts.icon}</span>
                <span className="text-center text-lg text-white">{consts.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <KarmicPackages/>
      </section>
    <FooterOne/> 
    </>
  )
}

export default KarmicPastLifePage