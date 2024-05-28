import React from "react";
import webdev from "../asset/image/webdevelp.png";
import uiux from "../asset/image/uiux.png";
import edit from "../asset/image/edit.png";

const OurServices = () => {
  const data = [
    {
      img: webdev,
      title: "Web Developement",
      para: "i can help our clients to translate there bussines into modern and user friendly web apps that help them grow there bussines",
    },
    {
      img: uiux,
      title: "UX/UI Design",
      para: "i am mainly working on design and development, Graphic, Mobile app development digital marketing and many more.",
    },
    {
      img: edit,
      title: "Video Editing",
      para: " Video editing involves creatively assembling and refining video clips to tell a compelling story. It includes adding transitions, effects, and audio to enhance the visual experience. This process transforms raw footage into polished, engaging content.",
    },
  ];
  return (
    <div className="mt-20">
      <h1 className="text-5xl font-bold font-sans text-center capitalize text-[#181818]">
        OUR SERVICES
      </h1>
      <div className="flex justify-evenly  gap-6 mb-9 px-10 mt-10">


        <div className="flex justify-evenly  gap-6 mb-9 px-10 mt-10">
      {data.map((data)=>(
        
        <div className="bg-[#fff] hover:translate-y-[-10px] shadow-cardshadow py-7 min-h-[22rem] px-5 flex justify-center items-center flex-col w-[33%] transition-all duration-300 ease-linear">
            <img src={data.img} alt="" className="pb-6" />
            <h1 className="text-[#181818] text-[22px] font-sans font-bold text-center">{data.title}</h1>
            <p className="font-medium text-center text-base text-[#6b6b84] capitalize">
             {data.para}
            </p>
          </div>
        ))}
        </div>


      </div>
    </div>
  );
};

export default OurServices;
