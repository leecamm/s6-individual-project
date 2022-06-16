import React, { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

import Header from "../components/Header";

const Home = () => {
  const css = [
    {
      title: "gradient",
      value: "gradient",
      backgroundImage: "linear-gradient(to bottom, #085467, #afa7bb, #f4c0b3)",
    },
  ];
  const baseStyle = {
    minWidth: "100vw",
    minHeight: "100vh",
  };

  const [selectedImg, setSelectedImg] = useState(css[0]);

  return (
    <div className="px-5 lg:px-36 bg" style={{ ...baseStyle, ...selectedImg }}>
      <Head>
        <title>Finish My Task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
};

export default Home;
