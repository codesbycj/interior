
import React from 'react'
import { FaVectorSquare } from 'react-icons/fa';
import {FaPenToSquare } from 'react-icons/fa6';
import {BiSolidDollarCircle } from 'react-icons/bi';
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import { SlideDown} from "../../animation/animate";
import { SlideLeft } from "../../animation/animate";
import { SlideRight } from "../../animation/animate";



// const ServicesCard = [
// {
// id:1,
// title:"Luxury Facilities",
// description:"lorem ipsum dolor sit amet consectetur adipisicing elit, voluptatibus.",
// icon: <FaVectorSquare />,
// link: "#"
// },
// {
// id:2,
// title:" Affordable Price",
// description:"lorem ipsum dolor sit amet consectetur adipisicing elit, voluptatibus.",
// icon: <FaPenToSquare />,
// link: "#"
// },
// {
// id:3,
// title:" Smooth Workflow",
// description:"lorem ipsum dolor sit amet consectetur adipisicing elit, voluptatibus.",
// icon: <BiSolidDollarCircle />,
// link: "#"
// }
// ]


function Services() {
  return (
    <>
    <motion.div 
    variants={SlideDown(0.5)}
    initial="initial"
         whileInView="animate"
     className="heading space-y-2 max-w-[500px]  mx-auto text-center ">
      <h1 className='text-3xl font-bold text-center  font-serif'><q>What We Provide</q></h1>
      <p className='text-center text-xl'>Bring your dreams home to
         life with one-on-one design to help & hand picked products.</p>
    </motion.div>
    <div className="container py-14">
      <div className="grid grid-cols-1
       md:grid-cols-3  gap-5 ">

     
          
       {/* {ServicesCard.map((item) => {
         return (
           <div key={item.id} className="card hover:bg-black hover:text-white 
            border-[1px] border-black/30 p-6 space-y-4">
             <span className="icon inline-block
              rounded-full border-black
               border-[1px] 
              text-xl  p-3">
              {item.icon}
              </span>
             <p className="title text-2xl font-bold font-serif">
              {item.title}
             </p>
             <p className="description
              text-gray-400 text-xl "  >
              {item.description}
             </p> 
             <a href={item.link} className="link border-b border-black  inline-block uppercase font-semibold ">
              Learn More
              </a>
           </div>
         )
       })}
       */}

     
           <motion.div  
            variants={SlideDown(0.7)}
            initial="initial"
           whileInView="animate"
             className="card group hover:bg-black hover:text-white  hover:shadow-[9px_9px_0px_0px_rgba(0,0,0,0.2)] duration-300
            border-[1px] border-black/30 p-6 space-y-4">
             <span className="icon inline-block
              rounded-full border-black
               border-[1px] 
              text-xl  p-3 group-hover:border-white">
              <FaVectorSquare />
              </span>
             <p className="title text-2xl font-bold font-serif">
              Luxury Facilities
             </p>
             <p className="description
              text-gray-500 text-xl group-hover:text-gray-300 "  >
              lorem ipsum dolor sit amet consectetur adipisicing elit, voluptatibus.
             </p> 
             <a href="#" className="link border-b border-black  inline-block uppercase font-semibold group-hover:border-white ">
              Learn More
              </a>    
           </motion.div>

           <motion.div variants={SlideUp(0.7)}
            initial="initial"
                 whileInView="animate"  className="card bg-black  text-white 
            border-[1px] border-black/30 p-6 space-y-4  shadow-[9px_9px_0px_0px_rgba(0,0,0,0.2)]">
             <span className="icon inline-block
              rounded-full border-white
               border-[1px] 
              text-xl  p-3">
              <FaPenToSquare />
              </span>
             <p className="title text-2xl font-bold font-serif">
              Affordable Price
             </p>
             <p className="description
              text-gray-300 text-xl "  >
              lorem ipsum dolor sit amet consectetur adipisicing elit, voluptatibus.
             </p> 
             <a href="#" className="link border-b border-white  inline-block uppercase font-semibold ">
              Learn More
              </a>     
           </motion.div>


           <motion.div  variants={SlideDown(0.7)}
            initial="initial"
                 whileInView="animate" className="card group hover:bg-black hover:text-white  hover:shadow-[9px_9px_0px_0px_rgba(0,0,0,0.2)] duration-300
            border-[1px] border-black/30 p-6 space-y-4">
             <span className="icon inline-block
              rounded-full border-black
               border-[1px] 
              text-xl  p-3 group-hover:border-white">
              <BiSolidDollarCircle />
              </span>
             <p className="title text-2xl font-bold font-serif">
              Smooth Workflow
             </p>
             <p className="description
              text-gray-700 text-xl  group-hover:text-gray-300"  >
              lorem ipsum dolor sit amet consectetur adipisicing elit, voluptatibus.
             </p> 
             <a href="#" className="link border-b group-hover:border-white border-black  inline-block uppercase font-semibold ">
              Learn More
              </a>     
           </motion.div>
           
        </div>

    </div>

    </>

  )
}

export default Services