import React from 'react'
import Topbar from '../components/Topbar'
import FooterOne from '../components/FooterOne'
import MatchingPackages from './packages/MatchingPackages'
import { FaBalanceScale, FaBookOpen, FaChartLine, FaGem, FaHeart, FaRing, FaStar, FaUserFriends } from 'react-icons/fa'

const features = [
  { icon: <FaHeart className="text-red-600"/>, text:"Understand emotional, physical, and spiritual compatibility" },
  { icon: <FaStar className="text-emerald-600"/>, text:"Assess long-term stability and harmony" },
  { icon: <FaBalanceScale className="text-pink-600"/>, text:"Identify potential conflicts before marriage" },
  { icon: <FaGem className="text-orange-600"/>, text:"Remedies to overcome planetary mismatches" },
  { icon: <FaUserFriends className="text-sky-600"/>, text:"Build relationships based on trust and awareness" }
]

const inclusions = [
  { icon: <FaBookOpen/>, text:"Guna Milan (Ashta Koota) score analysis" },
  { icon: <FaRing/>, text:"Mangal Dosha and compatibility check" },
  { icon: <FaHeart/>, text:"Emotional and mental connection insights" },
  { icon: <FaGem/>, text:"Personalized remedies, gemstones & mantras" },
  { icon: <FaChartLine/>, text:"Comprehensive compatibility report (PDF + verbal)" }
]
const MatchingPage = () => {
  return (
    <>
    <Topbar/>
      {/* Header Section */}
      <header className="lg:h-[90vh] h-auto py-6 object-cover bg-cover bg-center bg-no-repeat 
        space-y-6 flex flex-col justify-center"
        style={{backgroundImage: `url('/images/matching-bg.jpg')`, fontFamily: `serif`}}>
    
        <section className="text-white text-center space-y-1 px-4">
          <h1 className="text-4xl font-bold text-amber-500">Kundli Matching & Relationship Counselling</h1>
 
          <div className="text-lg text-cyan-500">Discover the cosmic compatibility that shapes your bond</div>
          <div className="text-lg text-rose-500">Whether it’s for marriage, love, or understanding your 
            partner better — align your stars for a harmonious connection</div>
        </section>

        {/* Intro */}
        <section className="mx-5 text-lg text-center text-white space-y-8">
          <p>Marriage and relationships are not merely emotional connections — they are energetic and karmic unions
            written by the cosmos. In Vedic Astrology, Kundli Matching or Guna Milan plays a vital role in determining
            compatibility between two individuals. It examines the planetary alignments in both birth charts to assess
            harmony in love, trust, understanding, and lifelong stability.</p>

          <p>In modern times, relationships often face challenges due to lifestyle, communication, and emotional differences. 
            Astrology helps bridge that gap by revealing the hidden energies and karmic ties between two souls. 
            Whether you’re preparing for marriage, exploring a love relationship, or seeking to heal an existing bond, 
            Kundli Matching provides deep insights into how both partners complement each other.</p>

          <p>With over <span className="font-semibold">35 years of experience</span> and <span className="font-semibold">250,000+ consultations</span>, 
            I bring both astrological wisdom and psychological understanding to my relationship
            counselling sessions. My approach blends traditional matchmaking techniques with compassionate
            guidance, ensuring that every couple finds the balance of destiny, love, and compatibility 
            they deserve. Each consultation is aimed at strengthening relationships, resolving conflicts, 
            and aligning your journey with divine timing.</p>
        </section>
      </header>     
 
      {/* Why It Matters */}
      <section className="py-12 px-4" style={{ background: "linear-gradient(135deg,#1a0a2e,#16213e,#0f3460,#1a2a1a)", fontFamily: "serif" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:wght@300;400&display=swap');
          .ttl{background:linear-gradient(90deg,#F59E0B,#FCD34D,#F59E0B);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:sh 4s linear infinite}
          @keyframes sh{to{background-position:200% center}}.cd{transition:all .35s ease}.cd:hover{transform:translateY(-6px) scale(1.02)}`}
        </style>
        
        <div className="space-y-4">
          <h2 className="ttl text-3xl font-semibold text-center">Why Kundli Matching Matters</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-3 bg-white p-5 rounded-xl shadow-md 
                bg-gradient-to-tl from-purple-400 to-yellow-400 hover:shadow-xl hover:scale-105 
                transform transition duration-300">

                <span className="text-3xl animate-pulse">{item.icon}</span>
                <p className="text-center text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <div className="space-y-4 my-10">
          <h2 className="ttl text-3xl font-semibold text-center">What’s Included in My Consultation</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {inclusions.map((item, i) => (

              <div 
                key={i}
                className="flex flex-col items-center justify-center gap-3 bg-white/10 p-5 rounded-lg 
                border-2 border-cyan-500 hover:scale-105 transition duration-300">

                <span className="text-red-600 text-3xl">{item.icon}</span>
                <p className="text-center text-gray-400 text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* My Approach */}
        <div className="bg-white/15 rounded-xl py-10 px-4 text-center space-y-6">
          <h2 className="ttl text-3xl font-semibold text-center">My Counselling Approach</h2>

          <p className="max-w-4xl mx-auto text-lg text-gray-400 text-center leading-relaxed">
            Each relationship is unique — and so is every chart. I don’t just match numbers; I read
            the <span className="text-red-600 font-semibold">emotional blueprint</span> behind the
            stars. My focus is to help you understand your partner better and create a relationship
            filled with respect, clarity, and peace. The goal is not just to predict — but to{" "}
            <span className="font-semibold">guide</span>.
          </p>
        </div>
        
        {/* Call to Action */}
        <div className="border border-white rounded-xl p-6 my-10 flex flex-col items-center space-y-4">
          <p className="text-xl text-white italic text-center">🌺 Your love story is written in the stars — let’s read it together.</p>
      
          <a href="https://forms.gle/uTcYQuLfx7zrYc2p7" 
            className="bg-green-700 text-white font-semibold py-2 px-8 rounded-full">
            📞 Book Your Consultation
          </a>
        </div>
        
        <MatchingPackages/>
      </section>
    <FooterOne/>
    </>
  )
}

export default MatchingPage