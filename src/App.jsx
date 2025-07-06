import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eye from './components/Eye'
import FeaturedHeading from './components/FeaturedHeading'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import FeaturedCard from './components/FeaturedCard'
import StartProject from './components/StartProject'




const App = () => {

  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eye />
      <FeaturedHeading />
      <FeaturedCard img={[
        'https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png',
        'https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png'
      ]}
        desc={["silence  labs", "cardboard spaceship"]}
        button={[
          ["brand identity", "pitch deck"],
          ["branded template", "sales deck", "social media templates"]
        ]}
      />

      <FeaturedCard img={[
        'https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png',
        'https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png'
      ]}
        desc={["AH2 & Matt Horn", "Fyde"]}
        button={[
          ["pitch deck"],
          ["audit", "copy writimg", "sales deck" , "slides design"]
        ]}
      />

      <FeaturedCard img={[
        'https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png',
        'https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-1326x1101.png'
      ]}
        desc={["Vise", "All Things Go"]}
        button={[
          ["agency", "company presentation"],
          ["brand identity", "pitch deck"]
        ]}

      />

      <Cards />
      <StartProject />
      <Footer />

    </div>
  )
}

export default App
