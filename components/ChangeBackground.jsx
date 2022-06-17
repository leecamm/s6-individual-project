import React, { useState } from "react";

const ChangeBackground = ({ handleSelected }) => {
  const css = [
    {
      title: "gradient",
      value: "gradient",
      backgroundImage: "linear-gradient(to bottom, #085467, #afa7bb, #f4c0b3)",
    },
    {
      title: "ghibli",
      value: "ghibli",
      backgroundImage: `url("https://i.imgur.com/fR3mm1b.png")`,
    },
    {
      title: "spirited away",
      value: "spirited away",
      backgroundImage: `url("https://i.pinimg.com/originals/0f/c3/66/0fc366d67d9a75839731d9efd9a3eb3a.jpg")`,
    },
    {
      title: "ponyo",
      value: "ponyo",
      backgroundImage: `url("https://i.pinimg.com/originals/8a/c9/d5/8ac9d5a9fa509eac97766da5582ac23a.jpg")`,
    },
  ];
  return (
    <div className="flex flex-col pt-10">
      <p className="font-semibold md:text-lg text-gray-50">theme</p>
      <select
        onChange={handleSelected}
        className="w-32 md:w-36 h-10 border-2 bg-gray-100 bg-opacity-0 text-white mt-2 rounded-full pl-2 border-white hover:border-gray-100 cursor-pointer"
      >
        {css.map((item) => (
          <option
            key={item.title}
            value={JSON.stringify(item)}
            className="bg-gray-200 bg-opacity-50 text-gray-900"
          >
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChangeBackground;
