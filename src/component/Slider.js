import React from "react";
// import img from "../asset/image/bg_image_1.jpg";
import img from "../asset/image/bg_image_7.avif";

const Slider = () => {
  return ( 
    <div style={{ backgroundImage: `url(${img})` }} className="h-[90vh] flex justify-center items-center">
     <p className="font-bold text-[50px] text-white text-center uppercase tracking-[4px] pt-6">  welcome  <br /> I'm adnan qadeer <br /> Software Developer </p>
    </div>
  );
};

export default Slider;
