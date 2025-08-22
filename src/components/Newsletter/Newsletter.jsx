import React from "react";
import { delay, motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const Newsletter = () => {
  return (
    <div className="max-w-[500px] mx-auto space-y-5 py-14">
      <motion.h1
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        className="font-serif text-3xl font-bold text-center"
      >
        Subsribe to our Newsletter
      </motion.h1>
      <motion.p
        variants={SlideUp(0.4)}
        initial="initial"
        whileInView="animate"
        className="max-w-[300px] mx-auto text-gray-500 text-sm text-center"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed libero
        doloremque ab eum!
      </motion.p>
      {/* form here */}
      <motion.div
        variants={SlideUp(0.7)}
        initial="initial"
        whileInView="animate"
        className="!mt-10 flex justify-center"
      >
        <input
          type="text"
          placeholder="Enter your email"
          className="px-4 py-4 ring-1 ring-gray-300"
        />
        <button className="px-6 py-4 text-white uppercase bg-black">
          Subscribe
        </button>
      </motion.div>
    </div>
  );
};

export default Newsletter;
