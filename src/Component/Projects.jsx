import React, { useEffect, useState } from 'react'
import { DemoCard } from '../CardsComponents/DemoCard';
// import { Card2 } from '../CardsComponents/Card2';
import { CardFooter, Button } from "@material-tailwind/react"
import Aos from 'aos';
import ER from '../assets/Quiz.png';
import er from '../assets/Quiz.png';
const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id='Projects' className={`p-20 flex flex-col items-center justify-center image-r`}>
      <h1 data-aos="fade-right" className='text-[48px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Projects</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around   flex flex-col justify-between leading-normal gap-10'>
        {/* <img data-aos="fade-down" height={250} width={250} className='text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 b_glow' src={pro2} alt='' /> */}
        {/* <Card2 /> */}
        <DemoCard />
      </div>


    </div>
  )
}
export default Projects;
