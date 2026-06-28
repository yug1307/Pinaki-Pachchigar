import React from 'react'
import { FaBookOpen, FaCrown, FaScroll, FaStar } from 'react-icons/fa'

const transPackages = [
  {
    name: "Basic Annual Transit Report",
    price: "₹800",
    icon: <FaBookOpen className="text-yellow-500"/>,
    includes: [
      "Overview of key planetary transits (Jupiter, Saturn, Rahu-Ketu)",
      "General yearly guidance in career, health, and relationships",
      "15-minute consultation or written summary"
    ]
  }, 
  {
    name: "Advanced Transit Report",
    price: "₹1,400",
    icon: <FaScroll className="text-blue-500"/>,
    includes: [
      "Month-by-month annual analysis",
      "Personalized predictions for all major life aspects",
      "Detailed planetary remedies and mantra suggestions",
      "30-minute audio/video consultation"
    ]
  },
  {
    name: "Premium Life Transit Forecast",
    price: "₹2000",
    icon: <FaCrown className="text-purple-600"/>,
    includes: [
      "Comprehensive 12-month roadmap + upcoming 3-year outlook",
      "Analysis of all transits, dashas, and yogas influencing your destiny",
      "Career, relationship, and financial alignment forecast",
      "Premium gemstone & spiritual remedy recommendations",
      "45-minute personal consultation with follow-up session"
    ]
  }
] 

const TransitPackages = () => { 
  return (
     <section className="space-y-6">
      {/* Header */}
      <header className="space-y-2 text-center">
       <h2 className="text-3xl font-bold text-red-600">Transit & Annual Predictions Packages</h2>

       <p className="text-lg text-white">
        Align with the cosmic flow and plan your year wisely. Choose the perfect
        package to understand your planetary transits and upcoming opportunities.
       </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {transPackages.map((pkg, index) => (

          <div
            key={index} 
            className="p-6 bg-white/10 rounded-2xl border-2 border-red-600 hover:border-sky-500  
            hover:shadow-2xl space-y-4 transition transform hover:-translate-y-2">

            <div className="text-center space-y-2">
              <div className="flex justify-center text-4xl animate-pulse">{pkg.icon}</div>
              <h3 className="text-2xl font-semibold text-white">{pkg.name}</h3>
              <p className="text-xl font-bold text-red-600">{pkg.price}</p>
            
            <ul className="text-left text-gray-400 text-lg space-y-2">
              {pkg.includes.map((point, i) => (

                <li key={i} className="flex items-start gap-2">
                  <FaStar className="text-red-500 my-1 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

              <a
                href="https://forms.gle/fhHePK8HxN7aS3BD8"
                className="inline-block border border-white text-orange-500 px-6 py-2 my-10 rounded-full font-semibold"
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

export default TransitPackages