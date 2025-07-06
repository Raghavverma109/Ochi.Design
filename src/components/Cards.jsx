import React from 'react'

const Cards = () => {
    return (

        <div   className='flex gap-5 w-full h-screen bg-zinc-900 px-20 py-30'>
            
            <div className='cardcontainer w-1/2 h-[55vh]'>
                <div className='card relative flex items-center justify-center w-full  h-full bg-[#004d43] rounded-xl'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className='w-32 ' alt="" />
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-[#cdea68]' >&copy;  2019-2022 </button>
                </div>
            </div>


            <div className='cardcontainer flex gap-5 w-1/2 h-[55vh]'>
                <div className='card relative flex items-center justify-center w-1/2  h-full bg-[#212121] rounded-xl'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" className='w-32 ' alt="" />
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-[#646464] uppercase' >Rating 5.0 on clutch </button>

                </div>
                <div className='card relative flex items-center justify-center w-1/2  h-full bg-[#212121] rounded-xl'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className='w-32 ' alt="" />
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-[#646464] uppercase' > business bootcamp alumin</button>

                </div>
            </div>

        </div>
    )
}

export default Cards
