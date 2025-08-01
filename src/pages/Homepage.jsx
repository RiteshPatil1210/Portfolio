import { motion } from "framer-motion";
import React from 'react';
import { img } from '../assets/Index';
import { FaGithub, FaInstagram, FaLinkedin, FaApple } from 'react-icons/fa';

function Homepage() {
  return (
    <div className='pt-10 pl-5 md:pt-20 md:pl-20'>
      <div className="md:flex items-center gap-x-8 pb-10 md:pb-28 flex-col md:flex-row">
        <img
          src={img}
          alt="Image of Myself"
          className='h-60 w-60 md:h-120 md:w-120 rounded-full object-cover flex-shrink-0 mx-auto md:mx-0 mb-8 md:mb-0'
        />

        <div className='md:pr-20 text-center md:text-left'>
          <h3 className='text-xl md:text-2xl font-bold font-serif'>Hello, Myself</h3>
          <h1 className='mt-2 md:mt-4 text-4xl md:text-5xl font-bold font-serif '>Ritesh <span className="text-[rgb(245,195,85)]">Patil</span></h1>
          <p className='mt-2 md:mt-4 text-base md:text-lg italic px-4 md:px-0 pr-10'>
            And i'm a Web Developer 🎓 I am a passionate and dedicated 3rd-year MSBTE diploma student in Information Technology.
            💻 Skilled in HTML, CSS, Java, C, and C++, I enjoy building responsive websites and solving real-world coding problems.
            🚀 I have hands-on experience in developing basic projects and continuously strive to learn new technologies.
            🌱 Currently exploring backend development and database integration to enhance my full-stack skills..rrrrrrrrrrrrrrr
          </p>

          <div className='flex mt-6 gap-x-4 justify-center md:justify-start'>
            <a
              href="https://www.instagram.com/ritesh_1210_"
              target="_blank"
              rel="noopener noreferrer"
              className='text-pink-600 hover:text-pink-700 transition duration-300'
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/ritesh-patil-8a8b19337?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BI53LrjDlS5ycTLvR%2BPEyMA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className='text-blue-700 hover:text-blue-800 transition duration-300'
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/RiteshPatil1210"
              target="_blank"
              rel="noopener noreferrer"
              className='text-gray-800 hover:text-gray-900 transition duration-300'
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className='text-gray-400 hover:text-gray-500 transition duration-300'
            >
              <FaApple size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;