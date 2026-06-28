import React from 'react'
import { FaArrowsAltH, FaCalendarCheck, FaChartLine, FaCoins, FaCompass, FaFileAlt, FaHeartBroken, 
  FaHistory, FaInfinity, FaLeaf, FaLock, FaMoon, FaOm, FaPhoneAlt, FaPrayingHands, FaRedo, FaRegStar, 
  FaUnlockAlt, FaUserAstronaut, FaUserClock, FaUserFriends, FaVideo, } from 'react-icons/fa'

const packages = [
  { 
    icon: <FaMoon className="text-indigo-500"/>, 
    title: "Karmic Insight Reading", 
    desc: "Understand Your Soul’s Past Imprints",
    price: "₹600",
    includes: [
      { icon: <FaHistory className="text-blue-500"/>, text: "Basic past-life indicators from birth chart" },
      { icon: <FaArrowsAltH className="text-green-500"/>, text: "Analysis of Rahu–Ketu axis" },
      { icon: <FaLock className="text-orange-500"/>, text: "Identification of major karmic blocks" },
      { icon: <FaRedo className="text-blue-500"/>, text: "Repeating life patterns & lessons" },
      { icon: <FaLeaf className="text-green-500"/>, text: "1 key karmic remedy" },
      { icon: <FaPhoneAlt className="text-red-500"/>, text: "15-20 minute consultation (voice/video)" },
    ],
    bestFor: "Those seeking an introduction to karmic astrology and soul patterns"
  },
  {
    icon: <FaRegStar className="text-blue-500"/>,
    title: "Soul Karma Healing Report",
    desc: "Release Past-Life Burdens",
    price: "₹900",
    includes: [
      { icon: <FaChartLine className="text-violet-500"/>, text: "Detailed karmic chart analysis" },
      { icon: <FaHeartBroken className="text-red-500"/>, text: "Past-life emotional & mental imprints" },
      { icon: <FaUserFriends className="text-sky-500"/>, text: "Relationship karmas (family/spouse)" },
      { icon: <FaCoins className="text-yellow-500"/>, text: "Career & money karma indicators" },
      { icon: <FaPrayingHands className="text-purple-500"/>, text: "Personalized remedies (mantra, charity, rituals)" },
      { icon: <FaFileAlt/>, text: "Written summary or PDF report" },
      { icon: <FaVideo className="text-indigo-500"/>, text: "30-minute consultation" }
    ],
    bestFor: "Individuals facing emotional confusion, repeated struggles, or relationship blocks"
  },
  {
    icon: <FaOm className="text-orange-500"/>,
    title: "Advanced Past Life Transformation",
    desc: "Deep Healing & Spiritual Awakening",
    price: "₹1500",
    includes: [
      { icon: <FaUserClock className="text-sky-500"/>, text: "In-depth past-life regression astrology" },
      { icon: <FaInfinity className="text-purple-500"/>, text: "Multiple lifetime patterns analysis" },
      { icon: <FaCompass className="text-blue-500"/>, text: "Soul mission & spiritual evolution guidance" },
      { icon: <FaUnlockAlt className="text-yellow-500"/>, text: "Karmic debt resolution strategies" },
      { icon: <FaOm className="text-orange-500"/>, text: "Advanced remedies & meditative practices" },
      { icon: <FaUserAstronaut className="text-sky-500"/>, text: "45-minute one-on-one consultation" },
      { icon: <FaCalendarCheck className="text-green-500"/>, text: "Follow-up support (7 days)" },
    ],
    bestFor: "Spiritual seekers, healers, and individuals ready for deep transformation"
  }
]

const KarmicPackages = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-center text-red-600">Choose Your Plan to Overcome The Challenges</h2>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {packages.map((pack, index) => (
          
          <div 
            key={index} 
            className="bg-white/10 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform 
            hover:-translate-y-2 border-2 border-red-500 hover:border-sky-500">
            
            <div className="text-center space-y-3">  
              <div className="flex justify-center text-4xl animate-pulse">{pack.icon}</div>
              <h3 className="text-2xl font-semibold text-white">{pack.title}</h3>
              <p className="text-lg font-semibold text-cyan-500">{pack.desc}</p>
              <div className="text-xl font-bold text-red-500">{pack.price}</div>
 
              <ul className="text-gray-400 text-left space-y-2">
                {pack.includes.map((feat, index) => (
                   
                  <li key={index} className="flex items-start gap-2">
                    <span className="flex-shrink-0 my-1 text-xl">{feat.icon}</span>
                    <span className="text-lg">{feat.text}</span>
                  </li> 
                ))}
              </ul>

              <a href="/contact"
                className="inline-block border border-white text-orange-500 font-semibold py-2 w-1/3 rounded-full transition duration-300"
              >
                Get Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default KarmicPackages