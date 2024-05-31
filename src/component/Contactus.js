import React from "react";
import adress from "../asset/image/adress.png";
import email from "../asset/image/mail.png";
import share from "../asset/image/share.png";
import call from "../asset/image/telephone-call.png";
import facbook from "../asset/image/facebook (1).png";
import github from "../asset/image/github.png";
import link from "../asset/image/linkedin.png";

const Contactus = () => {
  const contactus = [
    {
      img: adress,
      contact: "My Address",
      live: "Gilgit Baltistan",
    },
    {
      img: share,
      contact: "Social Profiles",
      facebook: facbook,
      linkedin: link,
      github: github,
    },
    {
      img: email,
      contact: "Email",
      live: "adnanqadeer43@gmail.com",
    },
    {
      img: call,
      contact: "Call Me",
      live: "+9203145272553",
    },
  ];

  return (
    <div className="bg-gray-900 py-10">
      <h1 className="hover:translate-y-[-5px] transition-all duration-300 ease-linear hover:text-[#fe964d] text-5xl font-bold font-sans text-center capitalize text-white">
        Get in touch
      </h1>
      <div className="grid grid-cols-2 gap-4 w-[80%] mx-auto mt-12">
        {contactus.map((item, index) => (
          <div key={index} className="flex bg-gray-800 py-6 px-7">
            <img src={item.img} alt={item.contact} className="self-center hover:translate-y-[-5px] transition-all duration-300 ease-linear" />
            <div className="ml-3">
              <p className="text-xl font-sans font-bold text-white pb-1 hover:text-[#fe964d]">
                {item.contact}
              </p>
              {item.live && (
                <p className="font-medium text-sm text-white font-sans hover:text-[#fe964d]">
                  {item.live}
                </p>
              )}
              {item.linkedin && item.github && item.facebook && (
                <div className="flex items-center gap-4">
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <img src={item.facebook} alt="Facebook" className="w-6 h-6 hover:translate-y-[-5px] transition-all duration-300 ease-linear " />
                  </a>
                  <a href="https://www.linkedin.com/in/adnanqadeer43" target="_blank" rel="noopener noreferrer">
                    <img src={item.linkedin} alt="LinkedIn" className="w-6 h-6 hover:translate-y-[-5px] transition-all duration-300 ease-linear" />
                  </a>
                  <a href="https://github.com/adnanqadeer43" target="_blank" rel="noopener noreferrer">
                    <img src={item.github} alt="GitHub" className="w-6 h-6 hover:translate-y-[-5px] transition-all duration-300 ease-linear" />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contactus;