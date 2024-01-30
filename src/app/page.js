"use client";
import Link from 'next/link';
import "../../sass/index.scss";
import AppContext from './Context/store';
import Navbar from './component/Navbar';
import { useState } from 'react';
import Home from './component/Home';
const Page = () => {
  const [bgColor, setbgColor] = useState("black");
  const [color, setColor] = useState("white");
  return (
    <AppContext.Provider value={{ bgColor, setbgColor, color, setColor }}>
      <Home />
    </AppContext.Provider>);
};

export default Page;
