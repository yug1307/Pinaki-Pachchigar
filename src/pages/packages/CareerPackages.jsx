import React from "react";
import { FaUserGraduate, FaChartLine, FaBookOpen, FaBriefcase, FaRegStar, FaGem,
  FaGlobeAsia, FaLightbulb, FaChalkboardTeacher, FaClock, FaBullseye } from "react-icons/fa";

const packages = [
  {
    title: "Basic Career Insight",
    price: "₹400",
    icon: <FaUserGraduate className="text-5xl text-yellow-400" />,
    features: [
      { icon: <FaBookOpen size={20}/>, text: "Personalized analysis based on birth chart" },
      { icon: <FaRegStar size={20}/>, text: "Identification of talents and strengths" },
      { icon: <FaLightbulb size={20}/>, text: "Guidance on choosing right education stream" },
      { icon: <FaClock size={20}/>, text: "Quick email summary of recommendations" },
    ],
    duration: "15–20 minutes (Online Session) or a detailed 3 pages report",
  },
  {
    title: "Advanced Career Guidance",
    price: "₹700",
    icon: <FaChalkboardTeacher className="text-5xl text-blue-400" />,
    features: [
      { icon: <FaGlobeAsia size={20}/>, text: "Detailed planetary analysis influencing education" },
      { icon: <FaBullseye size={20}/>, text: "Identify most favorable career fields" },
      { icon: <FaChartLine size={20}/>, text: "Strengths, challenges & growth areas" },
      { icon: <FaUserGraduate size={20}/>, text: "Recommendations for higher education" },
      { icon: <FaRegStar size={20}/>, text: "Lucky periods for career decisions" },
    ],
    duration: "30 minutes (Online/Offline Session) or a detailed 6 pages report",
  },
  {
    title: "Professional Growth Consultation",
    price: "₹1000",
    icon: <FaBriefcase className="text-5xl text-green-400" />,
    features: [
      { icon: <FaChartLine size={20}/>, text: "In-depth career mapping through D-10 chart" },
      { icon: <FaBullseye size={20}/>, text: "Job change, promotion & stability analysis" },
      { icon: <FaGem size={20}/>, text: "Personalized remedies for success" },
      { icon: <FaRegStar size={20}/>, text: "Gemstone & mantra suggestions" },
      { icon: <FaLightbulb size={20}/>, text: "Work-life balance guidance" },
    ],
    duration: "45 minutes (Online/Offline Session) or a detailed 8 pages report",
  },
  {
    title: "Comprehensive Career & Education Package",
    price: "₹1200",
    icon: <FaGem className="text-5xl text-purple-400" />,
    features: [
      { icon: <FaGlobeAsia size={20}/>, text: "Detailed birth chart & planetary study" },
      { icon: <FaChartLine size={20}/>, text: "Education, career & finance analysis" },
      { icon: <FaClock size={20}/>, text: "Identify growth & transition periods" },
      { icon: <FaGem size={20}/>, text: "Personalized remedies, gemstones & yantras" },
      { icon: <FaChalkboardTeacher size={20}/>, text: "Follow-up consultation for review" },
    ],
    duration: "60 minutes (Online/Offline Session) or a detailed 10 pages report",
  },
] 

const CareerPackages = () => {
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
                  <span className="text-red-600 my-1">{feat.icon}</span>
                  <span className="text-lg">{feat.text}</span>
                </li>
              ))}
            </ul>

            <p className="my-2 text-cyan-400">{pkg.duration}</p>

            <a href="https://forms.gle/k1Dm54dHJyJP5jzg7" 
              className="inline-block border border-white text-orange-500 font-semibold py-2 px-5 my-2 rounded-full">
              Get Now
            </a>
          </div>
        ))}
        </div>
    </section>
  );
};

export default CareerPackages;
