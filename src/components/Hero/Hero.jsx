import React from 'react'
import HeroImage from '../../assets/hero.png'
import { motion } from "framer-motion";
import { SlideUp } from '../../animation/animate';
import { SlideLeft } from '../../animation/animate';


function Hero() {
  return (
    <>
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-2  md:min-h-[450px] gap-10">
         <div className="flex flex-col
          justify-center gap-5 md:pr-8  lg:pr-14 text-center
            md:text-left pt-20 md:pt-0   px-4 sm:px-10 lg:px-0">
           <motion.h1 
            variants={SlideUp(0.5)}
            initial='initial'
               whileInView="animate"
           className='text-3xl font-bold '>
            SKETCH LUXURY INTERIOR DESIGN
          </motion.h1>
          <motion.p  variants={SlideUp(0.5)}
            initial='initial'
               whileInView="animate" className='text-sm text-gray-500'>
            Bring your dreams to life with one-on-one
             design help & hand picked
             products tailored to your style
             ,space and budget.
          </motion.p>
          <div   className='space-x-4 md:pt-2'>
            <motion.button variants={SlideUp(0.8)}
            initial='initial'
               whileInView="animate" className='border-black px-4 py-2
              text-sm lg:text-base border-[1px]
             shadow-[5px_5px_0px_0px_#6c6c6c]  bg-black text-white  '>
                GET STARTED</motion.button>
            <motion.button variants={SlideUp(1.1)}
            initial='initial'
               whileInView="animate" className='primary-btn'>
                CONTACT US</motion.button>
          </div>
         </div>
         <div className='flex justify-center items-center flex-col'>
         <motion.img 
          variants={SlideLeft(0.5)}
          initial='initial'
             whileInView="animate"
  src={HeroImage}
  alt="Hero"
  className='w-[80%] max-w-[400px] md:scale-125 object-contain'
/>

         </div>
        </div>
      </div>
       
    
    </>
  )
}

export default Hero