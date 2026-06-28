import React from 'react'
import Topbar from '../components/Topbar'
import FooterOne from '../components/FooterOne'
import { FaBalanceScale, FaCalendar, FaFileAlt, FaGem, FaGlobeAsia, FaHandHolding, 
  FaHandsHelping, FaPrayingHands, FaRainbow, FaShieldAlt, FaSun, FaSyncAlt } from 'react-icons/fa'
import GemstonePackages from './packages/GemstonePackages'

const Recommendations = [
  { id: 1, icon: <FaGlobeAsia/>, title:"Planetary Strength Analysis", 
    text:"Know which planet governs your luck, success, or struggle" },
  { id: 2, icon: <FaGem/>, title: "Gem Compatibility Check", 
    text: "Discover which gemstones are safe and beneficial for your exact chart" },
  { id: 3, icon: <FaHandHolding/>, title: "Wearing Guidelines", 
    text: "Learn the correct metal, finger, and day to energize your gem" },
  { id: 4, icon: <FaBalanceScale/>, title: "Dos & Don’ts", 
    text: "Avoid negative planetary conflicts by knowing which stones not to wear together" },
  { id: 5, icon: <FaPrayingHands/>, title: "Remedy Enhancements", 
    text: "Get mantras, yantras, and puja suggestions to activate your gemstone fully" },
  { id: 6, icon: <FaRainbow/>, title: "Aura and Chakra Impact", 
    text: "Understand how your stone aligns with your energy centers" },
  { id: 7, icon: <FaShieldAlt/>, title: "Authenticity Advice", 
    text: "Guidance on identifying genuine gems and their substitutes" },
  { id: 8, icon: <FaSyncAlt/>, title: "Gemstone Maintenance", 
    text: "Learn how to cleanse, energize, and recharge your gem periodically" },
  { id: 9, icon: <FaFileAlt/>, title: "Bonus", 
    text: "Personalized PDF Report of your gemstone and planetary insights" }
]

const benefits = [
  { icon: <FaBalanceScale/>, text: "Brings planetary balance and emotional stability" },
  { icon: <FaGem/>, text: "Enhances prosperity, focus, and peace of mind" },
  { icon: <FaSun/>, text: "Strengthens weak planetary influences" },
  { icon: <FaShieldAlt/>, text: "Acts as a shield against negativity" },
  { icon: <FaPrayingHands/>, text: "Promotes health and inner harmony" }
]

const working = [ 
  { icon:<FaCalendar/>, title: "1. Submit Birth Details", text: "Your name, date, time and place of birth" },
  { icon: <FaGlobeAsia/>, title: "2. Astrological Analysis", text: "Calculation of planetary positions and strengths" },
  { icon: <FaGem/>, title: "3. Gemstone Suggestion", text: "Personalized recommendation with detailed report" },
  { icon: <FaHandsHelping/>, title: "4. Energization & Wearing Guidance", text: "Instructions to activate your gemstone" }
]

const gallery = [
  { imgSrc: "/images/ruby.jpg", caption: "Ruby" },
  { imgSrc: "/images/pearl.jpg", caption: "Pearl" },
  { imgSrc: "/images/yellow-sapphire.jpg", caption: "Yellow Sapphire" },
  { imgSrc: "/images/hessonite.jpg", caption: "Hessonite" },
  { imgSrc: "/images/emerald.jpg", caption: "Emerald" },
  { imgSrc: "/images/diamond.jpg", caption: "Diamond" },
  { imgSrc: "/images/catseye.jpg", caption: "Catseye" },
  { imgSrc: "/images/blue-sapphire.jpg", caption: "Blue Sapphire" },
  { imgSrc: "/images/red-coral.jpg", caption: "Red Coral" },
]

const approach = [
  `Each recommendation is carefully calculated using your date, time, 
  and place of birth — analyzed through the Lagna, Navamsa, and Dasha charts.`,
  `I combine the wisdom of Vedic astrology with modern energy reading techniques to 
  ensure the gem suits your life’s current planetary period (Mahadasha and Antardasha).`,
  `You’ll receive a clear and practical guide, free from superstition, focused on real 
  energetic alignment and spiritual empowerment.`
]

const GemstonePage = () => {
  return ( 
    <>
    <Topbar/>
      <header className="lg:h-[90vh] h-auto py-6 object-cover bg-cover bg-center bg-no-repeat 
        space-y-6 flex flex-col justify-center"
        style={{backgroundImage: `url('/images/gembg.png')`, fontFamily: `serif`}}>
    
        <section className="text-white text-center space-y-2 px-4"> 
          <h1 className="text-4xl font-bold text-blue-600">Gemstone Recommendation</h1>

          <div className="text-lg text-orange-500">Empower your destiny with the right gemstone — aligned with your planetary energies</div>
        </section>
 
        {/* Intro */}
        <section className="mx-5 text-lg text-center text-white space-y-8">
          <p>Gemstones are more than ornaments — they are powerful conduits of cosmic energy. Each planet in your 
            horoscope resonates with a particular gem that can amplify your strengths, reduce imbalances, and bring 
            divine harmony into your life.</p>

          <p>With more than <span className="font-semibold">35 years of astrological experience</span> and 
            <span className="font-semibold"> 2.5 lakh+ consultations</span>, I’ve guided countless individuals 
            to choose the perfect gemstone that aligns with their planetary vibrations. My approach 
            blends <span className="italic">authentic Vedic Astrology, gem therapy, and spiritual intuition</span> to 
            ensure you wear not just a stone, but a source of energy designed specifically for you.</p>

          <p>A personalized gemstone analysis ensures that you attract prosperity, health, and peace — while 
            avoiding harmful or unsuitable stones that can otherwise magnify life’s challenges. Let your aura 
            shine with the frequency of your destiny.</p> 
        </section>

        {/* CTA */}
        <div className="text-center space-y-3 mx-5 flex flex-col items-center">
          <p className="text-lg italic text-white px-auto">"Your destiny is shaped by the light that surrounds you — let the right gemstone amplify it"</p>
          
          <a href="https://forms.gle/tp5TDgEE1e8NZ1YTA" 
            className="bg-green-700 text-white font-semibold p-3 rounded-full w-1/8">
            🌈 Book your gemstone consultation today and wear the power that’s meant for you
          </a>
        </div>
      </header> 

      {/* What you'll get to know */}
      <section className="py-12 px-4" style={{ background: "linear-gradient(135deg,#1a0a2e,#16213e,#0f3460,#1a2a1a)", fontFamily: "serif" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:wght@300;400&display=swap');
          .ttl{background:linear-gradient(90deg,#F59E0B,#FCD34D,#F59E0B);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:sh 4s linear infinite}
          @keyframes sh{to{background-position:200% center}}.cd{transition:all .35s ease}.cd:hover{transform:translateY(-6px) scale(1.02)}`}
        </style>
        
        <div className="space-y-4">
          <h2 className="ttl text-3xl font-bold text-center">What you'll get to know</h2>
        
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            {Recommendations.map((gem, index) =>(
          
              <div 
                key={index} 
                className="bg-white/10 p-6 rounded-lg shadow-lg hover:shadow-xl space-y-2">
                <div className="text-4xl text-yellow-500 hover:animate-pulse">{gem.icon}</div>
                <h3 className="text-xl font-semibold text-white">{gem.title}</h3>
                <p className="text-gray-400">{gem.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* My Approach */}
        <div className="space-y-4 my-10"> 
          <h2 className="ttl text-2xl font-semibold text-center">My Approach</h2>

          <ul className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-5 text-gray-400 text-lg">
            {approach.map((app, index) => (
              
              <li key={index} className="">{app}</li>
            ))}
          </ul>
        </div>
        
        {/* Benefits of Wearing Gemstones */}
        <div className="space-y-4">
          <h2 className="ttl text-3xl font-bold text-center">Benefits of Wearing Gemstones</h2>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {benefits.map((adv, index) => (
            
              <div key={index} 
                className="bg-white/10 flex flex-col items-center border border-blue-400 py-5 px-2 rounded-xl space-y-2">
                <div className="text-3xl text-rose-600 animate-pulse">{adv.icon}</div>
                <div className="text-lg text-gray-400 text-center">{adv.text}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* How it works */}
        <div className="space-y-4 my-10">
          <h2 className="ttl text-3xl font-bold text-center">How it works</h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {working.map((work, index) => ( 

              <li key={index} className="bg-white/10 border-2 border-orange-500 p-6 rounded-lg">
                <span className="text-3xl text-cyan-500">{work.icon}</span>
                <span className="text-lg text-white font-semibold">{work.title}: </span>
                <span className="text-gray-400">{work.text}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Gallery */}
        <div className="space-y-4">
          <h2 className="ttl text-3xl font-bold text-center">Gallery</h2>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center max-w-6xl mx-auto">
            {gallery.map((pic, index) => (
 
              <div key={index} className="space-y-2">
                <img src={pic.imgSrc} alt="" className="w-full lg:h-[35vh] h-64 sm:h-96 object-cover rounded-lg hover:shadow-2xl"/>
                <div className="text-xl text-white font-semibold">{pic.caption}</div>
              </div>
            ))}
          </div>
        </div> 
        
        {/* CTA */}
        <div className="border border-white p-6 my-10 text-white rounded-xl flex flex-col items-center space-y-4">
          <p className="text-lg italic text-center">"Let your gemstone awaken your hidden potential. Begin your transformation today"</p>
          
          <a href="https://forms.gle/tp5TDgEE1e8NZ1YTA"
            className="bg-green-700 text-center font-semibold py-3 px-8 rounded-full w-1/8">
            📞 Book Your Gem Recommendation
          </a>
        </div>

        <GemstonePackages/> 
      </section>
    <FooterOne/> 
    </>
  )
}

export default GemstonePage