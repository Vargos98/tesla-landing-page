// import React from 'react'
import Cyber from '../assets/CyberTruck.png';

const CyberTruck = () => {
  return (
    <div className="header-container bg-CyberTruck h-screen w-full bg-center bg-cover flex items-center justify-center relative">
      {/* Centered CyberTruck Image */}
      <img className="w-[80%] mt-[-320px] max-w-[520px] object-contain" src={Cyber} alt="CyberTruck" />

      {/* Buttons */}
      <div className="absolute bottom-16 flex flex-col left-1/2 transform -translate-x-1/2 gap-4 lg:flex-row">
        <button className="bg-[#1f1e1ee5] px-24 py-2 text-[14px] uppercase whitespace-nowrap underline underline-offset-4 text-gray-400 font-bold hover:bg-[#3a3939e5]">
          Order Now
        </button>
        <button className="bg-[#1f1e1ee5] px-24 py-2 text-[14px] uppercase text-gray-400 font-bold hover:bg-[#3a3939e5]">
          Demo Drive
        </button>
      </div>
    </div>
  );
};

export default CyberTruck;
