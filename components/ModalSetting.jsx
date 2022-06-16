import React from "react";
import IconClose from "./icons/IconClose";

const ModalSetting = ({
  pomodoroRef,
  shortBreakRef,
  longBreakRef,
  openSetting,
  setOpenSetting,
  updateTimeDefaultValue,
}) => {
  const inputs = [
    {
      value: "pomodoro",
      ref: pomodoroRef,
      defaultValue: 25,
    },
    {
      value: "short break",
      ref: shortBreakRef,
      defaultValue: 5,
    },
    {
      value: "long break",
      ref: longBreakRef,
      defaultValue: 15,
    },
  ];

  return (
    <>
      <div
        className={`absolute h-full w-full left-0 top-0 bg-black bg-opacity-30 ${
          openSetting ? "" : "hidden"
        }`}
        onClick={() => setOpenSetting(false)}
      ></div>
      <div
        className={`max-w-xl bg-gray-600 absolute sm:w-96 w-11/12 left-1/2 top-1/2 p-5 rounded-lg shadow-md ${
          openSetting ? "" : "hidden"
        }`}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="text-gray-200 flex justify-between items-center font-semibold">
          <h1>Time setting</h1>
          <button type="button" onClick={() => setOpenSetting(false)}>
            <IconClose />
          </button>
        </div>
        <div className="h-0.5 w-full bg-gray-300 my-4"></div>
        <div className="flex gap-5">
          {inputs.map((input, index) => {
            return (
              <div key={index}>
                <h1 className="text-gray-200 text-sm mb-2">{input.value}</h1>
                <input
                  defaultValue={input.defaultValue}
                  type="number"
                  min="0"
                  className="w-full text-gray-50 bg-gray-200 bg-opacity-30 py-2 rounded-full text-left pl-4 pr-2 border-2 border-gray-200 hover:bg-gray-500"
                  ref={input.ref}
                />
              </div>
            );
          })}
        </div>
        <div className="flex gap-4 my-2">
          <button
            className="bg-gray-100 hover:bg-gray-50 w-2/6 mt-5 text-gray-800 rounded-full py-2"
            onClick={updateTimeDefaultValue}
          >
            save
          </button>
          <div
            className="text-sm underline flex items-center text-gray-300 hover:text-gray-200 mt-5 cursor-pointer"
            onClick={() => setOpenSetting(false)}
          >
            cancel
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(ModalSetting);
