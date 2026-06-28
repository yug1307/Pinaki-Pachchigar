import React from 'react';
import Topbar from '../components/Topbar';
import FooterOne from '../components/FooterOne';
import { FaChartPie, FaGem, FaGlobeAsia, FaHandHolding, FaRegStar, FaUserAstronaut } from 'react-icons/fa';
import KundliPackages from './packages/KundliPackages';

const getItems = [
  { icon: <FaChartPie size={36} className="text-amber-500"/>, title: "Detailed analysis of Lagna, Moon & Navamsa charts" }, 
  { icon: <FaGlobeAsia size={36} className="text-green-500"/>, title: "Career and finance potential evaluation" }, 
  { icon: <FaUserAstronaut size={36} className="text-violet-500"/>, title: "Health and relationship insights" }, 
  { icon: <FaRegStar size={36} className="text-amber-500"/>, title: "Event predictions and planetary timelines" }, 
  { icon: <FaGem size={36} className="text-violet-500"/>, title: "Gemstone and remedy recommendations" }, 
  { icon: <FaHandHolding size={36} className="text-pink-500"/>, title: "1-on-1 personalized consultation and guidance" } 
]

const includes = [
  { text: "Discover your life purpose and inner potential" },
  { text: "Understand planetary influences and life cycles" },
  { text: "Find the best timing for success, marriage, and growth" },
  { text: "Learn remedies for balance and spiritual harmony" },
  { text: "Gain deep clarity in decision-making" }
]

const KundliPage = () => {
  return (
    <>
    <Topbar />
      <header
        className="lg:h-[120vh] h-[60vh] object-cover bg-cover bg-center bg-no-repeat flex flex-col justify-center"
        style={{backgroundImage: `url('/images/kundli-bg.jpg')`, fontFamily: `serif`}}>

        <section className="text-white text-center space-y-2 px-4">
          <h1 className="text-4xl font-bold">Kundli / Birth Chart Analysis</h1>
          <div className='text-lg'>Decode your destiny through the divine language of the stars</div>
        </section> 

        {/* Introduction */}
        <section className="mx-5 text-white text-center">
          <p className="text-white text-lg leading-relaxed py-5">
            Your <span className="font-semibold text-red-600">Kundli</span> is a sacred celestial map
            that reveals the story written by the stars at the time of your birth.  
            It reflects your strengths, challenges, emotions, and potential — helping you align your
            path with the cosmic flow of life.
          </p>
        
          {/* What Is Kundli */}
          <h2 className="text-3xl font-semibold">What Is a Kundli?</h2>
          <p className="text-lg">
            A Kundli (Janma Patrika) is your astrological birth chart, showing the exact position of
            planets, signs, and houses at your birth. It provides insights into your life’s purpose,
            relationships, career, and spiritual journey. Every chart is unique — just like every soul.
          </p>
        </section>
      </header> 
      
      {/* Why You Need It */}
      <section className="py-12 px-4" style={{ background: "linear-gradient(135deg,#1a0a2e,#16213e,#0f3460,#1a2a1a)", fontFamily: "serif" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:wght@300;400&display=swap');
          .ttl{background:linear-gradient(90deg,#F59E0B,#FCD34D,#F59E0B);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:sh 4s linear infinite}
          @keyframes sh{to{background-position:200% center}}.cd{transition:all .35s ease}.cd:hover{transform:translateY(-6px) scale(1.02)}`}
        </style>
        
        <div className="space-y-6">
          <h2 className="ttl text-3xl font-semibold text-center">Why You Need a Birth Chart Analysis</h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 text-gray-400 text-lg max-w-4xl mx-auto gap-3">
            {includes.map((incl, index) => (
            
              <li key={index} className="text-gray-400">              
                <span className="text-lg">✅ {incl.text}</span>
              </li> 
            ))}
          </ul>
        </div>

        {/* What You Get */}
        <div className="space-y-6 my-10">
          <h2 className="ttl text-3xl font-semibold text-center">What You’ll Receive</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-4">
            {getItems.map((items, index) => (

              <div key={index} className="bg-white/10 to-gray-500 p-4 rounded-xl space-y-2">
                <div className="">{items.icon}</div>
                <div className="text-gray-400 text-lg">{items.title}</div>
              </div>
            ))}
          </div>
        </div>
          
        {/* My Approach */}
        <div className="bg-white/15 rounded-xl py-10 px-4 text-center space-y-6">
          <h2 className="ttl text-3xl font-semibold text-purple-600">My Approach</h2>

          <p className="text-white text-lg leading-relaxed">
            With over <span className="font-semibold">35 years of experience</span> and
            <span className="font-semibold"> 250,000+ consultations</span>, I blend traditional
            Vedic Astrology with modern insights. Each reading is performed with precision,
            compassion, and spiritual integrity — focused on transformation, not superstition.
          </p>
        </div>

        {/* CTA */}
        <div className="border border-white rounded-xl p-6 my-10 flex flex-col items-center space-y-4">
          <p className="text-xl text-white italic text-center">🌠 Your stars already know your story — let’s decode it together.</p>
          
          <a
          href="https://forms.gle/P4jSVzHJANeZHUdL8"
          className="bg-green-700 hover:bg-green-800 text-white text-center font-semibold py-3 px-6 w-64 rounded-full transition">
            Book Your Consultation
          </a>
        </div>

        <KundliPackages/> 
      </section>
    <FooterOne /> 
    </>
  );
};

export default KundliPage;
