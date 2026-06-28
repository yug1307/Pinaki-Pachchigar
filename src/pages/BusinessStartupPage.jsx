import React from 'react'
import Topbar from '../components/Topbar'
import FooterOne from '../components/FooterOne'
import BusinessPackages from './packages/BusinessPackages'

const decisions = [
  "Choosing the right business idea",
  "Selecting an auspicious business name",
  "Deciding launch dates & timings",
  "Analyzing partnerships",
  "Identifying profitable industries",
  "Predicting growth phases and challenges"
]

const learnItems = [
  { 
    icon: "💼", title: "Business Suitability & Industry Selection", 
    text: "Identify which industries, fields, or business models are most aligned with your birth chart." 
  },
  { icon: "📊", title: "Profitability & Growth Potential", 
    text: "Understand your earning potential, financial cycles, and future expansion possibilities." 
  },
  { icon: "📅", title: "Best Time to Start or Expand", 
    text: "Get accurate Muhurta (auspicious timing) for launching, investing, or scaling your business." 
  },
  { icon: "🧿", title: "Dosha & Risk Identification", 
    text: "Detect hidden obstacles, delays, or karmic blocks affecting your business journey." 
  },
  { icon: "🤝", title: "Partnership Compatibility", 
    text: "Analyze compatibility with business partners to ensure long-term harmony and success." 
  },
  { icon: "🏷️", title: "Business Name & Branding Numerology", 
    text: "Choose a powerful name aligned with success vibrations and numerology principles." 
  },
  { icon: "📈", title: "Financial & Investment Insights", 
    text: "Know when to invest, when to pause, and when to expand." 
  },
  { icon: "🔮", title: "Future Predictions", 
    text: "Understand upcoming opportunities, risks, and cycles in your business life." 
  }
]

const suitableFor = [
  "Startup founders",
  "Entrepreneurs planning a new venture",
  "Business owners facing losses or stagnation",
  "People confused about career vs business",
  "Those planning partnerships or investments",
  "Freelancers & digital entrepreneurs"
]

const receiveItems = [
  {
    title: "Personalized Business Analysis",
    desc: "Detailed business analysis based on your Kundli and planetary alignments."
  },
  {
    title: "Suitable Industries & Business Models",
    desc: "Recommendations for industries, niches, and business structures best suited to your astrological profile."
  },
  {
    title: "Best Launch Date & Timing",
    desc: "Auspicious Muhurta selection for starting, launching, or expanding your business."
  },
  {
    title: "Business Name Suggestions",
    desc: "Numerology-based business and brand name recommendations for success and prosperity."
  },
  {
    title: "Risk Analysis & Problem Areas",
    desc: "Identification of possible business obstacles, financial risks, and challenging periods."
  },
  {
    title: "Growth Roadmap",
    desc: "A strategic roadmap highlighting opportunities and growth phases for the next 1–3 years."
  },
  {
    title: "Written Summary / Report",
    desc: "A concise written report summarizing predictions, remedies, and business guidance."
  },
  {
    title: "Gemstone Recommendations",
    desc: "Personalized gemstone suggestions to strengthen beneficial planetary energies."
  },
  {
    title: "Mantras & Remedies",
    desc: "Spiritual remedies, rituals, and mantras to reduce obstacles and attract success."
  },
  {
    title: "Vastu Tips for Workspace",
    desc: "Vastu guidance and energy-balancing suggestions for office or workspace prosperity."
  }
]

const BusinessStartupPage = () => {
  return (
    <>
    <Topbar/>
      <header className="lg:h-[120vh] h-auto py-6 object-cover bg-cover bg-center bg-no-repeat 
        space-y-6 flex flex-col justify-center"
        style={{backgroundImage: `url('/images/fortune-bg.png')`, fontFamily: `serif`}}>
    
        <section className="text-white text-center space-y-2 px-4">
          <h1 className="text-4xl font-bold text-orange-500">Business & Startup Astrology</h1>

          <div className="text-lg">Align Your Business with Cosmic Timing for Growth, Stability & Success</div>
        </section>

        {/* Intro */}
        <section className="mx-5 text-lg text-center text-white space-y-8">
          <p>Success in business is not just about strategy—it’s also about timing, alignment, and energy.
            Through Business & Startup Astrology, you can make informed decisions by aligning your ventures with 
            favorable planetary influences, ensuring smoother growth, profitability, and long-term stability.</p>

          <p>With more than <span className="font-semibold">35 years of astrological experience</span> and 
            <span className="font-semibold"> thousands of successful consultations</span>, I help entrepreneurs, 
            startups, and business owners make <span className="font-semibold">powerful, data-backed and spiritually 
            aligned decisions</span> —right from idea validation to expansion.</p>
        </section>

        {/* CTA */}
        <div className="text-center text-white space-y-3 flex flex-col items-center">
          <p className="text-lg italic">“Don’t just start a business—start it at the right time, with the right energy”</p>
          
          <a href="https://forms.gle/5iDQrEcR62KJQL716"
            className="bg-green-700 font-semibold py-3 px-8 rounded-full w-1/8">
            📞 Consult now and build your business on a strong cosmic foundation
          </a>
        </div>
      </header>

      {/* What Is Business Astrology? */}
      <section className="py-12 px-4" style={{ background: "linear-gradient(135deg,#1a0a2e,#16213e,#0f3460,#1a2a1a)", fontFamily: "serif" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:wght@300;400&display=swap');
          .ttl{background:linear-gradient(90deg,#F59E0B,#FCD34D,#F59E0B);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:sh 4s linear infinite}
          @keyframes sh{to{background-position:200% center}}.cd{transition:all .35s ease}.cd:hover{transform:translateY(-6px) scale(1.02)}`}
        </style>

        <div className="border border-white p-6 rounded-xl space-y-4">
          <h2 className="ttl text-center font-bold text-3xl">What Is Business Astrology?</h2>

          <p className="text-lg text-white">Business Astrology combines <span className="font-semibold">Vedic Astrology, 
            Numerology, and Muhurta (timing)</span> to guide business-related decisions such as:</p>

          <ul className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-4 text-gray-400 text-lg">
            {decisions.map((dec, index) => (

              <li key={index}>✔️ {dec}</li>
            ))}
          </ul> 

            <div className="text-white text-center text-lg">It ensures your business operates in harmony with cosmic forces, not against them.</div>
        </div>

        {/* What You’ll Learn */}
        <div className="space-y-4 my-10">
          <h2 className="ttl text-center font-bold text-3xl">What You’ll Learn</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 gap-3">
            {learnItems.map((item, i) => (
              
              <div
                key={i}
                className="text-center gap-3 bg-white/10 p-5 rounded-lg transition transform hover:-translate-y-4">

                <div className="text-3xl animate-pulse">{item.icon}</div>
                <h3 className="text-white text-xl">{item.title}</h3>
                <div className="text-gray-400">{item.text}</div>

              </div>
            ))}
          </div>
        </div>

        {/* 🧠 Who Should Take This Consultation? */}
        <div className="space-y-4">
          <h2 className="ttl text-center font-bold text-3xl">Who Should Take This Consultation?</h2>

          <ul className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-4 text-gray-400 text-lg">
            {suitableFor.map((who, index) => (

              <li key={index}>✔️ {who}</li>
            ))}
          </ul>
        </div>

        {/* 🛠️ What You Will Receive */}
        <div className="space-y-4 my-10">
          <h2 className="ttl text-center font-bold text-3xl">What You Will Receive</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-5">
            {receiveItems.map((items, i) => (
              
              <div
                key={i}
                className="text-center gap-3 bg-white/10 p-5 rounded-lg transition transform hover:-translate-y-4">

                <h3 className="text-white text-xl">{items.title}</h3>
                <div className="text-gray-400">{items.desc}</div>

              </div>
            ))}
          </div>            
        </div>

        <BusinessPackages/>
      </section> 
    <FooterOne/>
    </>
  )
}

export default BusinessStartupPage