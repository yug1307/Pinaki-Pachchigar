import React from "react";
import { FaCrown, FaRegStar, FaSun,  } from "react-icons/fa";


const gemPackages = [
  {
    title: "Basic Gem Suggestion",
    price: "₹300",
    icon: <FaRegStar className="text-blue-400"/>,
    features: [
      "One suitable gemstone recommendation based on your birth chart",
      "Basic wearing instructions (procedure, metal, finger, day)",
      "Simple do's and don'ts guide",
      "Short personalized note with planetary insight",
      "PDF Summary"
    ] 
  },
  {
    title: "Essential Gem Report",
    price: "₹500",
    icon: <FaCrown className="text-yellow-400"/>,
    features: [
      "Two gemstone recommendations for major planets",
      "Gem compatibility analysis",
      "Wearing and cleansing procedure",
      "Planetary strength overview",
      "Energizing mantra with guidance", 
      "PDF Report (2 pages)"
    ]
  },
  {
    title: "Premium Gem Therapy",
    price: "₹800",
    icon: <FaSun className="text-orange-400"/>,
    features: [
      "Full gemstone & planetary strength analysis",
      "Remedies, puja rituals, and mantra activation",
      "Substitutes & authenticity verification guide",
      "30-minute personalized consultation (phone/Zoom)",
      "PDF report (4-5 pages, with detailed guidance)"
    ]
  }
]

const GemstonePackages = () =>{ 
  return(
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-center text-red-600">✨Choose Your Gem Guidance Plan✨</h2>
 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {gemPackages.map((gemsPack, index) => (

          <div 
            key={index}
            className="bg-white/10 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform 
            hover:-translate-y-2 border-2 border-red-600 hover:border-sky-500">

            <div className="text-center space-y-3">  
              <div className="animate-pulse flex justify-center text-3xl">{gemsPack.icon}</div>
              <h3 className="text-2xl font-semibold text-white">{gemsPack.title}</h3>
              <p className="text-xl font-bold text-red-600">{gemsPack.price}</p>

              <ul className="text-gray-400 text-lg text-left space-y-2">
                {gemsPack.features.map((feat, index) => (
                  
                  <li key={index} className="flex items-center gap-2">
                    <span>💠{feat}</span>
                  </li> 
                ))}
              </ul>

              <a
                href="https://forms.gle/tp5TDgEE1e8NZ1YTA"
                className="inline-block border border-white text-orange-500 font-semibold py-2 px-6 rounded-full hover:shadow-lg transition duration-300"
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
export default GemstonePackages;