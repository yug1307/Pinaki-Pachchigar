import React from "react";
import { FaBalanceScale, FaCheckCircle, FaCheckSquare, FaClipboardList, FaClock, FaCrown, 
  FaExclamationTriangle, FaFilePdf, FaGem, FaHandHoldingHeart, FaLeaf, FaMoon, FaPhoneAlt, FaStarOfLife, 
  FaSun } from "react-icons/fa";

const packages = [ 
  {
    icon: <FaCheckCircle className="text-green-600"/>,
    title: "Basic Dosha Identification",
    desc: "Perfect for beginners who want a quick understanding of any major doshas in their Kundli",
    price: "₹600",
    includes: [
      { icon: <FaExclamationTriangle className="text-red-500"/> , text: "Identification of major doshas (Mangal, Pitra, Kaal Sarp, Shani, Chandra)" },
      { icon: <FaCheckSquare className="text-green-500"/>, text: "Brief explanation of dosha effects" },
      { icon: <FaSun className="text-yellow-500"/>, text: "Planetary strength & weakness overview" },
      { icon: <FaLeaf className="text-green-500"/>, text: "Basic remedy suggestions (Mantra + Daan + Routine)" },
      { icon: <FaClock/>, text: "30 Min Guidance Session for immediate solutions" }
    ]
  },
  {
    icon: <FaClipboardList className="text-indigo-500"/>,
    title: "Standard Remedy Consultation",
    desc: "Ideal for people seeking clarity and practical remedies with detailed astrological insights",
    price: "₹900",
    includes: [
      { icon: <FaExclamationTriangle className="text-red-500"/>, text:"Identification of all doshas affecting health, career, marriage & finances" },      
      { icon: <FaBalanceScale className="text-purple-500"/>, text: "Severity analysis + root cause explanation" },
      { icon: <FaHandHoldingHeart className="text-red-500"/>, text: "Personalized remedies (Mantra + Fasting + Rudraksha)" },
      { icon: <FaGem className="text-green-500"/>, text: "Gemstone recommendations & wearing guidelines" },
      { icon: <FaStarOfLife className="text-yellow-500"/>, text: "Timeline of relief & progress indicators" },
      { icon: <FaFilePdf/>, text: "4-5 pages detailed report" }
    ]
  },
  {
    icon: <FaStarOfLife className="text-yellow-500"/>,
    title: "Advanced Dosha Healing Report",
    desc: "Designed for those facing long-term challenges and repetitive life obstacles",
    price: "₹1400",
    includes: [
      { icon: <FaStarOfLife className="text-orange-500"/>, text: "Complete dosha analysis of all divisional charts" },
      { icon: <FaSun className="text-yellow-500"/>, text: "House-wise & planet-wise impact explanation" },
      { icon: <FaLeaf className="text-green-500"/>, text: "Detailed remedies (Mantra + Pooja + Yantra + Lifestyle Recommendations)" },
      { icon: <FaGem className="text-purple-500"/>, text: "2 Gemstone recommendations & wearing guidelines + mantras for re-energizing them" },
      { icon: <FaCheckSquare className="text-green-500"/>, text: "Do’s & Don’ts for planetary balancing" },
      { icon: <FaFilePdf/>, text: "5-6 pages detailed report" }
    ]
  },
  {
    icon: <FaCrown className="text-red-600"/>,
    title: "Premium Karmic Dosha & Remedies Plan",
    desc: "The most comprehensive healing plan for deep-rooted karmic doshas and major planetary imbalances",
    price: "₹1800",
    includes: [
      { icon: <FaMoon className="text-orange-300"/>, text: "Complete analysis of all doshas including hidden karmic doshas" },
      { icon: <FaSun className="text-yellow-500"/>, text: "Mahadasha, Antardasha, Transit-based dosha activation periods" },
      { icon: <FaStarOfLife className="text-orange-500"/>, text: "Tailored remedies: Pooja, Homam, Donations, Dietary & Behavioral Adjustments" },
      { icon: <FaBalanceScale className="text-purple-500"/>, text: "Personalized Yantra & Rudraksha Guidance" },
      { icon: <FaPhoneAlt className="text-red-500"/>, text: "Consultation Call (45 minutes) + 5 Pages PDF Report " },
    ]
  }
]

const DoshPackages = () => {
  return(
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-red-500 text-center">Choose Your Plan to Overcome The Challenges</h2>
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
                    <span className="flex-shrink-0 my-1 text-lg">{feat.icon}</span>
                    <span className="text-lg">{feat.text}</span>
                  </li> 
                ))}
              </ul>  

              <a href="https://forms.gle/vtjfTtHBymYojt1N8"
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
};

export default DoshPackages;