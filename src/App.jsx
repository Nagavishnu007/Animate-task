import React from 'react';
import strength from './assets/stregth-img.jpg';
import women from './assets/women-img.webp';
import nature from './assets/Nature-img.webp';
import { FaArrowAltCircleRight } from "react-icons/fa";

import 'animate.css';

const App = () => {

  return (

    <div className="w-full h-screen flex justify-center items-center">

      <div className="w-3/4 h-80 flex cursor-pointer text-white font-bold text-xl">

        
        <div className="w-1/3 relative group transform hover:w-full hover:duration-700 delay-150">

          <img
            src={strength}
            alt="strength-img"
            className="w-full h-full rounded-l-3xl object-cover"
          />

          <h3 className="absolute top-2 left-2">STRENGTH</h3>

          <FaArrowAltCircleRight className="absolute top-3 right-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        </div>

        <div className="w-1/2 relative group transform hover:w-full hover:duration-700 delay-150">

          <img
            src={women}
            alt="women-img"
            className="w-full h-full object-cover"
          />

          <h3 className="absolute top-2 left-2">MOBILITY</h3>
    
          <FaArrowAltCircleRight className="absolute top-3 right-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        </div>

      
        <div className="w-1/3 relative group transform hover:w-full hover:duration-700 delay-150">

          <img
            src={nature}
            alt="nature-img"
            className="w-full h-full rounded-r-3xl object-cover"
          />

          <h3 className="absolute top-2 left-2">DRILLS</h3>
          
          <FaArrowAltCircleRight className="absolute top-3 right-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        </div>

      </div>

    </div>
  );
};

export default App;

