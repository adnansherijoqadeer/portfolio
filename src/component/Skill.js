import React, { useState } from "react";
const Skill = () => {
  const minVal = 0;
  const maxVal = 100;

  const calcPercentage = (min, max, val) => {
    return (((val - min) / (max - min)) * 100).toFixed(0);
  };

  return (
    <div className="mt-20 mb-9 px-10">
      <h1 className="text-5xl font-bold font-sans text-center capitalize text-[#181818]">
        my skill
      </h1>
      <div className="flex justify-around gap-9 items-center mt-10">
        <p className="capitalize text-xl text-[#181818] font-sans font-bold underline">
          Coding skills
        </p>
        <p className="capitalize text-xl text-[#181818] font-sans font-bold underline">
          FramWork Skills
        </p>
      </div>
      <div className="flex justify-between gap-9 items-center mt-10">
        <div className="w-full">
          <div className="mb-1 flex items-end justify-between gap-2 text-slate-700 dark:text-slate-300">
            <span className="text-base uppercase font-sans text-[#181818] font-semibold">
              thml
            </span>
            <span className="text-base uppercase font-sans text-[#181818] font-semibold">
              90%
            </span>
          </div>
          <div
            className="flex h-4 w-full overflow-hidden rounded-xl bg-slate-300 dark:bg-slate-800"
            role="progressbar"
            aria-label="default progress bar"
            aria-valuenow={90}
            aria-valuemin={minVal}
            aria-valuemax={maxVal}
          >
            <div
              className="h-full rounded-xl bg-[#874DED]"
              style={{ width: `${calcPercentage(minVal, maxVal, 90)}%` }}
            ></div>
          </div>
        </div>
        <div className="w-full">
          <div className="mb-1 flex items-end justify-between gap-2 text-slate-700 dark:text-slate-300">
            <span className="text-base uppercase font-sans text-[#181818] font-semibold">
              tailwind
            </span>
            <span className="text-base uppercase font-sans text-[#181818] font-semibold">
              88%
            </span>
          </div>
          <div
            className="flex h-4 w-full overflow-hidden rounded-xl bg-slate-300 dark:bg-slate-800"
            role="progressbar"
            aria-label="default progress bar"
            aria-valuenow={88}
            aria-valuemin={minVal}
            aria-valuemax={maxVal}
          >
            <div
              className="h-full rounded-xl bg-[#874DED]"
              style={{ width: `${calcPercentage(minVal, maxVal, 88)}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-9 items-center mt-10">
        <div className="w-full">
          <div className="mb-1 flex items-end justify-between gap-2 text-slate-700 dark:text-slate-300">
            <span className="text-base uppercase font-sans text-[#181818] font-semibold">
              CSS
            </span>
            <span className="text-base uppercase font-sans text-[#181818] font-semibold">
              99%
            </span>
          </div>
          <div
            className="flex h-4 w-full overflow-hidden rounded-xl bg-slate-300 dark:bg-slate-800"
            role="progressbar"
            aria-label="default progress bar"
            aria-valuenow={99}
            aria-valuemin={minVal}
            aria-valuemax={maxVal}
          >
            <div
              className="h-full rounded-xl bg-[#874DED]"
              style={{ width: `${calcPercentage(minVal, maxVal, 98)}%` }}
            ></div>
          </div>
        </div>
        <div className="w-full">
          <div className="mb-1 flex items-end justify-between gap-2 text-slate-700 dark:text-slate-300">
            <span className="text-base uppercase font-sans text-[#181818] font-semibold">
              material ui
            </span>
            <span className="text-base uppercase font-sans text-[#181818] font-semibold">
              89%
            </span>
          </div>
          <div
            className="flex h-4 w-full overflow-hidden rounded-xl bg-slate-300 dark:bg-slate-800"
            role="progressbar"
            aria-label="default progress bar"
            aria-valuenow={89}
            aria-valuemin={minVal}
            aria-valuemax={maxVal}
          >
            <div
              className="h-full rounded-xl bg-[#874DED]"
              style={{ width: `${calcPercentage(minVal, maxVal, 89)}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-9 items-center mt-10">
        <div className="w-full">
          <div className="mb-1 flex items-end justify-between gap-2 text-slate-700 dark:text-slate-300">
            <span className="text-base uppercase font-sans text-[#181818] font-semibold">
              react
            </span>
            <span className="text-base uppercase font-sans text-[#181818] font-semibold">
              89%
            </span>
          </div>
          <div
            className="flex h-4 w-full overflow-hidden rounded-xl bg-slate-300 dark:bg-slate-800"
            role="progressbar"
            aria-label="default progress bar"
            aria-valuenow={90}
            aria-valuemin={minVal}
            aria-valuemax={maxVal}
          >
            <div
              className="h-full rounded-xl bg-[#874DED]"
              style={{ width: `${calcPercentage(minVal, maxVal, 89)}%` }}
            ></div>
          </div>
        </div>
        <div className="w-full">
          <div className="mb-1 flex items-end justify-between gap-2 text-slate-700 dark:text-slate-300">
            <span className="text-base uppercase font-sans text-[#181818] font-semibold">
              bootstrap
            </span>
            <span className="text-base uppercase font-sans text-[#181818] font-semibold">
              88%
            </span>
          </div>
          <div
            className="flex h-4 w-full overflow-hidden rounded-xl bg-slate-300 dark:bg-slate-800"
            role="progressbar"
            aria-label="default progress bar"
            aria-valuenow={88}
            aria-valuemin={minVal}
            aria-valuemax={maxVal}
          >
            <div
              className="h-full rounded-xl bg-[#874DED]"
              style={{ width: `${calcPercentage(minVal, maxVal, 88)}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-9 items-center mt-10">
        <div className="w-full">
          <div className="mb-1 flex items-end justify-between gap-2 text-slate-700 dark:text-slate-300">
            <span className="text-base uppercase font-sans text-[#181818] font-semibold">
              nextjs
            </span>
            <span className="text-base uppercase font-sans text-[#181818] font-semibold">
              78%
            </span>
          </div>
          <div
            className="flex h-4 w-full overflow-hidden rounded-xl bg-slate-300 dark:bg-slate-800"
            role="progressbar"
            aria-label="default progress bar"
            aria-valuenow={90}
            aria-valuemin={minVal}
            aria-valuemax={maxVal}
          >
            <div
              className="h-full rounded-xl bg-[#874DED]"
              style={{ width: `${calcPercentage(minVal, maxVal, 78)}%` }}
            ></div>
          </div>
        </div>
        <div className="w-full">
          <div className="mb-1 flex items-end justify-between gap-2 text-slate-700 dark:text-slate-300">
            <span className="text-base uppercase font-sans text-[#181818] font-semibold">
              emotion styled
            </span>
            <span className="text-base uppercase font-sans text-[#181818] font-semibold">
              81%
            </span>
          </div>
          <div
            className="flex h-4 w-full overflow-hidden rounded-xl bg-slate-300 dark:bg-slate-800"
            role="progressbar"
            aria-label="default progress bar"
            aria-valuenow={88}
            aria-valuemin={minVal}
            aria-valuemax={maxVal}
          >
            <div
              className="h-full rounded-xl bg-[#874DED]"
              style={{ width: `${calcPercentage(minVal, maxVal, 81)}%` }}
            ></div>
          </div>
        </div>
      </div>

      <h1 className="text-5xl mt-16 font-bold font-sans text-center capitalize text-[#181818]">
        other skill
      </h1>
      <div className="flex justify-between gap-9 items-center mt-10">
        <div className="w-full">
          <div className="mb-1 flex items-end justify-between gap-2 text-slate-700 dark:text-slate-300">
            <span className="text-base uppercase font-sans text-[#181818] font-semibold">
            GitHub
            </span>
            <span className="text-base uppercase font-sans text-[#181818] font-semibold">
              58%
            </span>
          </div>
          <div
            className="flex h-4 w-full overflow-hidden rounded-xl bg-slate-300 dark:bg-slate-800"
            role="progressbar"
            aria-label="default progress bar"
            aria-valuenow={90}
            aria-valuemin={minVal}
            aria-valuemax={maxVal}
          >
            <div
              className="h-full rounded-xl bg-[#874DED]"
              style={{ width: `${calcPercentage(minVal, maxVal, 75)}%` }}
            ></div>
          </div>
        </div>
        <div className="w-full">
          <div className="mb-1 flex items-end justify-between gap-2 text-slate-700 dark:text-slate-300">
            <span className="text-base uppercase font-sans text-[#181818] font-semibold">
              wordpress
            </span>
            <span className="text-base uppercase font-sans text-[#181818] font-semibold">
              51%
            </span>
          </div>
          <div
            className="flex h-4 w-full overflow-hidden rounded-xl bg-slate-300 dark:bg-slate-800"
            role="progressbar"
            aria-label="default progress bar"
            aria-valuenow={88}
            aria-valuemin={minVal}
            aria-valuemax={maxVal}
          >
            <div
              className="h-full rounded-xl bg-[#874DED]"
              style={{ width: `${calcPercentage(minVal, maxVal, 51)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
