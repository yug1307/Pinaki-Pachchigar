import React from "react";
import Topbar from './Topbar'
import FooterOne from './FooterOne'
import WhyChooseMe from "./WhyChooseMe";

const About = () => {
  return (
    <>
      <Topbar/>
      <section className="py-12 px-4" style={{ background: "linear-gradient(135deg,#1a0a2e,#16213e,#0f3460,#1a2a1a)", fontFamily: "serif" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:wght@300;400&display=swap');
          .ttl{background:linear-gradient(90deg,#F59E0B,#FCD34D,#F59E0B);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:sh 4s linear infinite}
          @keyframes sh{to{background-position:200% center}}.cd{transition:all .35s ease}.cd:hover{transform:translateY(-6px) scale(1.02)}`}
        </style>

        {/* Header */}
        <div className="py-2 text-center">
          <h1 className="text-4xl font-bold my-3 ttl">About Me</h1>
          <p className="text-lg text-center mx-auto text-cyan-500">Guiding Lives Through the Wisdom of the Stars</p>
        </div>

        {/* Main Content */}

        {/* Introduction */} 
        <div className="text-lg leading-relaxed text-center px-4">
          <p className="text-lg text-white/60">
            Welcome to my world of astrology — where ancient wisdom meets modern insight.  
            I am <span className="font-semibold text-red-600">Pinaki Pachchigar</span>, a passionate astrologer dedicated to helping people discover clarity, purpose, and peace through the divine science of astrology.  
            For me, astrology isn’t just about predicting the future; it’s about understanding your inner self, aligning with cosmic energy, and unlocking the potential that already exists within you.
          </p>
        </div>

        {/* My Journey */}
        <div className="my-6 text-center">
          <h2 className="text-3xl font-semibold ttl">My Journey</h2>

          <p className="text-lg leading-relaxed my-3 px-4 text-white/60">
            My journey into astrology began with deep curiosity about how the universe influences human life.  
            What started as fascination soon turned into devotion. Over the years, I studied
            <span className="font-medium"> Vedic Astrology, Vastu Shastra, Numerology, Palmistry, and Gemology</span>,
            learning how planetary alignments reflect our emotions, strengths, and life paths.
            Guided by mentors and years of spiritual practice, I have helped individuals find
            clarity in confusion, strength in uncertainty, and hope in challenges.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-red-50 p-6 rounded-2xl shadow-inner mx-4">
          <h2 className="text-3xl font-semibold text-red-600 text-center">My Mission</h2>

          <p className="my-3 text-gray-700 text-lg leading-relaxed text-center">
            My mission is simple — to make astrology accessible, empowering, and meaningful for everyone.
            I believe that every person has a unique cosmic blueprint, and when we understand it, we live
            more consciously and peacefully.
          </p>
          
          <blockquote className="italic text-center my-3 text-gray-600">
            🌠 “Astrology doesn’t define your destiny — it helps you design it.”
          </blockquote>
        </div>

        {/* What Makes Me Unique */}
        <div className="my-10 px-2">
          <h2 className="text-3xl font-semibold ttl py-5 text-center">What Makes My Approach Unique</h2>
          
          <p className="text-lg text-center text-white/60">With over 35 years of experience, 75+ years of legacy and more than 
            250,000 successful consultations, my three generations have dedicated their life in guiding individuals
            toward clarity, peace, and purpose through the timeless wisdom of astrology. My journey began with a 
            deep curiosity about the universe and evolved into a lifelong mission to help people understand the 
            patterns of their destiny. Over the decades, I have combined traditional Vedic Astrology with 
            practical, modern insights to offer solutions that bring real, positive change in people’s lives.</p>
          
          <p className="text-lg text-center my-4 text-white/60">From career and marriage guidance to health, wealth, and personal growth, 
            my consultations are deeply personalized and solution-oriented. I believe that every horoscope tells a 
            story — not of fate, but of potential — and when understood correctly, it becomes a map to harmony and success. 
            My approach is not limited to predictions; it focuses on transformation, helping individuals overcome 
            challenges and embrace their true path.</p>
 
          <p className="text-lg text-center text-white/60">Thousands of satisfied clients across the globe have trusted my expertise,
            accuracy, and compassion. For me, astrology is not business — it’s a sacred responsibility to guide people 
            toward light, balance, and self-realization.</p>
            
            <br />
          <WhyChooseMe/>
        </div>

        {/* Vision */}
        <div className="text-center px-2">
          <h2 className="text-3xl font-semibold ttl">My Vision</h2>

          <p className="text-lg mx-auto my-4 text-cyan-500">
            To create a world where youth and individuals rediscover their purpose
            through spiritual understanding and self-awareness — empowering them to lead
            meaningful lives while serving society with positivity and wisdom.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-rose-500">
            Ready to uncover the path written in your stars?
          </p>

          <a href="/contact" className="bg-yellow-500 w-1/6 inline-block font-semibold text-lg p-3 my-3 rounded-full">Get in Touch</a>
        </div>
      </section>
      <FooterOne/>
    </>
  );
};

export default About;

