import React from 'react'
import Topbar from "../components/Topbar";
import FooterOne from "../components/FooterOne";
import { FaBalanceScale, FaBrain, FaCalendarAlt, FaClock, FaCommentDots, FaGem, FaHandPaper, 
  FaHeart, FaHeartbeat, FaLock, FaRoad, FaStarAndCrescent, FaSun, 
  FaUserCheck, FaLeaf, FaMobileAlt, FaUserTie } from 'react-icons/fa';
import PalmistryPackages from './packages/PalmistryPackages';

const knowItems = [
  {
    id: 1,
    icon: <FaBrain className="text-yellow-500"/>,
    desc: "Understand your intellect and decision-making through the Head Line"
  },
  {
    id: 2, 
    icon: <FaHeart className="text-pink-500"/>,
    desc: "Decode your emotions and love life via the Heart Line"
  },
  {
    id: 3,
    icon: <FaHeartbeat className="text-red-500"/>,
    desc: "Discover vitality and life energy through the Life Line"
  },
  {
    id: 4,
    icon: <FaRoad className="text-gray-600"/>,
    desc: "Explore destiny and life path insights from the Fate Line"
  },
  {
    id: 5,
    icon: <FaSun className="text-yellow-400"/>,
    desc: "Learn about fame and creativity from your Sun Line"
  },
  {
    id: 6,
    icon: <FaCommentDots className="text-green-500"/>,
    desc: "Uncover communication and business potential via the Mercury Line"
  },
  {
    id: 7,
    icon: <FaHandPaper className="text-orange-500"/>,
    desc: "Interpret personality traits through mounts and finger shapes"
  },
  {
    id: 8,
    icon: <FaClock className="text-blue-500"/>,
    desc: "Identify major life events and transitions through palm timing"
  },
  {
    id: 9,
    icon: <FaGem className="text-purple-500"/>,
    desc: "Receive spiritual remedies and gemstone guidance for harmony"
  }
]

const whyMe = [
  { id: 1, icon: <FaUserTie className="text-yellow-600"/>, desc: "35+ Years of Experience" },
  { id: 2, icon: <FaBalanceScale className="text-blue-500"/>, desc: "Scientific + Spiritual Approach" },
  { id: 3, icon: <FaUserCheck className="text-green-500"/>, desc: "Personalized Sessions" },
  { id: 4, icon: <FaGem className="text-pink-500"/>, desc: "Gemstone & Remedy Support" },
  { id: 5, icon: <FaLeaf className="text-emerald-600"/>, desc: "Holistic Insights" },
  { id: 6, icon: <FaMobileAlt className="text-indigo-500"/>, desc: "Digital Palm Reading Option" },
  { id: 7, icon: <FaLock className="text-gray-600"/>, desc: "Confidential & Compassionate" },
  { id: 8, icon: <FaCalendarAlt className="text-orange-500"/>, desc: "Accurate Event Prediction" },
  { id: 9, icon: <FaStarAndCrescent className="text-purple-500"/>, desc: "Integrated Astrology Insight" },
  { id:10, icon: <FaSun className="text-yellow-500"/>, desc: "Positive Empowerment" }
]

const PalmistryPage = () => {
  return (
    <>
    <Topbar/>
      <header className="grid grid-cols-1 md:grid-cols-2">
        <img src="/images/palm-bg-01.jpg" alt="" className="w-full h-full"/>

        <section className="flex flex-col justify-center bg-gray-200 text-center space-y-6 p-4" 
          style={{ background: "linear-gradient(135deg,#1a0a2e,#16213e,#0f3460,#1a2a1a)", fontFamily: "serif"}}>

          <div className="space-y-2">
            <h1 className="text-yellow-500 text-4xl font-bold">Palmistry (Hast Rekha Analysis)</h1>

            <div className="text-cyan-400 text-lg">Your hands hold the story your soul has written</div>
          </div>
          
          <div className="mx-5 text-lg text-white space-y-8">
            <p>Your palms are more than just lines — they are a sacred map of your destiny, reflecting your
              emotions, intellect, health, relationships, and life path. 
              Palmistry, or <span className="italic">Hast Rekha Shastra</span>, is an ancient art that 
              interprets these divine imprints to uncover your potential and challenges.</p>

            <p>Each mount, finger, and line signifies a powerful aspect of your personality and destiny. 
              Through <span className="font-semibold">Hast Rekha Analysis</span>, we understand your natural 
              inclinations, talents, emotional patterns, and the spiritual forces guiding your journey. 
              Whether you seek clarity in life decisions or inner peace, your palms reveal the answers that 
              have always been with you.</p> 
          </div>

          {/* CTA */}
          <div className="text-center space-y-3 flex flex-col items-center mx-8">
            <p className="text-lg text-white italic">"Your destiny is in your hands — quite literally"</p>
          
            <a href="https://forms.gle/e7XiiWmiK1Dmuqia8"
              className="bg-green-700 text-white font-semibold p-3 rounded-full w-1/8">
              ✨ Let’s explore the divine patterns your palms reveal
            </a>
          </div>
        </section>
      </header>

      {/* What You'll Discover */}
      <section className="py-12 px-4" style={{ background: "linear-gradient(135deg,#1a0a2e,#16213e,#0f3460,#1a2a1a)", fontFamily: "serif" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:wght@300;400&display=swap');
          .ttl{background:linear-gradient(90deg,#F59E0B,#FCD34D,#F59E0B);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:sh 4s linear infinite}
          @keyframes sh{to{background-position:200% center}}.cd{transition:all .35s ease}.cd:hover{transform:translateY(-6px) scale(1.02)}`}
        </style>
        
        <div className="space-y-4">
          <h2 className="ttl text-3xl font-bold text-center">🤲 What You'll Discover in Your Hast Rekha Analysis</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {knowItems.map((item, index) => (

              <div key={index} 
                className="flex flex-col items-center bg-white/10 border-2 border-rose-500 p-4 transition hover:scale-105 rounded-lg space-y-3">

                <div className="text-3xl">{item.icon}</div>
                <p className="text-gray-400 font-semibold text-lg text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose ME */}
        <div className="space-y-4 my-10">
          <h2 className="ttl text-3xl font-bold text-center">✋ Why Choose My Palmistry Consultation</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {whyMe.map((why, index) => (

              <div key={index}
                className="flex flex-col items-center bg-white/10 py-4 px-2 transition hover:scale-105 rounded-lg space-y-3">
            
                <div className="text-3xl">{why.icon}</div>
                <p className="text-white font-semibold text-lg text-center">{why.desc}</p>
              </div> 
            ))}
          </div>
        </div>

        <PalmistryPackages/> 
      </section>
    <FooterOne/>
    </>
  )
}

export default PalmistryPage