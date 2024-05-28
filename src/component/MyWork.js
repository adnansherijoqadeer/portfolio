import React from "react";
import img1 from "../asset/image/protfolio1.PNG";
import img2 from "../asset/image/Capture2.PNG";
import img3 from "../asset/image/Capture3.PNG";
import img4 from "../asset/image/Capture4.PNG";
import img5 from "../asset/image/Capture5.PNG";
import img6 from "../asset/image/Capture6.PNG";
import img7 from "../asset/image/Capture7.PNG";
import img8 from "../asset/image/Capture8.PNG";
// transform: scale(1.1);
const MyWork = () => {
  const images = [img1, img3, img4, img5, img6, img7, img8];
  const imgesArray = images.slice(0,3)
  return (
    <div className="mb-10 px-10">
      <h1 className="text-5xl font-bold font-sans text-center capitalize text-[#181818]">
        my work
      </h1>
      
      <div className="grid grid-cols-3 gap-5 mx-auto">
        {images.map((imges) => (
          <div className="">
            <img src={imges} alt="" className="h-[100%]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
