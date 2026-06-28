import React from "react";
import { FaStar, FaGem, FaCrown } from "react-icons/fa";

const packages = [
  {
    title: "Basic Kundli Report",
    icon: <FaStar size={36} className="text-blue-600" />,
    price: "₹800",
    features: [
      "Comprehensive Birth Chart Analysis",
      "Planetary positions and effects",
      "Basic career, relationship, and health overview",
      "30-min online consultation"
    ],
    color: "border-red-500 bg-white/10 hover:border-sky-500"
  },
  {
    title: "Advanced Kundli Consultation",
    icon: <FaGem size={36} className="text-green-600"/>,
    price: "₹1200",
    features: [
      "Complete Vedic Analysis (Lagna, Navamsa, Moon chart)",
      "In-depth life pattern insights",
      "Gemstone and remedy recommendations",
      "1-hour online consultation"
    ],
    color: "border-red-500 bg-white/10 hover:border-sky-500"
  },
  {
    title: "Premium Life Path Report",
    icon: <FaCrown size={36} className="text-yellow-600" />,
    price: "₹1500",
    features: [
      "All Advanced Kundli features included",
      "Personalized solutions for major life challenges",
      "Upcoming 5-year prediction & planetary guidance",
      "90-min 1-on-1 online consultation"
    ],
    color: "border-red-500 bg-white/10 hover:border-sky-500"
  }
];

const KundliPackages = () => {
  return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-red-600">Kundli / Birth Chart Packages</h2>

        <p className="text-yellow-400 text-lg"> 
          Choose the right package that aligns with your needs and discover
          the secrets of your destiny with personalized astrological guidance
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {packages.map((pkg, index) => (

          <div 
            key={index}
            className={`border-2 ${pkg.color} rounded-2xl shadow-md p-6 flex flex-col items-center transition-transform hover:-translate-y-2`}>
            
            <div className="my-2">{pkg.icon}</div>
            <h3 className="text-2xl font-semibold text-white">{pkg.title}</h3>
            <p className="text-xl font-bold text-red-600 my-4">{pkg.price}</p>

            <ul className="text-gray-400 text-lg space-y-2">
              {pkg.features.map((feature, i) => (
                <li key={i}>✅ {feature}</li> 
              ))}
            </ul>
 
            <a
              href="https://forms.gle/P4jSVzHJANeZHUdL8"
              className="inline-block border border-white text-orange-500 font-semibold my-4 py-2 px-6 rounded-full transition"
            >
              Get Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KundliPackages;
