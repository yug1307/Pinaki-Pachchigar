import React from 'react'
import Topbar from '../components/Topbar'
import FooterOne from '../components/FooterOne'
import { FaAward, FaBalanceScale, FaClock, FaCogs, FaFileAlt, FaUserShield } from 'react-icons/fa'
import NumerologyPackages from './packages/NumerologyPackages'

const getReport = [
  { icon: "🔢", title: "Your Life Path & Destiny Numbers", 
    desc: "Discover what your birth numbers reveal about your personality, strengths, and karmic lessons"},
  { icon: "🪶", title: "Hidden Energies in Your Name",
    desc: "Learn how each letter affects your life vibration and emotional patterns" },
  { icon: "🧭", title: "Lucky Numbers & Colors",
    desc: "Personalized lucky numbers, days, and colors that enhance positivity and decision-making" },
  { icon: "💫", title: "Compatibility Analysis",
    desc: "Check compatibility with your partner, business, or brand names for harmony and success" },
  { icon: "🧿", title: "Name Correction Suggestions",
    desc: "Get accurate letter or spelling modifications to balance your numerological chart" },
  { icon: "🌈", title: "Signature & Branding Vibration Check",
    desc: "Align your personal or business signature for greater success energy" },
  { icon: "🔮", title: "Yearly Numerology Forecast",
    desc: "Insight into upcoming opportunities and challenges based on your personal year number" },
  { icon: "🌟", title: "Career & Relationship Guidance",
    desc: "Discover areas of excellence and ideal relationship alignments" },
  { icon: "🕉️", title: "Spiritual & Healing Remedies",
    desc: "Powerful mantras and affirmations based on your name numbers to attract positivity" },
  { icon: "📈", title: "Success Optimization Plan",
    desc: "Combine numerology with astrology to enhance timing and planetary strengths" }
]
 
const whyChooseMe = [
  { icon: <FaClock className="text-yellow-500"/>, desc: "35+ years of proven astrological & numerological expertise" },
  { icon: <FaAward className="text-blue-500"/>, desc: "Over 250,000+ consultations with accurate results" },
  { icon: <FaBalanceScale className="text-green-500"/>, desc: "Integration of Vedic Astrology + Numerology + Energy Healing" },
  { icon: <FaUserShield className="text-purple-500"/>, desc: "Personalized, confidential, and result-oriented sessions" },
  { icon: <FaCogs className="text-orange-500"/>, desc: "Scientifically aligned name corrections — not random spelling changes" },
  { icon: <FaFileAlt className="text-red-500"/>, desc: "Detailed PDF report and practical remedies included" }
]

const NumerologyNameCorrectionPage = () => {
  return (
    <>
    <Topbar/>
      <header className="lg:h-[100vh] h-auto py-6 object-cover bg-cover bg-center bg-no-repeat 
        space-y-6 flex flex-col justify-center" 
        style={{backgroundImage: `url('/images/numerology-2.png')`, fontFamily: `serif`}}>
    
        <section className="text-white text-center space-y-2 px-4">
          <h1 className="text-4xl font-bold text-orange-500">Numerology & Name Correction</h1>

          <div className="text-lg text-sky-300">Unlock the power of hidden numbers — Realign the secret code of your name</div>
        </section>

        {/* Intro */}
        <section className="mx-5 text-lg text-center text-white space-y-8">
          <p>Your name is not just an identity — it’s an energy frequency that shapes your destiny. 
            Every letter holds a unique vibration that interacts with your date of birth and planetary 
            alignment. When these vibrations are harmonious, they attract success, health, peace,
            and abundance. But when they conflict, they may lead to delays, struggles, or instability.</p>

          <p>With more than <span className="font-semibold">35 years of astrological experience</span> and 
            <span className="font-semibold"> 2.5 lakh+ consultations</span>, I’ve guided countless 
            individuals, entrepreneurs and politicians toward success by analyzing the hidden patterns in
            their names and birth numbers.
            Through <span className="italic font-semibold">Numerology and Name Correction</span>, I help you realign your
            personal and professional energy with cosmic frequencies that favor prosperity and growth.</p>

          <p>Whether you are launching a new business, choosing a baby name, or seeking balance in life,
            my personalized numerology sessions ensure that your name supports your journey — not hinders.
            Let's decode your destiny through the ancient science of numbers.</p> 
        </section>

        {/* CTA */}
        <div className="text-center space-y-3 flex flex-col items-center mx-8">
          <p className="text-lg italic text-white">"Unlock the secret code of your name — realign your destiny with the power of numbers"</p>
          
          <a href="https://forms.gle/xeNgKKgUsaPT4KsT8"
            className="bg-green-700 text-white font-semibold py-3 px-8 rounded-full w-1/8">
            📞 Book Your Numerology Consultation Today
          </a>
        </div>
      </header> 

      {/* What You Get */}
      <section className="py-12 px-4" style={{ background: "linear-gradient(135deg,#1a0a2e,#16213e,#0f3460,#1a2a1a)", fontFamily: "serif" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:wght@300;400&display=swap');
          .ttl{background:linear-gradient(90deg,#F59E0B,#FCD34D,#F59E0B);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:sh 4s linear infinite}
          @keyframes sh{to{background-position:200% center}}.cd{transition:all .35s ease}.cd:hover{transform:translateY(-6px) scale(1.02)}`}
        </style>

        <div className="space-y-4">
          <h2 className="ttl text-3xl font-bold text-center">What you get from this report</h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-5">
            {getReport.map((report, index) => (

              <div  
                key={index} 
                className="bg-white/10 border-2 border-rose-500 py-6 px-2 text-center rounded-lg transition hover:scale-105 space-y-2">

                <div className="text-4xl hover:animate-pulse">{report.icon}</div>
                <h3 className="text-xl text-white font-semibold">{report.title}</h3>
                <p className="text-gray-400">{report.desc}</p>
              </div>  
            ))}
          </div>
        </div>

        {/* Why Choose ME */}
        <div className="space-y-4 my-10">
          <h2 className="ttl text-3xl font-bold text-center">Why Choose My Numerology Consultation</h2>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseMe.map((whyMe, index) => (

            <div 
              key={index} 
              className="bg-gray-600 py-6 px-2 rounded-lg shadow-lg hover:shadow-xl space-y-2">
              
              <div className="text-4xl hover:animate-pulse mx-3">{whyMe.icon}</div>
              <p className="text-white text-center">{whyMe.desc}</p>
            </div>
          ))}
          </div>
        </div>

        <NumerologyPackages/> 
      </section>
      
    <FooterOne/>
    </>
  )
}

export default NumerologyNameCorrectionPage