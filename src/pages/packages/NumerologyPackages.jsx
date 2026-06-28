import React from 'react'
import { FaBalanceScale, FaCrown, FaFeatherAlt, FaStar } from 'react-icons/fa'

const numPackages = [
  {
    title: "Basic Numerology Report",
    price: "₹600", 
    icon: <FaStar className="text-yellow-500"/>,
    features: [
      "Core Number Analysis (Life Path, Destiny, Soul Urge)",
      "Name Correction and Vibration Balancing",
      "Baby Name Numerology",
      "Child Education and Career Numerology",
      "Single Consultaion Session (30 mins)",
      "Overview of Strengths and Challenges",
      "Personal Month Planner",
    ]
  }, 
  {
    title: "Essential Numerology Report",
    price: "₹1000",
    icon: <FaFeatherAlt className="text-green-500"/>,
    features: [
      "Detailed name numerology breakdown",
      "Corrective name spelling suggestions",
      "Health and Energy Balance Remedies",
      "Marriage Compatibility",
      "Numerology for Relationship Healing",
      "Relationship Harmony Report",
    ]
  },
  {
    title: "Advanced Numerology Report",
    price: "₹1600",
    icon: <FaBalanceScale className="text-blue-500"/>,
    features: [
      "Vehicle Number Analysis",
      "Brand/Logo Numerology",
      "Career and Profession Guidance",
      "Wealth and Finance Numerology",
      "Name Numerology for Public Figures",
      "Corporate Numerology Consultation",
      "Business Name Numerology",
    ]
  },
  {
    title: "Premium Numerology Blueprint",
    price: "₹2200",
    icon: <FaCrown className="text-purple-500"/>,
    features: [
      "Yearly Numerology Forecast",
      "Business Partnership Compatibility",
      "Business Launch Numerology",
      "Favorable Dates and Timing Selection",
      "Real Estate Numerology",
      "Business Rebranding Through Numerology",
      "Personal Year and Month Planner",
      "Karmic Debt and Destiny Cycle Analysis",
    ]
  }
]
 
const NumerologyPackages = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-center text-red-600">Choose your plan to know the Hidden Power of Numbers</h2>
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {numPackages.map((numPack, index) => (
          <div 
            key={index}
            className="bg-white/10 p-6 rounded-2xl border-2 border-red-500 hover:border-sky-500
            hover:shadow-2xl transition transform hover:-translate-y-2">
            
            <div className="text-center space-y-3">  
              <div className="flex justify-center text-4xl">{numPack.icon}</div>
              <h3 className="text-2xl font-semibold text-white">{numPack.title}</h3>
              <p className="text-xl font-bold text-red-600">{numPack.price}</p>

              <ul className="text-gray-400 text-lg text-left space-y-2">
                {numPack.features.map((feat, index) => (
                  
                  <li key={index}>
                    <span>⭐ {feat}</span>
                  </li> 
                ))}
              </ul>

              <a
                href="https://forms.gle/xeNgKKgUsaPT4KsT8"
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

export default NumerologyPackages