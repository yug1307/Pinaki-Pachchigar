import { useState } from "react";

const CATS = {
  readings: { dot: "bg-violet-400", activeBorder: "border-violet-400", label: "Readings" },
  booking: { dot: "bg-emerald-400", activeBorder: "border-emerald-400", label: "Booking & fees" },
  birth: { dot: "bg-orange-400", activeBorder: "border-orange-400", label: "Birth charts" },
  beliefs: { dot: "bg-amber-400", activeBorder: "border-amber-400", label: "About astrology" },
};

const FAQS = [
  { cat: "readings", q: "What types of readings do you offer?", a: "I offer natal chart readings (birth chart analysis), compatibility readings for couples, transit forecasts to understand current cosmic influences, solar return readings for the year ahead, and career & purpose readings. Each session is tailored to your questions and goals." },
  { cat: "readings", q: "How long does a typical reading last?", a: "A standard session runs 60 minutes. Extended deep-dive sessions of 90 minutes are available for natal chart + forecast combinations. I also offer 30-minute focused readings for specific questions." },
  { cat: "readings", q: "Are readings done in person or online?", a: "I offer both! In-person sessions are available at my studio. Online readings are conducted via Zoom or Google Meet and are just as thorough. Recordings are available upon request for online sessions." },
  { cat: "readings", q: "What can I expect to receive after my session?", a: "After your reading, you'll receive a written summary of the key themes discussed, any charts generated during the session as PDF files, and a recording link if you opted for it. These are typically delivered within 24–48 hours." },
  { cat: "booking", q: "How do I book a session?", a: "You can book directly through the scheduling page on this website. Choose your session type, select an available time slot, complete the intake form with your birth details, and pay to confirm your booking. You'll receive an email confirmation right away." },
  { cat: "booking", q: "What is your cancellation and rescheduling policy?", a: "Cancellations made more than 48 hours in advance receive a full refund. Within 24–48 hours, you may reschedule once at no charge. Cancellations under 24 hours are non-refundable, but the credit is valid for 6 months." },
  { cat: "booking", q: "How much does a reading cost?", a: "Prices vary by session length: a 30-minute focused reading starts at ₹1,500, a 60-minute standard reading is ₹2,800, and a 90-minute deep-dive is ₹3,900. Gift certificates are available in any denomination." },
  { cat: "booking", q: "Do you offer gift readings?", a: "Yes! Gift certificates are available for any session type and can be sent digitally or as a printed card. They're valid for 12 months from the date of purchase and make a thoughtful and meaningful gift." },
  { cat: "birth", q: "What information do I need for a birth chart reading?", a: "To cast an accurate natal chart, I need your full date of birth, exact time of birth (even an approximate time helps), and city/place of birth. The birth time is especially important — even a few minutes can shift rising signs and house placements." },
  { cat: "birth", q: "What if I don't know my exact birth time?", a: "Don't worry — a reading is still very valuable without a birth time. I'll use a solar chart (placing the Sun on the Ascendant) and focus on planets and aspects rather than houses. If you're unsure, check your birth certificate or ask a family member." },
  { cat: "birth", q: "Can I get a reading for my child?", a: "Absolutely. Parent-requested readings for children and teens are offered with parental consent. These are especially popular for understanding a child's learning style, emotional needs, and natural gifts. All readings are age-appropriate and constructive." },
  { cat: "beliefs", q: "Is astrology a religion or a science?", a: "Astrology is neither a religion nor a modern empirical science — it's a symbolic language and philosophical system with thousands of years of history. It can be practiced alongside any faith tradition or secular worldview. I approach it as a tool for self-reflection and pattern recognition, not prediction or fortune-telling." },
  { cat: "beliefs", q: "Will you predict exactly what's going to happen to me?", a: "No — and I'd be skeptical of anyone who claims to. Astrology maps tendencies, themes, and timing, not fixed outcomes. Free will always plays a role. My aim is to help you understand the energies at play so you can make more aligned choices." },
  { cat: "beliefs", q: "What system of astrology do you use?", a: "I primarily practise Western astrology using the Tropical zodiac. I also draw on Hellenistic techniques and occasionally integrate Vedic (Jyotish) perspectives when relevant. I'll always be transparent about which framework I'm using and why." },
];

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "readings", label: "Readings" },
  { key: "booking", label: "Booking & fees" },
  { key: "birth", label: "Birth charts" },
  { key: "beliefs", label: "About astrology" },
];

function FAQItem({ faq, isOpen, onToggle }) {
  const cat = CATS[faq.cat];

  return (
    <section className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full text-left bg-transparent border-none px-5 py-4 flex items-center gap-3 cursor-pointer hover:bg-gray-750 transition-colors">
        
        <span title={cat.label} className={`w-2 h-2 rounded-full flex-shrink-0 ${cat.dot}`}/>
        
        <span className="text-[15px] font-medium text-gray-100 flex-1">
          {faq.q}
        </span>

        <span className="text-gray-400 text-base transition-transform duration-200 inline-block"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
          ⌄
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-4 pt-3 pl-10 text-sm text-gray-400 leading-relaxed border-t border-gray-700">
          {faq.a}
        </div>
      )}
    </section>
  );
}

export default function AstrologerFAQ() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = FAQS.filter((f) => {
    const matchCat = activeCategory === "all" || f.cat === activeCategory;
    const q = search.toLowerCase().trim();
    const matchSearch = !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const handleToggle = (i) => setOpenIndex(openIndex === i ? null : i);
  const handleCategory = (cat) => { setActiveCategory(cat); setOpenIndex(null); };
  const handleSearch = (e) => { setSearch(e.target.value); setOpenIndex(null); };

  return (
    <section className="min-h-screen bg-gray-900 py-12 px-4">

      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-5xl mb-3">🔮</div>
          <h1 className="text-2xl font-medium text-gray-100 mb-2">Frequently asked questions</h1>
          
          <p className="text-sm text-gray-500">Everything you need to know before your reading</p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-base pointer-events-none">
            🔍
          </span>

          <input type="text" value={search} onChange={handleSearch} placeholder="Search questions..."
            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-9 pr-4 py-2.5 text-sm text-gray-200 
            placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"/>
        </div>

        {/* Category filters */}
        <div className="flex gap-2 flex-wrap justify-center mb-6">
          {CATEGORIES.map(({ key, label }) => {
            const isActive = activeCategory === key;
            return (
              <button key={key} onClick={() => handleCategory(key)}
                className={`px-3.5 py-1.5 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${
                  isActive
                    ? "bg-violet-900 border-violet-500 text-violet-300"
                    : "bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-300"
                }`}>
                {label}
              </button>
            );
          })}
        </div>

        {/* FAQ list */}
        <div className="flex flex-col gap-2.5">
          {filtered.length === 0 ? (
            <div className="text-center text-gray-500 text-sm py-10">
              No questions match your search. Try different keywords.
            </div>
          ) : (
            filtered.map((faq, i) => (
              <FAQItem key={i} faq={faq} isOpen={openIndex === i} onToggle={() => handleToggle(i)}/>
            ))
          )}
        </div>

        {/* CTA */}
        <button className="mt-6 w-full py-3 rounded-xl border border-gray-700 bg-gray-800 text-gray-400 text-sm 
          cursor-pointer hover:bg-gray-750 hover:border-gray-600 hover:text-gray-300 transition-colors">
          Still have a question? Get in touch ↗
        </button>

      </div>
    </section>
  );
}
