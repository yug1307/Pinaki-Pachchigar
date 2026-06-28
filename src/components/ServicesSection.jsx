import Topbar from "./Topbar";
import { FaSun, FaUserGraduate, FaHeart, FaMoneyBillWave, FaHeartbeat,
  FaGem, FaSortNumericUp, FaCalendarAlt, FaPrayingHands, FaHandPaper, 
  FaRadiation, FaBaby, FaClock, FaInfinity, FaBriefcase } from 'react-icons/fa';
import { Link } from "react-router-dom";

const services = [
  { 
    icon: <FaSun size={36} />, title: "Kundli/Birth Chart Analysis", 
    desc:"Detailed analysis of birth charts, planetary positions, and life predictions.", link:"/kundli" 
  },
  { 
    icon: <FaUserGraduate size={36} />, title: "Career & Education Counselling", 
    desc:"Identify the best career path and education stream based on your horoscope and planetary positions.", link:"/career" 
  },
  { 
    icon: <FaHeart size={36} />, title: "Kundli Matching/Relationship Counselling", 
    desc:"Match-making and relationship harmony analysis using Kundli.", link:"/matching" 
  },
  { 
    icon: <FaMoneyBillWave size={36} />, title: "Fortune/Wealth Report", 
    desc:"Predictions and remedies for financial stability and prosperity.", link:"/fortune" 
  },
  { 
    icon: <FaHeartbeat size={36} />, title: "Health & Wellness Report", 
    desc:"Understand health influences of planets and receive holistic remedies.", link:"/health"
  },
  { 
    icon: <FaGem size={36} />, title: "Gemstone Recommendation", 
    desc:"Suggests gemstones to balance planetary energies and improve luck.", link:"/gemstone" 
  },
  { 
    icon: <FaSortNumericUp size={36} />, title: "Numerology & Name Correction", 
    desc:"Enhance destiny through numbers, lucky names, and vibrations.", link:"/numerology-name-correction" 
  },
  {
    icon: <FaCalendarAlt size={36} />, title: "Transit & Annual Predictions", 
    desc:"Yearly or monthly reports to plan for success and avoid challenges.", link:"/transit-annual" 
  },
  { 
    icon: <FaPrayingHands size={36}/>, title:"Spiritual Remedies & Rituals (Vastu)", 
    desc:"Poojas, yantras, and mantras for dosha removal and peace.", link:"/spiritual-remedies"
  },
  { 
    icon: <FaHandPaper size={36}/>, title:"Palmistry (Hast Rekha Analysis)", 
    desc:"Reveals destiny and personality through palm lines and mounts.", link:"/palmistry"
  },
  { 
    icon: <FaRadiation size={36}/>, title:"Dosha Identification & Remedies", 
    desc:"Identify and resolve Mangal, Kaal Sarp, or Pitra Doshas, etc.", link:"/dosha-identification"
  },
  { 
    icon: <FaBaby size={36}/>, title:"Child Birth & Naming Astrology", 
    desc:"Predicts auspicious times and names for newborns based on Nakshatra.", link:"/child-birth-naming"
  },
  { 
    icon: <FaClock size={36}/>, title:"Muhurta (Auspicious Time Selection)", 
    desc:"Find the most favorable times for life events and decisions.", link:"/muhurta"
  },
  { 
    icon: <FaInfinity size={36}/>, title:"Karmic & Past Life Astrology", 
    desc:"Understand karmic lessons and past life influences.", link:"/karmic-past-life"
  },
  {  
    icon: <FaBriefcase size={36}/>, title:"Business & Startup Astrology", 
    desc:"Guide entrepreneurs for success through timing and planetary analysis.", link:"/business-startup"
  },
];

const ServicesSection = () => {
  return ( 
    <section className="bg-gray-900 py-11 px-5 w-auto text-center space-y-8">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:wght@900&display=swap');
      .ff{font-family:'Fraunces',serif}`}</style>

      <h2 className="ff text-4xl md:text-5xl text-white">Our <span className="text-amber-400">Services</span></h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border-2 border-teal-500 transition transform hover:-translate-y-2">
              
            <div className="flex flex-col items-center text-blue-600">{service.icon}</div>
            <h3 className="text-lg my-2 text-white font-semibold">{service.title}</h3>
            <div className="text-gray-400">{service.desc}</div>
              
            <Link to={service.link} className="inline-block border border-white/50 hover:border-rose-400 w-1/2 py-2 my-3 rounded-md">
              <div className="text-white text-center font-semibold">Get Now</div>
            </Link>
          </div>
        ))}
      </div>
    </section> 
  );
}

export default ServicesSection;
