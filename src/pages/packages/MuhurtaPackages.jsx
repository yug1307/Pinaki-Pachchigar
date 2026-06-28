import React from "react";
import { FaBookReader, FaCalendarPlus, FaChartLine, FaCrown, FaFileAlt, FaListAlt, 
  FaPrayingHands, FaRegCalendarAlt, FaRegCalendarCheck, FaRegClock, FaStar, FaSun, FaToriiGate,
  FaVideo,
  } from "react-icons/fa";

const packages = [
  { 
    icon: <FaSun className="text-amber-500"/>, 
    title: "Basic Muhurta Selection", 
    price: "₹800",
    includes: [
      { icon: <FaRegClock className="text-amber-500"/>, text: "1 Highly Auspicious Muhurta for 1 Event (Date + Exact time)" },
      { icon: <FaBookReader className="text-indigo-500"/>, text: "Panchang-based Timing Analysis (Tithi, Nakshatra, Yoga, Karana)" },
      { icon: <FaRegCalendarAlt className="text-sky-500"/>, text: "Rahu Kalam, Yamaganda & Gulika avoidance" },
    ],  
    end: "Best for:", examples: "Buying a Vehicle, Opening Businesses, Travel, etc"
  },
  {
    icon: <FaCrown className="text-green-500"/>,
    title: "Personalized Muhurta with Remedies",
    price: "₹1200",
    includes:[
      { title: "Everything in Basic plus:" },
      { icon: <FaRegCalendarCheck className="text-green-500"/>, text: "3 best Muhurta options based on your birth chart" },
      { icon: <FaChartLine className="text-rose-500"/>, text: "Planetary Influence explanation for the chosen date (30 min 1-on-1 call)" },
      { icon: <FaListAlt className="text-violet-500"/>, text: "Personalized Do’s & Don’ts for the day" },
      { icon: <FaPrayingHands className="text-yellow-500"/>, text: "Remedies / Mantras / Rituals to enhance positive outcome" },
    ],
    end: "Best for:", examples: "Housewarming (Griha Pravesh), Property Purchase, Spiritual Events, Small Investments, Short-Term Project/Investment Planning, etc" 
  },
  {
    icon: <FaStar className="text-purple-500"/>,
    title: "Comprehensive Muhurta Planning Package",
    price: "₹1700",
    includes:[
      { title: "Everything in Personalized plus:" },
      { icon: <FaCalendarPlus className="text-purple-500"/>, text: "5 Optimal Muhurta options with detailed analysis" },
      { icon: <FaFileAlt className="text-emerald-500"/>, text: "3-4 pages detailed report" },
      { icon: <FaToriiGate className="text-amber-500"/>, text: "Festival & Vastu-based selection for maximum prosperity" },
      { icon: <FaVideo className="text-pink-500"/>, text: "In-depth Video Consultation (45-60 mins) explaining planetary influences" },
    ],
    end: "Best for:", examples: "Engagement/Marriages, Huge Investments, Product/Service Launch, Long-Term Project/Investment Planning, etc"
  }
]

const MuhurtaPackages = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-center text-red-600">Start Your New Journey With Confidence & Right Timing</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {packages.map((mpkg, index) => (

          <div 
            key={index}
            className="bg-white/10 p-4 rounded-2xl shadow-lg hover:shadow-2xl transition transform 
            hover:-translate-y-2 border-2 border-red-500 hover:border-sky-500">

            <div className="text-center space-y-3">  
              <div className="flex justify-center text-4xl animate-pulse">{mpkg.icon}</div>
              <h3 className="text-2xl font-semibold text-white">{mpkg.title}</h3>
              <div className="text-xl font-bold text-red-600">{mpkg.price}</div>

              <ul className="text-gray-400 text-left">
                {mpkg.includes.map((feat, index) => (
                  
                  <li key={index} className="flex gap-2 text-lg space-y-2">
                    <p className="text-cyan-500">{feat.title}</p>
                    <span className="flex-shrink-0 py-1">{feat.icon}</span>
                    <span>{feat.text}</span>
                  </li> 
                ))}
                            
                <div className="my-4">
                  <p className="font-semibold text-green-600 text-xl">📌 {mpkg.end}</p>
                  <p className="text-cyan-500">{mpkg.examples}</p>
                </div>
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

export default MuhurtaPackages;