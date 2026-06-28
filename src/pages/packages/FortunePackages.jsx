import React from "react";
import {
  FaRupeeSign,
  FaGem,
  FaChartLine,
  FaLightbulb,
  FaBalanceScale,
  FaRegStar,
  FaCrown,
  FaGlobeAsia,
  FaHandsHelping,
} from "react-icons/fa";

const packages = [ 
  {
    title: "Basic Fortune Insight",
    price: "₹1000",
    icon: <FaChartLine className="text-red-600" />,
    features: [
      { icon: <FaRupeeSign className="text-amber-500" />, text: "Personalized Wealth Analysis" },
      { icon: <FaChartLine className="text-rose-500" />, text: "Planetary Period (Dasha) Overview" },
      { icon: <FaGlobeAsia className="text-sky-500" />, text: "Favorable business directions" },
      { icon: <FaLightbulb className="text-yellow-500" />, text: "Basic remedies for financial stability" }
    ],
  },
  {
    title: "Advanced Wealth Report",
    price: "₹1600",
    icon: <FaGem className="text-red-600" />,
    features: [
      { icon: <FaBalanceScale className="text-indigo-500" />, text: "Detailed Dhana & Raj Yoga analysis" },
      { icon: <FaRupeeSign className="text-emerald-500" />, text: "Career and investment guidance" },
      { icon: <FaHandsHelping className="text-pink-500" />, text: "Property and inheritance insights" },
      { icon: <FaGlobeAsia className="text-sky-500" />, text: "Personalized gemstone recommendations" },
      { icon: <FaLightbulb className="text-yellow-400" />, text: "Spiritual guidance for prosperity"}
    ],
  },
  {
    title: "Premium Fortune Mastery",
    price: "₹2000",
    icon: <FaCrown className="text-red-600" />,
    features: [ 
      { icon: <FaRegStar className="text-yellow-500" />, text: "Complete wealth potential decoding" },
      { icon: <FaChartLine className="text-rose-500" />, text: "Comprehensive 30-page PDF report" },
      { icon: <FaRupeeSign className="text-amber-500" />, text: "Foreign earnings & hidden income sources" },
      { icon: <FaBalanceScale className="text-indigo-500" />, text: "Customized remedies (Gemstones, Mantras, Donations)" },
      { icon: <FaHandsHelping className="text-pink-500" />, text: "1-on-1 video consultation for financial strategy" }
    ],
  },
];

const FortunePackages = () => { 
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-center text-red-600">Choose Your Fortune Report Package</h2>
 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-6xl mx-auto">
        {packages.map((pkg, index) => (

          <div
            key={index} 
            className="bg-white/10 px-4 py-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform 
            hover:-translate-y-2 border-2 border-red-600 hover:border-sky-500"> 

            <div className="text-center space-y-3">  
              <div className="animate-pulse flex justify-center text-3xl">{pkg.icon}</div>
              <h3 className="text-2xl font-semibold text-white">{pkg.title}</h3>
              <p className="text-xl font-bold text-red-600">{pkg.price}</p>

              <ul className="text-gray-700 text-left">
                {pkg.features.map((feature, index) => (

                  <li key={index} className="flex gap-2 space-y-2">
                    <span className="flex-shrink-0 my-3 text-xl">{feature.icon}</span>
                    <span className="text-gray-400 text-lg">{feature.text}</span>
                  </li> 
                ))}
              </ul>

              <a href="https://forms.gle/5iDQrEcR62KJQL716"
                className="inline-block border border-white text-orange-500 font-semibold py-2 px-6 rounded-full hover:shadow-lg transition duration-300">
                Get Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FortunePackages;
