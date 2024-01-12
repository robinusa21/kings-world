import React from 'react'
import PortfolioSlider from './PortfolioSlider'




const Projects = () => {
  return (
    <div>
      <div className='text-center pb-14 lg:px-24 px-4' id='portfolio'>
        <h4 className='text-gray-200 font-semibold text-2xl'>Letest Project</h4>
        <h2 className='text-5xl font-bold leading-snug text-white'>Portfolio to explore</h2>
      </div>

       {/* Carousel card */}
       <div className='lg:px-24 px-4 overflow-hidden'>
            <PortfolioSlider />
       </div>

       <div className='md:h-24 h-12'></div>
    </div>
  )
}

export default Projects
