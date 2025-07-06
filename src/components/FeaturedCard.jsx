import { motion, useAnimation } from 'framer-motion'
import { span } from 'framer-motion/client'
import React, { useState } from 'react'

function FeaturedCard(props) {


    // console.log(props);
    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({ y: "0" });
    }

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    }

    return (
        <div>
            <div  className='px-20 '>
                <div  className="cards w-full flex gap-10 mt-20 ">
                    {/* Left Card */}
                    <div className="w-1/2 flex flex-col">
                        <div className="mb-4 flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-white inline-block"></span>
                            <span className='font-["Neue_Montreal"] tracking-widest uppercase'>{props.desc[0]}</span>
                        </div>
                        <motion.div
                            onHoverStart={() => {
                                handleHover(0);
                                document.getElementById('left-card').classList.add('z-30');
                            }}
                            onHoverEnd={() => {
                                handleHoverEnd(0);
                                document.getElementById('left-card').classList.remove('z-30');
                            }}
                            whileHover={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="cardcontainer relative w-full h-[80vh]"
                            id="left-card"
                        >
                            <h1 className='absolute flex overflow-hidden text-[#cdea68] font-["Founders_Grotesk_X-Condensed "] font-bold text-7xl top-1/2  left-full -translate-x-1/2 -translate-y-1/2 z-[9] tracking-tighter  leading-none uppercase'>
                                {props.desc[0].split('').map((item, index) =>
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[0]}
                                        transition={{
                                            ease: [0.22, 1, 0.36, 1],
                                            delay: index * .05
                                        }}
                                        className='inline-block'
                                        key={index}
                                    >
                                        {item}
                                    </motion.span>)}
                            </h1>
                            <div className='card w-full h-full rounded-xl overflow-hidden'>
                                <img className='w-full h-full bg-cover' src={props.img[0]} alt="" />
                            </div>
                        </motion.div>
                        {/* buttons */}
                        <div className='flex  gap-3.5 pt-5'>
                            {
                                props.button[0].map((btn, index) => (
                                    <div key={index} className='px-4 py-1.5 border-[1px] rounded-full text-zinc-300 font-light uppercase'>
                                        {btn}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* Right Card */}
                    <div className="w-1/2 flex flex-col">
                        <div className="mb-4 flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-white inline-block"></span>
                            <span className='font-["Neue_Montreal"] tracking-widest uppercase'>{props.desc[1]}</span>
                        </div>
                        <motion.div
                            onHoverStart={() => handleHover(1)}
                            onHoverEnd={() => handleHoverEnd(1)}
                            whileHover={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="cardcontainer relative w-full h-[80vh] z-20"
                        >
                            <h1 className='absolute flex overflow-hidden text-[#cdea68]  font-["Founders_Grotesk_X-Condensed "] font-bold text-7xl top-1/2  right-full translate-x-1/2 -translate-y-1/2 z-[9] tracking-tighter  leading-none uppercase'>
                                {props.desc[1].split('').map((item, index) =>
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[1]}
                                        transition={{
                                            ease: [0.22, 1, 0.36, 1],
                                            delay: index * .05
                                        }}
                                        className='inline-block'
                                        key={index}
                                    >
                                        {item}
                                    </motion.span>)}
                            </h1>
                            <div className='card w-full h-full rounded-xl overflow-hidden'>
                                <img className='w-full h-full bg-cover' src={props.img[1]} alt="" />
                            </div>
                        </motion.div>
                        {/* buttons */}
                        <div className='flex  gap-3.5 pt-5'>
                            {
                                props.button[1].map((btn, index) => (
                                    <div key={index} className='px-4 py-1.5 border-[1px] rounded-full text-zinc-300 font-light uppercase'>
                                        {btn}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCard
