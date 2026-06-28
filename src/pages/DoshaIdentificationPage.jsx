import React from 'react'
import Topbar from "../components/Topbar";
import FooterOne from "../components/FooterOne";
import { FaOm, FaFire, FaGem, FaSun, FaHandHoldingHeart,
  FaPrayingHands, FaLeaf, FaListUl, FaBalanceScale, FaSpa,
  FaClock, FaMapSigns, FaLightbulb, FaBook, FaStar, FaPeace } from 'react-icons/fa';
import DoshPackages from './packages/DoshPackages';

const Remedies = [
  { id: 1, icon: <FaOm className="text-red-600"/>, title: "Powerful Mantras & Chants" },
  { id: 2, icon: <FaFire className="text-orange-600"/>, title: "Puja & Homam Recommendations" },
  { id: 3, icon: <FaGem className="text-blue-600"/>, title: "Gemstone Selection & Energizing Rituals" },
  { id: 4, icon: <FaSun className="text-yellow-500"/>, title: "Yantras For Planetary Activation" },
  { id: 5, icon: <FaHandHoldingHeart className="text-pink-600"/>, title: "Donation (Daan) Rituals" },
  { id: 6, icon: <FaPrayingHands className="text-purple-600"/>, title: "Fasting Instructions for Planetary Alignment" },
  { id: 7, icon: <FaLeaf className="text-green-600"/>, title: "Rudraksha Suggestions" },
  { id: 8, icon: <FaSpa className="text-indigo-600"/>, title: "Meditation & Healing Techniques" },
  { id: 9, icon: <FaListUl className="text-gray-600"/>, title: "Do's & Don'ts for Stability" },
  { id:10, icon: <FaBalanceScale className="text-teal-600"/>, title: "Lifestyle & Spiritual Balancing Guidance" }
]

const reasons = [
  { id: 1, icon: <FaClock className="text-red-600"/>, text: "Facing repeated failures or delays" },  
  { id: 2, icon: <FaMapSigns className="text-orange-600"/>, text: "Feeling stuck despite efforts" },  
  { id: 3, icon: <FaLightbulb className="text-yellow-500"/>, text: "Want clarity and fast relief" },  
  { id: 4, icon: <FaBook className="text-indigo-600"/>, text: "Desire scientific, Vedic-backed solutions" },  
  { id: 5, icon: <FaStar className="text-blue-500"/>, text: "Want to strengthen planets for long-term growth" },  
  { id: 6, icon: <FaPeace className="text-green-600"/>, text: "Want a peaceful life with fewer obstacles" }  
]

const doshas = [
  { title: "Mangal Dosha (Manglik)", desc: "affects relationships and marriage stability" },
  { title: "Kaal Sarp Dosha", desc: "brings delays, struggles, and emotional pressure" },
  { title: "Pitra Dosha", desc: "causes ancestral karma-related obstacles" },
  { title: "Nadi Dosha", desc: "affects marital compatibility" },
  { title: "Grahan Dosha", desc: "from eclipse-related planetary positions" },
  { title: "Shani Dosha", desc: "delays, hardships, career/work struggles" },
  { title: "Chandra Dosha", desc: "emotional imbalance, anxiety, mood issues" },
  { title: "Guru & Rahu Doshas", desc: "issues with finance, luck, education, or stability" }
]

const getItems = [
  "Which doshas exist in your Kundli — with intensity & causes?",
  "How they impact your life, relationships, career, health & finances?", 
  "Your exact planetary weaknesses and karmic signatures",
  "Favorable and unfavorable time periods",
  "Which planets require healing, balancing, or strengthening",
  "Personalized Vedic remedies to neutralize doshas",
  "Gemstone suitability & planetary strengthening methods",
  "Pooja, mantra, and ritual recommendations (if needed)",
  "Lifestyle, spiritual, and behavioral adjustments for balance",
  "Predictions of relief after remedies"
]

const DoshaIdentificationPage = () => {
  return (
    <>
    <Topbar/>
    <header className="lg:h-[110vh] h-auto py-6 object-cover bg-cover bg-center bg-no-repeat 
      space-y-6 flex flex-col justify-center" 
      style={{backgroundImage: `url('/images/dosh-bg-01.png')`, fontFamily: `serif`}}>
    
      <section className="text-white text-center space-y-2 px-4">
        <h1 className="text-4xl text-orange-500 font-bold">🔱 Dosha Identification & Remedies</h1>

        <div className="text-xl">Heal the root cause, restore balance, and reclaim harmony through Vedic Astrology</div>
      </section>

      {/* Intro */}
      <section className="mx-5 text-lg text-center text-white space-y-8">
        <p>Every individual’s birth chart carries unique planetary signatures that shape life 
          experiences—both positive and challenging. When certain planets are misaligned or 
          placed unfavorably, they create <span className="font-semibold">Doshas</span>, or 
          energetic imbalances. These doshas can influence various areas of life such as health, 
          relationships, career growth, finances, mental peace, marriage, and longevity. 
          Understanding them through a detailed astrological analysis is the first step to restoring 
          harmony.</p>

        <p>With more than <span className="font-semibold">35 years of astrological experience</span> and 
          <span className="font-semibold"> 2.5 lakh+ consultations</span>, I provide accurate Identification
          of Doshas and their intensity & impact on your life. More importantly, 
          I offer <span className="font-semibold">practical, effective, and personalized Vedic remedies</span>,
          I help you realign your that help neutralize planetary challenges and activate positive energies</p>

        <p>This session empowers you with clarity, healing, and spiritual alignment so you can move 
          forward with confidence. Whether you are stuck, stressed, or facing repeated obstacles, 
          dosha analysis can reveal why it’s happening — and how to fix it permanently</p> 
      </section>

      {/* CTA */}
      <div className="text-center flex flex-col items-center space-y-3 mx-8">
        <p className="text-lg italic text-white">Your birth chart holds the answers to every struggle. 
        Let’s uncover the doshas blocking your path and apply remedies that bring peace, progress, and success.</p>
          
        <a href="https://forms.gle/vtjfTtHBymYojt1N8"
          className="bg-green-700 text-white font-semibold py-3 rounded-full w-96">
          📞 Order Your Dosha Identification Report Now
        </a>
      </div>
    </header> 

    {/* What Are Doshas */}
    <section className="py-12 px-4" style={{ background: "linear-gradient(135deg,#1a0a2e,#16213e,#0f3460,#1a2a1a)", fontFamily: "serif" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:wght@300;400&display=swap');
          .ttl{background:linear-gradient(90deg,#F59E0B,#FCD34D,#F59E0B);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:sh 4s linear infinite}
          @keyframes sh{to{background-position:200% center}}.cd{transition:all .35s ease}.cd:hover{transform:translateY(-6px) scale(1.02)}`}
        </style>

      <div className="space-y-4">
        <h2 className="ttl text-3xl font-bold text-center">What Are Doshas?</h2>

        <p className="text-xl text-white/60 text-center my-2">Doshas are astrological imbalances caused by unfavorable 
          planetary combinations, placements, or aspects</p>

        <ul className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-5">
          {doshas.map((dosh, index) => (

            <div 
              key={index} 
              className="border-2 border-orange-500 bg-white/10 p-5 rounded-lg transition transform hover:-translate-y-4">
              
              <span className="font-semibold text-lg text-white">{dosh.title} - </span>
              <span className="text-gray-400">{dosh.desc}</span> 
            </div>
          ))}
        </ul>
      </div>
      
      {/* What You Get */}
      <div className="space-y-4 my-10">
        <h2 className="ttl text-3xl font-bold text-center">What You Get from This Report</h2>

        <ul className="grid grid-cols-1 md:grid-cols-5 max-w-6xl mx-auto gap-5">
          {getItems.map((dosh, index) => (

            <li key={index} className="text-gray-400 text-lg">✅ {dosh}</li>
          ))}
        </ul>
      </div>

      {/* Remedies Offered */}
      <div className="space-y-4">
        <h2 className="ttl text-3xl font-bold text-center">Remedies Offered</h2>
      
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {Remedies.map((rem, index) => (

            <div key={index} className="flex flex-col items-center bg-white/10 p-4 transition hover:scale-105 rounded-lg space-y-2">
              <div className="text-3xl">{rem.icon}</div> 
              <p className="font-semibold text-lg text-gray-400 text-center">{rem.title}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-cyan-400">Every remedy provided is practical, safe, and based on your exact chart—not generic solutions</p>
      </div>

      {/* Why You Need This Consultation */}
      <div className="space-y-4 my-10">
        <h2 className="ttl text-3xl font-bold text-center">🌟 Why You Need This Consultation</h2>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((why, index) => (

            <div key={index} className="flex flex-col items-center bg-white/10 p-4 transition hover:scale-105 rounded-lg space-y-2">
              <div className="text-3xl">{why.icon}</div>
              <p className="font-semibold text-lg text-gray-400 text-center">{why.text}</p>
            </div>
          ))} 
        </div>
      </div>  
    
      {/* CTA */}
      <div className="border border-white p-6 rounded-xl flex flex-col items-center space-y-4">
        <p className="text-lg text-white text-center italic">"The universe wants you to rise. Let’s eliminate the doshas that 
          are holding you back — with powerful, time-tested Vedic remedies"</p>
          
        <a href="https://forms.gle/vtjfTtHBymYojt1N8"
          className="bg-green-700 text-white font-semibold p-3 rounded-full w-1/8">
          📞 Don’t let unseen doshas control your life. Discover the truth and fix it now.
        </a>
      </div>
          <div className="py-6"></div>
      <DoshPackages/>
    </section>
    <FooterOne/>
    </> 
  )
}

export default DoshaIdentificationPage