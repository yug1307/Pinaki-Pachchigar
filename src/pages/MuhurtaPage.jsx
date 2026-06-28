import React from 'react'
import Topbar from '../components/Topbar'
import FooterOne from '../components/FooterOne'
import { FaBusinessTime, FaCalendarCheck, FaExclamationTriangle, FaHandsHelping, FaMoon, FaRegClock, 
  FaRegListAlt, FaShieldAlt, FaSun, FaUserAstronaut } from 'react-icons/fa'
import { MdOutlineTempleHindu } from "react-icons/md";
import { IoCalendarNumberSharp } from "react-icons/io5";
import MuhurtaPackages from './packages/MuhurtaPackages'

const getItems = [
  { 
    id: 1, icon: <FaRegClock className="text-yellow-500"/>, 
    title: "Ideal dates & times for your specific event", 
    desc: "Get the most favorable Muhurta based on Planetary Alignments, Tithi, Nakshatra, Yoga, and your Birth Chart" 
  },
  { 
    id: 2, icon: <FaSun className="text-orange-500"/>, 
    title: "Planetary influences on your chosen activity", 
    desc: "Understand how the positions of Moon, Sun and major planets impact the outcome of your event" 
  },
  { 
    id: 3, icon: <FaShieldAlt className="text-blue-500"/>, 
    title: "Dosha-free Timings", 
    desc: "We ensure the selected timings are free from Rahu Kalam, Yamaganda, Gulika Kaal, and other inauspicious periods" 
  },
  { 
    id: 4, icon: <FaUserAstronaut className="text-purple-500"/>, 
    title: "Personalized alignment with your horoscope", 
    desc: "Your Lagna, Moon sign, and Dasha periods are considered to provide a fully customized Muhurta"
  },
  { 
    id: 5, icon: <FaHandsHelping className="text-red-500"/>, 
    title: "Remedies to strengthen results", 
    desc: "Simple rituals, mantras, or actions to enhance positivity and remove obstacles" 
  },
  { 
    id: 6, icon: <FaCalendarCheck className="text-green-500"/>, 
    title: "Good alternative dates (if needed)", 
    desc: "Backup recommendations when ideal timings are limited or unavailable" 
  }
]

const auspicious = [
  { 
    id: 1, icon: <IoCalendarNumberSharp className="text-purple-600"/>, title: "Personal Life Events",
    events: [
      "Marriage / Engagement",
      "Childbirth / C-Section / Baby Naming",
      "Griha Pravesh (Housewarming)",
      "Buying Vehicle or Property",
      "Starting Medical Treatments",
      "First Job or Joining Day"
    ] 
  },
  { 
    id: 2, icon: <FaBusinessTime className="text-lime-500"/>, title: "Business & Professional Events", 
    events: [
      "Business Launch or Expansion",
      "Signing Contracts or Legal Documents",
      "Opening a Shop/Office",
      "Investment & Financial Transactions",
      "Starting New Projects",
      "Product Launches"
    ] 
  },
  { 
    id: 3, icon: <MdOutlineTempleHindu className="text-orange-500"/>, title: "Religious & Ritual Muhurtas", 
    events: [
      "Pooja, Havan, and Yagna",
      "Vastu Rituals",
      "Spiritual Retreats",
      "Temple Visits",
      "Astrological Remedies Implementation",
      "Navagraha Shanti",
    ] 
  }
]

const whyMuhurta = [
  "Aligns your actions with positive cosmic energy",
  "Reduces risks & obstacles",
  "Increases chances of success",
  "Brings mental clarity and confidence",
  "Ensures spiritual and material harmony",
  "Helps avoid unfavorable planetary influences"
]

const deliverables = [
  { id: 1, icon: <FaCalendarCheck className="text-green-500"/>, title: "3–5 Highly Auspicious Date & Time Options" },
  { id: 2, icon: <FaSun className="text-orange-500"/>, title: "Complete Panchang Analysis" },
  { id: 3, icon: <FaMoon className="text-blue-500"/>, title: "Moon Nakshatra & Tithi-based Selection" },
  { id: 4, icon: <FaRegListAlt className="text-gray-500"/>, title: "Event-specific rules for Muhurta selection" },
  { id: 5, icon: <FaExclamationTriangle className="text-amber-500"/>, title: "Do’s and Don'ts for the chosen day" },
  { id: 6, icon: <FaHandsHelping className="text-red-500"/>, title: "Special remedies for better outcomes" }
]
 
const MuhurtaPage = () => {
  return (
    <>
    <Topbar/>
    <header className="lg:h-[130vh] h-auto py-6 object-cover bg-cover bg-center bg-no-repeat 
      space-y-6 flex flex-col justify-center" 
      style={{backgroundImage: `url('/images/muhurta-bg-01.png')`, fontFamily: `serif`}}>
    
      <section className="text-center space-y-2 px-4">
        <h1 className="text-4xl text-orange-500 font-bold">🌟 Muhurta (Auspicious Time Selection)</h1>

        <div className="text-xl text-yellow-500">Find the Most Favorable Time for Success, Prosperity & Harmony</div>
      </section>

      {/* Intro */} 
      <section className="mx-5 text-lg text-center text-white space-y-8">
        <p>Choosing the right time can significantly influence the outcome of any important event.
        In Vedic Astrology, Muhurta ensures that your actions align with positive planetary 
        energies—bringing success, stability, and divine blessings.
        This report helps you pick the most auspicious date and time for any major life event.</p>

        <p>In astrology, every moment carries a unique energy. When an important task is initiated 
        at a time that aligns with favorable planetary vibrations, the chances of success increase
        dramatically. Muhurta ensures that your actions are supported by the universe, 
        leading to peace, prosperity, and the best possible outcomes.</p> 

        <p>Whether it's starting a relationship, a business, a journey, or a sacred ritual, the right 
        timing can determine how smoothly events unfold. Even small decisions—when taken at the correct 
        Muhurta — can prevent difficulties and accelerate progress, helping you live with confidence and 
        divine guidance.</p>

        <p>Rather than relying on generic calendars, personalized Muhurta evaluates your complete 
        birth chart for precision. It considers your zodiac sign, planetary Dasha periods, strengths, 
        and vulnerabilities to pick the most spiritually and materially rewarding moment. 
        With this guidance, you step forward at the time when destiny is most favorable.</p>
      </section>

      {/* CTA */}
      <div className="text-center flex flex-col items-center space-y-3 mx-8">
        <p className="text-lg italic text-yellow-500">Every Event Becomes More Auspicious With The Right Timing & 
          Gives Auspicious Results</p>
          
        <a href="/contact"
          className="bg-green-700 text-white font-semibold p-3 rounded-full w-auto">
          📞 Start Your Journey With Cosmic Alignment
        </a>
      </div>
    </header>

    {/* What You'll Get */}
    <section className="py-12 px-4" style={{ background: "linear-gradient(135deg,#1a0a2e,#16213e,#0f3460,#1a2a1a)", fontFamily: "serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:wght@300;400&display=swap');
        .ttl{background:linear-gradient(90deg,#F59E0B,#FCD34D,#F59E0B);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:sh 4s linear infinite}
        @keyframes sh{to{background-position:200% center}}.cd{transition:all .35s ease}.cd:hover{transform:translateY(-6px) scale(1.02)}`}
      </style>
      
      <div className="space-y-4">
        <h2 className="ttl text-3xl font-bold text-center">What You'll Get</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto">
          {getItems.map((item, index) => (
          
            <div 
              key={index} 
              className="flex flex-col items-center bg-white/10 rounded-lg p-6 
              transition hover:scale-105 space-y-2">

              <div className="text-3xl">{item.icon}</div>
              <h3 className="text-lg text-center text-white font-semibold">{item.title}</h3>
              <p className="text-center text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Auspicious Events */}
      <div className="space-y-4 my-10">
        <h2 className="ttl text-3xl font-bold text-center">✨ I provide Auspicious Muhurta for the following events:</h2>
    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {auspicious.map((muhurta, index) => (

            <div 
              key={index} 
              className="flex flex-col items-center bg-white/10 rounded-lg p-6 transition hover:scale-105 space-y-2">

              <div className="text-4xl">{muhurta.icon}</div>
              <h3 className="text-xl text-center text-red-500 font-semibold">{muhurta.title}</h3>

              <ul className="text-gray-400 text-left space-y-1">
                {muhurta.events.map((eve, index) => (
                  
                  <li key={index}>{eve}</li> 
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Why Muhurta Matters? */}
      <div className="space-y-4">
        <h2 className="ttl text-3xl font-bold text-center">Why Muhurta Matters?</h2>

        <ul className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-3 text-gray-400 text-lg">
          {whyMuhurta.map((why, index) => (

            <li key={index} className="">✔️ {why}</li>
          ))}
        </ul>
      </div>

      {/* What You'll Receive */}
      <div className="space-y-4 my-10">
        <h2 className="ttl text-3xl font-bold text-center">What You'll Receive</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {deliverables.map((deliver, index) => (

            <div 
              key={index} 
              className="flex flex-col items-center bg-white/10 rounded-lg p-6 transition hover:scale-105 space-y-2"> 

              <div className="text-3xl">{deliver.icon}</div>
              <h3 className="text-lg text-center text-white font-semibold">{deliver.title}</h3>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA */}
      <div className="border border-white p-6 rounded-xl flex flex-col items-center space-y-4">
        <p className="text-lg text-white italic text-center">Make Your Big Moments Truly Blessed</p>
          
        <a href="/contact"
          className="bg-green-700 text-white text-center font-semibold p-3 rounded-full w-auto">
          📞 Get Your Personalized Muhurta Now
        </a>
      </div>
        <div className="py-6"></div>
      <MuhurtaPackages/>
    </section>
    <FooterOne/>
    </>
  )
}

export default MuhurtaPage