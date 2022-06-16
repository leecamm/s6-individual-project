import React from "react";
import Image from "next/image";
import { default as logo } from "../public/static/logo.svg";

const Header = () => {
  return (
    <div className="">
      <div className="flex gap-x-5 md:justify-end pt-5 justify-center">
        <a href="#about">
          <p className="font-medium text-white text-sm md:text-base">about</p>
        </a>
        <a href="#contact">
          <p className="font-medium text-white text-sm md:text-base">contact</p>
        </a>
      </div>
      <div className="cursor-pointer logo flex justify-center mx-auto mb-14 md:m-0">
        <Image src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
