// import React from 'react'

const ModelX = () => {
  return (
    <div className="header-container bg-modelThree h-screen w-full bg-center bg-cover relative ">
        <div className='flex flex-col absolute top-20 left-[50%] translate-x-[-50%]'>
          <h1 className='m-auto text-[60px] font-bold text-white'>Model 3</h1>
          <p className='text-center'>
          <span className=' whitespace-nowrap pt-1 text-[26px] text-white font-bold underline  underline-offset-4 hover:decoration-2 cursor-pointer'>1.99% APR Financing</span>
          <p className="text-white font-bold">From $34,9902</p>
          </p>

          <div className='absolute top-[580px] flex flex-col left-[50%] translate-x-[-50%] gap-4 lg:flex-row xl:top-[580px]'>
          <button className='bg-blue-700 px-24 py-2 text-1xl whitespace-nowrap text-white font-bold rounded hover:bg-blue-500'>Order Now</button>
          <button className='bg-white px-24 py-2 text-1xl whitespace-nowrap text-black font-bold rounded hover:bg-gray-400'>Demo Drive</button>
        </div>
        </div>
    </div>

  )
}

export default ModelX