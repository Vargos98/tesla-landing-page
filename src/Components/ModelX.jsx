// import React from 'react'

const ModelX = () => {
  return (
    <div className="header-container bg-modelX h-screen w-full bg-center bg-cover relative ">
    <div className='flex flex-col absolute top-20 left-[50%] translate-x-[-50%]'>
      <h1 className='m-auto text-[60px] font-bold text-white'>Model X</h1>
      <p className='text-center'>
      
      <p className="text-white font-bold text-2xl">From $65,990</p>
      <span className=' whitespace-nowrap pt-1 text-[16px] text-white font-bold underline  underline-offset-4 hover:decoration-2 cursor-pointer'>After Federal Tax Credit $7,500</span>
      <p>
      <span className=' whitespace-nowrap pt-1 text-[16px] text-white font-bold underline  underline-offset-4 hover:decoration-2 cursor-pointer'>and Est. Gas Savings $6,500</span>
      </p>
      </p>

      <div className='absolute top-[580px] flex flex-col left-[50%] translate-x-[-50%] gap-4 lg:flex-row'>
      <button className='bg-blue-700 px-24 py-2 text-1xl whitespace-nowrap text-white font-bold rounded hover:bg-blue-500'>Order Now</button>
      <button className='bg-white px-24 py-2 text-1xl whitespace-nowrap text-black font-bold rounded hover:bg-gray-400'>Demo Drive</button>
    </div>
    </div>
</div>
  )
}

export default ModelX