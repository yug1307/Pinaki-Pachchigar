import React from 'react'
import Topbar from '../components/Topbar'
import FooterOne from '../components/FooterOne'
import { FaBalanceScale, FaBookOpen, FaChartLine, FaDollarSign, FaGem, FaHandsHelping, 
  FaLightbulb, FaRegStar, FaRupeeSign, FaSearchDollar, FaShieldAlt } from 'react-icons/fa'
import FortunePackages from './packages/FortunePackages'

const getItems = [
  { icon: <FaChartLine/>, text:"Your wealth potential as per your birth chart" },
  { icon: <FaLightbulb/>, text:"Periods of growth, success, and financial transformation" },
  { icon: <FaBalanceScale/>, text:"Favorable business or investment areas" },
  { icon: <FaRegStar/>, text:"Financial challenges and planetary remedies" },
  { icon: <FaRupeeSign/>, text:"Best career timing for promotions and gains" },
  { icon: <FaGem/>, text:"Insights into property, inheritance, or sudden wealth" },
  { icon: <FaBookOpen/>, text:"Spiritual aspects of wealth and karma" },
  { icon: <FaShieldAlt/>, text:"Wealth Stability and Long-Term Security" },
  { icon: <FaSearchDollar/>, text:"Hidden Income Sources and Unexpected Gains" },
  { icon: <FaHandsHelping/>, text:"Charity and Spiritual Wealth" }
]

const includedItems = [
  "Detailed analysis of 2nd, 6th, 9th, 10th, and 11th houses",
  "Study of Dhana Yogas and Raj Yogas",
  "Personalized planetary period (Dasha) forecast",
  "Remedies through gemstones, mantras & donations",
  "15 pages detailed PDF report",
  "Optional one-on-one consultation for personalized guidance",
];

const FortunePage = () => {
  return ( 
    <>
    <Topbar/>
      {/* Header Section */} 
      <header className="lg:h-[120vh] h-auto py-6 object-cover bg-cover bg-center bg-no-repeat 
        space-y-6 flex flex-col justify-center"
        style={{backgroundImage: `url('/images/fortune-bg.png')`, fontFamily: `serif`}}>
    
        <section className="text-white text-center space-y-2 px-4">
          <h1 className="text-4xl font-bold text-orange-500">Fortune/Wealth Report</h1>

          <div className="text-lg">Wealth is written in your stars — discover how to align with your
          destiny and invite abundance into your life.</div>
        </section>

        {/* Intro */}
        <section className="mx-5 text-lg text-center text-white space-y-8">
          <p>Every individual has unique planetary alignments that define their capacity for wealth, prosperity, 
            and success. Your Fortune & Wealth Report decodes these cosmic patterns to reveal the true potential 
            hidden in your birth chart. This analysis focuses on the houses of income, career, investments, 
            and luck — offering you a complete understanding of your financial strengths and challenges.</p>

          <p>Through Vedic Astrology, I assess the planetary periods (Dashas), transits (Gochar), 
            and combinations (Yogas) that directly influence wealth accumulation and losses. You’ll discover when 
            fortune will favor you most, what areas of business or career suit your energy, and which investments 
            align with your destiny.</p>

          <p>With more than <span className="font-semibold">35 years of astrological experience</span> and 
            <span className="font-semibold"> 2.5 lakh+ consultations</span>, my insights go beyond mere predictions. 
            I blend ancient astrological wisdom with practical financial perspective — helping you take informed 
            decisions that support both spiritual and material growth. Whether you’re planning a new venture, 
            recovering from setbacks, or seeking long-term prosperity, this report will empower you with clarity 
            and direction for a secure and abundant future.</p>
        </section>

        {/* CTA */}
        <div className="text-center text-white space-y-3 flex flex-col items-center">
          <p className="text-lg italic">💵 “Wealth is not just earned — it is aligned with destiny”</p>
          
          <a href="https://forms.gle/5iDQrEcR62KJQL716"
            className="bg-green-700 font-semibold py-3 px-8 rounded-full w-1/8">
            💸 Book Your Wealth Consultation
          </a>
        </div>
      </header>
 
      {/* What You'll Learn */} 
      <section className="py-12 px-4" style={{ background: "linear-gradient(135deg,#1a0a2e,#16213e,#0f3460,#1a2a1a)", fontFamily: "serif" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:wght@300;400&display=swap');
          .ttl{background:linear-gradient(90deg,#F59E0B,#FCD34D,#F59E0B);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:sh 4s linear infinite}
          @keyframes sh{to{background-position:200% center}}.cd{transition:all .35s ease}.cd:hover{transform:translateY(-6px) scale(1.02)}`}
        </style>
        
        <div className="space-y-4">
          <h2 className="ttl text-3xl font-semibold text-center">What You Get</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 px-4 gap-3">
            {getItems.map((item, i) => (
              
              <div
                key={i}
                className="flex flex-col gap-3 bg-white/10 p-5 rounded-lg transition transform hover:-translate-y-4">

                <div className="text-rose-600 text-3xl animate-pulse">{item.icon}</div>
                <p className="text-gray-400 text-center text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
          
          <div className="py-10"></div>

        {/* What's Included */}
        <div className="space-y-4">
          <h2 className="ttl text-2xl font-semibold text-center">What’s Included in the Fortune Report</h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-5 text-gray-400 text-lg">
            {includedItems.map((point, i) => (

              <li key={i}>✅ {point}</li>
            ))}
          </ul>
        </div>
          
          <div className="py-10"></div>

        {/* CTA */} 
        <div className="border border-white p-6 rounded-xl flex flex-col items-center space-y-4">
          <p className="text-xl text-white text-center italic">“Wealth is not just earned — it is aligned with destiny.”</p>
          
          <a href="https://forms.gle/5iDQrEcR62KJQL716"
            className="bg-green-700 text-white text-center font-semibold py-3 px-8 rounded-full w-1/8">
            📞 Book Your Wealth Consultation
          </a>
        </div>
          
          <div className="py-10"></div>
        <FortunePackages/>
      </section>
    <FooterOne/>
    </> 
  )
}

export default FortunePage