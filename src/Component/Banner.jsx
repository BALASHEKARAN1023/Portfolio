import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { TypeAnimation } from 'react-type-animation';
import pro from '../assets/pro.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div id="Home" className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'>
            <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
                <h1 data-aos='fade-right' className='text-[48px] font-semibold mb-8 leading-normal uppercase'>Welcome To <span className='text-sky-400'>
                    My Website I'm</span><br />
                    <span className='text-fuchsia-400'><TypeAnimation
                        sequence={[
                            "Balashekaran P R",
                            1500,
                            "Student",
                            1500,
                            "Mern Stack Developer",
                            1500,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    /></span>
                </h1>

                <p data-aos='fade-left'>I am studying for a Bachelor of Engineering in Computer Science and Engineering at Karpagam College of Engineering.</p>
                <div className='flex mt-8 gap-2'>
                    <div className='flex items-center justify-center'>
                        <div className='flex space-x-2'>
                            <a href='https://github.com/BALASHEKARAN1023' className='text-fuchsia-600 hover:text-fuchsia-500 rounded-2xl glow p-2 '>
                                <AiFillGithub className='text-[28px]' />
                            </a>
                            <a href='https://www.linkedin.com/in/balashekaran-p-r-57706' className='text-fuchsia-600 hover:text-fuchsia-500 rounded-2xl glow p-2 '>
                                <FaLinkedin className='text-[28px]' />
                            </a>
                            <a href='' className='text-fuchsia-600 hover:text-fuchsia-500 rounded-2xl glow p-2 '>
                                <RiTwitterXFill className='text-[28px]' />
                            </a>
                            <a href='https://www.instagram.com/captain_bala_003/?hl=en' className='text-fuchsia-600 hover:text-fuchsia-500 rounded-2xl glow p-2 '>
                                <FaInstagram className='text-[28px]' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img data-aos='fade-up' src={pro} width={290} height={290} className=' rounded-full border-2 p-1 border-teal-500 img_glow hover:border-fuchsia-500 '></ img>
        </div>
    )
}

export default Banner