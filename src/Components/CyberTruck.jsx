// import React from 'react'
import Cyber from '../assets/CyberTruck.png';
const CyberTruck = () => {
  return (
    <div className="header-container bg-CyberTruck h-screen w-full bg-center bg-cover relative">
    
        <img className='w-[520px] left-[50%] translate-x-[95%] py-14'  src={Cyber} alt={Cyber} />
        <div className='absolute top-[620px] flex flex-col left-[50%] translate-x-[-50%] gap-4 lg:flex-row'>
      <button className='bg-[#1f1e1ee5] px-24 py-2 text-[14px] uppercase whitespace-nowrap undeline underline-offset-4 un text-gray-400 font-bold  hover:bg-[#3a3939e5]'>Order Now</button>
      <button className='bg-[#1f1e1ee5] px-24 py-2 text-[14px] whitespace-nowrap uppercase text-gray-400 font-bold  hover:bg-[#3a3939e5]'>Demo Drive</button>
    </div>
    </div>
  )
}

export default CyberTruck