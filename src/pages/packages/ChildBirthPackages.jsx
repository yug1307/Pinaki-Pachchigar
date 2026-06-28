import React from "react";
import { FaBalanceScale, FaBook, FaBrain, FaCalculator, FaChartPie, FaCheckDouble, FaChild, FaClock, FaCrown, 
   FaFontAwesome, FaGem, FaHeartbeat, FaInfinity, FaListAlt, FaPrayingHands, FaProjectDiagram, FaRegStar,
   FaRegSun, FaRing, FaRoad, FaShieldAlt, FaSignature, FaSun, FaUniversity, FaUser, FaYinYang
  } from "react-icons/fa";

const packages = [
  {
    icon: <FaCheckDouble className="text-green-500"/>,
    title: "Basic Child Birth Analysis",
    desc: "Perfect for parents who want a simple, clear understanding of their child’s early life astrology",
    price: "₹600",
    includes: [ 
      { id: 1, icon: <FaRegStar className="text-yellow-400"/>, text: "Basic Kundli/Birth Chart Analysis" }, 
      { id: 2, icon: <FaUser className="text-indigo-500"/>, text: "Personality & Emotional Nature Overview" },
      { id: 3, icon: <FaChild className="text-pink-500"/>, text: "Early childhood strengths & weaknesses" },
      { id: 4, icon: <FaHeartbeat className="text-red-500"/>, text: "Basic health & immunity tendencies" },
      { id: 5, icon: <FaBook className="text-green-500"/>, text: "Education & Learning Ability Insights" },
      { id: 6, icon: <FaShieldAlt className="text-blue-500"/>, text: "Simple remedies for protection" },
      { id: 7, icon: <FaFontAwesome className="text-purple-500"/>, text: "1–2 Favorable Letters for Naming (based on Nakshatra)" }
    ]
  }, 
  {
    icon: <FaSun className="text-orange-500"/>,
    title: "Standard Child Birth + Naming Report",
    desc: "Ideal for parents who want both child analysis and a meaningful, astrology-aligned name",
    price: "₹900",
    includes: [
      { id: 1, icon: <FaChartPie className="text-red-500"/>, text: "Complete Birth Chart Interpretation" },  
      { id: 2, icon: <FaBrain className="text-pink-400"/>, text: "Talents, Intelligence & Behavioral Patterns" },  
      { id: 3, icon: <FaUniversity className="text-yellow-500"/>, text: "Health,Education & Future Potential Reading" },  
      { id: 4, icon: <FaYinYang className="text-purple-500"/>, text: "Dosha Identification (if any) + Remedies" },  
      { id: 5, icon: <FaGem className="text-green-500"/>, text: "Suitable gemstones or protective items" },  
      { id: 6, icon: <FaListAlt className="text-purple-500"/>, text: "3–5 Name suggestions based on Nakshatra + Numerology" },
      { id: 7, icon: <FaRegSun className="text-orange-500"/>, text: "Explanation of each name’s meaning & planetary alignment" }
    ]
  },
  {
    icon: <FaCrown className="text-yellow-500"/>,
    title: "Premium Child Birth, Name Correction & Future Insight",
    desc: "A detailed and holistic package for long-term clarity, protection, and spiritual alignment",
    price: "₹1300",
    includes: [
      { id: 1, icon: <FaProjectDiagram className="text-indigo-500"/>, text: "In-depth analysis of all divisional charts" },
      { id: 2, icon: <FaInfinity className="text-purple-500"/>, text: "Karmic Influences & Life Path Assessment" },
      { id: 3, icon: <FaRoad className="text-amber-500"/>, text: "Education, career direction & long-term prediction" },
      { id: 4, icon: <FaBalanceScale className="text-yellow-600"/>, text: "Detailed Dosha evaluation + advanced remedies" },
      { id: 5, icon: <FaRing className="text-pink-400"/>, text: "Personalized gemstone recommendation with wearing rules" },
      { id: 6, icon: <FaClock className="text-emerald-500"/>, text: "Auspicious Child Birth Muhurat (if applicable)" },
      { id: 7, icon: <FaSignature className="text-rose-500"/>, text: "5–7 unique and powerful name options" },
      { id: 8, icon: <FaCalculator className="text-sky-500"/>, text: "Numerology compatibility for each name" },
      { id: 9, icon: <FaPrayingHands className="text-orange-500"/>, text: "Personalized guidance for spiritual upbringing" }
    ]
  }
]

const ChildBirthPackages = () => {
  return (
    <> 
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-red-600 text-center">Give Your Child Clarity, Protection, and Cosmic Strength</h2>
    
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {packages.map((pack, index) => (

          <div 
            key={index} 
            className="bg-white/10 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform 
            hover:-translate-y-2 border-2 border-red-500 hover:border-sky-500">
            
            <div className="text-center space-y-3">  
              <div className="flex justify-center text-4xl animate-pulse">{pack.icon}</div>
              <h3 className="text-2xl font-semibold text-white">{pack.title}</h3>
              <p className="text-lg font-semibold text-cyan-500">{pack.desc}</p>
              <div className="text-xl font-bold text-red-600">{pack.price}</div>

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
    </>
  )
}

export default ChildBirthPackages;