import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed = ".1" className='w-full py-24 rounded-t-3xl  bg-[#004d43]'>
      <div className='text border-t-2 border-b-2 flex whitespace-nowrap border-zinc-300 overflow-hidden'>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='text-[22vw] font-["Founders_Grotesk_X_Condensed"] font-bold tracking-normal -mt-[3.8vw] -mb-[12vw] uppercase pr-20'
        >
          We are Ochi
        </motion.h1>

        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='text-[22vw] font-["Founders_Grotesk_X_Condensed"] font-bold tracking-normal -mt-[3.8vw] -mb-[12vw] uppercase pr-20'
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='text-[22vw] font-["Founders_Grotesk_X_Condensed"] font-bold tracking-normal -mt-[3.8vw] -mb-[12vw] uppercase'
        >
          We are Ochi
        </motion.h1>
      </div>


    </div>
  )
}

export default Marquee
