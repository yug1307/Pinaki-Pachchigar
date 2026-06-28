import React from "react";
import {
  FaHeart,
  FaUserFriends,
  FaStar,
  FaRing,
  FaGem,
  FaBalanceScale,
  FaRegCalendarAlt,
  FaHandHoldingHeart,
  FaClock,
  FaRegFileAlt,
} from "react-icons/fa";

const packages = [
  {
    title: "Basic Compatibility Check",
    price: "₹500",
    icon: <FaStar className="text-yellow-500" />,
    features: [
      { icon: <FaHeart size={20}/>, text: "Guna Milan (Ashta Koota) analysis" },
      { icon: <FaBalanceScale size={20}/>, text: "Compatibility score out of 36 points" },
      { icon: <FaRing size={20}/>, text: "Mangal Dosha evaluation" },
      { icon: <FaRegFileAlt size={20}/>, text: "Email summary with compatibility report" },
    ],
    duration: "15–20 minutes (Online Session)",
  },
  {
    title: "Detailed Kundli Matching Report",
    price: "₹800",
    icon: <FaRing className="text-pink-500" />,
    features: [
      { icon: <FaStar size={20}/>, text: "Detailed Guna Milan & planetary alignment study" },
      { icon: <FaBalanceScale size={20}/>, text: "Dosha detection (Mangal, Nadi, Bhakoot)" },
      { icon: <FaGem size={20}/>, text: "Remedies for mismatches (if any)" },
      { icon: <FaRegFileAlt size={20}/>, text: "Personalized compatibility report (PDF format)" },
      { icon: <FaHeart size={20}/>, text: "Strength of love, trust & emotional bonding" },
    ],
    duration: "30 minutes (Online/Offline Session)",
  },
  {
    title: "Relationship Counselling Session",
    price: "₹1200",
    icon: <FaHandHoldingHeart className="text-red-500" />,
    features: [
      { icon: <FaUserFriends size={20}/>, text: "Comprehensive analysis of both birth charts" },
      { icon: <FaHeart size={20}/>, text: "Karmic & emotional compatibility insights" },
      { icon: <FaGem size={20}/>, text: "Healing remedies & gemstone suggestions" },
      { icon: <FaClock size={20}/>, text: "Practical counselling for harmony & peace" },
      { icon: <FaBalanceScale size={20}/>, text: "Conflict resolution through astrology" },
    ],
    duration: "45 minutes (Online/Offline Session)",
  },
  {
    title: "Premium Love & Marriage Harmony Package",
    price: "₹1500",
    icon: <FaGem className="text-purple-500" />,
    features: [
      { icon: <FaRing size={20}/>, text: "Complete Guna Milan + planetary matching" },
      { icon: <FaRegCalendarAlt size={20}/>, text: "Timing of marriage (auspicious periods)" },
      { icon: <FaBalanceScale size={20}/>, text: "Spiritual & psychological compatibility study" },
      { icon: <FaGem size={20}/>, text: "Personalized remedies, mantras & yantras" },
      { icon: <FaHandHoldingHeart size={20}/>, text: "One follow-up counselling session" },
    ],
    duration: "60 minutes (Online/Offline Session)",
  },
]

const MatchingPackages = () => { 
  return (
    <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-red-600">Kundli Matching & Relationship Counselling Packages</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-8">
          {packages.map((pkg, i) => (

            <div
              key={i}
              className="bg-white/10 p-6 rounded-2xl hover:shadow-xl border-2 border-red-500 text-center
              space-y-3 hover:border-sky-500 hover:-translate-y-3 transform transition duration-300">

              <div className="flex justify-center text-4xl">{pkg.icon}</div>
              <h3 className="text-2xl font-semibold text-white">{pkg.title}</h3>
              <p className="text-xl font-bold text-red-600">{pkg.price}</p>

              <ul className="text-gray-400 text-left space-y-2">
                {pkg.features.map((feat, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-600 py-1">{feat.icon}</span>
                    <span className="text-lg">{feat.text}</span>
                  </li>
                ))}
              </ul> 

              <p className="text-cyan-500">{pkg.duration}</p>

              <a href="https://forms.gle/uTcYQuLfx7zrYc2p7" 
                className="inline-block border border-white text-orange-500 font-semibold py-2 px-5 rounded-full transition">
                  Book Now
              </a>
            </div>
          ))}
        </div>
    </section>
  );
};

export default MatchingPackages;
