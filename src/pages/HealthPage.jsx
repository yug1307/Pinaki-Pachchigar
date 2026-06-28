import React from 'react'
import Topbar from '../components/Topbar'
import FooterOne from '../components/FooterOne'
import HealthPackages from './packages/HealthPackages'
import { useState } from 'react'
import { FaBrain, FaCircleNotch, FaClock, FaGem, FaHeart, FaInfinity, FaLeaf, FaSun } from 'react-icons/fa'

const knowItems = [ 
  { 
    icon: <FaSun/>, title: "Planetary influences on your health and vitality", 
    text: "Discover which planets affect your energy, stamina, and overall well-being." 
  },
  { 
    icon: <FaBrain/>, title: "Mind-Body connection and stress indicators",
    text:"Learn how emotional patterns influence physical symptoms" 
  },
  { 
    icon: <FaClock/>, title: "Periods of vulnerability and healing",
    text:"Identify planetary periods when extra care or rest is needed" 
  },
  { 
    icon: <FaCircleNotch/>, title: "Chakra and energy balance analysis",
    text:"Understand your spiritual energy flow snd how to realign it" 
  },
  { 
    icon: <FaGem/>, title: "Remedies and preventive guidance", 
    text: "Get gemstone, mantra, and lifestyle remedies for lasting balance" 
  },
  { 
    icon: <FaLeaf/>, title: "Dietary & yoga recommendations based on planetary balance", 
    text: "Receive personalized suggestions for food, yoga, and breathing" 
  },
  { 
    icon: <FaHeart/>, title: "Psychological and emotional healing paths", 
    text: "Explore astrological ways to overcome stress and anxiety" 
  },
  { 
    icon: <FaInfinity/>, title: "Karmic causes of recurring health issues", 
    text: "Decode past-life influences and spiritual lessons" 
  },
]

const includes = [
  { text: "Analysis of health-related houses (1st, 6th, 8th, 12th)" },
  { text: "Study of planetary strengths (Sun, Moon, Mars, Saturn)" },
  { text: "Dosha balance report — physical, emotional & spiritual" },
  { text: "Remedies (gemstones, mantras, healing rituals)" },
  { text: "Personalized lifestyle & meditation plan" },
  { text: "Optional one-on-one video consultation" }
]

const HealthPage = () => {
  return (
    <>
    <Topbar/>
      <header className="lg:h-[100vh] h-auto py-6 object-cover bg-cover bg-center bg-no-repeat space-y-6 flex flex-col justify-center"
        style={{backgroundImage: `url('/images/health-bg.png')`, fontFamily: `serif`}}>
     
        <section className="text-center space-y-2 px-4"> 
          <h1 className="text-4xl font-bold text-fuchsia-500">Health & Wellness Report</h1>

          <div className="text-lg text-yellow-500">Discover how the planets influence your physical, emotional, and spiritual well-being</div>
        </section>

        {/* Intro */}
        <section className="mx-5 text-lg text-center text-gray-50 space-y-8">
          <p>Health is not merely the absence of illness — it is a sacred harmony between body, mind, and spirit. 
            In Vedic astrology, your 6th, 8th, and 12th houses reveal deep insights into health tendencies, 
            recovery patterns, and karmic lessons connected to wellness. Your Health & Wellness Report decodes 
            these cosmic influences to help you lead a more balanced and fulfilling life.</p>
 
          <p>Through a careful study of your <span className="font-semibold">birth chart (Janma Kundli)</span>, 
            I identify planetary combinations that indicate physical vitality, emotional sensitivity, and spiritual
            alignment. You’ll gain clarity about potential imbalances, stress factors, and healing cycles that impact 
            your day-to-day well-being. This report also explores the effects of 
            ongoing <span className="font-semibold">planetary transits (Gochar)</span> that may 
            influence your energy, immunity, and resilience.</p> 

          <p>With more than <span className="font-semibold">35 years of astrological experience</span> and 
            <span class="font-semibold"> 2.5 lakh+ consultations</span>, my approach 
            blends <span className="font-semibold">traditional Vedic insights</span> with <span className="font-semibold">modern lifestyle awareness</span>.
            I offer practical solutions — from suitable gemstones and mantras to yoga postures, 
            dietary alignments, and meditation practices — empowering you to restore your natural state of health and inner peace.</p>
        </section>
 
        {/* CTA */} 
        <div className="flex flex-col items-center text-center space-y-3">
          <p className="text-lg italic text-white px-auto">"True healing starts when your soul aligns with the universe’s rhythm"</p>
          
          <a href="https://forms.gle/AXDAg8QtLKtqYL5R8"
            className="bg-green-700 text-white font-semibold py-3 px-8 rounded-full w-1/8">
            Book Your Health & Wellness Package Today!
          </a>
        </div>
      </header> 

      {/* What you'll get to know */}
      <section className="py-12 px-4" style={{ background: "linear-gradient(135deg,#1a0a2e,#16213e,#0f3460,#1a2a1a)", fontFamily: "serif" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:wght@300;400&display=swap');
          .ttl{background:linear-gradient(90deg,#F59E0B,#FCD34D,#F59E0B);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:sh 4s linear infinite}
          @keyframes sh{to{background-position:200% center}}.cd{transition:all .35s ease}.cd:hover{transform:translateY(-6px) scale(1.02)}`}
        </style>
        
        <div className="space-y-6">
          <h2 className="ttl text-3xl font-bold text-center">What you'll get to know</h2>
        
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {knowItems.map((know, index) => (
          
              <div 
                key={index} 
                className="bg-white/10 p-6 rounded-lg shadow-lg hover:shadow-xl space-y-2">
            
                <div className="hover:animate-pulse text-4xl text-yellow-500">{know.icon}</div>
                <h3 className="text-xl font-semibold text-white">{know.title}</h3>
                <p className="text-gray-400">{know.text}</p>
              </div>
            ))}
          </div>
        </div>
          
          <div className="py-10"></div>
        
        {/* What's included in the report */}
        <div className="space-y-6">
          <h2 className="ttl text-2xl font-semibold text-center">What's included in the Health & Wellness report</h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-5">
            {includes.map((incl, index) => (
            
              <li key={index} className="flex items-center text-gray-400">              
                <span className="text-lg">✅ {incl.text}</span>
              </li> 
            ))}
          </ul>
        </div>
            
          <div className="py-10"></div>

        {/* CTA */}
        <div className="border border-white rounded-xl p-6 flex flex-col items-center space-y-4">
          <p className="text-xl text-white italic text-center">"True healing starts when your soul aligns with the universe’s rhythm"</p>
          
          <a href="https://forms.gle/AXDAg8QtLKtqYL5R8"
            className="bg-green-700 text-white text-center font-semibold py-3 px-8 rounded-full w-1/8">
            📞 Book Your Health & Wellness Package Today!
          </a>
        </div>

          <div className="py-10"></div>
        <HealthPackages/>
      </section>
    <FooterOne/>
    </>
  )
}

export default HealthPage