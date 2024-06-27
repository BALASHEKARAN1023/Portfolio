import NaviBar from './Component/NaviBar'
import About from './Component/About';
import Footer from './Component/Footer';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import Serivces from './Component/Serivces';
import Banner from './Component/Banner';
import { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },2000)// 2000
  }, [])
  return (
    <>
      {
        loading ?
          <div className='bgimage h-[100vh] flex justify-center items-center'>
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#d946ef"
              ariaLabel="ball-triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
          :
          <div className="bg-slate-900" >
            {/* <DemoCard/>  */}
            <NaviBar />
            <Banner />
            <About />
            <Serivces />
            <Projects />
            <Contact />
            <Footer />
          </div>
      }
    </>
  )
}

export default App
