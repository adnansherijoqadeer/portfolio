import React from "react";
import aboutimg from "../asset/image/send.png";


const About = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://www.canva.com/design/DAGGzmuf8jk/UY1Utvck_qVSU6GWkBu3Kw/edit';
    link.download = 'https://www.canva.com/design/DAGGzmuf8jk/UY1Utvck_qVSU6GWkBu3Kw/edit';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="flex justify-center gap-10 mt-20">
      <div className="w-[524px] h-[483px] items-card relative">
        <img src={aboutimg} alt="About" className="object-cover w-full h-full rounded-lg shadow-lg z-[999]" />
      </div>
      <div className="w-[50%]">
        <h1 className="hover:translate-y-[-5px] transition-all duration-300 ease-linear hover:text-[#fe964d] text-[52px] leading-[55px] capitalize text-[#181818] font-sans font-bold">
          adnan qadeer <span>Softwere Developer</span>
        </h1>
        <p className="font-normal text-base leading-[32px] text-[#716c80] capitalize pt-8">
          I am a seasoned web developer with over 4 years of experience,
          specializing in both web and mobile development. Crafting exceptional
          digital experiences is not just my profession, but my passion. I
          believe that quality is paramount, and I strive to deliver excellence
          in every project. Quality, to me, is not an accident; it is the
          outcome of deliberate intention, sincere effort, intelligent
          direction, and skillful execution. I am dedicated to creating
          innovative solutions that exceed expectations and contribute to the
          success of every project I undertake..
        </p>
        <div className="flex gap-10">
          <p className="font-bold capitalize text-lg text-[#181818] font-sans">
            From :
            <span className="font-medium text-lg text-[#716c80]">
              gilgit Baltistain
            </span>
          </p>
          <p className="font-bold capitalize text-lg text-[#181818] font-sans">
            lives in :
            <span className="font-medium text-lg text-[#716c80]">gilgit</span>
          </p>
        </div>
        <button onClick={downloadCV} className="hover:translate-y-[-10px] transition-all duration-300 ease-linear hover:buttonshadow mt-10 capitalize bg-[#fe964d] rounded-md text-base font-bold py-3 px-8">
          download cv
        </button>
      </div>
    </div>
  );
};

export default About;
