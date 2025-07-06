import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {

    return (
        <div data-scroll data-scroll-section data-scroll-speed = "-.6"  className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textstructure mt-50 px-20'>
                {
                    ["We create", "eye-opening", "presentations"].map((item, index) => {
                        return (
                            <div className='masker '>

                                <div className='w-fit flex'>
                                    {
                                        index === 1 && (
                                            <motion.div
                                                initial={{ width: 0 }} animate={{ width: "9vw" }}   // initial values  - starting me kesa dikega 
                                                transition={{ ease: [0.76, 0, 0.24, 1], duration: "1.5" }}    // transition - kis value tak hume leke jana hai with time duration 
                                                className=' mr-[1vw] w-[9vw] h-[5.3vw] rounded-md relative top-[1vw] '>
                                                    <img className='rounded-xl' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                                            </motion.div>)
                                    }
                                    <h1 className="text-[7.5vw] font-['Founders_Grotesk_X_Condensed'] leading-[5.9vw] tracking-noraml font-bold uppercase">{item}</h1>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-[1vw] px-20'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p className='text-md font-light tracking-[0.01vw] leading-none'>{item}</p>
                ))}

                <div className='start flex items-center gap-5'>
                    <div className='px-4 py-2 border-[1px] rounded-full text-zinc-300 font-light uppercase'>start the project</div>
                    <div className='w-10 h-10 flex items-center justify-center border-[1px] rounded-full text-zinc-300'>
                        <span className='inline-block rotate-[45deg]'>
                            <FaArrowUpLong size={20} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
