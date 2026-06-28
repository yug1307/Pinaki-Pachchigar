import React from "react";
import { FaBalanceScale, FaBrain, FaClock, FaDotCircle, FaFileAlt, FaGem, FaGlobeAsia, FaHeartbeat, 
  FaHome, FaInfinity, FaLeaf, FaOm, FaPrayingHands, FaRegGem, FaRegSun, FaSpa, 
  FaStar, FaStarOfLife, FaStethoscope, FaSyncAlt, FaUserMd, FaVideo} from "react-icons/fa";

const packages = [
  {
    title: "Basic Health Insight",
    price: "₹600",
    icon: <FaHeartbeat className="text-green-600" />,
    includes: [
      { icon: <FaStethoscope/> , text: "Basic Health Overview" },
      { icon: <FaRegSun/> , text: "Key Planetary Influences" },
      { icon: <FaLeaf/> , text: "3 Lifestyle Suggestions" },
      { icon: <FaFileAlt/> , text: "PDF report (2-3 pages)" }
    ],
    desc: "📘 Quick yet accurate - perfect for your step towards wellness"
  },
  { 
    title: "Mind–Body Balance Report",
    price: "₹900",
    icon: <FaLeaf className="text-green-600" />,
    includes: [
      { icon: <FaHome/>, text: "Complete analysis of health houses (1st, 6th, 8th)" },
      { icon: <FaBrain/>, text: "Mind–body connection & stress indicators" },
      { icon: <FaOm/>, text: "Remedies for emotional and mental harmony" },
      { icon: <FaSpa/>, text: "Personalized yoga and diet advice" },
      { icon: <FaFileAlt/>, text: "PDF report (5 pages)" }
    ],
    desc: "🧘 Find peace through astrological healing and inner balance."
  },
  {
    title: "Advance Healing Report",
    price: "₹1200",
    icon: <FaRegGem className="text-green-600" />,
    includes: [
      { icon: <FaSyncAlt/>, text: "In-depth health & energy cycle analysis" },
      { icon: <FaGlobeAsia/>, text: "Detailed planetary influences and time periods of healing" },
      { icon: <FaDotCircle/>, text: "Chakra and dosha balance insights" },
      { icon: <FaGem/>, text: "Gemstone and mantra recommendations" },
      { icon: <FaVideo/>, text: "Video consultation (15 min)" },
      { icon: <FaFileAlt/>, text: "PDF report (10 pages)" }
    ],
    desc: "💎 Discover your healing rhythm and regain natural balance"
  },
  {
    title: "Complete Wellness Report (Blueprint)",
    price: "₹1800",
    icon: <FaStarOfLife className="text-green-600" />,
    includes: [
      { icon: <FaStar/>, text: "Comprehensive health & wellness horoscope" },
      { icon: <FaClock/>, text: "Transit-based predictions for health phases" },
      { icon: <FaBalanceScale/>, text: "Past-life karmic health influences" },
      { icon: <FaPrayingHands/>, text: "Personalized meditation and energy healing guide" },
      { icon: <FaUserMd/>, text: "1-on-1 consultation (30 min)" },
      { icon: <FaInfinity/>, text: "Lifetime remedial guidance" },
      { icon: <FaFileAlt/>, text: "PDF report (12–15 pages)" },
    ],
    desc: "🌟 A complete journey toward holistic well-being and spiritual vitality"
  },
]

const HealthPackages = () =>{
  return ( 
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-center text-red-600">Choose Your Health Report Package</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {packages.map((pkg, index) => (

          <div 
            key={index}
            className="bg-white/10 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform 
            hover:-translate-y-2 border-2 border-red-500 hover:border-sky-500">
            
            <div className="text-center space-y-3">  
              <div className="animate-pulse flex justify-center text-3xl">{pkg.icon}</div>
              <h3 className="text-2xl font-semibold text-white">{pkg.title}</h3>
              <p className="text-xl font-bold text-red-600">{pkg.price}</p>

              <ul className="text-left space-y-2">
                {pkg.includes.map((incl, index) => (
                   
                  <li key={index} className="flex items-center gap-2 text-lg text-gray-400">
                    <span>{incl.icon}</span>
                    <span>{incl.text}</span>
                  </li> 
                ))}
              </ul>

              <p className="flex flex-col items-start text-cyan-400">{pkg.desc}</p>

              <a
                href="https://forms.gle/AXDAg8QtLKtqYL5R8"
                className="inline-block border border-white text-orange-500 font-semibold py-2 px-6 rounded-full hover:shadow-lg transition duration-300"
              >
                Get Now
              </a>
            </div>
          </div>
        ))}
      </div>      
    </section>
  );  
};

export default HealthPackages