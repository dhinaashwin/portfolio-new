import React from 'react';
import './HomePage.css';
import AnimateScroll from './AnimateScroll';

const HomePage = () => {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
      };
    
      const slideInVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
      };
    
      const scaleInVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
      };
    

  return (
    <section id="home">
    <div className="pBgColor w-[100vw] md:py-[10rem] sm:py-[6rem] flex md:flex-row sm:flex-col items-center md:gap-20 sm:gap-2 Parent justify-around md:pr-[150px]">
      {/* DIV_1 */}
      <AnimateScroll animationVariants={fadeInVariants}>
        <div className="flex flex-col gap-4 div-1">
          <div className="bg-white py-2 flex items-center gap-6 justify-center px-4 rounded-xl font-semibold">
            <img
              src="https://res.cloudinary.com/dhina11/image/upload/v1722942445/pngwing.com_23_hztpjk.png"
              className="w-16"
              alt="Dhina Ashwin"
            />
            <p>
              Hello Iam
              <br />
              DHINA ASHWIN
            </p>
          </div>
          <div className="bg-white py-2 text-right px-4 rounded-xl font-semibold">
            WEB DEVELOPER
            <br />
            WEB DESIGNER
          </div>
        </div>
      </AnimateScroll>

      {/* DIV_2 */}
      <AnimateScroll animationVariants={slideInVariants}>
        <div className="div-2 flex md:flex-row sm:flex-col relative gap-16">
          <div className="flex div-2-1 justify-center">
            <img
              src="https://res.cloudinary.com/dhina11/image/upload/v1722943434/NEWPNG_kqkn0j.png"
              className="relative top-[80px]"
              alt="Main graphic"
            />
          </div>
          <AnimateScroll animationVariants={scaleInVariants} className="relative">
            <div className="flex md:flex-col md:items-center gap-10 mt-20  div-2-2 justify-center sm:items-start">
            <div className=" bg-white circle flex items-center md:w-28 md:h-28 sm:w-20 sm:h-20 md:absolute md:-left-5">
                <img src=' https://res.cloudinary.com/dhina11/image/upload/v1722952768/pngwing.com_24_yifaoi.png' className='md:w-28 sm:w-20' />
            </div>
            <div className=" bg-white circle flex items-center md:w-36 md:h-36 sm:w-28 sm:h-28 justify-center md:absolute md:left-0 md:top-[55%]">
                <img src='https://res.cloudinary.com/dhina11/image/upload/v1722952768/pngwing.com_25_tcj0d2.png' className='md:w-20 sm:w-12' />
            </div>
            <div className=" bg-white circle flex items-center md:w-20 md:h-20 sm:w-12 sm:h-12 justify-center md:absolute md:-bottom-28 md:-left-5">
                <img src='https://res.cloudinary.com/dhina11/image/upload/v1722952769/pngwing.com_26_c9h8zb.png' className='md:w-12 sm:w-8' />
            </div>
            </div>
          </AnimateScroll>
        </div>
      </AnimateScroll>
    </div>
    </section>
  );
};

export default HomePage;
