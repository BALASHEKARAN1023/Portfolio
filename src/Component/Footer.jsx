import React from 'react'
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='mb-4 md:mb-0'>
          <sapn className="text-3xl font-semibold text-fuchsia-800 py-2 uppercase">My-Profile</sapn>
          <p className='text-[16px] my-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nemo quis non? Iste, ab hic. Molestias voluptas sequi esse ea beatae in eveniet totam velit quos rem? Cumque, tenetur laudantium.</p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Skills </h2>
          <ul className='text-[16px] my-4'>
            <li className='my-2'>React</li>
            <li className='my-2'>Java</li>
            <li className='my-2'>HTML,CSS</li>
            <li className='my-2'>JavaScript</li>
          </ul>
        </div>
        <div className='mb-4 md:-0'>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Contact
          </h2>
          <p className='text-[16px] my-4'>Email:balashekaran2003@gamil.com</p>
          <p className='text-[16px] my-4'>Phone No:+91 9361214404</p>
        </div>
        <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase" >Follow Me</h2>
        <div className='flex space-x-4 '>
          <a href='https://github.com/BALASHEKARAN1023' className='text-white hover:text-white transition-all duration-150 ease-in-out rounded-2xl  glow-2  p-2 '>
            <FaGithub className='text-[28px]' />
          </a>
          <a href='https://www.linkedin.com/in/balashekaran-p-r-57706' className='text-white hover:text-[#0A66C2] transition-all duration-150 ease-in-out rounded-2xl  glow-2 p-2 '>
            <FaLinkedin className='text-[28px]' />
          </a>
          <a href='' className='text-white hover:text-white transition-all duration-150 ease-in-out rounded-2xl glow-2  p-2 '>
            <RiTwitterXFill className='text-[28px]' />
          </a>
          <a href='https://www.instagram.com/captain_bala_003/?hl=en' className='text-white hover:text-fuchsia-500 transition-all duration-150 ease-in-out rounded-2xl  glow-2  p-2'>
            <FaInstagram className='text-[28px]' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer