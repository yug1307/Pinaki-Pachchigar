import React from 'react'

const packages = [
  {
    id: 1,
    icon: "",
    title: "Basic Vastu Review",
    price: "₹10,000",
    features:[
      "Basic analysis of home/office layout",
      "Identification of major Vastu defects",
      "Entrance, bedroom & kitchen direction check",
      "Element balance assessment",
      "General remedies (non-structural)",
      "1 follow-up consultation (30-45 mins)"
    ]
  },
  {
    id: 2,
    icon: "",
    title: "Standard Vastu Consultation",
    price: "₹15,000",
    features:[
      "Complete Vastu layout analysis",
      "Detailed room-by-room evaluation",
      "Energy flow and five-element mapping",
      "Personalized remedies without demolition",
      "Correct placement guidance for furniture & decor",
      "2 follow-up sessions (30 mins each)"
    ]
  },
  {
    id: 3,
    icon: "",
    title: "Advance Vastu Audit",
    price: "₹20,000",
    features:[
      "Deep analysis of property plan",
      "Geopathic stress check",
      "Professional recommendations for corrections",
      "Colour, direction & element balancing",
      "Vastu-compliant layout suggestions",
      "1 month support (chat/voice)",
    ]
  },
  {
    id: 4,
    icon: "",
    title: "Premium Vastu Consultation",
    price: "₹30,000",
    features:[
      "Detailed Vastu audit of entire property",
      "Structural correction suggestions",
      "Remedies for prosperity, health & harmony",
      "Personalized Vastu map (PDF)",
      "Selection guidance for interior materials & colors",
      "2 months support"
    ]
  },
  {
    id: 5,
    icon: "",
    title: "Professional Vastu Planning",
    price: "₹35,000",
    features:[
      "Full Vastu design planning for new property",
      "Room zoning as per Vastu",
      "Architectural suggestions (non-engineering)",
      "Energy grid correction recommendations",
      "Custom Vastu Blueprint (AutoCAD/PDF)",
      "3 months support"
    ]
  },
  {
    id: 6,
    icon: "",
    title: "Complete Vastu Transformation",
    price: "₹40,000",
    features:[
      "End-to-end Vastu consultation & supervision",
      "In-depth analysis + on-site/virtual walkthrough",
      "Full structural & non-structural remedies",
      "Business/home prosperity enhancement plan",
      "Personalized yearly Vastu guidance",
      "6 months premium support"
    ]
  },
]

const SpiritualPackages = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-center text-red-600">Choose Your Vastu Remedy's Plan</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6">
        {packages.map((pack, index) => (

          <div 
            key={index}
            className="p-6 bg-white/10 rounded-2xl border-2 border-red-500 hover:border-sky-500 
            hover:shadow-2xl space-y-4 transition transform hover:-translate-y-2">
             
            <div className="text-center space-y-3">
              <div className="animate-pulse text-3xl">{pack.icon}</div>
              <h3 className="text-2xl font-semibold text-white">{pack.title}</h3>
              <p className="text-xl font-bold text-red-600">{pack.price}</p>

              <ul className="text-gray-400 text-left space-y-2">
                {pack.features.map((feat, index) => (
                  
                  <li key={index}>⭐ {feat}</li>
                ))}
              </ul>
 
              <a
                href="https://forms.gle/GHHtmGUpMdvNZAnt6"
                className="inline-block border border-white text-orange-500 font-semibold py-2 px-6 rounded-full hover:shadow-lg transition duration-300"
              >
                Get Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SpiritualPackages