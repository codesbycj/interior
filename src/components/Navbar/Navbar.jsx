import React from 'react'
import logo from '../../assets/logo.png'
import { motion } from "framer-motion";



const NavLinks = [
  {
  id : 1,
  title: 'About',
  link: '#',
},
{
  id : 2,
  title: 'Services',
  link: '#',
},
{
  id : 3,
  title: 'Projects',
  link: '#',
},
{
  id : 4,
  title: 'Contact',
  link: '#',
}

]



function Navbar() {
  return (
    <>
    <motion.div 
    initial={{y:-100}}
    animate={{y:0}}
    transition={{duration:0.5}}
    className="container py-4 flex justify-between items-center">
      {/* logo section  */}
    <div className='flex items-center gap-2'>
      <img src={logo} alt="Logo" className='w-12' />
      <span className='font-bold text-3xl '>Interior</span>
    </div>
      {/* nav links  */}
      <div className='hidden md:block '>
        {NavLinks.map((link) => (
          <a key={link.id} href={link.link} className='mx-4
          text-sm font-semibold hover:border-b-2 border-b-black duration-100'>
            {link.title}
          </a>
        ))}
      </div>
      {/* button section  */}
      <div>
        <button className='primary-btn duration-300'>Try For Free</button>
      </div>
    </motion.div>
    </>
  )
}

export default Navbar