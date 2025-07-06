import React, { useEffect, useState, useRef } from 'react'

const Eye = () => {

    const [rotate, setRotate] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const eyeContainerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let MouseX = e.clientX;
            let MouseY = e.clientY;

            let deltaX = MouseX - window.innerWidth / 2;
            let deltaY = MouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-section data-scroll-speed="-.27" className='relative w-full h-full bg-cover bg-center bg-[url("http://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
                <div
                    ref={eyeContainerRef}
                    data-scroll
                    data-scroll-call="video-component"
                    data-scroll-repeat=""
                    data-show="true"
                    className='absolute flex top-1/2 left-1/2 translate-x-[0vw] -translate-y-[50%] w-full h-full justify-center items-center]'
                    style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.25}px)` }}
                >
                    <div className='eyeCircle flex items-center  justify-center mx-10  w-[14vw] h-[14vw] bg-white rounded-full'>
                        <div className='flex relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div className='flex  items-center uppercase px-[3.4vw] font-bold text-xl' fill="#F4F4F4">play</div>
                            <div style={{ transform: `translate(-50% , -50% ) rotate(${rotate}deg)` }} className='line absolute w-full top-1/2 left-1/2 '>
                                <div className='w-8 h-8 rounded-full bg-white'></div>

                            </div>
                        </div>
                    </div>
                    <div className='eyeCircle flex items-center justify-center w-[14vw] h-[14vw] bg-white rounded-full'>
                        <div className='flex relative  w-2/3 h-2/3 rounded-full bg-zinc-900'>
                        <div className='flex items-center uppercase px-[3.4vw] font-bold text-xl' fill="#F4F4F4">play</div>
                            <div style={{ transform: `translate(-50% , -50% ) rotate(${rotate}deg)` }} className='line absolute w-full top-1/2 left-1/2 '>
                                <div className='w-8 h-8 rounded-full bg-white'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eye
