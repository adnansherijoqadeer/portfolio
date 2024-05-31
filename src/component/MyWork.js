import React from "react";
import img1 from "../asset/image/protfolio1.PNG";
import img2 from "../asset/image/Capture2.PNG";
import img3 from "../asset/image/Capture3.PNG";
import img4 from "../asset/image/Capture4.PNG";
import img5 from "../asset/image/Capture5.PNG";
import img6 from "../asset/image/Capture6.PNG";
import img7 from "../asset/image/Capture7.PNG";
import img8 from "../asset/image/Capture8.PNG";
import img9 from "../asset/image/Capture9.PNG";
import "../App.css";
const MyWork = () => {
  const images = [
    {
      
      img:img9,
      url:"https://reactailwind-project.vercel.app/admin/default",
    },
    {
      
      img:img4,
      url:"https://socialmediadishboard.vercel.app/",
    },
    {
      
      img:img5,
      url:"https://astounding-biscochitos-4abc5e.netlify.app/",
    },
    {
      
      img:img6,
      url:"https://www.travl.se/",
    },
    {
      
      img:img1,
      url:"https://zoffiereactresuma.vercel.app/",
    },
    {
      
      img:img3,
      url:"https://farmwebsite-gray.vercel.app/",
    },
    {
      
      img:img7,
      url:"https://smartbookv1.herokuapp.com/",
    },
    {
      
      img:img8,
      url:"https://northcodex.com/",
    },
  ]
  return (
    <div className="mb-10 px-10">
      <h1 className="hover:translate-y-[-5px] transition-all duration-300 ease-linear hover:text-[#fe964d] text-5xl font-bold font-sans text-center capitalize text-[#181818]">
        my work
      </h1>

      <div className="mt-20 grid grid-cols-3 gap-8 mx-auto">
        {images.map((imges,index) => (
          <div className="items-card" key={index}>
            <div className="inner">
              <a href={imges.url} target="_blank" rel="noopener noreferrer" className="hover:buttonshadow hover:translate-y-[-2px] mt-4 capitalize bg-transparent rounded-md text-base font-bold py-1 px-10 border border-[#fe964d] w-18 mx-auto hover:text-[#fe964d]">
                  View
              </a>
            </div>
            <img src={imges.img} alt="" className="h-[100%]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
