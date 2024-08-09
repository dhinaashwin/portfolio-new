import React from 'react'
import './About.css'
import AnimateScroll from './AnimateScroll';
const About = () => {
  const UpVariants = {
    hidden: { opacity: 0, y: 150 }, // Start off-screen
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeIn' } }, // Move to final position
  }; 
  return (
    <section id="about">
    <AnimateScroll animationVariants={UpVariants} className="flex flex-col justify-center w-[100vw] py-20 Parent-About">
        <div className="text-[28px]">
          <h3 className="text-center font-bold uppercase">
          The design is
            <span className=" text-red-600"> not just a product,</span>
            <br/>
            it’s a 
            <span className=" text-red-600" > philosophy</span>
            </h3>
        </div>
        <div className="flex md:flex-row sm:flex-col items-center justify-center gap-10 mt-16 div-2">
            <div className="flex flex-col items-start md:w-[20%] sm:w-[70%] gap-2 px-2 py-1">
              <img src="https://res.cloudinary.com/dhina11/image/upload/v1722968178/programmer_v_02_kas5vw.jpg" alt="" srcset=""  className=""/>
              <h2>FrontEnd</h2>
              <p>Im a frontend developer with a passion for building beautiful and functional web applications</p>
            </div>
            <div className="flex flex-col items-start md:w-[20%] sm:w-[70%] gap-2 px-2 py-1">
              <img src="https://res.cloudinary.com/dhina11/image/upload/v1722968231/webdesign2_a5ry2d.jpg" alt="" />
              <h2>Web Designer</h2>
              <p>Im a web designer with a passion for building beautiful and functional web applications.</p>
            </div>
        </div>
   </AnimateScroll>
    </section>
  )
}

export default About