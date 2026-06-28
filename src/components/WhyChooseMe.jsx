import React from "react";
import { FaAward, FaGlobe, FaSun, FaComments, FaHandsHelping, FaBalanceScale, FaLightbulb,
  FaHeartbeat, FaSmile, FaArrowUp } from "react-icons/fa";

const WhyChooseMe = () => {
  const reasons = [
    { icon: <FaAward />, text: "35+ years of Authentic Astrological Experience" },
    { icon: <FaGlobe />, text: "250,000+ successful consultations worldwide" },
    { icon: <FaSun />, text: "Expert in Vedic Astrology, Vastu Shastra, Numerology, and Gemology" },
    { icon: <FaComments />, text: "Highly accurate, personalized, and confidential readings" },
    { icon: <FaHandsHelping />, text: "Practical remedies and spiritual guidance — not superstition" },
    { icon: <FaBalanceScale />, text: "Blend of traditional wisdom and modern interpretation" },
    { icon: <FaLightbulb />, text: "Empathetic, honest, and client-focused approach" },
    { icon: <FaHeartbeat />, text: "Guidance for career, marriage, finance, and health" },
    { icon: <FaSmile />, text: "Thousands of satisfied and repeat clients across generations" },
    { icon: <FaArrowUp />, text: "Mission to empower individuals with self-awareness and purpose" },
  ];

return (
    <section className="py-10 px-4">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-yellow-500">Why Choose Me</h2>
        <p className="text-lg max-w-4xl mx-auto text-white/60">
          Trusted by thousands for over three decades, I combine deep astrological knowledge
          with compassion and modern insight to bring clarity and transformation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-5 max-w-6xl mx-auto">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center border-2 border-cyan-500 p-6 rounded-lg space-y-3 transition hover:-translate-y-2">
              
            <div className="text-red-600 text-4xl">{item.icon}</div>
            <p className="text-lg text-center font-medium text-white/60">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Decorative line */}
      <div className="border-t-4 border-red-500 w-64 mx-auto"></div>
    </section>
  );
};

export default WhyChooseMe;
