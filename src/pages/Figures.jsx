import React from "react";
import { FaAward, FaGlobe, FaSun, FaSmile } from "react-icons/fa";

const reasons = [
  { icon: <FaAward className="text-red-500"/>, text: "75+ Years of Legacy" },
  { icon: <FaGlobe className="text-green-500"/>, text: "2.5L+ Consultations Given" },
  { icon: <FaSun className="text-orange-500"/>, text: "35+ Years of Expertise" },
  { icon: <FaSmile className="text-yellow-500"/>, text: "2L+ repeated clients" }
];

const Figures = () => {
  return (
    <>
      <section className="bg-gray-900 p-12">
          
        <div className="grid grid-cols-2 md:grid-cols-4 md:max-w-3xl mx-auto border-2 border-cyan-500 rounded-xl p-10 gap-6">
          {reasons.map((item, index) => (

            <div 
              key={index} 
              className="flex flex-col items-center justify-center bg-white py-6 px-2 rounded-full space-y-1">

              <div className="text-3xl">{item.icon}</div>
              <p className="text-md text-center font-medium text-red-800">{item.text}</p>
            </div> 
          ))}
        </div> 
      </section>
    </>
  )
}

export default Figures