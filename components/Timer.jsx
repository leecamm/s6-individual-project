import React from "react";
import IconReset from "./icons/IconReset";
import IconSetting from "./icons/IconSetting";

const Timer = ({
  stage,
  switchStage,
  getTickingTime,
  seconds,
  ticking,
  setTicking,
  reset,
  setOpenSetting,
}) => {
  const options = ["pomodoro", "short break", "long break"];
  return (
    <div>
      <div className="flex justify-between gap-2 md:gap-0">
        {options.map((option, index) => {
          return (
            <button
              key={index}
              onClick={() => switchStage(index)}
              className={`${
                index === stage ? "text-gray-900 bg-gray-100" : ""
              } w-36 md:w-40 h-11 border-2 rounded-full font-semibold text-sm md:text-base tracking-wide text-white  hover:text-gray-900 hover:bg-gray-100 active:text-gray-900 active:bg-gray-100`}
            >
              {option}
            </button>
          );
        })}
      </div>
      <div className="mt-14 mb-10">
        <h1 className=" text-8xl lg:text-9xl font-bold select-none m-0 tracking-normal text-white items-center justify-center flex">
          {getTickingTime()}:{seconds.toString().padStart(2, "0")}
        </h1>
      </div>
      <div className="flex justify-center items-center gap-x-6">
        <button
          type="button"
          className=""
          onClick={() => setOpenSetting((value) => !value)}
        >
          <IconSetting />
        </button>
        <button
          type="button"
          className="px-[3.25rem] py-2 text-xl border-2 rounded-full bg-gray-100 shadow-md hover:bg-gray-200 font-semibold tracking-wide"
          onClick={() => setTicking((ticking) => !ticking)}
        >
          {ticking ? "stop" : "start"}
        </button>
        <button type="button" className="" onClick={reset}>
          <IconReset />
        </button>
      </div>
    </div>
  );
};

export default React.memo(Timer);
