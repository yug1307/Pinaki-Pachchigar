import React from 'react'
import Topbar from '../components/Topbar'
import FooterOne from '../components/FooterOne'
import { FaBriefcase, FaChartLine, FaClock, FaGraduationCap, FaHandsHelping, FaRegLightbulb } from 'react-icons/fa'
import CareerPackages from './packages/CareerPackages'
// import careerBg from '../assets/career-bg.jpg'
 
const features = [
  {
    icon: <FaGraduationCap size={36}/>,
    text: "Personalized guidance for educational stream and subject selection"
  },
  {
    icon: <FaBriefcase size={36}/>,
    text: "Career direction based on planetary strengths and yogas"
  },
  {
    icon: <FaChartLine size={36}/>,
    text: "Timing of career success and promotion opportunities"
  },
  {
    icon: <FaClock size={36}/>,
    text: "Identify favorable periods for job change or higher studies"
  },
  {
    icon: <FaRegLightbulb size={36}/>,
    text: "Reveal hidden talents and purpose aligned with your horoscope"
  },
  {
    icon: <FaHandsHelping size={36}/>,
    text: "Practical remedies for achieving stability and growth"
  }
]

const includes = [
  { text: "Avoid wrong career or academic choices early on" },
  { text: "Gain clarity on your life’s professional direction" },
  { text: "Plan higher studies or job changes at the right planetary period" },
  { text: "Align your passion with purpose for lasting success" },
  { text: "Receive astrological remedies to remove obstacles in growth" },
]

const CareerPage = () => {
  return (
    <>
    <Topbar/>
    {/* Header Section */}
      <header 
        className="lg:h-[125vh] h-auto py-10 px-4 object-cover bg-cover bg-center bg-no-repeat space-y-6 flex flex-col justify-center"
        style={{backgroundImage: `url('/images/career-bg.jpg')`, fontFamily: `serif`}}>
 
        <section className="text-center space-y-2 px-4">
          <h1 className="text-4xl font-bold text-orange-500">Career & Education Counselling</h1>
          <div className="text-lg text-green-500">Discover your true professional path and academic potential through astrological insights</div>
        </section> 

        {/* Intro */}
        <section className="mx-5 text-center text-lg text-white space-y-8">
          <p>Choosing the right career path is one of the most significant decisions in life, and astrology 
            can be a guiding light in this journey. Your birth chart, or Kundli, reveals your natural talents, 
            inclinations, and the planetary energies that shape your ambitions and skills. Through careful analysis,
            astrology helps you understand not only what you’re good at but also what you’re meant to pursue 
            — the field where your efforts will bring both success and fulfillment.</p>

          <p>In today’s fast-paced world, students and professionals alike often struggle with confusion and external pressures. 
            Whether it’s selecting the right stream after school, choosing a college major, or deciding on a career shift, 
            uncertainty can create stress and doubt. By aligning your career path with your astrological blueprint, you 
            gain clarity on your strengths, weaknesses, and the opportunities best suited for your growth. 
            It’s not about predicting the future — it’s about planning it wisely with cosmic insight.</p>
            
          <p>Every individual is born with unique capabilities and planetary influences that shape their 
            career and education path. Through <span className="text-sky-600 font-semibold">Career & Education Counselling</span>, 
            astrology helps you identify your innate potential, best-fit professions, and ideal time frames 
            for studies or career moves.</p>

          <p>With over <span className="font-semibold">35 years of experience</span> and <span className="font-semibold">250,000+ consultations</span>, I combine traditional Vedic astrology 
            with modern psychological understanding to provide personalized guidance for education and career 
            success. My goal is to help you make confident, informed choices that resonate with your true purpose.
            Every session is focused on self-awareness, direction, and empowerment — ensuring that your career 
            journey aligns with both your potential and your passion.
          </p> 
        </section>

        {/* Call to Action */}
        <div className="flex flex-col items-center text-white text-center space-y-3">
          <p className="text-lg">🌠 Take control of your career destiny today.</p>

          <a href="https://forms.gle/k1Dm54dHJyJP5jzg7" 
            className="bg-green-700 font-semibold py-3 px-6 rounded-full">
            📞 Get Your Personalized Career Report Now
          </a>
        </div>
      </header> 
  
      {/* Why It's Important */}
      <section className="py-12 px-4" style={{ background: "linear-gradient(135deg,#1a0a2e,#16213e,#0f3460,#1a2a1a)", fontFamily: "serif" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:wght@300;400&display=swap');
          .ttl{background:linear-gradient(90deg,#F59E0B,#FCD34D,#F59E0B);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:sh 4s linear infinite}`}
        </style>

        <div className="space-y-6">
          <h2 className="ttl text-3xl font-semibold text-center">Why Career Astrology Matters</h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 text-gray-400 text-lg max-w-5xl mx-auto gap-5">
            {includes.map((incl, index) => (
            
              <li key={index} className="text-gray-400">              
                <span className="text-lg">✅ {incl.text}</span>
              </li> 
            ))}
          </ul> 
        </div> 
        
        {/* What You’ll Get */}
        <div className="space-y-6 my-10">
          <h2 className="ttl text-2xl font-semibold text-center">What You’ll Receive</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6">
            {features.map((feature, index) => (
            
              <div
                key={index}
                className="flex flex-col items-center gap-3 bg-white/10 p-4 rounded-xl shadow-lg hover:scale-105 transition">

                <div className="text-2xl">{feature.icon}</div>
                <p className="text-lg text-gray-400 text-center">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        <CareerPackages/>
      </section>
    <FooterOne/>
    </>
  )
}

export default CareerPage 
