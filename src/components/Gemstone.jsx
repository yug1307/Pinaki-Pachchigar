import { useEffect, useRef } from "react";
import Topbar from '../components/Topbar'
import FooterOne from '../components/FooterOne'

const GEMS = [
  { name: "Ruby",     color: "#e63c6e" },
  { name: "Sapphire", color: "#4fa8e8" },
  { name: "Emerald",  color: "#3ecf7a" },
  { name: "Amethyst", color: "#c49bff" },
  { name: "Topaz",    color: "#f5c842" },
];

function GemShape({ color }) {
  const pts = {
    outer:  "27,4 50,18 50,36 27,50 4,36 4,18",
    top1:   "27,4 50,18 27,28",
    top2:   "27,28 50,18 50,36",
    bot1:   "27,28 50,36 27,50",
    bot2:   "27,28 4,36 27,50",
    left:   "27,28 4,18 4,36",
    topleft:"27,4 4,18 27,28",
  };

  return (
    <svg viewBox="0 0 54 54" className="w-14 h-14 opacity-75">
      <polygon points={pts.outer} fill={color} fillOpacity="0.18" stroke={color} strokeWidth="1.2" />
      <polygon points={pts.top1} fill={color} fillOpacity="0.35" />
      <polygon points={pts.top2} fill={color} fillOpacity="0.22" />
      <polygon points={pts.bot1} fill={color} fillOpacity="0.30" />
      <polygon points={pts.bot2} fill={color} fillOpacity="0.20" />
      <polygon points={pts.left} fill={color} fillOpacity="0.28" />
      <polygon points={pts.topleft} fill={color} fillOpacity="0.38" />
    </svg>
  );
}

function StarField() {
  const containerRef = useRef(null);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    for (let i = 0; i < 80; i++) {
      const s = document.createElement("div");
      const size = Math.random() * 1.8 + 0.5;
      const opacity = (Math.random() * 0.5 + 0.1).toFixed(2);
      s.style.cssText = `
        position:absolute;
        width:${size}px;height:${size}px;
        top:${Math.random() * 100}%;
        left:${Math.random() * 100}%;
        background:#fff;border-radius:50%;
        opacity:${opacity};
      `;
      el.appendChild(s);
    }
  }, []);
  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />;
}

export default function GemstonesComing() {

  return (
    <>
    <Topbar/>
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden"
      style={{ background: "#0d0b1a", fontFamily: "'Raleway', sans-serif" }}>

      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Raleway:wght@300;400;500&display=swap" rel="stylesheet"/>

      <StarField />

      <div className="relative z-10 flex flex-col items-center w-full max-w-xl">

        {/* Gem row */}
        <div className="flex flex-wrap justify-center gap-5 mb-12">
          {GEMS.map(({ name, color }) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <GemShape color={color} />
              
              <span
                className="text-[11px] font-medium tracking-widest uppercase"
                style={{ color: "#9b8fbb" }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Eyebrow */}
        <p
          className="text-[11px] font-medium tracking-[0.22em] uppercase mb-4 text-center"
          style={{ color: "#a07bd0" }}
        >
          Gemstones &amp; Astrology
        </p>

        {/* Divider */}
        <div className="w-14 h-px mb-8" style={{ background: "#3a2e6e" }} />

        {/* Headline */}
        <h1
          className="text-3xl text-center leading-snug mb-8"
          style={{ fontFamily: "'Cinzel', serif", color: "#ede8ff", fontWeight: 600 }}
        >
          Find the gem{" "}
          <span style={{ color: "#c49bff" }}>written in your stars</span>
        </h1>

        {/* Body copy */}
        <p
          className="text-[15px] font-light text-center leading-loose mb-10"
          style={{ color: "#b3a8d4" }}
        >
          Gemstones are an essential part of Astrology. Therefore, you must know
          which Gemstone aligns with your horoscope before wearing it. Currently,
          we are working on this section and soon you'll find a variety of
          Gemstones — and I'll be the one to make you wear the right Gem.
        </p>

        {/* Coming soon badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[13px] font-medium border"
          style={{ background: "#1a1238", borderColor: "#3d2f6e", color: "#c49bff" }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#a07bd0" }} />
          Coming soon
        </div>

        {/* Bottom ornament */}
        <div className="flex items-center gap-3 mt-10">
          <div className="w-12 h-px" style={{ background: "#3a2e6e" }} />
          <div className="w-1.5 h-1.5 rotate-45" style={{ background: "#6b4fa0" }} />
          <div className="w-12 h-px" style={{ background: "#3a2e6e" }} />
        </div>

      </div>
    </div>
    <FooterOne/>
    </>
  );
}