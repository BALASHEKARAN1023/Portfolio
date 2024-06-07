import { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import Logo2 from '../assets/logo2.png';

const NaviBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const [navbarBg, setNavbarBg] = useState(false);
  useEffect(() => {
    const changeNavbarBg = () => {
      if (window.scrollY >= 50) { // Change background after scrolling down 50px
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener('scroll', changeNavbarBg);

    return () => {
      // Cleanup function to avoid memory leaks and unnecessary event handling after the component is unmounted.
      window.removeEventListener('scroll', changeNavbarBg);
    };
  }, []);

  const content = (
    <div className='lg:hidden block absolute top-24 w-full left-0 right-0 bg-slate-900 transition'>
      <ul className='text-center text-xl p-20'>
        <Link spy={true} smooth={true} activeClass="active" to="Home">
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Home</li>
        </Link>
        <Link spy={true} smooth={true} activeClass="active" to="About">
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>About</li>
        </Link>
        <Link spy={true} smooth={true} activeClass="active" to="Services">
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Skills</li>
        </Link>
        <Link spy={true} smooth={true} activeClass="active" to="Projects">
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Projects</li>
        </Link>
        <Link spy={true} smooth={true} activeClass="active" to="Contact">
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Contact</li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav className={`fixed top-0 w-full z-50 ${navbarBg ? 'backdrop-blur-md bg-opacity-60' : 'bg-slate-900'}`}>
      <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border bs2 border-slate-800'>
        <div className='flex items-center flex-1'>
          <img
            src={Logo2}
            width={100}
            height={100}
            alt='logo'
            className='rounded-full border-0 p-1 sm:p-4 lg:p-1 md:p-1 hover:border-fuchsia-500'
          />
        </div>
        <div className='lg:flex md:flex flex-1 items-center justify-end font-normal hidden'>
          <ul className='flex gap-8 mr-16 text-[18px]'>
            <Link spy={true} smooth={true} activeClass="active" to="Home">
              <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Home</li>
            </Link>
            <Link spy={true} smooth={true} activeClass="active" to="About">
              <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>About</li>
            </Link>
            <Link spy={true} smooth={true} activeClass="active" to="Services">
              <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Skills</li>
            </Link>
            <Link spy={true} smooth={true} activeClass="active" to="Projects">
              <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Projects</li>
            </Link>
            <Link spy={true} smooth={true} activeClass="active" to="Contact">
              <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Contact</li>
            </Link>
          </ul>
        </div>
        <div>
          {click && content}
        </div>
        <button className='block pt-5 md:hidden sm:hidden transition' onClick={handleClick}>
          {click ? <FaTimes className='size-10' /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
}

export default NaviBar;
