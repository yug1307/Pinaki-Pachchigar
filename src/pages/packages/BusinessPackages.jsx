import React from "react";
import { FaUserGraduate, FaBriefcase, FaGem, FaChalkboardTeacher } from "react-icons/fa";

const packages = [
  {
    title: "Startup Direction Session",
    price: "₹900",
    icon: <FaUserGraduate className="text-5xl text-yellow-400" />,
    features: [
      { text: "Basic business suitability analysis from Kundli" },
      { text: "Best industry & business model suggestions" },
      { text: "Business vs Job potential evaluation" },
      { text: "Identification of growth opportunities" },
      { text: "Basic remedies for stability and success" },
      { text: "15-minute consultation" },
    ],
    bestFor: "New founders, freelancers, side-hustlers, students",
  },
  {
    title: "Business Growth Blueprint",
    price: "₹1500",
    icon: <FaChalkboardTeacher className="text-5xl text-blue-400" />,
    features: [
      { text: "Detailed Business & Financial Potential Analysis" },
      { text: "Best time to launch, invest, or expand" },
      { text: "Profit Cycles & Challenge Periods" },
      { text: "Business Names Suggestions (based on Numerology)" },
      { text: "Risk Analysis & Obstacle Identification" },
      { text: "Personalized Remedies + Gemstone Suggestions" },
      { text: "30-minute consultation" },
    ],
    bestFor: "Growing Businesses, Service Providers, Digital Entrepreneurs",
  },
  {
    title: "Premium Business Success Report",
    price: "₹2200",
    icon: <FaBriefcase className="text-5xl text-green-400" />,
    features: [
      { text: "Complete business astrology analysis" },
      { text: "Industry, niche & market alignment" },
      { text: "Partnership compatibility evaluation" },
      { text: "Muhurta for launch / expansion" },
      { text: "Revenue growth timing & opportunity windows" },
      { text: "Business Vastu recommendations" },
      { text: "Detailed written report (PDF)" },
      { text: "45-minute consultation" },
    ],
    bestFor: "Established Business Owners and Startup Teams",
  },
  {
    title: "Elite Founder Cosmic Strategy",
    price: "₹3500",
    icon: <FaGem className="text-5xl text-purple-400" />,
    features: [
      { text: "Everything included in Premium package" },
      { text: "1–3 year business roadmap" },
      { text: "Expansion & investment timing strategy" },
      { text: "Brand numerology & identity optimization" },
      { text: "Personalized business remedies & rituals" },
      { text: "Leadership and decision-making guidance" },
      { text: "Priority consultation + follow-up support (7 days)" },
      { text: "Premium written action report" }
    ],
    bestFor: "CEOs, Startup Founders, Agencies, Entrepreneurs Scaling Operations",
  },
] 

const BusinessPackages = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-center text-red-700">Career & Education Counselling Packages</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-8">
        {packages.map((pkg, i) => (

          <div  
            key={i} 
            className="bg-white/10 p-6 rounded-2xl shadow-lg border-2 border-red-500 text-center
            hover:border-sky-500 transition transform hover:-translate-y-2 duration-300">
            
            <div className="flex justify-center">{pkg.icon}</div>
            <h3 className="text-2xl font-semibold text-white my-4">{pkg.title}</h3>
            <p className="text-xl font-bold text-red-600 my-4">{pkg.price}</p>

            <ul className="text-left space-y-2"> 
              {pkg.features.map((feat, index) => (

                <li key={index} className="flex items-start gap-2 text-gray-400">
                  {/* <span className="text-red-600 my-1">{feat.icon}</span> */}
                  <span className="text-lg">🌟 {feat.text}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-left text-white font-semibold text-lg">Best For: </p>
            <div className="text-cyan-400 text-center">{pkg.bestFor}</div>

            <a href="#" 
              className="inline-block border border-white text-orange-500 font-semibold py-2 px-5 my-2 rounded-full">
              Get Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessPackages;
