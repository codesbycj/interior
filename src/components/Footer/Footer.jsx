import React from "react";
import Logo from "../../assets/Logo.png";
import { FaPhone } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animate";

const Footer = () => {
  return (
    <motion.footer
      variants={SlideLeft(0.2)}
      initial="initial"
      whileInView="animate"
    >
      <div className="container pb-3 pt-11">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company info section */}
          <div className="space-y-4 font-semibold">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="" className="w-6" />
              <p className="text-xl font-semibold">Interior</p>
            </div>
            <p>Aswan, Egypt</p>
            <p>@ 2025 MF All rights reserved</p>
          </div>
          {/* Footer Link */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">About us</h1>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Designer</a>
                </li>
                <li>
                  <a href="#">Craftmanship</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Support</h1>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#">FAQ's</a>
                </li>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#">Care Guide</a>
                </li>
                <li>
                  <a href="#">Guaranty</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact section */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Contact us</h1>
            <ul className="space-y-4 text-base font-semibold">
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a href="#">+20 1223575572</a>
              </li>
              <li className="flex items-center space-x-3">
                <LuMessageSquare />
                <a href="mailto:hoodafatah@gmail.com">Email</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-5 border-gray-500/40" />
        {/* bottom section */}
        <p className="pt-5 text-sm font-semibold text-center ">
          &copy; 2025 Mahmoud Fattah. All rights reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
