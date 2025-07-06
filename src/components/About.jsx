import { div } from 'framer-motion/client'
import React from 'react'
import { motion } from 'framer-motion'

const Abot = () => {
  return (

    <div data-scroll data-scroll-section data-scroll-speed="-.11" className='w-full p-20 bg-[#cdea68] rounded-t-3xl text-black'>
      <h1 className='font-["Neue_Montreal"] text-[3vw]  leading-[3.1vw]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className='w-full flex font-["Neue_Montreal"] border-t-[1px] mt-10 border-[#99ad53] '></div>
      <div className='w-full flex mt-4 text-[1vw] leading-[2vw]'>
        <div className='w-1/2  '>
          What you can expect:
        </div>
        <div className='w-1/2 flex leading-[1.7vw]'>
          <div className='w-1/2 flex flex-col gap-5 px-[2vw]'>
            <div>We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.</div>
            <div>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating</div>
          </div>
          <div className='w-1/2 flex  gap-5  pt-37 pr-25 justify-end'>
            
            <div className='flex flex-col '>
              <div className='pb-[1vw]'> S:</div>
              <a href="#">Instagram</a>
              <a href="#">Behance</a>
              <a href="#">Facebook</a>
              <a href="#">Linkedin</a>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex  border-t-[1px] mt-20 py-5 border-[#99ad53] '>

        <div className='w-1/2 '>
          <h1 className='text-7xl  font-["Neue_Montreal"]'>Our approach:</h1>
          <button className='px-[2vw] py-[1.3vw] tracking-wider bg-zinc-900 rounded-full mt-[1vw] text-white flex items-center  gap-3 '>READ MORE
            <div className='w-3 h-3 ml-[2vw] bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className='w-[50%] h-[70vh]'>
          <img className='w-[90vw] rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
    </div>

  )
}

export default Abot
