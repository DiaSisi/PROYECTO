import React from "react";
import './Footer.css'
// Icons
import {
  RiCheckboxBlankCircleFill,
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="flex items-center justify-between flex-col w-[100vw] p-5" style={{ backgroundColor: 'white', paddingBottom: '62vh' }}>

      <div style={{ fontFamily: "Arial" }} className="font-bold text-[#360153]">
        Get The Latest news and information about your favorite authors or books
      </div>

      <div>
        <div className="relative mt-5 rounded-md shadow-sm flex items-center mb-0 ">
          <input type="text"
            name="price"
            id="price"
            className="h-15 w-[40vw] border-b-2 rounded-2xl bg-[#5c5c5c34] border-gray-300 text-black placeholder-transparent focus:outline-none focus:border-gray-500"
            placeholder="Enter your email address">

          </input>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <div className="btn btn-primary">Sign Up</div>
          </div>
        </div>
      </div>

      <div className="flex flex-row mt-5 items-start justify-between gap-4 border-b border-black-500 pb-8">
        <div className="flex flex-col items-start gap-5 mt-5">
          <div style={{ fontFamily: "Arial" }} className="font-bold text-[#360153]">
            SERENDIPITY
          </div>
          <div style={{ fontFamily: "Arial" }} className="font-bold text-[#5c5c5cad]">
            support@serendipity.com
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 mt-5">
          <div style={{ fontFamily: "Arial" }} className="font-bold text-[#360153]">
            EXPLORE
          </div>
          <a href="#" className="footer-text-explore"> About Us</a>
          <a href="#" className="footer-text-explore"> Term & Conditions</a>
          <a href="#" className="footer-text-explore"> Customer Service</a>
          <a href="#" className="footer-text-explore"> Contact Us</a>
        </div>
        <div className="flex flex-col items-start gap-5 mt-5">
          <div style={{ fontFamily: "Arial" }} className="font-bold text-[#360153]">
            FOLLOW US
          </div>
          <div className="flex items-start justify-start gap-3">

            <a href="#" className="block text-[#5c5c5cad] rounded-full">
              {" "}
              <FaFacebook size={30} />{" "}
            </a>
            <a href="#" className="block text-[#5c5c5cad] rounded-full">
              {" "}
              <RiInstagramLine size={30} />{" "}
            </a>
            <a href="#" className="block text-[#5c5c5cad] rounded-full">
              {" "}
              <FaXTwitter size={30} />{" "}
            </a>
            <a href="#" className="block text-[#5c5c5cad] rounded-full">
              {" "}
              <FaGithub size={30} />{" "}
            </a>
          </div>
        </div>
        {/* Social media */}
        <nav className="flex items-center gap-4">

        </nav>
      </div>
      <div className="text-black text-center">
        <p>
          Copyright  &copy;  2024 SERENDIPITY -"Find the Unexpected"
        </p>
      </div>

      {/* <div className="mt-8">
        <h3 className="text-lg font-bold text-black text-center md:text-left">
          Company
        </h3>
        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#"
            className="text-black hover:text-dark-purple visited:text-black mt-4 transition-color duraction-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-black hover:text-dark-purple visited:text-black mt-4 transition-color duraction-300"
          >
            Press
          </a>
          <a
            href="#"
            className="text-black hover:text-dark-purple visited:text-black mt-4 transition-color duraction-300"
          >
            Investors
          </a>
          <a
            href="#"
            className="text-black hover:text-dark-purple visited:text-black mt-4 transition-color duraction-300"
          >
            Events
          </a>
          <a
            href="#"
            className="text-black hover:text-dark-purple visited:text-black mt-4 transition-color duraction-300"
          >
            Terms of use
          </a>
          <a
            href="#"
            className="text-black hover:text-dark-purple visited:text-black mt-4 transition-color duraction-300"
          >
            Privacy policy
          </a>
          <button
            type="button"
            className="btn btn-primary w-[20%]"
          >
            Contact Us
          </button>
        </nav>
      </div> */}
      {/* <div className="mt-20">
        <p className="text-black-300 text-center">
          © 2024 Serendipity. All rights reserved.
        </p>
      </div> */}
    </footer>
  );
};

export default Footer;