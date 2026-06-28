import React from "react"; 
import { FaCrown, FaHandPaper, FaRegEye } from "react-icons/fa";

const palmPackages = [ 
  {
    icon:<FaHandPaper className="text-rose-500"/>,
    title: "Basic Palmistry Report",
    price: "₹700",
    features: [
      "Analysis of major lines (Life, Head, and Heart)",
      "Your core nature, emotional tendencies & mental strength",
      "Simple lifestyle or spiritual tips for improvement",
      "Clear notes shared via Email/WhatsApp",
      "General strengths that influence work choices"
    ]
  },
  {
    icon: <FaRegEye className="text-green-500"/>,
    title: "Advanced Hand Analysis",
    price: "₹1100",
    features: [
      "Fate, Sun, Mercury, Marriage & Health lines analysis",
      "Interpretation of planetary mounts (Sun, Jupiter, Saturn, Venus, etc.)",
      "Patterns that influence your decisions & stress levels",
      "Strengths, talents & potential life direction",
      "Colors, mantras or practices suitable to your palm",
      "Detailed notes shared via Email/WhatsApp"
    ]
  },
  {
    icon: <FaCrown className="text-purple-500"/>,
    title: "Premium Destiny Blueprint",
    price: "₹1700",
    features: [
      "All major lines, minor lines, rare markings, grids, stars & breaks",
      "How your hand type defines your personality & destiny",
      "Growth periods, risks & ideal work/investment directions",
      "Long-term emotional patterns & compatibility clues",
      "Palm reading aligned with planetary energy",
      "Detailed Analysis Report of 4-5 pages"
    ]
  }
]
 
const PalmistryPackages = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-red-500 text-center">Choose Your Plan to Know What Your Palm Lines Have Decided For You</h2>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {palmPackages.map((palmPack, index) => (
          <div 
            key={index}
            className="bg-white/10 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform 
            hover:-translate-y-2 border-2 border-red-500 hover:border-sky-500">
            
            <div className="text-center space-y-3">  
              <div className="flex justify-center text-4xl">{palmPack.icon}</div>
              <h3 className="text-2xl font-semibold text-white">{palmPack.title}</h3>
              <p className="text-xl font-bold text-red-600">{palmPack.price}</p>

              <ul className="text-gray-400 text-lg text-left space-y-2">
                {palmPack.features.map((feat, index) => (
                  
                  <li key={index}>
                    <span>🤲 {feat}</span>
                  </li>  
                ))}
              </ul>

              <a href="https://forms.gle/e7XiiWmiK1Dmuqia8"
                className="inline-block border border-white text-orange-500 font-semibold py-2 w-1/2 rounded-full transition duration-300"
              >
                Get Now
              </a>
            </div>
          </div>
        ))}
      </div> 
    </section>
  )
};

export default PalmistryPackages;