import React from 'react'
import Topbar from '../components/Topbar'
import FooterOne from '../components/FooterOne'
import { FaBalanceScale, FaCalendarAlt, FaChartLine, FaCompass, FaGem, FaHeart, FaLeaf, FaMeteor,
  FaMoon, FaPrayingHands, FaStethoscope, FaSun,  } from 'react-icons/fa'
import TransitPackages from './packages/TransitPackages'

const whyTrans = [
  {
    id: 1, icon: "☀️", 
    title: "Personalized Planetary Transit Analysis",
    desc: "Each planet holds unique energy that shapes your thoughts, emotions, and decisions. A Transit Report reveals how these shifting cosmic forces impact your personal and professional life throughout the year."
  },
  {
    id: 2, icon: "📅", 
    title: "Plan Your Year with Cosmic Timing",
    desc: "Knowing when favorable and challenging periods occur allows you to make smarter decisions — from launching projects to planning investments or major life changes"
  },
  {
    id: 3, icon: "🧭", 
    title: "Gain Clarity During Uncertain Times",
    desc: "When life feels confusing or stuck, understanding planetary transits brings perspective, helping you see the bigger picture and move forward with confidence"
  },
  {
    id: 4, icon: "🛡️", 
    title: "Prepare for Challenges in Advance",
    desc: "Astrological foresight acts like a spiritual shield — alerting you to potential struggles so you can face them calmly and strategically, instead of being caught off guard"
  },
  {
    id: 5, icon: "📈", 
    title: "Maximize Growth Opportunities",
    desc: "Transits often bring moments of expansion, career advancement, or personal evolution. A well-timed action based on transit insights can multiply success and outcomes"
  },
  {
    id: 6, icon: "💎", 
    title: "Balance Your Energy with Remedies",
    desc: "Each planetary influence can be harmonized through gemstones, mantras, or colors. Your report provides precise remedies to align with the universe’s flow and maintain spiritual balance"
  },
  {
    id: 7, icon: "☯️", 
    title: "Discover Your Yearly Karmic Themes",
    desc: "Each year holds a unique karmic lesson. The report unveils your life themes — helping you understand why certain patterns repeat and how to transcend them"
  },
  {
    id: 8, icon: "❤️", 
    title: "Enhance Relationships and Communication",
    desc: "By studying Venus, Mercury, and Moon transits, you’ll learn when to strengthen bonds, handle conflicts wisely, and bring more harmony into your relationships"
  },
  {
    id: 9, icon: "🧠", 
    title: "Stay Emotionally and Mentally Grounded",
    desc: "Planetary movements influence emotional patterns and moods. Knowing these cycles supports better self-awareness, mindfulness, and mental well-being"
  },
  {
    id: 10, icon: "👑", 
    title: "Empower Yourself with Awareness",
    desc: "Rather than feeling controlled by fate, the Transit & Annual Predictions report helps you use astrology as a tool of empowerment — transforming destiny into conscious choice"
  },
]

const discover = [
  { id: 1, icon: <FaSun className="text-yellow-500"/>, point: "Planetary Transit Overview" },
  { id: 2, icon: <FaMoon className="text-blue-500"/>, point: "Your Personal Annual Forecast" },
  { id: 3, icon: <FaMeteor className="text-purple-500"/>, point: "Favorable & Challenging" },
  { id: 4, icon: <FaGem className="text-pink-500"/>, point: "Planetary Remedies" },
  { id: 5, icon: <FaStethoscope className="text-indigo-500"/>, point: "Health & Emotional Stability Forecast" },
  { id: 6, icon: <FaLeaf className="text-green-500"/>, point: "Karma & Life Lessons" },
  { id: 7, icon: <FaChartLine className="text-orange-500"/>, point: "Career & Financial Outlook" },
  { id: 8, icon: <FaHeart className="text-red-500"/>, point: "Relationship & Family Dynamics" },
  { id: 9, icon: <FaBalanceScale className="text-green-500"/>, point: "Major Planetary Returns" },
  { id:10, icon: <FaPrayingHands className="text-teal-500"/>, point: "Spiritual Growth Forecast" }
]

const TransitPage = () => {
  return (
    <>
    <Topbar/> 
      <header className="lg:h-[100vh] h-auto py-6 object-cover bg-cover bg-center bg-no-repeat
        space-y-6 flex flex-col justify-center" 
        style={{backgroundImage: `url('/images/transit-bg-01.png')`, fontFamily: `serif`}}>
    
        <section className="text-white text-center space-y-2 px-4">
          <h1 className="text-4xl font-bold text-yellow-500">Transit & Annual Predictions</h1>

          <div className="text-lg text-orange-500">Decode the Celestial Movements That Shape Your Year</div>
        </section>

        {/* Intro */} 
        <section className="mx-5 text-lg text-center text-white space-y-8">
          <p>Life is a journey guided by the celestial movements of planets and stars. Every planetary 
            transit — whether it’s Saturn’s shift, Jupiter’s expansion, or Mercury’s retrograde — brings 
            new lessons, opportunities, and challenges. Understanding these transits helps you align your
            actions with cosmic timing, transforming uncertainty into clarity.</p>
 
          <p>With more than <span className="font-semibold">35 years of astrological experience</span> and 
            <span className="font-semibold"> 2.5 lakh+ consultations</span>, I provide deep, personalized
            insights into how planetary shifts affects your personal, professional, and emotional life.
            Each planet’s movement is mapped in your birth chart to forecast its influence on your current 
            and upcoming phases.</p>
    
          <p>Whether you’re seeking guidance for a major life decision, planning your career path, or simply 
            want to understand the year ahead, a Transit & Annual Prediction Report gives you the roadmap 
            to act at the right time. By identifying your <span className="font-semibold">"cosmic weather", </span>
            this report empowers you to navigate life with wisdom, confidence, and spiritual alignment.</p> 
        </section>

        {/* CTA */}
        <div className="text-center space-y-3 flex flex-col items-center mx-8">
          <p className="text-lg italic text-white">"Know When to Act, Grow, and Transform — According to Your Planets"</p>
          
          <a href="https://forms.gle/fhHePK8HxN7aS3BD8"
            className="bg-green-700 text-white font-semibold py-3 px-8 rounded-full w-1/8">
            📞 Get Your Transit & Annual Report Today
          </a>
        </div>
      </header>

      {/* Why You Should Have a Transit & Annual Predictions Report */}
      <section className="py-12 px-4" style={{ background: "linear-gradient(135deg,#1a0a2e,#16213e,#0f3460,#1a2a1a)", fontFamily: "serif" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:wght@300;400&display=swap');
          .ttl{background:linear-gradient(90deg,#F59E0B,#FCD34D,#F59E0B);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:sh 4s linear infinite}
          @keyframes sh{to{background-position:200% center}}.cd{transition:all .35s ease}.cd:hover{transform:translateY(-6px) scale(1.02)}`}
        </style>
        
        <div className="space-y-4">
          <h2 className="ttl text-3xl font-bold text-center">Why You Should Have a Transit & Annual Predictions Report</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {whyTrans.map((trans, index) => (

              <div key={index} 
                className="bg-white/10 border-2 border-rose-500 text-center p-4 space-y-2 rounded-lg transition hover:scale-105">

                <div className="text-4xl">{trans.icon}</div>
                <h3 className="text-lg font-semibold text-white">{trans.title}</h3>
                <p className="text-gray-400">{trans.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
          <div className="py-7"></div>

        {/* What You'll Discover */}
        <div className="space-y-4">
          <h2 className="ttl text-3xl font-bold text-center">🔭 What You'll Discover in Your Transit & Annual Predictions Report</h2>
        
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {discover.map((disc, index) => (

              <div key={index} 
                className="bg-gray-600 py-4 px-2 space-y-2 rounded-lg flex flex-col items-center transition hover:scale-105">

                <div className="text-3xl animate-pulse">{disc.icon}</div>
                <p className="text-center text-white">{disc.point}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="border border-white p-6 my-10 rounded-xl flex flex-col items-center space-y-4">
          <p className="text-lg italic text-white text-center">"Know When to Act, Grow, and Transform — According to Your Planets"</p>
          
          <a href="https://forms.gle/fhHePK8HxN7aS3BD8"
            className="bg-green-700 text-white text-center font-semibold py-3 px-8 rounded-full w-1/8">
            📞 Get Your Transit Report Today
          </a>
        </div>

        <TransitPackages/>
      </section>
    <FooterOne/>
    </> 
  )
}

export default TransitPage