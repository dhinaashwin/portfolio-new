import React from 'react';
import './Work.css'
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import AnimateScroll from './AnimateScroll';
const Work = () => {
  const UpVariants = {
    hidden: { opacity: 0, y: 100 }, // Start off-screen
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeIn' } }, // Move to final position
  };
  const datas = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/dhina11/image/upload/v1722971989/Screenshot_2024-08-07_003852_kzujif.png',
      name: 'Youtube Clone',
      language:'React Js'
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/dhina11/image/upload/v1722971999/Screenshot_2024-08-07_004157_zoeszm.png',
      name: 'Ecommerce Site',
      language:'MERN'
    },
    {
      id: 3,
      image: 'https://res.cloudinary.com/dhina11/image/upload/v1722971988/Screenshot_2024-08-07_004402_z85mji.png',
      name: 'Instagram Clone',
      language:'Next Js'
    },
    {
      id: 4,
      image: 'https://res.cloudinary.com/dhina11/image/upload/v1722971983/Screenshot_2024-08-07_004814_qxh97a.png',
      name: 'ChatBot Ai',
      language:'Next Js'
    },
    {
      id: 5,
      image: 'https://res.cloudinary.com/dhina11/image/upload/v1722971983/Screenshot_2024-08-07_004906_qw5s1q.png',
      name: 'Portfolio Website',
      language:'React Js'
    },
  ];

  return (
    <section id="work">
    <div className="pBgColor work-container flex flex-col items-center w-[100vw] py-20">
        <h2 className="font-bold text-[26px] mt-2 uppercase text-center">My Creative <span className="text-red-700">Portfolio Section</span></h2>
      <div className="work-grid flex flex-wrap md:w-[80%] sm:w-[100%] justify-center md:gap-20 sm:gap-8 mt-8">
        {datas.map((data) => (
          <AnimateScroll animationVariants={UpVariants} key={data.id} className="md:w-[250px] sm:w-[250px] bg-white flex flex-col items-center rounded-[20px] gap-4 pb-5 relative div-1">
            <div className="img-div">
            <img src={data.image} alt={data.name} className="work-image w-[250px] h-[250px] object-cover p-4  rounded-[40px]" />
            <FaEye className='absolute top-[43%] text-white left-[30%] text-[24px] icon opacity-0'/>
            <FaGithub className='absolute top-[43%] text-white left-[60%] text-[24px] icon opacity-0'/>
            </div>
            <h3 className="work-title font-bold">{data.name}</h3>
            <h3 className="work-language absolute bg-white top-[70%] px-3 py-1 rounded-xl">{data.language}</h3>
          </AnimateScroll>
        ))}
      </div>
    </div>
            </section>
  );
};
export default Work;
