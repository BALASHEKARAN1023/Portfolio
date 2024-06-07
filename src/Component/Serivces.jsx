import AOS from 'aos';
import React, { useEffect } from 'react'

const Serivces = () => {
  useEffect(()=>{
    AOS.init({duration: 1000});
} ,[]);
  return (
    <div  id="Services" className='p-20 flex flex-col items-center justify-center '>
      <h1 data-aos="fade-right" className='text-[48px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'> Skills</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20'>
        <h2 data-aos="fade-right"  className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl  h-36 w-44 border-2 border-fuchsia-800 b_glow'>HTML5</h2>
        <h2 data-aos="fade-down" className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl  h-36 w-44 border-2 border-fuchsia-800 b_glow'>CSS3</h2>
        <h2 data-aos="fade-up" className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl  h-36 w-44 border-2 border-fuchsia-800 b_glow'>Java Script</h2>
        <h2 data-aos="fade-left" className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl  h-36 w-44 border-2 border-fuchsia-800 b_glow'>React js</h2>
        <h2 data-aos="fade-right" className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl  h-36 w-44 border-2 border-fuchsia-800 b_glow'>MongoDB</h2>
        <h2 data-aos="fade-down" className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl  h-36 w-44 border-2 border-fuchsia-800 b_glow'>Node js</h2>
        <h2 data-aos="fade-up" className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl  h-36 w-44 border-2 border-fuchsia-800 b_glow'>Express js</h2>
        <h2 data-aos="fade-left" className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl  h-36 w-44 border-2 border-fuchsia-800 b_glow'>C,Java</h2>
      </div>
    </div>
  )
}
export default Serivces;