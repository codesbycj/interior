import React from "react";
import Brand1 from "../../assets/brand/1.png";
import Brand2 from "../../assets/brand/2.png";
import Brand3 from "../../assets/brand/3.png";
import Brand4 from "../../assets/brand/4.png";
import Brand5 from "../../assets/brand/5.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import { SlideLeft } from "../../animation/animate";
import { SlideRight } from "../../animation/animate";



function Brands() {
  return (
    <>
    <div className="container py-14 ">
      <div className='flex flex-wrap justify-center
       lg:justify-between gap-5 '>
         <motion.img
          variants={SlideLeft(0.7)}
          initial='initial'
       whileInView="animate"
          src={Brand1}
          alt="Brand 1"
          className="w-[110px] md:w-[120px]"
        />
         <motion.img
          variants={SlideUp(0.7)}
          initial='initial'
       whileInView="animate"
          src={Brand2}
          alt="Brand 2"
          className="w-[110px] md:w-[120px]"
        />
         <motion.img
          variants={SlideUp(0.7)}
          initial='initial'
       whileInView="animate"
          src={Brand3}
          alt="Brand 3"
          className="w-[110px] md:w-[120px]"
        />
         <motion.img
          variants={SlideUp(0.7)}
          initial='initial'
       whileInView="animate" 
          src={Brand4}
          alt="Brand 4"
          className="w-[110px] md:w-[120px]"
        />
         <motion.img
          variants={SlideRight(0.7)}
          initial='initial'
       whileInView="animate"
          src={Brand5}
          alt="Brand 5"
          className="w-[110px] md:w-[120px]"
        />

      </div>


    </div>
    
    </>
  )
}

export default Brands