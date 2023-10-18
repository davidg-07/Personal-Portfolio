import React from "react";
import myImage from "../images/IMG_0448.jpg";
import { TypeAnimation } from "react-type-animation";
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

const Main = () => {
  return (
    <div id="Main">
      <img
        className="w-full h-screen object-cover object-left"
        src={myImage}
        alt="My Image"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/25">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold">I'm David Galvez</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4">
            I'm A 
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Coder",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={20}/>
            <FaFacebook className="cursor-pointer" size={20}/>
            <FaInstagram className="cursor-pointer" size={20}/>
            <FaLinkedin className="cursor-pointer" size={20}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
