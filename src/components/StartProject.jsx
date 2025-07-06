import React, { useEffect, useState } from 'react';

const StartProject = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let MouseX = e.clientX;
      let MouseY = e.clientY;

      let deltaX = MouseX - window.innerWidth / 2;
      let deltaY = MouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove); // cleanup
  }, []);

  return (
    <div   className='relative w-full bg-[#cdea68] pt-[1vw] pb-[10vw] px-17 rounded-t-3xl text-[#212121] overflow-hidden'>

      {/* 🟡 Border Section */}
      <div className='w-full flex border-t-[1px] pb-[9vw] border-[#99ad53]'></div>

      {/* 🟢 Main Title */}
      <h1 className='flex flex-col items-center justify-center text-[13vw] font-["Founders_Grotesk_X_Condensed"] leading-[10vw] tracking-normal font-bold uppercase'>
        <div className='inline-block'>Ready</div>
        <div className='inline-block'>to start</div>
        <div className='inline-block'>the project?</div>
      </h1>

      {/* 👁️ Eye Section */}
      <div
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-10 z-10'
      >
        {[1, 2].map((_, i) => (
          <div key={i} className='eyeCircle flex items-center justify-center w-[14vw] h-[14vw] bg-white rounded-full'>
            <div className='relative flex items-center justify-center w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div className='absolute uppercase text-white font-bold text-xl tracking-wide'>play</div>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className='line absolute w-full top-1/2 left-1/2'
              >
                <div className='w-8 h-8 rounded-full bg-white'></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🎯 Buttons */}
      <div className='flex items-center justify-center gap-3.5 pt-5'>
        <div className='px-7 py-5 flex items-center border-[1px] bg-[#212121] font-["Neue_Montreal"] rounded-full text-zinc-300 font-light uppercase'>
          start the project
          <div className='w-3 h-3 ml-[2vw] bg-zinc-100 rounded-full'></div>
        </div>
      </div>

      <div className='flex justify-center py-4'>OR</div>

      <div className='flex items-center justify-center gap-3.5'>
        <div className='px-7 py-5 flex items-center border-[1px] font-["Neue_Montreal"] rounded-full text-zinc-900 font-light uppercase'>
          hello@ochi.design
          <div className='w-3 h-3 ml-[2vw] bg-[#212121] rounded-full'></div>
        </div>
      </div>
    </div>
  );
};

export default StartProject;
