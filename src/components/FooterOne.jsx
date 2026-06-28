import { Link } from "react-router-dom";

const services = [
  { title: "Kundli/Birth Chart Analysis", link:"/kundli" },
  { title: "Career & Education Counselling", link:"/career" },
  { title: "Kundli Matching/Relationship Counselling", link:"/matching" },
  { title: "Fortune/Wealth Report", link:"/fortune" },
  { title: "Health & Wellness Report", link:"/health" },
  { title: "Gemstone Recommendation", link:"/gemstone" },
  { title: "Numerology & Name Correction", link:"/numerology-name-correction" },
  { title: "Transit & Annual Predictions", link:"/transit-annual" },
  { title:"Spiritual Remedies & Rituals (Vastu)", link:"/spiritual-remedies" },
  { title:"Palmistry (Hast Rekha Analysis)", link:"/palmistry" },
  { title:"Dosha Identification & Remedies", link:"/dosha-identification" },
  { title:"Child Birth & Naming Astrology", link:"/child-birth-naming" },
  { title:"Muhurta (Auspicious Time Selection)", link:"/muhurta" },
  { title:"Karmic & Past Life Astrology", link:"/karmic-past-life" },
  { title:"Business & Startup Astrology", link:"/business-startup" }
];
 
const FooterOne = () =>{
  return(
    <>  
    <footer className="bg-slate-950 text-gray-300">
      <style>{`.pd{font-family:'Playfair Display',serif} .nl:hover::after{transform:scaleX(1)}`}</style>
      <section className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 px-5 gap-8">
        
        {/* Logo */}
        <div className="space-y-2">
          <div className="pd text-2xl text-white tracking-widest uppercase">
            Pin<span className="text-amber-400">aki</span> Pachchigar
          </div>

          <p className="">
            Empowering youth and individuals through astrology and self-awareness — offering personalized guidance on career, 
            relationships, health, and growth to help people overcome challenges and live with purpose and wisdom.
          </p> 
        </div>

        {/* Our Services */}
        <div className="space-y-2">
          <h2 className="text-2xl text-white font-semibold">Our Services</h2>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((service, index) => (

              <li key={index} className="text-md">
                <Link to={service.link}>🔹{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bottom */}
      <div className="border-t border-gray-700"></div>

      <div className="py-12 text-center text-md">© {new Date().getFullYear()} Pinaki Pachchigar. All Rights Reserved</div>
    </footer>
    </>
  )
}

export default FooterOne