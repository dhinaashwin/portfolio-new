import React from 'react';
import datas from '../Datas/SkillsData';
import './Skills.css'
import AnimateScroll from './AnimateScroll';
const Skills = () => {
  const UpVariants1 = {
    hidden: { opacity: 0, y: 10 }, // Start off-screen
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeIn' } }, // Move to final position
  };
  const UpVariants2 = {
    hidden: { opacity: 0, y: 10 }, // Start off-screen
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeIn' } }, // Move to final position
  };
  return (
    <section id="skills">
    <AnimateScroll animationVariants={UpVariants1} className="flex justify-center items-center flex-wrap gap-10 w-[100vw] py-20 flex-col skills-container">
      <h2 className="font-bold text-[32px] pt-8">
        MY <span className="text-red-700">SKILLS</span> 
      </h2>
      <div className="md:w-[30%] sm:w-[75%] flex justify-center gap-20 flex-wrap">
      {datas.map((data, index) => (
        <AnimateScroll animationVariants={UpVariants2} key={index} className=' flex flex-col items-center justify-center flex-wrap relative'>
          <div className='circle bg-slate-100 w-[100px] h-[100px] flex items-center justify-center icon-div'>
          <img src={data.img} className='w-[50px] h-[50px]'></img>
          </div>
          <div className='flex justify-center'>
          <p className='absolute -bottom-10 text-[14px]'>{data.name}</p>
          </div> 
        </AnimateScroll>
      ))}
      </div>
    </AnimateScroll>
      </section>
  );
}
export default Skills;
