import React from "react";
import img10 from "../asset/image/bg_image_7.avif";
const Slider = () => {
  return (
    <div style={{ backgroundImage: `url(${img10})`, height: '90vh', backgroundSize: 'cover', backgroundPosition: 'center' }} className="flex justify-center items-center opacity-[0.9]">
      <div className="text-center">
        <h1 className="font-bold text-[50px] text-white uppercase tracking-[4px] pt-6">
          Welcome <br /> I'm Adnan Qadeer <br /> Software Developer
        </h1>
      </div>
    </div>
  );
};

export default Slider;