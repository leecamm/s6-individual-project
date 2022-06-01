import React, { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Home = () => {
  return (
    <div className="px-5 lg:px-36">
      <Head>
        <title>Finish My Task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
